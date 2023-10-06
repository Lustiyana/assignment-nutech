import React from "react";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import FormRegister from "../../components/FormRegister/FormRegister";

const title = ["Lengkapi data", "untuk membuat akun"];
const linkForm = {
  text: "Sudah punya akun? Masuk",
  link: "/login",
};

const RegisterPage = () => {
  return (
    <AuthLayout title={title} linkForm={linkForm}>
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
