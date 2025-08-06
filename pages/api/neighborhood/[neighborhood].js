const { connectToDatabase } = require("../../../lib/mongodb");
import { convertDayName } from "../../../lib/date";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

function unslugify(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const neighborhoods = [
  "Garfield Ridge",
  "Lincoln Park",
  "Ukrainian Village",
  "Irving Park",
  "Lakeview",
  "Near North Side",
  "Printers Row",
  "Streeterville",
  "North Center",
  "Edison Park",
  "West Loop",
  "West Town",
  "Wicker Park",
  "Logan Square",
  "Wrigleyville",
  "Lincoln Square",
  "Edgewater",
  "Portage Park",
  "Old Town",
  "West Rogers Park",
  "River North",
  "Avondale",
  "Humboldt Park",
  "South Loop",
  "Bucktown",
  "Rogers Park",
  "Norwood Park",
  "Near West Side",
  "Bridgeport",
  "Loop",
  "Noble Square",
  "Andersonville",
  "Uptown",
  "University Village",
  "Roscoe Village",
  "Pilsen",
];

// Create slug-to-neighborhood mapping
const slugToNeighborhood = neighborhoods.reduce((acc, neighborhood) => {
  acc[slugify(neighborhood)] = neighborhood;
  return acc;
}, {});

export default async function handler(req, res) {
  let { neighborhood: neighborhoodParam } = req.query;
  let dayOfWeek = convertDayName(req.query.day);

  // Convert slug back to neighborhood name for database lookup
  let neighborhood = slugToNeighborhood[neighborhoodParam] || neighborhoodParam;

  // Handle legacy capitalization
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // If it's not already in our mapping, try capitalizing (legacy support)
  if (!neighborhoods.includes(neighborhood)) {
    neighborhood = capitalizeFirstLetter(neighborhoodParam);
  }

  try {
    let { db } = await connectToDatabase();
    let places = await db
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
