import React, { RefObject } from "react";
import InputContainer from "../input-container";
import { Textarea, TextareaProps } from "../../textarea";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label } from "@/types/form";
import { FormControl } from "../../form";

interface Props extends TextareaProps {
  field: ControllerRenderProps<FieldValues, string>;
  //   label: Label;
  inputcontainerClass?: string;
  inputProps?: Record<string, any>;
  description?: Description;
  name: string;
}
const FormTextAreaInput = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, field, description, inputcontainerClass, inputProps, ...rest },
    ref
  ) => {
    return (
      <InputContainer
        label={label}
        description={description}
        containerClass={inputcontainerClass}
      >
        <FormControl>
          <Textarea
            placeholder={inputProps?.placeholder}
            {...inputProps}
            {...(rest as TextareaProps)}
            name={field.name}
            defaultValue={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            ref={ref as unknown as RefObject<HTMLTextAreaElement>}
          />
        </FormControl>
      </InputContainer>
    );
  }
);
FormTextAreaInput.displayName = "FormTextAreaInput";
export default FormTextAreaInput;
