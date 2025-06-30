"use client";
import { Fragment, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductDetails from "./product-details";
import ProductReviews from "./product-reviews";
interface Props {
  reviews: {
    name: string;
    date: string;
    rating: number;
    text: string;
    title: string;
  }[];
  details: any;
}
const SingleProductTabs = ({ details, reviews }: Props) => {
  const [currentTab, setCurrentTab] = useState("details");

  const tabs = [
    {
      id: "details",
      text: "Product Details",
    },
    {
      id: "reviews",
      text: "Reviews",
    },
  ];

  const tabsContent = [
    {
      id: "details",
      component: <ProductDetails details={details} />,
    },
    {
      id: "reviews",
      component: <ProductReviews average={4.5} reviews={reviews} />,
    },
  ];
  return (
    <Fragment>
      <div className="font-poppins mt-[50px] py-5">
        {/* <Heading containerClass="mb-[15px]" heading="Product Details" subheading="" /> */}

        <Tabs
          defaultValue="details"
          onValueChange={(value) => setCurrentTab(value)}
          orientation="horizontal"
        >
          <TabsList className="flex w-full justify-center xs:justify-between  flex-wrap h-[90px]">
            {tabs.map((tab) => (
              <TabsTrigger
                value={tab.id}
                key={tab.id}
                className="my-10 transition-all w-[max-content] xs:px-0 xs:max-w-[50%] xs:basis-[45%] uppercase text-[16px] md:text-[14px] font-bold text-[#333333]  border-r-0 border-0 rounded-0  data-[state=active]:rounded-0  data-[state=active]:text-primary data-[state=active]:border-b-2 border-primary ml-[50px] md:ml-[20px] xs:ml-0 data-[state=active]:shadow-none"
              >
                {tab.text}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="max-w-[80%] mx-auto">
            {tabsContent.map((content) => (
              <TabsContent
                key={content.id}
                value={content.id}
                className={`mt-50 transition-all duration-[1000ms] ${
                  content.id === currentTab ? "opacity-100" : "opacity-0"
                }  `}
              >
                <div className="transition-all duration-[1000ms]">
                  {content.component}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </Fragment>
  );
};

export default SingleProductTabs;
