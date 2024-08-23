import React, { useContext } from 'react';
import { BookmarkContext } from '../Context/BookmarkContext';
import './Components.css';

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

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randomIndex];
  };
  const { bookmarks, addToBookmarks, removeFromBookmarks } = useContext(BookmarkContext);

  // Check if the font is already in the bookmarks
  const isBookmarked = bookmarks.some(favFont => favFont.family === heading);

  const handleToggleBookmarks = () => {
    if (isBookmarked) {
      removeFromBookmarks(heading);
      // Update local storage after removing a font
      const updatedBookmarks = bookmarks.filter(favFont => favFont.family !== heading);
      localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarks));
    } else {
      const newBookmark = {
        family: heading,
        link: googleFontLink,
      };
      addToBookmarks(newBookmark);
      // Update local storage after adding a font
      const updatedBookmarks = [...bookmarks, newBookmark];
      localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarks));
    }
  };

  return (
    <div className="cardcontainer">
      <div className="card cardscontainer" style={{ backgroundColor: getRandomColor() }}>
        <div className="card-header">
          <button onClick={handleToggleBookmarks} className='bookmarkbtn bookmark-button'>
            <i className={isBookmarked ? "fa-solid fa-bookmark iconcss" : "fa-regular fa-bookmark iconcss"} style={{color:"black"}}></i>
            <span className="bookmark-label">Bookmark</span>
          </button>
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
                <button onClick={handleToggleBookmarks}>
                  {isBookmarked ? 'Unbookmark this font' : 'Bookmark this font'}
                </button>
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
