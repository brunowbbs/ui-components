import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RichTextProps } from "./types";

export function RichText({
  onChangeValue,
  error,
  value,
  label,
  disabled,
}: RichTextProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <p className="text-sm font-medium">{label}</p>

      <div
        className={`border rounded-md ${
          error
            ? "border-red-600"
            : isFocused
            ? "border-primary"
            : "border-gray-400"
        }`}
      >
        <ReactQuill
          readOnly={disabled}
          defaultValue={value}
          modules={modules}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(value) => {
            const valueReplaced = value.replace(/<p><br><\/p>/g, "");

            if (valueReplaced === "") {
              onChangeValue(valueReplaced);
            } else {
              onChangeValue(value);
            }
          }}
          style={{ maxWidth: "100%", paddingRight: "50px" }}
        />
      </div>
      {error && <p className="text-[10px] text-red-600">{error}</p>}
    </div>
  );
}

const modules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ size: ["small", false, "large"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "video", "image"],
      [{ align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"],
    ],
  },
};
