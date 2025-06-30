import React from "react";
import InputContainer from "../input-container";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label } from "@/types/form";
import { DatePicker } from "@/components/ui/datepicker";
interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  description?: Description;
  inputProps: Record<string, any>;
}
const FormDatepickerInput = ({
  field,
  label,
  description,
  inputProps,
  inputcontainerClass,
}: Props) => {
  return (
    <InputContainer
      label={label}
      description={description}
      containerClass={inputcontainerClass}
    >
      <DatePicker
        onSelect={field.onChange}
        inputProps={inputProps}
        field={field}
      />
    </InputContainer>
  );
};

export default FormDatepickerInput;
