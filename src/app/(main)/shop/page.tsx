import BreadCrumbs from "@/components/pages/shop/breadcrumbs";
import FilterSidebar from "@/components/pages/shop/filters/filters-sidebar";
import Controls from "@/components/pages/shop/controls";
import AppliedFilters from "@/components/pages/shop/applied-filters/applied-filters";
// import CurrentCategory from "@/components/pages/shop/filters/current-category";
import ShopProducts from "@/components/pages/shop/shop-products";
import { products } from "@/constants/products";
import Pagination from "@/components/pages/shop/pagination";
import RecentlyViewed from "@/components/pages/shop/recently-viewed";
const Page = () => {
  return (
    <div className="font-roboto bg-[#F7F8FC]">
      <BreadCrumbs />
      <div className="container-fluid">
        <div className="flex">
          <div className="md:hidden mt-[100px]">
            <FilterSidebar />
          </div>
          <div className="mt-[10px] w-full">
            <div className=" md:px-0 w-full">
              <Controls />
            </div>
            {/* Applied Filters */}
            <AppliedFilters />
            {/* ShopProducts */}
            <ShopProducts products={products} />
          </div>
        </div>
        {/* Pagination */}
        <Pagination />
        {/* Recently viewed products */}
        <RecentlyViewed products={products.slice(0, 4)} />
      </div>
    </div>
  );
};

export default Page;
