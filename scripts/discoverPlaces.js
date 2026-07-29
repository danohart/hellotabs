// scripts/discoverPlaces.js
// Sweeps every Chicago neighborhood (lib/neighborhoodCoordinates.json) for
// bars/restaurants/cafes via Google Places Nearby Search, cross-checks each
// candidate against OpenStreetMap (free `brand` tag = strong chain signal),
// dedupes against everything already in the DB, runs chain detection, and
// inserts survivors as disabled stubs — the same shape pages/admin/add.js
// creates by hand. New stubs show up in the existing /admin/stale review
// queue; nothing here goes live without a human approving it there.
//
// Run manually:
//   node scripts/discoverPlaces.js                       ← local DB, dry-run off
//   node scripts/discoverPlaces.js --dry-run              ← print, don't write
//   node scripts/discoverPlaces.js --neighborhood="Pilsen" ← scope to one area
//   node scripts/discoverPlaces.js --prod                 ← target production DB
//
// Cost: ~$0.032 per neighborhood (Nearby Search, Pro tier fields). Overpass
// calls are free. A full 36-neighborhood sweep is ~$1.15 in Google API cost.

const isProd = process.argv.includes("--prod");
const isDryRun = process.argv.includes("--dry-run");
const neighborhoodArg = process.argv
  .find((arg) => arg.startsWith("--neighborhood="))
  ?.split("=")[1];

require("dotenv").config({ path: ".env.local" });
const { MongoClient, ObjectId } = require("mongodb");

const { findExistingMatch, getSearchNeighborhoods } = require("../lib/placeMatching");
const { checkIfChain } = require("../lib/chainDetection");
const { fetchOverpassCandidates } = require("../lib/overpass");
const neighborhoodCoordinates = require("../lib/neighborhoodCoordinates.json");

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_KEY;
const MONGODB_URI = isProd ? process.env.MONGODB_URI : process.env.LOCAL_DATABASE_URL;
const DB_NAME = process.env.DB_NAME;

if (!GOOGLE_MAPS_API_KEY) throw new Error("Missing GOOGLE_MAPS_KEY in .env.local");
if (!MONGODB_URI) throw new Error("Missing MONGODB_URI in .env.local");
if (!DB_NAME) throw new Error("Missing DB_NAME in .env.local");

const SEARCH_RADIUS_METERS = 1200;
const INCLUDED_TYPES = ["bar", "restaurant", "cafe", "night_club"];

// Mirrors lib/slugify.js — duplicated here because that file is an ES module
// (imported by Next.js pages) and can't be require()'d from a plain script.
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

function generatePlaceSlug(name, neighborhood) {
  return `${slugify(name)}-${slugify(neighborhood)}`;
}

function parseStreetAddress(formattedAddress) {
  return formattedAddress?.split(",")[0]?.trim() || "";
}

async function searchNearby(lat, lng) {
  const response = await fetch("https://places.googleapis.com/v1/places:searchNearby", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": [
        "places.id",
        "places.displayName",
        "places.types",
        "places.primaryType",
        "places.priceLevel",
        "places.formattedAddress",
        "places.location",
      ].join(","),
    },
    body: JSON.stringify({
      includedTypes: INCLUDED_TYPES,
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: { latitude: lat, longitude: lng },
          radius: SEARCH_RADIUS_METERS,
        },
      },
    }),
  });

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error.message || JSON.stringify(data.error));
  }

  return (data.places || []).map((place) => ({
    name: place.displayName?.text || "",
    googlePlaceId: place.id,
    lat: place.location?.latitude ?? null,
    lng: place.location?.longitude ?? null,
    formattedAddress: place.formattedAddress || null,
    types: place.types || [],
    primaryType: place.primaryType || null,
  }));
}

async function loadExistingPlaces(collection) {
  const docs = await collection
    .find({}, { projection: { name: 1, googlePlaceId: 1, "googlePlaces.placeId": 1, "location.geo": 1, neighborhood: 1 } })
    .toArray();

  return docs.map((doc) => ({
    _id: doc._id,
    name: doc.name,
    googlePlaceId: doc.googlePlaceId || doc.googlePlaces?.placeId || null,
    lat: doc.location?.geo?.latitude ?? null,
    lng: doc.location?.geo?.longitude ?? null,
    neighborhood: doc.neighborhood,
  }));
}

async function run() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection("eventPlaces");

    const existingPlaces = await loadExistingPlaces(collection);

    const neighborhoods = neighborhoodArg
      ? [neighborhoodArg]
      : Object.keys(neighborhoodCoordinates);

    if (neighborhoodArg && !neighborhoodCoordinates[neighborhoodArg]) {
      throw new Error(`Unknown neighborhood "${neighborhoodArg}"`);
    }

    console.log(`Database : ${isProd ? "PRODUCTION" : "local"}`);
    console.log(`Mode     : ${isDryRun ? "DRY RUN" : "live"}`);
    console.log(`Scope    : ${neighborhoods.length} neighborhood(s)\n`);

    let addedCount = 0;
    let duplicateCount = 0;
    let chainCount = 0;
    let osmOnlyCount = 0;

    for (const neighborhood of neighborhoods) {
      const { lat, lng } = neighborhoodCoordinates[neighborhood];
      console.log(`\n${neighborhood}`);

      const searchScope = getSearchNeighborhoods(neighborhood);
      const nearbyExisting = existingPlaces.filter((p) => searchScope.includes(p.neighborhood));

      let googleCandidates = [];
      try {
        googleCandidates = await searchNearby(lat, lng);
      } catch (err) {
        console.log(`  ✗ Google Nearby Search failed: ${err.message}`);
        continue;
      }
      await new Promise((r) => setTimeout(r, 200));

      let osmCandidates = [];
      try {
        osmCandidates = await fetchOverpassCandidates(lat, lng, SEARCH_RADIUS_METERS);
      } catch (err) {
        console.log(`  ✗ Overpass query failed: ${err.message}`);
      }
      await new Promise((r) => setTimeout(r, 1000));

      for (const candidate of googleCandidates) {
        const existingMatch = findExistingMatch(candidate, nearbyExisting);
        if (existingMatch) {
          console.log(`  ~ SKIP   ${candidate.name} — possible duplicate of "${existingMatch.name}"`);
          duplicateCount++;
          continue;
        }

        const osmMatch = candidate.lat != null ? findExistingMatch(candidate, osmCandidates, { maxDistanceMeters: 75 }) : null;

        const chainCheck = await checkIfChain({
          name: candidate.name,
          address: candidate.formattedAddress,
          types: candidate.types,
          osmBrand: osmMatch?.brand,
        });

        const stub = {
          name: candidate.name,
          slug: generatePlaceSlug(candidate.name, neighborhood),
          location: {
            streetAddress: parseStreetAddress(candidate.formattedAddress),
            city: "Chicago",
            state: "IL",
            postalCode: null,
            geo: { latitude: candidate.lat, longitude: candidate.lng },
          },
          neighborhood,
          googlePlaceId: candidate.googlePlaceId,
          events: [],
          enabled: false,
          featured: false,
          discoverySource: "google-nearby",
          chainCheck,
        };

        if (chainCheck.isChain) chainCount++;

        if (isDryRun) {
          console.log(
            `  + ${chainCheck.isChain ? "CHAIN" : "ADD  "}  ${candidate.name} — ${chainCheck.source} (${chainCheck.confidence})`
          );
        } else {
          await collection.insertOne(stub);
          console.log(
            `  ✓ ${chainCheck.isChain ? "CHAIN" : "ADDED"}  ${candidate.name} — ${chainCheck.source} (${chainCheck.confidence})`
          );
        }
        addedCount++;

        // Avoid hammering the chain-detection LLM / DB
        await new Promise((r) => setTimeout(r, 200));
      }

      // Log OSM nodes that matched neither a Google candidate nor an
      // existing DB place — not inserted (OSM alone lacks reliable address
      // data for the stub schema), just surfaced for manual follow-up.
      for (const osmPlace of osmCandidates) {
        const matchesGoogle = findExistingMatch(osmPlace, googleCandidates, { maxDistanceMeters: 75 });
        const matchesExisting = findExistingMatch(osmPlace, nearbyExisting);
        if (!matchesGoogle && !matchesExisting) {
          osmOnlyCount++;
        }
      }
    }

    console.log(`\nDone.`);
    console.log(`  Added        : ${addedCount}${isDryRun ? " (dry run)" : ""}`);
    console.log(`  Flagged chain: ${chainCount}`);
    console.log(`  Duplicates   : ${duplicateCount}`);
    console.log(`  OSM-only     : ${osmOnlyCount} (found in OSM, not matched to a Google result — not inserted)`);
  } finally {
    await client.close();
  }
}

run();
