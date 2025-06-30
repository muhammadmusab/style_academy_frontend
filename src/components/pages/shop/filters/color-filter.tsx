"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
import { Label } from "@/components/ui/form/label";
import { CheckboxColor } from "@/components/ui/checkbox-color";
import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
interface Props {
  colorsArray: {
    name: string;
    value: string;
    selected: boolean;
    className: string;
    extraClass: string;
  }[];
  titleClass: string;
}
const CategoryFilter = ({ colorsArray, titleClass }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const { createQueryString } = useFilter();

  let colors = [...colorsArray] as any;
  let selectedColors = [] as any;

  params.getAll("color").forEach((item) => {
    selectedColors = selectedColors.concat(item.split(","));
  });

  if (selectedColors.length) {
    colors = colors.filter((item: any) => {
      if (selectedColors.includes(item.value)) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
  }

  const toggleColor = (color: {
    name: string;
    value: string;
    className: string;
    extraClass: string;
    selected: boolean;
  }) => {
    let selectedToggle = !color.selected;

    let filteredColorArray = colors.filter((item: any) => {
      if (item.value == color.value) {
        item.selected = selectedToggle;
      }
      return item;
    });

    colors = [...filteredColorArray];

    router.push(pathname + "?" + createQueryString("color", color.value), {
      scroll: false,
    });
  };

  return (
    <Fragment>
      <h2 className={titleClass}>COLOR</h2>

      {colors.length && (
        <div className="ml-[3px]">
          <div className=" flex items-center flex-wrap ">
            {colors.map((color: any) => (
              <div key={uuidv4()} className="basis-[50%] max-w-[50%] my-[5px]">
                <div className="flex items-center">
                  <CheckboxColor
                    id={color.value}
                    checked={color.selected}
                    className={`${color.className} transition-all hover:scale-[1.05] hover:bg-gray-200`}
                    onCheckedChange={() => toggleColor(color)}
                  />

                  <Label
                    htmlFor={color.value}
                    className="text-sm text-gray-500 pl-[10px] md:text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {color.name}
                  </Label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CategoryFilter;
