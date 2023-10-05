import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { ICON } from "../../constants/icon";
import Button from "../../components/Button/Button";
import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import { PostRegister } from "../../redux/features/register/action";
import { useDispatch, useSelector } from "react-redux";

const title = ["Lengkapi data", "untuk membuat akun"];
const linkForm = {
  text: "Sudah punya akun? Masuk",
  link: "/login",
};

const RegisterPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modifiedData.password === confirmPassword) {
      dispatch(PostRegister(modifiedData));
      if (dataUser.user?.status === 0) {
        navigate("/login");
      }
    } else {
      setErrorMessage("password tidak sama");
    }
  };

  return (
    <AuthLayout title={title} linkForm={linkForm}>
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
        <Button text="Registrasi" type="submit" />
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
