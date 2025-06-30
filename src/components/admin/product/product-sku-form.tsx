"use client";

import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as actions from "@/actions";
import { useParams } from "next/navigation";
import { ProductType } from "@/interface/types";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { listCategories } from "@/services/requests/category";
import FormContainer from "@/components/ui/form/Form/form-container";
import { Col } from "@/components/grid/Col";
import { Row } from "@/components/grid/Row";
import { Fragment } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
const formSchema = yup.object({
  //   sku: yup
  //     .array(
  //       yup.object({
  //         label: yup.string().required(),
  //         value: yup.string().required(),
  //       })
  //     )
  //   .required("Required"),
  // colors: yup
  //   .array(
  //     yup.object({
  //       label: yup.string().required(),
  //       value: yup.string().required(),
  //     })
  //   )
  //   .required("Required"),
  // images: yup
  //   .array(
  //     yup.object({
  //       url: yup.string().required(),
  //       width: yup.string().required(),
  //       height: yup.string().required(),
  //       cover: yup.boolean().required(),
  //     })
  //   )
  //   .required("Required"),
});

const ProductSkuForm = ({ uuid }: { uuid: string }) => {
  // const params = useParams();

  // const productId = params.productId?.toString();
  const {
    handleUpload,
    rejectedFiles,
    handleDelete,
    handleRetry,
    previewFiles,
    status,
  } = useFileUpload({ remoteUrl: "/", type: "multiple" });
  const form = useForm({
    resolver: yupResolver(formSchema),

    defaultValues: async () => {
      if (!uuid || uuid === "new") {
        return { title: "" };
      }
      const res = await fetch(`/api/product/sku/${uuid}`);
      const data: ProductType = await res.json();
      console.log(data, "DATA");
      const _data = data ? { ...data } : { title: "" };

      return _data ?? { title: "" };
    },
  });

  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    // const data = await actions.login(formData);
    console.log(form.getValues());
  };

  const inputs: any = [
    {
      formControl: InputControlType.Input,
      name: "sku",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "",
        placeholder: "Sku",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "quantity",
      InputcontainerClass: "",
      inputProps: {
        type: "number",
        className: "",
        placeholder: "Quantity",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "oldPrice",
      InputcontainerClass: "",
      inputProps: {
        type: "number",
        className: "",
        placeholder: "Old Price",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "currentPrice",
      InputcontainerClass: "",
      inputProps: {
        type: "number",
        className: "",
        placeholder: "Current Price",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },

    {
      formControl: InputControlType.FileUpload,
      previewPrepend: (
        <div className="text-center">
          <p className="text-light">
            Maximum allowed Size for each file is 1 MB
          </p>
          <p className="text-light">Only Images and Videos are allowed</p>
        </div>
      ),
      accept: {
        // prop accepted by dropzone to allow specific files only
        "image/png": [".png"],
        "image/jpg": [".jpg"],
        "image/jpeg": [".jpeg"],
      },
      maxSize: 1024 * 1000,
      onDrop: handleUpload,
      rejectedFiles: rejectedFiles,
      onDelete: handleDelete,
      onRetry: handleRetry,
      files: previewFiles,
      name: "media",
      status,
      InputcontainerClass: "w-[100%]",
      label: {
        text: "Media",
        prepend: true,
      },

      inputProps: {
        // type: "text",
        // placeholder: "Enter Label",
        className: "pl-0 w-[100%]",
      },
      colClass: "max-w-[49%] basis-[49%] max-w-[100%] flex-[100%]",
    },
  ];
  return (
    <Fragment>
      <h2 className="font-bold mb-[10px]">
        {!uuid || uuid === "new" ? "Add Sku" : "Update Sku"}
      </h2>
      <Form {...form}>
        <form action={onSubmit} className="space-y-8">
          <Row className="justify-between gap-2">
            {inputs.map(({ colClass, ...input }: any) => (
              <Col key={input.name} className={`${colClass} my-[10px]`}>
                <FormContainer control={form.control} input={input} />
              </Col>
            ))}
          </Row>
          <button className="transition-all flex text-center justify-center items-center gap-3 bg-primary text-white hover:text-white hover:bg-black w-[150px] py-2 px-3">
            Add Sku
          </button>
        </form>
      </Form>
    </Fragment>
  );
};

export default ProductSkuForm;
