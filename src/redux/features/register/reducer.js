import * as types from "../../../constants/types";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function registerReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_REGISTER_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        error: null,
      };
    case types.POST_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case types.POST_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.CLEAR_REGISTER:
      return initialState;
    default:
      return state;
  }
}
