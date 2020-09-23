import React from "react";
import Logo from "./pics/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="check" />
      <label for="check" class="btn">
        <i class="fas fa-bars"></i>
      </label>

      <img className="logo" src={Logo} alt="My logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
