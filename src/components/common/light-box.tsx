"use client";
import React, { useState } from "react";
import NextJsImage from "./image";
import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
interface Props {
  images: SlideImage[];
  open: boolean;
  setOpen: Function;
  index:number
}
const CoreLightBox = ({ images, setOpen, open,index }: Props) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={images}
      render={{ slide: NextJsImage }}
      index={index}
    />
  );
};

export default CoreLightBox;
