import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Checkout from './Checkout';

const CartDropdown = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setIsCheckoutOpen(true);
    // onClose();
  };

  return (
    <div className="cart-dropdown-overlay" onClick={onClose}>
      <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="cart-close" onClick={onClose}>×</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <span>🛒</span>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ${getCartTotal().toFixed(2)}</strong>
            </div>
            <div className="cart-actions">
              <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
              <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        )}
        
        <Checkout 
          isOpen={isCheckoutOpen} 
          onClose={() => setIsCheckoutOpen(false)} 
        />
      </div>
    </div>
  );
};

export default CartDropdown;