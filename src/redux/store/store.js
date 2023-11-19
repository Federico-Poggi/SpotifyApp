import {combineReducers, configureStore} from "@reduxjs/toolkit";
import MainReducer from "../Reducers/main-reducer.js";


const bigReducer=combineReducers({
  song: MainReducer,
                                 })


const store = configureStore({
  reducer: bigReducer,
});

export default store;
