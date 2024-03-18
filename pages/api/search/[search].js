const { connectToDatabase } = require("../../../lib/mongodb");

export default async function handler(req, res) {
  let { search } = req.query;

  try {
    let { db } = await connectToDatabase();
    let placesWithEvents = await db
      .collection("places")
      .aggregate([
        {
          $match: {
            name: { $regex: search, $options: "i" },
            enabled: true,
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
      places: JSON.parse(JSON.stringify(placesWithEvents)),
      success: true,
    });
  } catch (error) {
    return res.json({
      places: new Error(error).message,
      success: false,
    });
  }
}
