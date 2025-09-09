"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/Footer";

export default function Blogs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const blogPosts = [
    {
      title: "Newborn Baby Clothes: What You Need to Know in 2025",
      slug: "newborn-baby-clothes",
      description:
        "Complete guide to newborn baby clothes, essentials, safety tips, brands, and care instructions.",
    },
    // ... other blog posts
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <Head>
        <title>Baby Bliss Blogs | Baby Products Tips & Guides</title>
        <meta
          name="description"
          content="Read expert blogs and guides on baby products, newborn care, and parenting tips."
        />
      </Head>

      <div className="flex max-w-7xl mx-auto px-4 py-12">
        {/* LEFT SIDEBAR PRODUCTS */}
        <div className="hidden lg:block w-1/5 pr-4">
          <div className="sticky top-4">
            <div id="left-amazon" className="bg-white border p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Baby Products
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {products.slice(0, 7).map((product, i) => (
                  <a
                    key={`left-${product.id || i}`} // ✅ Added key
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                  >
                    <div className="h-32 w-full flex items-center justify-center bg-white">
                      <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs mt-2 font-medium text-gray-700 text-center px-1 line-clamp-2">
                      {product.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-orange-500">
            Baby Bliss Blogs
          </h1>
          <ul className="space-y-6">
            {blogPosts.map((blog) => (
              <li key={blog.slug} className="border-b pb-4">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-xl font-semibold text-blue-700 hover:underline"
                >
                  {blog.title}
                </Link>
                <p className="text-gray-600 mt-1">{blog.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDEBAR PRODUCTS */}
        <div className="hidden lg:block w-1/5 pl-4">
          <div className="sticky top-4">
            <div id="right-amazon" className="bg-white border p-3 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-orange-500">
                Baby Products
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {products.slice(7, 14).map((product, i) => (
                  <a
                    key={`right-${product.id || i}`} // ✅ Added key
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                  >
                    <div className="h-32 w-full flex items-center justify-center bg-white">
                      <img
                        src={`/images/${product.image}`}
                        alt={product.name}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <p className="text-xs mt-2 font-medium text-gray-700 text-center px-1 line-clamp-2">
                      {product.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
