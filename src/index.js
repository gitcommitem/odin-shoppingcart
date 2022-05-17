import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RouteSwitch from './RouteSwitch';
import CartContextProvider from './GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouteSwitch />
    </CartContextProvider>
  </React.StrictMode>
);
