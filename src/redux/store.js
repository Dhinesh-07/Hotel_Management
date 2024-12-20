import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotelSlice"; // Make sure the path is correct

const store = configureStore({
  reducer: {
    hotels: hotelReducer, // this should match the slice name
  },
  devTools: true,
});

export default store;
