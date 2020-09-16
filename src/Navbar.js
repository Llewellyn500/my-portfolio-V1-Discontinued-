import React from "react";
import Logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return(
    <div className="nav">
          <div className="nav__links">
          <img
            className="logo" 
            src={Logo} 
            alt="My logo" 
            />
            </div>
            
        <div className="nav__links">
          <span className="nav__option">Home</span>
        </div>
        
         <div className="nav__links">
          <span className="nav__option">About Me</span>
        </div>
        
         <div className="nav__links">
          <span className="nav__option">Projects</span>
        </div>
        
         <div className="nav__links">
          <span className="nav__option">Contact Me</span>
        </div>
    </div>
    );
}

export default Navbar;