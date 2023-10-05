import * as types from "../../../constants/types";
import { BalanceService } from "../../../services/items";

export const GetBalance = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_BALANCE_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await BalanceService();

    dispatch({
      type: types.GET_BALANCE_SUCCESS,
      payload: {
        data: data,
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
