import React, { Fragment } from "react";
import Product from "@/components/common/Product";
import Heading from "@/components/common/heading";
import {type ProductType } from "@/interface/types";
interface Props {
  products: ProductType[];
}
const RecentlyViewed = ({ products }: Props) => {
  return (
    <Fragment>
      <div className="spacer"></div>
      <Heading heading="Recently Viewed Products" subheading="Your History" />
      <div className="spacer"></div>
      <div className="flex justify-between flex-wrap gap-5">
        {/* products */}
        {products.map((product, i) => (
          <Product key={product.price + i} product={product} />
        ))}
      </div>
      <div className="spacer"></div>
    </Fragment>
  );
};

export default RecentlyViewed;
