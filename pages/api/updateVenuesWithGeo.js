const { connectToDatabase } = require("../../lib/mongodb");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_KEY;

// Function to get place details (including address and lat/lon) for a given venue name
async function getPlaceDetails(venueName) {
  const baseUrl =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
  const url = `${baseUrl}?input=${encodeURIComponent(
    venueName
  )}&inputtype=textquery&fields=name,formatted_address,geometry&key=${GOOGLE_MAPS_API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.candidates;

  if (results.length > 0) {
    const place = results[0];
    return {
      name: place.name,
      address: place.formatted_address,
      location: place.geometry.location,
    };
  } else {
    return null;
  }
}

// Function to update MongoDB with venues and their details
export default async function updateVenuesWithGeo(req, res) {
  try {
    const venueNames = ["Metro Chicago"];

    let { db } = await connectToDatabase();

    for (let venueName of venueNames) {
      const placeDetails = await getPlaceDetails(venueName);
      if (placeDetails) {
        await db.collection("venues").insertOne({
          name: placeDetails.name,
          location: {
            streetAddress: placeDetails.address,
            latitude: placeDetails.location.lat,
            longitude: placeDetails.location.lng,
          },
        });
      }
    }

    const updatedVenues = await db.collection("venues").find({}).toArray();

    return res.json({
      venues: updatedVenues,
      success: true,
    });
  } catch (error) {
    console.error("Error updating venues with geo information:", error);
    return res.json({
      message: error.message,
      success: false,
    });
  }
}
