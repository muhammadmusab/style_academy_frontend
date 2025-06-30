import React from "react";

const Addresses = () => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="mb-[20px] border border-[#ccc] w-[45%] p-[20px]">
        <h3 className="font-bold">Billing Status</h3>
        <div className="my-[10px] flex items-center">
          Payment Status:
          <p className="bg-success text-white rounded-[5px] px-[5px] py-[2px] w-[max-content] text-[14px] ml-2">
            Success
          </p>
        </div>
        <p className="mb-[5px]">TES CODELAB</p>
        <p className="mb-[5px]">Test street</p>
        <p className="mb-[5px]">KHI 71000</p>
        <p className="mb-[5px]">Pakistan</p>
      </div>
      <div className="mb-[20px] border border-[#ccc] w-[45%] p-[20px]">
        <h3 className="font-bold">Shipping Status</h3>
        <div className="my-[10px] flex items-center">
          Order Status:
          <p className="bg-orange-500 text-white rounded-[5px] px-[5px] py-[2px] w-[max-content] text-[14px] ml-2">
            In Process
          </p>
        </div>
        <p className="mb-[5px]">TES CODELAB</p>
        <p className="mb-[5px]">Test street</p>
        <p className="mb-[5px]">KHI 71000</p>
        <p className="mb-[5px]">Pakistan</p>
      </div>
    </div>
  );
};

export default Addresses;
