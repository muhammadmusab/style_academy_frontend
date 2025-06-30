"use client";
import { MdShoppingCart, MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
const Steps = () => {
  const pathName = usePathname();
  const router = useRouter();
  const currentPath = pathName.split("/")[2];
  let icon = <MdShoppingCart className="text-[40px] text-primary" />;
  if (currentPath == "shipping") {
    icon = <TbTruckDelivery className="text-[40px] text-primary" />;
  } else if (currentPath == "payment") {
    <MdOutlinePayment className="text-[40px] text-primary" />;
  }

  const steps = [
    {
      name: "cart",
      icon: <MdShoppingCart className="text-primary " />,
      number: 1,
      text: "Cart",
    },
    {
      name: "shipping",
      icon: <TbTruckDelivery className="text-primary " />,
      number: 2,
      text: "Shipping",
    },
    {
      name: "payment",
      icon: <MdOutlinePayment className="text-primary " />,
      number: 3,
      text: "Payment",
    },
  ];

  return (
    <Fragment>
      <div className="bg-primary py-[50px] sm:py-[20px] container-fluid sm:px-[10px] flex justify-center items-center w-full">
        <ol className="flex items-center justify-center sm:flex-col sm:items-start w-full sm:w-auto text-base font-medium text-center sm:text-base">
          {steps.map((item) => (
            <li
              onClick={() => router.push(`/checkout/${item.name}`)}
              key={item.number}
              className="flex items-center  cursor-pointer transition-all  after:w-full after:h-1 after:border-b  after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 sm:mb-[10px] "
            >
              <span
                className={`flex items-center after:content-['/'] sm:after:hidden after:mx-2 hover:text-white ${
                  currentPath == item.name ? "text-white" : "text-[#b5b5b5]"
                } ${item.name === "payment" ? "after:hidden" : ""}`}
              >
                <div className="bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center me-2 text-sm ">
                  {currentPath == item.name ? (
                    item.icon
                  ) : (
                    <span className="text-primary">{item.number}</span>
                  )}
                </div>
                {item.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-[20px] flex justify-center items-center px-[200px] sm:px-0">
        <h3 className="font-bold text-primary font-roboto text-[44px] sm:text-[35px] mr-[10px]">
          {currentPath.toUpperCase()}
        </h3>
        {icon}
      </div>
    </Fragment>
  );
};

export default Steps;
