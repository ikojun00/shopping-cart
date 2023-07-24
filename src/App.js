import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ShoppingPage from './ShoppingPage';
import Cart from './Cart';

import banana from './images/banana.png';
import apple from './images/apple.png';
import milk from './images/milk.png';
import bread from './images/bread.png';
import orange from './images/orange.png';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartImages, setCartImages] = useState([]);
  const [sumOfItems, setSumOfItems] = useState(0);

  useEffect(() => {
    const imgs = [banana, apple, milk, bread, orange];
    cacheImages(imgs)
  }, []);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.quantity;
    });
    setSumOfItems(sum);
  }, [cartItems]);

  const cacheImages = async(srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise (function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setCartImages(srcArray);
  }

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
  
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const handleRemoveCartItem = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const updatedItems = [...cartItems];
    updatedItems.splice(existingItemIndex, 1);
    setCartItems(updatedItems);
  };

  const handleCartItemSubtraction = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const updatedItems = [...cartItems];
    if(updatedItems[existingItemIndex].quantity > 1)
      updatedItems[existingItemIndex].quantity -= 1;
    setCartItems(updatedItems);
  };

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
            <Link to="/cart">Cart({sumOfItems})</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopping" element={<ShoppingPage handleAddToCart={handleAddToCart} cartImages={cartImages}/>} />
        <Route path="/cart" element={<Cart items={cartItems} handleRemoveCartItem={handleRemoveCartItem} 
        handleCartItemSubtraction={handleCartItemSubtraction} handleAddToCart={handleAddToCart}/>} />
      </Routes>
    </>
  );
};

export default App;