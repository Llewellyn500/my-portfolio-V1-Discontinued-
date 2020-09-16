import React from "react";
import Logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return(
    <div>
      <nav>
          <img className="logo" src={Logo} alt="My logo" />
        
        <ul className="nav__links">
          <li><a>Home</a></li>
          <li><a>About Me</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact Me</a></li>
        </ul>
        <i className="fas fa-bars burger"></i>
      </nav>
    </div>
    );
}

export default Navbar;