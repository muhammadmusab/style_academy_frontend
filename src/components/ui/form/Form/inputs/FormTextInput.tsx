import React, { RefObject } from "react";
import InputContainer from "../input-container";
import { FormControl } from "../../form";
import { Input } from "../../input";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label } from "@/types/form";

interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  inputProps?: Record<string, any>;
  description?: Description;
}
const FormTextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, field, description, inputcontainerClass, inputProps }, ref) => {
    return (
      <InputContainer
        label={label}
        description={description}
        containerClass={inputcontainerClass}
      >
        <FormControl>
          <Input
            {...inputProps}
            name={field.name}
            defaultValue={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            ref={ref as RefObject<HTMLInputElement>}
          />
        </FormControl>
      </InputContainer>
    );
  }
);
FormTextInput.displayName = "FormTextInput";
export default FormTextInput;
