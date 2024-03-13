import { jsx as l } from "react/jsx-runtime";
import m, { useState as x, useMemo as y, forwardRef as d } from "react";
import { c as P } from "../../../clsx-DB4S2d7J.js";
import { C as p } from "../../../index-CsTNTqez.js";
import { o as i } from "../../../index.m-fyFwXEot.js";
import { d as b, e as C, a as w, f as g } from "../../../import-CJ5HjZVc.js";
import { a as u, b as F, $ as k } from "../../../import-BSU-KPT5.js";
const f = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function v(o = {}) {
  let { style: e, isFocusable: s } = o, [r, c] = x(!1), { focusWithinProps: t } = F({
    isDisabled: !s,
    onFocusWithinChange: (a) => c(a)
  }), n = y(() => r ? e : e ? {
    ...f,
    ...e
  } : f, [
    r
  ]);
  return {
    visuallyHiddenProps: {
      ...t,
      style: n
    }
  };
}
function R(o) {
  let { children: e, elementType: s = "div", isFocusable: r, style: c, ...t } = o, { visuallyHiddenProps: n } = v(o);
  return /* @__PURE__ */ m.createElement(s, u(t, n), e);
}
const j = d(
  ({ cell: o, state: e }, s) => {
    const r = i(s), { gridCellProps: c } = b({ node: o }, e, r), { isFocusVisible: t, focusProps: n } = k();
    function a($) {
      const { rendered: h } = $;
      return h;
    }
    return /* @__PURE__ */ l(
      "td",
      {
        ref: r,
        ...u(c, n),
        className: P("td-cell", {
          "--outlined": t
        }),
        children: a(o)
      }
    );
  }
), A = d(
  ({ cell: o, state: e }, s) => {
    const r = i(s), { gridCellProps: c } = b({ node: o }, e, r), { checkboxProps: t } = C(
      { key: o.parentKey },
      e
    );
    return /* @__PURE__ */ l("td", { ...c, ref: r, children: /* @__PURE__ */ l(p, { ...t }) });
  }
), D = d(
  ({ column: o, state: e }, s) => {
    const r = i(s), { columnHeaderProps: c } = w(
      { node: o },
      e,
      r
    ), { checkboxProps: t } = g(e), n = e.selectionManager.selectionMode === "single";
    return /* @__PURE__ */ l("th", { ...c, ref: r, children: n ? /* @__PURE__ */ l(R, { children: t["aria-label"] }) : /* @__PURE__ */ l(p, { ...t }) });
  }
);
export {
  j as TableCell,
  A as TableCheckboxCell,
  D as TableSelectAllCell
};
