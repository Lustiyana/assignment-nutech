import * as types from "../../../constants/types";
import { ProfileService } from "../../../services/items";
import {
  EditImageService,
  EditProfileService,
} from "../../../services/profile";

export const HandleChangeProfile = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: types.CHANGE_PROFILE_VALUE,
      payload: { name, value },
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_PROFILE_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await ProfileService();

    dispatch({
      type: types.GET_PROFILE_SUCCESS,
      payload: {
        data: data,
      },
    });
  } catch (error) {
    dispatch({
      type: types.GET_PROFILE_FAILED,
      payload: {
        error,
      },
    });
  }
};

export const PutProfile = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.PUT_PROFILE_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await EditProfileService(dataParams);
    dispatch({
      type: types.PUT_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.PUT_PROFILE_FAILED,
      payload: {
        error,
      },
    });
  }
};

export const PutImage = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.PUT_IMAGE_LOADING,
    });
    const data = await EditImageService(dataParams);

    dispatch({
      type: types.PUT_IMAGE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: types.PUT_IMAGE_FAILED,
      payload: {
        error,
      },
    });
  }
};

export const ClearProfile = () => (dispatch) => {
  try {
    dispatch({
      type: types.CLEAR_PROFILE,
    });
  } catch (error) {
    console.log(error);
  }
};
