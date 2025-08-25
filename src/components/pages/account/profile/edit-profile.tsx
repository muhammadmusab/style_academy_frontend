"use client";

import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as actions from "@/actions";
import ResetPassword from "@/components/pages/account/profile/reset-password";
import { useToast } from "@/hooks/useToast";
import { Toaster } from "sonner";

const profileSchema = yup.object({
  name: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  gender: yup.string().required("Required").oneOf(["male", "female"]),
  dob: yup.string().required("Required"),
  // location: yup.string().required('Required'),
});

interface Props {
  user: {
    email: string;
    Customer: {
      name?: string;
      phone?: string;
      dob?: string;
      gender?: string;
    };
  };
}
const EditProfile = ({ user }: Props) => {
  const { errorToast, successToast } = useToast();
  const form = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user.Customer.name || "",
      gender: user.Customer?.gender || "",
      dob: user.Customer?.dob || "",
      phone: user.Customer?.phone || "",
      email: user.email || "",
    },
  });

  const inputs = [
    {
      formControl: InputControlType.Input,
      name: "name",
      InputcontainerClass: "",

      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Name",
      },
      colClass: "max-w-[49%] basis-[49%] md:max-w-[100%] md:flex-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "email",
      InputcontainerClass: "",
      inputProps: {
        type: "email",
        className: "pl-[25px]",
        placeholder: "Enter Email",
        disabled: true,
      },
      colClass: "max-w-[49%] basis-[49%] md:max-w-[100%] md:flex-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "phone",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Mobile Number",
      },
      colClass: "max-w-[49%] basis-[49%] md:max-w-[100%] md:flex-[100%]",
    },
    {
      formControl: InputControlType.RadioGroup,
      name: "gender",
      inputcontainerClass: "flex items-center gap-3 ",
      radioGroupClass: "flex items-center gap-3 !mt-4",
      OptionLabelClass: "!mt-0",
      label: {
        className: "",
        text: "Select Gender",
        prepend: true,
      },
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.DatePicker,
      name: "dob",
      InputcontainerClass: "block",
      label: {
        text: "Date of birth",
        prepend: true,
        className: "block",
      },

      inputProps: {
        className: "pl-[25px]",
        placeholder: "Select Date of birth",
      },
      colClass: "max-w-[100%] basis-[100%] ",
    },
  ];

  const onSubmit = async (formData: FormData) => {
    try {
      const valid = await form.trigger();
      if (!valid) return;
      // have to set dob manually because of datepicker
      formData.set("dob", form.getValues("dob"));
      const res = await actions.updateProfile(formData);
      if (res && res.success) {
        successToast("Profile Updated Successfully");
      } else if (!res.success) {
        errorToast(res.data);
      }
    } catch (error: any) {
      errorToast(error.message);
    }
  };
  return (
    <div className="w-[60%] md:w-full border border-[#ccc] p-4">
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
          <button
            type="submit"
            className="w-full transition-all bg-primary font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primary-foreground"
          >
            Submit
          </button>
        </form>
      </Form>
      <ResetPassword />
    </div>
  );
};

export default EditProfile;
