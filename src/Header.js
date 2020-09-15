import React from "react";
import "./Header.css";
import Logo from "./logo.png";

function Header() {
  return(
      <div className="header">
    
        <img className="header__logo" src={Logo} alt="My logo" />
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Me</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact Me</a></li>
        <li className="close">X</li>
      </ul>
      <div className="menu">Menu</div>
      </div>
    );
}

export default Header;