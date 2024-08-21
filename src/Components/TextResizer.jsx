import React, { useState } from 'react';
import './Components.css';

const TextResizer = ({fontFamily}) => {
  const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing '); // State for input text
  const [fontSize, setFontSize] = useState(18); // State for font size
  const fontSizeOptions = [10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72];

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
      <div className="font-size-controls">
      <input
          type="text"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
        />
         <div className="font-size-controls">
          <input
            type="range"
            min="10"
            max="100"
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
