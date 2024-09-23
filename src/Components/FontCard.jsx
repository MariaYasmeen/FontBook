import React, { useContext, useState, useMemo } from 'react';
import { BookmarkContext } from '../Context/BookmarkContext';
import './Components.css';

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const copyToClipboard = (text, callback) => {
  navigator.clipboard.writeText(text).then(() => {
    callback(); // Call the callback function to change the button text
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

const FontCard = ({ heading, googleFontLink, backgroundColors }) => {
  const [copyText, setCopyText] = useState('Copy URL');
  const fontDetailsUrl = `http://fontboook.web.app/fonts/${heading.replace(/ /g, '-')}`;

  const cardBackgroundColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[randomIndex];
  }, [heading, backgroundColors]); // Include backgroundColors in the dependency array

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

  const handleCopyUrlClick = (e) => {
    e.stopPropagation();
    copyToClipboard(fontDetailsUrl, () => {
      setCopyText('URL Copied');
      setTimeout(() => {
        setCopyText('Copy URL');
      }, 1000); // Revert to "Copy URL" after 1 second
    });
  };

  return (
    <div className="">
      <div className="card cardscontainer" style={{ backgroundColor: cardBackgroundColor }}>
        <div className="card-header">
          <button onClick={handleToggleBookmarks} className='bookmarkbtn bookmark-button'>
            <i className={isBookmarked ? "fa-solid fa-bookmark iconcss" : "fa-regular fa-bookmark iconcss"} style={{color:"black"}}></i>
            <span className="bookmark-label">{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </button>
          <div className="dropdown">
            <a  href="" className="btn" role="button" data-bs-toggle="dropdown">
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <ul className="dropdown-menu dropdowntxt">
              <li>
                <button
                  className="dropdown-item font-link"
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
                <button onClick={handleToggleBookmarks} style={{border:"none"}} className="dropdown-item font-link">
                  {isBookmarked ? 'Unbookmark this font' : 'Bookmark this font'}
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item font-link" 
                  onClick={handleCopyUrlClick}
                >
                  {copyText}
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
