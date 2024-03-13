import L, { useContext as Y, useState as A, useRef as m, useCallback as w, useEffect as M, createContext as nt, useMemo as ot } from "react";
import { c as it } from "./clsx-DB4S2d7J.js";
const ae = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Ie = /* @__PURE__ */ L.createContext(ae), at = /* @__PURE__ */ L.createContext(!1);
let st = !!(typeof window < "u" && window.document && window.document.createElement), fe = /* @__PURE__ */ new WeakMap();
function lt(e = !1) {
  let t = Y(Ie), r = m(null);
  if (r.current === null && !e) {
    var n, i;
    let a = (i = L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || i === void 0 || (n = i.ReactCurrentOwner) === null || n === void 0 ? void 0 : n.current;
    if (a) {
      let s = fe.get(a);
      s == null ? fe.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== s.state && (t.current = s.id, fe.delete(a));
    }
    r.current = ++t.current;
  }
  return r.current;
}
function ut(e) {
  let t = Y(Ie);
  t === ae && !st && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let r = lt(!!e), n = t === ae && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${n}-${r}`;
}
function ct(e) {
  let t = L.useId(), [r] = A(He()), n = r || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ae.prefix}`;
  return e || `${n}-${t}`;
}
const dt = typeof L.useId == "function" ? ct : ut;
function ft() {
  return !1;
}
function pt() {
  return !0;
}
function bt(e) {
  return () => {
  };
}
function He() {
  return typeof L.useSyncExternalStore == "function" ? L.useSyncExternalStore(bt, ft, pt) : Y(at);
}
const q = typeof document < "u" ? L.useLayoutEffect : () => {
};
function D(e) {
  const t = m(null);
  return q(() => {
    t.current = e;
  }, [
    e
  ]), w((...r) => {
    const n = t.current;
    return n == null ? void 0 : n(...r);
  }, []);
}
let vt = !!(typeof window < "u" && window.document && window.document.createElement), se = /* @__PURE__ */ new Map();
function pr(e) {
  let [t, r] = A(e), n = m(null), i = dt(t), a = w((s) => {
    n.current = s;
  }, []);
  return vt && se.set(i, a), q(() => {
    let s = i;
    return () => {
      se.delete(s);
    };
  }, [
    i
  ]), M(() => {
    let s = n.current;
    s && (n.current = null, r(s));
  }), i;
}
function $t(e, t) {
  if (e === t)
    return e;
  let r = se.get(e);
  if (r)
    return r(t), t;
  let n = se.get(t);
  return n ? (n(e), e) : t;
}
function Ne(...e) {
  return (...t) => {
    for (let r of e)
      typeof r == "function" && r(...t);
  };
}
const T = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, x = (e) => e && "window" in e && e.window === e ? e : T(e).defaultView || window;
function Q(...e) {
  let t = {
    ...e[0]
  };
  for (let r = 1; r < e.length; r++) {
    let n = e[r];
    for (let i in n) {
      let a = t[i], s = n[i];
      typeof a == "function" && typeof s == "function" && // This is a lot faster than a regex.
      i[0] === "o" && i[1] === "n" && i.charCodeAt(2) >= /* 'A' */
      65 && i.charCodeAt(2) <= /* 'Z' */
      90 ? t[i] = Ne(a, s) : (i === "className" || i === "UNSAFE_className") && typeof a == "string" && typeof s == "string" ? t[i] = it(a, s) : i === "id" && a && s ? t.id = $t(a, s) : t[i] = s !== void 0 ? s : a;
    }
  }
  return t;
}
const gt = /* @__PURE__ */ new Set([
  "id"
]), ht = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), yt = /* @__PURE__ */ new Set([
  "href",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Tt = /^(data-.*)$/;
function br(e, t = {}) {
  let { labelable: r, isLink: n, propNames: i } = t, a = {};
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (gt.has(s) || r && ht.has(s) || n && yt.has(s) || i != null && i.has(s) || Tt.test(s)) && (a[s] = e[s]);
  return a;
}
function H(e) {
  if (mt())
    e.focus({
      preventScroll: !0
    });
  else {
    let t = Pt(e);
    e.focus(), Et(t);
  }
}
let te = null;
function mt() {
  if (te == null) {
    te = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return te = !0, !0;
        }
      });
    } catch {
    }
  }
  return te;
}
function Pt(e) {
  let t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== n; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return n instanceof HTMLElement && r.push({
    element: n,
    scrollTop: n.scrollTop,
    scrollLeft: n.scrollLeft
  }), r;
}
function Et(e) {
  for (let { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
function ce(e) {
  var t;
  return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function Te(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function V() {
  return Te(/^Mac/i);
}
function wt() {
  return Te(/^iPhone/i);
}
function We() {
  return Te(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  V() && navigator.maxTouchPoints > 1;
}
function me() {
  return wt() || We();
}
function vr() {
  return V() || me();
}
function St() {
  return ce(/AppleWebKit/i) && !xt();
}
function xt() {
  return ce(/Chrome/i);
}
function Re() {
  return ce(/Android/i);
}
function Lt() {
  return ce(/Firefox/i);
}
const Mt = /* @__PURE__ */ nt({
  isNative: !0,
  open: kt
});
function $r() {
  return Y(Mt);
}
function X(e, t, r = !0) {
  var n, i;
  let { metaKey: a, ctrlKey: s, altKey: d, shiftKey: f } = t;
  Lt() && (!((i = window.event) === null || i === void 0 || (n = i.type) === null || n === void 0) && n.startsWith("key")) && e.target === "_blank" && (V() ? a = !0 : s = !0);
  let b = St() && V() && !We() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: s,
    altKey: d,
    shiftKey: f
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: s,
    altKey: d,
    shiftKey: f,
    bubbles: !0,
    cancelable: !0
  });
  X.isOpening = r, H(e), e.dispatchEvent(b), X.isOpening = !1;
}
X.isOpening = !1;
function Ct(e, t) {
  if (e instanceof HTMLAnchorElement)
    t(e);
  else if (e.hasAttribute("data-href")) {
    let r = document.createElement("a");
    r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r);
  }
}
function kt(e, t) {
  Ct(e, (r) => X(r, t));
}
function gr(e) {
  return {
    "data-href": e.href,
    "data-target": e.target,
    "data-rel": e.rel,
    "data-download": e.download,
    "data-ping": e.ping,
    "data-referrer-policy": e.referrerPolicy
  };
}
let j = /* @__PURE__ */ new Map(), $e = /* @__PURE__ */ new Set();
function Se() {
  if (typeof window > "u")
    return;
  function e(n) {
    return "propertyName" in n;
  }
  let t = (n) => {
    if (!e(n) || !n.target)
      return;
    let i = j.get(n.target);
    i || (i = /* @__PURE__ */ new Set(), j.set(n.target, i), n.target.addEventListener("transitioncancel", r, {
      once: !0
    })), i.add(n.propertyName);
  }, r = (n) => {
    if (!e(n) || !n.target)
      return;
    let i = j.get(n.target);
    if (i && (i.delete(n.propertyName), i.size === 0 && (n.target.removeEventListener("transitioncancel", r), j.delete(n.target)), j.size === 0)) {
      for (let a of $e)
        a();
      $e.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", r);
}
typeof document < "u" && (document.readyState !== "loading" ? Se() : document.addEventListener("DOMContentLoaded", Se));
function Ue(e) {
  requestAnimationFrame(() => {
    j.size === 0 ? e() : $e.add(e);
  });
}
function Be() {
  let e = m(/* @__PURE__ */ new Map()), t = w((i, a, s, d) => {
    let f = d != null && d.once ? (...b) => {
      e.current.delete(s), s(...b);
    } : s;
    e.current.set(s, {
      type: a,
      eventTarget: i,
      fn: f,
      options: d
    }), i.addEventListener(a, s, d);
  }, []), r = w((i, a, s, d) => {
    var f;
    let b = ((f = e.current.get(s)) === null || f === void 0 ? void 0 : f.fn) || s;
    i.removeEventListener(a, b, d), e.current.delete(s);
  }, []), n = w(() => {
    e.current.forEach((i, a) => {
      r(i.eventTarget, i.type, a, i.options);
    });
  }, [
    r
  ]);
  return M(() => n, [
    n
  ]), {
    addGlobalListener: t,
    removeGlobalListener: r,
    removeAllGlobalListeners: n
  };
}
function hr(e, t) {
  const r = m(!0), n = m(null);
  M(() => (r.current = !0, () => {
    r.current = !1;
  }), []), M(() => {
    r.current ? r.current = !1 : (!n.current || t.some((i, a) => !Object.is(i, n[a]))) && e(), n.current = t;
  }, t);
}
function Ge(e, t) {
  q(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function xe(e, t) {
  let r = e;
  for (Le(r, t) && (r = r.parentElement); r && !Le(r, t); )
    r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
function Le(e, t) {
  let r = window.getComputedStyle(e), n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
let Ft = 0;
const pe = /* @__PURE__ */ new Map();
function Kt(e) {
  let [t, r] = A();
  return q(() => {
    if (!e)
      return;
    let n = pe.get(e);
    if (n)
      r(n.element.id);
    else {
      let i = `react-aria-description-${Ft++}`;
      r(i);
      let a = document.createElement("div");
      a.id = i, a.style.display = "none", a.textContent = e, document.body.appendChild(a), n = {
        refCount: 0,
        element: a
      }, pe.set(e, n);
    }
    return n.refCount++, () => {
      n && --n.refCount === 0 && (n.element.remove(), pe.delete(e));
    };
  }, [
    e
  ]), {
    "aria-describedby": e ? t : void 0
  };
}
function yr(e, t, r, n) {
  let i = D(r), a = r == null;
  M(() => {
    if (a || !e.current)
      return;
    let s = e.current;
    return s.addEventListener(t, i, n), () => {
      s.removeEventListener(t, i, n);
    };
  }, [
    e,
    t,
    n,
    a,
    i
  ]);
}
function Dt(e, t) {
  let r = Me(e, t, "left"), n = Me(e, t, "top"), i = t.offsetWidth, a = t.offsetHeight, s = e.scrollLeft, d = e.scrollTop, { borderTopWidth: f, borderLeftWidth: b } = getComputedStyle(e), h = e.scrollLeft + parseInt(b, 10), C = e.scrollTop + parseInt(f, 10), $ = h + e.clientWidth, P = C + e.clientHeight;
  r <= s ? s = r - parseInt(b, 10) : r + i > $ && (s += r + i - $), n <= C ? d = n - parseInt(f, 10) : n + a > P && (d += n + a - P), e.scrollLeft = s, e.scrollTop = d;
}
function Me(e, t, r) {
  const n = r === "left" ? "offsetLeft" : "offsetTop";
  let i = 0;
  for (; t.offsetParent && (i += t[n], t.offsetParent !== e); ) {
    if (t.offsetParent.contains(e)) {
      i -= e[n];
      break;
    }
    t = t.offsetParent;
  }
  return i;
}
function Tr(e, t) {
  if (document.contains(e)) {
    let s = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(s).overflow === "hidden") {
      let f = xe(e);
      for (; e && f && e !== s && f !== s; )
        Dt(f, e), e = f, f = xe(e);
    } else {
      var r;
      let { left: f, top: b } = e.getBoundingClientRect();
      e == null || (r = e.scrollIntoView) === null || r === void 0 || r.call(e, {
        block: "nearest"
      });
      let { left: h, top: C } = e.getBoundingClientRect();
      if (Math.abs(f - h) > 1 || Math.abs(b - C) > 1) {
        var n, i, a;
        t == null || (i = t.containingElement) === null || i === void 0 || (n = i.scrollIntoView) === null || n === void 0 || n.call(i, {
          block: "center",
          inline: "center"
        }), (a = e.scrollIntoView) === null || a === void 0 || a.call(e, {
          block: "nearest"
        });
      }
    }
  }
}
function ge(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Re() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function At(e) {
  return !Re() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
function mr(e, t, r) {
  let n = m(t), i = D(() => {
    r && r(n.current);
  });
  M(() => {
    var a;
    let s = e == null || (a = e.current) === null || a === void 0 ? void 0 : a.form;
    return s == null || s.addEventListener("reset", i), () => {
      s == null || s.removeEventListener("reset", i);
    };
  }, [
    e,
    i
  ]);
}
function Ot(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function je(e, t, r) {
  if (!t.has(e))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return t.get(e);
}
function It(e, t) {
  var r = je(e, t, "get");
  return Ot(e, r);
}
function Ht(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Nt(e, t, r) {
  Ht(e, t), t.set(e, r);
}
function Wt(e, t, r) {
  if (t.set)
    t.set.call(e, r);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = r;
  }
}
function Ce(e, t, r) {
  var n = je(e, t, "set");
  return Wt(e, n, r), r;
}
let z = "default", he = "", ie = /* @__PURE__ */ new WeakMap();
function ke(e) {
  if (me()) {
    if (z === "default") {
      const t = T(e);
      he = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    z = "disabled";
  } else
    (e instanceof HTMLElement || e instanceof SVGElement) && (ie.set(e, e.style.userSelect), e.style.userSelect = "none");
}
function re(e) {
  if (me()) {
    if (z !== "disabled")
      return;
    z = "restoring", setTimeout(() => {
      Ue(() => {
        if (z === "restoring") {
          const t = T(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = he || ""), he = "", z = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ie.has(e)) {
    let t = ie.get(e);
    e.style.userSelect === "none" && (e.style.userSelect = t), e.getAttribute("style") === "" && e.removeAttribute("style"), ie.delete(e);
  }
}
const ze = L.createContext({
  register: () => {
  }
});
ze.displayName = "PressResponderContext";
function Rt(e) {
  let t = Y(ze);
  if (t) {
    let { register: r, ...n } = t;
    e = Q(n, e), r();
  }
  return Ge(t, e.ref), e;
}
var ne = /* @__PURE__ */ new WeakMap();
class oe {
  continuePropagation() {
    Ce(this, ne, !1);
  }
  get shouldStopPropagation() {
    return It(this, ne);
  }
  constructor(t, r, n) {
    Nt(this, ne, {
      writable: !0,
      value: void 0
    }), Ce(this, ne, !0), this.type = t, this.pointerType = r, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey;
  }
}
const Fe = Symbol("linkClicked");
function Ut(e) {
  let {
    onPress: t,
    onPressChange: r,
    onPressStart: n,
    onPressEnd: i,
    onPressUp: a,
    isDisabled: s,
    isPressed: d,
    preventFocusOnPress: f,
    shouldCancelOnPointerExit: b,
    allowTextSelectionOnPress: h,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: C,
    ...$
  } = Rt(e), [P, _] = A(!1), W = m({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    ignoreClickAfterPress: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null
  }), { addGlobalListener: O, removeAllGlobalListeners: R } = Be(), k = D((o, p) => {
    let S = W.current;
    if (s || S.didFirePressStart)
      return !1;
    let c = !0;
    if (S.isTriggeringEvent = !0, n) {
      let v = new oe("pressstart", p, o);
      n(v), c = v.shouldStopPropagation;
    }
    return r && r(!0), S.isTriggeringEvent = !1, S.didFirePressStart = !0, _(!0), c;
  }), y = D((o, p, S = !0) => {
    let c = W.current;
    if (!c.didFirePressStart)
      return !1;
    c.ignoreClickAfterPress = !0, c.didFirePressStart = !1, c.isTriggeringEvent = !0;
    let v = !0;
    if (i) {
      let l = new oe("pressend", p, o);
      i(l), v = l.shouldStopPropagation;
    }
    if (r && r(!1), _(!1), t && S && !s) {
      let l = new oe("press", p, o);
      t(l), v && (v = l.shouldStopPropagation);
    }
    return c.isTriggeringEvent = !1, v;
  }), U = D((o, p) => {
    let S = W.current;
    if (s)
      return !1;
    if (a) {
      S.isTriggeringEvent = !0;
      let c = new oe("pressup", p, o);
      return a(c), S.isTriggeringEvent = !1, c.shouldStopPropagation;
    }
    return !0;
  }), I = D((o) => {
    let p = W.current;
    p.isPressed && p.target && (p.isOverTarget && p.pointerType != null && y(F(p.target, o), p.pointerType, !1), p.isPressed = !1, p.isOverTarget = !1, p.activePointerId = null, p.pointerType = null, R(), h || re(p.target));
  }), ee = D((o) => {
    b && I(o);
  }), rt = ot(() => {
    let o = W.current, p = {
      onKeyDown(c) {
        if (be(c.nativeEvent, c.currentTarget) && c.currentTarget.contains(c.target)) {
          var v;
          De(c.target, c.key) && c.preventDefault();
          let l = !0;
          if (!o.isPressed && !c.repeat) {
            o.target = c.currentTarget, o.isPressed = !0, l = k(c, "keyboard");
            let u = c.currentTarget, g = (B) => {
              be(B, u) && !B.repeat && u.contains(B.target) && o.target && U(F(o.target, B), "keyboard");
            };
            O(T(c.currentTarget), "keyup", Ne(g, S), !0);
          }
          l && c.stopPropagation(), c.metaKey && V() && ((v = o.metaKeyEvents) === null || v === void 0 || v.set(c.key, c.nativeEvent));
        } else
          c.key === "Meta" && (o.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(c) {
        if (!(c && !c.currentTarget.contains(c.target)) && c && c.button === 0 && !o.isTriggeringEvent && !X.isOpening) {
          let v = !0;
          if (s && c.preventDefault(), !o.ignoreClickAfterPress && !o.ignoreEmulatedMouseEvents && !o.isPressed && (o.pointerType === "virtual" || ge(c.nativeEvent))) {
            !s && !f && H(c.currentTarget);
            let l = k(c, "virtual"), u = U(c, "virtual"), g = y(c, "virtual");
            v = l && u && g;
          }
          o.ignoreEmulatedMouseEvents = !1, o.ignoreClickAfterPress = !1, v && c.stopPropagation();
        }
      }
    }, S = (c) => {
      var v;
      if (o.isPressed && o.target && be(c, o.target)) {
        var l;
        De(c.target, c.key) && c.preventDefault();
        let g = c.target;
        y(F(o.target, c), "keyboard", o.target.contains(g)), R(), c.key !== "Enter" && Pe(o.target) && o.target.contains(g) && !c[Fe] && (c[Fe] = !0, X(o.target, c, !1)), o.isPressed = !1, (l = o.metaKeyEvents) === null || l === void 0 || l.delete(c.key);
      } else if (c.key === "Meta" && (!((v = o.metaKeyEvents) === null || v === void 0) && v.size)) {
        var u;
        let g = o.metaKeyEvents;
        o.metaKeyEvents = void 0;
        for (let B of g.values())
          (u = o.target) === null || u === void 0 || u.dispatchEvent(new KeyboardEvent("keyup", B));
      }
    };
    if (typeof PointerEvent < "u") {
      p.onPointerDown = (u) => {
        if (u.button !== 0 || !u.currentTarget.contains(u.target))
          return;
        if (At(u.nativeEvent)) {
          o.pointerType = "virtual";
          return;
        }
        ve(u.currentTarget) && u.preventDefault(), o.pointerType = u.pointerType;
        let g = !0;
        o.isPressed || (o.isPressed = !0, o.isOverTarget = !0, o.activePointerId = u.pointerId, o.target = u.currentTarget, !s && !f && H(u.currentTarget), h || ke(o.target), g = k(u, o.pointerType), O(T(u.currentTarget), "pointermove", c, !1), O(T(u.currentTarget), "pointerup", v, !1), O(T(u.currentTarget), "pointercancel", l, !1)), g && u.stopPropagation();
      }, p.onMouseDown = (u) => {
        u.currentTarget.contains(u.target) && u.button === 0 && (ve(u.currentTarget) && u.preventDefault(), u.stopPropagation());
      }, p.onPointerUp = (u) => {
        !u.currentTarget.contains(u.target) || o.pointerType === "virtual" || u.button === 0 && G(u, u.currentTarget) && U(u, o.pointerType || u.pointerType);
      };
      let c = (u) => {
        u.pointerId === o.activePointerId && (o.target && G(u, o.target) ? !o.isOverTarget && o.pointerType != null && (o.isOverTarget = !0, k(F(o.target, u), o.pointerType)) : o.target && o.isOverTarget && o.pointerType != null && (o.isOverTarget = !1, y(F(o.target, u), o.pointerType, !1), ee(u)));
      }, v = (u) => {
        u.pointerId === o.activePointerId && o.isPressed && u.button === 0 && o.target && (G(u, o.target) && o.pointerType != null ? y(F(o.target, u), o.pointerType) : o.isOverTarget && o.pointerType != null && y(F(o.target, u), o.pointerType, !1), o.isPressed = !1, o.isOverTarget = !1, o.activePointerId = null, o.pointerType = null, R(), h || re(o.target));
      }, l = (u) => {
        I(u);
      };
      p.onDragStart = (u) => {
        u.currentTarget.contains(u.target) && I(u);
      };
    } else {
      p.onMouseDown = (l) => {
        if (l.button !== 0 || !l.currentTarget.contains(l.target))
          return;
        if (ve(l.currentTarget) && l.preventDefault(), o.ignoreEmulatedMouseEvents) {
          l.stopPropagation();
          return;
        }
        o.isPressed = !0, o.isOverTarget = !0, o.target = l.currentTarget, o.pointerType = ge(l.nativeEvent) ? "virtual" : "mouse", !s && !f && H(l.currentTarget), k(l, o.pointerType) && l.stopPropagation(), O(T(l.currentTarget), "mouseup", c, !1);
      }, p.onMouseEnter = (l) => {
        if (!l.currentTarget.contains(l.target))
          return;
        let u = !0;
        o.isPressed && !o.ignoreEmulatedMouseEvents && o.pointerType != null && (o.isOverTarget = !0, u = k(l, o.pointerType)), u && l.stopPropagation();
      }, p.onMouseLeave = (l) => {
        if (!l.currentTarget.contains(l.target))
          return;
        let u = !0;
        o.isPressed && !o.ignoreEmulatedMouseEvents && o.pointerType != null && (o.isOverTarget = !1, u = y(l, o.pointerType, !1), ee(l)), u && l.stopPropagation();
      }, p.onMouseUp = (l) => {
        l.currentTarget.contains(l.target) && !o.ignoreEmulatedMouseEvents && l.button === 0 && U(l, o.pointerType || "mouse");
      };
      let c = (l) => {
        if (l.button === 0) {
          if (o.isPressed = !1, R(), o.ignoreEmulatedMouseEvents) {
            o.ignoreEmulatedMouseEvents = !1;
            return;
          }
          o.target && G(l, o.target) && o.pointerType != null ? y(F(o.target, l), o.pointerType) : o.target && o.isOverTarget && o.pointerType != null && y(F(o.target, l), o.pointerType, !1), o.isOverTarget = !1;
        }
      };
      p.onTouchStart = (l) => {
        if (!l.currentTarget.contains(l.target))
          return;
        let u = Bt(l.nativeEvent);
        if (!u)
          return;
        o.activePointerId = u.identifier, o.ignoreEmulatedMouseEvents = !0, o.isOverTarget = !0, o.isPressed = !0, o.target = l.currentTarget, o.pointerType = "touch", !s && !f && H(l.currentTarget), h || ke(o.target), k(l, o.pointerType) && l.stopPropagation(), O(x(l.currentTarget), "scroll", v, !0);
      }, p.onTouchMove = (l) => {
        if (!l.currentTarget.contains(l.target))
          return;
        if (!o.isPressed) {
          l.stopPropagation();
          return;
        }
        let u = Ke(l.nativeEvent, o.activePointerId), g = !0;
        u && G(u, l.currentTarget) ? !o.isOverTarget && o.pointerType != null && (o.isOverTarget = !0, g = k(l, o.pointerType)) : o.isOverTarget && o.pointerType != null && (o.isOverTarget = !1, g = y(l, o.pointerType, !1), ee(l)), g && l.stopPropagation();
      }, p.onTouchEnd = (l) => {
        if (!l.currentTarget.contains(l.target))
          return;
        if (!o.isPressed) {
          l.stopPropagation();
          return;
        }
        let u = Ke(l.nativeEvent, o.activePointerId), g = !0;
        u && G(u, l.currentTarget) && o.pointerType != null ? (U(l, o.pointerType), g = y(l, o.pointerType)) : o.isOverTarget && o.pointerType != null && (g = y(l, o.pointerType, !1)), g && l.stopPropagation(), o.isPressed = !1, o.activePointerId = null, o.isOverTarget = !1, o.ignoreEmulatedMouseEvents = !0, o.target && !h && re(o.target), R();
      }, p.onTouchCancel = (l) => {
        l.currentTarget.contains(l.target) && (l.stopPropagation(), o.isPressed && I(l));
      };
      let v = (l) => {
        o.isPressed && l.target.contains(o.target) && I({
          currentTarget: o.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      p.onDragStart = (l) => {
        l.currentTarget.contains(l.target) && I(l);
      };
    }
    return p;
  }, [
    O,
    s,
    f,
    R,
    h,
    I,
    ee,
    y,
    k,
    U
  ]);
  return M(() => () => {
    var o;
    h || re((o = W.current.target) !== null && o !== void 0 ? o : void 0);
  }, [
    h
  ]), {
    isPressed: d || P,
    pressProps: Q($, rt)
  };
}
function Pe(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function be(e, t) {
  const { key: r, code: n } = e, i = t, a = i.getAttribute("role");
  return (r === "Enter" || r === " " || r === "Spacebar" || n === "Space") && !(i instanceof x(i).HTMLInputElement && !Ve(i, r) || i instanceof x(i).HTMLTextAreaElement || i.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && Pe(i)) && r !== "Enter");
}
function Bt(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Ke(e, t) {
  const r = e.changedTouches;
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    if (i.identifier === t)
      return i;
  }
  return null;
}
function F(e, t) {
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey
  };
}
function Gt(e) {
  let t = 0, r = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? r = e.height / 2 : e.radiusY !== void 0 && (r = e.radiusY), {
    top: e.clientY - r,
    right: e.clientX + t,
    bottom: e.clientY + r,
    left: e.clientX - t
  };
}
function jt(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function G(e, t) {
  let r = t.getBoundingClientRect(), n = Gt(e);
  return jt(r, n);
}
function ve(e) {
  return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
}
function De(e, t) {
  return e instanceof HTMLInputElement ? !Ve(e, t) : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Pe(e);
}
const zt = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ve(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : zt.has(e.type);
}
class Vt {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(t, r) {
    this.nativeEvent = r, this.target = r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget, this.bubbles = r.bubbles, this.cancelable = r.cancelable, this.defaultPrevented = r.defaultPrevented, this.eventPhase = r.eventPhase, this.isTrusted = r.isTrusted, this.timeStamp = r.timeStamp, this.type = t;
  }
}
function Xe(e) {
  let t = m({
    isFocused: !1,
    observer: null
  });
  q(() => {
    const n = t.current;
    return () => {
      n.observer && (n.observer.disconnect(), n.observer = null);
    };
  }, []);
  let r = D((n) => {
    e == null || e(n);
  });
  return w((n) => {
    if (n.target instanceof HTMLButtonElement || n.target instanceof HTMLInputElement || n.target instanceof HTMLTextAreaElement || n.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let i = n.target, a = (s) => {
        t.current.isFocused = !1, i.disabled && r(new Vt("blur", s)), t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      i.addEventListener("focusout", a, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && i.disabled) {
          var s;
          (s = t.current.observer) === null || s === void 0 || s.disconnect();
          let d = i === document.activeElement ? null : document.activeElement;
          i.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: d
          })), i.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: d
          }));
        }
      }), t.current.observer.observe(i, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    r
  ]);
}
function Ye(e) {
  let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: i } = e;
  const a = w((f) => {
    if (f.target === f.currentTarget)
      return n && n(f), i && i(!1), !0;
  }, [
    n,
    i
  ]), s = Xe(a), d = w((f) => {
    f.target === f.currentTarget && document.activeElement === f.target && (r && r(f), i && i(!0), s(f));
  }, [
    i,
    r,
    s
  ]);
  return {
    focusProps: {
      onFocus: !t && (r || i || n) ? d : void 0,
      onBlur: !t && (n || i) ? a : void 0
    }
  };
}
let K = null, Z = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map(), N = !1, ye = !1;
const Xt = {
  Tab: !0,
  Escape: !0
};
function de(e, t) {
  for (let r of Z)
    r(e, t);
}
function Yt(e) {
  return !(e.metaKey || !V() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function le(e) {
  N = !0, Yt(e) && (K = "keyboard", de("keyboard", e));
}
function E(e) {
  K = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (N = !0, de("pointer", e));
}
function qe(e) {
  ge(e) && (N = !0, K = "virtual");
}
function Je(e) {
  e.target === window || e.target === document || (!N && !ye && (K = "virtual", de("virtual", e)), N = !1, ye = !1);
}
function Qe() {
  N = !1, ye = !0;
}
function ue(e) {
  if (typeof window > "u" || J.get(x(e)))
    return;
  const t = x(e), r = T(e);
  let n = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    N = !0, n.apply(this, arguments);
  }, r.addEventListener("keydown", le, !0), r.addEventListener("keyup", le, !0), r.addEventListener("click", qe, !0), t.addEventListener("focus", Je, !0), t.addEventListener("blur", Qe, !1), typeof PointerEvent < "u" ? (r.addEventListener("pointerdown", E, !0), r.addEventListener("pointermove", E, !0), r.addEventListener("pointerup", E, !0)) : (r.addEventListener("mousedown", E, !0), r.addEventListener("mousemove", E, !0), r.addEventListener("mouseup", E, !0)), t.addEventListener("beforeunload", () => {
    Ze(e);
  }, {
    once: !0
  }), J.set(t, {
    focus: n
  });
}
const Ze = (e, t) => {
  const r = x(e), n = T(e);
  t && n.removeEventListener("DOMContentLoaded", t), J.has(r) && (r.HTMLElement.prototype.focus = J.get(r).focus, n.removeEventListener("keydown", le, !0), n.removeEventListener("keyup", le, !0), n.removeEventListener("click", qe, !0), r.removeEventListener("focus", Je, !0), r.removeEventListener("blur", Qe, !1), typeof PointerEvent < "u" ? (n.removeEventListener("pointerdown", E, !0), n.removeEventListener("pointermove", E, !0), n.removeEventListener("pointerup", E, !0)) : (n.removeEventListener("mousedown", E, !0), n.removeEventListener("mousemove", E, !0), n.removeEventListener("mouseup", E, !0)), J.delete(r));
};
function qt(e) {
  const t = T(e);
  let r;
  return t.readyState !== "loading" ? ue(e) : (r = () => {
    ue(e);
  }, t.addEventListener("DOMContentLoaded", r)), () => Ze(e, r);
}
typeof document < "u" && qt();
function _e() {
  return K !== "pointer";
}
function Jt() {
  return K;
}
function Pr(e) {
  K = e, de(e, null);
}
function Er() {
  ue();
  let [e, t] = A(K);
  return M(() => {
    let r = () => {
      t(K);
    };
    return Z.add(r), () => {
      Z.delete(r);
    };
  }, []), He() ? null : e;
}
const Qt = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Zt(e, t, r) {
  var n;
  const i = typeof window < "u" ? x(r == null ? void 0 : r.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? x(r == null ? void 0 : r.target).HTMLTextAreaElement : HTMLTextAreaElement, s = typeof window < "u" ? x(r == null ? void 0 : r.target).HTMLElement : HTMLElement, d = typeof window < "u" ? x(r == null ? void 0 : r.target).KeyboardEvent : KeyboardEvent;
  return e = e || (r == null ? void 0 : r.target) instanceof i && !Qt.has(r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type) || (r == null ? void 0 : r.target) instanceof a || (r == null ? void 0 : r.target) instanceof s && (r == null ? void 0 : r.target.isContentEditable), !(e && t === "keyboard" && r instanceof d && !Xt[r.key]);
}
function _t(e, t, r) {
  ue(), M(() => {
    let n = (i, a) => {
      Zt(!!(r != null && r.isTextInput), i, a) && e(_e());
    };
    return Z.add(n), () => {
      Z.delete(n);
    };
  }, t);
}
function er(e) {
  let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: i } = e, a = m({
    isFocusWithin: !1
  }), s = w((b) => {
    a.current.isFocusWithin && !b.currentTarget.contains(b.relatedTarget) && (a.current.isFocusWithin = !1, r && r(b), i && i(!1));
  }, [
    r,
    i,
    a
  ]), d = Xe(s), f = w((b) => {
    !a.current.isFocusWithin && document.activeElement === b.target && (n && n(b), i && i(!0), a.current.isFocusWithin = !0, d(b));
  }, [
    n,
    i,
    d
  ]);
  return t ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: f,
      onBlur: s
    }
  };
}
function Ae(e) {
  if (!e)
    return;
  let t = !0;
  return (r) => {
    let n = {
      ...r,
      preventDefault() {
        r.preventDefault();
      },
      isDefaultPrevented() {
        return r.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        t = !1;
      }
    };
    e(n), t && r.stopPropagation();
  };
}
function tr(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Ae(e.onKeyDown),
      onKeyUp: Ae(e.onKeyUp)
    }
  };
}
const rr = 500;
function wr(e) {
  let { isDisabled: t, onLongPressStart: r, onLongPressEnd: n, onLongPress: i, threshold: a = rr, accessibilityDescription: s } = e;
  const d = m();
  let { addGlobalListener: f, removeGlobalListener: b } = Be(), { pressProps: h } = Ut({
    isDisabled: t,
    onPressStart($) {
      if ($.continuePropagation(), ($.pointerType === "mouse" || $.pointerType === "touch") && (r && r({
        ...$,
        type: "longpressstart"
      }), d.current = setTimeout(() => {
        $.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), i && i({
          ...$,
          type: "longpress"
        }), d.current = void 0;
      }, a), $.pointerType === "touch")) {
        let P = (_) => {
          _.preventDefault();
        };
        f($.target, "contextmenu", P, {
          once: !0
        }), f(window, "pointerup", () => {
          setTimeout(() => {
            b($.target, "contextmenu", P);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd($) {
      d.current && clearTimeout(d.current), n && ($.pointerType === "mouse" || $.pointerType === "touch") && n({
        ...$,
        type: "longpressend"
      });
    }
  }), C = Kt(i && !t ? s : void 0);
  return {
    longPressProps: Q(h, C)
  };
}
function nr(e) {
  const t = T(e);
  if (Jt() === "virtual") {
    let r = t.activeElement;
    Ue(() => {
      t.activeElement === r && e.isConnected && H(e);
    });
  } else
    H(e);
}
function or(e) {
  const t = x(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement))
    return !1;
  let { display: r, visibility: n } = e.style, i = r !== "none" && n !== "hidden" && n !== "collapse";
  if (i) {
    const { getComputedStyle: a } = e.ownerDocument.defaultView;
    let { display: s, visibility: d } = a(e);
    i = s !== "none" && d !== "hidden" && d !== "collapse";
  }
  return i;
}
function ir(e, t) {
  return !e.hasAttribute("hidden") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function et(e, t) {
  return e.nodeName !== "#comment" && or(e) && ir(e, t) && (!e.parentElement || et(e.parentElement, e));
}
const Ee = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
], ar = Ee.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ee.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const sr = Ee.join(':not([hidden]):not([tabindex="-1"]),');
function tt(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function lr(e, t, r) {
  let n = t != null && t.tabbable ? sr : ar, i = T(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode(a) {
      var s;
      return !(t == null || (s = t.from) === null || s === void 0) && s.contains(a) ? NodeFilter.FILTER_REJECT : a.matches(n) && et(a) && (!r || tt(a, r)) && (!(t != null && t.accept) || t.accept(a)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  return t != null && t.from && (i.currentNode = t.from), i;
}
class we {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let i = this.fastMap.get(r ?? null);
    if (!i)
      return;
    let a = new Oe({
      scopeRef: t
    });
    i.addChild(a), a.parent = i, this.fastMap.set(t, a), n && (a.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null)
      return;
    let r = this.fastMap.get(t);
    if (!r)
      return;
    let n = r.parent;
    for (let a of this.traverse())
      a !== r && r.nodeToRestore && a.nodeToRestore && r.scopeRef && r.scopeRef.current && tt(a.nodeToRestore, r.scopeRef.current) && (a.nodeToRestore = r.nodeToRestore);
    let i = r.children;
    n && (n.removeChild(r), i.size > 0 && i.forEach((a) => n && n.addChild(a))), this.fastMap.delete(r.scopeRef);
  }
  // Pre Order Depth First
  *traverse(t = this.root) {
    if (t.scopeRef != null && (yield t), t.children.size > 0)
      for (let r of t.children)
        yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new we();
    var n;
    for (let i of this.traverse())
      r.addTreeNode(i.scopeRef, (n = (t = i.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0 ? n : null, i.nodeToRestore);
    return r;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map(), this.root = new Oe({
      scopeRef: null
    }), this.fastMap.set(null, this.root);
  }
}
class Oe {
  addChild(t) {
    this.children.add(t), t.parent = this;
  }
  removeChild(t) {
    this.children.delete(t), t.parent = void 0;
  }
  constructor(t) {
    this.children = /* @__PURE__ */ new Set(), this.contain = !1, this.scopeRef = t.scopeRef;
  }
}
new we();
function Sr(e = {}) {
  let { autoFocus: t = !1, isTextInput: r, within: n } = e, i = m({
    isFocused: !1,
    isFocusVisible: t || _e()
  }), [a, s] = A(!1), [d, f] = A(() => i.current.isFocused && i.current.isFocusVisible), b = w(() => f(i.current.isFocused && i.current.isFocusVisible), []), h = w((P) => {
    i.current.isFocused = P, s(P), b();
  }, [
    b
  ]);
  _t((P) => {
    i.current.isFocusVisible = P, b();
  }, [], {
    isTextInput: r
  });
  let { focusProps: C } = Ye({
    isDisabled: n,
    onFocusChange: h
  }), { focusWithinProps: $ } = er({
    isDisabled: !n,
    onFocusWithinChange: h
  });
  return {
    isFocused: a,
    isFocusVisible: d,
    focusProps: n ? $ : C
  };
}
let ur = /* @__PURE__ */ L.createContext(null);
function cr(e) {
  let t = Y(ur) || {};
  Ge(t, e);
  let { ref: r, ...n } = t;
  return n;
}
function xr(e, t) {
  let { focusProps: r } = Ye(e), { keyboardProps: n } = tr(e), i = Q(r, n), a = cr(t), s = e.isDisabled ? {} : a, d = m(e.autoFocus);
  return M(() => {
    d.current && t.current && nr(t.current), d.current = !1;
  }, [
    t
  ]), {
    focusableProps: Q({
      ...i,
      tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
    }, s)
  };
}
function Lr(e, t) {
  let r = t == null ? void 0 : t.isDisabled, [n, i] = A(!1);
  return q(() => {
    if (e != null && e.current && !r) {
      let a = () => {
        if (e.current) {
          let d = lr(e.current, {
            tabbable: !0
          });
          i(!!d.nextNode());
        }
      };
      a();
      let s = new MutationObserver(a);
      return s.observe(e.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        s.disconnect();
      };
    }
  }), r ? !1 : n;
}
export {
  Sr as $,
  Kt as A,
  xe as B,
  _e as C,
  Re as D,
  gr as E,
  Q as a,
  er as b,
  q as c,
  D as d,
  Pr as e,
  Ut as f,
  xr as g,
  br as h,
  mr as i,
  He as j,
  $r as k,
  yr as l,
  nr as m,
  Dt as n,
  Tr as o,
  wr as p,
  X as q,
  Jt as r,
  vr as s,
  V as t,
  lr as u,
  H as v,
  pr as w,
  Lr as x,
  hr as y,
  Er as z
};
