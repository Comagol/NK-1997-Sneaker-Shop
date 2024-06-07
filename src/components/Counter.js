import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Counter.css';

const Counter = ({ product }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, count);
    } else {
      console.error('Product is undefined');
    }
  };

  return (
    <div className="counter">
      <button className="counter-btn" onClick={handleDecrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={handleIncrement}>+</button>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
