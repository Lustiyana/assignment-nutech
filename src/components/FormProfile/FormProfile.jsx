import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICON } from "../../constants/icon";
import {
  clearProfile,
  getProfile,
  handleChangeProfile,
  putProfile,
} from "../../redux/features/profile/action";
import { showToast } from "../../redux/features/toast/action";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

const FormProfile = () => {
  const { profile, first_name, last_name, loading, error, dataUpdate } =
    useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (error?.error?.message) {
      dispatch(
        showToast({
          isOpen: true,
          message: error.error.message,
          isSuccess: false,
        })
      );
      dispatch(getProfile());
    }
    return () => dispatch(clearProfile());
  }, [error?.error?.message]);

  useEffect(() => {
    if (dataUpdate?.message) {
      dispatch(
        showToast({
          isOpen: true,
          message: dataUpdate.message,
          isSuccess: true,
        })
      );
      dispatch(getProfile());
    }
    return () => dispatch(clearProfile());
  }, [dataUpdate?.message]);

  const handleClickLogout = (e) => {
    e.preventDefault();
    Cookies.remove("token");
    navigate("/");
  };

  const handleClickEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleClickCancel = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    dispatch(putProfile({ first_name, last_name }));
  };

  return (
    <form action="" className="px-28" onSubmit={handleSubmitEdit}>
      <div className="input-wrapper">
        <FormInput
          type="text"
          value={profile?.data?.email}
          icon={ICON["email"]}
          label="Email"
          readOnly
        />
        <FormInput
          type="text"
          value={first_name}
          icon={ICON["user"]}
          label="Nama Depan"
          readOnly={!isEdit}
          onChange={(e) =>
            dispatch(handleChangeProfile("first_name", e.target.value))
          }
        />
        <FormInput
          type="text"
          value={last_name}
          icon={ICON["user"]}
          label="Nama Belakang"
          readOnly={!isEdit}
          onChange={(e) =>
            dispatch(handleChangeProfile("last_name", e.target.value))
          }
        />
      </div>
      {!isEdit ? (
        <div className="flex flex-col gap-4">
          <Button text="Edit Profile" outline onClick={handleClickEdit} />
          <Button text="Logout" onClick={handleClickLogout} />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4">
            <Button text="Simpan" outline type="submit" />
            <Button
              text="Batalkan"
              onClick={handleClickCancel}
              loading={loading}
            />
          </div>
        </>
      )}
    </form>
  );
};

export default FormProfile;
