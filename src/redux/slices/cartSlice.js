import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.unshift(action.payload.item);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incCartProduct: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      );
    },
    decCartProduct: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              qty: item.qty - 1,
            }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, incCartProduct, decCartProduct } =
  CartSlice.actions;

export default CartSlice.reducer;

