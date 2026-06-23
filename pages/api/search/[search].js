import { connectToDatabase } from "../../../lib/mongodb";
import neighborhoods from "../../../lib/neighborhoods";

const PLACE_TYPE_MAP = {
  bar: ["bar", "cocktail_bar", "night_club", "sports_bar"],
  bars: ["bar", "cocktail_bar", "night_club", "sports_bar"],
  restaurant: ["restaurant", "food"],
  restaurants: ["restaurant", "food"],
  cafe: ["cafe", "coffee_shop"],
  cafes: ["cafe", "coffee_shop"],
  club: ["night_club"],
  clubs: ["night_club"],
};

function createFuzzyPattern(term) {
  return term
    .toLowerCase()
    .replace(/[aeiou]/g, "[aeiou]?")
    .replace(/[bp]/g, "[bp]?")
    .replace(/[dt]/g, "[dt]?")
    .replace(/[kg]/g, "[kg]?")
    .replace(/./g, "$&.?");
}

export default async function handler(req, res) {
  let { search } = req.query;

  // Sort neighborhoods longest-first so "River North" matches before "North"
  const sortedNeighborhoods = [...neighborhoods].sort(
    (a, b) => b.length - a.length
  );

  // Detect and extract neighborhood from query
  let detectedNeighborhood = null;
  let remainingQuery = search;

  for (const n of sortedNeighborhoods) {
    const escaped = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    if (regex.test(remainingQuery)) {
      detectedNeighborhood = n;
      remainingQuery = remainingQuery.replace(regex, "").trim();
      break;
    }
  }

  // Detect and extract place-type keywords from remaining query
  let detectedTypes = null;
  const queryWords = remainingQuery.toLowerCase().split(/\s+/).filter(Boolean);
  const matchedTypeWords = queryWords.filter((w) => PLACE_TYPE_MAP[w]);

  if (matchedTypeWords.length > 0) {
    detectedTypes = [...new Set(matchedTypeWords.flatMap((w) => PLACE_TYPE_MAP[w]))];
    const typePattern = new RegExp(
      `\\b(${matchedTypeWords.join("|")})\\b`,
      "gi"
    );
    remainingQuery = remainingQuery.replace(typePattern, "").trim();
  }

  // Base filter applied to all queries
  const baseFilter = { enabled: { $eq: true } };
  if (detectedNeighborhood) baseFilter.neighborhood = detectedNeighborhood;
  if (detectedTypes) baseFilter["googlePlaces.types"] = { $in: detectedTypes };

  const nameQuery = remainingQuery || null;

  try {
    let { db } = await connectToDatabase();
    let places = [];

    if (nameQuery) {
      // Tier 1: full-text search
      places = await db
        .collection("eventPlaces")
        .find({ $text: { $search: nameQuery }, ...baseFilter })
        .toArray();

      // Tier 2: fuzzy pattern match
      if (places.length === 0) {
        const fuzzyPattern = createFuzzyPattern(nameQuery);
        places = await db
          .collection("eventPlaces")
          .find({
            $or: [
              { name: { $regex: fuzzyPattern, $options: "i" } },
              { neighborhood: { $regex: fuzzyPattern, $options: "i" } },
              {
                "location.streetAddress": {
                  $regex: fuzzyPattern,
                  $options: "i",
                },
              },
            ],
            ...baseFilter,
          })
          .limit(20)
          .toArray();
      }

      // Tier 3: word-by-word match
      if (places.length === 0) {
        const words = nameQuery.split(" ").filter(Boolean);
        const wordRegexes = words.map((word) => ({
          name: { $regex: word, $options: "i" },
        }));
        places = await db
          .collection("eventPlaces")
          .find({ $or: wordRegexes, ...baseFilter })
          .limit(15)
          .toArray();
      }
    } else {
      // Neighborhood/type only — no name term remaining
      places = await db
        .collection("eventPlaces")
        .find(baseFilter)
        .limit(30)
        .toArray();
    }

    return res.json({
      places: JSON.parse(JSON.stringify(places)),
      success: true,
    });
  } catch (error) {
    return res.json({
      places: new Error(error).message,
      success: false,
    });
  }
}
