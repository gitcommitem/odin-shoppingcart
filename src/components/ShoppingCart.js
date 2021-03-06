import '../styles/ShoppingCart.css';
import CartItem from './CartItem';
import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const ShoppingCart = () => {
  const [state, dispatch] = useContext(CartContext);
  const isCartOpen = state.isCartOpen;
  const cart = state.cart;
  const itemCount = state.itemCount;

  const handleCartClick = () => {
    dispatch({
      type: 'SHOW_CART',
      payload: !isCartOpen
    });
  };

  const displayCartItems = [];
  for (let i = 0; i < cart.length; i++) {
    const name = cart[i].name;
    const count = cart[i].count;
    const id = cart[i].id;

    displayCartItems.push(
      <CartItem product={name} count={count} price='15.00' id={id} key={i} />
    );
  }

  return (
    <div>
      <div
        onClick={handleCartClick}
        id={isCartOpen === false ? '' : 'full-overlay'}
      ></div>
      <div className={isCartOpen === false ? 'closed' : ''} id='cart-sidebar'>
        <p onClick={handleCartClick}>Close</p>
        {cart.length === 0 ? (
          <p>Your shopping bag is empty</p>
        ) : (
          [displayCartItems]
        )}
        <h1>Total:${itemCount * 15}</h1>
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
