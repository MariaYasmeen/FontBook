import React, { useState, useEffect } from 'react';
import FontCard from './FontCard';
import { Navbar } from '../Navbar/Navbar';
const FontCategory = ({ fonts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredFonts, setFilteredFonts] = useState([]);
  
  const categories = [
    'Serif', 'Sans-Serif', 'Display', 'Handwriting', 'Monospace'
  ];

  useEffect(() => {
    if (selectedCategory) {
      const filtered = fonts.filter(font =>
        font.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredFonts(filtered);
    } else {
      setFilteredFonts([]);
    }
  }, [selectedCategory, fonts]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  return (
    <>
    <div className="font--container">
      <div className="category-selector">
        <select id="font-category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Category</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="font-list">
        {filteredFonts.length > 0 ? (
          filteredFonts.map((font, index) => (
            <FontCard 
              key={index}
              backgroundColors={backgroundColors} 
              heading={font.family}
              googleFontLink={`https://fonts.google.com/specimen/${font.family.replace(/ /g, '+')}?preview.layout=grid`}
            />
          ))
        ) : (
         ""
        )}
      </div>
    </div>
    </>
  );
};

export default FontCategory;