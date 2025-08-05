const { connectToDatabase } = require("../../../lib/mongodb");

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

  try {
    let { db } = await connectToDatabase();

    let places = await db
      .collection("eventPlaces")
      .find({
        $text: { $search: search },
        enabled: { $eq: true },
      })
      .toArray();

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
        .limit(20)
        .toArray();
    }

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
