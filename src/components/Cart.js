import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <span>{item.name} - ${item.price} x {item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>Total: ${totalAmount}</p>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
