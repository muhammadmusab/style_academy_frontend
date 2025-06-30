import Features from "@/components/pages/home/features";
import Hero from "@/components/pages/home/hero";
import HorizontalBanner from "@/components/pages/home/horizontal-banner";
import ProductCategoryTabs from "@/components/pages/home/product-category-tabs";
import Subscribe from "@/components/pages/home/subscription-section";
import VerticalBanner from "@/components/pages/home/vertical-banner";
import { casual,readyToWear,unstiched } from "@/constants/products";
import { ProductType } from "@/interface/types";
import { Fragment } from "react";

const page = ({
  searchParams: { category },
}: {
  searchParams: { category: string };
}) => {
  const tabs = [
    {
      category: "Casual",
      value: "casual",
    },
    {
      category: "Ready to wear",
      value: "ready-to-wear",
    },
    {
      category: "Unstiched",
      value: "unstiched",
    },
  ];
  //--------TESTING PURPOSE until api is ready
  // just for testing for now until real api is ready, we will set products array based on the category we get from params.
  let products:
    ProductType[] = [];

  // Bottom Fabric:
  // Dupatta Fabric: Printed Dupatta| 100% Polyester
  // Fit: Smart
  // Sleeve Length: Full

  if (category === "casual") {
    products = [...casual];
  } else if (category === "ready-to-wear") {
    products = [...readyToWear];
  } else {
    products = [...unstiched];
  }
  return (
    <Fragment>
      <Hero />
      <ProductCategoryTabs
        defaultTab={category ? category : tabs[0].value}
        tabs={tabs}
        currentValue={category ? category : tabs[0].value}
        products={products}
      />
      <VerticalBanner/>
      <HorizontalBanner/>
      <Subscribe/>
      <Features/>

    </Fragment>
  );
};

export default page;
