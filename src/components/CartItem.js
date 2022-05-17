import { X } from 'phosphor-react';
import '../styles/CartItem.css';

const CartItem = ({ product, count }) => {
  return (
    <div className='cart-item'>
      <img></img>
      <div>
        <p>{product}</p>
        <p>24 Count</p>
      </div>
      <input type='number' min='0' max='99' value={count} />
      <X size={24} weight='bold' />
    </div>
  );
};

export default CartItem;
