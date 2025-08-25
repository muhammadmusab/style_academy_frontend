"use client";
import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import * as actions from "@/actions";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";
import Image from "next/image";
import { Fragment } from "react";
import { redirect,useRouter } from "next/navigation";
const formSchema = yup.object({
  email: yup.string().email().required("Required"),
  password: yup.string().min(6).required("Required"),
});

const Login = () => {
  const router=useRouter()
  const { errorToast, successToast } = useToast();

  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: FormData) => {
    let res;

    try {
      const valid = await form.trigger();
      if (!valid) return;
      res = await actions.login(formData, { role: "admin" });

      if (res && res.success) {
        successToast("Logged in Successfully");
        router.push('/admin/dashboard')
      } else if (!res.success) {
        errorToast(res.data);
      }
    } catch (error: any) {
      errorToast(error.message);
    }
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
        className: "pl-[25px]",
        placeholder: "Enter Email",
      },
      colClass: "md:max-w-[100%] md:flex-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "password",
      label: {
        className: "absolute top-[12px] left-0",
        icon: <AiOutlineLock className="text-[19px]" />,
        prepend: true,
      },
      inputProps: {
        type: "password",
        className: "pl-[25px]",
        placeholder: "Enter Password",
      },
      colClass: "max-w-[100%] flex-[100%]",
    },
  ];
  return (
    <Fragment>
      <div className="text-center w-full flex items-center justify-center mt-[20px]">
        <Image
          src={"/logo2.png"}
          width={200}
          height={100}
          alt="Logo"
          className="mt-2"
        />
      </div>
      <div className="h-[90%] flex items-center justify-center">
        <div>
          <h1 className="text-2xl fw-bold mb-[20px] text-center text-primary">Admin Login</h1>

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
                Log In
              </button>
            </form>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
