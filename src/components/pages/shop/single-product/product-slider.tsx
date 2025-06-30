"use client";
import {
  Splide,
  SplideSlide,
  Options,
  SplideTrack,
  //@ts-expect-error
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { useRef, useState } from "react";
import CoreLightBox from "@/components/common/light-box";

interface Props {
  productImages?: {
    url: string;
    cover: boolean;
    width?: number;
    height?: number;
  }[];
}
const ProductVerticalSlider = ({ productImages }: Props) => {
  const mainRef = useRef<any>();
  const [currentSlide, setcurrentSlide] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const images: any = productImages?.map((img) => {
    return {
      src: img.url,
      width: img.width ?? 500,
      height: img.height ?? 500,
    };
  });
  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: true,
  };

  const handleThumbs = (id: number) => {
    setcurrentSlide(id);
    if (mainRef.current) {
      mainRef.current.go(id);
      setOpen(true);
    }
  };
  return (
    <div className="flex flex-col">
      <Splide
        className="relative group"
        options={mainOptions}
        hasTrack={false}
        aria-label="main-images"
        ref={mainRef}
        onMove={(splide: any, index: number) => setcurrentSlide(index)}
      >
        <SplideTrack>
          {productImages &&
            productImages.map((slide, i: number) => (
              <SplideSlide key={"h-s-m" + i} className="w-[100%] h-[100%]">
                <Image
                  src={slide.url}
                  alt="slider-image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-[100%] h-[100%] `}
                />
              </SplideSlide>
            ))}
        </SplideTrack>
        <div className="splide__arrows xs:hidden">
          <button className="splide__arrow splide__arrow--prev bg-primary hover:bg-black w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[50%] left-[30px] opacity-0 group-hover:left-[40px] group-hover:opacity-100 transition-all sm:left-[0px] sm:group-hover:left-[20px]">
            <AiOutlineArrowLeft className="text-white" />
          </button>
          <button className="splide__arrow splide__arrow--next bg-primary hover:bg-black w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[50%] right-[30px] opacity-0 group-hover:right-[40px] group-hover:opacity-100 transition-all sm:right-[0px] sm:group-hover:right-[20px]">
            <AiOutlineArrowRight className="text-white" />
          </button>
        </div>
      </Splide>
      <ul className="flex items-center">
        {productImages &&
          productImages.map((slide, i: number) => (
            <button
              key={"horizontal" + i}
              className={`my-[10px] mx-2`}
              onClick={() => handleThumbs(i)}
            >
              <Image
                src={slide.url}
                alt="slider-image"
                width={0}
                height={0}
                sizes="100vw"
                className={`w-[100%] rounded-[8px]`}
              />
            </button>
          ))}
      </ul>
      <CoreLightBox
        images={images}
        index={currentSlide}
        open={open}
        setOpen={(condition: boolean) => setOpen(condition)}
      />
    </div>
  );
};

export default ProductVerticalSlider;
