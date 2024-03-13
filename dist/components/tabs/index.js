import { jsxs as b, jsx as t } from "react/jsx-runtime";
import { useState as c } from "react";
function l({ tabs: o }) {
  const [n, a] = c(0), i = (r) => {
    a(r);
  };
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ t("div", { className: "flex border-b border-gray-200 mb-4", children: o.map((r, e) => /* @__PURE__ */ t(
      "button",
      {
        onClick: () => i(e),
        className: `py-2 px-4 mr-2 focus:outline-none text-sm font-medium ${e === n ? "text-primary border-b-2 border-primary" : "text-gray-600 border-b-2 border-b-transparent hover:text-primary"}`,
        children: r.title
      },
      e
    )) }),
    /* @__PURE__ */ t("div", { children: o[n].content })
  ] });
}
export {
  l as Tabs
};
