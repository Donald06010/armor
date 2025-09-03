import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>Get in touch with the ARMOR team</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Have questions about our products or need support? We're here to help!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>📧 Email</h4>
                <p>support@armor.com</p>
              </div>
              <div className="contact-item">
                <h4>📞 Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>📍 Address</h4>
                <p>123 Gaming Street<br/>Tech City, TC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;