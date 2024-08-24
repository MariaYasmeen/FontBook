import React, { useContext, useEffect } from 'react';
import { FontContext } from '../Context/FontContext';
import './Pages.css';
import FontCard from '../Components/FontCard';
import { Helmet } from 'react-helmet-async';
import Hero from '../HeroSection/Hero';
import SearchBar from '../Components/SearchBar';
import Loader from '../Components/Loader';

const FontList = () => {
  const { fonts, searchTerm, setSearchTerm, page, loadMoreFonts } = useContext(FontContext);
  const fontsPerPage = 100;

  const visibleFonts = fonts.filter(font =>
    font.family.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, page * fontsPerPage);

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd", '#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  useEffect(() => {
    const preloadFonts = (fontBatch) => {
      fontBatch.forEach(font => {
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '-')}:wght@400;700&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      });
    };

    // Preload the visible fonts
    preloadFonts(visibleFonts);

  }, [visibleFonts]); // Run this effect every time visibleFonts changes

  return (
    <>
      <Helmet>
        <title>FontBook | Find 1000s of free fonts.</title>
        <meta name="description" content="Flip into the WORLD of Typefaces with FontBook. 1000s of Free Fonts to Your Style!" />
      </Helmet>
      <Hero />
      
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
   
    
      <div className="fontlist-container">
        <div className="font-list">
          {visibleFonts.length > 0 ? (
            visibleFonts.map((font, index) => (
              <FontCard 
                key={index}
                backgroundColors={backgroundColors} 
                heading={font.family}
                googleFontLink={`https://fonts.google.com/specimen/${font.family.replace(/ /g, '-')}?preview.layout=grid`}
              />
            ))
          ) : (
           " OOPs! No such font Style found."
          )}
        </div>
      </div>
      {visibleFonts.length < fonts.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={loadMoreFonts}>
            Explore More Fonts
          </button>
        </div>
      )}
    </>
  );
};

export default FontList;
