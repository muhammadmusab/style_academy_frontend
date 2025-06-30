// import Image from 'next/image';
import React from "react";
import { Badge } from "@/components/ui/badge";
import AddToCartButton from "../product/add-to-cart-button";
import { type ProductType } from "@/interface/types";
import AddToFavourites from "../product/add-to-favorites";

interface Props {
  product: ProductType;
}
const Product = ({ product }: Props) => {
  let image =
    product.images && product.images.length
      ? product.images.find((item: any) => item.cover == true)
      : null;
  if (!image && product.images) {
    image = product.images[0];
  }

  return (
    <div className=" basis-[30%] max-w-[30%]  hover:cursor-pointer transition-all shadow-lg overflow-hidden group relative">
      <div
        style={{ backgroundImage: `url(${image?.url})` }}
        className={`relative  product-overlay h-[600px] bg-no-repeat bg-cover w-full `}
      >
        <Badge
          variant="default"
          className="absolute text-[16px] top-[20px] right-0 rounded-[15px] rounded-tr-none rounded-br-none text-white"
        >
          Rs.{product.price}
        </Badge>
        <div className=" flex justify-center items-center gap-5 absolute bottom-[20px] left-[0%] w-full">
          <AddToCartButton />
          <AddToFavourites />
        </div>
      </div>

      <div className="py-[15px] bg-primary text-white text-center">
        {product.title}
      </div>
    </div>
  );
};

export default Product;
