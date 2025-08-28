"use client";

import Head from "next/head";
import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";

export default function Header() {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Baby Bliss Boutique - Premium Baby Products</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-gray-800">Baby Bliss Boutique</h1>
          </Link>

          {/* Category Dropdown */}
          <div className="hidden md:flex ml-6">
            <CategoryDropdown categories={categories} />
          </div>

          {/* Navigation + Search */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/category/baby-care" className="text-gray-700 hover:text-gray-600 transition">
                Baby Care
              </Link>
              <Link href="/category/baby-clothing" className="text-gray-700 hover:text-gray-600 transition">
                Baby Clothing
              </Link>
              <Link href="/category/baby-safety" className="text-gray-700 hover:text-gray-600 transition">
                Baby Safety
              </Link>
            </nav>

            {/* Search Box */}
            <div>
              <input
                type="text"
                placeholder="Search products..."
                className="px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
