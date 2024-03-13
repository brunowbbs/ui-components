import { jsx as x } from "react/jsx-runtime";
import { c as E, d as ye, e as pe, M as be } from "../../bodyScrollLock.esm-bA6sgWCv.js";
import u, { useRef as I, useState as he, useEffect as A } from "react";
import { R as Ce } from "../../index-DBw-Vlhv.js";
import { o as Ee } from "../../index.m-fyFwXEot.js";
function N() {
  return N = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var t in o)
        Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
    }
    return e;
  }, N.apply(this, arguments);
}
var Ie = function(n) {
  var o = n.classes, t = n.classNames, a = n.styles, r = n.id, l = n.closeIcon, v = n.onClick;
  return u.createElement("button", {
    id: r,
    className: E(o.closeButton, t == null ? void 0 : t.closeButton),
    style: a == null ? void 0 : a.closeButton,
    onClick: v,
    "data-testid": "close-button"
  }, l || u.createElement("svg", {
    className: t == null ? void 0 : t.closeIcon,
    style: a == null ? void 0 : a.closeIcon,
    width: 28,
    height: 28,
    viewBox: "0 0 36 36",
    "data-testid": "close-icon"
  }, u.createElement("path", {
    d: "M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"
  })));
}, w = typeof window < "u", J = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
function Ae(e) {
  return e.offsetParent === null || getComputedStyle(e).visibility === "hidden";
}
function ge(e, n) {
  for (var o = 0; o < e.length; o++)
    if (e[o].checked && e[o].form === n)
      return e[o];
}
function Oe(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !0;
  var n = e.form || e.ownerDocument, o = n.querySelectorAll('input[type="radio"][name="' + e.name + '"]'), t = ge(o, e.form);
  return t === e || t === void 0 && o[0] === e;
}
function Q(e) {
  for (var n = document.activeElement, o = e.querySelectorAll(J.join(",")), t = [], a = 0; a < o.length; a++) {
    var r = o[a];
    (n === r || !r.disabled && Ne(r) > -1 && !Ae(r) && Oe(r)) && t.push(r);
  }
  return t;
}
function we(e, n) {
  if (!(!e || e.key !== "Tab")) {
    if (!n || !n.contains)
      return process && process.env.NODE_ENV === "development" && console.warn("focus-trap-js: parent element is not defined"), !1;
    if (!n.contains(e.target))
      return !1;
    var o = Q(n), t = o[0], a = o[o.length - 1];
    return e.shiftKey && e.target === t ? (a.focus(), e.preventDefault(), !0) : !e.shiftKey && e.target === a ? (t.focus(), e.preventDefault(), !0) : !1;
  }
}
function Ne(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return isNaN(n) ? ke(e) ? 0 : e.tabIndex : n;
}
function ke(e) {
  return e.getAttribute("contentEditable");
}
var Se = function(n) {
  var o = n.container, t = n.initialFocusRef, a = I();
  return A(function() {
    var r = function(p) {
      o != null && o.current && we(p, o.current);
    };
    if (w && document.addEventListener("keydown", r), w && (o != null && o.current)) {
      var l = function() {
        J.findIndex(function(p) {
          var b;
          return (b = document.activeElement) == null ? void 0 : b.matches(p);
        }) !== -1 && (a.current = document.activeElement);
      };
      if (t)
        l(), requestAnimationFrame(function() {
          var c;
          (c = t.current) == null || c.focus();
        });
      else {
        var v = Q(o.current);
        v[0] && (l(), v[0].focus());
      }
    }
    return function() {
      if (w) {
        var c;
        document.removeEventListener("keydown", r), (c = a.current) == null || c.focus();
      }
    };
  }, [o, t]), null;
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
    y = y.filter(function(o) {
      return o !== n;
    });
  },
  /**
   * When multiple modals are rendered will return true if current modal is the last one
   */
  isTopModal: function(n) {
    return !!y.length && y[y.length - 1] === n;
  }
};
function Re(e, n) {
  A(function() {
    return n && M.add(e), function() {
      M.remove(e);
    };
  }, [n, e]);
}
var xe = function(n, o, t, a, r) {
  var l = I(null);
  A(function() {
    return o && n.current && a && (l.current = n.current, ye(n.current, {
      reserveScrollBarGap: r
    })), function() {
      l.current && (pe(l.current), l.current = null);
    };
  }, [o, t, n, a, r]);
}, s = {
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
}, Me = /* @__PURE__ */ u.forwardRef(function(e, n) {
  var o, t, a, r, l = e.open, v = e.center, c = e.blockScroll, p = c === void 0 ? !0 : c, b = e.closeOnEsc, W = b === void 0 ? !0 : b, T = e.closeOnOverlayClick, X = T === void 0 ? !0 : T, k = e.container, D = e.showCloseIcon, Y = D === void 0 ? !0 : D, Z = e.closeIconId, _ = e.closeIcon, $ = e.focusTrapped, ee = $ === void 0 ? !0 : $, F = e.initialFocusRef, ne = F === void 0 ? void 0 : F, B = e.animationDuration, L = B === void 0 ? 300 : B, i = e.classNames, d = e.styles, K = e.role, oe = K === void 0 ? "dialog" : K, te = e.ariaDescribedby, ae = e.ariaLabelledby, le = e.containerId, re = e.modalId, S = e.onClose, P = e.onEscKeyDown, j = e.onOverlayClick, q = e.onAnimationEnd, ie = e.children, ce = e.reserveScrollBarGap, z = Ee(n), g = I(null), f = I(null), m = I(null);
  m.current === null && w && (m.current = document.createElement("div"));
  var G = he(!1), h = G[0], H = G[1];
  Re(g, l), xe(g, l, h, p, ce);
  var se = function() {
    m.current && !k && !document.body.contains(m.current) && document.body.appendChild(m.current), document.addEventListener("keydown", U);
  }, ue = function() {
    m.current && !k && document.body.contains(m.current) && document.body.removeChild(m.current), document.removeEventListener("keydown", U);
  }, U = function(O) {
    O.keyCode !== 27 || !M.isTopModal(g) || (P == null || P(O), W && S());
  };
  A(function() {
    return function() {
      h && ue();
    };
  }, [h]), A(function() {
    l && !h && (H(!0), se());
  }, [l]);
  var de = function(O) {
    if (f.current === null && (f.current = !0), !f.current) {
      f.current = null;
      return;
    }
    j == null || j(O), X && S(), f.current = null;
  }, R = function() {
    f.current = !1;
  }, me = function() {
    l || H(!1), q == null || q();
  }, V = k || m.current, ve = l ? (o = i == null ? void 0 : i.overlayAnimationIn) != null ? o : s.overlayAnimationIn : (t = i == null ? void 0 : i.overlayAnimationOut) != null ? t : s.overlayAnimationOut, fe = l ? (a = i == null ? void 0 : i.modalAnimationIn) != null ? a : s.modalAnimationIn : (r = i == null ? void 0 : i.modalAnimationOut) != null ? r : s.modalAnimationOut;
  return h && V ? Ce.createPortal(u.createElement("div", {
    className: E(s.root, i == null ? void 0 : i.root),
    style: d == null ? void 0 : d.root,
    "data-testid": "root"
  }, u.createElement("div", {
    className: E(s.overlay, i == null ? void 0 : i.overlay),
    "data-testid": "overlay",
    "aria-hidden": !0,
    style: N({
      animation: ve + " " + L + "ms"
    }, d == null ? void 0 : d.overlay)
  }), u.createElement("div", {
    ref: g,
    id: le,
    className: E(s.modalContainer, v && s.modalContainerCenter, i == null ? void 0 : i.modalContainer),
    style: d == null ? void 0 : d.modalContainer,
    "data-testid": "modal-container",
    onClick: de
  }, u.createElement("div", {
    ref: z,
    className: E(s.modal, i == null ? void 0 : i.modal),
    style: N({
      animation: fe + " " + L + "ms"
    }, d == null ? void 0 : d.modal),
    onMouseDown: R,
    onMouseUp: R,
    onClick: R,
    onAnimationEnd: me,
    id: re,
    role: oe,
    "aria-modal": "true",
    "aria-labelledby": ae,
    "aria-describedby": te,
    "data-testid": "modal",
    tabIndex: -1
  }, ee && u.createElement(Se, {
    container: z,
    initialFocusRef: ne
  }), ie, Y && u.createElement(Ie, {
    classes: s,
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
  children: o,
  maxWidth: t = 400
}) {
  return /* @__PURE__ */ x(
    Me,
    {
      center: !0,
      closeIcon: /* @__PURE__ */ x(be, { size: 18 }),
      open: e,
      onClose: n,
      styles: {
        modal: {
          width: "90%",
          maxWidth: t,
          borderRadius: 8,
          maxHeight: "90%"
        }
      },
      children: /* @__PURE__ */ x("div", { className: "py-1 px-1.5 min-w-14", children: o })
    }
  );
}
export {
  Le as Modal
};
