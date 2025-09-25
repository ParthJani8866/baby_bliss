"use client";

import { useState } from "react";
import axios from "axios";
import Header from "../../pages/components/Header";

export default function AddProductPage() {
  const [form, setForm] = useState({
    categoryId: "",
    subcategoryId: "",
    brandId: "",
    name: "",
    price: "",
    amazonUrl: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/products/add", form);
      setMessage(`Product "${res.data.name}" added successfully!`);
      setForm({
        categoryId: "",
        subcategoryId: "",
        brandId: "",
        name: "",
        price: "",
        amazonUrl: "",
        image: "",
      });
    } catch (err) {
      setMessage("Error adding product: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

        {message && <p className="mb-4 text-green-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Category ID</label>
            <input
              type="number"
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Subcategory ID</label>
            <input
              type="number"
              name="subcategoryId"
              value={form.subcategoryId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Brand ID</label>
            <input
              type="number"
              name="brandId"
              value={form.brandId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Amazon URL</label>
            <input
              type="text"
              name="amazonUrl"
              value={form.amazonUrl}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
