import React from 'react';

const ShoppingPage = ({ handleAddToCart, cartImages }) => {
  const items = [
    { id: 1, name: 'Banana', price: 1.5, quantity: 1, image: cartImages[0] },
    { id: 2, name: 'Apple', price: 1.2, quantity: 1, image: cartImages[1] },
    { id: 3, name: 'Bread', price: 1.3, quantity: 1, image: cartImages[2] },
    { id: 4, name: 'Milk', price: 1.5, quantity: 1, image: cartImages[3] },
    { id: 5, name: 'Orange', price: 1.5, quantity: 1, image: cartImages[4] },
  ];

  return (
    <div className='shoppingPage'>
      {items.map((item) => (
        <div className='card' key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}€</p>
          <button onClick={() => handleAddToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingPage;