import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlices } from "./slices/categories";
import { bikesSlices } from "./slices/bikes";

export const store = configureStore({
  reducer: {
    categories: categoriesSlices.reducer,
    bikes: bikesSlices.reducer,
  },
});
