import { X } from 'phosphor-react';
import '../styles/CartItem.css';

const CartItem = () => {
  return (
    <div className='cart-item'>
      <img></img>
      <div>
        <p>Product Name</p>
        <p>24 Count</p>
      </div>
      <input type='number' min='0' max='99' />
      <X size={24} weight='bold' />
    </div>
  );
};

export default CartItem;
