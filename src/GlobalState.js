import React, { useReducer, createContext } from 'react';

const initialState = {
  isCartOpen: false,
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_CART':
      return {
        isCartOpen: action.payload
      };
    case 'ADD_CART':
      return {
        cart: [...state.cart, action.payload]
      };
    default:
      return {
        state
      };
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
