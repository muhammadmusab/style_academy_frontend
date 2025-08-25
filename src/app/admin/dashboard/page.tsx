import React, { Fragment } from "react";
import MoneyIcon from "@/components/icons/money";
import OrderIcon from "@/components/icons/order";
import CustomerIcon from "@/components/icons/customer";
const page = () => {
  const data = [
    {
      title: "Total Earnings",
      amount: "Rs.859k",
      description: "Rs50k worth New Sales",
      icon: <MoneyIcon />,
    },

    {
      title: "Order",
      amount: "66,894",
      description: "40+ New Order",
      icon: <OrderIcon />,
    },
    {
      title: "Customer",
      amount: "10.500k",
      description: "90+ New Customer",
      icon: <CustomerIcon />,
    },
  ];
  return (
    <Fragment>
      <div className="flex items-center gap-5">
        {data.map((item) => (
          <div
            key={item.title}
            className="mt-2 shadow-md py-[34px] px-[20px] rounded-[16px] w-[345px] h-[170px]"
          >
            <h2 className="font-medium text-[15px]">{item.title}</h2>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[28px] font-medium ">{item.amount}</h2>
              {item.icon}
            </div>

            <p className="text-[15px]">{item.description}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default page;
