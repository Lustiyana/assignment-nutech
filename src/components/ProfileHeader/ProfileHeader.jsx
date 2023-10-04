import React from "react";
import profile from "../../assets/images/Profile Photo.png";
import { Icon } from "@iconify/react";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img src={profile} alt="Profile Photo.png" className="w-40" />
        <div className="absolute w-8 h-8 rounded-full flex justify-center items-center border border-grey-primary bottom-2 left-32 bg-white">
          <Icon icon="ic:baseline-edit" />
        </div>
      </div>
      <h1 className="text-3xl font-semibold">Kristanto Wibowo</h1>
    </div>
  );
};

export default ProfileHeader;
