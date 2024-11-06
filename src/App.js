import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
import Home from './pages/Home.js';
import ProductList from './pages/ProductList.js';
import ProductDetail from './pages/ProductDetail.js';
import Checkout from './pages/Checkout.js';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch('/api/products') // Adjust the endpoint to match your backend
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log('Product added to cart:', product);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
