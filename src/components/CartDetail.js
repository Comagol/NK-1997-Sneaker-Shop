import React from 'react';
import { useCart } from '../context/CartContext';
import './CartDetail.css';
import { Link } from 'react-router-dom';

const CartDetail = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

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
                <h3 className="cartItemName">{item.name}</h3>
                <p className="cartItemQuantity">Cantidad: {item.quantity}</p>
                <p className="cartItemPrice">Precio: ${item.price}</p>
                <p className="cartItemSubtotal">Subtotal: ${calculateSubtotal(item.price, item.quantity)}</p>
                <button className="removeButton" onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <button className="clearCartButton" onClick={clearCart}>Vaciar Carrito</button>
          <Link to={"/checkoutform"}>
            <button className="buyCartButton">Finalizar Compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartDetail;