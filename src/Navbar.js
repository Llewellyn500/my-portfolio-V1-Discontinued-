import React from "react";
import Logo from "./logo.png"

function Navbar() {
  return(
    <div className="navbar">
      <nav>
        <div className="navbar__logo">
          <img src={Logo} alt="My logo" />
        </div>
      </nav>
    </div>
    );
}

export default Navbar;