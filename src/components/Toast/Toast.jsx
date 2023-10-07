import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "../../redux/features/toast/action";
import { useEffect } from "react";

const Toast = () => {
  const { message, isOpen, isSuccess } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    dispatch(showToast({ isOpen: false, message: "", isSuccess: true }));
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => handleClose(), 3000);
    }
  }, [isOpen]);

  return isOpen ? (
    <div className="toast toast-start w-1/2">
      <div
        className={`alert ${
          isSuccess ? "alert-success" : "alert-error"
        } flex justify-between`}
      >
        <span>{message}</span>
        <button onClick={handleClose}>
          <Icon icon="maki:cross" />
        </button>
      </div>
    </div>
  ) : null;
};

export default Toast;
