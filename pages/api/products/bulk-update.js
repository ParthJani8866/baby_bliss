import dbConnect from "../../../ui/libs/mongodb";
import Product from "../../../ui/models/product";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();

  try {
    // 1️⃣ Add isBest field to all products
    await Product.updateMany({}, { $set: { isBest: false } });

    // 2️⃣ Load JSON file
    const filePath = path.join(process.cwd(), "data", "updated_products.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    let updatedCount = 0;

    // 3️⃣ Update specific products from JSON
    for (const item of data) {
      if (!item._id) continue;

      const objectId = new mongoose.Types.ObjectId(item._id);

      const result = await Product.updateOne(
        { _id: objectId },
        {
          $set: {
            categoryId: item.categoryId || null,
            subcategoryId: item.subcategoryId || null,
            isBest: true
          },
        }
      );

      if (result.modifiedCount > 0) updatedCount++;
    }

    res.status(200).json({
      message: "Bulk update completed successfully",
      updated: updatedCount,
    });
  } catch (error) {
    console.error("Bulk update error:", error);
    res.status(500).json({ error: error.message });
  }
}
