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
  const [errorMessage, setErrorMessage] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifiedData({ ...modifiedData, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    const newFormErrors = { ...errorMessage };

    for (const field in modifiedData) {
      if (modifiedData[field].trim() === "") {
        newFormErrors[field] = "harus diisi";
        valid = false;
      }
    }

    if (!valid) {
      setErrorMessage(newFormErrors);
    } else {
      dispatch(postLogin(modifiedData));
    }
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
            name="email"
            onChange={handleInputChange}
            errorMessage={errorMessage.email}
          />
          <FormInput
            type="password"
            placeholder="masukkan password anda"
            icon={ICON["password"]}
            value={modifiedData.password}
            name="password"
            onChange={handleInputChange}
            errorMessage={errorMessage.password}
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
