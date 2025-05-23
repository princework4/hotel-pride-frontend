import { createSlice } from "@reduxjs/toolkit";

export const nonFunctionalSlice = createSlice({
  name: "nonFunctional",
  initialState: {
    isHomePage: false,
    shouldShowOfferHeader: true,
    shouldShowCallback: true,
    shouldShowWhatsapp: true,
    steppersActiveStep: null,
  },
  reducers: {
    updateIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    },
    updateShouldShowOfferHeader: (state, action) => {
      state.shouldShowOfferHeader = action.payload;
    },
    updateShouldShowCallback: (state, action) => {
      state.shouldShowCallback = action.payload;
    },
    updateShouldShowWhatsapp: (state, action) => {
      state.shouldShowWhatsapp = action.payload;
    },
    updateSteppersActiveStep: (state, action) => {
      state.steppersActiveStep = action.payload;
    },
  },
});

export const {
  updateIsHomePage,
  updateShouldShowOfferHeader,
  updateShouldShowCallback,
  updateShouldShowWhatsapp,
  updateSteppersActiveStep,
} = nonFunctionalSlice.actions;

export default nonFunctionalSlice.reducer;
