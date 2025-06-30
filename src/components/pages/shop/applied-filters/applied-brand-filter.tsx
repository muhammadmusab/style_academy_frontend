"use client";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "@/hooks/useFilter";
import { useFilterStore } from "@/store/filter";
import { useStore } from "@/hooks/useStore";
import { v4 as uuidv4 } from "uuid";

const AppliedBrandFilter = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  let allBrands = [] as string[];

  // getting brands which we set in the filters-sidebar in the store
  const brands = useStore(useFilterStore, (state) => state.brands);

  let selectedBrands = [] as any;

  let tempBrands = [];

  params.getAll("brand").forEach((item) => {
    allBrands = allBrands.concat(item.split(","));
  });

  if (allBrands.length && brands && brands.length) {
    tempBrands = brands.filter((item) => allBrands.includes(item.value));
    selectedBrands = [...tempBrands];
  }

  const removeBrandHandler = (val: string) => {
    let tempBrands = selectedBrands?.filter(
      (item: any) => item.value !== val
    ) as any[];

    selectedBrands = [...tempBrands];
    router.push(pathname + "?" + createQueryString("brand", val), {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center flex-wrap">
      {selectedBrands &&
        brands &&
        selectedBrands.map((brand: any) => (
          <button
          key={uuidv4()}
            className="flex hover:text-secondaryhover items-center border border-secondary rounded-[2px] bg-white mr-[4px] mt-[15px]  p-[10px] font-roboto text-[12px]  min-h-[36px] min-w-[36px]"
            onClick={() => removeBrandHandler(brand.value)}
          >
            <AiOutlineClose className="h-[12px] w-[12px] " />
            <div className="flex items-center ml-[7px]">
              <span className="">Brand : </span>
              <span className="mx-[1px]">{brand.label}</span>
            </div>
          </button>
        ))}
    </div>
  );
};

export default AppliedBrandFilter;
