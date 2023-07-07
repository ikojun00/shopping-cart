import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, handleRemoveCartItem }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    items.forEach(item => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [items]);

  return (
    <div className="cart">
      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <div>
          <h2>Shopping Cart</h2>
          {items.map((item) => (
            <CartItem key={item.id} item={item} handleRemoveCartItem={handleRemoveCartItem} />
          ))}
          <h2>Total: {total.toFixed(2)}€</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;