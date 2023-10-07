import * as types from "../../../constants/types";
const initialState = {
  amount: "",
  topupData: null,
  loading: false,
  error: null,
};

export default function topupReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TOPUP_VALUE:
      return {
        amount: action.payload,
      };
    case types.POST_TOPUP_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        error: null,
      };
    case types.POST_TOPUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case types.POST_TOPUP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
