import React from 'react';
import './Products.css';

export const Products = ({ product, Cart, setCart }) => {

  const name = product.name.length > 21 ? product.name.substring(0, 20) + '..' : product.name;


  const addCart = () => {
    setCart([...Cart, product]);
  };


  const removeCart = () => {
    setCart(Cart.filter((item) => item.id !== product.id));
  };

  const isInCart = Cart.some((item) => item.id === product.id);

  return (
    <div className='products'>
      <div className='img'>
        <img src={product.pic} alt={name} />
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <p>Price Rs: {product.amt}</p>
        {isInCart ? (
          <button className='btnRemove' onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
