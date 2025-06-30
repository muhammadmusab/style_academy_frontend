"use client";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

import { FaTshirt, FaShoppingBasket } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
const Menu = ({ className }: { className: string }) => {
  const pathName = usePathname();
  const pages = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <IoHomeOutline />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <FaTshirt />,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: <FaShoppingBasket />,
    },
    {
      name: "Logout",
      icon: <RiShutDownLine />,
    },
  ];
  const logout = () => {
    console.log("logged out");
  };
  return (
    <ul className={`border border-[#ccc] rounded-[2px] shadow-sm ${className}`}>
      {pages.map((item, i) => {
        return (
          <Fragment key={item.name}>
            {item.path ? (
              <li
                className={`p-3 ${
                  item.path === pathName ? "bg-black text-white" : ""
                }`}
              >
                <Link className="flex items-center" href={item.path}>
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              </li>
            ) : (
              <li className="p-3">
                <button className=" w-full flex items-center" onClick={logout}>
                  {item.icon} <span className="ml-2">{item.name}</span>
                </button>
              </li>
            )}
            {i < pages.length - 1 && <hr />}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
