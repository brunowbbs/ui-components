import { jsxs as Cr, jsx as Ee } from "react/jsx-runtime";
import { d as Ar } from "../../index-CMyMlvNn.js";
import { I as yr } from "../../index-KwcrbYGb.js";
import * as V from "react";
import { useState as fe, useCallback as j, forwardRef as Gn, useContext as Fn, useLayoutEffect as xr, useRef as le, createContext as Er, useMemo as he, Component as Gr, Fragment as bt, useEffect as Sn } from "react";
import { r as Fr } from "../../index-DBw-Vlhv.js";
import { C as Sr } from "../../utils-CPTxmK3J.js";
function pe(t) {
  "@babel/helpers - typeof";
  return pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pe(t);
}
function Vr(t, e) {
  if (pe(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(t, e || "default");
    if (pe(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Vn(t) {
  var e = Vr(t, "string");
  return pe(e) == "symbol" ? e : String(e);
}
function Se(t, e, r) {
  return e = Vn(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Mt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function G(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mt(Object(r), !0).forEach(function(i) {
      Se(t, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Mt(Object(r)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return t;
}
function Br(t) {
  if (Array.isArray(t))
    return t;
}
function Nr(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var i, n, o, a, s = [], u = !0, c = !1;
    try {
      if (o = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r)
          return;
        u = !1;
      } else
        for (; !(u = (i = o.call(r)).done) && (s.push(i.value), s.length !== e); u = !0)
          ;
    } catch (l) {
      c = !0, n = l;
    } finally {
      try {
        if (!u && r.return != null && (a = r.return(), Object(a) !== a))
          return;
      } finally {
        if (c)
          throw n;
      }
    }
    return s;
  }
}
function ft(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++)
    i[r] = t[r];
  return i;
}
function Bn(t, e) {
  if (t) {
    if (typeof t == "string")
      return ft(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ft(t, e);
  }
}
function wr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de(t, e) {
  return Br(t) || Nr(t, e) || Bn(t, e) || wr();
}
function Rr(t, e) {
  if (t == null)
    return {};
  var r = {}, i = Object.keys(t), n, o;
  for (o = 0; o < i.length; o++)
    n = i[o], !(e.indexOf(n) >= 0) && (r[n] = t[n]);
  return r;
}
function ge(t, e) {
  if (t == null)
    return {};
  var r = Rr(t, e), i, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]);
  }
  return r;
}
var Wr = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Tr(t) {
  var e = t.defaultInputValue, r = e === void 0 ? "" : e, i = t.defaultMenuIsOpen, n = i === void 0 ? !1 : i, o = t.defaultValue, a = o === void 0 ? null : o, s = t.inputValue, u = t.menuIsOpen, c = t.onChange, l = t.onInputChange, d = t.onMenuClose, m = t.onMenuOpen, I = t.value, v = ge(t, Wr), b = fe(s !== void 0 ? s : r), g = de(b, 2), p = g[0], C = g[1], h = fe(u !== void 0 ? u : n), A = de(h, 2), f = A[0], F = A[1], y = fe(I !== void 0 ? I : a), B = de(y, 2), T = B[0], L = B[1], k = j(function(J, oe) {
    typeof c == "function" && c(J, oe), L(J);
  }, [c]), M = j(function(J, oe) {
    var ee;
    typeof l == "function" && (ee = l(J, oe)), C(ee !== void 0 ? ee : J);
  }, [l]), K = j(function() {
    typeof m == "function" && m(), F(!0);
  }, [m]), q = j(function() {
    typeof d == "function" && d(), F(!1);
  }, [d]), D = s !== void 0 ? s : p, Z = u !== void 0 ? u : f, $ = I !== void 0 ? I : T;
  return G(G({}, v), {}, {
    inputValue: D,
    menuIsOpen: Z,
    onChange: k,
    onInputChange: M,
    onMenuClose: q,
    onMenuOpen: K,
    value: $
  });
}
function S() {
  return S = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, S.apply(this, arguments);
}
function Xr(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ht(t, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, Vn(i.key), i);
  }
}
function Zr(t, e, r) {
  return e && Ht(t.prototype, e), r && Ht(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function pt(t, e) {
  return pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, pt(t, e);
}
function Pr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && pt(t, e);
}
function Ye(t) {
  return Ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ye(t);
}
function Nn() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Nn = function() {
    return !!t;
  })();
}
function Dr(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Or(t, e) {
  if (e && (pe(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Dr(t);
}
function Lr(t) {
  var e = Nn();
  return function() {
    var i = Ye(t), n;
    if (e) {
      var o = Ye(this).constructor;
      n = Reflect.construct(i, arguments, o);
    } else
      n = i.apply(this, arguments);
    return Or(this, n);
  };
}
function Mr(t) {
  if (Array.isArray(t))
    return ft(t);
}
function Hr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function kr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Et(t) {
  return Mr(t) || Hr(t) || Bn(t) || kr();
}
function Yr(t) {
  if (t.sheet)
    return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t)
      return document.styleSheets[e];
}
function Jr(t) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t.key), t.nonce !== void 0 && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var zr = /* @__PURE__ */ function() {
  function t(r) {
    var i = this;
    this._insertTag = function(n) {
      var o;
      i.tags.length === 0 ? i.insertionPoint ? o = i.insertionPoint.nextSibling : i.prepend ? o = i.container.firstChild : o = i.before : o = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(n, o), i.tags.push(n);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var e = t.prototype;
  return e.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, e.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Jr(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var o = i.charCodeAt(0) === 64 && i.charCodeAt(1) === 105;
      o && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + i + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !o;
    }
    if (this.isSpeedy) {
      var a = Yr(n);
      try {
        a.insertRule(i, a.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(i) && console.error('There was a problem inserting the following rule: "' + i + '"', s);
      }
    } else
      n.appendChild(document.createTextNode(i));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(i) {
      return i.parentNode && i.parentNode.removeChild(i);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, t;
}(), Y = "-ms-", Je = "-moz-", N = "-webkit-", Gt = "comm", Ft = "rule", St = "decl", jr = "@import", wn = "@keyframes", Ur = "@layer", Qr = Math.abs, qe = String.fromCharCode, _r = Object.assign;
function $r(t, e) {
  return H(t, 0) ^ 45 ? (((e << 2 ^ H(t, 0)) << 2 ^ H(t, 1)) << 2 ^ H(t, 2)) << 2 ^ H(t, 3) : 0;
}
function Rn(t) {
  return t.trim();
}
function Kr(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function w(t, e, r) {
  return t.replace(e, r);
}
function mt(t, e) {
  return t.indexOf(e);
}
function H(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ve(t, e, r) {
  return t.slice(e, r);
}
function se(t) {
  return t.length;
}
function Vt(t) {
  return t.length;
}
function Xe(t, e) {
  return e.push(t), t;
}
function qr(t, e) {
  return t.map(e).join("");
}
var et = 1, Ae = 1, Wn = 0, U = 0, O = 0, ye = "";
function tt(t, e, r, i, n, o, a) {
  return { value: t, root: e, parent: r, type: i, props: n, children: o, line: et, column: Ae, length: a, return: "" };
}
function Ge(t, e) {
  return _r(tt("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function ei() {
  return O;
}
function ti() {
  return O = U > 0 ? H(ye, --U) : 0, Ae--, O === 10 && (Ae = 1, et--), O;
}
function _() {
  return O = U < Wn ? H(ye, U++) : 0, Ae++, O === 10 && (Ae = 1, et++), O;
}
function ce() {
  return H(ye, U);
}
function Le() {
  return U;
}
function Re(t, e) {
  return Ve(ye, t, e);
}
function Be(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Tn(t) {
  return et = Ae = 1, Wn = se(ye = t), U = 0, [];
}
function Xn(t) {
  return ye = "", t;
}
function Me(t) {
  return Rn(Re(U - 1, It(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function ni(t) {
  for (; (O = ce()) && O < 33; )
    _();
  return Be(t) > 2 || Be(O) > 3 ? "" : " ";
}
function ri(t, e) {
  for (; --e && _() && !(O < 48 || O > 102 || O > 57 && O < 65 || O > 70 && O < 97); )
    ;
  return Re(t, Le() + (e < 6 && ce() == 32 && _() == 32));
}
function It(t) {
  for (; _(); )
    switch (O) {
      case t:
        return U;
      case 34:
      case 39:
        t !== 34 && t !== 39 && It(O);
        break;
      case 40:
        t === 41 && It(t);
        break;
      case 92:
        _();
        break;
    }
  return U;
}
function ii(t, e) {
  for (; _() && t + O !== 57; )
    if (t + O === 84 && ce() === 47)
      break;
  return "/*" + Re(e, U - 1) + "*" + qe(t === 47 ? t : _());
}
function oi(t) {
  for (; !Be(ce()); )
    _();
  return Re(t, U);
}
function ai(t) {
  return Xn(He("", null, null, null, [""], t = Tn(t), 0, [0], t));
}
function He(t, e, r, i, n, o, a, s, u) {
  for (var c = 0, l = 0, d = a, m = 0, I = 0, v = 0, b = 1, g = 1, p = 1, C = 0, h = "", A = n, f = o, F = i, y = h; g; )
    switch (v = C, C = _()) {
      case 40:
        if (v != 108 && H(y, d - 1) == 58) {
          mt(y += w(Me(C), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Me(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += ni(v);
        break;
      case 92:
        y += ri(Le() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Xe(ui(ii(_(), Le()), e, r), u);
            break;
          default:
            y += "/";
        }
        break;
      case 123 * b:
        s[c++] = se(y) * p;
      case 125 * b:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            g = 0;
          case 59 + l:
            p == -1 && (y = w(y, /\f/g, "")), I > 0 && se(y) - d && Xe(I > 32 ? Yt(y + ";", i, r, d - 1) : Yt(w(y, " ", "") + ";", i, r, d - 2), u);
            break;
          case 59:
            y += ";";
          default:
            if (Xe(F = kt(y, e, r, c, l, n, s, h, A = [], f = [], d), o), C === 123)
              if (l === 0)
                He(y, e, F, F, A, o, d, s, f);
              else
                switch (m === 99 && H(y, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    He(t, F, F, i && Xe(kt(t, F, F, 0, 0, n, s, h, n, A = [], d), f), n, f, d, s, i ? A : f);
                    break;
                  default:
                    He(y, F, F, F, [""], f, 0, s, f);
                }
        }
        c = l = I = 0, b = p = 1, h = y = "", d = a;
        break;
      case 58:
        d = 1 + se(y), I = v;
      default:
        if (b < 1) {
          if (C == 123)
            --b;
          else if (C == 125 && b++ == 0 && ti() == 125)
            continue;
        }
        switch (y += qe(C), C * b) {
          case 38:
            p = l > 0 ? 1 : (y += "\f", -1);
            break;
          case 44:
            s[c++] = (se(y) - 1) * p, p = 1;
            break;
          case 64:
            ce() === 45 && (y += Me(_())), m = ce(), l = d = se(h = y += oi(Le())), C++;
            break;
          case 45:
            v === 45 && se(y) == 2 && (b = 0);
        }
    }
  return o;
}
function kt(t, e, r, i, n, o, a, s, u, c, l) {
  for (var d = n - 1, m = n === 0 ? o : [""], I = Vt(m), v = 0, b = 0, g = 0; v < i; ++v)
    for (var p = 0, C = Ve(t, d + 1, d = Qr(b = a[v])), h = t; p < I; ++p)
      (h = Rn(b > 0 ? m[p] + " " + C : w(C, /&\f/g, m[p]))) && (u[g++] = h);
  return tt(t, e, r, n === 0 ? Ft : s, u, c, l);
}
function ui(t, e, r) {
  return tt(t, e, r, Gt, qe(ei()), Ve(t, 2, -2), 0);
}
function Yt(t, e, r, i) {
  return tt(t, e, r, St, Ve(t, 0, i), Ve(t, i + 1, -1), i);
}
function Ce(t, e) {
  for (var r = "", i = Vt(t), n = 0; n < i; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function si(t, e, r, i) {
  switch (t.type) {
    case Ur:
      if (t.children.length)
        break;
    case jr:
    case St:
      return t.return = t.return || t.value;
    case Gt:
      return "";
    case wn:
      return t.return = t.value + "{" + Ce(t.children, i) + "}";
    case Ft:
      t.value = t.props.join(",");
  }
  return se(r = Ce(t.children, i)) ? t.return = t.value + "{" + r + "}" : "";
}
function ci(t) {
  var e = Vt(t);
  return function(r, i, n, o) {
    for (var a = "", s = 0; s < e; s++)
      a += t[s](r, i, n, o) || "";
    return a;
  };
}
function li(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function di(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var gi = function(e, r, i) {
  for (var n = 0, o = 0; n = o, o = ce(), n === 38 && o === 12 && (r[i] = 1), !Be(o); )
    _();
  return Re(e, U);
}, bi = function(e, r) {
  var i = -1, n = 44;
  do
    switch (Be(n)) {
      case 0:
        n === 38 && ce() === 12 && (r[i] = 1), e[i] += gi(U - 1, r, i);
        break;
      case 2:
        e[i] += Me(n);
        break;
      case 4:
        if (n === 44) {
          e[++i] = ce() === 58 ? "&\f" : "", r[i] = e[i].length;
          break;
        }
      default:
        e[i] += qe(n);
    }
  while (n = _());
  return e;
}, fi = function(e, r) {
  return Xn(bi(Tn(e), r));
}, Jt = /* @__PURE__ */ new WeakMap(), pi = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var r = e.value, i = e.parent, n = e.column === i.column && e.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i)
        return;
    if (!(e.props.length === 1 && r.charCodeAt(0) !== 58 && !Jt.get(i)) && !n) {
      Jt.set(e, !0);
      for (var o = [], a = fi(r, o), s = i.props, u = 0, c = 0; u < a.length; u++)
        for (var l = 0; l < s.length; l++, c++)
          e.props[c] = o[u] ? a[u].replace(/&\f/g, s[l]) : s[l] + " " + a[u];
    }
  }
}, mi = function(e) {
  if (e.type === "decl") {
    var r = e.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
}, Ii = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", hi = function(e) {
  return e.type === "comm" && e.children.indexOf(Ii) > -1;
}, Ci = function(e) {
  return function(r, i, n) {
    if (!(r.type !== "rule" || e.compat)) {
      var o = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (o) {
        for (var a = !!r.parent, s = a ? r.parent.children : (
          // global rule at the root level
          n
        ), u = s.length - 1; u >= 0; u--) {
          var c = s[u];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (hi(c))
              return;
            break;
          }
        }
        o.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Zn = function(e) {
  return e.type.charCodeAt(1) === 105 && e.type.charCodeAt(0) === 64;
}, Ai = function(e, r) {
  for (var i = e - 1; i >= 0; i--)
    if (!Zn(r[i]))
      return !0;
  return !1;
}, zt = function(e) {
  e.type = "", e.value = "", e.return = "", e.children = "", e.props = "";
}, yi = function(e, r, i) {
  Zn(e) && (e.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), zt(e)) : Ai(r, i) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), zt(e)));
};
function Pn(t, e) {
  switch ($r(t, e)) {
    case 5103:
      return N + "print-" + t + t;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return N + t + t;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + t + Je + t + Y + t + t;
    case 6828:
    case 4268:
      return N + t + Y + t + t;
    case 6165:
      return N + t + Y + "flex-" + t + t;
    case 5187:
      return N + t + w(t, /(\w+).+(:[^]+)/, N + "box-$1$2" + Y + "flex-$1$2") + t;
    case 5443:
      return N + t + Y + "flex-item-" + w(t, /flex-|-self/, "") + t;
    case 4675:
      return N + t + Y + "flex-line-pack" + w(t, /align-content|flex-|-self/, "") + t;
    case 5548:
      return N + t + Y + w(t, "shrink", "negative") + t;
    case 5292:
      return N + t + Y + w(t, "basis", "preferred-size") + t;
    case 6060:
      return N + "box-" + w(t, "-grow", "") + N + t + Y + w(t, "grow", "positive") + t;
    case 4554:
      return N + w(t, /([^-])(transform)/g, "$1" + N + "$2") + t;
    case 6187:
      return w(w(w(t, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), t, "") + t;
    case 5495:
    case 3959:
      return w(t, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return w(w(t, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + Y + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + t + t;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return w(t, /(.+)-inline(.+)/, N + "$1$2") + t;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (se(t) - 1 - e > 6)
        switch (H(t, e + 1)) {
          case 109:
            if (H(t, e + 4) !== 45)
              break;
          case 102:
            return w(t, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + Je + (H(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
          case 115:
            return ~mt(t, "stretch") ? Pn(w(t, "stretch", "fill-available"), e) + t : t;
        }
      break;
    case 4949:
      if (H(t, e + 1) !== 115)
        break;
    case 6444:
      switch (H(t, se(t) - 3 - (~mt(t, "!important") && 10))) {
        case 107:
          return w(t, ":", ":" + N) + t;
        case 101:
          return w(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + N + (H(t, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + Y + "$2box$3") + t;
      }
      break;
    case 5936:
      switch (H(t, e + 11)) {
        case 114:
          return N + t + Y + w(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        case 108:
          return N + t + Y + w(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        case 45:
          return N + t + Y + w(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return N + t + Y + t + t;
  }
  return t;
}
var xi = function(e, r, i, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case St:
        e.return = Pn(e.value, e.length);
        break;
      case wn:
        return Ce([Ge(e, {
          value: w(e.value, "@", "@" + N)
        })], n);
      case Ft:
        if (e.length)
          return qr(e.props, function(o) {
            switch (Kr(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ce([Ge(e, {
                  props: [w(o, /:(read-\w+)/, ":" + Je + "$1")]
                })], n);
              case "::placeholder":
                return Ce([Ge(e, {
                  props: [w(o, /:(plac\w+)/, ":" + N + "input-$1")]
                }), Ge(e, {
                  props: [w(o, /:(plac\w+)/, ":" + Je + "$1")]
                }), Ge(e, {
                  props: [w(o, /:(plac\w+)/, Y + "input-$1")]
                })], n);
            }
            return "";
          });
    }
}, Ei = [xi], Gi = function(e) {
  var r = e.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(b) {
      var g = b.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || Ei;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var o = {}, a, s = [];
  a = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(b) {
      for (var g = b.getAttribute("data-emotion").split(" "), p = 1; p < g.length; p++)
        o[g[p]] = !0;
      s.push(b);
    }
  );
  var u, c = [pi, mi];
  process.env.NODE_ENV !== "production" && c.push(Ci({
    get compat() {
      return v.compat;
    }
  }), yi);
  {
    var l, d = [si, process.env.NODE_ENV !== "production" ? function(b) {
      b.root || (b.return ? l.insert(b.return) : b.value && b.type !== Gt && l.insert(b.value + "{}"));
    } : li(function(b) {
      l.insert(b);
    })], m = ci(c.concat(n, d)), I = function(g) {
      return Ce(ai(g), m);
    };
    u = function(g, p, C, h) {
      l = C, process.env.NODE_ENV !== "production" && p.map !== void 0 && (l = {
        insert: function(f) {
          C.insert(f + p.map);
        }
      }), I(g ? g + "{" + p.styles + "}" : p.styles), h && (v.inserted[p.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new zr({
      key: r,
      container: a,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return v.sheet.hydrate(s), v;
}, vt = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Fi() {
  if (jt)
    return R;
  jt = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, n = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, I = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, p = t ? Symbol.for("react.responder") : 60118, C = t ? Symbol.for("react.scope") : 60119;
  function h(f) {
    if (typeof f == "object" && f !== null) {
      var F = f.$$typeof;
      switch (F) {
        case e:
          switch (f = f.type, f) {
            case u:
            case c:
            case i:
            case o:
            case n:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case l:
                case v:
                case I:
                case a:
                  return f;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function A(f) {
    return h(f) === c;
  }
  return R.AsyncMode = u, R.ConcurrentMode = c, R.ContextConsumer = s, R.ContextProvider = a, R.Element = e, R.ForwardRef = l, R.Fragment = i, R.Lazy = v, R.Memo = I, R.Portal = r, R.Profiler = o, R.StrictMode = n, R.Suspense = d, R.isAsyncMode = function(f) {
    return A(f) || h(f) === u;
  }, R.isConcurrentMode = A, R.isContextConsumer = function(f) {
    return h(f) === s;
  }, R.isContextProvider = function(f) {
    return h(f) === a;
  }, R.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, R.isForwardRef = function(f) {
    return h(f) === l;
  }, R.isFragment = function(f) {
    return h(f) === i;
  }, R.isLazy = function(f) {
    return h(f) === v;
  }, R.isMemo = function(f) {
    return h(f) === I;
  }, R.isPortal = function(f) {
    return h(f) === r;
  }, R.isProfiler = function(f) {
    return h(f) === o;
  }, R.isStrictMode = function(f) {
    return h(f) === n;
  }, R.isSuspense = function(f) {
    return h(f) === d;
  }, R.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === i || f === c || f === o || f === n || f === d || f === m || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === I || f.$$typeof === a || f.$$typeof === s || f.$$typeof === l || f.$$typeof === g || f.$$typeof === p || f.$$typeof === C || f.$$typeof === b);
  }, R.typeOf = h, R;
}
var W = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ut;
function Si() {
  return Ut || (Ut = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, n = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, c = t ? Symbol.for("react.concurrent_mode") : 60111, l = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, m = t ? Symbol.for("react.suspense_list") : 60120, I = t ? Symbol.for("react.memo") : 60115, v = t ? Symbol.for("react.lazy") : 60116, b = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, p = t ? Symbol.for("react.responder") : 60118, C = t ? Symbol.for("react.scope") : 60119;
    function h(x) {
      return typeof x == "string" || typeof x == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      x === i || x === c || x === o || x === n || x === d || x === m || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === I || x.$$typeof === a || x.$$typeof === s || x.$$typeof === l || x.$$typeof === g || x.$$typeof === p || x.$$typeof === C || x.$$typeof === b);
    }
    function A(x) {
      if (typeof x == "object" && x !== null) {
        var xe = x.$$typeof;
        switch (xe) {
          case e:
            var be = x.type;
            switch (be) {
              case u:
              case c:
              case i:
              case o:
              case n:
              case d:
                return be;
              default:
                var Te = be && be.$$typeof;
                switch (Te) {
                  case s:
                  case l:
                  case v:
                  case I:
                  case a:
                    return Te;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var f = u, F = c, y = s, B = a, T = e, L = l, k = i, M = v, K = I, q = r, D = o, Z = n, $ = d, J = !1;
    function oe(x) {
      return J || (J = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(x) || A(x) === u;
    }
    function ee(x) {
      return A(x) === c;
    }
    function me(x) {
      return A(x) === s;
    }
    function P(x) {
      return A(x) === a;
    }
    function z(x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }
    function te(x) {
      return A(x) === l;
    }
    function ae(x) {
      return A(x) === i;
    }
    function Q(x) {
      return A(x) === v;
    }
    function ue(x) {
      return A(x) === I;
    }
    function ne(x) {
      return A(x) === r;
    }
    function Ie(x) {
      return A(x) === o;
    }
    function it(x) {
      return A(x) === n;
    }
    function We(x) {
      return A(x) === d;
    }
    W.AsyncMode = f, W.ConcurrentMode = F, W.ContextConsumer = y, W.ContextProvider = B, W.Element = T, W.ForwardRef = L, W.Fragment = k, W.Lazy = M, W.Memo = K, W.Portal = q, W.Profiler = D, W.StrictMode = Z, W.Suspense = $, W.isAsyncMode = oe, W.isConcurrentMode = ee, W.isContextConsumer = me, W.isContextProvider = P, W.isElement = z, W.isForwardRef = te, W.isFragment = ae, W.isLazy = Q, W.isMemo = ue, W.isPortal = ne, W.isProfiler = Ie, W.isStrictMode = it, W.isSuspense = We, W.isValidElementType = h, W.typeOf = A;
  }()), W;
}
process.env.NODE_ENV === "production" ? vt.exports = Fi() : vt.exports = Si();
var Vi = vt.exports, Dn = Vi, Bi = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ni = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, On = {};
On[Dn.ForwardRef] = Bi;
On[Dn.Memo] = Ni;
var wi = !0;
function Ln(t, e, r) {
  var i = "";
  return r.split(" ").forEach(function(n) {
    t[n] !== void 0 ? e.push(t[n] + ";") : i += n + " ";
  }), i;
}
var Bt = function(e, r, i) {
  var n = e.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  wi === !1) && e.registered[n] === void 0 && (e.registered[n] = r.styles);
}, Nt = function(e, r, i) {
  Bt(e, r, i);
  var n = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var o = r;
    do
      e.insert(r === o ? "." + n : "", o, e.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Ri(t) {
  for (var e = 0, r, i = 0, n = t.length; n >= 4; ++i, n -= 4)
    r = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, e = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      e ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(i) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var Wi = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Qt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ti = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Xi = /[A-Z]|^ms/g, Mn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wt = function(e) {
  return e.charCodeAt(1) === 45;
}, _t = function(e) {
  return e != null && typeof e != "boolean";
}, ot = /* @__PURE__ */ di(function(t) {
  return wt(t) ? t : t.replace(Xi, "-$&").toLowerCase();
}), ze = function(e, r) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Mn, function(i, n, o) {
          return re = {
            name: n,
            styles: o,
            next: re
          }, n;
        });
  }
  return Wi[e] !== 1 && !wt(e) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Zi = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Pi = ["normal", "none", "initial", "inherit", "unset"], Di = ze, Oi = /^-ms-/, Li = /-(.)/g, $t = {};
  ze = function(e, r) {
    if (e === "content" && (typeof r != "string" || Pi.indexOf(r) === -1 && !Zi.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var i = Di(e, r);
    return i !== "" && !wt(e) && e.indexOf("-") !== -1 && $t[e] === void 0 && ($t[e] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e.replace(Oi, "ms-").replace(Li, function(n, o) {
      return o.toUpperCase();
    }) + "?")), i;
  };
}
var Hn = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Ne(t, e, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Hn);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return re = {
          name: r.name,
          styles: r.styles,
          next: re
        }, r.name;
      if (r.styles !== void 0) {
        var i = r.next;
        if (i !== void 0)
          for (; i !== void 0; )
            re = {
              name: i.name,
              styles: i.styles,
              next: re
            }, i = i.next;
        var n = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (n += r.map), n;
      }
      return Mi(t, e, r);
    }
    case "function": {
      if (t !== void 0) {
        var o = re, a = r(t);
        return re = o, Ne(t, e, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], u = r.replace(Mn, function(l, d, m) {
          var I = "animation" + s.length;
          return s.push("const " + I + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + I + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (e == null)
    return r;
  var c = e[r];
  return c !== void 0 ? c : r;
}
function Mi(t, e, r) {
  var i = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      i += Ne(t, e, r[n]) + ";";
  else
    for (var o in r) {
      var a = r[o];
      if (typeof a != "object")
        e != null && e[a] !== void 0 ? i += o + "{" + e[a] + "}" : _t(a) && (i += ot(o) + ":" + ze(o, a) + ";");
      else {
        if (o === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Hn);
        if (Array.isArray(a) && typeof a[0] == "string" && (e == null || e[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            _t(a[s]) && (i += ot(o) + ":" + ze(o, a[s]) + ";");
        else {
          var u = Ne(t, e, a);
          switch (o) {
            case "animation":
            case "animationName": {
              i += ot(o) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && o === "undefined" && console.error(Ti), i += o + "{" + u + "}";
          }
        }
      }
    }
  return i;
}
var Kt = /label:\s*([^\s;\n{]+)\s*(;|$)/g, kn;
process.env.NODE_ENV !== "production" && (kn = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var re, we = function(e, r, i) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  re = void 0;
  var a = e[0];
  a == null || a.raw === void 0 ? (n = !1, o += Ne(i, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Qt), o += a[0]);
  for (var s = 1; s < e.length; s++)
    o += Ne(i, r, e[s]), n && (process.env.NODE_ENV !== "production" && a[s] === void 0 && console.error(Qt), o += a[s]);
  var u;
  process.env.NODE_ENV !== "production" && (o = o.replace(kn, function(m) {
    return u = m, "";
  })), Kt.lastIndex = 0;
  for (var c = "", l; (l = Kt.exec(o)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    l[1];
  var d = Ri(o) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: o,
    map: u,
    next: re,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: o,
    next: re
  };
}, Hi = function(e) {
  return e();
}, Yn = V.useInsertionEffect ? V.useInsertionEffect : !1, Jn = Yn || Hi, qt = Yn || V.useLayoutEffect, Rt = {}.hasOwnProperty, Wt = /* @__PURE__ */ V.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Gi({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Wt.displayName = "EmotionCacheContext");
Wt.Provider;
var Tt = function(e) {
  return /* @__PURE__ */ Gn(function(r, i) {
    var n = Fn(Wt);
    return e(r, n, i);
  });
}, nt = /* @__PURE__ */ V.createContext({});
process.env.NODE_ENV !== "production" && (nt.displayName = "EmotionThemeContext");
var en = function(e) {
  var r = e.split(".");
  return r[r.length - 1];
}, ki = function(e) {
  var r = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);
  if (r || (r = /^([A-Za-z0-9$.]+)@/.exec(e), r))
    return en(r[1]);
}, Yi = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), Ji = function(e) {
  return e.replace(/\$/g, "-");
}, zi = function(e) {
  if (e)
    for (var r = e.split(`
`), i = 0; i < r.length; i++) {
      var n = ki(r[i]);
      if (n) {
        if (Yi.has(n))
          break;
        if (/^[A-Z]/.test(n))
          return Ji(n);
      }
    }
}, ht = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ct = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", ji = function(e, r) {
  if (process.env.NODE_ENV !== "production" && typeof r.css == "string" && // check if there is a css declaration
  r.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + r.css + "`");
  var i = {};
  for (var n in r)
    Rt.call(r, n) && (i[n] = r[n]);
  if (i[ht] = e, process.env.NODE_ENV !== "production" && r.css && (typeof r.css != "object" || typeof r.css.name != "string" || r.css.name.indexOf("-") === -1)) {
    var o = zi(new Error().stack);
    o && (i[Ct] = o);
  }
  return i;
}, Ui = function(e) {
  var r = e.cache, i = e.serialized, n = e.isStringTag;
  return Bt(r, i, n), Jn(function() {
    return Nt(r, i, n);
  }), null;
}, zn = /* @__PURE__ */ Tt(function(t, e, r) {
  var i = t.css;
  typeof i == "string" && e.registered[i] !== void 0 && (i = e.registered[i]);
  var n = t[ht], o = [i], a = "";
  typeof t.className == "string" ? a = Ln(e.registered, o, t.className) : t.className != null && (a = t.className + " ");
  var s = we(o, void 0, V.useContext(nt));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var u = t[Ct];
    u && (s = we([s, "label:" + u + ";"]));
  }
  a += e.key + "-" + s.name;
  var c = {};
  for (var l in t)
    Rt.call(t, l) && l !== "css" && l !== ht && (process.env.NODE_ENV === "production" || l !== Ct) && (c[l] = t[l]);
  return c.ref = r, c.className = a, /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(Ui, {
    cache: e,
    serialized: s,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ V.createElement(n, c));
});
process.env.NODE_ENV !== "production" && (zn.displayName = "EmotionCssPropInternal");
var Qi = zn, _i = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, E = function(e, r) {
  var i = arguments;
  if (r == null || !Rt.call(r, "css"))
    return V.createElement.apply(void 0, i);
  var n = i.length, o = new Array(n);
  o[0] = Qi, o[1] = ji(e, r);
  for (var a = 2; a < n; a++)
    o[a] = i[a];
  return V.createElement.apply(null, o);
}, tn = !1, $i = /* @__PURE__ */ Tt(function(t, e) {
  process.env.NODE_ENV !== "production" && !tn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (t.className || t.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), tn = !0);
  var r = t.styles, i = we([r], void 0, V.useContext(nt)), n = V.useRef();
  return qt(function() {
    var o = e.key + "-global", a = new e.sheet.constructor({
      key: o,
      nonce: e.sheet.nonce,
      container: e.sheet.container,
      speedy: e.sheet.isSpeedy
    }), s = !1, u = document.querySelector('style[data-emotion="' + o + " " + i.name + '"]');
    return e.sheet.tags.length && (a.before = e.sheet.tags[0]), u !== null && (s = !0, u.setAttribute("data-emotion", o), a.hydrate([u])), n.current = [a, s], function() {
      a.flush();
    };
  }, [e]), qt(function() {
    var o = n.current, a = o[0], s = o[1];
    if (s) {
      o[1] = !1;
      return;
    }
    if (i.next !== void 0 && Nt(e, i.next, !0), a.tags.length) {
      var u = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = u, a.flush();
    }
    e.insert("", i, a, !1);
  }, [e, i.name]), null;
});
process.env.NODE_ENV !== "production" && ($i.displayName = "EmotionGlobal");
function Xt() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return we(e);
}
var Ki = function() {
  var e = Xt.apply(void 0, arguments), r = "animation-" + e.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, qi = function t(e) {
  for (var r = e.length, i = 0, n = ""; i < r; i++) {
    var o = e[i];
    if (o != null) {
      var a = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            a = t(o);
          else {
            process.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var s in o)
              o[s] && s && (a && (a += " "), a += s);
          }
          break;
        }
        default:
          a = o;
      }
      a && (n && (n += " "), n += a);
    }
  }
  return n;
};
function eo(t, e, r) {
  var i = [], n = Ln(t, i, r);
  return i.length < 2 ? r : n + e(i);
}
var to = function(e) {
  var r = e.cache, i = e.serializedArr;
  return Jn(function() {
    for (var n = 0; n < i.length; n++)
      Nt(r, i[n], !1);
  }), null;
}, no = /* @__PURE__ */ Tt(function(t, e) {
  var r = !1, i = [], n = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, l = new Array(c), d = 0; d < c; d++)
      l[d] = arguments[d];
    var m = we(l, e.registered);
    return i.push(m), Bt(e, m, !1), e.key + "-" + m.name;
  }, o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, l = new Array(c), d = 0; d < c; d++)
      l[d] = arguments[d];
    return eo(e.registered, n, qi(l));
  }, a = {
    css: n,
    cx: o,
    theme: V.useContext(nt)
  }, s = t.children(a);
  return r = !0, /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(to, {
    cache: e,
    serializedArr: i
  }), s);
});
process.env.NODE_ENV !== "production" && (no.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var nn = !0, ro = typeof jest < "u" || typeof vi < "u";
  if (nn && !ro) {
    var rn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : nn ? window : global
    ), on = "__EMOTION_REACT_" + _i.version.split(".")[0] + "__";
    rn[on] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), rn[on] = !0;
  }
}
function io(t, e) {
  return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
    raw: {
      value: Object.freeze(e)
    }
  }));
}
const oo = Math.min, ao = Math.max, je = Math.round, Ze = Math.floor, Ue = (t) => ({
  x: t,
  y: t
});
function uo(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function jn(t) {
  return Qn(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ie(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Un(t) {
  var e;
  return (e = (Qn(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Qn(t) {
  return t instanceof Node || t instanceof ie(t).Node;
}
function At(t) {
  return t instanceof Element || t instanceof ie(t).Element;
}
function Zt(t) {
  return t instanceof HTMLElement || t instanceof ie(t).HTMLElement;
}
function an(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof ie(t).ShadowRoot;
}
function _n(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: i,
    display: n
  } = Pt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + r) && !["inline", "contents"].includes(n);
}
function so() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function co(t) {
  return ["html", "body", "#document"].includes(jn(t));
}
function Pt(t) {
  return ie(t).getComputedStyle(t);
}
function lo(t) {
  if (jn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    an(t) && t.host || // Fallback.
    Un(t)
  );
  return an(e) ? e.host : e;
}
function $n(t) {
  const e = lo(t);
  return co(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Zt(e) && _n(e) ? e : $n(e);
}
function Qe(t, e, r) {
  var i;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const n = $n(t), o = n === ((i = t.ownerDocument) == null ? void 0 : i.body), a = ie(n);
  return o ? e.concat(a, a.visualViewport || [], _n(n) ? n : [], a.frameElement && r ? Qe(a.frameElement) : []) : e.concat(n, Qe(n, [], r));
}
function go(t) {
  const e = Pt(t);
  let r = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const n = Zt(t), o = n ? t.offsetWidth : r, a = n ? t.offsetHeight : i, s = je(r) !== o || je(i) !== a;
  return s && (r = o, i = a), {
    width: r,
    height: i,
    $: s
  };
}
function Dt(t) {
  return At(t) ? t : t.contextElement;
}
function at(t) {
  const e = Dt(t);
  if (!Zt(e))
    return Ue(1);
  const r = e.getBoundingClientRect(), {
    width: i,
    height: n,
    $: o
  } = go(e);
  let a = (o ? je(r.width) : r.width) / i, s = (o ? je(r.height) : r.height) / n;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const bo = /* @__PURE__ */ Ue(0);
function fo(t) {
  const e = ie(t);
  return !so() || !e.visualViewport ? bo : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function po(t, e, r) {
  return e === void 0 && (e = !1), !r || e && r !== ie(t) ? !1 : e;
}
function un(t, e, r, i) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const n = t.getBoundingClientRect(), o = Dt(t);
  let a = Ue(1);
  e && (i ? At(i) && (a = at(i)) : a = at(t));
  const s = po(o, r, i) ? fo(o) : Ue(0);
  let u = (n.left + s.x) / a.x, c = (n.top + s.y) / a.y, l = n.width / a.x, d = n.height / a.y;
  if (o) {
    const m = ie(o), I = i && At(i) ? ie(i) : i;
    let v = m, b = v.frameElement;
    for (; b && i && I !== v; ) {
      const g = at(b), p = b.getBoundingClientRect(), C = Pt(b), h = p.left + (b.clientLeft + parseFloat(C.paddingLeft)) * g.x, A = p.top + (b.clientTop + parseFloat(C.paddingTop)) * g.y;
      u *= g.x, c *= g.y, l *= g.x, d *= g.y, u += h, c += A, v = ie(b), b = v.frameElement;
    }
  }
  return uo({
    width: l,
    height: d,
    x: u,
    y: c
  });
}
function mo(t, e) {
  let r = null, i;
  const n = Un(t);
  function o() {
    var s;
    clearTimeout(i), (s = r) == null || s.disconnect(), r = null;
  }
  function a(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), o();
    const {
      left: c,
      top: l,
      width: d,
      height: m
    } = t.getBoundingClientRect();
    if (s || e(), !d || !m)
      return;
    const I = Ze(l), v = Ze(n.clientWidth - (c + d)), b = Ze(n.clientHeight - (l + m)), g = Ze(c), C = {
      rootMargin: -I + "px " + -v + "px " + -b + "px " + -g + "px",
      threshold: ao(0, oo(1, u)) || 1
    };
    let h = !0;
    function A(f) {
      const F = f[0].intersectionRatio;
      if (F !== u) {
        if (!h)
          return a();
        F ? a(!1, F) : i = setTimeout(() => {
          a(!1, 1e-7);
        }, 100);
      }
      h = !1;
    }
    try {
      r = new IntersectionObserver(A, {
        ...C,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(A, C);
    }
    r.observe(t);
  }
  return a(!0), o;
}
function Io(t, e, r, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = i, c = Dt(t), l = n || o ? [...c ? Qe(c) : [], ...Qe(e)] : [];
  l.forEach((p) => {
    n && p.addEventListener("scroll", r, {
      passive: !0
    }), o && p.addEventListener("resize", r);
  });
  const d = c && s ? mo(c, r) : null;
  let m = -1, I = null;
  a && (I = new ResizeObserver((p) => {
    let [C] = p;
    C && C.target === c && I && (I.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var h;
      (h = I) == null || h.observe(e);
    })), r();
  }), c && !u && I.observe(c), I.observe(e));
  let v, b = u ? un(t) : null;
  u && g();
  function g() {
    const p = un(t);
    b && (p.x !== b.x || p.y !== b.y || p.width !== b.width || p.height !== b.height) && r(), b = p, v = requestAnimationFrame(g);
  }
  return r(), () => {
    var p;
    l.forEach((C) => {
      n && C.removeEventListener("scroll", r), o && C.removeEventListener("resize", r);
    }), d == null || d(), (p = I) == null || p.disconnect(), I = null, u && cancelAnimationFrame(v);
  };
}
var yt = xr, vo = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], _e = function() {
};
function ho(t, e) {
  return e ? e[0] === "-" ? t + e : t + "__" + e : t;
}
function Co(t, e) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    i[n - 2] = arguments[n];
  var o = [].concat(i);
  if (e && t)
    for (var a in e)
      e.hasOwnProperty(a) && e[a] && o.push("".concat(ho(t, a)));
  return o.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var sn = function(e) {
  return Bo(e) ? e.filter(Boolean) : pe(e) === "object" && e !== null ? [e] : [];
}, Kn = function(e) {
  e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme;
  var r = ge(e, vo);
  return G({}, r);
}, X = function(e, r, i) {
  var n = e.cx, o = e.getStyles, a = e.getClassNames, s = e.className;
  return {
    css: o(r, e),
    className: n(i ?? {}, a(r, e), s)
  };
};
function rt(t) {
  return [document.documentElement, document.body, window].indexOf(t) > -1;
}
function Ao(t) {
  return rt(t) ? window.innerHeight : t.clientHeight;
}
function qn(t) {
  return rt(t) ? window.pageYOffset : t.scrollTop;
}
function $e(t, e) {
  if (rt(t)) {
    window.scrollTo(0, e);
    return;
  }
  t.scrollTop = e;
}
function yo(t) {
  var e = getComputedStyle(t), r = e.position === "absolute", i = /(auto|scroll)/;
  if (e.position === "fixed")
    return document.documentElement;
  for (var n = t; n = n.parentElement; )
    if (e = getComputedStyle(n), !(r && e.position === "static") && i.test(e.overflow + e.overflowY + e.overflowX))
      return n;
  return document.documentElement;
}
function xo(t, e, r, i) {
  return r * ((t = t / i - 1) * t * t + 1) + e;
}
function Pe(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _e, n = qn(t), o = e - n, a = 10, s = 0;
  function u() {
    s += a;
    var c = xo(s, n, o, r);
    $e(t, c), s < r ? window.requestAnimationFrame(u) : i(t);
  }
  u();
}
function cn(t, e) {
  var r = t.getBoundingClientRect(), i = e.getBoundingClientRect(), n = e.offsetHeight / 3;
  i.bottom + n > r.bottom ? $e(t, Math.min(e.offsetTop + e.clientHeight - t.offsetHeight + n, t.scrollHeight)) : i.top - n < r.top && $e(t, Math.max(e.offsetTop - n, 0));
}
function Eo(t) {
  var e = t.getBoundingClientRect();
  return {
    bottom: e.bottom,
    height: e.height,
    left: e.left,
    right: e.right,
    top: e.top,
    width: e.width
  };
}
function ln() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Go() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var er = !1, Fo = {
  get passive() {
    return er = !0;
  }
}, De = typeof window < "u" ? window : {};
De.addEventListener && De.removeEventListener && (De.addEventListener("p", _e, Fo), De.removeEventListener("p", _e, !1));
var So = er;
function Vo(t) {
  return t != null;
}
function Bo(t) {
  return Array.isArray(t);
}
function Oe(t, e, r) {
  return t ? e : r;
}
var No = function(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    i[n - 1] = arguments[n];
  var o = Object.entries(e).filter(function(a) {
    var s = de(a, 1), u = s[0];
    return !i.includes(u);
  });
  return o.reduce(function(a, s) {
    var u = de(s, 2), c = u[0], l = u[1];
    return a[c] = l, a;
  }, {});
}, wo = ["children", "innerProps"], Ro = ["children", "innerProps"];
function Wo(t) {
  var e = t.maxHeight, r = t.menuEl, i = t.minHeight, n = t.placement, o = t.shouldScroll, a = t.isFixedPosition, s = t.controlHeight, u = yo(r), c = {
    placement: "bottom",
    maxHeight: e
  };
  if (!r || !r.offsetParent)
    return c;
  var l = u.getBoundingClientRect(), d = l.height, m = r.getBoundingClientRect(), I = m.bottom, v = m.height, b = m.top, g = r.offsetParent.getBoundingClientRect(), p = g.top, C = a ? window.innerHeight : Ao(u), h = qn(u), A = parseInt(getComputedStyle(r).marginBottom, 10), f = parseInt(getComputedStyle(r).marginTop, 10), F = p - f, y = C - b, B = F + h, T = d - h - b, L = I - C + h + A, k = h + b - f, M = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (y >= v)
        return {
          placement: "bottom",
          maxHeight: e
        };
      if (T >= v && !a)
        return o && Pe(u, L, M), {
          placement: "bottom",
          maxHeight: e
        };
      if (!a && T >= i || a && y >= i) {
        o && Pe(u, L, M);
        var K = a ? y - A : T - A;
        return {
          placement: "bottom",
          maxHeight: K
        };
      }
      if (n === "auto" || a) {
        var q = e, D = a ? F : B;
        return D >= i && (q = Math.min(D - A - s, e)), {
          placement: "top",
          maxHeight: q
        };
      }
      if (n === "bottom")
        return o && $e(u, L), {
          placement: "bottom",
          maxHeight: e
        };
      break;
    case "top":
      if (F >= v)
        return {
          placement: "top",
          maxHeight: e
        };
      if (B >= v && !a)
        return o && Pe(u, k, M), {
          placement: "top",
          maxHeight: e
        };
      if (!a && B >= i || a && F >= i) {
        var Z = e;
        return (!a && B >= i || a && F >= i) && (Z = a ? F - f : B - f), o && Pe(u, k, M), {
          placement: "top",
          maxHeight: Z
        };
      }
      return {
        placement: "bottom",
        maxHeight: e
      };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return c;
}
function To(t) {
  var e = {
    bottom: "top",
    top: "bottom"
  };
  return t ? e[t] : "bottom";
}
var tr = function(e) {
  return e === "auto" ? "bottom" : e;
}, Xo = function(e, r) {
  var i, n = e.placement, o = e.theme, a = o.borderRadius, s = o.spacing, u = o.colors;
  return G((i = {
    label: "menu"
  }, Se(i, To(n), "100%"), Se(i, "position", "absolute"), Se(i, "width", "100%"), Se(i, "zIndex", 1), i), r ? {} : {
    backgroundColor: u.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, nr = /* @__PURE__ */ Er(null), Zo = function(e) {
  var r = e.children, i = e.minMenuHeight, n = e.maxMenuHeight, o = e.menuPlacement, a = e.menuPosition, s = e.menuShouldScrollIntoView, u = e.theme, c = Fn(nr) || {}, l = c.setPortalPlacement, d = le(null), m = fe(n), I = de(m, 2), v = I[0], b = I[1], g = fe(null), p = de(g, 2), C = p[0], h = p[1], A = u.spacing.controlHeight;
  return yt(function() {
    var f = d.current;
    if (f) {
      var F = a === "fixed", y = s && !F, B = Wo({
        maxHeight: n,
        menuEl: f,
        minHeight: i,
        placement: o,
        shouldScroll: y,
        isFixedPosition: F,
        controlHeight: A
      });
      b(B.maxHeight), h(B.placement), l == null || l(B.placement);
    }
  }, [n, o, a, s, i, l, A]), r({
    ref: d,
    placerProps: G(G({}, e), {}, {
      placement: C || tr(o),
      maxHeight: v
    })
  });
}, Po = function(e) {
  var r = e.children, i = e.innerRef, n = e.innerProps;
  return E("div", S({}, X(e, "menu", {
    menu: !0
  }), {
    ref: i
  }, n), r);
}, Do = Po, Oo = function(e, r) {
  var i = e.maxHeight, n = e.theme.spacing.baseUnit;
  return G({
    maxHeight: i,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: n,
    paddingTop: n
  });
}, Lo = function(e) {
  var r = e.children, i = e.innerProps, n = e.innerRef, o = e.isMulti;
  return E("div", S({}, X(e, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": o
  }), {
    ref: n
  }, i), r);
}, rr = function(e, r) {
  var i = e.theme, n = i.spacing.baseUnit, o = i.colors;
  return G({
    textAlign: "center"
  }, r ? {} : {
    color: o.neutral40,
    padding: "".concat(n * 2, "px ").concat(n * 3, "px")
  });
}, Mo = rr, Ho = rr, ko = function(e) {
  var r = e.children, i = r === void 0 ? "No options" : r, n = e.innerProps, o = ge(e, wo);
  return E("div", S({}, X(G(G({}, o), {}, {
    children: i,
    innerProps: n
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), n), i);
}, Yo = function(e) {
  var r = e.children, i = r === void 0 ? "Loading..." : r, n = e.innerProps, o = ge(e, Ro);
  return E("div", S({}, X(G(G({}, o), {}, {
    children: i,
    innerProps: n
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), n), i);
}, Jo = function(e) {
  var r = e.rect, i = e.offset, n = e.position;
  return {
    left: r.left,
    position: n,
    top: i,
    width: r.width,
    zIndex: 1
  };
}, zo = function(e) {
  var r = e.appendTo, i = e.children, n = e.controlElement, o = e.innerProps, a = e.menuPlacement, s = e.menuPosition, u = le(null), c = le(null), l = fe(tr(a)), d = de(l, 2), m = d[0], I = d[1], v = he(function() {
    return {
      setPortalPlacement: I
    };
  }, []), b = fe(null), g = de(b, 2), p = g[0], C = g[1], h = j(function() {
    if (n) {
      var y = Eo(n), B = s === "fixed" ? 0 : window.pageYOffset, T = y[m] + B;
      (T !== (p == null ? void 0 : p.offset) || y.left !== (p == null ? void 0 : p.rect.left) || y.width !== (p == null ? void 0 : p.rect.width)) && C({
        offset: T,
        rect: y
      });
    }
  }, [n, s, m, p == null ? void 0 : p.offset, p == null ? void 0 : p.rect.left, p == null ? void 0 : p.rect.width]);
  yt(function() {
    h();
  }, [h]);
  var A = j(function() {
    typeof c.current == "function" && (c.current(), c.current = null), n && u.current && (c.current = Io(n, u.current, h, {
      elementResize: "ResizeObserver" in window
    }));
  }, [n, h]);
  yt(function() {
    A();
  }, [A]);
  var f = j(function(y) {
    u.current = y, A();
  }, [A]);
  if (!r && s !== "fixed" || !p)
    return null;
  var F = E("div", S({
    ref: f
  }, X(G(G({}, e), {}, {
    offset: p.offset,
    position: s,
    rect: p.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), o), i);
  return E(nr.Provider, {
    value: v
  }, r ? /* @__PURE__ */ Fr.createPortal(F, r) : F);
}, jo = function(e) {
  var r = e.isDisabled, i = e.isRtl;
  return {
    label: "container",
    direction: i ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, Uo = function(e) {
  var r = e.children, i = e.innerProps, n = e.isDisabled, o = e.isRtl;
  return E("div", S({}, X(e, "container", {
    "--is-disabled": n,
    "--is-rtl": o
  }), i), r);
}, Qo = function(e, r) {
  var i = e.theme.spacing, n = e.isMulti, o = e.hasValue, a = e.selectProps.controlShouldRenderValue;
  return G({
    alignItems: "center",
    display: n && o && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(i.baseUnit / 2, "px ").concat(i.baseUnit * 2, "px")
  });
}, _o = function(e) {
  var r = e.children, i = e.innerProps, n = e.isMulti, o = e.hasValue;
  return E("div", S({}, X(e, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": n,
    "value-container--has-value": o
  }), i), r);
}, $o = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, Ko = function(e) {
  var r = e.children, i = e.innerProps;
  return E("div", S({}, X(e, "indicatorsContainer", {
    indicators: !0
  }), i), r);
}, dn, qo = ["size"], ea = ["innerProps", "isRtl", "size"];
function ta() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var na = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */",
  toString: ta
}, ir = function(e) {
  var r = e.size, i = ge(e, qo);
  return E("svg", S({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: na
  }, i));
}, Ot = function(e) {
  return E(ir, S({
    size: 20
  }, e), E("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, or = function(e) {
  return E(ir, S({
    size: 20
  }, e), E("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, ar = function(e, r) {
  var i = e.isFocused, n = e.theme, o = n.spacing.baseUnit, a = n.colors;
  return G({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: i ? a.neutral60 : a.neutral20,
    padding: o * 2,
    ":hover": {
      color: i ? a.neutral80 : a.neutral40
    }
  });
}, ra = ar, ia = function(e) {
  var r = e.children, i = e.innerProps;
  return E("div", S({}, X(e, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), i), r || E(or, null));
}, oa = ar, aa = function(e) {
  var r = e.children, i = e.innerProps;
  return E("div", S({}, X(e, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), i), r || E(Ot, null));
}, ua = function(e, r) {
  var i = e.isDisabled, n = e.theme, o = n.spacing.baseUnit, a = n.colors;
  return G({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: i ? a.neutral10 : a.neutral20,
    marginBottom: o * 2,
    marginTop: o * 2
  });
}, sa = function(e) {
  var r = e.innerProps;
  return E("span", S({}, r, X(e, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, ca = Ki(dn || (dn = io([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), la = function(e, r) {
  var i = e.isFocused, n = e.size, o = e.theme, a = o.colors, s = o.spacing.baseUnit;
  return G({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: n,
    lineHeight: 1,
    marginRight: n,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: i ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, ut = function(e) {
  var r = e.delay, i = e.offset;
  return E("span", {
    css: /* @__PURE__ */ Xt({
      animation: "".concat(ca, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: i ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4LCBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lLFxuICBDU1NPYmplY3RXaXRoTGFiZWwsXG4gIEdyb3VwQmFzZSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3R5bGVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgU3ZnID0gKHtcbiAgc2l6ZSxcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU6IG51bWJlciB9KSA9PiAoXG4gIDxzdmdcbiAgICBoZWlnaHQ9e3NpemV9XG4gICAgd2lkdGg9e3NpemV9XG4gICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgY3NzPXt7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHN0cm9rZTogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBzdHJva2VXaWR0aDogMCxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbmV4cG9ydCB0eXBlIENyb3NzSWNvblByb3BzID0gSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZT86IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IENyb3NzSWNvbiA9IChwcm9wczogQ3Jvc3NJY29uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTE0LjM0OCAxNC44NDljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDBsLTIuNjUxLTMuMDMwLTIuNjUxIDMuMDI5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI5IDAtMS42OTdsMi43NTgtMy4xNS0yLjc1OS0zLjE1MmMtMC40NjktMC40NjktMC40NjktMS4yMjggMC0xLjY5N3MxLjIyOC0wLjQ2OSAxLjY5NyAwbDIuNjUyIDMuMDMxIDIuNjUxLTMuMDMxYzAuNDY5LTAuNDY5IDEuMjI4LTAuNDY5IDEuNjk3IDBzMC40NjkgMS4yMjkgMCAxLjY5N2wtMi43NTggMy4xNTIgMi43NTggMy4xNWMwLjQ2OSAwLjQ2OSAwLjQ2OSAxLjIyOSAwIDEuNjk4elwiIC8+XG4gIDwvU3ZnPlxuKTtcbmV4cG9ydCB0eXBlIERvd25DaGV2cm9uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgRG93bkNoZXZyb24gPSAocHJvcHM6IERvd25DaGV2cm9uUHJvcHMpID0+IChcbiAgPFN2ZyBzaXplPXsyMH0gey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gIDwvU3ZnPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBEcm9wZG93biAmIENsZWFyIEJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBiYXNlQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTpcbiAgICB8IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbiAgICB8IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JDb250YWluZXInLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICAgICc6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsODAgOiBjb2xvcnMubmV1dHJhbDQwLFxuICAgICAgICB9LFxuICAgICAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duSW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBEcm9wZG93bkluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IERyb3Bkb3duSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2Ryb3Bkb3duSW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPERvd25DaGV2cm9uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDbGVhckluZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFRoZSBjaGlsZHJlbiB0byBiZSByZW5kZXJlZCBpbnNpZGUgdGhlIGluZGljYXRvci4gKi9cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbmV4cG9ydCBjb25zdCBDbGVhckluZGljYXRvciA9IDxcbiAgT3B0aW9uLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPlxuPihcbiAgcHJvcHM6IENsZWFySW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBpbm5lclByb3BzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4uZ2V0U3R5bGVQcm9wcyhwcm9wcywgJ2NsZWFySW5kaWNhdG9yJywge1xuICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICdjbGVhci1pbmRpY2F0b3InOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW4gfHwgPENyb3NzSWNvbiAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaW5uZXJQcm9wcz86IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3BhbiddO1xufVxuXG5leHBvcnQgY29uc3QgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNEaXNhYmxlZCxcbiAgICB0aGVtZToge1xuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgICAgY29sb3JzLFxuICAgIH0sXG4gIH06IEluZGljYXRvclNlcGFyYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+LFxuICB1bnN0eWxlZDogYm9vbGVhblxuKTogQ1NTT2JqZWN0V2l0aExhYmVsID0+ICh7XG4gIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gIHdpZHRoOiAxLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICAgICAgbWFyZ2luVG9wOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yU2VwYXJhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD5cbikgPT4ge1xuICBjb25zdCB7IGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnaW5kaWNhdG9yU2VwYXJhdG9yJywge1xuICAgICAgICAnaW5kaWNhdG9yLXNlcGFyYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXNgXG4gIDAlLCA4MCUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cbmA7XG5cbmV4cG9ydCBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ1NTID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICB7XG4gICAgaXNGb2N1c2VkLFxuICAgIHNpemUsXG4gICAgdGhlbWU6IHtcbiAgICAgIGNvbG9ycyxcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICB9LFxuICB9OiBMb2FkaW5nSW5kaWNhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdsb2FkaW5nSW5kaWNhdG9yJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICBmb250U2l6ZTogc2l6ZSxcbiAgbGluZUhlaWdodDogMSxcbiAgbWFyZ2luUmlnaHQ6IHNpemUsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAuLi4odW5zdHlsZWRcbiAgICA/IHt9XG4gICAgOiB7XG4gICAgICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICAgICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgICAgfSksXG59KTtcblxuaW50ZXJmYWNlIExvYWRpbmdEb3RQcm9wcyB7XG4gIGRlbGF5OiBudW1iZXI7XG4gIG9mZnNldDogYm9vbGVhbjtcbn1cbmNvbnN0IExvYWRpbmdEb3QgPSAoeyBkZWxheSwgb2Zmc2V0IH06IExvYWRpbmdEb3RQcm9wcykgPT4gKFxuICA8c3BhblxuICAgIGNzcz17e1xuICAgICAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nRG90QW5pbWF0aW9uc30gMXMgZWFzZS1pbi1vdXQgJHtkZWxheX1tcyBpbmZpbml0ZTtgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRpbmdJbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBQcm9wcyB0aGF0IHdpbGwgYmUgcGFzc2VkIG9uIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXTtcbiAgLyoqIFRoZSBmb2N1c2VkIHN0YXRlIG9mIHRoZSBzZWxlY3QuICovXG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgLyoqIFNldCBzaXplIG9mIHRoZSBjb250YWluZXIuICovXG4gIHNpemU6IG51bWJlcjtcbn1cbmV4cG9ydCBjb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KHtcbiAgaW5uZXJQcm9wcyxcbiAgaXNSdGwsXG4gIHNpemUgPSA0LFxuICAuLi5yZXN0UHJvcHNcbn06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKFxuICAgICAgICB7IC4uLnJlc3RQcm9wcywgaW5uZXJQcm9wcywgaXNSdGwsIHNpemUgfSxcbiAgICAgICAgJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgICAgICB7XG4gICAgICAgICAgaW5kaWNhdG9yOiB0cnVlLFxuICAgICAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICl9XG4gICAgICB7Li4uaW5uZXJQcm9wc31cbiAgICA+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MH0gb2Zmc2V0PXtpc1J0bH0gLz5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXsxNjB9IG9mZnNldCAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezMyMH0gb2Zmc2V0PXshaXNSdGx9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */")
  });
}, da = function(e) {
  var r = e.innerProps, i = e.isRtl, n = e.size, o = n === void 0 ? 4 : n, a = ge(e, ea);
  return E("div", S({}, X(G(G({}, a), {}, {
    innerProps: r,
    isRtl: i,
    size: o
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), E(ut, {
    delay: 0,
    offset: i
  }), E(ut, {
    delay: 160,
    offset: !0
  }), E(ut, {
    delay: 320,
    offset: !i
  }));
}, ga = function(e, r) {
  var i = e.isDisabled, n = e.isFocused, o = e.theme, a = o.colors, s = o.borderRadius, u = o.spacing;
  return G({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: u.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: i ? a.neutral5 : a.neutral0,
    borderColor: i ? a.neutral10 : n ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: n ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: n ? a.primary : a.neutral30
    }
  });
}, ba = function(e) {
  var r = e.children, i = e.isDisabled, n = e.isFocused, o = e.innerRef, a = e.innerProps, s = e.menuIsOpen;
  return E("div", S({
    ref: o
  }, X(e, "control", {
    control: !0,
    "control--is-disabled": i,
    "control--is-focused": n,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": i || void 0
  }), r);
}, fa = ba, pa = ["data"], ma = function(e, r) {
  var i = e.theme.spacing;
  return r ? {} : {
    paddingBottom: i.baseUnit * 2,
    paddingTop: i.baseUnit * 2
  };
}, Ia = function(e) {
  var r = e.children, i = e.cx, n = e.getStyles, o = e.getClassNames, a = e.Heading, s = e.headingProps, u = e.innerProps, c = e.label, l = e.theme, d = e.selectProps;
  return E("div", S({}, X(e, "group", {
    group: !0
  }), u), E(a, S({}, s, {
    selectProps: d,
    theme: l,
    getStyles: n,
    getClassNames: o,
    cx: i
  }), c), E("div", null, r));
}, va = function(e, r) {
  var i = e.theme, n = i.colors, o = i.spacing;
  return G({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: n.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: o.baseUnit * 3,
    paddingRight: o.baseUnit * 3,
    textTransform: "uppercase"
  });
}, ha = function(e) {
  var r = Kn(e);
  r.data;
  var i = ge(r, pa);
  return E("div", S({}, X(e, "groupHeading", {
    "group-heading": !0
  }), i));
}, Ca = Ia, Aa = ["innerRef", "isDisabled", "isHidden", "inputClassName"], ya = function(e, r) {
  var i = e.isDisabled, n = e.value, o = e.theme, a = o.spacing, s = o.colors;
  return G(G({
    visibility: i ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: n ? "translateZ(0)" : ""
  }, xa), r ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, ur = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, xa = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": G({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, ur)
}, Ea = function(e) {
  return G({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: e ? 0 : 1,
    width: "100%"
  }, ur);
}, Ga = function(e) {
  var r = e.cx, i = e.value, n = Kn(e), o = n.innerRef, a = n.isDisabled, s = n.isHidden, u = n.inputClassName, c = ge(n, Aa);
  return E("div", S({}, X(e, "input", {
    "input-container": !0
  }), {
    "data-value": i || ""
  }), E("input", S({
    className: r({
      input: !0
    }, u),
    ref: o,
    style: Ea(s),
    disabled: a
  }, c)));
}, Fa = Ga, Sa = function(e, r) {
  var i = e.theme, n = i.spacing, o = i.borderRadius, a = i.colors;
  return G({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: o / 2,
    margin: n.baseUnit / 2
  });
}, Va = function(e, r) {
  var i = e.theme, n = i.borderRadius, o = i.colors, a = e.cropWithEllipsis;
  return G({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: n / 2,
    color: o.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, Ba = function(e, r) {
  var i = e.theme, n = i.spacing, o = i.borderRadius, a = i.colors, s = e.isFocused;
  return G({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: o / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: n.baseUnit,
    paddingRight: n.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, sr = function(e) {
  var r = e.children, i = e.innerProps;
  return E("div", i, r);
}, Na = sr, wa = sr;
function Ra(t) {
  var e = t.children, r = t.innerProps;
  return E("div", S({
    role: "button"
  }, r), e || E(Ot, {
    size: 14
  }));
}
var Wa = function(e) {
  var r = e.children, i = e.components, n = e.data, o = e.innerProps, a = e.isDisabled, s = e.removeProps, u = e.selectProps, c = i.Container, l = i.Label, d = i.Remove;
  return E(c, {
    data: n,
    innerProps: G(G({}, X(e, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), o),
    selectProps: u
  }, E(l, {
    data: n,
    innerProps: G({}, X(e, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: u
  }, r), E(d, {
    data: n,
    innerProps: G(G({}, X(e, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, s),
    selectProps: u
  }));
}, Ta = Wa, Xa = function(e, r) {
  var i = e.isDisabled, n = e.isFocused, o = e.isSelected, a = e.theme, s = a.spacing, u = a.colors;
  return G({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: o ? u.primary : n ? u.primary25 : "transparent",
    color: i ? u.neutral20 : o ? u.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: i ? void 0 : o ? u.primary : u.primary50
    }
  });
}, Za = function(e) {
  var r = e.children, i = e.isDisabled, n = e.isFocused, o = e.isSelected, a = e.innerRef, s = e.innerProps;
  return E("div", S({}, X(e, "option", {
    option: !0,
    "option--is-disabled": i,
    "option--is-focused": n,
    "option--is-selected": o
  }), {
    ref: a,
    "aria-disabled": i
  }, s), r);
}, Pa = Za, Da = function(e, r) {
  var i = e.theme, n = i.spacing, o = i.colors;
  return G({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: o.neutral50,
    marginLeft: n.baseUnit / 2,
    marginRight: n.baseUnit / 2
  });
}, Oa = function(e) {
  var r = e.children, i = e.innerProps;
  return E("div", S({}, X(e, "placeholder", {
    placeholder: !0
  }), i), r);
}, La = Oa, Ma = function(e, r) {
  var i = e.isDisabled, n = e.theme, o = n.spacing, a = n.colors;
  return G({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: i ? a.neutral40 : a.neutral80,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Ha = function(e) {
  var r = e.children, i = e.isDisabled, n = e.innerProps;
  return E("div", S({}, X(e, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": i
  }), n), r);
}, ka = Ha, Ya = {
  ClearIndicator: aa,
  Control: fa,
  DropdownIndicator: ia,
  DownChevron: or,
  CrossIcon: Ot,
  Group: Ca,
  GroupHeading: ha,
  IndicatorsContainer: Ko,
  IndicatorSeparator: sa,
  Input: Fa,
  LoadingIndicator: da,
  Menu: Do,
  MenuList: Lo,
  MenuPortal: zo,
  LoadingMessage: Yo,
  NoOptionsMessage: ko,
  MultiValue: Ta,
  MultiValueContainer: Na,
  MultiValueLabel: wa,
  MultiValueRemove: Ra,
  Option: Pa,
  Placeholder: La,
  SelectContainer: Uo,
  SingleValue: ka,
  ValueContainer: _o
}, Ja = function(e) {
  return G(G({}, Ya), e.components);
}, gn = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function za(t, e) {
  return !!(t === e || gn(t) && gn(e));
}
function ja(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (!za(t[r], e[r]))
      return !1;
  return !0;
}
function Ua(t, e) {
  e === void 0 && (e = ja);
  var r = null;
  function i() {
    for (var n = [], o = 0; o < arguments.length; o++)
      n[o] = arguments[o];
    if (r && r.lastThis === this && e(n, r.lastArgs))
      return r.lastResult;
    var a = t.apply(this, n);
    return r = {
      lastResult: a,
      lastArgs: n,
      lastThis: this
    }, a;
  }
  return i.clear = function() {
    r = null;
  }, i;
}
function Qa() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var _a = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Qa
}, $a = function(e) {
  return E("span", S({
    css: _a
  }, e));
}, bn = $a, Ka = {
  guidance: function(e) {
    var r = e.isSearchable, i = e.isMulti, n = e.tabSelectsValue, o = e.context, a = e.isInitialFocus;
    switch (o) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return a ? "".concat(e["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(i ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(e) {
    var r = e.action, i = e.label, n = i === void 0 ? "" : i, o = e.labels, a = e.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(n, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(o.length > 1 ? "s" : "", " ").concat(o.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(e) {
    var r = e.context, i = e.focused, n = e.options, o = e.label, a = o === void 0 ? "" : o, s = e.selectValue, u = e.isDisabled, c = e.isSelected, l = e.isAppleDevice, d = function(b, g) {
      return b && b.length ? "".concat(b.indexOf(g) + 1, " of ").concat(b.length) : "";
    };
    if (r === "value" && s)
      return "value ".concat(a, " focused, ").concat(d(s, i), ".");
    if (r === "menu" && l) {
      var m = u ? " disabled" : "", I = "".concat(c ? " selected" : "").concat(m);
      return "".concat(a).concat(I, ", ").concat(d(n, i), ".");
    }
    return "";
  },
  onFilter: function(e) {
    var r = e.inputValue, i = e.resultsMessage;
    return "".concat(i).concat(r ? " for search term " + r : "", ".");
  }
}, qa = function(e) {
  var r = e.ariaSelection, i = e.focusedOption, n = e.focusedValue, o = e.focusableOptions, a = e.isFocused, s = e.selectValue, u = e.selectProps, c = e.id, l = e.isAppleDevice, d = u.ariaLiveMessages, m = u.getOptionLabel, I = u.inputValue, v = u.isMulti, b = u.isOptionDisabled, g = u.isSearchable, p = u.menuIsOpen, C = u.options, h = u.screenReaderStatus, A = u.tabSelectsValue, f = u.isLoading, F = u["aria-label"], y = u["aria-live"], B = he(function() {
    return G(G({}, Ka), d || {});
  }, [d]), T = he(function() {
    var D = "";
    if (r && B.onChange) {
      var Z = r.option, $ = r.options, J = r.removedValue, oe = r.removedValues, ee = r.value, me = function(ne) {
        return Array.isArray(ne) ? null : ne;
      }, P = J || Z || me(ee), z = P ? m(P) : "", te = $ || oe || void 0, ae = te ? te.map(m) : [], Q = G({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: P && b(P, s),
        label: z,
        labels: ae
      }, r);
      D = B.onChange(Q);
    }
    return D;
  }, [r, B, b, s, m]), L = he(function() {
    var D = "", Z = i || n, $ = !!(i && s && s.includes(i));
    if (Z && B.onFocus) {
      var J = {
        focused: Z,
        label: m(Z),
        isDisabled: b(Z, s),
        isSelected: $,
        options: o,
        context: Z === i ? "menu" : "value",
        selectValue: s,
        isAppleDevice: l
      };
      D = B.onFocus(J);
    }
    return D;
  }, [i, n, m, b, B, o, s, l]), k = he(function() {
    var D = "";
    if (p && C.length && !f && B.onFilter) {
      var Z = h({
        count: o.length
      });
      D = B.onFilter({
        inputValue: I,
        resultsMessage: Z
      });
    }
    return D;
  }, [o, I, p, B, C, h, f]), M = (r == null ? void 0 : r.action) === "initial-input-focus", K = he(function() {
    var D = "";
    if (B.guidance) {
      var Z = n ? "value" : p ? "menu" : "input";
      D = B.guidance({
        "aria-label": F,
        context: Z,
        isDisabled: i && b(i, s),
        isMulti: v,
        isSearchable: g,
        tabSelectsValue: A,
        isInitialFocus: M
      });
    }
    return D;
  }, [F, i, n, v, b, g, p, B, s, A, M]), q = E(bt, null, E("span", {
    id: "aria-selection"
  }, T), E("span", {
    id: "aria-focused"
  }, L), E("span", {
    id: "aria-results"
  }, k), E("span", {
    id: "aria-guidance"
  }, K));
  return E(bt, null, E(bn, {
    id: c
  }, M && q), E(bn, {
    "aria-live": y,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, a && !M && q));
}, eu = qa, xt = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], tu = new RegExp("[" + xt.map(function(t) {
  return t.letters;
}).join("") + "]", "g"), cr = {};
for (var st = 0; st < xt.length; st++)
  for (var ct = xt[st], lt = 0; lt < ct.letters.length; lt++)
    cr[ct.letters[lt]] = ct.base;
var lr = function(e) {
  return e.replace(tu, function(r) {
    return cr[r];
  });
}, nu = Ua(lr), fn = function(e) {
  return e.replace(/^\s+|\s+$/g, "");
}, ru = function(e) {
  return "".concat(e.label, " ").concat(e.value);
}, iu = function(e) {
  return function(r, i) {
    if (r.data.__isNew__)
      return !0;
    var n = G({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: ru,
      trim: !0,
      matchFrom: "any"
    }, e), o = n.ignoreCase, a = n.ignoreAccents, s = n.stringify, u = n.trim, c = n.matchFrom, l = u ? fn(i) : i, d = u ? fn(s(r)) : s(r);
    return o && (l = l.toLowerCase(), d = d.toLowerCase()), a && (l = nu(l), d = lr(d)), c === "start" ? d.substr(0, l.length) === l : d.indexOf(l) > -1;
  };
}, ou = ["innerRef"];
function au(t) {
  var e = t.innerRef, r = ge(t, ou), i = No(r, "onExited", "in", "enter", "exit", "appear");
  return E("input", S({
    ref: e
  }, i, {
    css: /* @__PURE__ */ Xt({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgcmVtb3ZlUHJvcHMgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIER1bW15SW5wdXQoe1xuICBpbm5lclJlZixcbiAgLi4ucHJvcHNcbn06IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW5wdXQnXSAmIHtcbiAgcmVhZG9ubHkgaW5uZXJSZWY6IFJlZjxIVE1MSW5wdXRFbGVtZW50Pjtcbn0pIHtcbiAgLy8gUmVtb3ZlIGFuaW1hdGlvbiBwcm9wcyBub3QgbWVhbnQgZm9yIEhUTUwgZWxlbWVudHNcbiAgY29uc3QgZmlsdGVyZWRQcm9wcyA9IHJlbW92ZVByb3BzKFxuICAgIHByb3BzLFxuICAgICdvbkV4aXRlZCcsXG4gICAgJ2luJyxcbiAgICAnZW50ZXInLFxuICAgICdleGl0JyxcbiAgICAnYXBwZWFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICByZWY9e2lubmVyUmVmfVxuICAgICAgey4uLmZpbHRlcmVkUHJvcHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBhbnkgZGVmYXVsdCBzdHlsZXNcbiAgICAgICAgYmFja2dyb3VuZDogMCxcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHRoaXMgaGlkZXMgdGhlIGZsYXNoaW5nIGN1cnNvclxuICAgICAgICBjYXJldENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICBncmlkQXJlYTogJzEgLyAxIC8gMiAvIDMnLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAvLyBpbXBvcnRhbnQhIHdpdGhvdXQgYHdpZHRoYCBicm93c2VycyB3b24ndCBhbGxvdyBmb2N1c1xuICAgICAgICB3aWR0aDogMSxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIGRlc2t0b3BcbiAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCcsXG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBtb2JpbGUgd2hpbHN0IG1haW50YWluaW5nIFwic2Nyb2xsIGludG8gdmlld1wiIGJlaGF2aW91clxuICAgICAgICBsZWZ0OiAtMTAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoLjAxKScsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXX0= */")
  }));
}
var uu = function(e) {
  e.cancelable && e.preventDefault(), e.stopPropagation();
};
function su(t) {
  var e = t.isEnabled, r = t.onBottomArrive, i = t.onBottomLeave, n = t.onTopArrive, o = t.onTopLeave, a = le(!1), s = le(!1), u = le(0), c = le(null), l = j(function(g, p) {
    if (c.current !== null) {
      var C = c.current, h = C.scrollTop, A = C.scrollHeight, f = C.clientHeight, F = c.current, y = p > 0, B = A - f - h, T = !1;
      B > p && a.current && (i && i(g), a.current = !1), y && s.current && (o && o(g), s.current = !1), y && p > B ? (r && !a.current && r(g), F.scrollTop = A, T = !0, a.current = !0) : !y && -p > h && (n && !s.current && n(g), F.scrollTop = 0, T = !0, s.current = !0), T && uu(g);
    }
  }, [r, i, n, o]), d = j(function(g) {
    l(g, g.deltaY);
  }, [l]), m = j(function(g) {
    u.current = g.changedTouches[0].clientY;
  }, []), I = j(function(g) {
    var p = u.current - g.changedTouches[0].clientY;
    l(g, p);
  }, [l]), v = j(function(g) {
    if (g) {
      var p = So ? {
        passive: !1
      } : !1;
      g.addEventListener("wheel", d, p), g.addEventListener("touchstart", m, p), g.addEventListener("touchmove", I, p);
    }
  }, [I, m, d]), b = j(function(g) {
    g && (g.removeEventListener("wheel", d, !1), g.removeEventListener("touchstart", m, !1), g.removeEventListener("touchmove", I, !1));
  }, [I, m, d]);
  return Sn(function() {
    if (e) {
      var g = c.current;
      return v(g), function() {
        b(g);
      };
    }
  }, [e, v, b]), function(g) {
    c.current = g;
  };
}
var pn = ["boxSizing", "height", "overflow", "paddingRight", "position"], mn = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function In(t) {
  t.preventDefault();
}
function vn(t) {
  t.stopPropagation();
}
function hn() {
  var t = this.scrollTop, e = this.scrollHeight, r = t + this.offsetHeight;
  t === 0 ? this.scrollTop = 1 : r === e && (this.scrollTop = t - 1);
}
function Cn() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var An = !!(typeof window < "u" && window.document && window.document.createElement), Fe = 0, ve = {
  capture: !1,
  passive: !1
};
function cu(t) {
  var e = t.isEnabled, r = t.accountForScrollbars, i = r === void 0 ? !0 : r, n = le({}), o = le(null), a = j(function(u) {
    if (An) {
      var c = document.body, l = c && c.style;
      if (i && pn.forEach(function(v) {
        var b = l && l[v];
        n.current[v] = b;
      }), i && Fe < 1) {
        var d = parseInt(n.current.paddingRight, 10) || 0, m = document.body ? document.body.clientWidth : 0, I = window.innerWidth - m + d || 0;
        Object.keys(mn).forEach(function(v) {
          var b = mn[v];
          l && (l[v] = b);
        }), l && (l.paddingRight = "".concat(I, "px"));
      }
      c && Cn() && (c.addEventListener("touchmove", In, ve), u && (u.addEventListener("touchstart", hn, ve), u.addEventListener("touchmove", vn, ve))), Fe += 1;
    }
  }, [i]), s = j(function(u) {
    if (An) {
      var c = document.body, l = c && c.style;
      Fe = Math.max(Fe - 1, 0), i && Fe < 1 && pn.forEach(function(d) {
        var m = n.current[d];
        l && (l[d] = m);
      }), c && Cn() && (c.removeEventListener("touchmove", In, ve), u && (u.removeEventListener("touchstart", hn, ve), u.removeEventListener("touchmove", vn, ve)));
    }
  }, [i]);
  return Sn(function() {
    if (e) {
      var u = o.current;
      return a(u), function() {
        s(u);
      };
    }
  }, [e, a, s]), function(u) {
    o.current = u;
  };
}
function lu() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var du = function(e) {
  var r = e.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, gu = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: lu
};
function bu(t) {
  var e = t.children, r = t.lockEnabled, i = t.captureEnabled, n = i === void 0 ? !0 : i, o = t.onBottomArrive, a = t.onBottomLeave, s = t.onTopArrive, u = t.onTopLeave, c = su({
    isEnabled: n,
    onBottomArrive: o,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: u
  }), l = cu({
    isEnabled: r
  }), d = function(I) {
    c(I), l(I);
  };
  return E(bt, null, r && E("div", {
    onClick: du,
    css: gu
  }), e(d));
}
function fu() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var pu = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: fu
}, mu = function(e) {
  var r = e.name, i = e.onFocus;
  return E("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: i,
    css: pu,
    value: "",
    onChange: function() {
    }
  });
}, Iu = mu;
function Lt(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function vu() {
  return Lt(/^iPhone/i);
}
function dr() {
  return Lt(/^Mac/i);
}
function hu() {
  return Lt(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  dr() && navigator.maxTouchPoints > 1;
}
function Cu() {
  return vu() || hu();
}
function Au() {
  return dr() || Cu();
}
var yu = function(e) {
  return e.label;
}, xu = function(e) {
  return e.label;
}, Eu = function(e) {
  return e.value;
}, Gu = function(e) {
  return !!e.isDisabled;
}, Fu = {
  clearIndicator: oa,
  container: jo,
  control: ga,
  dropdownIndicator: ra,
  group: ma,
  groupHeading: va,
  indicatorsContainer: $o,
  indicatorSeparator: ua,
  input: ya,
  loadingIndicator: la,
  loadingMessage: Ho,
  menu: Xo,
  menuList: Oo,
  menuPortal: Jo,
  multiValue: Sa,
  multiValueLabel: Va,
  multiValueRemove: Ba,
  noOptionsMessage: Mo,
  option: Xa,
  placeholder: Da,
  singleValue: Ma,
  valueContainer: Qo
}, Su = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, Vu = 4, gr = 4, Bu = 38, Nu = gr * 2, wu = {
  baseUnit: gr,
  controlHeight: Bu,
  menuGutter: Nu
}, dt = {
  borderRadius: Vu,
  colors: Su,
  spacing: wu
}, Ru = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: ln(),
  captureMenuScroll: !ln(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: iu(),
  formatGroupLabel: yu,
  getOptionLabel: xu,
  getOptionValue: Eu,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: Gu,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Go(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(e) {
    var r = e.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function yn(t, e, r, i) {
  var n = pr(t, e, r), o = mr(t, e, r), a = fr(t, e), s = Ke(t, e);
  return {
    type: "option",
    data: e,
    isDisabled: n,
    isSelected: o,
    label: a,
    value: s,
    index: i
  };
}
function ke(t, e) {
  return t.options.map(function(r, i) {
    if ("options" in r) {
      var n = r.options.map(function(a, s) {
        return yn(t, a, e, s);
      }).filter(function(a) {
        return En(t, a);
      });
      return n.length > 0 ? {
        type: "group",
        data: r,
        options: n,
        index: i
      } : void 0;
    }
    var o = yn(t, r, e, i);
    return En(t, o) ? o : void 0;
  }).filter(Vo);
}
function br(t) {
  return t.reduce(function(e, r) {
    return r.type === "group" ? e.push.apply(e, Et(r.options.map(function(i) {
      return i.data;
    }))) : e.push(r.data), e;
  }, []);
}
function xn(t, e) {
  return t.reduce(function(r, i) {
    return i.type === "group" ? r.push.apply(r, Et(i.options.map(function(n) {
      return {
        data: n.data,
        id: "".concat(e, "-").concat(i.index, "-").concat(n.index)
      };
    }))) : r.push({
      data: i.data,
      id: "".concat(e, "-").concat(i.index)
    }), r;
  }, []);
}
function Wu(t, e) {
  return br(ke(t, e));
}
function En(t, e) {
  var r = t.inputValue, i = r === void 0 ? "" : r, n = e.data, o = e.isSelected, a = e.label, s = e.value;
  return (!vr(t) || !o) && Ir(t, {
    label: a,
    value: s,
    data: n
  }, i);
}
function Tu(t, e) {
  var r = t.focusedValue, i = t.selectValue, n = i.indexOf(r);
  if (n > -1) {
    var o = e.indexOf(r);
    if (o > -1)
      return r;
    if (n < e.length)
      return e[n];
  }
  return null;
}
function Xu(t, e) {
  var r = t.focusedOption;
  return r && e.indexOf(r) > -1 ? r : e[0];
}
var gt = function(e, r) {
  var i, n = (i = e.find(function(o) {
    return o.data === r;
  })) === null || i === void 0 ? void 0 : i.id;
  return n || null;
}, fr = function(e, r) {
  return e.getOptionLabel(r);
}, Ke = function(e, r) {
  return e.getOptionValue(r);
};
function pr(t, e, r) {
  return typeof t.isOptionDisabled == "function" ? t.isOptionDisabled(e, r) : !1;
}
function mr(t, e, r) {
  if (r.indexOf(e) > -1)
    return !0;
  if (typeof t.isOptionSelected == "function")
    return t.isOptionSelected(e, r);
  var i = Ke(t, e);
  return r.some(function(n) {
    return Ke(t, n) === i;
  });
}
function Ir(t, e, r) {
  return t.filterOption ? t.filterOption(e, r) : !0;
}
var vr = function(e) {
  var r = e.hideSelectedOptions, i = e.isMulti;
  return r === void 0 ? i : r;
}, Zu = 1, hr = /* @__PURE__ */ function(t) {
  Pr(r, t);
  var e = Lr(r);
  function r(i) {
    var n;
    if (Xr(this, r), n = e.call(this, i), n.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.isAppleDevice = Au(), n.controlRef = null, n.getControlRef = function(u) {
      n.controlRef = u;
    }, n.focusedOptionRef = null, n.getFocusedOptionRef = function(u) {
      n.focusedOptionRef = u;
    }, n.menuListRef = null, n.getMenuListRef = function(u) {
      n.menuListRef = u;
    }, n.inputRef = null, n.getInputRef = function(u) {
      n.inputRef = u;
    }, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(u, c) {
      var l = n.props, d = l.onChange, m = l.name;
      c.name = m, n.ariaOnChange(u, c), d(u, c);
    }, n.setValue = function(u, c, l) {
      var d = n.props, m = d.closeMenuOnSelect, I = d.isMulti, v = d.inputValue;
      n.onInputChange("", {
        action: "set-value",
        prevInputValue: v
      }), m && (n.setState({
        inputIsHiddenAfterUpdate: !I
      }), n.onMenuClose()), n.setState({
        clearFocusValueOnUpdate: !0
      }), n.onChange(u, {
        action: c,
        option: l
      });
    }, n.selectOption = function(u) {
      var c = n.props, l = c.blurInputOnSelect, d = c.isMulti, m = c.name, I = n.state.selectValue, v = d && n.isOptionSelected(u, I), b = n.isOptionDisabled(u, I);
      if (v) {
        var g = n.getOptionValue(u);
        n.setValue(I.filter(function(p) {
          return n.getOptionValue(p) !== g;
        }), "deselect-option", u);
      } else if (!b)
        d ? n.setValue([].concat(Et(I), [u]), "select-option", u) : n.setValue(u, "select-option");
      else {
        n.ariaOnChange(u, {
          action: "select-option",
          option: u,
          name: m
        });
        return;
      }
      l && n.blurInput();
    }, n.removeValue = function(u) {
      var c = n.props.isMulti, l = n.state.selectValue, d = n.getOptionValue(u), m = l.filter(function(v) {
        return n.getOptionValue(v) !== d;
      }), I = Oe(c, m, m[0] || null);
      n.onChange(I, {
        action: "remove-value",
        removedValue: u
      }), n.focusInput();
    }, n.clearValue = function() {
      var u = n.state.selectValue;
      n.onChange(Oe(n.props.isMulti, [], null), {
        action: "clear",
        removedValues: u
      });
    }, n.popValue = function() {
      var u = n.props.isMulti, c = n.state.selectValue, l = c[c.length - 1], d = c.slice(0, c.length - 1), m = Oe(u, d, d[0] || null);
      n.onChange(m, {
        action: "pop-value",
        removedValue: l
      });
    }, n.getFocusedOptionId = function(u) {
      return gt(n.state.focusableOptionsWithIds, u);
    }, n.getFocusableOptionsWithIds = function() {
      return xn(ke(n.props, n.state.selectValue), n.getElementId("option"));
    }, n.getValue = function() {
      return n.state.selectValue;
    }, n.cx = function() {
      for (var u = arguments.length, c = new Array(u), l = 0; l < u; l++)
        c[l] = arguments[l];
      return Co.apply(void 0, [n.props.classNamePrefix].concat(c));
    }, n.getOptionLabel = function(u) {
      return fr(n.props, u);
    }, n.getOptionValue = function(u) {
      return Ke(n.props, u);
    }, n.getStyles = function(u, c) {
      var l = n.props.unstyled, d = Fu[u](c, l);
      d.boxSizing = "border-box";
      var m = n.props.styles[u];
      return m ? m(d, c) : d;
    }, n.getClassNames = function(u, c) {
      var l, d;
      return (l = (d = n.props.classNames)[u]) === null || l === void 0 ? void 0 : l.call(d, c);
    }, n.getElementId = function(u) {
      return "".concat(n.state.instancePrefix, "-").concat(u);
    }, n.getComponents = function() {
      return Ja(n.props);
    }, n.buildCategorizedOptions = function() {
      return ke(n.props, n.state.selectValue);
    }, n.getCategorizedOptions = function() {
      return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
    }, n.buildFocusableOptions = function() {
      return br(n.buildCategorizedOptions());
    }, n.getFocusableOptions = function() {
      return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
    }, n.ariaOnChange = function(u, c) {
      n.setState({
        ariaSelection: G({
          value: u
        }, c)
      });
    }, n.onMenuMouseDown = function(u) {
      u.button === 0 && (u.stopPropagation(), u.preventDefault(), n.focusInput());
    }, n.onMenuMouseMove = function(u) {
      n.blockOptionHover = !1;
    }, n.onControlMouseDown = function(u) {
      if (!u.defaultPrevented) {
        var c = n.props.openMenuOnClick;
        n.state.isFocused ? n.props.menuIsOpen ? u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && n.onMenuClose() : c && n.openMenu("first") : (c && (n.openAfterFocus = !0), n.focusInput()), u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && u.preventDefault();
      }
    }, n.onDropdownIndicatorMouseDown = function(u) {
      if (!(u && u.type === "mousedown" && u.button !== 0) && !n.props.isDisabled) {
        var c = n.props, l = c.isMulti, d = c.menuIsOpen;
        n.focusInput(), d ? (n.setState({
          inputIsHiddenAfterUpdate: !l
        }), n.onMenuClose()) : n.openMenu("first"), u.preventDefault();
      }
    }, n.onClearIndicatorMouseDown = function(u) {
      u && u.type === "mousedown" && u.button !== 0 || (n.clearValue(), u.preventDefault(), n.openAfterFocus = !1, u.type === "touchend" ? n.focusInput() : setTimeout(function() {
        return n.focusInput();
      }));
    }, n.onScroll = function(u) {
      typeof n.props.closeMenuOnScroll == "boolean" ? u.target instanceof HTMLElement && rt(u.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(u) && n.props.onMenuClose();
    }, n.onCompositionStart = function() {
      n.isComposing = !0;
    }, n.onCompositionEnd = function() {
      n.isComposing = !1;
    }, n.onTouchStart = function(u) {
      var c = u.touches, l = c && c.item(0);
      l && (n.initialTouchX = l.clientX, n.initialTouchY = l.clientY, n.userIsDragging = !1);
    }, n.onTouchMove = function(u) {
      var c = u.touches, l = c && c.item(0);
      if (l) {
        var d = Math.abs(l.clientX - n.initialTouchX), m = Math.abs(l.clientY - n.initialTouchY), I = 5;
        n.userIsDragging = d > I || m > I;
      }
    }, n.onTouchEnd = function(u) {
      n.userIsDragging || (n.controlRef && !n.controlRef.contains(u.target) && n.menuListRef && !n.menuListRef.contains(u.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
    }, n.onControlTouchEnd = function(u) {
      n.userIsDragging || n.onControlMouseDown(u);
    }, n.onClearIndicatorTouchEnd = function(u) {
      n.userIsDragging || n.onClearIndicatorMouseDown(u);
    }, n.onDropdownIndicatorTouchEnd = function(u) {
      n.userIsDragging || n.onDropdownIndicatorMouseDown(u);
    }, n.handleInputChange = function(u) {
      var c = n.props.inputValue, l = u.currentTarget.value;
      n.setState({
        inputIsHiddenAfterUpdate: !1
      }), n.onInputChange(l, {
        action: "input-change",
        prevInputValue: c
      }), n.props.menuIsOpen || n.onMenuOpen();
    }, n.onInputFocus = function(u) {
      n.props.onFocus && n.props.onFocus(u), n.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
    }, n.onInputBlur = function(u) {
      var c = n.props.inputValue;
      if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
        n.inputRef.focus();
        return;
      }
      n.props.onBlur && n.props.onBlur(u), n.onInputChange("", {
        action: "input-blur",
        prevInputValue: c
      }), n.onMenuClose(), n.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, n.onOptionHover = function(u) {
      if (!(n.blockOptionHover || n.state.focusedOption === u)) {
        var c = n.getFocusableOptions(), l = c.indexOf(u);
        n.setState({
          focusedOption: u,
          focusedOptionId: l > -1 ? n.getFocusedOptionId(u) : null
        });
      }
    }, n.shouldHideSelectedOptions = function() {
      return vr(n.props);
    }, n.onValueInputFocus = function(u) {
      u.preventDefault(), u.stopPropagation(), n.focus();
    }, n.onKeyDown = function(u) {
      var c = n.props, l = c.isMulti, d = c.backspaceRemovesValue, m = c.escapeClearsValue, I = c.inputValue, v = c.isClearable, b = c.isDisabled, g = c.menuIsOpen, p = c.onKeyDown, C = c.tabSelectsValue, h = c.openMenuOnFocus, A = n.state, f = A.focusedOption, F = A.focusedValue, y = A.selectValue;
      if (!b && !(typeof p == "function" && (p(u), u.defaultPrevented))) {
        switch (n.blockOptionHover = !0, u.key) {
          case "ArrowLeft":
            if (!l || I)
              return;
            n.focusValue("previous");
            break;
          case "ArrowRight":
            if (!l || I)
              return;
            n.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (I)
              return;
            if (F)
              n.removeValue(F);
            else {
              if (!d)
                return;
              l ? n.popValue() : v && n.clearValue();
            }
            break;
          case "Tab":
            if (n.isComposing || u.shiftKey || !g || !C || !f || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            h && n.isOptionSelected(f, y))
              return;
            n.selectOption(f);
            break;
          case "Enter":
            if (u.keyCode === 229)
              break;
            if (g) {
              if (!f || n.isComposing)
                return;
              n.selectOption(f);
              break;
            }
            return;
          case "Escape":
            g ? (n.setState({
              inputIsHiddenAfterUpdate: !1
            }), n.onInputChange("", {
              action: "menu-close",
              prevInputValue: I
            }), n.onMenuClose()) : v && m && n.clearValue();
            break;
          case " ":
            if (I)
              return;
            if (!g) {
              n.openMenu("first");
              break;
            }
            if (!f)
              return;
            n.selectOption(f);
            break;
          case "ArrowUp":
            g ? n.focusOption("up") : n.openMenu("last");
            break;
          case "ArrowDown":
            g ? n.focusOption("down") : n.openMenu("first");
            break;
          case "PageUp":
            if (!g)
              return;
            n.focusOption("pageup");
            break;
          case "PageDown":
            if (!g)
              return;
            n.focusOption("pagedown");
            break;
          case "Home":
            if (!g)
              return;
            n.focusOption("first");
            break;
          case "End":
            if (!g)
              return;
            n.focusOption("last");
            break;
          default:
            return;
        }
        u.preventDefault();
      }
    }, n.state.instancePrefix = "react-select-" + (n.props.instanceId || ++Zu), n.state.selectValue = sn(i.value), i.menuIsOpen && n.state.selectValue.length) {
      var o = n.getFocusableOptionsWithIds(), a = n.buildFocusableOptions(), s = a.indexOf(n.state.selectValue[0]);
      n.state.focusableOptionsWithIds = o, n.state.focusedOption = a[s], n.state.focusedOptionId = gt(o, a[s]);
    }
    return n;
  }
  return Zr(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && cn(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var o = this.props, a = o.isDisabled, s = o.menuIsOpen, u = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (u && !a && n.isDisabled || // ensure focus is on the Input when the menu opens
      u && s && !n.menuIsOpen) && this.focusInput(), u && a && !n.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !u && !a && n.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (cn(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(n, o) {
      this.props.onInputChange(n, o);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(n) {
      var o = this, a = this.state, s = a.selectValue, u = a.isFocused, c = this.buildFocusableOptions(), l = n === "first" ? 0 : c.length - 1;
      if (!this.props.isMulti) {
        var d = c.indexOf(s[0]);
        d > -1 && (l = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: c[l],
        focusedOptionId: this.getFocusedOptionId(c[l])
      }, function() {
        return o.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(n) {
      var o = this.state, a = o.selectValue, s = o.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var u = a.indexOf(s);
        s || (u = -1);
        var c = a.length - 1, l = -1;
        if (a.length) {
          switch (n) {
            case "previous":
              u === 0 ? l = 0 : u === -1 ? l = c : l = u - 1;
              break;
            case "next":
              u > -1 && u < c && (l = u + 1);
              break;
          }
          this.setState({
            inputIsHidden: l !== -1,
            focusedValue: a[l]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", o = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var u = 0, c = s.indexOf(a);
        a || (c = -1), n === "up" ? u = c > 0 ? c - 1 : s.length - 1 : n === "down" ? u = (c + 1) % s.length : n === "pageup" ? (u = c - o, u < 0 && (u = 0)) : n === "pagedown" ? (u = c + o, u > s.length - 1 && (u = s.length - 1)) : n === "last" && (u = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[u],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(s[u])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(dt) : G(G({}, dt), this.props.theme) : dt;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var n = this.clearValue, o = this.cx, a = this.getStyles, s = this.getClassNames, u = this.getValue, c = this.selectOption, l = this.setValue, d = this.props, m = d.isMulti, I = d.isRtl, v = d.options, b = this.hasValue();
      return {
        clearValue: n,
        cx: o,
        getStyles: a,
        getClassNames: s,
        getValue: u,
        hasValue: b,
        isMulti: m,
        isRtl: I,
        options: v,
        selectOption: c,
        selectProps: d,
        setValue: l,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var n = this.state.selectValue;
      return n.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var n = this.props, o = n.isClearable, a = n.isMulti;
      return o === void 0 ? a : o;
    }
  }, {
    key: "isOptionDisabled",
    value: function(n, o) {
      return pr(this.props, n, o);
    }
  }, {
    key: "isOptionSelected",
    value: function(n, o) {
      return mr(this.props, n, o);
    }
  }, {
    key: "filterOption",
    value: function(n, o) {
      return Ir(this.props, n, o);
    }
  }, {
    key: "formatOptionLabel",
    value: function(n, o) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(n, {
          context: o,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(n);
    }
  }, {
    key: "formatGroupLabel",
    value: function(n) {
      return this.props.formatGroupLabel(n);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var n = this.props, o = n.isDisabled, a = n.isSearchable, s = n.inputId, u = n.inputValue, c = n.tabIndex, l = n.form, d = n.menuIsOpen, m = n.required, I = this.getComponents(), v = I.Input, b = this.state, g = b.inputIsHidden, p = b.ariaSelection, C = this.commonProps, h = s || this.getElementId("input"), A = G(G(G({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": m,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, d && {
          "aria-controls": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (p == null ? void 0 : p.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ V.createElement(v, S({}, C, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: h,
          innerRef: this.getInputRef,
          isDisabled: o,
          isHidden: g,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: c,
          form: l,
          type: "text",
          value: u
        }, A)) : /* @__PURE__ */ V.createElement(au, S({
          id: h,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _e,
          onFocus: this.onInputFocus,
          disabled: o,
          tabIndex: c,
          inputMode: "none",
          form: l,
          value: ""
        }, A));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var n = this, o = this.getComponents(), a = o.MultiValue, s = o.MultiValueContainer, u = o.MultiValueLabel, c = o.MultiValueRemove, l = o.SingleValue, d = o.Placeholder, m = this.commonProps, I = this.props, v = I.controlShouldRenderValue, b = I.isDisabled, g = I.isMulti, p = I.inputValue, C = I.placeholder, h = this.state, A = h.selectValue, f = h.focusedValue, F = h.isFocused;
      if (!this.hasValue() || !v)
        return p ? null : /* @__PURE__ */ V.createElement(d, S({}, m, {
          key: "placeholder",
          isDisabled: b,
          isFocused: F,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), C);
      if (g)
        return A.map(function(B, T) {
          var L = B === f, k = "".concat(n.getOptionLabel(B), "-").concat(n.getOptionValue(B));
          return /* @__PURE__ */ V.createElement(a, S({}, m, {
            components: {
              Container: s,
              Label: u,
              Remove: c
            },
            isFocused: L,
            isDisabled: b,
            key: k,
            index: T,
            removeProps: {
              onClick: function() {
                return n.removeValue(B);
              },
              onTouchEnd: function() {
                return n.removeValue(B);
              },
              onMouseDown: function(K) {
                K.preventDefault();
              }
            },
            data: B
          }), n.formatOptionLabel(B, "value"));
        });
      if (p)
        return null;
      var y = A[0];
      return /* @__PURE__ */ V.createElement(l, S({}, m, {
        data: y,
        isDisabled: b
      }), this.formatOptionLabel(y, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var n = this.getComponents(), o = n.ClearIndicator, a = this.commonProps, s = this.props, u = s.isDisabled, c = s.isLoading, l = this.state.isFocused;
      if (!this.isClearable() || !o || u || !this.hasValue() || c)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ V.createElement(o, S({}, a, {
        innerProps: d,
        isFocused: l
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var n = this.getComponents(), o = n.LoadingIndicator, a = this.commonProps, s = this.props, u = s.isDisabled, c = s.isLoading, l = this.state.isFocused;
      if (!o || !c)
        return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ V.createElement(o, S({}, a, {
        innerProps: d,
        isDisabled: u,
        isFocused: l
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var n = this.getComponents(), o = n.DropdownIndicator, a = n.IndicatorSeparator;
      if (!o || !a)
        return null;
      var s = this.commonProps, u = this.props.isDisabled, c = this.state.isFocused;
      return /* @__PURE__ */ V.createElement(a, S({}, s, {
        isDisabled: u,
        isFocused: c
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var n = this.getComponents(), o = n.DropdownIndicator;
      if (!o)
        return null;
      var a = this.commonProps, s = this.props.isDisabled, u = this.state.isFocused, c = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ V.createElement(o, S({}, a, {
        innerProps: c,
        isDisabled: s,
        isFocused: u
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var n = this, o = this.getComponents(), a = o.Group, s = o.GroupHeading, u = o.Menu, c = o.MenuList, l = o.MenuPortal, d = o.LoadingMessage, m = o.NoOptionsMessage, I = o.Option, v = this.commonProps, b = this.state.focusedOption, g = this.props, p = g.captureMenuScroll, C = g.inputValue, h = g.isLoading, A = g.loadingMessage, f = g.minMenuHeight, F = g.maxMenuHeight, y = g.menuIsOpen, B = g.menuPlacement, T = g.menuPosition, L = g.menuPortalTarget, k = g.menuShouldBlockScroll, M = g.menuShouldScrollIntoView, K = g.noOptionsMessage, q = g.onMenuScrollToTop, D = g.onMenuScrollToBottom;
      if (!y)
        return null;
      var Z = function(z, te) {
        var ae = z.type, Q = z.data, ue = z.isDisabled, ne = z.isSelected, Ie = z.label, it = z.value, We = b === Q, x = ue ? void 0 : function() {
          return n.onOptionHover(Q);
        }, xe = ue ? void 0 : function() {
          return n.selectOption(Q);
        }, be = "".concat(n.getElementId("option"), "-").concat(te), Te = {
          id: be,
          onClick: xe,
          onMouseMove: x,
          onMouseOver: x,
          tabIndex: -1,
          role: "option",
          "aria-selected": n.isAppleDevice ? void 0 : ne
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ V.createElement(I, S({}, v, {
          innerProps: Te,
          data: Q,
          isDisabled: ue,
          isSelected: ne,
          key: be,
          label: Ie,
          type: ae,
          value: it,
          isFocused: We,
          innerRef: We ? n.getFocusedOptionRef : void 0
        }), n.formatOptionLabel(z.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(P) {
          if (P.type === "group") {
            var z = P.data, te = P.options, ae = P.index, Q = "".concat(n.getElementId("group"), "-").concat(ae), ue = "".concat(Q, "-heading");
            return /* @__PURE__ */ V.createElement(a, S({}, v, {
              key: Q,
              data: z,
              options: te,
              Heading: s,
              headingProps: {
                id: ue,
                data: P.data
              },
              label: n.formatGroupLabel(P.data)
            }), P.options.map(function(ne) {
              return Z(ne, "".concat(ae, "-").concat(ne.index));
            }));
          } else if (P.type === "option")
            return Z(P, "".concat(P.index));
        });
      else if (h) {
        var J = A({
          inputValue: C
        });
        if (J === null)
          return null;
        $ = /* @__PURE__ */ V.createElement(d, v, J);
      } else {
        var oe = K({
          inputValue: C
        });
        if (oe === null)
          return null;
        $ = /* @__PURE__ */ V.createElement(m, v, oe);
      }
      var ee = {
        minMenuHeight: f,
        maxMenuHeight: F,
        menuPlacement: B,
        menuPosition: T,
        menuShouldScrollIntoView: M
      }, me = /* @__PURE__ */ V.createElement(Zo, S({}, v, ee), function(P) {
        var z = P.ref, te = P.placerProps, ae = te.placement, Q = te.maxHeight;
        return /* @__PURE__ */ V.createElement(u, S({}, v, ee, {
          innerRef: z,
          innerProps: {
            onMouseDown: n.onMenuMouseDown,
            onMouseMove: n.onMenuMouseMove
          },
          isLoading: h,
          placement: ae
        }), /* @__PURE__ */ V.createElement(bu, {
          captureEnabled: p,
          onTopArrive: q,
          onBottomArrive: D,
          lockEnabled: k
        }, function(ue) {
          return /* @__PURE__ */ V.createElement(c, S({}, v, {
            innerRef: function(Ie) {
              n.getMenuListRef(Ie), ue(Ie);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": v.isMulti,
              id: n.getElementId("listbox")
            },
            isLoading: h,
            maxHeight: Q,
            focusedOption: b
          }), $);
        }));
      });
      return L || T === "fixed" ? /* @__PURE__ */ V.createElement(l, S({}, v, {
        appendTo: L,
        controlElement: this.controlRef,
        menuPlacement: B,
        menuPosition: T
      }), me) : me;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var n = this, o = this.props, a = o.delimiter, s = o.isDisabled, u = o.isMulti, c = o.name, l = o.required, d = this.state.selectValue;
      if (l && !this.hasValue() && !s)
        return /* @__PURE__ */ V.createElement(Iu, {
          name: c,
          onFocus: this.onValueInputFocus
        });
      if (!(!c || s))
        if (u)
          if (a) {
            var m = d.map(function(b) {
              return n.getOptionValue(b);
            }).join(a);
            return /* @__PURE__ */ V.createElement("input", {
              name: c,
              type: "hidden",
              value: m
            });
          } else {
            var I = d.length > 0 ? d.map(function(b, g) {
              return /* @__PURE__ */ V.createElement("input", {
                key: "i-".concat(g),
                name: c,
                type: "hidden",
                value: n.getOptionValue(b)
              });
            }) : /* @__PURE__ */ V.createElement("input", {
              name: c,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ V.createElement("div", null, I);
          }
        else {
          var v = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ V.createElement("input", {
            name: c,
            type: "hidden",
            value: v
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var n = this.commonProps, o = this.state, a = o.ariaSelection, s = o.focusedOption, u = o.focusedValue, c = o.isFocused, l = o.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ V.createElement(eu, S({}, n, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: u,
        isFocused: c,
        selectValue: l,
        focusableOptions: d,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.getComponents(), o = n.Control, a = n.IndicatorsContainer, s = n.SelectContainer, u = n.ValueContainer, c = this.props, l = c.className, d = c.id, m = c.isDisabled, I = c.menuIsOpen, v = this.state.isFocused, b = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ V.createElement(s, S({}, b, {
        className: l,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: m,
        isFocused: v
      }), this.renderLiveRegion(), /* @__PURE__ */ V.createElement(o, S({}, b, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: m,
        isFocused: v,
        menuIsOpen: I
      }), /* @__PURE__ */ V.createElement(u, S({}, b, {
        isDisabled: m
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ V.createElement(a, S({}, b, {
        isDisabled: m
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, o) {
      var a = o.prevProps, s = o.clearFocusValueOnUpdate, u = o.inputIsHiddenAfterUpdate, c = o.ariaSelection, l = o.isFocused, d = o.prevWasFocused, m = o.instancePrefix, I = n.options, v = n.value, b = n.menuIsOpen, g = n.inputValue, p = n.isMulti, C = sn(v), h = {};
      if (a && (v !== a.value || I !== a.options || b !== a.menuIsOpen || g !== a.inputValue)) {
        var A = b ? Wu(n, C) : [], f = b ? xn(ke(n, C), "".concat(m, "-option")) : [], F = s ? Tu(o, C) : null, y = Xu(o, A), B = gt(f, y);
        h = {
          selectValue: C,
          focusedOption: y,
          focusedOptionId: B,
          focusableOptionsWithIds: f,
          focusedValue: F,
          clearFocusValueOnUpdate: !1
        };
      }
      var T = u != null && n !== a ? {
        inputIsHidden: u,
        inputIsHiddenAfterUpdate: void 0
      } : {}, L = c, k = l && d;
      return l && !k && (L = {
        value: Oe(p, C, C[0] || null),
        options: C,
        action: "initial-input-focus"
      }, k = !d), (c == null ? void 0 : c.action) === "initial-input-focus" && (L = null), G(G(G({}, h), T), {}, {
        prevProps: n,
        ariaSelection: L,
        prevWasFocused: k
      });
    }
  }]), r;
}(Gr);
hr.defaultProps = Ru;
var Pu = /* @__PURE__ */ Gn(function(t, e) {
  var r = Tr(t);
  return /* @__PURE__ */ V.createElement(hr, S({
    ref: e
  }, r));
}), Du = Pu;
function Ju({
  label: t,
  options: e,
  placeholder: r,
  disabled: i,
  isMulti: n = !1,
  width: o
}) {
  return /* @__PURE__ */ Cr("div", { className: `w-${o ?? "full"}`, children: [
    /* @__PURE__ */ Ee("p", { className: "text-sm font-medium", children: t }),
    /* @__PURE__ */ Ee(
      Du,
      {
        isMulti: n,
        isDisabled: i,
        placeholder: r,
        options: e,
        className: "text-sm border rounded-sm cursor-pointer",
        noOptionsMessage: () => "Nenhuma opção encontrada",
        components: {
          ClearIndicator: (a) => /* @__PURE__ */ Ee(
            "div",
            {
              ...a,
              onMouseDown: (s) => {
                a.clearValue(), s.preventDefault(), s.stopPropagation();
              },
              children: /* @__PURE__ */ Ee(yr, { size: 15, color: "#444" })
            }
          ),
          DropdownIndicator: () => /* @__PURE__ */ Ee(Ar, { size: 18, color: "#777" })
          // Use o novo ícone
        },
        styles: {
          control: (a, s) => ({
            display: "flex",
            width: "100%",
            borderColor: s.isFocused ? Sr.primary : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
            paddingLeft: 4,
            paddingRight: 4
          }),
          input: (a) => ({
            ...a,
            margin: 0
          }),
          multiValue: (a) => ({
            ...a,
            // marginRight: 2,
            padding: 0
            // background: "blue",
          }),
          multiValueLabel: (a) => ({
            ...a,
            margin: 0
            // background: "red",
          }),
          multiValueRemove: (a) => ({
            ...a,
            padding: 0,
            margin: 0,
            display: "flex",
            "&:hover": {
              backgroundColor: "#ecf0f1"
            }
            // height: 10,
            // background: "yellow",
          }),
          indicatorsContainer: (a) => ({
            ...a,
            // background: "#491",
            padding: 0,
            height: 26
          }),
          container: (a) => ({
            ...a,
            // background: "pink",
            margin: 0,
            padding: 0
          }),
          group: (a) => ({
            ...a,
            // background: "purple",
            margin: 0,
            padding: 0
          }),
          valueContainer: (a) => ({
            ...a,
            // background: "#888",
            padding: 0,
            margin: 0,
            height: "auto"
          }),
          menu: (a) => ({
            ...a,
            overflowY: "auto"
          }),
          option: (a, s) => ({
            ...a,
            padding: 0,
            paddingLeft: 10,
            paddingTop: 3,
            paddingBottom: 3,
            cursor: "pointer",
            // background: "blue",
            backgroundColor: s.isFocused ? "#ecf0f1" : "transparent",
            color: "#4a5568",
            "&:hover": {
              backgroundColor: "#ecf0f1"
            }
          }),
          indicatorSeparator: (a) => ({
            ...a,
            padding: 0,
            marginRight: 5,
            marginLeft: 5
          }),
          dropdownIndicator: (a) => ({
            ...a
          }),
          clearIndicator: (a) => ({
            ...a,
            marginRight: 10,
            // background: "#727",
            // height: 20,
            fontSize: 10
            // width: 10,
            // display: "flex",
            // justifyContent:""
          }),
          menuList: (a) => ({
            ...a
            // background: "red",
          }),
          singleValue: (a) => ({
            ...a,
            fontSize: "12px"
          })
        }
      }
    )
  ] });
}
export {
  Ju as Select
};
