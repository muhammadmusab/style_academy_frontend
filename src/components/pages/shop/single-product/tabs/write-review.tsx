"use client";
import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import { Row } from "@/components/grid/Row";
import { Col } from "@/components/grid/Col";
import FormContainer from "@/components/ui/form/Form/form-container";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
//@ts-ignore
// import { useFormState } from "react-dom";
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
      InputcontainerClass: "",
      label: {
        className: "absolute top-[12px] left-0",
        text: "Rating",
        prepend: true,
      },
      inputProps: {
        type: "text",
        className: "bg-transparent",
        placeholder: "Body of the review",
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
          className="transition-all bg-primary font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primaryhover"
        >
          Submit Review
        </button>
      </form>
    </Form>
  );
};

export default WriteReview;
