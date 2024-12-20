import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="brand">realme</h1> 
          <ul className="nav-links">     
            <li><a href="#smrt" className="bold">realme smartphone</a></li>
            <li><a href="#smrt" className="bold">narzo smartphone</a></li> 
            <li><a href="#smrt" className="bold">Audio</a></li>
            <li><a href="#smrt" className="bold">Accessories</a></li>
          </ul>
        </div>
       
        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="#" className="bold1">Brand</a></li>
            <li><a href="#" className="bold1">Support</a></li>
            <li><a href="#" className="bold1">Community</a></li>
          </ul>
        </div>
      </div> 
    </header>
        </div>
    )
}

export default Navbar