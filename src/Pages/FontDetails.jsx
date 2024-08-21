import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlyphsPage from './GlyphsPage';
import { getFonts } from '../Functions/getGFont'; // Import the getFonts function
import './Pages.css';

const FontDetails = () => {
  const { fontFamily } = useParams();
  const [fontDetails, setFontDetails] = useState(null);

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
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>



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
      <div className="fontsizecardcont">
      <div class="card">
  <div class="cardheader">
  Regular 400 at 18px
  </div>
  <div class="cardbody">
    <p class="card-text" style={{ fontFamily: fontDetails.family, fontSize:"18px", fontWeight:"400" }}>Whereas a common understanding of these rights and freedoms is necessary.</p>
  </div>
</div> 
<div class="card">
  <div class="cardheader">
  Regular 400 at 25px
  </div>
  <div class="cardbody">
    <p class="card-text" style={{ fontFamily: fontDetails.family, fontSize:"25px", fontWeight:"400" }}>No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.</p>
  </div>
  
</div> 
      </div>
      
      <div className="fontsizecardcont">
      <div class="card">
  <div class="cardheader">
  Regular 400 at 48px
  </div>
  <div class="cardbody">
    <p class="card-text" style={{ fontFamily: fontDetails.family, fontSize:"48px", fontWeight:"400" }}>Whereas a common understanding of these rights and freedoms is necessary.</p>
  </div>
</div> 
<div class="card">
  <div class="cardheader">
  Regular 400 at 36px
  </div>
  <div class="cardbody">
    <p class="card-text" style={{ fontFamily: fontDetails.family, fontSize:"36px", fontWeight:"400" }}>No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.</p>
  </div>
  
</div> 
      </div>
   
     
    <GlyphsPage fontFamily={fontDetails.family} /> 
   
    </main>
  );
};

export default FontDetails;
