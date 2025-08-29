// pages/index.js
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/header";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero relative p-6 md:p-10 bg-gray-50 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              <strong>Welcome to Baby Bliss Boutique</strong>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Your one-stop shop for premium baby products
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src="/images/baby-cream.png"
              alt="Baby products"
              className="w-full max-w-xs md:max-w-md mx-auto h-auto rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
                <p className="text-blue-600 font-bold text-sm md:text-base">
                  ₹{product.price}
                </p>
              </div>

              {/* Buy Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {product.amazonUrl && (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded text-sm md:text-base hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    Buy Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
