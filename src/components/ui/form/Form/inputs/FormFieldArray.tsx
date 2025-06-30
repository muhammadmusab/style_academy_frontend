import { Description, Label } from "@/types/form";
import React, { Fragment } from "react";
import { useFieldArray } from "react-hook-form";

import { FormField } from "../../form";
import InputControl from "../input-control";
import { FaPlus } from "react-icons/fa";
import InputContainer from "../input-container";
import { cn } from "@/lib/utils";
interface Props {
  control: any;
  label: Label;
  containerClass?: string;
  inputcontainerClass?:string;
  fieldArrayContainerClass?: string;
  inputProps: Record<string, any>;
  description?: Description;
  name: string;
}
const FormFieldArray = (input: Props) => {
  const { fields, append, remove } = useFieldArray({
    control: input.control,
    name: input.name,
  });
  const appendObject = () => {
    const object: Record<string, any> = {};
    input.inputProps.fieldArrayControls.forEach((control: any) => {
      object[control.name] = control.defaultValue ?? "";
    });
    append(object);
  };

  return (
    <InputContainer
      label={input.label}
      description={input.description}
      showMessage={false}
      containerClass={input.containerClass}
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          className={cn(
            `flex gap-2 w-[100%] items-start`,
            input.fieldArrayContainerClass
          )}
        >
          {input.inputProps.fieldArrayControls.map((item: any) => (
            <div key={item.name} className={item.inputcontainerClass}>
              <FormField
                control={input.control}
                name={`${input.name}.${index}.${item.name}`}
                render={({ field, fieldState }) => (
                  <InputControl
                    isDirty={Boolean(fieldState.isDirty).toString() as string}
                    field={field}
                    {...(item as any)}
                  />
                )}
              />
            </div>
          ))}

          {/* Button to remove a stop */}
          <button
            className="flex items-end bg-primary text-white hover:text-white py-2 px-3 self-center"
            type="button"
            onClick={() => remove(index)}
            disabled={fields.length === 1} // Prevent removing the last stop
          >
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        className={`text-center mt-4 flex items-center justify-center ml-auto transition-all bg-black text-white hover:text-white w-[50px] h-[30px]`}
        onClick={appendObject}
      >
        <FaPlus className="mr-2" />
      </button>
    </InputContainer>
  );
};

FormFieldArray.displayName = "FormFieldArray";
export default FormFieldArray;
