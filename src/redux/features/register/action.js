import * as types from "../../../constants/types";
import { RegisterService } from "../../../services/auth";

export const PostRegister = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_REGISTER_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await RegisterService(dataParams);

    dispatch({
      type: types.POST_REGISTER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: types.POST_REGISTER_FAILED,
      payload: { error },
    });
  }
};
