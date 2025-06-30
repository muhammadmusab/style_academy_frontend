export type InputDefaultProps = {
    label: {
      show: boolean;
      class?: string;
      text?: string;
      icon?: any;
      prepend?: boolean;
      iconClass?: string;
    };
    showMessage?: boolean;
  };
  
  export type Label = {
    className?: string;
    text?: string;
    icon?: any;
    prepend?: boolean;
    iconClass?: string;
  };
  export type Description = {
    className?: string;
    text: string;
    prepend?: boolean;
  } | null;
  
  export type Option = {
    label: string;
    value: string | number;
    class?:string;
    containerClass?:string;
    id?:string;
  };
  
  export type Options=Option[]
  