import React from 'react';
import './Components.css'; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="/LogoImg.png" alt="Loading..." className="loader-image"  />
    </div>
  );
};

export default Loader;
