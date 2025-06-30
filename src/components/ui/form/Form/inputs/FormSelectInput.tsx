import React, { RefObject } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/select";
import InputContainer from "../input-container";
import { FormControl } from "../../form";
import { Description, Label, Option } from "@/types/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  inputProps?: Record<string, any>;
  description?: Description;
  options: Option[];
  name: string;
}
const FormSelectInput = React.forwardRef<HTMLSelectElement, Props>(
  (
    {
      label,
      field,
      description,
      inputcontainerClass,
      inputProps,
      options,
      name,
    },
    ref
  ) => {
    return (
      <InputContainer
        label={label}
        description={description}
        containerClass={inputcontainerClass}
      >
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
          name={field.name}
          {...field}
        >
          <FormControl>
            <SelectTrigger ref={ref as RefObject<HTMLButtonElement>}>
              <SelectValue placeholder={inputProps?.placeholder} {...inputProps} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options &&
              options.map((option: Option) => (
                <SelectItem key={option.value} value={option.value as string}>
                  {option.label}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </InputContainer>
    );
  }
);
FormSelectInput.displayName = "FormSelectInput";
export default FormSelectInput;
