import * as types from "../../../constants/types";
import { TopupService } from "../../../services/transaction";

export const OnChangeTopup = (value) => async (dispatch) => {
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
    const data = await TopupService(dataParams);

    dispatch({
      type: types.POST_TOPUP_SUCCESS,
      payload: data.data,
    });
    dispatch({
      type: types.CHANGE_TOPUP_VALUE,
      payload: "",
    });
  } catch (error) {
    console.log(error);
  }
};
