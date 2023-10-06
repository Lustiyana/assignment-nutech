import * as types from "../../../constants/types";

export const ShowToast = (value) => (dispatch) => {
  try {
    dispatch({
      type: types.OPEN_TOAST,
      payload: value,
    });
  } catch (error) {
    console.log(error);
  }
};
