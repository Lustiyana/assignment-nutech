import * as types from "../../../constants/types";
import { servicesService } from "../../../services/items";

export const getServices = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_SERVICES_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await servicesService();

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
