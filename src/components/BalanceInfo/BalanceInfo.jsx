import React, { useEffect } from "react";
import bgsaldo from "../../assets/images/Background Saldo.png";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux/features/balance/action";
import { currencyFormatter } from "../../helper/currencyFormatter";

const BalanceInfo = () => {
  const { balance } = useSelector((state) => state.balance);
  const { paymentData } = useSelector((state) => state.payment);
  const { topupData } = useSelector((state) => state.topup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBalance());
  }, [topupData, paymentData]);

  const [isVisible, setIsVisible] = useState(false);
  const handleClickVisible = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div className="relative text-white">
      <img src={bgsaldo} alt="Background Saldo.png" />
      <div className="absolute top-0 left-4 right-0 bottom-0 flex items-center">
        <div className="flex flex-col justify-between h-full py-6">
          <div>Saldo anda</div>
          <div className="text-3xl font-bold flex items-center">
            {isVisible ? (
              <div>{currencyFormatter(balance?.balance)}</div>
            ) : (
              <div className="flex">
                <div>Rp</div>
                {Array.from({ length: 7 }).map((_, index) => (
                  <Icon
                    key={index}
                    icon="icon-park-outline:dot"
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleClickVisible}>Lihat Saldo</button>
            {isVisible ? (
              <Icon icon="ph:eye-light" />
            ) : (
              <Icon icon="mdi:hide-outline" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceInfo;
