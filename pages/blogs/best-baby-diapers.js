"use client";

import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";
import Script from "next/script";
import { useEffect, useState } from "react";
import ProductSidebar from "../components/ProductSidebar";

export default function BestBabyDiapers() {
  const [products, setProducts] = useState([]);

  const relatedBlogs = [
    { title: "Newborn Baby Clothes", slug: "newborn-baby-clothes" },
    { title: "Breastfeeding vs Formula", slug: "breastfeeding-vs-formula" },
    { title: "Baby Sleep Tips", slug: "best-baby-lullabies" },
  ];

  // Fetch top 14 baby diaper products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products?category=baby-diapers&limit=14");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />

      {/* SEO */}
      <Head>
        <title>10 Best Baby Diapers: Comfort & Eco-Friendly Picks | Baby Bliss</title>
        <meta
          name="description"
          content="Discover the top 10 baby diapers for absorbency, comfort, and eco-friendliness. Tips for choosing the best diapers for your baby."
        />
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-3 space-y-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-orange-500 transition">Blogs</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">10 Best Baby Diapers</span>
          </nav>

          <h1 className="text-3xl font-bold mb-6 text-orange-500">
            10 Best Baby Diapers: Comfort & Eco-Friendly Picks
          </h1>

          <p className="mb-4 leading-relaxed">
            Choosing the right diaper is crucial for your baby&apos;s comfort and skin health. With so many options available in India, it can be overwhelming. In this guide, we’ll cover the top 10 baby diapers and what to consider when buying them.
          </p>

          {/* Top Diapers List */}
          {[
            "Pampers Premium Care",
            "Huggies Dry Comfort",
            "MamyPoko Pants",
            "Himalaya Gentle Baby Diapers",
            "Johnson’s Baby Diapers",
            "Bambo Nature Diapers",
            "Libero Comfort Diapers",
            "Seventh Generation Diapers",
            "Naty by Nature Babycare",
            "BabyLove Diapers",
          ].map((name, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-semibold mt-6 mb-3">{idx + 1}. {name}</h2>
              <p className="mb-4">
                {/* Placeholder description; replace with your actual descriptions */}
                Description for {name} highlighting absorbency, comfort, and eco-friendliness.
              </p>
            </div>
          ))}

          {/* Tips Section */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Tips for Choosing the Right Diaper</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Check the absorbency level and choose diapers based on your baby’s age and size.</li>
            <li>Look for soft, breathable materials to prevent rashes and irritation.</li>
            <li>Consider eco-friendly options if you want biodegradable and chemical-free products.</li>
            <li>Ensure a snug but comfortable fit for maximum protection.</li>
          </ul>

          {/* Conclusion */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Conclusion</h2>
          <p className="mb-4">
            Selecting the right diaper ensures your baby’s comfort and happiness. From trusted brands like Pampers and Huggies to eco-friendly options like Bambo Nature, there’s a perfect diaper for every baby. Always prioritize comfort, safety, and absorbency when making your choice.
          </p>

          {/* Related Blogs */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Related Blogs</h2>
          <ul className="list-disc pl-5 space-y-2">
            {relatedBlogs.map((blog, idx) => (
              <li key={idx}>
                <Link href={`/blogs/${blog.slug}`} className="text-blue-600 underline">{blog.title}</Link>
              </li>
            ))}
          </ul>
        </article>

        {/* Side Product Sidebar */}
        <ProductSidebar category="baby-diapers" limit={8} title="Top Diaper Picks" />
      </div>

      <Footer />
    </div>
  );
}
