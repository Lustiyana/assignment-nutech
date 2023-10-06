import React from "react";
import { Icon } from "@iconify/react";

const FormInput = ({
  label,
  type,
  placeholder,
  icon,
  value,
  readOnly,
  onChange,
  errorMessage,
}) => {
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
          className={`input input-bordered w-full rounded-md pl-10 ${
            errorMessage && "border-red-primary"
          }`}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
        />

        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <Icon icon={icon} color="grey" />
        </div>
      </div>
      {errorMessage && (
        <div className="label flex justify-end">
          <span className="label-text-alt text-red-primary">
            {errorMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default FormInput;
