import * as types from "../../../constants/types";
import { HistoriesService } from "../../../services/items";

export const GetHistories = (valueOffset, valueLimit) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_HISTORIES_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await HistoriesService(valueOffset, valueLimit);

    dispatch({
      type: types.GET_HISTORIES_SUCCESS,
      payload: {
        data: data.data.records,
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
