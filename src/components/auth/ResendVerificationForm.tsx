"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineUser } from "react-icons/ai";
import { Form } from "@/components/ui/form/form";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import * as actions from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";
const formSchema = yup.object({
  email: yup.string().email().required("Required"),
});

export const ResendVerificationForm = () => {
  const { errorToast, successToast } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleSubmit = async (data: FormData) => {
    try {
      const valid = await form.trigger();
      if (!valid) return;
      await actions.ResendVerificationEmail(data, {
        role: "customer",
      });

      successToast(
        "A new verification email has been sent, please check your mail."
      );
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  const formControls = [
    {
      formControl: InputControlType.Input,
      name: "email",
      InputcontainerClass: "",
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineUser className="text-[19px]" />,
        prepend: true,
      },

      inputProps: {
        type: "email",
        className: "pl-[25px]",
        placeholder: "Enter Email",
      },
      colClass: "md:max-w-[100%] md:flex-[100%]",
    },
  ];
  return (
    <Form {...form}>
      <Toaster position="top-right" />
      <form action={handleSubmit} className="space-y-8">
        <Row className="justify-between gap-2">
          {formControls.map(({ colClass, ...input }, i) => (
            <Col key={input.name} className={`${colClass} my-[10px]`}>
              <FormContainer control={form.control} input={input} />
            </Col>
          ))}
        </Row>
        <button className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3">
          Resend Verification Email
        </button>
      </form>
    </Form>
  );
};
