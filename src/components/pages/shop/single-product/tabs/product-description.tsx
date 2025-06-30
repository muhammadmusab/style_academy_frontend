import React, { Fragment } from "react";
import parse from "html-react-parser";
interface Props {
  description: any;
}
const ProductDescription = ({ description }: Props) => {
  return <Fragment>{parse(description)}</Fragment>;
};

export default ProductDescription;
