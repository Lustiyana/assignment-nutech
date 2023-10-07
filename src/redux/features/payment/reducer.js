import * as types from "../../../constants/types";
const initialState = {
  paymentData: null,
  loading: false,
  error: null,
};

export default function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_PAYMENT_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.POST_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.POST_PAYMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case types.CLEAR_PAYMENT:
      return initialState;
    default:
      return state;
  }
}
