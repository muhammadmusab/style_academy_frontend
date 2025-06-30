import React from "react";
import ProductSkuForm from "@/components/admin/product/product-sku-form";
import { TPageProps } from "@/types/general";
const Page = ({ params }: TPageProps) => {
  const skutId = params.skutId?.toString() ?? "new";
  return <ProductSkuForm uuid={skutId} />;
};

export default Page;
