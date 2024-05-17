import {
  DATA_FETCHING_FAILURE,
  DATA_FETCHING_SUCESS,
  DATA_FETCHING_PENDING,
} from "./action.types";

const Initial_State = {
  products: [],
  isLoading: false,
  isError: false,
};

export const P_reducer = (state = Initial_State, { type, payload }) => {
  switch (type) {
    case DATA_FETCHING_FAILURE:
      return { ...state, isError: true, isLoading: true };
    case DATA_FETCHING_PENDING:
      return { ...state, isLoading: true };
    case DATA_FETCHING_SUCESS:
      return { ...state, isLoading: false, isError: false, products: payload };
    default:
      return state;
      break;
  }
};
