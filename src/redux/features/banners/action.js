import * as types from "../../../constants/types";
import { BannersService } from "../../../services/items";

export const GetBanners = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BANNERS_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await BannersService();

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
