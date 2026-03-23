// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { connectToDatabase } = require("../../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;
const { generatePlaceSlug } = require("../../../lib/slugify");

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
      .find({ enabled: { $eq: true } }, { skipSessions: true })
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

async function addPlace(req, res) {
  try {
    let { db } = await connectToDatabase();

    const parsedBody = JSON.parse(req.body);

    if (!parsedBody.slug && parsedBody.name) {
      const baseSlug = generatePlaceSlug(
        parsedBody.name,
        parsedBody.neighborhood || "chicago"
      );

      const existingWithSlug = await db
        .collection("eventPlaces")
        .findOne({ slug: { $regex: `^${baseSlug}(-\\d+)?$` } });

      if (existingWithSlug) {
        const count = await db
          .collection("eventPlaces")
          .countDocuments({ slug: { $regex: `^${baseSlug}(-\\d+)?$` } });
        parsedBody.slug = `${baseSlug}-${count}`;
      } else {
        parsedBody.slug = baseSlug;
      }
    }

    await db.collection("eventPlaces").insertOne(parsedBody);

    return res.json({
      message: "Added place successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
