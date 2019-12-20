import React from 'react';
import './App.css';
import SizeFilter from './components/SizeFilter';
import Item from './components/Item';
import Cart from './components/Cart';
import CartList from './components/CartList';

function App() {
  return (
    <div className="App">
      <div className="main_contents">
        <SizeFilter />
        <Item />
        <Cart />
        <CartList />
      </div>
    </div>
  );
}

export default App;
