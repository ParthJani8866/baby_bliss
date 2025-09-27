"use client";

import Head from "next/head";
import Script from "next/script";
import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Header from "../components/Header";
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 24;

  // Fetch products
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Set default selected category based on page
  useEffect(() => {
    setSelectedCategories([category.id]);
  }, [category.id]);

  // Filter products by price + categories
  useEffect(() => {
    let filtered = products.filter((p) => p.price <= maxPrice);
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.categoryId));
    }
    setFilteredProducts(filtered);
    setCurrentPage(1); // reset to first page when filters change
  }, [maxPrice, products, selectedCategories]);

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

  const toggleCategory = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // JSON-LD Schema for products
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": paginatedProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1 + (currentPage - 1) * PRODUCTS_PER_PAGE,
      "item": {
        "@type": "Product",
        "name": product.name,
        "image": `https://baby-toys.shop/images/${product.image}`,
        "description":
          product.shortDescription ||
          `${product.name} available in Ahmedabad. High quality baby products.`,
        "brand": { "@type": "Brand", "name": "Belly Buds" },
        "offers": {
          "@type": "Offer",
          "url":
            product.amazonUrl ||
            `https://baby-toys.shop/baby-products/${slugify(category.name)}`,
          "priceCurrency": "INR",
          "price": product.price,
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
        },
      },
    })),
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{`${category.name} | Baby Products - Belly Buds Boutique`}</title>
        <meta
          name="description"
          content={`Shop ${category.name} and other baby products online at Belly Buds Boutique. Quality baby essentials delivered across India.`}
        />
        <meta
          name="keywords"
          content={`baby products, ${category.name}, baby toys, baby care, baby clothes, baby essentials`}
        />
        <meta
          property="og:title"
          content={`${category.name} | Baby Products - Belly Buds Boutique`}
        />
        <meta
          property="og:description"
          content={`Discover ${category.name} and other baby products for your little ones. Safe, premium, and delivered across India.`}
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta
          property="og:url"
          content={`https://baby-toys.shop/baby-products/${slugify(category.name)}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      {paginatedProducts.length > 0 && (
        <Script
          id="product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <Header />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{category.name}</h1>

        {/* Affiliate Disclaimer */}
        <p className="text-xs text-gray-500 mb-6">
          As an Amazon Associate I earn from qualifying purchases.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          {!isMobile && (
            <aside className="w-full md:w-1/5 bg-white p-6 rounded-xl shadow-lg sticky top-6 h-max">
              {/* Price Filter */}
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

              {/* Category Filter */}
              <div className="mt-6">
                <h2 className="font-bold text-lg text-gray-800 mb-2">Filter by Category</h2>
                <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                  {categories.map((c) => (
                    <label key={c.id} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(c.id)}
                        onChange={() => toggleCategory(c.id)}
                        className="accent-orange-500"
                      />
                      {c.name}
                    </label>
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* Mobile Filters */}
          {isMobile && (
            <div className="mb-4">
              <button
                className="w-full bg-orange-500 text-white py-2 rounded"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                {showMobileFilters ? "Hide Filters" : "Show Filters"}
              </button>

              {showMobileFilters && (
                <div className="mt-4 bg-white p-4 rounded shadow">
                  <div className="mb-4">
                    <h2 className="font-bold text-lg text-gray-800 mb-2">Filter by Price</h2>
                    <MaxPriceSlider
                      maxPrice={10000}
                      value={maxPrice}
                      onChange={(value) => setMaxPrice(value)}
                    />
                    <button
                      onClick={() => setMaxPrice(10000)}
                      className="mt-2 text-sm text-orange-500 font-semibold hover:underline"
                    >
                      Reset Price
                    </button>
                  </div>

                  <div>
                    <h2 className="font-bold text-lg text-gray-800 mb-2">Filter by Category</h2>
                    <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
                      {categories.map((c) => (
                        <label key={c.id} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(c.id)}
                            onChange={() => toggleCategory(c.id)}
                            className="accent-orange-500"
                          />
                          {c.name}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
                >
                  <div className="relative rounded overflow-hidden">
                    <Image
                      src={`/images/${product.image}`}
                      alt={product.name}
                      className="object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                      width={500}
                      height={500}
                      onClick={() => openLightbox(`/images/${product.image}`)}
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-sm md:text-base">{product.name}</h3>
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
                        className="w-full text-center px-4 py-2 bg-orange-500 text-white rounded text-sm md:text-base hover:bg-orange-600 transition"
                        aria-label={`Buy ${product.name} on Amazon`}
                        onClick={async () => {
                          try {
                            await fetch("/api/add-purchase", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                productId: product._id,
                                productName: product.name,
                                price: product.price,
                                amazonUrl: product.amazonUrl,
                              }),
                            });
                            console.log("Purchase recorded!");
                          } catch (err) {
                            console.error("Failed to record purchase:", err);
                          }
                        }}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                  }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}
      </section>

      {lightboxOpen && (
        <Lightbox mainSrc={selectedImage} onCloseRequest={() => setLightboxOpen(false)} />
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
