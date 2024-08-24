import React, { createContext, useState, useEffect } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  // Load initial bookmarks from local storage
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  // Save bookmarks to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookmarkedItems', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addToBookmarks = (font) => {
    setBookmarks((prevBookmarks) => {
      if (prevBookmarks.some(fav => fav.family === font.family)) {
        return prevBookmarks; // If the font is already bookmarked, do nothing
      }
      return [...prevBookmarks, font];
    });
  };

  const removeFromBookmarks = (fontFamily) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter(fav => fav.family !== fontFamily)
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addToBookmarks, removeFromBookmarks }}>
      {children}
    </BookmarkContext.Provider>
  );
};
