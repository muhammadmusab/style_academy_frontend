export const sizeVariants = [
  {
    name: "XS",
    label: "extra-small",
    value: "XS",
    items: 45,
    selected: false,
    category: "Size",
  },
  {
    name: "S",
    value: "S",
    label: "small",
    items: 49,
    selected: false,
    category: "Size",
  },
  {
    name: "M",
    value: "M",
    label: "medium",
    items: 35,
    selected: false,
    category: "Size",
  },
  {
    name: "L",
    value: "L",
    label: "large",
    items: 30,
    selected: false,
    category: "Size",
  },
  {
    name: "XL",
    value: "XL",
    label: "extra-large",
    items: 22,
    selected: false,
    category: "Size",
  },
];

export const sizes = [
  { label: "XS", value: "xs" },
  { label: "SM", value: "sm" },
  { label: "LG", value: "lg" },
];

export type sizeVariantType = {
  name: string;
  label: string;
  value: string;
  items: number;
  selected: boolean;
  category: string;
};
