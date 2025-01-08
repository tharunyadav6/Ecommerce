import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const OrderConfirmation = () => {
  const orders = useSelector((state) => state.order.orders); // Get orders from Redux state
  const [address, setAddress] = useState('123 Main Street, City, Country'); // Default address
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const [paymentMethod, setPaymentMethod] = useState(''); // State for payment method

  const handleAddressChange = (event) => {
    setAddress(event.target.value); // Update address state
  };

  const handleSaveAddress = () => {
    setIsEditing(false); // Exit edit mode
    alert('Address updated successfully!'); // Notify the user
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value); // Update payment method state
  };

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert('Please select a payment method!');
      return;
    }
    alert(
      `Order placed successfully!\nPayment Method: ${
        paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'
      }`
    );
  };

  return (
    <div className="order-confirmation" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Order Confirmation</h2>

      {/* Address Section */}
      <div
        className="address-section"
        style={{
          border: '1px solid #ccc',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
      >
        <h3>Shipping Address</h3>
        {isEditing ? (
          <div>
            <textarea
              value={address}
              onChange={handleAddressChange}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
              rows="3"
            />
            <button
              onClick={handleSaveAddress}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Save Address
            </button>
          </div>
        ) : (
          <div>
            <p>{address}</p>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                backgroundColor: '#007BFF',
                color: 'white',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Edit Address
            </button>
          </div>
        )}
      </div>

      {/* Orders Section */}
      {orders.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No orders placed yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {orders.map((order, index) => (
            <li
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '15px',
                marginBottom: '15px',
              }}
            >
              <h3>Order {index + 1}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {order.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '50px',
                        height: '50px',
                        marginRight: '10px',
                        borderRadius: '5px',
                      }}
                    />
                    <span>{item.title} - ${item.price}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {/* Payment Section */}
      {orders.length > 0 && (
        <div
          className="payment-section"
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '5px',
            marginTop: '20px',
          }}
        >
          <h3>Payment Options</h3>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={handlePaymentMethodChange}
              />{' '}
              Cash on Delivery
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={paymentMethod === 'online'}
                onChange={handlePaymentMethodChange}
              />{' '}
              Online Payment
            </label>
          </div>
          <button
            onClick={handleConfirmOrder}
            style={{
              marginTop: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
