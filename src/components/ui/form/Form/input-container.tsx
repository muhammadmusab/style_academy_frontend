import React, { Children } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Description, Label } from "@/types/form";

const Slot: React.FC<{
  name: "inputPrepend" | "inputAppend";
  children: React.ReactNode;
}> = () => null;
const InputContainer = ({
  children,
  label,
  description,
  containerClass,
  showMessage = true,
  ...props
}: {
  children: React.ReactNode;
  label: Label;
  description?: Description;

  containerClass?: string;
  showMessage?: boolean;
}) => {
  const childrenArray = Children.toArray(
    children
  ) as unknown as React.ReactElement[];
  const inputPrependSlot = childrenArray.find(
    (child) => child?.props?.name === "inputPrepend"
  );
  const inputAppendSlot = childrenArray.find(
    (child) => child?.props?.name === "inputAppend"
  );

  const labelBox = label ? (
    <FormLabel className={`${label?.className}`}>
      {label.text ? label.text : label.icon}
    </FormLabel>
  ) : null;
  const descriptionBox = (
    <FormDescription className={description?.className}>
      {description?.text}
    </FormDescription>
  );
  return (
    <FormItem className={`${containerClass} relative`}>
      {inputPrependSlot?.props.chilren}
      {label && (label.text || label.icon) && label.prepend && labelBox}
      {description && description.prepend && descriptionBox}
      {children}
      {inputAppendSlot?.props.chilren}
      {label && (label.text || label.icon) && !label.prepend && labelBox}
      {description && !description.prepend && descriptionBox}
      {showMessage ? <FormMessage className="text-primary" /> : null}
    </FormItem>
  );
};
InputContainer.Slot = Slot;
export default InputContainer;
