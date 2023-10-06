import * as types from "../../../constants/types";

const initialState = {
  isOpen: false,
  message: "",
  isSuccess: true,
};

export default function ToastReducer(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_TOAST:
      return {
        isOpen: action.payload.isOpen,
        message: action.payload.message,
        isSuccess: action.payload.isSuccess,
      };
    default:
      return state;
  }
}
