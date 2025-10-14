import dbConnect from "../../../lib/mongodb";
import Product from "../../../ui/models/product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find({});
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}