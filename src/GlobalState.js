import React, { useReducer, createContext } from 'react';

const initialState = {
  isCartOpen: false,
  cart: [],
  itemCount: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_CART':
      return {
        ...state,
        isCartOpen: action.payload
      };
    case 'ADD_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_CART':
      return {
        ...state,
        cart: action.payload
      };
    case 'ADD_ITEMCOUNT':
      return {
        ...state,
        itemCount: state.itemCount + action.payload
      };
    case 'MINUS_ITEMCOUNT':
      return {
        ...state,
        itemCount: state.itemCount - action.payload
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
