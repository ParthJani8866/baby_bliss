"use client";

import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Header from "../components/header";
import { useState, useEffect } from "react";

export default function CategoryPage({ category }) {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative group border border-gray-200 rounded shadow hover:shadow-lg transition-all bg-white overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-blue-600 font-bold">₹{product.price}</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {product.amazonUrl && (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="px-4 py-2 bg-orange-500 text-white rounded"
                  >
                    Buy Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
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
