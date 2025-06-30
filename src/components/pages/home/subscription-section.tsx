"use client";
import React from "react";
import { Form } from "@/components/ui/form/form";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import * as yup from "yup";
import { AiOutlineUser } from "react-icons/ai";

const formSchema = yup.object({
  email: yup.string().email().required("Required"),
});

const Subscribe = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    const data = await actions.subscribe(formData);
    console.log(data);
  };
  const inputs = [
    {
      formControl: InputControlType.Input,
      name: "email",
      InputcontainerClass: "",
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineUser className="text-[19px]" />,
        prepend: true,
        // iconClass: "text-[19px]",
      },

      inputProps: {
        type: "email",
        className: "pl-[30px] text-primary rounded-[20px]",
        placeholder: "Enter Email",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
  ];
  return (
    <div className="section-space">
      <div className="bg-primary text-white text-center d-flex justify-center items-center py-[50px] px-[20px] w-[91%] mx-auto ">
        <div className="mb-[50px]">
          <h3 className="text-[30px]">
            Keep Updated & Get Unlimited Discounts
          </h3>
          <small>
            Sign up for Our newsletter to receive updates and exclusive offers
          </small>
        </div>
        <Form {...form}>
          <form action={onSubmit} className="flex items-center w-full">
            <div className="w-[80%] mx-auto ">
              <Row className="justify-between gap-2">
                {inputs.map(({ colClass, ...input }, i) => (
                  <Col key={input.name} className={`${colClass} my-[10px]`}>
                    <FormContainer control={form.control} input={input} />
                  </Col>
                ))}
              </Row>
            </div>
            <button className="transition-all translate-x-[-150px] translate-y-[5px] bg-black font-roboto font-bold mt-0 py-[10px] px-[15px] rounded-[20px] text-white hover:bg-secondary-foreground">
              Subscribe
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Subscribe;
