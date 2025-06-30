"use client";
import React from "react";
import { Input } from "@/components/ui/form/input";
import { IoFilterSharp } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/modal";
import OrderFilters from "@/components/pages/admin/orders/order-filters";
const controls = () => {
  const onSearch = (e: any) => {
    console.log(e.target);
    // use debounce later
  };
  return (
    <div className="bg-[#f8f9fa] p-[1rem] w-full flex items-center justify-between border border-[#ccc]">
      <Input
        className="bg-white border border-gray-600"
        type="text"
        placeholder="Search Products..."
        onChange={onSearch}
      />
      <Dialog>
        <DialogTrigger className="ml-3 border flex items-center border-black hover:bg-gray-700 text-white cursor-pointer bg-black px-4 py-1">
          <IoFilterSharp className="mr-2" />
          <span>FILTER</span>
        </DialogTrigger>
        <DialogContent className="bg-white">
          {/* header */}
          <DialogHeader className="">
            <DialogTitle className="text-left text-[20px]">
              Filter Orders
            </DialogTitle>
          </DialogHeader>
          <hr />
          <OrderFilters />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default controls;
