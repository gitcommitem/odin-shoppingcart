import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { Cookie } from 'phosphor-react';

import React, { useContext } from 'react';
import { CartContext } from '../GlobalState';

const Navbar = () => {
  const [state, dispatch] = useContext(CartContext);

  const handleCartClick = () => {
    const isCartOpen = state.isCartOpen;
    dispatch({
      type: 'SHOW_CART',
      payload: !isCartOpen
    });
  };

  return (
    <nav>
      <Link to='/'>
        <h1>CookieBakeShop</h1>
      </Link>

      <div onClick={handleCartClick} id='bag-cont'>
        <Cookie size={24} weight='bold' />
        <div>0</div>
      </div>
    </nav>
  );
};

export default Navbar;
