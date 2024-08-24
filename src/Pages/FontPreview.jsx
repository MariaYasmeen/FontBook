import React, { useContext } from 'react';
import { FontContext } from '../Context/FontContext';
import './Pages.css'; // Assuming you'll style this separately
import { Navbar } from '../Navbar/Navbar';

const FontPreview = () => {
  const { fonts, searchTerm, setSearchTerm, page, loadMoreFonts } = useContext(FontContext);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const displayedFonts = fonts.slice(0, page * 100);

  return (
    <>
      <Navbar />
      <div className="font-display-page">
        <div className="input-container">
          <input
            type="text"
            placeholder="Type to preview your text in different font styles."
            value={searchTerm}
            onChange={handleInputChange}
            className="font-input"
          />
        </div>
        <div className="font-cards-container">
          {displayedFonts.map((font, index) => (
            <div key={index} className="previewfont-cards" style={{ fontFamily: font.family }}>
              <p className="font-sample">{searchTerm || "There are two powers in the world; one is sword & other is pen."}</p>
              <a
                href={`http://localhost:3000/fonts/${font.family.replace(/ /g, '+')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-link"
              >
                {font.family}
              </a>
            </div>
          ))}
        </div>
        {page * 100 < fonts.length && (
          <div className="load-more-container">
            <button onClick={loadMoreFonts} className="load-more-button">Explore More Fonts</button>
          </div>
        )}
      </div>
    </>
  );
};

export default FontPreview;
