"use client";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import useFilter from "@/hooks/useFilter";
import { colorVariants, ColorVariantType } from "@/constants/colors";
import { v4 as uuidv4 } from "uuid";

const AppliedColorFilter = () => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  let selectedColors = [] as any;
  let allColors = [] as string[];
  let tempColors: ColorVariantType[] = [];

  // getting all colors from the url
  params.getAll("color").forEach((item) => {
    allColors = allColors.concat(item.split(","));
  });

  if (allColors.length) {
    tempColors = colorVariants.filter((item) => allColors.includes(item.value));
    selectedColors = [...tempColors];
  }

  const removeColorHandler = (val: string) => {
    let tempColors = selectedColors?.filter(
      (item: ColorVariantType) => item.value !== val
    ) as any[];
    selectedColors = [...tempColors];
    router.push(pathname + "?" + createQueryString("color", val), {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center flex-wrap">
      {selectedColors &&
        selectedColors.map((color: ColorVariantType) => (
          <button
            key={uuidv4()}
            className="flex hover:text-secondaryhover items-center border border-secondary rounded-[2px] bg-white mr-[4px] mt-[15px]  p-[10px] font-roboto text-[12px]  min-h-[36px] min-w-[36px]"
            onClick={() => removeColorHandler(color.value)}
          >
            <AiOutlineClose className="h-[12px] w-[12px] " />
            <div className="flex items-center ml-[7px]">
              <span>{color.category}:</span>
              <span className="ml-[1px] mr-[5px]">{color.name}</span>
              <div
                style={{ backgroundColor: color.color }}
                className={`w-[15px] h-[15px]`}
              ></div>
            </div>
          </button>
        ))}
    </div>
  );
};

export default AppliedColorFilter;
