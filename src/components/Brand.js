import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { products } from '../asyncmock/asyncmock';
import './Brand.css';

const Brand = () => {
  const { brand } = useParams();
  let brandProducts = products.filter(product => product.marca === true);

  // Filtrar productos de la marca seleccionada
  if (brand) {
    brandProducts = brandProducts.filter(product => product.brand === brand);
  }

  // Mostrar solo tres productos de la marca
  brandProducts = brandProducts.slice(0, 3);

  return (
    <div className="productsContainer">
      {brandProducts.map(product => (
        <div key={product.id} className='prodDetailContainer'>
          <h2 className='brandProd'>{product.brand}</h2>
          <img src={product.img} alt={product.name} className='imgProd' />
          <Link to={`/productos/${product.brand}`}>
            <button className='btn'>Ver más de {product.brand}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Brand;