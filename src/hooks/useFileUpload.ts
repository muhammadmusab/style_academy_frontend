import { uploadAction } from "@/actions/upload-action";
import { useEffect, useState } from "react";
import { useToast } from "./useToast";
import { FileRejection } from "react-dropzone";

export type TMedia = {
  url: string;
  width: number;
  height: number;
  alt?: string;
  id: string;
  size: number;
  mime: string;
  name: string;
};

export type Status = "idle" | "pending" | "failed" | "success";

type TDropFiles = {
  remoteUrl?: string;
  initialFiles?: TMedia[];
  type?: "single" | "multiple";
  mediaFieldName?: string;
};

export const useFileUpload = (config: TDropFiles) => {
  const {
    remoteUrl = "",
    initialFiles = [],
    type = "multiple",
    mediaFieldName = "media", // name on backend
  } = config ?? {};

  const [previewFiles, setPreviewFiles] = useState<TMedia[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<
    (TMedia & { status: Status; errors: string[] })[]
  >([]);
  const [status, setStatus] = useState<Status>("idle");
  const { errorToast } = useToast();

  useEffect(() => {
    return () => {
      previewFiles?.forEach((file) => URL.revokeObjectURL(file.url));
    };
  }, [previewFiles]);

  const handleUpload = async (
    files: File[],
    rejectedFiles: FileRejection[]
  ) => {
    setStatus("pending");

    // Handling Rejected FIles
    // We get rejectedFiles as second Argument
    const newRejectedFiles = rejectedFiles.map((rejectedfile, index) => {
      const { file, errors } = rejectedfile;
      return {
        name: file.name,
        size: file.size,
        width: 0,
        height: 0,
        url: URL.createObjectURL(file),
        mime: file.type,
        id: (index + 1).toString(),
        errors: errors.map((error) => error.message),
        status: "failed" as const,
      };
    });

    setRejectedFiles(newRejectedFiles);

    const formData = new FormData();

    const newFiles: TMedia[] = files.map((file, index) => {
      // appending data to form to send it to backend
      formData.append(mediaFieldName, file);
      // returning files as array of objects for setting it to preview
      return {
        name: file.name,
        size: file.size,
        width: 0,
        height: 0,
        url: URL.createObjectURL(file),
        mime: file.type,
        id: (index + 1 + previewFiles.length).toString(),
        status: "pending" as const,
      };
    });
    if (type === "single") {
      setPreviewFiles([newFiles[0]]);
    } else {
      // we have to preserve the previous uploaded files as well.
      setPreviewFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }

    try {
      // uncomment when using it with real server
      //   const data = await uploadAction(remoteUrl, formData);
      const data = await uploadAction(remoteUrl, newFiles);

      const newUploadedFiles = data?.map((file: any) => ({
        ...file,
        status: "success",
      }));
      if (type === "single") {
        setPreviewFiles([newUploadedFiles[0]]);
      } else {
        setPreviewFiles((prevFiles) => {
          const oldFiles = [...prevFiles];
          //The newFiles are local placeholders, like files selected by the user.
          //The newUploadedFiles come from the server (via uploadAction) and are confirmed files
          //Thus, we Remove newFiles from prevFiles and Replace them with newUploadedFiles from the server.
          oldFiles.splice(prevFiles.length - newFiles.length);

          return oldFiles.concat(newUploadedFiles);
        });
      }

      setStatus("success");
    } catch (error: any) {
      const failedFiles = newFiles.map((file) => ({
        ...file,
        status: "failed" as const,
      }));
      if (type === "single") {
        setPreviewFiles([failedFiles[0]]);
      } else {
        setPreviewFiles((prevFiles) => {
          const oldFiles = [...prevFiles];
          //The newFiles are local placeholders, like files selected by the user.
          //The newUploadedFiles come from the server (via uploadAction) and are confirmed files
          //Thus, we Remove newFiles from prevFiles and Replace them with newUploadedFiles from the server.
          oldFiles.splice(prevFiles.length - newFiles.length);
          return oldFiles.concat(failedFiles);
        });
      }

      errorToast(error.message);
    }
  };

  const handleDelete = (
    id: string,
    type: "accepted-file" | "rejected-file" = "accepted-file"
  ) => {

    setStatus("pending");
    
    if (type === "rejected-file") {
      return setRejectedFiles((prevFiles) =>
        prevFiles.filter((file) => file.id !== id)
      );
    }

    const deletedFileIdx = previewFiles.findIndex((file) => file.id === id);

    if (deletedFileIdx < 0) {
      setStatus("idle");
      return;
    }

    setPreviewFiles((prevFiles) => {
      const files = prevFiles.filter((file) => file.id !== id);
      return files;
    });

    setStatus("success");
  };
  const handleRetry = (id: string) => {
    const retriedFileIdx = previewFiles.findIndex((file) => file.id === id);
    if (retriedFileIdx < 0) return;

    const retriedFile = {
      ...previewFiles[retriedFileIdx],
      status: "pending" as Status,
    };

    setPreviewFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[retriedFileIdx] = retriedFile;
      return updatedFiles;
    });

    setTimeout(() => {
      setPreviewFiles((prevFiles) => {
        const updatedFiles = [...prevFiles];
        retriedFile.status = "success" as Status;
        updatedFiles[retriedFileIdx] = retriedFile;
        return updatedFiles;
      });
      setStatus("success");
    }, 1500);
  };

  return {
    handleUpload,
    rejectedFiles,
    handleDelete,
    handleRetry,
    previewFiles,
    status,
  };
};
