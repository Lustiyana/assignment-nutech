import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICON } from "../../constants/icon";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import { clearLogin, postLogin } from "../../redux/features/login/action";
import { showToast } from "../../redux/features/toast/action";

const FormLogin = () => {
  const navigate = useNavigate();
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.login);

  useEffect(() => {
    if (error?.message) {
      dispatch(
        showToast({
          isOpen: true,
          message: error.message,
          isSuccess: false,
        })
      );
    }
  }, [error?.message]);

  useEffect(() => {
    if (user?.message) {
      dispatch(
        showToast({
          isOpen: true,
          message: user?.message,
          isSuccess: true,
        })
      );
    }
    return () => dispatch(clearLogin());
  }, [user?.message]);

  useEffect(() => {
    if (user?.data?.token) {
      navigate("/");
    }
  }, [user?.data?.token]);

  const handleEmailChange = (e) => {
    setModifiedData({ ...modifiedData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setModifiedData({ ...modifiedData, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(modifiedData));
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
        <Button
          text="Login"
          type="submit"
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default FormLogin;
