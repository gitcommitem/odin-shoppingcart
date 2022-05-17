import './styles/App.css';
import './styles/ProductPage.css';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import AddToCartButton from './components/AddToCartButton';

const ProductPage = ({ product, imgSrc, id }) => {
  return (
    <div id='page-cont'>
      <ShoppingCart />
      <Navbar />
      <main class='product-page'>
        <div class='product-img'>
          <img src={imgSrc} />
        </div>
        <div class='product-info'>
          <h1>{product}</h1>
          <h2>24 count box set</h2>
          <p>$15.00</p>
          <p>Blerb about product</p>
          <input type='number' min='1' max='99' defaultValue='1' />
          <br />
          <AddToCartButton product={product} id={id} />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
