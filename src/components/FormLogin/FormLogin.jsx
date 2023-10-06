import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICON } from "../../constants/icon";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Toast from "../Toast/Toast";
import { ClearLogin, PostLogin } from "../../redux/features/login/action";
import { ShowToast } from "../../redux/features/toast/action";
import Cookies from "js-cookie";

const FormLogin = () => {
  const navigate = useNavigate();
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.login);

  useEffect(() => {
    if (dataUser?.error?.message) {
      dispatch(
        ShowToast({
          isOpen: true,
          message: dataUser.error.message,
          isSuccess: false,
        })
      );
    }
  }, [dataUser?.error?.message]);

  useEffect(() => {
    if (dataUser?.user?.message) {
      dispatch(
        ShowToast({
          isOpen: true,
          message: dataUser?.user?.message,
          isSuccess: true,
        })
      );
    }
    return () => dispatch(ClearLogin());
  }, [dataUser?.user?.message]);

  useEffect(() => {
    if (dataUser?.user?.data?.token) {
      navigate("/");
    }
  }, [dataUser?.user?.data?.token]);

  const handleEmailChange = (e) => {
    setModifiedData({ ...modifiedData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setModifiedData({ ...modifiedData, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostLogin(modifiedData));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <FormInput
            type="text"
            placeholder="masukkan email anda"
            icon={ICON["email"]}
            value={modifiedData.email}
            onChange={handleEmailChange}
          />
          <FormInput
            type="password"
            placeholder="masukkan password anda"
            icon={ICON["password"]}
            value={modifiedData.password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button text="Login" type="submit" />
      </form>
    </div>
  );
};

export default FormLogin;
