 
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.orderId !== action.payload);
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus, location } = action.payload;
      const order = state.orders.find(order => order.orderId === orderId);
      if (order) {
        order.status = newStatus;
        if (location) {
          order.location = location;
        }
      }
    },
  },
});

export const { placeOrder, cancelOrder, updateOrderStatus } = orderSlice.actions;
export default orderSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';

// const orderSlice = createSlice({
//   name: 'order',
//   initialState: {
//     orders: [],
//   },
//   reducers: {
//     placeOrder: (state, action) => {
//       const newOrder = {
//         orderId: `ORD-${Date.now()}`, // Unique Order ID
//         items: action.payload, // Ensure items are stored inside an array
//       };
//       state.orders.push(newOrder);
//     },
//     cancelOrder: (state, action) => {
//       state.orders = state.orders.filter(order => order.orderId !== action.payload);
//     },
//   },
// });

// export const { placeOrder, cancelOrder } = orderSlice.actions;
// export default orderSlice.reducer;

