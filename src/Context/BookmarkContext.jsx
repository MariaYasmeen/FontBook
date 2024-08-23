import React, { createContext, useState, useEffect } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookamrks] = useState([]);

  // Load initial bookamrks from local storage
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookamrks(storedBookmarks);
  }, []);

  // Save bookmarks to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('bookmarkedItems', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addToBookmarks = (font) => {
    setBookamrks((prevBookmarks) => {
      // Check if the font is already in the bookmarks list
      if (prevBookmarks.some(fav => fav.family === font.family)) {
        return prevBookmarks; // Do nothing if it's already added
      }
      return [...prevBookmarks, font];
    });
  };

  const removeFromBookmarks = (fontFamily) => {
    setBookamrks((prevBookmarks) =>
      prevBookmarks.filter(fav => fav.family !== fontFamily)
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addToBookmarks, removeFromBookmarks}}>
      {children}
    </BookmarkContext.Provider>
  );
};
