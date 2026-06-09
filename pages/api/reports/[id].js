import { connectToDatabase } from "../../../lib/mongodb";
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.query;
  const authHeader = req.headers["authorization"];
  const token = authHeader?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  const { action, reviewNote, eventIndexes } = req.body;

  if (!["approve", "deny"].includes(action)) {
    return res.status(400).json({ error: "Invalid action" });
  }

  let reportObjectId;
  try {
    reportObjectId = new ObjectId(id);
  } catch {
    return res.status(400).json({ error: "Invalid report ID" });
  }

  try {
    const { db } = await connectToDatabase();

    const report = await db
      .collection("reports")
      .findOne({ _id: reportObjectId });

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    if (report.status === "approved" || report.status === "denied") {
      return res.status(400).json({ error: "Report has already been reviewed" });
    }

    if (action === "approve") {
      const autoAction = report.autoAction;

      if (autoAction.type === "set_enabled_false") {
        await db.collection("eventPlaces").updateOne(
          { _id: report.placeId },
          { $set: { enabled: false, lastUpdated: new Date().toISOString() } }
        );
      } else if (autoAction.type === "set_events_disabled") {
        const place = await db
          .collection("eventPlaces")
          .findOne({ _id: report.placeId }, { projection: { events: 1 } });

        if (place) {
          // Use eventIndexes from the PUT body (admin may have picked specific events)
          // Fall back to autoAction.eventIndexes, then null = remove all
          const indexes = eventIndexes !== undefined
            ? eventIndexes
            : autoAction.eventIndexes;

          let updatedEvents;
          if (indexes === null || indexes === undefined) {
            updatedEvents = [];
          } else {
            const indexSet = new Set(indexes);
            updatedEvents = place.events.filter(
              (_, i) => !indexSet.has(i)
            );
          }

          await db.collection("eventPlaces").updateOne(
            { _id: report.placeId },
            {
              $set: {
                events: updatedEvents,
                lastUpdated: new Date().toISOString(),
              },
            }
          );
        }
      }
      // manual_review: no DB mutation on eventPlaces
    }

    await db.collection("reports").updateOne(
      { _id: reportObjectId },
      {
        $set: {
          status: action === "approve" ? "approved" : "denied",
          reviewedAt: new Date(),
          reviewNote: reviewNote || null,
        },
      }
    );

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
