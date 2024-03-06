import { jsxs as Z, Fragment as be, jsx as y } from "react/jsx-runtime";
import * as s from "react";
import { useState as we } from "react";
import { G as Ee } from "../../../../iconBase-Kt3AV8wV.js";
import "../../../../index-DBw-Vlhv.js";
import { m as ye } from "../../../../motion-7zb_jOK2.js";
function xe(e) {
  return Ee({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" }, child: [] }] })(e);
}
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, B.apply(this, arguments);
}
var H;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(H || (H = {}));
function h(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function L(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function z(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: a = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), a && a !== "#" && (t += a.charAt(0) === "#" ? a : "#" + a), t;
}
function re(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e);
  }
  return t;
}
var ee;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ee || (ee = {}));
function te(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, a] = Ce(e.path, e.caseSensitive, e.end), r = t.match(n);
  if (!r)
    return null;
  let i = r[0], o = i.replace(/(.)\/+$/, "$1"), l = r.slice(1);
  return {
    params: a.reduce((u, f, d) => {
      let {
        paramName: p,
        isOptional: E
      } = f;
      if (p === "*") {
        let b = l[d] || "";
        o = i.slice(0, i.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const N = l[d];
      return E && !N ? u[p] = void 0 : u[p] = (N || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e
  };
}
function Ce(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), L(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let a = [], r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, l, c) => (a.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (a.push({
    paramName: "*"
  }), r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, t ? void 0 : "i"), a];
}
function S(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(n);
  return a && a !== "/" ? null : e.slice(n) || "/";
}
function Se(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: a = "",
    hash: r = ""
  } = typeof e == "string" ? re(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Re(n, t) : t,
    search: Oe(a),
    hash: Le(r)
  };
}
function Re(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((r) => {
    r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
  }), n.length > 1 ? n.join("/") : "/";
}
function j(e, t, n, a) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function _e(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function ae(e, t) {
  let n = _e(e);
  return t ? n.map((a, r) => r === e.length - 1 ? a.pathname : a.pathnameBase) : n.map((a) => a.pathnameBase);
}
function ie(e, t, n, a) {
  a === void 0 && (a = !1);
  let r;
  typeof e == "string" ? r = re(e) : (r = B({}, e), h(!r.pathname || !r.pathname.includes("?"), j("?", "pathname", "search", r)), h(!r.pathname || !r.pathname.includes("#"), j("#", "pathname", "hash", r)), h(!r.search || !r.search.includes("#"), j("#", "search", "hash", r)));
  let i = e === "" || r.pathname === "", o = i ? "/" : r.pathname, l;
  if (o == null)
    l = n;
  else {
    let d = t.length - 1;
    if (!a && o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; )
        p.shift(), d -= 1;
      r.pathname = p.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let c = Se(r, l), u = o && o !== "/" && o.endsWith("/"), f = (i || o === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || f) && (c.pathname += "/"), c;
}
const J = (e) => e.join("/").replace(/\/\/+/g, "/"), Oe = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Le = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, oe = ["post", "put", "patch", "delete"];
new Set(oe);
const Pe = ["get", ...oe];
new Set(Pe);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, K.apply(this, arguments);
}
const A = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (A.displayName = "DataRouter");
const se = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (se.displayName = "DataRouterState");
const De = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (De.displayName = "Await");
const w = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (w.displayName = "Navigation");
const G = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (G.displayName = "Location");
const _ = /* @__PURE__ */ s.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (_.displayName = "Route");
const Ue = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (Ue.displayName = "RouteError");
function Ve(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  q() || (process.env.NODE_ENV !== "production" ? h(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : h(!1));
  let {
    basename: a,
    navigator: r
  } = s.useContext(w), {
    hash: i,
    pathname: o,
    search: l
  } = P(e, {
    relative: n
  }), c = o;
  return a !== "/" && (c = o === "/" ? a : J([a, o])), r.createHref({
    pathname: c,
    search: l,
    hash: i
  });
}
function q() {
  return s.useContext(G) != null;
}
function O() {
  return q() || (process.env.NODE_ENV !== "production" ? h(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : h(!1)), s.useContext(G).location;
}
const le = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ue(e) {
  s.useContext(w).static || s.useLayoutEffect(e);
}
function Te() {
  let {
    isDataRoute: e
  } = s.useContext(_);
  return e ? Me() : Fe();
}
function Fe() {
  q() || (process.env.NODE_ENV !== "production" ? h(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : h(!1));
  let e = s.useContext(A), {
    basename: t,
    future: n,
    navigator: a
  } = s.useContext(w), {
    matches: r
  } = s.useContext(_), {
    pathname: i
  } = O(), o = JSON.stringify(ae(r, n.v7_relativeSplatPath)), l = s.useRef(!1);
  return ue(() => {
    l.current = !0;
  }), s.useCallback(function(u, f) {
    if (f === void 0 && (f = {}), process.env.NODE_ENV !== "production" && L(l.current, le), !l.current)
      return;
    if (typeof u == "number") {
      a.go(u);
      return;
    }
    let d = ie(u, JSON.parse(o), i, f.relative === "path");
    e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : J([t, d.pathname])), (f.replace ? a.replace : a.push)(d, f.state, f);
  }, [t, a, o, i, e]);
}
function P(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: a
  } = s.useContext(w), {
    matches: r
  } = s.useContext(_), {
    pathname: i
  } = O(), o = JSON.stringify(ae(r, a.v7_relativeSplatPath));
  return s.useMemo(() => ie(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
var ce = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(ce || {}), Y = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Y || {});
function fe(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ae(e) {
  let t = s.useContext(A);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, fe(e)) : h(!1)), t;
}
function $e(e) {
  let t = s.useContext(_);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, fe(e)) : h(!1)), t;
}
function de(e) {
  let t = $e(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? h(!1, e + ' can only be used on routes that contain a unique "id"') : h(!1)), n.route.id;
}
function Ie() {
  return de(Y.UseRouteId);
}
function Me() {
  let {
    router: e
  } = Ae(ce.UseNavigateStable), t = de(Y.UseNavigateStable), n = s.useRef(!1);
  return ue(() => {
    n.current = !0;
  }), s.useCallback(function(r, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && L(n.current, le), n.current && (typeof r == "number" ? e.navigate(r) : e.navigate(r, K({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, R.apply(this, arguments);
}
function X(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), r, i;
  for (i = 0; i < a.length; i++)
    r = a[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
const V = "get", T = "application/x-www-form-urlencoded";
function $(e) {
  return e != null && typeof e.tagName == "string";
}
function We(e) {
  return $(e) && e.tagName.toLowerCase() === "button";
}
function je(e) {
  return $(e) && e.tagName.toLowerCase() === "form";
}
function ke(e) {
  return $(e) && e.tagName.toLowerCase() === "input";
}
function Be(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ze(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Be(e);
}
let U = null;
function Ke() {
  if (U === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), U = !1;
    } catch {
      U = !0;
    }
  return U;
}
const Je = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function k(e) {
  return e != null && !Je.has(e) ? (process.env.NODE_ENV !== "production" && L(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + T + '"')), null) : e;
}
function Ge(e, t) {
  let n, a, r, i, o;
  if (je(e)) {
    let l = e.getAttribute("action");
    a = l ? S(l, t) : null, n = e.getAttribute("method") || V, r = k(e.getAttribute("enctype")) || T, i = new FormData(e);
  } else if (We(e) || ke(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (a = c ? S(c, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || V, r = k(e.getAttribute("formenctype")) || k(l.getAttribute("enctype")) || T, i = new FormData(l, e), !Ke()) {
      let {
        name: u,
        type: f,
        value: d
      } = e;
      if (f === "image") {
        let p = u ? u + "." : "";
        i.append(p + "x", "0"), i.append(p + "y", "0");
      } else
        u && i.append(u, d);
    }
  } else {
    if ($(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = V, a = null, r = T, o = e;
  }
  return i && r === "text/plain" && (o = i, i = void 0), {
    action: a,
    method: n.toLowerCase(),
    encType: r,
    formData: i,
    body: o
  };
}
const qe = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], Ye = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], Xe = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], Qe = "6";
try {
  window.__reactRouterVersion = Qe;
} catch {
}
const he = /* @__PURE__ */ s.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (he.displayName = "ViewTransition");
const Ze = /* @__PURE__ */ s.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Ze.displayName = "Fetchers");
process.env.NODE_ENV;
const He = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", et = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, pe = /* @__PURE__ */ s.forwardRef(function(t, n) {
  let {
    onClick: a,
    relative: r,
    reloadDocument: i,
    replace: o,
    state: l,
    target: c,
    to: u,
    preventScrollReset: f,
    unstable_viewTransition: d
  } = t, p = X(t, qe), {
    basename: E
  } = s.useContext(w), N, b = !1;
  if (typeof u == "string" && et.test(u) && (N = u, He))
    try {
      let g = new URL(window.location.href), v = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u), D = S(v.pathname, E);
      v.origin === g.origin && D != null ? u = D + v.search + v.hash : b = !0;
    } catch {
      process.env.NODE_ENV !== "production" && L(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let x = Ve(u, {
    relative: r
  }), C = rt(u, {
    replace: o,
    state: l,
    target: c,
    preventScrollReset: f,
    relative: r,
    unstable_viewTransition: d
  });
  function m(g) {
    a && a(g), g.defaultPrevented || C(g);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ s.createElement("a", R({}, p, {
      href: N || x,
      onClick: b || i ? a : m,
      ref: n,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (pe.displayName = "Link");
const me = /* @__PURE__ */ s.forwardRef(function(t, n) {
  let {
    "aria-current": a = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: o = !1,
    style: l,
    to: c,
    unstable_viewTransition: u,
    children: f
  } = t, d = X(t, Ye), p = P(c, {
    relative: d.relative
  }), E = O(), N = s.useContext(se), {
    navigator: b,
    basename: x
  } = s.useContext(w), C = N != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  ut(p) && u === !0, m = b.encodeLocation ? b.encodeLocation(p).pathname : p.pathname, g = E.pathname, v = N && N.navigation && N.navigation.location ? N.navigation.location.pathname : null;
  r || (g = g.toLowerCase(), v = v ? v.toLowerCase() : null, m = m.toLowerCase()), v && x && (v = S(v, x) || v);
  const D = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
  let I = g === m || !o && g.startsWith(m) && g.charAt(D) === "/", Q = v != null && (v === m || !o && v.startsWith(m) && v.charAt(m.length) === "/"), M = {
    isActive: I,
    isPending: Q,
    isTransitioning: C
  }, ge = I ? a : void 0, W;
  typeof i == "function" ? W = i(M) : W = [i, I ? "active" : null, Q ? "pending" : null, C ? "transitioning" : null].filter(Boolean).join(" ");
  let Ne = typeof l == "function" ? l(M) : l;
  return /* @__PURE__ */ s.createElement(pe, R({}, d, {
    "aria-current": ge,
    className: W,
    ref: n,
    style: Ne,
    to: c,
    unstable_viewTransition: u
  }), typeof f == "function" ? f(M) : f);
});
process.env.NODE_ENV !== "production" && (me.displayName = "NavLink");
const tt = /* @__PURE__ */ s.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: a,
    reloadDocument: r,
    replace: i,
    state: o,
    method: l = V,
    action: c,
    onSubmit: u,
    relative: f,
    preventScrollReset: d,
    unstable_viewTransition: p
  } = e, E = X(e, Xe), N = st(), b = lt(c, {
    relative: f
  }), x = l.toLowerCase() === "get" ? "get" : "post", C = (m) => {
    if (u && u(m), m.defaultPrevented)
      return;
    m.preventDefault();
    let g = m.nativeEvent.submitter, v = (g == null ? void 0 : g.getAttribute("formmethod")) || l;
    N(g || m.currentTarget, {
      fetcherKey: n,
      method: v,
      navigate: a,
      replace: i,
      state: o,
      relative: f,
      preventScrollReset: d,
      unstable_viewTransition: p
    });
  };
  return /* @__PURE__ */ s.createElement("form", R({
    ref: t,
    method: x,
    action: b,
    onSubmit: r ? u : C
  }, E));
});
process.env.NODE_ENV !== "production" && (tt.displayName = "Form");
process.env.NODE_ENV;
var F;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(F || (F = {}));
var ne;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(ne || (ne = {}));
function nt(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ve(e) {
  let t = s.useContext(A);
  return t || (process.env.NODE_ENV !== "production" ? h(!1, nt(e)) : h(!1)), t;
}
function rt(e, t) {
  let {
    target: n,
    replace: a,
    state: r,
    preventScrollReset: i,
    relative: o,
    unstable_viewTransition: l
  } = t === void 0 ? {} : t, c = Te(), u = O(), f = P(e, {
    relative: o
  });
  return s.useCallback((d) => {
    if (ze(d, n)) {
      d.preventDefault();
      let p = a !== void 0 ? a : z(u) === z(f);
      c(e, {
        replace: p,
        state: r,
        preventScrollReset: i,
        relative: o,
        unstable_viewTransition: l
      });
    }
  }, [u, c, f, a, r, n, e, i, o, l]);
}
function at() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let it = 0, ot = () => "__" + String(++it) + "__";
function st() {
  let {
    router: e
  } = ve(F.UseSubmit), {
    basename: t
  } = s.useContext(w), n = Ie();
  return s.useCallback(function(a, r) {
    r === void 0 && (r = {}), at();
    let {
      action: i,
      method: o,
      encType: l,
      formData: c,
      body: u
    } = Ge(a, t);
    if (r.navigate === !1) {
      let f = r.fetcherKey || ot();
      e.fetch(f, n, r.action || i, {
        preventScrollReset: r.preventScrollReset,
        formData: c,
        body: u,
        formMethod: r.method || o,
        formEncType: r.encType || l,
        unstable_flushSync: r.unstable_flushSync
      });
    } else
      e.navigate(r.action || i, {
        preventScrollReset: r.preventScrollReset,
        formData: c,
        body: u,
        formMethod: r.method || o,
        formEncType: r.encType || l,
        replace: r.replace,
        state: r.state,
        fromRouteId: n,
        unstable_flushSync: r.unstable_flushSync,
        unstable_viewTransition: r.unstable_viewTransition
      });
  }, [e, t, n]);
}
function lt(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: a
  } = s.useContext(w), r = s.useContext(_);
  r || (process.env.NODE_ENV !== "production" ? h(!1, "useFormAction must be used inside a RouteContext") : h(!1));
  let [i] = r.matches.slice(-1), o = R({}, P(e || ".", {
    relative: n
  })), l = O();
  if (e == null) {
    o.search = l.search;
    let c = new URLSearchParams(o.search);
    c.has("index") && c.get("index") === "" && (c.delete("index"), o.search = c.toString() ? "?" + c.toString() : "");
  }
  return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), a !== "/" && (o.pathname = o.pathname === "/" ? a : J([a, o.pathname])), z(o);
}
function ut(e, t) {
  t === void 0 && (t = {});
  let n = s.useContext(he);
  n == null && (process.env.NODE_ENV !== "production" ? h(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : h(!1));
  let {
    basename: a
  } = ve(F.useViewTransitionState), r = P(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let i = S(n.currentLocation.pathname, a) || n.currentLocation.pathname, o = S(n.nextLocation.pathname, a) || n.nextLocation.pathname;
  return te(r.pathname, o) != null || te(r.pathname, i) != null;
}
function mt({ data: e }) {
  var r;
  const { pathname: t } = O(), [n, a] = we(!1);
  return /* @__PURE__ */ Z(be, { children: [
    /* @__PURE__ */ Z(
      "li",
      {
        className: `link ${t.includes(e.name) && "text-primary"}`,
        onClick: () => a(!n),
        children: [
          /* @__PURE__ */ y(e.icon, { size: 23, className: "min-w-max" }),
          /* @__PURE__ */ y("p", { className: "flex-1 capitalize", children: e.name }),
          /* @__PURE__ */ y(
            xe,
            {
              className: ` ${n && "rotate-180"} duration-200 `
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ y(
      ye.ul,
      {
        animate: n ? {
          height: "fit-content"
        } : {
          height: 0
        },
        className: "flex h-0 flex-col pl-14 text-[0.8rem] font-normal overflow-hidden",
        children: (r = e.menus) == null ? void 0 : r.map((i) => /* @__PURE__ */ y("li", { children: /* @__PURE__ */ y(
          me,
          {
            to: `/${e.name}/${i}`,
            className: "link !bg-transparent capitalize",
            children: /* @__PURE__ */ y("span", { className: "text-sm", children: i })
          }
        ) }, i))
      }
    )
  ] });
}
export {
  mt as SubMenu
};
