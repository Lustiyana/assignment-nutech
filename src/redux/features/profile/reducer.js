import * as types from "../../../constants/types";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

export default function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_PROFILE_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: action.payload.data,
      };
    case types.GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        profile: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
