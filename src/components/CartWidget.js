import './CartWidget.css';
import { Link } from 'react-router-dom';
import React from 'react';
import { useCart } from '../context/CartContext';
import carritoDeCompras from '../img/carritoColot.png'


const CartWidget = () => {

  const { getCartCount } = useCart();

  return (
    <Link to={'/cartdetail'} className='CartWidget'>
        <span>{getCartCount()}</span>
        <img alt='carrito' src={carritoDeCompras} className='CartImg'></img>
    </Link>
  )
}

export default CartWidget