import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, updateSize, updateQuantity } from "../Redux/Slices/cartSlice.js";
import { placeOrder } from "../Redux/Slices/orderSlice.js";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      dispatch(placeOrder(cartItems));
      dispatch(clearCart());
      alert("Order placed successfully!");
    } else {
      alert("Your cart is empty!");
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
            <li key={item.id} style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "15px" }}>
              <img src={item.image} alt={item.title} width={100} height={100} />
              <div>
                <h3>{item.title}</h3>
                <p>Price per item: ${item.price}</p>
                <p>Total Price: <strong>${item.totalPrice.toFixed(2)}</strong></p>

                {/* Size Selector */}
                <label>Size: </label>
                <select
                  value={item.selectedSize}
                  onChange={(e) => dispatch(updateSize({ id: item.id, selectedSize: e.target.value }))}
                >
                  {["M", "L", "XL", "XXL"].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>

                {/* Quantity Selector */}
                <label style={{ marginLeft: "10px" }}>Quantity: </label>
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                  }
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>

              {/* Remove Button with "X" Icon */}
              <button onClick={() => dispatch(removeFromCart(item.id))} style={{ background: "red", color: "white" }}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          <NavLink to="/p">
            <button onClick={handlePlaceOrder} style={{ marginLeft: "10px" }}>
              Place Order
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;



// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from '../Redux/Slices/cartSlice.js';
// import { placeOrder } from '../Redux/Slices/orderSlice.js';
// import { NavLink } from 'react-router-dom';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const handlePlaceOrder = () => {
//     if (cartItems.length > 0) {
//       dispatch(placeOrder(cartItems));
//       dispatch(clearCart());
//       alert('Order placed successfully!');
//     } else {
//       alert('Your cart is empty!');
//     }
//   };

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 width={100}
//                 height={100}
//                 style={{ marginRight: '20px' }}
//               />
//               <div>
//                 <h3>{item.title}</h3>
//                 <p>Price: ${item.price}</p>
//                 <p>Size: L {item.selectedSize}</p>
//               </div>
//               <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cartItems.length > 0 && (
//         <div>
//           <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//           <NavLink to="/p">
//             <button onClick={handlePlaceOrder} style={{ marginLeft: '10px' }}>
//               Place Order
//             </button>
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
