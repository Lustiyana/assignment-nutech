import * as types from "../../../constants/types";

const initialState = {
  services: [],
  loading: false,
  error: null,
};

export default function servicesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SERVICES_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case types.GET_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload.data,
      };
    case types.GET_SERVICES_FAILED:
      return {
        ...state,
        loading: false,
        services: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
