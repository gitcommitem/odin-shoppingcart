import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const [state, dispatch] = useContext(CartContext);

const handleCartClick = () => {
  const isCartOpen = state.isCartOpen;
  dispatch({
    type: 'SHOW_CART',
    payload: !isCartOpen
  });
};
