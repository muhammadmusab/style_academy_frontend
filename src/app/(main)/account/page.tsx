import { getProfile } from "@/services/requests/get-profile";
import Link from "next/link";
import { Fragment } from "react";
import { FaPencilAlt, FaBox, FaRegHeart, FaUserAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import { RiCouponLine } from "react-icons/ri";
const Dashboard = async () => {
  const user = await getProfile();
 
  const sections = [
    {
      text: "Orders",
      icon: <FaBox className="text-[40px] text-gray-800" />,
      path: "/account/orders",
    },
    {
      text: "Wishlist",
      icon: <FaRegHeart className="text-[40px] text-gray-800" />,
      path: "/account/wishlist",
    },
    {
      text: "Addresses",
      icon: <FaLocationDot className="text-[40px] text-gray-800" />,
      path: "/account/saved-addresses",
    },
    {
      text: "Profile Details",
      icon: <FaUserAlt className="text-[40px] text-gray-800" />,
      path: "/account/profile",
    },
  ];
  return (
    <Fragment>
      <div className="bg-[#f8f9fa] p-[1rem] w-full flex items-center justify-between border border-[#ccc] xs:flex-col xs:w-full xs:items-start">
        <p className="m-0">{user?.email}</p>
        <Link
          href="/account/profile"
          className="flex items-center bg-transparent border border-black hover:bg-black transition-all duration-500 hover:text-white p-2 xs:mt-[10px]"
        >
          <FaPencilAlt />
          <span className="pl-2">EDIT PROFILE</span>
        </Link>
      </div>
      <div className="flex flex-wrap mt-3 gap-2">
        {sections.map((item, i) => (
          <Link
            key={item.text + i}
            href={item.path}
            className={`px-4 py-[48px] mb-3   max-w-[32.5%] basis-[32.5%] xs:max-w-[45%] xs:basis-[45%] xxs:max-w-[100%] xxs:basis-[100%] border border-[#ccc] hover:bg-gray-200 transition-all duration-500`}
          >
            <div className="flex flex-col items-center justify-center">
              {item.icon}
              <p className="mt-3">{item.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Dashboard;
