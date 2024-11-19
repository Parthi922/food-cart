import React, { useState, useEffect } from 'react';
import './Cart.css';

export const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total amount from the cart items
    const totalAmount = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotal(totalAmount);
  }, [cart]);

  return (
    <>
      <h2 className='Cart-heading'>Cart Products</h2>
      <div className='Cart-container'>
        {cart.length > 0 ? (
          cart.map((product) => (
            <div className='Cart-products' key={product.id}>
              <div className='img'>
                <img src={product.pic} alt={product.name} />
              </div>
              <div className='Cart-products-details'>
                <h3>{product.name}</h3>
                <p>Price Rs: {product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='Cart-empty'>Your cart is empty.</p>
        )}
      </div>
      <h2 className='Cart-amt'>Total Amount Rs: {total}</h2>
    </>
  );
};

