import { jsx as e, Fragment as i, jsxs as r } from "react/jsx-runtime";
import { useState as l } from "react";
import { b as n, c as o } from "../../index-Dy7j4miU.js";
function u({ label: s }) {
  const [c, t] = l(!1);
  return /* @__PURE__ */ e(i, { children: /* @__PURE__ */ r("label", { htmlFor: "checkbox", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        onClick: () => {
          t((a) => !a);
        },
        id: "checkbox",
        className: "hidden"
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex gap-2 items-end justify-center", children: [
      !c && /* @__PURE__ */ e(
        n,
        {
          className: "fill-current cursor-pointer text-gray-300",
          size: 16
        }
      ),
      c && /* @__PURE__ */ e(
        o,
        {
          className: "fill-current text-primary cursor-pointer",
          size: 16
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-sm", children: s })
    ] })
  ] }) });
}
export {
  u as Checkbox
};
