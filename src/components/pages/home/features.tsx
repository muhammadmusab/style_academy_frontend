import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CgTrack } from "react-icons/cg";
import { MdTimer } from "react-icons/md";
const Features = () => {
  const features = [
    {
      icon: <TbTruckDelivery className="text-[50px]" />,
      heading: "Shipping Charges",
      text: "Flat Charges: PKR 200 on all orders",
    },
    {
      icon: <MdTimer className="text-[50px]" />,
      heading: "Support 24/7",
      text: "Contact us 24 hours a day, 7days a week",
    },
    {
      icon: <CgTrack className="text-[50px]" />,
      heading: "Track Order",
      text: "Track your order for quick updates",
    },
  ];
  return (
    <div className="section-space">
      <div className="flex justify-center items-center py-[50px] px-[20px] w-full bg-[#eaeaea]">
        {features.map((item) => (
          <div className="flex ml-[20px]" key={item.heading}>
            {item.icon}
            <div className="ml-[3px]">
              <h2 className="font-bold">{item.heading}</h2>
              <p className="font-light">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
