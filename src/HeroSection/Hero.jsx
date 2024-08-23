import React, {useState} from "react";
import styles from './Hero.module.css'; 
import { Navbar } from "../Navbar/Navbar";

const backgroundColors = [
    '#e9edc9', '#faedcd', '#ffc2d1', '#caf0f8', '#e7c6ff', '#ffd6ff', "#faf3dd" ,'#e6ccb2', '#ecf39e', "#b7e4c7",
  ];

const Hero = () =>{

  
    return (
        <>
        <Navbar />
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
  
   
       
    
  </div>

  


        </>
    )
}

export default Hero;