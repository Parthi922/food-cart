import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Food Cart</div>
      <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">View Cart</Link>
        </li>
      </ul>
    </div>
  );
};
