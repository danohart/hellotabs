const { connectToDatabase } = require("../../lib/mongodb");
const { Client } = require("@googlemaps/google-maps-services-js");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const client = new Client({});

// Function to get the closest transit stop
async function getClosestTransitStop(lat, lon) {
  try {
    const response = await client.placesNearby({
      params: {
        location: { lat, lng: lon },
        rankby: "distance",
        type: "transit_station",
        key: GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      const closestStop = response.data.results[0];
      return {
        name: closestStop.name,
        location: closestStop.geometry.location,
        placeId: closestStop.place_id,
        types: closestStop.types,
      };
    }
    console.log(`No transit stops found for location: ${lat}, ${lon}`);
    return null;
  } catch (error) {
    console.error("Error fetching transit stop:", error.message);
    return null;
  }
}

// API endpoint to get venues with transit info
export default async function updateVenuesWithTransit(req, res) {
  try {
    const { db } = await connectToDatabase();

    // Fetch all venues from the database
    let venues = await db.collection("venues").find({}).toArray();

    let updatedCount = 0;
    let errorCount = 0;

    for (let venue of venues) {
      const { latitude, longitude } = venue.location;

      // Fetch closest transit stop for each venue
      const closestTransitStop = await getClosestTransitStop(
        latitude,
        longitude
      );

      if (closestTransitStop) {
        // Update each venue in the database with transit information
        await db.collection("venues").updateOne(
          { _id: venue._id },
          {
            $set: {
              closestTransitStop: closestTransitStop,
            },
          }
        );
        updatedCount++;
      } else {
        errorCount++;
        console.log(`Failed to find transit stop for venue: ${venue.name}`);
      }
    }

    // Fetch updated venues
    venues = await db.collection("venues").find({}).toArray();

    // Return updated venues and summary
    return res.status(200).json({
      venues,
      summary: {
        totalVenues: venues.length,
        updatedVenues: updatedCount,
        failedVenues: errorCount,
      },
      success: true,
    });
  } catch (error) {
    console.error("Error updating venues with transit data:", error);
    return res.status(500).json({ message: error.message, success: false });
  }
}
