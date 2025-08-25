import React, { Fragment, useCallback, useEffect } from "react";
import { useDropzone, DropzoneProps, DropzoneOptions } from "react-dropzone";
import InputContainer from "./Form/input-container";
import { Description, Label } from "@/types/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormControl } from "./form";
import { FilesPreview } from "../files-preview";
import { cn } from "@/lib/utils";
import { Status, TMedia } from "@/hooks/useFileUpload";
import { TFilesPreviewProps } from "@/components/ui/files-preview";
import { Spacing } from "../spacing";
export type TDropzoneProps = TFilesPreviewProps &
  DropzoneProps & {
    field: ControllerRenderProps<FieldValues, string>;
    label: Label;
    inputcontainerClass?: string;
    inputProps?: Record<string, any>;
    description?: Description;
    dndText: string;
    previewPrepend?: React.ReactNode;
    previewAppend?: React.ReactNode;
    focusedClass?: string;
    dragAcceptedClass?: string;
    hasError?: boolean;
    files: TMedia[];
    rejectedFiles: TMedia[];
    showPreview: boolean;
    status: Status;
  };
export const Dropzone = ({
  field,
  description,
  label,
  inputcontainerClass,
  inputProps,
  dndText = "Drop some files",
  previewPrepend,
  previewAppend,
  onDrop, // we will run this function outside that is why we are passing it as a prop
  focusedClass,
  dragAcceptedClass,
  hasError,
  onDropRejected,
  onDelete,
  onRetry,
  files,
  rejectedFiles,
  showPreview = true,
  status,

  ...dropZoneProps
}: TDropzoneProps) => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    onDrop,
    onDropRejected,
    disabled: inputProps?.disabled,

    // maxFiles, // you can pass prop a number of files (limit) you want to be uploaded 2,3 etc
    ...dropZoneProps,
  });
  useEffect(() => {
    if (status === "success") {
      field.onChange(files.filter((file) => file.status === "success"));
    }
  }, [files, field, status]);
  return (
    <InputContainer
      label={label}
      description={description}
      containerClass={inputcontainerClass}
      showMessage={true}
    >
      <div
        {...getRootProps({
          className: cn(
            "p-4",
            "border-dashed",
            "border-2",
            "border-gray-400",
            "rounded-input",
            "bg-white",
            "text-gray-600",
            "outline-none",
            "w-full",
            isFocused ? focusedClass : "",
            isDragAccept ? dragAcceptedClass : "",
            hasError || isDragReject
              ? "text-destructive !border-destructive"
              : "",
            inputProps?.disabled
              ? "bg-light3 border-gray-200 text-gray-300"
              : ""
          ),
        })}
      >
        <div className="flex flex-col justify-center items-center text-center">
          <FormControl>
            <input
              name={field.name}
              onChange={field.onChange}
              {...getInputProps()}
            />
          </FormControl>
          <div className="mb-3">{dndText && <p>{dndText}</p>}</div>
        </div>
        {Boolean(showPreview) && (
          <Spacing className="mt-3" level={4}>
            {Boolean(previewPrepend) && previewPrepend}
            <FilesPreview
              rejectedFiles={rejectedFiles}
              onRetry={onRetry}
              onDelete={onDelete}
              files={files}
            />
            {Boolean(previewAppend) && previewAppend}
          </Spacing>
        )}
      </div>
    </InputContainer>
  );
};
