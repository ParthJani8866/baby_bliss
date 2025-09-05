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
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));

    // Check if popup was already closed
    const popupClosed = localStorage.getItem("popupClosed");
    if (!popupClosed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupClosed", "true");
  };

  // JSON-LD Schema Markup for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "image": `https://baby-toys.shop/images/${product.image}`,
      "description":
        product.shortDescription ||
        "High-quality baby product available in Ahmedabad and across India.",
      "brand": {
        "@type": "Brand",
        "name": "Baby Bliss",
      },
      "offers": {
        "@type": "Offer",
        "url": `https://baby-toys.shop/products/${product.id}`,
        "priceCurrency": "INR",
        "price": product.price,
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
      },
    })),
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* SEO Meta Tags */}
      <NextSeo
        title="Buy Baby Toys, Baby Bicycle,Baby Tricycle,Baby Cycle,Baby Walkers & Strollers in Ahmedabad | Baby Bliss Boutique"
        description="Discover premium baby products curated with love and care. From baby walkers, feeding bottles, strollers, bicycles, tricycles, and educational toys, Baby Bliss ensures safe, high-quality, and affordable essentials delivered across India."
        canonical="https://baby-toys.shop/"
      />

      {/* Product Schema */}
      {products.length > 0 && (
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      {/* Google Tag Manager */}
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

      {/* Hero Section */}
      <section className="hero relative p-6 md:p-10 bg-gray-50 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-4">
              Buy Baby Toys in Ahmedabad | Baby Bliss Boutique
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Discover premium baby products curated with love and care. From
              baby walkers, feeding bottles, strollers, bicycles, tricycles, and
              educational toys, Baby Bliss ensures safe, high-quality, and
              affordable essentials delivered across India.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="my-12 px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {categories
            .filter((cat) => cat.id !== 3 && cat.id !== 8)
            .map((cat) => (
              <Link
                key={cat.name}
                href={`/baby-products/${slugify(cat.name.toLowerCase())}`}
                className="flex flex-col items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition w-full max-w-[160px]">
                <Image
                  src={`/images/${cat.image}`}
                  alt={cat.name}
                  width={180}
                  height={120}
                  loading="lazy"
                  className="object-cover rounded mb-2"
                />
                <span className="text-sm font-medium text-gray-700 text-center">
                  {cat.name}
                </span>
              </Link>
            ))}
        </div>
      </section>

      {/* Best Products Section */}
      <section className="my-12 px-4 md:px-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Best Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id < 15)
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all bg-white overflow-hidden">
                <div className="relative rounded shadow group">
                  <Image
                    src={`/images/${product.image}`}
                    alt={product.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
                    width={500}
                    height={500}
                    loading="lazy"
                    onClick={() => openLightbox(`/images/${product.image}`)}
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-sm md:text-base">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm mb-2">
                    {product.shortDescription ||
                      "A premium, baby-safe product designed for comfort and reliability."}
                  </p>
                  <p className="text-green-600 font-bold text-sm md:text-base">
                    ₹{product.price}
                  </p>
                </div>
                {product.amazonUrl && (
                  <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-center">
                    <a
                      href={product.amazonUrl}
                      target="_blank"
                      rel="nofollow noreferrer"
                      className="w-full text-center px-4 py-2 bg-orange-500 text-white rounded text-sm md:text-base hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                      Buy Now
                    </a>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          mainSrc={selectedImage}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[9999]">
          <div className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold">
              ✕
            </button>

            {/* Banner Image */}
            <Image
              src="/images/cashback.png"
              alt="Cashback Offer"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />

            {/* Cashback Text */}
            <h2 className="text-2xl font-extrabold mb-3 text-center text-orange-600">
              🎉 Up to 100% Cashback!
            </h2>
            <p className="text-gray-700 text-center mb-4 font-medium">
              On every product you purchase from this website  
              & get it on Amazon.  
              Don’t miss this **limited-time mega offer!**
            </p>

            {/* Call to Action */}
            <div className="flex justify-center">
              <Link href="/baby-products/tricycles-and-kids-cycles"
                className="px-6 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition">
                  Shop Now 🚀
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
