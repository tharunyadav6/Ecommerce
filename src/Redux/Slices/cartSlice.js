import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedSize, price } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.selectedSize === selectedSize
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity; // Update total price
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: price });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateSize: (state, action) => {
      const { id, selectedSize } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.selectedSize = selectedSize;
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.price * quantity; // Update total price
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateSize, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
