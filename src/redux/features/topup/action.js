import * as types from "../../../constants/types";
import { topupService } from "../../../services/transaction";

export const onChangeTopup = (value) => (dispatch) => {
  try {
    dispatch({
      type: types.CHANGE_TOPUP_VALUE,
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};

export const PostTopup = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.POST_TOPUP_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await topupService(dataParams);

    dispatch({
      type: types.POST_TOPUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const clearTopup = () => (dispatch) => {
  try {
    dispatch({
      type: types.CHANGE_TOPUP_VALUE,
    });
  } catch (error) {
    console.log(error);
  }
};
