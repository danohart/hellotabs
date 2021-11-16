const { connectToDatabase } = require("../../../lib/mongodb");

export default async function handler(req, res) {
  let dayOfWeek = req.query.day;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  dayOfWeek = capitalizeFirstLetter(dayOfWeek);

  try {
    let { db } = await connectToDatabase();
    let places = await db
      .collection("places")
      .find({
        day: {
          $elemMatch: { name: dayOfWeek, drink_specials: { $ne: "None" } },
        },
      })
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
