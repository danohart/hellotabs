const { connectToDatabase } = require("../../lib/mongodb");
const { generatePlaceSlug } = require("../../lib/slugify");

export default async function generateSlugs(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { db } = await connectToDatabase();

    const places = await db
      .collection("eventPlaces")
      .find({}, { projection: { name: 1, neighborhood: 1, slug: 1 } })
      .toArray();

    const slugCounts = {};
    const updates = [];

    for (const place of places) {
      if (place.slug) {
        slugCounts[place.slug] = (slugCounts[place.slug] || 0) + 1;
        continue;
      }

      let baseSlug = generatePlaceSlug(place.name, place.neighborhood || "chicago");
      let slug = baseSlug;
      let counter = 1;

      while (slugCounts[slug]) {
        slug = `${baseSlug}-${counter}`;
        counter++;
      }

      slugCounts[slug] = 1;

      updates.push({
        updateOne: {
          filter: { _id: place._id },
          update: { $set: { slug } },
        },
      });
    }

    if (updates.length > 0) {
      await db.collection("eventPlaces").bulkWrite(updates);
    }

    await db
      .collection("eventPlaces")
      .createIndex({ slug: 1 }, { unique: true, sparse: true });

    return res.json({
      success: true,
      message: `Generated slugs for ${updates.length} places`,
      updated: updates.length,
    });
  } catch (error) {
    console.error("Error generating slugs:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
