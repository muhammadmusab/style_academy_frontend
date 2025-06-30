import React, { RefObject } from "react";
import InputContainer from "../input-container";
import { FormControl } from "../../form";
import { Description, Label } from "@/types/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
//@ts-expect-error
import Stars from "react-rating-stars-component";
interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  inputProps?: Record<string, any>;
  description?: Description;
}
const FormRatingStar = React.forwardRef<HTMLInputElement, Props>(
  ({ label, field, description, inputcontainerClass, inputProps }, ref) => {
    return (
      <InputContainer
        label={label}
        description={description}
        containerClass={inputcontainerClass}
      >
        <FormControl>
          <Stars
            {...inputProps}
            {...field}
            onChange={field.onChange}
            ref={ref as RefObject<HTMLInputElement>}
          />
        </FormControl>
      </InputContainer>
    );
  }
);
FormRatingStar.displayName = "FormRatingStar";
export default FormRatingStar;
