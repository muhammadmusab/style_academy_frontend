"use client";
import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import FormContainer from "@/components/ui/form/Form/form-container";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { InputControlType } from "@/components/ui/form/Form/input-control";
// import useFilter from "@/hooks/useFilter";
const productFilterSchema = yup.object({
  status: yup.string().required("Required"),
  time: yup.string().required("Required"),
});

const ProductFilters = () => {
  //   const router = useRouter();
  //   const pathname = usePathname();
  //   const { createQueryString } = useFilter();
  const searchParams = useSearchParams();
  //   const params = new URLSearchParams(searchParams as any);
  const form = useForm({
    resolver: yupResolver(productFilterSchema),
    defaultValues: {
      status: "",
      time: "",
    },
  });

  const inputs = [
    {
      name: "status",
      formControl: InputControlType.RadioGroup,
      inputcontainerClass: "flex items-center gap-3 ",
      radioGroupClass: "flex items-center gap-3 !mt-4",
      OptionLabelClass: "!mt-0",
      label: {
        className: "absolute top-[12px] left-0",
        text: "Status",
        prepend: true,
      },
      inputProps: {
        className: "bg-transparent",
      },
      colClass: "max-w-[100%] basis-[100%]",
      options: [
        {
          label: "All",
          value: "all",
        },
        {
          label: "On the way",
          value: "on-the-way",
        },
        {
          label: "Delivered",
          value: "delivered",
        },
        {
          label: "Cancelled",
          value: "cancelled",
        },
        {
          label: "Returned",
          value: "returned",
        },
      ],
    },
    {
      name: "time",
      formControl: InputControlType.RadioGroup,
      inputcontainerClass: "flex items-center gap-3 ",
      radioGroupClass: "flex items-center gap-3 !mt-4",
      OptionLabelClass: "!mt-0",
      label: {
        className: "absolute top-[12px] left-0",
        text: "Time",
        prepend: true,
      },
      inputProps: {
        className: "bg-transparent",
      },
      colClass: "max-w-[100%] basis-[100%]",
      options: [
        {
          label: "Any Time",
          value: "any-time",
        },
        {
          label: "Last 30 days",
          value: "thirty-days-old",
        },
        {
          label: "Last 6 months",
          value: "six-months-old",
        },
        {
          label: "Last Year",
          value: "last-year",
        },
      ],
    },
  ];
  const onSubmit = async (formData: FormData) => {
    try {
      // this will trigger validation of form
      const valid = await form.trigger();
      if (!valid) return;

      const data = await actions.createProductFilter(formData);
      console.log(data);
      //   TODO: set the query values on url of the current page so that if user reloads the page previous data should re-fetch the products based on previous values selected
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
    <Form {...form}>
      <form action={onSubmit} className="w-full space-y-6">
        <Row className="justify-between gap-2">
          {inputs.map(({ colClass, ...input }, i) => (
            <Col key={input.name} className={`${colClass} my-[10px]`}>
              <FormContainer control={form.control} input={input} />
            </Col>
          ))}
        </Row>
        <button
          className="bg-black text-white hover:bg-gray-600 px-4 py-2 w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export default ProductFilters;
