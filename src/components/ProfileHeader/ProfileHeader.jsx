import React from "react";
import profileDefault from "../../assets/images/Profile Photo.png";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { PutImage } from "../../redux/features/profile/action";
import { useState } from "react";
import { useEffect } from "react";

const ProfileHeader = () => {
  const { profile, dataUpload } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    setImageUrl(dataUpload?.profile_image || profile?.data?.profile_image);
  }, [dataUpload?.profile_image, profile?.data?.profile_image]);

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    dispatch(PutImage(formData));
  };
  console.log();

  return (
    <div>
      <label for="upload-image">
        <div className="flex flex-col items-center">
          <div className="relative">
            {imageUrl?.split("/")[imageUrl?.split("/")?.length - 1] ===
            "null" ? (
              <img
                src={profileDefault}
                alt="Profile Photo.png"
                className="w-40"
              />
            ) : (
              <img
                src={imageUrl}
                alt={imageUrl}
                className="w-40 h-40 object-cover rounded-full border-grey-primary"
              />
            )}
            <div className="absolute w-8   h-8 rounded-full flex justify-center items-center border border-grey-primary bottom-2 left-32 bg-white">
              <Icon icon="ic:baseline-edit" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold">
            {profile?.data?.first_name} {profile?.data?.last_name}
          </h1>
        </div>
      </label>
      <input
        type="file"
        className="hidden"
        id="upload-image"
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ProfileHeader;
