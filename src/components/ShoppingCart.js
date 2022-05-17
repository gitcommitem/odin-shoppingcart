import '../styles/ShoppingCart.css';
import CartItem from './CartItem';
import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const ShoppingCart = () => {
  const [state, dispatch] = useContext(CartContext);
  const isCartOpen = state.isCartOpen;

  const handleCartClick = () => {
    dispatch({
      type: 'SHOW_CART',
      payload: !isCartOpen
    });
  };

  return (
    <div>
      <div
        onClick={handleCartClick}
        id={isCartOpen === false ? '' : 'full-overlay'}
      ></div>
      <div className={isCartOpen === false ? 'closed' : ''} id='cart-sidebar'>
        <p onClick={handleCartClick}>Close</p>
        <CartItem />
        <h1>Price</h1>
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
