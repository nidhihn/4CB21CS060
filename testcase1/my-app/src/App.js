// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  const [topN, setTopN] = useState(5);

  return (
    <div className="App">
      <h1>Top {topN} Products</h1>
      <ProductList topN={topN} />
      <div>
        <label>
          Show Top N Products:
          <input
            type="number"
            value={topN}
            onChange={(e) => setTopN(Number(e.target.value))}
            min="1"
          />
        </label>
      </div>
    </div>
  );
};

export default App;


