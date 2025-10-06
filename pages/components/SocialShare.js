"use client";

import { FaPinterest, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"; // <-- React Icons

export default function SocialShare() {
  return (
    <div className="flex space-x-4 mt-2">
      {/* Pinterest account */}
      <a
        href="https://pin.it/4T9lYMXPH" // replace with your account
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-red-500 hover:text-red-600"
        title="Visit our Pinterest"
      >
        <FaPinterest className="w-5 h-5" />
        <span></span>
      </a>

      {/* Instagram account */}
      <a
        href="https://www.instagram.com/baby_toys.cycles/" // replace with your account
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-pink-500 hover:text-pink-600"
        title="Visit our Instagram"
      >
        <FaInstagram className="w-5 h-5" />
        <span></span>
      </a>

       {/* Instagram account */}
      <a
        href="https://www.facebook.com/share/16N9YzqWcc/" // replace with your account
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 text-blue-500 hover:text-blue-600"
        title="Visit our FaceBook"
      >
        <FaFacebookF className="w-5 h-5" />
        <span></span>
      </a>
    </div>
  );
}
