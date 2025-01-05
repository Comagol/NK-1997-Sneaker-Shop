import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../asyncmock/asyncmock';
import './BrandProducts.css';

const BrandProducts = () => {
  const { brand } = useParams();

  const filteredProducts = products.filter(product => product.brand === brand);

  return (
    <div className='brandProdCont'>
      <h3 className='brandTitle'>Zapatillas de {brand}</h3>
      <div className="productsContainer">
        {filteredProducts.map(product => (
          <div key={product.id} className='prodDetailContainer'>
            <h2 className='brandProd'>{product.name}</h2>
            <img src={product.img} alt={product.name} className='imgProd' />
            <p className='prodDescription'>{product.description}</p>
            <p className='price'>Precio: ${product.price}</p>
            <Link to={`/producto/${product.id}`}>
              <button className='btn'>Comprar</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandProducts;
