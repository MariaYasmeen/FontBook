import React, { useEffect, useState } from 'react';
import { getFonts } from '../Functions/getGFont';
import './Pages.css';
import FontCard from '../Components/FontCard';
import { Navbar } from '../Navbar/Navbar';

const FontList = () => {
  const [fonts, setFonts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fontsPerPage] = useState(100); // Number of fonts per page

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const fontsData = await getFonts();
        console.log(fontsData); // Logs the array returned by the API

        if (Array.isArray(fontsData)) {
          setFonts(fontsData);

          // Preload fonts by appending links to the document head
          fontsData.forEach(font => {
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

  // Calculate the fonts to display for the current page
  const indexOfLastFont = currentPage * fontsPerPage;
  const indexOfFirstFont = indexOfLastFont - fontsPerPage;
  const currentFonts = fonts.slice(indexOfFirstFont, indexOfLastFont);

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  // Handler for page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Total number of pages
  const totalPages = Math.ceil(fonts.length / fontsPerPage);

  return (
    <>
    <Navbar />
    <div className="font-list">
      {currentFonts.length > 0 ? (
        currentFonts.map((font, index) => (
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
      
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );
};

export default FontList;
