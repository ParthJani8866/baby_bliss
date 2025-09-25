"use client";

import Head from "next/head";
import { slugify } from "../../utils/slugify";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Baby Bliss Boutique - Premium Baby Products</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <header className="bg-white shadow-md w-full sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            {!isMobile && (
              <h1 className="text-xl font-bold text-orange-500 tracking-wide">
                Baby Bliss
              </h1>
            )}
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav className="flex items-center space-x-8 uppercase font-semibold text-sm">
              <Link
                href="/motherhood-blogs"
                className="hover:border-b-2 border-orange-500 pb-1 transition"
              >
                Motherhood Blogs
              </Link>
              <Link
                href="/blogs"
                className="hover:border-b-2 border-orange-500 pb-1 transition"
              >
                Blogs
              </Link>
              <Link
                href="/pregnancy-week-wise"
                className="hover:border-b-2 border-orange-500 pb-1 transition"
              >
                Pregnancy Week Wise
              </Link>
            </nav>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-orange-500 hover:bg-gray-100 transition"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div className="bg-white shadow-md border-t border-gray-200 absolute top-full left-0 w-full">
            <div className="flex flex-col space-y-6 p-6 text-lg font-semibold text-gray-700">
              <CategoryDropdown categories={categories} />
              <Link href="/motherhood-blogs">Motherhood Blogs</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/pregnancy-week-wise">Pregnancy Week Wise</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
