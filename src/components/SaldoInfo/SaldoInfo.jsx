import React from "react";
import bgsaldo from "../../assets/images/Background Saldo.png";
import { Icon } from "@iconify/react";

const SaldoInfo = () => {
  return (
    <div className="relative text-white">
      <img src={bgsaldo} alt="Background Saldo.png" />
      <div className="absolute top-0 left-4 right-0 bottom-0 flex items-center">
        <div className="flex flex-col justify-between h-full py-6">
          <div>Saldo anda</div>
          <div className="text-3xl font-bold">Rp0</div>
          <div className="flex items-center gap-2">
            <button>Lihat Saldo</button>
            <Icon icon="ph:eye-light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaldoInfo;
