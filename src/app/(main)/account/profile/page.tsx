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

const profileSchema = yup.object({
  name: yup.string().required("Required"),
  mobile: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  gender: yup.string().required("Required").oneOf(["male", "female"]),
  dob: yup.string().required("Required"),
  // location: yup.string().required('Required'),
});

const Profile = () => {
  const form = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      gender: undefined,
      dob: "",
      // location: "",
    },
  });

  const inputs = [
    {
      formControl: InputControlType.Input,
      name: "name",
      InputcontainerClass: "",
      // label: {
      //   className: "absolute top-[12px] left-0",
      //   icon: <AiOutlineUser className="text-[19px]" />,
      //   prepend: true,
      //   iconClass: "text-[19px]",
      // },

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
      name: "mobile",
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
      InputcontainerClass: "",
      label: {
        text: "Date of birth",
        prepend: true,
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
      // this will trigger validation of form
      const valid = await form.trigger();
      if (!valid) return;
      let dob = form.getValues("dob");
      formData.set("dob", dob);

      const data = await actions.updateProfile(formData);
      console.log("data-------", data);
      // we will return error if there is any to show toast
      // if ('error' in data) {
      //   return toast.error(data?.error)
      // }
    } catch (error) {
      console.log(error);
      // return toast.error(error.message)
    }
  };
  return (
    <div className="w-[60%] md:w-full border border-[#ccc] p-4">
      <Form {...form}>
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

export default Profile;
