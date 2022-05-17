import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const AddToCartButton = ({ product, id, count }) => {
  const [state, dispatch] = useContext(CartContext);
  const isCartOpen = state.isCartOpen;
  const cart = state.cart;
  const notAdded = cart.findIndex(element => element.id === id) === -1;
  const index = cart.findIndex(element => element.id === id);

  const isCountUndefined = count === undefined;

  const handleCartClick = () => {
    dispatch({
      type: 'SHOW_CART',
      payload: !isCartOpen
    });

    if (notAdded && !isCountUndefined) {
      dispatch({
        type: 'ADD_CART',
        payload: { id: id, name: product, count: +count }
      });
    } else if (notAdded && isCountUndefined) {
      dispatch({
        type: 'ADD_CART',
        payload: { id: id, name: product, count: 1 }
      });
    } else if (isCountUndefined) {
      dispatch({
        type: 'ADD_CART',
        payload: { id: id, name: product, count: cart[index].count + 1 }
      });
      cart.splice(index, 1);
    } else {
      dispatch({
        type: 'ADD_CART',
        payload: { id: id, name: product, count: cart[index].count + +count }
      });
      cart.splice(index, 1);
    }

    if (isCountUndefined) {
      dispatch({
        type: 'ADD_ITEMCOUNT',
        payload: 1
      });
    } else {
      dispatch({
        type: 'ADD_ITEMCOUNT',
        payload: +count
      });
    }
  };

  return <button onClick={handleCartClick}>Add to bag</button>;
};

export default AddToCartButton;
