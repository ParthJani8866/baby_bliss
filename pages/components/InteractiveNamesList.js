'use client';

import { useState, useEffect } from 'react';
import NameCard from './NameCard';
import Pagination from './Pagination';
import { getNamesByLetterAndGender, NAMES_PER_PAGE } from '../../utils/babyNamesData';

export default function InteractiveNamesList({ 
  initialNames, 
  totalNames, 
  selectedGender, 
  selectedLetter, 
  initialPage 
}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [currentNames, setCurrentNames] = useState(initialNames);
  const [isLoading, setIsLoading] = useState(false);

  // Load more names when page changes
  useEffect(() => {
    if (currentPage === initialPage) return;
    
    const loadPageData = async () => {
      setIsLoading(true);
      const startIndex = (currentPage - 1) * NAMES_PER_PAGE;
      const endIndex = startIndex + NAMES_PER_PAGE;
      
      // Simulate API call with timeout
      setTimeout(() => {
        const allNames = getNamesByLetterAndGender(selectedLetter, selectedGender);
        setCurrentNames(allNames.slice(startIndex, endIndex));
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 150);
    };

    loadPageData();
  }, [currentPage, selectedGender, selectedLetter, initialPage]);

  if (isLoading) {
    return <NamesListSkeleton />;
  }

  return (
    <section className="mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentNames.map((baby, i) => (
          <NameCard key={`${baby.name}-${i}-${currentPage}`} baby={baby} />
        ))}
      </div>
      
      {Math.ceil(totalNames / NAMES_PER_PAGE) > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(totalNames / NAMES_PER_PAGE)}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
}

function NamesListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100 animate-pulse">
          <div className="flex justify-between items-center mb-2">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}