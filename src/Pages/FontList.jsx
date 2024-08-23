import React, { useContext } from 'react';
import { FontContext } from '../Context/FontContext';
import './Pages.css';
import FontCard from '../Components/FontCard';
import { Helmet } from 'react-helmet-async';
import Hero from '../HeroSection/Hero';
import SearchBar from '../Components/SearchBar';
import FontCategory from '../Components/FontCategory';

const FontList = () => {
  const { fonts, searchTerm, setSearchTerm, page, loadMoreFonts } = useContext(FontContext);
  const fontsPerPage = 100;

  const visibleFonts = fonts.filter(font =>
    font.family.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, page * fontsPerPage);

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  return (
    <>
      <Helmet>
        <title>FontBook | Find 1000s of free fonts.</title>
        <meta name="description" content={`Flip into the WORLD of Typefaces  with FontBook. 1000s of Free Fontsto YourStyle!`} />
      </Helmet>
      <Hero />
      <div className="searchfiltercss">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FontCategory />
      </div>
      <div className="font-list">
        {visibleFonts.length > 0 ? (
          visibleFonts.map((font, index) => (
            <FontCard 
              key={index}
              backgroundColors={backgroundColors} 
              heading={font.family}
              googleFontLink={`https://fonts.google.com/specimen/${font.family.replace(/ /g, '+')}?preview.layout=grid`}
            />
          ))
        ) : (
          <p>Loading fonts...</p>
        )}
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
