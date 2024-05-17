import {
  DATA_FETCHING_FAILURE,
  DATA_FETCHING_SUCESS,
  DATA_FETCHING_PENDING,
} from "./action.types";

export const getdata = () => (dispatch) => {
  dispatch({ type: DATA_FETCHING_PENDING });
  fetch(`https://dummyjson.com/products`)
    .then((res) => res.json())
    .then((data) => dispatch({ type: DATA_FETCHING_SUCESS, payload: data }))
    .catch((err) => dispatch({ type: DATA_FETCHING_FAILURE }));
};

export const s_data = (id) => (dispatch) => {
  dispatch({ type: DATA_FETCHING_PENDING });
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch({ type: DATA_FETCHING_SUCESS, payload: data }))
    .catch((err) => dispatch({ type: DATA_FETCHING_FAILURE }));
};
