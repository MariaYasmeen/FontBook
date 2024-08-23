import React, { useEffect, useState } from 'react';
import { getFonts } from '../Functions/getGFont';
import './Pages.css';
import FontCategory from '../Components/FontCategory';
import FontCard from '../Components/FontCard';
import { Navbar } from '../Navbar/Navbar';
import Hero from '../HeroSection/Hero';
import SearchBar from '../Components/SearchBar';

const FontList = () => {
  const [fonts, setFonts] = useState([]);
  const [visibleFonts, setVisibleFonts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const fontsPerPage = 100;

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const fontsData = await getFonts();
        console.log(fontsData); // Logs the array returned by the API

        if (Array.isArray(fontsData)) {
          setFonts(fontsData);
          preloadFonts(fontsData.slice(0, fontsPerPage)); // Preload fonts for the first page
          setVisibleFonts(fontsData.slice(0, fontsPerPage)); // Initially show only the first 100 fonts
        } else {
          console.error('Unexpected response structure:', fontsData);
          setFonts([]);
        }
      } catch (error) {
        console.error('Error fetching fonts:', error);
        setFonts([]);
      }
    };

    fetchFonts();
  }, []);

  // Filter and update visible fonts based on the search term or page number
  useEffect(() => {
    const filtered = fonts.filter(font =>
      font.family.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const newVisibleFonts = filtered.slice(0, page * fontsPerPage);
    preloadFonts(newVisibleFonts); // Preload fonts for the current page
    setVisibleFonts(newVisibleFonts);
  }, [searchTerm, page, fonts]);

  // Preload fonts dynamically
  const preloadFonts = (fontBatch) => {
    fontBatch.forEach(font => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '+')}:wght@400;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  };

  const loadMoreFonts = () => {
    setPage(prevPage => prevPage + 1);
  };

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <div className="searchfiltercss">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FontCategory fonts={fonts} />
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
