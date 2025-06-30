"use client";
import AppliedColorFilter from "@/components/pages/shop/applied-filters/applied-color-filter";
import AppliedSizeFilter from "@/components/pages/shop/applied-filters/applied-size-filter";
import AppliedCategoryFilter from "@/components/pages/shop/applied-filters/applied-category-filter";
import AppliedPriceFilter from "@/components/pages/shop/applied-filters/applied-price-filter";
import AppliedBrandFilter from "./applied-brand-filter";
const AppliedFilters = () => {
  return (
    <div className="flex items-start mb-[20px] flex-wrap">
      <AppliedColorFilter />
      <AppliedSizeFilter />
      <AppliedCategoryFilter />
      <AppliedPriceFilter />
      <AppliedBrandFilter />
    </div>
  );
};

export default AppliedFilters;
