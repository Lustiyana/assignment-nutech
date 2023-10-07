import * as types from "../../../constants/types";
import {
  editImageService,
  editProfileService,
  profileService,
} from "../../../services/profile";

export const handleChangeProfile = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: types.CHANGE_PROFILE_VALUE,
      payload: { name, value },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_PROFILE_LOADING,
      payload: {
        loading: true,
      },
    });

    const data = await profileService();

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

export const putProfile = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.PUT_PROFILE_LOADING,
      payload: {
        loading: true,
      },
    });
    const data = await editProfileService(dataParams);
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

export const putImage = (dataParams) => async (dispatch) => {
  try {
    dispatch({
      type: types.PUT_IMAGE_LOADING,
    });
    const data = await editImageService(dataParams);

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

export const clearProfile = () => (dispatch) => {
  try {
    dispatch({
      type: types.CLEAR_PROFILE,
    });
  } catch (error) {
    console.log(error);
  }
};
