import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export function RichText() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`border rounded-md ${
        isFocused ? "border-primary" : "border-gray-200"
      }`}
    >
      <ReactQuill
        modules={modules}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(value) => {
          console.log(value);
          // Adicione o código de manipulação de valor aqui, se necessário
        }}
        style={{ maxWidth: "100%", paddingRight: "50px" }} // Adicione estilos aqui
      />
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
