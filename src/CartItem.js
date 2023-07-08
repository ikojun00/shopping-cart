import React from 'react'; 
import plus from "./images/plus.png"
import minus from "./images/minus.png"

const CartItem = ({ item, handleRemoveCartItem, handleCartItemSubtraction, handleAddToCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>Price: {item.price}€</p>
        <p>
          <img src={minus} alt="Minus" onClick={() => handleCartItemSubtraction(item)}/>
          {item.quantity}        
          <img src={plus} alt="Plus" onClick={() => handleAddToCart(item)}/>
        </p>
        <button onClick={() => handleRemoveCartItem(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;