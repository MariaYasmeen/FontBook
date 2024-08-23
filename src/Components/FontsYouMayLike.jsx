import React, { useEffect } from 'react';
import FontCard from './FontCard'; // Import the FontCard component

const FontsYouMayLike = ({ allFonts, currentFont }) => {
  // Filter out the current font and select at least 10 fonts
  const filteredFonts = allFonts.filter(font => font.family !== currentFont).slice(0, 10);
  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];
  useEffect(() => {
    // Load the selected fonts dynamically
    filteredFonts.forEach(font => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '+')}`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }, [filteredFonts]);

  return (
    <div className="fonts-you-may-like font-list">
      {filteredFonts.map(font => (
        <FontCard 
        key={font.family} 
        heading={font.family} 
          backgroundColors={backgroundColors}
           
              googleFontLink={font.link}
         />
      ))}
    </div>
  );
};

export default FontsYouMayLike;
