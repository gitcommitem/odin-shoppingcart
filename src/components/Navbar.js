import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <h1>shop</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
