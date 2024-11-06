import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
