'use client'
import { Badge } from "@/components/ui/badge";
import { FaBasketShopping } from "react-icons/fa6";
const AddToCartButton = () => {
  return (
    <button className="relative">
      <Badge
        variant="default"
        className=" text-[16px] peer rounded-full w-[50px] h-[50px] flex items-center justify-center text-white"
      >
        <FaBasketShopping />
      </Badge>
      <span className="absolute p-[5px] z-10 bg-black text-white opacity-0 peer-hover:opacity-100 top-[-20px] left-0 w-[150px] text-[14px] rounded-[10px]">
        Add to cart
      </span>
    </button>
  );
};

export default AddToCartButton;
