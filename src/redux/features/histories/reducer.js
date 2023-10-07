import * as types from "../../../constants/types";

const initialState = {
  histories: [],
  loading: false,
  error: null,
};

export default function historiesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_HISTORIES_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
        histories: [],
      };
    case types.GET_HISTORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        histories:
          state.histories.length === 0
            ? action.payload.data
            : [...state.histories, ...action.payload.data],
      };
    case types.GET_HISTORIES_FAILED:
      return {
        ...state,
        loading: false,
        histories: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
