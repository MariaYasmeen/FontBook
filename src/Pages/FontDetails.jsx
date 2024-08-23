import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlyphsPage from './GlyphsPage';
import { getFonts } from '../Functions/getGFont';
import './Pages.css';
import TextResizer from '../Components/TextResizer';
import TextEditor from '../Components/TextEditor';
import { Navbar } from '../Navbar/Navbar';
import FontsYouMayLike from '../Components/FontsYouMayLike';

const FontDetails = () => {
  const { fontFamily } = useParams();
  const [fontDetails, setFontDetails] = useState(null);
  const [allFonts, setAllFonts] = useState([]);

  const typetestertxt = "Character, courage, industry, and perseverance are the four pillars on which the whole edifice of human life can be built and failure is a word unknown to me.";

  // Function to dynamically load the font
  const loadFont = (fontFamily) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, '+')}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };

  useEffect(() => {
    const fetchFontDetails = async () => {
      try {
        const fontsData = await getFonts();
        const font = fontsData.find(f => f.family.replace(/ /g, '+') === fontFamily);
        setFontDetails(font);
        setAllFonts(fontsData); // Store all fonts data to pass to FontsYouMayLike
        loadFont(fontFamily); // Load the font when the component mounts
      } catch (error) {
        console.error('Error fetching font details:', error);
      }
    };

    fetchFontDetails();
  }, [fontFamily]);

  if (!fontDetails) {
    return <p>Loading font details...</p>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="px-4 py-5 my-5 text-center" style={{ fontFamily: fontDetails.family }}>
          <h5 className='glyphheading'>Font - {fontDetails.family}</h5>
          <p className="display-5 text-body-emphasis" style={{ fontSize: '14em', textDecoration: 'none' }}>
            {fontDetails.family}
          </p>
          <div className="col-lg-10 mx-auto">
            <p className="lead mb-6" style={{ fontSize: '2.4em' }}>
              I have no doubt that with unity, faith, and discipline we will compare with any nation of the world. You must make up your minds now. We must sink individualism and petty jealousies and make up our minds to serve the people with honesty and faithfulness.
            </p>
          </div>
          <h6>~ Quid-e-Azam</h6>
        </div>

        <TextResizer fontFamily={fontDetails.family} />

        <div className="fontsizecardcont">
          <div className="card">
            <div className="cardheader">
              {fontFamily} Regular 400 at 18px
            </div>
            <div className="cardbody" style={{ fontFamily: fontDetails.family, fontSize: "18px", fontWeight: "400" }}>
              <p className="card-text">{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
            </div>
          </div>
          <div className="card">
            <div className="cardheader">
              {fontFamily} Regular 400 at 32px
            </div>
            <div className="cardbody" style={{ fontFamily: fontDetails.family, fontSize: "32px", fontWeight: "400" }}>
              <p className="card-text">{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
            </div>
          </div>
        </div>

        <div className="fontsizecardcont">
          <div className="card">
            <div className="cardheader">
              {fontFamily} Bold 700 at 18px
            </div>
            <div className="cardbody" style={{ fontFamily: fontDetails.family, fontSize: "18px", fontWeight: "700" }}>
              <p className="card-text">{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
            </div>
          </div>
          <div className="card">
            <div className="cardheader">
              {fontFamily} Bold 700 at 32px
            </div>
            <div className="cardbody" style={{ fontFamily: fontDetails.family, fontSize: "32px", fontWeight: "700", textDecoration: "bold" }}>
              <p className="card-text">{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
            </div>
          </div>
        </div>

        <TextEditor fontFamily={fontDetails.family} />
        <GlyphsPage fontFamily={fontDetails.family} />

        {/* Fonts You May Like Section */}
        <h2 className='text-center ' style={{padding:"50px", fontSize:"23px"}}>Fonts that you may like</h2>
        <FontsYouMayLike allFonts={allFonts} currentFont={fontDetails.family} />
      </main>
    </>
  );
};

export default FontDetails;
