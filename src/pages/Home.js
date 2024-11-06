import React from 'react';
import ProductCard from '../components/ProductCard'; 

const Home = ({ products = [], addToCart }) => {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
