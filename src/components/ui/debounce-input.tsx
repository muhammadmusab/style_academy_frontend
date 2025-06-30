
'use client'
// A typical debounced input react component
import React from "react";
import { twMerge } from "tailwind-merge";
export function DebouncedInput({
  value: initialValue,
  onChange,
  className,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      className={twMerge(
        "flex h-10 w-full border-0 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-o focus:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 placeholder:ease-in-out placeholder:duration-1000 placeholder:transition-all focus:placeholder:translate-x-[50px] focus:placeholder:opacity-0  focus:border-black rounded-none border-b border-black",
        className
      )}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
