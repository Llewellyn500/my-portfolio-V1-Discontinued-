import React, { Component } from "react";
import "./Header.css";
import Logo from "./logo.png";


export class Header extends Component {
  
  state = {
    toggle: false
  }
  
  menuToggle = () =>{
    this.setState({toggle: !this.state.toggle});
  }
  render() {
    const {toggle} = this.state;
  return(
      <div className="header">
    
        <img className="header__logo" src={Logo} alt="My logo" />
      
      <ul className={toggle ? "toggle" : ""}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Me</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact Me</a></li>
        <li className="close" onClick={this.menuToggle}>X</li>
      </ul>
      <div className="menu" onClick={this.menuToggle}>Menu</div>
      </div>
    );
}
}
export default Header;