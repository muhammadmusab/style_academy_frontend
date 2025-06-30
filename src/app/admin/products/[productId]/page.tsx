import React from "react";
import ProductForm from "@/components/admin/product/product-form";
import { TPageProps } from "@/types/general";
const page = ({ params }: TPageProps) => {
  const productId = params.productId?.toString() ?? "new";

  return <ProductForm uuid={productId} />;
};

export default page;
