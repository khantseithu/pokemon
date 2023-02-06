import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="text-center py-5">
      {goToPrevPage && (
        <button
          className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 "
          onClick={goToPrevPage}
        >
          Previous
        </button>
      )}
      {goToNextPage && (
        <button
          className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
          onClick={goToNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
}
