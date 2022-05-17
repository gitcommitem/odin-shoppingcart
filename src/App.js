import './styles/App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import ShoppingCart from './components/ShoppingCart';

import product1 from './imgs/girl-with-red-hat-JnpoOdKCm1Q-unsplash.jpg';
import product2 from './imgs/girl-with-red-hat-4Mh3AjljekQ-unsplash.jpg';

function App () {
  return (
    <div id='page-cont'>
      <ShoppingCart />
      <Navbar />
      <Hero
        heading='25% off your first order'
        subheading='Use the code COOKIES at checkout'
      />
      <h1 className='section-heading'>24 Count Box Sets</h1>
      <section id='products'>
        <ProductPreview
          route='/product1'
          name='Confetti Cookie Set'
          imgSrc={product1}
          id='1'
          price='$15.00'
        />
        <ProductPreview
          route='/product2'
          name='Chocolate Cookie Set'
          imgSrc={product2}
          id='2'
          price='$15.00'
        />
      </section>
      <footer>
        <p>This is a demo site for The Odin Project</p>
      </footer>
    </div>
  );
}

export default App;
