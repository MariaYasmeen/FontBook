import React, { useContext } from 'react';
import { FontContext } from '../Context/FontContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(FontContext);

  return (
    <div className="search-" style={{width:"800px"}}>
    <input 
      type="text" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
      placeholder="Search for fonts..." 
      className='search-bar text-center'
    />
    </div>
  );
};

export default SearchBar;
