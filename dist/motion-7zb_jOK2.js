import * as pn from "react";
import Vs, { createContext as Tt, useLayoutEffect as $i, useEffect as je, useContext as k, useRef as Ve, useInsertionEffect as Gi, useCallback as Hi, useMemo as ie, forwardRef as _i, Fragment as zi, createElement as Ki, useId as Yi } from "react";
const As = Tt({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
}), re = Tt({}), Ie = Tt(null), oe = typeof document < "u", Xi = oe ? $i : je, Ss = Tt({ strict: !1 }), Ne = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), qi = "framerAppearId", ws = "data-" + Ne(qi), Cs = {
  skipAnimations: !1,
  useManualTiming: !1
};
class mn {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(e) {
    if (!this.scheduled.has(e))
      return this.scheduled.add(e), this.order.push(e), !0;
  }
  remove(e) {
    const n = this.order.indexOf(e);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function Zi(t) {
  let e = new mn(), n = new mn(), s = 0, i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const h = u && i, f = h ? e : n;
      return c && r.add(l), f.add(l) && h && i && (s = e.order.length), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.remove(l), r.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (i) {
        o = !0;
        return;
      }
      if (i = !0, [e, n] = [n, e], n.clear(), s = e.order.length, s)
        for (let c = 0; c < s; c++) {
          const u = e.order[c];
          r.has(u) && (a.schedule(u), t()), u(l);
        }
      i = !1, o && (o = !1, a.process(l));
    }
  };
  return a;
}
const Wt = [
  "prepare",
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Qi = 40;
function Ds(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = Wt.reduce((h, f) => (h[f] = Zi(() => n = !0), h), {}), r = (h) => {
    o[h].process(i);
  }, a = () => {
    const h = performance.now();
    n = !1, i.delta = s ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Qi), 1), i.timestamp = h, i.isProcessing = !0, Wt.forEach(r), i.isProcessing = !1, n && e && (s = !1, t(a));
  }, l = () => {
    n = !0, s = !0, i.isProcessing || t(a);
  };
  return { schedule: Wt.reduce((h, f) => {
    const d = o[f];
    return h[f] = (p, m = !1, y = !1) => (n || l(), d.schedule(p, m, y)), h;
  }, {}), cancel: (h) => Wt.forEach((f) => o[f].cancel(h)), state: i, steps: o };
}
const { schedule: Ue, cancel: mc } = Ds(queueMicrotask, !1);
function Ji(t, e, n, s) {
  const { visualElement: i } = k(re), o = k(Ss), r = k(Ie), a = k(As).reducedMotion, l = Ve();
  s = s || o.renderer, !l.current && s && (l.current = s(t, {
    visualState: e,
    parent: i,
    props: n,
    presenceContext: r,
    blockInitialAnimation: r ? r.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const c = l.current;
  Gi(() => {
    c && c.update(n, r);
  });
  const u = Ve(!!(n[ws] && !window.HandoffComplete));
  return Xi(() => {
    c && (Ue.postRender(c.render), u.current && c.animationState && c.animationState.animateChanges());
  }), je(() => {
    c && (c.updateFeatures(), !u.current && c.animationState && c.animationState.animateChanges(), u.current && (u.current = !1, window.HandoffComplete = !0));
  }), c;
}
function pt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function tr(t, e, n) {
  return Hi(
    (s) => {
      s && t.mount && t.mount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : pt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
function Et(t) {
  return typeof t == "string" || Array.isArray(t);
}
function ae(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
const We = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], $e = ["initial", ...We];
function le(t) {
  return ae(t.animate) || $e.some((e) => Et(t[e]));
}
function Ms(t) {
  return !!(le(t) || t.variants);
}
function er(t, e) {
  if (le(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Et(n) ? n : void 0,
      animate: Et(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function nr(t) {
  const { initial: e, animate: n } = er(t, k(re));
  return ie(() => ({ initial: e, animate: n }), [gn(e), gn(n)]);
}
function gn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const yn = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ft = {};
for (const t in yn)
  Ft[t] = {
    isEnabled: (e) => yn[t].some((n) => !!e[n])
  };
function sr(t) {
  for (const e in t)
    Ft[e] = {
      ...Ft[e],
      ...t[e]
    };
}
const Rs = Tt({}), Ls = Tt({}), ir = Symbol.for("motionComponentSymbol");
function rr({ preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: s, Component: i }) {
  t && sr(t);
  function o(a, l) {
    let c;
    const u = {
      ...k(As),
      ...a,
      layoutId: or(a)
    }, { isStatic: h } = u, f = nr(a), d = s(a, h);
    if (!h && oe) {
      f.visualElement = Ji(i, d, u, e);
      const p = k(Ls), m = k(Ss).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        m,
        t,
        p
      ));
    }
    return pn.createElement(
      re.Provider,
      { value: f },
      c && f.visualElement ? pn.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      n(i, a, tr(d, f.visualElement, l), d, h, f.visualElement)
    );
  }
  const r = _i(o);
  return r[ir] = i, r;
}
function or({ layoutId: t }) {
  const e = k(Rs).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function ar(t) {
  function e(s, i = {}) {
    return rr(t(s, i));
  }
  if (typeof Proxy > "u")
    return e;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
  });
}
const lr = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ge(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(lr.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(t))
    )
  );
}
const Xt = {};
function cr(t) {
  Object.assign(Xt, t);
}
const Ot = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ut = new Set(Ot);
function Es(t, { layout: e, layoutId: n }) {
  return ut.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Xt[t] || t === "opacity");
}
const j = (t) => !!(t && t.getVelocity), ur = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, hr = Ot.length;
function fr(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, s, i) {
  let o = "";
  for (let r = 0; r < hr; r++) {
    const a = Ot[r];
    if (t[a] !== void 0) {
      const l = ur[a] || a;
      o += `${l}(${t[a]}) `;
    }
  }
  return e && !t.z && (o += "translateZ(0)"), o = o.trim(), i ? o = i(t, s ? "" : o) : n && s && (o = "none"), o;
}
const Fs = (t) => (e) => typeof e == "string" && e.startsWith(t), Bs = Fs("--"), dr = Fs("var(--"), qt = (t) => dr(t) ? pr.test(t.split("/*")[0].trim()) : !1, pr = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i, mr = (t, e) => e && typeof t == "number" ? e.transform(t) : t, et = (t, e, n) => n > e ? e : n < t ? t : n, Pt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Dt = {
  ...Pt,
  transform: (t) => et(0, 1, t)
}, $t = {
  ...Pt,
  default: 1
}, Mt = (t) => Math.round(t * 1e5) / 1e5, He = /(-)?([\d]*\.?[\d])+/g, gr = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, yr = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function kt(t) {
  return typeof t == "string";
}
const jt = (t) => ({
  test: (e) => kt(e) && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), Q = jt("deg"), G = jt("%"), T = jt("px"), vr = jt("vh"), xr = jt("vw"), vn = {
  ...G,
  parse: (t) => G.parse(t) / 100,
  transform: (t) => G.transform(t * 100)
}, xn = {
  ...Pt,
  transform: Math.round
}, Os = {
  // Border props
  borderWidth: T,
  borderTopWidth: T,
  borderRightWidth: T,
  borderBottomWidth: T,
  borderLeftWidth: T,
  borderRadius: T,
  radius: T,
  borderTopLeftRadius: T,
  borderTopRightRadius: T,
  borderBottomRightRadius: T,
  borderBottomLeftRadius: T,
  // Positioning props
  width: T,
  maxWidth: T,
  height: T,
  maxHeight: T,
  size: T,
  top: T,
  right: T,
  bottom: T,
  left: T,
  // Spacing props
  padding: T,
  paddingTop: T,
  paddingRight: T,
  paddingBottom: T,
  paddingLeft: T,
  margin: T,
  marginTop: T,
  marginRight: T,
  marginBottom: T,
  marginLeft: T,
  // Transform props
  rotate: Q,
  rotateX: Q,
  rotateY: Q,
  rotateZ: Q,
  scale: $t,
  scaleX: $t,
  scaleY: $t,
  scaleZ: $t,
  skew: Q,
  skewX: Q,
  skewY: Q,
  distance: T,
  translateX: T,
  translateY: T,
  translateZ: T,
  x: T,
  y: T,
  z: T,
  perspective: T,
  transformPerspective: T,
  opacity: Dt,
  originX: vn,
  originY: vn,
  originZ: T,
  // Misc
  zIndex: xn,
  // SVG
  fillOpacity: Dt,
  strokeOpacity: Dt,
  numOctaves: xn
};
function _e(t, e, n, s) {
  const { style: i, vars: o, transform: r, transformOrigin: a } = t;
  let l = !1, c = !1, u = !0;
  for (const h in e) {
    const f = e[h];
    if (Bs(h)) {
      o[h] = f;
      continue;
    }
    const d = Os[h], p = mr(f, d);
    if (ut.has(h)) {
      if (l = !0, r[h] = p, !u)
        continue;
      f !== (d.default || 0) && (u = !1);
    } else
      h.startsWith("origin") ? (c = !0, a[h] = p) : i[h] = p;
  }
  if (e.transform || (l || s ? i.transform = fr(t.transform, n, u, s) : i.transform && (i.transform = "none")), c) {
    const { originX: h = "50%", originY: f = "50%", originZ: d = 0 } = a;
    i.transformOrigin = `${h} ${f} ${d}`;
  }
}
const ze = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ks(t, e, n) {
  for (const s in e)
    !j(e[s]) && !Es(s, n) && (t[s] = e[s]);
}
function Tr({ transformTemplate: t }, e, n) {
  return ie(() => {
    const s = ze();
    return _e(s, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, s.vars, s.style);
  }, [e]);
}
function Pr(t, e, n) {
  const s = t.style || {}, i = {};
  return ks(i, s, t), Object.assign(i, Tr(t, e, n)), i;
}
function br(t, e, n) {
  const s = {}, i = Pr(t, e, n);
  return t.drag && t.dragListener !== !1 && (s.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), s.style = i, s;
}
const Vr = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Zt(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Vr.has(t);
}
let js = (t) => !Zt(t);
function Ar(t) {
  t && (js = (e) => e.startsWith("on") ? !Zt(e) : t(e));
}
try {
  Ar(require("@emotion/is-prop-valid").default);
} catch {
}
function Sr(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (js(i) || n === !0 && Zt(i) || !e && !Zt(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
function Tn(t, e, n) {
  return typeof t == "string" ? t : T.transform(e + n * t);
}
function wr(t, e, n) {
  const s = Tn(e, t.x, t.width), i = Tn(n, t.y, t.height);
  return `${s} ${i}`;
}
const Cr = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Dr = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Mr(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Cr : Dr;
  t[o.offset] = T.transform(-s);
  const r = T.transform(e), a = T.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Ke(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  originX: i,
  originY: o,
  pathLength: r,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, h, f) {
  if (_e(t, c, u, f), h) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: p, dimensions: m } = t;
  d.transform && (m && (p.transform = d.transform), delete d.transform), m && (i !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = wr(m, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), e !== void 0 && (d.x = e), n !== void 0 && (d.y = n), s !== void 0 && (d.scale = s), r !== void 0 && Mr(d, r, a, l, !1);
}
const Is = () => ({
  ...ze(),
  attrs: {}
}), Ye = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Rr(t, e, n, s) {
  const i = ie(() => {
    const o = Is();
    return Ke(o, e, { enableHardwareAcceleration: !1 }, Ye(s), t.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    ks(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
function Lr(t = !1) {
  return (n, s, i, { latestValues: o }, r) => {
    const l = (Ge(n) ? Rr : br)(s, o, r, n), c = Sr(s, typeof n == "string", t), u = n !== zi ? { ...c, ...l, ref: i } : {}, { children: h } = s, f = ie(() => j(h) ? h.get() : h, [h]);
    return Ki(n, {
      ...u,
      children: f
    });
  };
}
function Ns(t, { style: e, vars: n }, s, i) {
  Object.assign(t.style, e, i && i.getProjectionStyles(s));
  for (const o in n)
    t.style.setProperty(o, n[o]);
}
const Us = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ws(t, e, n, s) {
  Ns(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(Us.has(i) ? i : Ne(i), e.attrs[i]);
}
function Xe(t, e) {
  const { style: n } = t, s = {};
  for (const i in n)
    (j(n[i]) || e.style && j(e.style[i]) || Es(i, t)) && (s[i] = n[i]);
  return s;
}
function $s(t, e) {
  const n = Xe(t, e);
  for (const s in t)
    if (j(t[s]) || j(e[s])) {
      const i = Ot.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      n[i] = t[s];
    }
  return n;
}
function qe(t, e, n, s = {}, i = {}) {
  return typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)), typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function" && (e = e(n !== void 0 ? n : t.custom, s, i)), e;
}
function Er(t) {
  const e = Ve(null);
  return e.current === null && (e.current = t()), e.current;
}
const Qt = (t) => Array.isArray(t), Fr = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Br = (t) => Qt(t) ? t[t.length - 1] || 0 : t;
function zt(t) {
  const e = j(t) ? t.get() : t;
  return Fr(e) ? e.toValue() : e;
}
function Or({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, s, i, o) {
  const r = {
    latestValues: kr(s, i, o, t),
    renderState: e()
  };
  return n && (r.mount = (a) => n(s, a, r)), r;
}
const Gs = (t) => (e, n) => {
  const s = k(re), i = k(Ie), o = () => Or(t, e, s, i);
  return n ? o() : Er(o);
};
function kr(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const f in o)
    i[f] = zt(o[f]);
  let { initial: r, animate: a } = t;
  const l = le(t), c = Ms(t);
  e && c && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || r === !1;
  const h = u ? a : r;
  return h && typeof h != "boolean" && !ae(h) && (Array.isArray(h) ? h : [h]).forEach((d) => {
    const p = qe(t, d);
    if (!p)
      return;
    const { transitionEnd: m, transition: y, ...P } = p;
    for (const v in P) {
      let g = P[v];
      if (Array.isArray(g)) {
        const x = u ? g.length - 1 : 0;
        g = g[x];
      }
      g !== null && (i[v] = g);
    }
    for (const v in m)
      i[v] = m[v];
  }), i;
}
const R = (t) => t, { schedule: C, cancel: q, state: F, steps: fe } = Ds(typeof requestAnimationFrame < "u" ? requestAnimationFrame : R, !0), jr = {
  useVisualState: Gs({
    scrapeMotionValuesFromProps: $s,
    createRenderState: Is,
    onMount: (t, e, { renderState: n, latestValues: s }) => {
      C.read(() => {
        try {
          n.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), C.render(() => {
        Ke(n, s, { enableHardwareAcceleration: !1 }, Ye(e.tagName), t.transformTemplate), Ws(e, n);
      });
    }
  })
}, Ir = {
  useVisualState: Gs({
    scrapeMotionValuesFromProps: Xe,
    createRenderState: ze
  })
};
function Nr(t, { forwardMotionProps: e = !1 }, n, s) {
  return {
    ...Ge(t) ? jr : Ir,
    preloadedFeatures: n,
    useRender: Lr(e),
    createVisualElement: s,
    Component: t
  };
}
function z(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const Hs = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1;
function ce(t, e = "page") {
  return {
    point: {
      x: t[e + "X"],
      y: t[e + "Y"]
    }
  };
}
const Ur = (t) => (e) => Hs(e) && t(e, ce(e));
function K(t, e, n, s) {
  return z(t, e, Ur(n), s);
}
const Wr = (t, e) => (n) => e(t(n)), Y = (...t) => t.reduce(Wr);
function _s(t) {
  let e = null;
  return () => {
    const n = () => {
      e = null;
    };
    return e === null ? (e = t, n) : !1;
  };
}
const Pn = _s("dragHorizontal"), bn = _s("dragVertical");
function zs(t) {
  let e = !1;
  if (t === "y")
    e = bn();
  else if (t === "x")
    e = Pn();
  else {
    const n = Pn(), s = bn();
    n && s ? e = () => {
      n(), s();
    } : (n && n(), s && s());
  }
  return e;
}
function Ks() {
  const t = zs(!0);
  return t ? (t(), !1) : !0;
}
class st {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
function Vn(t, e) {
  const n = "pointer" + (e ? "enter" : "leave"), s = "onHover" + (e ? "Start" : "End"), i = (o, r) => {
    if (o.pointerType === "touch" || Ks())
      return;
    const a = t.getProps();
    t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[s] && C.update(() => a[s](o, r));
  };
  return K(t.current, n, i, {
    passive: !t.getProps()[s]
  });
}
class $r extends st {
  mount() {
    this.unmount = Y(Vn(this.node, !0), Vn(this.node, !1));
  }
  unmount() {
  }
}
class Gr extends st {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Y(z(this.node.current, "focus", () => this.onFocus()), z(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Ys = (t, e) => e ? t === e ? !0 : Ys(t, e.parentElement) : !1;
function de(t, e) {
  if (!e)
    return;
  const n = new PointerEvent("pointer" + t);
  e(n, ce(n));
}
class Hr extends st {
  constructor() {
    super(...arguments), this.removeStartListeners = R, this.removeEndListeners = R, this.removeAccessibleListeners = R, this.startPointerPress = (e, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const s = this.node.getProps(), o = K(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u, globalTapTarget: h } = this.node.getProps();
        C.update(() => {
          !h && !Ys(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
        });
      }, { passive: !(s.onTap || s.onPointerUp) }), r = K(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(s.onTapCancel || s.onPointerCancel) });
      this.removeEndListeners = Y(o, r), this.startPress(e, n);
    }, this.startAccessiblePress = () => {
      const e = (o) => {
        if (o.key !== "Enter" || this.isPressing)
          return;
        const r = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || de("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && C.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = z(this.node.current, "keyup", r), de("down", (a, l) => {
          this.startPress(a, l);
        });
      }, n = z(this.node.current, "keydown", e), s = () => {
        this.isPressing && de("cancel", (o, r) => this.cancelPress(o, r));
      }, i = z(this.node.current, "blur", s);
      this.removeAccessibleListeners = Y(n, i);
    };
  }
  startPress(e, n) {
    this.isPressing = !0;
    const { onTapStart: s, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), s && C.update(() => s(e, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Ks();
  }
  cancelPress(e, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: s } = this.node.getProps();
    s && C.update(() => s(e, n));
  }
  mount() {
    const e = this.node.getProps(), n = K(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), s = z(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Y(n, s);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ae = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), _r = (t) => {
  const e = Ae.get(t.target);
  e && e(t);
}, zr = (t) => {
  t.forEach(_r);
};
function Kr({ root: t, ...e }) {
  const n = t || document;
  pe.has(n) || pe.set(n, {});
  const s = pe.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(zr, { root: t, ...e })), s[i];
}
function Yr(t, e, n) {
  const s = Kr(e);
  return Ae.set(t, n), s.observe(t), () => {
    Ae.delete(t), s.unobserve(t);
  };
}
const Xr = {
  some: 0,
  all: 1
};
class qr extends st {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Xr[i]
    }, a = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), f = c ? u : h;
      f && f(l);
    };
    return Yr(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Zr(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Zr({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Qr = {
  inView: {
    Feature: qr
  },
  tap: {
    Feature: Hr
  },
  focus: {
    Feature: Gr
  },
  hover: {
    Feature: $r
  }
};
function Xs(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function Jr(t) {
  const e = {};
  return t.values.forEach((n, s) => e[s] = n.get()), e;
}
function to(t) {
  const e = {};
  return t.values.forEach((n, s) => e[s] = n.getVelocity()), e;
}
function ue(t, e, n) {
  const s = t.getProps();
  return qe(s, e, n !== void 0 ? n : s.custom, Jr(t), to(t));
}
let It = R, $ = R;
process.env.NODE_ENV !== "production" && (It = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, $ = (t, e) => {
  if (!t)
    throw new Error(e);
});
const tt = (t) => t * 1e3, X = (t) => t / 1e3, eo = {
  current: !1
}, qs = (t) => Array.isArray(t) && typeof t[0] == "number";
function Zs(t) {
  return !!(!t || typeof t == "string" && Qs[t] || qs(t) || Array.isArray(t) && t.every(Zs));
}
const Ct = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, Qs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Ct([0, 0.65, 0.55, 1]),
  circOut: Ct([0.55, 0, 1, 0.45]),
  backIn: Ct([0.31, 0.01, 0.66, -0.59]),
  backOut: Ct([0.33, 1.53, 0.69, 0.99])
};
function Js(t) {
  if (t)
    return qs(t) ? Ct(t) : Array.isArray(t) ? t.map(Js) : Qs[t];
}
function no(t, e, n, { delay: s = 0, duration: i, repeat: o = 0, repeatType: r = "loop", ease: a, times: l } = {}) {
  const c = { [e]: n };
  l && (c.offset = l);
  const u = Js(a);
  return Array.isArray(u) && (c.easing = u), t.animate(c, {
    delay: s,
    duration: i,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  });
}
function so(t, { repeat: e, repeatType: n = "loop" }) {
  const s = e && n !== "loop" && e % 2 === 1 ? 0 : t.length - 1;
  return t[s];
}
const ti = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, io = 1e-7, ro = 12;
function oo(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = ti(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > io && ++a < ro);
  return r;
}
function Nt(t, e, n, s) {
  if (t === e && n === s)
    return R;
  const i = (o) => oo(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : ti(i(o), e, s);
}
const ao = Nt(0.42, 0, 1, 1), lo = Nt(0, 0, 0.58, 1), ei = Nt(0.42, 0, 0.58, 1), co = (t) => Array.isArray(t) && typeof t[0] != "number", ni = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, si = (t) => (e) => 1 - t(1 - e), Ze = (t) => 1 - Math.sin(Math.acos(t)), ii = si(Ze), uo = ni(Ze), ri = Nt(0.33, 1.53, 0.69, 0.99), Qe = si(ri), ho = ni(Qe), fo = (t) => (t *= 2) < 1 ? 0.5 * Qe(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), An = {
  linear: R,
  easeIn: ao,
  easeInOut: ei,
  easeOut: lo,
  circIn: Ze,
  circInOut: uo,
  circOut: ii,
  backIn: Qe,
  backInOut: ho,
  backOut: ri,
  anticipate: fo
}, Sn = (t) => {
  if (Array.isArray(t)) {
    $(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, i] = t;
    return Nt(e, n, s, i);
  } else if (typeof t == "string")
    return $(An[t] !== void 0, `Invalid easing type '${t}'`), An[t];
  return t;
}, Bt = (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, w = (t, e, n) => t + (e - t) * n;
function me(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function po({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = me(l, a, t + 1 / 3), o = me(l, a, t), r = me(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
const Je = (t, e) => (n) => !!(kt(n) && yr.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)), oi = (t, e, n) => (s) => {
  if (!kt(s))
    return s;
  const [i, o, r, a] = s.match(He);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, mo = (t) => et(0, 255, t), ge = {
  ...Pt,
  transform: (t) => Math.round(mo(t))
}, lt = {
  test: Je("rgb", "red"),
  parse: oi("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + ge.transform(t) + ", " + ge.transform(e) + ", " + ge.transform(n) + ", " + Mt(Dt.transform(s)) + ")"
};
function go(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Se = {
  test: Je("#"),
  parse: go,
  transform: lt.transform
}, mt = {
  test: Je("hsl", "hue"),
  parse: oi("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + G.transform(Mt(e)) + ", " + G.transform(Mt(n)) + ", " + Mt(Dt.transform(s)) + ")"
}, ye = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, yo = [Se, lt, mt], vo = (t) => yo.find((e) => e.test(t));
function wn(t) {
  const e = vo(t);
  $(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
  let n = e.parse(t);
  return e === mt && (n = po(n)), n;
}
const Cn = (t, e) => {
  const n = wn(t), s = wn(e), i = { ...n };
  return (o) => (i.red = ye(n.red, s.red, o), i.green = ye(n.green, s.green, o), i.blue = ye(n.blue, s.blue, o), i.alpha = w(n.alpha, s.alpha, o), lt.transform(i));
}, B = {
  test: (t) => lt.test(t) || Se.test(t) || mt.test(t),
  parse: (t) => lt.test(t) ? lt.parse(t) : mt.test(t) ? mt.parse(t) : Se.parse(t),
  transform: (t) => kt(t) ? t : t.hasOwnProperty("red") ? lt.transform(t) : mt.transform(t)
};
function xo(t) {
  var e, n;
  return isNaN(t) && kt(t) && (((e = t.match(He)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(gr)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const ai = "number", li = "color", To = "var", Po = "var(", Dn = "${}", Mn = /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function Jt(t) {
  const e = t.toString(), n = e.match(Mn) || [], s = [], i = {
    color: [],
    number: [],
    var: []
  }, o = [];
  for (let l = 0; l < n.length; l++) {
    const c = n[l];
    B.test(c) ? (i.color.push(l), o.push(li), s.push(B.parse(c))) : c.startsWith(Po) ? (i.var.push(l), o.push(To), s.push(c)) : (i.number.push(l), o.push(ai), s.push(parseFloat(c)));
  }
  const a = e.replace(Mn, Dn).split(Dn);
  return { values: s, split: a, indexes: i, types: o };
}
function ci(t) {
  return Jt(t).values;
}
function ui(t) {
  const { split: e, types: n } = Jt(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === ai ? o += Mt(i[r]) : a === li ? o += B.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const bo = (t) => typeof t == "number" ? 0 : t;
function Vo(t) {
  const e = ci(t);
  return ui(t)(e.map(bo));
}
const nt = {
  test: xo,
  parse: ci,
  createTransformer: ui,
  getAnimatableNone: Vo
};
function we(t, e) {
  return (n) => n > 0 ? e : t;
}
function Ao(t, e) {
  return (n) => w(t, e, n);
}
function tn(t) {
  return typeof t == "number" ? Ao : typeof t == "string" ? qt(t) ? we : B.test(t) ? Cn : Co : Array.isArray(t) ? hi : typeof t == "object" ? B.test(t) ? Cn : So : we;
}
function hi(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => tn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function So(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = tn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function wo(t, e) {
  var n;
  const s = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < e.values.length; o++) {
    const r = e.types[o], a = t.indexes[r][i[r]], l = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[o] = l, i[r]++;
  }
  return s;
}
const Co = (t, e) => {
  const n = nt.createTransformer(e), s = Jt(t), i = Jt(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Y(hi(wo(s, i), i.values), n) : (It(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), we(t, e));
};
function fi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? w(t, e, n) : tn(t)(t, e);
}
function Do(t, e, n) {
  const s = [], i = n || fi, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || R : e;
      a = Y(l, a);
    }
    s.push(a);
  }
  return s;
}
function Mo(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if ($(o === e.length, "Both input and output ranges must be the same length"), o === 1)
    return () => e[0];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const r = Do(e, s, i), a = r.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < t.length - 2 && !(c < t[u + 1]); u++)
        ;
    const h = Bt(t[u], t[u + 1], c);
    return r[u](h);
  };
  return n ? (c) => l(et(t[0], t[o - 1], c)) : l;
}
function Ro(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = Bt(0, e, s);
    t.push(w(n, 1, i));
  }
}
function Lo(t) {
  const e = [0];
  return Ro(e, t.length - 1), e;
}
function Eo(t, e) {
  return t.map((n) => n * e);
}
function Fo(t, e) {
  return t.map(() => e || ei).splice(0, t.length - 1);
}
function te({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = co(s) ? s.map(Sn) : Sn(s), o = {
    done: !1,
    value: e[0]
  }, r = Eo(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Lo(e),
    t
  ), a = Mo(r, e, {
    ease: Array.isArray(i) ? i : Fo(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
function di(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Bo = 5;
function pi(t, e, n) {
  const s = Math.max(e - Bo, 0);
  return di(n - t(s), e - s);
}
const ve = 1e-3, Oo = 0.01, Rn = 10, ko = 0.05, jo = 1;
function Io({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: s = 1 }) {
  let i, o;
  It(t <= tt(Rn), "Spring duration must be 10 seconds or less");
  let r = 1 - e;
  r = et(ko, jo, r), t = et(Oo, Rn, X(t)), r < 1 ? (i = (c) => {
    const u = c * r, h = u * t, f = u - n, d = Ce(c, r), p = Math.exp(-h);
    return ve - f / d * p;
  }, o = (c) => {
    const h = c * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(c, 2) * t, p = Math.exp(-h), m = Ce(Math.pow(c, 2), r);
    return (-i(c) + ve > 0 ? -1 : 1) * ((f - d) * p) / m;
  }) : (i = (c) => {
    const u = Math.exp(-c * t), h = (c - n) * t + 1;
    return -ve + u * h;
  }, o = (c) => {
    const u = Math.exp(-c * t), h = (n - c) * (t * t);
    return u * h;
  });
  const a = 5 / t, l = Uo(i, o, a);
  if (t = tt(t), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: t
    };
  {
    const c = Math.pow(l, 2) * s;
    return {
      stiffness: c,
      damping: r * 2 * Math.sqrt(s * c),
      duration: t
    };
  }
}
const No = 12;
function Uo(t, e, n) {
  let s = n;
  for (let i = 1; i < No; i++)
    s = s - t(s) / e(s);
  return s;
}
function Ce(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const Wo = ["duration", "bounce"], $o = ["stiffness", "damping", "mass"];
function Ln(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Go(t) {
  let e = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!Ln(t, $o) && Ln(t, Wo)) {
    const n = Io(t);
    e = {
      ...e,
      ...n,
      mass: 1
    }, e.isResolvedFromDuration = !0;
  }
  return e;
}
function mi({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
  const i = t[0], o = t[t.length - 1], r = { done: !1, value: i }, { stiffness: a, damping: l, mass: c, duration: u, velocity: h, isResolvedFromDuration: f } = Go({
    ...s,
    velocity: -X(s.velocity || 0)
  }), d = h || 0, p = l / (2 * Math.sqrt(a * c)), m = o - i, y = X(Math.sqrt(a / c)), P = Math.abs(m) < 5;
  n || (n = P ? 0.01 : 2), e || (e = P ? 5e-3 : 0.5);
  let v;
  if (p < 1) {
    const g = Ce(y, p);
    v = (x) => {
      const b = Math.exp(-p * y * x);
      return o - b * ((d + p * y * m) / g * Math.sin(g * x) + m * Math.cos(g * x));
    };
  } else if (p === 1)
    v = (g) => o - Math.exp(-y * g) * (m + (d + y * m) * g);
  else {
    const g = y * Math.sqrt(p * p - 1);
    v = (x) => {
      const b = Math.exp(-p * y * x), L = Math.min(g * x, 300);
      return o - b * ((d + p * y * m) * Math.sinh(L) + g * m * Math.cosh(L)) / g;
    };
  }
  return {
    calculatedDuration: f && u || null,
    next: (g) => {
      const x = v(g);
      if (f)
        r.done = g >= u;
      else {
        let b = d;
        g !== 0 && (p < 1 ? b = pi(v, g, x) : b = 0);
        const L = Math.abs(b) <= n, A = Math.abs(o - x) <= e;
        r.done = L && A;
      }
      return r.value = r.done ? o : x, r;
    }
  };
}
function En({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (V) => a !== void 0 && V < a || l !== void 0 && V > l, p = (V) => a === void 0 ? l : l === void 0 || Math.abs(a - V) < Math.abs(l - V) ? a : l;
  let m = n * e;
  const y = h + m, P = r === void 0 ? y : r(y);
  P !== y && (m = P - h);
  const v = (V) => -m * Math.exp(-V / s), g = (V) => P + v(V), x = (V) => {
    const D = v(V), H = g(V);
    f.done = Math.abs(D) <= c, f.value = f.done ? P : H;
  };
  let b, L;
  const A = (V) => {
    d(f.value) && (b = V, L = mi({
      keyframes: [f.value, p(f.value)],
      velocity: pi(g, V, f.value),
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: u
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (V) => {
      let D = !1;
      return !L && b === void 0 && (D = !0, x(V), A(V)), b !== void 0 && V > b ? L.next(V - b) : (!D && x(V), f);
    }
  };
}
let Kt;
function Ho() {
  Kt = void 0;
}
const ct = {
  now: () => (Kt === void 0 && ct.set(F.isProcessing || Cs.useManualTiming ? F.timestamp : performance.now()), Kt),
  set: (t) => {
    Kt = t, queueMicrotask(Ho);
  }
}, _o = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => C.update(e, !0),
    stop: () => q(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => F.isProcessing ? F.timestamp : ct.now()
  };
}, Fn = 2e4;
function Bn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < Fn; )
    e += n, s = t.next(e);
  return e >= Fn ? 1 / 0 : e;
}
const zo = {
  decay: En,
  inertia: En,
  tween: te,
  keyframes: te,
  spring: mi
}, Ko = (t) => t / 100;
function ee({ autoplay: t = !0, delay: e = 0, driver: n = _o, keyframes: s, type: i = "keyframes", repeat: o = 0, repeatDelay: r = 0, repeatType: a = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: h, ...f }) {
  let d = 1, p = !1, m, y;
  const P = () => {
    y = new Promise((S) => {
      m = S;
    });
  };
  P();
  let v;
  const g = zo[i] || te;
  let x;
  g !== te && typeof s[0] != "number" && (process.env.NODE_ENV !== "production" && $(s.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${s}`), x = Y(Ko, fi(s[0], s[1])), s = [0, 100]);
  const b = g({ ...f, keyframes: s });
  let L;
  a === "mirror" && (L = g({
    ...f,
    keyframes: [...s].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let A = "idle", V = null, D = null, H = null;
  b.calculatedDuration === null && o && (b.calculatedDuration = Bn(b));
  const { calculatedDuration: ht } = b;
  let W = 1 / 0, _ = 1 / 0;
  ht !== null && (W = ht + r, _ = W * (o + 1) - r);
  let O = 0;
  const ft = (S) => {
    if (D === null)
      return;
    d > 0 && (D = Math.min(D, S)), d < 0 && (D = Math.min(S - _ / d, D)), V !== null ? O = V : O = Math.round(S - D) * d;
    const Vt = O - e * (d >= 0 ? 1 : -1), un = d >= 0 ? Vt < 0 : Vt > _;
    O = Math.max(Vt, 0), A === "finished" && V === null && (O = _);
    let hn = O, fn = b;
    if (o) {
      const he = Math.min(O, _) / W;
      let Ut = Math.floor(he), it = he % 1;
      !it && he >= 1 && (it = 1), it === 1 && Ut--, Ut = Math.min(Ut, o + 1), !!(Ut % 2) && (a === "reverse" ? (it = 1 - it, r && (it -= r / W)) : a === "mirror" && (fn = L)), hn = et(0, 1, it) * W;
    }
    const At = un ? { done: !1, value: s[0] } : fn.next(hn);
    x && (At.value = x(At.value));
    let { done: dn } = At;
    !un && ht !== null && (dn = d >= 0 ? O >= _ : O <= 0);
    const Wi = V === null && (A === "finished" || A === "running" && dn);
    return h && h(At.value), Wi && bt(), At;
  }, E = () => {
    v && v.stop(), v = void 0;
  }, Z = () => {
    A = "idle", E(), m(), P(), D = H = null;
  }, bt = () => {
    A = "finished", u && u(), E(), m();
  }, dt = () => {
    if (p)
      return;
    v || (v = n(ft));
    const S = v.now();
    l && l(), V !== null ? D = S - V : (!D || A === "finished") && (D = S), A === "finished" && P(), H = D, V = null, A = "running", v.start();
  };
  t && dt();
  const cn = {
    then(S, Vt) {
      return y.then(S, Vt);
    },
    get time() {
      return X(O);
    },
    set time(S) {
      S = tt(S), O = S, V !== null || !v || d === 0 ? V = S : D = v.now() - S / d;
    },
    get duration() {
      const S = b.calculatedDuration === null ? Bn(b) : b.calculatedDuration;
      return X(S);
    },
    get speed() {
      return d;
    },
    set speed(S) {
      S === d || !v || (d = S, cn.time = X(O));
    },
    get state() {
      return A;
    },
    play: dt,
    pause: () => {
      A = "paused", V = O;
    },
    stop: () => {
      p = !0, A !== "idle" && (A = "idle", c && c(), Z());
    },
    cancel: () => {
      H !== null && ft(H), Z();
    },
    complete: () => {
      A = "finished";
    },
    sample: (S) => (D = 0, ft(S))
  };
  return cn;
}
function Yo(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Xo = Yo(() => Object.hasOwnProperty.call(Element.prototype, "animate")), qo = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]), Gt = 10, Zo = 2e4, Qo = (t, e) => e.type === "spring" || t === "backgroundColor" || !Zs(e.ease);
function Jo(t, e, { onUpdate: n, onComplete: s, ...i }) {
  if (!(Xo() && qo.has(e) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
    return !1;
  let r = !1, a, l, c = !1;
  const u = () => {
    l = new Promise((g) => {
      a = g;
    });
  };
  u();
  let { keyframes: h, duration: f = 300, ease: d, times: p } = i;
  if (Qo(e, i)) {
    const g = ee({
      ...i,
      repeat: 0,
      delay: 0
    });
    let x = { done: !1, value: h[0] };
    const b = [];
    let L = 0;
    for (; !x.done && L < Zo; )
      x = g.sample(L), b.push(x.value), L += Gt;
    p = void 0, h = b, f = L - Gt, d = "linear";
  }
  const m = no(t.owner.current, e, h, {
    ...i,
    duration: f,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: d,
    times: p
  }), y = () => {
    c = !1, m.cancel();
  }, P = () => {
    c = !0, C.update(y), a(), u();
  };
  return m.onfinish = () => {
    c || (t.set(so(h, i)), s && s(), P());
  }, {
    then(g, x) {
      return l.then(g, x);
    },
    attachTimeline(g) {
      return m.timeline = g, m.onfinish = null, R;
    },
    get time() {
      return X(m.currentTime || 0);
    },
    set time(g) {
      m.currentTime = tt(g);
    },
    get speed() {
      return m.playbackRate;
    },
    set speed(g) {
      m.playbackRate = g;
    },
    get duration() {
      return X(f);
    },
    play: () => {
      r || (m.play(), q(y));
    },
    pause: () => m.pause(),
    stop: () => {
      if (r = !0, m.playState === "idle")
        return;
      const { currentTime: g } = m;
      if (g) {
        const x = ee({
          ...i,
          autoplay: !1
        });
        t.setWithVelocity(x.sample(g - Gt).value, x.sample(g).value, Gt);
      }
      P();
    },
    complete: () => {
      c || m.finish();
    },
    cancel: P
  };
}
function ta({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
  const i = () => (n && n(t[t.length - 1]), s && s(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: R,
    pause: R,
    stop: R,
    then: (o) => (o(), Promise.resolve()),
    cancel: R,
    complete: R
  });
  return e ? ee({
    keyframes: [0, 1],
    duration: 0,
    delay: e,
    onComplete: i
  }) : i();
}
const ea = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, na = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), sa = {
  type: "keyframes",
  duration: 0.8
}, ia = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ra = (t, { keyframes: e }) => e.length > 2 ? sa : ut.has(t) ? t.startsWith("scale") ? na(e[1]) : ea : ia, De = (t, e) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(nt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url(")), oa = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function aa(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(He) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = oa.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const la = /([a-z-]*)\(.*?\)/g, Me = {
  ...nt,
  getAnimatableNone: (t) => {
    const e = t.match(la);
    return e ? e.map(aa).join(" ") : t;
  }
}, ca = {
  ...Os,
  // Color props
  color: B,
  backgroundColor: B,
  outlineColor: B,
  fill: B,
  stroke: B,
  // Border props
  borderColor: B,
  borderTopColor: B,
  borderRightColor: B,
  borderBottomColor: B,
  borderLeftColor: B,
  filter: Me,
  WebkitFilter: Me
}, en = (t) => ca[t];
function gi(t, e) {
  let n = en(t);
  return n !== Me && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const yi = (t) => /^0[^.\s]+$/.test(t);
function ua(t) {
  if (typeof t == "number")
    return t === 0;
  if (t !== null)
    return t === "none" || t === "0" || yi(t);
}
function ha(t, e, n, s) {
  const i = De(e, n);
  let o;
  Array.isArray(n) ? o = [...n] : o = [null, n];
  const r = s.from !== void 0 ? s.from : t.get();
  let a;
  const l = [];
  for (let c = 0; c < o.length; c++)
    o[c] === null && (o[c] = c === 0 ? r : o[c - 1]), ua(o[c]) && l.push(c), typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (a = o[c]);
  if (i && l.length && a)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      o[u] = gi(e, a);
    }
  return o;
}
function fa({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function nn(t, e) {
  return t[e] || t.default || t;
}
const sn = (t, e, n, s = {}) => (i) => {
  const o = nn(s, t) || {}, r = o.delay || s.delay || 0;
  let { elapsed: a = 0 } = s;
  a = a - tt(r);
  const l = ha(e, t, n, o), c = l[0], u = l[l.length - 1], h = De(t, c), f = De(t, u);
  It(h === f, `You are trying to animate ${t} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let d = {
    keyframes: l,
    velocity: e.getVelocity(),
    ease: "easeOut",
    ...o,
    delay: -a,
    onUpdate: (p) => {
      e.set(p), o.onUpdate && o.onUpdate(p);
    },
    onComplete: () => {
      i(), o.onComplete && o.onComplete();
    }
  };
  if (fa(o) || (d = {
    ...d,
    ...ra(t, d)
  }), d.duration && (d.duration = tt(d.duration)), d.repeatDelay && (d.repeatDelay = tt(d.repeatDelay)), !h || !f || eo.current || o.type === !1 || Cs.skipAnimations)
    return ta(d);
  if (
    /**
     * If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    !s.isHandoff && e.owner && e.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !e.owner.getProps().onUpdate
  ) {
    const p = Jo(e, t, d);
    if (p)
      return p;
  }
  return ee(d);
};
function ne(t) {
  return !!(j(t) && t.add);
}
const vi = (t) => /^\-?\d*\.?\d+$/.test(t);
function rn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function on(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class an {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return rn(this.subscriptions, e), () => on(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const On = /* @__PURE__ */ new Set();
function ln(t, e, n) {
  t || On.has(e) || (console.warn(e), n && console.warn(n), On.add(e));
}
const kn = 30, da = (t) => !isNaN(parseFloat(t));
class pa {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "11.0.8", this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (s, i = !0) => {
      const o = ct.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.canTrackVelocity = da(this.current), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = ct.now();
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && ln(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new an());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), C.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = ct.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > kn)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, kn);
    return di(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function vt(t, e) {
  return new pa(t, e);
}
const xi = (t) => (e) => e.test(t), ma = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Ti = [Pt, T, G, Q, xr, vr, ma], St = (t) => Ti.find(xi(t)), ga = [...Ti, B, nt], ya = (t) => ga.find(xi(t));
function va(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, vt(n));
}
function xa(t, e) {
  const n = ue(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n ? t.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = Br(o[r]);
    va(t, r, a);
  }
}
function Ta(t, e, n) {
  var s, i;
  const o = Object.keys(e).filter((a) => !t.hasValue(a)), r = o.length;
  if (r)
    for (let a = 0; a < r; a++) {
      const l = o[a], c = e[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (i = (s = n[l]) !== null && s !== void 0 ? s : t.readValue(l)) !== null && i !== void 0 ? i : e[l]), u != null && (typeof u == "string" && (vi(u) || yi(u)) ? u = parseFloat(u) : !ya(u) && nt.test(c) && (u = gi(l, c)), t.addValue(l, vt(u, { owner: t })), n[l] === void 0 && (n[l] = u), u !== null && t.setBaseTarget(l, u));
    }
}
function Pa(t, e) {
  return e ? (e[t] || e.default || e).from : void 0;
}
function ba(t, e, n) {
  const s = {};
  for (const i in t) {
    const o = Pa(i, e);
    if (o !== void 0)
      s[i] = o;
    else {
      const r = n.getValue(i);
      r && (s[i] = r.get());
    }
  }
  return s;
}
function Va({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function Aa(t, e) {
  const n = t.get();
  if (Array.isArray(e)) {
    for (let s = 0; s < e.length; s++)
      if (e[s] !== n)
        return !0;
  } else
    return n !== e;
}
function Pi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = t.makeTargetAnimatable(e);
  const l = t.getValue("willChange");
  s && (o = s);
  const c = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const h in a) {
    const f = t.getValue(h), d = a[h];
    if (!f || d === void 0 || u && Va(u, h))
      continue;
    const p = {
      delay: n,
      elapsed: 0,
      ...nn(o || {}, h)
    };
    if (window.HandoffAppearAnimations) {
      const P = t.getProps()[ws];
      if (P) {
        const v = window.HandoffAppearAnimations(P, h, f, C);
        v !== null && (p.elapsed = v, p.isHandoff = !0);
      }
    }
    let m = !p.isHandoff && !Aa(f, d);
    if (p.type === "spring" && (f.getVelocity() || p.velocity) && (m = !1), f.animation && (m = !1), m)
      continue;
    f.start(sn(h, f, d, t.shouldReduceMotion && ut.has(h) ? { type: !1 } : p));
    const y = f.animation;
    ne(l) && (l.add(h), y.then(() => l.remove(h))), c.push(y);
  }
  return r && Promise.all(c).then(() => {
    r && xa(t, r);
  }), c;
}
function Re(t, e, n = {}) {
  const s = ue(t, e, n.custom);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Pi(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: h } = i;
    return Sa(t, e, c + l, u, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => c());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function Sa(t, e, n = 0, s = 0, i = 1, o) {
  const r = [], a = (t.variantChildren.size - 1) * s, l = i === 1 ? (c = 0) => c * s : (c = 0) => a - c * s;
  return Array.from(t.variantChildren).sort(wa).forEach((c, u) => {
    c.notify("AnimationStart", e), r.push(Re(c, e, {
      ...o,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", e)));
  }), Promise.all(r);
}
function wa(t, e) {
  return t.sortNodePosition(e);
}
function Ca(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => Re(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = Re(t, e, n);
  else {
    const i = typeof e == "function" ? ue(t, e, n.custom) : e;
    s = Promise.all(Pi(t, i, n));
  }
  return s.then(() => t.notify("AnimationComplete", e));
}
const Da = [...We].reverse(), Ma = We.length;
function Ra(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => Ca(t, n, s)));
}
function La(t) {
  let e = Ra(t);
  const n = Fa();
  let s = !0;
  const i = (l, c) => {
    const u = ue(t, c);
    if (u) {
      const { transition: h, transitionEnd: f, ...d } = u;
      l = { ...l, ...d, ...f };
    }
    return l;
  };
  function o(l) {
    e = l(t);
  }
  function r(l, c) {
    const u = t.getProps(), h = t.getVariantContext(!0) || {}, f = [], d = /* @__PURE__ */ new Set();
    let p = {}, m = 1 / 0;
    for (let P = 0; P < Ma; P++) {
      const v = Da[P], g = n[v], x = u[v] !== void 0 ? u[v] : h[v], b = Et(x), L = v === c ? g.isActive : null;
      L === !1 && (m = P);
      let A = x === h[v] && x !== u[v] && b;
      if (A && s && t.manuallyAnimateOnMount && (A = !1), g.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && L === null || // If we didn't and don't have any defined prop for this animation type
      !x && !g.prevProp || // Or if the prop doesn't define an animation
      ae(x) || typeof x == "boolean")
        continue;
      let D = Ea(g.prevProp, x) || // If we're making this variant active, we want to always make it active
      v === c && g.isActive && !A && b || // If we removed a higher-priority variant (i is in reverse order)
      P > m && b, H = !1;
      const ht = Array.isArray(x) ? x : [x];
      let W = ht.reduce(i, {});
      L === !1 && (W = {});
      const { prevResolvedValues: _ = {} } = g, O = {
        ..._,
        ...W
      }, ft = (E) => {
        D = !0, d.has(E) && (H = !0, d.delete(E)), g.needsAnimating[E] = !0;
      };
      for (const E in O) {
        const Z = W[E], bt = _[E];
        if (p.hasOwnProperty(E))
          continue;
        let dt = !1;
        Qt(Z) && Qt(bt) ? dt = !Xs(Z, bt) : dt = Z !== bt, dt ? Z !== void 0 ? ft(E) : d.add(E) : Z !== void 0 && d.has(E) ? ft(E) : g.protectedKeys[E] = !0;
      }
      g.prevProp = x, g.prevResolvedValues = W, g.isActive && (p = { ...p, ...W }), s && t.blockInitialAnimation && (D = !1), D && (!A || H) && f.push(...ht.map((E) => ({
        animation: E,
        options: { type: v, ...l }
      })));
    }
    if (d.size) {
      const P = {};
      d.forEach((v) => {
        const g = t.getBaseTarget(v);
        g !== void 0 && (P[v] = g);
      }), f.push({ animation: P });
    }
    let y = !!f.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = !1), s = !1, y ? e(f) : Promise.resolve();
  }
  function a(l, c, u) {
    var h;
    if (n[l].isActive === c)
      return Promise.resolve();
    (h = t.variantChildren) === null || h === void 0 || h.forEach((d) => {
      var p;
      return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(l, c);
    }), n[l].isActive = c;
    const f = r(u, l);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n
  };
}
function Ea(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Xs(e, t) : !1;
}
function rt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Fa() {
  return {
    animate: rt(!0),
    whileInView: rt(),
    whileHover: rt(),
    whileTap: rt(),
    whileDrag: rt(),
    whileFocus: rt(),
    exit: rt()
  };
}
class Ba extends st {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = La(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    this.unmount(), ae(e) && (this.unmount = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let Oa = 0;
class ka extends st {
  constructor() {
    super(...arguments), this.id = Oa++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n, custom: s } = this.node.presenceContext, { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === i)
      return;
    const o = this.node.animationState.setActive("exit", !e, { custom: s ?? this.node.getProps().custom });
    n && !e && o.then(() => n(this.id));
  }
  mount() {
    const { register: e } = this.node.presenceContext || {};
    e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const ja = {
  animation: {
    Feature: Ba
  },
  exit: {
    Feature: ka
  }
}, jn = (t, e) => Math.abs(t - e);
function Ia(t, e) {
  const n = jn(t.x, e.x), s = jn(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class bi {
  constructor(e, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Te(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, d = Ia(h.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !d)
        return;
      const { point: p } = h, { timestamp: m } = F;
      this.history.push({ ...p, timestamp: m });
      const { onStart: y, onMove: P } = this.handlers;
      f || (y && y(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), P && P(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, f) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = xe(f, this.transformPagePoint), C.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, f) => {
      this.end();
      const { onEnd: d, onSessionEnd: p, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const y = Te(h.type === "pointercancel" ? this.lastMoveEventInfo : xe(f, this.transformPagePoint), this.history);
      this.startEvent && d && d(h, y), p && p(h, y);
    }, !Hs(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.contextWindow = i || window;
    const r = ce(e), a = xe(r, this.transformPagePoint), { point: l } = a, { timestamp: c } = F;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(e, Te(a, this.history)), this.removeListeners = Y(K(this.contextWindow, "pointermove", this.handlePointerMove), K(this.contextWindow, "pointerup", this.handlePointerUp), K(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), q(this.updatePoint);
  }
}
function xe(t, e) {
  return e ? { point: e(t.point) } : t;
}
function In(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Te({ point: t }, e) {
  return {
    point: t,
    delta: In(t, Vi(e)),
    offset: In(t, Na(e)),
    velocity: Ua(e, 0.1)
  };
}
function Na(t) {
  return t[0];
}
function Vi(t) {
  return t[t.length - 1];
}
function Ua(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = Vi(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > tt(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = X(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function I(t) {
  return t.max - t.min;
}
function Le(t, e = 0, n = 0.01) {
  return Math.abs(t - e) <= n;
}
function Nn(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = w(e.min, e.max, t.origin), t.scale = I(n) / I(e), (Le(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = w(n.min, n.max, t.origin) - t.originPoint, (Le(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function Rt(t, e, n, s) {
  Nn(t.x, e.x, n.x, s ? s.originX : void 0), Nn(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Un(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + I(e);
}
function Wa(t, e, n) {
  Un(t.x, e.x, n.x), Un(t.y, e.y, n.y);
}
function Wn(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + I(e);
}
function Lt(t, e, n) {
  Wn(t.x, e.x, n.x), Wn(t.y, e.y, n.y);
}
function $a(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? w(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? w(n, t, s.max) : Math.min(t, n)), t;
}
function $n(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Ga(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: $n(t.x, n, i),
    y: $n(t.y, e, s)
  };
}
function Gn(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Ha(t, e) {
  return {
    x: Gn(t.x, e.x),
    y: Gn(t.y, e.y)
  };
}
function _a(t, e) {
  let n = 0.5;
  const s = I(t), i = I(e);
  return i > s ? n = Bt(e.min, e.max - s, t.min) : s > i && (n = Bt(t.min, t.max - i, e.min)), et(0, 1, n);
}
function za(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Ee = 0.35;
function Ka(t = Ee) {
  return t === !1 ? t = 0 : t === !0 && (t = Ee), {
    x: Hn(t, "left", "right"),
    y: Hn(t, "top", "bottom")
  };
}
function Hn(t, e, n) {
  return {
    min: _n(t, e),
    max: _n(t, n)
  };
}
function _n(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const zn = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), gt = () => ({
  x: zn(),
  y: zn()
}), Kn = () => ({ min: 0, max: 0 }), M = () => ({
  x: Kn(),
  y: Kn()
});
function U(t) {
  return [t("x"), t("y")];
}
function Ai({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function Ya({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Xa(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function Pe(t) {
  return t === void 0 || t === 1;
}
function Fe({ scale: t, scaleX: e, scaleY: n }) {
  return !Pe(t) || !Pe(e) || !Pe(n);
}
function ot(t) {
  return Fe(t) || Si(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Si(t) {
  return Yn(t.x) || Yn(t.y);
}
function Yn(t) {
  return t && t !== "0%";
}
function se(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Xn(t, e, n, s, i) {
  return i !== void 0 && (t = se(t, i, s)), se(t, n, s) + e;
}
function Be(t, e = 0, n = 1, s, i) {
  t.min = Xn(t.min, e, n, s, i), t.max = Xn(t.max, e, n, s, i);
}
function wi(t, { x: e, y: n }) {
  Be(t.x, e.translate, e.scale, e.originPoint), Be(t.y, n.translate, n.scale, n.originPoint);
}
function qa(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const l = o.instance;
    l && l.style && l.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && yt(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, wi(t, r)), s && ot(o.latestValues) && yt(t, o.latestValues));
  }
  e.x = qn(e.x), e.y = qn(e.y);
}
function qn(t) {
  return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function J(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Zn(t, e, [n, s, i]) {
  const o = e[i] !== void 0 ? e[i] : 0.5, r = w(t.min, t.max, o);
  Be(t, e[n], e[s], r, e.scale);
}
const Za = ["x", "scaleX", "originX"], Qa = ["y", "scaleY", "originY"];
function yt(t, e) {
  Zn(t.x, e, Za), Zn(t.y, e, Qa);
}
function Ci(t, e) {
  return Ai(Xa(t.getBoundingClientRect(), e));
}
function Ja(t, e, n) {
  const s = Ci(t, n), { scroll: i } = e;
  return i && (J(s.x, i.offset.x), J(s.y, i.offset.y)), s;
}
const Di = ({ current: t }) => t ? t.ownerDocument.defaultView : null, tl = /* @__PURE__ */ new WeakMap();
class el {
  constructor(e) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = M(), this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (u) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ce(u, "page").point);
    }, o = (u, h) => {
      const { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
      if (f && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = zs(f), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), U((y) => {
        let P = this.getAxisMotionValue(y).get() || 0;
        if (G.test(P)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const g = v.layout.layoutBox[y];
            g && (P = I(g) * (parseFloat(P) / 100));
          }
        }
        this.originPoint[y] = P;
      }), p && C.update(() => p(u, h), !1, !0);
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, r = (u, h) => {
      const { dragPropagation: f, dragDirectionLock: d, onDirectionLock: p, onDrag: m } = this.getProps();
      if (!f && !this.openGlobalLock)
        return;
      const { offset: y } = h;
      if (d && this.currentDirection === null) {
        this.currentDirection = nl(y), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, y), this.updateAxis("y", h.point, y), this.visualElement.render(), m && m(u, h);
    }, a = (u, h) => this.stop(u, h), l = () => U((u) => {
      var h;
      return this.getAnimationState(u) === "paused" && ((h = this.getAxisMotionValue(u).animation) === null || h === void 0 ? void 0 : h.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new bi(e, {
      onSessionStart: i,
      onStart: o,
      onMove: r,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: Di(this.visualElement)
    });
  }
  stop(e, n) {
    const s = this.isDragging;
    if (this.cancel(), !s)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && C.update(() => o(e, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Ht(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = $a(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var e;
    const { dragConstraints: n, dragElastic: s } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (e = this.visualElement.projection) === null || e === void 0 ? void 0 : e.layout, o = this.constraints;
    n && pt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Ga(i.layoutBox, n) : this.constraints = !1, this.elastic = Ka(s), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && U((r) => {
      this.getAxisMotionValue(r) && (this.constraints[r] = za(i.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !pt(e))
      return !1;
    const s = e.current;
    $(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Ja(s, i.root, this.visualElement.getTransformPagePoint());
    let r = Ha(i.layout.layoutBox, o);
    if (n) {
      const a = n(Ya(r));
      this.hasMutatedConstraints = !!a, a && (r = Ai(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = U((u) => {
      if (!Ht(u, n, this.currentDirection))
        return;
      let h = l && l[u] || {};
      r && (h = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, d = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: s ? e[u] : 0,
        bounceStiffness: f,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(u, p);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return s.start(sn(e, s, 0, n));
  }
  stopAnimation() {
    U((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    U((e) => {
      var n;
      return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(e) {
    var n;
    return (n = this.getAxisMotionValue(e).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = "_drag" + e.toUpperCase(), s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    U((n) => {
      const { drag: s } = this.getProps();
      if (!Ht(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - w(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!pt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    U((r) => {
      const a = this.getAxisMotionValue(r);
      if (a) {
        const l = a.get();
        i[r] = _a({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), U((r) => {
      if (!Ht(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: c } = this.constraints[r];
      a.set(w(l, c, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    tl.set(this.visualElement, this);
    const e = this.visualElement.current, n = K(e, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      pt(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
    const r = z(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (U((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += l[u].translate, h.set(h.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = Ee, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function Ht(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function nl(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class sl extends st {
  constructor(e) {
    super(e), this.removeGroupControls = R, this.removeListeners = R, this.controls = new el(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || R;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qn = (t) => (e, n) => {
  t && C.update(() => t(e, n));
};
class il extends st {
  constructor() {
    super(...arguments), this.removePointerDownListener = R;
  }
  onPointerDown(e) {
    this.session = new bi(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Di(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Qn(e),
      onStart: Qn(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && C.update(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = K(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function rl() {
  const t = k(Ie);
  if (t === null)
    return [!0, null];
  const { isPresent: e, onExitComplete: n, register: s } = t, i = Yi();
  return je(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
const Yt = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Jn(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const wt = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (T.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = Jn(t, e.target.x), s = Jn(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, ol = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = nt.parse(t);
    if (i.length > 5)
      return s;
    const o = nt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const c = w(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= c), typeof i[3 + r] == "number" && (i[3 + r] /= c), o(i);
  }
};
class al extends Vs.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    cr(ll), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Yt.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, r = s.projection;
    return r && (r.isPresent = o, i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || C.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Ue.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function Mi(t) {
  const [e, n] = rl(), s = k(Rs);
  return Vs.createElement(al, { ...t, layoutGroup: s, switchLayoutGroup: k(Ls), isPresent: e, safeToRemove: n });
}
const ll = {
  borderRadius: {
    ...wt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: wt,
  borderTopRightRadius: wt,
  borderBottomLeftRadius: wt,
  borderBottomRightRadius: wt,
  boxShadow: ol
}, Ri = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], cl = Ri.length, ts = (t) => typeof t == "string" ? parseFloat(t) : t, es = (t) => typeof t == "number" || T.test(t);
function ul(t, e, n, s, i, o) {
  i ? (t.opacity = w(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    hl(s)
  ), t.opacityExit = w(e.opacity !== void 0 ? e.opacity : 1, 0, fl(s))) : o && (t.opacity = w(e.opacity !== void 0 ? e.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, s));
  for (let r = 0; r < cl; r++) {
    const a = `border${Ri[r]}Radius`;
    let l = ns(e, a), c = ns(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || es(l) === es(c) ? (t[a] = Math.max(w(ts(l), ts(c), s), 0), (G.test(c) || G.test(l)) && (t[a] += "%")) : t[a] = c;
  }
  (e.rotate || n.rotate) && (t.rotate = w(e.rotate || 0, n.rotate || 0, s));
}
function ns(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const hl = Li(0, 0.5, ii), fl = Li(0.5, 0.95, R);
function Li(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(Bt(t, e, s));
}
function ss(t, e) {
  t.min = e.min, t.max = e.max;
}
function N(t, e) {
  ss(t.x, e.x), ss(t.y, e.y);
}
function is(t, e, n, s, i) {
  return t -= e, t = se(t, 1 / n, s), i !== void 0 && (t = se(t, 1 / i, s)), t;
}
function dl(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (G.test(e) && (e = parseFloat(e), e = w(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = w(o.min, o.max, s);
  t === o && (a -= e), t.min = is(t.min, e, n, a, i), t.max = is(t.max, e, n, a, i);
}
function rs(t, e, [n, s, i], o, r) {
  dl(t, e[n], e[s], e[i], e.scale, o, r);
}
const pl = ["x", "scaleX", "originX"], ml = ["y", "scaleY", "originY"];
function os(t, e, n, s) {
  rs(t.x, e, pl, n ? n.x : void 0, s ? s.x : void 0), rs(t.y, e, ml, n ? n.y : void 0, s ? s.y : void 0);
}
function as(t) {
  return t.translate === 0 && t.scale === 1;
}
function Ei(t) {
  return as(t.x) && as(t.y);
}
function gl(t, e) {
  return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Fi(t, e) {
  return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max);
}
function ls(t) {
  return I(t.x) / I(t.y);
}
class yl {
  constructor() {
    this.members = [];
  }
  add(e) {
    rn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (on(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function cs(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y;
  if ((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { rotate: l, rotateX: c, rotateY: u } = n;
    l && (s += `rotate(${l}deg) `), c && (s += `rotateX(${c}deg) `), u && (s += `rotateY(${u}deg) `);
  }
  const r = t.x.scale * e.x, a = t.y.scale * e.y;
  return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || "none";
}
const vl = (t, e) => t.depth - e.depth;
class xl {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    rn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    on(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(vl), this.isDirty = !1, this.children.forEach(e);
  }
}
function Tl(t, e) {
  const n = ct.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (q(s), t(o - e));
  };
  return C.read(s, !0), () => q(s);
}
function Pl(t) {
  window.MotionDebug && window.MotionDebug.record(t);
}
function bl(t) {
  return t instanceof SVGElement && t.tagName !== "svg";
}
function Vl(t, e, n) {
  const s = j(t) ? t : vt(t);
  return s.start(sn("", s, e, n)), s.animation;
}
const us = ["", "X", "Y", "Z"], Al = { visibility: "hidden" }, hs = 1e3;
let Sl = 0;
const at = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function Bi({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = Sl++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0, this.nodes.forEach(Dl), this.nodes.forEach(Fl), this.nodes.forEach(Bl), this.nodes.forEach(Ml), Pl(at);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xl());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new an()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = bl(r), this.instance = r;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (c || l) && (this.isLayoutDirty = !0), t) {
        let h;
        const f = () => this.root.updateBlockedByResize = !1;
        t(r, () => {
          this.root.updateBlockedByResize = !0, h && h(), h = Tl(f, 250), Yt.hasAnimatedSinceResize && (Yt.hasAnimatedSinceResize = !1, this.nodes.forEach(ds));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || Nl, { onLayoutAnimationStart: y, onLayoutAnimationComplete: P } = u.getProps(), v = !this.targetLayout || !Fi(this.targetLayout, p) || d, g = !f && d;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || f && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(h, g);
          const x = {
            ...nn(m, "layout"),
            onPlay: y,
            onComplete: P
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          f || ds(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, q(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ol), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(fs);
        return;
      }
      this.isUpdating || this.nodes.forEach(Ll), this.isUpdating = !1, window.HandoffCancelAllAnimations && window.HandoffCancelAllAnimations(), this.nodes.forEach(El), this.nodes.forEach(wl), this.nodes.forEach(Cl), this.clearAllSnapshots();
      const a = ct.now();
      F.delta = et(0, 1e3 / 60, a - F.timestamp), F.timestamp = a, F.isProcessing = !0, fe.update.process(F), fe.preRender.process(F), fe.render.process(F), F.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ue.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Rl), this.sharedNodes.forEach(kl);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, C.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      C.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = M(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: r,
        isRoot: s(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Ei(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      r && (a || ot(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Ul(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return M();
      const a = r.measureViewportBox(), { scroll: l } = this.root;
      return l && (J(a.x, l.offset.x), J(a.y, l.offset.y)), a;
    }
    removeElementScroll(r) {
      const a = M();
      N(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: h } = c;
        if (c !== this.root && u && h.layoutScroll) {
          if (u.isRoot) {
            N(a, r);
            const { scroll: f } = this.root;
            f && (J(a.x, -f.offset.x), J(a.y, -f.offset.y));
          }
          J(a.x, u.offset.x), J(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = M();
      N(l, r);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && yt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), ot(u.latestValues) && yt(l, u.latestValues);
      }
      return ot(this.latestValues) && yt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = M();
      N(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !ot(c.latestValues))
          continue;
        Fe(c.latestValues) && c.updateSnapshot();
        const u = M(), h = c.measurePageBox();
        N(u, h), os(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return ot(this.latestValues) && os(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== F.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(r || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: h, layoutId: f } = this.options;
      if (!(!this.layout || !(h || f))) {
        if (this.resolvedRelativeTargetAt = F.timestamp, !this.targetDelta && !this.relativeTarget) {
          const d = this.getClosestProjectingParent();
          d && d.layout && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Lt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = M(), this.targetWithTransforms = M()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Wa(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : N(this.target, this.layout.layoutBox), wi(this.target, this.targetDelta)) : N(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const d = this.getClosestProjectingParent();
            d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? (this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = M(), this.relativeTargetOrigin = M(), Lt(this.relativeTargetOrigin, this.target, d.target), N(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          at.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fe(this.parent.latestValues) || Si(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var r;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let c = !0;
      if ((this.isProjectionDirty || !((r = this.parent) === null || r === void 0) && r.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === F.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || h))
        return;
      N(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, d = this.treeScale.y;
      qa(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = M());
      const { target: p } = a;
      if (!p) {
        this.projectionTransform && (this.projectionDelta = gt(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = gt(), this.projectionDeltaWithTransform = gt());
      const m = this.projectionTransform;
      Rt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), this.projectionTransform = cs(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== f || this.treeScale.y !== d) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p)), at.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, h = gt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = M(), d = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, m = d !== p, y = this.getStack(), P = !y || y.members.length <= 1, v = !!(m && !P && this.options.crossfade === !0 && !this.path.some(Il));
      this.animationProgress = 0;
      let g;
      this.mixTargetDelta = (x) => {
        const b = x / 1e3;
        ps(h.x, r.x, b), ps(h.y, r.y, b), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Lt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), jl(this.relativeTarget, this.relativeTargetOrigin, f, b), g && gl(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = M()), N(g, this.relativeTarget)), m && (this.animationValues = u, ul(u, c, this.latestValues, b, v, P)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (q(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = C.update(() => {
        Yt.hasAnimatedSinceResize = !0, this.currentAnimation = Vl(0, hs, {
          ...r,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = r;
      if (!(!a || !l || !c)) {
        if (this !== r && this.layout && c && Oi(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || M();
          const h = I(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = I(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        N(a, l), yt(a, u), Rt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new yl()), this.sharedNodes.get(r).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
    }
    getPrevLead() {
      var r;
      const { layoutId: a } = this.options;
      return a ? (r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
        return;
      const c = {};
      for (let u = 0; u < us.length; u++) {
        const h = "rotate" + us[u];
        l[h] && (c[h] = l[h], r.setStaticValue(h, 0));
      }
      r.render();
      for (const u in c)
        r.setStaticValue(u, c[u]);
      r.scheduleRender();
    }
    getProjectionStyles(r) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return Al;
      const c = {
        visibility: ""
      }, u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = zt(r == null ? void 0 : r.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = zt(r == null ? void 0 : r.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (m.transform = u ? u({}, "") : "none", this.hasProjected = !1), m;
      }
      const f = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(), c.transform = cs(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: d, y: p } = this.projectionDelta;
      c.transformOrigin = `${d.origin * 100}% ${p.origin * 100}% 0`, h.animationValues ? c.opacity = h === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = h === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const m in Xt) {
        if (f[m] === void 0)
          continue;
        const { correct: y, applyTo: P } = Xt[m], v = c.transform === "none" ? f[m] : y(f[m], h);
        if (P) {
          const g = P.length;
          for (let x = 0; x < g; x++)
            c[P[x]] = v;
        } else
          c[m] = v;
      }
      return this.options.layoutId && (c.pointerEvents = h === this ? zt(r == null ? void 0 : r.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => {
        var a;
        return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(fs), this.root.sharedNodes.clear();
    }
  };
}
function wl(t) {
  t.updateLayout();
}
function Cl(t) {
  var e;
  const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = t.layout, { animationType: o } = t.options, r = n.source !== t.layout.source;
    o === "size" ? U((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = I(f);
      f.min = s[h].min, f.max = f.min + d;
    }) : Oi(o, n.layoutBox, s) && U((h) => {
      const f = r ? n.measuredBox[h] : n.layoutBox[h], d = I(s[h]);
      f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[h].max = t.relativeTarget[h].min + d);
    });
    const a = gt();
    Rt(a, s, n.layoutBox);
    const l = gt();
    r ? Rt(l, t.applyTransform(i, !0), n.measuredBox) : Rt(l, s, n.layoutBox);
    const c = !Ei(a);
    let u = !1;
    if (!t.resumeFrom) {
      const h = t.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: f, layout: d } = h;
        if (f && d) {
          const p = M();
          Lt(p, n.layoutBox, f.layoutBox);
          const m = M();
          Lt(m, s, d.layoutBox), Fi(p, m) || (u = !0), h.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = h);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: s,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: s } = t.options;
    s && s();
  }
  t.options.transition = void 0;
}
function Dl(t) {
  at.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Ml(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Rl(t) {
  t.clearSnapshot();
}
function fs(t) {
  t.clearMeasurements();
}
function Ll(t) {
  t.isLayoutDirty = !1;
}
function El(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function ds(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function Fl(t) {
  t.resolveTargetDelta();
}
function Bl(t) {
  t.calcProjection();
}
function Ol(t) {
  t.resetRotation();
}
function kl(t) {
  t.removeLeadSnapshot();
}
function ps(t, e, n) {
  t.translate = w(e.translate, 0, n), t.scale = w(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function ms(t, e, n, s) {
  t.min = w(e.min, n.min, s), t.max = w(e.max, n.max, s);
}
function jl(t, e, n, s) {
  ms(t.x, e.x, n.x, s), ms(t.y, e.y, n.y, s);
}
function Il(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Nl = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, gs = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ys = gs("applewebkit/") && !gs("chrome/") ? Math.round : R;
function vs(t) {
  t.min = ys(t.min), t.max = ys(t.max);
}
function Ul(t) {
  vs(t.x), vs(t.y);
}
function Oi(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Le(ls(e), ls(n), 0.2);
}
const Wl = Bi({
  attachResizeListener: (t, e) => z(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), be = {
  current: void 0
}, ki = Bi({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!be.current) {
      const t = new Wl({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), be.current = t;
    }
    return be.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), $l = {
  pan: {
    Feature: il
  },
  drag: {
    Feature: sl,
    ProjectionNode: ki,
    MeasureLayout: Mi
  }
}, Gl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Hl(t) {
  const e = Gl.exec(t);
  if (!e)
    return [,];
  const [, n, s] = e;
  return [n, s];
}
const _l = 4;
function Oe(t, e, n = 1) {
  $(n <= _l, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, i] = Hl(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return vi(r) ? parseFloat(r) : r;
  } else
    return qt(i) ? Oe(i, e, n + 1) : i;
}
function zl(t, { ...e }, n) {
  const s = t.current;
  if (!(s instanceof Element))
    return { target: e, transitionEnd: n };
  n && (n = { ...n }), t.values.forEach((i) => {
    const o = i.get();
    if (!qt(o))
      return;
    const r = Oe(o, s);
    r && i.set(r);
  });
  for (const i in e) {
    const o = e[i];
    if (!qt(o))
      continue;
    const r = Oe(o, s);
    r && (e[i] = r, n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: e, transitionEnd: n };
}
const Kl = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), ji = (t) => Kl.has(t), Yl = (t) => Object.keys(t).some(ji), _t = (t) => t === Pt || t === T, xs = (t, e) => parseFloat(t.split(", ")[e]), Ts = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const i = s.match(/^matrix3d\((.+)\)$/);
  if (i)
    return xs(i[1], e);
  {
    const o = s.match(/^matrix\((.+)\)$/);
    return o ? xs(o[1], t) : 0;
  }
}, Xl = /* @__PURE__ */ new Set(["x", "y", "z"]), ql = Ot.filter((t) => !Xl.has(t));
function Zl(t) {
  const e = [];
  return ql.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e.length && t.render(), e;
}
const xt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: Ts(4, 13),
  y: Ts(5, 14)
};
xt.translateX = xt.x;
xt.translateY = xt.y;
const Ql = (t, e, n) => {
  const s = e.measureViewportBox(), i = e.current, o = getComputedStyle(i), { display: r } = o, a = {};
  r === "none" && e.setStaticValue("display", t.display || "block"), n.forEach((c) => {
    a[c] = xt[c](s, o);
  }), e.render();
  const l = e.measureViewportBox();
  return n.forEach((c) => {
    const u = e.getValue(c);
    u && u.jump(a[c]), t[c] = xt[c](l, o);
  }), t;
}, Jl = (t, e, n = {}, s = {}) => {
  e = { ...e }, s = { ...s };
  const i = Object.keys(e).filter(ji);
  let o = [], r = !1;
  const a = [];
  if (i.forEach((l) => {
    const c = t.getValue(l);
    if (!t.hasValue(l))
      return;
    let u = n[l], h = St(u);
    const f = e[l];
    let d;
    if (Qt(f)) {
      const p = f.length, m = f[0] === null ? 1 : 0;
      u = f[m], h = St(u);
      for (let y = m; y < p && f[y] !== null; y++)
        d ? $(St(f[y]) === d, "All keyframes must be of the same type") : (d = St(f[y]), $(d === h || _t(h) && _t(d), "Keyframes must be of the same dimension as the current value"));
    } else
      d = St(f);
    if (h !== d)
      if (_t(h) && _t(d)) {
        const p = c.get();
        typeof p == "string" && c.set(parseFloat(p)), typeof f == "string" ? e[l] = parseFloat(f) : Array.isArray(f) && d === T && (e[l] = f.map(parseFloat));
      } else
        h != null && h.transform && (d != null && d.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(d.transform(u)) : e[l] = h.transform(f) : (r || (o = Zl(t), r = !0), a.push(l), s[l] = s[l] !== void 0 ? s[l] : e[l], c.jump(f));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, c = Ql(e, t, a);
    return o.length && o.forEach(([u, h]) => {
      t.getValue(u).set(h);
    }), t.render(), oe && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: s };
  } else
    return { target: e, transitionEnd: s };
};
function tc(t, e, n, s) {
  return Yl(e) ? Jl(t, e, n, s) : { target: e, transitionEnd: s };
}
const ec = (t, e, n, s) => {
  const i = zl(t, e, s);
  return e = i.target, s = i.transitionEnd, tc(t, e, n, s);
}, ke = { current: null }, Ii = { current: !1 };
function nc() {
  if (Ii.current = !0, !!oe)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => ke.current = t.matches;
      t.addListener(e), e();
    } else
      ke.current = !1;
}
function sc(t, e, n) {
  const { willChange: s } = e;
  for (const i in e) {
    const o = e[i], r = n[i];
    if (j(o))
      t.addValue(i, o), ne(s) && s.add(i), process.env.NODE_ENV === "development" && ln(o.version === "11.0.8", `Attempting to mix Framer Motion versions ${o.version} with 11.0.8 may not work as expected.`);
    else if (j(r))
      t.addValue(i, vt(o, { owner: t })), ne(s) && s.remove(i);
    else if (r !== o)
      if (t.hasValue(i)) {
        const a = t.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = t.getStaticValue(i);
        t.addValue(i, vt(a !== void 0 ? a : o, { owner: t }));
      }
  }
  for (const i in n)
    e[i] === void 0 && t.removeValue(i);
  return e;
}
const Ps = /* @__PURE__ */ new WeakMap(), Ni = Object.keys(Ft), ic = Ni.length, bs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], rc = $e.length;
class oc {
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, visualState: o }, r = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => C.render(this.render, !1, !0);
    const { latestValues: a, renderState: l } = o;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = r, this.isControllingVariants = le(n), this.isVariantNode = Ms(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {});
    for (const h in u) {
      const f = u[h];
      a[h] !== void 0 && j(f) && (f.set(a[h], !1), ne(c) && c.add(h));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n) {
    return {};
  }
  mount(e) {
    this.current = e, Ps.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Ii.current || nc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ke.current, process.env.NODE_ENV !== "production" && ln(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ps.delete(this.current), this.projection && this.projection.unmount(), q(this.notifyUpdate), q(this.render), this.valueSubscriptions.forEach((e) => e()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features)
      this.features[e].unmount();
    this.current = null;
  }
  bindToMotionValue(e, n) {
    const s = ut.has(e), i = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && C.update(this.notifyUpdate, !1, !0), s && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i(), o();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...n }, s, i, o) {
    let r, a;
    if (process.env.NODE_ENV !== "production" && i && s) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      n.ignoreStrict ? It(!1, l) : $(!1, l);
    }
    for (let l = 0; l < ic; l++) {
      const c = Ni[l], { isEnabled: u, Feature: h, ProjectionNode: f, MeasureLayout: d } = Ft[c];
      f && (r = f), u(n) && (!this.features[c] && h && (this.features[c] = new h(this)), d && (a = d));
    }
    if ((this.type === "html" || this.type === "svg") && !this.projection && r) {
      this.projection = new r(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: h, layoutScroll: f, layoutRoot: d } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || h && pt(h),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: d
      });
    }
    return a;
  }
  updateFeatures() {
    for (const e in this.features) {
      const n = this.features[e];
      n.isMounted ? n.update() : (n.mount(), n.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : M();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(e, n = !0) {
    return this.makeTargetAnimatableFromInstance(e, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < bs.length; s++) {
      const i = bs[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = e["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = sc(this, this.scrapeMotionValuesFromProps(e, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(e = !1) {
    if (e)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const s = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const n = {};
    for (let s = 0; s < rc; s++) {
      const i = $e[s], o = this.props[i];
      (Et(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)), this.values.set(e, n), this.latestValues[e] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = vt(n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e) {
    var n;
    return this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, e, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    var n;
    const { initial: s } = this.props, i = typeof s == "string" || typeof s == "object" ? (n = qe(this.props, s)) === null || n === void 0 ? void 0 : n[e] : void 0;
    if (s && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, e);
    return o !== void 0 && !j(o) ? o : this.initialValues[e] !== void 0 && i === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new an()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
}
class Ui extends oc {
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  makeTargetAnimatableFromInstance({ transition: e, transitionEnd: n, ...s }, i) {
    const o = ba(s, e || {}, this);
    if (i) {
      Ta(this, s, o);
      const r = ec(this, s, o, n);
      n = r.transitionEnd, s = r.target;
    }
    return {
      transition: e,
      transitionEnd: n,
      ...s
    };
  }
}
function ac(t) {
  return window.getComputedStyle(t);
}
class lc extends Ui {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const s = en(n);
      return s && s.default || 0;
    } else {
      const s = ac(e), i = (Bs(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Ci(e, n);
  }
  build(e, n, s, i) {
    _e(e, n, s, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n) {
    return Xe(e, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    j(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(e, n, s, i) {
    Ns(e, n, s, i);
  }
}
class cc extends Ui {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (ut.has(n)) {
      const s = en(n);
      return s && s.default || 0;
    }
    return n = Us.has(n) ? n : Ne(n), e.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return M();
  }
  scrapeMotionValuesFromProps(e, n) {
    return $s(e, n);
  }
  build(e, n, s, i) {
    Ke(e, n, s, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, n, s, i) {
    Ws(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Ye(e.tagName), super.mount(e);
  }
}
const uc = (t, e) => Ge(t) ? new cc(e, { enableHardwareAcceleration: !1 }) : new lc(e, { enableHardwareAcceleration: !0 }), hc = {
  layout: {
    ProjectionNode: ki,
    MeasureLayout: Mi
  }
}, fc = {
  ...ja,
  ...Qr,
  ...$l,
  ...hc
}, yc = /* @__PURE__ */ ar((t, e) => Nr(t, e, fc, uc));
export {
  yc as m
};
