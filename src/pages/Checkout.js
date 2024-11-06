import React, { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = ({ cartItems, placeOrder }) => {
  const [orderData, setOrderData] = useState(null);

  const handleSubmit = (formData) => {
    const orderDetails = {
      ...formData,
      items: cartItems,
    };
    placeOrder(orderDetails); // Send order data to backend
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Go back to shopping!</p>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Checkout;
