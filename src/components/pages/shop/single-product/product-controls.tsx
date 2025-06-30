"use client";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Fragment } from "react";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
interface Props {
  variants?: { type: string; values: { value: string; price: number }[] }[];
  properties?: { name: string; value: string }[];
  productType?: {
    value: string;
    path: string;
  };
  vendor?: {
    value: string;
    path: string;
  } | null;
}
const ProductControls = ({
  productType,
  properties,
  variants,
  vendor,
}: Props) => {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const { createQueryString } = useFilter();
  const variantTypes = variants ? variants.map((variant) => variant.type) : [];
  let selectedVariants: any = [];

  variantTypes.forEach((variant) => {
    params.getAll(variant).forEach((item) => {
      selectedVariants = selectedVariants.concat(item.split(","));
    });
  });
  const toggleVariant = (variant: { type: string; value: string }) => {
    router.push(
      pathname + "?" + createQueryString(variant.type, variant.value),
      {
        scroll: false,
      }
    );
  };
  return (
    <Fragment>
      {/* Vendor */}
      {vendor && (
        <div className="text-[14px] text-primary">
          <h2 className=" font-bold ">
            Vendor:{" "}
            <Link className=" font-normal underline" href={vendor.path}>
              {vendor.value}
            </Link>
          </h2>
        </div>
      )}

      {/* variants */}
      {variants &&
        variants.map((variant, i) => (
          <div
            key={"variant" + i}
            className="my-[20px] text-[14px] text-primary"
          >
            <h2 className="font-bold">
              {variant.type}:{" "}
              <span className="font-normal">{variant.values[0].value}</span>
            </h2>

            <div className="flex flex-wrap mt-[10px]">
              {variant.values.map((item) => (
                <Toggle
                  key={uuidv4()}
                  value={item.value}
                  onClick={() =>
                    toggleVariant({ type: variant.type, value: item.value })
                  }
                  variant="outline"
                  className=" h-[30px] text-[12px] p-[5px] max-w-[250px] border-secondaryhover bg-white  mr-[10px] data-[state=on]:bg-secondaryhover data-[state=on]:text-white"
                  data-state={
                    variant.values[0].value === item.value ? "on" : "off"
                  }
                >
                  {item.value}
                </Toggle>
              ))}
            </div>
          </div>
        ))}

      <hr className="bg-primary" />
      {/* Add to cart section */}
      <div className="flex xs:flex-col flex-row xs:items-start  items-center my-[15px]">
        <div className="flex items-center xs:justify-center xs:w-full">
          <button className="hover:bg-secondary bg-secondaryhover rounded-full w-[25px] h-[25px] flex justify-center items-center transition-all">
            <AiOutlineMinus className="text-white" />
          </button>
          <span className="px-[15px] font-bold text-primary">1</span>
          <button className="hover:bg-secondary bg-secondaryhover rounded-full w-[25px] h-[25px] flex justify-center items-center transition-all">
            <AiOutlinePlus className="text-white" />
          </button>
        </div>
        <button className="xs:ml-0 w-full ml-[10px] xs:mt-[20px] rouned-[15px] px-[15px] py-[10px] hover:bg-primary transition-all bg-secondaryhover text-white">
          ADD TO CART
        </button>
        <button className="xs:ml-0 w-full ml-[10px] xs:mt-[20px] rouned-[15px] px-[15px] py-[10px] hover:bg-primaryhover transition-all bg-success text-white">
          BUY IT NOW
        </button>
      </div>

      {/* availability at stores */}
      <div className="my-[10px]">
        <p className="text-primaryhover">
          The item is delivered usually within 2-8 working days.
        </p>
      </div>

      {/* add to wishlist */}
      <div className="flex items-center my-[20px]">
        <button className="flex items-center group">
          <AiOutlineHeart className="text-secondaryhover text-[20px]" />
          <span className="pl-[10px] group-hover:text-secondaryhover text-primary">
            Add to wishlist
          </span>
        </button>
        <button className="flex items-center group ml-[30px] ">
          <FiShare className="text-secondaryhover text-[20px]" />
          <span className="pl-[10px] group-hover:text-secondaryhover text-primary">
            Share
          </span>
        </button>
      </div>
      <hr className="bg-primary" />
      {/* social icons */}
      <div className="flex items-center my-[20px]">
        {/* <a href="https://www.twitter.com">
          <RiTwitterXFill />
        </a> */}
        <a className="group" href="https://www.instagram.com">
          <BsInstagram className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
        <a className="ml-[20px] group" href="https://www.youtube.com">
          <BsYoutube className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
        <a className="ml-[20px] group" href="https://www.facebook.com">
          <FiFacebook className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
        <a className="ml-[20px] group" href="https://www.tiktok.com">
          <FaTiktok className="hover:text-primaryhover text-secondaryhover text-[25px]" />
        </a>
      </div>
    </Fragment>
  );
};

export default ProductControls;
