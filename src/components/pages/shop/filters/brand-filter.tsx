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
import { Checkbox } from "@/components/ui/form/checkbox";
import { v4 as uuidv4 } from "uuid";
interface Props {
  brandsArray: {
    name: string;
    value: string;
    selected: boolean;
    label: string;
    items: number;
  }[];
  titleClass: string;
}
const BrandFilter = ({ brandsArray, titleClass }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useFilter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  let brands = [...brandsArray];
  let selectedBrands = [] as any;

  params
    .getAll("brand")
    .forEach(
      (item) => (selectedBrands = selectedBrands.concat(item.split(",")))
    );

  if (selectedBrands.length) {
    brands = brands.filter((item: any) => {
      if (selectedBrands.includes(item.value)) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      return item;
    });
  }

  const toggleBrand = (brand: {
    name: string;
    value: string;
    label: string;
    selected: boolean;
  }) => {
    let selectedToggle = !brand.selected;

    let filteredBrandArray = brands.filter((item) => {
      if (item.value == brand.value) {
        item.selected = selectedToggle;
      }
      return item;
    });

    brands = [...filteredBrandArray];

    router.push(pathname + "?" + createQueryString("brand", brand.value), {
      scroll: false,
    });
  };
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="brand" className="border-0 group">
        <AccordionTrigger className={titleClass}>BRAND</AccordionTrigger>

        {brands.length && (
          <AccordionContent>
            <div className="ml-[3px]">
              <div className="flex flex-col">
                {brands.map((brand) => (
                  <div key={uuidv4()} className="my-[5px]">
                    <div className="flex items-center">
                      <Checkbox
                        id={brand.value}
                        className={`transition-all hover:scale-[1.05] hover:bg-gray-200 `}
                        onCheckedChange={() => toggleBrand(brand)}
                        checked={brand.selected}
                      />

                      <Label
                        htmlFor={brand.value}
                        className={`text-sm ${
                          !brand.selected
                            ? "text-gray-500"
                            : "text-secondaryhover"
                        } pl-[10px] md:text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                      >
                        {brand.label}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default BrandFilter;
