import { ProductType } from "@/interface/types";
import React from "react";

interface Props {
  product: ProductType;
}

const ProductDescription = ({ product }: Props) => {
  return (
    <div>
      <h1 className="font-poppins text-[40px]">{product.title}</h1>
      <div className="flex justify-between ">
        <div>
          <p className="text-[#898989]">As low as</p>
          <h5 className="font-bold">Rs {product.price}</h5>
        </div>
        <div>
          <p className={product.quantity ? "text-[#4DBC43]" : "text-primary"}>
            {product.quantity ? "In quantity" : "Out of quantity"}
          </p>
          {product.sku && (
            <p className="text-[#898989]">
              SKU#: <span>{product.sku}</span>
            </p>
          )}
        </div>
      </div>
      <p className="text-[#898989] mt-[50px] mb-4">{product.overview}</p>
    </div>
  );
};

export default ProductDescription;
