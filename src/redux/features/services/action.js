import * as types from "../../../constants/types";
import { ServicesService } from "../../../services/items";

export const GetServices = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_SERVICES_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await ServicesService();

    dispatch({
      type: types.GET_SERVICES_SUCCESS,
      payload: {
        data: data,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_SERVICES_FAILED,
      payload: {
        error,
      },
    });
  }
};
