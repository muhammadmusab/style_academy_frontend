import React from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label, Option } from "@/types/form";
import { FormControl } from "../../form";
import InputContainer from "../input-container";
import { RadioGroup, RadioGroupItem } from "../../radio-group";
interface Props {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  containerClass?: string;
  OptionLabelClass?: string;
  radioGroupClass?: string;
  description?: Description;
  options: Option[];
  name: string;
  inputProps: Record<string, any>;
}
const FormRadioInput = ({
  label,
  field,
  description,
  inputcontainerClass,
  containerClass,
  OptionLabelClass,
  radioGroupClass,
  options,
  name,
  inputProps,
}: Props) => {
  return (
    <InputContainer
      label={label}
      description={description}
      containerClass={containerClass}
    >
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          name={name}
          className={
            radioGroupClass ? radioGroupClass : "flex flex-col space-y-1"
          }
        >
          {options &&
            options.map((option: Option) => (
              <InputContainer
                key={option.value.toString()}
                containerClass={inputcontainerClass}
                label={{
                  text: option.label,
                  className: OptionLabelClass,
                }}
              >
                <FormControl>
                  <RadioGroupItem
                    className={inputProps && inputProps?.className}
                    id={option.value.toString()}
                    value={option.value.toString() as string}
                  />
                </FormControl>
              </InputContainer>
            ))}
        </RadioGroup>
      </FormControl>
    </InputContainer>
  );
};

export default FormRadioInput;
