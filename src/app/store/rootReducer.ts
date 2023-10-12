import { combineReducers } from "@reduxjs/toolkit";
import { booksApi } from "../../shared/api/booksApi";

export const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer
});
