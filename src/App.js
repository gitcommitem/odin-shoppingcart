import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';

function App () {
  return (
    <div id='page-cont'>
      <Navbar />
      <Hero />
      <section id='products'>
        <ProductPreview route='/product1' name='Product 1' imgSrc='' />
        <ProductPreview route='/product2' name='Product 2' imgSrc='' />
        <ProductPreview route='/product3' name='Product 3' imgSrc='' />
      </section>
      Hello World
    </div>
  );
}

export default App;
