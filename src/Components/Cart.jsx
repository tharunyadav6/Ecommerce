import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '/src/Redux/slices/cartSlice';
import { placeOrder } from '/src/Redux/slices/orderSlice';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      dispatch(placeOrder(cartItems));
      dispatch(clearCart());
      alert('Order placed successfully!');
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                style={{ marginRight: '20px' }}
              />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Size: L {item.selectedSize}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <NavLink to="/p">
            <button onClick={handlePlaceOrder} style={{ marginLeft: '10px' }}>
              Place Order
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
