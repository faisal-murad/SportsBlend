import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [ ],
  reducers: {
    
    addProduct: (state, action) => {
      return [...state, action.payload];
    
    },
    updateProduct: (state, action) => {
      const { id, name, price, image, discripton } = action.payload;
      return state.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            name,
            price,
            image,
            discripton,
          };
        }
        return product;
      });
    },
    deleteProduct: (state, action) => {
      const { id } = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;