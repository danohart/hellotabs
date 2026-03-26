export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: "query param required" });
  }

  const apiKey = process.env.GOOGLE_MAPS_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Google Maps API key not configured" });
  }

  // Bias results toward Chicago
  const location = "41.8781,-87.6298";
  const radius = 40000; // ~25 miles

  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
    query + " Chicago"
  )}&location=${location}&radius=${radius}&fields=place_id,name,formatted_address,business_status&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const results = (data.results || []).slice(0, 5).map((place) => ({
      googlePlaceId: place.place_id,
      name: place.name,
      formattedAddress: place.formatted_address,
      businessStatus: place.business_status,
      latitude: place.geometry?.location?.lat ?? null,
      longitude: place.geometry?.location?.lng ?? null,
    }));

    return res.json({ results, success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message, success: false });
  }
}
