import React from "react";
import "../../index.css";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import { ICON } from "../../constants/icon";
import "../../index.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleClickLogout = (e) => {
    e.preventDefault();
    console.log(Cookies.get("token"));
    Cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <div className="main-container">
      <ProfileHeader />
      <form action="" className="px-28">
        <div className="input-wrapper">
          <FormInput
            type="text"
            value="wallet@nutech.com"
            icon={ICON["email"]}
            label="Email"
            readOnly
          />
          <FormInput
            type="text"
            value="Kristanto"
            icon={ICON["user"]}
            label="Nama Depan"
            readOnly
          />
          <FormInput
            type="text"
            value="Wibowo"
            icon={ICON["user"]}
            label="Nama Belakang"
            readOnly
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button text="Edit Profile" outline />
          <Button text="Logout" onClick={handleClickLogout} />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
