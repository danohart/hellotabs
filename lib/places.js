import { connectToDatabase } from "./mongodb";
import { convertDayName } from "./date";

// Shared by the /api/places/[day] route (client-side revalidation) and the
// home page's getServerSideProps (initial paint) so the two never drift.
export async function getPlacesForDay(day) {
  const dayOfWeek = convertDayName(day);
  const { db } = await connectToDatabase();

  const places = await db
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
          slug: 1,
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

  return JSON.parse(JSON.stringify(places));
}
