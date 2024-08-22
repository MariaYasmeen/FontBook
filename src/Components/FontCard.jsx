import React, { useContext} from 'react';
import { FavoritesContext } from '../Context/FavoritiesContext';
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

const FontCard = ({ heading, googleFontLink, backgroundColors }) => {

  const fontDetailsUrl = `http://localhost:3000/fonts/${heading.replace(/ /g, '+')}`;
  // Function to get a random background color
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randomIndex];
  };

  const { addToFavorites } = useContext(FavoritesContext);

  const handleAddToFavorites = () => {
    addToFavorites({
      family: heading,
      link: googleFontLink,
    });
  };

  return (
    <div className="cardcontainer">
      <div className="card cardscontainer" style={{ backgroundColor: getRandomColor() }}>
        <div className="card-header">
      <button onClick={handleAddToFavorites}><i className="fa-regular fa-heart iconcss" style={{color:"black"}}></i></button>  
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
              <li><button  onClick={handleAddToFavorites}>Add to Favrouties</button></li>
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
        <a 
  href={fontDetailsUrl} 
  className="card-link" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="font-card card-body">
    <h5 className="card-title" style={{ fontFamily: heading }}>
      {heading}
    </h5>
  </div>
</a>

      </div>
    </div>
  );
};

export default FontCard;
