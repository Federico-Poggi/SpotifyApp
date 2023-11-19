import { configureStore } from "@reduxjs/toolkit";
import MainReducer from "../Reducers/main-reducer.js";

const store = configureStore({
  reducer: MainReducer,
});

export default store;
