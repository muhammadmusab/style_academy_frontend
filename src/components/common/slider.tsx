"use client";

import {
  Splide,
  SplideSlide,
  Options,
  SplideTrack,
  //@ts-ignore
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  options: Options;
  slides: {
    imageSrc: string;
    containerClass: string;
    imageClass: string;
    shopLink: string;
    headingClass: string;
    subheadingClass: string;
    textClass: string;
    buttonClass: string;
    heading: string;
    subheading: string;
    text: string;
  }[];
}

const slider = ({ options, slides }: Props) => {
  return (
    <Splide className="relative group" options={options} aria-label="Hero Header Images" hasTrack={false}>
      <SplideTrack>
        {slides.map((slide) => (
          <SplideSlide key={uuidv4()} className="w-full h-full">
            <div className={`w-full h-[600px] md:h-[640px] xs:h-[580px] ${slide.containerClass}`}>
              <div className="container-fluid h-[100%] flex md:flex-col items-center justify-around md:justify-between xs:justify-end xxs:justify-center">
                <div className="pl-[10%] md:pl-[0%]  md:text-center md:mt-[5%]">
                  <h1 className={`${slide.headingClass} mb-[10px] leading-[0.8]`}>{slide.heading}</h1>
                  <h2 className={`${slide.subheadingClass} mb-[10px] leading-[1]`}>{slide.subheading}</h2>
                  <p className={`${slide.textClass} mb-[10px] italic`}>{slide.text}</p>
                  <Link href={slide.shopLink}>
                    <button className="transition-all bg-[#333333] font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-black">
                      Shop
                    </button>
                  </Link>
                </div>
                <div className="self-end md:self-center  md:mt-[10px]">
                  <Image
                    src={slide.imageSrc}
                    alt="slider-image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`${slide.imageClass} h-[100%]`}
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows xs:hidden" key={"categories-arrows"}>
          <button className="splide__arrow splide__arrow--prev bg-primary hover:bg-black w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[50%] left-[30px] opacity-0 group-hover:left-[40px] group-hover:opacity-100 transition-all sm:left-[0px] sm:group-hover:left-[20px]">
            <AiOutlineArrowLeft className="text-white" />
          </button>
          <button className="splide__arrow splide__arrow--next bg-primary hover:bg-black w-[50px] h-[50px] rounded-full flex items-center justify-center absolute top-[50%] right-[30px] opacity-0 group-hover:right-[40px] group-hover:opacity-100 transition-all sm:right-[0px] sm:group-hover:right-[20px]">
            <AiOutlineArrowRight className="text-white" />
          </button>
        </div>
    </Splide>
  );
};

export default slider;
