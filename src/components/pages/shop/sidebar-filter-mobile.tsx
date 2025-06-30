"use client";
import Image from "next/image";
import { TbFilter, TbFilterX } from "react-icons/tb";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import FilterSidebar from "@/components/pages/shop/filters/filters-sidebar";
import { useFilterStore } from "@/store/filter";
interface Props {
  headerText: string;
  className?: string;
  isOpenFilter: boolean;
  filterContainerClass?:string;
}
const SidebarFilterMobile = ({
  headerText,
  className,
  isOpenFilter,
  filterContainerClass
}: Props) => {
  const toggleFilterMobile = useFilterStore((state) => state.toggleFilterMobile);


  return (
    <Sheet onOpenChange={(value)=>toggleFilterMobile(value)} open={isOpenFilter}>
      <SheetTrigger className={`${className} flex`}  >
        {" "}
        {isOpenFilter ? (
          <TbFilterX className="my-0 w-[25px] h-[25px] group-hover:text-secondaryhover" />
        ) : (
          <TbFilter className="my-0 w-[25px] h-[25px] group-hover:text-secondaryhover" />
        )}
        <p className=" ml-[2px] group-hover:text-secondaryhover text-primary font-medium font-roboto">
          {isOpenFilter ? "Close filters" : "Open filters"}
        </p>
      </SheetTrigger>
      <SheetContent
        className="w-[500px] xs:w-[360px] xxs:w-[300px] xxs:max-w-[320px] bg-white transition-all  overflow-y-auto overflow-x-hidden"
        side={"left"}
      >
        <SheetHeader className="relative">
          <h3 className="font-bold text-primary font-roboto text-left text-[20px]">
            {headerText}
          </h3>
        </SheetHeader>
        <div className="mt-[50px]">
        <FilterSidebar className={filterContainerClass} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarFilterMobile;
