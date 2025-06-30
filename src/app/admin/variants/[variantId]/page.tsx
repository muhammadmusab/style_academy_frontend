import React from "react";
import ProductVariantForm from "@/components/admin/product/product-variant-form";
import { TPageProps } from "@/types/general";
const Page = ({ params }: TPageProps) => {
  const variantId = params.variantId?.toString() ?? "new";
  return <ProductVariantForm uuid={variantId} />;
};

export default Page;
