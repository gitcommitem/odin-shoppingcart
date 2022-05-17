import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductPage from './ProductPage';

import ScrollToTop from './ScrollToTop';

import product1 from './imgs/girl-with-red-hat-JnpoOdKCm1Q-unsplash.jpg';
import product2 from './imgs/girl-with-red-hat-4Mh3AjljekQ-unsplash.jpg';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<App />} />
          <Route
            path='/product1'
            element={
              <ProductPage
                product='Confetti Cookie Set'
                imgSrc={product1}
                id='1'
              />
            }
          />
          <Route
            path='/product2'
            element={
              <ProductPage
                product='Chocolate Cookie Set'
                imgSrc={product2}
                id='2'
              />
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default RouteSwitch;
