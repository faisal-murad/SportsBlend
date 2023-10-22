import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      return [...state, action.payload];
    }, 
    deleteCart: (state, action) => {
      const { id } = action.payload;
      return state.filter((cart) => cart.id !== id);
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;

