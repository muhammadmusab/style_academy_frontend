import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Checkbox } from "./checkbox";
import InputContainer from "./Form/input-container";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
export type Props={
    field:ControllerRenderProps<FieldValues, "items">
}
export function CheckboxGroup({field}:Props) {
  return (
    <FormItem>
      <div className="mb-4">
        <FormLabel className="text-base">Sidebar</FormLabel>
      </div>
      {items.map((item) => (
        <FormField
          key={item.id}
          control={form.control}
          name="items"
          render={({ field }) => {
            return (
              <InputContainer
                key={item.id}
                className="flex flex-row items-start space-x-3 space-y-0"
                showMessage={false}
                label={{ prepend: false, show: true, ...label }}
              >
                <Checkbox
                  checked={field.value?.includes(item.id)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? field.onChange([...field.value, item.id])
                      : field.onChange(
                          field.value?.filter((value) => value !== item.id)
                        );
                  }}
                />
              </InputContainer>
            );
          }}
        />
      ))}
      <FormMessage />
    </FormItem>
  );
}
