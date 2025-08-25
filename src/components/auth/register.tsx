"use client";

import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import * as actions from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";
import { redirect } from "next/navigation";
const formSchema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup.string().min(6).required("Required"),
  repeatPassword: yup
    .string()
    .required("Repeat Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register = () => {
  const { errorToast, successToast } = useToast();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  // type formSchemaType = yup.InferType<typeof formSchema>;

  const onSubmit = async (formData: FormData) => {
    let res;
    let success = false;
    try {
      const isValid = await form.trigger();
      if (!isValid) return;
      res = await actions.register(formData);
      if (
        res.success &&
        res.data &&
        res.data.auth &&
        res.data.auth.status === "activation_pending"
      ) {
        success = true;
        successToast("Please check your email inbox to complete registration");
      } else if (!res.success) {
        errorToast(res.data);
      }
    } catch (error: any) {
      errorToast(error.message);
    }
    if (success) {
      redirect("/");
    }
  };
  const inputs = [
    {
      formControl: InputControlType.Input,
      name: "email",
      InputcontainerClass: "",
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineMail className="text-[19px]" />,
        prepend: true,
        // iconClass: "text-[19px]",
      },

      inputProps: {
        type: "email",
        className: "pl-[25px]",
        placeholder: "Email",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "password",
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineLock className="text-[19px]" />,
        prepend: true,
      },
      inputProps: {
        type: "password",
        className: "pl-[25px]",
        placeholder: "Password",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "repeatPassword",
      formControl: InputControlType.Input,
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineLock className="text-[19px]" />,
        prepend: true,
      },
      inputProps: {
        type: "password",
        className: "pl-[25px]",
        placeholder: "Repeat Password",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
  ];
  return (
    <Form {...form}>
      <Toaster position="top-right" />
      <form action={onSubmit} className="space-y-8">
        <Row className="justify-between gap-2">
          {inputs.map(({ colClass, ...input }, i) => (
            <Col key={input.name} className={`${colClass} my-[10px]`}>
              <FormContainer control={form.control} input={input} />
            </Col>
          ))}
        </Row>
        <button className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3">
          Register
        </button>
      </form>
    </Form>
  );
};

export default Register;
