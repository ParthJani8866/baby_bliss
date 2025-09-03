import dbConnect from "../../../ui/libs/mongodb";
import Product from "../../../ui/models/product";
import axios from "axios";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      // 1️⃣ Create the product in MongoDB
      const product = await Product.create(req.body);

      // 2️⃣ After product is saved, create Pinterest pin
      const accessToken = "8bf9968e07cdc072b7cb6e72b77c274670ce4158";
      const boardId = process.env.PINTEREST_BOARD_ID; // set your default board in .env

      // 3️⃣ Read product image from server (or URL)
      // Assuming req.body.image contains relative path in /public or full URL
      let imageBase64;

      if (req.body.image.startsWith("http")) {
        // If it's a URL, fetch and convert to base64
        const response = await axios.get(req.body.image, {
          responseType: "arraybuffer",
        });
        imageBase64 = Buffer.from(response.data, "binary").toString("base64");
      } else {
        // If local path
        const imagePath = path.join(process.cwd(), "public", req.body.image);
        imageBase64 = fs.readFileSync(imagePath, { encoding: "base64" });
      }

      // 4️⃣ Upload image to Pinterest
      const mediaResponse = await axios.post(
        "https://api.pinterest.com/v5/media",
        {
          media: {
            type: "image",
            image_base64: imageBase64,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const mediaId = mediaResponse.data.id;

      // 5️⃣ Create pin
      const pinData = {
        board: boardId,
        media: { id: mediaId },
        link: req.body.link || "https://baby-toys.shop", // product link
        title: req.body.name,
        description: req.body.description,
      };

      const pinResponse = await axios.post(
        "https://api.pinterest.com/v5/pins",
        pinData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      // 6️⃣ Return product + pin info
      res.status(201).json({
        product,
        pinterestPin: pinResponse.data,
      });
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(400).json({ error: error.response?.data || error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
