import "react-quill/dist/quill.snow.css";

import ReactQuill from "react-quill";

export function RichText() {
  return (
    <div className="border rounded-sm">
      <ReactQuill
        // defaultValue={getValues("question")}
        modules={modules}
        // value={getValues("question")}
        onChange={(value) => {
          console.log(value);
          // const valueReplaced = value.replace(/<p><br><\/p>/g, "");

          // if (valueReplaced === "") {
          //   setValue("question", valueReplaced);
          // } else {
          //   setValue("question", value);
          // }
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
