import * as types from "../../../constants/types";

const initialState = {
  banners: [],
  loading: false,
  error: null,
};

export default function BannersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_BANNERS_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_BANNERS_SUCCESS:
      return {
        ...state,
        loading: false,
        banners: action.payload.data,
      };
    case types.GET_BANNERS_FAILED:
      return {
        ...state,
        loading: false,
        banners: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
