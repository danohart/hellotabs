const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  let placeId = req.query.name.toString();

  try {
    let { db } = await connectToDatabase();

    // Lookup the corresponding event from the events collection
    let placeWithEvent = await db
      .collection("places")
      .aggregate([
        {
          $match: {
            _id: new ObjectId(placeId),
          },
        },
        {
          $lookup: {
            from: "events",
            localField: "_id",
            foreignField: "placeId",
            as: "matchedEvents",
          },
        },
        {
          $unwind: "$matchedEvents",
        },
        {
          $project: {
            _id: 1,
            alt_id: 1,
            name: 1,
            location: 1,
            enabled: 1,
            featured: 1,
            neighborhood: 1,
            lastUpdated: 1,
            matchedEvents: 1, // Include other fields if needed
          },
        },
      ])
      .toArray();

    return res.json({
      place: JSON.parse(JSON.stringify(placeWithEvent[0])),
      success: true,
    });
  } catch (error) {
    return res.json({
      placeWithEvent: new Error(error).message,
      success: false,
    });
  }
}
