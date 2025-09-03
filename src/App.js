import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <div id="home">
            <Hero />
          </div>
          <div id="products">
            <Products />
          </div>
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;