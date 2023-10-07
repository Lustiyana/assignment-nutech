import * as types from "../../../constants/types";

const initialState = {
  profile: [],
  dataEdited: [],
  imageEdited: [],
  first_name: "",
  last_name: "",
  loading: false,
  error: null,
  dataUpload: null,
  dataUpdate: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_PROFILE_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case types.GET_PROFILE_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        first_name: action.payload.data.data.first_name,
        last_name: action.payload.data.data.last_name,
        profile: action.payload.data,
      };
    case types.GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        profile: action.payload.error,
      };
    case types.PUT_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataUpload: action.payload,
      };

    case types.PUT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataUpdate: action.payload,
      };

    case types.PUT_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
        dataUpdate: null,
      };
    case types.CLEAR_PROFILE:
      return {
        ...state,
        dataUpdate: { ...state.dataUpdate, message: null },
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
}
