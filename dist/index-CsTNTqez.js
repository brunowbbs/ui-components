import { jsx as F } from "react/jsx-runtime";
import T, { useState as E, useRef as R, useEffect as P, useCallback as U, createContext as _, useMemo as C, useContext as N } from "react";
import { c as Q, d as M, e as W, f as A, g as G, a as L, h as Y, i as z } from "./import-BSU-KPT5.js";
function H(e, i, a) {
  let [t, d] = E(e || i), r = R(e !== void 0), n = e !== void 0;
  P(() => {
    let l = r.current;
    l !== n && console.warn(`WARN: A component changed from ${l ? "controlled" : "uncontrolled"} to ${n ? "controlled" : "uncontrolled"}.`), r.current = n;
  }, [
    n
  ]);
  let s = n ? e : t, o = U((l, ...c) => {
    let u = (b, ...$) => {
      a && (Object.is(s, b) || a(b, ...$)), n || (s = b);
    };
    typeof l == "function" ? (console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"), d(($, ...m) => {
      let f = l(n ? s : $, ...m);
      return u(f, ...c), n ? $ : f;
    })) : (n || d(l), u(l, ...c));
  }, [
    n,
    s,
    a
  ]);
  return [
    s,
    o
  ];
}
function J(e, i, a) {
  let { validationBehavior: t, focus: d } = e;
  Q(() => {
    if (t === "native" && (a != null && a.current)) {
      let o = i.realtimeValidation.isInvalid ? i.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      a.current.setCustomValidity(o), a.current.hasAttribute("title") || (a.current.title = ""), i.realtimeValidation.isInvalid || i.updateValidation(X(a.current));
    }
  });
  let r = M(() => {
    i.resetValidation();
  }), n = M((o) => {
    var l;
    i.displayValidation.isInvalid || i.commitValidation();
    let c = a == null || (l = a.current) === null || l === void 0 ? void 0 : l.form;
    if (!o.defaultPrevented && a && c && Z(c) === a.current) {
      var u;
      d ? d() : (u = a.current) === null || u === void 0 || u.focus(), W("keyboard");
    }
    o.preventDefault();
  }), s = M(() => {
    i.commitValidation();
  });
  P(() => {
    let o = a == null ? void 0 : a.current;
    if (!o)
      return;
    let l = o.form;
    return o.addEventListener("invalid", n), o.addEventListener("change", s), l == null || l.addEventListener("reset", r), () => {
      o.removeEventListener("invalid", n), o.removeEventListener("change", s), l == null || l.removeEventListener("reset", r);
    };
  }, [
    a,
    n,
    s,
    r,
    t
  ]);
}
function K(e) {
  let i = e.validity;
  return {
    badInput: i.badInput,
    customError: i.customError,
    patternMismatch: i.patternMismatch,
    rangeOverflow: i.rangeOverflow,
    rangeUnderflow: i.rangeUnderflow,
    stepMismatch: i.stepMismatch,
    tooLong: i.tooLong,
    tooShort: i.tooShort,
    typeMismatch: i.typeMismatch,
    valueMissing: i.valueMissing,
    valid: i.valid
  };
}
function X(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: K(e),
    validationErrors: e.validationMessage ? [
      e.validationMessage
    ] : []
  };
}
function Z(e) {
  for (let i = 0; i < e.elements.length; i++) {
    let a = e.elements[i];
    if (!a.validity.valid)
      return a;
  }
  return null;
}
const q = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
}, j = {
  ...q,
  customError: !0,
  valid: !1
}, S = {
  isInvalid: !1,
  validationDetails: q,
  validationErrors: []
}, ee = _({}), k = "__formValidationState" + Date.now();
function ie(e) {
  if (e[k]) {
    let { realtimeValidation: i, displayValidation: a, updateValidation: t, resetValidation: d, commitValidation: r } = e[k];
    return {
      realtimeValidation: i,
      displayValidation: a,
      updateValidation: t,
      resetValidation: d,
      commitValidation: r
    };
  }
  return ae(e);
}
function ae(e) {
  let { isInvalid: i, validationState: a, name: t, value: d, builtinValidation: r, validate: n, validationBehavior: s = "aria" } = e;
  a && (i || (i = a === "invalid"));
  let o = i ? {
    isInvalid: !0,
    validationErrors: [],
    validationDetails: j
  } : null, l = C(() => B(te(n, d)), [
    n,
    d
  ]);
  r != null && r.validationDetails.valid && (r = null);
  let c = N(ee), u = C(() => t ? Array.isArray(t) ? t.flatMap((v) => w(c[v])) : w(c[t]) : [], [
    c,
    t
  ]), [b, $] = E(c), [m, f] = E(!1);
  c !== b && ($(c), f(!1));
  let y = C(() => B(m ? [] : u), [
    m,
    u
  ]), I = R(S), [h, g] = E(S), p = R(S), x = () => {
    if (!V)
      return;
    D(!1);
    let v = l || r || I.current;
    O(v, p.current) || (p.current = v, g(v));
  }, [V, D] = E(!1);
  return P(x), {
    realtimeValidation: o || y || l || r || S,
    displayValidation: s === "native" ? o || y || h : o || y || l || r || h,
    updateValidation(v) {
      s === "aria" && !O(h, v) ? g(v) : I.current = v;
    },
    resetValidation() {
      let v = S;
      O(v, p.current) || (p.current = v, g(v)), s === "native" && D(!1), f(!0);
    },
    commitValidation() {
      s === "native" && D(!0), f(!0);
    }
  };
}
function w(e) {
  return e ? Array.isArray(e) ? e : [
    e
  ] : [];
}
function te(e, i) {
  if (typeof e == "function") {
    let a = e(i);
    if (a && typeof a != "boolean")
      return w(a);
  }
  return [];
}
function B(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: j
  } : null;
}
function O(e, i) {
  return e === i ? !0 : e && i && e.isInvalid === i.isInvalid && e.validationErrors.length === i.validationErrors.length && e.validationErrors.every((a, t) => a === i.validationErrors[t]) && Object.entries(e.validationDetails).every(([a, t]) => i.validationDetails[a] === t);
}
function le(e, i, a) {
  let { isDisabled: t = !1, isReadOnly: d = !1, value: r, name: n, children: s, "aria-label": o, "aria-labelledby": l, validationState: c = "valid", isInvalid: u } = e, b = (V) => {
    V.stopPropagation(), i.setSelected(V.target.checked);
  }, $ = s != null, m = o != null || l != null;
  !$ && !m && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: f, isPressed: y } = A({
    isDisabled: t
  }), { pressProps: I, isPressed: h } = A({
    isDisabled: t || d,
    onPress() {
      i.toggle();
    }
  }), { focusableProps: g } = G(e, a), p = L(f, g), x = Y(e, {
    labelable: !0
  });
  return z(a, i.isSelected, i.setSelected), {
    labelProps: L(I, {
      onClick: (V) => V.preventDefault()
    }),
    inputProps: L(x, {
      "aria-invalid": u || c === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": d || void 0,
      onChange: b,
      disabled: t,
      ...r == null ? {} : {
        value: r
      },
      name: n,
      type: "checkbox",
      ...p
    }),
    isSelected: i.isSelected,
    isPressed: y || h,
    isDisabled: t,
    isReadOnly: d,
    isInvalid: u || c === "invalid"
  };
}
function re(e = {}) {
  let { isReadOnly: i } = e, [a, t] = H(e.isSelected, e.defaultSelected || !1, e.onChange);
  function d(n) {
    i || t(n);
  }
  function r() {
    i || t(!a);
  }
  return {
    isSelected: a,
    setSelected: d,
    toggle: r
  };
}
function ne(e, i, a) {
  let t = ie({
    ...e,
    value: i.isSelected
  }), { isInvalid: d, validationErrors: r, validationDetails: n } = t.displayValidation, { labelProps: s, inputProps: o, isSelected: l, isPressed: c, isDisabled: u, isReadOnly: b } = le({
    ...e,
    isInvalid: d
  }, i, a);
  J(e, t, a);
  let { isIndeterminate: $, isRequired: m, validationBehavior: f = "aria" } = e;
  return P(() => {
    a.current && (a.current.indeterminate = !!$);
  }), {
    labelProps: s,
    inputProps: {
      ...o,
      checked: l,
      "aria-required": m && f === "aria" || void 0,
      required: m && f === "native"
    },
    isSelected: l,
    isPressed: c,
    isDisabled: u,
    isReadOnly: b,
    isInvalid: d,
    validationErrors: r,
    validationDetails: n
  };
}
function ve(e) {
  const i = T.useRef(null), a = re(e), { inputProps: t } = ne(e, a, i);
  return /* @__PURE__ */ F("input", { ...t, ref: i, style: e.style });
}
export {
  H as $,
  ve as C
};
