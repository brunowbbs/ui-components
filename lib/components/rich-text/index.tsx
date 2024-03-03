import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function RichText() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`border rounded-sm ${isFocused ? "border-primary" : ""}`}>
      <ReactQuill
        modules={modules}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(value) => {
          console.log(value);
          // Adicione o código de manipulação de valor aqui, se necessário
        }}
      />
    </div>
  );
}

const modules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  },
};
