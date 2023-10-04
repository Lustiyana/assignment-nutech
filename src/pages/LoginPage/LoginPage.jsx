import React from "react";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import { ICON } from "../../constants/icon";
import "../../index.css";

const title = ["Lengkapi data", "untuk membuat akun"];
const linkForm = {
  text: "belum punya akun? registrasi",
  link: "/register",
};
const LoginPage = () => {
  return (
    <AuthLayout title={title} linkForm={linkForm}>
      <form action="" className="form-container">
        <div className="input-wrapper">
          <FormInput
            type="text"
            placeholder="masukkan email anda"
            icon={ICON["email"]}
          />
          <FormInput
            type="password"
            placeholder="masukkan password anda"
            icon={ICON["password"]}
          />
        </div>
        <Button text="Login" />
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
