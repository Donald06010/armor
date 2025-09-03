import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      alert('Order placed successfully! Thank you for your purchase.');
      clearCart();
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="checkout-header">
          <h2>Checkout</h2>
          <button className="checkout-close" onClick={onClose}>×</button>
        </div>

        <div className="checkout-content">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Shipping Information</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h3>Payment Information</h3>
                <input
                  type="text"
                  name="cardName"
                  placeholder="Name on Card"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
                <div className="form-row">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="place-order-btn"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Place Order - $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <img src={item.image} alt={item.name} />
                  <div className="order-item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="order-item-price">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="total-row">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total-row total-final">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;