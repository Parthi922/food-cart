import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './component/Header';
import { Home } from './component/Home';
import { Cart } from './component/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
