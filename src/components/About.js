import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About ARMOR</h2>
          <p>Crafting the future of gaming audio since day one</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>At ARMOR, we believe that exceptional audio can transform your gaming experience. Founded by Mithilesh Patankar, our company has been dedicated to creating premium headphones that combine cutting-edge technology with stunning design.</p>
            <div className="stats">
              <div className="stat-item">
                <h4>50K+</h4>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h4>2+</h4>
                <p>Years of Innovation</p>
              </div>
              <div className="stat-item">
                <h4>5</h4>
                <p>Premium Products</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500" alt="About ARMOR" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;