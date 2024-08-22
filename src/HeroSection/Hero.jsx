import React from "react";
import styles from './Hero.module.css'; 
import SearchBar from "../Search/SearchBar";

const Hero = () =>{
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
  <div class={styles.third}><div>Expression</div></div>
  <div class={styles.first}><div>Typography</div></div>
  <div class={styles.fourth}><div>Letters</div></div>
  <div class={styles.second}><div>Typefaces</div></div>
  </section>
            </span > with 
            
            <span style={{color:"lightblue"}}>FontBook</span>. </h1>
 <h2 > <span  className={styles.h2heading} >
    <span>
    <p class={styles.spoiler}>1000s of Free Fonts
  </p>
        </span>
        </span>
        <span>to</span>
        <span >Elevate</span>
        <span>Your</span>
           
        <span className={styles.stylecss}>
         Style
        </span>
        !</h2>
  
   
  <SearchBar />
    
  </div>
        </>
    )
}

export default Hero;