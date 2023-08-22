import React, { useState } from 'react';

const SearchBar = ({ onSearch, setSearchQuery }) => {
  const [query, setQuery] = useState('');
  
  const handleSearch = () => {
    
    setSearchQuery(query); // Set search query in the parent component
    onSearch(); // Trigger the search in the parent component
  };

  return (
    <div className="search-bar p-4 bg-gray-100 flex justify-center items-center">
      <input
        className="border rounded mr-2 p-2 w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search for recipes here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUpCapture={(e)=>{
          if (e.key === 'Enter') {
            handleSearch();
        }
        }}
      />
      <button
        className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
