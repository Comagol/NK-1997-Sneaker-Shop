import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../asyncmock/asyncmock';

const BrandProducts = () => {
  const { brand } = useParams();
  
  // Filtrar productos por la marca seleccionada
  const filteredProducts = products.filter(product => product.brand === brand);

  return (
    <div>
      <h1>Zapatillas de {brand}</h1>
      <div className="productsContainer">
        {filteredProducts.map(product => (
          <div key={product.id} className='prodDetailContainer'>
            <h2 className='brandProd'>{product.name}</h2>
            <img src={product.img} alt={product.name} className='imgProd' />
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandProducts;