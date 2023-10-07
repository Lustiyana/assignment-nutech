import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profileimage from "../../assets/images/Profile Photo.png";
import { getProfile } from "../../redux/features/profile/action";
import TextHeader from "../atoms/TextHeader/TextHeader";

const ProfileDisplay = () => {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <div>
      <img src={profileimage} alt={profileimage} className="mb-8" />
      <TextHeader
        text1="Selamat Datang"
        text2={`${profile?.data?.first_name} ${profile?.data?.last_name}`}
      />
    </div>
  );
};

export default ProfileDisplay;
