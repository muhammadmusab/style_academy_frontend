import { Fragment } from "react";
import Product from "@/components/common/Product";
import { ProductType } from "@/interface/types";
// import { useFilterStore } from "@/store/filter";
interface Props {
  products: ProductType[];
}
const ShopProducts = ({ products }: Props) => {
  return (
    <Fragment>
      <div className="flex justify-between flex-wrap gap-5">
        {/* products */}
        {products && products.map((product:any, i:number) => (
          <Product key={product.price + i} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default ShopProducts;
