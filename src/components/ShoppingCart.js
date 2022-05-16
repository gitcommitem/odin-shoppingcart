import '../styles/ShoppingCart.css';
import CartItem from './CartItem';

const ShoppingCart = () => {
  return (
    <div className='closed' id='cart-sidebar'>
      <CartItem />
      <button>Check Out</button>
    </div>
  );
};

export default ShoppingCart;
