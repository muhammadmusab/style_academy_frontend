"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ConfirmOrderButton from "./confirm-order";
const OrderSummary = () => {
  const pathName = usePathname();
  const currentPath = pathName.split("/")[2];
  const subtotal = 28.8;
  const shipping = null;
  const taxes = 0;
  const total = 28.8;
  const button = {
    text: "",
    path: "",
  };
  if (currentPath == "cart") {
    button.text = "Proceed To Shipping";
    button.path = "/checkout/shipping";
  } else if (currentPath == "shipping") {
    button.text = "Proceed To Payment";
    button.path = "/checkout/payment";
  } else if (currentPath === "payment") {
    button.text = "";
    button.path = "";
  }
  return (
    <div className="shadow-2xl p-[20px] md:p-[15px] bg-white h-[max-content] ml-[20px] w-[300px] sm:w-full sm:mb-[20px] sm:shadow-none sm:ml-0 sm:p-0">
      <div>
        <h4 className="font-bold mb-[20px] text-center">Order Summary</h4>
        <div className="flex items-center justify-between my-[10px]">
          <p>Sub Total</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between my-[10px]">
          <p>Shipping</p>
          <p>{shipping ? shipping : "-"}</p>
        </div>
        <div className="flex items-center justify-between my-[10px]">
          <p>Taxes</p>
          <p>${taxes.toFixed(2)}</p>
        </div>
        <hr />
        <div className="flex items-center justify-between my-[10px] text-[25px] sm:text-[18px]">
          <h4>Total</h4>
          <h4>${total.toFixed(2)}</h4>
        </div>
      </div>
      {button.path && button.text ? (
        <Link
          href={button.path}
          className="block transition-all bg-primary font-roboto font-bold text-white py-4 text-center md:px-[30px] hover:bg-primary-foreground mt-[20px] w-full"
        >
          {button.text}
        </Link>
      ) : (
        <ConfirmOrderButton paymentMode='stripe'/>
      )}
    </div>
  );
};

export default OrderSummary;
