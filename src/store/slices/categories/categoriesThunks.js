import axios from "axios";
import { startLoadingCategories, setCategories } from "./categoriesSlices";

import "../../../api/categoriesApi";

export const getCategories = () => async (dispatch) => {
  dispatch(startLoadingCategories());
  const response = await axios.get("/api/bikes/categories");
  dispatch(setCategories(response.data.categories));
};
