import { createSlice } from "@reduxjs/toolkit";

export const bikesSlices = createSlice({
  name: "bikes",
  initialState: {
    bikes: [],
    bike: [],
    isLoading: false,
  },
  reducers: {
    startLoadingBikes: (state) => {
      state.isLoading = true;
    },
    setBikes: (state, action) => {
      state.isLoading = false;
      state.bikes = action.payload;
    },
    setBike: (state, action) => {
      state.isLoading = false;
      state.bike = action.payload;
    },
  },
});

export const { startLoadingBikes, setBikes, setBike } = bikesSlices.actions;
