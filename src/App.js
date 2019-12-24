import React from 'react';
import './App.css';
import SizeFilter from './components/SizeFilter';
import Cart from './components/Cart';
import FilterSize from './containers/FilterSize';

function App() {
  return (
    <div className="App">
      <div className="main_contents">
        <SizeFilter />
        <FilterSize/>
        <Cart />
      </div>
    </div>
  );
}

export default App;
