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

const commentSchema = yup.object({
  email: yup.string().email().required("Required"),
  name: yup.string().required("Required"),
  rating: yup.number().required("Required"),
  title: yup.string().required("Required"),
  body: yup.string().required("Required"),
});

const WriteReview = () => {
  const form = useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: undefined,
      title: "",
      body: "",
    },
  });

  const inputs = [
    {
      name: "name",
      formControl: InputControlType.Input,
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "bg-transparent",
        placeholder: "Name",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "email",
      InputcontainerClass: "",
      inputProps: {
        type: "email",
        className: "bg-transparent",
        placeholder: "Email",
      },
      // labelClass: "absolute top-[12px] left-0",
      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%]",
    },

    {
      name: "title",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "bg-transparent",
        placeholder: "Title of the review",
      },
      formControl: InputControlType.Input,
      colClass: "max-w-[100%] basis-[100%]",
      // labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "body",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "bg-transparent",
        placeholder: "Body of the review",
      },
      colClass: "max-w-[100%] basis-[100%]",
      formControl: InputControlType.Textarea,
      // labelClass: "absolute top-[12px] left-0",
    },
    {
      name: "rating",
      inputcontainerClass: "flex justify-between items-center",
      label: {
        text: "Rating",
        prepend: true,
      },
      inputProps: {
        type: "text",
        count: 5,
        activeColor: "#22292F",
        edit: true,
        size: 25,
        isHalf: true,
      },
      formControl: InputControlType.RatingStars,
      colClass: "max-w-[100%] basis-[100%]",
      // title: "Rating",
    },
  ];
  const changeReviewHandler = (value: number) => {
    form.setValue("rating", value);
    return value;
  };
  const onSubmit = async (formData: FormData) => {
    try {
      // this will trigger validation of form
      const valid = await form.trigger();
      if (!valid) return;
      let rating = form.getValues("rating");
      formData.set("rating", rating.toString());
      const data = await actions.createComment(formData);
      console.log(data);
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
          className="transition-all flex items-center gap-3 bg-primary text-white hover:text-white hover:bg-black py-2 px-3"
        >
          Submit Review
        </button>
      </form>
    </Form>
  );
};

export default WriteReview;
