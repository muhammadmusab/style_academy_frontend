"use client";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "@/hooks/useFilter";

const AppliedPriceFilter = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  let minPrice = params.get("min-price");
  let maxPrice = params.get("max-price");

  const removePriceHandler = () => {
    router.push(pathname + "?" + createQueryString("price", null), {
      scroll: false,
    });
  };
  return (
    minPrice &&
    maxPrice && (
      <button
        className="flex hover:text-secondaryhover items-center border border-secondary rounded-[2px] bg-white mr-[4px] mt-[15px]  p-[10px] font-roboto text-[12px]  min-h-[36px] min-w-[36px]"
        onClick={() => removePriceHandler()}
      >
        <AiOutlineClose className="h-[12px] w-[12px] " />
        <div className="flex items-center ml-[7px]">
          <span className="">Price : </span>
          <span className="mx-[1px]">
            ${parseInt(minPrice).toFixed(2)}-${parseInt(maxPrice).toFixed(2)}
          </span>
        </div>
      </button>
    )
  );
};

export default AppliedPriceFilter;
