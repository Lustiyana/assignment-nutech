import * as types from "../../../constants/types";
import { historiesService } from "../../../services/items";

export const getHistories = (valueOffset, valueLimit) => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_HISTORIES_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await historiesService(valueOffset, valueLimit);

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
