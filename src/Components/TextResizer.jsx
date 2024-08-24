import React, { useState } from 'react';
import './Components.css';

const TextResizer = ({fontFamily}) => {
  const [text, setText] = useState('Failure is a word unknown to me.'); // State for input text
  const [fontSize, setFontSize] = useState(18); // State for font size
  const fontSizeOptions = [8, 12, 14, 18, 20, 24, 32, 40, 64, 96, 120, 184, 200];

    // Handle slider change
    const handleSliderChange = (e) => {
        setFontSize(e.target.value);
      };
    
      // Handle dropdown change
      const handleDropdownChange = (e) => {
        setFontSize(e.target.value);
      };

  return (
    <div className="text-resizer-container">
        <h3 className='glyphheading '>Styles</h3>
      <div  className="responsive-search-container" >
      <input
          type="text"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="responsive-search-input"
        />
         <div className="search-container">
          <input
            type="range"
            min="8"
            max="200"
            value={fontSize}
            onChange={handleSliderChange}
            className="font-slider"
          />
          <select
            value={fontSize}
            onChange={handleDropdownChange}
            className="font-dropdown"
          >
            {fontSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}px
              </option>
            ))}
          </select>
       </div>
      </div>
      <div className="text-display-box" style={{ fontSize: `${fontSize}px` , fontFamily: fontFamily}}>
        {text}
      </div>
    </div>
  );
};

export default TextResizer;
