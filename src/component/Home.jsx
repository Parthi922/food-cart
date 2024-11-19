import React, { useState } from 'react';
import data from '../assets/products.json';
import { Products } from './Products';
import './Home.css';

export const Home = ({ Cart, setCart }) => {
  // Load the product data from JSON
  const [products] = useState(data);

  return (
    <div className='products-container'>
      {products.map((product) => (
        <Products key={product.id} product={product} Cart={Cart} setCart={setCart} />
      ))}
    </div>
  );
};

