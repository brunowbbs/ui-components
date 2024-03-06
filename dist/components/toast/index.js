import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { useEffect as m } from "react";
import { R as n } from "../../index-DBw-Vlhv.js";
import { b as d, c as f } from "../../index-CMyMlvNn.js";
import { I as u } from "../../index-KwcrbYGb.js";
import { G as x } from "../../iconBase-Kt3AV8wV.js";
import { m as p } from "../../motion-7zb_jOK2.js";
function h(r) {
  return x({ tag: "svg", attr: { viewBox: "0 0 256 256", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }, child: [] }] })(r);
}
const g = ({ message: r, duration: i = 3e3, type: t = "success" }) => {
  m(() => {
    const s = setTimeout(() => {
      o();
    }, i);
    return () => clearTimeout(s);
  }, [i]);
  const o = () => {
    const s = document.getElementById("toast-root");
    s && (n.unmountComponentAtNode(s), s.remove());
  };
  function a() {
    return t === "success" ? /* @__PURE__ */ e(d, { color: "#27ae60", size: 24 }) : t === "error" ? /* @__PURE__ */ e(f, { color: "#e74c3c", size: 24 }) : /* @__PURE__ */ e(h, { color: "#f1c40f", size: 24 });
  }
  function l() {
    return t === "success" ? "Sucesso" : t === "error" ? "Erro" : "Aviso";
  }
  return /* @__PURE__ */ e(
    p.div,
    {
      initial: { opacity: 0, x: "100%" },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "100%" },
      transition: { duration: 0.1 },
      className: "fixed bottom-4 right-4 z-50 bg-white text-black p-4 rounded-lg w-80 shadow-2xl border",
      children: /* @__PURE__ */ c("div", { className: "flex items-center gap-3", children: [
        a(),
        /* @__PURE__ */ c("div", { className: "flex flex-col flex-1", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-bold", children: l() }),
          /* @__PURE__ */ e("p", { className: "text-sm font-light", children: r })
        ] }),
        /* @__PURE__ */ e(
          u,
          {
            onClick: o,
            className: "text-gray-500 hover:text-gray-700 cursor-pointer"
          }
        )
      ] })
    }
  );
}, A = (r, i, t) => {
  const o = document.createElement("div");
  o.id = "toast-root", document.body.appendChild(o), n.render(
    /* @__PURE__ */ e(g, { message: r, duration: t, type: i }),
    o
  );
};
export {
  A as showToast
};
