const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;
import axios from "axios";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_KEY;

// Function to get latitude and longitude for a given address
async function getLatLon(address) {
  const baseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  const response = await axios.get(baseUrl, {
    params: {
      address: address,
      key: GOOGLE_MAPS_API_KEY,
    },
  });

  const results = response.data.results;

  if (results.length > 0) {
    const location = results[0].geometry.location;
    return { lat: location.lat, lon: location.lng };
  } else {
    return null;
  }
}

// Function to update places with geolocation data
export default async function updatePlacesWithGeo(req, res) {
  try {
    let { db } = await connectToDatabase();
    let places = await db
      .collection("eventPlaces")
      .find({ enabled: true }, { skipSessions: true })
      .toArray();

    for (let place of places) {
      const addressParts = [
        place.location.streetAddress,
        place.location.city,
        place.location.state,
      ];
      const fullAddress = addressParts.filter(Boolean).join(", ");

      if (fullAddress) {
        const location = await getLatLon(fullAddress);
        if (location) {
          await db.collection("eventPlaces").updateOne(
            { _id: place._id },
            {
              $set: {
                "location.geo": {
                  latitude: location.lat,
                  longitude: location.lon,
                },
              },
            }
          );
        }
      }
    }

    places = await db
      .collection("eventPlaces")
      .find({ enabled: true }, { projection: { skipSessions: 1 } })
      .toArray();

    return res.json({
      places: JSON.parse(JSON.stringify(places)),
      success: true,
    });
  } catch (error) {
    console.error("Error updating places with geo information:", error);
    return res.json({
      message: error.message,
      success: false,
    });
  }
}
