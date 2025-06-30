import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import { cartItems } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";
const ViewProducts = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white p-[12px]">
        <h3 className="font-semibold text-[20px] mt-[16px]">
          Ordered Products
        </h3>
        <div className="overflow-y-auto h-[500px] px-[10px] mt-[20px]">
          {cartItems.map((item: any, i: number) => (
            <Link
              href={`/shop/product/${item.title}?id=${item.uuid}`}
              key={item.uuid}
              className="flex  mt-[30px]"
            >
              {/* image */}
              <div className="basis-[80px] max-w-[80px]">
                <Image
                  src={item.image}
                  width={80}
                  height={80}
                  alt="product-item"
                />
              </div>

              <div className="ml-[30px] basis-[70%] max-w-[70%]">
                <h3 className="text-[#31333e] hover:text-primary font-bold text-[12px] font-roboto">
                  {item.title}
                </h3>
                <p className="text-[#31333e] text-[14px] font-bold mb-0">
                  Rs.{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[30px] h-[30px] text-[14px] flex items-center justify-center text-center rounded-full border border-gray-400">
                  {item.quantity}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProducts;
