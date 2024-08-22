import React, {useState} from "react";
import FontCard from "../Components/FontCard";
import styles from './Hero.module.css'; 
import SearchBar from "../Search/SearchBar";

const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

const Hero = ({currentFonts}) =>{

        const [filteredFonts, setFilteredFonts] = useState(currentFonts);
      
        const handleSearch = (searchTerm) => {
            console.log('Search Term:', searchTerm);
            const filtered = currentFonts.filter((font) =>
              font.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            console.log('Filtered Fonts:', filtered);
            setFilteredFonts(filtered);
          };
          
          

    return (
        <>
         <div className={styles.herocontainer}>
    <h1 class={styles.textbodyemphasis}> 
        <span className={styles.flipcss}> Flip </span>    
        <span> into </span>
        <span> the </span>
        <span> 
        <h1 data-shadow='dang!' className={styles.hicss}>WORLD</h1>
       </span>
        <span> of </span>
        <span style={{display:"flex"}}>
  <section class={styles.animation}>
  <div class={styles.fifth}><div>font art</div></div>
  <div class={styles.third}><div>Typefaces</div></div>
  <div class={styles.first}><div>Typography</div></div>
  <div class={styles.fith}><div>Typefaces</div></div>
  <div class={styles.fourth}><div>Letters</div></div>
  <div class={styles.fith}><div>Expression</div></div>
  </section>
            </span > with 
            
            FontB<span >  <span className={styles.loader}></span>k</span> <span style={{color:"lightblue"}}>.</span> </h1>
 <h2 > <span  className={styles.h2heading} >
    <span>
    <p class={styles.spoiler}>1000s of Free Fonts
  </p>
        </span>
        </span>
        <span>to </span>
        <span className={styles.elevatecss}></span>
        <span>Your</span>
           
        <span className={styles.stylecss}>
         Style
        </span>
        !</h2>
  
   
        <div>
      <SearchBar onSearch={handleSearch} />
    
      {filteredFonts.length > 0 ? (
  filteredFonts.map((font, index) => (
    <FontCard 
      key={index}
      backgroundColors={backgroundColors} 
      heading={font.family}
      googleFontLink={`https://fonts.google.com/specimen/${font.family.replace(/ /g, '+')}?preview.layout=grid`}
    />
  ))
) : (
  <p>No fonts found.</p>
)}
    </div>
    
  </div>
        </>
    )
}

export default Hero;