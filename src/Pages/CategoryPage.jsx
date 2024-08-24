import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontContext } from '../Context/FontContext';
import FontCard from '../Components/FontCard';
import { Helmet } from 'react-helmet-async';
import "./Pages.css";
import Hero from '../HeroSection/Hero';

const CategoryPage = () => {
  const { category } = useParams(); // Get category from route parameters
  const { fonts } = useContext(FontContext);
  const [filteredFonts, setFilteredFonts] = useState([]);

  useEffect(() => {
    // Filter fonts based on the selected category
    // For simplicity, let's assume each font has a category property
    setFilteredFonts(fonts.filter(font => font.category === category));
  }, [category, fonts]);

  return (
    <>
      <Helmet>
        <title>{category} | Category - FontBook</title> {/* Set dynamic title */}
        <meta name="description" content={`Let your text appear in 1000s of unique styles in FontBook`} /> {/* Add meta description */}
      </Helmet>
    <Hero />
    <div className="t">
      <h5 className='text-center' style={{padding:"40px"}}>Font Category ~{category} </h5>
      <div className="font-list">
        {filteredFonts.length > 0 ? (
          filteredFonts.map(font => (
            <FontCard
              key={font.family}
              heading={font.family}
              googleFontLink={font.link}
              backgroundColors={[
                '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', '#faf3dd', '#e6ccb2', '#ecf39e', '#b7e4c7'
              ]}
            />
          ))
        ) : (
          <p>No fonts found in this category</p>
        )}
      </div>
    </div>
    </>
  );
};

export default CategoryPage;
