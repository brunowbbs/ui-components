import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { G as a } from "./iconBase-Kt3AV8wV.js";
function o(t) {
  return a({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }, child: [] }, { tag: "polyline", attr: { points: "16 17 21 12 16 7" }, child: [] }, { tag: "line", attr: { x1: "21", x2: "9", y1: "12", y2: "12" }, child: [] }] })(t);
}
function d(t) {
  return a({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "4", x2: "20", y1: "12", y2: "12" }, child: [] }, { tag: "line", attr: { x1: "4", x2: "20", y1: "6", y2: "6" }, child: [] }, { tag: "line", attr: { x1: "4", x2: "20", y1: "18", y2: "18" }, child: [] }] })(t);
}
function x({
  menuItems: t = [],
  userLoggedData: i,
  logoutAction: n = () => alert("ok")
}) {
  return /* @__PURE__ */ r("div", { children: [
    /* @__PURE__ */ r("div", { className: "flex gap-2 border-b pb-2 mb-2", children: [
      i.avatar && /* @__PURE__ */ e("img", { src: i.avatar, className: "w-8 h-8 rounded-full" }),
      /* @__PURE__ */ r("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ e("span", { className: "font-semibold text-sm line-clamp-1 text-slate-600", children: i.name }),
        /* @__PURE__ */ e("span", { className: "font-light text-[0.65rem] text-slate-600", children: i.description })
      ] })
    ] }),
    /* @__PURE__ */ r("ul", { children: [
      t == null ? void 0 : t.map((l) => /* @__PURE__ */ r("li", { className: "flex items-center gap-2 p-1 rounded hover:bg-slate-100 transition cursor-pointer", children: [
        l.icon,
        /* @__PURE__ */ e("span", { className: "text-sm text-slate-600", children: l.title })
      ] })),
      /* @__PURE__ */ e("div", { className: "border-t my-2" }),
      /* @__PURE__ */ r(
        "li",
        {
          className: "text-sm flex items-center gap-2 px-1 rounded hover:bg-slate-100 transition cursor-pointer mt-2 p-1",
          onClick: () => {
            n();
          },
          children: [
            /* @__PURE__ */ e(o, { size: 14 }),
            /* @__PURE__ */ e("span", { className: "text-sm text-slate-600", children: "Sair" })
          ]
        }
      )
    ] })
  ] });
}
export {
  d as L,
  x as P
};
