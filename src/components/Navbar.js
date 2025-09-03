import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemsCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>ARMOR</h2>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#products" className="nav-link" onClick={toggleMenu}>Products</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </li>
          <li className="nav-item mobile-cart">
            <div className="nav-link cart-mobile" onClick={() => { setIsCartOpen(!isCartOpen); toggleMenu(); }}>
              🛒 Cart {getCartItemsCount() > 0 && `(${getCartItemsCount()})`}
            </div>
          </li>
        </ul>
        <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          🛒
          {getCartItemsCount() > 0 && (
            <span className="cart-count">{getCartItemsCount()}</span>
          )}
        </div>
      </div>
      <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;