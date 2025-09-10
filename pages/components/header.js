"use client";

import Head from "next/head";
import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icons for hamburger

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    setMounted(true);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Baby Bliss Boutique - Premium Baby Products</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md w-full relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            {!isMobile && (
              <h1 className="text-xl font-bold text-orange-500">Baby Bliss</h1>
            )}
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              <div className="ml-6">
                <CategoryDropdown categories={categories} />
              </div>
              <nav className="flex space-x-4">
                <Link
                  href="/motherhood-blogs"
                  className="text-lg font-semibold text-orange-500 hover:text-blue-600 transition"
                >
                  Motherhood Blogs
                </Link>
                <Link
                  href="/blogs"
                  className="text-lg font-semibold text-orange-500 hover:text-blue-600 transition"
                >
                  Blogs
                </Link>
                <Link
                  href="/pregnancy-week-wise"
                  className="text-lg font-semibold text-orange-500 hover:text-blue-600 transition"
                >
                  Pregnancy Week Wise
                </Link>
              </nav>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-orange-500 hover:bg-gray-100 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobile && menuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-md absolute top-full left-0 w-full z-50">
            <div className="flex flex-col space-y-4 p-4">
              <CategoryDropdown categories={categories} />
              <Link
                href="/motherhood-blogs"
                className="text-lg font-semibold text-orange-500 hover:text-blue-600 transition"
              >
                Motherhood Blogs
              </Link>
              <Link
                href="/blogs"
                className="text-lg font-semibold text-orange-500 hover:text-blue-600 transition"
              >
                Blogs
              </Link>
              <Link
                href="/pregnancy-week-wise"
                className="text-lg font-semibold text-orange-500 hover:text-blue-600 transition"
              >
                Pregnancy Week Wise
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
