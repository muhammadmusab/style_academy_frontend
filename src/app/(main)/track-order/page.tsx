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
const Page = () => {
  const trackOrderSchema = yup.object({
    orderId: yup.string().required("Required"),
  });
  const form = useForm({
    resolver: yupResolver(trackOrderSchema),
    defaultValues: {
      orderId: "",
    },
  });
  const inputs = [
    {
      formControl: InputControlType.Input,
      name: "orderId",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "pl-[25px]",
        placeholder: "Order Id",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
  ];
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    let data = null;

    await actions.trackOrder(formData);

    console.log(data);
  };
  return (
    <div className="h-[50vh] flex items-center justify-center flex-col">
      <h1 className="font-bold text-[40px] mb-10">Track Order</h1>
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
      {/* add status of order later */}
    </div>
  );
};

export default Page;
