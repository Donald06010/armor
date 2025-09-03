import React from 'react';
import headphoneVideo from '../06d757d486dc48ef8682b269d1419438.mp4';

const Hero = () => {
  return (
    <section className="hero">
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>
      
      <div className="hero-left">
        <div className="founder-section">
          <div className="founder-badge">
            <div className="founder-title">CEO & Founder</div>
            <div className="founder-name">Mithilesh Patankar</div>
          </div>
        </div>
        
        <div className="hero-content">
          <h1>ARMOR</h1>
          <p>Experience the future of gaming audio with our premium RGB headphones designed for champions.</p>
          <div className="product-slogan">
            "Engineered over 2 years to bring immersive sound and jaw-dropping design together, meet the World's Coolest Gaming Headphones."
          </div>
          <div className="cta-section">
            <button className="cta-button">Discover Now</button>
            <button className="secondary-cta">Watch Demo</button>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="video-container">
          <video className="hero-video" autoPlay muted loop>
            <source src={headphoneVideo} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
          <div className="play-indicator"></div>
        </div>
        <div className="decorative-line"></div>
      </div>
    </section>
  );
};

export default Hero;