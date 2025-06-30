"use client";
// import { useSearchParams } from "next/navigation";
import { useParams, usePathname } from 'next/navigation'
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { Fragment } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
interface Props {
  name?:string;
}
const Breadcrumbs = ({name='category'}:Props) => {
  const params = useParams();
  const pathName = usePathname();

  let initialArray = [{ name: "Home", path: "/" }];
  // let categoryArray = params[name] as any[];
  // categoryArray = categoryArray.map((item) => {
  //   let name=item.replace('%20',' ');
  //  return {
  //     name: name.charAt(0).toUpperCase() + name.slice(1),
  //     path: `/shop/${item.toLocaleLowerCase()}`,
  //   }
  // });
  // const links = [...initialArray].concat([...categoryArray]);

  let secondaryArray=pathName.split('/')
// secondaryArray=secondaryArray.map((item)=>{
//   if(item){
//     return {
//       name:item.charAt(0).toUpperCase() + item.slice(1),
//       path:
//     }
//   }
// })


  // console.log(secondaryArray)
  const links = [...initialArray];

  return (
    <Fragment>
      <div className="bg-[#22292F] font-poppins h-[70px] flex items-center">
        <div className="container-fluid w-full">
          <div className="flex items-center">
            {links.length &&
              links?.map((item, i) => (
                <Fragment key={uuidv4()}>
                  <Link
                    className={`mx-2 font-bold  ${
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
