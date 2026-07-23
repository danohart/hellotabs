import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const authHeader = req.headers["authorization"];
  const token = authHeader?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const { db } = await connectToDatabase();

    const places = await db
      .collection("eventPlaces")
      .aggregate([
        {
          $match: {
            $or: [{ enabled: true }, { enabled: false, events: { $size: 0 } }],
          },
        },
        {
          $addFields: {
            lastUpdated: { $max: "$events.lastUpdated" },
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            slug: 1,
            neighborhood: 1,
            lastUpdated: 1,
            "location.streetAddress": 1,
          },
        },
        { $sort: { lastUpdated: 1 } },
      ])
      .toArray();

    return res.json({ places: JSON.parse(JSON.stringify(places)), success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
