const { connectToDatabase } = require("../../../lib/mongodb");

// Simple function to generate fuzzy regex patterns for common typos
function createFuzzyPattern(term) {
  // Handle common character substitutions and missing characters
  return term
    .toLowerCase()
    .replace(/[aeiou]/g, "[aeiou]?") // Vowel substitutions
    .replace(/[bp]/g, "[bp]?") // b/p confusion
    .replace(/[dt]/g, "[dt]?") // d/t confusion
    .replace(/[kg]/g, "[kg]?") // k/g confusion
    .replace(/./g, "$&.?"); // Allow for extra characters
}

export default async function handler(req, res) {
  let { search } = req.query;

  try {
    let { db } = await connectToDatabase();

    // Strategy 1: Exact text search
    let places = await db
      .collection("eventPlaces")
      .find({
        $text: { $search: search },
        enabled: { $eq: true },
      })
      .toArray();

    // Strategy 2: If no exact matches, try fuzzy regex search
    if (places.length === 0) {
      const fuzzyPattern = createFuzzyPattern(search);
      places = await db
        .collection("eventPlaces")
        .find({
          $or: [
            { name: { $regex: fuzzyPattern, $options: "i" } },
            { neighborhood: { $regex: fuzzyPattern, $options: "i" } },
            {
              "location.streetAddress": { $regex: fuzzyPattern, $options: "i" },
            },
          ],
          enabled: { $eq: true },
        })
        .limit(20) // Limit fuzzy results since they can be noisy
        .toArray();
    }

    // Strategy 3: If still no matches, try partial word matching
    if (places.length === 0) {
      const words = search.split(" ");
      const wordRegexes = words.map((word) => ({
        name: { $regex: word, $options: "i" },
      }));

      places = await db
        .collection("eventPlaces")
        .find({
          $or: wordRegexes,
          enabled: { $eq: true },
        })
        .limit(15)
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
