import React from "react";
const res = {
  status: 0,
  message: "Get History Berhasil",
  data: {
    offset: 0,
    limit: 3,
    records: [
      {
        invoice_number: "INV17082023-001",
        transaction_type: "TOPUP",
        description: "Top Up balance",
        total_amount: 100000,
        created_on: "2023-08-17T10:10:10.000Z",
      },
      {
        invoice_number: "INV17082023-002",
        transaction_type: "PAYMENT",
        description: "PLN Pascabayar",
        total_amount: 10000,
        created_on: "2023-08-17T11:10:10.000Z",
      },
      {
        invoice_number: "INV17082023-003",
        transaction_type: "PAYMENT",
        description: "Pulsa Indosat",
        total_amount: 40000,
        created_on: "2023-08-17T12:10:10.000Z",
      },
    ],
  },
};

const TransactionList = () => {
  return (
    <div>
      <h5 className="font-semibold mb-6">Semua Transaksi</h5>
      <div className="flex flex-col gap-4 mb-4">
        {res.data.records.map((item, index) => (
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
                <div>{item.total_amount}</div>
              </div>
              <div className="text-xs">{item.created_on}</div>
            </div>
            <div className="text-xs">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-red-primary">Show more</div>
    </div>
  );
};

export default TransactionList;
