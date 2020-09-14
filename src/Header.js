import React from "react";
import "./Header.css";
import Logo from "./logo.png";

function Header() {
  return(
      <div className="header">
      
        <img className="header__logo" src={Logo} alt="My logo" />
        
        <div className="header__nav">
          <span className="header__navOption">Home</span>
        </div>
        
        <div className="header__nav">
          <span className="header__navOption">About Me</span>
        </div>
        
        <div className="header__nav">
          <span className="header__navOption">My Projects</span>
        </div>
        
        <div className="header__nav">
          <span className="header__navOption">Contact Me</span>
        </div>
      </div>
    );
}

export default Header;