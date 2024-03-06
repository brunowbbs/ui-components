import "./assets/quill.css";
import { c as ct, r as Ce, g as $e } from "./index-DBw-Vlhv.js";
import Fe from "react";
function Ue() {
  this.__data__ = [], this.size = 0;
}
var He = Ue;
function Ke(S, R) {
  return S === R || S !== S && R !== R;
}
var Ae = Ke, ze = Ae;
function Ge(S, R) {
  for (var _ = S.length; _--; )
    if (ze(S[_][0], R))
      return _;
  return -1;
}
var Lt = Ge, Ve = Lt, We = Array.prototype, Ze = We.splice;
function Ye(S) {
  var R = this.__data__, _ = Ve(R, S);
  if (_ < 0)
    return !1;
  var s = R.length - 1;
  return _ == s ? R.pop() : Ze.call(R, _, 1), --this.size, !0;
}
var Xe = Ye, Qe = Lt;
function Je(S) {
  var R = this.__data__, _ = Qe(R, S);
  return _ < 0 ? void 0 : R[_][1];
}
var tn = Je, en = Lt;
function nn(S) {
  return en(this.__data__, S) > -1;
}
var rn = nn, on = Lt;
function an(S, R) {
  var _ = this.__data__, s = on(_, S);
  return s < 0 ? (++this.size, _.push([S, R])) : _[s][1] = R, this;
}
var ln = an, un = He, sn = Xe, fn = tn, cn = rn, hn = ln;
function mt(S) {
  var R = -1, _ = S == null ? 0 : S.length;
  for (this.clear(); ++R < _; ) {
    var s = S[R];
    this.set(s[0], s[1]);
  }
}
mt.prototype.clear = un;
mt.prototype.delete = sn;
mt.prototype.get = fn;
mt.prototype.has = cn;
mt.prototype.set = hn;
var qt = mt, dn = qt;
function vn() {
  this.__data__ = new dn(), this.size = 0;
}
var pn = vn;
function yn(S) {
  var R = this.__data__, _ = R.delete(S);
  return this.size = R.size, _;
}
var gn = yn;
function mn(S) {
  return this.__data__.get(S);
}
var bn = mn;
function _n(S) {
  return this.__data__.has(S);
}
var On = _n, En = typeof ct == "object" && ct && ct.Object === Object && ct, we = En, An = we, wn = typeof self == "object" && self && self.Object === Object && self, Tn = An || wn || Function("return this")(), pt = Tn, kn = pt, Nn = kn.Symbol, Gt = Nn, Zt = Gt, Te = Object.prototype, Sn = Te.hasOwnProperty, xn = Te.toString, wt = Zt ? Zt.toStringTag : void 0;
function Pn(S) {
  var R = Sn.call(S, wt), _ = S[wt];
  try {
    S[wt] = void 0;
    var s = !0;
  } catch {
  }
  var d = xn.call(S);
  return s && (R ? S[wt] = _ : delete S[wt]), d;
}
var Ln = Pn, qn = Object.prototype, Rn = qn.toString;
function jn(S) {
  return Rn.call(S);
}
var In = jn, Yt = Gt, Mn = Ln, Dn = In, Bn = "[object Null]", Cn = "[object Undefined]", Xt = Yt ? Yt.toStringTag : void 0;
function $n(S) {
  return S == null ? S === void 0 ? Cn : Bn : Xt && Xt in Object(S) ? Mn(S) : Dn(S);
}
var Rt = $n;
function Fn(S) {
  var R = typeof S;
  return S != null && (R == "object" || R == "function");
}
var ke = Fn, Un = Rt, Hn = ke, Kn = "[object AsyncFunction]", zn = "[object Function]", Gn = "[object GeneratorFunction]", Vn = "[object Proxy]";
function Wn(S) {
  if (!Hn(S))
    return !1;
  var R = Un(S);
  return R == zn || R == Gn || R == Kn || R == Vn;
}
var Ne = Wn, Zn = pt, Yn = Zn["__core-js_shared__"], Xn = Yn, Bt = Xn, Qt = function() {
  var S = /[^.]+$/.exec(Bt && Bt.keys && Bt.keys.IE_PROTO || "");
  return S ? "Symbol(src)_1." + S : "";
}();
function Qn(S) {
  return !!Qt && Qt in S;
}
var Jn = Qn, tr = Function.prototype, er = tr.toString;
function nr(S) {
  if (S != null) {
    try {
      return er.call(S);
    } catch {
    }
    try {
      return S + "";
    } catch {
    }
  }
  return "";
}
var Se = nr, rr = Ne, ir = Jn, or = ke, ar = Se, lr = /[\\^$.*+?()[\]{}|]/g, ur = /^\[object .+?Constructor\]$/, sr = Function.prototype, fr = Object.prototype, cr = sr.toString, hr = fr.hasOwnProperty, dr = RegExp(
  "^" + cr.call(hr).replace(lr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vr(S) {
  if (!or(S) || ir(S))
    return !1;
  var R = rr(S) ? dr : ur;
  return R.test(ar(S));
}
var pr = vr;
function yr(S, R) {
  return S == null ? void 0 : S[R];
}
var gr = yr, mr = pr, br = gr;
function _r(S, R) {
  var _ = br(S, R);
  return mr(_) ? _ : void 0;
}
var bt = _r, Or = bt, Er = pt, Ar = Or(Er, "Map"), Vt = Ar, wr = bt, Tr = wr(Object, "create"), jt = Tr, Jt = jt;
function kr() {
  this.__data__ = Jt ? Jt(null) : {}, this.size = 0;
}
var Nr = kr;
function Sr(S) {
  var R = this.has(S) && delete this.__data__[S];
  return this.size -= R ? 1 : 0, R;
}
var xr = Sr, Pr = jt, Lr = "__lodash_hash_undefined__", qr = Object.prototype, Rr = qr.hasOwnProperty;
function jr(S) {
  var R = this.__data__;
  if (Pr) {
    var _ = R[S];
    return _ === Lr ? void 0 : _;
  }
  return Rr.call(R, S) ? R[S] : void 0;
}
var Ir = jr, Mr = jt, Dr = Object.prototype, Br = Dr.hasOwnProperty;
function Cr(S) {
  var R = this.__data__;
  return Mr ? R[S] !== void 0 : Br.call(R, S);
}
var $r = Cr, Fr = jt, Ur = "__lodash_hash_undefined__";
function Hr(S, R) {
  var _ = this.__data__;
  return this.size += this.has(S) ? 0 : 1, _[S] = Fr && R === void 0 ? Ur : R, this;
}
var Kr = Hr, zr = Nr, Gr = xr, Vr = Ir, Wr = $r, Zr = Kr;
function _t(S) {
  var R = -1, _ = S == null ? 0 : S.length;
  for (this.clear(); ++R < _; ) {
    var s = S[R];
    this.set(s[0], s[1]);
  }
}
_t.prototype.clear = zr;
_t.prototype.delete = Gr;
_t.prototype.get = Vr;
_t.prototype.has = Wr;
_t.prototype.set = Zr;
var Yr = _t, te = Yr, Xr = qt, Qr = Vt;
function Jr() {
  this.size = 0, this.__data__ = {
    hash: new te(),
    map: new (Qr || Xr)(),
    string: new te()
  };
}
var ti = Jr;
function ei(S) {
  var R = typeof S;
  return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? S !== "__proto__" : S === null;
}
var ni = ei, ri = ni;
function ii(S, R) {
  var _ = S.__data__;
  return ri(R) ? _[typeof R == "string" ? "string" : "hash"] : _.map;
}
var It = ii, oi = It;
function ai(S) {
  var R = oi(this, S).delete(S);
  return this.size -= R ? 1 : 0, R;
}
var li = ai, ui = It;
function si(S) {
  return ui(this, S).get(S);
}
var fi = si, ci = It;
function hi(S) {
  return ci(this, S).has(S);
}
var di = hi, vi = It;
function pi(S, R) {
  var _ = vi(this, S), s = _.size;
  return _.set(S, R), this.size += _.size == s ? 0 : 1, this;
}
var yi = pi, gi = ti, mi = li, bi = fi, _i = di, Oi = yi;
function Ot(S) {
  var R = -1, _ = S == null ? 0 : S.length;
  for (this.clear(); ++R < _; ) {
    var s = S[R];
    this.set(s[0], s[1]);
  }
}
Ot.prototype.clear = gi;
Ot.prototype.delete = mi;
Ot.prototype.get = bi;
Ot.prototype.has = _i;
Ot.prototype.set = Oi;
var xe = Ot, Ei = qt, Ai = Vt, wi = xe, Ti = 200;
function ki(S, R) {
  var _ = this.__data__;
  if (_ instanceof Ei) {
    var s = _.__data__;
    if (!Ai || s.length < Ti - 1)
      return s.push([S, R]), this.size = ++_.size, this;
    _ = this.__data__ = new wi(s);
  }
  return _.set(S, R), this.size = _.size, this;
}
var Ni = ki, Si = qt, xi = pn, Pi = gn, Li = bn, qi = On, Ri = Ni;
function Et(S) {
  var R = this.__data__ = new Si(S);
  this.size = R.size;
}
Et.prototype.clear = xi;
Et.prototype.delete = Pi;
Et.prototype.get = Li;
Et.prototype.has = qi;
Et.prototype.set = Ri;
var ji = Et, Ii = "__lodash_hash_undefined__";
function Mi(S) {
  return this.__data__.set(S, Ii), this;
}
var Di = Mi;
function Bi(S) {
  return this.__data__.has(S);
}
var Ci = Bi, $i = xe, Fi = Di, Ui = Ci;
function Nt(S) {
  var R = -1, _ = S == null ? 0 : S.length;
  for (this.__data__ = new $i(); ++R < _; )
    this.add(S[R]);
}
Nt.prototype.add = Nt.prototype.push = Fi;
Nt.prototype.has = Ui;
var Hi = Nt;
function Ki(S, R) {
  for (var _ = -1, s = S == null ? 0 : S.length; ++_ < s; )
    if (R(S[_], _, S))
      return !0;
  return !1;
}
var zi = Ki;
function Gi(S, R) {
  return S.has(R);
}
var Vi = Gi, Wi = Hi, Zi = zi, Yi = Vi, Xi = 1, Qi = 2;
function Ji(S, R, _, s, d, T) {
  var A = _ & Xi, b = S.length, v = R.length;
  if (b != v && !(A && v > b))
    return !1;
  var y = T.get(S), h = T.get(R);
  if (y && h)
    return y == R && h == S;
  var o = -1, t = !0, e = _ & Qi ? new Wi() : void 0;
  for (T.set(S, R), T.set(R, S); ++o < b; ) {
    var u = S[o], a = R[o];
    if (s)
      var l = A ? s(a, u, o, R, S, T) : s(u, a, o, S, R, T);
    if (l !== void 0) {
      if (l)
        continue;
      t = !1;
      break;
    }
    if (e) {
      if (!Zi(R, function(r, i) {
        if (!Yi(e, i) && (u === r || d(u, r, _, s, T)))
          return e.push(i);
      })) {
        t = !1;
        break;
      }
    } else if (!(u === a || d(u, a, _, s, T))) {
      t = !1;
      break;
    }
  }
  return T.delete(S), T.delete(R), t;
}
var Pe = Ji, to = pt, eo = to.Uint8Array, no = eo;
function ro(S) {
  var R = -1, _ = Array(S.size);
  return S.forEach(function(s, d) {
    _[++R] = [d, s];
  }), _;
}
var io = ro;
function oo(S) {
  var R = -1, _ = Array(S.size);
  return S.forEach(function(s) {
    _[++R] = s;
  }), _;
}
var ao = oo, ee = Gt, ne = no, lo = Ae, uo = Pe, so = io, fo = ao, co = 1, ho = 2, vo = "[object Boolean]", po = "[object Date]", yo = "[object Error]", go = "[object Map]", mo = "[object Number]", bo = "[object RegExp]", _o = "[object Set]", Oo = "[object String]", Eo = "[object Symbol]", Ao = "[object ArrayBuffer]", wo = "[object DataView]", re = ee ? ee.prototype : void 0, Ct = re ? re.valueOf : void 0;
function To(S, R, _, s, d, T, A) {
  switch (_) {
    case wo:
      if (S.byteLength != R.byteLength || S.byteOffset != R.byteOffset)
        return !1;
      S = S.buffer, R = R.buffer;
    case Ao:
      return !(S.byteLength != R.byteLength || !T(new ne(S), new ne(R)));
    case vo:
    case po:
    case mo:
      return lo(+S, +R);
    case yo:
      return S.name == R.name && S.message == R.message;
    case bo:
    case Oo:
      return S == R + "";
    case go:
      var b = so;
    case _o:
      var v = s & co;
      if (b || (b = fo), S.size != R.size && !v)
        return !1;
      var y = A.get(S);
      if (y)
        return y == R;
      s |= ho, A.set(S, R);
      var h = uo(b(S), b(R), s, d, T, A);
      return A.delete(S), h;
    case Eo:
      if (Ct)
        return Ct.call(S) == Ct.call(R);
  }
  return !1;
}
var ko = To;
function No(S, R) {
  for (var _ = -1, s = R.length, d = S.length; ++_ < s; )
    S[d + _] = R[_];
  return S;
}
var So = No, xo = Array.isArray, Wt = xo, Po = So, Lo = Wt;
function qo(S, R, _) {
  var s = R(S);
  return Lo(S) ? s : Po(s, _(S));
}
var Ro = qo;
function jo(S, R) {
  for (var _ = -1, s = S == null ? 0 : S.length, d = 0, T = []; ++_ < s; ) {
    var A = S[_];
    R(A, _, S) && (T[d++] = A);
  }
  return T;
}
var Io = jo;
function Mo() {
  return [];
}
var Do = Mo, Bo = Io, Co = Do, $o = Object.prototype, Fo = $o.propertyIsEnumerable, ie = Object.getOwnPropertySymbols, Uo = ie ? function(S) {
  return S == null ? [] : (S = Object(S), Bo(ie(S), function(R) {
    return Fo.call(S, R);
  }));
} : Co, Ho = Uo;
function Ko(S, R) {
  for (var _ = -1, s = Array(S); ++_ < S; )
    s[_] = R(_);
  return s;
}
var zo = Ko;
function Go(S) {
  return S != null && typeof S == "object";
}
var Mt = Go, Vo = Rt, Wo = Mt, Zo = "[object Arguments]";
function Yo(S) {
  return Wo(S) && Vo(S) == Zo;
}
var Xo = Yo, oe = Xo, Qo = Mt, Le = Object.prototype, Jo = Le.hasOwnProperty, ta = Le.propertyIsEnumerable, ea = oe(/* @__PURE__ */ function() {
  return arguments;
}()) ? oe : function(S) {
  return Qo(S) && Jo.call(S, "callee") && !ta.call(S, "callee");
}, na = ea, St = { exports: {} };
function ra() {
  return !1;
}
var ia = ra;
St.exports;
(function(S, R) {
  var _ = pt, s = ia, d = R && !R.nodeType && R, T = d && !0 && S && !S.nodeType && S, A = T && T.exports === d, b = A ? _.Buffer : void 0, v = b ? b.isBuffer : void 0, y = v || s;
  S.exports = y;
})(St, St.exports);
var qe = St.exports, oa = 9007199254740991, aa = /^(?:0|[1-9]\d*)$/;
function la(S, R) {
  var _ = typeof S;
  return R = R ?? oa, !!R && (_ == "number" || _ != "symbol" && aa.test(S)) && S > -1 && S % 1 == 0 && S < R;
}
var ua = la, sa = 9007199254740991;
function fa(S) {
  return typeof S == "number" && S > -1 && S % 1 == 0 && S <= sa;
}
var Re = fa, ca = Rt, ha = Re, da = Mt, va = "[object Arguments]", pa = "[object Array]", ya = "[object Boolean]", ga = "[object Date]", ma = "[object Error]", ba = "[object Function]", _a = "[object Map]", Oa = "[object Number]", Ea = "[object Object]", Aa = "[object RegExp]", wa = "[object Set]", Ta = "[object String]", ka = "[object WeakMap]", Na = "[object ArrayBuffer]", Sa = "[object DataView]", xa = "[object Float32Array]", Pa = "[object Float64Array]", La = "[object Int8Array]", qa = "[object Int16Array]", Ra = "[object Int32Array]", ja = "[object Uint8Array]", Ia = "[object Uint8ClampedArray]", Ma = "[object Uint16Array]", Da = "[object Uint32Array]", at = {};
at[xa] = at[Pa] = at[La] = at[qa] = at[Ra] = at[ja] = at[Ia] = at[Ma] = at[Da] = !0;
at[va] = at[pa] = at[Na] = at[ya] = at[Sa] = at[ga] = at[ma] = at[ba] = at[_a] = at[Oa] = at[Ea] = at[Aa] = at[wa] = at[Ta] = at[ka] = !1;
function Ba(S) {
  return da(S) && ha(S.length) && !!at[ca(S)];
}
var Ca = Ba;
function $a(S) {
  return function(R) {
    return S(R);
  };
}
var Fa = $a, xt = { exports: {} };
xt.exports;
(function(S, R) {
  var _ = we, s = R && !R.nodeType && R, d = s && !0 && S && !S.nodeType && S, T = d && d.exports === s, A = T && _.process, b = function() {
    try {
      var v = d && d.require && d.require("util").types;
      return v || A && A.binding && A.binding("util");
    } catch {
    }
  }();
  S.exports = b;
})(xt, xt.exports);
var Ua = xt.exports, Ha = Ca, Ka = Fa, ae = Ua, le = ae && ae.isTypedArray, za = le ? Ka(le) : Ha, je = za, Ga = zo, Va = na, Wa = Wt, Za = qe, Ya = ua, Xa = je, Qa = Object.prototype, Ja = Qa.hasOwnProperty;
function tl(S, R) {
  var _ = Wa(S), s = !_ && Va(S), d = !_ && !s && Za(S), T = !_ && !s && !d && Xa(S), A = _ || s || d || T, b = A ? Ga(S.length, String) : [], v = b.length;
  for (var y in S)
    (R || Ja.call(S, y)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
    (y == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    d && (y == "offset" || y == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    T && (y == "buffer" || y == "byteLength" || y == "byteOffset") || // Skip index properties.
    Ya(y, v))) && b.push(y);
  return b;
}
var el = tl, nl = Object.prototype;
function rl(S) {
  var R = S && S.constructor, _ = typeof R == "function" && R.prototype || nl;
  return S === _;
}
var il = rl;
function ol(S, R) {
  return function(_) {
    return S(R(_));
  };
}
var al = ol, ll = al, ul = ll(Object.keys, Object), sl = ul, fl = il, cl = sl, hl = Object.prototype, dl = hl.hasOwnProperty;
function vl(S) {
  if (!fl(S))
    return cl(S);
  var R = [];
  for (var _ in Object(S))
    dl.call(S, _) && _ != "constructor" && R.push(_);
  return R;
}
var pl = vl, yl = Ne, gl = Re;
function ml(S) {
  return S != null && gl(S.length) && !yl(S);
}
var bl = ml, _l = el, Ol = pl, El = bl;
function Al(S) {
  return El(S) ? _l(S) : Ol(S);
}
var wl = Al, Tl = Ro, kl = Ho, Nl = wl;
function Sl(S) {
  return Tl(S, Nl, kl);
}
var xl = Sl, ue = xl, Pl = 1, Ll = Object.prototype, ql = Ll.hasOwnProperty;
function Rl(S, R, _, s, d, T) {
  var A = _ & Pl, b = ue(S), v = b.length, y = ue(R), h = y.length;
  if (v != h && !A)
    return !1;
  for (var o = v; o--; ) {
    var t = b[o];
    if (!(A ? t in R : ql.call(R, t)))
      return !1;
  }
  var e = T.get(S), u = T.get(R);
  if (e && u)
    return e == R && u == S;
  var a = !0;
  T.set(S, R), T.set(R, S);
  for (var l = A; ++o < v; ) {
    t = b[o];
    var r = S[t], i = R[t];
    if (s)
      var f = A ? s(i, r, t, R, S, T) : s(r, i, t, S, R, T);
    if (!(f === void 0 ? r === i || d(r, i, _, s, T) : f)) {
      a = !1;
      break;
    }
    l || (l = t == "constructor");
  }
  if (a && !l) {
    var n = S.constructor, c = R.constructor;
    n != c && "constructor" in S && "constructor" in R && !(typeof n == "function" && n instanceof n && typeof c == "function" && c instanceof c) && (a = !1);
  }
  return T.delete(S), T.delete(R), a;
}
var jl = Rl, Il = bt, Ml = pt, Dl = Il(Ml, "DataView"), Bl = Dl, Cl = bt, $l = pt, Fl = Cl($l, "Promise"), Ul = Fl, Hl = bt, Kl = pt, zl = Hl(Kl, "Set"), Gl = zl, Vl = bt, Wl = pt, Zl = Vl(Wl, "WeakMap"), Yl = Zl, Ft = Bl, Ut = Vt, Ht = Ul, Kt = Gl, zt = Yl, Ie = Rt, At = Se, se = "[object Map]", Xl = "[object Object]", fe = "[object Promise]", ce = "[object Set]", he = "[object WeakMap]", de = "[object DataView]", Ql = At(Ft), Jl = At(Ut), tu = At(Ht), eu = At(Kt), nu = At(zt), gt = Ie;
(Ft && gt(new Ft(new ArrayBuffer(1))) != de || Ut && gt(new Ut()) != se || Ht && gt(Ht.resolve()) != fe || Kt && gt(new Kt()) != ce || zt && gt(new zt()) != he) && (gt = function(S) {
  var R = Ie(S), _ = R == Xl ? S.constructor : void 0, s = _ ? At(_) : "";
  if (s)
    switch (s) {
      case Ql:
        return de;
      case Jl:
        return se;
      case tu:
        return fe;
      case eu:
        return ce;
      case nu:
        return he;
    }
  return R;
});
var ru = gt, $t = ji, iu = Pe, ou = ko, au = jl, ve = ru, pe = Wt, ye = qe, lu = je, uu = 1, ge = "[object Arguments]", me = "[object Array]", kt = "[object Object]", su = Object.prototype, be = su.hasOwnProperty;
function fu(S, R, _, s, d, T) {
  var A = pe(S), b = pe(R), v = A ? me : ve(S), y = b ? me : ve(R);
  v = v == ge ? kt : v, y = y == ge ? kt : y;
  var h = v == kt, o = y == kt, t = v == y;
  if (t && ye(S)) {
    if (!ye(R))
      return !1;
    A = !0, h = !1;
  }
  if (t && !h)
    return T || (T = new $t()), A || lu(S) ? iu(S, R, _, s, d, T) : ou(S, R, v, _, s, d, T);
  if (!(_ & uu)) {
    var e = h && be.call(S, "__wrapped__"), u = o && be.call(R, "__wrapped__");
    if (e || u) {
      var a = e ? S.value() : S, l = u ? R.value() : R;
      return T || (T = new $t()), d(a, l, _, s, T);
    }
  }
  return t ? (T || (T = new $t()), au(S, R, _, s, d, T)) : !1;
}
var cu = fu, hu = cu, _e = Mt;
function Me(S, R, _, s, d) {
  return S === R ? !0 : S == null || R == null || !_e(S) && !_e(R) ? S !== S && R !== R : hu(S, R, _, s, Me, d);
}
var du = Me, vu = du;
function pu(S, R) {
  return vu(S, R);
}
var yu = pu, De = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
(function(S, R) {
  (function(s, d) {
    S.exports = d();
  })(typeof self < "u" ? self : ct, function() {
    return (
      /******/
      function(_) {
        var s = {};
        function d(T) {
          if (s[T])
            return s[T].exports;
          var A = s[T] = {
            /******/
            i: T,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return _[T].call(A.exports, A, A.exports, d), A.l = !0, A.exports;
        }
        return d.m = _, d.c = s, d.d = function(T, A, b) {
          d.o(T, A) || Object.defineProperty(T, A, {
            /******/
            configurable: !1,
            /******/
            enumerable: !0,
            /******/
            get: b
            /******/
          });
        }, d.n = function(T) {
          var A = T && T.__esModule ? (
            /******/
            function() {
              return T.default;
            }
          ) : (
            /******/
            function() {
              return T;
            }
          );
          return d.d(A, "a", A), A;
        }, d.o = function(T, A) {
          return Object.prototype.hasOwnProperty.call(T, A);
        }, d.p = "", d(d.s = 109);
      }([
        /* 0 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var T = d(17), A = d(18), b = d(19), v = d(45), y = d(46), h = d(47), o = d(48), t = d(49), e = d(12), u = d(32), a = d(33), l = d(31), r = d(1), i = {
            Scope: r.Scope,
            create: r.create,
            find: r.find,
            query: r.query,
            register: r.register,
            Container: T.default,
            Format: A.default,
            Leaf: b.default,
            Embed: o.default,
            Scroll: v.default,
            Block: h.default,
            Inline: y.default,
            Text: t.default,
            Attributor: {
              Attribute: e.default,
              Class: u.default,
              Style: a.default,
              Store: l.default
            }
          };
          s.default = i;
        },
        /* 1 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var l = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
              r.__proto__ = i;
            } || function(r, i) {
              for (var f in i)
                i.hasOwnProperty(f) && (r[f] = i[f]);
            };
            return function(r, i) {
              l(r, i);
              function f() {
                this.constructor = r;
              }
              r.prototype = i === null ? Object.create(i) : (f.prototype = i.prototype, new f());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = (
            /** @class */
            function(l) {
              T(r, l);
              function r(i) {
                var f = this;
                return i = "[Parchment] " + i, f = l.call(this, i) || this, f.message = i, f.name = f.constructor.name, f;
              }
              return r;
            }(Error)
          );
          s.ParchmentError = A;
          var b = {}, v = {}, y = {}, h = {};
          s.DATA_KEY = "__blot";
          var o;
          (function(l) {
            l[l.TYPE = 3] = "TYPE", l[l.LEVEL = 12] = "LEVEL", l[l.ATTRIBUTE = 13] = "ATTRIBUTE", l[l.BLOT = 14] = "BLOT", l[l.INLINE = 7] = "INLINE", l[l.BLOCK = 11] = "BLOCK", l[l.BLOCK_BLOT = 10] = "BLOCK_BLOT", l[l.INLINE_BLOT = 6] = "INLINE_BLOT", l[l.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", l[l.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", l[l.ANY = 15] = "ANY";
          })(o = s.Scope || (s.Scope = {}));
          function t(l, r) {
            var i = u(l);
            if (i == null)
              throw new A("Unable to create " + l + " blot");
            var f = i, n = (
              // @ts-ignore
              l instanceof Node || l.nodeType === Node.TEXT_NODE ? l : f.create(r)
            );
            return new f(n, r);
          }
          s.create = t;
          function e(l, r) {
            return r === void 0 && (r = !1), l == null ? null : l[s.DATA_KEY] != null ? l[s.DATA_KEY].blot : r ? e(l.parentNode, r) : null;
          }
          s.find = e;
          function u(l, r) {
            r === void 0 && (r = o.ANY);
            var i;
            if (typeof l == "string")
              i = h[l] || b[l];
            else if (l instanceof Text || l.nodeType === Node.TEXT_NODE)
              i = h.text;
            else if (typeof l == "number")
              l & o.LEVEL & o.BLOCK ? i = h.block : l & o.LEVEL & o.INLINE && (i = h.inline);
            else if (l instanceof HTMLElement) {
              var f = (l.getAttribute("class") || "").split(/\s+/);
              for (var n in f)
                if (i = v[f[n]], i)
                  break;
              i = i || y[l.tagName];
            }
            return i == null ? null : r & o.LEVEL & i.scope && r & o.TYPE & i.scope ? i : null;
          }
          s.query = u;
          function a() {
            for (var l = [], r = 0; r < arguments.length; r++)
              l[r] = arguments[r];
            if (l.length > 1)
              return l.map(function(n) {
                return a(n);
              });
            var i = l[0];
            if (typeof i.blotName != "string" && typeof i.attrName != "string")
              throw new A("Invalid definition");
            if (i.blotName === "abstract")
              throw new A("Cannot register abstract class");
            if (h[i.blotName || i.attrName] = i, typeof i.keyName == "string")
              b[i.keyName] = i;
            else if (i.className != null && (v[i.className] = i), i.tagName != null) {
              Array.isArray(i.tagName) ? i.tagName = i.tagName.map(function(n) {
                return n.toUpperCase();
              }) : i.tagName = i.tagName.toUpperCase();
              var f = Array.isArray(i.tagName) ? i.tagName : [i.tagName];
              f.forEach(function(n) {
                (y[n] == null || i.className == null) && (y[n] = i);
              });
            }
            return i;
          }
          s.register = a;
        },
        /* 2 */
        /***/
        function(_, s, d) {
          var T = d(51), A = d(11), b = d(3), v = d(20), y = "\0", h = function(o) {
            Array.isArray(o) ? this.ops = o : o != null && Array.isArray(o.ops) ? this.ops = o.ops : this.ops = [];
          };
          h.prototype.insert = function(o, t) {
            var e = {};
            return o.length === 0 ? this : (e.insert = o, t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e));
          }, h.prototype.delete = function(o) {
            return o <= 0 ? this : this.push({ delete: o });
          }, h.prototype.retain = function(o, t) {
            if (o <= 0)
              return this;
            var e = { retain: o };
            return t != null && typeof t == "object" && Object.keys(t).length > 0 && (e.attributes = t), this.push(e);
          }, h.prototype.push = function(o) {
            var t = this.ops.length, e = this.ops[t - 1];
            if (o = b(!0, {}, o), typeof e == "object") {
              if (typeof o.delete == "number" && typeof e.delete == "number")
                return this.ops[t - 1] = { delete: e.delete + o.delete }, this;
              if (typeof e.delete == "number" && o.insert != null && (t -= 1, e = this.ops[t - 1], typeof e != "object"))
                return this.ops.unshift(o), this;
              if (A(o.attributes, e.attributes)) {
                if (typeof o.insert == "string" && typeof e.insert == "string")
                  return this.ops[t - 1] = { insert: e.insert + o.insert }, typeof o.attributes == "object" && (this.ops[t - 1].attributes = o.attributes), this;
                if (typeof o.retain == "number" && typeof e.retain == "number")
                  return this.ops[t - 1] = { retain: e.retain + o.retain }, typeof o.attributes == "object" && (this.ops[t - 1].attributes = o.attributes), this;
              }
            }
            return t === this.ops.length ? this.ops.push(o) : this.ops.splice(t, 0, o), this;
          }, h.prototype.chop = function() {
            var o = this.ops[this.ops.length - 1];
            return o && o.retain && !o.attributes && this.ops.pop(), this;
          }, h.prototype.filter = function(o) {
            return this.ops.filter(o);
          }, h.prototype.forEach = function(o) {
            this.ops.forEach(o);
          }, h.prototype.map = function(o) {
            return this.ops.map(o);
          }, h.prototype.partition = function(o) {
            var t = [], e = [];
            return this.forEach(function(u) {
              var a = o(u) ? t : e;
              a.push(u);
            }), [t, e];
          }, h.prototype.reduce = function(o, t) {
            return this.ops.reduce(o, t);
          }, h.prototype.changeLength = function() {
            return this.reduce(function(o, t) {
              return t.insert ? o + v.length(t) : t.delete ? o - t.delete : o;
            }, 0);
          }, h.prototype.length = function() {
            return this.reduce(function(o, t) {
              return o + v.length(t);
            }, 0);
          }, h.prototype.slice = function(o, t) {
            o = o || 0, typeof t != "number" && (t = 1 / 0);
            for (var e = [], u = v.iterator(this.ops), a = 0; a < t && u.hasNext(); ) {
              var l;
              a < o ? l = u.next(o - a) : (l = u.next(t - a), e.push(l)), a += v.length(l);
            }
            return new h(e);
          }, h.prototype.compose = function(o) {
            var t = v.iterator(this.ops), e = v.iterator(o.ops), u = [], a = e.peek();
            if (a != null && typeof a.retain == "number" && a.attributes == null) {
              for (var l = a.retain; t.peekType() === "insert" && t.peekLength() <= l; )
                l -= t.peekLength(), u.push(t.next());
              a.retain - l > 0 && e.next(a.retain - l);
            }
            for (var r = new h(u); t.hasNext() || e.hasNext(); )
              if (e.peekType() === "insert")
                r.push(e.next());
              else if (t.peekType() === "delete")
                r.push(t.next());
              else {
                var i = Math.min(t.peekLength(), e.peekLength()), f = t.next(i), n = e.next(i);
                if (typeof n.retain == "number") {
                  var c = {};
                  typeof f.retain == "number" ? c.retain = i : c.insert = f.insert;
                  var N = v.attributes.compose(f.attributes, n.attributes, typeof f.retain == "number");
                  if (N && (c.attributes = N), r.push(c), !e.hasNext() && A(r.ops[r.ops.length - 1], c)) {
                    var O = new h(t.rest());
                    return r.concat(O).chop();
                  }
                } else
                  typeof n.delete == "number" && typeof f.retain == "number" && r.push(n);
              }
            return r.chop();
          }, h.prototype.concat = function(o) {
            var t = new h(this.ops.slice());
            return o.ops.length > 0 && (t.push(o.ops[0]), t.ops = t.ops.concat(o.ops.slice(1))), t;
          }, h.prototype.diff = function(o, t) {
            if (this.ops === o.ops)
              return new h();
            var e = [this, o].map(function(i) {
              return i.map(function(f) {
                if (f.insert != null)
                  return typeof f.insert == "string" ? f.insert : y;
                var n = i === o ? "on" : "with";
                throw new Error("diff() called " + n + " non-document");
              }).join("");
            }), u = new h(), a = T(e[0], e[1], t), l = v.iterator(this.ops), r = v.iterator(o.ops);
            return a.forEach(function(i) {
              for (var f = i[1].length; f > 0; ) {
                var n = 0;
                switch (i[0]) {
                  case T.INSERT:
                    n = Math.min(r.peekLength(), f), u.push(r.next(n));
                    break;
                  case T.DELETE:
                    n = Math.min(f, l.peekLength()), l.next(n), u.delete(n);
                    break;
                  case T.EQUAL:
                    n = Math.min(l.peekLength(), r.peekLength(), f);
                    var c = l.next(n), N = r.next(n);
                    A(c.insert, N.insert) ? u.retain(n, v.attributes.diff(c.attributes, N.attributes)) : u.push(N).delete(n);
                    break;
                }
                f -= n;
              }
            }), u.chop();
          }, h.prototype.eachLine = function(o, t) {
            t = t || `
`;
            for (var e = v.iterator(this.ops), u = new h(), a = 0; e.hasNext(); ) {
              if (e.peekType() !== "insert")
                return;
              var l = e.peek(), r = v.length(l) - e.peekLength(), i = typeof l.insert == "string" ? l.insert.indexOf(t, r) - r : -1;
              if (i < 0)
                u.push(e.next());
              else if (i > 0)
                u.push(e.next(i));
              else {
                if (o(u, e.next(1).attributes || {}, a) === !1)
                  return;
                a += 1, u = new h();
              }
            }
            u.length() > 0 && o(u, {}, a);
          }, h.prototype.transform = function(o, t) {
            if (t = !!t, typeof o == "number")
              return this.transformPosition(o, t);
            for (var e = v.iterator(this.ops), u = v.iterator(o.ops), a = new h(); e.hasNext() || u.hasNext(); )
              if (e.peekType() === "insert" && (t || u.peekType() !== "insert"))
                a.retain(v.length(e.next()));
              else if (u.peekType() === "insert")
                a.push(u.next());
              else {
                var l = Math.min(e.peekLength(), u.peekLength()), r = e.next(l), i = u.next(l);
                if (r.delete)
                  continue;
                i.delete ? a.push(i) : a.retain(l, v.attributes.transform(r.attributes, i.attributes, t));
              }
            return a.chop();
          }, h.prototype.transformPosition = function(o, t) {
            t = !!t;
            for (var e = v.iterator(this.ops), u = 0; e.hasNext() && u <= o; ) {
              var a = e.peekLength(), l = e.peekType();
              if (e.next(), l === "delete") {
                o -= Math.min(a, o - u);
                continue;
              } else
                l === "insert" && (u < o || !t) && (o += a);
              u += a;
            }
            return o;
          }, _.exports = h;
        },
        /* 3 */
        /***/
        function(_, s) {
          var d = Object.prototype.hasOwnProperty, T = Object.prototype.toString, A = Object.defineProperty, b = Object.getOwnPropertyDescriptor, v = function(e) {
            return typeof Array.isArray == "function" ? Array.isArray(e) : T.call(e) === "[object Array]";
          }, y = function(e) {
            if (!e || T.call(e) !== "[object Object]")
              return !1;
            var u = d.call(e, "constructor"), a = e.constructor && e.constructor.prototype && d.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !u && !a)
              return !1;
            var l;
            for (l in e)
              ;
            return typeof l > "u" || d.call(e, l);
          }, h = function(e, u) {
            A && u.name === "__proto__" ? A(e, u.name, {
              enumerable: !0,
              configurable: !0,
              value: u.newValue,
              writable: !0
            }) : e[u.name] = u.newValue;
          }, o = function(e, u) {
            if (u === "__proto__")
              if (d.call(e, u)) {
                if (b)
                  return b(e, u).value;
              } else
                return;
            return e[u];
          };
          _.exports = function t() {
            var e, u, a, l, r, i, f = arguments[0], n = 1, c = arguments.length, N = !1;
            for (typeof f == "boolean" && (N = f, f = arguments[1] || {}, n = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); n < c; ++n)
              if (e = arguments[n], e != null)
                for (u in e)
                  a = o(f, u), l = o(e, u), f !== l && (N && l && (y(l) || (r = v(l))) ? (r ? (r = !1, i = a && v(a) ? a : []) : i = a && y(a) ? a : {}, h(f, { name: u, newValue: t(N, i, l) })) : typeof l < "u" && h(f, { name: u, newValue: l }));
            return f;
          };
        },
        /* 4 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BlockEmbed = s.bubbleFormats = void 0;
          var T = /* @__PURE__ */ function() {
            function p(g, k) {
              for (var P = 0; P < k.length; P++) {
                var I = k[P];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(g, I.key, I);
              }
            }
            return function(g, k, P) {
              return k && p(g.prototype, k), P && p(g, P), g;
            };
          }(), A = function p(g, k, P) {
            g === null && (g = Function.prototype);
            var I = Object.getOwnPropertyDescriptor(g, k);
            if (I === void 0) {
              var $ = Object.getPrototypeOf(g);
              return $ === null ? void 0 : p($, k, P);
            } else {
              if ("value" in I)
                return I.value;
              var F = I.get;
              return F === void 0 ? void 0 : F.call(P);
            }
          }, b = d(3), v = f(b), y = d(2), h = f(y), o = d(0), t = f(o), e = d(16), u = f(e), a = d(6), l = f(a), r = d(7), i = f(r);
          function f(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function n(p, g) {
            if (!(p instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(p, g) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : p;
          }
          function N(p, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            p.prototype = Object.create(g && g.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g);
          }
          var O = 1, E = function(p) {
            N(g, p);
            function g() {
              return n(this, g), c(this, (g.__proto__ || Object.getPrototypeOf(g)).apply(this, arguments));
            }
            return T(g, [{
              key: "attach",
              value: function() {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "attach", this).call(this), this.attributes = new t.default.Attributor.Store(this.domNode);
              }
            }, {
              key: "delta",
              value: function() {
                return new h.default().insert(this.value(), (0, v.default)(this.formats(), this.attributes.values()));
              }
            }, {
              key: "format",
              value: function(P, I) {
                var $ = t.default.query(P, t.default.Scope.BLOCK_ATTRIBUTE);
                $ != null && this.attributes.attribute($, I);
              }
            }, {
              key: "formatAt",
              value: function(P, I, $, F) {
                this.format($, F);
              }
            }, {
              key: "insertAt",
              value: function(P, I, $) {
                if (typeof I == "string" && I.endsWith(`
`)) {
                  var F = t.default.create(x.blotName);
                  this.parent.insertBefore(F, P === 0 ? this : this.next), F.insertAt(0, I.slice(0, -1));
                } else
                  A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, P, I, $);
              }
            }]), g;
          }(t.default.Embed);
          E.scope = t.default.Scope.BLOCK_BLOT;
          var x = function(p) {
            N(g, p);
            function g(k) {
              n(this, g);
              var P = c(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, k));
              return P.cache = {}, P;
            }
            return T(g, [{
              key: "delta",
              value: function() {
                return this.cache.delta == null && (this.cache.delta = this.descendants(t.default.Leaf).reduce(function(P, I) {
                  return I.length() === 0 ? P : P.insert(I.value(), m(I));
                }, new h.default()).insert(`
`, m(this))), this.cache.delta;
              }
            }, {
              key: "deleteAt",
              value: function(P, I) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "deleteAt", this).call(this, P, I), this.cache = {};
              }
            }, {
              key: "formatAt",
              value: function(P, I, $, F) {
                I <= 0 || (t.default.query($, t.default.Scope.BLOCK) ? P + I === this.length() && this.format($, F) : A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "formatAt", this).call(this, P, Math.min(I, this.length() - P - 1), $, F), this.cache = {});
              }
            }, {
              key: "insertAt",
              value: function(P, I, $) {
                if ($ != null)
                  return A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, P, I, $);
                if (I.length !== 0) {
                  var F = I.split(`
`), W = F.shift();
                  W.length > 0 && (P < this.length() - 1 || this.children.tail == null ? A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertAt", this).call(this, Math.min(P, this.length() - 1), W) : this.children.tail.insertAt(this.children.tail.length(), W), this.cache = {});
                  var B = this;
                  F.reduce(function(M, w) {
                    return B = B.split(M, !0), B.insertAt(0, w), w.length;
                  }, P + W.length);
                }
              }
            }, {
              key: "insertBefore",
              value: function(P, I) {
                var $ = this.children.head;
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "insertBefore", this).call(this, P, I), $ instanceof u.default && $.remove(), this.cache = {};
              }
            }, {
              key: "length",
              value: function() {
                return this.cache.length == null && (this.cache.length = A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "length", this).call(this) + O), this.cache.length;
              }
            }, {
              key: "moveChildren",
              value: function(P, I) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "moveChildren", this).call(this, P, I), this.cache = {};
              }
            }, {
              key: "optimize",
              value: function(P) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "optimize", this).call(this, P), this.cache = {};
              }
            }, {
              key: "path",
              value: function(P) {
                return A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "path", this).call(this, P, !0);
              }
            }, {
              key: "removeChild",
              value: function(P) {
                A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "removeChild", this).call(this, P), this.cache = {};
              }
            }, {
              key: "split",
              value: function(P) {
                var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (I && (P === 0 || P >= this.length() - O)) {
                  var $ = this.clone();
                  return P === 0 ? (this.parent.insertBefore($, this), this) : (this.parent.insertBefore($, this.next), $);
                } else {
                  var F = A(g.prototype.__proto__ || Object.getPrototypeOf(g.prototype), "split", this).call(this, P, I);
                  return this.cache = {}, F;
                }
              }
            }]), g;
          }(t.default.Block);
          x.blotName = "block", x.tagName = "P", x.defaultChild = "break", x.allowedChildren = [l.default, t.default.Embed, i.default];
          function m(p) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return p == null || (typeof p.formats == "function" && (g = (0, v.default)(g, p.formats())), p.parent == null || p.parent.blotName == "scroll" || p.parent.statics.scope !== p.statics.scope) ? g : m(p.parent, g);
          }
          s.bubbleFormats = m, s.BlockEmbed = E, s.default = x;
        },
        /* 5 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.overload = s.expandConfig = void 0;
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          }, A = /* @__PURE__ */ function() {
            function B(M, w) {
              var q = [], j = !0, U = !1, C = void 0;
              try {
                for (var L = M[Symbol.iterator](), D; !(j = (D = L.next()).done) && (q.push(D.value), !(w && q.length === w)); j = !0)
                  ;
              } catch (H) {
                U = !0, C = H;
              } finally {
                try {
                  !j && L.return && L.return();
                } finally {
                  if (U)
                    throw C;
                }
              }
              return q;
            }
            return function(M, w) {
              if (Array.isArray(M))
                return M;
              if (Symbol.iterator in Object(M))
                return B(M, w);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), b = /* @__PURE__ */ function() {
            function B(M, w) {
              for (var q = 0; q < w.length; q++) {
                var j = w[q];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(M, j.key, j);
              }
            }
            return function(M, w, q) {
              return w && B(M.prototype, w), q && B(M, q), M;
            };
          }();
          d(50);
          var v = d(2), y = m(v), h = d(14), o = m(h), t = d(8), e = m(t), u = d(9), a = m(u), l = d(0), r = m(l), i = d(15), f = m(i), n = d(3), c = m(n), N = d(10), O = m(N), E = d(34), x = m(E);
          function m(B) {
            return B && B.__esModule ? B : { default: B };
          }
          function p(B, M, w) {
            return M in B ? Object.defineProperty(B, M, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : B[M] = w, B;
          }
          function g(B, M) {
            if (!(B instanceof M))
              throw new TypeError("Cannot call a class as a function");
          }
          var k = (0, O.default)("quill"), P = function() {
            b(B, null, [{
              key: "debug",
              value: function(w) {
                w === !0 && (w = "log"), O.default.level(w);
              }
            }, {
              key: "find",
              value: function(w) {
                return w.__quill || r.default.find(w);
              }
            }, {
              key: "import",
              value: function(w) {
                return this.imports[w] == null && k.error("Cannot import " + w + ". Are you sure it was registered?"), this.imports[w];
              }
            }, {
              key: "register",
              value: function(w, q) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (typeof w != "string") {
                  var C = w.attrName || w.blotName;
                  typeof C == "string" ? this.register("formats/" + C, w, q) : Object.keys(w).forEach(function(L) {
                    j.register(L, w[L], q);
                  });
                } else
                  this.imports[w] != null && !U && k.warn("Overwriting " + w + " with", q), this.imports[w] = q, (w.startsWith("blots/") || w.startsWith("formats/")) && q.blotName !== "abstract" ? r.default.register(q) : w.startsWith("modules") && typeof q.register == "function" && q.register();
              }
            }]);
            function B(M) {
              var w = this, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (g(this, B), this.options = I(M, q), this.container = this.options.container, this.container == null)
                return k.error("Invalid Quill container", M);
              this.options.debug && B.debug(this.options.debug);
              var j = this.container.innerHTML.trim();
              this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new e.default(), this.scroll = r.default.create(this.root, {
                emitter: this.emitter,
                whitelist: this.options.formats
              }), this.editor = new o.default(this.scroll), this.selection = new f.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(e.default.events.EDITOR_CHANGE, function(C) {
                C === e.default.events.TEXT_CHANGE && w.root.classList.toggle("ql-blank", w.editor.isBlank());
              }), this.emitter.on(e.default.events.SCROLL_UPDATE, function(C, L) {
                var D = w.selection.lastRange, H = D && D.length === 0 ? D.index : void 0;
                $.call(w, function() {
                  return w.editor.update(null, L, H);
                }, C);
              });
              var U = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + j + "<p><br></p></div>");
              this.setContents(U), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
            }
            return b(B, [{
              key: "addContainer",
              value: function(w) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (typeof w == "string") {
                  var j = w;
                  w = document.createElement("div"), w.classList.add(j);
                }
                return this.container.insertBefore(w, q), w;
              }
            }, {
              key: "blur",
              value: function() {
                this.selection.setRange(null);
              }
            }, {
              key: "deleteText",
              value: function(w, q, j) {
                var U = this, C = F(w, q, j), L = A(C, 4);
                return w = L[0], q = L[1], j = L[3], $.call(this, function() {
                  return U.editor.deleteText(w, q);
                }, j, w, -1 * q);
              }
            }, {
              key: "disable",
              value: function() {
                this.enable(!1);
              }
            }, {
              key: "enable",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.scroll.enable(w), this.container.classList.toggle("ql-disabled", !w);
              }
            }, {
              key: "focus",
              value: function() {
                var w = this.scrollingContainer.scrollTop;
                this.selection.focus(), this.scrollingContainer.scrollTop = w, this.scrollIntoView();
              }
            }, {
              key: "format",
              value: function(w, q) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.default.sources.API;
                return $.call(this, function() {
                  var C = j.getSelection(!0), L = new y.default();
                  if (C == null)
                    return L;
                  if (r.default.query(w, r.default.Scope.BLOCK))
                    L = j.editor.formatLine(C.index, C.length, p({}, w, q));
                  else {
                    if (C.length === 0)
                      return j.selection.format(w, q), L;
                    L = j.editor.formatText(C.index, C.length, p({}, w, q));
                  }
                  return j.setSelection(C, e.default.sources.SILENT), L;
                }, U);
              }
            }, {
              key: "formatLine",
              value: function(w, q, j, U, C) {
                var L = this, D = void 0, H = F(w, q, j, U, C), K = A(H, 4);
                return w = K[0], q = K[1], D = K[2], C = K[3], $.call(this, function() {
                  return L.editor.formatLine(w, q, D);
                }, C, w, 0);
              }
            }, {
              key: "formatText",
              value: function(w, q, j, U, C) {
                var L = this, D = void 0, H = F(w, q, j, U, C), K = A(H, 4);
                return w = K[0], q = K[1], D = K[2], C = K[3], $.call(this, function() {
                  return L.editor.formatText(w, q, D);
                }, C, w, 0);
              }
            }, {
              key: "getBounds",
              value: function(w) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, j = void 0;
                typeof w == "number" ? j = this.selection.getBounds(w, q) : j = this.selection.getBounds(w.index, w.length);
                var U = this.container.getBoundingClientRect();
                return {
                  bottom: j.bottom - U.top,
                  height: j.height,
                  left: j.left - U.left,
                  right: j.right - U.left,
                  top: j.top - U.top,
                  width: j.width
                };
              }
            }, {
              key: "getContents",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - w, j = F(w, q), U = A(j, 2);
                return w = U[0], q = U[1], this.editor.getContents(w, q);
              }
            }, {
              key: "getFormat",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.getSelection(!0), q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return typeof w == "number" ? this.editor.getFormat(w, q) : this.editor.getFormat(w.index, w.length);
              }
            }, {
              key: "getIndex",
              value: function(w) {
                return w.offset(this.scroll);
              }
            }, {
              key: "getLength",
              value: function() {
                return this.scroll.length();
              }
            }, {
              key: "getLeaf",
              value: function(w) {
                return this.scroll.leaf(w);
              }
            }, {
              key: "getLine",
              value: function(w) {
                return this.scroll.line(w);
              }
            }, {
              key: "getLines",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE;
                return typeof w != "number" ? this.scroll.lines(w.index, w.length) : this.scroll.lines(w, q);
              }
            }, {
              key: "getModule",
              value: function(w) {
                return this.theme.modules[w];
              }
            }, {
              key: "getSelection",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                return w && this.focus(), this.update(), this.selection.getRange()[0];
              }
            }, {
              key: "getText",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.getLength() - w, j = F(w, q), U = A(j, 2);
                return w = U[0], q = U[1], this.editor.getText(w, q);
              }
            }, {
              key: "hasFocus",
              value: function() {
                return this.selection.hasFocus();
              }
            }, {
              key: "insertEmbed",
              value: function(w, q, j) {
                var U = this, C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : B.sources.API;
                return $.call(this, function() {
                  return U.editor.insertEmbed(w, q, j);
                }, C, w);
              }
            }, {
              key: "insertText",
              value: function(w, q, j, U, C) {
                var L = this, D = void 0, H = F(w, 0, j, U, C), K = A(H, 4);
                return w = K[0], D = K[2], C = K[3], $.call(this, function() {
                  return L.editor.insertText(w, q, D);
                }, C, w, q.length);
              }
            }, {
              key: "isEnabled",
              value: function() {
                return !this.container.classList.contains("ql-disabled");
              }
            }, {
              key: "off",
              value: function() {
                return this.emitter.off.apply(this.emitter, arguments);
              }
            }, {
              key: "on",
              value: function() {
                return this.emitter.on.apply(this.emitter, arguments);
              }
            }, {
              key: "once",
              value: function() {
                return this.emitter.once.apply(this.emitter, arguments);
              }
            }, {
              key: "pasteHTML",
              value: function(w, q, j) {
                this.clipboard.dangerouslyPasteHTML(w, q, j);
              }
            }, {
              key: "removeFormat",
              value: function(w, q, j) {
                var U = this, C = F(w, q, j), L = A(C, 4);
                return w = L[0], q = L[1], j = L[3], $.call(this, function() {
                  return U.editor.removeFormat(w, q);
                }, j, w);
              }
            }, {
              key: "scrollIntoView",
              value: function() {
                this.selection.scrollIntoView(this.scrollingContainer);
              }
            }, {
              key: "setContents",
              value: function(w) {
                var q = this, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
                return $.call(this, function() {
                  w = new y.default(w);
                  var U = q.getLength(), C = q.editor.deleteText(0, U), L = q.editor.applyDelta(w), D = L.ops[L.ops.length - 1];
                  D != null && typeof D.insert == "string" && D.insert[D.insert.length - 1] === `
` && (q.editor.deleteText(q.getLength() - 1, 1), L.delete(1));
                  var H = C.compose(L);
                  return H;
                }, j);
              }
            }, {
              key: "setSelection",
              value: function(w, q, j) {
                if (w == null)
                  this.selection.setRange(null, q || B.sources.API);
                else {
                  var U = F(w, q, j), C = A(U, 4);
                  w = C[0], q = C[1], j = C[3], this.selection.setRange(new i.Range(w, q), j), j !== e.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
                }
              }
            }, {
              key: "setText",
              value: function(w) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API, j = new y.default().insert(w);
                return this.setContents(j, q);
              }
            }, {
              key: "update",
              value: function() {
                var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.default.sources.USER, q = this.scroll.update(w);
                return this.selection.update(w), q;
              }
            }, {
              key: "updateContents",
              value: function(w) {
                var q = this, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.default.sources.API;
                return $.call(this, function() {
                  return w = new y.default(w), q.editor.applyDelta(w, j);
                }, j, !0);
              }
            }]), B;
          }();
          P.DEFAULTS = {
            bounds: null,
            formats: null,
            modules: {},
            placeholder: "",
            readOnly: !1,
            scrollingContainer: null,
            strict: !0,
            theme: "default"
          }, P.events = e.default.events, P.sources = e.default.sources, P.version = "1.3.7", P.imports = {
            delta: y.default,
            parchment: r.default,
            "core/module": a.default,
            "core/theme": x.default
          };
          function I(B, M) {
            if (M = (0, c.default)(!0, {
              container: B,
              modules: {
                clipboard: !0,
                keyboard: !0,
                history: !0
              }
            }, M), !M.theme || M.theme === P.DEFAULTS.theme)
              M.theme = x.default;
            else if (M.theme = P.import("themes/" + M.theme), M.theme == null)
              throw new Error("Invalid theme " + M.theme + ". Did you register it?");
            var w = (0, c.default)(!0, {}, M.theme.DEFAULTS);
            [w, M].forEach(function(U) {
              U.modules = U.modules || {}, Object.keys(U.modules).forEach(function(C) {
                U.modules[C] === !0 && (U.modules[C] = {});
              });
            });
            var q = Object.keys(w.modules).concat(Object.keys(M.modules)), j = q.reduce(function(U, C) {
              var L = P.import("modules/" + C);
              return L == null ? k.error("Cannot load " + C + " module. Are you sure you registered it?") : U[C] = L.DEFAULTS || {}, U;
            }, {});
            return M.modules != null && M.modules.toolbar && M.modules.toolbar.constructor !== Object && (M.modules.toolbar = {
              container: M.modules.toolbar
            }), M = (0, c.default)(!0, {}, P.DEFAULTS, { modules: j }, w, M), ["bounds", "container", "scrollingContainer"].forEach(function(U) {
              typeof M[U] == "string" && (M[U] = document.querySelector(M[U]));
            }), M.modules = Object.keys(M.modules).reduce(function(U, C) {
              return M.modules[C] && (U[C] = M.modules[C]), U;
            }, {}), M;
          }
          function $(B, M, w, q) {
            if (this.options.strict && !this.isEnabled() && M === e.default.sources.USER)
              return new y.default();
            var j = w == null ? null : this.getSelection(), U = this.editor.delta, C = B();
            if (j != null && (w === !0 && (w = j.index), q == null ? j = W(j, C, M) : q !== 0 && (j = W(j, w, q, M)), this.setSelection(j, e.default.sources.SILENT)), C.length() > 0) {
              var L, D = [e.default.events.TEXT_CHANGE, C, U, M];
              if ((L = this.emitter).emit.apply(L, [e.default.events.EDITOR_CHANGE].concat(D)), M !== e.default.sources.SILENT) {
                var H;
                (H = this.emitter).emit.apply(H, D);
              }
            }
            return C;
          }
          function F(B, M, w, q, j) {
            var U = {};
            return typeof B.index == "number" && typeof B.length == "number" ? typeof M != "number" ? (j = q, q = w, w = M, M = B.length, B = B.index) : (M = B.length, B = B.index) : typeof M != "number" && (j = q, q = w, w = M, M = 0), (typeof w > "u" ? "undefined" : T(w)) === "object" ? (U = w, j = q) : typeof w == "string" && (q != null ? U[w] = q : j = w), j = j || e.default.sources.API, [B, M, U, j];
          }
          function W(B, M, w, q) {
            if (B == null)
              return null;
            var j = void 0, U = void 0;
            if (M instanceof y.default) {
              var C = [B.index, B.index + B.length].map(function(K) {
                return M.transformPosition(K, q !== e.default.sources.USER);
              }), L = A(C, 2);
              j = L[0], U = L[1];
            } else {
              var D = [B.index, B.index + B.length].map(function(K) {
                return K < M || K === M && q === e.default.sources.USER ? K : w >= 0 ? K + w : Math.max(M, K + w);
              }), H = A(D, 2);
              j = H[0], U = H[1];
            }
            return new i.Range(j, U - j);
          }
          s.expandConfig = I, s.overload = F, s.default = P;
        },
        /* 6 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), A = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, b = d(7), v = o(b), y = d(0), h = o(y);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function t(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function u(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var a = function(l) {
            u(r, l);
            function r() {
              return t(this, r), e(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return T(r, [{
              key: "formatAt",
              value: function(f, n, c, N) {
                if (r.compare(this.statics.blotName, c) < 0 && h.default.query(c, h.default.Scope.BLOT)) {
                  var O = this.isolate(f, n);
                  N && O.wrap(c, N);
                } else
                  A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "formatAt", this).call(this, f, n, c, N);
              }
            }, {
              key: "optimize",
              value: function(f) {
                if (A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "optimize", this).call(this, f), this.parent instanceof r && r.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                  var n = this.parent.isolate(this.offset(), this.length());
                  this.moveChildren(n), n.wrap(this);
                }
              }
            }], [{
              key: "compare",
              value: function(f, n) {
                var c = r.order.indexOf(f), N = r.order.indexOf(n);
                return c >= 0 || N >= 0 ? c - N : f === n ? 0 : f < n ? -1 : 1;
              }
            }]), r;
          }(h.default.Inline);
          a.allowedChildren = [a, h.default.Embed, v.default], a.order = [
            "cursor",
            "inline",
            // Must be lower
            "underline",
            "strike",
            "italic",
            "bold",
            "script",
            "link",
            "code"
            // Must be higher
          ], s.default = a;
        },
        /* 7 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(0), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(A.default.Text);
          s.default = o;
        },
        /* 8 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function i(f, n) {
              for (var c = 0; c < n.length; c++) {
                var N = n[c];
                N.enumerable = N.enumerable || !1, N.configurable = !0, "value" in N && (N.writable = !0), Object.defineProperty(f, N.key, N);
              }
            }
            return function(f, n, c) {
              return n && i(f.prototype, n), c && i(f, c), f;
            };
          }(), A = function i(f, n, c) {
            f === null && (f = Function.prototype);
            var N = Object.getOwnPropertyDescriptor(f, n);
            if (N === void 0) {
              var O = Object.getPrototypeOf(f);
              return O === null ? void 0 : i(O, n, c);
            } else {
              if ("value" in N)
                return N.value;
              var E = N.get;
              return E === void 0 ? void 0 : E.call(c);
            }
          }, b = d(54), v = o(b), y = d(10), h = o(y);
          function o(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function t(i, f) {
            if (!(i instanceof f))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(i, f) {
            if (!i)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return f && (typeof f == "object" || typeof f == "function") ? f : i;
          }
          function u(i, f) {
            if (typeof f != "function" && f !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof f);
            i.prototype = Object.create(f && f.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), f && (Object.setPrototypeOf ? Object.setPrototypeOf(i, f) : i.__proto__ = f);
          }
          var a = (0, h.default)("quill:events"), l = ["selectionchange", "mousedown", "mouseup", "click"];
          l.forEach(function(i) {
            document.addEventListener(i, function() {
              for (var f = arguments.length, n = Array(f), c = 0; c < f; c++)
                n[c] = arguments[c];
              [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(N) {
                if (N.__quill && N.__quill.emitter) {
                  var O;
                  (O = N.__quill.emitter).handleDOM.apply(O, n);
                }
              });
            });
          });
          var r = function(i) {
            u(f, i);
            function f() {
              t(this, f);
              var n = e(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
              return n.listeners = {}, n.on("error", a.error), n;
            }
            return T(f, [{
              key: "emit",
              value: function() {
                a.log.apply(a, arguments), A(f.prototype.__proto__ || Object.getPrototypeOf(f.prototype), "emit", this).apply(this, arguments);
              }
            }, {
              key: "handleDOM",
              value: function(c) {
                for (var N = arguments.length, O = Array(N > 1 ? N - 1 : 0), E = 1; E < N; E++)
                  O[E - 1] = arguments[E];
                (this.listeners[c.type] || []).forEach(function(x) {
                  var m = x.node, p = x.handler;
                  (c.target === m || m.contains(c.target)) && p.apply(void 0, [c].concat(O));
                });
              }
            }, {
              key: "listenDOM",
              value: function(c, N, O) {
                this.listeners[c] || (this.listeners[c] = []), this.listeners[c].push({ node: N, handler: O });
              }
            }]), f;
          }(v.default);
          r.events = {
            EDITOR_CHANGE: "editor-change",
            SCROLL_BEFORE_UPDATE: "scroll-before-update",
            SCROLL_OPTIMIZE: "scroll-optimize",
            SCROLL_UPDATE: "scroll-update",
            SELECTION_CHANGE: "selection-change",
            TEXT_CHANGE: "text-change"
          }, r.sources = {
            API: "api",
            SILENT: "silent",
            USER: "user"
          }, s.default = r;
        },
        /* 9 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          function T(b, v) {
            if (!(b instanceof v))
              throw new TypeError("Cannot call a class as a function");
          }
          var A = function b(v) {
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            T(this, b), this.quill = v, this.options = y;
          };
          A.DEFAULTS = {}, s.default = A;
        },
        /* 10 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = ["error", "warn", "log", "info"], A = "warn";
          function b(y) {
            if (T.indexOf(y) <= T.indexOf(A)) {
              for (var h, o = arguments.length, t = Array(o > 1 ? o - 1 : 0), e = 1; e < o; e++)
                t[e - 1] = arguments[e];
              (h = console)[y].apply(h, t);
            }
          }
          function v(y) {
            return T.reduce(function(h, o) {
              return h[o] = b.bind(console, o, y), h;
            }, {});
          }
          b.level = v.level = function(y) {
            A = y;
          }, s.default = v;
        },
        /* 11 */
        /***/
        function(_, s, d) {
          var T = Array.prototype.slice, A = d(52), b = d(53), v = _.exports = function(t, e, u) {
            return u || (u = {}), t === e ? !0 : t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || typeof t != "object" && typeof e != "object" ? u.strict ? t === e : t == e : o(t, e, u);
          };
          function y(t) {
            return t == null;
          }
          function h(t) {
            return !(!t || typeof t != "object" || typeof t.length != "number" || typeof t.copy != "function" || typeof t.slice != "function" || t.length > 0 && typeof t[0] != "number");
          }
          function o(t, e, u) {
            var a, l;
            if (y(t) || y(e) || t.prototype !== e.prototype)
              return !1;
            if (b(t))
              return b(e) ? (t = T.call(t), e = T.call(e), v(t, e, u)) : !1;
            if (h(t)) {
              if (!h(e) || t.length !== e.length)
                return !1;
              for (a = 0; a < t.length; a++)
                if (t[a] !== e[a])
                  return !1;
              return !0;
            }
            try {
              var r = A(t), i = A(e);
            } catch {
              return !1;
            }
            if (r.length != i.length)
              return !1;
            for (r.sort(), i.sort(), a = r.length - 1; a >= 0; a--)
              if (r[a] != i[a])
                return !1;
            for (a = r.length - 1; a >= 0; a--)
              if (l = r[a], !v(t[l], e[l], u))
                return !1;
            return typeof t == typeof e;
          }
        },
        /* 12 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var T = d(1), A = (
            /** @class */
            function() {
              function b(v, y, h) {
                h === void 0 && (h = {}), this.attrName = v, this.keyName = y;
                var o = T.Scope.TYPE & T.Scope.ATTRIBUTE;
                h.scope != null ? this.scope = h.scope & T.Scope.LEVEL | o : this.scope = T.Scope.ATTRIBUTE, h.whitelist != null && (this.whitelist = h.whitelist);
              }
              return b.keys = function(v) {
                return [].map.call(v.attributes, function(y) {
                  return y.name;
                });
              }, b.prototype.add = function(v, y) {
                return this.canAdd(v, y) ? (v.setAttribute(this.keyName, y), !0) : !1;
              }, b.prototype.canAdd = function(v, y) {
                var h = T.query(v, T.Scope.BLOT & (this.scope | T.Scope.TYPE));
                return h == null ? !1 : this.whitelist == null ? !0 : typeof y == "string" ? this.whitelist.indexOf(y.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(y) > -1;
              }, b.prototype.remove = function(v) {
                v.removeAttribute(this.keyName);
              }, b.prototype.value = function(v) {
                var y = v.getAttribute(this.keyName);
                return this.canAdd(v, y) && y ? y : "";
              }, b;
            }()
          );
          s.default = A;
        },
        /* 13 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.Code = void 0;
          var T = /* @__PURE__ */ function() {
            function E(x, m) {
              var p = [], g = !0, k = !1, P = void 0;
              try {
                for (var I = x[Symbol.iterator](), $; !(g = ($ = I.next()).done) && (p.push($.value), !(m && p.length === m)); g = !0)
                  ;
              } catch (F) {
                k = !0, P = F;
              } finally {
                try {
                  !g && I.return && I.return();
                } finally {
                  if (k)
                    throw P;
                }
              }
              return p;
            }
            return function(x, m) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return E(x, m);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function E(x, m) {
              for (var p = 0; p < m.length; p++) {
                var g = m[p];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(x, g.key, g);
              }
            }
            return function(x, m, p) {
              return m && E(x.prototype, m), p && E(x, p), x;
            };
          }(), b = function E(x, m, p) {
            x === null && (x = Function.prototype);
            var g = Object.getOwnPropertyDescriptor(x, m);
            if (g === void 0) {
              var k = Object.getPrototypeOf(x);
              return k === null ? void 0 : E(k, m, p);
            } else {
              if ("value" in g)
                return g.value;
              var P = g.get;
              return P === void 0 ? void 0 : P.call(p);
            }
          }, v = d(2), y = i(v), h = d(0), o = i(h), t = d(4), e = i(t), u = d(6), a = i(u), l = d(7), r = i(l);
          function i(E) {
            return E && E.__esModule ? E : { default: E };
          }
          function f(E, x) {
            if (!(E instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(E, x) {
            if (!E)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return x && (typeof x == "object" || typeof x == "function") ? x : E;
          }
          function c(E, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof x);
            E.prototype = Object.create(x && x.prototype, { constructor: { value: E, enumerable: !1, writable: !0, configurable: !0 } }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(E, x) : E.__proto__ = x);
          }
          var N = function(E) {
            c(x, E);
            function x() {
              return f(this, x), n(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments));
            }
            return x;
          }(a.default);
          N.blotName = "code", N.tagName = "CODE";
          var O = function(E) {
            c(x, E);
            function x() {
              return f(this, x), n(this, (x.__proto__ || Object.getPrototypeOf(x)).apply(this, arguments));
            }
            return A(x, [{
              key: "delta",
              value: function() {
                var p = this, g = this.domNode.textContent;
                return g.endsWith(`
`) && (g = g.slice(0, -1)), g.split(`
`).reduce(function(k, P) {
                  return k.insert(P).insert(`
`, p.formats());
                }, new y.default());
              }
            }, {
              key: "format",
              value: function(p, g) {
                if (!(p === this.statics.blotName && g)) {
                  var k = this.descendant(r.default, this.length() - 1), P = T(k, 1), I = P[0];
                  I != null && I.deleteAt(I.length() - 1, 1), b(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "format", this).call(this, p, g);
                }
              }
            }, {
              key: "formatAt",
              value: function(p, g, k, P) {
                if (g !== 0 && !(o.default.query(k, o.default.Scope.BLOCK) == null || k === this.statics.blotName && P === this.statics.formats(this.domNode))) {
                  var I = this.newlineIndex(p);
                  if (!(I < 0 || I >= p + g)) {
                    var $ = this.newlineIndex(p, !0) + 1, F = I - $ + 1, W = this.isolate($, F), B = W.next;
                    W.format(k, P), B instanceof x && B.formatAt(0, p - $ + g - F, k, P);
                  }
                }
              }
            }, {
              key: "insertAt",
              value: function(p, g, k) {
                if (k == null) {
                  var P = this.descendant(r.default, p), I = T(P, 2), $ = I[0], F = I[1];
                  $.insertAt(F, g);
                }
              }
            }, {
              key: "length",
              value: function() {
                var p = this.domNode.textContent.length;
                return this.domNode.textContent.endsWith(`
`) ? p : p + 1;
              }
            }, {
              key: "newlineIndex",
              value: function(p) {
                var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (g)
                  return this.domNode.textContent.slice(0, p).lastIndexOf(`
`);
                var k = this.domNode.textContent.slice(p).indexOf(`
`);
                return k > -1 ? p + k : -1;
              }
            }, {
              key: "optimize",
              value: function(p) {
                this.domNode.textContent.endsWith(`
`) || this.appendChild(o.default.create("text", `
`)), b(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "optimize", this).call(this, p);
                var g = this.next;
                g != null && g.prev === this && g.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === g.statics.formats(g.domNode) && (g.optimize(p), g.moveChildren(this), g.remove());
              }
            }, {
              key: "replace",
              value: function(p) {
                b(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "replace", this).call(this, p), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(g) {
                  var k = o.default.find(g);
                  k == null ? g.parentNode.removeChild(g) : k instanceof o.default.Embed ? k.remove() : k.unwrap();
                });
              }
            }], [{
              key: "create",
              value: function(p) {
                var g = b(x.__proto__ || Object.getPrototypeOf(x), "create", this).call(this, p);
                return g.setAttribute("spellcheck", !1), g;
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), x;
          }(e.default);
          O.blotName = "code-block", O.tagName = "PRE", O.TAB = "  ", s.Code = N, s.default = O;
        },
        /* 14 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          }, A = /* @__PURE__ */ function() {
            function B(M, w) {
              var q = [], j = !0, U = !1, C = void 0;
              try {
                for (var L = M[Symbol.iterator](), D; !(j = (D = L.next()).done) && (q.push(D.value), !(w && q.length === w)); j = !0)
                  ;
              } catch (H) {
                U = !0, C = H;
              } finally {
                try {
                  !j && L.return && L.return();
                } finally {
                  if (U)
                    throw C;
                }
              }
              return q;
            }
            return function(M, w) {
              if (Array.isArray(M))
                return M;
              if (Symbol.iterator in Object(M))
                return B(M, w);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), b = /* @__PURE__ */ function() {
            function B(M, w) {
              for (var q = 0; q < w.length; q++) {
                var j = w[q];
                j.enumerable = j.enumerable || !1, j.configurable = !0, "value" in j && (j.writable = !0), Object.defineProperty(M, j.key, j);
              }
            }
            return function(M, w, q) {
              return w && B(M.prototype, w), q && B(M, q), M;
            };
          }(), v = d(2), y = g(v), h = d(20), o = g(h), t = d(0), e = g(t), u = d(13), a = g(u), l = d(24), r = g(l), i = d(4), f = g(i), n = d(16), c = g(n), N = d(21), O = g(N), E = d(11), x = g(E), m = d(3), p = g(m);
          function g(B) {
            return B && B.__esModule ? B : { default: B };
          }
          function k(B, M, w) {
            return M in B ? Object.defineProperty(B, M, { value: w, enumerable: !0, configurable: !0, writable: !0 }) : B[M] = w, B;
          }
          function P(B, M) {
            if (!(B instanceof M))
              throw new TypeError("Cannot call a class as a function");
          }
          var I = /^[ -~]*$/, $ = function() {
            function B(M) {
              P(this, B), this.scroll = M, this.delta = this.getDelta();
            }
            return b(B, [{
              key: "applyDelta",
              value: function(w) {
                var q = this, j = !1;
                this.scroll.update();
                var U = this.scroll.length();
                return this.scroll.batchStart(), w = W(w), w.reduce(function(C, L) {
                  var D = L.retain || L.delete || L.insert.length || 1, H = L.attributes || {};
                  if (L.insert != null) {
                    if (typeof L.insert == "string") {
                      var K = L.insert;
                      K.endsWith(`
`) && j && (j = !1, K = K.slice(0, -1)), C >= U && !K.endsWith(`
`) && (j = !0), q.scroll.insertAt(C, K);
                      var V = q.scroll.line(C), Q = A(V, 2), J = Q[0], tt = Q[1], it = (0, p.default)({}, (0, i.bubbleFormats)(J));
                      if (J instanceof f.default) {
                        var ot = J.descendant(e.default.Leaf, tt), ft = A(ot, 1), st = ft[0];
                        it = (0, p.default)(it, (0, i.bubbleFormats)(st));
                      }
                      H = o.default.attributes.diff(it, H) || {};
                    } else if (T(L.insert) === "object") {
                      var z = Object.keys(L.insert)[0];
                      if (z == null)
                        return C;
                      q.scroll.insertAt(C, z, L.insert[z]);
                    }
                    U += D;
                  }
                  return Object.keys(H).forEach(function(G) {
                    q.scroll.formatAt(C, D, G, H[G]);
                  }), C + D;
                }, 0), w.reduce(function(C, L) {
                  return typeof L.delete == "number" ? (q.scroll.deleteAt(C, L.delete), C) : C + (L.retain || L.insert.length || 1);
                }, 0), this.scroll.batchEnd(), this.update(w);
              }
            }, {
              key: "deleteText",
              value: function(w, q) {
                return this.scroll.deleteAt(w, q), this.update(new y.default().retain(w).delete(q));
              }
            }, {
              key: "formatLine",
              value: function(w, q) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return this.scroll.update(), Object.keys(U).forEach(function(C) {
                  if (!(j.scroll.whitelist != null && !j.scroll.whitelist[C])) {
                    var L = j.scroll.lines(w, Math.max(q, 1)), D = q;
                    L.forEach(function(H) {
                      var K = H.length();
                      if (!(H instanceof a.default))
                        H.format(C, U[C]);
                      else {
                        var V = w - H.offset(j.scroll), Q = H.newlineIndex(V + D) - V + 1;
                        H.formatAt(V, Q, C, U[C]);
                      }
                      D -= K;
                    });
                  }
                }), this.scroll.optimize(), this.update(new y.default().retain(w).retain(q, (0, O.default)(U)));
              }
            }, {
              key: "formatText",
              value: function(w, q) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return Object.keys(U).forEach(function(C) {
                  j.scroll.formatAt(w, q, C, U[C]);
                }), this.update(new y.default().retain(w).retain(q, (0, O.default)(U)));
              }
            }, {
              key: "getContents",
              value: function(w, q) {
                return this.delta.slice(w, w + q);
              }
            }, {
              key: "getDelta",
              value: function() {
                return this.scroll.lines().reduce(function(w, q) {
                  return w.concat(q.delta());
                }, new y.default());
              }
            }, {
              key: "getFormat",
              value: function(w) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, j = [], U = [];
                q === 0 ? this.scroll.path(w).forEach(function(L) {
                  var D = A(L, 1), H = D[0];
                  H instanceof f.default ? j.push(H) : H instanceof e.default.Leaf && U.push(H);
                }) : (j = this.scroll.lines(w, q), U = this.scroll.descendants(e.default.Leaf, w, q));
                var C = [j, U].map(function(L) {
                  if (L.length === 0)
                    return {};
                  for (var D = (0, i.bubbleFormats)(L.shift()); Object.keys(D).length > 0; ) {
                    var H = L.shift();
                    if (H == null)
                      return D;
                    D = F((0, i.bubbleFormats)(H), D);
                  }
                  return D;
                });
                return p.default.apply(p.default, C);
              }
            }, {
              key: "getText",
              value: function(w, q) {
                return this.getContents(w, q).filter(function(j) {
                  return typeof j.insert == "string";
                }).map(function(j) {
                  return j.insert;
                }).join("");
              }
            }, {
              key: "insertEmbed",
              value: function(w, q, j) {
                return this.scroll.insertAt(w, q, j), this.update(new y.default().retain(w).insert(k({}, q, j)));
              }
            }, {
              key: "insertText",
              value: function(w, q) {
                var j = this, U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return q = q.replace(/\r\n/g, `
`).replace(/\r/g, `
`), this.scroll.insertAt(w, q), Object.keys(U).forEach(function(C) {
                  j.scroll.formatAt(w, q.length, C, U[C]);
                }), this.update(new y.default().retain(w).insert(q, (0, O.default)(U)));
              }
            }, {
              key: "isBlank",
              value: function() {
                if (this.scroll.children.length == 0)
                  return !0;
                if (this.scroll.children.length > 1)
                  return !1;
                var w = this.scroll.children.head;
                return w.statics.blotName !== f.default.blotName || w.children.length > 1 ? !1 : w.children.head instanceof c.default;
              }
            }, {
              key: "removeFormat",
              value: function(w, q) {
                var j = this.getText(w, q), U = this.scroll.line(w + q), C = A(U, 2), L = C[0], D = C[1], H = 0, K = new y.default();
                L != null && (L instanceof a.default ? H = L.newlineIndex(D) - D + 1 : H = L.length() - D, K = L.delta().slice(D, D + H - 1).insert(`
`));
                var V = this.getContents(w, q + H), Q = V.diff(new y.default().insert(j).concat(K)), J = new y.default().retain(w).concat(Q);
                return this.applyDelta(J);
              }
            }, {
              key: "update",
              value: function(w) {
                var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, U = this.delta;
                if (q.length === 1 && q[0].type === "characterData" && q[0].target.data.match(I) && e.default.find(q[0].target)) {
                  var C = e.default.find(q[0].target), L = (0, i.bubbleFormats)(C), D = C.offset(this.scroll), H = q[0].oldValue.replace(r.default.CONTENTS, ""), K = new y.default().insert(H), V = new y.default().insert(C.value()), Q = new y.default().retain(D).concat(K.diff(V, j));
                  w = Q.reduce(function(J, tt) {
                    return tt.insert ? J.insert(tt.insert, L) : J.push(tt);
                  }, new y.default()), this.delta = U.compose(w);
                } else
                  this.delta = this.getDelta(), (!w || !(0, x.default)(U.compose(w), this.delta)) && (w = U.diff(this.delta, j));
                return w;
              }
            }]), B;
          }();
          function F(B, M) {
            return Object.keys(M).reduce(function(w, q) {
              return B[q] == null || (M[q] === B[q] ? w[q] = M[q] : Array.isArray(M[q]) ? M[q].indexOf(B[q]) < 0 && (w[q] = M[q].concat([B[q]])) : w[q] = [M[q], B[q]]), w;
            }, {});
          }
          function W(B) {
            return B.reduce(function(M, w) {
              if (w.insert === 1) {
                var q = (0, O.default)(w.attributes);
                return delete q.image, M.insert({ image: w.attributes.image }, q);
              }
              if (w.attributes != null && (w.attributes.list === !0 || w.attributes.bullet === !0) && (w = (0, O.default)(w), w.attributes.list ? w.attributes.list = "ordered" : (w.attributes.list = "bullet", delete w.attributes.bullet)), typeof w.insert == "string") {
                var j = w.insert.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
                return M.insert(j, w.attributes);
              }
              return M.push(w);
            }, new y.default());
          }
          s.default = $;
        },
        /* 15 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.Range = void 0;
          var T = /* @__PURE__ */ function() {
            function E(x, m) {
              var p = [], g = !0, k = !1, P = void 0;
              try {
                for (var I = x[Symbol.iterator](), $; !(g = ($ = I.next()).done) && (p.push($.value), !(m && p.length === m)); g = !0)
                  ;
              } catch (F) {
                k = !0, P = F;
              } finally {
                try {
                  !g && I.return && I.return();
                } finally {
                  if (k)
                    throw P;
                }
              }
              return p;
            }
            return function(x, m) {
              if (Array.isArray(x))
                return x;
              if (Symbol.iterator in Object(x))
                return E(x, m);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function E(x, m) {
              for (var p = 0; p < m.length; p++) {
                var g = m[p];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(x, g.key, g);
              }
            }
            return function(x, m, p) {
              return m && E(x.prototype, m), p && E(x, p), x;
            };
          }(), b = d(0), v = r(b), y = d(21), h = r(y), o = d(11), t = r(o), e = d(8), u = r(e), a = d(10), l = r(a);
          function r(E) {
            return E && E.__esModule ? E : { default: E };
          }
          function i(E) {
            if (Array.isArray(E)) {
              for (var x = 0, m = Array(E.length); x < E.length; x++)
                m[x] = E[x];
              return m;
            } else
              return Array.from(E);
          }
          function f(E, x) {
            if (!(E instanceof x))
              throw new TypeError("Cannot call a class as a function");
          }
          var n = (0, l.default)("quill:selection"), c = function E(x) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            f(this, E), this.index = x, this.length = m;
          }, N = function() {
            function E(x, m) {
              var p = this;
              f(this, E), this.emitter = m, this.scroll = x, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = v.default.create("cursor", this), this.lastRange = this.savedRange = new c(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
                p.mouseDown || setTimeout(p.update.bind(p, u.default.sources.USER), 1);
              }), this.emitter.on(u.default.events.EDITOR_CHANGE, function(g, k) {
                g === u.default.events.TEXT_CHANGE && k.length() > 0 && p.update(u.default.sources.SILENT);
              }), this.emitter.on(u.default.events.SCROLL_BEFORE_UPDATE, function() {
                if (p.hasFocus()) {
                  var g = p.getNativeRange();
                  g != null && g.start.node !== p.cursor.textNode && p.emitter.once(u.default.events.SCROLL_UPDATE, function() {
                    try {
                      p.setNativeRange(g.start.node, g.start.offset, g.end.node, g.end.offset);
                    } catch {
                    }
                  });
                }
              }), this.emitter.on(u.default.events.SCROLL_OPTIMIZE, function(g, k) {
                if (k.range) {
                  var P = k.range, I = P.startNode, $ = P.startOffset, F = P.endNode, W = P.endOffset;
                  p.setNativeRange(I, $, F, W);
                }
              }), this.update(u.default.sources.SILENT);
            }
            return A(E, [{
              key: "handleComposition",
              value: function() {
                var m = this;
                this.root.addEventListener("compositionstart", function() {
                  m.composing = !0;
                }), this.root.addEventListener("compositionend", function() {
                  if (m.composing = !1, m.cursor.parent) {
                    var p = m.cursor.restore();
                    if (!p)
                      return;
                    setTimeout(function() {
                      m.setNativeRange(p.startNode, p.startOffset, p.endNode, p.endOffset);
                    }, 1);
                  }
                });
              }
            }, {
              key: "handleDragging",
              value: function() {
                var m = this;
                this.emitter.listenDOM("mousedown", document.body, function() {
                  m.mouseDown = !0;
                }), this.emitter.listenDOM("mouseup", document.body, function() {
                  m.mouseDown = !1, m.update(u.default.sources.USER);
                });
              }
            }, {
              key: "focus",
              value: function() {
                this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
              }
            }, {
              key: "format",
              value: function(m, p) {
                if (!(this.scroll.whitelist != null && !this.scroll.whitelist[m])) {
                  this.scroll.update();
                  var g = this.getNativeRange();
                  if (!(g == null || !g.native.collapsed || v.default.query(m, v.default.Scope.BLOCK))) {
                    if (g.start.node !== this.cursor.textNode) {
                      var k = v.default.find(g.start.node, !1);
                      if (k == null)
                        return;
                      if (k instanceof v.default.Leaf) {
                        var P = k.split(g.start.offset);
                        k.parent.insertBefore(this.cursor, P);
                      } else
                        k.insertBefore(this.cursor, g.start.node);
                      this.cursor.attach();
                    }
                    this.cursor.format(m, p), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
                  }
                }
              }
            }, {
              key: "getBounds",
              value: function(m) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, g = this.scroll.length();
                m = Math.min(m, g - 1), p = Math.min(m + p, g - 1) - m;
                var k = void 0, P = this.scroll.leaf(m), I = T(P, 2), $ = I[0], F = I[1];
                if ($ == null)
                  return null;
                var W = $.position(F, !0), B = T(W, 2);
                k = B[0], F = B[1];
                var M = document.createRange();
                if (p > 0) {
                  M.setStart(k, F);
                  var w = this.scroll.leaf(m + p), q = T(w, 2);
                  if ($ = q[0], F = q[1], $ == null)
                    return null;
                  var j = $.position(F, !0), U = T(j, 2);
                  return k = U[0], F = U[1], M.setEnd(k, F), M.getBoundingClientRect();
                } else {
                  var C = "left", L = void 0;
                  return k instanceof Text ? (F < k.data.length ? (M.setStart(k, F), M.setEnd(k, F + 1)) : (M.setStart(k, F - 1), M.setEnd(k, F), C = "right"), L = M.getBoundingClientRect()) : (L = $.domNode.getBoundingClientRect(), F > 0 && (C = "right")), {
                    bottom: L.top + L.height,
                    height: L.height,
                    left: L[C],
                    right: L[C],
                    top: L.top,
                    width: 0
                  };
                }
              }
            }, {
              key: "getNativeRange",
              value: function() {
                var m = document.getSelection();
                if (m == null || m.rangeCount <= 0)
                  return null;
                var p = m.getRangeAt(0);
                if (p == null)
                  return null;
                var g = this.normalizeNative(p);
                return n.info("getNativeRange", g), g;
              }
            }, {
              key: "getRange",
              value: function() {
                var m = this.getNativeRange();
                if (m == null)
                  return [null, null];
                var p = this.normalizedToRange(m);
                return [p, m];
              }
            }, {
              key: "hasFocus",
              value: function() {
                return document.activeElement === this.root;
              }
            }, {
              key: "normalizedToRange",
              value: function(m) {
                var p = this, g = [[m.start.node, m.start.offset]];
                m.native.collapsed || g.push([m.end.node, m.end.offset]);
                var k = g.map(function($) {
                  var F = T($, 2), W = F[0], B = F[1], M = v.default.find(W, !0), w = M.offset(p.scroll);
                  return B === 0 ? w : M instanceof v.default.Container ? w + M.length() : w + M.index(W, B);
                }), P = Math.min(Math.max.apply(Math, i(k)), this.scroll.length() - 1), I = Math.min.apply(Math, [P].concat(i(k)));
                return new c(I, P - I);
              }
            }, {
              key: "normalizeNative",
              value: function(m) {
                if (!O(this.root, m.startContainer) || !m.collapsed && !O(this.root, m.endContainer))
                  return null;
                var p = {
                  start: { node: m.startContainer, offset: m.startOffset },
                  end: { node: m.endContainer, offset: m.endOffset },
                  native: m
                };
                return [p.start, p.end].forEach(function(g) {
                  for (var k = g.node, P = g.offset; !(k instanceof Text) && k.childNodes.length > 0; )
                    if (k.childNodes.length > P)
                      k = k.childNodes[P], P = 0;
                    else if (k.childNodes.length === P)
                      k = k.lastChild, P = k instanceof Text ? k.data.length : k.childNodes.length + 1;
                    else
                      break;
                  g.node = k, g.offset = P;
                }), p;
              }
            }, {
              key: "rangeToNative",
              value: function(m) {
                var p = this, g = m.collapsed ? [m.index] : [m.index, m.index + m.length], k = [], P = this.scroll.length();
                return g.forEach(function(I, $) {
                  I = Math.min(P - 1, I);
                  var F = void 0, W = p.scroll.leaf(I), B = T(W, 2), M = B[0], w = B[1], q = M.position(w, $ !== 0), j = T(q, 2);
                  F = j[0], w = j[1], k.push(F, w);
                }), k.length < 2 && (k = k.concat(k)), k;
              }
            }, {
              key: "scrollIntoView",
              value: function(m) {
                var p = this.lastRange;
                if (p != null) {
                  var g = this.getBounds(p.index, p.length);
                  if (g != null) {
                    var k = this.scroll.length() - 1, P = this.scroll.line(Math.min(p.index, k)), I = T(P, 1), $ = I[0], F = $;
                    if (p.length > 0) {
                      var W = this.scroll.line(Math.min(p.index + p.length, k)), B = T(W, 1);
                      F = B[0];
                    }
                    if (!($ == null || F == null)) {
                      var M = m.getBoundingClientRect();
                      g.top < M.top ? m.scrollTop -= M.top - g.top : g.bottom > M.bottom && (m.scrollTop += g.bottom - M.bottom);
                    }
                  }
                }
              }
            }, {
              key: "setNativeRange",
              value: function(m, p) {
                var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : m, k = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : p, P = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
                if (n.info("setNativeRange", m, p, g, k), !(m != null && (this.root.parentNode == null || m.parentNode == null || g.parentNode == null))) {
                  var I = document.getSelection();
                  if (I != null)
                    if (m != null) {
                      this.hasFocus() || this.root.focus();
                      var $ = (this.getNativeRange() || {}).native;
                      if ($ == null || P || m !== $.startContainer || p !== $.startOffset || g !== $.endContainer || k !== $.endOffset) {
                        m.tagName == "BR" && (p = [].indexOf.call(m.parentNode.childNodes, m), m = m.parentNode), g.tagName == "BR" && (k = [].indexOf.call(g.parentNode.childNodes, g), g = g.parentNode);
                        var F = document.createRange();
                        F.setStart(m, p), F.setEnd(g, k), I.removeAllRanges(), I.addRange(F);
                      }
                    } else
                      I.removeAllRanges(), this.root.blur(), document.body.focus();
                }
              }
            }, {
              key: "setRange",
              value: function(m) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.default.sources.API;
                if (typeof p == "string" && (g = p, p = !1), n.info("setRange", m), m != null) {
                  var k = this.rangeToNative(m);
                  this.setNativeRange.apply(this, i(k).concat([p]));
                } else
                  this.setNativeRange(null);
                this.update(g);
              }
            }, {
              key: "update",
              value: function() {
                var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.default.sources.USER, p = this.lastRange, g = this.getRange(), k = T(g, 2), P = k[0], I = k[1];
                if (this.lastRange = P, this.lastRange != null && (this.savedRange = this.lastRange), !(0, t.default)(p, this.lastRange)) {
                  var $;
                  !this.composing && I != null && I.native.collapsed && I.start.node !== this.cursor.textNode && this.cursor.restore();
                  var F = [u.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(p), m];
                  if (($ = this.emitter).emit.apply($, [u.default.events.EDITOR_CHANGE].concat(F)), m !== u.default.sources.SILENT) {
                    var W;
                    (W = this.emitter).emit.apply(W, F);
                  }
                }
              }
            }]), E;
          }();
          function O(E, x) {
            try {
              x.parentNode;
            } catch {
              return !1;
            }
            return x instanceof Text && (x = x.parentNode), E.contains(x);
          }
          s.Range = c, s.default = N;
        },
        /* 16 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), A = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, b = d(0), v = y(b);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return T(a, [{
              key: "insertInto",
              value: function(r, i) {
                r.children.length === 0 ? A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "insertInto", this).call(this, r, i) : this.remove();
              }
            }, {
              key: "length",
              value: function() {
                return 0;
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }], [{
              key: "value",
              value: function() {
              }
            }]), a;
          }(v.default.Embed);
          e.blotName = "break", e.tagName = "BR", s.default = e;
        },
        /* 17 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (t[u] = e[u]);
            };
            return function(t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(44), b = d(30), v = d(1), y = (
            /** @class */
            function(o) {
              T(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.build(), u;
              }
              return t.prototype.appendChild = function(e) {
                this.insertBefore(e);
              }, t.prototype.attach = function() {
                o.prototype.attach.call(this), this.children.forEach(function(e) {
                  e.attach();
                });
              }, t.prototype.build = function() {
                var e = this;
                this.children = new A.default(), [].slice.call(this.domNode.childNodes).reverse().forEach(function(u) {
                  try {
                    var a = h(u);
                    e.insertBefore(a, e.children.head || void 0);
                  } catch (l) {
                    if (l instanceof v.ParchmentError)
                      return;
                    throw l;
                  }
                });
              }, t.prototype.deleteAt = function(e, u) {
                if (e === 0 && u === this.length())
                  return this.remove();
                this.children.forEachAt(e, u, function(a, l, r) {
                  a.deleteAt(l, r);
                });
              }, t.prototype.descendant = function(e, u) {
                var a = this.children.find(u), l = a[0], r = a[1];
                return e.blotName == null && e(l) || e.blotName != null && l instanceof e ? [l, r] : l instanceof t ? l.descendant(e, r) : [null, -1];
              }, t.prototype.descendants = function(e, u, a) {
                u === void 0 && (u = 0), a === void 0 && (a = Number.MAX_VALUE);
                var l = [], r = a;
                return this.children.forEachAt(u, a, function(i, f, n) {
                  (e.blotName == null && e(i) || e.blotName != null && i instanceof e) && l.push(i), i instanceof t && (l = l.concat(i.descendants(e, f, r))), r -= n;
                }), l;
              }, t.prototype.detach = function() {
                this.children.forEach(function(e) {
                  e.detach();
                }), o.prototype.detach.call(this);
              }, t.prototype.formatAt = function(e, u, a, l) {
                this.children.forEachAt(e, u, function(r, i, f) {
                  r.formatAt(i, f, a, l);
                });
              }, t.prototype.insertAt = function(e, u, a) {
                var l = this.children.find(e), r = l[0], i = l[1];
                if (r)
                  r.insertAt(i, u, a);
                else {
                  var f = a == null ? v.create("text", u) : v.create(u, a);
                  this.appendChild(f);
                }
              }, t.prototype.insertBefore = function(e, u) {
                if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function(a) {
                  return e instanceof a;
                }))
                  throw new v.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
                e.insertInto(this, u);
              }, t.prototype.length = function() {
                return this.children.reduce(function(e, u) {
                  return e + u.length();
                }, 0);
              }, t.prototype.moveChildren = function(e, u) {
                this.children.forEach(function(a) {
                  e.insertBefore(a, u);
                });
              }, t.prototype.optimize = function(e) {
                if (o.prototype.optimize.call(this, e), this.children.length === 0)
                  if (this.statics.defaultChild != null) {
                    var u = v.create(this.statics.defaultChild);
                    this.appendChild(u), u.optimize(e);
                  } else
                    this.remove();
              }, t.prototype.path = function(e, u) {
                u === void 0 && (u = !1);
                var a = this.children.find(e, u), l = a[0], r = a[1], i = [[this, e]];
                return l instanceof t ? i.concat(l.path(r, u)) : (l != null && i.push([l, r]), i);
              }, t.prototype.removeChild = function(e) {
                this.children.remove(e);
              }, t.prototype.replace = function(e) {
                e instanceof t && e.moveChildren(this), o.prototype.replace.call(this, e);
              }, t.prototype.split = function(e, u) {
                if (u === void 0 && (u = !1), !u) {
                  if (e === 0)
                    return this;
                  if (e === this.length())
                    return this.next;
                }
                var a = this.clone();
                return this.parent.insertBefore(a, this.next), this.children.forEachAt(e, this.length(), function(l, r, i) {
                  l = l.split(r, u), a.appendChild(l);
                }), a;
              }, t.prototype.unwrap = function() {
                this.moveChildren(this.parent, this.next), this.remove();
              }, t.prototype.update = function(e, u) {
                var a = this, l = [], r = [];
                e.forEach(function(i) {
                  i.target === a.domNode && i.type === "childList" && (l.push.apply(l, i.addedNodes), r.push.apply(r, i.removedNodes));
                }), r.forEach(function(i) {
                  if (!(i.parentNode != null && // @ts-ignore
                  i.tagName !== "IFRAME" && document.body.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                    var f = v.find(i);
                    f != null && (f.domNode.parentNode == null || f.domNode.parentNode === a.domNode) && f.detach();
                  }
                }), l.filter(function(i) {
                  return i.parentNode == a.domNode;
                }).sort(function(i, f) {
                  return i === f ? 0 : i.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
                }).forEach(function(i) {
                  var f = null;
                  i.nextSibling != null && (f = v.find(i.nextSibling));
                  var n = h(i);
                  (n.next != f || n.next == null) && (n.parent != null && n.parent.removeChild(a), a.insertBefore(n, f || void 0));
                });
              }, t;
            }(b.default)
          );
          function h(o) {
            var t = v.find(o);
            if (t == null)
              try {
                t = v.create(o);
              } catch {
                t = v.create(v.Scope.INLINE), [].slice.call(o.childNodes).forEach(function(u) {
                  t.domNode.appendChild(u);
                }), o.parentNode && o.parentNode.replaceChild(t.domNode, o), t.attach();
              }
            return t;
          }
          s.default = y;
        },
        /* 18 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (t[u] = e[u]);
            };
            return function(t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(12), b = d(31), v = d(17), y = d(1), h = (
            /** @class */
            function(o) {
              T(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.attributes = new b.default(u.domNode), u;
              }
              return t.formats = function(e) {
                if (typeof this.tagName == "string")
                  return !0;
                if (Array.isArray(this.tagName))
                  return e.tagName.toLowerCase();
              }, t.prototype.format = function(e, u) {
                var a = y.query(e);
                a instanceof A.default ? this.attributes.attribute(a, u) : u && a != null && (e !== this.statics.blotName || this.formats()[e] !== u) && this.replaceWith(e, u);
              }, t.prototype.formats = function() {
                var e = this.attributes.values(), u = this.statics.formats(this.domNode);
                return u != null && (e[this.statics.blotName] = u), e;
              }, t.prototype.replaceWith = function(e, u) {
                var a = o.prototype.replaceWith.call(this, e, u);
                return this.attributes.copy(a), a;
              }, t.prototype.update = function(e, u) {
                var a = this;
                o.prototype.update.call(this, e, u), e.some(function(l) {
                  return l.target === a.domNode && l.type === "attributes";
                }) && this.attributes.build();
              }, t.prototype.wrap = function(e, u) {
                var a = o.prototype.wrap.call(this, e, u);
                return a instanceof t && a.statics.scope === this.statics.scope && this.attributes.move(a), a;
              }, t;
            }(v.default)
          );
          s.default = h;
        },
        /* 19 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(30), b = d(1), v = (
            /** @class */
            function(y) {
              T(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.value = function(o) {
                return !0;
              }, h.prototype.index = function(o, t) {
                return this.domNode === o || this.domNode.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(t, 1) : -1;
              }, h.prototype.position = function(o, t) {
                var e = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
                return o > 0 && (e += 1), [this.parent.domNode, e];
              }, h.prototype.value = function() {
                var o;
                return o = {}, o[this.statics.blotName] = this.statics.value(this.domNode) || !0, o;
              }, h.scope = b.Scope.INLINE_BLOT, h;
            }(A.default)
          );
          s.default = v;
        },
        /* 20 */
        /***/
        function(_, s, d) {
          var T = d(11), A = d(3), b = {
            attributes: {
              compose: function(y, h, o) {
                typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
                var t = A(!0, {}, h);
                o || (t = Object.keys(t).reduce(function(u, a) {
                  return t[a] != null && (u[a] = t[a]), u;
                }, {}));
                for (var e in y)
                  y[e] !== void 0 && h[e] === void 0 && (t[e] = y[e]);
                return Object.keys(t).length > 0 ? t : void 0;
              },
              diff: function(y, h) {
                typeof y != "object" && (y = {}), typeof h != "object" && (h = {});
                var o = Object.keys(y).concat(Object.keys(h)).reduce(function(t, e) {
                  return T(y[e], h[e]) || (t[e] = h[e] === void 0 ? null : h[e]), t;
                }, {});
                return Object.keys(o).length > 0 ? o : void 0;
              },
              transform: function(y, h, o) {
                if (typeof y != "object")
                  return h;
                if (typeof h == "object") {
                  if (!o)
                    return h;
                  var t = Object.keys(h).reduce(function(e, u) {
                    return y[u] === void 0 && (e[u] = h[u]), e;
                  }, {});
                  return Object.keys(t).length > 0 ? t : void 0;
                }
              }
            },
            iterator: function(y) {
              return new v(y);
            },
            length: function(y) {
              return typeof y.delete == "number" ? y.delete : typeof y.retain == "number" ? y.retain : typeof y.insert == "string" ? y.insert.length : 1;
            }
          };
          function v(y) {
            this.ops = y, this.index = 0, this.offset = 0;
          }
          v.prototype.hasNext = function() {
            return this.peekLength() < 1 / 0;
          }, v.prototype.next = function(y) {
            y || (y = 1 / 0);
            var h = this.ops[this.index];
            if (h) {
              var o = this.offset, t = b.length(h);
              if (y >= t - o ? (y = t - o, this.index += 1, this.offset = 0) : this.offset += y, typeof h.delete == "number")
                return { delete: y };
              var e = {};
              return h.attributes && (e.attributes = h.attributes), typeof h.retain == "number" ? e.retain = y : typeof h.insert == "string" ? e.insert = h.insert.substr(o, y) : e.insert = h.insert, e;
            } else
              return { retain: 1 / 0 };
          }, v.prototype.peek = function() {
            return this.ops[this.index];
          }, v.prototype.peekLength = function() {
            return this.ops[this.index] ? b.length(this.ops[this.index]) - this.offset : 1 / 0;
          }, v.prototype.peekType = function() {
            return this.ops[this.index] ? typeof this.ops[this.index].delete == "number" ? "delete" : typeof this.ops[this.index].retain == "number" ? "retain" : "insert" : "retain";
          }, v.prototype.rest = function() {
            if (this.hasNext()) {
              if (this.offset === 0)
                return this.ops.slice(this.index);
              var y = this.offset, h = this.index, o = this.next(), t = this.ops.slice(this.index);
              return this.offset = y, this.index = h, [o].concat(t);
            } else
              return [];
          }, _.exports = b;
        },
        /* 21 */
        /***/
        function(_, s) {
          var d = function() {
            function T(a, l) {
              return l != null && a instanceof l;
            }
            var A;
            try {
              A = Map;
            } catch {
              A = function() {
              };
            }
            var b;
            try {
              b = Set;
            } catch {
              b = function() {
              };
            }
            var v;
            try {
              v = Promise;
            } catch {
              v = function() {
              };
            }
            function y(a, l, r, i, f) {
              typeof l == "object" && (r = l.depth, i = l.prototype, f = l.includeNonEnumerable, l = l.circular);
              var n = [], c = [], N = typeof Buffer < "u";
              typeof l > "u" && (l = !0), typeof r > "u" && (r = 1 / 0);
              function O(E, x) {
                if (E === null)
                  return null;
                if (x === 0)
                  return E;
                var m, p;
                if (typeof E != "object")
                  return E;
                if (T(E, A))
                  m = new A();
                else if (T(E, b))
                  m = new b();
                else if (T(E, v))
                  m = new v(function(M, w) {
                    E.then(function(q) {
                      M(O(q, x - 1));
                    }, function(q) {
                      w(O(q, x - 1));
                    });
                  });
                else if (y.__isArray(E))
                  m = [];
                else if (y.__isRegExp(E))
                  m = new RegExp(E.source, u(E)), E.lastIndex && (m.lastIndex = E.lastIndex);
                else if (y.__isDate(E))
                  m = new Date(E.getTime());
                else {
                  if (N && Buffer.isBuffer(E))
                    return Buffer.allocUnsafe ? m = Buffer.allocUnsafe(E.length) : m = new Buffer(E.length), E.copy(m), m;
                  T(E, Error) ? m = Object.create(E) : typeof i > "u" ? (p = Object.getPrototypeOf(E), m = Object.create(p)) : (m = Object.create(i), p = i);
                }
                if (l) {
                  var g = n.indexOf(E);
                  if (g != -1)
                    return c[g];
                  n.push(E), c.push(m);
                }
                T(E, A) && E.forEach(function(M, w) {
                  var q = O(w, x - 1), j = O(M, x - 1);
                  m.set(q, j);
                }), T(E, b) && E.forEach(function(M) {
                  var w = O(M, x - 1);
                  m.add(w);
                });
                for (var k in E) {
                  var P;
                  p && (P = Object.getOwnPropertyDescriptor(p, k)), !(P && P.set == null) && (m[k] = O(E[k], x - 1));
                }
                if (Object.getOwnPropertySymbols)
                  for (var I = Object.getOwnPropertySymbols(E), k = 0; k < I.length; k++) {
                    var $ = I[k], F = Object.getOwnPropertyDescriptor(E, $);
                    F && !F.enumerable && !f || (m[$] = O(E[$], x - 1), F.enumerable || Object.defineProperty(m, $, {
                      enumerable: !1
                    }));
                  }
                if (f)
                  for (var W = Object.getOwnPropertyNames(E), k = 0; k < W.length; k++) {
                    var B = W[k], F = Object.getOwnPropertyDescriptor(E, B);
                    F && F.enumerable || (m[B] = O(E[B], x - 1), Object.defineProperty(m, B, {
                      enumerable: !1
                    }));
                  }
                return m;
              }
              return O(a, r);
            }
            y.clonePrototype = function(l) {
              if (l === null)
                return null;
              var r = function() {
              };
              return r.prototype = l, new r();
            };
            function h(a) {
              return Object.prototype.toString.call(a);
            }
            y.__objToStr = h;
            function o(a) {
              return typeof a == "object" && h(a) === "[object Date]";
            }
            y.__isDate = o;
            function t(a) {
              return typeof a == "object" && h(a) === "[object Array]";
            }
            y.__isArray = t;
            function e(a) {
              return typeof a == "object" && h(a) === "[object RegExp]";
            }
            y.__isRegExp = e;
            function u(a) {
              var l = "";
              return a.global && (l += "g"), a.ignoreCase && (l += "i"), a.multiline && (l += "m"), l;
            }
            return y.__getRegExpFlags = u, y;
          }();
          typeof _ == "object" && _.exports && (_.exports = d);
        },
        /* 22 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function m(p, g) {
              var k = [], P = !0, I = !1, $ = void 0;
              try {
                for (var F = p[Symbol.iterator](), W; !(P = (W = F.next()).done) && (k.push(W.value), !(g && k.length === g)); P = !0)
                  ;
              } catch (B) {
                I = !0, $ = B;
              } finally {
                try {
                  !P && F.return && F.return();
                } finally {
                  if (I)
                    throw $;
                }
              }
              return k;
            }
            return function(p, g) {
              if (Array.isArray(p))
                return p;
              if (Symbol.iterator in Object(p))
                return m(p, g);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function m(p, g) {
              for (var k = 0; k < g.length; k++) {
                var P = g[k];
                P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(p, P.key, P);
              }
            }
            return function(p, g, k) {
              return g && m(p.prototype, g), k && m(p, k), p;
            };
          }(), b = function m(p, g, k) {
            p === null && (p = Function.prototype);
            var P = Object.getOwnPropertyDescriptor(p, g);
            if (P === void 0) {
              var I = Object.getPrototypeOf(p);
              return I === null ? void 0 : m(I, g, k);
            } else {
              if ("value" in P)
                return P.value;
              var $ = P.get;
              return $ === void 0 ? void 0 : $.call(k);
            }
          }, v = d(0), y = n(v), h = d(8), o = n(h), t = d(4), e = n(t), u = d(16), a = n(u), l = d(13), r = n(l), i = d(25), f = n(i);
          function n(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function c(m, p) {
            if (!(m instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          function N(m, p) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return p && (typeof p == "object" || typeof p == "function") ? p : m;
          }
          function O(m, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof p);
            m.prototype = Object.create(p && p.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(m, p) : m.__proto__ = p);
          }
          function E(m) {
            return m instanceof e.default || m instanceof t.BlockEmbed;
          }
          var x = function(m) {
            O(p, m);
            function p(g, k) {
              c(this, p);
              var P = N(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, g));
              return P.emitter = k.emitter, Array.isArray(k.whitelist) && (P.whitelist = k.whitelist.reduce(function(I, $) {
                return I[$] = !0, I;
              }, {})), P.domNode.addEventListener("DOMNodeInserted", function() {
              }), P.optimize(), P.enable(), P;
            }
            return A(p, [{
              key: "batchStart",
              value: function() {
                this.batch = !0;
              }
            }, {
              key: "batchEnd",
              value: function() {
                this.batch = !1, this.optimize();
              }
            }, {
              key: "deleteAt",
              value: function(k, P) {
                var I = this.line(k), $ = T(I, 2), F = $[0], W = $[1], B = this.line(k + P), M = T(B, 1), w = M[0];
                if (b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "deleteAt", this).call(this, k, P), w != null && F !== w && W > 0) {
                  if (F instanceof t.BlockEmbed || w instanceof t.BlockEmbed) {
                    this.optimize();
                    return;
                  }
                  if (F instanceof r.default) {
                    var q = F.newlineIndex(F.length(), !0);
                    if (q > -1 && (F = F.split(q + 1), F === w)) {
                      this.optimize();
                      return;
                    }
                  } else if (w instanceof r.default) {
                    var j = w.newlineIndex(0);
                    j > -1 && w.split(j + 1);
                  }
                  var U = w.children.head instanceof a.default ? null : w.children.head;
                  F.moveChildren(w, U), F.remove();
                }
                this.optimize();
              }
            }, {
              key: "enable",
              value: function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
                this.domNode.setAttribute("contenteditable", k);
              }
            }, {
              key: "formatAt",
              value: function(k, P, I, $) {
                this.whitelist != null && !this.whitelist[I] || (b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "formatAt", this).call(this, k, P, I, $), this.optimize());
              }
            }, {
              key: "insertAt",
              value: function(k, P, I) {
                if (!(I != null && this.whitelist != null && !this.whitelist[P])) {
                  if (k >= this.length())
                    if (I == null || y.default.query(P, y.default.Scope.BLOCK) == null) {
                      var $ = y.default.create(this.statics.defaultChild);
                      this.appendChild($), I == null && P.endsWith(`
`) && (P = P.slice(0, -1)), $.insertAt(0, P, I);
                    } else {
                      var F = y.default.create(P, I);
                      this.appendChild(F);
                    }
                  else
                    b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertAt", this).call(this, k, P, I);
                  this.optimize();
                }
              }
            }, {
              key: "insertBefore",
              value: function(k, P) {
                if (k.statics.scope === y.default.Scope.INLINE_BLOT) {
                  var I = y.default.create(this.statics.defaultChild);
                  I.appendChild(k), k = I;
                }
                b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "insertBefore", this).call(this, k, P);
              }
            }, {
              key: "leaf",
              value: function(k) {
                return this.path(k).pop() || [null, -1];
              }
            }, {
              key: "line",
              value: function(k) {
                return k === this.length() ? this.line(k - 1) : this.descendant(E, k);
              }
            }, {
              key: "lines",
              value: function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, I = function $(F, W, B) {
                  var M = [], w = B;
                  return F.children.forEachAt(W, B, function(q, j, U) {
                    E(q) ? M.push(q) : q instanceof y.default.Container && (M = M.concat($(q, j, w))), w -= U;
                  }), M;
                };
                return I(this, k, P);
              }
            }, {
              key: "optimize",
              value: function() {
                var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                this.batch !== !0 && (b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "optimize", this).call(this, k, P), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_OPTIMIZE, k, P));
              }
            }, {
              key: "path",
              value: function(k) {
                return b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "path", this).call(this, k).slice(1);
              }
            }, {
              key: "update",
              value: function(k) {
                if (this.batch !== !0) {
                  var P = o.default.sources.USER;
                  typeof k == "string" && (P = k), Array.isArray(k) || (k = this.observer.takeRecords()), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_BEFORE_UPDATE, P, k), b(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "update", this).call(this, k.concat([])), k.length > 0 && this.emitter.emit(o.default.events.SCROLL_UPDATE, P, k);
                }
              }
            }]), p;
          }(y.default.Scroll);
          x.blotName = "scroll", x.className = "ql-editor", x.tagName = "DIV", x.defaultChild = "block", x.allowedChildren = [e.default, t.BlockEmbed, f.default], s.default = x;
        },
        /* 23 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SHORTKEY = s.default = void 0;
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(L) {
            return typeof L;
          } : function(L) {
            return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
          }, A = /* @__PURE__ */ function() {
            function L(D, H) {
              var K = [], V = !0, Q = !1, J = void 0;
              try {
                for (var tt = D[Symbol.iterator](), it; !(V = (it = tt.next()).done) && (K.push(it.value), !(H && K.length === H)); V = !0)
                  ;
              } catch (ot) {
                Q = !0, J = ot;
              } finally {
                try {
                  !V && tt.return && tt.return();
                } finally {
                  if (Q)
                    throw J;
                }
              }
              return K;
            }
            return function(D, H) {
              if (Array.isArray(D))
                return D;
              if (Symbol.iterator in Object(D))
                return L(D, H);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), b = /* @__PURE__ */ function() {
            function L(D, H) {
              for (var K = 0; K < H.length; K++) {
                var V = H[K];
                V.enumerable = V.enumerable || !1, V.configurable = !0, "value" in V && (V.writable = !0), Object.defineProperty(D, V.key, V);
              }
            }
            return function(D, H, K) {
              return H && L(D.prototype, H), K && L(D, K), D;
            };
          }(), v = d(21), y = m(v), h = d(11), o = m(h), t = d(3), e = m(t), u = d(2), a = m(u), l = d(20), r = m(l), i = d(0), f = m(i), n = d(5), c = m(n), N = d(10), O = m(N), E = d(9), x = m(E);
          function m(L) {
            return L && L.__esModule ? L : { default: L };
          }
          function p(L, D, H) {
            return D in L ? Object.defineProperty(L, D, { value: H, enumerable: !0, configurable: !0, writable: !0 }) : L[D] = H, L;
          }
          function g(L, D) {
            if (!(L instanceof D))
              throw new TypeError("Cannot call a class as a function");
          }
          function k(L, D) {
            if (!L)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return D && (typeof D == "object" || typeof D == "function") ? D : L;
          }
          function P(L, D) {
            if (typeof D != "function" && D !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof D);
            L.prototype = Object.create(D && D.prototype, { constructor: { value: L, enumerable: !1, writable: !0, configurable: !0 } }), D && (Object.setPrototypeOf ? Object.setPrototypeOf(L, D) : L.__proto__ = D);
          }
          var I = (0, O.default)("quill:keyboard"), $ = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", F = function(L) {
            P(D, L), b(D, null, [{
              key: "match",
              value: function(K, V) {
                return V = C(V), ["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(Q) {
                  return !!V[Q] !== K[Q] && V[Q] !== null;
                }) ? !1 : V.key === (K.which || K.keyCode);
              }
            }]);
            function D(H, K) {
              g(this, D);
              var V = k(this, (D.__proto__ || Object.getPrototypeOf(D)).call(this, H, K));
              return V.bindings = {}, Object.keys(V.options.bindings).forEach(function(Q) {
                Q === "list autofill" && H.scroll.whitelist != null && !H.scroll.whitelist.list || V.options.bindings[Q] && V.addBinding(V.options.bindings[Q]);
              }), V.addBinding({ key: D.keys.ENTER, shiftKey: null }, q), V.addBinding({ key: D.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
              }), /Firefox/i.test(navigator.userAgent) ? (V.addBinding({ key: D.keys.BACKSPACE }, { collapsed: !0 }, B), V.addBinding({ key: D.keys.DELETE }, { collapsed: !0 }, M)) : (V.addBinding({ key: D.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, B), V.addBinding({ key: D.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, M)), V.addBinding({ key: D.keys.BACKSPACE }, { collapsed: !1 }, w), V.addBinding({ key: D.keys.DELETE }, { collapsed: !1 }, w), V.addBinding({ key: D.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, B), V.listen(), V;
            }
            return b(D, [{
              key: "addBinding",
              value: function(K) {
                var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, J = C(K);
                if (J == null || J.key == null)
                  return I.warn("Attempted to add invalid keyboard binding", J);
                typeof V == "function" && (V = { handler: V }), typeof Q == "function" && (Q = { handler: Q }), J = (0, e.default)(J, V, Q), this.bindings[J.key] = this.bindings[J.key] || [], this.bindings[J.key].push(J);
              }
            }, {
              key: "listen",
              value: function() {
                var K = this;
                this.quill.root.addEventListener("keydown", function(V) {
                  if (!V.defaultPrevented) {
                    var Q = V.which || V.keyCode, J = (K.bindings[Q] || []).filter(function(ut) {
                      return D.match(V, ut);
                    });
                    if (J.length !== 0) {
                      var tt = K.quill.getSelection();
                      if (!(tt == null || !K.quill.hasFocus())) {
                        var it = K.quill.getLine(tt.index), ot = A(it, 2), ft = ot[0], st = ot[1], z = K.quill.getLeaf(tt.index), G = A(z, 2), Y = G[0], X = G[1], Z = tt.length === 0 ? [Y, X] : K.quill.getLeaf(tt.index + tt.length), et = A(Z, 2), nt = et[0], rt = et[1], ht = Y instanceof f.default.Text ? Y.value().slice(0, X) : "", vt = nt instanceof f.default.Text ? nt.value().slice(rt) : "", lt = {
                          collapsed: tt.length === 0,
                          empty: tt.length === 0 && ft.length() <= 1,
                          format: K.quill.getFormat(tt),
                          offset: st,
                          prefix: ht,
                          suffix: vt
                        }, Be = J.some(function(ut) {
                          if (ut.collapsed != null && ut.collapsed !== lt.collapsed || ut.empty != null && ut.empty !== lt.empty || ut.offset != null && ut.offset !== lt.offset)
                            return !1;
                          if (Array.isArray(ut.format)) {
                            if (ut.format.every(function(yt) {
                              return lt.format[yt] == null;
                            }))
                              return !1;
                          } else if (T(ut.format) === "object" && !Object.keys(ut.format).every(function(yt) {
                            return ut.format[yt] === !0 ? lt.format[yt] != null : ut.format[yt] === !1 ? lt.format[yt] == null : (0, o.default)(ut.format[yt], lt.format[yt]);
                          }))
                            return !1;
                          return ut.prefix != null && !ut.prefix.test(lt.prefix) || ut.suffix != null && !ut.suffix.test(lt.suffix) ? !1 : ut.handler.call(K, tt, lt) !== !0;
                        });
                        Be && V.preventDefault();
                      }
                    }
                  }
                });
              }
            }]), D;
          }(x.default);
          F.keys = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESCAPE: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
          }, F.DEFAULTS = {
            bindings: {
              bold: U("bold"),
              italic: U("italic"),
              underline: U("underline"),
              indent: {
                // highlight tab or tab at beginning of list, indent or blockquote
                key: F.keys.TAB,
                format: ["blockquote", "indent", "list"],
                handler: function(D, H) {
                  if (H.collapsed && H.offset !== 0)
                    return !0;
                  this.quill.format("indent", "+1", c.default.sources.USER);
                }
              },
              outdent: {
                key: F.keys.TAB,
                shiftKey: !0,
                format: ["blockquote", "indent", "list"],
                // highlight tab or tab at beginning of list, indent or blockquote
                handler: function(D, H) {
                  if (H.collapsed && H.offset !== 0)
                    return !0;
                  this.quill.format("indent", "-1", c.default.sources.USER);
                }
              },
              "outdent backspace": {
                key: F.keys.BACKSPACE,
                collapsed: !0,
                shiftKey: null,
                metaKey: null,
                ctrlKey: null,
                altKey: null,
                format: ["indent", "list"],
                offset: 0,
                handler: function(D, H) {
                  H.format.indent != null ? this.quill.format("indent", "-1", c.default.sources.USER) : H.format.list != null && this.quill.format("list", !1, c.default.sources.USER);
                }
              },
              "indent code-block": j(!0),
              "outdent code-block": j(!1),
              "remove tab": {
                key: F.keys.TAB,
                shiftKey: !0,
                collapsed: !0,
                prefix: /\t$/,
                handler: function(D) {
                  this.quill.deleteText(D.index - 1, 1, c.default.sources.USER);
                }
              },
              tab: {
                key: F.keys.TAB,
                handler: function(D) {
                  this.quill.history.cutoff();
                  var H = new a.default().retain(D.index).delete(D.length).insert("	");
                  this.quill.updateContents(H, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(D.index + 1, c.default.sources.SILENT);
                }
              },
              "list empty enter": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: ["list"],
                empty: !0,
                handler: function(D, H) {
                  this.quill.format("list", !1, c.default.sources.USER), H.format.indent && this.quill.format("indent", !1, c.default.sources.USER);
                }
              },
              "checklist enter": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: { list: "checked" },
                handler: function(D) {
                  var H = this.quill.getLine(D.index), K = A(H, 2), V = K[0], Q = K[1], J = (0, e.default)({}, V.formats(), { list: "checked" }), tt = new a.default().retain(D.index).insert(`
`, J).retain(V.length() - Q - 1).retain(1, { list: "unchecked" });
                  this.quill.updateContents(tt, c.default.sources.USER), this.quill.setSelection(D.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "header enter": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: ["header"],
                suffix: /^$/,
                handler: function(D, H) {
                  var K = this.quill.getLine(D.index), V = A(K, 2), Q = V[0], J = V[1], tt = new a.default().retain(D.index).insert(`
`, H.format).retain(Q.length() - J - 1).retain(1, { header: null });
                  this.quill.updateContents(tt, c.default.sources.USER), this.quill.setSelection(D.index + 1, c.default.sources.SILENT), this.quill.scrollIntoView();
                }
              },
              "list autofill": {
                key: " ",
                collapsed: !0,
                format: { list: !1 },
                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                handler: function(D, H) {
                  var K = H.prefix.length, V = this.quill.getLine(D.index), Q = A(V, 2), J = Q[0], tt = Q[1];
                  if (tt > K)
                    return !0;
                  var it = void 0;
                  switch (H.prefix.trim()) {
                    case "[]":
                    case "[ ]":
                      it = "unchecked";
                      break;
                    case "[x]":
                      it = "checked";
                      break;
                    case "-":
                    case "*":
                      it = "bullet";
                      break;
                    default:
                      it = "ordered";
                  }
                  this.quill.insertText(D.index, " ", c.default.sources.USER), this.quill.history.cutoff();
                  var ot = new a.default().retain(D.index - tt).delete(K + 1).retain(J.length() - 2 - tt).retain(1, { list: it });
                  this.quill.updateContents(ot, c.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(D.index - K, c.default.sources.SILENT);
                }
              },
              "code exit": {
                key: F.keys.ENTER,
                collapsed: !0,
                format: ["code-block"],
                prefix: /\n\n$/,
                suffix: /^\s+$/,
                handler: function(D) {
                  var H = this.quill.getLine(D.index), K = A(H, 2), V = K[0], Q = K[1], J = new a.default().retain(D.index + V.length() - Q - 2).retain(1, { "code-block": null }).delete(1);
                  this.quill.updateContents(J, c.default.sources.USER);
                }
              },
              "embed left": W(F.keys.LEFT, !1),
              "embed left shift": W(F.keys.LEFT, !0),
              "embed right": W(F.keys.RIGHT, !1),
              "embed right shift": W(F.keys.RIGHT, !0)
            }
          };
          function W(L, D) {
            var H, K = L === F.keys.LEFT ? "prefix" : "suffix";
            return H = {
              key: L,
              shiftKey: D,
              altKey: null
            }, p(H, K, /^$/), p(H, "handler", function(Q) {
              var J = Q.index;
              L === F.keys.RIGHT && (J += Q.length + 1);
              var tt = this.quill.getLeaf(J), it = A(tt, 1), ot = it[0];
              return ot instanceof f.default.Embed ? (L === F.keys.LEFT ? D ? this.quill.setSelection(Q.index - 1, Q.length + 1, c.default.sources.USER) : this.quill.setSelection(Q.index - 1, c.default.sources.USER) : D ? this.quill.setSelection(Q.index, Q.length + 1, c.default.sources.USER) : this.quill.setSelection(Q.index + Q.length + 1, c.default.sources.USER), !1) : !0;
            }), H;
          }
          function B(L, D) {
            if (!(L.index === 0 || this.quill.getLength() <= 1)) {
              var H = this.quill.getLine(L.index), K = A(H, 1), V = K[0], Q = {};
              if (D.offset === 0) {
                var J = this.quill.getLine(L.index - 1), tt = A(J, 1), it = tt[0];
                if (it != null && it.length() > 1) {
                  var ot = V.formats(), ft = this.quill.getFormat(L.index - 1, 1);
                  Q = r.default.attributes.diff(ot, ft) || {};
                }
              }
              var st = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(D.prefix) ? 2 : 1;
              this.quill.deleteText(L.index - st, st, c.default.sources.USER), Object.keys(Q).length > 0 && this.quill.formatLine(L.index - st, st, Q, c.default.sources.USER), this.quill.focus();
            }
          }
          function M(L, D) {
            var H = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(D.suffix) ? 2 : 1;
            if (!(L.index >= this.quill.getLength() - H)) {
              var K = {}, V = 0, Q = this.quill.getLine(L.index), J = A(Q, 1), tt = J[0];
              if (D.offset >= tt.length() - 1) {
                var it = this.quill.getLine(L.index + 1), ot = A(it, 1), ft = ot[0];
                if (ft) {
                  var st = tt.formats(), z = this.quill.getFormat(L.index, 1);
                  K = r.default.attributes.diff(st, z) || {}, V = ft.length();
                }
              }
              this.quill.deleteText(L.index, H, c.default.sources.USER), Object.keys(K).length > 0 && this.quill.formatLine(L.index + V - 1, H, K, c.default.sources.USER);
            }
          }
          function w(L) {
            var D = this.quill.getLines(L), H = {};
            if (D.length > 1) {
              var K = D[0].formats(), V = D[D.length - 1].formats();
              H = r.default.attributes.diff(V, K) || {};
            }
            this.quill.deleteText(L, c.default.sources.USER), Object.keys(H).length > 0 && this.quill.formatLine(L.index, 1, H, c.default.sources.USER), this.quill.setSelection(L.index, c.default.sources.SILENT), this.quill.focus();
          }
          function q(L, D) {
            var H = this;
            L.length > 0 && this.quill.scroll.deleteAt(L.index, L.length);
            var K = Object.keys(D.format).reduce(function(V, Q) {
              return f.default.query(Q, f.default.Scope.BLOCK) && !Array.isArray(D.format[Q]) && (V[Q] = D.format[Q]), V;
            }, {});
            this.quill.insertText(L.index, `
`, K, c.default.sources.USER), this.quill.setSelection(L.index + 1, c.default.sources.SILENT), this.quill.focus(), Object.keys(D.format).forEach(function(V) {
              K[V] == null && (Array.isArray(D.format[V]) || V !== "link" && H.quill.format(V, D.format[V], c.default.sources.USER));
            });
          }
          function j(L) {
            return {
              key: F.keys.TAB,
              shiftKey: !L,
              format: { "code-block": !0 },
              handler: function(H) {
                var K = f.default.query("code-block"), V = H.index, Q = H.length, J = this.quill.scroll.descendant(K, V), tt = A(J, 2), it = tt[0], ot = tt[1];
                if (it != null) {
                  var ft = this.quill.getIndex(it), st = it.newlineIndex(ot, !0) + 1, z = it.newlineIndex(ft + ot + Q), G = it.domNode.textContent.slice(st, z).split(`
`);
                  ot = 0, G.forEach(function(Y, X) {
                    L ? (it.insertAt(st + ot, K.TAB), ot += K.TAB.length, X === 0 ? V += K.TAB.length : Q += K.TAB.length) : Y.startsWith(K.TAB) && (it.deleteAt(st + ot, K.TAB.length), ot -= K.TAB.length, X === 0 ? V -= K.TAB.length : Q -= K.TAB.length), ot += Y.length + 1;
                  }), this.quill.update(c.default.sources.USER), this.quill.setSelection(V, Q, c.default.sources.SILENT);
                }
              }
            };
          }
          function U(L) {
            return {
              key: L[0].toUpperCase(),
              shortKey: !0,
              handler: function(H, K) {
                this.quill.format(L, !K.format[L], c.default.sources.USER);
              }
            };
          }
          function C(L) {
            if (typeof L == "string" || typeof L == "number")
              return C({ key: L });
            if ((typeof L > "u" ? "undefined" : T(L)) === "object" && (L = (0, y.default)(L, !1)), typeof L.key == "string")
              if (F.keys[L.key.toUpperCase()] != null)
                L.key = F.keys[L.key.toUpperCase()];
              else if (L.key.length === 1)
                L.key = L.key.toUpperCase().charCodeAt(0);
              else
                return null;
            return L.shortKey && (L[$] = L.shortKey, delete L.shortKey), L;
          }
          s.default = F, s.SHORTKEY = $;
        },
        /* 24 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function r(i, f) {
              var n = [], c = !0, N = !1, O = void 0;
              try {
                for (var E = i[Symbol.iterator](), x; !(c = (x = E.next()).done) && (n.push(x.value), !(f && n.length === f)); c = !0)
                  ;
              } catch (m) {
                N = !0, O = m;
              } finally {
                try {
                  !c && E.return && E.return();
                } finally {
                  if (N)
                    throw O;
                }
              }
              return n;
            }
            return function(i, f) {
              if (Array.isArray(i))
                return i;
              if (Symbol.iterator in Object(i))
                return r(i, f);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(i, f);
            if (c === void 0) {
              var N = Object.getPrototypeOf(i);
              return N === null ? void 0 : r(N, f, n);
            } else {
              if ("value" in c)
                return c.value;
              var O = c.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, b = /* @__PURE__ */ function() {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var c = f[n];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
              }
            }
            return function(i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          }(), v = d(0), y = t(v), h = d(7), o = t(h);
          function t(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function e(r, i) {
            if (!(r instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(r, i) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : r;
          }
          function a(r, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
          }
          var l = function(r) {
            a(i, r), b(i, null, [{
              key: "value",
              value: function() {
              }
            }]);
            function i(f, n) {
              e(this, i);
              var c = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
              return c.selection = n, c.textNode = document.createTextNode(i.CONTENTS), c.domNode.appendChild(c.textNode), c._length = 0, c;
            }
            return b(i, [{
              key: "detach",
              value: function() {
                this.parent != null && this.parent.removeChild(this);
              }
            }, {
              key: "format",
              value: function(n, c) {
                if (this._length !== 0)
                  return A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "format", this).call(this, n, c);
                for (var N = this, O = 0; N != null && N.statics.scope !== y.default.Scope.BLOCK_BLOT; )
                  O += N.offset(N.parent), N = N.parent;
                N != null && (this._length = i.CONTENTS.length, N.optimize(), N.formatAt(O, i.CONTENTS.length, n, c), this._length = 0);
              }
            }, {
              key: "index",
              value: function(n, c) {
                return n === this.textNode ? 0 : A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
              }
            }, {
              key: "length",
              value: function() {
                return this._length;
              }
            }, {
              key: "position",
              value: function() {
                return [this.textNode, this.textNode.data.length];
              }
            }, {
              key: "remove",
              value: function() {
                A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "remove", this).call(this), this.parent = null;
              }
            }, {
              key: "restore",
              value: function() {
                if (!(this.selection.composing || this.parent == null)) {
                  var n = this.textNode, c = this.selection.getNativeRange(), N = void 0, O = void 0, E = void 0;
                  if (c != null && c.start.node === n && c.end.node === n) {
                    var x = [n, c.start.offset, c.end.offset];
                    N = x[0], O = x[1], E = x[2];
                  }
                  for (; this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode; )
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                  if (this.textNode.data !== i.CONTENTS) {
                    var m = this.textNode.data.split(i.CONTENTS).join("");
                    this.next instanceof o.default ? (N = this.next.domNode, this.next.insertAt(0, m), this.textNode.data = i.CONTENTS) : (this.textNode.data = m, this.parent.insertBefore(y.default.create(this.textNode), this), this.textNode = document.createTextNode(i.CONTENTS), this.domNode.appendChild(this.textNode));
                  }
                  if (this.remove(), O != null) {
                    var p = [O, E].map(function(k) {
                      return Math.max(0, Math.min(N.data.length, k - 1));
                    }), g = T(p, 2);
                    return O = g[0], E = g[1], {
                      startNode: N,
                      startOffset: O,
                      endNode: N,
                      endOffset: E
                    };
                  }
                }
              }
            }, {
              key: "update",
              value: function(n, c) {
                var N = this;
                if (n.some(function(E) {
                  return E.type === "characterData" && E.target === N.textNode;
                })) {
                  var O = this.restore();
                  O && (c.range = O);
                }
              }
            }, {
              key: "value",
              value: function() {
                return "";
              }
            }]), i;
          }(y.default.Embed);
          l.blotName = "cursor", l.className = "ql-cursor", l.tagName = "span", l.CONTENTS = "\uFEFF", s.default = l;
        },
        /* 25 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(0), A = y(T), b = d(4), v = y(b);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return a;
          }(A.default.Container);
          e.allowedChildren = [v.default, b.BlockEmbed, e], s.default = e;
        },
        /* 26 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.ColorStyle = s.ColorClass = s.ColorAttributor = void 0;
          var T = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), A = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, b = d(0), v = y(b);
          function y(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function h(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function t(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var e = function(l) {
            t(r, l);
            function r() {
              return h(this, r), o(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return T(r, [{
              key: "value",
              value: function(f) {
                var n = A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "value", this).call(this, f);
                return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(c) {
                  return ("00" + parseInt(c).toString(16)).slice(-2);
                }).join("")) : n;
              }
            }]), r;
          }(v.default.Attributor.Style), u = new v.default.Attributor.Class("color", "ql-color", {
            scope: v.default.Scope.INLINE
          }), a = new e("color", "color", {
            scope: v.default.Scope.INLINE
          });
          s.ColorAttributor = e, s.ColorClass = u, s.ColorStyle = a;
        },
        /* 27 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.sanitize = s.default = void 0;
          var T = /* @__PURE__ */ function() {
            function a(l, r) {
              for (var i = 0; i < r.length; i++) {
                var f = r[i];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
              }
            }
            return function(l, r, i) {
              return r && a(l.prototype, r), i && a(l, i), l;
            };
          }(), A = function a(l, r, i) {
            l === null && (l = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(l, r);
            if (f === void 0) {
              var n = Object.getPrototypeOf(l);
              return n === null ? void 0 : a(n, r, i);
            } else {
              if ("value" in f)
                return f.value;
              var c = f.get;
              return c === void 0 ? void 0 : c.call(i);
            }
          }, b = d(6), v = y(b);
          function y(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function h(a, l) {
            if (!(a instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == "object" || typeof l == "function") ? l : a;
          }
          function t(a, l) {
            if (typeof l != "function" && l !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof l);
            a.prototype = Object.create(l && l.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
          }
          var e = function(a) {
            t(l, a);
            function l() {
              return h(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
            }
            return T(l, [{
              key: "format",
              value: function(i, f) {
                if (i !== this.statics.blotName || !f)
                  return A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "format", this).call(this, i, f);
                f = this.constructor.sanitize(f), this.domNode.setAttribute("href", f);
              }
            }], [{
              key: "create",
              value: function(i) {
                var f = A(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this, i);
                return i = this.sanitize(i), f.setAttribute("href", i), f.setAttribute("rel", "noopener noreferrer"), f.setAttribute("target", "_blank"), f;
              }
            }, {
              key: "formats",
              value: function(i) {
                return i.getAttribute("href");
              }
            }, {
              key: "sanitize",
              value: function(i) {
                return u(i, this.PROTOCOL_WHITELIST) ? i : this.SANITIZED_URL;
              }
            }]), l;
          }(v.default);
          e.blotName = "link", e.tagName = "A", e.SANITIZED_URL = "about:blank", e.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"];
          function u(a, l) {
            var r = document.createElement("a");
            r.href = a;
            var i = r.href.slice(0, r.href.indexOf(":"));
            return l.indexOf(i) > -1;
          }
          s.default = e, s.sanitize = u;
        },
        /* 28 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
            return typeof l;
          } : function(l) {
            return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
          }, A = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), b = d(23), v = o(b), y = d(107), h = o(y);
          function o(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function t(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          var e = 0;
          function u(l, r) {
            l.setAttribute(r, l.getAttribute(r) !== "true");
          }
          var a = function() {
            function l(r) {
              var i = this;
              t(this, l), this.select = r, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
                i.togglePicker();
              }), this.label.addEventListener("keydown", function(f) {
                switch (f.keyCode) {
                  case v.default.keys.ENTER:
                    i.togglePicker();
                    break;
                  case v.default.keys.ESCAPE:
                    i.escape(), f.preventDefault();
                    break;
                }
              }), this.select.addEventListener("change", this.update.bind(this));
            }
            return A(l, [{
              key: "togglePicker",
              value: function() {
                this.container.classList.toggle("ql-expanded"), u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
              }
            }, {
              key: "buildItem",
              value: function(i) {
                var f = this, n = document.createElement("span");
                return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), i.hasAttribute("value") && n.setAttribute("data-value", i.getAttribute("value")), i.textContent && n.setAttribute("data-label", i.textContent), n.addEventListener("click", function() {
                  f.selectItem(n, !0);
                }), n.addEventListener("keydown", function(c) {
                  switch (c.keyCode) {
                    case v.default.keys.ENTER:
                      f.selectItem(n, !0), c.preventDefault();
                      break;
                    case v.default.keys.ESCAPE:
                      f.escape(), c.preventDefault();
                      break;
                  }
                }), n;
              }
            }, {
              key: "buildLabel",
              value: function() {
                var i = document.createElement("span");
                return i.classList.add("ql-picker-label"), i.innerHTML = h.default, i.tabIndex = "0", i.setAttribute("role", "button"), i.setAttribute("aria-expanded", "false"), this.container.appendChild(i), i;
              }
            }, {
              key: "buildOptions",
              value: function() {
                var i = this, f = document.createElement("span");
                f.classList.add("ql-picker-options"), f.setAttribute("aria-hidden", "true"), f.tabIndex = "-1", f.id = "ql-picker-options-" + e, e += 1, this.label.setAttribute("aria-controls", f.id), this.options = f, [].slice.call(this.select.options).forEach(function(n) {
                  var c = i.buildItem(n);
                  f.appendChild(c), n.selected === !0 && i.selectItem(c);
                }), this.container.appendChild(f);
              }
            }, {
              key: "buildPicker",
              value: function() {
                var i = this;
                [].slice.call(this.select.attributes).forEach(function(f) {
                  i.container.setAttribute(f.name, f.value);
                }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
              }
            }, {
              key: "escape",
              value: function() {
                var i = this;
                this.close(), setTimeout(function() {
                  return i.label.focus();
                }, 1);
              }
            }, {
              key: "close",
              value: function() {
                this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
              }
            }, {
              key: "selectItem",
              value: function(i) {
                var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = this.container.querySelector(".ql-selected");
                if (i !== n && (n != null && n.classList.remove("ql-selected"), i != null && (i.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(i.parentNode.children, i), i.hasAttribute("data-value") ? this.label.setAttribute("data-value", i.getAttribute("data-value")) : this.label.removeAttribute("data-value"), i.hasAttribute("data-label") ? this.label.setAttribute("data-label", i.getAttribute("data-label")) : this.label.removeAttribute("data-label"), f))) {
                  if (typeof Event == "function")
                    this.select.dispatchEvent(new Event("change"));
                  else if ((typeof Event > "u" ? "undefined" : T(Event)) === "object") {
                    var c = document.createEvent("Event");
                    c.initEvent("change", !0, !0), this.select.dispatchEvent(c);
                  }
                  this.close();
                }
              }
            }, {
              key: "update",
              value: function() {
                var i = void 0;
                if (this.select.selectedIndex > -1) {
                  var f = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                  i = this.select.options[this.select.selectedIndex], this.selectItem(f);
                } else
                  this.selectItem(null);
                var n = i != null && i !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", n);
              }
            }]), l;
          }();
          s.default = a;
        },
        /* 29 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(0), A = I(T), b = d(5), v = I(b), y = d(4), h = I(y), o = d(16), t = I(o), e = d(25), u = I(e), a = d(24), l = I(a), r = d(35), i = I(r), f = d(6), n = I(f), c = d(22), N = I(c), O = d(7), E = I(O), x = d(55), m = I(x), p = d(42), g = I(p), k = d(23), P = I(k);
          function I($) {
            return $ && $.__esModule ? $ : { default: $ };
          }
          v.default.register({
            "blots/block": h.default,
            "blots/block/embed": y.BlockEmbed,
            "blots/break": t.default,
            "blots/container": u.default,
            "blots/cursor": l.default,
            "blots/embed": i.default,
            "blots/inline": n.default,
            "blots/scroll": N.default,
            "blots/text": E.default,
            "modules/clipboard": m.default,
            "modules/history": g.default,
            "modules/keyboard": P.default
          }), A.default.register(h.default, t.default, l.default, n.default, N.default, E.default), s.default = v.default;
        },
        /* 30 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var T = d(1), A = (
            /** @class */
            function() {
              function b(v) {
                this.domNode = v, this.domNode[T.DATA_KEY] = { blot: this };
              }
              return Object.defineProperty(b.prototype, "statics", {
                // Hack for accessing inherited static methods
                get: function() {
                  return this.constructor;
                },
                enumerable: !0,
                configurable: !0
              }), b.create = function(v) {
                if (this.tagName == null)
                  throw new T.ParchmentError("Blot definition missing tagName");
                var y;
                return Array.isArray(this.tagName) ? (typeof v == "string" && (v = v.toUpperCase(), parseInt(v).toString() === v && (v = parseInt(v))), typeof v == "number" ? y = document.createElement(this.tagName[v - 1]) : this.tagName.indexOf(v) > -1 ? y = document.createElement(v) : y = document.createElement(this.tagName[0])) : y = document.createElement(this.tagName), this.className && y.classList.add(this.className), y;
              }, b.prototype.attach = function() {
                this.parent != null && (this.scroll = this.parent.scroll);
              }, b.prototype.clone = function() {
                var v = this.domNode.cloneNode(!1);
                return T.create(v);
              }, b.prototype.detach = function() {
                this.parent != null && this.parent.removeChild(this), delete this.domNode[T.DATA_KEY];
              }, b.prototype.deleteAt = function(v, y) {
                var h = this.isolate(v, y);
                h.remove();
              }, b.prototype.formatAt = function(v, y, h, o) {
                var t = this.isolate(v, y);
                if (T.query(h, T.Scope.BLOT) != null && o)
                  t.wrap(h, o);
                else if (T.query(h, T.Scope.ATTRIBUTE) != null) {
                  var e = T.create(this.statics.scope);
                  t.wrap(e), e.format(h, o);
                }
              }, b.prototype.insertAt = function(v, y, h) {
                var o = h == null ? T.create("text", y) : T.create(y, h), t = this.split(v);
                this.parent.insertBefore(o, t);
              }, b.prototype.insertInto = function(v, y) {
                y === void 0 && (y = null), this.parent != null && this.parent.children.remove(this);
                var h = null;
                v.children.insertBefore(this, y), y != null && (h = y.domNode), (this.domNode.parentNode != v.domNode || this.domNode.nextSibling != h) && v.domNode.insertBefore(this.domNode, h), this.parent = v, this.attach();
              }, b.prototype.isolate = function(v, y) {
                var h = this.split(v);
                return h.split(y), h;
              }, b.prototype.length = function() {
                return 1;
              }, b.prototype.offset = function(v) {
                return v === void 0 && (v = this.parent), this.parent == null || this == v ? 0 : this.parent.children.offset(this) + this.parent.offset(v);
              }, b.prototype.optimize = function(v) {
                this.domNode[T.DATA_KEY] != null && delete this.domNode[T.DATA_KEY].mutations;
              }, b.prototype.remove = function() {
                this.domNode.parentNode != null && this.domNode.parentNode.removeChild(this.domNode), this.detach();
              }, b.prototype.replace = function(v) {
                v.parent != null && (v.parent.insertBefore(this, v.next), v.remove());
              }, b.prototype.replaceWith = function(v, y) {
                var h = typeof v == "string" ? T.create(v, y) : v;
                return h.replace(this), h;
              }, b.prototype.split = function(v, y) {
                return v === 0 ? this : this.next;
              }, b.prototype.update = function(v, y) {
              }, b.prototype.wrap = function(v, y) {
                var h = typeof v == "string" ? T.create(v, y) : v;
                return this.parent != null && this.parent.insertBefore(h, this.next), h.appendChild(this), h;
              }, b.blotName = "abstract", b;
            }()
          );
          s.default = A;
        },
        /* 31 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var T = d(12), A = d(32), b = d(33), v = d(1), y = (
            /** @class */
            function() {
              function h(o) {
                this.attributes = {}, this.domNode = o, this.build();
              }
              return h.prototype.attribute = function(o, t) {
                t ? o.add(this.domNode, t) && (o.value(this.domNode) != null ? this.attributes[o.attrName] = o : delete this.attributes[o.attrName]) : (o.remove(this.domNode), delete this.attributes[o.attrName]);
              }, h.prototype.build = function() {
                var o = this;
                this.attributes = {};
                var t = T.default.keys(this.domNode), e = A.default.keys(this.domNode), u = b.default.keys(this.domNode);
                t.concat(e).concat(u).forEach(function(a) {
                  var l = v.query(a, v.Scope.ATTRIBUTE);
                  l instanceof T.default && (o.attributes[l.attrName] = l);
                });
              }, h.prototype.copy = function(o) {
                var t = this;
                Object.keys(this.attributes).forEach(function(e) {
                  var u = t.attributes[e].value(t.domNode);
                  o.format(e, u);
                });
              }, h.prototype.move = function(o) {
                var t = this;
                this.copy(o), Object.keys(this.attributes).forEach(function(e) {
                  t.attributes[e].remove(t.domNode);
                }), this.attributes = {};
              }, h.prototype.values = function() {
                var o = this;
                return Object.keys(this.attributes).reduce(function(t, e) {
                  return t[e] = o.attributes[e].value(o.domNode), t;
                }, {});
              }, h;
            }()
          );
          s.default = y;
        },
        /* 32 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(12);
          function b(y, h) {
            var o = y.getAttribute("class") || "";
            return o.split(/\s+/).filter(function(t) {
              return t.indexOf(h + "-") === 0;
            });
          }
          var v = (
            /** @class */
            function(y) {
              T(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.keys = function(o) {
                return (o.getAttribute("class") || "").split(/\s+/).map(function(t) {
                  return t.split("-").slice(0, -1).join("-");
                });
              }, h.prototype.add = function(o, t) {
                return this.canAdd(o, t) ? (this.remove(o), o.classList.add(this.keyName + "-" + t), !0) : !1;
              }, h.prototype.remove = function(o) {
                var t = b(o, this.keyName);
                t.forEach(function(e) {
                  o.classList.remove(e);
                }), o.classList.length === 0 && o.removeAttribute("class");
              }, h.prototype.value = function(o) {
                var t = b(o, this.keyName)[0] || "", e = t.slice(this.keyName.length + 1);
                return this.canAdd(o, e) ? e : "";
              }, h;
            }(A.default)
          );
          s.default = v;
        },
        /* 33 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(12);
          function b(y) {
            var h = y.split("-"), o = h.slice(1).map(function(t) {
              return t[0].toUpperCase() + t.slice(1);
            }).join("");
            return h[0] + o;
          }
          var v = (
            /** @class */
            function(y) {
              T(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.keys = function(o) {
                return (o.getAttribute("style") || "").split(";").map(function(t) {
                  var e = t.split(":");
                  return e[0].trim();
                });
              }, h.prototype.add = function(o, t) {
                return this.canAdd(o, t) ? (o.style[b(this.keyName)] = t, !0) : !1;
              }, h.prototype.remove = function(o) {
                o.style[b(this.keyName)] = "", o.getAttribute("style") || o.removeAttribute("style");
              }, h.prototype.value = function(o) {
                var t = o.style[b(this.keyName)];
                return this.canAdd(o, t) ? t : "";
              }, h;
            }(A.default)
          );
          s.default = v;
        },
        /* 34 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function v(y, h) {
              for (var o = 0; o < h.length; o++) {
                var t = h[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(y, t.key, t);
              }
            }
            return function(y, h, o) {
              return h && v(y.prototype, h), o && v(y, o), y;
            };
          }();
          function A(v, y) {
            if (!(v instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var b = function() {
            function v(y, h) {
              A(this, v), this.quill = y, this.options = h, this.modules = {};
            }
            return T(v, [{
              key: "init",
              value: function() {
                var h = this;
                Object.keys(this.options.modules).forEach(function(o) {
                  h.modules[o] == null && h.addModule(o);
                });
              }
            }, {
              key: "addModule",
              value: function(h) {
                var o = this.quill.constructor.import("modules/" + h);
                return this.modules[h] = new o(this.quill, this.options.modules[h] || {}), this.modules[h];
              }
            }]), v;
          }();
          b.DEFAULTS = {
            modules: {}
          }, b.themes = {
            default: b
          }, s.default = b;
        },
        /* 35 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var c = f[n];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
              }
            }
            return function(i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          }(), A = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(i, f);
            if (c === void 0) {
              var N = Object.getPrototypeOf(i);
              return N === null ? void 0 : r(N, f, n);
            } else {
              if ("value" in c)
                return c.value;
              var O = c.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, b = d(0), v = o(b), y = d(7), h = o(y);
          function o(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function t(r, i) {
            if (!(r instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function e(r, i) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : r;
          }
          function u(r, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
          }
          var a = "\uFEFF", l = function(r) {
            u(i, r);
            function i(f) {
              t(this, i);
              var n = e(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, f));
              return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(c) {
                n.contentNode.appendChild(c);
              }), n.leftGuard = document.createTextNode(a), n.rightGuard = document.createTextNode(a), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n;
            }
            return T(i, [{
              key: "index",
              value: function(n, c) {
                return n === this.leftGuard ? 0 : n === this.rightGuard ? 1 : A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "index", this).call(this, n, c);
              }
            }, {
              key: "restore",
              value: function(n) {
                var c = void 0, N = void 0, O = n.data.split(a).join("");
                if (n === this.leftGuard)
                  if (this.prev instanceof h.default) {
                    var E = this.prev.length();
                    this.prev.insertAt(E, O), c = {
                      startNode: this.prev.domNode,
                      startOffset: E + O.length
                    };
                  } else
                    N = document.createTextNode(O), this.parent.insertBefore(v.default.create(N), this), c = {
                      startNode: N,
                      startOffset: O.length
                    };
                else
                  n === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, O), c = {
                    startNode: this.next.domNode,
                    startOffset: O.length
                  }) : (N = document.createTextNode(O), this.parent.insertBefore(v.default.create(N), this.next), c = {
                    startNode: N,
                    startOffset: O.length
                  }));
                return n.data = a, c;
              }
            }, {
              key: "update",
              value: function(n, c) {
                var N = this;
                n.forEach(function(O) {
                  if (O.type === "characterData" && (O.target === N.leftGuard || O.target === N.rightGuard)) {
                    var E = N.restore(O.target);
                    E && (c.range = E);
                  }
                });
              }
            }]), i;
          }(v.default.Embed);
          s.default = l;
        },
        /* 36 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.AlignStyle = s.AlignClass = s.AlignAttribute = void 0;
          var T = d(0), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var v = {
            scope: A.default.Scope.BLOCK,
            whitelist: ["right", "center", "justify"]
          }, y = new A.default.Attributor.Attribute("align", "align", v), h = new A.default.Attributor.Class("align", "ql-align", v), o = new A.default.Attributor.Style("align", "text-align", v);
          s.AlignAttribute = y, s.AlignClass = h, s.AlignStyle = o;
        },
        /* 37 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.BackgroundStyle = s.BackgroundClass = void 0;
          var T = d(0), A = v(T), b = d(26);
          function v(o) {
            return o && o.__esModule ? o : { default: o };
          }
          var y = new A.default.Attributor.Class("background", "ql-bg", {
            scope: A.default.Scope.INLINE
          }), h = new b.ColorAttributor("background", "background-color", {
            scope: A.default.Scope.INLINE
          });
          s.BackgroundClass = y, s.BackgroundStyle = h;
        },
        /* 38 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.DirectionStyle = s.DirectionClass = s.DirectionAttribute = void 0;
          var T = d(0), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          var v = {
            scope: A.default.Scope.BLOCK,
            whitelist: ["rtl"]
          }, y = new A.default.Attributor.Attribute("direction", "dir", v), h = new A.default.Attributor.Class("direction", "ql-direction", v), o = new A.default.Attributor.Style("direction", "direction", v);
          s.DirectionAttribute = y, s.DirectionClass = h, s.DirectionStyle = o;
        },
        /* 39 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.FontClass = s.FontStyle = void 0;
          var T = /* @__PURE__ */ function() {
            function r(i, f) {
              for (var n = 0; n < f.length; n++) {
                var c = f[n];
                c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(i, c.key, c);
              }
            }
            return function(i, f, n) {
              return f && r(i.prototype, f), n && r(i, n), i;
            };
          }(), A = function r(i, f, n) {
            i === null && (i = Function.prototype);
            var c = Object.getOwnPropertyDescriptor(i, f);
            if (c === void 0) {
              var N = Object.getPrototypeOf(i);
              return N === null ? void 0 : r(N, f, n);
            } else {
              if ("value" in c)
                return c.value;
              var O = c.get;
              return O === void 0 ? void 0 : O.call(n);
            }
          }, b = d(0), v = y(b);
          function y(r) {
            return r && r.__esModule ? r : { default: r };
          }
          function h(r, i) {
            if (!(r instanceof i))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(r, i) {
            if (!r)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return i && (typeof i == "object" || typeof i == "function") ? i : r;
          }
          function t(r, i) {
            if (typeof i != "function" && i !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof i);
            r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
          }
          var e = {
            scope: v.default.Scope.INLINE,
            whitelist: ["serif", "monospace"]
          }, u = new v.default.Attributor.Class("font", "ql-font", e), a = function(r) {
            t(i, r);
            function i() {
              return h(this, i), o(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments));
            }
            return T(i, [{
              key: "value",
              value: function(n) {
                return A(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, n).replace(/["']/g, "");
              }
            }]), i;
          }(v.default.Attributor.Style), l = new a("font", "font-family", e);
          s.FontStyle = l, s.FontClass = u;
        },
        /* 40 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SizeStyle = s.SizeClass = void 0;
          var T = d(0), A = b(T);
          function b(h) {
            return h && h.__esModule ? h : { default: h };
          }
          var v = new A.default.Attributor.Class("size", "ql-size", {
            scope: A.default.Scope.INLINE,
            whitelist: ["small", "large", "huge"]
          }), y = new A.default.Attributor.Style("size", "font-size", {
            scope: A.default.Scope.INLINE,
            whitelist: ["10px", "18px", "32px"]
          });
          s.SizeClass = v, s.SizeStyle = y;
        },
        /* 41 */
        /***/
        function(_, s, d) {
          _.exports = {
            align: {
              "": d(76),
              center: d(77),
              right: d(78),
              justify: d(79)
            },
            background: d(80),
            blockquote: d(81),
            bold: d(82),
            clean: d(83),
            code: d(58),
            "code-block": d(58),
            color: d(84),
            direction: {
              "": d(85),
              rtl: d(86)
            },
            float: {
              center: d(87),
              full: d(88),
              left: d(89),
              right: d(90)
            },
            formula: d(91),
            header: {
              1: d(92),
              2: d(93)
            },
            italic: d(94),
            image: d(95),
            indent: {
              "+1": d(96),
              "-1": d(97)
            },
            link: d(98),
            list: {
              ordered: d(99),
              bullet: d(100),
              check: d(101)
            },
            script: {
              sub: d(102),
              super: d(103)
            },
            strike: d(104),
            underline: d(105),
            video: d(106)
          };
        },
        /* 42 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.getLastChangeIndex = s.default = void 0;
          var T = /* @__PURE__ */ function() {
            function f(n, c) {
              for (var N = 0; N < c.length; N++) {
                var O = c[N];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(n, O.key, O);
              }
            }
            return function(n, c, N) {
              return c && f(n.prototype, c), N && f(n, N), n;
            };
          }(), A = d(0), b = t(A), v = d(5), y = t(v), h = d(9), o = t(h);
          function t(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function e(f, n) {
            if (!(f instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function u(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n == "object" || typeof n == "function") ? n : f;
          }
          function a(f, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
          }
          var l = function(f) {
            a(n, f);
            function n(c, N) {
              e(this, n);
              var O = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, c, N));
              return O.lastRecorded = 0, O.ignoreChange = !1, O.clear(), O.quill.on(y.default.events.EDITOR_CHANGE, function(E, x, m, p) {
                E !== y.default.events.TEXT_CHANGE || O.ignoreChange || (!O.options.userOnly || p === y.default.sources.USER ? O.record(x, m) : O.transform(x));
              }), O.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, O.undo.bind(O)), O.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, O.redo.bind(O)), /Win/i.test(navigator.platform) && O.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, O.redo.bind(O)), O;
            }
            return T(n, [{
              key: "change",
              value: function(N, O) {
                if (this.stack[N].length !== 0) {
                  var E = this.stack[N].pop();
                  this.stack[O].push(E), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(E[N], y.default.sources.USER), this.ignoreChange = !1;
                  var x = i(E[N]);
                  this.quill.setSelection(x);
                }
              }
            }, {
              key: "clear",
              value: function() {
                this.stack = { undo: [], redo: [] };
              }
            }, {
              key: "cutoff",
              value: function() {
                this.lastRecorded = 0;
              }
            }, {
              key: "record",
              value: function(N, O) {
                if (N.ops.length !== 0) {
                  this.stack.redo = [];
                  var E = this.quill.getContents().diff(O), x = Date.now();
                  if (this.lastRecorded + this.options.delay > x && this.stack.undo.length > 0) {
                    var m = this.stack.undo.pop();
                    E = E.compose(m.undo), N = m.redo.compose(N);
                  } else
                    this.lastRecorded = x;
                  this.stack.undo.push({
                    redo: N,
                    undo: E
                  }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
                }
              }
            }, {
              key: "redo",
              value: function() {
                this.change("redo", "undo");
              }
            }, {
              key: "transform",
              value: function(N) {
                this.stack.undo.forEach(function(O) {
                  O.undo = N.transform(O.undo, !0), O.redo = N.transform(O.redo, !0);
                }), this.stack.redo.forEach(function(O) {
                  O.undo = N.transform(O.undo, !0), O.redo = N.transform(O.redo, !0);
                });
              }
            }, {
              key: "undo",
              value: function() {
                this.change("undo", "redo");
              }
            }]), n;
          }(o.default);
          l.DEFAULTS = {
            delay: 1e3,
            maxStack: 100,
            userOnly: !1
          };
          function r(f) {
            var n = f.ops[f.ops.length - 1];
            return n == null ? !1 : n.insert != null ? typeof n.insert == "string" && n.insert.endsWith(`
`) : n.attributes != null ? Object.keys(n.attributes).some(function(c) {
              return b.default.query(c, b.default.Scope.BLOCK) != null;
            }) : !1;
          }
          function i(f) {
            var n = f.reduce(function(N, O) {
              return N += O.delete || 0, N;
            }, 0), c = f.length() - n;
            return r(f) && (c -= 1), c;
          }
          s.default = l, s.getLastChangeIndex = i;
        },
        /* 43 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BaseTooltip = void 0;
          var T = /* @__PURE__ */ function() {
            function q(j, U) {
              for (var C = 0; C < U.length; C++) {
                var L = U[C];
                L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(j, L.key, L);
              }
            }
            return function(j, U, C) {
              return U && q(j.prototype, U), C && q(j, C), j;
            };
          }(), A = function q(j, U, C) {
            j === null && (j = Function.prototype);
            var L = Object.getOwnPropertyDescriptor(j, U);
            if (L === void 0) {
              var D = Object.getPrototypeOf(j);
              return D === null ? void 0 : q(D, U, C);
            } else {
              if ("value" in L)
                return L.value;
              var H = L.get;
              return H === void 0 ? void 0 : H.call(C);
            }
          }, b = d(3), v = x(b), y = d(2), h = x(y), o = d(8), t = x(o), e = d(23), u = x(e), a = d(34), l = x(a), r = d(59), i = x(r), f = d(60), n = x(f), c = d(28), N = x(c), O = d(61), E = x(O);
          function x(q) {
            return q && q.__esModule ? q : { default: q };
          }
          function m(q, j) {
            if (!(q instanceof j))
              throw new TypeError("Cannot call a class as a function");
          }
          function p(q, j) {
            if (!q)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return j && (typeof j == "object" || typeof j == "function") ? j : q;
          }
          function g(q, j) {
            if (typeof j != "function" && j !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof j);
            q.prototype = Object.create(j && j.prototype, { constructor: { value: q, enumerable: !1, writable: !0, configurable: !0 } }), j && (Object.setPrototypeOf ? Object.setPrototypeOf(q, j) : q.__proto__ = j);
          }
          var k = [!1, "center", "right", "justify"], P = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], I = [!1, "serif", "monospace"], $ = ["1", "2", "3", !1], F = ["small", !1, "large", "huge"], W = function(q) {
            g(j, q);
            function j(U, C) {
              m(this, j);
              var L = p(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, U, C)), D = function H(K) {
                if (!document.body.contains(U.root))
                  return document.body.removeEventListener("click", H);
                L.tooltip != null && !L.tooltip.root.contains(K.target) && document.activeElement !== L.tooltip.textbox && !L.quill.hasFocus() && L.tooltip.hide(), L.pickers != null && L.pickers.forEach(function(V) {
                  V.container.contains(K.target) || V.close();
                });
              };
              return U.emitter.listenDOM("click", document.body, D), L;
            }
            return T(j, [{
              key: "addModule",
              value: function(C) {
                var L = A(j.prototype.__proto__ || Object.getPrototypeOf(j.prototype), "addModule", this).call(this, C);
                return C === "toolbar" && this.extendToolbar(L), L;
              }
            }, {
              key: "buildButtons",
              value: function(C, L) {
                C.forEach(function(D) {
                  var H = D.getAttribute("class") || "";
                  H.split(/\s+/).forEach(function(K) {
                    if (K.startsWith("ql-") && (K = K.slice(3), L[K] != null))
                      if (K === "direction")
                        D.innerHTML = L[K][""] + L[K].rtl;
                      else if (typeof L[K] == "string")
                        D.innerHTML = L[K];
                      else {
                        var V = D.value || "";
                        V != null && L[K][V] && (D.innerHTML = L[K][V]);
                      }
                  });
                });
              }
            }, {
              key: "buildPickers",
              value: function(C, L) {
                var D = this;
                this.pickers = C.map(function(K) {
                  if (K.classList.contains("ql-align"))
                    return K.querySelector("option") == null && w(K, k), new n.default(K, L.align);
                  if (K.classList.contains("ql-background") || K.classList.contains("ql-color")) {
                    var V = K.classList.contains("ql-background") ? "background" : "color";
                    return K.querySelector("option") == null && w(K, P, V === "background" ? "#ffffff" : "#000000"), new i.default(K, L[V]);
                  } else
                    return K.querySelector("option") == null && (K.classList.contains("ql-font") ? w(K, I) : K.classList.contains("ql-header") ? w(K, $) : K.classList.contains("ql-size") && w(K, F)), new N.default(K);
                });
                var H = function() {
                  D.pickers.forEach(function(V) {
                    V.update();
                  });
                };
                this.quill.on(t.default.events.EDITOR_CHANGE, H);
              }
            }]), j;
          }(l.default);
          W.DEFAULTS = (0, v.default)(!0, {}, l.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  formula: function() {
                    this.quill.theme.tooltip.edit("formula");
                  },
                  image: function() {
                    var j = this, U = this.container.querySelector("input.ql-image[type=file]");
                    U == null && (U = document.createElement("input"), U.setAttribute("type", "file"), U.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), U.classList.add("ql-image"), U.addEventListener("change", function() {
                      if (U.files != null && U.files[0] != null) {
                        var C = new FileReader();
                        C.onload = function(L) {
                          var D = j.quill.getSelection(!0);
                          j.quill.updateContents(new h.default().retain(D.index).delete(D.length).insert({ image: L.target.result }), t.default.sources.USER), j.quill.setSelection(D.index + 1, t.default.sources.SILENT), U.value = "";
                        }, C.readAsDataURL(U.files[0]);
                      }
                    }), this.container.appendChild(U)), U.click();
                  },
                  video: function() {
                    this.quill.theme.tooltip.edit("video");
                  }
                }
              }
            }
          });
          var B = function(q) {
            g(j, q);
            function j(U, C) {
              m(this, j);
              var L = p(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, U, C));
              return L.textbox = L.root.querySelector('input[type="text"]'), L.listen(), L;
            }
            return T(j, [{
              key: "listen",
              value: function() {
                var C = this;
                this.textbox.addEventListener("keydown", function(L) {
                  u.default.match(L, "enter") ? (C.save(), L.preventDefault()) : u.default.match(L, "escape") && (C.cancel(), L.preventDefault());
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.hide();
              }
            }, {
              key: "edit",
              value: function() {
                var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "link", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), L != null ? this.textbox.value = L : C !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + C) || ""), this.root.setAttribute("data-mode", C);
              }
            }, {
              key: "restoreFocus",
              value: function() {
                var C = this.quill.scrollingContainer.scrollTop;
                this.quill.focus(), this.quill.scrollingContainer.scrollTop = C;
              }
            }, {
              key: "save",
              value: function() {
                var C = this.textbox.value;
                switch (this.root.getAttribute("data-mode")) {
                  case "link": {
                    var L = this.quill.root.scrollTop;
                    this.linkRange ? (this.quill.formatText(this.linkRange, "link", C, t.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", C, t.default.sources.USER)), this.quill.root.scrollTop = L;
                    break;
                  }
                  case "video":
                    C = M(C);
                  case "formula": {
                    if (!C)
                      break;
                    var D = this.quill.getSelection(!0);
                    if (D != null) {
                      var H = D.index + D.length;
                      this.quill.insertEmbed(H, this.root.getAttribute("data-mode"), C, t.default.sources.USER), this.root.getAttribute("data-mode") === "formula" && this.quill.insertText(H + 1, " ", t.default.sources.USER), this.quill.setSelection(H + 2, t.default.sources.USER);
                    }
                    break;
                  }
                }
                this.textbox.value = "", this.hide();
              }
            }]), j;
          }(E.default);
          function M(q) {
            var j = q.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || q.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
            return j ? (j[1] || "https") + "://www.youtube.com/embed/" + j[2] + "?showinfo=0" : (j = q.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (j[1] || "https") + "://player.vimeo.com/video/" + j[2] + "/" : q;
          }
          function w(q, j) {
            var U = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            j.forEach(function(C) {
              var L = document.createElement("option");
              C === U ? L.setAttribute("selected", "selected") : L.setAttribute("value", C), q.appendChild(L);
            });
          }
          s.BaseTooltip = B, s.default = W;
        },
        /* 44 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", { value: !0 });
          var T = (
            /** @class */
            function() {
              function A() {
                this.head = this.tail = null, this.length = 0;
              }
              return A.prototype.append = function() {
                for (var b = [], v = 0; v < arguments.length; v++)
                  b[v] = arguments[v];
                this.insertBefore(b[0], null), b.length > 1 && this.append.apply(this, b.slice(1));
              }, A.prototype.contains = function(b) {
                for (var v, y = this.iterator(); v = y(); )
                  if (v === b)
                    return !0;
                return !1;
              }, A.prototype.insertBefore = function(b, v) {
                b && (b.next = v, v != null ? (b.prev = v.prev, v.prev != null && (v.prev.next = b), v.prev = b, v === this.head && (this.head = b)) : this.tail != null ? (this.tail.next = b, b.prev = this.tail, this.tail = b) : (b.prev = null, this.head = this.tail = b), this.length += 1);
              }, A.prototype.offset = function(b) {
                for (var v = 0, y = this.head; y != null; ) {
                  if (y === b)
                    return v;
                  v += y.length(), y = y.next;
                }
                return -1;
              }, A.prototype.remove = function(b) {
                this.contains(b) && (b.prev != null && (b.prev.next = b.next), b.next != null && (b.next.prev = b.prev), b === this.head && (this.head = b.next), b === this.tail && (this.tail = b.prev), this.length -= 1);
              }, A.prototype.iterator = function(b) {
                return b === void 0 && (b = this.head), function() {
                  var v = b;
                  return b != null && (b = b.next), v;
                };
              }, A.prototype.find = function(b, v) {
                v === void 0 && (v = !1);
                for (var y, h = this.iterator(); y = h(); ) {
                  var o = y.length();
                  if (b < o || v && b === o && (y.next == null || y.next.length() !== 0))
                    return [y, b];
                  b -= o;
                }
                return [null, 0];
              }, A.prototype.forEach = function(b) {
                for (var v, y = this.iterator(); v = y(); )
                  b(v);
              }, A.prototype.forEachAt = function(b, v, y) {
                if (!(v <= 0))
                  for (var h = this.find(b), o = h[0], t = h[1], e, u = b - t, a = this.iterator(o); (e = a()) && u < b + v; ) {
                    var l = e.length();
                    b > u ? y(e, b - u, Math.min(v, u + l - b)) : y(e, 0, Math.min(l, b + v - u)), u += l;
                  }
              }, A.prototype.map = function(b) {
                return this.reduce(function(v, y) {
                  return v.push(b(y)), v;
                }, []);
              }, A.prototype.reduce = function(b, v) {
                for (var y, h = this.iterator(); y = h(); )
                  v = b(v, y);
                return v;
              }, A;
            }()
          );
          s.default = T;
        },
        /* 45 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
              t.__proto__ = e;
            } || function(t, e) {
              for (var u in e)
                e.hasOwnProperty(u) && (t[u] = e[u]);
            };
            return function(t, e) {
              o(t, e);
              function u() {
                this.constructor = t;
              }
              t.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(17), b = d(1), v = {
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          }, y = 100, h = (
            /** @class */
            function(o) {
              T(t, o);
              function t(e) {
                var u = o.call(this, e) || this;
                return u.scroll = u, u.observer = new MutationObserver(function(a) {
                  u.update(a);
                }), u.observer.observe(u.domNode, v), u.attach(), u;
              }
              return t.prototype.detach = function() {
                o.prototype.detach.call(this), this.observer.disconnect();
              }, t.prototype.deleteAt = function(e, u) {
                this.update(), e === 0 && u === this.length() ? this.children.forEach(function(a) {
                  a.remove();
                }) : o.prototype.deleteAt.call(this, e, u);
              }, t.prototype.formatAt = function(e, u, a, l) {
                this.update(), o.prototype.formatAt.call(this, e, u, a, l);
              }, t.prototype.insertAt = function(e, u, a) {
                this.update(), o.prototype.insertAt.call(this, e, u, a);
              }, t.prototype.optimize = function(e, u) {
                var a = this;
                e === void 0 && (e = []), u === void 0 && (u = {}), o.prototype.optimize.call(this, u);
                for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0; )
                  e.push(l.pop());
                for (var r = function(c, N) {
                  N === void 0 && (N = !0), !(c == null || c === a) && c.domNode.parentNode != null && (c.domNode[b.DATA_KEY].mutations == null && (c.domNode[b.DATA_KEY].mutations = []), N && r(c.parent));
                }, i = function(c) {
                  // @ts-ignore
                  c.domNode[b.DATA_KEY] == null || // @ts-ignore
                  c.domNode[b.DATA_KEY].mutations == null || (c instanceof A.default && c.children.forEach(i), c.optimize(u));
                }, f = e, n = 0; f.length > 0; n += 1) {
                  if (n >= y)
                    throw new Error("[Parchment] Maximum optimize iterations reached");
                  for (f.forEach(function(c) {
                    var N = b.find(c.target, !0);
                    N != null && (N.domNode === c.target && (c.type === "childList" ? (r(b.find(c.previousSibling, !1)), [].forEach.call(c.addedNodes, function(O) {
                      var E = b.find(O, !1);
                      r(E, !1), E instanceof A.default && E.children.forEach(function(x) {
                        r(x, !1);
                      });
                    })) : c.type === "attributes" && r(N.prev)), r(N));
                  }), this.children.forEach(i), f = [].slice.call(this.observer.takeRecords()), l = f.slice(); l.length > 0; )
                    e.push(l.pop());
                }
              }, t.prototype.update = function(e, u) {
                var a = this;
                u === void 0 && (u = {}), e = e || this.observer.takeRecords(), e.map(function(l) {
                  var r = b.find(l.target, !0);
                  return r == null ? null : r.domNode[b.DATA_KEY].mutations == null ? (r.domNode[b.DATA_KEY].mutations = [l], r) : (r.domNode[b.DATA_KEY].mutations.push(l), null);
                }).forEach(function(l) {
                  l == null || l === a || //@ts-ignore
                  l.domNode[b.DATA_KEY] == null || l.update(l.domNode[b.DATA_KEY].mutations || [], u);
                }), this.domNode[b.DATA_KEY].mutations != null && o.prototype.update.call(this, this.domNode[b.DATA_KEY].mutations, u), this.optimize(e, u);
              }, t.blotName = "scroll", t.defaultChild = "block", t.scope = b.Scope.BLOCK_BLOT, t.tagName = "DIV", t;
            }(A.default)
          );
          s.default = h;
        },
        /* 46 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, t) {
              o.__proto__ = t;
            } || function(o, t) {
              for (var e in t)
                t.hasOwnProperty(e) && (o[e] = t[e]);
            };
            return function(o, t) {
              h(o, t);
              function e() {
                this.constructor = o;
              }
              o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(18), b = d(1);
          function v(h, o) {
            if (Object.keys(h).length !== Object.keys(o).length)
              return !1;
            for (var t in h)
              if (h[t] !== o[t])
                return !1;
            return !0;
          }
          var y = (
            /** @class */
            function(h) {
              T(o, h);
              function o() {
                return h !== null && h.apply(this, arguments) || this;
              }
              return o.formats = function(t) {
                if (t.tagName !== o.tagName)
                  return h.formats.call(this, t);
              }, o.prototype.format = function(t, e) {
                var u = this;
                t === this.statics.blotName && !e ? (this.children.forEach(function(a) {
                  a instanceof A.default || (a = a.wrap(o.blotName, !0)), u.attributes.copy(a);
                }), this.unwrap()) : h.prototype.format.call(this, t, e);
              }, o.prototype.formatAt = function(t, e, u, a) {
                if (this.formats()[u] != null || b.query(u, b.Scope.ATTRIBUTE)) {
                  var l = this.isolate(t, e);
                  l.format(u, a);
                } else
                  h.prototype.formatAt.call(this, t, e, u, a);
              }, o.prototype.optimize = function(t) {
                h.prototype.optimize.call(this, t);
                var e = this.formats();
                if (Object.keys(e).length === 0)
                  return this.unwrap();
                var u = this.next;
                u instanceof o && u.prev === this && v(e, u.formats()) && (u.moveChildren(this), u.remove());
              }, o.blotName = "inline", o.scope = b.Scope.INLINE_BLOT, o.tagName = "SPAN", o;
            }(A.default)
          );
          s.default = y;
        },
        /* 47 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(18), b = d(1), v = (
            /** @class */
            function(y) {
              T(h, y);
              function h() {
                return y !== null && y.apply(this, arguments) || this;
              }
              return h.formats = function(o) {
                var t = b.query(h.blotName).tagName;
                if (o.tagName !== t)
                  return y.formats.call(this, o);
              }, h.prototype.format = function(o, t) {
                b.query(o, b.Scope.BLOCK) != null && (o === this.statics.blotName && !t ? this.replaceWith(h.blotName) : y.prototype.format.call(this, o, t));
              }, h.prototype.formatAt = function(o, t, e, u) {
                b.query(e, b.Scope.BLOCK) != null ? this.format(e, u) : y.prototype.formatAt.call(this, o, t, e, u);
              }, h.prototype.insertAt = function(o, t, e) {
                if (e == null || b.query(t, b.Scope.INLINE) != null)
                  y.prototype.insertAt.call(this, o, t, e);
                else {
                  var u = this.split(o), a = b.create(t, e);
                  u.parent.insertBefore(a, u);
                }
              }, h.prototype.update = function(o, t) {
                navigator.userAgent.match(/Trident/) ? this.build() : y.prototype.update.call(this, o, t);
              }, h.blotName = "block", h.scope = b.Scope.BLOCK_BLOT, h.tagName = "P", h;
            }(A.default)
          );
          s.default = v;
        },
        /* 48 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, h) {
              y.__proto__ = h;
            } || function(y, h) {
              for (var o in h)
                h.hasOwnProperty(o) && (y[o] = h[o]);
            };
            return function(y, h) {
              v(y, h);
              function o() {
                this.constructor = y;
              }
              y.prototype = h === null ? Object.create(h) : (o.prototype = h.prototype, new o());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(19), b = (
            /** @class */
            function(v) {
              T(y, v);
              function y() {
                return v !== null && v.apply(this, arguments) || this;
              }
              return y.formats = function(h) {
              }, y.prototype.format = function(h, o) {
                v.prototype.formatAt.call(this, 0, this.length(), h, o);
              }, y.prototype.formatAt = function(h, o, t, e) {
                h === 0 && o === this.length() ? this.format(t, e) : v.prototype.formatAt.call(this, h, o, t, e);
              }, y.prototype.formats = function() {
                return this.statics.formats(this.domNode);
              }, y;
            }(A.default)
          );
          s.default = b;
        },
        /* 49 */
        /***/
        function(_, s, d) {
          var T = this && this.__extends || function() {
            var y = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(h, o) {
              h.__proto__ = o;
            } || function(h, o) {
              for (var t in o)
                o.hasOwnProperty(t) && (h[t] = o[t]);
            };
            return function(h, o) {
              y(h, o);
              function t() {
                this.constructor = h;
              }
              h.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t());
            };
          }();
          Object.defineProperty(s, "__esModule", { value: !0 });
          var A = d(19), b = d(1), v = (
            /** @class */
            function(y) {
              T(h, y);
              function h(o) {
                var t = y.call(this, o) || this;
                return t.text = t.statics.value(t.domNode), t;
              }
              return h.create = function(o) {
                return document.createTextNode(o);
              }, h.value = function(o) {
                var t = o.data;
                return t.normalize && (t = t.normalize()), t;
              }, h.prototype.deleteAt = function(o, t) {
                this.domNode.data = this.text = this.text.slice(0, o) + this.text.slice(o + t);
              }, h.prototype.index = function(o, t) {
                return this.domNode === o ? t : -1;
              }, h.prototype.insertAt = function(o, t, e) {
                e == null ? (this.text = this.text.slice(0, o) + t + this.text.slice(o), this.domNode.data = this.text) : y.prototype.insertAt.call(this, o, t, e);
              }, h.prototype.length = function() {
                return this.text.length;
              }, h.prototype.optimize = function(o) {
                y.prototype.optimize.call(this, o), this.text = this.statics.value(this.domNode), this.text.length === 0 ? this.remove() : this.next instanceof h && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
              }, h.prototype.position = function(o, t) {
                return [this.domNode, o];
              }, h.prototype.split = function(o, t) {
                if (t === void 0 && (t = !1), !t) {
                  if (o === 0)
                    return this;
                  if (o === this.length())
                    return this.next;
                }
                var e = b.create(this.domNode.splitText(o));
                return this.parent.insertBefore(e, this.next), this.text = this.statics.value(this.domNode), e;
              }, h.prototype.update = function(o, t) {
                var e = this;
                o.some(function(u) {
                  return u.type === "characterData" && u.target === e.domNode;
                }) && (this.text = this.statics.value(this.domNode));
              }, h.prototype.value = function() {
                return this.text;
              }, h.blotName = "text", h.scope = b.Scope.INLINE_BLOT, h;
            }(A.default)
          );
          s.default = v;
        },
        /* 50 */
        /***/
        function(_, s, d) {
          var T = document.createElement("div");
          if (T.classList.toggle("test-class", !1), T.classList.contains("test-class")) {
            var A = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(b, v) {
              return arguments.length > 1 && !this.contains(b) == !v ? v : A.call(this, b);
            };
          }
          String.prototype.startsWith || (String.prototype.startsWith = function(b, v) {
            return v = v || 0, this.substr(v, b.length) === b;
          }), String.prototype.endsWith || (String.prototype.endsWith = function(b, v) {
            var y = this.toString();
            (typeof v != "number" || !isFinite(v) || Math.floor(v) !== v || v > y.length) && (v = y.length), v -= b.length;
            var h = y.indexOf(b, v);
            return h !== -1 && h === v;
          }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(v) {
              if (this === null)
                throw new TypeError("Array.prototype.find called on null or undefined");
              if (typeof v != "function")
                throw new TypeError("predicate must be a function");
              for (var y = Object(this), h = y.length >>> 0, o = arguments[1], t, e = 0; e < h; e++)
                if (t = y[e], v.call(o, t, e, y))
                  return t;
            }
          }), document.addEventListener("DOMContentLoaded", function() {
            document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
          });
        },
        /* 51 */
        /***/
        function(_, s) {
          var d = -1, T = 1, A = 0;
          function b(n, c, N) {
            if (n == c)
              return n ? [[A, n]] : [];
            (N < 0 || n.length < N) && (N = null);
            var O = o(n, c), E = n.substring(0, O);
            n = n.substring(O), c = c.substring(O), O = t(n, c);
            var x = n.substring(n.length - O);
            n = n.substring(0, n.length - O), c = c.substring(0, c.length - O);
            var m = v(n, c);
            return E && m.unshift([A, E]), x && m.push([A, x]), u(m), N != null && (m = r(m, N)), m = i(m), m;
          }
          function v(n, c) {
            var N;
            if (!n)
              return [[T, c]];
            if (!c)
              return [[d, n]];
            var O = n.length > c.length ? n : c, E = n.length > c.length ? c : n, x = O.indexOf(E);
            if (x != -1)
              return N = [
                [T, O.substring(0, x)],
                [A, E],
                [T, O.substring(x + E.length)]
              ], n.length > c.length && (N[0][0] = N[2][0] = d), N;
            if (E.length == 1)
              return [[d, n], [T, c]];
            var m = e(n, c);
            if (m) {
              var p = m[0], g = m[1], k = m[2], P = m[3], I = m[4], $ = b(p, k), F = b(g, P);
              return $.concat([[A, I]], F);
            }
            return y(n, c);
          }
          function y(n, c) {
            for (var N = n.length, O = c.length, E = Math.ceil((N + O) / 2), x = E, m = 2 * E, p = new Array(m), g = new Array(m), k = 0; k < m; k++)
              p[k] = -1, g[k] = -1;
            p[x + 1] = 0, g[x + 1] = 0;
            for (var P = N - O, I = P % 2 != 0, $ = 0, F = 0, W = 0, B = 0, M = 0; M < E; M++) {
              for (var w = -M + $; w <= M - F; w += 2) {
                var q = x + w, j;
                w == -M || w != M && p[q - 1] < p[q + 1] ? j = p[q + 1] : j = p[q - 1] + 1;
                for (var U = j - w; j < N && U < O && n.charAt(j) == c.charAt(U); )
                  j++, U++;
                if (p[q] = j, j > N)
                  F += 2;
                else if (U > O)
                  $ += 2;
                else if (I) {
                  var C = x + P - w;
                  if (C >= 0 && C < m && g[C] != -1) {
                    var L = N - g[C];
                    if (j >= L)
                      return h(n, c, j, U);
                  }
                }
              }
              for (var D = -M + W; D <= M - B; D += 2) {
                var C = x + D, L;
                D == -M || D != M && g[C - 1] < g[C + 1] ? L = g[C + 1] : L = g[C - 1] + 1;
                for (var H = L - D; L < N && H < O && n.charAt(N - L - 1) == c.charAt(O - H - 1); )
                  L++, H++;
                if (g[C] = L, L > N)
                  B += 2;
                else if (H > O)
                  W += 2;
                else if (!I) {
                  var q = x + P - D;
                  if (q >= 0 && q < m && p[q] != -1) {
                    var j = p[q], U = x + j - q;
                    if (L = N - L, j >= L)
                      return h(n, c, j, U);
                  }
                }
              }
            }
            return [[d, n], [T, c]];
          }
          function h(n, c, N, O) {
            var E = n.substring(0, N), x = c.substring(0, O), m = n.substring(N), p = c.substring(O), g = b(E, x), k = b(m, p);
            return g.concat(k);
          }
          function o(n, c) {
            if (!n || !c || n.charAt(0) != c.charAt(0))
              return 0;
            for (var N = 0, O = Math.min(n.length, c.length), E = O, x = 0; N < E; )
              n.substring(x, E) == c.substring(x, E) ? (N = E, x = N) : O = E, E = Math.floor((O - N) / 2 + N);
            return E;
          }
          function t(n, c) {
            if (!n || !c || n.charAt(n.length - 1) != c.charAt(c.length - 1))
              return 0;
            for (var N = 0, O = Math.min(n.length, c.length), E = O, x = 0; N < E; )
              n.substring(n.length - E, n.length - x) == c.substring(c.length - E, c.length - x) ? (N = E, x = N) : O = E, E = Math.floor((O - N) / 2 + N);
            return E;
          }
          function e(n, c) {
            var N = n.length > c.length ? n : c, O = n.length > c.length ? c : n;
            if (N.length < 4 || O.length * 2 < N.length)
              return null;
            function E(F, W, B) {
              for (var M = F.substring(B, B + Math.floor(F.length / 4)), w = -1, q = "", j, U, C, L; (w = W.indexOf(M, w + 1)) != -1; ) {
                var D = o(
                  F.substring(B),
                  W.substring(w)
                ), H = t(
                  F.substring(0, B),
                  W.substring(0, w)
                );
                q.length < H + D && (q = W.substring(w - H, w) + W.substring(w, w + D), j = F.substring(0, B - H), U = F.substring(B + D), C = W.substring(0, w - H), L = W.substring(w + D));
              }
              return q.length * 2 >= F.length ? [
                j,
                U,
                C,
                L,
                q
              ] : null;
            }
            var x = E(
              N,
              O,
              Math.ceil(N.length / 4)
            ), m = E(
              N,
              O,
              Math.ceil(N.length / 2)
            ), p;
            if (!x && !m)
              return null;
            m ? x ? p = x[4].length > m[4].length ? x : m : p = m : p = x;
            var g, k, P, I;
            n.length > c.length ? (g = p[0], k = p[1], P = p[2], I = p[3]) : (P = p[0], I = p[1], g = p[2], k = p[3]);
            var $ = p[4];
            return [g, k, P, I, $];
          }
          function u(n) {
            n.push([A, ""]);
            for (var c = 0, N = 0, O = 0, E = "", x = "", m; c < n.length; )
              switch (n[c][0]) {
                case T:
                  O++, x += n[c][1], c++;
                  break;
                case d:
                  N++, E += n[c][1], c++;
                  break;
                case A:
                  N + O > 1 ? (N !== 0 && O !== 0 && (m = o(x, E), m !== 0 && (c - N - O > 0 && n[c - N - O - 1][0] == A ? n[c - N - O - 1][1] += x.substring(0, m) : (n.splice(0, 0, [
                    A,
                    x.substring(0, m)
                  ]), c++), x = x.substring(m), E = E.substring(m)), m = t(x, E), m !== 0 && (n[c][1] = x.substring(x.length - m) + n[c][1], x = x.substring(0, x.length - m), E = E.substring(0, E.length - m))), N === 0 ? n.splice(
                    c - O,
                    N + O,
                    [T, x]
                  ) : O === 0 ? n.splice(
                    c - N,
                    N + O,
                    [d, E]
                  ) : n.splice(
                    c - N - O,
                    N + O,
                    [d, E],
                    [T, x]
                  ), c = c - N - O + (N ? 1 : 0) + (O ? 1 : 0) + 1) : c !== 0 && n[c - 1][0] == A ? (n[c - 1][1] += n[c][1], n.splice(c, 1)) : c++, O = 0, N = 0, E = "", x = "";
                  break;
              }
            n[n.length - 1][1] === "" && n.pop();
            var p = !1;
            for (c = 1; c < n.length - 1; )
              n[c - 1][0] == A && n[c + 1][0] == A && (n[c][1].substring(n[c][1].length - n[c - 1][1].length) == n[c - 1][1] ? (n[c][1] = n[c - 1][1] + n[c][1].substring(0, n[c][1].length - n[c - 1][1].length), n[c + 1][1] = n[c - 1][1] + n[c + 1][1], n.splice(c - 1, 1), p = !0) : n[c][1].substring(0, n[c + 1][1].length) == n[c + 1][1] && (n[c - 1][1] += n[c + 1][1], n[c][1] = n[c][1].substring(n[c + 1][1].length) + n[c + 1][1], n.splice(c + 1, 1), p = !0)), c++;
            p && u(n);
          }
          var a = b;
          a.INSERT = T, a.DELETE = d, a.EQUAL = A, _.exports = a;
          function l(n, c) {
            if (c === 0)
              return [A, n];
            for (var N = 0, O = 0; O < n.length; O++) {
              var E = n[O];
              if (E[0] === d || E[0] === A) {
                var x = N + E[1].length;
                if (c === x)
                  return [O + 1, n];
                if (c < x) {
                  n = n.slice();
                  var m = c - N, p = [E[0], E[1].slice(0, m)], g = [E[0], E[1].slice(m)];
                  return n.splice(O, 1, p, g), [O + 1, n];
                } else
                  N = x;
              }
            }
            throw new Error("cursor_pos is out of bounds!");
          }
          function r(n, c) {
            var N = l(n, c), O = N[1], E = N[0], x = O[E], m = O[E + 1];
            if (x == null)
              return n;
            if (x[0] !== A)
              return n;
            if (m != null && x[1] + m[1] === m[1] + x[1])
              return O.splice(E, 2, m, x), f(O, E, 2);
            if (m != null && m[1].indexOf(x[1]) === 0) {
              O.splice(E, 2, [m[0], x[1]], [0, x[1]]);
              var p = m[1].slice(x[1].length);
              return p.length > 0 && O.splice(E + 2, 0, [m[0], p]), f(O, E, 3);
            } else
              return n;
          }
          function i(n) {
            for (var c = !1, N = function(m) {
              return m.charCodeAt(0) >= 56320 && m.charCodeAt(0) <= 57343;
            }, O = function(m) {
              return m.charCodeAt(m.length - 1) >= 55296 && m.charCodeAt(m.length - 1) <= 56319;
            }, E = 2; E < n.length; E += 1)
              n[E - 2][0] === A && O(n[E - 2][1]) && n[E - 1][0] === d && N(n[E - 1][1]) && n[E][0] === T && N(n[E][1]) && (c = !0, n[E - 1][1] = n[E - 2][1].slice(-1) + n[E - 1][1], n[E][1] = n[E - 2][1].slice(-1) + n[E][1], n[E - 2][1] = n[E - 2][1].slice(0, -1));
            if (!c)
              return n;
            for (var x = [], E = 0; E < n.length; E += 1)
              n[E][1].length > 0 && x.push(n[E]);
            return x;
          }
          function f(n, c, N) {
            for (var O = c + N - 1; O >= 0 && O >= c - 1; O--)
              if (O + 1 < n.length) {
                var E = n[O], x = n[O + 1];
                E[0] === x[1] && n.splice(O, 2, [E[0], E[1] + x[1]]);
              }
            return n;
          }
        },
        /* 52 */
        /***/
        function(_, s) {
          s = _.exports = typeof Object.keys == "function" ? Object.keys : d, s.shim = d;
          function d(T) {
            var A = [];
            for (var b in T)
              A.push(b);
            return A;
          }
        },
        /* 53 */
        /***/
        function(_, s) {
          var d = function() {
            return Object.prototype.toString.call(arguments);
          }() == "[object Arguments]";
          s = _.exports = d ? T : A, s.supported = T;
          function T(b) {
            return Object.prototype.toString.call(b) == "[object Arguments]";
          }
          s.unsupported = A;
          function A(b) {
            return b && typeof b == "object" && typeof b.length == "number" && Object.prototype.hasOwnProperty.call(b, "callee") && !Object.prototype.propertyIsEnumerable.call(b, "callee") || !1;
          }
        },
        /* 54 */
        /***/
        function(_, s) {
          var d = Object.prototype.hasOwnProperty, T = "~";
          function A() {
          }
          Object.create && (A.prototype = /* @__PURE__ */ Object.create(null), new A().__proto__ || (T = !1));
          function b(y, h, o) {
            this.fn = y, this.context = h, this.once = o || !1;
          }
          function v() {
            this._events = new A(), this._eventsCount = 0;
          }
          v.prototype.eventNames = function() {
            var h = [], o, t;
            if (this._eventsCount === 0)
              return h;
            for (t in o = this._events)
              d.call(o, t) && h.push(T ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? h.concat(Object.getOwnPropertySymbols(o)) : h;
          }, v.prototype.listeners = function(h, o) {
            var t = T ? T + h : h, e = this._events[t];
            if (o)
              return !!e;
            if (!e)
              return [];
            if (e.fn)
              return [e.fn];
            for (var u = 0, a = e.length, l = new Array(a); u < a; u++)
              l[u] = e[u].fn;
            return l;
          }, v.prototype.emit = function(h, o, t, e, u, a) {
            var l = T ? T + h : h;
            if (!this._events[l])
              return !1;
            var r = this._events[l], i = arguments.length, f, n;
            if (r.fn) {
              switch (r.once && this.removeListener(h, r.fn, void 0, !0), i) {
                case 1:
                  return r.fn.call(r.context), !0;
                case 2:
                  return r.fn.call(r.context, o), !0;
                case 3:
                  return r.fn.call(r.context, o, t), !0;
                case 4:
                  return r.fn.call(r.context, o, t, e), !0;
                case 5:
                  return r.fn.call(r.context, o, t, e, u), !0;
                case 6:
                  return r.fn.call(r.context, o, t, e, u, a), !0;
              }
              for (n = 1, f = new Array(i - 1); n < i; n++)
                f[n - 1] = arguments[n];
              r.fn.apply(r.context, f);
            } else {
              var c = r.length, N;
              for (n = 0; n < c; n++)
                switch (r[n].once && this.removeListener(h, r[n].fn, void 0, !0), i) {
                  case 1:
                    r[n].fn.call(r[n].context);
                    break;
                  case 2:
                    r[n].fn.call(r[n].context, o);
                    break;
                  case 3:
                    r[n].fn.call(r[n].context, o, t);
                    break;
                  case 4:
                    r[n].fn.call(r[n].context, o, t, e);
                    break;
                  default:
                    if (!f)
                      for (N = 1, f = new Array(i - 1); N < i; N++)
                        f[N - 1] = arguments[N];
                    r[n].fn.apply(r[n].context, f);
                }
            }
            return !0;
          }, v.prototype.on = function(h, o, t) {
            var e = new b(o, t || this), u = T ? T + h : h;
            return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
          }, v.prototype.once = function(h, o, t) {
            var e = new b(o, t || this, !0), u = T ? T + h : h;
            return this._events[u] ? this._events[u].fn ? this._events[u] = [this._events[u], e] : this._events[u].push(e) : (this._events[u] = e, this._eventsCount++), this;
          }, v.prototype.removeListener = function(h, o, t, e) {
            var u = T ? T + h : h;
            if (!this._events[u])
              return this;
            if (!o)
              return --this._eventsCount === 0 ? this._events = new A() : delete this._events[u], this;
            var a = this._events[u];
            if (a.fn)
              a.fn === o && (!e || a.once) && (!t || a.context === t) && (--this._eventsCount === 0 ? this._events = new A() : delete this._events[u]);
            else {
              for (var l = 0, r = [], i = a.length; l < i; l++)
                (a[l].fn !== o || e && !a[l].once || t && a[l].context !== t) && r.push(a[l]);
              r.length ? this._events[u] = r.length === 1 ? r[0] : r : --this._eventsCount === 0 ? this._events = new A() : delete this._events[u];
            }
            return this;
          }, v.prototype.removeAllListeners = function(h) {
            var o;
            return h ? (o = T ? T + h : h, this._events[o] && (--this._eventsCount === 0 ? this._events = new A() : delete this._events[o])) : (this._events = new A(), this._eventsCount = 0), this;
          }, v.prototype.off = v.prototype.removeListener, v.prototype.addListener = v.prototype.on, v.prototype.setMaxListeners = function() {
            return this;
          }, v.prefixed = T, v.EventEmitter = v, typeof _ < "u" && (_.exports = v);
        },
        /* 55 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.matchText = s.matchSpacing = s.matchNewline = s.matchBlot = s.matchAttributor = s.default = void 0;
          var T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(z) {
            return typeof z;
          } : function(z) {
            return z && typeof Symbol == "function" && z.constructor === Symbol && z !== Symbol.prototype ? "symbol" : typeof z;
          }, A = /* @__PURE__ */ function() {
            function z(G, Y) {
              var X = [], Z = !0, et = !1, nt = void 0;
              try {
                for (var rt = G[Symbol.iterator](), ht; !(Z = (ht = rt.next()).done) && (X.push(ht.value), !(Y && X.length === Y)); Z = !0)
                  ;
              } catch (vt) {
                et = !0, nt = vt;
              } finally {
                try {
                  !Z && rt.return && rt.return();
                } finally {
                  if (et)
                    throw nt;
                }
              }
              return X;
            }
            return function(G, Y) {
              if (Array.isArray(G))
                return G;
              if (Symbol.iterator in Object(G))
                return z(G, Y);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), b = /* @__PURE__ */ function() {
            function z(G, Y) {
              for (var X = 0; X < Y.length; X++) {
                var Z = Y[X];
                Z.enumerable = Z.enumerable || !1, Z.configurable = !0, "value" in Z && (Z.writable = !0), Object.defineProperty(G, Z.key, Z);
              }
            }
            return function(G, Y, X) {
              return Y && z(G.prototype, Y), X && z(G, X), G;
            };
          }(), v = d(3), y = g(v), h = d(2), o = g(h), t = d(0), e = g(t), u = d(5), a = g(u), l = d(10), r = g(l), i = d(9), f = g(i), n = d(36), c = d(37), N = d(13), O = g(N), E = d(26), x = d(38), m = d(39), p = d(40);
          function g(z) {
            return z && z.__esModule ? z : { default: z };
          }
          function k(z, G, Y) {
            return G in z ? Object.defineProperty(z, G, { value: Y, enumerable: !0, configurable: !0, writable: !0 }) : z[G] = Y, z;
          }
          function P(z, G) {
            if (!(z instanceof G))
              throw new TypeError("Cannot call a class as a function");
          }
          function I(z, G) {
            if (!z)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return G && (typeof G == "object" || typeof G == "function") ? G : z;
          }
          function $(z, G) {
            if (typeof G != "function" && G !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof G);
            z.prototype = Object.create(G && G.prototype, { constructor: { value: z, enumerable: !1, writable: !0, configurable: !0 } }), G && (Object.setPrototypeOf ? Object.setPrototypeOf(z, G) : z.__proto__ = G);
          }
          var F = (0, r.default)("quill:clipboard"), W = "__ql-matcher", B = [[Node.TEXT_NODE, st], [Node.TEXT_NODE, it], ["br", Q], [Node.ELEMENT_NODE, it], [Node.ELEMENT_NODE, V], [Node.ELEMENT_NODE, ot], [Node.ELEMENT_NODE, K], [Node.ELEMENT_NODE, ft], ["li", tt], ["b", H.bind(H, "bold")], ["i", H.bind(H, "italic")], ["style", J]], M = [n.AlignAttribute, x.DirectionAttribute].reduce(function(z, G) {
            return z[G.keyName] = G, z;
          }, {}), w = [n.AlignStyle, c.BackgroundStyle, E.ColorStyle, x.DirectionStyle, m.FontStyle, p.SizeStyle].reduce(function(z, G) {
            return z[G.keyName] = G, z;
          }, {}), q = function(z) {
            $(G, z);
            function G(Y, X) {
              P(this, G);
              var Z = I(this, (G.__proto__ || Object.getPrototypeOf(G)).call(this, Y, X));
              return Z.quill.root.addEventListener("paste", Z.onPaste.bind(Z)), Z.container = Z.quill.addContainer("ql-clipboard"), Z.container.setAttribute("contenteditable", !0), Z.container.setAttribute("tabindex", -1), Z.matchers = [], B.concat(Z.options.matchers).forEach(function(et) {
                var nt = A(et, 2), rt = nt[0], ht = nt[1];
                !X.matchVisual && ht === ot || Z.addMatcher(rt, ht);
              }), Z;
            }
            return b(G, [{
              key: "addMatcher",
              value: function(X, Z) {
                this.matchers.push([X, Z]);
              }
            }, {
              key: "convert",
              value: function(X) {
                if (typeof X == "string")
                  return this.container.innerHTML = X.replace(/\>\r?\n +\</g, "><"), this.convert();
                var Z = this.quill.getFormat(this.quill.selection.savedRange.index);
                if (Z[O.default.blotName]) {
                  var et = this.container.innerText;
                  return this.container.innerHTML = "", new o.default().insert(et, k({}, O.default.blotName, Z[O.default.blotName]));
                }
                var nt = this.prepareMatching(), rt = A(nt, 2), ht = rt[0], vt = rt[1], lt = D(this.container, ht, vt);
                return C(lt, `
`) && lt.ops[lt.ops.length - 1].attributes == null && (lt = lt.compose(new o.default().retain(lt.length() - 1).delete(1))), F.log("convert", this.container.innerHTML, lt), this.container.innerHTML = "", lt;
              }
            }, {
              key: "dangerouslyPasteHTML",
              value: function(X, Z) {
                var et = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : a.default.sources.API;
                if (typeof X == "string")
                  this.quill.setContents(this.convert(X), Z), this.quill.setSelection(0, a.default.sources.SILENT);
                else {
                  var nt = this.convert(Z);
                  this.quill.updateContents(new o.default().retain(X).concat(nt), et), this.quill.setSelection(X + nt.length(), a.default.sources.SILENT);
                }
              }
            }, {
              key: "onPaste",
              value: function(X) {
                var Z = this;
                if (!(X.defaultPrevented || !this.quill.isEnabled())) {
                  var et = this.quill.getSelection(), nt = new o.default().retain(et.index), rt = this.quill.scrollingContainer.scrollTop;
                  this.container.focus(), this.quill.selection.update(a.default.sources.SILENT), setTimeout(function() {
                    nt = nt.concat(Z.convert()).delete(et.length), Z.quill.updateContents(nt, a.default.sources.USER), Z.quill.setSelection(nt.length() - et.length, a.default.sources.SILENT), Z.quill.scrollingContainer.scrollTop = rt, Z.quill.focus();
                  }, 1);
                }
              }
            }, {
              key: "prepareMatching",
              value: function() {
                var X = this, Z = [], et = [];
                return this.matchers.forEach(function(nt) {
                  var rt = A(nt, 2), ht = rt[0], vt = rt[1];
                  switch (ht) {
                    case Node.TEXT_NODE:
                      et.push(vt);
                      break;
                    case Node.ELEMENT_NODE:
                      Z.push(vt);
                      break;
                    default:
                      [].forEach.call(X.container.querySelectorAll(ht), function(lt) {
                        lt[W] = lt[W] || [], lt[W].push(vt);
                      });
                      break;
                  }
                }), [Z, et];
              }
            }]), G;
          }(f.default);
          q.DEFAULTS = {
            matchers: [],
            matchVisual: !0
          };
          function j(z, G, Y) {
            return (typeof G > "u" ? "undefined" : T(G)) === "object" ? Object.keys(G).reduce(function(X, Z) {
              return j(X, Z, G[Z]);
            }, z) : z.reduce(function(X, Z) {
              return Z.attributes && Z.attributes[G] ? X.push(Z) : X.insert(Z.insert, (0, y.default)({}, k({}, G, Y), Z.attributes));
            }, new o.default());
          }
          function U(z) {
            if (z.nodeType !== Node.ELEMENT_NODE)
              return {};
            var G = "__ql-computed-style";
            return z[G] || (z[G] = window.getComputedStyle(z));
          }
          function C(z, G) {
            for (var Y = "", X = z.ops.length - 1; X >= 0 && Y.length < G.length; --X) {
              var Z = z.ops[X];
              if (typeof Z.insert != "string")
                break;
              Y = Z.insert + Y;
            }
            return Y.slice(-1 * G.length) === G;
          }
          function L(z) {
            if (z.childNodes.length === 0)
              return !1;
            var G = U(z);
            return ["block", "list-item"].indexOf(G.display) > -1;
          }
          function D(z, G, Y) {
            return z.nodeType === z.TEXT_NODE ? Y.reduce(function(X, Z) {
              return Z(z, X);
            }, new o.default()) : z.nodeType === z.ELEMENT_NODE ? [].reduce.call(z.childNodes || [], function(X, Z) {
              var et = D(Z, G, Y);
              return Z.nodeType === z.ELEMENT_NODE && (et = G.reduce(function(nt, rt) {
                return rt(Z, nt);
              }, et), et = (Z[W] || []).reduce(function(nt, rt) {
                return rt(Z, nt);
              }, et)), X.concat(et);
            }, new o.default()) : new o.default();
          }
          function H(z, G, Y) {
            return j(Y, z, !0);
          }
          function K(z, G) {
            var Y = e.default.Attributor.Attribute.keys(z), X = e.default.Attributor.Class.keys(z), Z = e.default.Attributor.Style.keys(z), et = {};
            return Y.concat(X).concat(Z).forEach(function(nt) {
              var rt = e.default.query(nt, e.default.Scope.ATTRIBUTE);
              rt != null && (et[rt.attrName] = rt.value(z), et[rt.attrName]) || (rt = M[nt], rt != null && (rt.attrName === nt || rt.keyName === nt) && (et[rt.attrName] = rt.value(z) || void 0), rt = w[nt], rt != null && (rt.attrName === nt || rt.keyName === nt) && (rt = w[nt], et[rt.attrName] = rt.value(z) || void 0));
            }), Object.keys(et).length > 0 && (G = j(G, et)), G;
          }
          function V(z, G) {
            var Y = e.default.query(z);
            if (Y == null)
              return G;
            if (Y.prototype instanceof e.default.Embed) {
              var X = {}, Z = Y.value(z);
              Z != null && (X[Y.blotName] = Z, G = new o.default().insert(X, Y.formats(z)));
            } else
              typeof Y.formats == "function" && (G = j(G, Y.blotName, Y.formats(z)));
            return G;
          }
          function Q(z, G) {
            return C(G, `
`) || G.insert(`
`), G;
          }
          function J() {
            return new o.default();
          }
          function tt(z, G) {
            var Y = e.default.query(z);
            if (Y == null || Y.blotName !== "list-item" || !C(G, `
`))
              return G;
            for (var X = -1, Z = z.parentNode; !Z.classList.contains("ql-clipboard"); )
              (e.default.query(Z) || {}).blotName === "list" && (X += 1), Z = Z.parentNode;
            return X <= 0 ? G : G.compose(new o.default().retain(G.length() - 1).retain(1, { indent: X }));
          }
          function it(z, G) {
            return C(G, `
`) || (L(z) || G.length() > 0 && z.nextSibling && L(z.nextSibling)) && G.insert(`
`), G;
          }
          function ot(z, G) {
            if (L(z) && z.nextElementSibling != null && !C(G, `

`)) {
              var Y = z.offsetHeight + parseFloat(U(z).marginTop) + parseFloat(U(z).marginBottom);
              z.nextElementSibling.offsetTop > z.offsetTop + Y * 1.5 && G.insert(`
`);
            }
            return G;
          }
          function ft(z, G) {
            var Y = {}, X = z.style || {};
            return X.fontStyle && U(z).fontStyle === "italic" && (Y.italic = !0), X.fontWeight && (U(z).fontWeight.startsWith("bold") || parseInt(U(z).fontWeight) >= 700) && (Y.bold = !0), Object.keys(Y).length > 0 && (G = j(G, Y)), parseFloat(X.textIndent || 0) > 0 && (G = new o.default().insert("	").concat(G)), G;
          }
          function st(z, G) {
            var Y = z.data;
            if (z.parentNode.tagName === "O:P")
              return G.insert(Y.trim());
            if (Y.trim().length === 0 && z.parentNode.classList.contains("ql-clipboard"))
              return G;
            if (!U(z.parentNode).whiteSpace.startsWith("pre")) {
              var X = function(et, nt) {
                return nt = nt.replace(/[^\u00a0]/g, ""), nt.length < 1 && et ? " " : nt;
              };
              Y = Y.replace(/\r\n/g, " ").replace(/\n/g, " "), Y = Y.replace(/\s\s+/g, X.bind(X, !0)), (z.previousSibling == null && L(z.parentNode) || z.previousSibling != null && L(z.previousSibling)) && (Y = Y.replace(/^\s+/, X.bind(X, !1))), (z.nextSibling == null && L(z.parentNode) || z.nextSibling != null && L(z.nextSibling)) && (Y = Y.replace(/\s+$/, X.bind(X, !1)));
            }
            return G.insert(Y);
          }
          s.default = q, s.matchAttributor = K, s.matchBlot = V, s.matchNewline = it, s.matchSpacing = ot, s.matchText = st;
        },
        /* 56 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), A = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, b = d(6), v = y(b);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return T(a, [{
              key: "optimize",
              value: function(r) {
                A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "optimize", this).call(this, r), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
              }
            }], [{
              key: "create",
              value: function() {
                return A(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this);
              }
            }, {
              key: "formats",
              value: function() {
                return !0;
              }
            }]), a;
          }(v.default);
          e.blotName = "bold", e.tagName = ["STRONG", "B"], s.default = e;
        },
        /* 57 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.addControls = s.default = void 0;
          var T = /* @__PURE__ */ function() {
            function p(g, k) {
              var P = [], I = !0, $ = !1, F = void 0;
              try {
                for (var W = g[Symbol.iterator](), B; !(I = (B = W.next()).done) && (P.push(B.value), !(k && P.length === k)); I = !0)
                  ;
              } catch (M) {
                $ = !0, F = M;
              } finally {
                try {
                  !I && W.return && W.return();
                } finally {
                  if ($)
                    throw F;
                }
              }
              return P;
            }
            return function(g, k) {
              if (Array.isArray(g))
                return g;
              if (Symbol.iterator in Object(g))
                return p(g, k);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = /* @__PURE__ */ function() {
            function p(g, k) {
              for (var P = 0; P < k.length; P++) {
                var I = k[P];
                I.enumerable = I.enumerable || !1, I.configurable = !0, "value" in I && (I.writable = !0), Object.defineProperty(g, I.key, I);
              }
            }
            return function(g, k, P) {
              return k && p(g.prototype, k), P && p(g, P), g;
            };
          }(), b = d(2), v = r(b), y = d(0), h = r(y), o = d(5), t = r(o), e = d(10), u = r(e), a = d(9), l = r(a);
          function r(p) {
            return p && p.__esModule ? p : { default: p };
          }
          function i(p, g, k) {
            return g in p ? Object.defineProperty(p, g, { value: k, enumerable: !0, configurable: !0, writable: !0 }) : p[g] = k, p;
          }
          function f(p, g) {
            if (!(p instanceof g))
              throw new TypeError("Cannot call a class as a function");
          }
          function n(p, g) {
            if (!p)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g && (typeof g == "object" || typeof g == "function") ? g : p;
          }
          function c(p, g) {
            if (typeof g != "function" && g !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof g);
            p.prototype = Object.create(g && g.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(p, g) : p.__proto__ = g);
          }
          var N = (0, u.default)("quill:toolbar"), O = function(p) {
            c(g, p);
            function g(k, P) {
              f(this, g);
              var I = n(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, k, P));
              if (Array.isArray(I.options.container)) {
                var $ = document.createElement("div");
                x($, I.options.container), k.container.parentNode.insertBefore($, k.container), I.container = $;
              } else
                typeof I.options.container == "string" ? I.container = document.querySelector(I.options.container) : I.container = I.options.container;
              if (!(I.container instanceof HTMLElement)) {
                var F;
                return F = N.error("Container required for toolbar", I.options), n(I, F);
              }
              return I.container.classList.add("ql-toolbar"), I.controls = [], I.handlers = {}, Object.keys(I.options.handlers).forEach(function(W) {
                I.addHandler(W, I.options.handlers[W]);
              }), [].forEach.call(I.container.querySelectorAll("button, select"), function(W) {
                I.attach(W);
              }), I.quill.on(t.default.events.EDITOR_CHANGE, function(W, B) {
                W === t.default.events.SELECTION_CHANGE && I.update(B);
              }), I.quill.on(t.default.events.SCROLL_OPTIMIZE, function() {
                var W = I.quill.selection.getRange(), B = T(W, 1), M = B[0];
                I.update(M);
              }), I;
            }
            return A(g, [{
              key: "addHandler",
              value: function(P, I) {
                this.handlers[P] = I;
              }
            }, {
              key: "attach",
              value: function(P) {
                var I = this, $ = [].find.call(P.classList, function(W) {
                  return W.indexOf("ql-") === 0;
                });
                if ($) {
                  if ($ = $.slice(3), P.tagName === "BUTTON" && P.setAttribute("type", "button"), this.handlers[$] == null) {
                    if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[$] == null) {
                      N.warn("ignoring attaching to disabled format", $, P);
                      return;
                    }
                    if (h.default.query($) == null) {
                      N.warn("ignoring attaching to nonexistent format", $, P);
                      return;
                    }
                  }
                  var F = P.tagName === "SELECT" ? "change" : "click";
                  P.addEventListener(F, function(W) {
                    var B = void 0;
                    if (P.tagName === "SELECT") {
                      if (P.selectedIndex < 0)
                        return;
                      var M = P.options[P.selectedIndex];
                      M.hasAttribute("selected") ? B = !1 : B = M.value || !1;
                    } else
                      P.classList.contains("ql-active") ? B = !1 : B = P.value || !P.hasAttribute("value"), W.preventDefault();
                    I.quill.focus();
                    var w = I.quill.selection.getRange(), q = T(w, 1), j = q[0];
                    if (I.handlers[$] != null)
                      I.handlers[$].call(I, B);
                    else if (h.default.query($).prototype instanceof h.default.Embed) {
                      if (B = prompt("Enter " + $), !B)
                        return;
                      I.quill.updateContents(new v.default().retain(j.index).delete(j.length).insert(i({}, $, B)), t.default.sources.USER);
                    } else
                      I.quill.format($, B, t.default.sources.USER);
                    I.update(j);
                  }), this.controls.push([$, P]);
                }
              }
            }, {
              key: "update",
              value: function(P) {
                var I = P == null ? {} : this.quill.getFormat(P);
                this.controls.forEach(function($) {
                  var F = T($, 2), W = F[0], B = F[1];
                  if (B.tagName === "SELECT") {
                    var M = void 0;
                    if (P == null)
                      M = null;
                    else if (I[W] == null)
                      M = B.querySelector("option[selected]");
                    else if (!Array.isArray(I[W])) {
                      var w = I[W];
                      typeof w == "string" && (w = w.replace(/\"/g, '\\"')), M = B.querySelector('option[value="' + w + '"]');
                    }
                    M == null ? (B.value = "", B.selectedIndex = -1) : M.selected = !0;
                  } else if (P == null)
                    B.classList.remove("ql-active");
                  else if (B.hasAttribute("value")) {
                    var q = I[W] === B.getAttribute("value") || I[W] != null && I[W].toString() === B.getAttribute("value") || I[W] == null && !B.getAttribute("value");
                    B.classList.toggle("ql-active", q);
                  } else
                    B.classList.toggle("ql-active", I[W] != null);
                });
              }
            }]), g;
          }(l.default);
          O.DEFAULTS = {};
          function E(p, g, k) {
            var P = document.createElement("button");
            P.setAttribute("type", "button"), P.classList.add("ql-" + g), k != null && (P.value = k), p.appendChild(P);
          }
          function x(p, g) {
            Array.isArray(g[0]) || (g = [g]), g.forEach(function(k) {
              var P = document.createElement("span");
              P.classList.add("ql-formats"), k.forEach(function(I) {
                if (typeof I == "string")
                  E(P, I);
                else {
                  var $ = Object.keys(I)[0], F = I[$];
                  Array.isArray(F) ? m(P, $, F) : E(P, $, F);
                }
              }), p.appendChild(P);
            });
          }
          function m(p, g, k) {
            var P = document.createElement("select");
            P.classList.add("ql-" + g), k.forEach(function(I) {
              var $ = document.createElement("option");
              I !== !1 ? $.setAttribute("value", I) : $.setAttribute("selected", "selected"), P.appendChild($);
            }), p.appendChild(P);
          }
          O.DEFAULTS = {
            container: null,
            handlers: {
              clean: function() {
                var g = this, k = this.quill.getSelection();
                if (k != null)
                  if (k.length == 0) {
                    var P = this.quill.getFormat();
                    Object.keys(P).forEach(function(I) {
                      h.default.query(I, h.default.Scope.INLINE) != null && g.quill.format(I, !1);
                    });
                  } else
                    this.quill.removeFormat(k, t.default.sources.USER);
              },
              direction: function(g) {
                var k = this.quill.getFormat().align;
                g === "rtl" && k == null ? this.quill.format("align", "right", t.default.sources.USER) : !g && k === "right" && this.quill.format("align", !1, t.default.sources.USER), this.quill.format("direction", g, t.default.sources.USER);
              },
              indent: function(g) {
                var k = this.quill.getSelection(), P = this.quill.getFormat(k), I = parseInt(P.indent || 0);
                if (g === "+1" || g === "-1") {
                  var $ = g === "+1" ? 1 : -1;
                  P.direction === "rtl" && ($ *= -1), this.quill.format("indent", I + $, t.default.sources.USER);
                }
              },
              link: function(g) {
                g === !0 && (g = prompt("Enter link URL:")), this.quill.format("link", g, t.default.sources.USER);
              },
              list: function(g) {
                var k = this.quill.getSelection(), P = this.quill.getFormat(k);
                g === "check" ? P.list === "checked" || P.list === "unchecked" ? this.quill.format("list", !1, t.default.sources.USER) : this.quill.format("list", "unchecked", t.default.sources.USER) : this.quill.format("list", g, t.default.sources.USER);
              }
            }
          }, s.default = O, s.addControls = x;
        },
        /* 58 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
        },
        /* 59 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), A = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, b = d(28), v = y(b);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a(l, r) {
              h(this, a);
              var i = o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
              return i.label.innerHTML = r, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(f) {
                f.classList.add("ql-primary");
              }), i;
            }
            return T(a, [{
              key: "buildItem",
              value: function(r) {
                var i = A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "buildItem", this).call(this, r);
                return i.style.backgroundColor = r.getAttribute("value") || "", i;
              }
            }, {
              key: "selectItem",
              value: function(r, i) {
                A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "selectItem", this).call(this, r, i);
                var f = this.label.querySelector(".ql-color-label"), n = r && r.getAttribute("data-value") || "";
                f && (f.tagName === "line" ? f.style.stroke = n : f.style.fill = n);
              }
            }]), a;
          }(v.default);
          s.default = e;
        },
        /* 60 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), A = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, b = d(28), v = y(b);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a(l, r) {
              h(this, a);
              var i = o(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
              return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(f) {
                f.innerHTML = r[f.getAttribute("data-value") || ""];
              }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i;
            }
            return T(a, [{
              key: "selectItem",
              value: function(r, i) {
                A(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "selectItem", this).call(this, r, i), r = r || this.defaultItem, this.label.innerHTML = r.innerHTML;
              }
            }]), a;
          }(v.default);
          s.default = e;
        },
        /* 61 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function v(y, h) {
              for (var o = 0; o < h.length; o++) {
                var t = h[o];
                t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(y, t.key, t);
              }
            }
            return function(y, h, o) {
              return h && v(y.prototype, h), o && v(y, o), y;
            };
          }();
          function A(v, y) {
            if (!(v instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var b = function() {
            function v(y, h) {
              var o = this;
              A(this, v), this.quill = y, this.boundsContainer = h || document.body, this.root = y.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
                o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px";
              }), this.hide();
            }
            return T(v, [{
              key: "hide",
              value: function() {
                this.root.classList.add("ql-hidden");
              }
            }, {
              key: "position",
              value: function(h) {
                var o = h.left + h.width / 2 - this.root.offsetWidth / 2, t = h.bottom + this.quill.root.scrollTop;
                this.root.style.left = o + "px", this.root.style.top = t + "px", this.root.classList.remove("ql-flip");
                var e = this.boundsContainer.getBoundingClientRect(), u = this.root.getBoundingClientRect(), a = 0;
                if (u.right > e.right && (a = e.right - u.right, this.root.style.left = o + a + "px"), u.left < e.left && (a = e.left - u.left, this.root.style.left = o + a + "px"), u.bottom > e.bottom) {
                  var l = u.bottom - u.top, r = h.bottom - h.top + l;
                  this.root.style.top = t - r + "px", this.root.classList.add("ql-flip");
                }
                return a;
              }
            }, {
              key: "show",
              value: function() {
                this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
              }
            }]), v;
          }();
          s.default = b;
        },
        /* 62 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function m(p, g) {
              var k = [], P = !0, I = !1, $ = void 0;
              try {
                for (var F = p[Symbol.iterator](), W; !(P = (W = F.next()).done) && (k.push(W.value), !(g && k.length === g)); P = !0)
                  ;
              } catch (B) {
                I = !0, $ = B;
              } finally {
                try {
                  !P && F.return && F.return();
                } finally {
                  if (I)
                    throw $;
                }
              }
              return k;
            }
            return function(p, g) {
              if (Array.isArray(p))
                return p;
              if (Symbol.iterator in Object(p))
                return m(p, g);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), A = function m(p, g, k) {
            p === null && (p = Function.prototype);
            var P = Object.getOwnPropertyDescriptor(p, g);
            if (P === void 0) {
              var I = Object.getPrototypeOf(p);
              return I === null ? void 0 : m(I, g, k);
            } else {
              if ("value" in P)
                return P.value;
              var $ = P.get;
              return $ === void 0 ? void 0 : $.call(k);
            }
          }, b = /* @__PURE__ */ function() {
            function m(p, g) {
              for (var k = 0; k < g.length; k++) {
                var P = g[k];
                P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(p, P.key, P);
              }
            }
            return function(p, g, k) {
              return g && m(p.prototype, g), k && m(p, k), p;
            };
          }(), v = d(3), y = f(v), h = d(8), o = f(h), t = d(43), e = f(t), u = d(27), a = f(u), l = d(15), r = d(41), i = f(r);
          function f(m) {
            return m && m.__esModule ? m : { default: m };
          }
          function n(m, p) {
            if (!(m instanceof p))
              throw new TypeError("Cannot call a class as a function");
          }
          function c(m, p) {
            if (!m)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return p && (typeof p == "object" || typeof p == "function") ? p : m;
          }
          function N(m, p) {
            if (typeof p != "function" && p !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof p);
            m.prototype = Object.create(p && p.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(m, p) : m.__proto__ = p);
          }
          var O = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], E = function(m) {
            N(p, m);
            function p(g, k) {
              n(this, p), k.modules.toolbar != null && k.modules.toolbar.container == null && (k.modules.toolbar.container = O);
              var P = c(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, g, k));
              return P.quill.container.classList.add("ql-snow"), P;
            }
            return b(p, [{
              key: "extendToolbar",
              value: function(k) {
                k.container.classList.add("ql-snow"), this.buildButtons([].slice.call(k.container.querySelectorAll("button")), i.default), this.buildPickers([].slice.call(k.container.querySelectorAll("select")), i.default), this.tooltip = new x(this.quill, this.options.bounds), k.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(P, I) {
                  k.handlers.link.call(k, !I.format.link);
                });
              }
            }]), p;
          }(e.default);
          E.DEFAULTS = (0, y.default)(!0, {}, e.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(p) {
                    if (p) {
                      var g = this.quill.getSelection();
                      if (g == null || g.length == 0)
                        return;
                      var k = this.quill.getText(g);
                      /^\S+@\S+\.\S+$/.test(k) && k.indexOf("mailto:") !== 0 && (k = "mailto:" + k);
                      var P = this.quill.theme.tooltip;
                      P.edit("link", k);
                    } else
                      this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var x = function(m) {
            N(p, m);
            function p(g, k) {
              n(this, p);
              var P = c(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, g, k));
              return P.preview = P.root.querySelector("a.ql-preview"), P;
            }
            return b(p, [{
              key: "listen",
              value: function() {
                var k = this;
                A(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(P) {
                  k.root.classList.contains("ql-editing") ? k.save() : k.edit("link", k.preview.textContent), P.preventDefault();
                }), this.root.querySelector("a.ql-remove").addEventListener("click", function(P) {
                  if (k.linkRange != null) {
                    var I = k.linkRange;
                    k.restoreFocus(), k.quill.formatText(I, "link", !1, o.default.sources.USER), delete k.linkRange;
                  }
                  P.preventDefault(), k.hide();
                }), this.quill.on(o.default.events.SELECTION_CHANGE, function(P, I, $) {
                  if (P != null) {
                    if (P.length === 0 && $ === o.default.sources.USER) {
                      var F = k.quill.scroll.descendant(a.default, P.index), W = T(F, 2), B = W[0], M = W[1];
                      if (B != null) {
                        k.linkRange = new l.Range(P.index - M, B.length());
                        var w = a.default.formats(B.domNode);
                        k.preview.textContent = w, k.preview.setAttribute("href", w), k.show(), k.position(k.quill.getBounds(k.linkRange));
                        return;
                      }
                    } else
                      delete k.linkRange;
                    k.hide();
                  }
                });
              }
            }, {
              key: "show",
              value: function() {
                A(p.prototype.__proto__ || Object.getPrototypeOf(p.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
              }
            }]), p;
          }(t.BaseTooltip);
          x.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), s.default = E;
        },
        /* 63 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(29), A = Z(T), b = d(36), v = d(38), y = d(64), h = d(65), o = Z(h), t = d(66), e = Z(t), u = d(67), a = Z(u), l = d(37), r = d(26), i = d(39), f = d(40), n = d(56), c = Z(n), N = d(68), O = Z(N), E = d(27), x = Z(E), m = d(69), p = Z(m), g = d(70), k = Z(g), P = d(71), I = Z(P), $ = d(72), F = Z($), W = d(73), B = Z(W), M = d(13), w = Z(M), q = d(74), j = Z(q), U = d(75), C = Z(U), L = d(57), D = Z(L), H = d(41), K = Z(H), V = d(28), Q = Z(V), J = d(59), tt = Z(J), it = d(60), ot = Z(it), ft = d(61), st = Z(ft), z = d(108), G = Z(z), Y = d(62), X = Z(Y);
          function Z(et) {
            return et && et.__esModule ? et : { default: et };
          }
          A.default.register({
            "attributors/attribute/direction": v.DirectionAttribute,
            "attributors/class/align": b.AlignClass,
            "attributors/class/background": l.BackgroundClass,
            "attributors/class/color": r.ColorClass,
            "attributors/class/direction": v.DirectionClass,
            "attributors/class/font": i.FontClass,
            "attributors/class/size": f.SizeClass,
            "attributors/style/align": b.AlignStyle,
            "attributors/style/background": l.BackgroundStyle,
            "attributors/style/color": r.ColorStyle,
            "attributors/style/direction": v.DirectionStyle,
            "attributors/style/font": i.FontStyle,
            "attributors/style/size": f.SizeStyle
          }, !0), A.default.register({
            "formats/align": b.AlignClass,
            "formats/direction": v.DirectionClass,
            "formats/indent": y.IndentClass,
            "formats/background": l.BackgroundStyle,
            "formats/color": r.ColorStyle,
            "formats/font": i.FontClass,
            "formats/size": f.SizeClass,
            "formats/blockquote": o.default,
            "formats/code-block": w.default,
            "formats/header": e.default,
            "formats/list": a.default,
            "formats/bold": c.default,
            "formats/code": M.Code,
            "formats/italic": O.default,
            "formats/link": x.default,
            "formats/script": p.default,
            "formats/strike": k.default,
            "formats/underline": I.default,
            "formats/image": F.default,
            "formats/video": B.default,
            "formats/list/item": u.ListItem,
            "modules/formula": j.default,
            "modules/syntax": C.default,
            "modules/toolbar": D.default,
            "themes/bubble": G.default,
            "themes/snow": X.default,
            "ui/icons": K.default,
            "ui/picker": Q.default,
            "ui/icon-picker": ot.default,
            "ui/color-picker": tt.default,
            "ui/tooltip": st.default
          }, !0), s.default = A.default;
        },
        /* 64 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.IndentClass = void 0;
          var T = /* @__PURE__ */ function() {
            function a(l, r) {
              for (var i = 0; i < r.length; i++) {
                var f = r[i];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(l, f.key, f);
              }
            }
            return function(l, r, i) {
              return r && a(l.prototype, r), i && a(l, i), l;
            };
          }(), A = function a(l, r, i) {
            l === null && (l = Function.prototype);
            var f = Object.getOwnPropertyDescriptor(l, r);
            if (f === void 0) {
              var n = Object.getPrototypeOf(l);
              return n === null ? void 0 : a(n, r, i);
            } else {
              if ("value" in f)
                return f.value;
              var c = f.get;
              return c === void 0 ? void 0 : c.call(i);
            }
          }, b = d(0), v = y(b);
          function y(a) {
            return a && a.__esModule ? a : { default: a };
          }
          function h(a, l) {
            if (!(a instanceof l))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(a, l) {
            if (!a)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return l && (typeof l == "object" || typeof l == "function") ? l : a;
          }
          function t(a, l) {
            if (typeof l != "function" && l !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof l);
            a.prototype = Object.create(l && l.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(a, l) : a.__proto__ = l);
          }
          var e = function(a) {
            t(l, a);
            function l() {
              return h(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments));
            }
            return T(l, [{
              key: "add",
              value: function(i, f) {
                if (f === "+1" || f === "-1") {
                  var n = this.value(i) || 0;
                  f = f === "+1" ? n + 1 : n - 1;
                }
                return f === 0 ? (this.remove(i), !0) : A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "add", this).call(this, i, f);
              }
            }, {
              key: "canAdd",
              value: function(i, f) {
                return A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, i, f) || A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "canAdd", this).call(this, i, parseInt(f));
              }
            }, {
              key: "value",
              value: function(i) {
                return parseInt(A(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "value", this).call(this, i)) || void 0;
              }
            }]), l;
          }(v.default.Attributor.Class), u = new e("indent", "ql-indent", {
            scope: v.default.Scope.BLOCK,
            whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
          });
          s.IndentClass = u;
        },
        /* 65 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(4), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(A.default);
          o.blotName = "blockquote", o.tagName = "blockquote", s.default = o;
        },
        /* 66 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function e(u, a) {
              for (var l = 0; l < a.length; l++) {
                var r = a[l];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(u, r.key, r);
              }
            }
            return function(u, a, l) {
              return a && e(u.prototype, a), l && e(u, l), u;
            };
          }(), A = d(4), b = v(A);
          function v(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function y(e, u) {
            if (!(e instanceof u))
              throw new TypeError("Cannot call a class as a function");
          }
          function h(e, u) {
            if (!e)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return u && (typeof u == "object" || typeof u == "function") ? u : e;
          }
          function o(e, u) {
            if (typeof u != "function" && u !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof u);
            e.prototype = Object.create(u && u.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : e.__proto__ = u);
          }
          var t = function(e) {
            o(u, e);
            function u() {
              return y(this, u), h(this, (u.__proto__ || Object.getPrototypeOf(u)).apply(this, arguments));
            }
            return T(u, null, [{
              key: "formats",
              value: function(l) {
                return this.tagName.indexOf(l.tagName) + 1;
              }
            }]), u;
          }(b.default);
          t.blotName = "header", t.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], s.default = t;
        },
        /* 67 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.ListItem = void 0;
          var T = /* @__PURE__ */ function() {
            function n(c, N) {
              for (var O = 0; O < N.length; O++) {
                var E = N[O];
                E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(c, E.key, E);
              }
            }
            return function(c, N, O) {
              return N && n(c.prototype, N), O && n(c, O), c;
            };
          }(), A = function n(c, N, O) {
            c === null && (c = Function.prototype);
            var E = Object.getOwnPropertyDescriptor(c, N);
            if (E === void 0) {
              var x = Object.getPrototypeOf(c);
              return x === null ? void 0 : n(x, N, O);
            } else {
              if ("value" in E)
                return E.value;
              var m = E.get;
              return m === void 0 ? void 0 : m.call(O);
            }
          }, b = d(0), v = e(b), y = d(4), h = e(y), o = d(25), t = e(o);
          function e(n) {
            return n && n.__esModule ? n : { default: n };
          }
          function u(n, c, N) {
            return c in n ? Object.defineProperty(n, c, { value: N, enumerable: !0, configurable: !0, writable: !0 }) : n[c] = N, n;
          }
          function a(n, c) {
            if (!(n instanceof c))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(n, c) {
            if (!n)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return c && (typeof c == "object" || typeof c == "function") ? c : n;
          }
          function r(n, c) {
            if (typeof c != "function" && c !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof c);
            n.prototype = Object.create(c && c.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(n, c) : n.__proto__ = c);
          }
          var i = function(n) {
            r(c, n);
            function c() {
              return a(this, c), l(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
            }
            return T(c, [{
              key: "format",
              value: function(O, E) {
                O === f.blotName && !E ? this.replaceWith(v.default.create(this.statics.scope)) : A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "format", this).call(this, O, E);
              }
            }, {
              key: "remove",
              value: function() {
                this.prev == null && this.next == null ? this.parent.remove() : A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "remove", this).call(this);
              }
            }, {
              key: "replaceWith",
              value: function(O, E) {
                return this.parent.isolate(this.offset(this.parent), this.length()), O === this.parent.statics.blotName ? (this.parent.replaceWith(O, E), this) : (this.parent.unwrap(), A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replaceWith", this).call(this, O, E));
              }
            }], [{
              key: "formats",
              value: function(O) {
                return O.tagName === this.tagName ? void 0 : A(c.__proto__ || Object.getPrototypeOf(c), "formats", this).call(this, O);
              }
            }]), c;
          }(h.default);
          i.blotName = "list-item", i.tagName = "LI";
          var f = function(n) {
            r(c, n), T(c, null, [{
              key: "create",
              value: function(O) {
                var E = O === "ordered" ? "OL" : "UL", x = A(c.__proto__ || Object.getPrototypeOf(c), "create", this).call(this, E);
                return (O === "checked" || O === "unchecked") && x.setAttribute("data-checked", O === "checked"), x;
              }
            }, {
              key: "formats",
              value: function(O) {
                if (O.tagName === "OL")
                  return "ordered";
                if (O.tagName === "UL")
                  return O.hasAttribute("data-checked") ? O.getAttribute("data-checked") === "true" ? "checked" : "unchecked" : "bullet";
              }
            }]);
            function c(N) {
              a(this, c);
              var O = l(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, N)), E = function(m) {
                if (m.target.parentNode === N) {
                  var p = O.statics.formats(N), g = v.default.find(m.target);
                  p === "checked" ? g.format("list", "unchecked") : p === "unchecked" && g.format("list", "checked");
                }
              };
              return N.addEventListener("touchstart", E), N.addEventListener("mousedown", E), O;
            }
            return T(c, [{
              key: "format",
              value: function(O, E) {
                this.children.length > 0 && this.children.tail.format(O, E);
              }
            }, {
              key: "formats",
              value: function() {
                return u({}, this.statics.blotName, this.statics.formats(this.domNode));
              }
            }, {
              key: "insertBefore",
              value: function(O, E) {
                if (O instanceof i)
                  A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "insertBefore", this).call(this, O, E);
                else {
                  var x = E == null ? this.length() : E.offset(this), m = this.split(x);
                  m.parent.insertBefore(O, m);
                }
              }
            }, {
              key: "optimize",
              value: function(O) {
                A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "optimize", this).call(this, O);
                var E = this.next;
                E != null && E.prev === this && E.statics.blotName === this.statics.blotName && E.domNode.tagName === this.domNode.tagName && E.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (E.moveChildren(this), E.remove());
              }
            }, {
              key: "replace",
              value: function(O) {
                if (O.statics.blotName !== this.statics.blotName) {
                  var E = v.default.create(this.statics.defaultChild);
                  O.moveChildren(E), this.appendChild(E);
                }
                A(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), "replace", this).call(this, O);
              }
            }]), c;
          }(t.default);
          f.blotName = "list", f.scope = v.default.Scope.BLOCK_BLOT, f.tagName = ["OL", "UL"], f.defaultChild = "list-item", f.allowedChildren = [i], s.ListItem = i, s.default = f;
        },
        /* 68 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(56), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(A.default);
          o.blotName = "italic", o.tagName = ["EM", "I"], s.default = o;
        },
        /* 69 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function u(a, l) {
              for (var r = 0; r < l.length; r++) {
                var i = l[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i);
              }
            }
            return function(a, l, r) {
              return l && u(a.prototype, l), r && u(a, r), a;
            };
          }(), A = function u(a, l, r) {
            a === null && (a = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(a, l);
            if (i === void 0) {
              var f = Object.getPrototypeOf(a);
              return f === null ? void 0 : u(f, l, r);
            } else {
              if ("value" in i)
                return i.value;
              var n = i.get;
              return n === void 0 ? void 0 : n.call(r);
            }
          }, b = d(6), v = y(b);
          function y(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function h(u, a) {
            if (!(u instanceof a))
              throw new TypeError("Cannot call a class as a function");
          }
          function o(u, a) {
            if (!u)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return a && (typeof a == "object" || typeof a == "function") ? a : u;
          }
          function t(u, a) {
            if (typeof a != "function" && a !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof a);
            u.prototype = Object.create(a && a.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(u, a) : u.__proto__ = a);
          }
          var e = function(u) {
            t(a, u);
            function a() {
              return h(this, a), o(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }
            return T(a, null, [{
              key: "create",
              value: function(r) {
                return r === "super" ? document.createElement("sup") : r === "sub" ? document.createElement("sub") : A(a.__proto__ || Object.getPrototypeOf(a), "create", this).call(this, r);
              }
            }, {
              key: "formats",
              value: function(r) {
                if (r.tagName === "SUB")
                  return "sub";
                if (r.tagName === "SUP")
                  return "super";
              }
            }]), a;
          }(v.default);
          e.blotName = "script", e.tagName = ["SUB", "SUP"], s.default = e;
        },
        /* 70 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(6), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(A.default);
          o.blotName = "strike", o.tagName = "S", s.default = o;
        },
        /* 71 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = d(6), A = b(T);
          function b(t) {
            return t && t.__esModule ? t : { default: t };
          }
          function v(t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }
          function y(t, e) {
            if (!t)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && (typeof e == "object" || typeof e == "function") ? e : t;
          }
          function h(t, e) {
            if (typeof e != "function" && e !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
          }
          var o = function(t) {
            h(e, t);
            function e() {
              return v(this, e), y(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
            }
            return e;
          }(A.default);
          o.blotName = "underline", o.tagName = "U", s.default = o;
        },
        /* 72 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), A = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, b = d(0), v = h(b), y = d(27);
          function h(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function o(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function e(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var u = ["alt", "height", "width"], a = function(l) {
            e(r, l);
            function r() {
              return o(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return T(r, [{
              key: "format",
              value: function(f, n) {
                u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
              }
            }], [{
              key: "create",
              value: function(f) {
                var n = A(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
                return typeof f == "string" && n.setAttribute("src", this.sanitize(f)), n;
              }
            }, {
              key: "formats",
              value: function(f) {
                return u.reduce(function(n, c) {
                  return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
                }, {});
              }
            }, {
              key: "match",
              value: function(f) {
                return /\.(jpe?g|gif|png)$/.test(f) || /^data:image\/.+;base64/.test(f);
              }
            }, {
              key: "sanitize",
              value: function(f) {
                return (0, y.sanitize)(f, ["http", "https", "data"]) ? f : "//:0";
              }
            }, {
              key: "value",
              value: function(f) {
                return f.getAttribute("src");
              }
            }]), r;
          }(v.default.Embed);
          a.blotName = "image", a.tagName = "IMG", s.default = a;
        },
        /* 73 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          });
          var T = /* @__PURE__ */ function() {
            function l(r, i) {
              for (var f = 0; f < i.length; f++) {
                var n = i[f];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
              }
            }
            return function(r, i, f) {
              return i && l(r.prototype, i), f && l(r, f), r;
            };
          }(), A = function l(r, i, f) {
            r === null && (r = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(r, i);
            if (n === void 0) {
              var c = Object.getPrototypeOf(r);
              return c === null ? void 0 : l(c, i, f);
            } else {
              if ("value" in n)
                return n.value;
              var N = n.get;
              return N === void 0 ? void 0 : N.call(f);
            }
          }, b = d(4), v = d(27), y = h(v);
          function h(l) {
            return l && l.__esModule ? l : { default: l };
          }
          function o(l, r) {
            if (!(l instanceof r))
              throw new TypeError("Cannot call a class as a function");
          }
          function t(l, r) {
            if (!l)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return r && (typeof r == "object" || typeof r == "function") ? r : l;
          }
          function e(l, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof r);
            l.prototype = Object.create(r && r.prototype, { constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : l.__proto__ = r);
          }
          var u = ["height", "width"], a = function(l) {
            e(r, l);
            function r() {
              return o(this, r), t(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
            }
            return T(r, [{
              key: "format",
              value: function(f, n) {
                u.indexOf(f) > -1 ? n ? this.domNode.setAttribute(f, n) : this.domNode.removeAttribute(f) : A(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "format", this).call(this, f, n);
              }
            }], [{
              key: "create",
              value: function(f) {
                var n = A(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, f);
                return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(f)), n;
              }
            }, {
              key: "formats",
              value: function(f) {
                return u.reduce(function(n, c) {
                  return f.hasAttribute(c) && (n[c] = f.getAttribute(c)), n;
                }, {});
              }
            }, {
              key: "sanitize",
              value: function(f) {
                return y.default.sanitize(f);
              }
            }, {
              key: "value",
              value: function(f) {
                return f.getAttribute("src");
              }
            }]), r;
          }(b.BlockEmbed);
          a.blotName = "video", a.className = "ql-video", a.tagName = "IFRAME", s.default = a;
        },
        /* 74 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.FormulaBlot = void 0;
          var T = /* @__PURE__ */ function() {
            function f(n, c) {
              for (var N = 0; N < c.length; N++) {
                var O = c[N];
                O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(n, O.key, O);
              }
            }
            return function(n, c, N) {
              return c && f(n.prototype, c), N && f(n, N), n;
            };
          }(), A = function f(n, c, N) {
            n === null && (n = Function.prototype);
            var O = Object.getOwnPropertyDescriptor(n, c);
            if (O === void 0) {
              var E = Object.getPrototypeOf(n);
              return E === null ? void 0 : f(E, c, N);
            } else {
              if ("value" in O)
                return O.value;
              var x = O.get;
              return x === void 0 ? void 0 : x.call(N);
            }
          }, b = d(35), v = e(b), y = d(5), h = e(y), o = d(9), t = e(o);
          function e(f) {
            return f && f.__esModule ? f : { default: f };
          }
          function u(f, n) {
            if (!(f instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(f, n) {
            if (!f)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return n && (typeof n == "object" || typeof n == "function") ? n : f;
          }
          function l(f, n) {
            if (typeof n != "function" && n !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            f.prototype = Object.create(n && n.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(f, n) : f.__proto__ = n);
          }
          var r = function(f) {
            l(n, f);
            function n() {
              return u(this, n), a(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
            }
            return T(n, null, [{
              key: "create",
              value: function(N) {
                var O = A(n.__proto__ || Object.getPrototypeOf(n), "create", this).call(this, N);
                return typeof N == "string" && (window.katex.render(N, O, {
                  throwOnError: !1,
                  errorColor: "#f00"
                }), O.setAttribute("data-value", N)), O;
              }
            }, {
              key: "value",
              value: function(N) {
                return N.getAttribute("data-value");
              }
            }]), n;
          }(v.default);
          r.blotName = "formula", r.className = "ql-formula", r.tagName = "SPAN";
          var i = function(f) {
            l(n, f), T(n, null, [{
              key: "register",
              value: function() {
                h.default.register(r, !0);
              }
            }]);
            function n() {
              u(this, n);
              var c = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
              if (window.katex == null)
                throw new Error("Formula module requires KaTeX.");
              return c;
            }
            return n;
          }(t.default);
          s.FormulaBlot = r, s.default = i;
        },
        /* 75 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.CodeToken = s.CodeBlock = void 0;
          var T = /* @__PURE__ */ function() {
            function N(O, E) {
              for (var x = 0; x < E.length; x++) {
                var m = E[x];
                m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(O, m.key, m);
              }
            }
            return function(O, E, x) {
              return E && N(O.prototype, E), x && N(O, x), O;
            };
          }(), A = function N(O, E, x) {
            O === null && (O = Function.prototype);
            var m = Object.getOwnPropertyDescriptor(O, E);
            if (m === void 0) {
              var p = Object.getPrototypeOf(O);
              return p === null ? void 0 : N(p, E, x);
            } else {
              if ("value" in m)
                return m.value;
              var g = m.get;
              return g === void 0 ? void 0 : g.call(x);
            }
          }, b = d(0), v = a(b), y = d(5), h = a(y), o = d(9), t = a(o), e = d(13), u = a(e);
          function a(N) {
            return N && N.__esModule ? N : { default: N };
          }
          function l(N, O) {
            if (!(N instanceof O))
              throw new TypeError("Cannot call a class as a function");
          }
          function r(N, O) {
            if (!N)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return O && (typeof O == "object" || typeof O == "function") ? O : N;
          }
          function i(N, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof O);
            N.prototype = Object.create(O && O.prototype, { constructor: { value: N, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(N, O) : N.__proto__ = O);
          }
          var f = function(N) {
            i(O, N);
            function O() {
              return l(this, O), r(this, (O.__proto__ || Object.getPrototypeOf(O)).apply(this, arguments));
            }
            return T(O, [{
              key: "replaceWith",
              value: function(x) {
                this.domNode.textContent = this.domNode.textContent, this.attach(), A(O.prototype.__proto__ || Object.getPrototypeOf(O.prototype), "replaceWith", this).call(this, x);
              }
            }, {
              key: "highlight",
              value: function(x) {
                var m = this.domNode.textContent;
                this.cachedText !== m && ((m.trim().length > 0 || this.cachedText == null) && (this.domNode.innerHTML = x(m), this.domNode.normalize(), this.attach()), this.cachedText = m);
              }
            }]), O;
          }(u.default);
          f.className = "ql-syntax";
          var n = new v.default.Attributor.Class("token", "hljs", {
            scope: v.default.Scope.INLINE
          }), c = function(N) {
            i(O, N), T(O, null, [{
              key: "register",
              value: function() {
                h.default.register(n, !0), h.default.register(f, !0);
              }
            }]);
            function O(E, x) {
              l(this, O);
              var m = r(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, E, x));
              if (typeof m.options.highlight != "function")
                throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
              var p = null;
              return m.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                clearTimeout(p), p = setTimeout(function() {
                  m.highlight(), p = null;
                }, m.options.interval);
              }), m.highlight(), m;
            }
            return T(O, [{
              key: "highlight",
              value: function() {
                var x = this;
                if (!this.quill.selection.composing) {
                  this.quill.update(h.default.sources.USER);
                  var m = this.quill.getSelection();
                  this.quill.scroll.descendants(f).forEach(function(p) {
                    p.highlight(x.options.highlight);
                  }), this.quill.update(h.default.sources.SILENT), m != null && this.quill.setSelection(m, h.default.sources.SILENT);
                }
              }
            }]), O;
          }(t.default);
          c.DEFAULTS = {
            highlight: function() {
              return window.hljs == null ? null : function(N) {
                var O = window.hljs.highlightAuto(N);
                return O.value;
              };
            }(),
            interval: 1e3
          }, s.CodeBlock = f, s.CodeToken = n, s.default = c;
        },
        /* 76 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 77 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
        },
        /* 78 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
        },
        /* 79 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
        },
        /* 80 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
        },
        /* 81 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
        },
        /* 82 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
        },
        /* 83 */
        /***/
        function(_, s) {
          _.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
        },
        /* 84 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
        },
        /* 85 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
        },
        /* 86 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
        },
        /* 87 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 88 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 89 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
        },
        /* 90 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
        },
        /* 91 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
        },
        /* 92 */
        /***/
        function(_, s) {
          _.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
        },
        /* 93 */
        /***/
        function(_, s) {
          _.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
        },
        /* 94 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
        },
        /* 95 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
        },
        /* 96 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
        },
        /* 97 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
        },
        /* 98 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
        },
        /* 99 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
        },
        /* 100 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
        },
        /* 101 */
        /***/
        function(_, s) {
          _.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
        },
        /* 102 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
        },
        /* 103 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
        },
        /* 104 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
        },
        /* 105 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
        },
        /* 106 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
        },
        /* 107 */
        /***/
        function(_, s) {
          _.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
        },
        /* 108 */
        /***/
        function(_, s, d) {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.default = s.BubbleTooltip = void 0;
          var T = function O(E, x, m) {
            E === null && (E = Function.prototype);
            var p = Object.getOwnPropertyDescriptor(E, x);
            if (p === void 0) {
              var g = Object.getPrototypeOf(E);
              return g === null ? void 0 : O(g, x, m);
            } else {
              if ("value" in p)
                return p.value;
              var k = p.get;
              return k === void 0 ? void 0 : k.call(m);
            }
          }, A = /* @__PURE__ */ function() {
            function O(E, x) {
              for (var m = 0; m < x.length; m++) {
                var p = x[m];
                p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(E, p.key, p);
              }
            }
            return function(E, x, m) {
              return x && O(E.prototype, x), m && O(E, m), E;
            };
          }(), b = d(3), v = l(b), y = d(8), h = l(y), o = d(43), t = l(o), e = d(15), u = d(41), a = l(u);
          function l(O) {
            return O && O.__esModule ? O : { default: O };
          }
          function r(O, E) {
            if (!(O instanceof E))
              throw new TypeError("Cannot call a class as a function");
          }
          function i(O, E) {
            if (!O)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return E && (typeof E == "object" || typeof E == "function") ? E : O;
          }
          function f(O, E) {
            if (typeof E != "function" && E !== null)
              throw new TypeError("Super expression must either be null or a function, not " + typeof E);
            O.prototype = Object.create(E && E.prototype, { constructor: { value: O, enumerable: !1, writable: !0, configurable: !0 } }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(O, E) : O.__proto__ = E);
          }
          var n = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], c = function(O) {
            f(E, O);
            function E(x, m) {
              r(this, E), m.modules.toolbar != null && m.modules.toolbar.container == null && (m.modules.toolbar.container = n);
              var p = i(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, x, m));
              return p.quill.container.classList.add("ql-bubble"), p;
            }
            return A(E, [{
              key: "extendToolbar",
              value: function(m) {
                this.tooltip = new N(this.quill, this.options.bounds), this.tooltip.root.appendChild(m.container), this.buildButtons([].slice.call(m.container.querySelectorAll("button")), a.default), this.buildPickers([].slice.call(m.container.querySelectorAll("select")), a.default);
              }
            }]), E;
          }(t.default);
          c.DEFAULTS = (0, v.default)(!0, {}, t.default.DEFAULTS, {
            modules: {
              toolbar: {
                handlers: {
                  link: function(E) {
                    E ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
                  }
                }
              }
            }
          });
          var N = function(O) {
            f(E, O);
            function E(x, m) {
              r(this, E);
              var p = i(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, x, m));
              return p.quill.on(h.default.events.EDITOR_CHANGE, function(g, k, P, I) {
                if (g === h.default.events.SELECTION_CHANGE)
                  if (k != null && k.length > 0 && I === h.default.sources.USER) {
                    p.show(), p.root.style.left = "0px", p.root.style.width = "", p.root.style.width = p.root.offsetWidth + "px";
                    var $ = p.quill.getLines(k.index, k.length);
                    if ($.length === 1)
                      p.position(p.quill.getBounds(k));
                    else {
                      var F = $[$.length - 1], W = p.quill.getIndex(F), B = Math.min(F.length() - 1, k.index + k.length - W), M = p.quill.getBounds(new e.Range(W, B));
                      p.position(M);
                    }
                  } else
                    document.activeElement !== p.textbox && p.quill.hasFocus() && p.hide();
              }), p;
            }
            return A(E, [{
              key: "listen",
              value: function() {
                var m = this;
                T(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
                  m.root.classList.remove("ql-editing");
                }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                  setTimeout(function() {
                    if (!m.root.classList.contains("ql-hidden")) {
                      var p = m.quill.getSelection();
                      p != null && m.position(m.quill.getBounds(p));
                    }
                  }, 1);
                });
              }
            }, {
              key: "cancel",
              value: function() {
                this.show();
              }
            }, {
              key: "position",
              value: function(m) {
                var p = T(E.prototype.__proto__ || Object.getPrototypeOf(E.prototype), "position", this).call(this, m), g = this.root.querySelector(".ql-tooltip-arrow");
                if (g.style.marginLeft = "", p === 0)
                  return p;
                g.style.marginLeft = -1 * p - g.offsetWidth / 2 + "px";
              }
            }]), E;
          }(o.BaseTooltip);
          N.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), s.BubbleTooltip = N, s.default = c;
        },
        /* 109 */
        /***/
        function(_, s, d) {
          _.exports = d(63);
        }
        /******/
      ]).default
    );
  });
})(De);
var gu = De.exports, mu = ct && ct.__extends || /* @__PURE__ */ function() {
  var S = function(R, _) {
    return S = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, d) {
      s.__proto__ = d;
    } || function(s, d) {
      for (var T in d)
        d.hasOwnProperty(T) && (s[T] = d[T]);
    }, S(R, _);
  };
  return function(R, _) {
    S(R, _);
    function s() {
      this.constructor = R;
    }
    R.prototype = _ === null ? Object.create(_) : (s.prototype = _.prototype, new s());
  };
}(), Pt = ct && ct.__assign || function() {
  return Pt = Object.assign || function(S) {
    for (var R, _ = 1, s = arguments.length; _ < s; _++) {
      R = arguments[_];
      for (var d in R)
        Object.prototype.hasOwnProperty.call(R, d) && (S[d] = R[d]);
    }
    return S;
  }, Pt.apply(this, arguments);
}, bu = ct && ct.__spreadArrays || function() {
  for (var S = 0, R = 0, _ = arguments.length; R < _; R++)
    S += arguments[R].length;
  for (var s = Array(S), d = 0, R = 0; R < _; R++)
    for (var T = arguments[R], A = 0, b = T.length; A < b; A++, d++)
      s[d] = T[A];
  return s;
}, Dt = ct && ct.__importDefault || function(S) {
  return S && S.__esModule ? S : { default: S };
}, dt = Dt(Fe), _u = Dt(Ce), Tt = Dt(yu), Oe = Dt(gu), Ou = (
  /** @class */
  function(S) {
    mu(R, S);
    function R(_) {
      var s = S.call(this, _) || this;
      s.dirtyProps = [
        "modules",
        "formats",
        "bounds",
        "theme",
        "children"
      ], s.cleanProps = [
        "id",
        "className",
        "style",
        "placeholder",
        "tabIndex",
        "onChange",
        "onChangeSelection",
        "onFocus",
        "onBlur",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp"
      ], s.state = {
        generation: 0
      }, s.selection = null, s.onEditorChange = function(T, A, b, v) {
        var y, h, o, t;
        T === "text-change" ? (h = (y = s).onEditorChangeText) === null || h === void 0 || h.call(y, s.editor.root.innerHTML, A, v, s.unprivilegedEditor) : T === "selection-change" && ((t = (o = s).onEditorChangeSelection) === null || t === void 0 || t.call(o, A, v, s.unprivilegedEditor));
      };
      var d = s.isControlled() ? _.value : _.defaultValue;
      return s.value = d ?? "", s;
    }
    return R.prototype.validateProps = function(_) {
      var s;
      if (dt.default.Children.count(_.children) > 1)
        throw new Error("The Quill editing area can only be composed of a single React element.");
      if (dt.default.Children.count(_.children)) {
        var d = dt.default.Children.only(_.children);
        if (((s = d) === null || s === void 0 ? void 0 : s.type) === "textarea")
          throw new Error("Quill does not support editing on a <textarea>. Use a <div> instead.");
      }
      if (this.lastDeltaChangeSet && _.value === this.lastDeltaChangeSet)
        throw new Error("You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas");
    }, R.prototype.shouldComponentUpdate = function(_, s) {
      var d = this, T;
      if (this.validateProps(_), !this.editor || this.state.generation !== s.generation)
        return !0;
      if ("value" in _) {
        var A = this.getEditorContents(), b = (T = _.value, T ?? "");
        this.isEqualValue(b, A) || this.setEditorContents(this.editor, b);
      }
      return _.readOnly !== this.props.readOnly && this.setEditorReadOnly(this.editor, _.readOnly), bu(this.cleanProps, this.dirtyProps).some(function(v) {
        return !Tt.default(_[v], d.props[v]);
      });
    }, R.prototype.shouldComponentRegenerate = function(_) {
      var s = this;
      return this.dirtyProps.some(function(d) {
        return !Tt.default(_[d], s.props[d]);
      });
    }, R.prototype.componentDidMount = function() {
      this.instantiateEditor(), this.setEditorContents(this.editor, this.getEditorContents());
    }, R.prototype.componentWillUnmount = function() {
      this.destroyEditor();
    }, R.prototype.componentDidUpdate = function(_, s) {
      var d = this;
      if (this.editor && this.shouldComponentRegenerate(_)) {
        var T = this.editor.getContents(), A = this.editor.getSelection();
        this.regenerationSnapshot = { delta: T, selection: A }, this.setState({ generation: this.state.generation + 1 }), this.destroyEditor();
      }
      if (this.state.generation !== s.generation) {
        var b = this.regenerationSnapshot, T = b.delta, v = b.selection;
        delete this.regenerationSnapshot, this.instantiateEditor();
        var y = this.editor;
        y.setContents(T), Ee(function() {
          return d.setEditorSelection(y, v);
        });
      }
    }, R.prototype.instantiateEditor = function() {
      this.editor ? this.hookEditor(this.editor) : this.editor = this.createEditor(this.getEditingArea(), this.getEditorConfig());
    }, R.prototype.destroyEditor = function() {
      this.editor && this.unhookEditor(this.editor);
    }, R.prototype.isControlled = function() {
      return "value" in this.props;
    }, R.prototype.getEditorConfig = function() {
      return {
        bounds: this.props.bounds,
        formats: this.props.formats,
        modules: this.props.modules,
        placeholder: this.props.placeholder,
        readOnly: this.props.readOnly,
        scrollingContainer: this.props.scrollingContainer,
        tabIndex: this.props.tabIndex,
        theme: this.props.theme
      };
    }, R.prototype.getEditor = function() {
      if (!this.editor)
        throw new Error("Accessing non-instantiated editor");
      return this.editor;
    }, R.prototype.createEditor = function(_, s) {
      var d = new Oe.default(_, s);
      return s.tabIndex != null && this.setEditorTabIndex(d, s.tabIndex), this.hookEditor(d), d;
    }, R.prototype.hookEditor = function(_) {
      this.unprivilegedEditor = this.makeUnprivilegedEditor(_), _.on("editor-change", this.onEditorChange);
    }, R.prototype.unhookEditor = function(_) {
      _.off("editor-change", this.onEditorChange);
    }, R.prototype.getEditorContents = function() {
      return this.value;
    }, R.prototype.getEditorSelection = function() {
      return this.selection;
    }, R.prototype.isDelta = function(_) {
      return _ && _.ops;
    }, R.prototype.isEqualValue = function(_, s) {
      return this.isDelta(_) && this.isDelta(s) ? Tt.default(_.ops, s.ops) : Tt.default(_, s);
    }, R.prototype.setEditorContents = function(_, s) {
      var d = this;
      this.value = s;
      var T = this.getEditorSelection();
      typeof s == "string" ? _.setContents(_.clipboard.convert(s)) : _.setContents(s), Ee(function() {
        return d.setEditorSelection(_, T);
      });
    }, R.prototype.setEditorSelection = function(_, s) {
      if (this.selection = s, s) {
        var d = _.getLength();
        s.index = Math.max(0, Math.min(s.index, d - 1)), s.length = Math.max(0, Math.min(s.length, d - 1 - s.index)), _.setSelection(s);
      }
    }, R.prototype.setEditorTabIndex = function(_, s) {
      var d, T;
      !((T = (d = _) === null || d === void 0 ? void 0 : d.scroll) === null || T === void 0) && T.domNode && (_.scroll.domNode.tabIndex = s);
    }, R.prototype.setEditorReadOnly = function(_, s) {
      s ? _.disable() : _.enable();
    }, R.prototype.makeUnprivilegedEditor = function(_) {
      var s = _;
      return {
        getHTML: function() {
          return s.root.innerHTML;
        },
        getLength: s.getLength.bind(s),
        getText: s.getText.bind(s),
        getContents: s.getContents.bind(s),
        getSelection: s.getSelection.bind(s),
        getBounds: s.getBounds.bind(s)
      };
    }, R.prototype.getEditingArea = function() {
      if (!this.editingArea)
        throw new Error("Instantiating on missing editing area");
      var _ = _u.default.findDOMNode(this.editingArea);
      if (!_)
        throw new Error("Cannot find element for editing area");
      if (_.nodeType === 3)
        throw new Error("Editing area cannot be a text node");
      return _;
    }, R.prototype.renderEditingArea = function() {
      var _ = this, s = this.props, d = s.children, T = s.preserveWhitespace, A = this.state.generation, b = {
        key: A,
        ref: function(v) {
          _.editingArea = v;
        }
      };
      return dt.default.Children.count(d) ? dt.default.cloneElement(dt.default.Children.only(d), b) : T ? dt.default.createElement("pre", Pt({}, b)) : dt.default.createElement("div", Pt({}, b));
    }, R.prototype.render = function() {
      var _;
      return dt.default.createElement("div", { id: this.props.id, style: this.props.style, key: this.state.generation, className: "quill " + (_ = this.props.className, _ ?? ""), onKeyPress: this.props.onKeyPress, onKeyDown: this.props.onKeyDown, onKeyUp: this.props.onKeyUp }, this.renderEditingArea());
    }, R.prototype.onEditorChangeText = function(_, s, d, T) {
      var A, b;
      if (this.editor) {
        var v = this.isDelta(this.value) ? T.getContents() : T.getHTML();
        v !== this.getEditorContents() && (this.lastDeltaChangeSet = s, this.value = v, (b = (A = this.props).onChange) === null || b === void 0 || b.call(A, _, s, d, T));
      }
    }, R.prototype.onEditorChangeSelection = function(_, s, d) {
      var T, A, b, v, y, h;
      if (this.editor) {
        var o = this.getEditorSelection(), t = !o && _, e = o && !_;
        Tt.default(_, o) || (this.selection = _, (A = (T = this.props).onChangeSelection) === null || A === void 0 || A.call(T, _, s, d), t ? (v = (b = this.props).onFocus) === null || v === void 0 || v.call(b, _, s, d) : e && ((h = (y = this.props).onBlur) === null || h === void 0 || h.call(y, o, s, d)));
      }
    }, R.prototype.focus = function() {
      this.editor && this.editor.focus();
    }, R.prototype.blur = function() {
      this.editor && (this.selection = null, this.editor.blur());
    }, R.displayName = "React Quill", R.Quill = Oe.default, R.defaultProps = {
      theme: "snow",
      modules: {},
      readOnly: !1
    }, R;
  }(dt.default.Component)
);
function Ee(S) {
  Promise.resolve().then(S);
}
var Eu = Ou;
const ku = /* @__PURE__ */ $e(Eu);
export {
  ku as R
};
