import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      return [...state, action.payload];
    },
    updateCategory: (state, action) => {
      const { id, name, image } = action.payload;
      return state.map((category) => {
        if (category.id === id) {
          return {
            ...category,
            name,
            image,
          };
        }
        return category;
      });
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      return state.filter((category) => category.id !== id);
    },
  },
});

export const { addCategory, updateCategory, deleteCategory } = categorySlice.actions;
export default categorySlice.reducer;


