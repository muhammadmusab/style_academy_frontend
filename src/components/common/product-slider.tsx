"use client";
import {
  Splide,
  SplideSlide,
  Options,
  SplideTrack,
} from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Product from "../product";
import Image from "next/image";
import { Grid } from "@splidejs/splide-extension-grid";
import { v4 as uuidv4 } from "uuid";
interface Props {
  options: Options;
  slides: {
    productImage: string;
    rating: number;
    reviews: number;
    price: number;
    oldPrice?: number;
    title: string;
    isFavorite: boolean;
    productLink: string;
    colors?: any[];
    badgeText?: string;
    badgeClass?: string;
  }[];
  extensions?: any;
}

const productslider = ({ options, slides, extensions }: Props) => {
  const showGrid = extensions && extensions === "grid" ? { Grid } : undefined;
  return (
    <Splide
      className="relative"
      hasTrack={false}
      options={options}
      aria-label="sales products"
      extensions={showGrid}
    >
      <SplideTrack>
        {slides.map((slide,i) => (
          <SplideSlide key={uuidv4()} className="w-full h-full">
            <Product key={slide.title+i} product={slide} />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows" key={"product-arrows"}>
        <button className="splide__arrow splide__arrow--prev absolute top-[-80px] right-[70px] block">
          <Image src={"/left-arrow.svg"} width={46} height={46} alt="left" />
        </button>
        <button className="splide__arrow splide__arrow--next absolute top-[-80px] right-[0px] block">
          <Image src={"/right-arrow.svg"} width={46} height={46} alt="left" />
        </button>
      </div>
    </Splide>
  );
};

export default productslider;
