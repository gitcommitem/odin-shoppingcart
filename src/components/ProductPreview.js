import AddToCartButton from './AddToCartButton';
import '../styles/ProductPreview.css';
import { Link } from 'react-router-dom';

const ProductPreview = ({ route, name, imgSrc }) => {
  return (
    <div className='product-preview'>
      <Link to={`${route}`}>
        <div className='img-cont'>
          <img className='product-preview' src={imgSrc} alt='product' />
        </div>
        <h2>{name}</h2>
      </Link>
      <AddToCartButton />
    </div>
  );
};

export default ProductPreview;
