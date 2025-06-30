import RecentlyViewed from "@/components/pages/shop/recently-viewed";
import ProductSlider from "@/components/pages/shop/single-product/product-slider";
import ProductControls from "@/components/pages/single-product/product-controls";
import ProductDescription from "@/components/pages/single-product/product-description";
import SingleProductTabs from "@/components/pages/single-product/single-product-tabs";
import { products } from "@/constants/products";
import { sizes } from "@/constants/sizes";
import { Fragment } from "react";
const Page = () => {
  // replace data below with actual data, like review will also be in the product request
  const product = products[0];
  const reviews = [
    {
      name: "Musab",
      title: "Great Product",
      date: `Oct 08 2023`,
      rating: 5,
      text: "I purchased two more to give as Eid presents to family members and this is the third one.",
    },
    {
      name: "Shumas",
      title: "Not happy",
      date: `Oct 09 2023`,
      rating: 3.5,
      text: "I purchased two more to give as Eid presents to family members and this is the third one.",
    },
  ];
  return (
    <Fragment>
      <div className="flex max-w-[80%] mx-auto gap-3  flex-wrap mt-[20px]">
        <div className="basis-[30%] max-w-[30%] lg:basis-full lg:max-w-full ">
          <ProductSlider productImages={product.images} />
        </div>
        <div className="basis-[65%] max-w-[65%] lg:basis-full lg:max-w-full mt-[20px] ml-auto">
          <ProductDescription product={product} />
          <ProductControls sizes={sizes} colors={product.colors} />
        </div>
      </div>
      <SingleProductTabs details={product.details} reviews={reviews} />
      <div className="max-w-[80%] mx-auto flex-wrap">
        <RecentlyViewed products={products.slice(0, 4)} />
      </div>
    </Fragment>
  );
};

export default Page;
