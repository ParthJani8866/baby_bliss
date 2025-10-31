'use client';

import { useState, useEffect } from 'react';

export default function NameCard({ baby }) {
  const [liked, setLiked] = useState(false);
  
  useEffect(() => {
    // Load liked status from localStorage
    const stored = localStorage?.getItem("likedNames");
    const likedNames = stored ? JSON.parse(stored) : {};
    setLiked(!!likedNames[baby.name]);
  }, [baby.name]);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    
    const stored = localStorage?.getItem("likedNames");
    const likedNames = stored ? JSON.parse(stored) : {};
    likedNames[baby.name] = newLiked;
    localStorage.setItem("likedNames", JSON.stringify(likedNames));
  };

  return (
    <div className="group bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
          {baby.name}
        </span>
        <button
          onClick={toggleLike}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            liked
              ? "bg-red-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-500 hover:bg-gray-300"
          }`}
          aria-label={liked ? `Unlike ${baby.name}` : `Like ${baby.name}`}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
        baby.gender === "Boy"
          ? "bg-blue-100 text-blue-700 border border-blue-200"
          : "bg-pink-100 text-pink-700 border border-pink-200"
      }`}>
        {baby.gender}
      </span>
    </div>
  );
}