// src/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import './Footer.css'; // Import CSS for styling (optional)

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Company Logo"
              className="footer-logo-image"
              width={150} // Set appropriate width
              height={50} // Set appropriate height
          />
        </div>

        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul className="footer-links">
            <li>
              <a href="/about-us" className="footer-link">About Us</a>
            </li>
            <li>
              <a href="/contact-us" className="footer-link">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
