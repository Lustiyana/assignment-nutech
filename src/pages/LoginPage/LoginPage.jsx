import React from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

const title = ["Lengkapi data", "untuk membuat akun"];
const linkForm = {
  text: "belum punya akun? registrasi",
  link: "/register",
};
const LoginPage = () => {
  return (
    <AuthLayout title={title} linkForm={linkForm}>
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
