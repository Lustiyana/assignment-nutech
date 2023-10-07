import * as types from "../../../constants/types";
import { paymentService } from "../../../services/transaction";

export const postPayment = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_PAYMENT_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await paymentService(dataParams);
    console.log(data);

    dispatch({
      type: types.POST_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.POST_PAYMENT_FAILED,
      payload: { error },
    });
  }
};

export const clearPayment = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_PAYMENT,
  });
};
