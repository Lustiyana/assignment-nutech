import React from "react";

const Button = ({ text, outline, type, onClick, disabled }) => {
  return (
    <button
      type={type}
      className={`btn border w-full hover:bg-red-primary-hover text-lowercase rounded-md ${
        outline
          ? "border-red-primary bg-white text-red-primary hover:text-white"
          : "bg-red-primary text-white"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
