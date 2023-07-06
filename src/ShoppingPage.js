import React from 'react';
import Cart from './Cart';

const ShoppingPage = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10, quantity: 2, image: 'item1.jpg' },
    { id: 2, name: 'Item 2', price: 20, quantity: 1, image: 'item2.jpg' },
  ];

  const handleRemoveFromCart = (item) => {
    // Implement logic to remove item from the cart
  };

  return (
    <div>
      <h2>Shopping Page</h2>
      <Cart items={items} onRemove={handleRemoveFromCart} />
    </div>
  );
};

export default ShoppingPage;