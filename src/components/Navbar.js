import React from "react";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

import Logo from "../img/logo.png";

function Navbar() {
  return (
    <div className="nav">
      <input type="checkbox" id="check" />
      <label for="check" class="btn">
        <i class="fas fa-bars"></i>
      </label>
      <Link to="/">
        <img className="logo" src={Logo} alt="My logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link to="about_me">
            <a>About me</a>
          </Link>
        </li>
        <li>
          <Link to="projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link to="contact_me">
            <a>Contact Me</a>
          </Link>
        </li>
        <li>
          <a className="resume">Download Resume</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
