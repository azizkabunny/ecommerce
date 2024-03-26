import { configureStore } from "@reduxjs/toolkit";
import WishlistReducer from './slices/wishlistSlice';
import CartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});

export default store;