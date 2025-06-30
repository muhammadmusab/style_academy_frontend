"use client";
import PriceSlider from "@/components/ui/form/multi-range-slider";
import { Input } from "@/components/ui/form/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
interface Props {
  minPriceValue: number;
  maxPriceValue: number;
}

const PriceFilter = ({ minPriceValue, maxPriceValue }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useFilter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  const minPrice = params.get("min-price")
    ? parseInt(params.get("min-price") as string)
    : minPriceValue;
  const maxPrice = params.get("max-price")
    ? parseInt(params.get("max-price") as string)
    : maxPriceValue;

  return (
    <div className="py-[10px]">
      <h5
        className={`pb-[15px] text-[18px] group-hover:text-secondaryhover group-hover:no-underline md:text-[12px]`}
      >
        PRICE
      </h5>
      <div className="flex items-center justify-between w-full mb-[20px]">
        <div className="max-w-[45%]">
          <div className="mb-[5px] md:text-[12px]">FROM</div>
          <Input
            readOnly
            className="border border-primary bg-[#fffbfb] cursor-not-allowed"
            value={minPrice}
            onChange={(e) =>
              router.push(
                pathname + "?" + createQueryString("min-price", e.target.value),
                { scroll: false }
              )
            }
          />
        </div>
        <div className="max-w-[10%]">__</div>
        <div className="max-w-[45%]">
          <div className="mb-[5px] md:text-[12px]">TO</div>
          <Input
            readOnly
            className="border border-primary bg-[#fffbfb] cursor-not-allowed"
            value={maxPrice}
            onChange={(e) =>
              router.push(
                pathname + "?" + createQueryString("min-price", e.target.value),
                { scroll: false }
              )
            }
          />
        </div>
      </div>
      <PriceSlider
        defaultValue={[minPriceValue, maxPriceValue]}
        value={[minPrice as number, maxPrice as number]}
        min={0}
        max={1000}
        minStepsBetweenThumbs={1}
        onValueChange={(value) => {
          router.push(
            pathname + "?" + createQueryString("min-price", value[0].toString())
          );
          router.push(
            pathname +
              "?" +
              createQueryString("max-price", value[1].toString()),
            { scroll: false }
          );
        }}
      />
    </div>
  );
};

export default PriceFilter;
