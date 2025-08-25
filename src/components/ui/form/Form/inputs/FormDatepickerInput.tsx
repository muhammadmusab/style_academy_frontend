import React from "react";
import InputContainer from "../input-container";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label } from "@/types/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { FormControl } from "../../form";
import { Button } from "@/components/ui/button";
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
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Calendar
            className="w-[230px]"
            mode="single"
            selected={field.value}
            onSelect={(selected:Date)=>field.onChange(selected)}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
    </InputContainer>
  );
};

export default FormDatepickerInput;
