import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file for styling



export const Navbar = () => {
 
//  const cartItems = useSelector((state) => state.cart)
// const wishlistItems = useSelector((state) => state.wishlist);

  return (

    <>
      <div
        className="d-flex justify-content-center align-items-center top-strip"
        style={{ backgroundColor: "black" }}
      >
        <div className="mx-5">
          <Link
            to=""
            className="text-decoration-none"
            style={{ color: "white" }}
          > FREE SHIPPING OVER PKR 5,000
          </Link>
        </div>
        <div className="mx-5">
          <Link
            to=""
            className="text-decoration-none"
            style={{ color: "white" }}
          >FOR CUSTOMIZATIONS OR PERSONAL ASSISTANCE, WHATSAPP US AT | +9221111627422
          </Link>
        </div>
      </div>

      <div className="fa-iconcss">
        <div className="row align-items-center justify-content-between">
        
        <div className="col text-center">
      <Link
              to="/"
              className="text-decoration-none text-center"
              style={{ color: "black", fontSize: "40px", letterSpacing: "2px" }}
            >
              FontBook
            </Link>
            </div>
    
        
            <div className="col text-center fa-iconcss">

        
          </div>

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

      
    </>
  );
};