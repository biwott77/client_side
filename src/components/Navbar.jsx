import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1 style={{color: "wheat"}}>Simple Shop</h1>
        <a href="https://crypto-rho-teal.vercel.app/" className="portfolio-link">
          Portfolio
        </a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/cart">Cart (0)</a>
      </div>
    </nav>
  );
}

export default Navbar;