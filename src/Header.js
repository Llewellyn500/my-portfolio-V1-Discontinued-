import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
  return(
      <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="My logo" />
      </Link>
      
      <Link to="#">
        <div className="header__nav">
          <span className="header__navOption">Home</span>
        </div>
      </Link>
      
      <Link to="#">
        <div className="header__nav">
          <span className="header__navOption">About Me</span>
        </div>
      </Link>
      
      <Link to="#">
        <div className="header__nav">
          <span className="header__navOption">My Projects</span>
        </div>
      </Link>
      
      <Link to="#">
        <div className="header__nav">
          <span className="header__navOption">Contact Me</span>
        </div>
      </Link>
      </div>
    );
}

export default Header;