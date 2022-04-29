import AddToCartButton from './AddToCartButton';
import '../styles/ProductPreview.css';

const ProductPreview = ({ name, imgSrc }) => {
  return (
    <div className='product-preview'>
      <img src={imgSrc} alt='product'></img>
      <h2>{name}</h2>
      <AddToCartButton />
    </div>
  );
};

export default ProductPreview;
