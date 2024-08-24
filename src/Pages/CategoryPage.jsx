import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontContext } from '../Context/FontContext';
import FontCard from '../Components/FontCard';
import { Helmet } from 'react-helmet-async';
import './Pages.css';
import Hero from '../HeroSection/Hero';

const CategoryPage = () => {
  const { category } = useParams(); 
  const { fonts, searchTerm, setSearchTerm, page, loadMoreFonts } = useContext(FontContext);

  const fontsPerPage = 100;

  const filteredFonts = fonts.filter(font =>
    font.category === category && font.family.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleFonts = filteredFonts.slice(0, page * fontsPerPage);

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', '#faf3dd', '#e6ccb2', '#ecf39e', '#b7e4c7',
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
        <title>{category} | Category - FontBook</title>
        <meta name="description" content={`Explore fonts in the ${category} category at FontBook.`} />
      </Helmet>
      <Hero />
      
      <div className="t">
        <h5 className='text-center' style={{ padding: '40px' }}>Font Category ~{category}</h5>
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
            <p>No fonts found in this category</p>
          )}
        </div>
        {filteredFonts.length > visibleFonts.length && (
          <div className="text-center" style={{ margin: '20px' }}>
            <button className="btn " onClick={loadMoreFonts} style={{border:"1px solid black"}}>
              Load More {category} Fonts
            </button>
          </div>
          
        )}
      </div>
    </>
  );
};

export default CategoryPage;
