import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import { ICON } from "../../constants/icon";
import Button from "../../components/Button/Button";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";

const title = ["Lengkapi data", "untuk membuat akun"];
const linkForm = {
  text: "Sudah punya akun? Masuk",
  link: "/login",
};
const RegistraterPage = () => {
  return (
    <AuthLayout title={title} linkForm={linkForm}>
      <form action="" className="flex flex-col">
        <div className="input-wrapper">
          <FormInput
            type="text"
            placeholder="masukkan email anda"
            icon={ICON["email"]}
          />
          <FormInput type="text" placeholder="nama depan" icon={ICON["user"]} />
          <FormInput
            type="text"
            placeholder="nama belakang"
            icon={ICON["user"]}
          />
          <FormInput
            type="password"
            placeholder="buat password"
            icon={ICON["password"]}
          />
          <FormInput
            type="password"
            placeholder="konfirmasi password"
            icon={ICON["password"]}
          />
        </div>
        <Button text="Registrasi" />
      </form>
    </AuthLayout>
  );
};

export default RegistraterPage;
