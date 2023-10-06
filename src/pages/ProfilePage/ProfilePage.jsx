import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormProfile from "../../components/FormProfile/FormProfile";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="main-container">
      <ProfileHeader />
      <FormProfile />
    </div>
  );
};

export default ProfilePage;
