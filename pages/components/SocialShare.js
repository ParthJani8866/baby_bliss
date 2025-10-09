"use client";

import { FaPinterest, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function SocialShare() {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "https://baby-toys.shop"; // fallback
  const pageTitle = "Explore Parenting Month by Month – Complete Guide";

  return (
    <div className="flex space-x-4 mt-2">
      {/* Pinterest Share */}
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&description=${encodeURIComponent(pageTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-red-500 hover:text-red-600"
        title="Share on Pinterest"
      >
        <FaPinterest className="w-5 h-5" />
      </a>

      {/* Instagram Link (Instagram doesn’t support direct share, keeps your account link) */}
      <a
        href="https://www.instagram.com/baby_toys.cycles/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-pink-500 hover:text-pink-600"
        title="Visit our Instagram"
      >
        <FaInstagram className="w-5 h-5" />
      </a>

      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-500 hover:text-blue-600"
        title="Share on Facebook"
      >
        <FaFacebookF className="w-5 h-5" />
      </a>

      {/* Twitter Share */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-400 hover:text-blue-500"
        title="Share on Twitter"
      >
        <FaTwitter className="w-5 h-5" />
      </a>
    </div>
  );
}
