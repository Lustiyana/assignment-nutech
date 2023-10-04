import React from "react";

const TextHeader = ({ text1, text2 }) => {
  return (
    <div>
      <h3>{text1}</h3>
      <h1 className="text-3xl font-semibold">{text2}</h1>
    </div>
  );
};

export default TextHeader;
