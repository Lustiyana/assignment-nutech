import * as types from "../../../constants/types";
import { HistoriesService } from "../../../services/items";

export const GetHistories = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_HISTORIES_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await HistoriesService();

    dispatch({
      type: types.GET_HISTORIES_SUCCESS,
      payload: {
        data: data,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_HISTORIES_FAILED,
      payload: {
        error,
      },
    });
  }
};
