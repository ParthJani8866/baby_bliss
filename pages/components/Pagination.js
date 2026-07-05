'use client';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  
  // Always show first page
  pages.push(1);
  
  // Calculate range around current page
  const startPage = Math.max(2, currentPage - 2);
  const endPage = Math.min(totalPages - 1, currentPage + 2);
  
  // Add ellipsis after first page if needed
  if (startPage > 2) {
    pages.push('...');
  }
  
  // Add pages around current page
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  // Add ellipsis before last page if needed
  if (endPage < totalPages - 1) {
    pages.push('...');
  }
  
  // Always show last page if there's more than one page
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 my-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md"
        }`}
      >
        ← Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
            page === currentPage
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg"
              : typeof page === 'number'
              ? "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-blue-300 hover:shadow-md"
              : "bg-transparent text-gray-500 border-transparent cursor-default"
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-500 hover:shadow-md"
        }`}
      >
        Next →
      </button>

      {/* Page Info */}
      <div className="text-sm text-gray-600 ml-4">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}