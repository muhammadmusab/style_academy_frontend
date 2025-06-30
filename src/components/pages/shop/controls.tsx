"use client";
import { TbFilter, TbFilterX } from "react-icons/tb";
import { IoMdListBox, IoMdGrid } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/select";
import { useFilterStore } from "@/store/filter";
import { useStore } from "@/hooks/useStore";
import useFilter from "@/hooks/useFilter";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import SidebarFilterMobile from "@/components/pages/shop/sidebar-filter-mobile";
import { Fragment } from "react";
import CurrentCategory from "./filters/current-category";

const Controls = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  const isOpenFilterDesktop = useStore(
    useFilterStore,
    (state) => state.isOpenFilterDesktop
  );
  const isOpenFilterMobile = useStore(
    useFilterStore,
    (state) => state.isOpenFilterMobile
  );
  const view = useStore(useFilterStore, (state) => state.view);
  const setView = useFilterStore((state) => state.setView);
  const toggleFilterDesktop = useFilterStore(
    (state) => state.toggleFilterDesktop
  );
  const toggleFilterMobile = useFilterStore(
    (state) => state.toggleFilterMobile
  );

  const filterStateHandler = () => {
    toggleFilterDesktop();
  };
  const viewHandler = () => setView();
  const sortHandler = (value: any) => {
    router.push(pathname + "?" + createQueryString("sortby", value), {
      scroll: false,
    });
  };
  const resetFiltersHandler = () => {
    router.push(pathname);
  };

  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <button className="flex group md:hidden" onClick={filterStateHandler}>
          {isOpenFilterDesktop ? (
            <TbFilterX className="my-0 w-[25px] h-[25px] group-hover:text-primary" />
          ) : (
            <TbFilter className="my-0 w-[25px] h-[25px] group-hover:text-primary" />
          )}
          <p className=" ml-[2px] group-hover:text-primary text-primary font-medium font-roboto">
            {isOpenFilterDesktop ? "Close filters" : "Open filters"}
          </p>
        </button>

        <div className="md:block hidden">
          <SidebarFilterMobile
            headerText="Filters"
            isOpenFilter={isOpenFilterMobile as boolean}
            filterContainerClass={
              isOpenFilterMobile
                ? "w-[400px] md:w-full select-auto pointer-events-auto"
                : "w-0 opacity-0 select-none pointer-events-none"
            }
          />
        </div>

        <button
          className="block  py-[5px] mb-0 font-medium font-roboto transition-all px-[10px] hover:bg-primary-foreground  bg-primary text-white"
          onClick={resetFiltersHandler}
        >
          Reset filters
        </button>
      </div>
      <div className="flex justify-between items-center mt-[10px] xs:mt-[30px]">
        {/* sortby */}
        <Select onValueChange={(value) => sortHandler(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort-by" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem
              className="hover:text-primary hover:cursor-pointer text-primary font-roboto"
              value="featured"
            >
              Featured
            </SelectItem>
            <SelectItem
              className="hover:text-primary hover:cursor-pointer text-primary font-roboto"
              value="best-selling"
            >
              Best Selling
            </SelectItem>
            <SelectItem
              className="hover:text-primary hover:cursor-pointer text-primary font-roboto"
              value="high-price"
            >
              High Price
            </SelectItem>
            <SelectItem
              className="hover:text-primary hover:cursor-pointer text-primary font-roboto"
              value="low-price"
            >
              Low Price
            </SelectItem>
          </SelectContent>
        </Select>
        <CurrentCategory totalProducts={200} />
      </div>
      
    </Fragment>
  );
};

export default Controls;
