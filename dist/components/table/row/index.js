import "../../../assets/index.css";
import { jsx as l } from "react/jsx-runtime";
import { c as n } from "../../../clsx-DB4S2d7J.js";
import { o as m } from "../../../index.m-fyFwXEot.js";
import { forwardRef as b } from "react";
import { c as $ } from "../../../import-CJ5HjZVc.js";
import { $ as x, a as w } from "../../../import-BSU-KPT5.js";
const M = b(
  ({ item: e, state: o, children: s }, c) => {
    const r = m(c), f = o.selectionManager.isSelected(e.key), t = o.selectionManager.isDisabled(e.key), { rowProps: a, isPressed: d } = $(
      {
        node: e
      },
      o,
      r
    ), { isFocusVisible: i, focusProps: p } = x();
    return /* @__PURE__ */ l(
      "tr",
      {
        ref: r,
        ...w(a, p),
        className: n("tr-row", {
          "--selected": f,
          "--pressed": d,
          "--outlined": i,
          "--disabled": t
        }),
        children: s
      }
    );
  }
);
export {
  M as TableRow
};
