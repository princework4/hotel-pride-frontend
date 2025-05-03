import { createSlice } from "@reduxjs/toolkit";

export const nonFunctionalSlice = createSlice({
  name: "nonFunctional",
  initialState: {
    isHomePage: false,
    shouldShowCallback: true,
    steppersActiveStep: null,
  },
  reducers: {
    updateIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    },
    updateShouldShowCallback: (state, action) => {
      state.steppersActiveStep = action.payload;
    },
    updateSteppersActiveStep: (state, action) => {
      state.steppersActiveStep = action.payload;
    },
  },
});

export const {
  updateIsHomePage,
  updateShouldShowCallback,
  updateSteppersActiveStep,
} = nonFunctionalSlice.actions;

export default nonFunctionalSlice.reducer;
