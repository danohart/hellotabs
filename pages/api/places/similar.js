const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

// Noise types that appear on almost every place — excluded from scoring
// so they don't inflate similarity between unrelated places.
const IGNORED_TYPES = new Set([
  "food",
  "store",
  "point_of_interest",
  "establishment",
  "food_store",
]);

// Score a candidate against the current place's types.
// primaryType match is worth 3 points; each shared type is worth 1.
function scoreSimilarity(currentPlace, candidate) {
  const currentTypes = new Set(
    (currentPlace.googlePlaces?.types || []).filter((t) => !IGNORED_TYPES.has(t))
  );
  const candidateTypes = (candidate.googlePlaces?.types || []).filter(
    (t) => !IGNORED_TYPES.has(t)
  );

  let score = 0;
  for (const t of candidateTypes) {
    if (currentTypes.has(t)) score += 1;
  }

  // Bonus for matching primaryType
  if (
    currentPlace.googlePlaces?.primaryType &&
    candidate.googlePlaces?.primaryType === currentPlace.googlePlaces.primaryType
  ) {
    score += 3;
  }

  return score;
}

export async function findSimilarPlaces(db, currentPlace, limit = 6) {
  const types = (currentPlace.googlePlaces?.types || []).filter(
    (t) => !IGNORED_TYPES.has(t)
  );

  if (types.length === 0) {
    return { similar: [], citywide: [] };
  }

  // Cast a wide net — any place sharing at least one meaningful type
  const candidates = await db
    .collection("eventPlaces")
    .find({
      _id: { $ne: currentPlace._id },
      enabled: true,
      "googlePlaces.types": { $in: types },
    })
    .project({
      _id: 1,
      name: 1,
      slug: 1,
      neighborhood: 1,
      "googlePlaces.primaryType": 1,
      "googlePlaces.priceLevel": 1,
      "googlePlaces.types": 1,
    })
    .toArray();

  // Score and sort all candidates
  const scored = candidates
    .map((c) => ({ ...c, _score: scoreSimilarity(currentPlace, c) }))
    .filter((c) => c._score > 0)
    .sort((a, b) => b._score - a._score);

  // Split into neighborhood vs citywide, strip internal _score field
  const similar = scored
    .filter((c) => c.neighborhood === currentPlace.neighborhood)
    .slice(0, limit)
    .map(({ _score, "googlePlaces.types": _t, ...rest }) => rest);

  const citywide = scored
    .filter((c) => c.neighborhood !== currentPlace.neighborhood)
    .slice(0, limit)
    .map(({ _score, "googlePlaces.types": _t, ...rest }) => rest);

  return { similar, citywide };
}

export default async function handler(req, res) {
  const { placeId, limit = 6 } = req.query;

  if (!placeId) {
    return res.status(400).json({ error: "placeId is required" });
  }

  try {
    const { db } = await connectToDatabase();

    const currentPlace = await db
      .collection("eventPlaces")
      .findOne({ _id: new ObjectId(placeId) });

    if (!currentPlace) {
      return res.status(404).json({ error: "Place not found" });
    }

    if (!currentPlace.googlePlaces?.types?.length) {
      return res.json({
        success: true,
        similar: [],
        citywide: [],
        message: "No Google Places data for this place",
      });
    }

    const { similar, citywide } = await findSimilarPlaces(
      db,
      currentPlace,
      parseInt(limit)
    );

    return res.json({
      success: true,
      similar: JSON.parse(JSON.stringify(similar)),
      citywide: JSON.parse(JSON.stringify(citywide)),
    });
  } catch (error) {
    console.error("Error fetching similar places:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
