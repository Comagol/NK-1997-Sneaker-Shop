// src/context/CartContext.js

import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProductIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;
        return updatedCart;
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity }];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload);
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);