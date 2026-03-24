const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_KEY;

async function fetchGooglePlacesData(name, address) {
  const searchQuery = `${name} ${address}`;
  const url = "https://places.googleapis.com/v1/places:searchText";

  // Start with basic fields, then add enterprise fields
  const basicFields = [
    "places.id",
    "places.displayName",
    "places.types",
    "places.primaryType",
    "places.priceLevel",
  ];

  // Enterprise/Atmosphere fields (may require higher tier)
  const atmosphereFields = [
    "places.goodForGroups",
    "places.liveMusic",
    "places.outdoorSeating",
    "places.goodForWatchingSports",
    "places.servesBeer",
    "places.servesCocktails",
    "places.servesWine",
  ];

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": [...basicFields, ...atmosphereFields].join(","),
    },
    body: JSON.stringify({
      textQuery: searchQuery,
      locationBias: {
        circle: {
          center: { latitude: 41.8781, longitude: -87.6298 },
          radius: 50000.0,
        },
      },
      maxResultCount: 1,
    }),
  });

  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, placeId } = req.body;

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  if (!placeId) {
    return res.status(400).json({ error: "No placeId provided" });
  }

  try {
    const { db } = await connectToDatabase();

    const place = await db
      .collection("eventPlaces")
      .findOne({ _id: new ObjectId(placeId) });

    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    const address = [
      place.location?.streetAddress,
      place.location?.city || "Chicago",
      place.location?.state || "IL",
    ]
      .filter(Boolean)
      .join(", ");

    console.log("Searching for:", place.name, "at", address);
    const googleData = await fetchGooglePlacesData(place.name, address);
    console.log("Google API response:", JSON.stringify(googleData, null, 2));

    if (googleData.error) {
      return res.json({
        success: false,
        error: `Google API error: ${googleData.error.message || JSON.stringify(googleData.error)}`,
      });
    }

    if (googleData.places && googleData.places.length > 0) {
      const placeData = googleData.places[0];

      const googlePlacesUpdate = {
        placeId: placeData.id,
        types: placeData.types || [],
        primaryType: placeData.primaryType || null,
        priceLevel: placeData.priceLevel || null,
        attributes: {
          goodForGroups: placeData.goodForGroups || false,
          liveMusic: placeData.liveMusic || false,
          outdoorSeating: placeData.outdoorSeating || false,
          goodForWatchingSports: placeData.goodForWatchingSports || false,
          servesBeer: placeData.servesBeer || false,
          servesCocktails: placeData.servesCocktails || false,
          servesWine: placeData.servesWine || false,
        },
        lastFetched: new Date().toISOString(),
      };

      await db
        .collection("eventPlaces")
        .updateOne(
          { _id: new ObjectId(placeId) },
          { $set: { googlePlaces: googlePlacesUpdate } }
        );

      return res.json({
        success: true,
        googlePlaces: googlePlacesUpdate,
      });
    }

    return res.json({
      success: false,
      error: "No matching place found in Google Places",
      debug: {
        searchQuery: `${place.name} ${address}`,
        response: googleData,
      },
    });
  } catch (error) {
    console.error("Error fetching Google Places data:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
