import React from "react";

const Button = ({ text, outline }) => {
  return (
    <button
      type="submit"
      className={`btn border w-full hover:bg-red-primary-hover text-lowercase rounded-md ${
        outline
          ? "border-red-primary bg-white text-red-primary hover:text-white"
          : "bg-red-primary text-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
