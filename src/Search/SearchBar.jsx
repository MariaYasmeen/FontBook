import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    onSearch(value);
    console.log('Input Value:', value);
  };
  

  return (
    <input
      type="text"
      placeholder="Search fonts..."
      value={searchTerm}
      onChange={handleInputChange}
      style={{
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '20px',
      }}
    />
  );
};

export default SearchBar;
