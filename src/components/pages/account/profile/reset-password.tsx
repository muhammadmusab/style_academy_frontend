import React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as actions from "@/actions";
import { AiOutlineLock } from "react-icons/ai";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import FormContainer from "@/components/ui/form/Form/form-container";
const passwordSchema = yup.object({
  oldPassword: yup.string().required("Required"),
  newPassword: yup.string().required("Required"),
  confirmPassword: yup.string().required("Required"),
});

const ResetPassword = () => {
  const form = useForm({
    resolver: yupResolver(passwordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const inputs = [
    {
      name: "oldPassword",
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineLock className="text-[19px]" />,
        prepend: true,
      },
      inputProps: {
        type: "password",
        className: "pl-[25px]",
        placeholder: "Old Password",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name:'password',
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineLock className="text-[19px]" />,
        prepend: true,
      },
      inputProps: {
        type: "password",
        className: "pl-[25px]",
        placeholder: "New Password",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "confirmPassword",
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineLock className="text-[19px]" />,
        prepend: true,
      },
      inputProps: {
        type: "password",
        className: "pl-[25px]",
        placeholder: "Confirm Password",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
  ];
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    const data = await actions.resetPassword(formData);
    console.log(data);
  };
  return (
    <Dialog>
      <DialogTrigger className="mt-[12px] w-full transition-all bg-secondary-foreground font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-secondary-foreground">
        Change Password
      </DialogTrigger>
      <DialogContent className="bg-white p-[12px]">
        <h3 className="font-semibold mb-[20px] text-[20px]">Change Password</h3>
        <Form {...form}>
          <form action={onSubmit} className="space-y-8">
            <Row className="justify-between gap-2">
              {inputs.map(({ colClass, ...input }, i) => (
                <Col key={input.name} className={`${colClass} my-[10px]`}>
                  <FormContainer control={form.control} input={input} />
                </Col>
              ))}
            </Row>
            <button className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3">
              Change
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ResetPassword;
