import * as types from "../../../constants/types";
const initialState = {
  top_up_amount: "",
  data: null,
  loading: false,
  error: null,
};

export default function TopupReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_TOPUP_VALUE:
      return {
        top_up_amount: action.payload,
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
