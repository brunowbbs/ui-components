import { jsx as n, jsxs as b } from "react/jsx-runtime";
import { useState as v } from "react";
import { c as k } from "../../clsx-DB4S2d7J.js";
import { Spinner as g } from "../spinner/index.js";
import { C as r } from "../../utils-CPTxmK3J.js";
function S(s) {
  const {
    variant: e = "primary",
    link: a,
    outline: i,
    isLoading: l,
    disabled: c,
    text: m,
    iconRight: u,
    iconLeft: f,
    width: p = void 0
  } = s, [t, d] = v(!1), h = () => {
    d(!0);
  }, x = () => {
    d(!1);
  }, o = {
    width: p,
    backgroundColor: t ? r[`${e}-darker`] : r[e],
    color: "white",
    transition: "all 0.5s ease",
    borderWidth: 1,
    borderColor: t ? r[`${e}-darker`] : r[e]
  };
  return i && (o.backgroundColor = "transparent", o.color = t ? r[`${e}-darker`] : r[e]), a && (o.backgroundColor = "transparent", o.borderColor = "transparent"), /* @__PURE__ */ n(
    "button",
    {
      disabled: c || l,
      style: o,
      onMouseEnter: h,
      onMouseLeave: x,
      className: "px-3 flex items-center justify-center rounded-sm py-1",
      ...s,
      children: l ? /* @__PURE__ */ n(g, { color: i ? "green" : "white" }) : /* @__PURE__ */ n(
        "p",
        {
          className: k({
            "text-primary hover:text-primary-darker hover:transition": a
          }),
          children: /* @__PURE__ */ b("div", { className: "flex flex-row items-center gap-1 text-sm", children: [
            f,
            m,
            u
          ] })
        }
      )
    }
  );
}
export {
  S as Button
};
