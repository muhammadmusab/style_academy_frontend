import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const AdminHeader = () => {
  const links = [
    {
      label: "Home",
      url: "/",
      type: "link",
    },
    {
      label: "Back To Shop",
      url: "/shop",
      type: "link",
    },
  ];
  return (
    <Fragment>
      <div className="  shadow-sm w-full">
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
              {links.map((link) => (
                <Link
                  className="font-bold hover:text-primary px-[20px]"
                  key={link.label}
                  href={link.url}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-[20px]">
              <button className="font-bold hover:text-primary">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminHeader;
