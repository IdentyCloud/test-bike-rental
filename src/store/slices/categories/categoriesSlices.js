import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlices = createSlice({
  name: "caterories",
  initialState: {
    categories: [],
    isLoading: false,
  },
  reducers: {
    startLoadingCategories: (state) => {
      state.isLoading = true;
    },
    setCategories: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
  },
});

export const { startLoadingCategories, setCategories } =
  categoriesSlices.actions;
