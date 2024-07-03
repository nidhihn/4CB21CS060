// src/ProductList.js
import React, { useState, useEffect } from 'react';
import Product from './Product';

const ProductList = ({ topN }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await fetch('/api/products'); 
      const data = await response.json();
      setProducts(data.slice(0, topN));
    };

    fetchProducts();
  }, [topN]);

  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
