import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ARMOR</h3>
            <p>Premium gaming headphones engineered for champions. Experience immersive sound and jaw-dropping design.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📺</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">ARMOR Pro X</a></li>
              <li><a href="#products">ARMOR Elite</a></li>
              <li><a href="#products">ARMOR Core</a></li>
              <li><a href="#products">ARMOR Gaming</a></li>
              <li><a href="#products">ARMOR Studio</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Warranty</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ARMOR. All rights reserved. | Founded by Mithilesh Patankar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;