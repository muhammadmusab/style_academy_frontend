"use client";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Form } from "@/components/ui/form/form";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import React, { Fragment } from "react";

interface Props {
  sizes: { label: string; value: string }[];
  colors: { label: string; value: string }[];
}

const formSchema = yup.object({
  size: yup.string().required("Select Size"),
  color: yup.string().required("Select Color"),
  quantity: yup.string().required("Quantity Required"),
});
const ProductControls = ({ sizes, colors }: Props) => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      size: sizes[0].value,
      color: colors[0].value,
      quantity: "1",
    },
  });
  const onSubmit = async (formData: FormData) => {
    console.log(formData);
    const valid = await form.trigger();
    if (!valid) return;
    const data = await actions.AddToCart(formData);
    console.log(data);
  };
  const inputs = [
    {
      name: "size",
      options: sizes,
      inputProps: {
        placeholder: "Select Size",
      },
      formControl: InputControlType.ReactSelect,
      inputcontainerClass: "flex items-center gap-3 ",
      OptionLabelClass: "!mt-0",
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "color",
      formControl: InputControlType.RadioGroup,
      inputcontainerClass: "flex items-center gap-3 ",
      radioGroupClass: "flex items-center gap-3 !mt-4",
      OptionLabelClass: "!mt-0",
      inputClass: "bg-transparent",
      options: colors,
      // defaultValue: colors[0].value,
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "quantity",
      inputClass: "bg-transparent",
      formControl: InputControlType.Input,
      inputProps: {
        type: "number",
        className: "bg-transparent",
        // placeholder: "Name",
      },
    },
  ];
  return (
    <Fragment>
      <Form {...form}>
        <form action={onSubmit} className="max-w-[25%] mt-8">
          <div className="mx-auto ">
            <Row className="justify-between gap-2">
              {inputs.map(({ colClass, ...input }, i) => (
                <Col key={input.name} className={`${colClass} my-[10px]`}>
                  <FormContainer control={form.control} input={input} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="mt-[50px] flex items-center gap-2 w-full">
            <button
              type="submit"
              className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3"
            >
              <span>Add to cart</span>
              <FaShoppingCart size={30} />
            </button>
            <button
              type="button"
              className=" p-3 transition-all text-white hover:text-primary rounded-full bg-primary hover:bg-black hover:text-white"
            >
              <FaRegHeart size={30} />
            </button>
          </div>
        </form>
      </Form>
    </Fragment>
  );
};

export default ProductControls;
