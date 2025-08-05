const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { token, placeId, updates } = req.body;

  // Simple token validation (you could make this more robust)
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    let { db } = await connectToDatabase();

    const allowedUpdates = {};
    if (updates.enabled !== undefined) allowedUpdates.enabled = updates.enabled;

    if (updates.events) {
      allowedUpdates.events = updates.events.map((event) => ({
        ...event,
        eventSchedule: event.eventSchedule,
        menu: event.menu,
        lastUpdated: new Date().toISOString(),
      }));
    }

    allowedUpdates.lastUpdated = new Date().toISOString();

    await db
      .collection("eventPlaces")
      .updateOne({ _id: new ObjectId(placeId) }, { $set: allowedUpdates });

    return res.json({ success: true, message: "Place updated successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
}
