// pages/index.js
"use client";

import Head from "next/head";
import Link from "next/link";
import { categories } from "../data/categories";
import { slugify } from "../utils/slugify";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./components/ui/dropdown-menu";
import CategoryDropdown from "./components/CategoryDropdown";
import Header from "./components/header";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
        
        setProducts(data)
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      {/* Hero */}
      <section className="hero relative p-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4"><strong>Welcome to Baby Bliss Boutique</strong></h2>
            <p className="text-gray-700 text-lg">
              Your one-stop shop for premium baby products
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <img
              src="/images/baby-cream.png" // replace with your hero image
              alt="Baby products"
              className="w-full h-auto rounded shadow"
              style={{ "width": 400 }}
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <main className="container mx-auto px-4 py-6" style={{ "padding": 80 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative group border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold">₹{product.price}</p>
              </div>
              {/* Buy Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {product.amazonUrl && (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#ff9900",
                      color: "#fff",
                      borderRadius: "4px",
                      textDecoration: "none",
                    }}
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
