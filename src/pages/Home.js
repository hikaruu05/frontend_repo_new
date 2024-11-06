import ProductCard from './components/ProductCard';


const Home = ({ products = [], addToCart }) => {
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