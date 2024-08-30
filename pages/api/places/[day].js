const { connectToDatabase } = require("../../../lib/mongodb");
import { convertDayName } from "../../../lib/date";

export default async function handler(req, res) {
  let dayOfWeek = convertDayName(req.query.day);
  const { page = 1, limit = 10, currentTime } = req.query;

  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  const currentTimeInt = parseInt(currentTime, 10);

  try {
    let { db } = await connectToDatabase();
    let places = await db
      .collection("eventPlaces")
      .aggregate([
        {
          $match: {
            enabled: true,
            events: {
              $elemMatch: {
                keywords: "happyHour",
                "eventSchedule.byDay": dayOfWeek,
              },
            },
          },
        },
        {
          $project: {
            _id: 1,
            alt_id: 1,
            name: 1,
            location: 1,
            events: {
              $filter: {
                input: "$events",
                as: "event",
                cond: {
                  $and: [
                    { $eq: ["$$event.keywords", "happyHour"] },
                    {
                      $gt: [
                        {
                          $size: {
                            $filter: {
                              input: "$$event.eventSchedule",
                              as: "schedule",
                              cond: { $in: [dayOfWeek, "$$schedule.byDay"] },
                            },
                          },
                        },
                        0,
                      ],
                    },
                  ],
                },
              },
            },
            enabled: 1,
            featured: 1,
            neighborhood: 1,
            lastUpdated: 1,
          },
        },
        {
          $sort: { featured: -1 }, // Sort by featured descending
        },
        {
          $skip: (pageNumber - 1) * pageSize,
        },
        {
          $limit: pageSize,
        },
      ])
      .toArray();

    const totalPlaces = await db.collection("places").countDocuments({
      enabled: true,
      events: {
        $elemMatch: {
          keywords: "happyHour",
          "eventSchedule.byDay": dayOfWeek,
        },
      },
    });

    return res.json({
      places: JSON.parse(JSON.stringify(places)),
      totalPlaces,
      success: true,
    });
  } catch (error) {
    return res.json({
      places: new Error(error).message,
      success: false,
    });
  }
}
