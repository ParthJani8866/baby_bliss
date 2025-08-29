"use client";

import Head from "next/head";
import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Header from "../components/header";
import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function CategoryPage({ category }) {
  const [products, setProducts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  useEffect(() => {
    // Fetch products from your API
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        // Filter products by this category
        const filtered = data.filter((p) => p.categoryId === category.id);
        setProducts(filtered);
      })
      .catch((err) => console.error(err));
  }, [category.id]);
  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{category.name} - Baby Bliss Boutique</title>
        <meta
          name="description"
          content={`Explore ${category.name} products at Baby Bliss Boutique. Best quality and deals for your baby.`}
        />
        <meta
          name="keywords"
          content={`${category.name}, baby products, baby care, baby clothing`}
        />
      </Head>
      <Header />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
            >
              {/* Image with zoom */}
              <div className="relative rounded shadow group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
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
      </section>
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

// getStaticPaths + getStaticProps to get category info
export async function getStaticPaths() {
  const paths = categories.map((c) => ({ params: { slug: slugify(c.name) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = categories.find((c) => slugify(c.name) === params.slug);
  return { props: { category } };
}
