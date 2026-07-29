// scripts/geocodeNeighborhoods.js
// One-time script: geocodes every neighborhood in lib/neighborhoods.json via
// the Google Geocoding API and writes the result to
// lib/neighborhoodCoordinates.json.
//
// Run manually:
//   node scripts/geocodeNeighborhoods.js
//
// Re-run any time to refresh the committed data file (e.g. after adding a
// neighborhood to lib/neighborhoods.json).
//
// Cost: ~$0.005 per neighborhood (Geocoding API), ~36 calls total.

require("dotenv").config({ path: ".env.local" });
const fs = require("fs");
const path = require("path");

const neighborhoods = require("../lib/neighborhoods.json");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_KEY;
if (!GOOGLE_MAPS_API_KEY) throw new Error("Missing GOOGLE_MAPS_KEY in .env.local");

async function geocode(neighborhood) {
  const address = `${neighborhood}, Chicago, IL`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${GOOGLE_MAPS_API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK" || !data.results?.length) {
    throw new Error(`Geocoding failed for "${neighborhood}": ${data.status}`);
  }

  const { lat, lng } = data.results[0].geometry.location;
  return { lat, lng };
}

async function run() {
  const coordinates = {};

  for (const neighborhood of neighborhoods) {
    try {
      const { lat, lng } = await geocode(neighborhood);
      coordinates[neighborhood] = { lat, lng };
      console.log(`  ✓  ${neighborhood} — ${lat}, ${lng}`);
    } catch (err) {
      console.error(`  ✗  ${neighborhood} — ${err.message}`);
    }

    // Avoid hammering the API
    await new Promise((r) => setTimeout(r, 200));
  }

  const outPath = path.join(__dirname, "../lib/neighborhoodCoordinates.json");
  fs.writeFileSync(outPath, JSON.stringify(coordinates, null, 2) + "\n");
  console.log(`\nWrote ${Object.keys(coordinates).length} coordinates to ${outPath}`);
}

run();
