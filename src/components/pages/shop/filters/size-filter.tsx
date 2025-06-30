"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toggle } from "@/components/ui/toggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
import { v4 as uuidv4 } from "uuid";
interface Props {
  sizeArray: {
    name: string;
    label: string;
    value: string;
    items: number;
    selected: boolean;
  }[];
  titleClass: string;
}
const SizeFilter = ({ sizeArray, titleClass }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const { createQueryString } = useFilter();

  let sizes = [...sizeArray];
  let selectedSizes = [] as any;

  params.getAll("size").forEach((item) => {
    selectedSizes = selectedSizes.concat(item.split(","));
  });

  if (selectedSizes.length) {
    sizes = sizes.filter((item: any) => {
      if (selectedSizes.includes(item.label)) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
  }

  const toggleSize = (size: {
    name: string;
    value: string;
    label: string;
    items: number;
    selected: boolean;
  }) => {
    let selectedToggle = !size.selected;

    let filteredSizeArray = sizes.filter((item) => {
      if (item.value == size.value) {
        item.selected = selectedToggle;
      }
      return item;
    });

    sizes = [...filteredSizeArray];

    router.push(pathname + "?" + createQueryString("size", size.label), {
      scroll: false,
    });
  };
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="size" className="border-0 group">
        <AccordionTrigger className={titleClass}>SIZE</AccordionTrigger>

        {sizes.length && (
          <AccordionContent>
            <div className="flex flex-wrap">
              {sizes.map((size) => (
                <Toggle
                  key={uuidv4()}
                  value={size.value}
                  onClick={() => toggleSize(size)}
                  variant="outline"
                  className="basis-[50px] md:text-[12px] border-primary max-w-[50px] py-[10px] px-[15px] mr-[10px] data-[state=on]:bg-primary data-[state=on]:text-white"
                  data-state={size.selected ? "on" : "off"}
                >
                  {size.name}
                </Toggle>
              ))}
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default SizeFilter;
