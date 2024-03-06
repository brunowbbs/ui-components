import { jsx as x } from "react/jsx-runtime";
import { c as I, d as ye, e as pe, M as be } from "../../bodyScrollLock.esm-bA6sgWCv.js";
import c, { useRef as p, useState as he, useEffect as A } from "react";
import { R as Ce } from "../../index-DBw-Vlhv.js";
function Ee(e = null) {
  let [n, t] = c.useState(e);
  const { current: o } = c.useRef({
    current: n
  });
  return Object.defineProperty(o, "current", {
    get: () => n,
    set: (a) => {
      Object.is(n, a) || (n = a, t(a));
    }
  }), o;
}
function Ie(e, n = { isStateful: !0 }) {
  const t = Ee(null), o = p(null), a = n.isStateful ? t : o;
  return c.useEffect(() => {
    !e || (typeof e == "function" ? e(a.current) : e.current = a.current);
  }), a;
}
function N() {
  return N = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, N.apply(this, arguments);
}
var Ae = function(n) {
  var t = n.classes, o = n.classNames, a = n.styles, l = n.id, r = n.closeIcon, v = n.onClick;
  return c.createElement("button", {
    id: l,
    className: I(t.closeButton, o == null ? void 0 : o.closeButton),
    style: a == null ? void 0 : a.closeButton,
    onClick: v,
    "data-testid": "close-button"
  }, r || c.createElement("svg", {
    className: o == null ? void 0 : o.closeIcon,
    style: a == null ? void 0 : a.closeIcon,
    width: 28,
    height: 28,
    viewBox: "0 0 36 36",
    "data-testid": "close-icon"
  }, c.createElement("path", {
    d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
  })));
}, w = typeof window < "u", J = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
function ge(e) {
  return e.offsetParent === null || getComputedStyle(e).visibility === "hidden";
}
function Oe(e, n) {
  for (var t = 0; t < e.length; t++)
    if (e[t].checked && e[t].form === n)
      return e[t];
}
function we(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !0;
  var n = e.form || e.ownerDocument, t = n.querySelectorAll('input[type="radio"][name="' + e.name + '"]'), o = Oe(t, e.form);
  return o === e || o === void 0 && t[0] === e;
}
function Q(e) {
  for (var n = document.activeElement, t = e.querySelectorAll(J.join(",")), o = [], a = 0; a < t.length; a++) {
    var l = t[a];
    (n === l || !l.disabled && ke(l) > -1 && !ge(l) && we(l)) && o.push(l);
  }
  return o;
}
function Ne(e, n) {
  if (!(!e || e.key !== "Tab")) {
    if (!n || !n.contains)
      return process && process.env.NODE_ENV === "development" && console.warn("focus-trap-js: parent element is not defined"), !1;
    if (!n.contains(e.target))
      return !1;
    var t = Q(n), o = t[0], a = t[t.length - 1];
    return e.shiftKey && e.target === o ? (a.focus(), e.preventDefault(), !0) : !e.shiftKey && e.target === a ? (o.focus(), e.preventDefault(), !0) : !1;
  }
}
function ke(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return isNaN(n) ? Se(e) ? 0 : e.tabIndex : n;
}
function Se(e) {
  return e.getAttribute("contentEditable");
}
var Re = function(n) {
  var t = n.container, o = n.initialFocusRef, a = p();
  return A(function() {
    var l = function(b) {
      t != null && t.current && Ne(b, t.current);
    };
    if (w && document.addEventListener("keydown", l), w && (t != null && t.current)) {
      var r = function() {
        J.findIndex(function(b) {
          var h;
          return (h = document.activeElement) == null ? void 0 : h.matches(b);
        }) !== -1 && (a.current = document.activeElement);
      };
      if (o)
        r(), requestAnimationFrame(function() {
          var s;
          (s = o.current) == null || s.focus();
        });
      else {
        var v = Q(t.current);
        v[0] && (r(), v[0].focus());
      }
    }
    return function() {
      if (w) {
        var s;
        document.removeEventListener("keydown", l), (s = a.current) == null || s.focus();
      }
    };
  }, [t, o]), null;
}, y = [], M = {
  /**
   * Register a new modal
   */
  add: function(n) {
    y.push(n);
  },
  /**
   * Remove a modal
   */
  remove: function(n) {
    y = y.filter(function(t) {
      return t !== n;
    });
  },
  /**
   * When multiple modals are rendered will return true if current modal is the last one
   */
  isTopModal: function(n) {
    return !!y.length && y[y.length - 1] === n;
  }
};
function xe(e, n) {
  A(function() {
    return n && M.add(e), function() {
      M.remove(e);
    };
  }, [n, e]);
}
var Me = function(n, t, o, a, l) {
  var r = p(null);
  A(function() {
    return t && n.current && a && (r.current = n.current, ye(n.current, {
      reserveScrollBarGap: l
    })), function() {
      r.current && (pe(r.current), r.current = null);
    };
  }, [t, o, n, a, l]);
}, u = {
  root: "react-responsive-modal-root",
  overlay: "react-responsive-modal-overlay",
  overlayAnimationIn: "react-responsive-modal-overlay-in",
  overlayAnimationOut: "react-responsive-modal-overlay-out",
  modalContainer: "react-responsive-modal-container",
  modalContainerCenter: "react-responsive-modal-containerCenter",
  modal: "react-responsive-modal-modal",
  modalAnimationIn: "react-responsive-modal-modal-in",
  modalAnimationOut: "react-responsive-modal-modal-out",
  closeButton: "react-responsive-modal-closeButton"
}, Te = /* @__PURE__ */ c.forwardRef(function(e, n) {
  var t, o, a, l, r = e.open, v = e.center, s = e.blockScroll, b = s === void 0 ? !0 : s, h = e.closeOnEsc, W = h === void 0 ? !0 : h, T = e.closeOnOverlayClick, X = T === void 0 ? !0 : T, k = e.container, D = e.showCloseIcon, Y = D === void 0 ? !0 : D, Z = e.closeIconId, _ = e.closeIcon, $ = e.focusTrapped, ee = $ === void 0 ? !0 : $, F = e.initialFocusRef, ne = F === void 0 ? void 0 : F, B = e.animationDuration, L = B === void 0 ? 300 : B, i = e.classNames, d = e.styles, K = e.role, te = K === void 0 ? "dialog" : K, oe = e.ariaDescribedby, ae = e.ariaLabelledby, re = e.containerId, le = e.modalId, S = e.onClose, j = e.onEscKeyDown, P = e.onOverlayClick, q = e.onAnimationEnd, ie = e.children, ce = e.reserveScrollBarGap, z = Ie(n), g = p(null), f = p(null), m = p(null);
  m.current === null && w && (m.current = document.createElement("div"));
  var G = he(!1), C = G[0], H = G[1];
  xe(g, r), Me(g, r, C, b, ce);
  var se = function() {
    m.current && !k && !document.body.contains(m.current) && document.body.appendChild(m.current), document.addEventListener("keydown", U);
  }, ue = function() {
    m.current && !k && document.body.contains(m.current) && document.body.removeChild(m.current), document.removeEventListener("keydown", U);
  }, U = function(O) {
    O.keyCode !== 27 || !M.isTopModal(g) || (j == null || j(O), W && S());
  };
  A(function() {
    return function() {
      C && ue();
    };
  }, [C]), A(function() {
    r && !C && (H(!0), se());
  }, [r]);
  var de = function(O) {
    if (f.current === null && (f.current = !0), !f.current) {
      f.current = null;
      return;
    }
    P == null || P(O), X && S(), f.current = null;
  }, R = function() {
    f.current = !1;
  }, me = function() {
    r || H(!1), q == null || q();
  }, V = k || m.current, ve = r ? (t = i == null ? void 0 : i.overlayAnimationIn) != null ? t : u.overlayAnimationIn : (o = i == null ? void 0 : i.overlayAnimationOut) != null ? o : u.overlayAnimationOut, fe = r ? (a = i == null ? void 0 : i.modalAnimationIn) != null ? a : u.modalAnimationIn : (l = i == null ? void 0 : i.modalAnimationOut) != null ? l : u.modalAnimationOut;
  return C && V ? Ce.createPortal(c.createElement("div", {
    className: I(u.root, i == null ? void 0 : i.root),
    style: d == null ? void 0 : d.root,
    "data-testid": "root"
  }, c.createElement("div", {
    className: I(u.overlay, i == null ? void 0 : i.overlay),
    "data-testid": "overlay",
    "aria-hidden": !0,
    style: N({
      animation: ve + " " + L + "ms"
    }, d == null ? void 0 : d.overlay)
  }), c.createElement("div", {
    ref: g,
    id: re,
    className: I(u.modalContainer, v && u.modalContainerCenter, i == null ? void 0 : i.modalContainer),
    style: d == null ? void 0 : d.modalContainer,
    "data-testid": "modal-container",
    onClick: de
  }, c.createElement("div", {
    ref: z,
    className: I(u.modal, i == null ? void 0 : i.modal),
    style: N({
      animation: fe + " " + L + "ms"
    }, d == null ? void 0 : d.modal),
    onMouseDown: R,
    onMouseUp: R,
    onClick: R,
    onAnimationEnd: me,
    id: le,
    role: te,
    "aria-modal": "true",
    "aria-labelledby": ae,
    "aria-describedby": oe,
    "data-testid": "modal",
    tabIndex: -1
  }, ee && c.createElement(Re, {
    container: z,
    initialFocusRef: ne
  }), ie, Y && c.createElement(Ae, {
    classes: u,
    classNames: i,
    styles: d,
    closeIcon: _,
    onClick: S,
    id: Z
  })))), V) : null;
});
function Le({
  isOpen: e,
  onClose: n,
  children: t,
  maxWidth: o = 400
}) {
  return /* @__PURE__ */ x(
    Te,
    {
      center: !0,
      closeIcon: /* @__PURE__ */ x(be, { size: 18 }),
      open: e,
      onClose: n,
      styles: {
        modal: {
          width: "90%",
          maxWidth: o,
          borderRadius: 8,
          maxHeight: "90%"
        }
      },
      children: /* @__PURE__ */ x("div", { className: "py-1 px-1.5 min-w-14", children: t })
    }
  );
}
export {
  Le as Modal
};
