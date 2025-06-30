"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/modal";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ProductSkuForm from "@/components/admin/product/product-sku-form";
const Page = () => {
  const params = useParams();

  const skuId = params.skuId?.toString();
  const router = useRouter();
  return (
      <Dialog onOpenChange={() => router.back()} defaultOpen={true} open={true}>
      <DialogContent className="bg-white max-w-[600px]">
        <ProductSkuForm uuid={skuId} />
      </DialogContent>
    </Dialog>
  );
};

export default Page;
