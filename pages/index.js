"use client";

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";
import AdBanner from "./components/AdBanner";
import { NextSeo } from "next-seo";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* SEO Meta Tags */}
      <NextSeo
        title="Baby Bliss Boutique - Premium Baby Products Online"
        description="Shop premium baby products — bottles, toys, strollers, and more — delivered across India with quality and safety you can trust."
        canonical="https://yourdomain.com/"
        openGraph={{
          url: "https://yourdomain.com/",
          title: "Baby Bliss Boutique - Premium Baby Products Online",
          description:
            "Safe, curated baby essentials for every stage of parenting — from newborn to toddler.",
          images: [
            {
              url: "/images/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Baby Bliss Boutique",
            },
          ],
        }}
      />

      <Header />

      {/* Hero Section with SEO-friendly content */}
      <section className="hero relative p-6 md:p-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">Welcome to Baby Bliss Boutique</h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Discover premium baby products curated with love and care. At Baby Bliss, we prioritize
              safety, quality, and comfort for your little ones. From feeding bottles, strollers, and
              toys to skincare and essentials, our collection is carefully handpicked for every parent.
              Whether you’re a first-time parent or looking for thoughtful baby shower gifts, Baby Bliss
              brings you the perfect combination of reliability, affordability, and style — delivered
              across India with quick and hassle-free service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        {/* Ad Banner */}
        <AdBanner />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
              >
                {/* Image with Lightbox */}
                <div className="relative rounded shadow group">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    width={500}
                    height={500}
                    onClick={() => openLightbox(`/images/${product.image}`)}
                  />
                  {/* Zoom Icon */}
                  <button
                    onClick={() => openLightbox(`/images/${product.image}`)}
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
                  <p className="text-gray-600 text-xs md:text-sm mb-2">
                    {product.shortDescription ||
                      "A premium, baby-safe product designed for comfort and reliability."}
                  </p>
                  <p className="text-green-600 font-bold text-sm md:text-base">
                    ₹{product.price}
                  </p>
                </div>

                {/* Buy Now Button */}
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
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">
              Loading products, please wait...
            </p>
          )}
        </div>
      </main>

      {/* Lightbox for Image Preview */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={selectedImage}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
      <Footer />
    </div>
  );
}
