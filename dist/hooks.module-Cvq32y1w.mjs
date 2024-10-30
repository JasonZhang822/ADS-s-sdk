import { b0 as r_, aR as R } from "./index-W1x9Ryk5.mjs";
const W_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventEmitter: r_,
  default: r_
}, Symbol.toStringTag, { value: "Module" })), ue = /* @__PURE__ */ R(W_);
function y_(e) {
  var _, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (_ = 0; _ < e.length; _++) e[_] && (t = y_(e[_])) && (n && (n += " "), n += t);
  else for (_ in e) e[_] && (n && (n += " "), n += _);
  return n;
}
function i_() {
  for (var e, _, t = 0, n = ""; t < arguments.length; ) (e = arguments[t++]) && (_ = y_(e)) && (n && (n += " "), n += _);
  return n;
}
const j_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: i_,
  default: i_
}, Symbol.toStringTag, { value: "Module" })), le = /* @__PURE__ */ R(j_);
var A, d, g_, b_, S, u_, k_, G, Z, J, K, $_, M = {}, w_ = [], O_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, z = Array.isArray;
function w(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function C_(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Q(e, _, t) {
  var n, o, i, l = {};
  for (i in _) i == "key" ? n = _[i] : i == "ref" ? o = _[i] : l[i] = _[i];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? A.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null) for (i in e.defaultProps) l[i] === void 0 && (l[i] = e.defaultProps[i]);
  return U(e, l, n, o, null);
}
function U(e, _, t, n, o) {
  var i = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: o ?? ++g_, __i: -1, __u: 0 };
  return o == null && d.vnode != null && d.vnode(i), i;
}
function q_() {
  return { current: null };
}
function F(e) {
  return e.children;
}
function D(e, _) {
  this.props = e, this.context = _;
}
function P(e, _) {
  if (_ == null) return e.__ ? P(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? P(e) : null;
}
function x_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++) if ((t = e.__k[_]) != null && t.__e != null) {
      e.__e = e.__c.base = t.__e;
      break;
    }
    return x_(e);
  }
}
function X(e) {
  (!e.__d && (e.__d = !0) && S.push(e) && !I.__r++ || u_ !== d.debounceRendering) && ((u_ = d.debounceRendering) || k_)(I);
}
function I() {
  var e, _, t, n, o, i, l, u;
  for (S.sort(G); e = S.shift(); ) e.__d && (_ = S.length, n = void 0, i = (o = (t = e).__v).__e, l = [], u = [], t.__P && ((n = w({}, o)).__v = o.__v + 1, d.vnode && d.vnode(n), __(t.__P, n, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [i] : null, l, i ?? P(o), !!(32 & o.__u), u), n.__v = o.__v, n.__.__k[n.__i] = n, E_(l, n, u), n.__e != i && x_(n)), S.length > _ && S.sort(G));
  I.__r = 0;
}
function S_(e, _, t, n, o, i, l, u, s, c, a) {
  var r, h, f, g, k, b = n && n.__k || w_, v = _.length;
  for (t.__d = s, I_(t, _, b), s = t.__d, r = 0; r < v; r++) (f = t.__k[r]) != null && (h = f.__i === -1 ? M : b[f.__i] || M, f.__i = r, __(e, f, h, o, i, l, u, s, c, a), g = f.__e, f.ref && h.ref != f.ref && (h.ref && e_(h.ref, null, f), a.push(f.ref, f.__c || g, f)), k == null && g != null && (k = g), 65536 & f.__u || h.__k === f.__k ? s = H_(f, s, e) : typeof f.type == "function" && f.__d !== void 0 ? s = f.__d : g && (s = g.nextSibling), f.__d = void 0, f.__u &= -196609);
  t.__d = s, t.__e = k;
}
function I_(e, _, t) {
  var n, o, i, l, u, s = _.length, c = t.length, a = c, r = 0;
  for (e.__k = [], n = 0; n < s; n++) (o = _[n]) != null && typeof o != "boolean" && typeof o != "function" ? (l = n + r, (o = e.__k[n] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? U(null, o, null, null, null) : z(o) ? U(F, { children: o }, null, null, null) : o.constructor === void 0 && o.__b > 0 ? U(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = e, o.__b = e.__b + 1, i = null, (u = o.__i = R_(o, t, l, a)) !== -1 && (a--, (i = t[u]) && (i.__u |= 131072)), i == null || i.__v === null ? (u == -1 && r--, typeof o.type != "function" && (o.__u |= 65536)) : u !== l && (u == l - 1 ? r-- : u == l + 1 ? r++ : (u > l ? r-- : r++, o.__u |= 65536))) : o = e.__k[n] = null;
  if (a) for (n = 0; n < c; n++) (i = t[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = P(i)), T_(i, i));
}
function H_(e, _, t) {
  var n, o;
  if (typeof e.type == "function") {
    for (n = e.__k, o = 0; n && o < n.length; o++) n[o] && (n[o].__ = e, _ = H_(n[o], _, t));
    return _;
  }
  e.__e != _ && (_ && e.type && !t.contains(_) && (_ = P(e)), t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function P_(e, _) {
  return _ = _ || [], e == null || typeof e == "boolean" || (z(e) ? e.some(function(t) {
    P_(t, _);
  }) : _.push(e)), _;
}
function R_(e, _, t, n) {
  var o = e.key, i = e.type, l = t - 1, u = t + 1, s = _[t];
  if (s === null || s && o == s.key && i === s.type && !(131072 & s.__u)) return t;
  if (n > (s != null && !(131072 & s.__u) ? 1 : 0)) for (; l >= 0 || u < _.length; ) {
    if (l >= 0) {
      if ((s = _[l]) && !(131072 & s.__u) && o == s.key && i === s.type) return l;
      l--;
    }
    if (u < _.length) {
      if ((s = _[u]) && !(131072 & s.__u) && o == s.key && i === s.type) return u;
      u++;
    }
  }
  return -1;
}
function l_(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || O_.test(_) ? t : t + "px";
}
function O(e, _, t, n, o) {
  var i;
  _: if (_ === "style") if (typeof t == "string") e.style.cssText = t;
  else {
    if (typeof n == "string" && (e.style.cssText = n = ""), n) for (_ in n) t && _ in t || l_(e.style, _, "");
    if (t) for (_ in t) n && t[_] === n[_] || l_(e.style, _, t[_]);
  }
  else if (_[0] === "o" && _[1] === "n") i = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e || _ === "onFocusOut" || _ === "onFocusIn" ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + i] = t, t ? n ? t.u = n.u : (t.u = Z, e.addEventListener(_, i ? K : J, i)) : e.removeEventListener(_, i ? K : J, i);
  else {
    if (o == "http://www.w3.org/2000/svg") _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (_ != "width" && _ != "height" && _ != "href" && _ != "list" && _ != "form" && _ != "tabIndex" && _ != "download" && _ != "rowSpan" && _ != "colSpan" && _ != "role" && _ != "popover" && _ in e) try {
      e[_] = t ?? "";
      break _;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, _ == "popover" && t == 1 ? "" : t));
  }
}
function c_(e) {
  return function(_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null) _.t = Z++;
      else if (_.t < t.u) return;
      return t(d.event ? d.event(_) : _);
    }
  };
}
function __(e, _, t, n, o, i, l, u, s, c) {
  var a, r, h, f, g, k, b, v, m, T, x, L, N, o_, W, B, $ = _.type;
  if (_.constructor !== void 0) return null;
  128 & t.__u && (s = !!(32 & t.__u), i = [u = _.__e = t.__e]), (a = d.__b) && a(_);
  _: if (typeof $ == "function") try {
    if (v = _.props, m = "prototype" in $ && $.prototype.render, T = (a = $.contextType) && n[a.__c], x = a ? T ? T.props.value : a.__ : n, t.__c ? b = (r = _.__c = t.__c).__ = r.__E : (m ? _.__c = r = new $(v, x) : (_.__c = r = new D(v, x), r.constructor = $, r.render = B_), T && T.sub(r), r.props = v, r.state || (r.state = {}), r.context = x, r.__n = n, h = r.__d = !0, r.__h = [], r._sb = []), m && r.__s == null && (r.__s = r.state), m && $.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = w({}, r.__s)), w(r.__s, $.getDerivedStateFromProps(v, r.__s))), f = r.props, g = r.state, r.__v = _, h) m && $.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), m && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (m && $.getDerivedStateFromProps == null && v !== f && r.componentWillReceiveProps != null && r.componentWillReceiveProps(v, x), !r.__e && (r.shouldComponentUpdate != null && r.shouldComponentUpdate(v, r.__s, x) === !1 || _.__v === t.__v)) {
        for (_.__v !== t.__v && (r.props = v, r.state = r.__s, r.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.some(function(j) {
          j && (j.__ = _);
        }), L = 0; L < r._sb.length; L++) r.__h.push(r._sb[L]);
        r._sb = [], r.__h.length && l.push(r);
        break _;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(v, r.__s, x), m && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(f, g, k);
      });
    }
    if (r.context = x, r.props = v, r.__P = e, r.__e = !1, N = d.__r, o_ = 0, m) {
      for (r.state = r.__s, r.__d = !1, N && N(_), a = r.render(r.props, r.state, r.context), W = 0; W < r._sb.length; W++) r.__h.push(r._sb[W]);
      r._sb = [];
    } else do
      r.__d = !1, N && N(_), a = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++o_ < 25);
    r.state = r.__s, r.getChildContext != null && (n = w(w({}, n), r.getChildContext())), m && !h && r.getSnapshotBeforeUpdate != null && (k = r.getSnapshotBeforeUpdate(f, g)), S_(e, z(B = a != null && a.type === F && a.key == null ? a.props.children : a) ? B : [B], _, t, n, o, i, l, u, s, c), r.base = _.__e, _.__u &= -161, r.__h.length && l.push(r), b && (r.__E = r.__ = null);
  } catch (j) {
    if (_.__v = null, s || i != null) {
      for (_.__u |= s ? 160 : 128; u && u.nodeType === 8 && u.nextSibling; ) u = u.nextSibling;
      i[i.indexOf(u)] = null, _.__e = u;
    } else _.__e = t.__e, _.__k = t.__k;
    d.__e(j, _, t);
  }
  else i == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = z_(t.__e, _, t, n, o, i, l, s, c);
  (a = d.diffed) && a(_);
}
function E_(e, _, t) {
  _.__d = void 0;
  for (var n = 0; n < t.length; n++) e_(t[n], t[++n], t[++n]);
  d.__c && d.__c(_, e), e.some(function(o) {
    try {
      e = o.__h, o.__h = [], e.some(function(i) {
        i.call(o);
      });
    } catch (i) {
      d.__e(i, o.__v);
    }
  });
}
function z_(e, _, t, n, o, i, l, u, s) {
  var c, a, r, h, f, g, k, b = t.props, v = _.props, m = _.type;
  if (m === "svg" ? o = "http://www.w3.org/2000/svg" : m === "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), i != null) {
    for (c = 0; c < i.length; c++) if ((f = i[c]) && "setAttribute" in f == !!m && (m ? f.localName === m : f.nodeType === 3)) {
      e = f, i[c] = null;
      break;
    }
  }
  if (e == null) {
    if (m === null) return document.createTextNode(v);
    e = document.createElementNS(o, m, v.is && v), u && (d.__m && d.__m(_, i), u = !1), i = null;
  }
  if (m === null) b === v || u && e.data === v || (e.data = v);
  else {
    if (i = i && A.call(e.childNodes), b = t.props || M, !u && i != null) for (b = {}, c = 0; c < e.attributes.length; c++) b[(f = e.attributes[c]).name] = f.value;
    for (c in b) if (f = b[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") r = f;
      else if (!(c in v)) {
        if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v) continue;
        O(e, c, null, f, o);
      }
    }
    for (c in v) f = v[c], c == "children" ? h = f : c == "dangerouslySetInnerHTML" ? a = f : c == "value" ? g = f : c == "checked" ? k = f : u && typeof f != "function" || b[c] === f || O(e, c, f, b[c], o);
    if (a) u || r && (a.__html === r.__html || a.__html === e.innerHTML) || (e.innerHTML = a.__html), _.__k = [];
    else if (r && (e.innerHTML = ""), S_(e, z(h) ? h : [h], _, t, n, m === "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, i, l, i ? i[0] : t.__k && P(t, 0), u, s), i != null) for (c = i.length; c--; ) C_(i[c]);
    u || (c = "value", m === "progress" && g == null ? e.removeAttribute("value") : g !== void 0 && (g !== e[c] || m === "progress" && !g || m === "option" && g !== b[c]) && O(e, c, g, b[c], o), c = "checked", k !== void 0 && k !== e[c] && O(e, c, k, b[c], o));
  }
  return e;
}
function e_(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), n && _ == null || (e.__u = e(_));
    } else e.current = _;
  } catch (o) {
    d.__e(o, t);
  }
}
function T_(e, _, t) {
  var n, o;
  if (d.unmount && d.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || e_(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      d.__e(i, _);
    }
    n.base = n.__P = null;
  }
  if (n = e.__k) for (o = 0; o < n.length; o++) n[o] && T_(n[o], _, t || typeof e.type != "function");
  t || C_(e.__e), e.__c = e.__ = e.__e = e.__d = void 0;
}
function B_(e, _, t) {
  return this.constructor(e, t);
}
function N_(e, _, t) {
  var n, o, i, l;
  d.__ && d.__(e, _), o = (n = typeof t == "function") ? null : t && t.__k || _.__k, i = [], l = [], __(_, e = (!n && t || _).__k = Q(F, null, [e]), o || M, M, _.namespaceURI, !n && t ? [t] : o ? null : _.firstChild ? A.call(_.childNodes) : null, i, !n && t ? t : o ? o.__e : _.firstChild, n, l), E_(i, e, l);
}
function U_(e, _) {
  N_(e, _, U_);
}
function V_(e, _, t) {
  var n, o, i, l, u = w({}, e.props);
  for (i in e.type && e.type.defaultProps && (l = e.type.defaultProps), _) i == "key" ? n = _[i] : i == "ref" ? o = _[i] : u[i] = _[i] === void 0 && l !== void 0 ? l[i] : _[i];
  return arguments.length > 2 && (u.children = arguments.length > 3 ? A.call(arguments, 2) : t), U(e.type, u, n || e.key, o || e.ref, null);
}
function G_(e, _) {
  var t = { __c: _ = "__cC" + $_++, __: e, Consumer: function(n, o) {
    return n.children(o);
  }, Provider: function(n) {
    var o, i;
    return this.getChildContext || (o = /* @__PURE__ */ new Set(), (i = {})[_] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      o = null;
    }, this.shouldComponentUpdate = function(l) {
      this.props.value !== l.value && o.forEach(function(u) {
        u.__e = !0, X(u);
      });
    }, this.sub = function(l) {
      o.add(l);
      var u = l.componentWillUnmount;
      l.componentWillUnmount = function() {
        o && o.delete(l), u && u.call(l);
      };
    }), n.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
A = w_.slice, d = { __e: function(e, _, t, n) {
  for (var o, i, l; _ = _.__; ) if ((o = _.__c) && !o.__) try {
    if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), l = o.__d), l) return o.__E = o;
  } catch (u) {
    e = u;
  }
  throw e;
} }, g_ = 0, b_ = function(e) {
  return e != null && e.constructor == null;
}, D.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), typeof e == "function" && (e = e(w({}, t), this.props)), e && w(t, e), e != null && this.__v && (_ && this._sb.push(_), X(this));
}, D.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), X(this));
}, D.prototype.render = F, S = [], k_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, G = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, I.__r = 0, Z = 0, J = c_(!1), K = c_(!0), $_ = 0;
const J_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: D,
  Fragment: F,
  cloneElement: V_,
  createContext: G_,
  createElement: Q,
  createRef: q_,
  h: Q,
  hydrate: U_,
  get isValidElement() {
    return b_;
  },
  get options() {
    return d;
  },
  render: N_,
  toChildArray: P_
}, Symbol.toStringTag, { value: "Module" })), ce = /* @__PURE__ */ R(J_);
var C, p, V, f_, E = 0, D_ = [], y = d, s_ = y.__b, a_ = y.__r, p_ = y.diffed, h_ = y.__c, d_ = y.unmount, v_ = y.__;
function H(e, _) {
  y.__h && y.__h(p, e, E || _), E = 0;
  var t = p.__H || (p.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function M_(e) {
  return E = 1, A_(L_, e);
}
function A_(e, _, t) {
  var n = H(C++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : L_(void 0, _), function(u) {
    var s = n.__N ? n.__N[0] : n.__[0], c = n.t(s, u);
    s !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = p, !p.u)) {
    var o = function(u, s, c) {
      if (!n.__c.__H) return !0;
      var a = n.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (a.every(function(h) {
        return !h.__N;
      })) return !i || i.call(this, u, s, c);
      var r = !1;
      return a.forEach(function(h) {
        if (h.__N) {
          var f = h.__[0];
          h.__ = h.__N, h.__N = void 0, f !== h.__[0] && (r = !0);
        }
      }), !(!r && n.__c.props === u) && (!i || i.call(this, u, s, c));
    };
    p.u = !0;
    var i = p.shouldComponentUpdate, l = p.componentWillUpdate;
    p.componentWillUpdate = function(u, s, c) {
      if (this.__e) {
        var a = i;
        i = void 0, o(u, s, c), i = a;
      }
      l && l.call(this, u, s, c);
    }, p.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function K_(e, _) {
  var t = H(C++, 3);
  !y.__s && n_(t.__H, _) && (t.__ = e, t.i = _, p.__H.__h.push(t));
}
function F_(e, _) {
  var t = H(C++, 4);
  !y.__s && n_(t.__H, _) && (t.__ = e, t.i = _, p.__h.push(t));
}
function Q_(e) {
  return E = 5, t_(function() {
    return { current: e };
  }, []);
}
function X_(e, _, t) {
  E = 6, F_(function() {
    return typeof e == "function" ? (e(_()), function() {
      return e(null);
    }) : e ? (e.current = _(), function() {
      return e.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(e));
}
function t_(e, _) {
  var t = H(C++, 7);
  return n_(t.__H, _) && (t.__ = e(), t.__H = _, t.__h = e), t.__;
}
function Y_(e, _) {
  return E = 8, t_(function() {
    return e;
  }, _);
}
function Z_(e) {
  var _ = p.context[e.__c], t = H(C++, 9);
  return t.c = e, _ ? (t.__ == null && (t.__ = !0, _.sub(p)), _.props.value) : e.__;
}
function _e(e, _) {
  y.useDebugValue && y.useDebugValue(_ ? _(e) : e);
}
function ee(e) {
  var _ = H(C++, 10), t = M_();
  return _.__ = e, p.componentDidCatch || (p.componentDidCatch = function(n, o) {
    _.__ && _.__(n, o), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function te() {
  var e = H(C++, 11);
  if (!e.__) {
    for (var _ = p.__v; _ !== null && !_.__m && _.__ !== null; ) _ = _.__;
    var t = _.__m || (_.__m = [0, 0]);
    e.__ = "P" + t[0] + "-" + t[1]++;
  }
  return e.__;
}
function ne() {
  for (var e; e = D_.shift(); ) if (e.__P && e.__H) try {
    e.__H.__h.forEach(q), e.__H.__h.forEach(Y), e.__H.__h = [];
  } catch (_) {
    e.__H.__h = [], y.__e(_, e.__v);
  }
}
y.__b = function(e) {
  p = null, s_ && s_(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), v_ && v_(e, _);
}, y.__r = function(e) {
  a_ && a_(e), C = 0;
  var _ = (p = e.__c).__H;
  _ && (V === p ? (_.__h = [], p.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (_.__h.forEach(q), _.__h.forEach(Y), _.__h = [], C = 0)), V = p;
}, y.diffed = function(e) {
  p_ && p_(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (D_.push(_) !== 1 && f_ === y.requestAnimationFrame || ((f_ = y.requestAnimationFrame) || oe)(ne)), _.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void 0;
  })), V = p = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(q), t.__h = t.__h.filter(function(n) {
        return !n.__ || Y(n);
      });
    } catch (n) {
      _.some(function(o) {
        o.__h && (o.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), h_ && h_(e, _);
}, y.unmount = function(e) {
  d_ && d_(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      q(n);
    } catch (o) {
      _ = o;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var m_ = typeof requestAnimationFrame == "function";
function oe(e) {
  var _, t = function() {
    clearTimeout(n), m_ && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  m_ && (_ = requestAnimationFrame(t));
}
function q(e) {
  var _ = p, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), p = _;
}
function Y(e) {
  var _ = p;
  e.__c = e.__(), p = _;
}
function n_(e, _) {
  return !e || e.length !== _.length || _.some(function(t, n) {
    return t !== e[n];
  });
}
function L_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
const re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: Y_,
  useContext: Z_,
  useDebugValue: _e,
  useEffect: K_,
  useErrorBoundary: ee,
  useId: te,
  useImperativeHandle: X_,
  useLayoutEffect: F_,
  useMemo: t_,
  useReducer: A_,
  useRef: Q_,
  useState: M_
}, Symbol.toStringTag, { value: "Module" })), fe = /* @__PURE__ */ R(re);
export {
  le as a,
  ce as b,
  fe as c,
  ue as r
};
