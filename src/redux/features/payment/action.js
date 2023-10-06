import * as types from "../../../constants/types";
import { PaymentService } from "../../../services/transaction";

export const PostPayment = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_PAYMENT_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await PaymentService(dataParams);
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

export const ClearPayment = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_PAYMENT,
  });
};
