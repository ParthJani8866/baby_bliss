"use client";

import Head from "next/head";
import { categories } from "../../data/categories";
import { slugify } from "../../utils/slugify";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      <meta name="8e14bbdd94c8fba73ae094f9c07249548ec74659" content="8e14bbdd94c8fba73ae094f9c07249548ec74659" />
      <Script id="custom-ad-script" strategy="afterInteractive">
                {`
          (function(xlu){
            var d = document,
                s = d.createElement('script'),
                l = d.scripts[d.scripts.length - 1];
            s.settings = xlu || {};
            s.src = "//weepy-attack.com/b.XPVqsBdWGtl/0yYfWccv/eekmi9HuaZ_UslHk_PuTcYT2/MBzMQi3eNuTLAztINmjpYTzQNnDjci1pMYQg";
            s.async = true;
            s.referrerPolicy = 'no-referrer-when-downgrade';
            l.parentNode.insertBefore(s, l);
          })({})
        `}
            </Script>
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
            {!isMobile && (
              <h1 className="text-xl font-bold text-orange-500">Baby Bliss</h1>
            )}
          </Link>

          {/* Category Dropdown */}
          <div className="md:flex ml-6">
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
              {/* New Blogs Menu */}
              <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">
                Blogs
              </Link>
            </nav>

           
          </div>
        </div>
      </header>
    </>
  );
}
