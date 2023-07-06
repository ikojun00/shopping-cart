import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ShoppingPage from './ShoppingPage';

export function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Routes>
    </>
  );
}

export default App;