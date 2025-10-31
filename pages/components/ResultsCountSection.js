'use client';

import { useState, useEffect } from 'react';

export default function ResultsCountSection({ 
  selectedGender, 
  selectedLetter, 
  totalNames, 
  currentPage, 
  namesPerPage 
}) {
  const [likedNames, setLikedNames] = useState({});

  useEffect(() => {
    // Load liked names from localStorage
    const loadLikedNames = () => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("likedNames");
        return stored ? JSON.parse(stored) : {};
      }
      return {};
    };

    setLikedNames(loadLikedNames());
  }, []);

  const startIndex = (currentPage - 1) * namesPerPage + 1;
  const endIndex = Math.min(currentPage * namesPerPage, totalNames);

  return (
    <section className="text-center mb-8">
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <p className="text-gray-700 text-lg mb-2">
          Found <strong className="text-blue-600">{totalNames}</strong> {selectedGender.toLowerCase()} name{totalNames !== 1 ? 's' : ''} starting with <strong className="text-purple-600">{selectedLetter}</strong>
        </p>
        <p className="text-gray-600 text-sm mb-2">
          Showing names <strong>{startIndex}</strong> to <strong>{endIndex}</strong> of {totalNames} total names
        </p>
        {Object.keys(likedNames).filter(name => likedNames[name]).length > 0 && (
          <p className="text-gray-600">
            <strong>Your favorites: </strong>
            <span className="text-orange-600">
              {Object.keys(likedNames).filter(name => likedNames[name]).join(", ")}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}