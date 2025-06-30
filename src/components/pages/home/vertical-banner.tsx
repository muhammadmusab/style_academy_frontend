import React from "react";

const VerticalBanner = () => {
  const bgUrl = "/home/vertical-banner.png";
  const category = "Luxuary";
  return (
    <div className="section-space">
      <div
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={` bg-no-repeat bg-top bg-cover  max-w-[91%] mx-auto h-[1000px]  flex items-center justify-center relative`}
    >
      <div className=" absolute top-[0] right-[0] h-full ">
        <div className="bg-primary  h-full   flex justify-center items-center">
          <h2 className="rotate-[270deg] text-white text-[100px]">{category}</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VerticalBanner;
