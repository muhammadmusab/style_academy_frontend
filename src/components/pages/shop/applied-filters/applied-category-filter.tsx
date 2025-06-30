"use client";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "@/hooks/useFilter";

const AppliedCategoryFilter = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  let defaultValue = params.get("category");

  const removeCategoryHandler = () => {
    router.push(pathname + "?" + createQueryString("category", null), {
      scroll: false,
    });
  };
  return (
    defaultValue && (
      <button
        className="flex hover:text-secondaryhover items-center border border-secondary rounded-[2px] bg-white mr-[4px] mt-[15px]  p-[10px] font-roboto text-[12px]  min-h-[36px] min-w-[36px]"
        onClick={() => removeCategoryHandler()}
      >
        <AiOutlineClose className="h-[12px] w-[12px] " />
        <div className="flex items-center ml-[7px]">
          <span className="">Category : </span>
          <span className="mx-[1px]">{defaultValue}</span>
        </div>
      </button>
    )
  );
};

export default AppliedCategoryFilter;
