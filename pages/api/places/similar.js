const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  const { placeId, limit = 6 } = req.query;

  if (!placeId) {
    return res.status(400).json({ error: "placeId is required" });
  }

  try {
    const { db } = await connectToDatabase();

    const currentPlace = await db
      .collection("eventPlaces")
      .findOne({ _id: new ObjectId(placeId) });

    if (!currentPlace) {
      return res.status(404).json({ error: "Place not found" });
    }

    if (!currentPlace.googlePlaces?.primaryType) {
      return res.json({
        success: true,
        similar: [],
        citywide: [],
        message: "No primaryType for this place",
      });
    }

    const { primaryType } = currentPlace.googlePlaces;

    const baseQuery = {
      _id: { $ne: new ObjectId(placeId) },
      enabled: true,
      "googlePlaces.primaryType": primaryType,
    };

    // Query for similar in same neighborhood
    const similar = await db
      .collection("eventPlaces")
      .find({ ...baseQuery, neighborhood: currentPlace.neighborhood })
      .project({
        _id: 1,
        name: 1,
        slug: 1,
        neighborhood: 1,
        "googlePlaces.primaryType": 1,
        "googlePlaces.priceLevel": 1,
      })
      .limit(parseInt(limit))
      .toArray();

    // Query for similar across city (excluding current neighborhood)
    const citywide = await db
      .collection("eventPlaces")
      .find({ ...baseQuery, neighborhood: { $ne: currentPlace.neighborhood } })
      .project({
        _id: 1,
        name: 1,
        slug: 1,
        neighborhood: 1,
        "googlePlaces.primaryType": 1,
        "googlePlaces.priceLevel": 1,
      })
      .limit(parseInt(limit))
      .toArray();

    return res.json({
      success: true,
      similar: JSON.parse(JSON.stringify(similar)),
      citywide: JSON.parse(JSON.stringify(citywide)),
    });
  } catch (error) {
    console.error("Error fetching similar places:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
