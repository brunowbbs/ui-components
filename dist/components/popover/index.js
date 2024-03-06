import { jsxs as u, jsx as r } from "react/jsx-runtime";
import { c as d } from "../../clsx-DB4S2d7J.js";
import { useState as f, useRef as c, useEffect as p } from "react";
import { m as v } from "../../motion-7zb_jOK2.js";
function y({ left: n = 0, mask_button: a, children: l }) {
  const [m, s] = f(!1), t = c(null), o = c(null);
  return p(() => {
    const e = (i) => {
      t.current && !t.current.contains(i.target) && o.current && !o.current.contains(i.target) && s(!1);
    };
    return document.addEventListener("mousedown", e), () => {
      document.removeEventListener("mousedown", e);
    };
  }, []), /* @__PURE__ */ u("div", { className: "relative", children: [
    /* @__PURE__ */ r("button", { ref: o, onClick: () => {
      s((e) => !e);
    }, children: a }),
    m && /* @__PURE__ */ r(
      v.div,
      {
        ref: t,
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0 },
        style: n ? { left: `${-n}%` } : void 0,
        className: d(
          "bg-white absolute p-3 rounded-md shadow-2xl mt-1 z-[999] border"
        ),
        children: /* @__PURE__ */ r("div", { className: "w-48", children: l })
      }
    )
  ] });
}
export {
  y as Popover
};
