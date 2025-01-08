import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  reducers: {
    placeOrder: (state, action) => {
      state.orders.push(action.payload); // Add a new order
    },
    cancelOrder: (state, action) => {
      state.orders.splice(action.payload, 1); // Remove order by index
    },
  },
});

export const { placeOrder, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
