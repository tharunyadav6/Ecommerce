import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice'; // Import cart slice
import wishListReducer from './Slices/wishListSlice'; // Import wishlist slice
import orderReducer from './Slices/orderSlice'; // Import order slice

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart state management
    wishList: wishListReducer, // Wishlist state management
    order: orderReducer, // Order state management
  },
});

export default store;
