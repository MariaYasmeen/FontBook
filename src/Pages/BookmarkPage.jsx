import React, { useContext } from 'react';
import { BookmarkContext } from '../Context/BookmarkContext';
import FontCard from '../Components/FontCard';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../Navbar/Navbar';

const BookmarkPage = () => {
  const { bookmarks } = useContext(BookmarkContext);

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd", '#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  return (
    <>
      <Helmet>
        <title> BookMark - FontBook</title> {/* Set dynamic title */}
        <meta name="description" content={`Flip into the WORLD of Typefaces with FontBook. 1000s of Free Fonts to Your Style!`} /> {/* Add meta description */}
      </Helmet>
      <Navbar />
      <div className="bookmarks-page">
        <h2 className='text-center' style={{ padding: "40px", fontSize: "22px" }}>Your FontBook's Bookmarks</h2>
        <div className="font-list">
          {bookmarks.length > 0 ? (
            bookmarks.map((font, index) => (
              <FontCard
                key={index}
                heading={font.family}
                googleFontLink={font.link}
                backgroundColors={backgroundColors}
                isBookmarked={true} // Pass isBookmarked as true for rendering filled bookmark icon
              />
            ))
          ) : (
            <p className='text-center'>Your FontBook has no Bookmarks yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookmarkPage;
