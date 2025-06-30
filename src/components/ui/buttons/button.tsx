import React from "react";
import { twMerge } from "tailwind-merge";
const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(
        "text-white px-[15px] py-[10px] bg-primary hover:bg-primary-foreground",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
