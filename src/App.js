import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FontList from './Pages/FontList';
import GlyphsPage from './Pages/GlyphsPage';
import FontDetails from './Pages/FontDetails';
import SearchPage from "./Pages/SearchPage";
import { FontProvider } from './Context/FontContext';
import { BookmarkProvider } from './Context/BookmarkContext';
import BookmarkPage from './Pages/BookmarkPage';

function App() {
  return (
    <BookmarkProvider>
       <FontProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FontList />} />
          <Route path="/font/:fontName/glyphs" element={<GlyphsPage />} /> 
          <Route path="/fontsearch" element={<SearchPage />} />
          <Route path="/fonts/:fontFamily" element={<FontDetails />} />
          <Route path="/bookmarks" element={<BookmarkPage />} />
         
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
    </FontProvider>
    </BookmarkProvider>
  );
}

export default App;
