import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FontList from './Pages/FontList';
import GlyphsPage from './Pages/GlyphsPage';
import FontDetails from './Pages/FontDetails';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FontList />} />
          <Route path="/font/:fontName/glyphs" element={<GlyphsPage />} />    
          <Route path="/fonts/:fontFamily" element={<FontDetails />} />
         
        </Routes>
      </BrowserRouter>
      
    </React.StrictMode>
  );
}

export default App;
