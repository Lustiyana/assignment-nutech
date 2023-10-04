import React from "react";
import { Icon } from "@iconify/react";

const FormInput = ({ label, type, placeholder, icon, value, readOnly }) => {
  return (
    <div>
      {label && (
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
      )}

      <div className="relative w-full">
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full rounded-md pl-10"
          value={value}
          readOnly={readOnly}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Icon icon={icon} color="grey" />
        </div>
      </div>
    </div>
  );
};

export default FormInput;
