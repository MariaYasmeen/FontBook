import React, { useContext } from 'react';
import { FontContext } from '../Context/FontContext';
import FontCard from '../Components/FontCard';
import './Pages.css'; // Optional: Add any specific styles for the search page
import { Navbar } from '../Navbar/Navbar';

const SearchPage = () => {
  const { searchTerm, setSearchTerm, fonts } = useContext(FontContext);

  // Filter fonts based on the search term
  const filteredFonts = fonts.filter(font => 
    font.family.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <div className="text-center">
    <h5 className=' ' style={{padding:"30px", fontSize:"14px"}}>Search from FontBook</h5 >
    <div className="input-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for font Style.."
        className="font-input"
      />
      </div>
      <div className="search-results">
        <div className="font-list">
        {filteredFonts.length > 0 ? (
          filteredFonts.map(font => (
            <FontCard
              key={font.family}
              heading={font.family}
              googleFontLink={font.link}
              backgroundColors={[
                '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', '#faf3dd', '#e6ccb2', '#ecf39e', '#b7e4c7'
              ]}
            />
          ))
        ) : (
          <p>No fonts found</p>
        )}
        </div>
      </div>
    </div>
    </>
  );
};

export default SearchPage;
