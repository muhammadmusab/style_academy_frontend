import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import InputContainer from "@/components/ui/form/Form/input-container";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { Description, Label } from "@/types/form";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { Fragment } from "react";
import RichTextEditorMenuBar from "./rich-text-menu";
import { Heading, HeadingOptions } from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/core";
type RichTextEditorProps = {
  content: string;
  onChange: (content: string) => void;
};
type Props = {
  field: ControllerRenderProps<FieldValues, string>;
  label: Label;
  inputcontainerClass?: string;
  inputProps?: Record<string, any>;
  description?: Description;
  name: string;
};
let className =
  "flex !min-h-[100px] !w-full !border-0  !border-input !bg-transparent !px-3 !py-2 !text-sm !shadow-sm !disabled:cursor-not-allowed !disabled:opacity-50 !rounded-none !border-b !border-black !focus:border-black !focus-visible:outline-0 !focus-visible:ring-0 !focus:ring-0 !focus-visible:ring-ring !focus-visible:ring-offset-0 !focus:outline-0  !focus-visible:shadow-none !placeholder:text-muted-foreground !placeholder:ease-in-out !placeholder:duration-1000 !placeholder:transition-all !focus:placeholder:translate-x-[50px] !focus:placeholder:opacity-0 !placeholder:w-100 !placeholder:overflow-hidden !overflow-x-hidden";
const RichTextEditor = ({
  field,
  label,
  description,
  inputProps,
  inputcontainerClass,
}: Props & RichTextEditorProps) => {
  const CustomHeading = Heading.extend({
    renderHTML({ node, HTMLAttributes }) {
      const levelClass: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
        1: "text-3xl font-bold",
        2: "text-2xl font-semibold",
        3: "text-xl font-medium",
        4: "text-lg",
        5: "text-base",
        6: "text-sm",
      };
      const level = (node.attrs.level as number) || 1;
      const className =
        levelClass[level as 1 | 2 | 3 | 4 | 5 | 6] || "text-base";
      return [
        `h${level}`,
        mergeAttributes(HTMLAttributes, { class: className }),
        0,
      ];
    },
  });
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
        heading: false,
      }),
      CustomHeading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right", "justify"],
      }),
      Highlight,
    ],
    content: inputProps?.content,
    editorProps: {
      attributes: {
        class: className,
      },
    },

    // onUpdate: ({ editor }) => {
    //   field.onChange(editor.getHTML());
    // },
    onUpdate: ({ editor }) => {
      field.onChange(editor.getHTML());
    },
  });

  return (
    <InputContainer
      label={label}
      description={description}
      containerClass={inputcontainerClass}
    >
      <Fragment>
        {Boolean(editor) && <RichTextEditorMenuBar editor={editor} />}
        <EditorContent
          {...inputProps}
          name={field.name}
          defaultValue={field.value}
          editor={editor}
        />
      </Fragment>
    </InputContainer>
  );
};

export default RichTextEditor;
