import { useState } from 'react';

function ProductCard({ product }) {
  // State to manage product quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: '200px', height: '200px', objectFit: 'contain' }} 
      />
      
      {/* Product Details */}
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description.substring(0, 100)}...</p>
        <p className="price">${product.price}</p>

        {/* Quantity Controls */}
        <div className="quantity-controls">
          <button 
            onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            disabled={quantity === 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button 
            onClick={() => setQuantity(prev => prev + 1)}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;