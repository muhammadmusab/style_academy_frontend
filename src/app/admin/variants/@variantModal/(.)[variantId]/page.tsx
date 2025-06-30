"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/modal";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ProductVariantForm from "@/components/admin/product/product-variant-form";
const Page = () => {
  const params = useParams();

  const variantId = params.variantId?.toString();
  const router = useRouter();
  return (
      <Dialog onOpenChange={() => router.back()} defaultOpen={true} open={true}>
      <DialogContent className="bg-white max-w-[600px]">
        <ProductVariantForm uuid={variantId} />
      </DialogContent>
    </Dialog>
  );
};

export default Page;
