import "../../assets/index.css";
import { jsxs as z, jsx as L } from "react/jsx-runtime";
import Ae, { useState as fe, useRef as pe, useEffect as ue } from "react";
import { L as ve, P as ye } from "../../index-DX8KtFCS.js";
import { a as me } from "../../bodyScrollLock.esm-bA6sgWCv.js";
import { c as he } from "../../index-DBw-Vlhv.js";
import { c as ge } from "../../clsx-DB4S2d7J.js";
import { Popover as be } from "../../components/popover/index.js";
import "../../quill.snow-Bb1LqjhI.js";
import "../../index-BONPznb0.js";
import { G as Ee } from "../../iconBase-Kt3AV8wV.js";
import { m as ce } from "../../motion-7zb_jOK2.js";
var de = { exports: {} };
(function(Y, G) {
  (function(J, V) {
    Y.exports = V(Ae);
  })(he, (Z) => (
    /******/
    (() => {
      var J = {
        /***/
        "./node_modules/css-mediaquery/index.js": (
          /*!**********************************************!*\
            !*** ./node_modules/css-mediaquery/index.js ***!
            \**********************************************/
          /***/
          (g, e) => {
            e.match = a, e.parse = i;
            var n = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, y = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, p = /^(?:(min|max)-)?(.+)/, A = /(em|rem|px|cm|mm|in|pt|pc)?$/, t = /(dpi|dpcm|dppx)?$/;
            function a(v, u) {
              return i(v).some(function(m) {
                var W = m.inverse, b = m.type === "all" || u.type === m.type;
                if (b && W || !(b || W))
                  return !1;
                var k = m.expressions.every(function(f) {
                  var P = f.feature, j = f.modifier, w = f.value, h = u[P];
                  if (!h)
                    return !1;
                  switch (P) {
                    case "orientation":
                    case "scan":
                      return h.toLowerCase() === w.toLowerCase();
                    case "width":
                    case "height":
                    case "device-width":
                    case "device-height":
                      w = s(w), h = s(h);
                      break;
                    case "resolution":
                      w = o(w), h = o(h);
                      break;
                    case "aspect-ratio":
                    case "device-aspect-ratio":
                    case /* Deprecated */
                    "device-pixel-ratio":
                      w = d(w), h = d(h);
                      break;
                    case "grid":
                    case "color":
                    case "color-index":
                    case "monochrome":
                      w = parseInt(w, 10) || 1, h = parseInt(h, 10) || 0;
                      break;
                  }
                  switch (j) {
                    case "min":
                      return h >= w;
                    case "max":
                      return h <= w;
                    default:
                      return h === w;
                  }
                });
                return k && !W || !k && W;
              });
            }
            function i(v) {
              return v.split(",").map(function(u) {
                u = u.trim();
                var m = u.match(n), W = m[1], b = m[2], k = m[3] || "", f = {};
                return f.inverse = !!W && W.toLowerCase() === "not", f.type = b ? b.toLowerCase() : "all", k = k.match(/\([^\)]+\)/g) || [], f.expressions = k.map(function(P) {
                  var j = P.match(y), w = j[1].toLowerCase().match(p);
                  return {
                    modifier: w[1],
                    feature: w[2],
                    value: j[2]
                  };
                }), f;
              });
            }
            function d(v) {
              var u = Number(v), m;
              return u || (m = v.match(/^(\d+)\s*\/\s*(\d+)$/), u = m[1] / m[2]), u;
            }
            function o(v) {
              var u = parseFloat(v), m = String(v).match(t)[1];
              switch (m) {
                case "dpcm":
                  return u / 2.54;
                case "dppx":
                  return u * 96;
                default:
                  return u;
              }
            }
            function s(v) {
              var u = parseFloat(v), m = String(v).match(A)[1];
              switch (m) {
                case "em":
                  return u * 16;
                case "rem":
                  return u * 16;
                case "cm":
                  return u * 96 / 2.54;
                case "mm":
                  return u * 96 / 2.54 / 10;
                case "in":
                  return u * 96;
                case "pt":
                  return u * 72;
                case "pc":
                  return u * 72 / 12;
                default:
                  return u;
              }
            }
          }
        ),
        /***/
        "./node_modules/hyphenate-style-name/index.js": (
          /*!****************************************************!*\
            !*** ./node_modules/hyphenate-style-name/index.js ***!
            \****************************************************/
          /***/
          (g, e, n) => {
            n.r(e), n.d(e, {
              /* harmony export */
              default: () => i
              /* harmony export */
            });
            var y = /[A-Z]/g, p = /^ms-/, A = {};
            function t(d) {
              return "-" + d.toLowerCase();
            }
            function a(d) {
              if (A.hasOwnProperty(d))
                return A[d];
              var o = d.replace(y, t);
              return A[d] = p.test(o) ? "-" + o : o;
            }
            const i = a;
          }
        ),
        /***/
        "./node_modules/matchmediaquery/index.js": (
          /*!***********************************************!*\
            !*** ./node_modules/matchmediaquery/index.js ***!
            \***********************************************/
          /***/
          (g, e, n) => {
            var y = n(
              /*! css-mediaquery */
              "./node_modules/css-mediaquery/index.js"
            ).match, p = typeof window < "u" ? window.matchMedia : null;
            function A(a, i, d) {
              var o = this;
              if (p && !d) {
                var s = p.call(window, a);
                this.matches = s.matches, this.media = s.media, s.addListener(m);
              } else
                this.matches = y(a, i), this.media = a;
              this.addListener = v, this.removeListener = u, this.dispose = W;
              function v(b) {
                s && s.addListener(b);
              }
              function u(b) {
                s && s.removeListener(b);
              }
              function m(b) {
                o.matches = b.matches, o.media = b.media;
              }
              function W() {
                s && s.removeListener(m);
              }
            }
            function t(a, i, d) {
              return new A(a, i, d);
            }
            g.exports = t;
          }
        ),
        /***/
        "./node_modules/object-assign/index.js": (
          /*!*********************************************!*\
            !*** ./node_modules/object-assign/index.js ***!
            \*********************************************/
          /***/
          (g) => {
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
            function p(t) {
              if (t == null)
                throw new TypeError("Object.assign cannot be called with null or undefined");
              return Object(t);
            }
            function A() {
              try {
                if (!Object.assign)
                  return !1;
                var t = new String("abc");
                if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
                  return !1;
                for (var a = {}, i = 0; i < 10; i++)
                  a["_" + String.fromCharCode(i)] = i;
                var d = Object.getOwnPropertyNames(a).map(function(s) {
                  return a[s];
                });
                if (d.join("") !== "0123456789")
                  return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(s) {
                  o[s] = s;
                }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
              } catch {
                return !1;
              }
            }
            g.exports = A() ? Object.assign : function(t, a) {
              for (var i, d = p(t), o, s = 1; s < arguments.length; s++) {
                i = Object(arguments[s]);
                for (var v in i)
                  n.call(i, v) && (d[v] = i[v]);
                if (e) {
                  o = e(i);
                  for (var u = 0; u < o.length; u++)
                    y.call(i, o[u]) && (d[o[u]] = i[o[u]]);
                }
              }
              return d;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/checkPropTypes.js": (
          /*!***************************************************!*\
            !*** ./node_modules/prop-types/checkPropTypes.js ***!
            \***************************************************/
          /***/
          (g, e, n) => {
            var y = function() {
            };
            {
              var p = n(
                /*! ./lib/ReactPropTypesSecret */
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
              ), A = {}, t = n(
                /*! ./lib/has */
                "./node_modules/prop-types/lib/has.js"
              );
              y = function(i) {
                var d = "Warning: " + i;
                typeof console < "u" && console.error(d);
                try {
                  throw new Error(d);
                } catch {
                }
              };
            }
            function a(i, d, o, s, v) {
              for (var u in i)
                if (t(i, u)) {
                  var m;
                  try {
                    if (typeof i[u] != "function") {
                      var W = Error(
                        (s || "React class") + ": " + o + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw W.name = "Invariant Violation", W;
                    }
                    m = i[u](d, u, s, o, null, p);
                  } catch (k) {
                    m = k;
                  }
                  if (m && !(m instanceof Error) && y(
                    (s || "React class") + ": type specification of " + o + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                  ), m instanceof Error && !(m.message in A)) {
                    A[m.message] = !0;
                    var b = v ? v() : "";
                    y(
                      "Failed " + o + " type: " + m.message + (b ?? "")
                    );
                  }
                }
            }
            a.resetWarningCache = function() {
              A = {};
            }, g.exports = a;
          }
        ),
        /***/
        "./node_modules/prop-types/factoryWithTypeCheckers.js": (
          /*!************************************************************!*\
            !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
            \************************************************************/
          /***/
          (g, e, n) => {
            var y = n(
              /*! react-is */
              "./node_modules/react-is/index.js"
            ), p = n(
              /*! object-assign */
              "./node_modules/object-assign/index.js"
            ), A = n(
              /*! ./lib/ReactPropTypesSecret */
              "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
            ), t = n(
              /*! ./lib/has */
              "./node_modules/prop-types/lib/has.js"
            ), a = n(
              /*! ./checkPropTypes */
              "./node_modules/prop-types/checkPropTypes.js"
            ), i = function() {
            };
            i = function(o) {
              var s = "Warning: " + o;
              typeof console < "u" && console.error(s);
              try {
                throw new Error(s);
              } catch {
              }
            };
            function d() {
              return null;
            }
            g.exports = function(o, s) {
              var v = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
              function m(r) {
                var l = r && (v && r[v] || r[u]);
                if (typeof l == "function")
                  return l;
              }
              var W = "<<anonymous>>", b = {
                array: j("array"),
                bigint: j("bigint"),
                bool: j("boolean"),
                func: j("function"),
                number: j("number"),
                object: j("object"),
                string: j("string"),
                symbol: j("symbol"),
                any: w(),
                arrayOf: h,
                element: M(),
                elementType: N(),
                instanceOf: H,
                node: ne(),
                objectOf: te,
                oneOf: ee,
                oneOfType: re,
                shape: ae,
                exact: ie
              };
              function k(r, l) {
                return r === l ? r !== 0 || 1 / r === 1 / l : r !== r && l !== l;
              }
              function f(r, l) {
                this.message = r, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
              }
              f.prototype = Error.prototype;
              function P(r) {
                var l = {}, T = 0;
                function S(x, O, R, I, Q, C, c) {
                  if (I = I || W, C = C || R, c !== A) {
                    if (s) {
                      var D = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      );
                      throw D.name = "Invariant Violation", D;
                    } else if (typeof console < "u") {
                      var q = I + ":" + R;
                      !l[q] && // Avoid spamming the console because they are often not actionable except for lib authors
                      T < 3 && (i(
                        "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                      ), l[q] = !0, T++);
                    }
                  }
                  return O[R] == null ? x ? O[R] === null ? new f("The " + Q + " `" + C + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new f("The " + Q + " `" + C + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : r(O, R, I, Q, C);
                }
                var E = S.bind(null, !1);
                return E.isRequired = S.bind(null, !0), E;
              }
              function j(r) {
                function l(T, S, E, x, O, R) {
                  var I = T[S], Q = B(I);
                  if (Q !== r) {
                    var C = X(I);
                    return new f(
                      "Invalid " + x + " `" + O + "` of type " + ("`" + C + "` supplied to `" + E + "`, expected ") + ("`" + r + "`."),
                      { expectedType: r }
                    );
                  }
                  return null;
                }
                return P(l);
              }
              function w() {
                return P(d);
              }
              function h(r) {
                function l(T, S, E, x, O) {
                  if (typeof r != "function")
                    return new f("Property `" + O + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
                  var R = T[S];
                  if (!Array.isArray(R)) {
                    var I = B(R);
                    return new f("Invalid " + x + " `" + O + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected an array."));
                  }
                  for (var Q = 0; Q < R.length; Q++) {
                    var C = r(R, Q, E, x, O + "[" + Q + "]", A);
                    if (C instanceof Error)
                      return C;
                  }
                  return null;
                }
                return P(l);
              }
              function M() {
                function r(l, T, S, E, x) {
                  var O = l[T];
                  if (!o(O)) {
                    var R = B(O);
                    return new f("Invalid " + E + " `" + x + "` of type " + ("`" + R + "` supplied to `" + S + "`, expected a single ReactElement."));
                  }
                  return null;
                }
                return P(r);
              }
              function N() {
                function r(l, T, S, E, x) {
                  var O = l[T];
                  if (!y.isValidElementType(O)) {
                    var R = B(O);
                    return new f("Invalid " + E + " `" + x + "` of type " + ("`" + R + "` supplied to `" + S + "`, expected a single ReactElement type."));
                  }
                  return null;
                }
                return P(r);
              }
              function H(r) {
                function l(T, S, E, x, O) {
                  if (!(T[S] instanceof r)) {
                    var R = r.name || W, I = $(T[S]);
                    return new f("Invalid " + x + " `" + O + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected ") + ("instance of `" + R + "`."));
                  }
                  return null;
                }
                return P(l);
              }
              function ee(r) {
                if (!Array.isArray(r))
                  return arguments.length > 1 ? i(
                    "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                  ) : i("Invalid argument supplied to oneOf, expected an array."), d;
                function l(T, S, E, x, O) {
                  for (var R = T[S], I = 0; I < r.length; I++)
                    if (k(R, r[I]))
                      return null;
                  var Q = JSON.stringify(r, function(c, D) {
                    var q = X(D);
                    return q === "symbol" ? String(D) : D;
                  });
                  return new f("Invalid " + x + " `" + O + "` of value `" + String(R) + "` " + ("supplied to `" + E + "`, expected one of " + Q + "."));
                }
                return P(l);
              }
              function te(r) {
                function l(T, S, E, x, O) {
                  if (typeof r != "function")
                    return new f("Property `" + O + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
                  var R = T[S], I = B(R);
                  if (I !== "object")
                    return new f("Invalid " + x + " `" + O + "` of type " + ("`" + I + "` supplied to `" + E + "`, expected an object."));
                  for (var Q in R)
                    if (t(R, Q)) {
                      var C = r(R, Q, E, x, O + "." + Q, A);
                      if (C instanceof Error)
                        return C;
                    }
                  return null;
                }
                return P(l);
              }
              function re(r) {
                if (!Array.isArray(r))
                  return i("Invalid argument supplied to oneOfType, expected an instance of array."), d;
                for (var l = 0; l < r.length; l++) {
                  var T = r[l];
                  if (typeof T != "function")
                    return i(
                      "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(T) + " at index " + l + "."
                    ), d;
                }
                function S(E, x, O, R, I) {
                  for (var Q = [], C = 0; C < r.length; C++) {
                    var c = r[C], D = c(E, x, O, R, I, A);
                    if (D == null)
                      return null;
                    D.data && t(D.data, "expectedType") && Q.push(D.data.expectedType);
                  }
                  var q = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
                  return new f("Invalid " + R + " `" + I + "` supplied to " + ("`" + O + "`" + q + "."));
                }
                return P(S);
              }
              function ne() {
                function r(l, T, S, E, x) {
                  return F(l[T]) ? null : new f("Invalid " + E + " `" + x + "` supplied to " + ("`" + S + "`, expected a ReactNode."));
                }
                return P(r);
              }
              function _(r, l, T, S, E) {
                return new f(
                  (r || "React class") + ": " + l + " type `" + T + "." + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
                );
              }
              function ae(r) {
                function l(T, S, E, x, O) {
                  var R = T[S], I = B(R);
                  if (I !== "object")
                    return new f("Invalid " + x + " `" + O + "` of type `" + I + "` " + ("supplied to `" + E + "`, expected `object`."));
                  for (var Q in r) {
                    var C = r[Q];
                    if (typeof C != "function")
                      return _(E, x, O, Q, X(C));
                    var c = C(R, Q, E, x, O + "." + Q, A);
                    if (c)
                      return c;
                  }
                  return null;
                }
                return P(l);
              }
              function ie(r) {
                function l(T, S, E, x, O) {
                  var R = T[S], I = B(R);
                  if (I !== "object")
                    return new f("Invalid " + x + " `" + O + "` of type `" + I + "` " + ("supplied to `" + E + "`, expected `object`."));
                  var Q = p({}, T[S], r);
                  for (var C in Q) {
                    var c = r[C];
                    if (t(r, C) && typeof c != "function")
                      return _(E, x, O, C, X(c));
                    if (!c)
                      return new f(
                        "Invalid " + x + " `" + O + "` key `" + C + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(T[S], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
                      );
                    var D = c(R, C, E, x, O + "." + C, A);
                    if (D)
                      return D;
                  }
                  return null;
                }
                return P(l);
              }
              function F(r) {
                switch (typeof r) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;
                  case "boolean":
                    return !r;
                  case "object":
                    if (Array.isArray(r))
                      return r.every(F);
                    if (r === null || o(r))
                      return !0;
                    var l = m(r);
                    if (l) {
                      var T = l.call(r), S;
                      if (l !== r.entries) {
                        for (; !(S = T.next()).done; )
                          if (!F(S.value))
                            return !1;
                      } else
                        for (; !(S = T.next()).done; ) {
                          var E = S.value;
                          if (E && !F(E[1]))
                            return !1;
                        }
                    } else
                      return !1;
                    return !0;
                  default:
                    return !1;
                }
              }
              function oe(r, l) {
                return r === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
              }
              function B(r) {
                var l = typeof r;
                return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : oe(l, r) ? "symbol" : l;
              }
              function X(r) {
                if (typeof r > "u" || r === null)
                  return "" + r;
                var l = B(r);
                if (l === "object") {
                  if (r instanceof Date)
                    return "date";
                  if (r instanceof RegExp)
                    return "regexp";
                }
                return l;
              }
              function se(r) {
                var l = X(r);
                switch (l) {
                  case "array":
                  case "object":
                    return "an " + l;
                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + l;
                  default:
                    return l;
                }
              }
              function $(r) {
                return !r.constructor || !r.constructor.name ? W : r.constructor.name;
              }
              return b.checkPropTypes = a, b.resetWarningCache = a.resetWarningCache, b.PropTypes = b, b;
            };
          }
        ),
        /***/
        "./node_modules/prop-types/index.js": (
          /*!******************************************!*\
            !*** ./node_modules/prop-types/index.js ***!
            \******************************************/
          /***/
          (g, e, n) => {
            {
              var y = n(
                /*! react-is */
                "./node_modules/react-is/index.js"
              ), p = !0;
              g.exports = n(
                /*! ./factoryWithTypeCheckers */
                "./node_modules/prop-types/factoryWithTypeCheckers.js"
              )(y.isElement, p);
            }
          }
        ),
        /***/
        "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (
          /*!*************************************************************!*\
            !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
            \*************************************************************/
          /***/
          (g) => {
            var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
            g.exports = e;
          }
        ),
        /***/
        "./node_modules/prop-types/lib/has.js": (
          /*!********************************************!*\
            !*** ./node_modules/prop-types/lib/has.js ***!
            \********************************************/
          /***/
          (g) => {
            g.exports = Function.call.bind(Object.prototype.hasOwnProperty);
          }
        ),
        /***/
        "./node_modules/react-is/cjs/react-is.development.js": (
          /*!***********************************************************!*\
            !*** ./node_modules/react-is/cjs/react-is.development.js ***!
            \***********************************************************/
          /***/
          (g, e) => {
            /** @license React v16.13.1
             * react-is.development.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            (function() {
              var n = typeof Symbol == "function" && Symbol.for, y = n ? Symbol.for("react.element") : 60103, p = n ? Symbol.for("react.portal") : 60106, A = n ? Symbol.for("react.fragment") : 60107, t = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114, i = n ? Symbol.for("react.provider") : 60109, d = n ? Symbol.for("react.context") : 60110, o = n ? Symbol.for("react.async_mode") : 60111, s = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, u = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, b = n ? Symbol.for("react.lazy") : 60116, k = n ? Symbol.for("react.block") : 60121, f = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, j = n ? Symbol.for("react.scope") : 60119;
              function w(c) {
                return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                c === A || c === s || c === a || c === t || c === u || c === m || typeof c == "object" && c !== null && (c.$$typeof === b || c.$$typeof === W || c.$$typeof === i || c.$$typeof === d || c.$$typeof === v || c.$$typeof === f || c.$$typeof === P || c.$$typeof === j || c.$$typeof === k);
              }
              function h(c) {
                if (typeof c == "object" && c !== null) {
                  var D = c.$$typeof;
                  switch (D) {
                    case y:
                      var q = c.type;
                      switch (q) {
                        case o:
                        case s:
                        case A:
                        case a:
                        case t:
                        case u:
                          return q;
                        default:
                          var le = q && q.$$typeof;
                          switch (le) {
                            case d:
                            case v:
                            case b:
                            case W:
                            case i:
                              return le;
                            default:
                              return D;
                          }
                      }
                    case p:
                      return D;
                  }
                }
              }
              var M = o, N = s, H = d, ee = i, te = y, re = v, ne = A, _ = b, ae = W, ie = p, F = a, oe = t, B = u, X = !1;
              function se(c) {
                return X || (X = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(c) || h(c) === o;
              }
              function $(c) {
                return h(c) === s;
              }
              function r(c) {
                return h(c) === d;
              }
              function l(c) {
                return h(c) === i;
              }
              function T(c) {
                return typeof c == "object" && c !== null && c.$$typeof === y;
              }
              function S(c) {
                return h(c) === v;
              }
              function E(c) {
                return h(c) === A;
              }
              function x(c) {
                return h(c) === b;
              }
              function O(c) {
                return h(c) === W;
              }
              function R(c) {
                return h(c) === p;
              }
              function I(c) {
                return h(c) === a;
              }
              function Q(c) {
                return h(c) === t;
              }
              function C(c) {
                return h(c) === u;
              }
              e.AsyncMode = M, e.ConcurrentMode = N, e.ContextConsumer = H, e.ContextProvider = ee, e.Element = te, e.ForwardRef = re, e.Fragment = ne, e.Lazy = _, e.Memo = ae, e.Portal = ie, e.Profiler = F, e.StrictMode = oe, e.Suspense = B, e.isAsyncMode = se, e.isConcurrentMode = $, e.isContextConsumer = r, e.isContextProvider = l, e.isElement = T, e.isForwardRef = S, e.isFragment = E, e.isLazy = x, e.isMemo = O, e.isPortal = R, e.isProfiler = I, e.isStrictMode = Q, e.isSuspense = C, e.isValidElementType = w, e.typeOf = h;
            })();
          }
        ),
        /***/
        "./node_modules/react-is/index.js": (
          /*!****************************************!*\
            !*** ./node_modules/react-is/index.js ***!
            \****************************************/
          /***/
          (g, e, n) => {
            g.exports = n(
              /*! ./cjs/react-is.development.js */
              "./node_modules/react-is/cjs/react-is.development.js"
            );
          }
        ),
        /***/
        "./node_modules/shallow-equal/dist/index.esm.js": (
          /*!******************************************************!*\
            !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
            \******************************************************/
          /***/
          (g, e, n) => {
            n.r(e), n.d(e, {
              /* harmony export */
              shallowEqualArrays: () => (
                /* binding */
                p
              ),
              /* harmony export */
              shallowEqualObjects: () => (
                /* binding */
                y
              )
              /* harmony export */
            });
            function y(A, t) {
              if (A === t)
                return !0;
              if (!A || !t)
                return !1;
              var a = Object.keys(A), i = Object.keys(t), d = a.length;
              if (i.length !== d)
                return !1;
              for (var o = 0; o < d; o++) {
                var s = a[o];
                if (A[s] !== t[s] || !Object.prototype.hasOwnProperty.call(t, s))
                  return !1;
              }
              return !0;
            }
            function p(A, t) {
              if (A === t)
                return !0;
              if (!A || !t)
                return !1;
              var a = A.length;
              if (t.length !== a)
                return !1;
              for (var i = 0; i < a; i++)
                if (A[i] !== t[i])
                  return !1;
              return !0;
            }
          }
        ),
        /***/
        "./src/Component.ts": (
          /*!**************************!*\
            !*** ./src/Component.ts ***!
            \**************************/
          /***/
          function(g, e, n) {
            var y = this && this.__rest || function(a, i) {
              var d = {};
              for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && i.indexOf(o) < 0 && (d[o] = a[o]);
              if (a != null && typeof Object.getOwnPropertySymbols == "function")
                for (var s = 0, o = Object.getOwnPropertySymbols(a); s < o.length; s++)
                  i.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, o[s]) && (d[o[s]] = a[o[s]]);
              return d;
            }, p = this && this.__importDefault || function(a) {
              return a && a.__esModule ? a : { default: a };
            };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var A = p(n(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            )), t = function(a) {
              var i = a.children, d = a.device, o = a.onChange, s = y(a, ["children", "device", "onChange"]), v = (0, A.default)(s, d, o);
              return typeof i == "function" ? i(v) : v ? i : null;
            };
            e.default = t;
          }
        ),
        /***/
        "./src/Context.ts": (
          /*!************************!*\
            !*** ./src/Context.ts ***!
            \************************/
          /***/
          (g, e, n) => {
            Object.defineProperty(e, "__esModule", { value: !0 });
            var y = n(
              /*! react */
              "react"
            ), p = (0, y.createContext)(void 0);
            e.default = p;
          }
        ),
        /***/
        "./src/index.ts": (
          /*!**********************!*\
            !*** ./src/index.ts ***!
            \**********************/
          /***/
          function(g, e, n) {
            var y = this && this.__importDefault || function(i) {
              return i && i.__esModule ? i : { default: i };
            };
            Object.defineProperty(e, "__esModule", { value: !0 }), e.Context = e.toQuery = e.useMediaQuery = e.default = void 0;
            var p = y(n(
              /*! ./useMediaQuery */
              "./src/useMediaQuery.ts"
            ));
            e.useMediaQuery = p.default;
            var A = y(n(
              /*! ./Component */
              "./src/Component.ts"
            ));
            e.default = A.default;
            var t = y(n(
              /*! ./toQuery */
              "./src/toQuery.ts"
            ));
            e.toQuery = t.default;
            var a = y(n(
              /*! ./Context */
              "./src/Context.ts"
            ));
            e.Context = a.default;
          }
        ),
        /***/
        "./src/mediaQuery.ts": (
          /*!***************************!*\
            !*** ./src/mediaQuery.ts ***!
            \***************************/
          /***/
          function(g, e, n) {
            var y = this && this.__assign || function() {
              return y = Object.assign || function(u) {
                for (var m, W = 1, b = arguments.length; W < b; W++) {
                  m = arguments[W];
                  for (var k in m)
                    Object.prototype.hasOwnProperty.call(m, k) && (u[k] = m[k]);
                }
                return u;
              }, y.apply(this, arguments);
            }, p = this && this.__rest || function(u, m) {
              var W = {};
              for (var b in u)
                Object.prototype.hasOwnProperty.call(u, b) && m.indexOf(b) < 0 && (W[b] = u[b]);
              if (u != null && typeof Object.getOwnPropertySymbols == "function")
                for (var k = 0, b = Object.getOwnPropertySymbols(u); k < b.length; k++)
                  m.indexOf(b[k]) < 0 && Object.prototype.propertyIsEnumerable.call(u, b[k]) && (W[b[k]] = u[b[k]]);
              return W;
            }, A = this && this.__importDefault || function(u) {
              return u && u.__esModule ? u : { default: u };
            };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var t = A(n(
              /*! prop-types */
              "./node_modules/prop-types/index.js"
            )), a = t.default.oneOfType([
              t.default.string,
              t.default.number
            ]), i = {
              all: t.default.bool,
              grid: t.default.bool,
              aural: t.default.bool,
              braille: t.default.bool,
              handheld: t.default.bool,
              print: t.default.bool,
              projection: t.default.bool,
              screen: t.default.bool,
              tty: t.default.bool,
              tv: t.default.bool,
              embossed: t.default.bool
            }, d = {
              orientation: t.default.oneOf([
                "portrait",
                "landscape"
              ]),
              scan: t.default.oneOf([
                "progressive",
                "interlace"
              ]),
              aspectRatio: t.default.string,
              deviceAspectRatio: t.default.string,
              height: a,
              deviceHeight: a,
              width: a,
              deviceWidth: a,
              color: t.default.bool,
              colorIndex: t.default.bool,
              monochrome: t.default.bool,
              resolution: a,
              type: Object.keys(i)
            };
            d.type;
            var o = p(
              d,
              ["type"]
            ), s = y({ minAspectRatio: t.default.string, maxAspectRatio: t.default.string, minDeviceAspectRatio: t.default.string, maxDeviceAspectRatio: t.default.string, minHeight: a, maxHeight: a, minDeviceHeight: a, maxDeviceHeight: a, minWidth: a, maxWidth: a, minDeviceWidth: a, maxDeviceWidth: a, minColor: t.default.number, maxColor: t.default.number, minColorIndex: t.default.number, maxColorIndex: t.default.number, minMonochrome: t.default.number, maxMonochrome: t.default.number, minResolution: a, maxResolution: a }, o), v = y(y({}, i), s);
            e.default = {
              all: v,
              types: i,
              matchers: d,
              features: s
            };
          }
        ),
        /***/
        "./src/toQuery.ts": (
          /*!************************!*\
            !*** ./src/toQuery.ts ***!
            \************************/
          /***/
          function(g, e, n) {
            var y = this && this.__importDefault || function(o) {
              return o && o.__esModule ? o : { default: o };
            };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var p = y(n(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), A = y(n(
              /*! ./mediaQuery */
              "./src/mediaQuery.ts"
            )), t = function(o) {
              return "not ".concat(o);
            }, a = function(o, s) {
              var v = (0, p.default)(o);
              return typeof s == "number" && (s = "".concat(s, "px")), s === !0 ? v : s === !1 ? t(v) : "(".concat(v, ": ").concat(s, ")");
            }, i = function(o) {
              return o.join(" and ");
            }, d = function(o) {
              var s = [];
              return Object.keys(A.default.all).forEach(function(v) {
                var u = o[v];
                u != null && s.push(a(v, u));
              }), i(s);
            };
            e.default = d;
          }
        ),
        /***/
        "./src/useMediaQuery.ts": (
          /*!******************************!*\
            !*** ./src/useMediaQuery.ts ***!
            \******************************/
          /***/
          function(g, e, n) {
            var y = this && this.__importDefault || function(f) {
              return f && f.__esModule ? f : { default: f };
            };
            Object.defineProperty(e, "__esModule", { value: !0 });
            var p = n(
              /*! react */
              "react"
            ), A = y(n(
              /*! matchmediaquery */
              "./node_modules/matchmediaquery/index.js"
            )), t = y(n(
              /*! hyphenate-style-name */
              "./node_modules/hyphenate-style-name/index.js"
            )), a = n(
              /*! shallow-equal */
              "./node_modules/shallow-equal/dist/index.esm.js"
            ), i = y(n(
              /*! ./toQuery */
              "./src/toQuery.ts"
            )), d = y(n(
              /*! ./Context */
              "./src/Context.ts"
            )), o = function(f) {
              return f.query || (0, i.default)(f);
            }, s = function(f) {
              if (f) {
                var P = Object.keys(f);
                return P.reduce(function(j, w) {
                  return j[(0, t.default)(w)] = f[w], j;
                }, {});
              }
            }, v = function() {
              var f = (0, p.useRef)(!1);
              return (0, p.useEffect)(function() {
                f.current = !0;
              }, []), f.current;
            }, u = function(f) {
              var P = (0, p.useContext)(d.default), j = function() {
                return s(f) || s(P);
              }, w = (0, p.useState)(j), h = w[0], M = w[1];
              return (0, p.useEffect)(function() {
                var N = j();
                (0, a.shallowEqualObjects)(h, N) || M(N);
              }, [f, P]), h;
            }, m = function(f) {
              var P = function() {
                return o(f);
              }, j = (0, p.useState)(P), w = j[0], h = j[1];
              return (0, p.useEffect)(function() {
                var M = P();
                w !== M && h(M);
              }, [f]), w;
            }, W = function(f, P) {
              var j = function() {
                return (0, A.default)(f, P || {}, !!P);
              }, w = (0, p.useState)(j), h = w[0], M = w[1], N = v();
              return (0, p.useEffect)(function() {
                if (N) {
                  var H = j();
                  return M(H), function() {
                    H && H.dispose();
                  };
                }
              }, [f, P]), h;
            }, b = function(f) {
              var P = (0, p.useState)(f.matches), j = P[0], w = P[1];
              return (0, p.useEffect)(function() {
                var h = function(M) {
                  w(M.matches);
                };
                return f.addListener(h), w(f.matches), function() {
                  f.removeListener(h);
                };
              }, [f]), j;
            }, k = function(f, P, j) {
              var w = u(P), h = m(f);
              if (!h)
                throw new Error("Invalid or missing MediaQuery!");
              var M = W(h, w), N = b(M), H = v();
              return (0, p.useEffect)(function() {
                H && j && j(N);
              }, [N]), (0, p.useEffect)(function() {
                return function() {
                  M && M.dispose();
                };
              }, []), N;
            };
            e.default = k;
          }
        ),
        /***/
        react: (
          /*!**************************************************************************************!*\
            !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
            \**************************************************************************************/
          /***/
          (g) => {
            g.exports = Z;
          }
        )
        /******/
      }, V = {};
      function U(g) {
        var e = V[g];
        if (e !== void 0)
          return e.exports;
        var n = V[g] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return J[g].call(n.exports, n, n.exports, U), n.exports;
      }
      U.d = (g, e) => {
        for (var n in e)
          U.o(e, n) && !U.o(g, n) && Object.defineProperty(g, n, { enumerable: !0, get: e[n] });
      }, U.o = (g, e) => Object.prototype.hasOwnProperty.call(g, e), U.r = (g) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(g, "__esModule", { value: !0 });
      };
      var K = U("./src/index.ts");
      return K;
    })()
  ));
})(de);
var Oe = de.exports;
function Pe(Y) {
  return Ee({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" }, child: [] }] })(Y);
}
const we = "data:image/jpeg;base64,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";
function De({
  children: Y,
  menuItems: G = [],
  popoverProfile: Z,
  startSidebarOpened: J = !0
}) {
  const V = Oe.useMediaQuery({ query: "(max-width: 768px)" }), [U, K] = fe(
    !!(J && !V)
  ), g = pe(), [e, n] = fe({
    group: null,
    itemGroup: null
  });
  ue(() => {
    (!localStorage.getItem("@token") || localStorage.getItem("@token") !== "19a&_0129aj81cla0_919*8*as") && localStorage.clear();
  }, []), ue(() => {
    J && !V && K(!0);
  }, [V, J]), ue(() => {
    V && K(!1);
  }, [V]);
  const y = V ? {
    open: {
      x: 0,
      width: "13rem",
      transition: {
        damping: 2
      }
    },
    closed: {
      x: -250,
      width: 0,
      transition: {
        damping: 2,
        delay: 0.05
      }
    }
  } : {
    open: {
      width: "13rem",
      transition: {
        damping: 2
      }
    },
    closed: {
      width: "3.2rem",
      transition: {
        damping: 2
      }
    }
  };
  return /* @__PURE__ */ z("div", { className: "flex", children: [
    /* @__PURE__ */ z("div", { children: [
      /* @__PURE__ */ L(
        "div",
        {
          onClick: () => K(!1),
          className: `md:hidden fixed inset-0 max-h-screen bg-black/50 z-[999] ${U ? "block" : "hidden"} `
        }
      ),
      /* @__PURE__ */ z(
        ce.div,
        {
          ref: g,
          variants: y,
          initial: { x: V ? -250 : 0 },
          animate: U ? "open" : "closed",
          className: ge(
            "bg-white text-gray border-transparent shadow-sm overflow-hidden md:relative fixed h-screen z-[999]",
            { "w-[13rem]": U }
          ),
          children: [
            /* @__PURE__ */ z("div", { className: "flex items-center gap-2 font-medium py-3  mx-5", children: [
              /* @__PURE__ */ L("img", { src: we, width: 12, alt: "", className: "w-[12px]" }),
              (U || V) && /* @__PURE__ */ L("span", { className: "text-[1.rem] whitespace-pre font-semibold text-gray-600", children: "Dashboard" })
            ] }),
            G == null ? void 0 : G.map((p, A) => /* @__PURE__ */ z("div", { className: "px-3", children: [
              (U || V) && /* @__PURE__ */ L(
                "small",
                {
                  className: "text-slate-400 inline-block px-1 font-light text-[12px]",
                  children: p.group_name
                },
                A
              ),
              p.items.map((t, a) => {
                var i, d, o;
                return /* @__PURE__ */ z("div", { children: [
                  /* @__PURE__ */ z(
                    "li",
                    {
                      className: "flex gap-1 py-2 px-1 cursor-pointer hover:bg-slate-100 transition items-center",
                      onClick: t.dropdown && ((i = t.dropdown) == null ? void 0 : i.length) > 0 ? () => {
                        e.group === A && e.itemGroup === a ? n({
                          group: null,
                          itemGroup: null
                        }) : n({
                          group: A,
                          itemGroup: a
                        });
                      } : () => {
                        t.action(), n({
                          group: null,
                          itemGroup: null
                        });
                      },
                      children: [
                        t.icon,
                        (U || V) && /* @__PURE__ */ L("span", { className: "text-sm text-slate-600 font-normal w-full select-none", children: t.title }),
                        (U || V) && t.dropdown && ((d = t.dropdown) == null ? void 0 : d.length) && /* @__PURE__ */ L(Pe, { className: "mr-1", size: 19 })
                      ]
                    },
                    a
                  ),
                  (U || V) && e.group === A && e.itemGroup === a && /* @__PURE__ */ L(
                    ce.div,
                    {
                      className: "select-none",
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: { duration: 0.2 },
                      children: (o = t.dropdown) == null ? void 0 : o.map((s, v) => /* @__PURE__ */ L("div", { className: "flex", children: /* @__PURE__ */ z(
                        "button",
                        {
                          onClick: s.action,
                          className: "flex-1 text-[12px] ml-4 text-slate-600 font-light items-center flex gap-2 py-1 px-1 cursor-pointer hover:bg-slate-100 transition",
                          children: [
                            /* @__PURE__ */ L("span", { className: "text-[6px]", children: "○" }),
                            s.title
                          ]
                        }
                      ) }, v))
                    }
                  )
                ] });
              })
            ] }))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ z("div", { className: "h-screen w-screen flex flex-col flex-1", children: [
      /* @__PURE__ */ z("div", { className: "bg-white py-4 pl-2 pr-6 ml-[1px] flex items-center gap-2 h-12 justify-between border-b", children: [
        /* @__PURE__ */ z("div", { className: "flex gap-2 flex-1", children: [
          /* @__PURE__ */ L(
            "div",
            {
              className: "m-1 md:hidden cursor-pointer",
              onClick: () => K(!0),
              children: /* @__PURE__ */ L(me, { size: 25 })
            }
          ),
          /* @__PURE__ */ L("div", { className: "flex", children: /* @__PURE__ */ L(
            "div",
            {
              onClick: () => {
                K(!U);
              },
              className: "bg-gray-100 px-1.5 py-1.5 rounded relative cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300 md:block hidden",
              children: /* @__PURE__ */ L(
                ce.div,
                {
                  animate: U ? { rotate: 0 } : { rotate: 180 },
                  transition: { duration: 0 },
                  children: /* @__PURE__ */ L(ve, { size: 20 })
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ L("div", { className: "flex gap-2", children: /* @__PURE__ */ L(
          be,
          {
            left: 530,
            mask_button: /* @__PURE__ */ L(
              "img",
              {
                src: "https://avatars.githubusercontent.com/brunowbbs",
                className: "w-8 h-8 rounded-full cursor-pointer"
              }
            ),
            children: /* @__PURE__ */ L(
              ye,
              {
                userLoggedData: Z.userLoggedData,
                logoutAction: Z.logoutAction,
                menuItems: Z.menuItems
              }
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ L(
        "section",
        {
          className: "flex-1 px-5 py-3 overflow-y-auto bg-slate-100",
          style: { paddingBottom: 10 },
          children: Y
        }
      )
    ] })
  ] });
}
export {
  De as DashboardLayout
};
