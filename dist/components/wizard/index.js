import { jsxs as c, jsx as e } from "react/jsx-runtime";
import x, { useState as h } from "react";
import { B as f, a as p } from "../../index-CMyMlvNn.js";
import { Button as s } from "../button/index.js";
function g({ steps: i }) {
  const [t, r] = h(0), l = i.length, a = () => {
    t < l - 1 && r(t + 1);
  }, d = () => {
    t > 0 && r(t - 1);
  }, m = () => {
    r(0);
  };
  return /* @__PURE__ */ c("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ e("div", { className: "mb-4 px-6 py-3 flex items-center justify-center", children: i.map((o, n) => /* @__PURE__ */ c(x.Fragment, { children: [
      /* @__PURE__ */ e("div", { className: "flex items-center flex-col text-sm", children: t === n ? /* @__PURE__ */ e("div", { className: "border p-2 rounded-full bg-primary", children: /* @__PURE__ */ e("p", { className: "text-white text-sm", children: o.icon }) }) : /* @__PURE__ */ e("div", { className: "border p-2 rounded-full", children: /* @__PURE__ */ e("p", { className: "text-sm", children: o.icon }) }) }),
      n !== l - 1 && /* @__PURE__ */ e("div", { className: "w-[20%] h-[1px] bg-slate-300 mx-2" })
    ] }, n)) }),
    /* @__PURE__ */ e("div", { className: "flex-1 text-sm text-center", children: i[t].component }),
    /* @__PURE__ */ c("div", { className: "flex justify-between py-4 px-6 ", children: [
      /* @__PURE__ */ e("div", { children: t > 0 && /* @__PURE__ */ e(
        s,
        {
          onClick: d,
          text: "Anterior",
          iconLeft: /* @__PURE__ */ e(f, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ e("div", { children: t < l - 1 ? /* @__PURE__ */ e(
        s,
        {
          onClick: a,
          text: "Próximo",
          iconRight: /* @__PURE__ */ e(p, { size: 18 })
        }
      ) : /* @__PURE__ */ e(s, { onClick: m, text: "Resetar" }) })
    ] })
  ] });
}
export {
  g as Wizard
};
