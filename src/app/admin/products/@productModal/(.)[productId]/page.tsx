"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/modal";
import ProductForm from "@/components/admin/product/product-form";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
const Page = () => {
  const params = useParams();

  const productId = params.productId?.toString();
  const router = useRouter();
  return (
    <Dialog  onOpenChange={() => router.back()} defaultOpen={true} open={true}>
      <DialogContent className="bg-white max-w-[1000px] w-100 overflow-y-auto h-[1000px]">
        <ProductForm uuid={productId} />
      </DialogContent>
    </Dialog>
  );
};

export default Page;
