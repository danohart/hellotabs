const { connectToDatabase } = require("../../../lib/mongodb");

export default async function handler(req, res) {
  let { search } = req.query;

  try {
    let { db } = await connectToDatabase();
    let places = await db
      .collection("places")
      .find({ $text: { $search: search }, enabled: { $eq: true } })
      .toArray();
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
