import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  
} from "@/components/ui/select";
import { FormControl } from "./form/form";

interface Props {
  onValueChange: (value: string) => void;
  defaultValue: string;
  placeholder: string;
  options: { label: string; value: string }[];
  name:string;
}

const CoreSelect = ({
  onValueChange,
  defaultValue,
  placeholder,
  options,

  name
}: Props) => {
  return (
    <Select
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      name={name}
    >
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options &&
          options.length &&
          options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default CoreSelect;
