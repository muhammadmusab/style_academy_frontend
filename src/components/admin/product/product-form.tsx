"use client";

import * as yup from "yup";
import { Form } from "@/components/ui/form/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import * as actions from "@/actions";
// import { useParams } from "next/navigation";
import { ProductType } from "@/interface/types";
import { InputControlType } from "@/components/ui/form/Form/input-control";
import { listCategories } from "@/services/requests/category";
import FormContainer from "@/components/ui/form/Form/form-container";
import { Col } from "@/components/grid/Col";
import { Row } from "@/components/grid/Row";
import { Fragment } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
// import { listColors, listSizes } from "@/services/requests/attribute";
// import { useFormState } from "react-dom";
const formSchema = yup.object({
  title: yup.string(),
  brand: yup.string(),
  status: yup.string(),
  description: yup.string(),
  category: yup.string(),
  details: yup.string(),
  sku: yup.string(),
  quantity: yup.number(),
  currentPrice: yup.number(),
  oldPrice: yup.number(),
  available: yup.boolean(),
  hasVariants: yup.boolean(),
  media: yup
    .array(
      yup.object({
        url: yup.string().required(),
        width: yup.string().required(),
        height: yup.string().required(),
        cover: yup.boolean().required(),
      })
    ),
});

const ProductForm = ({ uuid }: { uuid: string }) => {
  // const params = useParams();

  // const productId = params.productId?.toString();
  const form = useForm({
    //@ts-expect-error
    resolver: yupResolver(formSchema),

    defaultValues: async () => {
      if (!uuid || uuid === "new") {
        return { title: "" };
      }
      const res = await fetch(`/api/product/${uuid}`);
      const data: ProductType = await res.json();
      console.log(data, "DATA");
      const _data = data ? { ...data } : { title: "" };

      return _data ?? { title: "" };
    },
  });
  const hasVariants = form.watch("hasVariants");
  const onSubmit = async (formData: FormData) => {
    const valid = await form.trigger();
    if (!valid) return;
    // const data = await actions.login(formData);
    console.log(form.getValues());
  };

  const {
    handleUpload,
    rejectedFiles,
    handleDelete,
    handleRetry,
    previewFiles,
    status,
  } = useFileUpload({ remoteUrl: "/", type: "multiple" });

  let inputs: Record<string, any>[] = [
    {
      formControl: InputControlType.Input,
      name: "title",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "",
        placeholder: "Title",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.ReactSelect,
      name: "brand",
      loadOptionsCallback: async (query: string) => {
        try {
          const data = await listCategories({ name: query });
          return data?.map((brand: any) => {
            return {
              uuid: brand.uuid,
              label: brand?.label,
              value: brand?.value,
            };
          });
        } catch (error) {}
      },
      isAsync: true,
      isMulti: true,
      inputProps: {
        placeholder: "Select Brand",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "status",
      InputcontainerClass: "",
      inputProps: {
        type: "text",
        className: "",
        placeholder: "Status",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Textarea,
      name: "description",
      inputProps: {
        style: {
          resize: "none",
        },
        placeholder: "Product Description",
        className: "",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.ReactSelect,
      name: "category",
      loadOptionsCallback: async (query: string) => {
        try {
          const data = await listCategories({ name: query });
          return data?.map((category: any) => {
            return {
              uuid: category.uuid,
              label: category?.label,
              value: category?.value,
            };
          });
        } catch (error) {}
      },
      isAsync: true,
      isMulti: true,
      inputProps: {
        placeholder: "Select Category",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      name: "details",
      formControl: InputControlType.RichTextEditor,
      inputcontainerClass: "w-full",
      label: {
        prepend: true,
        text: "Details",
        className: "block",
      },
      inputProps: {
        // style: {
        //   resize: "none",
        // },
        placeholder: "Product Details...",
        className: "",
      },
      colClass: "max-w-[100%] basis-[100%]",
    },
    {
      formControl: InputControlType.Input,
      name: "sku",
      InputcontainerClass: "justify-between",
      inputProps: {
        type: "text",
        className: "",
        placeholder: "Sku",
        disabled: hasVariants ? true : false,
      },
      colClass: "max-w-[48%] basis-[48%]",
    },
    {
      formControl: InputControlType.Input,
      name: "quantity",
      InputcontainerClass: "justify-between",
      inputProps: {
        type: "number",
        className: "",
        placeholder: "Quantity",
        disabled: hasVariants ? true : false,
      },
      colClass: "max-w-[48%] basis-[48%]",
    },
    {
      formControl: InputControlType.Input,
      name: "oldPrice",

      InputcontainerClass: "justify-between",
      inputProps: {
        type: "number",
        className: "",
        placeholder: "Old Price",
        disabled: hasVariants ? true : false,
      },
      colClass: "max-w-[48%] basis-[48%]",
    },
    {
      formControl: InputControlType.Input,
      name: "currentPrice",
      InputcontainerClass: "justify-between",
      inputProps: {
        type: "number",
        className: "",
        placeholder: "Current Price",
        disabled: hasVariants ? true : false,
      },
      colClass: "max-w-[48%] basis-[48%]",
    },
    // media
    // {
    //   formControl: InputControlType.FileUpload,
    //   previewPrepend: (
    //     <div className="text-center">
    //       <p className="text-light">
    //         Maximum allowed Size for each file is 1 MB
    //       </p>
    //       <p className="text-light">Only Images and Videos are allowed</p>
    //     </div>
    //   ),
    //   accept: {
    //     // prop accepted by dropzone to allow specific files only
    //     "image/png": [".png"],
    //     "image/jpg": [".jpg"],
    //     "image/jpeg": [".jpeg"],
    //   },
    //   maxSize: 1024 * 1000,
    //   onDrop: handleUpload,
    //   rejectedFiles: rejectedFiles,
    //   onDelete: handleDelete,
    //   onRetry: handleRetry,
    //   files: previewFiles,
    //   name: "media",
    //   status,
    //   InputcontainerClass: "w-[100%]",
    //   label: {
    //     text: "Media",
    //     prepend: true,
    //   },

    //   inputProps: {
    //     // type: "text",
    //     // placeholder: "Enter Label",
    //     className: "pl-0 w-[100%]",
    //   },
    //   colClass: "max-w-[49%] basis-[49%] max-w-[100%] flex-[100%]",
    // },
    {
      name: "available",
      label: {
        prepend: true,
        text: "Available",
        className: "block",
      },
      formControl: InputControlType.Switch,
      colClass: "max-w-[100%] basis-[100%]",
    },

    {
      name: "hasVariants",
      label: {
        prepend: true,
        text: "Product has variant",
        className: "block",
      },
      formControl: InputControlType.Switch,
      colClass: "max-w-[100%] basis-[100%]",
    },
  ];

  if (hasVariants) {
    inputs = inputs.filter((item) => item.name !== "media");
  } else {
    inputs.push({
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
    });
  }
  return (
    <div className="w-100 h-100">
      <h2 className="font-bold mb-[10px]">
        {!uuid || uuid === "new" ? "Add Product" : "Update Product"}
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
            Add
          </button>
        </form>
      </Form>
    </div>
  );
};

export default ProductForm;
