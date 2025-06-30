import Button from "@/components/ui/buttons/button";
import React from "react";

const page = () => {
  const herobgUrl = "/home/herobg.webp";
  const content = {
    heading: "Walk In Style",
    text: "Style is the fingerprint of personality upon expression, the signature that distinguishes one individual's creativity.",
  };
  return (
    <div
      style={{ backgroundImage: `url(${herobgUrl})` }}
      className={`section-space overlay bg-no-repeat bg-center bg-cover w-full h-[800px] bg-blend-darken flex items-center`}
    >
      <div className="container-fluid">
        <h1 className="text-[80px] text-white font-bold">{content.heading}</h1>
        <p className="text-white mb-[20px] w-[600px]">{content.text}</p>
        <Button className="font-bold ">
            Shop Now
        </Button>
      </div>
    </div>
  );
};

export default page;
