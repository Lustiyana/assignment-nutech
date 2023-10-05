import * as types from "../../../constants/types";
import Cookies from "js-cookie";

const initialState = {
  user: {
    token: Cookies.get("token"),
  },
  loading: false,
  error: null,
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case types.POST_LOGIN_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.POST_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.POST_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
