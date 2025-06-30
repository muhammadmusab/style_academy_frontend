import Social from "@/components/common/social";
import AccountLinks from "@/components/common/links-container";
import QuickLinks from "@/components/common/links-container";
import Connect from "@/components/common/connect";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterLine, RiYoutubeLine } from "react-icons/ri";
import { Fragment } from "react";


const Footer = () => {
  const accountLinks = [
    { text: "My Account", path: "/" },
    { text: "Login / Register", path: "/" },
    { text: "Cart", path: "/" },
    { text: "Wishlist", path: "/" },
    { text: "Shop", path: "/" },
  ];
  const quickLinks = [
    { text: "Privacy Policy", path: "/" },
    { text: "Terms Of Use", path: "/" },
    { text: "FAQ", path: "/" },
    { text: "Contact", path: "/" },
  ];
  const socialLinks = [
    {
      icon: <FaFacebookF className="text-white text-[25px]" />,
      path: "/",
    },
    {
      icon: <FaInstagram className="text-white text-[25px]" />,
      path: "/",
    },
    // {
    //   icon: <RiYoutubeLine className="text-white text-[25px]" />,
    //   path: "/",
    // },
  ];
  return (
    <Fragment>
      <div className="bg-black pt-[40px] pb-[30px]">
        <div className="container">
          <div className="flex justify-between">
            
            <div className="basis-[25%] max-w-[25%]">
              <Social icons={socialLinks} />
            </div>
            <div className="basis-[25%] max-w-[25%]">
              <AccountLinks heading="Account" links={accountLinks} />
            </div>
            <div className="basis-[25%] max-w-[25%]">
              <QuickLinks heading="Quick Link" links={quickLinks} />
            </div>
            <div className="basis-[25%] max-w-[25%]">
              <Connect />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary py-[20px] flex items-center justify-center">
        <p className="text-white text-center">
          Copyright Style Academy {new Date().getFullYear()}. All right reserved
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
