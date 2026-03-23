const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;
const { isValidObjectId } = require("../../../lib/slugify");

export default async function handler(req, res) {
  let identifier = req.query.name.toString();

  try {
    let { db } = await connectToDatabase();
    let place;

    if (isValidObjectId(identifier)) {
      place = await db
        .collection("eventPlaces")
        .findOne({ _id: new ObjectId(identifier) });
    } else {
      place = await db
        .collection("eventPlaces")
        .findOne({ slug: identifier });
    }

    if (!place) {
      return res.status(404).json({
        place: null,
        success: false,
        error: "Place not found",
      });
    }

    return res.json({
      place: JSON.parse(JSON.stringify(place)),
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      place: null,
      success: false,
      error: new Error(error).message,
    });
  }
}
