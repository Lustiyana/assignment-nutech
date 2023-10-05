import React from "react";
import { useDispatch } from "react-redux";
import { currencyFormatter } from "../../helper/currencyFormatter";
import { OnChangeTopup } from "../../redux/features/topup/action";

const nominal = [10000, 20000, 50000, 100000, 250000, 500000];

const Nominal = () => {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(OnChangeTopup(value));
  };
  return (
    <div className="grid grid-cols-3 h-full gap-x-2 gap-y-4">
      {nominal.map((item, index) => (
        <button
          key={index}
          className="border border-grey-primary px-4 py-2 text-center rounded-md flex items-center"
          onClick={() => handleClick(item)}
        >
          <div className="mx-auto">{currencyFormatter(item)}</div>
        </button>
      ))}
    </div>
  );
};

export default Nominal;
