import { X } from 'phosphor-react';
import '../styles/CartItem.css';
import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const CartItem = ({ product, count, price, id }) => {
  const [state, dispatch] = useContext(CartContext);
  const cart = state.cart;
  const index = cart.findIndex(element => element.id === id);

  const handleDeleteClick = () => {
    dispatch({
      type: 'MINUS_ITEMCOUNT',
      payload: cart[index].count
    });

    dispatch({
      type: 'REMOVE_CART',
      payload: cart.filter(item => item.id !== id)
    });

    console.log(cart);
  };

  return (
    <div className='cart-item'>
      <img></img>
      <div>
        <p>{product}</p>
        <p>24 Count</p>
        <p>${price * count}</p>
      </div>
      <input type='number' min='0' max='99' value={count} />
      <X onClick={handleDeleteClick} size={24} weight='bold' />
    </div>
  );
};

export default CartItem;
