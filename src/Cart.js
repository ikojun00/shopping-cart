import React from 'react';
import CartItem from './CartItem';

const Cart = ({ items }) => {
  return (
    <div className="cart">
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Shopping Cart</h2>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;