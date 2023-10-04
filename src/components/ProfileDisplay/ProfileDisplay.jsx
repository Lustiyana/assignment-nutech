import React from "react";
import profile from "../../assets/images/Profile Photo.png";
import TextHeader from "../atoms/TextHeader/TextHeader";

const ProfileDisplay = () => {
  return (
    <div>
      <img src={profile} alt="Profile Photo.png" className="mb-8" />
      <TextHeader text1="Selamat Datang" text2="Kristanto Wibowo" />
    </div>
  );
};

export default ProfileDisplay;
