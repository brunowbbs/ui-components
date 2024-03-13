import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { c as i } from "../../clsx-DB4S2d7J.js";
import { useState as m } from "react";
import { C as o, R as r } from "../../index-BONPznb0.js";
function x(e) {
  let a = "";
  e.type === "phone" ? a = "(99) 99999-9999" : e.type === "cnpj" ? a = "99.999.999/9999-99" : e.type === "cpf" && (a = "999.999.999-99");
  const [n, l] = m(!1);
  return /* @__PURE__ */ s("div", { className: `flex flex-col w-${e.width ?? "full"}`, children: [
    /* @__PURE__ */ t("p", { className: "text-sm font-medium", children: e.label }),
    /* @__PURE__ */ t(
      "div",
      {
        className: i("border rounded-sm py-0.5 relative", {
          "border-primary": n
        }),
        children: e.type === "money" ? /* @__PURE__ */ t(
          o,
          {
            className: "outline-none px-2 p-0 w-full text-sm",
            name: "input-name",
            placeholder: "Digite um valor",
            prefix: "R$ ",
            groupSeparator: ".",
            decimalSeparator: ",",
            allowNegativeValue: !1,
            decimalsLimit: 2,
            decimalScale: 2,
            onFocus: () => l(!0),
            onBlur: () => l(!1)
          }
        ) : /* @__PURE__ */ t(
          r,
          {
            ...e,
            className: "w-full text-sm outline-none bg-white px-2",
            mask: a,
            maskChar: "_",
            value: e.value,
            onChange: e.onChange,
            onFocus: () => l(!0),
            onBlur: () => l(!1)
          }
        )
      }
    )
  ] });
}
export {
  x as InputMask
};
