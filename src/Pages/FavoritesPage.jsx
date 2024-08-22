import React, { useContext } from 'react';
import { FavoritesContext } from '../Context/FavoritiesContext';
import FontCard from '../Components/FontCard';
import { Navbar } from '../Navbar/Navbar';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

  return (
    <>
    <Navbar/>
    <div className="favorites-page">
      <h2>Your Favorite Fonts</h2>
      <div className="font-list">
        {favorites.length > 0 ? (
          favorites.map((font, index) => (
            <FontCard
              key={index}
              heading={font.family}
              googleFontLink={font.link}
              backgroundColors={backgroundColors}
              removeFromFavorites={removeFromFavorites}
            />
          ))
        ) : (
          <p>You haven't added any fonts to your favorites yet.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default FavoritesPage;
