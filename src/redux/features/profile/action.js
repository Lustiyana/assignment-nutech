import * as types from "../../../constants/types";
import { ProfileService } from "../../../services/items";

export const GetProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_PROFILE_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await ProfileService();

    dispatch({
      type: types.GET_PROFILE_SUCCESS,
      payload: {
        data: data,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_PROFILE_FAILED,
      payload: {
        error,
      },
    });
  }
};
