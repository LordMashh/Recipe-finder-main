import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import RecipeDetailsCard from './Components/RecipeDetailsCard';
import './index.css'

const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;
const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchRecipe = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST
        }
      });
      const data = await response.json();
      console.log(data);
      setRecipes(data);
      setLoading(false);
      setIsSearched(true);
    } catch (error) {
      console.error('Error fetching recipe:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isSearched) {
      setRecipes([]); // Reset recipes when no search is performed
    } else if (searchQuery.trim() !== '') {
      fetchRecipe(searchQuery); // Fetch recipes when search is performed
    }
  }, [isSearched, searchQuery]);

  return (
    <div className="app bg-gray-100 min-h-screen">
      <Header />
      <SearchBar
        onSearch={() => {
          setIsSearched(true);
        }}
        setSearchQuery={setSearchQuery}
      />
      {loading ? (
        <p className="text-center py-4">Loading...</p>
      ) : isSearched ? (
        recipes.length > 0 ? (
          <RecipeDetailsCard recipes={recipes} />
        ) : (
          <p className="text-center py-4">No recipes found or search bar is empty.</p>
        )
      ) : (
        <p className="text-center py-4">Enter a recipe you want to search for.</p>
      )}
    </div>
  );
};

export default App;
