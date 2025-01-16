import React from 'react';
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="logo.jpeg" alt="Website Logo" />
      </div>
      
      {/* Navigation Links */}
      <div className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
