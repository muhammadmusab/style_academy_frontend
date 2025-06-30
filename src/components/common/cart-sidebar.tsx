"use client";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {  useState } from "react";
import { FiDelete } from "react-icons/fi";
interface Props {
  icon: any;
  headerImage: string;
  headerText: string;
  items: {
    id: string;
    image: string;
    price: number;
    quantity?: number;
    title: string;
  }[];
  type: "cart" | "wishlist";
  className?: string;
}
const CartSidebar = ({
  headerImage,
  headerText,
  icon,
  items,
  type = "cart",
  className,
}: Props) => {
  const [subtotal, setSubtotal] = useState(200);
  const onDelete = (item: any) => {
    console.log("on delete", item);
  };
  return (
    <Sheet>
      <SheetTrigger className={className}>{icon}</SheetTrigger>
      <SheetContent
        className="w-[500px] xxs:[300px] xxs:max-w-[320px] bg-white transition-all "
        side={"right"}
      >
        <SheetHeader className="relative">
          <h3 className="font-bold text-primary font-roboto text-left text-[24px] ml-20">
            {headerText}
          </h3>
          <Image
            className="absolute left-0 top-[-20px]"
            width={60}
            height={60}
            src={headerImage}
            alt="right-sidebar-header-image"
          />
        </SheetHeader>
        {items.length ? (
          <div className="mt-[50px] flex flex-col justify-between h-[90%]">
            <div>
              {/* items */}
              {items.map((item, i) => (
                <div key={uuidv4()} className="flex  mt-[30px]">
                  {/* image */}
                  <div className="basis-[80px] max-w-[80px]">
                    <Image
                      src={item.image}
                      width={80}
                      height={80}
                      alt="product-item"
                    />
                  </div>

                  <div className="flex justify-around flex-col ml-[30px] basis-[70%] max-w-[70%]">
                    <h3 className="text-[#31333e] hover:text-primary font-bold text-[12px] font-roboto">
                      {item.title}
                    </h3>
                    {type === "wishlist" ? (
                      <button className="text-primary font-roboto font-bold text-[14px] block mr-auto">
                        Add to cart
                      </button>
                    ) : (
                      <div className="flex items-center mt-5">
                        <button className="text-primary">-</button>
                        <div className="w-[30px] h-[30px] mx-5 text-[14px] flex items-center justify-center text-center rounded-full border border-gray-400">
                          {item.quantity}
                        </div>

                        <button className="text-primary">+</button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-around">
                    <button onClick={() => onDelete(item)}>
                      <FiDelete className="text-primary" />
                    </button>
                    <p className="text-[#31333e]  text-[14px] font-bold mb-0">
                      Rs.{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {type === "cart" && (
                <div className="mt-50">
                  <div className="">
                    <hr />
                    <div className="flex mt-20">
                      {/* <div className="basis-[80px] max-w-[80px]"></div> */}
                      <p className="ml-[30px] basis-[70%] max-w-[70%] font-bold">
                        Sub Total
                      </p>
                      <div className="text-[20px] font-bold">
                        Rs.{subtotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-20">
                {/* <button className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3">
                Cart list
              </button> */}
                <button className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <h2 className="text-center w-full  text-primary text-[25px]">No products in the cart.</h2>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
