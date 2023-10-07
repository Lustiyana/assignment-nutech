import * as types from "../../../constants/types";
import { registerService } from "../../../services/auth";

export const postRegister = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_REGISTER_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await registerService(dataParams);
    dispatch({
      type: types.POST_REGISTER_SUCCESS,
      payload: data || null,
    });
  } catch (error) {
    dispatch({
      type: types.POST_REGISTER_FAILED,
      payload: error,
    });
  }
};

export const clearRegister = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_REGISTER,
  });
};
