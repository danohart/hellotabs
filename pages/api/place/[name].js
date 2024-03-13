const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  let placeId = req.query.name.toString();

  try {
    let { db } = await connectToDatabase();
    let place = await db
      .collection("eventPlaces")
      .findOne({ _id: new ObjectId(placeId) });
    return res.json({
      place: JSON.parse(JSON.stringify(place)),
      success: true,
    });
  } catch (error) {
    return res.json({
      place: new Error(error).message,
      success: false,
    });
  }
}
