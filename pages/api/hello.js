// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;

  const database = client.db("littletabs");

  const places = await database.collection("places").find({}).toArray();
  return res.json(places);
};
