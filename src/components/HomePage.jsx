import { useContext, useState, useEffect, useMemo } from 'react';
import { ProductContext } from '../components/ProductContext';
import ProductCard from '../components/ProductCard';
import Footer from './Footer';
import './HomePage.css'; // Add CSS for animations

function HomePage() {
  // Get products data from context
  const { products, loading, error } = useContext(ProductContext);

  // State for rotating text
  const [currentText, setCurrentText] = useState('');

  // Memoize the `texts` array
  const texts = useMemo(() => [
    'Discover Amazing Deals!',
    'Shop the Latest Trends!',
    'Free Shipping on Orders Over $50!',
    'Limited Time Offers!',
  ], []); // Empty dependency array means `texts` will never change

  // Rotate text every 4 seconds
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentText(texts[index]);
      index = (index + 1) % texts.length; // Loop back to the start
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [texts]); // `texts` is now stable

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

      {/* Rotating Text Animation */}
      <div className="rotating-text-container">
        <div className="rotating-text">{currentText}</div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;