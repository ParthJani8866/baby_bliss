"use client";

import Head from "next/head";
import Script from "next/script";
import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Image from "next/image";

// Max Price Slider Component
function MaxPriceSlider({ maxPrice, value, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-semibold text-gray-700">
        Maximum Price: <span className="text-green-600">₹{value}</span>
      </label>
      <input
        type="range"
        min={0}
        max={maxPrice}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-orange-500"
      />
    </div>
  );
}

export default function BabyProductsPage({ category }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) => p.categoryId === category.id);
        setProducts(filtered);
        setFilteredProducts(filtered);
      })
      .catch((err) => console.error(err));
  }, [category.id]);

  // Filter products by price
  useEffect(() => {
    const filtered = products.filter((p) => p.price <= maxPrice);
    setFilteredProducts(filtered);
  }, [maxPrice, products]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  // JSON-LD Schema for products
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredProducts.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "image": `https://baby-toys.shop/images/${product.image}`,
      "description":
        product.shortDescription ||
        `${product.name} available in Ahmedabad. High quality baby products.`,
      "brand": { "@type": "Brand", "name": "Baby Bliss" },
      "offers": {
        "@type": "Offer",
        "url": `https://baby-toys.shop/baby-products/${slugify(category.name)}`,
        "priceCurrency": "INR",
        "price": product.price,
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
      }
    }))
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* SEO Meta Tags */}
      <Head>
        <title>{`${category.name} | Baby Products - Baby Bliss Boutique`}</title>
        <meta
          name="description"
          content={`Shop ${category.name} and other baby products online at Baby Bliss Boutique. Quality baby essentials delivered across India.`}
        />
        <meta
          name="keywords"
          content={`baby products, ${category.name}, baby toys, baby care, baby clothes, baby essentials`}
        />
        <meta property="og:title" content={`${category.name} | Baby Products - Baby Bliss Boutique`} />
        <meta
          property="og:description"
          content={`Discover ${category.name} and other baby products for your little ones. Safe, premium, and delivered across India.`}
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content={`https://baby-toys.shop/baby-products/${slugify(category.name)}`} />
        <meta property="og:type" content="website" />
      </Head>

      {/* JSON-LD Schema */}
      {filteredProducts.length > 0 && (
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <Header />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{category.name}</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          {!isMobile && (
            <aside className="w-full md:w-1/5 bg-white p-6 rounded-xl shadow-lg sticky top-6 h-max">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg text-gray-800">Filter by Price</h2>
                <button
                  onClick={() => setMaxPrice(10000)}
                  className="text-sm text-orange-500 font-semibold hover:underline"
                >
                  Reset
                </button>
              </div>
              <MaxPriceSlider
                maxPrice={10000}
                value={maxPrice}
                onChange={(value) => setMaxPrice(value)}
              />
            </aside>
          )}

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative rounded overflow-hidden">
                    <Image
                      src={`/images/${product.image}`}
                      alt={product.name}
                      className="object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                      width={500}
                      height={500}
                      onClick={() => openLightbox(`/images/${product.image}`)}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
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
                        className="w-full text-center px-4 py-2 bg-orange-500 text-white rounded text-sm md:text-base hover:bg-orange-600 transition"
                      >
                        Buy Now
                      </a>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">
                No products found under ₹{maxPrice}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
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

// Static paths + props
export async function getStaticPaths() {
  const paths = categories.map((c) => ({ params: { slug: slugify(c.name) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = categories.find((c) => slugify(c.name) === params.slug);
  return { props: { category } };
}
