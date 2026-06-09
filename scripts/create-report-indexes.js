// Run with: node scripts/create-report-indexes.js
// Creates indexes for the reports collection in the littletabs database
require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

async function main() {
  const uri =
    process.env.NODE_ENV === "production"
      ? process.env.MONGODB_URI
      : process.env.LOCAL_DATABASE_URL || process.env.MONGODB_URI;

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const col = db.collection("reports");

  // 90-day TTL — old reports self-delete
  await col.createIndex({ createdAt: 1 }, { expireAfterSeconds: 7776000 });
  console.log("Created TTL index on createdAt");

  // Rate-limit lookup: 1 report per IP+place per 24h
  await col.createIndex({ ipHash: 1, placeId: 1, createdAt: 1 });
  console.log("Created rate-limit index on ipHash + placeId + createdAt");

  // Admin queue fetch
  await col.createIndex({ status: 1, createdAt: -1 });
  console.log("Created admin queue index on status + createdAt");

  // Per-place spam cap count
  await col.createIndex({ placeId: 1, status: 1 });
  console.log("Created spam cap index on placeId + status");

  console.log("\nAll indexes created successfully.");
  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
