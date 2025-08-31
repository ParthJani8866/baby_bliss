"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Baby Bliss</h3>
          <p className="text-sm">
            Baby Bliss Boutique is your one-stop shop for premium baby products. We care about quality, safety, and comfort for your little ones.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-600 transition">Blogs</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@babybliss.com</p>
          <p className="text-sm">Phone: +91-123-456-7890</p>
          <p className="text-sm">Address: 123 Baby Bliss Street, Your City, Your Country</p>

          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Baby Bliss Boutique. All rights reserved.
      </div>
    </footer>
  );
}
