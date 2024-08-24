import React, { createContext, useState, useEffect } from 'react';
import { getFonts } from '../Functions/getGFont';
import Loader from '../Components/Loader';

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fonts, setFonts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // Loading state
  const fontsPerPage = 100;

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const fontsData = await getFonts();
        if (Array.isArray(fontsData)) {
          setFonts(fontsData);
          preloadFonts(fontsData.slice(0, fontsPerPage)); // Preload fonts for the first page
        } else {
          console.error('Unexpected response structure:', fontsData);
          setFonts([]);
        }
      } catch (error) {
        console.error('Error fetching fonts:', error);
        setFonts([]);
      } finally {
        setLoading(false); // Set loading to false after fonts are fetched
      }
    };

    fetchFonts();
  }, []);

  // Preload fonts dynamically
  const preloadFonts = (fontBatch) => {
    fontBatch.forEach(font => {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '-')}:wght@400;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  };

  const loadMoreFonts = () => {
    setPage(prevPage => prevPage + 1);
  };

  // Display the Loader if fonts are still loading
  if (loading) {
    return <Loader />;
  }

  return (
    <FontContext.Provider value={{ fonts, searchTerm, setSearchTerm, page, loadMoreFonts }}>
      {children}
    </FontContext.Provider>
  );
};
