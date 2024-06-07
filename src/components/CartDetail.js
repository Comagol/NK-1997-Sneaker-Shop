import React from 'react';
import { useCart } from '../context/CartContext';

const CartDetail = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cartDetailContainer">
      <h2>Detalles del Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cartItem">
              <img src={item.img} alt={item.name} className="cartItemImage" />
              <div className="cartItemInfo">
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default CartDetail;
