import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlyphsPage from './GlyphsPage';
import { getFonts } from '../Functions/getGFont'; // Import the getFonts function
import './Pages.css';
import TextResizer from '../Components/TextResizer';

const FontDetails = () => {
  const { fontFamily } = useParams();
  const [fontDetails, setFontDetails] = useState(null);

  const typetestertxt = "  Character, courage, industry, and perseverance are the four pillars on which the whole edifice of human life can be built and failure is a word unknown to me.";
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
    return <p>Loading font details...</p>;
  }

  return (
    <main>
      <div className="px-4 py-5 my-5 text-center" style={{ fontFamily: fontDetails.family }}>
        <h5 className='glyphheading'>Font - {fontDetails.family}</h5>
        <p className="display-5  text-body-emphasis" style={{ fontSize: '14em', textDecoration: 'none' }}>
          {fontDetails.family}
        </p>
        <div className="col-lg-10 mx-auto">
          <p className="lead mb-6" style={{ fontSize: '2.4em' }}>
          I have no doubt that with unity, faith, and discipline we will compare with any nation of the world. You must make up your minds now. We must sink individualism and petty jealousies and make up our minds to serve the people with honesty and faithfulness.  </p>
            </div>
        <h6>~ Quid-e-Azam</h6>



        {/* <p>This is a detailed view for the font: {fontDetails.family}</p>
        <p style={{ fontFamily: fontDetails.family }}>
          The quick brown fox jumps over the lazy dog.
        </p> */}
        {/* <div className="font-details">
          <p><strong>Category:</strong> {fontDetails.category}</p>
          <p><strong>Version:</strong> {fontDetails.version}</p>
          <p><strong>Subsets:</strong> {fontDetails.subsets.join(', ')}</p>
          <p><strong>Author:</strong> {fontDetails.author || 'Unknown'}</p>
          <p><strong>License:</strong> {fontDetails.license || 'Unknown'}</p>
        </div> */}

      </div>

      <TextResizer fontFamily={fontDetails.family}/>
      <div className="fontsizecardcont">
      <div class="card">
  <div class="cardheader">
 {fontFamily} Regular 400 at 18px
  </div>
  <div class="cardbody" style={{ fontFamily: fontDetails.family, fontSize:"18px", fontWeight:"400" }}>
    <p class="card-text" >{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
   
  </div>
</div> 
<div class="card">
  <div class="cardheader">
 {fontFamily} Regular 400 at 32px
  </div>
  <div class="cardbody" style={{ fontFamily: fontDetails.family, fontSize:"32px", fontWeight:"400"}}>
    <p class="card-text" >{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
  </div>
  
</div> 
      </div>   
      <div className="fontsizecardcont">
      <div class="card">
  <div class="cardheader">
 {fontFamily} Bold 700 at 18px
  </div>
  <div class="cardbody" style={{ fontFamily: fontDetails.family, fontSize:"18px", fontWeight:"700",  }}>
    <p class="card-text" >{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
  </div>
</div> 
<div class="card">
  <div class="cardheader">
 {fontFamily} Bold 700 at 32px
  </div>
  <div class="cardbody" style={{ fontFamily: fontDetails.family, fontSize:"32px", fontWeight:"700" , textDecoration:"bold"}}>
    <p class="card-text" >{typetestertxt}<h6>~ Quid-e-Azam</h6></p>
  </div>
  
</div> 
      </div>
   
     
    <GlyphsPage fontFamily={fontDetails.family} /> 
   
    </main>
  );
};

export default FontDetails;
