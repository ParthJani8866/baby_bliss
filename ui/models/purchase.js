import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  amazonUrl: { type: String },
  purchasedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Purchase || mongoose.model("Purchase", PurchaseSchema);