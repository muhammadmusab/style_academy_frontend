"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
interface Props{
    totalProducts:number;
}
const CurrentCategory = ({totalProducts}:Props) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  const currentCategory = params.get('category')?params.get('category'):"Shop";
  return (
    <div className="pb-[20px]">
      <h1 className="text-primary font-bold font-inter text-[20px]">
        {currentCategory?.toUpperCase()}
      </h1>
      <p className="text-gray-400 text-[15px]">{totalProducts} products</p>
    </div>
  );
};

export default CurrentCategory;
