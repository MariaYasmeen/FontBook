import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookmarkContext } from "../Context/BookmarkContext";
import './Navbar.css'; // Import the CSS file for styling

export const Navbar = () => {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <>
      <nav className="top-navbar navbar-expand-lg navbarheight" aria-label="Eighth navbar example">
        <div className="topnavbar-txt">
          <p className="text-center">
            Get 1000s of free fonts with FontBook
            <span style={{color:"black"}}> navbar-expand-lg navbarheigh</span>fontbook@gmail.com
            <span style={{color:"black"}}>navbarsExample07</span>+92 3360552743
          </p>
        </div>
        <hr />
      </nav>
      <nav className="navbar navbar-expand-lg navbarheight" aria-label="Eighth navbar example">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{color:"black", fontSize:"2.4em"}}><img src="./LogoImg.png" style={{width:"190px"}}></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav text-center navbarcss">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Explore</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">font Categories</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/category/serif">Serif</Link></li>
                  <li><Link className="dropdown-item" to="/category/sans-serif">Sans-Serif</Link></li>
                  <li><Link className="dropdown-item" to="/category/display">Display</Link></li>
                  <li><Link className="dropdown-item" to="/category/handwriting">Handwriting</Link></li>
                  <li><Link className="dropdown-item" to="/category/monospace">Monospace</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/fontpreview" className="nav-link active">font preview</Link>
              </li>
            </ul>
            <div className="col text-center fa-iconcss">
              <Link to="/fontsearch" className="text-decoration-none">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
              <Link to="/bookmarks" className="text-decoration-none position-relative">
                <i className="fa-regular fa-bookmark"></i>
                {bookmarks.length > 0 && (
                  <span className="bookmark-badge">{bookmarks.length}</span>
                )}
              </Link>
            </div> 
          </div>
        </div>
        <hr />
      </nav>
      <hr />
    </>
  );
};
