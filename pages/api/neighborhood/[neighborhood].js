const { connectToDatabase } = require("../../../lib/mongodb");

export default async function handler(req, res) {
  let { neighborhood } = req.query;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  neighborhood = capitalizeFirstLetter(neighborhood);

  try {
    let { db } = await connectToDatabase();
    let places = await db
      .collection("places")
      .find({ enabled: { $eq: true }, address: { $regex: neighborhood } })
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
