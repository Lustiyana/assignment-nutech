import React from "react";

const nominal = [10000, 20000, 50000, 100000, 250000, 500000];

const Nominal = () => {
  return (
    <div className="grid grid-cols-3 h-full gap-x-2 gap-y-4">
      {nominal.map((item, index) => (
        <div
          key={index}
          className="border border-grey-primary px-4 py-2 text-center rounded-md flex items-center"
        >
          <div className="mx-auto">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Nominal;
