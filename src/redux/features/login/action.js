import * as types from "../../../constants/types";
import { LoginService } from "../../../services/auth";
import Cookies from "js-cookie";

export const PostLogin = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_LOGIN_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await LoginService(dataParams);
    console.log(data.data.token);
    if (data.data?.token) {
      Cookies.set("token", data.data.token);
    }

    dispatch({
      type: types.POST_LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: types.POST_LOGIN_FAILED,
    //   payload: { error },
    // });
  }
};
