import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./data/movieSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
