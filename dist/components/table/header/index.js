import { jsx as s } from "react/jsx-runtime";
import { forwardRef as d } from "react";
import { c as $ } from "../../../clsx-DB4S2d7J.js";
import { o as c } from "../../../index.m-fyFwXEot.js";
import { $ as b, a as m, b as i } from "../../../import-CJ5HjZVc.js";
import { $ as l, a as n } from "../../../import-BSU-KPT5.js";
function H({
  type: o,
  children: r,
  ...a
}) {
  const { rowGroupProps: e } = i();
  return /* @__PURE__ */ s(o, { ...n(e, a), children: r });
}
const T = d(
  ({ state: o, children: r, item: a }, e) => {
    const t = c(e), { rowProps: f } = b({ node: a }, o);
    return /* @__PURE__ */ s("tr", { ...f, ref: t, className: "tr-header", children: r });
  }
), G = d(
  ({ state: o, column: r }, a) => {
    const e = c(a), { columnHeaderProps: t } = m(
      { node: r },
      o,
      e
    ), { isFocusVisible: f, focusProps: p } = l();
    return /* @__PURE__ */ s(
      "th",
      {
        ref: e,
        ...n(t, p),
        className: $("th-header", {
          "--outline": f
        }),
        children: r.rendered
      }
    );
  }
);
export {
  G as TableColumnHeader,
  T as TableHeaderRow,
  H as TableRowGroup
};
