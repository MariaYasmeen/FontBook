import React from "react";
import styles from './Hero.module.css'; 

const Hero = () =>{
    return (
        <>
         <div class="p-5  ">
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
            </span> with FontBook. </h1>
 <h2 > <span  className={styles.h2heading} >1000s of Free Fonts </span>to Elevate Your Style!</h2>
  
   <div class="d-inline-flex gap-2 mb-5">
  {/* searchabr goes here */}
     </div>
  </div>
        </>
    )
}

export default Hero;