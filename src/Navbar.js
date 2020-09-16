import React from "react";
import Logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return(
    <div className="nav">
          <img
            className="logo" 
            src={Logo} 
            alt="My logo" 
            />
        <div className="nav__links">
          <span className="nav__option">Home</span>
        </div>
    </div>
    );
}

export default Navbar;