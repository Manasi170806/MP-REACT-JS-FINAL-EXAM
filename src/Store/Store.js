// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slices/productSlice/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
