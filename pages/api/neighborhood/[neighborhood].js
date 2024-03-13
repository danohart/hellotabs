const { connectToDatabase } = require("../../../lib/mongodb");
import { convertDayName } from "../../../lib/date";

export default async function handler(req, res) {
  let { neighborhood } = req.query;
  let dayOfWeek = convertDayName(req.query.day);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  neighborhood = capitalizeFirstLetter(neighborhood);

  try {
    let { db } = await connectToDatabase();
    let places = await db
      // .find({ enabled: { $eq: true }, neighborhood: { $regex: neighborhood } })
      .collection("eventPlaces")
      .aggregate([
        {
          $match: {
            enabled: true,
            neighborhood: neighborhood,
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
          $sort: { featured: -1 },
        },
      ])
      .toArray();
    return res.json({
      places: JSON.parse(JSON.stringify(places)),
      success: true,
    });
  } catch (error) {
    return res.json({
      places: new Error(error).message,
      success: false,
    });
  }
}
