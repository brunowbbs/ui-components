import { jsxs as a, jsx as s } from "react/jsx-runtime";
function n({ color: t }) {
  const e = t ? `text-${t}` : "text-current";
  return /* @__PURE__ */ a(
    "svg",
    {
      className: `animate-spin h-4 w-4 ${e}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ s(
          "circle",
          {
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: t,
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ s(
          "path",
          {
            className: "opacity-75",
            fill: t,
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}
export {
  n as Spinner
};
