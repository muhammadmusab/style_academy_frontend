import React from "react";
import { FieldPathValue } from "react-hook-form";
import { FormField } from "../form";
import InputControl from "./input-control";
interface Props {
  input: Record<string, any>;
  control: any;
}
const FormContainer = ({ input, control }: Props) => {
  return (
    <FormField
      control={control}
      name={input.name as FieldPathValue<any, any>}
      render={({ field, fieldState }) => (
        <InputControl
          isDirty={Boolean(fieldState.isDirty).toString() as string}
          field={field}
          {...(input as any)}
        />
      )}
    />
  );
};

export default FormContainer;
