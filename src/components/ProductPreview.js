import AddToCartButton from './AddToCartButton';
import '../styles/ProductPreview.css';
import { Link } from 'react-router-dom';

const ProductPreview = ({ route, name, imgSrc }) => {
  return (
    <div className='product-preview'>
      <Link to={`${route}`}>
        <img src={imgSrc} alt='product'></img>
        <h2>{name}</h2>
      </Link>
      <AddToCartButton />
    </div>
  );
};

export default ProductPreview;
