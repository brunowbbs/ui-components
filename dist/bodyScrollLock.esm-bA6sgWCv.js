import "./assets/bodyScrollLock.css";
import { G as p } from "./iconBase-Kt3AV8wV.js";
import { g as S } from "./index-DBw-Vlhv.js";
function z(o) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, child: [] }] })(o);
}
function D(o) {
  return p({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }, child: [] }] })(o);
}
var w = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = "", r = 0; r < arguments.length; r++) {
        var s = arguments[r];
        s && (n = i(n, l(s)));
      }
      return n;
    }
    function l(n) {
      if (typeof n == "string" || typeof n == "number")
        return n;
      if (typeof n != "object")
        return "";
      if (Array.isArray(n))
        return t.apply(null, n);
      if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]"))
        return n.toString();
      var r = "";
      for (var s in n)
        e.call(n, s) && n[s] && (r = i(r, s));
      return r;
    }
    function i(n, r) {
      return r ? n ? n + " " + r : n + r : n;
    }
    o.exports ? (t.default = t, o.exports = t) : window.classNames = t;
  })();
})(w);
var b = w.exports;
const I = /* @__PURE__ */ S(b);
function T(o) {
  if (Array.isArray(o)) {
    for (var e = 0, t = Array(o.length); e < o.length; e++)
      t[e] = o[e];
    return t;
  } else
    return Array.from(o);
}
var v = !1;
if (typeof window < "u") {
  var h = {
    get passive() {
      v = !0;
    }
  };
  window.addEventListener("testPassive", null, h), window.removeEventListener("testPassive", null, h);
}
var y = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), a = [], f = !1, g = -1, u = void 0, d = void 0, m = function(e) {
  return a.some(function(t) {
    return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
  });
}, c = function(e) {
  var t = e || window.event;
  return m(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}, M = function(e) {
  if (d === void 0) {
    var t = !!e && e.reserveScrollBarGap === !0, l = window.innerWidth - document.documentElement.clientWidth;
    t && l > 0 && (d = document.body.style.paddingRight, document.body.style.paddingRight = l + "px");
  }
  u === void 0 && (u = document.body.style.overflow, document.body.style.overflow = "hidden");
}, x = function() {
  d !== void 0 && (document.body.style.paddingRight = d, d = void 0), u !== void 0 && (document.body.style.overflow = u, u = void 0);
}, B = function(e) {
  return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
}, H = function(e, t) {
  var l = e.targetTouches[0].clientY - g;
  return m(e.target) ? !1 : t && t.scrollTop === 0 && l > 0 || B(t) && l < 0 ? c(e) : (e.stopPropagation(), !0);
}, L = function(e, t) {
  if (!e) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!a.some(function(i) {
    return i.targetElement === e;
  })) {
    var l = {
      targetElement: e,
      options: t || {}
    };
    a = [].concat(T(a), [l]), y ? (e.ontouchstart = function(i) {
      i.targetTouches.length === 1 && (g = i.targetTouches[0].clientY);
    }, e.ontouchmove = function(i) {
      i.targetTouches.length === 1 && H(i, e);
    }, f || (document.addEventListener("touchmove", c, v ? { passive: !1 } : void 0), f = !0)) : M(t);
  }
}, R = function(e) {
  if (!e) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  a = a.filter(function(t) {
    return t.targetElement !== e;
  }), y ? (e.ontouchstart = null, e.ontouchmove = null, f && a.length === 0 && (document.removeEventListener("touchmove", c, v ? { passive: !1 } : void 0), f = !1)) : a.length || x();
};
export {
  z as M,
  D as a,
  I as c,
  L as d,
  R as e
};
