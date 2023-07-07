import React from 'react';

const CartItem = ({ item, handleRemoveCartItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Price: {item.price}€</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={() => handleRemoveCartItem(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;