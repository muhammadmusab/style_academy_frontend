import Link from "next/link";
import React from "react";

const HorizontalBanner = () => {
  const bgUrl = "/home/horizontal-banner.webp";
  return (
    <div className="section-space">
      <Link href={"/"}>
        <div
          style={{ backgroundImage: `url(${bgUrl})` }}
          className={` bg-no-repeat bg-[100%] bg-cover  max-w-[91%] mx-auto h-[1000px]  flex items-center justify-center relative`}
        ></div>
      </Link>
    </div>
  );
};

export default HorizontalBanner;
