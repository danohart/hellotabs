// lib/overpass.js
// Free, keyless client for OpenStreetMap's Overpass API. Used to cross-check
// Google Places discovery candidates — OSM's `brand` tag is a strong,
// deterministic signal that a location is part of a chain (see
// lib/chainDetection.js), and OSM sometimes has independent spots that
// Google's ranking buries.
//
// Public Overpass instances are rate-limited and shared infrastructure —
// callers should throttle between requests (discoverPlaces.js uses ~1s).

const OVERPASS_ENDPOINT = "https://overpass-api.de/api/interpreter";
const AMENITY_TYPES = ["bar", "restaurant", "cafe", "pub", "nightclub"];

function buildQuery(lat, lng, radiusMeters) {
  const amenityPattern = AMENITY_TYPES.join("|");
  return `[out:json][timeout:25];
(
  node["amenity"~"^(${amenityPattern})$"](around:${radiusMeters},${lat},${lng});
);
out body;`;
}

function formatAddress(tags) {
  const parts = [
    [tags["addr:housenumber"], tags["addr:street"]].filter(Boolean).join(" "),
    tags["addr:city"],
    tags["addr:state"],
  ].filter(Boolean);
  return parts.length ? parts.join(", ") : null;
}

// Returns [{ name, brand, lat, lng, address, osmId, amenity }], skipping
// unnamed nodes (not useful as discovery candidates).
async function fetchOverpassCandidates(lat, lng, radiusMeters) {
  const query = buildQuery(lat, lng, radiusMeters);

  const response = await fetch(OVERPASS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // Overpass's fair-use policy asks clients to identify themselves.
      "User-Agent": "hellotabs-place-discovery (me@danielhart.co)",
    },
    body: `data=${encodeURIComponent(query)}`,
  });

  if (!response.ok) {
    throw new Error(`Overpass API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return (data.elements || [])
    .filter((el) => el.tags?.name)
    .map((el) => ({
      name: el.tags.name,
      brand: el.tags.brand || null,
      lat: el.lat,
      lng: el.lon,
      address: formatAddress(el.tags),
      osmId: `node/${el.id}`,
      amenity: el.tags.amenity || null,
    }));
}

module.exports = { fetchOverpassCandidates };
