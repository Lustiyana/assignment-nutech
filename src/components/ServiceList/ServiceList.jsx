import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetServices } from "../../redux/features/services/action";

const ServiceList = ({ data }) => {
  const { services } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetServices());
  }, []);
  return (
    <div className="flex justify-between">
      {services?.data?.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <img src={item.service_icon} alt={item.service_icon} />
          <p className="text-center w-[96px] text-sm">{item.service_name}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
