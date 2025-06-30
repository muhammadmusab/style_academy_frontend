import React, { RefObject } from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import InputContainer from "./Form/input-container";

const Radio = React.forwardRef(({ ...rest }: any, ref) => {
  return (
    <InputContainer

      label={rest.label}
      className="flex items-center space-x-3 space-y-0"
    >
      <RadioGroup {...rest} ref={ref as unknown as RefObject<HTMLDivElement>}>
        {rest.options.map((option: { label: string; value: string }) => (
          <RadioGroupItem value={option.value} />
        ))}
      </RadioGroup>
    </InputContainer>
  );
});
Radio.displayName = "RadioGroupInput";
export default Radio;
