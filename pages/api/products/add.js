import dbConnect from "../../../ui/libs/mongodb";
import Product from "../../../pages/models/product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}