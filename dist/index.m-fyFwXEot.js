import c, { useRef as f } from "react";
function o(t = null) {
  let [r, u] = c.useState(t);
  const { current: n } = c.useRef({
    current: r
  });
  return Object.defineProperty(n, "current", {
    get: () => r,
    set: (e) => {
      Object.is(r, e) || (r = e, u(e));
    }
  }), n;
}
function l(t, r = { isStateful: !0 }) {
  const u = o(null), n = f(null), e = r.isStateful ? u : n;
  return c.useEffect(() => {
    !t || (typeof t == "function" ? t(e.current) : t.current = e.current);
  }), e;
}
export {
  l as o
};
