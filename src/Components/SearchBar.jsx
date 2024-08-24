import React, { useContext } from 'react';
import { FontContext } from '../Context/FontContext';
import './Components.css';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(FontContext);

  return (
    <div className="responsive-search-container">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for fonts..." 
        className="responsive-search-input"
      />
    </div>
  );
};

export default SearchBar;
