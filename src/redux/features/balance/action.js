import * as types from "../../../constants/types";
import { balanceService } from "../../../services/items";

export const getBalance = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BALANCE_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await balanceService();

    dispatch({
      type: types.GET_BALANCE_SUCCESS,
      payload: {
        data: data.data,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_BALANCE_FAILED,
      payload: {
        error,
      },
    });
  }
};
