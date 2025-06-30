"use client";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "@/hooks/useFilter";
import { sizeVariants, sizeVariantType } from "@/constants/sizes";
import { v4 as uuidv4 } from "uuid";

const AppliedSizeFilter = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  let selectedSizes = [] as any;
  let allSizes = [] as string[];
  let tempSizes = [];

  // getting all sizes from the url
  params.getAll("size").forEach((item) => {
    allSizes = allSizes.concat(item.split(","));
  });

  if (allSizes.length) {
    tempSizes = sizeVariants.filter((item) => allSizes.includes(item.label));
    selectedSizes = [...tempSizes];
  }

  const removeSizeHandler = (val: string) => {
    let tempSizes = selectedSizes?.filter(
      (item) => item.label !== val
    ) as any[];

    selectedSizes = [...tempSizes];
    router.push(pathname + "?" + createQueryString("size", val), {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center flex-wrap">
      {selectedSizes &&
        selectedSizes.map((size: sizeVariantType) => (
          <button
          key={uuidv4()}
            className="flex hover:text-secondaryhover items-center border border-secondary rounded-[2px] bg-white mr-[4px] mt-[15px]  p-[10px] font-roboto text-[12px]  min-h-[36px] min-w-[36px]"
            onClick={() => removeSizeHandler(size.label)}
          >
            <AiOutlineClose className="h-[12px] w-[12px] " />

            <div className="flex items-center ml-[7px]">
              <span className="">{size.category} : </span>
              <span className="mx-[1px]">{size.label}</span>
            </div>
          </button>
        ))}
    </div>
  );
};

export default AppliedSizeFilter;
