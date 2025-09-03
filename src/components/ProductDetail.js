import React from 'react';

const ProductDetail = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <div className="product-detail-price">{product.price}</div>
            
            <div className="product-description">
              <h3>Product Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-specs">
              <h3>Specifications</h3>
              <div className="spec-grid">
                <div className="spec-item">
                  <span>Frequency Response:</span>
                  <span>20Hz - 20kHz</span>
                </div>
                <div className="spec-item">
                  <span>Impedance:</span>
                  <span>32 Ohms</span>
                </div>
                <div className="spec-item">
                  <span>Driver Size:</span>
                  <span>50mm</span>
                </div>
                <div className="spec-item">
                  <span>Weight:</span>
                  <span>350g</span>
                </div>
              </div>
            </div>
            
            <div className="product-actions">
              <button className="add-to-cart-detail" onClick={handleAddToCart}>Add to Cart - {product.price}</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;