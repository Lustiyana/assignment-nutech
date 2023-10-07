import * as types from "../../../constants/types";
import { bannersService } from "../../../services/items";

export const getBanners = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BANNERS_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await bannersService();

    dispatch({
      type: types.GET_BANNERS_SUCCESS,
      payload: {
        data: data,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_BANNERS_FAILED,
      payload: {
        error,
      },
    });
  }
};
