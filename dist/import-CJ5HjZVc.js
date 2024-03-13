import fe, { useContext as ct, useMemo as N, useState as at, useEffect as ee, useRef as I, useCallback as dt } from "react";
import { j as ft, k as Ne, l as mt, m as z, n as $t, o as T, a as R, f as je, p as pt, q as bt, r as Ce, s as gt, t as ht, u as me, v as Be, w as ge, h as xt, x as yt, y as Le, z as vt, A as he, B as U, C as Dt, g as Ct, D as Ee, E as Bt } from "./import-BSU-KPT5.js";
import { r as Et } from "./index-DBw-Vlhv.js";
const kt = Symbol.for("react-aria.i18n.locale"), At = Symbol.for("react-aria.i18n.strings");
let H;
class ne {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(e, t) {
    let l = this.getStringsForLocale(t)[e];
    if (!l)
      throw new Error(`Could not find intl message ${e} in ${t} locale`);
    return l;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(e) {
    let t = this.strings[e];
    return t || (t = St(e, this.strings, this.defaultLocale), this.strings[e] = t), t;
  }
  static getGlobalDictionaryForPackage(e) {
    if (typeof window > "u")
      return null;
    let t = window[kt];
    if (H === void 0) {
      let l = window[At];
      if (!l)
        return null;
      H = {};
      for (let i in l)
        H[i] = new ne({
          [t]: l[i]
        }, t);
    }
    let n = H == null ? void 0 : H[e];
    if (!n)
      throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return n;
  }
  constructor(e, t = "en-US") {
    this.strings = {
      ...e
    }, this.defaultLocale = t;
  }
}
function St(u, e, t = "en-US") {
  if (e[u])
    return e[u];
  let n = wt(u);
  if (e[n])
    return e[n];
  for (let l in e)
    if (l.startsWith(n + "-"))
      return e[l];
  return e[t];
}
function wt(u) {
  return Intl.Locale ? new Intl.Locale(u).language : u.split("-")[0];
}
const ke = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
class Ft {
  /** Formats a localized string for the given key with the provided variables. */
  format(e, t) {
    let n = this.strings.getStringForLocale(e, this.locale);
    return typeof n == "function" ? n(t, this) : n;
  }
  plural(e, t, n = "cardinal") {
    let l = t["=" + e];
    if (l)
      return typeof l == "function" ? l() : l;
    let i = this.locale + ":" + n, o = ke.get(i);
    o || (o = new Intl.PluralRules(this.locale, {
      type: n
    }), ke.set(i, o));
    let s = o.select(e);
    return l = t[s] || t.other, typeof l == "function" ? l() : l;
  }
  number(e) {
    let t = Ae.get(this.locale);
    return t || (t = new Intl.NumberFormat(this.locale), Ae.set(this.locale, t)), t.format(e);
  }
  select(e, t) {
    let n = e[t] || e.other;
    return typeof n == "function" ? n() : n;
  }
  constructor(e, t) {
    this.locale = e, this.strings = t;
  }
}
const zt = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]), Kt = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function Pt(u) {
  if (Intl.Locale) {
    let t = new Intl.Locale(u).maximize(), n = typeof t.getTextInfo == "function" ? t.getTextInfo() : t.textInfo;
    if (n)
      return n.direction === "rtl";
    if (t.script)
      return zt.has(t.script);
  }
  let e = u.split("-")[0];
  return Kt.has(e);
}
const It = Symbol.for("react-aria.i18n.locale");
function Re() {
  let u = typeof window < "u" && window[It] || typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      u
    ]);
  } catch {
    u = "en-US";
  }
  return {
    locale: u,
    direction: Pt(u) ? "rtl" : "ltr"
  };
}
let $e = Re(), _ = /* @__PURE__ */ new Set();
function Se() {
  $e = Re();
  for (let u of _)
    u($e);
}
function Tt() {
  let u = ft(), [e, t] = at($e);
  return ee(() => (_.size === 0 && window.addEventListener("languagechange", Se), _.add(t), () => {
    _.delete(t), _.size === 0 && window.removeEventListener("languagechange", Se);
  }), []), u ? {
    locale: "en-US",
    direction: "ltr"
  } : e;
}
const Mt = /* @__PURE__ */ fe.createContext(null);
function V() {
  let u = Tt();
  return ct(Mt) || u;
}
const we = /* @__PURE__ */ new WeakMap();
function Nt(u) {
  let e = we.get(u);
  return e || (e = new ne(u), we.set(u, e)), e;
}
function jt(u, e) {
  return e && ne.getGlobalDictionaryForPackage(e) || Nt(u);
}
function J(u, e) {
  let { locale: t } = V(), n = jt(u, e);
  return N(() => new Ft(t, n), [
    t,
    n
  ]);
}
let se = /* @__PURE__ */ new Map();
function Ve(u) {
  let { locale: e } = V(), t = e + (u ? Object.entries(u).sort((l, i) => l[0] < i[0] ? -1 : 1).join() : "");
  if (se.has(t))
    return se.get(t);
  let n = new Intl.Collator(e, u);
  return se.set(t, n), n;
}
const Oe = 7e3;
let ce = null;
function Ue(u, e = "assertive", t = Oe) {
  ce || (ce = new Lt()), ce.announce(u, e, t);
}
class Lt {
  createLog(e) {
    let t = document.createElement("div");
    return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(e, t = "assertive", n = Oe) {
    if (!this.node)
      return;
    let l = document.createElement("div");
    l.textContent = e, t === "assertive" ? this.assertiveLog.appendChild(l) : this.politeLog.appendChild(l), e !== "" && setTimeout(() => {
      l.remove();
    }, n);
  }
  clear(e) {
    this.node && ((!e || e === "assertive") && (this.assertiveLog.innerHTML = ""), (!e || e === "polite") && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node);
  }
}
function pe(u) {
  return gt() ? u.altKey : u.ctrlKey;
}
function Y(u) {
  return ht() ? u.metaKey : u.ctrlKey;
}
const Rt = 1e3;
function Vt(u) {
  let { keyboardDelegate: e, selectionManager: t, onTypeSelect: n } = u, l = I({
    search: "",
    timeout: null
  }).current, i = (o) => {
    let s = Ot(o.key);
    if (!s || o.ctrlKey || o.metaKey || !o.currentTarget.contains(o.target))
      return;
    s === " " && l.search.trim().length > 0 && (o.preventDefault(), "continuePropagation" in o || o.stopPropagation()), l.search += s;
    let r = e.getKeyForSearch(l.search, t.focusedKey);
    r == null && (r = e.getKeyForSearch(l.search)), r != null && (t.setFocusedKey(r), n && n(r)), clearTimeout(l.timeout), l.timeout = setTimeout(() => {
      l.search = "";
    }, Rt);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? i : null
    }
  };
}
function Ot(u) {
  return u.length === 1 || !/^[A-Z]/i.test(u) ? u : "";
}
function Ut(u) {
  let { selectionManager: e, keyboardDelegate: t, ref: n, autoFocus: l = !1, shouldFocusWrap: i = !1, disallowEmptySelection: o = !1, disallowSelectAll: s = !1, selectOnFocus: r = e.selectionBehavior === "replace", disallowTypeAhead: $ = !1, shouldUseVirtualFocus: f, allowsTabNavigation: m = !1, isVirtualized: b, scrollRef: d = n, linkBehavior: C = "action" } = u, { direction: x } = V(), y = Ne(), D = (c) => {
    if (c.altKey && c.key === "Tab" && c.preventDefault(), !n.current.contains(c.target))
      return;
    const E = (p, L) => {
      if (p != null) {
        if (e.isLink(p) && C === "selection" && r && !pe(c)) {
          Et.flushSync(() => {
            e.setFocusedKey(p, L);
          });
          let O = d.current.querySelector(`[data-key="${CSS.escape(p.toString())}"]`);
          y.open(O, c);
          return;
        }
        if (e.setFocusedKey(p, L), e.isLink(p) && C === "override")
          return;
        c.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(p) : r && !pe(c) && e.replaceSelection(p);
      }
    };
    switch (c.key) {
      case "ArrowDown":
        if (t.getKeyBelow) {
          var F, S;
          c.preventDefault();
          let p = e.focusedKey != null ? t.getKeyBelow(e.focusedKey) : (F = t.getFirstKey) === null || F === void 0 ? void 0 : F.call(t);
          p == null && i && (p = (S = t.getFirstKey) === null || S === void 0 ? void 0 : S.call(t, e.focusedKey)), E(p);
        }
        break;
      case "ArrowUp":
        if (t.getKeyAbove) {
          var K, P;
          c.preventDefault();
          let p = e.focusedKey != null ? t.getKeyAbove(e.focusedKey) : (K = t.getLastKey) === null || K === void 0 ? void 0 : K.call(t);
          p == null && i && (p = (P = t.getLastKey) === null || P === void 0 ? void 0 : P.call(t, e.focusedKey)), E(p);
        }
        break;
      case "ArrowLeft":
        if (t.getKeyLeftOf) {
          var Q, a;
          c.preventDefault();
          let p = t.getKeyLeftOf(e.focusedKey);
          p == null && i && (p = x === "rtl" ? (Q = t.getFirstKey) === null || Q === void 0 ? void 0 : Q.call(t, e.focusedKey) : (a = t.getLastKey) === null || a === void 0 ? void 0 : a.call(t, e.focusedKey)), E(p, x === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (t.getKeyRightOf) {
          var oe, re;
          c.preventDefault();
          let p = t.getKeyRightOf(e.focusedKey);
          p == null && i && (p = x === "rtl" ? (oe = t.getLastKey) === null || oe === void 0 ? void 0 : oe.call(t, e.focusedKey) : (re = t.getFirstKey) === null || re === void 0 ? void 0 : re.call(t, e.focusedKey)), E(p, x === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (t.getFirstKey) {
          c.preventDefault();
          let p = t.getFirstKey(e.focusedKey, Y(c));
          e.setFocusedKey(p), Y(c) && c.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(p) : r && e.replaceSelection(p);
        }
        break;
      case "End":
        if (t.getLastKey) {
          c.preventDefault();
          let p = t.getLastKey(e.focusedKey, Y(c));
          e.setFocusedKey(p), Y(c) && c.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(p) : r && e.replaceSelection(p);
        }
        break;
      case "PageDown":
        if (t.getKeyPageBelow) {
          c.preventDefault();
          let p = t.getKeyPageBelow(e.focusedKey);
          E(p);
        }
        break;
      case "PageUp":
        if (t.getKeyPageAbove) {
          c.preventDefault();
          let p = t.getKeyPageAbove(e.focusedKey);
          E(p);
        }
        break;
      case "a":
        Y(c) && e.selectionMode === "multiple" && s !== !0 && (c.preventDefault(), e.selectAll());
        break;
      case "Escape":
        c.preventDefault(), o || e.clearSelection();
        break;
      case "Tab":
        if (!m) {
          if (c.shiftKey)
            n.current.focus();
          else {
            let p = me(n.current, {
              tabbable: !0
            }), L, O;
            do
              O = p.lastChild(), O && (L = O);
            while (O);
            L && !L.contains(document.activeElement) && Be(L);
          }
          break;
        }
    }
  }, B = I({
    top: 0,
    left: 0
  });
  mt(d, "scroll", b ? null : () => {
    B.current = {
      top: d.current.scrollTop,
      left: d.current.scrollLeft
    };
  });
  let g = (c) => {
    if (e.isFocused) {
      c.currentTarget.contains(c.target) || e.setFocused(!1);
      return;
    }
    if (c.currentTarget.contains(c.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        let S = (P) => {
          P != null && (e.setFocusedKey(P), r && e.replaceSelection(P));
        }, K = c.relatedTarget;
        var E, F;
        K && c.currentTarget.compareDocumentPosition(K) & Node.DOCUMENT_POSITION_FOLLOWING ? S((E = e.lastSelectedKey) !== null && E !== void 0 ? E : t.getLastKey()) : S((F = e.firstSelectedKey) !== null && F !== void 0 ? F : t.getFirstKey());
      } else
        b || (d.current.scrollTop = B.current.top, d.current.scrollLeft = B.current.left);
      if (!b && e.focusedKey != null) {
        let S = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
        S && (S.contains(document.activeElement) || Be(S), Ce() === "keyboard" && T(S, {
          containingElement: n.current
        }));
      }
    }
  }, v = (c) => {
    c.currentTarget.contains(c.relatedTarget) || e.setFocused(!1);
  };
  const h = I(l);
  ee(() => {
    if (h.current) {
      let c = null;
      l === "first" && (c = t.getFirstKey()), l === "last" && (c = t.getLastKey());
      let E = e.selectedKeys;
      if (E.size) {
        for (let F of E)
          if (e.canSelectItem(F)) {
            c = F;
            break;
          }
      }
      e.setFocused(!0), e.setFocusedKey(c), c == null && !f && z(n.current);
    }
  }, []);
  let A = I(e.focusedKey);
  ee(() => {
    let c = Ce();
    if (e.isFocused && e.focusedKey != null && (d != null && d.current)) {
      let E = d.current.querySelector(`[data-key="${CSS.escape(e.focusedKey.toString())}"]`);
      E && (c === "keyboard" || h.current) && (b || $t(d.current, E), c !== "virtual" && T(E, {
        containingElement: n.current
      }));
    }
    e.isFocused && e.focusedKey == null && A.current != null && z(n.current), A.current = e.focusedKey, h.current = !1;
  }, [
    b,
    d,
    e.focusedKey,
    e.isFocused,
    n
  ]);
  let w = {
    onKeyDown: D,
    onFocus: g,
    onBlur: v,
    onMouseDown(c) {
      d.current === c.target && c.preventDefault();
    }
  }, { typeSelectProps: ue } = Vt({
    keyboardDelegate: t,
    selectionManager: e
  });
  $ || (w = R(ue, w));
  let j;
  return f || (j = e.focusedKey == null ? 0 : -1), {
    collectionProps: {
      ...w,
      tabIndex: j
    }
  };
}
function He(u) {
  let { selectionManager: e, key: t, ref: n, shouldSelectOnPressUp: l, shouldUseVirtualFocus: i, focus: o, isDisabled: s, onAction: r, allowsDifferentPressOrigin: $, linkBehavior: f = "action" } = u, m = Ne(), b = (a) => {
    if (a.pointerType === "keyboard" && pe(a))
      e.toggleSelection(t);
    else {
      if (e.selectionMode === "none")
        return;
      if (e.isLink(t)) {
        if (f === "selection") {
          m.open(n.current, a), e.setSelectedKeys(e.selectedKeys);
          return;
        } else if (f === "override" || f === "none")
          return;
      }
      e.selectionMode === "single" ? e.isSelected(t) && !e.disallowEmptySelection ? e.toggleSelection(t) : e.replaceSelection(t) : a && a.shiftKey ? e.extendSelection(t) : e.selectionBehavior === "toggle" || a && (Y(a) || a.pointerType === "touch" || a.pointerType === "virtual") ? e.toggleSelection(t) : e.replaceSelection(t);
    }
  };
  ee(() => {
    t === e.focusedKey && e.isFocused && !i && (o ? o() : document.activeElement !== n.current && z(n.current));
  }, [
    n,
    t,
    e.focusedKey,
    e.childFocusStrategy,
    e.isFocused,
    i
  ]), s = s || e.isDisabled(t);
  let d = {};
  !i && !s ? d = {
    tabIndex: t === e.focusedKey ? 0 : -1,
    onFocus(a) {
      a.target === n.current && e.setFocusedKey(t);
    }
  } : s && (d.onMouseDown = (a) => {
    a.preventDefault();
  });
  let C = e.isLink(t) && f === "override", x = e.isLink(t) && f !== "selection" && f !== "none", y = !s && e.canSelectItem(t) && !C, D = (r || x) && !s, B = D && (e.selectionBehavior === "replace" ? !y : !y || e.isEmpty), g = D && y && e.selectionBehavior === "replace", v = B || g, h = I(null), A = v && y, w = I(!1), ue = I(!1), j = (a) => {
    r && r(), x && m.open(n.current, a);
  }, c = {};
  l ? (c.onPressStart = (a) => {
    h.current = a.pointerType, w.current = A, a.pointerType === "keyboard" && (!v || ze()) && b(a);
  }, $ ? (c.onPressUp = B ? null : (a) => {
    a.pointerType !== "keyboard" && y && b(a);
  }, c.onPress = B ? j : null) : c.onPress = (a) => {
    if (B || g && a.pointerType !== "mouse") {
      if (a.pointerType === "keyboard" && !Fe())
        return;
      j(a);
    } else
      a.pointerType !== "keyboard" && y && b(a);
  }) : (c.onPressStart = (a) => {
    h.current = a.pointerType, w.current = A, ue.current = B, y && (a.pointerType === "mouse" && !B || a.pointerType === "keyboard" && (!D || ze())) && b(a);
  }, c.onPress = (a) => {
    (a.pointerType === "touch" || a.pointerType === "pen" || a.pointerType === "virtual" || a.pointerType === "keyboard" && v && Fe() || a.pointerType === "mouse" && ue.current) && (v ? j(a) : y && b(a));
  }), d["data-key"] = t, c.preventFocusOnPress = i;
  let { pressProps: E, isPressed: F } = je(c), S = g ? (a) => {
    h.current === "mouse" && (a.stopPropagation(), a.preventDefault(), j(a));
  } : void 0, { longPressProps: K } = pt({
    isDisabled: !A,
    onLongPress(a) {
      a.pointerType === "touch" && (b(a), e.setSelectionBehavior("toggle"));
    }
  }), P = (a) => {
    h.current === "touch" && w.current && a.preventDefault();
  }, Q = e.isLink(t) ? (a) => {
    bt.isOpening || a.preventDefault();
  } : void 0;
  return {
    itemProps: R(d, y || B ? E : {}, A ? K : {}, {
      onDoubleClick: S,
      onDragStartCapture: P,
      onClick: Q
    }),
    isPressed: F,
    isSelected: e.isSelected(t),
    isFocused: e.isFocused && e.focusedKey === t,
    isDisabled: s,
    allowsSelection: y,
    hasAction: v
  };
}
function Fe() {
  let u = window.event;
  return (u == null ? void 0 : u.key) === "Enter";
}
function ze() {
  let u = window.event;
  return (u == null ? void 0 : u.key) === " " || (u == null ? void 0 : u.code) === "Space";
}
class Ht {
  build(e, t) {
    return this.context = t, Ke(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: t, items: n } = e;
    if (typeof t == "function") {
      if (!n)
        throw new Error("props.children was a function but props.items is missing");
      for (let l of e.items)
        yield* this.getFullNode({
          value: l
        }, {
          renderer: t
        });
    } else {
      let l = [];
      fe.Children.forEach(t, (o) => {
        l.push(o);
      });
      let i = 0;
      for (let o of l) {
        let s = this.getFullNode({
          element: o,
          index: i
        }, {});
        for (let r of s)
          i++, yield r;
      }
    }
  }
  getKey(e, t, n, l) {
    if (e.key != null)
      return e.key;
    if (t.type === "cell" && t.key != null)
      return `${l}${t.key}`;
    let i = t.value;
    if (i != null) {
      var o;
      let s = (o = i.key) !== null && o !== void 0 ? o : i.id;
      if (s == null)
        throw new Error("No key found for item");
      return s;
    }
    return l ? `${l}.${t.index}` : `$.${t.index}`;
  }
  getChildState(e, t) {
    return {
      renderer: t.renderer || e.renderer
    };
  }
  *getFullNode(e, t, n, l) {
    let i = e.element;
    if (!i && e.value && t && t.renderer) {
      let r = this.cache.get(e.value);
      if (r && (!r.shouldInvalidate || !r.shouldInvalidate(this.context))) {
        r.index = e.index, r.parentKey = l ? l.key : null, yield r;
        return;
      }
      i = t.renderer(e.value);
    }
    if (fe.isValidElement(i)) {
      let r = i.type;
      if (typeof r != "function" && typeof r.getCollectionNode != "function") {
        let b = typeof i.type == "function" ? i.type.name : i.type;
        throw new Error(`Unknown element <${b}> in collection.`);
      }
      let $ = r.getCollectionNode(i.props, this.context), f = e.index, m = $.next();
      for (; !m.done && m.value; ) {
        let b = m.value;
        e.index = f;
        let d = b.key;
        d || (d = b.element ? null : this.getKey(i, e, t, n));
        let x = [
          ...this.getFullNode({
            ...b,
            key: d,
            index: f,
            wrapper: Yt(e.wrapper, b.wrapper)
          }, this.getChildState(t, b), n ? `${n}${i.key}` : i.key, l)
        ];
        for (let y of x) {
          if (y.value = b.value || e.value, y.value && this.cache.set(y.value, y), e.type && y.type !== e.type)
            throw new Error(`Unsupported type <${ae(y.type)}> in <${ae(l.type)}>. Only <${ae(e.type)}> is supported.`);
          f++, yield y;
        }
        m = $.next(x);
      }
      return;
    }
    if (e.key == null)
      return;
    let o = this, s = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: l ? l.key : null,
      value: e.value,
      level: l ? l.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: e.textValue,
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes,
      childNodes: Ke(function* () {
        if (!e.hasChildNodes)
          return;
        let r = 0;
        for (let $ of e.childNodes()) {
          $.key != null && ($.key = `${s.key}${$.key}`), $.index = r;
          let f = o.getFullNode($, o.getChildState(t, $), s.key, s);
          for (let m of f)
            r++, yield m;
        }
      })
    };
    yield s;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function Ke(u) {
  let e = [], t = null;
  return {
    *[Symbol.iterator]() {
      for (let n of e)
        yield n;
      t || (t = u());
      for (let n of t)
        e.push(n), yield n;
    }
  };
}
function Yt(u, e) {
  if (u && e)
    return (t) => u(e(t));
  if (u)
    return u;
  if (e)
    return e;
}
function ae(u) {
  return u[0].toUpperCase() + u.slice(1);
}
function ln(u, e, t) {
  let n = N(() => new Ht(), []), { children: l, items: i, collection: o } = u;
  return N(() => {
    if (o)
      return o;
    let r = n.build({
      children: l,
      items: i
    }, t);
    return e(r);
  }, [
    n,
    l,
    i,
    o,
    t,
    e
  ]);
}
function k(u, e) {
  return typeof e.getChildren == "function" ? e.getChildren(u.key) : u.childNodes;
}
function W(u) {
  return M(u, 0);
}
function M(u, e) {
  if (e < 0)
    return;
  let t = 0;
  for (let n of u) {
    if (t === e)
      return n;
    t++;
  }
}
function q(u) {
  let e;
  for (let t of u)
    e = t;
  return e;
}
function on(u, e, t) {
  if (e.parentKey === t.parentKey)
    return e.index - t.index;
  let n = [
    ...Pe(u, e),
    e
  ], l = [
    ...Pe(u, t),
    t
  ], i = n.slice(0, l.length).findIndex((o, s) => o !== l[s]);
  return i !== -1 ? (e = n[i], t = l[i], e.index - t.index) : n.findIndex((o) => o === t) >= 0 ? 1 : (l.findIndex((o) => o === e) >= 0, -1);
}
function Pe(u, e) {
  let t = [];
  for (; (e == null ? void 0 : e.parentKey) != null; )
    e = u.getItem(e.parentKey), t.unshift(e);
  return t;
}
var Ye = {};
Ye = {
  deselectedItem: (u) => `${u.item} غير المحدد`,
  longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
  select: "تحديد",
  selectedAll: "جميع العناصر المحددة.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "لم يتم تحديد عناصر",
    one: () => `${e.number(u.count)} عنصر محدد`,
    other: () => `${e.number(u.count)} عنصر محدد`
  })}.`,
  selectedItem: (u) => `${u.item} المحدد`
};
var We = {};
We = {
  deselectedItem: (u) => `${u.item} не е избран.`,
  longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
  select: "Изберете",
  selectedAll: "Всички елементи са избрани.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Няма избрани елементи",
    one: () => `${e.number(u.count)} избран елемент`,
    other: () => `${e.number(u.count)} избрани елементи`
  })}.`,
  selectedItem: (u) => `${u.item} избран.`
};
var Ge = {};
Ge = {
  deselectedItem: (u) => `Položka ${u.item} není vybrána.`,
  longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
  select: "Vybrat",
  selectedAll: "Vybrány všechny položky.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nevybrány žádné položky",
    one: () => `Vybrána ${e.number(u.count)} položka`,
    other: () => `Vybráno ${e.number(u.count)} položek`
  })}.`,
  selectedItem: (u) => `Vybrána položka ${u.item}.`
};
var qe = {};
qe = {
  deselectedItem: (u) => `${u.item} ikke valgt.`,
  longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
  select: "Vælg",
  selectedAll: "Alle elementer valgt.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Ingen elementer valgt",
    one: () => `${e.number(u.count)} element valgt`,
    other: () => `${e.number(u.count)} elementer valgt`
  })}.`,
  selectedItem: (u) => `${u.item} valgt.`
};
var Xe = {};
Xe = {
  deselectedItem: (u) => `${u.item} nicht ausgewählt.`,
  longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
  select: "Auswählen",
  selectedAll: "Alle Elemente ausgewählt.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Keine Elemente ausgewählt",
    one: () => `${e.number(u.count)} Element ausgewählt`,
    other: () => `${e.number(u.count)} Elemente ausgewählt`
  })}.`,
  selectedItem: (u) => `${u.item} ausgewählt.`
};
var Ze = {};
Ze = {
  deselectedItem: (u) => `Δεν επιλέχθηκε το στοιχείο ${u.item}.`,
  longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
  select: "Επιλογή",
  selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Δεν επιλέχθηκαν στοιχεία",
    one: () => `Επιλέχθηκε ${e.number(u.count)} στοιχείο`,
    other: () => `Επιλέχθηκαν ${e.number(u.count)} στοιχεία`
  })}.`,
  selectedItem: (u) => `Επιλέχθηκε το στοιχείο ${u.item}.`
};
var Je = {};
Je = {
  deselectedItem: (u) => `${u.item} not selected.`,
  select: "Select",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "No items selected",
    one: () => `${e.number(u.count)} item selected`,
    other: () => `${e.number(u.count)} items selected`
  })}.`,
  selectedAll: "All items selected.",
  selectedItem: (u) => `${u.item} selected.`,
  longPressToSelect: "Long press to enter selection mode."
};
var Qe = {};
Qe = {
  deselectedItem: (u) => `${u.item} no seleccionado.`,
  longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
  select: "Seleccionar",
  selectedAll: "Todos los elementos seleccionados.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Ningún elemento seleccionado",
    one: () => `${e.number(u.count)} elemento seleccionado`,
    other: () => `${e.number(u.count)} elementos seleccionados`
  })}.`,
  selectedItem: (u) => `${u.item} seleccionado.`
};
var _e = {};
_e = {
  deselectedItem: (u) => `${u.item} pole valitud.`,
  longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
  select: "Vali",
  selectedAll: "Kõik üksused valitud.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Üksusi pole valitud",
    one: () => `${e.number(u.count)} üksus valitud`,
    other: () => `${e.number(u.count)} üksust valitud`
  })}.`,
  selectedItem: (u) => `${u.item} valitud.`
};
var eu = {};
eu = {
  deselectedItem: (u) => `Kohdetta ${u.item} ei valittu.`,
  longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
  select: "Valitse",
  selectedAll: "Kaikki kohteet valittu.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Ei yhtään kohdetta valittu",
    one: () => `${e.number(u.count)} kohde valittu`,
    other: () => `${e.number(u.count)} kohdetta valittu`
  })}.`,
  selectedItem: (u) => `${u.item} valittu.`
};
var uu = {};
uu = {
  deselectedItem: (u) => `${u.item} non sélectionné.`,
  longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
  select: "Sélectionner",
  selectedAll: "Tous les éléments sélectionnés.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Aucun élément sélectionné",
    one: () => `${e.number(u.count)} élément sélectionné`,
    other: () => `${e.number(u.count)} éléments sélectionnés`
  })}.`,
  selectedItem: (u) => `${u.item} sélectionné.`
};
var tu = {};
tu = {
  deselectedItem: (u) => `${u.item} לא נבחר.`,
  longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
  select: "בחר",
  selectedAll: "כל הפריטים נבחרו.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "לא נבחרו פריטים",
    one: () => `פריט ${e.number(u.count)} נבחר`,
    other: () => `${e.number(u.count)} פריטים נבחרו`
  })}.`,
  selectedItem: (u) => `${u.item} נבחר.`
};
var nu = {};
nu = {
  deselectedItem: (u) => `Stavka ${u.item} nije odabrana.`,
  longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
  select: "Odaberite",
  selectedAll: "Odabrane su sve stavke.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nije odabrana nijedna stavka",
    one: () => `Odabrana je ${e.number(u.count)} stavka`,
    other: () => `Odabrano je ${e.number(u.count)} stavki`
  })}.`,
  selectedItem: (u) => `Stavka ${u.item} je odabrana.`
};
var lu = {};
lu = {
  deselectedItem: (u) => `${u.item} nincs kijelölve.`,
  longPressToSelect: "Nyomja hosszan a kijelöléshez.",
  select: "Kijelölés",
  selectedAll: "Az összes elem kijelölve.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Egy elem sincs kijelölve",
    one: () => `${e.number(u.count)} elem kijelölve`,
    other: () => `${e.number(u.count)} elem kijelölve`
  })}.`,
  selectedItem: (u) => `${u.item} kijelölve.`
};
var iu = {};
iu = {
  deselectedItem: (u) => `${u.item} non selezionato.`,
  longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
  select: "Seleziona",
  selectedAll: "Tutti gli elementi selezionati.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nessun elemento selezionato",
    one: () => `${e.number(u.count)} elemento selezionato`,
    other: () => `${e.number(u.count)} elementi selezionati`
  })}.`,
  selectedItem: (u) => `${u.item} selezionato.`
};
var ou = {};
ou = {
  deselectedItem: (u) => `${u.item} が選択されていません。`,
  longPressToSelect: "長押しして選択モードを開きます。",
  select: "選択",
  selectedAll: "すべての項目を選択しました。",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "項目が選択されていません",
    one: () => `${e.number(u.count)} 項目を選択しました`,
    other: () => `${e.number(u.count)} 項目を選択しました`
  })}。`,
  selectedItem: (u) => `${u.item} を選択しました。`
};
var ru = {};
ru = {
  deselectedItem: (u) => `${u.item}이(가) 선택되지 않았습니다.`,
  longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
  select: "선택",
  selectedAll: "모든 항목이 선택되었습니다.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "선택된 항목이 없습니다",
    one: () => `${e.number(u.count)}개 항목이 선택되었습니다`,
    other: () => `${e.number(u.count)}개 항목이 선택되었습니다`
  })}.`,
  selectedItem: (u) => `${u.item}이(가) 선택되었습니다.`
};
var su = {};
su = {
  deselectedItem: (u) => `${u.item} nepasirinkta.`,
  longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
  select: "Pasirinkti",
  selectedAll: "Pasirinkti visi elementai.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nepasirinktas nė vienas elementas",
    one: () => `Pasirinktas ${e.number(u.count)} elementas`,
    other: () => `Pasirinkta elementų: ${e.number(u.count)}`
  })}.`,
  selectedItem: (u) => `Pasirinkta: ${u.item}.`
};
var cu = {};
cu = {
  deselectedItem: (u) => `Vienums ${u.item} nav atlasīts.`,
  longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
  select: "Atlasīt",
  selectedAll: "Atlasīti visi vienumi.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nav atlasīts neviens vienums",
    one: () => `Atlasīto vienumu skaits: ${e.number(u.count)}`,
    other: () => `Atlasīto vienumu skaits: ${e.number(u.count)}`
  })}.`,
  selectedItem: (u) => `Atlasīts vienums ${u.item}.`
};
var au = {};
au = {
  deselectedItem: (u) => `${u.item} er ikke valgt.`,
  longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
  select: "Velg",
  selectedAll: "Alle elementer er valgt.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Ingen elementer er valgt",
    one: () => `${e.number(u.count)} element er valgt`,
    other: () => `${e.number(u.count)} elementer er valgt`
  })}.`,
  selectedItem: (u) => `${u.item} er valgt.`
};
var du = {};
du = {
  deselectedItem: (u) => `${u.item} niet geselecteerd.`,
  longPressToSelect: "Druk lang om de selectiemodus te openen.",
  select: "Selecteren",
  selectedAll: "Alle items geselecteerd.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Geen items geselecteerd",
    one: () => `${e.number(u.count)} item geselecteerd`,
    other: () => `${e.number(u.count)} items geselecteerd`
  })}.`,
  selectedItem: (u) => `${u.item} geselecteerd.`
};
var fu = {};
fu = {
  deselectedItem: (u) => `Nie zaznaczono ${u.item}.`,
  longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
  select: "Zaznacz",
  selectedAll: "Wszystkie zaznaczone elementy.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nie zaznaczono żadnych elementów",
    one: () => `${e.number(u.count)} zaznaczony element`,
    other: () => `${e.number(u.count)} zaznaczonych elementów`
  })}.`,
  selectedItem: (u) => `Zaznaczono ${u.item}.`
};
var mu = {};
mu = {
  deselectedItem: (u) => `${u.item} não selecionado.`,
  longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${e.number(u.count)} item selecionado`,
    other: () => `${e.number(u.count)} itens selecionados`
  })}.`,
  selectedItem: (u) => `${u.item} selecionado.`
};
var $u = {};
$u = {
  deselectedItem: (u) => `${u.item} não selecionado.`,
  longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${e.number(u.count)} item selecionado`,
    other: () => `${e.number(u.count)} itens selecionados`
  })}.`,
  selectedItem: (u) => `${u.item} selecionado.`
};
var pu = {};
pu = {
  deselectedItem: (u) => `${u.item} neselectat.`,
  longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
  select: "Selectare",
  selectedAll: "Toate elementele selectate.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Niciun element selectat",
    one: () => `${e.number(u.count)} element selectat`,
    other: () => `${e.number(u.count)} elemente selectate`
  })}.`,
  selectedItem: (u) => `${u.item} selectat.`
};
var bu = {};
bu = {
  deselectedItem: (u) => `${u.item} не выбрано.`,
  longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
  select: "Выбрать",
  selectedAll: "Выбраны все элементы.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Нет выбранных элементов",
    one: () => `${e.number(u.count)} элемент выбран`,
    other: () => `${e.number(u.count)} элементов выбрано`
  })}.`,
  selectedItem: (u) => `${u.item} выбрано.`
};
var gu = {};
gu = {
  deselectedItem: (u) => `Nevybraté položky: ${u.item}.`,
  longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
  select: "Vybrať",
  selectedAll: "Všetky vybraté položky.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Žiadne vybraté položky",
    one: () => `${e.number(u.count)} vybratá položka`,
    other: () => `Počet vybratých položiek:${e.number(u.count)}`
  })}.`,
  selectedItem: (u) => `Vybraté položky: ${u.item}.`
};
var hu = {};
hu = {
  deselectedItem: (u) => `Element ${u.item} ni izbran.`,
  longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
  select: "Izberite",
  selectedAll: "Vsi elementi so izbrani.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Noben element ni izbran",
    one: () => `${e.number(u.count)} element je izbran`,
    other: () => `${e.number(u.count)} elementov je izbranih`
  })}.`,
  selectedItem: (u) => `Element ${u.item} je izbran.`
};
var xu = {};
xu = {
  deselectedItem: (u) => `${u.item} nije izabrano.`,
  longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
  select: "Izaberite",
  selectedAll: "Izabrane su sve stavke.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Nije izabrana nijedna stavka",
    one: () => `Izabrana je ${e.number(u.count)} stavka`,
    other: () => `Izabrano je ${e.number(u.count)} stavki`
  })}.`,
  selectedItem: (u) => `${u.item} je izabrano.`
};
var yu = {};
yu = {
  deselectedItem: (u) => `${u.item} ej markerat.`,
  longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
  select: "Markera",
  selectedAll: "Alla markerade objekt.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Inga markerade objekt",
    one: () => `${e.number(u.count)} markerat objekt`,
    other: () => `${e.number(u.count)} markerade objekt`
  })}.`,
  selectedItem: (u) => `${u.item} markerat.`
};
var vu = {};
vu = {
  deselectedItem: (u) => `${u.item} seçilmedi.`,
  longPressToSelect: "Seçim moduna girmek için uzun basın.",
  select: "Seç",
  selectedAll: "Tüm ögeler seçildi.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Hiçbir öge seçilmedi",
    one: () => `${e.number(u.count)} öge seçildi`,
    other: () => `${e.number(u.count)} öge seçildi`
  })}.`,
  selectedItem: (u) => `${u.item} seçildi.`
};
var Du = {};
Du = {
  deselectedItem: (u) => `${u.item} не вибрано.`,
  longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
  select: "Вибрати",
  selectedAll: "Усі елементи вибрано.",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "Жодних елементів не вибрано",
    one: () => `${e.number(u.count)} елемент вибрано`,
    other: () => `Вибрано елементів: ${e.number(u.count)}`
  })}.`,
  selectedItem: (u) => `${u.item} вибрано.`
};
var Cu = {};
Cu = {
  deselectedItem: (u) => `未选择 ${u.item}。`,
  longPressToSelect: "长按以进入选择模式。",
  select: "选择",
  selectedAll: "已选择所有项目。",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "未选择项目",
    one: () => `已选择 ${e.number(u.count)} 个项目`,
    other: () => `已选择 ${e.number(u.count)} 个项目`
  })}。`,
  selectedItem: (u) => `已选择 ${u.item}。`
};
var Bu = {};
Bu = {
  deselectedItem: (u) => `未選取「${u.item}」。`,
  longPressToSelect: "長按以進入選擇模式。",
  select: "選取",
  selectedAll: "已選取所有項目。",
  selectedCount: (u, e) => `${e.plural(u.count, {
    "=0": "未選取任何項目",
    one: () => `已選取 ${e.number(u.count)} 個項目`,
    other: () => `已選取 ${e.number(u.count)} 個項目`
  })}。`,
  selectedItem: (u) => `已選取「${u.item}」。`
};
class X {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new X(this.x, this.y);
  }
  /**
  * Checks if two points are equal.
  */
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  /**
  * Returns true if this point is the origin.
  */
  isOrigin() {
    return this.x === 0 && this.y === 0;
  }
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
}
class Z {
  /**
  * The maximum x-coordinate in the rectangle.
  */
  get maxX() {
    return this.x + this.width;
  }
  /**
  * The maximum y-coordinate in the rectangle.
  */
  get maxY() {
    return this.y + this.height;
  }
  /**
  * The area of the rectangle.
  */
  get area() {
    return this.width * this.height;
  }
  /**
  * The top left corner of the rectangle.
  */
  get topLeft() {
    return new X(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new X(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new X(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new X(this.maxX, this.maxY);
  }
  /**
  * Returns whether this rectangle intersects another rectangle.
  * @param rect - The rectangle to check.
  */
  intersects(e) {
    return this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height;
  }
  /**
  * Returns whether this rectangle fully contains another rectangle.
  * @param rect - The rectangle to check.
  */
  containsRect(e) {
    return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY;
  }
  /**
  * Returns whether the rectangle contains the given point.
  * @param point - The point to check.
  */
  containsPoint(e) {
    return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y;
  }
  /**
  * Returns the first corner of this rectangle (from top to bottom, left to right)
  * that is contained in the given rectangle, or null of the rectangles do not intersect.
  * @param rect - The rectangle to check.
  */
  getCornerInRect(e) {
    for (let t of [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ])
      if (e.containsPoint(this[t]))
        return t;
    return null;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height;
  }
  pointEquals(e) {
    return this.x === e.x && this.y === e.y;
  }
  sizeEquals(e) {
    return this.width === e.width && this.height === e.height;
  }
  /**
  * Returns the union of this Rect and another.
  */
  union(e) {
    let t = Math.min(this.x, e.x), n = Math.min(this.y, e.y), l = Math.max(this.maxX, e.maxX) - t, i = Math.max(this.maxY, e.maxY) - n;
    return new Z(t, n, l, i);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(e) {
    if (!this.intersects(e))
      return new Z(0, 0, 0, 0);
    let t = Math.max(this.x, e.x), n = Math.max(this.y, e.y);
    return new Z(t, n, Math.min(this.maxX, e.maxX) - t, Math.min(this.maxY, e.maxY) - n);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new Z(this.x, this.y, this.width, this.height);
  }
  constructor(e = 0, t = 0, n = 0, l = 0) {
    this.x = e, this.y = t, this.width = n, this.height = l;
  }
}
let G = typeof window < "u" ? window.performance : null, Ie = G && (G.now || G.webkitNow || G.msNow || G.mozNow);
Ie && Ie.bind(G);
function xe(u) {
  return u && u.__esModule ? u.default : u;
}
class Eu {
  isCell(e) {
    return e.type === "cell";
  }
  isRow(e) {
    return e.type === "row" || e.type === "item";
  }
  findPreviousKey(e, t) {
    let n = e != null ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
    for (; n != null; ) {
      let l = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(l)))
        return n;
      n = this.collection.getKeyBefore(n);
    }
  }
  findNextKey(e, t) {
    let n = e != null ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; n != null; ) {
      let l = this.collection.getItem(n);
      if (!this.disabledKeys.has(n) && (!t || t(l)))
        return n;
      n = this.collection.getKeyAfter(n);
    }
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), e = this.findNextKey(e), e != null)) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return M(k(n, this.collection), t.index).key;
      }
      if (this.focusMode === "row")
        return e;
    }
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (t && (this.isCell(t) && (e = t.parentKey), e = this.findPreviousKey(e), e != null)) {
      if (this.isCell(t)) {
        let n = this.collection.getItem(e);
        return M(k(n, this.collection), t.index).key;
      }
      if (this.focusMode === "row")
        return e;
    }
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let n = k(t, this.collection);
        return this.direction === "rtl" ? q(n).key : W(n).key;
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey), l = k(n, this.collection), i = this.direction === "rtl" ? M(l, t.index - 1) : M(l, t.index + 1);
        return i ? i.key : this.focusMode === "row" ? t.parentKey : this.direction === "rtl" ? this.getFirstKey(e) : this.getLastKey(e);
      }
    }
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (this.isRow(t)) {
        let n = k(t, this.collection);
        return this.direction === "rtl" ? W(n).key : q(n).key;
      }
      if (this.isCell(t)) {
        let n = this.collection.getItem(t.parentKey), l = k(n, this.collection), i = this.direction === "rtl" ? M(l, t.index + 1) : M(l, t.index - 1);
        return i ? i.key : this.focusMode === "row" ? t.parentKey : this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e);
      }
    }
  }
  getFirstKey(e, t) {
    let n;
    if (e != null) {
      if (n = this.collection.getItem(e), !n)
        return;
      if (this.isCell(n) && !t) {
        let l = this.collection.getItem(n.parentKey);
        return W(k(l, this.collection)).key;
      }
    }
    if (e = this.findNextKey(), e != null && n && this.isCell(n) && t || this.focusMode === "cell") {
      let l = this.collection.getItem(e);
      e = W(k(l, this.collection)).key;
    }
    return e;
  }
  getLastKey(e, t) {
    let n;
    if (e != null) {
      if (n = this.collection.getItem(e), !n)
        return;
      if (this.isCell(n) && !t) {
        let l = this.collection.getItem(n.parentKey), i = k(l, this.collection);
        return q(i).key;
      }
    }
    if (e = this.findPreviousKey(), e != null && n && this.isCell(n) && t || this.focusMode === "cell") {
      let l = this.collection.getItem(e), i = k(l, this.collection);
      e = q(i).key;
    }
    return e;
  }
  getItem(e) {
    return this.ref.current.querySelector(`[data-key="${CSS.escape(e.toString())}"]`);
  }
  getItemRect(e) {
    var t;
    if (this.layout)
      return (t = this.layout.getLayoutInfo(e)) === null || t === void 0 ? void 0 : t.rect;
    let n = this.getItem(e);
    if (n)
      return new Z(n.offsetLeft, n.offsetTop, n.offsetWidth, n.offsetHeight);
  }
  getPageHeight() {
    var e, t, n;
    return this.layout ? (e = this.layout.virtualizer) === null || e === void 0 ? void 0 : e.visibleRect.height : (n = this.ref) === null || n === void 0 || (t = n.current) === null || t === void 0 ? void 0 : t.offsetHeight;
  }
  getContentHeight() {
    var e, t;
    return this.layout ? this.layout.getContentSize().height : (t = this.ref) === null || t === void 0 || (e = t.current) === null || e === void 0 ? void 0 : e.scrollHeight;
  }
  getKeyPageAbove(e) {
    let t = this.getItemRect(e);
    if (!t)
      return null;
    let n = Math.max(0, t.maxY - this.getPageHeight());
    for (; t && t.y > n; )
      e = this.getKeyAbove(e), t = this.getItemRect(e);
    return e;
  }
  getKeyPageBelow(e) {
    let t = this.getItemRect(e);
    if (!t)
      return null;
    let n = this.getPageHeight(), l = Math.min(this.getContentHeight(), t.y + n);
    for (; t && t.maxY < l; ) {
      let i = this.getKeyBelow(e);
      t = this.getItemRect(i), i != null && (e = i);
    }
    return e;
  }
  getKeyForSearch(e, t) {
    if (!this.collator)
      return null;
    let n = this.collection, l = t ?? this.getFirstKey(), i = n.getItem(l);
    i.type === "cell" && (l = i.parentKey);
    let o = !1;
    for (; l != null; ) {
      let s = n.getItem(l);
      if (s.textValue) {
        let r = s.textValue.slice(0, e.length);
        if (this.collator.compare(r, e) === 0)
          return this.isRow(s) && this.focusMode === "cell" ? W(k(s, this.collection)).key : s.key;
      }
      l = this.findNextKey(l), l == null && !o && (l = this.getFirstKey(), o = !0);
    }
    return null;
  }
  constructor(e) {
    this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.ref = e.ref, this.direction = e.direction, this.collator = e.collator, this.layout = e.layout, this.focusMode = e.focusMode || "row";
  }
}
const ye = /* @__PURE__ */ new WeakMap();
var le = {};
le = {
  "ar-AE": Ye,
  "bg-BG": We,
  "cs-CZ": Ge,
  "da-DK": qe,
  "de-DE": Xe,
  "el-GR": Ze,
  "en-US": Je,
  "es-ES": Qe,
  "et-EE": _e,
  "fi-FI": eu,
  "fr-FR": uu,
  "he-IL": tu,
  "hr-HR": nu,
  "hu-HU": lu,
  "it-IT": iu,
  "ja-JP": ou,
  "ko-KR": ru,
  "lt-LT": su,
  "lv-LV": cu,
  "nb-NO": au,
  "nl-NL": du,
  "pl-PL": fu,
  "pt-BR": mu,
  "pt-PT": $u,
  "ro-RO": pu,
  "ru-RU": bu,
  "sk-SK": gu,
  "sl-SI": hu,
  "sr-SP": xu,
  "sv-SE": yu,
  "tr-TR": vu,
  "uk-UA": Du,
  "zh-CN": Cu,
  "zh-TW": Bu
};
function Wt(u, e) {
  let { getRowText: t = (o) => {
    var s, r, $, f;
    return (f = (s = (r = e.collection).getTextValue) === null || s === void 0 ? void 0 : s.call(r, o)) !== null && f !== void 0 ? f : ($ = e.collection.getItem(o)) === null || $ === void 0 ? void 0 : $.textValue;
  } } = u, n = J(/* @__PURE__ */ xe(le), "@react-aria/grid"), l = e.selectionManager.rawSelection, i = I(l);
  Le(() => {
    var o;
    if (!e.selectionManager.isFocused) {
      i.current = l;
      return;
    }
    let s = Te(l, i.current), r = Te(i.current, l), $ = e.selectionManager.selectionBehavior === "replace", f = [];
    if (e.selectionManager.selectedKeys.size === 1 && $) {
      if (e.collection.getItem(e.selectionManager.selectedKeys.keys().next().value)) {
        let m = t(e.selectionManager.selectedKeys.keys().next().value);
        m && f.push(n.format("selectedItem", {
          item: m
        }));
      }
    } else if (s.size === 1 && r.size === 0) {
      let m = t(s.keys().next().value);
      m && f.push(n.format("selectedItem", {
        item: m
      }));
    } else if (r.size === 1 && s.size === 0 && e.collection.getItem(r.keys().next().value)) {
      let m = t(r.keys().next().value);
      m && f.push(n.format("deselectedItem", {
        item: m
      }));
    }
    e.selectionManager.selectionMode === "multiple" && (f.length === 0 || l === "all" || l.size > 1 || i.current === "all" || ((o = i.current) === null || o === void 0 ? void 0 : o.size) > 1) && f.push(l === "all" ? n.format("selectedAll") : n.format("selectedCount", {
      count: l.size
    })), f.length > 0 && Ue(f.join(" ")), i.current = l;
  }, [
    l
  ]);
}
function Te(u, e) {
  let t = /* @__PURE__ */ new Set();
  if (u === "all" || e === "all")
    return t;
  for (let n of u.keys())
    e.has(n) || t.add(n);
  return t;
}
function Gt(u) {
  let e = J(/* @__PURE__ */ xe(le), "@react-aria/grid"), t = vt(), n = (t === "pointer" || t === "virtual" || t == null) && typeof window < "u" && "ontouchstart" in window, l = N(() => {
    let o = u.selectionManager.selectionMode, s = u.selectionManager.selectionBehavior, r;
    return n && (r = e.format("longPressToSelect")), s === "replace" && o !== "none" && u.hasItemActions ? r : void 0;
  }, [
    u.selectionManager.selectionMode,
    u.selectionManager.selectionBehavior,
    u.hasItemActions,
    e,
    n
  ]);
  return he(l);
}
function qt(u, e, t) {
  let { isVirtualized: n, keyboardDelegate: l, focusMode: i, scrollRef: o, getRowText: s, onRowAction: r, onCellAction: $ } = u, { selectionManager: f } = e;
  !u["aria-label"] && !u["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let m = Ve({
    usage: "search",
    sensitivity: "base"
  }), { direction: b } = V(), d = e.selectionManager.disabledBehavior, C = N(() => l || new Eu({
    collection: e.collection,
    disabledKeys: d === "selection" ? /* @__PURE__ */ new Set() : e.disabledKeys,
    ref: t,
    direction: b,
    collator: m,
    focusMode: i
  }), [
    l,
    e.collection,
    e.disabledKeys,
    d,
    t,
    b,
    m,
    i
  ]), { collectionProps: x } = Ut({
    ref: t,
    selectionManager: f,
    keyboardDelegate: C,
    isVirtualized: n,
    scrollRef: o
  }), y = ge(u.id);
  ye.set(e, {
    keyboardDelegate: C,
    actions: {
      onRowAction: r,
      onCellAction: $
    }
  });
  let D = Gt({
    selectionManager: f,
    hasItemActions: !!(r || $)
  }), B = xt(u, {
    labelable: !0
  }), g = dt((w) => {
    if (f.isFocused) {
      w.currentTarget.contains(w.target) || f.setFocused(!1);
      return;
    }
    w.currentTarget.contains(w.target) && f.setFocused(!0);
  }, [
    f
  ]), v = N(() => ({
    onBlur: x.onBlur,
    onFocus: g
  }), [
    g,
    x.onBlur
  ]), h = yt(t, {
    isDisabled: e.collection.size !== 0
  }), A = R(
    B,
    {
      role: "grid",
      id: y,
      "aria-multiselectable": f.selectionMode === "multiple" ? "true" : void 0
    },
    e.isKeyboardNavigationDisabled ? v : x,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    e.collection.size === 0 && {
      tabIndex: h ? -1 : 0
    },
    D
  );
  return n && (A["aria-rowcount"] = e.collection.size, A["aria-colcount"] = e.collection.columnCount), Wt({
    getRowText: s
  }, e), {
    gridProps: A
  };
}
function Xt() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function Zt(u, e, t) {
  let { node: n, isVirtualized: l, shouldSelectOnPressUp: i, onAction: o } = u, { actions: { onRowAction: s } } = ye.get(e), { itemProps: r, ...$ } = He({
    selectionManager: e.selectionManager,
    key: n.key,
    ref: t,
    isVirtualized: l,
    shouldSelectOnPressUp: i,
    onAction: s ? () => s(n.key) : o,
    isDisabled: e.collection.size === 0
  }), f = e.selectionManager.isSelected(n.key), m = {
    role: "row",
    "aria-selected": e.selectionManager.selectionMode !== "none" ? f : void 0,
    "aria-disabled": $.isDisabled || void 0,
    ...r
  };
  return l && (m["aria-rowindex"] = n.index + 1), {
    rowProps: m,
    ...$
  };
}
function ku(u, e, t) {
  let { node: n, isVirtualized: l, focusMode: i = "child", shouldSelectOnPressUp: o, onAction: s } = u, { direction: r } = V(), { keyboardDelegate: $, actions: { onCellAction: f } } = ye.get(e), m = I(null), b = () => {
    let g = me(t.current);
    if (i === "child") {
      if (t.current.contains(document.activeElement) && t.current !== document.activeElement)
        return;
      let v = e.selectionManager.childFocusStrategy === "last" ? de(g) : g.firstChild();
      if (v) {
        z(v);
        return;
      }
    }
    (m.current != null && n.key !== m.current || !t.current.contains(document.activeElement)) && z(t.current);
  }, { itemProps: d, isPressed: C } = He({
    selectionManager: e.selectionManager,
    key: n.key,
    ref: t,
    isVirtualized: l,
    focus: b,
    shouldSelectOnPressUp: o,
    onAction: f ? () => f(n.key) : s,
    isDisabled: e.collection.size === 0
  }), D = R(d, {
    role: "gridcell",
    onKeyDownCapture: (g) => {
      if (!g.currentTarget.contains(g.target) || e.isKeyboardNavigationDisabled)
        return;
      let v = me(t.current);
      switch (v.currentNode = document.activeElement, g.key) {
        case "ArrowLeft": {
          let h = r === "rtl" ? v.nextNode() : v.previousNode();
          if (i === "child" && h === t.current && (h = null), h)
            g.preventDefault(), g.stopPropagation(), z(h), T(h, {
              containingElement: U(t.current)
            });
          else {
            if ($.getKeyLeftOf(n.key) !== n.key)
              break;
            g.preventDefault(), g.stopPropagation(), i === "cell" && r === "rtl" ? (z(t.current), T(t.current, {
              containingElement: U(t.current)
            })) : (v.currentNode = t.current, h = r === "rtl" ? v.firstChild() : de(v), h && (z(h), T(h, {
              containingElement: U(t.current)
            })));
          }
          break;
        }
        case "ArrowRight": {
          let h = r === "rtl" ? v.previousNode() : v.nextNode();
          if (i === "child" && h === t.current && (h = null), h)
            g.preventDefault(), g.stopPropagation(), z(h), T(h, {
              containingElement: U(t.current)
            });
          else {
            if ($.getKeyRightOf(n.key) !== n.key)
              break;
            g.preventDefault(), g.stopPropagation(), i === "cell" && r === "ltr" ? (z(t.current), T(t.current, {
              containingElement: U(t.current)
            })) : (v.currentNode = t.current, h = r === "rtl" ? de(v) : v.firstChild(), h && (z(h), T(h, {
              containingElement: U(t.current)
            })));
          }
          break;
        }
        case "ArrowUp":
        case "ArrowDown":
          !g.altKey && t.current.contains(g.target) && (g.stopPropagation(), g.preventDefault(), t.current.parentElement.dispatchEvent(new KeyboardEvent(g.nativeEvent.type, g.nativeEvent)));
          break;
      }
    },
    onFocus: (g) => {
      if (m.current = n.key, g.target !== t.current) {
        Dt() || e.selectionManager.setFocusedKey(n.key);
        return;
      }
      requestAnimationFrame(() => {
        i === "child" && document.activeElement === t.current && b();
      });
    }
  });
  var B;
  return l && (D["aria-colindex"] = ((B = n.colIndex) !== null && B !== void 0 ? B : n.index) + 1), o && D.tabIndex != null && D.onPointerDown == null && (D.onPointerDown = (g) => {
    let v = g.currentTarget, h = v.getAttribute("tabindex");
    v.removeAttribute("tabindex"), requestAnimationFrame(() => {
      v.setAttribute("tabindex", h);
    });
  }), {
    gridCellProps: D,
    isPressed: C
  };
}
function de(u) {
  let e, t;
  do
    t = u.lastChild(), t && (e = t);
  while (t);
  return e;
}
function Jt(u, e) {
  let { key: t } = u, n = e.selectionManager, l = ge(), i = !e.selectionManager.canSelectItem(t), o = e.selectionManager.isSelected(t), s = () => n.select(t);
  const r = J(/* @__PURE__ */ xe(le), "@react-aria/grid");
  return {
    checkboxProps: {
      id: l,
      "aria-label": r.format("select"),
      isSelected: o,
      isDisabled: i,
      onChange: s
    }
  };
}
var Au = {};
Au = {
  ascending: "تصاعدي",
  ascendingSort: (u) => `ترتيب حسب العمود ${u.columnName} بترتيب تصاعدي`,
  columnSize: (u) => `${u.value} بالبكسل`,
  descending: "تنازلي",
  descendingSort: (u) => `ترتيب حسب العمود ${u.columnName} بترتيب تنازلي`,
  resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
  select: "تحديد",
  selectAll: "تحديد الكل",
  sortable: "عمود قابل للترتيب"
};
var Su = {};
Su = {
  ascending: "възходящ",
  ascendingSort: (u) => `сортирано по колона ${u.columnName} във възходящ ред`,
  columnSize: (u) => `${u.value} пиксела`,
  descending: "низходящ",
  descendingSort: (u) => `сортирано по колона ${u.columnName} в низходящ ред`,
  resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
  select: "Изберете",
  selectAll: "Изберете всичко",
  sortable: "сортираща колона"
};
var wu = {};
wu = {
  ascending: "vzestupně",
  ascendingSort: (u) => `řazeno vzestupně podle sloupce ${u.columnName}`,
  columnSize: (u) => `${u.value} pixelů`,
  descending: "sestupně",
  descendingSort: (u) => `řazeno sestupně podle sloupce ${u.columnName}`,
  resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
  select: "Vybrat",
  selectAll: "Vybrat vše",
  sortable: "sloupec s možností řazení"
};
var Fu = {};
Fu = {
  ascending: "stigende",
  ascendingSort: (u) => `sorteret efter kolonne ${u.columnName} i stigende rækkefølge`,
  columnSize: (u) => `${u.value} pixels`,
  descending: "faldende",
  descendingSort: (u) => `sorteret efter kolonne ${u.columnName} i faldende rækkefølge`,
  resizerDescription: "Tryk på Enter for at ændre størrelse",
  select: "Vælg",
  selectAll: "Vælg alle",
  sortable: "sorterbar kolonne"
};
var zu = {};
zu = {
  ascending: "aufsteigend",
  ascendingSort: (u) => `sortiert nach Spalte ${u.columnName} in aufsteigender Reihenfolge`,
  columnSize: (u) => `${u.value} Pixel`,
  descending: "absteigend",
  descendingSort: (u) => `sortiert nach Spalte ${u.columnName} in absteigender Reihenfolge`,
  resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
  select: "Auswählen",
  selectAll: "Alles auswählen",
  sortable: "sortierbare Spalte"
};
var Ku = {};
Ku = {
  ascending: "αύξουσα",
  ascendingSort: (u) => `διαλογή ανά στήλη ${u.columnName} σε αύξουσα σειρά`,
  columnSize: (u) => `${u.value} pixel`,
  descending: "φθίνουσα",
  descendingSort: (u) => `διαλογή ανά στήλη ${u.columnName} σε φθίνουσα σειρά`,
  resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
  select: "Επιλογή",
  selectAll: "Επιλογή όλων",
  sortable: "Στήλη διαλογής"
};
var Pu = {};
Pu = {
  select: "Select",
  selectAll: "Select All",
  sortable: "sortable column",
  ascending: "ascending",
  descending: "descending",
  ascendingSort: (u) => `sorted by column ${u.columnName} in ascending order`,
  descendingSort: (u) => `sorted by column ${u.columnName} in descending order`,
  columnSize: (u) => `${u.value} pixels`,
  resizerDescription: "Press Enter to start resizing"
};
var Iu = {};
Iu = {
  ascending: "de subida",
  ascendingSort: (u) => `ordenado por columna ${u.columnName} en orden de subida`,
  columnSize: (u) => `${u.value} píxeles`,
  descending: "de bajada",
  descendingSort: (u) => `ordenado por columna ${u.columnName} en orden de bajada`,
  resizerDescription: "Pulse Intro para empezar a redimensionar",
  select: "Seleccionar",
  selectAll: "Seleccionar todos",
  sortable: "columna ordenable"
};
var Tu = {};
Tu = {
  ascending: "tõusev järjestus",
  ascendingSort: (u) => `sorditud veeru järgi ${u.columnName} tõusvas järjestuses`,
  columnSize: (u) => `${u.value} pikslit`,
  descending: "laskuv järjestus",
  descendingSort: (u) => `sorditud veeru järgi ${u.columnName} laskuvas järjestuses`,
  resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
  select: "Vali",
  selectAll: "Vali kõik",
  sortable: "sorditav veerg"
};
var Mu = {};
Mu = {
  ascending: "nouseva",
  ascendingSort: (u) => `lajiteltu sarakkeen ${u.columnName} mukaan nousevassa järjestyksessä`,
  columnSize: (u) => `${u.value} pikseliä`,
  descending: "laskeva",
  descendingSort: (u) => `lajiteltu sarakkeen ${u.columnName} mukaan laskevassa järjestyksessä`,
  resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
  select: "Valitse",
  selectAll: "Valitse kaikki",
  sortable: "lajiteltava sarake"
};
var Nu = {};
Nu = {
  ascending: "croissant",
  ascendingSort: (u) => `trié en fonction de la colonne ${u.columnName} par ordre croissant`,
  columnSize: (u) => `${u.value} pixels`,
  descending: "décroissant",
  descendingSort: (u) => `trié en fonction de la colonne ${u.columnName} par ordre décroissant`,
  resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
  select: "Sélectionner",
  selectAll: "Sélectionner tout",
  sortable: "colonne triable"
};
var ju = {};
ju = {
  ascending: "עולה",
  ascendingSort: (u) => `מוין לפי עמודה ${u.columnName} בסדר עולה`,
  columnSize: (u) => `${u.value} פיקסלים`,
  descending: "יורד",
  descendingSort: (u) => `מוין לפי עמודה ${u.columnName} בסדר יורד`,
  resizerDescription: "הקש Enter כדי לשנות את הגודל",
  select: "בחר",
  selectAll: "בחר הכול",
  sortable: "עמודה שניתן למיין"
};
var Lu = {};
Lu = {
  ascending: "rastući",
  ascendingSort: (u) => `razvrstano po stupcima ${u.columnName} rastućem redoslijedom`,
  columnSize: (u) => `${u.value} piksela`,
  descending: "padajući",
  descendingSort: (u) => `razvrstano po stupcima ${u.columnName} padajućim redoslijedom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Odaberite",
  selectAll: "Odaberite sve",
  sortable: "stupac koji se može razvrstati"
};
var Ru = {};
Ru = {
  ascending: "növekvő",
  ascendingSort: (u) => `rendezve a(z) ${u.columnName} oszlop szerint, növekvő sorrendben`,
  columnSize: (u) => `${u.value} képpont`,
  descending: "csökkenő",
  descendingSort: (u) => `rendezve a(z) ${u.columnName} oszlop szerint, csökkenő sorrendben`,
  resizerDescription: "Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
  select: "Kijelölés",
  selectAll: "Összes kijelölése",
  sortable: "rendezendő oszlop"
};
var Vu = {};
Vu = {
  ascending: "crescente",
  ascendingSort: (u) => `in ordine crescente in base alla colonna ${u.columnName}`,
  columnSize: (u) => `${u.value} pixel`,
  descending: "decrescente",
  descendingSort: (u) => `in ordine decrescente in base alla colonna ${u.columnName}`,
  resizerDescription: "Premi Invio per iniziare a ridimensionare",
  select: "Seleziona",
  selectAll: "Seleziona tutto",
  sortable: "colonna ordinabile"
};
var Ou = {};
Ou = {
  ascending: "昇順",
  ascendingSort: (u) => `列 ${u.columnName} を昇順で並べ替え`,
  columnSize: (u) => `${u.value} ピクセル`,
  descending: "降順",
  descendingSort: (u) => `列 ${u.columnName} を降順で並べ替え`,
  resizerDescription: "Enter キーを押してサイズ変更を開始",
  select: "選択",
  selectAll: "すべて選択",
  sortable: "並べ替え可能な列"
};
var Uu = {};
Uu = {
  ascending: "오름차순",
  ascendingSort: (u) => `${u.columnName} 열을 기준으로 오름차순으로 정렬됨`,
  columnSize: (u) => `${u.value} 픽셀`,
  descending: "내림차순",
  descendingSort: (u) => `${u.columnName} 열을 기준으로 내림차순으로 정렬됨`,
  resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
  select: "선택",
  selectAll: "모두 선택",
  sortable: "정렬 가능한 열"
};
var Hu = {};
Hu = {
  ascending: "didėjančia tvarka",
  ascendingSort: (u) => `surikiuota pagal stulpelį ${u.columnName} didėjančia tvarka`,
  columnSize: (u) => `${u.value} piks.`,
  descending: "mažėjančia tvarka",
  descendingSort: (u) => `surikiuota pagal stulpelį ${u.columnName} mažėjančia tvarka`,
  resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
  select: "Pasirinkti",
  selectAll: "Pasirinkti viską",
  sortable: "rikiuojamas stulpelis"
};
var Yu = {};
Yu = {
  ascending: "augošā secībā",
  ascendingSort: (u) => `kārtots pēc kolonnas ${u.columnName} augošā secībā`,
  columnSize: (u) => `${u.value} pikseļi`,
  descending: "dilstošā secībā",
  descendingSort: (u) => `kārtots pēc kolonnas ${u.columnName} dilstošā secībā`,
  resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
  select: "Atlasīt",
  selectAll: "Atlasīt visu",
  sortable: "kārtojamā kolonna"
};
var Wu = {};
Wu = {
  ascending: "stigende",
  ascendingSort: (u) => `sortert etter kolonne ${u.columnName} i stigende rekkefølge`,
  columnSize: (u) => `${u.value} piksler`,
  descending: "synkende",
  descendingSort: (u) => `sortert etter kolonne ${u.columnName} i synkende rekkefølge`,
  resizerDescription: "Trykk på Enter for å starte størrelsesendring",
  select: "Velg",
  selectAll: "Velg alle",
  sortable: "kolonne som kan sorteres"
};
var Gu = {};
Gu = {
  ascending: "oplopend",
  ascendingSort: (u) => `gesorteerd in oplopende volgorde in kolom ${u.columnName}`,
  columnSize: (u) => `${u.value} pixels`,
  descending: "aflopend",
  descendingSort: (u) => `gesorteerd in aflopende volgorde in kolom ${u.columnName}`,
  resizerDescription: "Druk op Enter om het formaat te wijzigen",
  select: "Selecteren",
  selectAll: "Alles selecteren",
  sortable: "sorteerbare kolom"
};
var qu = {};
qu = {
  ascending: "rosnąco",
  ascendingSort: (u) => `posortowano według kolumny ${u.columnName} w porządku rosnącym`,
  columnSize: (u) => `Liczba pikseli: ${u.value}`,
  descending: "malejąco",
  descendingSort: (u) => `posortowano według kolumny ${u.columnName} w porządku malejącym`,
  resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
  select: "Zaznacz",
  selectAll: "Zaznacz wszystko",
  sortable: "kolumna z możliwością sortowania"
};
var Xu = {};
Xu = {
  ascending: "crescente",
  ascendingSort: (u) => `classificado pela coluna ${u.columnName} em ordem crescente`,
  columnSize: (u) => `${u.value} pixels`,
  descending: "decrescente",
  descendingSort: (u) => `classificado pela coluna ${u.columnName} em ordem decrescente`,
  resizerDescription: "Pressione Enter para começar a redimensionar",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "coluna classificável"
};
var Zu = {};
Zu = {
  ascending: "ascendente",
  ascendingSort: (u) => `Ordenar por coluna ${u.columnName} em ordem ascendente`,
  columnSize: (u) => `${u.value} pixels`,
  descending: "descendente",
  descendingSort: (u) => `Ordenar por coluna ${u.columnName} em ordem descendente`,
  resizerDescription: "Prima Enter para iniciar o redimensionamento",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "Coluna ordenável"
};
var Ju = {};
Ju = {
  ascending: "crescătoare",
  ascendingSort: (u) => `sortate după coloana ${u.columnName} în ordine crescătoare`,
  columnSize: (u) => `${u.value} pixeli`,
  descending: "descrescătoare",
  descendingSort: (u) => `sortate după coloana ${u.columnName} în ordine descrescătoare`,
  resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
  select: "Selectare",
  selectAll: "Selectare totală",
  sortable: "coloană sortabilă"
};
var Qu = {};
Qu = {
  ascending: "возрастание",
  ascendingSort: (u) => `сортировать столбец ${u.columnName} в порядке возрастания`,
  columnSize: (u) => `${u.value} пикс.`,
  descending: "убывание",
  descendingSort: (u) => `сортировать столбец ${u.columnName} в порядке убывания`,
  resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
  select: "Выбрать",
  selectAll: "Выбрать все",
  sortable: "сортируемый столбец"
};
var _u = {};
_u = {
  ascending: "vzostupne",
  ascendingSort: (u) => `zoradené zostupne podľa stĺpca ${u.columnName}`,
  columnSize: (u) => `Počet pixelov: ${u.value}`,
  descending: "zostupne",
  descendingSort: (u) => `zoradené zostupne podľa stĺpca ${u.columnName}`,
  resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
  select: "Vybrať",
  selectAll: "Vybrať všetko",
  sortable: "zoraditeľný stĺpec"
};
var et = {};
et = {
  ascending: "naraščajoče",
  ascendingSort: (u) => `razvrščeno po stolpcu ${u.columnName} v naraščajočem vrstnem redu`,
  columnSize: (u) => `${u.value} slikovnih pik`,
  descending: "padajoče",
  descendingSort: (u) => `razvrščeno po stolpcu ${u.columnName} v padajočem vrstnem redu`,
  resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
  select: "Izberite",
  selectAll: "Izberite vse",
  sortable: "razvrstljivi stolpec"
};
var ut = {};
ut = {
  ascending: "rastući",
  ascendingSort: (u) => `sortirano po kolonama ${u.columnName} rastućim redosledom`,
  columnSize: (u) => `${u.value} piksela`,
  descending: "padajući",
  descendingSort: (u) => `sortirano po kolonama ${u.columnName} padajućim redosledom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Izaberite",
  selectAll: "Izaberite sve",
  sortable: "kolona koja se može sortirati"
};
var tt = {};
tt = {
  ascending: "stigande",
  ascendingSort: (u) => `sorterat på kolumn ${u.columnName} i stigande ordning`,
  columnSize: (u) => `${u.value} pixlar`,
  descending: "fallande",
  descendingSort: (u) => `sorterat på kolumn ${u.columnName} i fallande ordning`,
  resizerDescription: "Tryck på Retur för att börja ändra storlek",
  select: "Markera",
  selectAll: "Markera allt",
  sortable: "sorterbar kolumn"
};
var nt = {};
nt = {
  ascending: "artan sırada",
  ascendingSort: (u) => `${u.columnName} sütuna göre artan düzende sırala`,
  columnSize: (u) => `${u.value} piksel`,
  descending: "azalan sırada",
  descendingSort: (u) => `${u.columnName} sütuna göre azalan düzende sırala`,
  resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
  select: "Seç",
  selectAll: "Tümünü Seç",
  sortable: "Sıralanabilir sütun"
};
var lt = {};
lt = {
  ascending: "висхідний",
  ascendingSort: (u) => `відсортовано за стовпцем ${u.columnName} у висхідному порядку`,
  columnSize: (u) => `${u.value} пікс.`,
  descending: "низхідний",
  descendingSort: (u) => `відсортовано за стовпцем ${u.columnName} у низхідному порядку`,
  resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
  select: "Вибрати",
  selectAll: "Вибрати все",
  sortable: "сортувальний стовпець"
};
var it = {};
it = {
  ascending: "升序",
  ascendingSort: (u) => `按列 ${u.columnName} 升序排序`,
  columnSize: (u) => `${u.value} 像素`,
  descending: "降序",
  descendingSort: (u) => `按列 ${u.columnName} 降序排序`,
  resizerDescription: "按“输入”键开始调整大小。",
  select: "选择",
  selectAll: "全选",
  sortable: "可排序的列"
};
var ot = {};
ot = {
  ascending: "遞增",
  ascendingSort: (u) => `已依據「${u.columnName}」欄遞增排序`,
  columnSize: (u) => `${u.value} 像素`,
  descending: "遞減",
  descendingSort: (u) => `已依據「${u.columnName}」欄遞減排序`,
  resizerDescription: "按 Enter 鍵以開始調整大小",
  select: "選取",
  selectAll: "全選",
  sortable: "可排序的欄"
};
let Qt = !1;
function te() {
  return Qt;
}
function ve(u) {
  return u && u.__esModule ? u.default : u;
}
const De = /* @__PURE__ */ new WeakMap();
function be(u) {
  return typeof u == "string" ? u.replace(/\s*/g, "") : "" + u;
}
function _t(u, e) {
  let t = De.get(u);
  if (!t)
    throw new Error("Unknown grid");
  return `${t}-${be(e)}`;
}
function rt(u, e, t) {
  let n = De.get(u);
  if (!n)
    throw new Error("Unknown grid");
  return `${n}-${be(e)}-${be(t)}`;
}
function st(u, e) {
  return [
    ...u.collection.rowHeaderColumnKeys
  ].map((t) => rt(u, e, t)).join(" ");
}
var ie = {};
ie = {
  "ar-AE": Au,
  "bg-BG": Su,
  "cs-CZ": wu,
  "da-DK": Fu,
  "de-DE": zu,
  "el-GR": Ku,
  "en-US": Pu,
  "es-ES": Iu,
  "et-EE": Tu,
  "fi-FI": Mu,
  "fr-FR": Nu,
  "he-IL": ju,
  "hr-HR": Lu,
  "hu-HU": Ru,
  "it-IT": Vu,
  "ja-JP": Ou,
  "ko-KR": Uu,
  "lt-LT": Hu,
  "lv-LV": Yu,
  "nb-NO": Wu,
  "nl-NL": Gu,
  "pl-PL": qu,
  "pt-BR": Xu,
  "pt-PT": Zu,
  "ro-RO": Ju,
  "ru-RU": Qu,
  "sk-SK": _u,
  "sl-SI": et,
  "sr-SP": ut,
  "sv-SE": tt,
  "tr-TR": nt,
  "uk-UA": lt,
  "zh-CN": it,
  "zh-TW": ot
};
class en extends Eu {
  isCell(e) {
    return e.type === "cell" || e.type === "rowheader" || e.type === "column";
  }
  getKeyBelow(e) {
    let t = this.collection.getItem(e);
    if (t) {
      if (t.type === "column") {
        let n = W(k(t, this.collection));
        if (n)
          return n.key;
        let l = this.getFirstKey();
        if (l == null)
          return;
        let i = this.collection.getItem(l);
        return M(k(i, this.collection), t.index).key;
      }
      return super.getKeyBelow(e);
    }
  }
  getKeyAbove(e) {
    let t = this.collection.getItem(e);
    if (!t)
      return;
    if (t.type === "column") {
      let l = this.collection.getItem(t.parentKey);
      return l && l.type === "column" ? l.key : void 0;
    }
    let n = super.getKeyAbove(e);
    return n != null && this.collection.getItem(n).type !== "headerrow" ? n : this.isCell(t) ? this.collection.columns[t.index].key : this.collection.columns[0].key;
  }
  findNextColumnKey(e) {
    let t = this.findNextKey(e.key, (l) => l.type === "column");
    if (t != null)
      return t;
    let n = this.collection.headerRows[e.level];
    for (let l of k(n, this.collection))
      if (l.type === "column")
        return l.key;
  }
  findPreviousColumnKey(e) {
    let t = this.findPreviousKey(e.key, (i) => i.type === "column");
    if (t != null)
      return t;
    let n = this.collection.headerRows[e.level], l = [
      ...k(n, this.collection)
    ];
    for (let i = l.length - 1; i >= 0; i--) {
      let o = l[i];
      if (o.type === "column")
        return o.key;
    }
  }
  getKeyRightOf(e) {
    let t = this.collection.getItem(e);
    if (t)
      return t.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(t) : this.findNextColumnKey(t) : super.getKeyRightOf(e);
  }
  getKeyLeftOf(e) {
    let t = this.collection.getItem(e);
    if (t)
      return t.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(t) : this.findPreviousColumnKey(t) : super.getKeyLeftOf(e);
  }
  getKeyForSearch(e, t) {
    if (!this.collator)
      return null;
    let n = this.collection, l = t ?? this.getFirstKey();
    if (l == null)
      return null;
    let i = n.getItem(l);
    i.type === "cell" && (l = i.parentKey);
    let o = !1;
    for (; l != null; ) {
      let s = n.getItem(l);
      for (let r of k(s, this.collection)) {
        let $ = n.columns[r.index];
        if (n.rowHeaderColumnKeys.has($.key) && r.textValue) {
          let f = r.textValue.slice(0, e.length);
          if (this.collator.compare(f, e) === 0)
            return (t != null ? n.getItem(t) : i).type === "cell" ? r.key : s.key;
        }
      }
      l = this.getKeyBelow(l), l == null && !o && (l = this.getFirstKey(), o = !0);
    }
    return null;
  }
}
function rn(u, e, t) {
  let { keyboardDelegate: n, isVirtualized: l, layout: i } = u, o = Ve({
    usage: "search",
    sensitivity: "base"
  }), { direction: s } = V(), r = e.selectionManager.disabledBehavior, $ = N(() => n || new en({
    collection: e.collection,
    disabledKeys: r === "selection" ? /* @__PURE__ */ new Set() : e.disabledKeys,
    ref: t,
    direction: s,
    collator: o,
    layout: i
  }), [
    n,
    e.collection,
    e.disabledKeys,
    r,
    t,
    s,
    o,
    i
  ]), f = ge(u.id);
  De.set(e, f);
  let { gridProps: m } = qt({
    ...u,
    id: f,
    keyboardDelegate: $
  }, e, t);
  l && (m["aria-rowcount"] = e.collection.size + e.collection.headerRows.length), te() && "expandedKeys" in e && (m.role = "treegrid");
  let { column: b, direction: d } = e.sortDescriptor || {}, C = J(/* @__PURE__ */ ve(ie), "@react-aria/table"), x = N(() => {
    var D;
    let B = (D = e.collection.columns.find((g) => g.key === b)) === null || D === void 0 ? void 0 : D.textValue;
    return d && b ? C.format(`${d}Sort`, {
      columnName: B
    }) : void 0;
  }, [
    d,
    b,
    e.collection.columns
  ]), y = he(x);
  return Le(() => {
    Ue(x, "assertive", 500);
  }, [
    x
  ]), {
    gridProps: R(m, y, {
      // merge sort description with long press information
      "aria-describedby": [
        y["aria-describedby"],
        m["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function sn(u, e, t) {
  var n, l;
  let { node: i } = u, o = i.props.allowsSorting, { gridCellProps: s } = ku({
    ...u,
    focusMode: "child"
  }, e, t), r = i.props.isSelectionCell && e.selectionManager.selectionMode === "single", { pressProps: $ } = je({
    isDisabled: !o || r,
    onPress() {
      e.sort(i.key);
    },
    ref: t
  }), { focusableProps: f } = Ct({}, t), m = null, b = ((n = e.sortDescriptor) === null || n === void 0 ? void 0 : n.column) === i.key, d = (l = e.sortDescriptor) === null || l === void 0 ? void 0 : l.direction;
  i.props.allowsSorting && !Ee() && (m = b ? d : "none");
  let C = J(/* @__PURE__ */ ve(ie), "@react-aria/table"), x;
  o && (x = `${C.format("sortable")}`, b && d && Ee() && (x = `${x}, ${C.format(d)}`));
  let y = he(x), D = e.collection.size === 0;
  return ee(() => {
    D && e.selectionManager.focusedKey === i.key && e.selectionManager.setFocusedKey(null);
  }, [
    D,
    e.selectionManager,
    i.key
  ]), {
    columnHeaderProps: {
      ...R(
        s,
        $,
        f,
        y,
        // If the table is empty, make all column headers untabbable
        D && {
          tabIndex: -1
        }
      ),
      role: "columnheader",
      id: _t(e, i.key),
      "aria-colspan": i.colspan && i.colspan > 1 ? i.colspan : null,
      "aria-sort": m
    }
  };
}
const Me = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function cn(u, e, t) {
  let { node: n, isVirtualized: l } = u, { rowProps: i, ...o } = Zt(u, e, t), { direction: s } = V();
  l && !(te() && "expandedKeys" in e) ? i["aria-rowindex"] = n.index + 1 + e.collection.headerRows.length : delete i["aria-rowindex"];
  let r = {};
  if (te() && "expandedKeys" in e) {
    let d = e.keyMap.get(n.key);
    if (d != null) {
      var $, f, m;
      let C = (($ = d.props) === null || $ === void 0 ? void 0 : $.UNSTABLE_childItems) || ((m = d.props) === null || m === void 0 || (f = m.children) === null || f === void 0 ? void 0 : f.length) > e.userColumnCount;
      r = {
        onKeyDown: (x) => {
          (x.key === Me.expand[s] && e.selectionManager.focusedKey === d.key && C && e.expandedKeys !== "all" && !e.expandedKeys.has(d.key) || x.key === Me.collapse[s] && e.selectionManager.focusedKey === d.key && C && (e.expandedKeys === "all" || e.expandedKeys.has(d.key))) && (e.toggleKey(d.key), x.stopPropagation());
        },
        "aria-expanded": C ? e.expandedKeys === "all" || e.expandedKeys.has(n.key) : void 0,
        "aria-level": d.level,
        "aria-posinset": d.indexOfType + 1,
        "aria-setsize": d.level > 1 ? q(e.keyMap.get(d == null ? void 0 : d.parentKey).childNodes).indexOfType + 1 : q(e.keyMap.get(e.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let b = o.hasAction ? Bt(n.props) : {};
  return {
    rowProps: {
      ...R(i, r, b),
      "aria-labelledby": st(e, n.key)
    },
    ...o
  };
}
function an(u, e, t) {
  let { node: n, isVirtualized: l } = u, i = {
    role: "row"
  };
  return l && !(te() && "expandedKeys" in e) && (i["aria-rowindex"] = n.index + 1), {
    rowProps: i
  };
}
function dn(u, e, t) {
  let { gridCellProps: n, isPressed: l } = ku(u, e, t), i = u.node.column.key;
  return e.collection.rowHeaderColumnKeys.has(i) && (n.role = "rowheader", n.id = rt(e, u.node.parentKey, i)), {
    gridCellProps: n,
    isPressed: l
  };
}
function fn(u, e) {
  let { key: t } = u;
  const { checkboxProps: n } = Jt(u, e);
  return {
    checkboxProps: {
      ...n,
      "aria-labelledby": `${n.id} ${st(e, t)}`
    }
  };
}
function mn(u) {
  let { isEmpty: e, isSelectAll: t, selectionMode: n } = u.selectionManager;
  return {
    checkboxProps: {
      "aria-label": J(/* @__PURE__ */ ve(ie), "@react-aria/table").format(n === "single" ? "select" : "selectAll"),
      isSelected: t,
      isDisabled: n !== "multiple" || u.collection.size === 0,
      isIndeterminate: !e && !t,
      onChange: () => u.selectionManager.toggleSelectAll()
    }
  };
}
function $n() {
  return Xt();
}
export {
  an as $,
  sn as a,
  $n as b,
  cn as c,
  dn as d,
  fn as e,
  mn as f,
  on as g,
  W as h,
  k as i,
  q as j,
  ln as k,
  rn as l
};
