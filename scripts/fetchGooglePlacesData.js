// scripts/fetchGooglePlacesData.js
// Fetches Google Places (New) data for all enabled places in the database
// and stores it in the `googlePlaces` field on each document.
//
// Run manually:
//   node scripts/fetchGooglePlacesData.js           ← local DB (default)
//   node scripts/fetchGooglePlacesData.js --prod    ← production DB
//
// Flags:
//   --prod      Target production database
//   --force     Re-fetch even if googlePlaces.lastFetched is recent
//   --dry-run   Print what would be updated without writing to DB
//
// Skips places where googlePlaces.lastFetched is within the last 30 days
// unless --force is passed.
//
// Cost: ~$0.032 per place (Text Search (New) API)

const isProd = process.argv.includes("--prod");
const isForce = process.argv.includes("--force");
const isDryRun = process.argv.includes("--dry-run");

require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_KEY;
const MONGODB_URI = isProd
  ? process.env.MONGODB_URI
  : process.env.LOCAL_DATABASE_URL;
const DB_NAME = process.env.DB_NAME;

if (!GOOGLE_MAPS_API_KEY) throw new Error("Missing GOOGLE_MAPS_KEY in .env.local");
if (!MONGODB_URI) throw new Error("Missing MONGODB_URI in .env.local");
if (!DB_NAME) throw new Error("Missing DB_NAME in .env.local");

async function fetchGooglePlacesData(name, address) {
  const url = "https://places.googleapis.com/v1/places:searchText";

  const basicFields = [
    "places.id",
    "places.displayName",
    "places.types",
    "places.primaryType",
    "places.priceLevel",
  ];

  const atmosphereFields = [
    "places.goodForGroups",
    "places.liveMusic",
    "places.outdoorSeating",
    "places.goodForWatchingSports",
    "places.servesBeer",
    "places.servesCocktails",
    "places.servesWine",
  ];

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": [...basicFields, ...atmosphereFields].join(","),
    },
    body: JSON.stringify({
      textQuery: `${name} ${address}`,
      locationBias: {
        circle: {
          center: { latitude: 41.8781, longitude: -87.6298 },
          radius: 50000.0,
        },
      },
      maxResultCount: 1,
    }),
  });

  return response.json();
}

async function run() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection("eventPlaces");

    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

    const query = { enabled: true };
    if (!isForce) {
      query.$or = [
        { "googlePlaces.lastFetched": { $exists: false } },
        { "googlePlaces.lastFetched": { $lt: thirtyDaysAgo.toISOString() } },
      ];
    }

    const places = await collection.find(query).toArray();

    console.log(`Database : ${isProd ? "PRODUCTION" : "local"}`);
    console.log(`Mode     : ${isDryRun ? "DRY RUN" : "live"}${isForce ? " + force" : ""}`);
    console.log(`Found    : ${places.length} place(s) to update\n`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const place of places) {
      const address = [
        place.location?.streetAddress,
        place.location?.city || "Chicago",
        place.location?.state || "IL",
      ]
        .filter(Boolean)
        .join(", ");

      if (!address) {
        console.log(`  SKIP  ${place.name} — no address`);
        skipCount++;
        continue;
      }

      try {
        const googleData = await fetchGooglePlacesData(place.name, address);

        if (googleData.error) {
          console.log(
            `  ✗     ${place.name} — API error: ${googleData.error.message || JSON.stringify(googleData.error)}`
          );
          errorCount++;
          continue;
        }

        if (!googleData.places || googleData.places.length === 0) {
          console.log(`  ✗     ${place.name} — not found on Google Places`);
          skipCount++;
          continue;
        }

        const p = googleData.places[0];

        const googlePlacesUpdate = {
          placeId: p.id,
          types: p.types || [],
          primaryType: p.primaryType || null,
          priceLevel: p.priceLevel || null,
          attributes: {
            goodForGroups: p.goodForGroups || false,
            liveMusic: p.liveMusic || false,
            outdoorSeating: p.outdoorSeating || false,
            goodForWatchingSports: p.goodForWatchingSports || false,
            servesBeer: p.servesBeer || false,
            servesCocktails: p.servesCocktails || false,
            servesWine: p.servesWine || false,
          },
          lastFetched: new Date().toISOString(),
        };

        if (isDryRun) {
          console.log(`  ~     ${place.name}`);
          console.log(`        primaryType: ${googlePlacesUpdate.primaryType}`);
          console.log(`        priceLevel:  ${googlePlacesUpdate.priceLevel}`);
          console.log(`        attributes:  ${JSON.stringify(googlePlacesUpdate.attributes)}`);
        } else {
          await collection.updateOne(
            { _id: place._id },
            { $set: { googlePlaces: googlePlacesUpdate } }
          );
          console.log(
            `  ✓     ${place.name} — ${googlePlacesUpdate.primaryType || "type unknown"}`
          );
        }

        successCount++;
      } catch (err) {
        console.error(`  ERROR ${place.name}:`, err.message);
        errorCount++;
      }

      // Avoid hammering the API
      await new Promise((r) => setTimeout(r, 200));
    }

    console.log(`\nDone.`);
    console.log(`  Updated : ${successCount}`);
    console.log(`  Skipped : ${skipCount}`);
    console.log(`  Errors  : ${errorCount}`);
  } finally {
    await client.close();
  }
}

run();
