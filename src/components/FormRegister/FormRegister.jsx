import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICON } from "../../constants/icon";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import {
  clearRegister,
  postRegister,
} from "../../redux/features/register/action";
import { useEffect } from "react";
import { showToast } from "../../redux/features/toast/action";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const navigate = useNavigate();
  const [modifiedData, setModifiedData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const { error, loading, user } = useSelector((state) => state.register);

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
      navigate("/login");
    }
    return () => dispatch(clearRegister());
  }, [user?.message]);

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
      if (confirmPassword === "") {
        setErrorMessage({
          ...newFormErrors,
          confirmPassword: "harus diisi",
        });
      } else if (confirmPassword !== modifiedData.password) {
        setErrorMessage({
          ...newFormErrors,
          confirmPassword: "password tidak sama",
        });
      }
      setErrorMessage(...errorMessage, ...newFormErrors);
    } else {
      dispatch(postRegister(modifiedData));
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
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
            type="text"
            placeholder="nama depan"
            icon={ICON["user"]}
            value={modifiedData.first_name}
            name="first_name"
            onChange={handleInputChange}
            errorMessage={errorMessage.first_name}
          />
          <FormInput
            type="text"
            placeholder="nama belakang"
            icon={ICON["user"]}
            value={modifiedData.last_name}
            name="last_name"
            onChange={handleInputChange}
            errorMessage={errorMessage.last_name}
          />
          <FormInput
            type="password"
            placeholder="buat password"
            icon={ICON["password"]}
            value={modifiedData.password}
            name="password"
            onChange={handleInputChange}
            errorMessage={errorMessage.password}
          />
          <FormInput
            type="password"
            placeholder="konfirmasi password"
            icon={ICON["password"]}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMessage={errorMessage.confirmPassword}
          />
        </div>
        <Button
          text="Registrasi"
          type="submit"
          loading={loading}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default FormRegister;
