/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  jwt: null,
  isAuthenticated: false,
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

      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(user));
    },
    logOut: (state, action) => {
      (state.user = null), (state.jwt = null), (state.isAuthenticated = false);
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
