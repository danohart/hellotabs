import crypto from "crypto";
import { connectToDatabase } from "../../../lib/mongodb";
const ObjectId = require("mongodb").ObjectId;

const VALID_REPORT_TYPES = [
  "place_closed",
  "deal_unavailable",
  "wrong_info",
  "other",
];

function getAutoAction(reportType) {
  switch (reportType) {
    case "place_closed":
      return { type: "set_enabled_false", eventIndexes: null };
    case "deal_unavailable":
      return { type: "set_events_disabled", eventIndexes: null };
    default:
      return { type: "manual_review", eventIndexes: null };
  }
}

function hashIp(req) {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";
  const salt = process.env.IP_HASH_SALT || "default-salt";
  return crypto.createHash("sha256").update(ip + salt).digest("hex");
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    return handleGet(req, res);
  }
  if (req.method === "POST") {
    return handlePost(req, res);
  }
  return res.status(405).json({ error: "Method not allowed" });
}

async function handleGet(req, res) {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const { db } = await connectToDatabase();
    const reports = await db
      .collection("reports")
      .find({ status: { $in: ["pending", "auto_flagged"] } })
      .sort({ createdAt: -1 })
      .toArray();

    return res.json({ reports: JSON.parse(JSON.stringify(reports)) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function handlePost(req, res) {
  const { placeId, reportType, message, website } = req.body;

  // Honeypot check — bots fill this field; silently succeed
  if (website) {
    return res.json({ success: true });
  }

  // Validate required fields
  if (!placeId || !reportType) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!VALID_REPORT_TYPES.includes(reportType)) {
    return res.status(400).json({ error: "Invalid report type" });
  }
  if (message && message.length > 500) {
    return res.status(400).json({ error: "Message too long (max 500 chars)" });
  }

  // Validate placeId format
  let placeObjectId;
  try {
    placeObjectId = new ObjectId(placeId);
  } catch {
    return res.status(400).json({ error: "Invalid place ID" });
  }

  try {
    const { db } = await connectToDatabase();

    // Verify the place exists and fetch denormalized fields
    const place = await db.collection("eventPlaces").findOne(
      { _id: placeObjectId },
      { projection: { name: 1, slug: 1, enabled: 1, events: 1 } }
    );
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }

    const ipHash = hashIp(req);
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Rate limit: 1 report per IP+place per 24h
    const recentCount = await db.collection("reports").countDocuments({
      ipHash,
      placeId: placeObjectId,
      createdAt: { $gte: oneDayAgo },
      status: { $in: ["pending", "approved", "auto_flagged"] },
    });
    if (recentCount > 0) {
      return res
        .status(429)
        .json({ error: "You've already reported this listing recently." });
    }

    // Spam cap: if 5+ pending reports for this place, auto-flag
    const pendingCount = await db.collection("reports").countDocuments({
      placeId: placeObjectId,
      status: "pending",
    });
    const status = pendingCount >= 5 ? "auto_flagged" : "pending";

    const report = {
      placeId: placeObjectId,
      placeName: place.name,
      placeSlug: place.slug,
      reportType,
      message: message || "",
      ipHash,
      honeypot: "",
      status,
      createdAt: new Date(),
      reviewedAt: null,
      reviewNote: null,
      autoAction: getAutoAction(reportType),
    };

    await db.collection("reports").insertOne(report);
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
