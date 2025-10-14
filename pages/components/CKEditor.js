"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Disable SSR for CKEditor (since it uses window)
const CKEditor = dynamic(
  async () => {
    const { CKEditor } = await import("@ckeditor/ckeditor5-react");
    const ClassicEditor = (await import("@ckeditor/ckeditor5-build-classic")).default;

    return function EditorWrapper({ value, onChange, placeholder }) {
      return (
        <CKEditor
          editor={ClassicEditor}
          data={value}
          config={{
            placeholder: placeholder || "Write your content here...",
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "underline",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "insertTable",
              "undo",
              "redo",
              "imageUpload",
              "mediaEmbed",
              "codeBlock",
            ],
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      );
    };
  },
  {
    ssr: false,
    loading: () => (
      <div className="h-64 border border-gray-300 rounded-md p-4 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading CKEditor...</p>
      </div>
    ),
  }
);

const DynamicCKEditor = ({ value, onChange, placeholder }) => {
  const [content, setContent] = useState(value || "");

  useEffect(() => {
    setContent(value || "");
  }, [value]);

  return (
    <div className="rich-text-editor">
      <CKEditor
        value={content}
        onChange={(val) => {
          setContent(val);
          onChange(val);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DynamicCKEditor;
