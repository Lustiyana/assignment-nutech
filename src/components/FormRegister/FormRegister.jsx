import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICON } from "../../constants/icon";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import {
  ClearRegister,
  PostRegister,
} from "../../redux/features/register/action";
import { useEffect } from "react";
import { ShowToast } from "../../redux/features/toast/action";
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
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.register);

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
      navigate("/login");
    }
    return () => dispatch(ClearRegister());
  }, [dataUser?.user?.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modifiedData.password === confirmPassword) {
      dispatch(PostRegister(modifiedData));
    } else {
      setErrorMessage("password tidak sama");
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
            onChange={(e) =>
              setModifiedData({ ...modifiedData, email: e.target.value })
            }
          />
          <FormInput
            type="text"
            placeholder="nama depan"
            icon={ICON["user"]}
            value={modifiedData.first_name}
            onChange={(e) =>
              setModifiedData({ ...modifiedData, first_name: e.target.value })
            }
          />
          <FormInput
            type="text"
            placeholder="nama belakang"
            icon={ICON["user"]}
            value={modifiedData.last_name}
            onChange={(e) =>
              setModifiedData({ ...modifiedData, last_name: e.target.value })
            }
          />
          <FormInput
            type="password"
            placeholder="buat password"
            icon={ICON["password"]}
            value={modifiedData.password}
            onChange={(e) =>
              setModifiedData({ ...modifiedData, password: e.target.value })
            }
          />
          <FormInput
            type="password"
            placeholder="konfirmasi password"
            icon={ICON["password"]}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            errorMessage={errorMessage}
          />
        </div>
        <Button
          text="Registrasi"
          type="submit"
          loading={dataUser.loading}
          disabled={dataUser.loading}
        />
      </form>
    </div>
  );
};

export default FormRegister;
