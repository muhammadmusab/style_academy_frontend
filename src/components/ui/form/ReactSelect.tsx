"use client";
import { Option } from "@/types/form";
import Select, {
  ClassNamesConfig,
  GroupBase,
  MultiValue,
  OptionsOrGroups,
  Props,
} from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncSelect from "react-select/async";
import { useAsync } from "@/hooks/useAsync";
import {
  ComponentPropsWithoutRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { FORM_CONTROL_CLASSNAME } from "@/constants";

export type TSelectProps = Props<Option, boolean, GroupBase<Option>> & {
  name?: string;
  isCreateable?: boolean;
};

export type TAsyncProps = {
  isAsync?: true;
  loadOptionsCallback: (
    query: string
  ) => Promise<OptionsOrGroups<Option, GroupBase<Option>>>;
};
export type TNormalSelectProps = {
  isAsync?: false;
};
export type AsyncSelectProps = TSelectProps & TAsyncProps;
export type TReactSelectProps = {
  inputContainerProps?: ComponentPropsWithoutRef<"div">;
} & TSelectProps &
  (TAsyncProps | TNormalSelectProps);

export const ReactSelectAsync = ({
  loadOptionsCallback,
  ...rest
}: AsyncSelectProps) => {
  const timeoutRef = useRef<any>(null);
  const [defaultOption, setDefaultOption] = useState();

  const { loading, callbackMemoized } = useAsync<
    OptionsOrGroups<Option, GroupBase<Option>> | undefined
  >(loadOptionsCallback, []);
 
  
  const loadOptions = useCallback(
    async (
      query: string
    ): Promise<OptionsOrGroups<Option, GroupBase<Option>>> => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return new Promise((resolve) => {
        timeoutRef.current = setTimeout(() => {
          resolve(callbackMemoized([query]));
        }, 1000);
      });
    },
    [callbackMemoized]
  );

  return (
    <AsyncSelect isLoading={loading} loadOptions={loadOptions} {...rest} />
  );
};

export const ReactSelect = ({
  classNames,
  className,
  onChange,
  ...rest
}: TReactSelectProps) => {
  const _classNames: ClassNamesConfig<Option, boolean, GroupBase<Option>> = {
    control: () => cn(FORM_CONTROL_CLASSNAME, "py-[9.26px]", className),

    indicatorSeparator: () => "hidden",
    singleValue: (props) => {
      const currentValue = props.getValue();

      return "";
    },
    ...classNames,
  };

  // const getValue = useMemo(() => {
  //   if (rest.isAsync) return rest.value;

  //   if (rest?.isMulti && Array.isArray(rest.value)) {
  //     return rest?.options?.filter(
  //       (option: any) =>
  //         (rest?.value as MultiValue<Option>)?.indexOf(option?.value) > -1
  //     );
  //   }

  //   // if(!rest?.options?.length && rest.isAsync) return rest.value

  //   return rest?.options?.find((option: any) => {
  //     if (typeof rest?.value === "string") {
  //       return option.value === rest?.value;
  //     }
  //     return option.value === rest?.value?.value;
  //   });
  // }, [rest?.options, rest?.value, rest?.isMulti, rest?.isAsync]);

  // const handleChange = (updatedValue: any) => {
  //   if (rest.isAsync)
  //     return onChange?.(updatedValue, {
  //       action: "select-option",
  //       option: { label: "", value: "" },
  //     });

  //   if (rest?.isMulti && Array.isArray(updatedValue)) {
  //     return onChange?.(
  //       updatedValue?.map((val) => {
  //         return typeof val === "string" ? val : val?.value;
  //       }),
  //       {
  //         action: "select-option",
  //         option: { label: "", value: "" },
  //       }
  //     );
  //   }
  //   const newValue =
  //     typeof updatedValue === "string"
  //       ? updatedValue
  //       : (updatedValue as any)?.value;
  //   onChange?.(newValue, {
  //     action: "select-option",
  //     option: { label: "", value: "" },
  //   });
  // };

  if (rest.isCreateable) {
    return (
      <CreatableSelect
        classNames={_classNames}
        {...rest}
        value={rest.value}
        onChange={onChange}
      />
    );
  }
  if (rest.isAsync) {
    return (
      <ReactSelectAsync
        classNames={_classNames}
        {...rest}
        value={rest?.value}
        onChange={onChange}
        closeMenuOnSelect={false} // Keep menu open after selection
        blurInputOnSelect={false} // Prevent input blur after selection
      />
    );
  }

  return (
    <Select
      classNames={_classNames}
      {...rest}
      value={rest.value}
      onChange={onChange}
      closeMenuOnSelect={false} // Keep menu open after selection
      blurInputOnSelect={false} // Prevent input blur after selection
    />
  );
};
