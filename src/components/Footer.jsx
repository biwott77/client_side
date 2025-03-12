import React from "react";
import "./Footer.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Moi Kibiwot. All rights reserved.</p>
        <nav className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
