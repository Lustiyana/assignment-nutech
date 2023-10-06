import Cookies from "js-cookie";
import * as types from "../../../constants/types";
import { LoginService } from "../../../services/auth";

export const PostLogin = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_LOGIN_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await LoginService(dataParams);
    Cookies.set("token", data?.data?.token);
    dispatch({
      type: types.POST_LOGIN_SUCCESS,
      payload: data || null,
    });
  } catch (error) {
    dispatch({
      type: types.POST_LOGIN_FAILED,
      payload: error,
    });
  }
};

export const ClearLogin = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_LOGIN,
  });
};
