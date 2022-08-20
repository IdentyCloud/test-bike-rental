import axios from "axios";
import { startLoadingBikes, setBikes, setBike } from "./bikesSlices";

import "../../../api/bikesApi";

export const getBikesByCategory = (categoryId) => async (dispatch) => {
  dispatch(startLoadingBikes());
  const response = await axios.get(`/api/bikesByCategory/${categoryId}`);
  dispatch(setBikes(response.data));
};

export const getBike = (bikeId) => async (dispatch) => {
  dispatch(startLoadingBikes());
  const response = await axios.get(`/api/bikeById/${bikeId}`);
  dispatch(setBike(response.data));
};
