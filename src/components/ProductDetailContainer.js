import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../asyncmock/asyncmock';
import './ProductDetailContainer.css';

const ProductDetailContainer = () => {
  return (
    <div className="productsContainer">
      {products.map(product => (
        <div key={product.id} className='prodDetailContainer'>
          <img src={product.img} alt={product.name} className='imgProd' />
          <p className='priceProd'>$ {product.price}</p>
          <h2 className='nameProd'>{product.name}</h2>
          <Link to={`/producto/${product.id}`}>
              <button className='btn'>Comprar</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductDetailContainer;