import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (font) => {
    setFavorites((prevFavorites) => {
      // Check if the font is already in the favorites list
      if (prevFavorites.some(fav => fav.family === font.family)) {
        return prevFavorites; // Do nothing if it's already added
      }
      return [...prevFavorites, font];
    });
  };

  const removeFromFavorites = (fontFamily) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(fav => fav.family !== fontFamily)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
