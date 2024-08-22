import React, { useEffect, useState } from 'react';
import { getFonts } from '../Functions/getGFont';
import './Pages.css';
import FontCard from '../Components/FontCard';
import { Navbar } from '../Navbar/Navbar';
import Hero from '../HeroSection/Hero';

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
          setVisibleFonts(fontsData.slice(0, fontsPerPage)); // Initially show only the first 100 fonts

          // Preload fonts for the first page
          fontsData.slice(0, fontsPerPage).forEach(font => {
            const link = document.createElement('link');
            link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '+')}`;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
          });
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

  useEffect(() => {
    const filtered = fonts.filter(font =>
      font.family.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setVisibleFonts(filtered.slice(0, page * fontsPerPage));
  }, [searchTerm, page, fonts]);

  const loadMoreFonts = () => {
    setPage(prevPage => prevPage + 1);
  };

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  return (
    <>
      <Navbar />
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

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
