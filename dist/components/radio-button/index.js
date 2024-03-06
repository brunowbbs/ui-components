import { jsx as r, jsxs as c } from "react/jsx-runtime";
import { useState as o } from "react";
import { B as m, a as u } from "../../index-Dy7j4miU.js";
function x({ options: s, onChange: t }) {
  const [a, i] = o(""), l = (e) => {
    i(e), t(e);
  };
  return /* @__PURE__ */ r("div", { children: s.map((e, n) => /* @__PURE__ */ r(
    d,
    {
      label: e.label,
      value: e.value,
      checked: a === e.value,
      onChange: () => l(e.value)
    },
    n
  )) });
}
function d({
  label: s,
  value: t,
  checked: a,
  onChange: i
}) {
  return /* @__PURE__ */ c("label", { htmlFor: String(t), className: "flex items-center gap-2 mb-1", children: [
    /* @__PURE__ */ r(
      "input",
      {
        type: "radio",
        id: String(t),
        value: t,
        checked: a,
        onChange: i,
        className: "hidden"
      }
    ),
    !a && /* @__PURE__ */ r(
      m,
      {
        className: "fill-current cursor-pointer text-gray-300",
        size: 16
      }
    ),
    a && /* @__PURE__ */ r(
      u,
      {
        className: "fill-current text-primary cursor-pointer",
        size: 16
      }
    ),
    /* @__PURE__ */ r("p", { className: "text-sm", children: s })
  ] });
}
export {
  d as RadioButton,
  x as RadioButtonGroup
};
