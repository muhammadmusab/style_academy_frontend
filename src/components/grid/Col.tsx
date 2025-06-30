import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
interface Props extends ComponentPropsWithoutRef<"div"> {
}
export const Col = ({ children, className }: Props) => {
  return <div className={cn("", className)}>{children}</div>;
};
