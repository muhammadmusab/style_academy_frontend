"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Link from "next/link";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
interface Props {
  total: number; // total number of products (will be sent from server)
}
const Pagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useFilter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  //   we will send current_page and items_per_page to server and get total count
  let page = params.get("page") ? parseInt(params.get("page") as string) : 1; // current page
  const itemsPerpage = 10; // limit
  let offset = itemsPerpage * (page - 1);

  const buttons = [1, 2, 3];

  // const totalPages = Math.ceil(total);
  return (
    <Fragment>
      <div className="spacer"></div>
      <div className="justify-center flex w-full">
        <div className="flex items-center">
          <button className="bg-primary hover:bg-primary-foreground transition-all bg-primaryhover flex items-center justify-center text-center text-white rounded-full w-[50px] h-[50px] xs:w-[35px] xs:h-[35px]">
            <AiFillCaretLeft />
          </button>
          <div className="flex items-center">
            {buttons.map((number) => (
              <Link
                key={uuidv4()}
                href={"/"}
                className="mx-2 xs:mx-[5px] flex items-center justify-center hover:bg-primary-foreground transition-all  bg-primary text-center text-white rounded-full w-[50px] h-[50px] xs:w-[35px] xs:h-[35px]"
              >
                {number}
              </Link>
            ))}
          </div>
          <button className="bg-primary hover:bg-primary-foreground transition-all bg-primaryhover flex items-center justify-center text-center text-white rounded-full w-[50px] h-[50px] xs:w-[35px] xs:h-[35px]">
            <AiFillCaretRight />
          </button>
        </div>
      </div>
      <div className="spacer"></div>
    </Fragment>
  );
};

export default Pagination;
