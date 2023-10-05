import * as types from "../../../constants/types";

const initialState = {
  balance: null,
  loading: false,
  error: null,
};

export default function BalanceReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BALANCE_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_BALANCE_SUCCESS:
      return {
        ...state,
        loading: false,
        balance: action.payload.data,
      };
    case types.GET_BALANCE_FAILED:
      return {
        ...state,
        loading: false,
        balance: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
