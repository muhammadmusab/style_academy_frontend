import React, { RefObject } from "react";
import InputContainer from "../input-container";
import { FormControl } from "../../form";
import { Switch } from "../../switch";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label } from "@/types/form";

interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  inputProps?: Record<string, any>;
  description?: Description;
}
const FormSwitchInput = ({
  label,
  field,
  description,
  inputcontainerClass,
  inputProps,
}: Props) => {
  return (
    <InputContainer
      label={label}
      description={description}
      containerClass={inputcontainerClass}
    >
      <FormControl>
        <Switch
          name={field.name}
          checked={field.value}
          onCheckedChange={field.onChange}
          {...inputProps}
        />
      </FormControl>
    </InputContainer>
  );
};
FormSwitchInput.displayName = "FormSwitchInput";
export default FormSwitchInput;
