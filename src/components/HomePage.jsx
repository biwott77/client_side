import { useContext, useState, useEffect, useMemo } from 'react';
import { ProductContext } from '../components/ProductContext';
import ProductCard from '../components/ProductCard';
import Footer from './Footer';
import './HomePage.css';

function HomePage() {

  const { products, loading, error } = useContext(ProductContext);


  const [currentText, setCurrentText] = useState('');

  
  const texts = useMemo(() => [
    'Discover Amazing Deals!',
    'Shop the Latest Trends!',
    'Free Shipping on Orders Over $50!',
    'Limited Time Offers!',
    'Thanks! 😊',
    "Something Special Just Ahead!",
    "Let’s Brainstorm. Innovate. Create.",
    "Imagine. Build. Elevate. Repeat.",
    "Collaborate. Integrate. Succeed.",
    "Ideas Start Here. Let’s Go.",
    "Think Big. Innovate Boldly.",
    "Elevate Your Vision Today.",
    "Explore. Discover. Transform.",
    "Unleash Creativity. No Limits.",
    "Revolutionize. Iterate. Inspire.",
    "Shape the Future Together.",
  ], []); 

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentText(texts[index]);
      index = (index + 1) % texts.length; 
    }, 4000); 
    return () => clearInterval(interval); 
  }, [texts]); 


  if (loading) {
    return <div>Loading products...</div>;
  }


  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="homepage">
      <h1 style={{color: "magenta"}}>Our Products</h1>

     
      <div className="rotating-text-container">
        <div className="rotating-text">{currentText}</div>
      </div>

      
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