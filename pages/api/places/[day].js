const { connectToDatabase } = require("../../../lib/mongodb");
import { convertDayName } from "../../../lib/date";

export default async function handler(req, res) {
  let dayOfWeek = convertDayName(req.query.day);

  try {
    let { db } = await connectToDatabase();

    // Retrieve places with events for the specified day of the week
    let placesWithEvents = await db
      .collection("places")
      .aggregate([
        {
          $match: {
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
          $match: {
            "matchedEvents.events.eventSchedule.byDay": dayOfWeek,
          },
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
        {
          $sort: { featured: -1 },
        },
      ])
      .toArray();

    return res.json({
      places: JSON.parse(JSON.stringify(placesWithEvents)),
      success: true,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.json({
      places: new Error(error).message,
      success: false,
    });
  }
}
