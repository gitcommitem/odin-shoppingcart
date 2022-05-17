import AddToCartButton from './AddToCartButton';
import '../styles/ProductPreview.css';
import { Link } from 'react-router-dom';

const ProductPreview = ({ route, name, imgSrc, id, price }) => {
  return (
    <div className='product-preview'>
      <Link to={`${route}`}>
        <div className='img-cont'>
          <img className='product-preview' src={imgSrc} alt='product' />
        </div>
        <h2>{name}</h2>
        <p>{price}</p>
      </Link>
      <AddToCartButton product={name} id={id} />
    </div>
  );
};

export default ProductPreview;
