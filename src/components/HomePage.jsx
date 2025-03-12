import { useContext } from 'react';
import { ProductContext } from '../components/ProductContext';
import ProductCard from '../components/ProductCard';

function HomePage() {
  // Get products data from context
  const { products, loading, error } = useContext(ProductContext);

  // Show loading state
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Show error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="homepage">
      <h1>Our Products</h1>
      
      {/* Product Grid */}
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;