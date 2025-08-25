import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import CartSidebar from "../common/cart-sidebar";
import AuthSidebar from "../auth/auth-sidebar";
import { AiOutlineUser } from "react-icons/ai";
import AccountMenu from "../auth/account-menu";
import { getProfile } from "@/services/requests/get-profile";

const Header = async () => {
  const user = await getProfile();
  const isLoggedin = user?.email ? true : false;
  const cartItems = [
    {
      id: "83701f42-d11c-45fb-b49e-94117e2ed0ec",
      image: "/product/1.webp",
      price: 500,
      quantity: 2,
      title: "Pima Lawn | Unstiched",
    },
    {
      id: "83701f42-d11c-45fb-b49e-94117e2ed0e2",
      image: "/product/2.webp",
      price: 300,
      quantity: 2,
      title: "Pima Lawn | Stiched",
    },
  ];
  const links = [
    {
      label: "Home",
      url: "/",
      type: "link",
    },
    {
      label: "Shop",
      url: "/shop",
      type: "link",
    },
    {
      label: "Login",
      url: "",
      type: "button",
    },
  ];
  return (
    <Fragment>
      <div className="bg-primary text-white text-center w-full py-[15px]">
        For any question or help please contact on our Whatsapp Number:
        03001234139 / 032123488654
      </div>
      <div className="shadow-sm w-full">
        <div className="container-fluid py-[15px] flex items-center justify-between">
          <Image
            src={"/logo2.png"}
            width={200}
            height={100}
            alt="Logo"
            className="mt-2"
          />
          <div className="flex items-center">
            <div className="flex items-center">
              {links.map((link) =>
                link.type === "link" ? (
                  <Link
                    className="font-bold hover:text-primary px-[20px]"
                    key={link.label}
                    href={link.url}
                  >
                    {link.label}
                  </Link>
                ) : isLoggedin ? (
                  <AccountMenu />
                ) : (
                  <AuthSidebar
                    headerText="Account"
                    headerImage="/account.svg"
                    key={"account"}
                    icon={
                      <AiOutlineUser className="text-[25px] hover:text-primary ml-[20px]" />
                    }
                  />
                )
              )}
            </div>
            <div className="flex items-center px-[20px] gap-4">
              <button className="flex items-center">
                <IoSearch className="text-[20px]" />
              </button>
              <CartSidebar
                headerImage="/cart.svg"
                headerText={`Cart (${cartItems.length})`}
                icon={
                  <FaShoppingBag className="text-[20px] hover:text-primary" />
                }
                items={cartItems}
                type={"cart"}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
