import React, { RefObject } from "react";

import FormTextInput from "./inputs/FormTextInput";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import FormSelectInput from "./inputs/FormSelectInput";
import FormTextAreaInput from "./inputs/FormTextAreaInput";
import FormCheckboxInput from "./inputs/FormCheckboxInput";
import FormRadioInput from "./inputs/FormRadioInput";
import FormDatepickerInput from "./inputs/FormDatepickerInput";
import { ReactSelect } from "./inputs/FormReactSelect";
import FormRatingStar from "./inputs/FormRatingStar";
import FormSwitchInput from "./inputs/FormSwitchInput";
import RichTextEditor from "./inputs/rich-text-editor";

import FormFieldArray from "./inputs/FormFieldArray";
import { Dropzone } from "../drop-zone";

export enum InputControlType {
  Input = "Input",
  Textarea = "Textarea",
  Checkbox = "Checkbox",
  RadioGroup = "RadioGroup",
  Select = "Select",
  DatePicker = "DatePicker",
  ReactSelect = "ReactSelect",
  RatingStars = "RatingStars",
  Switch = "Switch",
  FileUpload = "FileUpload",
  FieldArray = "FieldArray",
  RichTextEditor = "RichTextEditor",

  //   AvatarUpload = "AvatarUpload",
}

export type InputControlProps = {
  // containerClass?: string;
  // inputcontainerClass?: string;
  // radioGroupClass?: string;
  // OptionLabelClass?: string;
  // name: string;
  // control: any;
  // label: Label;
  // description?: Description;
  // options?: Option[];
  formControl: InputControlType;
  inputProps: Record<string, any>;
  field: ControllerRenderProps<FieldValues, string>;
  isDirty?: boolean;
};
const InputControl = React.forwardRef<HTMLInputElement, InputControlProps>(
  ({ formControl, field, isDirty, ...rest }, ref) => {
    switch (formControl) {
      case InputControlType.Input:
        return <FormTextInput ref={ref} field={field} {...(rest as any)} />;
      case InputControlType.Switch:
        return <FormSwitchInput ref={ref} field={field} {...(rest as any)} />;

      case InputControlType.Select:
        return (
          <FormSelectInput ref={ref as any} field={field} {...(rest as any)} />
        );
      case InputControlType.ReactSelect:
        return (
          <ReactSelect ref={ref as any} field={field} {...(rest as any)} />
        );
      case InputControlType.RatingStars:
        return (
          <FormRatingStar ref={ref as any} field={field} {...(rest as any)} />
        );

      case InputControlType.Textarea:
        return (
          <FormTextAreaInput
            field={field}
            {...(rest as any)}
            ref={ref as unknown as RefObject<HTMLTextAreaElement>}
          />
        );
      case InputControlType.RichTextEditor:
        return <RichTextEditor field={field} {...(rest as any)} />;

      case InputControlType.Checkbox:
        return (
          <FormCheckboxInput
            field={field}
            {...(rest as any)}
            ref={ref as unknown as RefObject<HTMLInputElement>}
          />
        );

      case InputControlType.RadioGroup:
        return <FormRadioInput field={field} {...(rest as any)} />;

      case InputControlType.DatePicker:
        return <FormDatepickerInput field={field} {...(rest as any)} />;

      case InputControlType.FileUpload:
        return <Dropzone field={field} {...(rest as any)} />;
      case InputControlType.FieldArray:
        return <FormFieldArray field={field} {...(rest as any)} />;

      default:
        return <FormTextInput ref={ref} field={field} {...(rest as any)} />;
    }
  }
);

InputControl.displayName = "InputControl";
export default InputControl;
