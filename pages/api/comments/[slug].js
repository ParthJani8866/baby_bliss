// pages/api/comments/[slug].js
import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const { slug } = req.query;
  const client = await clientPromise;
  const db = client.db("blog");
  const collection = db.collection("comments");

  if (req.method === "POST") {
    const { name, comment } = req.body;
    if (!name || !comment) return res.status(400).json({ error: "Missing fields" });

    const newComment = {
      slug,
      name,
      comment,
      createdAt: new Date(),
    };
    await collection.insertOne(newComment);
    return res.status(201).json(newComment);
  }

  if (req.method === "GET") {
    const comments = await collection.find({ slug }).sort({ createdAt: -1 }).toArray();
    return res.status(200).json(comments);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
