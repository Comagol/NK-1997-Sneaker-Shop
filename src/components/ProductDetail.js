import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../asyncmock/asyncmock';
import './ProductDetail.css'; // Asegúrate de importar el archivo CSS

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="productDetailContainer">
      <img src={product.img} alt={product.name} className="productImage" />
      <div className="productInfo">
        <h1 className="productName">{product.name}</h1>
        <p className="productDescription">{product.description}</p>
        <p className="productPrice">Precio: ${product.price}</p>
        <p className="productStock">Stock: {product.stock}</p>
        <button className="buyButton">Comprar</button>
      </div>
    </div>
  );
}

export default ProductDetail;
