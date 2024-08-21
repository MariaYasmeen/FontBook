import React, { useState } from 'react';
import './Components.css';

const TextResizer = ({fontFamily}) => {
  const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing '); // State for input text
  const [fontSize, setFontSize] = useState(16); // State for font size

  return (
    <div className="text-resizer-container">
      <div className="input-slider-row">
        <input
          type="text"
          placeholder="Enter your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="text-input"
        />
        <input
          type="range"
          min="10"
          max="100"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="font-slider"
        />
      </div>
      <div className="text-display-box" style={{ fontSize: `${fontSize}px` }}>
        {text}
      </div>
    </div>
  );
};

export default TextResizer;
