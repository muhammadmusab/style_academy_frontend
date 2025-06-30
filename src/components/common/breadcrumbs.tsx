"use client";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  let initialArray = [{ name: "HOME", path: "/" }];
  let subPaths = pathname.split("/") as any[];

  if (subPaths.length) {
    // params[name as string] as any[];
    let filteredPaths = subPaths.filter((item: string) => {
      if (item.length) return item;
    }) as any[];
    
    subPaths = filteredPaths.map((item) => {
      let name = item.replace("%20", " ") as string;
      name = item.replace("-", " ")
      return {
        name: name.toUpperCase(),
        path: `/${item.toLocaleLowerCase()}`,
      };
    });
  }
  const links = [...initialArray].concat([
    ...(subPaths as { name: string; path: string }[]),
  ]);

  return (
    <Fragment>
      <div className="bg-[#22292F] font-poppins h-[70px] flex items-center">
        <div className="container-fluid w-full">
          <div className="flex items-center">
            {links.length &&
              links?.map((item, i) => (
                <Fragment key={uuidv4()}>
                  <Link
                    className={`mx-2 font-bold xs:text-[12px]  ${
                      i < links.length - 1 ? "text-white" : "text-gray-400"
                    }`}
                    href={item.path}
                  >
                    {item.name}
                  </Link>
                  {i < links.length - 1 && (
                    <span>
                      <AiOutlineArrowRight className="text-white" />
                    </span>
                  )}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="spacer"></div>
    </Fragment>
  );
};

export default Breadcrumbs;
