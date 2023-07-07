import React from 'react';
import banana from './images/banana.png';
import apple from './images/apple.png';
import milk from './images/milk.png';
import bread from './images/bread.png';
import orange from './images/orange.png';

const ShoppingPage = ({ handleAddToCart }) => {
  const items = [
    { id: 1, name: 'Banana', price: 1.5, quantity: 1, image: banana },
    { id: 2, name: 'Apple', price: 1.2, quantity: 1, image: apple },
    { id: 3, name: 'Bread', price: 1.3, quantity: 1, image: bread },
    { id: 4, name: 'Milk', price: 1.5, quantity: 1, image: milk },
    { id: 5, name: 'Orange', price: 1.5, quantity: 1, image: orange },
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