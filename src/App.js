import './styles/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';

function App () {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id='products'>
        <ProductPreview name='Product 1' imgSrc='' />
        <ProductPreview name='Product 2' imgSrc='' />
        <ProductPreview name='Product 3' imgSrc='' />
      </section>
      Hello World
    </div>
  );
}

export default App;
