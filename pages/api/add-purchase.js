import dbConnect from "../../ui/libs/mongodb";
import Purchase from "../../ui/models/purchase"; // Mongo model for purchases

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { productId, productName, price, amazonUrl } = req.body;

      const newPurchase = await Purchase.create({
        productId,
        productName,
        price,
        amazonUrl,
        purchasedAt: new Date(),
      });

      res.status(201).json({ success: true, purchase: newPurchase });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
