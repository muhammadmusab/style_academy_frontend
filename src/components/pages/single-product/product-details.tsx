import React from "react";

interface Props {
  details: { title: string; value: string }[];
}
const ProductDetails = ({ details }: Props) => {
  return (
    <div className="pt-5">
      <h1 className="text-secondaryhover text-[20px] font-bold  mb-[10px]">
        Product Description
      </h1>
      {details &&
        details.map((item) => (
          <div key={item.title} className="flex items-center gap-3 my-4">
            <h5 className="font-bold">{item.title}:</h5>
            <p className="">{item.value}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductDetails;
