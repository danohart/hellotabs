import { getPlacesForDay } from "../../../lib/places";

export default async function handler(req, res) {
  try {
    const places = await getPlacesForDay(req.query.day);
    return res.json({
      places,
      success: true,
    });
  } catch (error) {
    return res.json({
      places: new Error(error).message,
      success: false,
    });
  }
}
