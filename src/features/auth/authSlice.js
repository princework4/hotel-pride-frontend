import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUserLoggedIn: false,
    loggedInUser: {},
  },
  reducers: {
    updateIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
    updateLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { updateIsUserLoggedIn, updateLoggedInUser } = authSlice.actions;

export default authSlice.reducer;
