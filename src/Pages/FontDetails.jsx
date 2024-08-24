import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GlyphsPage from './GlyphsPage';
import { getFonts } from '../Functions/getGFont';
import './Pages.css';
import TextResizer from '../Components/TextResizer';
import TextEditor from '../Components/TextEditor';
import { Navbar } from '../Navbar/Navbar';
import FontsYouMayLike from '../Components/FontsYouMayLike';
import { FontContext } from '../Context/FontContext';
import Loader from '../Components/Loader';

const FontDetails = () => {
  const { fontFamily } = useParams();
  const [fontDetails, setFontDetails] = useState(null);
  const { fonts } = useContext(FontContext); // Get fonts from FontContext

  const typetestertxt = "Think 100 times before you take a decision, But once that decision is taken, stand by it as one man.";

  // Function to dynamically load the font
  const loadFont = (fontFamily) => {
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/ /g, '-')}`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };

  useEffect(() => {
    const fetchFontDetails = async () => {
      try {
        const fontsData = await getFonts();
        const font = fontsData.find(f => f.family.replace(/ /g, '-') === fontFamily);
        setFontDetails(font);
        loadFont(fontFamily); // Load the font when the component mounts
      } catch (error) {
        console.error('Error fetching font details:', error);
      }
    };

    fetchFontDetails();
  }, [fontFamily]);

  if (!fontDetails) {
    return "";
  }

  return (
    <>
      <Helmet>
        <title>{fontFamily} - Quick View | FontBook</title> {/* Set dynamic title */}
        <meta name="description" content={`Flip into the WORLD of Typefaces  with FontBook. 1000s of Free Fonts to Your Style!`} /> {/* Add meta description */}
      </Helmet>
      <Navbar />
      <main>
        <div className="px-4 py-5 my-5 text-center" style={{ fontFamily: fontDetails.family }}>
          <h5 className='glyphheading'>fonts - {fontDetails.family}</h5>
          <p className="responsive-font text-body-emphasis" style={{ textDecoration: 'none' }}>
  {fontDetails.family}
</p>

          <div className="col-lg-10 mx-auto">
            <p className="lead mb-6 desctxt" >
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
        <h2 className='text-center ' style={{ padding: "50px", fontSize: "23px" }}>Fonts that you may like</h2>
        <FontsYouMayLike currentFont={fontDetails.family} />
      </main>
    </>
  );
};

export default FontDetails;
