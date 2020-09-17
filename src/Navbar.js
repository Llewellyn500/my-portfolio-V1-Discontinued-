import React from "react";
import Logo from "./logo.png";
import "./Navbar.css";

function Navbar() {
  return(
    <div className="nav">
    <input type="checkbox" id="check"/>
      <label for="check">
        <i class="fas fa-bars" id="btn"></i>
        <i class="fas fa-times" id="cancel"></i>
      </label>
    
          <img
            className="logo" 
            src={Logo} 
            alt="My logo" 
        />
        <ul className="nav__links">
       <li><a>Home</a></li>
       <li><a>About me</a></li>
       <li><a>Projects</a></li>
       <li><a>Contact Me</a></li>
      </ul>
    </div>
    );
}

export default Navbar;