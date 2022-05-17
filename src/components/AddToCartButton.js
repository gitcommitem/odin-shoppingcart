import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const AddToCartButton = ({ product, id }) => {
  const [state, dispatch] = useContext(CartContext);
  const isCartOpen = state.isCartOpen;
  const cart = state.cart;
  const notAdded = cart.findIndex(element => element.id === id) === -1;
  const index = cart.findIndex(element => element.id === id);

  const handleCartClick = () => {
    dispatch({
      type: 'SHOW_CART',
      payload: !isCartOpen
    });

    if (notAdded) {
      dispatch({
        type: 'ADD_CART',
        payload: { id: id, name: product, count: 1 }
      });
    } else {
      dispatch({
        type: 'ADD_CART',
        payload: { id: id, name: product, count: cart[index].count + 1 }
      });
      cart.splice(index, 1);
    }

    dispatch({
      type: 'ADD_ITEMCOUNT',
      payload: 1
    });
  };

  return <button onClick={handleCartClick}>Add to bag</button>;
};

export default AddToCartButton;
