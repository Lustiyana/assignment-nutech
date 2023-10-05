import React from "react";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { ICON } from "../../constants/icon";
import "../../index.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostLogin } from "../../redux/features/login/action";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const title = ["Lengkapi data", "untuk membuat akun"];
const linkForm = {
  text: "belum punya akun? registrasi",
  link: "/register",
};
const LoginPage = () => {
  const navigate = useNavigate();
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.login);
  console.log(modifiedData);

  useEffect(() => {
    if (dataUser.user?.token) {
      // Cookies.set("token", dataUser.user.token);
      navigate("/");
    }
  }, [dataUser.user?.token]);

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
    <AuthLayout title={title} linkForm={linkForm}>
      <form action="" onSubmit={handleSubmit} className="form-container">
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
    </AuthLayout>
  );
};

export default LoginPage;
