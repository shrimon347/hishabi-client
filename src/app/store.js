import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice"
import { authApi } from "./api/apiSlice";

const store = configureStore({
    reducer: {
      user: userReducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware),
  });
  
  export default store;