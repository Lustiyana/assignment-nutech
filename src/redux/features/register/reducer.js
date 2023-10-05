import * as types from "../../../constants/types";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_REGISTER_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.POST_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.POST_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
