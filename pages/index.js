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
import Script from "next/script";
import { categories } from "../data/categories";
import { slugify } from "../utils/slugify";

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
        canonical="https://truevivah.com/"
        openGraph={{
          url: "https://truevivah.com/",
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
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KDKGFBMB');
          `,
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
      {/* Categories */}
      <section className="my-12 px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {categories
            .filter((cat) => cat.id !== 3 && cat.id !== 8)
            .map((cat) => (
              <Link
                key={cat.name}
                href={`/category/${slugify(cat.name.toLowerCase())}`}
                className="flex flex-col items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition w-full max-w-[160px]"
              >
                <Image
                  src={`/images/${cat.image}`}
                  alt={cat.name}
                  width={180}
                  height={120}
                  className="object-cover rounded mb-2"
                />
                <span className="text-sm font-medium text-gray-700 text-center">{cat.name}</span>
              </Link>
            ))}
        </div>
      </section>

      {/* Best Products Section */}
      <section className="my-12 px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Best Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id < 15) // assuming your product JSON has "isBest": true for best products
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative rounded shadow group">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                    width={500}
                    height={500}
                    onClick={() => openLightbox(`/images/${product.image}`)}
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2">
                    {product.shortDescription || "A premium, baby-safe product designed for comfort and reliability."}
                  </p>
                  <p className="text-green-600 font-bold text-sm md:text-base">₹{product.price}</p>
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
            ))}
        </div>
        {products.filter((p) => p.isBest).length === 0 && (
          <p className="text-center text-gray-500 mt-4">No best products available right now.</p>
        )}
      </section>


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
