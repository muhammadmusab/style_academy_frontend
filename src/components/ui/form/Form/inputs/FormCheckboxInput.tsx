import React, { RefObject } from "react";
import InputContainer from "../input-container";

import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label, Option } from "@/types/form";
import { FormControl } from "../../form";
import { Checkbox } from "../../checkbox";

interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  containerClass?: string;
  OptionLabelClass?: string;
  description?: Description;
  options: Option[];
  name: string;
}
const FormCheckboxInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      field,
      description,
      inputcontainerClass,
      containerClass,
      OptionLabelClass,
      options,
      name,
    },
    ref
  ) => {
    return (
      <InputContainer
        label={label}
        description={description}
        showMessage={true}
      >
        <div className={containerClass}>
          {options &&
            options.map((option: Option) => (
              <InputContainer
                showMessage={false}
                key={option.value}
                containerClass={inputcontainerClass}
                label={{
                  text: option.label,
                  className: OptionLabelClass,
                }}
              >
                <FormControl>
                  <Checkbox
                    ref={ref as RefObject<HTMLButtonElement>}
                    value={option.value}
                    name={name}
                    checked={field.value?.includes(option.value)}
                    onCheckedChange={(checked) => {
                      let values: any[] = [];
                      if (checked) {
                        if (Array.isArray(field.value)) {
                          if (options.length && options.length === 1) {
                            values.push(option.value);
                          } else {
                            values = [...field.value, option.value];
                          }
                        } else {
                          values.push(option.value);
                        }
                        field.onChange(values);
                      } else {
                        field.onChange(
                          field.value?.filter(
                            (value: any) => value !== option.value
                          )
                        );
                      }
                    }}
                  />
                </FormControl>
              </InputContainer>
            ))}
        </div>
      </InputContainer>
    );
  }
);
FormCheckboxInput.displayName = "FormCheckboxInput";
export default FormCheckboxInput;
