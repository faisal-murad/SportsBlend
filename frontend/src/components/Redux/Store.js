// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../Redux/CategorySlice';
import productReducer from '../Redux/ProductSlice';
import cartReducer from '../Redux/CartSlice';

export const store = configureStore({
  reducer: {
    categories : categoryReducer,
    products : productReducer,
    carts:cartReducer,
  }
});
export default store;