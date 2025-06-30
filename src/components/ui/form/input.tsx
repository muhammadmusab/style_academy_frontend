import * as React from "react";
import { twMerge } from "tailwind-merge";
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
// export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
//   InputDefaultProps;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          "flex h-10 w-full border-0 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-o focus:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 placeholder:ease-in-out placeholder:duration-1000 placeholder:transition-all focus:placeholder:translate-x-[50px] focus:placeholder:opacity-0  focus:border-black rounded-none border-b border-black",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
