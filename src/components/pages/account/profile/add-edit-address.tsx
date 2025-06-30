"use client";
import React from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/modal";
import * as yup from "yup";
import {
  Form,
} from "@/components/ui/form/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as actions from "@/actions";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import FormContainer from "@/components/ui/form/Form/form-container";
const addressSchema = yup.object({
  name: yup.string().required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string(),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  postalCode: yup.string().required("Required"),
  phone: yup.string().required("Required"),
});

const AddEditAddress = ({
  mode,
  triggerButtonClass,
}: {
  mode: "add" | "edit";
  triggerButtonClass?: string;
}) => {
  const form = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: {
      name: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      postalCode: "",
      phone: "",
    },
  });
  const inputs = [
    {
      name: "name",
      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Name",
      },
    },
    {
      name: "address1",

      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Address 1",
      },
    },
    {
      name: "address2",

      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Address 2",
      },
    },
    {
      name: "city",

      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "City",
      },
    },
    {
      name: "country",

      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Country",
      },
    },
    {
      name: "postalCode",

      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Postal Code",
      },
    },
    {
      name: "phone",

      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%] ",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Phone",
      },
    },
  ];
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    let data = null;

    if (mode === "add") {
      data = await actions.addAddress(formData);
    } else {
      data = await actions.editAddress(formData);
    }

    console.log(data);
  };

  type editAddress =
    | "name"
    | "address1"
    | "address2"
    | "city"
    | "country"
    | "postalCode"
    | "phone";
  return (
    <Dialog>
      <DialogTrigger
        className={`mt-[12px] w-full transition-all bg-black font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primary-foreground ${triggerButtonClass}`}
      >
        {mode === "add" ? "Add" : "Edit"}
      </DialogTrigger>
      <DialogContent className="bg-white p-[12px]">
        <h3 className="font-semibold mb-[20px] text-[20px]">
          {mode === "add" ? "Add" : "Edit"} Address
        </h3>
        <Form {...form}>
          <form action={onSubmit} className="space-y-3">
            <Row className="justify-between gap-2">
              {inputs.map(({ colClass, ...input }, i) => (
                <Col key={input.name} className={`${colClass} my-[10px]`}>
                  <FormContainer control={form.control} input={input} />
                </Col>
              ))}
            </Row>
            <button
              type="submit"
              className={`w-full transition-all bg-primary font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primary-foreground `}
            >
              Submit
            </button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditAddress;
