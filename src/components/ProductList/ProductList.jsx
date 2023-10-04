import React from "react";
import { products } from "../../data/products";

const ProductList = () => {
  return (
    <div className="flex justify-between">
      {products.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-4">
          <img src={item.icon} alt={item.icon} />
          <p className="text-center max-w-[72px]">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
