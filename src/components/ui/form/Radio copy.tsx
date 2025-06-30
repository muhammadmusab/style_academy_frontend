import React, { RefObject } from "react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import InputContainer from "./Form/input-container";

const Radio = React.forwardRef(({ ...rest }: any, ref) => {
  return (
    <RadioGroup {...rest} ref={ref as unknown as RefObject<HTMLDivElement>}>
      {rest.options.map((option: { label: string; value: string }) => (
        <InputContainer
          key={option.value}
          className="flex items-center space-x-3 space-y-0"
        >
          <InputContainer label={rest.label}>
            <RadioGroupItem value={option.value} />
          </InputContainer>
        </InputContainer>
      ))}
    </RadioGroup>
  );
});
Radio.displayName = "RadioGroupInput";
export default Radio;
