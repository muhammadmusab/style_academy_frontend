"use client";
import React, { useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CategoryTabs from "./category-tabs";
import Product from "@/components/common/Product";
import useFilter from "@/hooks/use-filters";
import { usePathname, useRouter } from "next/navigation";
import { ProductType } from "@/interface/types";
import { useToast } from "@/hooks/useToast";

interface Props {
  tabs: { value: string; category: string }[];
  defaultTab: string;
  currentValue: string;
  products: ProductType[];
}
const ProductCategoryTabs = ({
  tabs,
  defaultTab,
  currentValue,
  products,
}: Props) => {
  const { createQueryString } = useFilter();
  const pathname = usePathname();
  const router = useRouter();
  const { errorToast, successToast } = useToast();
  const setCategoryHandler = (value: string) => {
    errorToast("test message");
    router.push(pathname + "?" + createQueryString("category", value), {
      scroll: false,
    });
  };

  return (
    <div className="section-space">
      <Tabs
        onValueChange={setCategoryHandler}
        defaultValue={defaultTab}
        className="w-full flex justify-center"
      >
        <div className="w-full">
          {/* tabs */}
          <div className="w-full flex justify-center">
            {tabs.map((tab) => (
              <CategoryTabs
                key={tab.value}
                value={tab.value}
                category={tab.category}
                currentValue={currentValue}
              />
            ))}
          </div>
          {/* content */}
          <TabsContent
            id={currentValue}
            value={currentValue as string}
            className="mt-[30px]"
          >
            <div className="flex justify-center flex-wrap gap-2">
              {/* products: Product component is normally server comp , but when its parent is client it will become client and where it's parent is Server then it will remain server. Here it is client because if this parent */}
              {products.map((product, i) => (
                <Product key={product.price + i} product={product} />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductCategoryTabs;
