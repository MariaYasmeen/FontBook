import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FontList from './Pages/FontList';
import GlyphsPage from './Pages/GlyphsPage';
import FontDetails from './Pages/FontDetails';
import { FavoritesProvider } from './Context/FavoritiesContext';
import FavoritesPage from './Pages/FavoritesPage';

function App() {
  return (
    <FavoritesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FontList />} />
          <Route path="/font/:fontName/glyphs" element={<GlyphsPage />} />    
          <Route path="/fonts/:fontFamily" element={<FontDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
         
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
    </FavoritesProvider>
  );
}

export default App;
