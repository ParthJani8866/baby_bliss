"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="hero relative p-6 md:p-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              <strong>Welcome to Baby Bliss Boutique</strong>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Your one-stop shop for premium baby products
            </p>
          </div>

          <div className="flex-1">
            <Image
              src="/images/baby-cream.png"
              alt="Baby products"
              fill
              className="w-full max-w-xs md:max-w-md mx-auto h-auto rounded shadow"
              fetchPriority="high"
              priority={true}
            ></Image>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
            >
              {/* Image with zoom */}
              <div className="relative rounded shadow group">
                <Image
                  src={product.image} // your product image
                  alt={product.name}
                  fill // makes it cover parent container
                  className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                  priority={true} // preloads this LCP image
                  fetchPriority="high" // tells browser this image is high priority
                  onClick={() => openLightbox(product.image)}
                />

                {/* Zoom Icon */}
                <button
                  onClick={() => openLightbox(product.image)}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md flex items-center justify-center z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                    />
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
                <p className="text-green-600 font-bold text-sm md:text-base">₹{product.price}</p>
              </div>

              {/* Bottom Buy Button Panel */}
              {product.amazonUrl && (
                <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-center">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="w-full text-center px-4 py-2 bg-orange-500 text-white rounded text-sm md:text-base hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    Buy Now
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Popup */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={selectedImage}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
