import React from "react";
import { Link } from "react-router-dom";
import Illustrasi from "../../assets/images/Illustrasi Login.png";
import LogoSims from "../../components/Atoms/LogoSims/LogoSims";

const AuthLayout = ({ children, title, linkForm, onSubmit }) => {
  console.log(linkForm.link);
  return (
    <div className="flex">
      <div className="px-52 flex-1 flex flex-col justify-center">
        <div className="flex flex-col items-center gap-8 mb-8">
          <LogoSims />
          <h1 className="font-semibold text-2xl text-center">
            {title[0]}
            <br></br>
            {title[1]}
          </h1>
        </div>
        <form action="" className="flex flex-col mb-8" onSubmit={onSubmit}>
          {children}
        </form>
        <div className="text-center">
          {linkForm.text}
          <Link to={linkForm.link} className="text-red-primary">
            {" "}
            di sini
          </Link>
        </div>
      </div>
      <div className="">
        <img
          src={Illustrasi}
          alt=""
          className="h-screen object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
