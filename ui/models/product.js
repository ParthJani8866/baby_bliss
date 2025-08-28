import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  categoryId: Number,
  subcategoryId: Number,
  brandId: Number,
  name: String,
  price: Number,
  amazonUrl: String,
  image: String
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);