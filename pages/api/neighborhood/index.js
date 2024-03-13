// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler(req, res) {
  // switch the methods

  switch (req.method) {
    case "GET": {
      return getPlaces(req, res);
    }

    case "POST": {
      return addPlace(req, res);
    }

    case "PUT": {
      return updatePlace(req, res);
    }

    case "DELETE": {
      return deletePlace(req, res);
    }
  }
}

// Getting all posts.
async function getPlaces(req, res) {
  try {
    let { db } = await connectToDatabase();
    let places = await db
      .collection("eventPlaces")
      .find({ enabled: { $eq: true } })
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
