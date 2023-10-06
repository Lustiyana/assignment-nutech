import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../../helper/currencyFormatter";
import { dateFormatter } from "../../helper/dateFormatter";
import { GetHistories } from "../../redux/features/histories/action";

const TransactionList = () => {
  const { histories } = useSelector((state) => state.histories);
  const [valueOffset, setValueOffset] = useState(0);
  const [valueLimit, setValueLimit] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetHistories(valueOffset, valueLimit));
  }, [valueOffset]);

  const handleClick = (e) => {
    e.preventDefault();
    setValueOffset((prev) => prev + 1);
  };

  return (
    <div>
      <h5 className="font-semibold mb-6">Semua Transaksi</h5>
      {histories.length > 0 ? (
        <div>
          <div className="flex flex-col gap-4 mb-4">
            {histories?.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border border-grey-primary rounded-md px-4 py-2"
              >
                <div>
                  <div
                    className={`flex font-semibold text-lg ${
                      item.transaction_type === "TOPUP"
                        ? "text-plus-color"
                        : "text-minus-color"
                    }`}
                  >
                    <span>{item.transaction_type === "TOPUP" ? "+" : "-"}</span>
                    <div>{currencyFormatter(item.total_amount)}</div>
                  </div>
                  <div className="text-xs">
                    {dateFormatter(item.created_on)}
                  </div>
                </div>
                <div className="text-xs">{item.description}</div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleClick}
              className="text-center text-red-primary"
            >
              Show more
            </button>
          </div>
        </div>
      ) : (
        <div className="text-grey-primary text-center">
          Maaf tidak ada transaksi saat ini
        </div>
      )}
    </div>
  );
};

export default TransactionList;
