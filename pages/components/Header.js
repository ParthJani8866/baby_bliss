"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-orange-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <h1 className="text-2xl font-bold text-orange-600">Baby Bliss</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/motherhood-blogs" className="text-gray-700 hover:text-orange-500 font-medium">
            Motherhood
          </Link>
          <Link href="/pregnancy-week-wise" className="text-gray-700 hover:text-orange-500 font-medium">
            Pregnancy
          </Link>
          <Link href="/blogs" className="text-gray-700 hover:text-orange-500 font-medium">
            Blogs
          </Link>

          {session ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none text-gray-700 font-medium"
              >
                {session.user.name}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg py-2 z-50">
                  <button
                    onClick={() => signOut()}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login with Google
            </button>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-orange-50 border-t border-gray-200">
          <Link
            href="/motherhood-blogs"
            className="block px-4 py-3 text-gray-700 hover:bg-orange-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Motherhood
          </Link>
          <Link
            href="/pregnancy-week-wise"
            className="block px-4 py-3 text-gray-700 hover:bg-orange-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pregnancy
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-3 text-gray-700 hover:bg-orange-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>

          {session ? (
            <button
              onClick={() => { signOut(); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-100"
            >
              Logout ({session.user.name})
            </button>
          ) : (
            <button
              onClick={() => { signIn("google"); setMobileMenuOpen(false); }}
              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-100"
            >
              Login with Google
            </button>
          )}
        </div>
      )}
    </header>
  );
}
