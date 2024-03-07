import { jsx as m } from "react/jsx-runtime";
import { R as s } from "../../index-DBw-Vlhv.js";
import { Toast as a } from "./index.js";
const i = (t, e, r) => {
  const o = document.createElement("div");
  o.id = "toast-root", document.body.appendChild(o), s.render(
    /* @__PURE__ */ m(a, { message: t, duration: r, type: e }),
    o
  );
};
export {
  i as showToast
};
