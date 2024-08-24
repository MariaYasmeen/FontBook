import './App.css';
import React, { useState, useEffect } from 'react';
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
import CategoryPage from './Pages/CategoryPage';
import FontPreview from './Pages/FontPreview';
import Loader from './Components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BookmarkProvider>
      <FontProvider>
        <React.StrictMode>
          {loading ? (
            <Loader /> // Show the Loader while the app is loading
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<FontList />} />
                <Route path="/font/:fontName/glyphs" element={<GlyphsPage />} />
                <Route path="/fontsearch" element={<SearchPage />} />
                <Route path="/fonts/:fontFamily" element={<FontDetails />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/bookmarks" element={<BookmarkPage />} />
                <Route path="/fontpreview" element={<FontPreview />} />
              </Routes>
            </BrowserRouter>
          )}
        </React.StrictMode>
      </FontProvider>
    </BookmarkProvider>
  );
}

export default App;
