import { ProductType } from "@/interface/types";
import Product from "../common/Product";
interface Props {
  products: ProductType[];
}
const RecentlyViewedProducts = ({ products }: Props) => {
  return (
    <div className="flex justify-center flex-wrap gap-2">
      {/* products: Product component is normally server comp , but when its parent is client it will become client and where it's parent is Server then it will remain server. Here it is client because if this parent */}
      {products &&
        products.map((product, i) => (
          <Product key={product.price + i} product={product} />
        ))}
    </div>
  );
};

export default RecentlyViewedProducts;
