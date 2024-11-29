/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  jwt: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"), 
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, jwt } = action.payload;
      state.user = user;
      state.jwt = jwt;
      state.isAuthenticated = true;
      state.isLoading = false;

      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOut: (state) => {
      state.user = null;
      state.jwt = null;
      state.isAuthenticated = false;

      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, logOut, setLoading } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.jwt;
export const selectIsLoading = (state) => state.auth.isLoading;
