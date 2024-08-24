import React, { useState } from 'react';
import "./Pages.css";
import { useParams } from 'react-router-dom';

const GlyphsPage = ({fontFamily}) => {
  const { fontName } = useParams();
  const [hoveredGlyph, setHoveredGlyph] = useState('A');

  const glyphs = [];
  
  // Define the Unicode range you want to display
  const startUnicode = 33; // Space character
  const endUnicode = 126;  // Tilde (~) character

  for (let i = startUnicode; i <= endUnicode; i++) {
    glyphs.push(String.fromCharCode(i));
  }

  return (
    <div className="glyph-container">
      <h1 className="glyphheading text-center">{fontName} Glyphs</h1>
      <div className="glyph-box-container">
        <div
          className="glyphbox"
          style={{ fontFamily: fontFamily, display: 'flex', flexWrap: 'wrap' }}
        >
          {glyphs.map((glyph, index) => (
            <div
              className="glypletters"
              key={index}
              style={{ margin: '10px', fontSize: '24px' }}
              onMouseEnter={() => setHoveredGlyph(glyph)}
              onMouseLeave={() => setHoveredGlyph('')}
            >
              {glyph}
            </div>
          ))}
        </div>
        <div className="hovered-glyph-container">
  <div
    className="hovered-glyph"
    style={{ fontFamily: fontFamily, fontSize: '7em' }} // Adjust size as needed
  >
    {hoveredGlyph || "A"}
  </div>
</div>

      </div>
    </div>
  );
};

export default GlyphsPage;
