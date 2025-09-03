import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductDetail from './ProductDetail';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const products = [
    {
      id: 1,
      name: "ARMOR Pro X",
      price: "$299",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      features: ["RGB Lighting", "7.1 Surround Sound", "Wireless", "50hr Battery"]
    },
    {
      id: 2,
      name: "ARMOR Elite",
      price: "$199",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
      features: ["RGB Effects", "Noise Cancelling", "Wired/Wireless", "30hr Battery"]
    },
    {
      id: 3,
      name: "ARMOR Core",
      price: "$149",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
      features: ["LED Accents", "Clear Audio", "Wired", "Lightweight"]
    },
    {
      id: 4,
      name: "ARMOR Gaming",
      price: "$249",
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400",
      features: ["RGB Sync", "Gaming Mode", "Wireless", "40hr Battery"]
    },
    {
      id: 5,
      name: "ARMOR Studio",
      price: "$179",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      features: ["Studio Quality", "Flat Response", "Wired", "Professional"]
    }
  ];

  return (
    <section className="products">
      <div className="products-container">
        <div className="products-header">
          <h2>Our Products</h2>
          <p>Discover the ARMOR headphone collection engineered for champions</p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="product-price">{product.price}</div>
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        
        <ProductDetail 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      </div>
    </section>
  );
};

export default Products;