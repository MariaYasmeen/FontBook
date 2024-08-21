import React from 'react';
import { Link } from 'react-router-dom';
import "./Components.css";

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    alert('URL copied to clipboard');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

const FontCard = ({ heading, googleFontLink }) => {
  const fontDetailsUrl = `http://localhost:3000/fonts/${heading.replace(/ /g, '-')}`;

  return (
    <div className="cardcontainer">
      <div className="card cardscontainer">
        <div className="card-header">
          <i className="fa-solid fa-heart"></i>
          <div className="dropdown">
            <a className="btn" role="button" data-bs-toggle="dropdown">
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <ul className="dropdown-menu dropdowntxt">
              <li>
                <button
                  className="dropdown-item font-link btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card link from being triggered
                    openInNewTab(fontDetailsUrl); // Open the details page in a new tab
                  }}
                >
                  Quick View
                </button>
              </li>
              <li>
                <a 
                  className="dropdown-item font-link" 
                  href={googleFontLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Go to Google Font
                </a>
              </li>
              <li>
                <button 
                  className="dropdown-item"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(fontDetailsUrl);
                  }}
                >
                  Copy URL
                </button>
              </li>
            </ul>
          </div>
        </div>
        <Link to={fontDetailsUrl} className="card-link">
          <div className="font-card card-body">
            <h5 className="card-title" style={{ fontFamily: heading }}>
              {heading}
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FontCard;
