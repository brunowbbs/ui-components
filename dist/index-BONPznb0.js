import ye, { forwardRef as $e, useMemo as Ge, useState as we, useRef as Ze, useImperativeHandle as He, useEffect as Fe } from "react";
import { r as _e, g as Je } from "./index-DBw-Vlhv.js";
var L = function() {
  return L = Object.assign || function(u) {
    for (var f, d = 1, D = arguments.length; d < D; d++) {
      f = arguments[d];
      for (var k in f)
        Object.prototype.hasOwnProperty.call(f, k) && (u[k] = f[k]);
    }
    return u;
  }, L.apply(this, arguments);
};
function Qe(o, u) {
  var f = {};
  for (var d in o)
    Object.prototype.hasOwnProperty.call(o, d) && u.indexOf(d) < 0 && (f[d] = o[d]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var D = 0, d = Object.getOwnPropertySymbols(o); D < d.length; D++)
      u.indexOf(d[D]) < 0 && Object.prototype.propertyIsEnumerable.call(o, d[D]) && (f[d[D]] = o[d[D]]);
  return f;
}
function te(o, u, f) {
  if (f || arguments.length === 2)
    for (var d = 0, D = u.length, k; d < D; d++)
      (k || !(d in u)) && (k || (k = Array.prototype.slice.call(u, 0, d)), k[d] = u[d]);
  return o.concat(k || Array.prototype.slice.call(u));
}
var ve = function(o) {
  return o.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, en = { k: 1e3, m: 1e6, b: 1e9 }, nn = function(o, u) {
  u === void 0 && (u = ".");
  var f = new RegExp("(\\d+(".concat(ve(u), "\\d*)?)([kmb])$"), "i"), d = o.match(f);
  if (d) {
    var D = d[1], k = d[3], S = en[k.toLowerCase()];
    return Number(D.replace(u, ".")) * S;
  }
}, tn = function(o, u) {
  u === void 0 && (u = ",");
  var f = new RegExp(ve(u), "g");
  return o.replace(f, "");
}, rn = function(o, u) {
  var f = ve(u.join("")), d = new RegExp("[^\\d".concat(f, "]"), "gi");
  return o.replace(d, "");
}, Ee = function(o) {
  var u = o.value, f = o.groupSeparator, d = f === void 0 ? "," : f, D = o.decimalSeparator, k = D === void 0 ? "." : D, S = o.allowDecimals, I = S === void 0 ? !0 : S, R = o.decimalsLimit, N = R === void 0 ? 2 : R, T = o.allowNegativeValue, j = T === void 0 ? !0 : T, q = o.disableAbbreviations, ue = q === void 0 ? !1 : q, B = o.prefix, E = B === void 0 ? "" : B, P = o.transformRawValue, ee = P === void 0 ? function(r) {
    return r;
  } : P, _ = ee(u);
  if (_ === "-")
    return _;
  var G = ue ? [] : ["k", "m", "b"], A = new RegExp("((^|\\D)-\\d)|(-".concat(ve(E), ")")), me = A.test(_), Z = RegExp("(\\d+)-?".concat(ve(E))).exec(u) || [], re = Z[0], he = Z[1], Y = E ? re ? _.replace(re, "").concat(he) : _.replace(E, "") : _, ae = tn(Y, d), le = rn(ae, te([
    d,
    k
  ], G, !0)), ce = le;
  if (!ue) {
    if (G.some(function(r) {
      return r === le.toLowerCase().replace(k, "");
    }))
      return "";
    var O = nn(le, k);
    O && (ce = String(O));
  }
  var fe = me && j ? "-" : "";
  if (k && ce.includes(k)) {
    var oe = le.split(k), pe = oe[0], H = oe[1], de = N && H ? H.slice(0, N) : H, n = I ? "".concat(k).concat(de) : "";
    return "".concat(fe).concat(pe).concat(n);
  }
  return "".concat(fe).concat(ce);
}, an = function(o, u, f) {
  if (f !== void 0 && o.length > 1) {
    if (f === 0)
      return o.replace(u, "");
    if (o.includes(u)) {
      var d = o.split(u), D = d[0], k = d[1];
      if (k.length === f)
        return o;
      if (k.length > f)
        return "".concat(D).concat(u).concat(k.slice(0, f));
    }
    var S = o.length > f ? new RegExp("(\\d+)(\\d{".concat(f, "})")) : new RegExp("(\\d)(\\d+)"), I = o.match(S);
    if (I) {
      var D = I[1], k = I[2];
      return "".concat(D).concat(u).concat(k);
    }
  }
  return o;
}, je = function(o, u) {
  var f = u.groupSeparator, d = f === void 0 ? "," : f, D = u.decimalSeparator, k = D === void 0 ? "." : D, S = new RegExp("\\d([^".concat(ve(d)).concat(ve(k), "0-9]+)")), I = o.match(S);
  return I ? I[1] : void 0;
}, ke = function(o) {
  var u = o.value, f = o.decimalSeparator, d = o.intlConfig, D = o.decimalScale, k = o.prefix, S = k === void 0 ? "" : k, I = o.suffix, R = I === void 0 ? "" : I;
  if (u === "" || u === void 0)
    return "";
  if (u === "-")
    return "-";
  var N = new RegExp("^\\d?-".concat(S ? "".concat(ve(S), "?") : "", "\\d")).test(u), T = f !== "." ? on(u, f, N) : u;
  f && f !== "-" && T.startsWith(f) && (T = "0" + T);
  var j = {
    minimumFractionDigits: D || 0,
    maximumFractionDigits: 20
  }, q = d ? new Intl.NumberFormat(d.locale, d.currency ? L(L({}, j), { style: "currency", currency: d.currency }) : j) : new Intl.NumberFormat(void 0, j), ue = q.formatToParts(Number(T)), B = sn(ue, o), E = je(B, L({}, o)), P = u.slice(-1) === f ? f : "", ee = T.match(RegExp("\\d+\\.(\\d+)")) || [], _ = ee[1];
  return D === void 0 && _ && f && (B.includes(f) ? B = B.replace(RegExp("(\\d+)(".concat(ve(f), ")(\\d+)"), "g"), "$1$2".concat(_)) : E && !R ? B = B.replace(E, "".concat(f).concat(_).concat(E)) : B = "".concat(B).concat(f).concat(_)), R && P ? "".concat(B).concat(P).concat(R) : E && P ? B.replace(E, "".concat(P).concat(E)) : E && R ? B.replace(E, "".concat(P).concat(R)) : [B, P, R].join("");
}, on = function(o, u, f) {
  var d = o;
  return u && u !== "." && (d = d.replace(RegExp(ve(u), "g"), "."), f && u === "-" && (d = "-".concat(d.slice(1)))), d;
}, sn = function(o, u) {
  var f = u.prefix, d = u.groupSeparator, D = u.decimalSeparator, k = u.decimalScale, S = u.disableGroupSeparators, I = S === void 0 ? !1 : S;
  return o.reduce(function(R, N, T) {
    var j = N.type, q = N.value;
    return T === 0 && f ? j === "minusSign" ? [q, f] : j === "currency" ? te(te([], R, !0), [f], !1) : [f, q] : j === "currency" ? f ? R : te(te([], R, !0), [q], !1) : j === "group" ? I ? R : te(te([], R, !0), [d !== void 0 ? d : q], !1) : j === "decimal" ? k !== void 0 && k === 0 ? R : te(te([], R, !0), [D !== void 0 ? D : q], !1) : j === "fraction" ? te(te([], R, !0), [k !== void 0 ? q.slice(0, k) : q], !1) : te(te([], R, !0), [q], !1);
  }, [""]).join("");
}, ln = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
}, un = function(o) {
  var u = o || {}, f = u.locale, d = u.currency, D = f ? new Intl.NumberFormat(f, d ? { currency: d, style: "currency" } : void 0) : new Intl.NumberFormat();
  return D.formatToParts(1000.1).reduce(function(k, S, I) {
    return S.type === "currency" ? I === 0 ? L(L({}, k), { currencySymbol: S.value, prefix: S.value }) : L(L({}, k), { currencySymbol: S.value, suffix: S.value }) : S.type === "group" ? L(L({}, k), { groupSeparator: S.value }) : S.type === "decimal" ? L(L({}, k), { decimalSeparator: S.value }) : k;
  }, ln);
}, Ne = function(o) {
  return RegExp(/\d/, "gi").test(o);
}, cn = function(o, u, f) {
  if (u === void 0 && (u = "."), f === void 0 || o === "" || o === void 0)
    return o;
  if (!o.match(/\d/g))
    return "";
  var d = o.split(u), D = d[0], k = d[1];
  if (f === 0)
    return D;
  var S = k || "";
  if (S.length < f)
    for (; S.length < f; )
      S += "0";
  else
    S = S.slice(0, f);
  return "".concat(D).concat(u).concat(S);
}, fn = function(o) {
  var u = o.selectionStart, f = o.value, d = o.lastKeyStroke, D = o.stateValue, k = o.groupSeparator, S = u, I = f;
  if (D && S) {
    var R = f.split("");
    return d === "Backspace" && D[S] === k && (R.splice(S - 1, 1), S -= 1), d === "Delete" && D[S] === k && (R.splice(S, 1), S += 1), I = R.join(""), { modifiedValue: I, cursorPosition: S };
  }
  return { modifiedValue: I, cursorPosition: u };
}, pn = $e(function(o, u) {
  var f = o.allowDecimals, d = f === void 0 ? !0 : f, D = o.allowNegativeValue, k = D === void 0 ? !0 : D, S = o.id, I = o.name, R = o.className, N = o.customInput, T = o.decimalsLimit, j = o.defaultValue, q = o.disabled, ue = q === void 0 ? !1 : q, B = o.maxLength, E = o.value, P = o.onValueChange, ee = o.fixedDecimalLength, _ = o.placeholder, G = o.decimalScale, A = o.prefix, me = o.suffix, Z = o.intlConfig, re = o.step, he = o.min, Y = o.max, ae = o.disableGroupSeparators, le = ae === void 0 ? !1 : ae, ce = o.disableAbbreviations, O = ce === void 0 ? !1 : ce, fe = o.decimalSeparator, oe = o.groupSeparator, pe = o.onChange, H = o.onFocus, de = o.onBlur, n = o.onKeyDown, r = o.onKeyUp, a = o.transformRawValue, t = o.formatValueOnBlur, e = t === void 0 ? !0 : t, i = Qe(o, ["allowDecimals", "allowNegativeValue", "id", "name", "className", "customInput", "decimalsLimit", "defaultValue", "disabled", "maxLength", "value", "onValueChange", "fixedDecimalLength", "placeholder", "decimalScale", "prefix", "suffix", "intlConfig", "step", "min", "max", "disableGroupSeparators", "disableAbbreviations", "decimalSeparator", "groupSeparator", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "transformRawValue", "formatValueOnBlur"]);
  if (fe && Ne(fe))
    throw new Error("decimalSeparator cannot be a number");
  if (oe && Ne(oe))
    throw new Error("groupSeparator cannot be a number");
  var w = Ge(function() {
    return un(Z);
  }, [Z]), C = fe || w.decimalSeparator || "", c = oe || w.groupSeparator || "";
  if (C && c && C === c && le === !1)
    throw new Error("decimalSeparator cannot be the same as groupSeparator");
  var v = {
    decimalSeparator: C,
    groupSeparator: c,
    disableGroupSeparators: le,
    intlConfig: Z,
    prefix: A || w.prefix,
    suffix: me
  }, m = {
    decimalSeparator: C,
    groupSeparator: c,
    allowDecimals: d,
    decimalsLimit: T || ee || 2,
    allowNegativeValue: k,
    disableAbbreviations: O,
    prefix: A || w.prefix,
    transformRawValue: a
  }, g = we(function() {
    return j != null ? ke(L(L({}, v), { decimalScale: G, value: String(j) })) : E != null ? ke(L(L({}, v), { decimalScale: G, value: String(E) })) : "";
  }), l = g[0], V = g[1], p = we(!1), s = p[0], h = p[1], b = we(0), y = b[0], M = b[1], x = we(0), F = x[0], W = x[1], U = we(null), X = U[0], ie = U[1], z = Ze(null);
  He(u, function() {
    return z.current;
  });
  var ge = function(K, J) {
    h(!0);
    var $ = fn({
      selectionStart: J,
      value: K,
      lastKeyStroke: X,
      stateValue: l,
      groupSeparator: c
    }), Q = $.modifiedValue, ne = $.cursorPosition, se = Ee(L({ value: Q }, m));
    if (!(B && se.replace(/-/g, "").length > B)) {
      if (se === "" || se === "-" || se === C) {
        P && P(void 0, I, { float: null, formatted: "", value: "" }), V(se), M(1);
        return;
      }
      var Ce = C ? se.replace(C, ".") : se, Xe = parseFloat(Ce), De = ke(L({ value: se }, v));
      if (ne != null) {
        var be = ne + (De.length - K.length);
        be = be <= 0 ? A ? A.length : 0 : be, M(be), W(F + 1);
      }
      if (V(De), P) {
        var Ye = {
          float: Xe,
          formatted: De,
          value: se
        };
        P(se, I, Ye);
      }
    }
  }, Se = function(K) {
    var J = K.target, $ = J.value, Q = J.selectionStart;
    ge($, Q), pe && pe(K);
  }, Te = function(K) {
    return H && H(K), l ? l.length : 0;
  }, Ue = function(K) {
    var J = K.target.value, $ = Ee(L({ value: J }, m));
    if ($ === "-" || $ === C || !$) {
      V(""), de && de(K);
      return;
    }
    var Q = an($, C, ee), ne = cn(Q, C, G !== void 0 ? G : ee), se = parseFloat(ne.replace(C, ".")), Ce = ke(L(L({}, v), { value: ne }));
    P && e && P(ne, I, {
      float: se,
      formatted: Ce,
      value: ne
    }), V(Ce), de && de(K);
  }, qe = function(K) {
    var J = K.key;
    if (ie(J), re && (J === "ArrowUp" || J === "ArrowDown")) {
      K.preventDefault(), M(l.length);
      var $ = parseFloat(E != null ? String(E).replace(C, ".") : Ee(L({ value: l }, m))) || 0, Q = J === "ArrowUp" ? $ + re : $ - re;
      if (he !== void 0 && Q < Number(he) || Y !== void 0 && Q > Number(Y))
        return;
      var ne = String(re).includes(".") ? Number(String(re).split(".")[1].length) : void 0;
      ge(String(ne ? Q.toFixed(ne) : Q).replace(".", C));
    }
    n && n(K);
  }, We = function(K) {
    var J = K.key, $ = K.currentTarget.selectionStart;
    if (J !== "ArrowUp" && J !== "ArrowDown" && l !== "-") {
      var Q = je(l, { groupSeparator: c, decimalSeparator: C });
      if (Q && $ && $ > l.length - Q.length && z.current) {
        var ne = l.length - Q.length;
        z.current.setSelectionRange(ne, ne);
      }
    }
    r && r(K);
  };
  Fe(function() {
    E == null && j == null && V("");
  }, [j, E]), Fe(function() {
    s && l !== "-" && z.current && document.activeElement === z.current && z.current.setSelectionRange(y, y);
  }, [l, y, z, s, F]);
  var Ke = function() {
    return E != null && l !== "-" && (!C || l !== C) ? ke(L(L({}, v), { decimalScale: s ? void 0 : G, value: String(E) })) : l;
  }, Re = L({ type: "text", inputMode: "decimal", id: S, name: I, className: R, onChange: Se, onBlur: Ue, onFocus: Te, onKeyDown: qe, onKeyUp: We, placeholder: _, disabled: ue, value: Ke(), ref: z }, i);
  if (N) {
    var ze = N;
    return ye.createElement(ze, L({}, Re));
  }
  return ye.createElement("input", L({}, Re));
});
pn.displayName = "CurrencyInput";
var Oe = { exports: {} }, Ie, Le;
function dn() {
  if (Le)
    return Ie;
  Le = 1;
  function o(n) {
    return n && typeof n == "object" && "default" in n ? n.default : n;
  }
  var u = o(ye), f = _e;
  function d(n, r) {
    for (var a = Object.getOwnPropertyNames(r), t = 0; t < a.length; t++) {
      var e = a[t], i = Object.getOwnPropertyDescriptor(r, e);
      i && i.configurable && n[e] === void 0 && Object.defineProperty(n, e, i);
    }
    return n;
  }
  function D() {
    return (D = Object.assign || function(n) {
      for (var r = 1; r < arguments.length; r++) {
        var a = arguments[r];
        for (var t in a)
          Object.prototype.hasOwnProperty.call(a, t) && (n[t] = a[t]);
      }
      return n;
    }).apply(this, arguments);
  }
  function k(n, r) {
    n.prototype = Object.create(r.prototype), d(n.prototype.constructor = n, r);
  }
  function S(n, r) {
    if (n == null)
      return {};
    var a, t, e = {}, i = Object.keys(n);
    for (t = 0; t < i.length; t++)
      a = i[t], 0 <= r.indexOf(a) || (e[a] = n[a]);
    return e;
  }
  function I(n) {
    if (n === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }
  var R = function(n, r, a, t, e, i, w, C) {
    if (!n) {
      var c;
      if (r === void 0)
        c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var v = [a, t, e, i, w, C], m = 0;
        (c = new Error(r.replace(/%s/g, function() {
          return v[m++];
        }))).name = "Invariant Violation";
      }
      throw c.framesToPop = 1, c;
    }
  }, N = R;
  function T(n, r, a) {
    if ("selectionStart" in n && "selectionEnd" in n)
      n.selectionStart = r, n.selectionEnd = a;
    else {
      var t = n.createTextRange();
      t.collapse(!0), t.moveStart("character", r), t.moveEnd("character", a - r), t.select();
    }
  }
  function j(n) {
    var r = 0, a = 0;
    if ("selectionStart" in n && "selectionEnd" in n)
      r = n.selectionStart, a = n.selectionEnd;
    else {
      var t = document.selection.createRange();
      t.parentElement() === n && (r = -t.moveStart("character", -n.value.length), a = -t.moveEnd("character", -n.value.length));
    }
    return { start: r, end: a, length: a - r };
  }
  var q = { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, ue = "_";
  function B(n, r, a) {
    var t = "", e = "", i = null, w = [];
    if (r === void 0 && (r = ue), a == null && (a = q), !n || typeof n != "string")
      return { maskChar: r, formatChars: a, mask: null, prefix: null, lastEditablePosition: null, permanents: [] };
    var C = !1;
    return n.split("").forEach(function(c) {
      C = !C && c === "\\" || (C || !a[c] ? (w.push(t.length), t.length === w.length - 1 && (e += c)) : i = t.length + 1, t += c, !1);
    }), { maskChar: r, formatChars: a, prefix: e, mask: t, lastEditablePosition: i, permanents: w };
  }
  function E(n, r) {
    return n.permanents.indexOf(r) !== -1;
  }
  function P(n, r, a) {
    var t = n.mask, e = n.formatChars;
    if (!a)
      return !1;
    if (E(n, r))
      return t[r] === a;
    var i = e[t[r]];
    return new RegExp(i).test(a);
  }
  function ee(n, r) {
    return r.split("").every(function(a, t) {
      return E(n, t) || !P(n, t, a);
    });
  }
  function _(n, r) {
    var a = n.maskChar, t = n.prefix;
    if (!a) {
      for (; r.length > t.length && E(n, r.length - 1); )
        r = r.slice(0, r.length - 1);
      return r.length;
    }
    for (var e = t.length, i = r.length; i >= t.length; i--) {
      var w = r[i];
      if (!E(n, i) && P(n, i, w)) {
        e = i + 1;
        break;
      }
    }
    return e;
  }
  function G(n, r) {
    return _(n, r) === n.mask.length;
  }
  function A(n, r) {
    var a = n.maskChar, t = n.mask, e = n.prefix;
    if (!a) {
      for ((r = Z(n, "", r, 0)).length < e.length && (r = e); r.length < t.length && E(n, r.length); )
        r += t[r.length];
      return r;
    }
    if (r)
      return Z(n, A(n, ""), r, 0);
    for (var i = 0; i < t.length; i++)
      E(n, i) ? r += t[i] : r += a;
    return r;
  }
  function me(n, r, a, t) {
    var e = a + t, i = n.maskChar, w = n.mask, C = n.prefix, c = r.split("");
    if (i)
      return c.map(function(m, g) {
        return g < a || e <= g ? m : E(n, g) ? w[g] : i;
      }).join("");
    for (var v = e; v < c.length; v++)
      E(n, v) && (c[v] = "");
    return a = Math.max(C.length, a), c.splice(a, e - a), r = c.join(""), A(n, r);
  }
  function Z(n, r, a, t) {
    var e = n.mask, i = n.maskChar, w = n.prefix, C = a.split(""), c = G(n, r);
    return !i && t > r.length && (r += e.slice(r.length, t)), C.every(function(v) {
      for (; V = v, E(n, l = t) && V !== e[l]; ) {
        if (t >= r.length && (r += e[t]), m = v, g = t, i && E(n, g) && m === i)
          return !0;
        if (++t >= e.length)
          return !1;
      }
      var m, g, l, V;
      return !P(n, t, v) && v !== i || (t < r.length ? r = i || c || t < w.length ? r.slice(0, t) + v + r.slice(t + 1) : (r = r.slice(0, t) + v + r.slice(t), A(n, r)) : i || (r += v), ++t < e.length);
    }), r;
  }
  function re(n, r, a, t) {
    var e = n.mask, i = n.maskChar, w = a.split(""), C = t;
    return w.every(function(c) {
      for (; m = c, E(n, v = t) && m !== e[v]; )
        if (++t >= e.length)
          return !1;
      var v, m;
      return (P(n, t, c) || c === i) && t++, t < e.length;
    }), t - C;
  }
  function he(n, r) {
    for (var a = r; 0 <= a; --a)
      if (!E(n, a))
        return a;
    return null;
  }
  function Y(n, r) {
    for (var a = n.mask, t = r; t < a.length; ++t)
      if (!E(n, t))
        return t;
    return null;
  }
  function ae(n) {
    return n || n === 0 ? n + "" : "";
  }
  function le(n, r, a, t, e) {
    var i = n.mask, w = n.prefix, C = n.lastEditablePosition, c = r, v = "", m = 0, g = 0, l = Math.min(e.start, a.start);
    return a.end > e.start ? g = (m = re(n, t, v = c.slice(e.start, a.end), l)) ? e.length : 0 : c.length < t.length && (g = t.length - c.length), c = t, g && (g === 1 && !e.length && (l = e.start === a.start ? Y(n, a.start) : he(n, a.start)), c = me(n, c, l, g)), c = Z(n, c, v, l), (l += m) >= i.length ? l = i.length : l < w.length && !m ? l = w.length : l >= w.length && l < C && m && (l = Y(n, l)), v || (v = null), { value: c = A(n, c), enteredString: v, selection: { start: l, end: l } };
  }
  function ce() {
    var n = new RegExp("windows", "i"), r = new RegExp("phone", "i"), a = navigator.userAgent;
    return n.test(a) && r.test(a);
  }
  function O(n) {
    return typeof n == "function";
  }
  function fe() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  }
  function oe() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  }
  function pe(n) {
    return (oe() ? fe() : function() {
      return setTimeout(n, 1e3 / 60);
    })(n);
  }
  function H(n) {
    (oe() || clearTimeout)(n);
  }
  var de = function(n) {
    function r(t) {
      var e = n.call(this, t) || this;
      e.focused = !1, e.mounted = !1, e.previousSelection = null, e.selectionDeferId = null, e.saveSelectionLoopDeferId = null, e.saveSelectionLoop = function() {
        e.previousSelection = e.getSelection(), e.saveSelectionLoopDeferId = pe(e.saveSelectionLoop);
      }, e.runSaveSelectionLoop = function() {
        e.saveSelectionLoopDeferId === null && e.saveSelectionLoop();
      }, e.stopSaveSelectionLoop = function() {
        e.saveSelectionLoopDeferId !== null && (H(e.saveSelectionLoopDeferId), e.saveSelectionLoopDeferId = null, e.previousSelection = null);
      }, e.getInputDOMNode = function() {
        if (!e.mounted)
          return null;
        var p = f.findDOMNode(I(I(e))), s = typeof window < "u" && p instanceof window.Element;
        if (p && !s)
          return null;
        if (p.nodeName !== "INPUT" && (p = p.querySelector("input")), !p)
          throw new Error("react-input-mask: inputComponent doesn't contain input node");
        return p;
      }, e.getInputValue = function() {
        var p = e.getInputDOMNode();
        return p ? p.value : null;
      }, e.setInputValue = function(p) {
        var s = e.getInputDOMNode();
        s && (e.value = p, s.value = p);
      }, e.setCursorToEnd = function() {
        var p = _(e.maskOptions, e.value), s = Y(e.maskOptions, p);
        s !== null && e.setCursorPosition(s);
      }, e.setSelection = function(p, s, h) {
        h === void 0 && (h = {});
        var b = e.getInputDOMNode(), y = e.isFocused();
        b && y && (h.deferred || T(b, p, s), e.selectionDeferId !== null && H(e.selectionDeferId), e.selectionDeferId = pe(function() {
          e.selectionDeferId = null, T(b, p, s);
        }), e.previousSelection = { start: p, end: s, length: Math.abs(s - p) });
      }, e.getSelection = function() {
        return j(e.getInputDOMNode());
      }, e.getCursorPosition = function() {
        return e.getSelection().start;
      }, e.setCursorPosition = function(p) {
        e.setSelection(p, p);
      }, e.isFocused = function() {
        return e.focused;
      }, e.getBeforeMaskedValueChangeConfig = function() {
        var p = e.maskOptions, s = p.mask, h = p.maskChar, b = p.permanents, y = p.formatChars;
        return { mask: s, maskChar: h, permanents: b, alwaysShowMask: !!e.props.alwaysShowMask, formatChars: y };
      }, e.isInputAutofilled = function(p, s, h, b) {
        var y = e.getInputDOMNode();
        try {
          if (y.matches(":-webkit-autofill"))
            return !0;
        } catch {
        }
        return !e.focused || b.end < h.length && s.end === p.length;
      }, e.onChange = function(p) {
        var s = I(I(e)).beforePasteState, h = I(I(e)).previousSelection, b = e.props.beforeMaskedValueChange, y = e.getInputValue(), M = e.value, x = e.getSelection();
        e.isInputAutofilled(y, x, M, h) && (M = A(e.maskOptions, ""), h = { start: 0, end: 0, length: 0 }), s && (h = s.selection, M = s.value, x = { start: h.start + y.length, end: h.start + y.length, length: 0 }, y = M.slice(0, h.start) + y + M.slice(h.end), e.beforePasteState = null);
        var F = le(e.maskOptions, y, x, M, h), W = F.enteredString, U = F.selection, X = F.value;
        if (O(b)) {
          var ie = b({ value: X, selection: U }, { value: M, selection: h }, W, e.getBeforeMaskedValueChangeConfig());
          X = ie.value, U = ie.selection;
        }
        e.setInputValue(X), O(e.props.onChange) && e.props.onChange(p), e.isWindowsPhoneBrowser ? e.setSelection(U.start, U.end, { deferred: !0 }) : e.setSelection(U.start, U.end);
      }, e.onFocus = function(p) {
        var s = e.props.beforeMaskedValueChange, h = e.maskOptions, b = h.mask, y = h.prefix;
        if (e.focused = !0, e.mounted = !0, b) {
          if (e.value)
            _(e.maskOptions, e.value) < e.maskOptions.mask.length && e.setCursorToEnd();
          else {
            var M = A(e.maskOptions, y), x = A(e.maskOptions, M), F = _(e.maskOptions, x), W = Y(e.maskOptions, F), U = { start: W, end: W };
            if (O(s)) {
              var X = s({ value: x, selection: U }, { value: e.value, selection: null }, null, e.getBeforeMaskedValueChangeConfig());
              x = X.value, U = X.selection;
            }
            var ie = x !== e.getInputValue();
            ie && e.setInputValue(x), ie && O(e.props.onChange) && e.props.onChange(p), e.setSelection(U.start, U.end);
          }
          e.runSaveSelectionLoop();
        }
        O(e.props.onFocus) && e.props.onFocus(p);
      }, e.onBlur = function(p) {
        var s = e.props.beforeMaskedValueChange, h = e.maskOptions.mask;
        if (e.stopSaveSelectionLoop(), e.focused = !1, h && !e.props.alwaysShowMask && ee(e.maskOptions, e.value)) {
          var b = "";
          O(s) && (b = s({ value: b, selection: null }, { value: e.value, selection: e.previousSelection }, null, e.getBeforeMaskedValueChangeConfig()).value);
          var y = b !== e.getInputValue();
          y && e.setInputValue(b), y && O(e.props.onChange) && e.props.onChange(p);
        }
        O(e.props.onBlur) && e.props.onBlur(p);
      }, e.onMouseDown = function(p) {
        if (!e.focused && document.addEventListener) {
          e.mouseDownX = p.clientX, e.mouseDownY = p.clientY, e.mouseDownTime = (/* @__PURE__ */ new Date()).getTime();
          var s = function h(b) {
            if (document.removeEventListener("mouseup", h), e.focused) {
              var y = Math.abs(b.clientX - e.mouseDownX), M = Math.abs(b.clientY - e.mouseDownY), x = Math.max(y, M), F = (/* @__PURE__ */ new Date()).getTime() - e.mouseDownTime;
              (x <= 10 && F <= 200 || x <= 5 && F <= 300) && e.setCursorToEnd();
            }
          };
          document.addEventListener("mouseup", s);
        }
        O(e.props.onMouseDown) && e.props.onMouseDown(p);
      }, e.onPaste = function(p) {
        O(e.props.onPaste) && e.props.onPaste(p), p.defaultPrevented || (e.beforePasteState = { value: e.getInputValue(), selection: e.getSelection() }, e.setInputValue(""));
      }, e.handleRef = function(p) {
        e.props.children == null && O(e.props.inputRef) && e.props.inputRef(p);
      };
      var i = t.mask, w = t.maskChar, C = t.formatChars, c = t.alwaysShowMask, v = t.beforeMaskedValueChange, m = t.defaultValue, g = t.value;
      e.maskOptions = B(i, w, C), m == null && (m = ""), g == null && (g = m);
      var l = ae(g);
      if (e.maskOptions.mask && (c || l) && (l = A(e.maskOptions, l), O(v))) {
        var V = t.value;
        t.value == null && (V = m), l = v({ value: l, selection: null }, { value: V = ae(V), selection: null }, null, e.getBeforeMaskedValueChangeConfig()).value;
      }
      return e.value = l, e;
    }
    k(r, n);
    var a = r.prototype;
    return a.componentDidMount = function() {
      this.mounted = !0, this.getInputDOMNode() && (this.isWindowsPhoneBrowser = ce(), this.maskOptions.mask && this.getInputValue() !== this.value && this.setInputValue(this.value));
    }, a.componentDidUpdate = function() {
      var t = this.previousSelection, e = this.props, i = e.beforeMaskedValueChange, w = e.alwaysShowMask, C = e.mask, c = e.maskChar, v = e.formatChars, m = this.maskOptions, g = w || this.isFocused(), l = this.props.value != null, V = l ? ae(this.props.value) : this.value, p = t ? t.start : null;
      if (this.maskOptions = B(C, c, v), this.maskOptions.mask) {
        !m.mask && this.isFocused() && this.runSaveSelectionLoop();
        var s = this.maskOptions.mask && this.maskOptions.mask !== m.mask;
        if (m.mask || l || (V = this.getInputValue()), (s || this.maskOptions.mask && (V || g)) && (V = A(this.maskOptions, V)), s) {
          var h = _(this.maskOptions, V);
          (p === null || h < p) && (p = G(this.maskOptions, V) ? h : Y(this.maskOptions, h));
        }
        !this.maskOptions.mask || !ee(this.maskOptions, V) || g || l && this.props.value || (V = "");
        var b = { start: p, end: p };
        if (O(i)) {
          var y = i({ value: V, selection: b }, { value: this.value, selection: this.previousSelection }, null, this.getBeforeMaskedValueChangeConfig());
          V = y.value, b = y.selection;
        }
        this.value = V;
        var M = this.getInputValue() !== this.value;
        M ? (this.setInputValue(this.value), this.forceUpdate()) : s && this.forceUpdate();
        var x = !1;
        b.start != null && b.end != null && (x = !t || t.start !== b.start || t.end !== b.end), (x || M) && this.setSelection(b.start, b.end);
      } else
        m.mask && (this.stopSaveSelectionLoop(), this.forceUpdate());
    }, a.componentWillUnmount = function() {
      this.mounted = !1, this.selectionDeferId !== null && H(this.selectionDeferId), this.stopSaveSelectionLoop();
    }, a.render = function() {
      var t, e = this.props, i = (e.mask, e.alwaysShowMask, e.maskChar, e.formatChars, e.inputRef, e.beforeMaskedValueChange, e.children), w = S(e, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);
      if (i) {
        O(i) || N(!1);
        var C = ["onChange", "onPaste", "onMouseDown", "onFocus", "onBlur", "value", "disabled", "readOnly"], c = D({}, w);
        C.forEach(function(m) {
          return delete c[m];
        }), t = i(c), C.filter(function(m) {
          return t.props[m] != null && t.props[m] !== w[m];
        }).length && N(!1);
      } else
        t = u.createElement("input", D({ ref: this.handleRef }, w));
      var v = { onFocus: this.onFocus, onBlur: this.onBlur };
      return this.maskOptions.mask && (w.disabled || w.readOnly || (v.onChange = this.onChange, v.onPaste = this.onPaste, v.onMouseDown = this.onMouseDown), w.value != null && (v.value = this.value)), t = u.cloneElement(t, v);
    }, r;
  }(u.Component);
  return Ie = de, Ie;
}
var Me, Pe;
function vn() {
  if (Pe)
    return Me;
  Pe = 1;
  var o = function(u, f, d, D, k, S, I, R) {
    if (process.env.NODE_ENV !== "production" && f === void 0)
      throw new Error("invariant requires an error message argument");
    if (!u) {
      var N;
      if (f === void 0)
        N = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var T = [d, D, k, S, I, R], j = 0;
        N = new Error(
          f.replace(/%s/g, function() {
            return T[j++];
          })
        ), N.name = "Invariant Violation";
      }
      throw N.framesToPop = 1, N;
    }
  };
  return Me = o, Me;
}
var Ve, Ae;
function hn() {
  if (Ae)
    return Ve;
  Ae = 1;
  var o = process.env.NODE_ENV !== "production", u = function() {
  };
  if (o) {
    var f = function(D, k) {
      var S = arguments.length;
      k = new Array(S > 1 ? S - 1 : 0);
      for (var I = 1; I < S; I++)
        k[I - 1] = arguments[I];
      var R = 0, N = "Warning: " + D.replace(/%s/g, function() {
        return k[R++];
      });
      typeof console < "u" && console.error(N);
      try {
        throw new Error(N);
      } catch {
      }
    };
    u = function(d, D, k) {
      var S = arguments.length;
      k = new Array(S > 2 ? S - 2 : 0);
      for (var I = 2; I < S; I++)
        k[I - 2] = arguments[I];
      if (D === void 0)
        throw new Error(
          "`warning(condition, format, ...args)` requires a warning message argument"
        );
      d || f.apply(null, [D].concat(k));
    };
  }
  return Ve = u, Ve;
}
var xe, Be;
function mn() {
  if (Be)
    return xe;
  Be = 1;
  function o(n) {
    return n && typeof n == "object" && "default" in n ? n.default : n;
  }
  var u = o(ye), f = _e, d = o(vn()), D = o(hn());
  function k(n, r) {
    for (var a = Object.getOwnPropertyNames(r), t = 0; t < a.length; t++) {
      var e = a[t], i = Object.getOwnPropertyDescriptor(r, e);
      i && i.configurable && n[e] === void 0 && Object.defineProperty(n, e, i);
    }
    return n;
  }
  function S() {
    return S = Object.assign || function(n) {
      for (var r = 1; r < arguments.length; r++) {
        var a = arguments[r];
        for (var t in a)
          Object.prototype.hasOwnProperty.call(a, t) && (n[t] = a[t]);
      }
      return n;
    }, S.apply(this, arguments);
  }
  function I(n, r) {
    n.prototype = Object.create(r.prototype), n.prototype.constructor = n, k(n, r);
  }
  function R(n, r) {
    if (n == null)
      return {};
    var a = {}, t = Object.keys(n), e, i;
    for (i = 0; i < t.length; i++)
      e = t[i], !(r.indexOf(e) >= 0) && (a[e] = n[e]);
    return a;
  }
  function N(n) {
    if (n === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }
  function T(n, r, a) {
    if ("selectionStart" in n && "selectionEnd" in n)
      n.selectionStart = r, n.selectionEnd = a;
    else {
      var t = n.createTextRange();
      t.collapse(!0), t.moveStart("character", r), t.moveEnd("character", a - r), t.select();
    }
  }
  function j(n) {
    var r = 0, a = 0;
    if ("selectionStart" in n && "selectionEnd" in n)
      r = n.selectionStart, a = n.selectionEnd;
    else {
      var t = document.selection.createRange();
      t.parentElement() === n && (r = -t.moveStart("character", -n.value.length), a = -t.moveEnd("character", -n.value.length));
    }
    return {
      start: r,
      end: a,
      length: a - r
    };
  }
  var q = {
    9: "[0-9]",
    a: "[A-Za-z]",
    "*": "[A-Za-z0-9]"
  }, ue = "_";
  function B(n, r, a) {
    var t = "", e = "", i = null, w = [];
    if (r === void 0 && (r = ue), a == null && (a = q), !n || typeof n != "string")
      return {
        maskChar: r,
        formatChars: a,
        mask: null,
        prefix: null,
        lastEditablePosition: null,
        permanents: []
      };
    var C = !1;
    return n.split("").forEach(function(c) {
      !C && c === "\\" ? C = !0 : (C || !a[c] ? (w.push(t.length), t.length === w.length - 1 && (e += c)) : i = t.length + 1, t += c, C = !1);
    }), {
      maskChar: r,
      formatChars: a,
      prefix: e,
      mask: t,
      lastEditablePosition: i,
      permanents: w
    };
  }
  function E(n, r) {
    return n.permanents.indexOf(r) !== -1;
  }
  function P(n, r, a) {
    var t = n.mask, e = n.formatChars;
    if (!a)
      return !1;
    if (E(n, r))
      return t[r] === a;
    var i = t[r], w = e[i];
    return new RegExp(w).test(a);
  }
  function ee(n, r) {
    return r.split("").every(function(a, t) {
      return E(n, t) || !P(n, t, a);
    });
  }
  function _(n, r) {
    var a = n.maskChar, t = n.prefix;
    if (!a) {
      for (; r.length > t.length && E(n, r.length - 1); )
        r = r.slice(0, r.length - 1);
      return r.length;
    }
    for (var e = t.length, i = r.length; i >= t.length; i--) {
      var w = r[i], C = !E(n, i) && P(n, i, w);
      if (C) {
        e = i + 1;
        break;
      }
    }
    return e;
  }
  function G(n, r) {
    return _(n, r) === n.mask.length;
  }
  function A(n, r) {
    var a = n.maskChar, t = n.mask, e = n.prefix;
    if (!a) {
      for (r = Z(n, "", r, 0), r.length < e.length && (r = e); r.length < t.length && E(n, r.length); )
        r += t[r.length];
      return r;
    }
    if (r) {
      var i = A(n, "");
      return Z(n, i, r, 0);
    }
    for (var w = 0; w < t.length; w++)
      E(n, w) ? r += t[w] : r += a;
    return r;
  }
  function me(n, r, a, t) {
    var e = a + t, i = n.maskChar, w = n.mask, C = n.prefix, c = r.split("");
    if (!i) {
      for (var v = e; v < c.length; v++)
        E(n, v) && (c[v] = "");
      return a = Math.max(C.length, a), c.splice(a, e - a), r = c.join(""), A(n, r);
    }
    return c.map(function(m, g) {
      return g < a || g >= e ? m : E(n, g) ? w[g] : i;
    }).join("");
  }
  function Z(n, r, a, t) {
    var e = n.mask, i = n.maskChar, w = n.prefix, C = a.split(""), c = G(n, r), v = function(l, V) {
      return !E(n, l) || V === e[l];
    }, m = function(l, V) {
      return !i || !E(n, V) || l !== i;
    };
    return !i && t > r.length && (r += e.slice(r.length, t)), C.every(function(g) {
      for (; !v(t, g); ) {
        if (t >= r.length && (r += e[t]), !m(g, t))
          return !0;
        if (t++, t >= e.length)
          return !1;
      }
      var l = P(n, t, g) || g === i;
      return l ? (t < r.length ? i || c || t < w.length ? r = r.slice(0, t) + g + r.slice(t + 1) : (r = r.slice(0, t) + g + r.slice(t), r = A(n, r)) : i || (r += g), t++, t < e.length) : !0;
    }), r;
  }
  function re(n, r, a, t) {
    var e = n.mask, i = n.maskChar, w = a.split(""), C = t, c = function(m, g) {
      return !E(n, m) || g === e[m];
    };
    return w.every(function(v) {
      for (; !c(t, v); )
        if (t++, t >= e.length)
          return !1;
      var m = P(n, t, v) || v === i;
      return m && t++, t < e.length;
    }), t - C;
  }
  function he(n, r) {
    for (var a = r; a >= 0; --a)
      if (!E(n, a))
        return a;
    return null;
  }
  function Y(n, r) {
    for (var a = n.mask, t = r; t < a.length; ++t)
      if (!E(n, t))
        return t;
    return null;
  }
  function ae(n) {
    return !n && n !== 0 ? "" : n + "";
  }
  function le(n, r, a, t, e) {
    var i = n.mask, w = n.prefix, C = n.lastEditablePosition, c = r, v = "", m = 0, g = 0, l = Math.min(e.start, a.start);
    if (a.end > e.start ? (v = c.slice(e.start, a.end), m = re(n, t, v, l), m ? g = e.length : g = 0) : c.length < t.length && (g = t.length - c.length), c = t, g) {
      if (g === 1 && !e.length) {
        var V = e.start === a.start;
        l = V ? Y(n, a.start) : he(n, a.start);
      }
      c = me(n, c, l, g);
    }
    return c = Z(n, c, v, l), l = l + m, l >= i.length ? l = i.length : l < w.length && !m ? l = w.length : l >= w.length && l < C && m && (l = Y(n, l)), c = A(n, c), v || (v = null), {
      value: c,
      enteredString: v,
      selection: {
        start: l,
        end: l
      }
    };
  }
  function ce() {
    var n = new RegExp("windows", "i"), r = new RegExp("phone", "i"), a = navigator.userAgent;
    return n.test(a) && r.test(a);
  }
  function O(n) {
    return typeof n == "function";
  }
  function fe() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  }
  function oe() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
  }
  function pe(n) {
    var r = !!oe(), a;
    return r ? a = fe() : a = function() {
      return setTimeout(n, 1e3 / 60);
    }, a(n);
  }
  function H(n) {
    var r = oe() || clearTimeout;
    r(n);
  }
  var de = /* @__PURE__ */ function(n) {
    I(r, n);
    function r(t) {
      var e;
      e = n.call(this, t) || this, e.focused = !1, e.mounted = !1, e.previousSelection = null, e.selectionDeferId = null, e.saveSelectionLoopDeferId = null, e.saveSelectionLoop = function() {
        e.previousSelection = e.getSelection(), e.saveSelectionLoopDeferId = pe(e.saveSelectionLoop);
      }, e.runSaveSelectionLoop = function() {
        e.saveSelectionLoopDeferId === null && e.saveSelectionLoop();
      }, e.stopSaveSelectionLoop = function() {
        e.saveSelectionLoopDeferId !== null && (H(e.saveSelectionLoopDeferId), e.saveSelectionLoopDeferId = null, e.previousSelection = null);
      }, e.getInputDOMNode = function() {
        if (!e.mounted)
          return null;
        var s = f.findDOMNode(N(N(e))), h = typeof window < "u" && s instanceof window.Element;
        if (s && !h)
          return null;
        if (s.nodeName !== "INPUT" && (s = s.querySelector("input")), !s)
          throw new Error("react-input-mask: inputComponent doesn't contain input node");
        return s;
      }, e.getInputValue = function() {
        var s = e.getInputDOMNode();
        return s ? s.value : null;
      }, e.setInputValue = function(s) {
        var h = e.getInputDOMNode();
        h && (e.value = s, h.value = s);
      }, e.setCursorToEnd = function() {
        var s = _(e.maskOptions, e.value), h = Y(e.maskOptions, s);
        h !== null && e.setCursorPosition(h);
      }, e.setSelection = function(s, h, b) {
        b === void 0 && (b = {});
        var y = e.getInputDOMNode(), M = e.isFocused();
        if (!(!y || !M)) {
          var x = b, F = x.deferred;
          F || T(y, s, h), e.selectionDeferId !== null && H(e.selectionDeferId), e.selectionDeferId = pe(function() {
            e.selectionDeferId = null, T(y, s, h);
          }), e.previousSelection = {
            start: s,
            end: h,
            length: Math.abs(h - s)
          };
        }
      }, e.getSelection = function() {
        var s = e.getInputDOMNode();
        return j(s);
      }, e.getCursorPosition = function() {
        return e.getSelection().start;
      }, e.setCursorPosition = function(s) {
        e.setSelection(s, s);
      }, e.isFocused = function() {
        return e.focused;
      }, e.getBeforeMaskedValueChangeConfig = function() {
        var s = e.maskOptions, h = s.mask, b = s.maskChar, y = s.permanents, M = s.formatChars, x = e.props.alwaysShowMask;
        return {
          mask: h,
          maskChar: b,
          permanents: y,
          alwaysShowMask: !!x,
          formatChars: M
        };
      }, e.isInputAutofilled = function(s, h, b, y) {
        var M = e.getInputDOMNode();
        try {
          if (M.matches(":-webkit-autofill"))
            return !0;
        } catch {
        }
        return e.focused ? y.end < b.length && h.end === s.length : !0;
      }, e.onChange = function(s) {
        var h = N(N(e)), b = h.beforePasteState, y = N(N(e)), M = y.previousSelection, x = e.props.beforeMaskedValueChange, F = e.getInputValue(), W = e.value, U = e.getSelection();
        e.isInputAutofilled(F, U, W, M) && (W = A(e.maskOptions, ""), M = {
          start: 0,
          end: 0,
          length: 0
        }), b && (M = b.selection, W = b.value, U = {
          start: M.start + F.length,
          end: M.start + F.length,
          length: 0
        }, F = W.slice(0, M.start) + F + W.slice(M.end), e.beforePasteState = null);
        var X = le(e.maskOptions, F, U, W, M), ie = X.enteredString, z = X.selection, ge = X.value;
        if (O(x)) {
          var Se = x({
            value: ge,
            selection: z
          }, {
            value: W,
            selection: M
          }, ie, e.getBeforeMaskedValueChangeConfig());
          ge = Se.value, z = Se.selection;
        }
        e.setInputValue(ge), O(e.props.onChange) && e.props.onChange(s), e.isWindowsPhoneBrowser ? e.setSelection(z.start, z.end, {
          deferred: !0
        }) : e.setSelection(z.start, z.end);
      }, e.onFocus = function(s) {
        var h = e.props.beforeMaskedValueChange, b = e.maskOptions, y = b.mask, M = b.prefix;
        if (e.focused = !0, e.mounted = !0, y) {
          if (e.value)
            _(e.maskOptions, e.value) < e.maskOptions.mask.length && e.setCursorToEnd();
          else {
            var x = A(e.maskOptions, M), F = A(e.maskOptions, x), W = _(e.maskOptions, F), U = Y(e.maskOptions, W), X = {
              start: U,
              end: U
            };
            if (O(h)) {
              var ie = h({
                value: F,
                selection: X
              }, {
                value: e.value,
                selection: null
              }, null, e.getBeforeMaskedValueChangeConfig());
              F = ie.value, X = ie.selection;
            }
            var z = F !== e.getInputValue();
            z && e.setInputValue(F), z && O(e.props.onChange) && e.props.onChange(s), e.setSelection(X.start, X.end);
          }
          e.runSaveSelectionLoop();
        }
        O(e.props.onFocus) && e.props.onFocus(s);
      }, e.onBlur = function(s) {
        var h = e.props.beforeMaskedValueChange, b = e.maskOptions.mask;
        if (e.stopSaveSelectionLoop(), e.focused = !1, b && !e.props.alwaysShowMask && ee(e.maskOptions, e.value)) {
          var y = "";
          if (O(h)) {
            var M = h({
              value: y,
              selection: null
            }, {
              value: e.value,
              selection: e.previousSelection
            }, null, e.getBeforeMaskedValueChangeConfig());
            y = M.value;
          }
          var x = y !== e.getInputValue();
          x && e.setInputValue(y), x && O(e.props.onChange) && e.props.onChange(s);
        }
        O(e.props.onBlur) && e.props.onBlur(s);
      }, e.onMouseDown = function(s) {
        if (!e.focused && document.addEventListener) {
          e.mouseDownX = s.clientX, e.mouseDownY = s.clientY, e.mouseDownTime = (/* @__PURE__ */ new Date()).getTime();
          var h = function b(y) {
            if (document.removeEventListener("mouseup", b), !!e.focused) {
              var M = Math.abs(y.clientX - e.mouseDownX), x = Math.abs(y.clientY - e.mouseDownY), F = Math.max(M, x), W = (/* @__PURE__ */ new Date()).getTime() - e.mouseDownTime;
              (F <= 10 && W <= 200 || F <= 5 && W <= 300) && e.setCursorToEnd();
            }
          };
          document.addEventListener("mouseup", h);
        }
        O(e.props.onMouseDown) && e.props.onMouseDown(s);
      }, e.onPaste = function(s) {
        O(e.props.onPaste) && e.props.onPaste(s), s.defaultPrevented || (e.beforePasteState = {
          value: e.getInputValue(),
          selection: e.getSelection()
        }, e.setInputValue(""));
      }, e.handleRef = function(s) {
        e.props.children == null && O(e.props.inputRef) && e.props.inputRef(s);
      };
      var i = t.mask, w = t.maskChar, C = t.formatChars, c = t.alwaysShowMask, v = t.beforeMaskedValueChange, m = t.defaultValue, g = t.value;
      e.maskOptions = B(i, w, C), m == null && (m = ""), g == null && (g = m);
      var l = ae(g);
      if (e.maskOptions.mask && (c || l) && (l = A(e.maskOptions, l), O(v))) {
        var V = t.value;
        t.value == null && (V = m), V = ae(V);
        var p = v({
          value: l,
          selection: null
        }, {
          value: V,
          selection: null
        }, null, e.getBeforeMaskedValueChangeConfig());
        l = p.value;
      }
      return e.value = l, e;
    }
    var a = r.prototype;
    return a.componentDidMount = function() {
      this.mounted = !0, this.getInputDOMNode() && (this.isWindowsPhoneBrowser = ce(), this.maskOptions.mask && this.getInputValue() !== this.value && this.setInputValue(this.value));
    }, a.componentDidUpdate = function() {
      var e = this.previousSelection, i = this.props, w = i.beforeMaskedValueChange, C = i.alwaysShowMask, c = i.mask, v = i.maskChar, m = i.formatChars, g = this.maskOptions, l = C || this.isFocused(), V = this.props.value != null, p = V ? ae(this.props.value) : this.value, s = e ? e.start : null;
      if (this.maskOptions = B(c, v, m), this.maskOptions.mask)
        !g.mask && this.isFocused() && this.runSaveSelectionLoop();
      else {
        g.mask && (this.stopSaveSelectionLoop(), this.forceUpdate());
        return;
      }
      var h = this.maskOptions.mask && this.maskOptions.mask !== g.mask;
      if (!g.mask && !V && (p = this.getInputValue()), (h || this.maskOptions.mask && (p || l)) && (p = A(this.maskOptions, p)), h) {
        var b = _(this.maskOptions, p);
        (s === null || b < s) && (G(this.maskOptions, p) ? s = b : s = Y(this.maskOptions, b));
      }
      this.maskOptions.mask && ee(this.maskOptions, p) && !l && (!V || !this.props.value) && (p = "");
      var y = {
        start: s,
        end: s
      };
      if (O(w)) {
        var M = w({
          value: p,
          selection: y
        }, {
          value: this.value,
          selection: this.previousSelection
        }, null, this.getBeforeMaskedValueChangeConfig());
        p = M.value, y = M.selection;
      }
      this.value = p;
      var x = this.getInputValue() !== this.value;
      x ? (this.setInputValue(this.value), this.forceUpdate()) : h && this.forceUpdate();
      var F = !1;
      y.start != null && y.end != null && (F = !e || e.start !== y.start || e.end !== y.end), (F || x) && this.setSelection(y.start, y.end);
    }, a.componentWillUnmount = function() {
      this.mounted = !1, this.selectionDeferId !== null && H(this.selectionDeferId), this.stopSaveSelectionLoop();
    }, a.render = function() {
      var e = this.props, i = e.mask;
      e.alwaysShowMask;
      var w = e.maskChar, C = e.formatChars, c = e.inputRef;
      e.beforeMaskedValueChange;
      var v = e.children, m = R(e, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]), g;
      if (process.env.NODE_ENV !== "production" && D(
        // parse mask to test against actual mask prop as this.maskOptions
        // will be updated later in componentDidUpdate
        !m.maxLength || !B(i, w, C).mask,
        "react-input-mask: maxLength property shouldn't be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length."
      ), v) {
        O(v) || (process.env.NODE_ENV !== "production" ? d(!1, "react-input-mask: children must be a function") : d(!1));
        var l = ["onChange", "onPaste", "onMouseDown", "onFocus", "onBlur", "value", "disabled", "readOnly"], V = S({}, m);
        l.forEach(function(h) {
          return delete V[h];
        }), g = v(V);
        var p = l.filter(function(h) {
          return g.props[h] != null && g.props[h] !== m[h];
        });
        p.length && (process.env.NODE_ENV !== "production" ? d(!1, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + p.join(", ")) : d(!1)), process.env.NODE_ENV !== "production" && D(!c, "react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead");
      } else
        g = u.createElement("input", S({
          ref: this.handleRef
        }, m));
      var s = {
        onFocus: this.onFocus,
        onBlur: this.onBlur
      };
      return this.maskOptions.mask && (!m.disabled && !m.readOnly && (s.onChange = this.onChange, s.onPaste = this.onPaste, s.onMouseDown = this.onMouseDown), m.value != null && (s.value = this.value)), g = u.cloneElement(g, s), g;
    }, r;
  }(u.Component);
  return xe = de, xe;
}
process.env.NODE_ENV === "production" ? Oe.exports = dn() : Oe.exports = mn();
var gn = Oe.exports;
const Sn = /* @__PURE__ */ Je(gn);
export {
  pn as C,
  Sn as R
};
