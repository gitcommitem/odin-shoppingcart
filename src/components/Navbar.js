import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import { Cookie } from 'phosphor-react';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>CookieBakeShop</h1>
      </Link>
      <Link to='/'>
        <div id='bag-cont'>
          <Cookie size={24} weight='bold' />
          <div>0</div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
