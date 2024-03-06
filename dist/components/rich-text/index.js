import { jsx as o } from "react/jsx-runtime";
import { useState as t } from "react";
import { R as i } from "../../quill.snow-Bb1LqjhI.js";
function c() {
  const [l, e] = t(!1);
  return /* @__PURE__ */ o("div", { className: `border rounded-sm ${l ? "border-primary" : ""}`, children: /* @__PURE__ */ o(
    i,
    {
      modules: n,
      onFocus: () => e(!0),
      onBlur: () => e(!1),
      onChange: (r) => {
        console.log(r);
      },
      style: { maxWidth: "100%", paddingRight: "50px" }
    }
  ) });
}
const n = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ size: ["small", !1, "large"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "video", "image"],
      [{ align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"]
    ]
  }
};
export {
  c as RichText
};
