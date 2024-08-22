import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file for styling



export const Navbar = () => {
 
//  const cartItems = useSelector((state) => state.cart)
// const wishlistItems = useSelector((state) => state.wishlist);

  return (

  <>

   
      <nav class="navbar navbar-expand-lg navbarheight " aria-label="Eighth navbar example" >
    <div class="container  ">
      <a class="navbar-brand " href="#" style={{color:"black", fontSize:"2.4em"}}>FontBook</a>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse  " id="navbarsExample07">
        <ul class="navbar-nav text-center navbarcss ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Explore</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">font Categories</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">docs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">contact</a>
          </li>
        
         
        </ul>
      
        <div className="col text-center fa-iconcss">
     <Link to="#" className="text-decoration-none">
              <i className="fa-solid fa-clipboard-question"></i>
            </Link>
            <Link
              to="#"
           //   onClick={toggleSearchBar}
              className="text-decoration-none"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
         <Link to="/mywishlist" className="text-decoration-none position-relative">
            <i className="fa-regular fa-heart"></i>
            <span className="cart-badge">1</span>
         </Link>
       
          </div> 
      </div>
    </div>
  </nav>
      
    </>
  );
};