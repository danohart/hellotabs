// lib/placeMatching.js
// Shared "is this candidate already something we know about" matcher.
// CommonJS so it can be require()'d both from Next.js API routes and from
// plain node scripts (scripts/discoverPlaces.js) without a build step.
//
// Used two ways:
//   1. Dedup: is this Google/OSM discovery candidate already in the DB?
//   2. Cross-source matching: does this OSM node correspond to a Google
//      candidate found in the same sweep (so we can borrow its `brand` tag)?

const relatedNeighborhoods = require("./relatedNeighborhoods.json");

const COMMON_SUFFIXES = [
  "restaurant",
  "bar",
  "bar & grill",
  "bar and grill",
  "grill",
  "cafe",
  "coffee",
  "pub",
  "tavern",
  "lounge",
  "llc",
  "inc",
  "chicago",
];

function normalizeName(name) {
  let normalized = (name || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s&]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  for (const suffix of COMMON_SUFFIXES) {
    const re = new RegExp(`\\b${suffix}\\b`, "g");
    normalized = normalized.replace(re, " ");
  }

  return normalized.replace(/\s+/g, " ").trim();
}

function namesLikelyMatch(nameA, nameB) {
  const a = normalizeName(nameA);
  const b = normalizeName(nameB);
  if (!a || !b) return false;
  if (a === b) return true;
  // One name fully contains the other (e.g. "The Green Lady" vs "Green Lady")
  return a.includes(b) || b.includes(a);
}

// Haversine distance in meters between two lat/lng points.
function distanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Returns [neighborhood, ...its related neighborhoods] — use to scope a
// dedup search to a sensible geographic window instead of the whole city.
function getSearchNeighborhoods(neighborhood) {
  return [neighborhood, ...(relatedNeighborhoods[neighborhood] || [])];
}

// candidate: { name, googlePlaceId, lat, lng }
// existingPlaces: [{ name, googlePlaceId, lat, lng, ...anything }]
// Returns the matching existing place, or null.
function findExistingMatch(candidate, existingPlaces, { maxDistanceMeters = 100 } = {}) {
  if (candidate.googlePlaceId) {
    const exact = existingPlaces.find(
      (p) => p.googlePlaceId && p.googlePlaceId === candidate.googlePlaceId
    );
    if (exact) return exact;
  }

  if (candidate.lat == null || candidate.lng == null) return null;

  for (const existing of existingPlaces) {
    if (existing.lat == null || existing.lng == null) continue;
    if (!namesLikelyMatch(candidate.name, existing.name)) continue;

    const distance = distanceMeters(candidate.lat, candidate.lng, existing.lat, existing.lng);
    if (distance <= maxDistanceMeters) return existing;
  }

  return null;
}

module.exports = {
  normalizeName,
  namesLikelyMatch,
  distanceMeters,
  getSearchNeighborhoods,
  findExistingMatch,
};
