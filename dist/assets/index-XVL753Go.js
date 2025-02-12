(function () {
  const M = document.createElement("link").relList;
  if (M && M.supports && M.supports("modulepreload")) return;
  for (const V of document.querySelectorAll('link[rel="modulepreload"]')) ve(V);
  new MutationObserver((V) => {
    for (const W of V)
      if (W.type === "childList")
        for (const Q of W.addedNodes)
          Q.tagName === "LINK" && Q.rel === "modulepreload" && ve(Q);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(V) {
    const W = {};
    return (
      V.integrity && (W.integrity = V.integrity),
      V.referrerPolicy && (W.referrerPolicy = V.referrerPolicy),
      V.crossOrigin === "use-credentials"
        ? (W.credentials = "include")
        : V.crossOrigin === "anonymous"
          ? (W.credentials = "omit")
          : (W.credentials = "same-origin"),
      W
    );
  }
  function ve(V) {
    if (V.ep) return;
    V.ep = !0;
    const W = m(V);
    fetch(V.href, W);
  }
})();
var Ci = { exports: {} },
  yr = {},
  xi = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xa;
function Rc() {
  if (xa) return F;
  xa = 1;
  var P = Symbol.for("react.element"),
    M = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    ve = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    W = Symbol.for("react.provider"),
    Q = Symbol.for("react.context"),
    le = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    ye = Symbol.for("react.memo"),
    pe = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function Z(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (b && f[b]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var Re = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Oe = Object.assign,
    z = {};
  function D(f, v, j) {
    (this.props = f),
      (this.context = v),
      (this.refs = z),
      (this.updater = j || Re);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (f, v) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, v, "setState");
    }),
    (D.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    });
  function U() {}
  U.prototype = D.prototype;
  function ce(f, v, j) {
    (this.props = f),
      (this.context = v),
      (this.refs = z),
      (this.updater = j || Re);
  }
  var Ye = (ce.prototype = new U());
  (Ye.constructor = ce), Oe(Ye, D.prototype), (Ye.isPureReactComponent = !0);
  var Ce = Array.isArray,
    nn = Object.prototype.hasOwnProperty,
    ze = { current: null },
    je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(f, v, j) {
    var I,
      B = {},
      H = null,
      J = null;
    if (v != null)
      for (I in (v.ref !== void 0 && (J = v.ref),
      v.key !== void 0 && (H = "" + v.key),
      v))
        nn.call(v, I) && !je.hasOwnProperty(I) && (B[I] = v[I]);
    var Y = arguments.length - 2;
    if (Y === 1) B.children = j;
    else if (1 < Y) {
      for (var te = Array(Y), He = 0; He < Y; He++) te[He] = arguments[He + 2];
      B.children = te;
    }
    if (f && f.defaultProps)
      for (I in ((Y = f.defaultProps), Y)) B[I] === void 0 && (B[I] = Y[I]);
    return {
      $$typeof: P,
      type: f,
      key: H,
      ref: J,
      props: B,
      _owner: ze.current,
    };
  }
  function Pn(f, v) {
    return {
      $$typeof: P,
      type: f.type,
      key: v,
      ref: f.ref,
      props: f.props,
      _owner: f._owner,
    };
  }
  function gn(f) {
    return typeof f == "object" && f !== null && f.$$typeof === P;
  }
  function Yn(f) {
    var v = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (j) {
        return v[j];
      })
    );
  }
  var cn = /\/+/g;
  function Be(f, v) {
    return typeof f == "object" && f !== null && f.key != null
      ? Yn("" + f.key)
      : v.toString(36);
  }
  function tn(f, v, j, I, B) {
    var H = typeof f;
    (H === "undefined" || H === "boolean") && (f = null);
    var J = !1;
    if (f === null) J = !0;
    else
      switch (H) {
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case P:
            case M:
              J = !0;
          }
      }
    if (J)
      return (
        (J = f),
        (B = B(J)),
        (f = I === "" ? "." + Be(J, 0) : I),
        Ce(B)
          ? ((j = ""),
            f != null && (j = f.replace(cn, "$&/") + "/"),
            tn(B, v, j, "", function (He) {
              return He;
            }))
          : B != null &&
            (gn(B) &&
              (B = Pn(
                B,
                j +
                  (!B.key || (J && J.key === B.key)
                    ? ""
                    : ("" + B.key).replace(cn, "$&/") + "/") +
                  f,
              )),
            v.push(B)),
        1
      );
    if (((J = 0), (I = I === "" ? "." : I + ":"), Ce(f)))
      for (var Y = 0; Y < f.length; Y++) {
        H = f[Y];
        var te = I + Be(H, Y);
        J += tn(H, v, j, te, B);
      }
    else if (((te = Z(f)), typeof te == "function"))
      for (f = te.call(f), Y = 0; !(H = f.next()).done; )
        (H = H.value), (te = I + Be(H, Y++)), (J += tn(H, v, j, te, B));
    else if (H === "object")
      throw (
        ((v = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (v === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : v) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return J;
  }
  function dn(f, v, j) {
    if (f == null) return f;
    var I = [],
      B = 0;
    return (
      tn(f, I, "", "", function (H) {
        return v.call(j, H, B++);
      }),
      I
    );
  }
  function Me(f) {
    if (f._status === -1) {
      var v = f._result;
      (v = v()),
        v.then(
          function (j) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = j));
          },
          function (j) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = j));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = v));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var oe = { current: null },
    k = { transition: null },
    R = {
      ReactCurrentDispatcher: oe,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: ze,
    };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
      map: dn,
      forEach: function (f, v, j) {
        dn(
          f,
          function () {
            v.apply(this, arguments);
          },
          j,
        );
      },
      count: function (f) {
        var v = 0;
        return (
          dn(f, function () {
            v++;
          }),
          v
        );
      },
      toArray: function (f) {
        return (
          dn(f, function (v) {
            return v;
          }) || []
        );
      },
      only: function (f) {
        if (!gn(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    }),
    (F.Component = D),
    (F.Fragment = m),
    (F.Profiler = V),
    (F.PureComponent = ce),
    (F.StrictMode = ve),
    (F.Suspense = K),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
    (F.act = C),
    (F.cloneElement = function (f, v, j) {
      if (f == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            f +
            ".",
        );
      var I = Oe({}, f.props),
        B = f.key,
        H = f.ref,
        J = f._owner;
      if (v != null) {
        if (
          (v.ref !== void 0 && ((H = v.ref), (J = ze.current)),
          v.key !== void 0 && (B = "" + v.key),
          f.type && f.type.defaultProps)
        )
          var Y = f.type.defaultProps;
        for (te in v)
          nn.call(v, te) &&
            !je.hasOwnProperty(te) &&
            (I[te] = v[te] === void 0 && Y !== void 0 ? Y[te] : v[te]);
      }
      var te = arguments.length - 2;
      if (te === 1) I.children = j;
      else if (1 < te) {
        Y = Array(te);
        for (var He = 0; He < te; He++) Y[He] = arguments[He + 2];
        I.children = Y;
      }
      return { $$typeof: P, type: f.type, key: B, ref: H, props: I, _owner: J };
    }),
    (F.createContext = function (f) {
      return (
        (f = {
          $$typeof: Q,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (f.Provider = { $$typeof: W, _context: f }),
        (f.Consumer = f)
      );
    }),
    (F.createElement = Xe),
    (F.createFactory = function (f) {
      var v = Xe.bind(null, f);
      return (v.type = f), v;
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (f) {
      return { $$typeof: le, render: f };
    }),
    (F.isValidElement = gn),
    (F.lazy = function (f) {
      return { $$typeof: pe, _payload: { _status: -1, _result: f }, _init: Me };
    }),
    (F.memo = function (f, v) {
      return { $$typeof: ye, type: f, compare: v === void 0 ? null : v };
    }),
    (F.startTransition = function (f) {
      var v = k.transition;
      k.transition = {};
      try {
        f();
      } finally {
        k.transition = v;
      }
    }),
    (F.unstable_act = C),
    (F.useCallback = function (f, v) {
      return oe.current.useCallback(f, v);
    }),
    (F.useContext = function (f) {
      return oe.current.useContext(f);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (f) {
      return oe.current.useDeferredValue(f);
    }),
    (F.useEffect = function (f, v) {
      return oe.current.useEffect(f, v);
    }),
    (F.useId = function () {
      return oe.current.useId();
    }),
    (F.useImperativeHandle = function (f, v, j) {
      return oe.current.useImperativeHandle(f, v, j);
    }),
    (F.useInsertionEffect = function (f, v) {
      return oe.current.useInsertionEffect(f, v);
    }),
    (F.useLayoutEffect = function (f, v) {
      return oe.current.useLayoutEffect(f, v);
    }),
    (F.useMemo = function (f, v) {
      return oe.current.useMemo(f, v);
    }),
    (F.useReducer = function (f, v, j) {
      return oe.current.useReducer(f, v, j);
    }),
    (F.useRef = function (f) {
      return oe.current.useRef(f);
    }),
    (F.useState = function (f) {
      return oe.current.useState(f);
    }),
    (F.useSyncExternalStore = function (f, v, j) {
      return oe.current.useSyncExternalStore(f, v, j);
    }),
    (F.useTransition = function () {
      return oe.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
var _a;
function zi() {
  return _a || ((_a = 1), (xi.exports = Rc())), xi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Na;
function Oc() {
  if (Na) return yr;
  Na = 1;
  var P = zi(),
    M = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    ve = Object.prototype.hasOwnProperty,
    V = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Q(le, K, ye) {
    var pe,
      b = {},
      Z = null,
      Re = null;
    ye !== void 0 && (Z = "" + ye),
      K.key !== void 0 && (Z = "" + K.key),
      K.ref !== void 0 && (Re = K.ref);
    for (pe in K) ve.call(K, pe) && !W.hasOwnProperty(pe) && (b[pe] = K[pe]);
    if (le && le.defaultProps)
      for (pe in ((K = le.defaultProps), K))
        b[pe] === void 0 && (b[pe] = K[pe]);
    return {
      $$typeof: M,
      type: le,
      key: Z,
      ref: Re,
      props: b,
      _owner: V.current,
    };
  }
  return (yr.Fragment = m), (yr.jsx = Q), (yr.jsxs = Q), yr;
}
var Pa;
function jc() {
  return Pa || ((Pa = 1), (Ci.exports = Oc())), Ci.exports;
}
var G = jc(),
  Ll = zi(),
  zl = {},
  _i = { exports: {} },
  Ve = {},
  Ni = { exports: {} },
  Pi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Mc() {
  return (
    za ||
      ((za = 1),
      (function (P) {
        function M(k, R) {
          var C = k.length;
          k.push(R);
          e: for (; 0 < C; ) {
            var f = (C - 1) >>> 1,
              v = k[f];
            if (0 < V(v, R)) (k[f] = R), (k[C] = v), (C = f);
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function ve(k) {
          if (k.length === 0) return null;
          var R = k[0],
            C = k.pop();
          if (C !== R) {
            k[0] = C;
            e: for (var f = 0, v = k.length, j = v >>> 1; f < j; ) {
              var I = 2 * (f + 1) - 1,
                B = k[I],
                H = I + 1,
                J = k[H];
              if (0 > V(B, C))
                H < v && 0 > V(J, B)
                  ? ((k[f] = J), (k[H] = C), (f = H))
                  : ((k[f] = B), (k[I] = C), (f = I));
              else if (H < v && 0 > V(J, C)) (k[f] = J), (k[H] = C), (f = H);
              else break e;
            }
          }
          return R;
        }
        function V(k, R) {
          var C = k.sortIndex - R.sortIndex;
          return C !== 0 ? C : k.id - R.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var W = performance;
          P.unstable_now = function () {
            return W.now();
          };
        } else {
          var Q = Date,
            le = Q.now();
          P.unstable_now = function () {
            return Q.now() - le;
          };
        }
        var K = [],
          ye = [],
          pe = 1,
          b = null,
          Z = 3,
          Re = !1,
          Oe = !1,
          z = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          U = typeof clearTimeout == "function" ? clearTimeout : null,
          ce = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Ye(k) {
          for (var R = m(ye); R !== null; ) {
            if (R.callback === null) ve(ye);
            else if (R.startTime <= k)
              ve(ye), (R.sortIndex = R.expirationTime), M(K, R);
            else break;
            R = m(ye);
          }
        }
        function Ce(k) {
          if (((z = !1), Ye(k), !Oe))
            if (m(K) !== null) (Oe = !0), Me(nn);
            else {
              var R = m(ye);
              R !== null && oe(Ce, R.startTime - k);
            }
        }
        function nn(k, R) {
          (Oe = !1), z && ((z = !1), U(Xe), (Xe = -1)), (Re = !0);
          var C = Z;
          try {
            for (
              Ye(R), b = m(K);
              b !== null && (!(b.expirationTime > R) || (k && !Yn()));

            ) {
              var f = b.callback;
              if (typeof f == "function") {
                (b.callback = null), (Z = b.priorityLevel);
                var v = f(b.expirationTime <= R);
                (R = P.unstable_now()),
                  typeof v == "function"
                    ? (b.callback = v)
                    : b === m(K) && ve(K),
                  Ye(R);
              } else ve(K);
              b = m(K);
            }
            if (b !== null) var j = !0;
            else {
              var I = m(ye);
              I !== null && oe(Ce, I.startTime - R), (j = !1);
            }
            return j;
          } finally {
            (b = null), (Z = C), (Re = !1);
          }
        }
        var ze = !1,
          je = null,
          Xe = -1,
          Pn = 5,
          gn = -1;
        function Yn() {
          return !(P.unstable_now() - gn < Pn);
        }
        function cn() {
          if (je !== null) {
            var k = P.unstable_now();
            gn = k;
            var R = !0;
            try {
              R = je(!0, k);
            } finally {
              R ? Be() : ((ze = !1), (je = null));
            }
          } else ze = !1;
        }
        var Be;
        if (typeof ce == "function")
          Be = function () {
            ce(cn);
          };
        else if (typeof MessageChannel < "u") {
          var tn = new MessageChannel(),
            dn = tn.port2;
          (tn.port1.onmessage = cn),
            (Be = function () {
              dn.postMessage(null);
            });
        } else
          Be = function () {
            D(cn, 0);
          };
        function Me(k) {
          (je = k), ze || ((ze = !0), Be());
        }
        function oe(k, R) {
          Xe = D(function () {
            k(P.unstable_now());
          }, R);
        }
        (P.unstable_IdlePriority = 5),
          (P.unstable_ImmediatePriority = 1),
          (P.unstable_LowPriority = 4),
          (P.unstable_NormalPriority = 3),
          (P.unstable_Profiling = null),
          (P.unstable_UserBlockingPriority = 2),
          (P.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (P.unstable_continueExecution = function () {
            Oe || Re || ((Oe = !0), Me(nn));
          }),
          (P.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Pn = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (P.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (P.unstable_getFirstCallbackNode = function () {
            return m(K);
          }),
          (P.unstable_next = function (k) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var R = 3;
                break;
              default:
                R = Z;
            }
            var C = Z;
            Z = R;
            try {
              return k();
            } finally {
              Z = C;
            }
          }),
          (P.unstable_pauseExecution = function () {}),
          (P.unstable_requestPaint = function () {}),
          (P.unstable_runWithPriority = function (k, R) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var C = Z;
            Z = k;
            try {
              return R();
            } finally {
              Z = C;
            }
          }),
          (P.unstable_scheduleCallback = function (k, R, C) {
            var f = P.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? f + C : f))
                : (C = f),
              k)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = C + v),
              (k = {
                id: pe++,
                callback: R,
                priorityLevel: k,
                startTime: C,
                expirationTime: v,
                sortIndex: -1,
              }),
              C > f
                ? ((k.sortIndex = C),
                  M(ye, k),
                  m(K) === null &&
                    k === m(ye) &&
                    (z ? (U(Xe), (Xe = -1)) : (z = !0), oe(Ce, C - f)))
                : ((k.sortIndex = v), M(K, k), Oe || Re || ((Oe = !0), Me(nn))),
              k
            );
          }),
          (P.unstable_shouldYield = Yn),
          (P.unstable_wrapCallback = function (k) {
            var R = Z;
            return function () {
              var C = Z;
              Z = R;
              try {
                return k.apply(this, arguments);
              } finally {
                Z = C;
              }
            };
          });
      })(Pi)),
    Pi
  );
}
var La;
function Dc() {
  return La || ((La = 1), (Ni.exports = Mc())), Ni.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function Fc() {
  if (Ta) return Ve;
  Ta = 1;
  var P = zi(),
    M = Dc();
  function m(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var ve = new Set(),
    V = {};
  function W(e, n) {
    Q(e, n), Q(e + "Capture", n);
  }
  function Q(e, n) {
    for (V[e] = n, e = 0; e < n.length; e++) ve.add(n[e]);
  }
  var le = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    K = Object.prototype.hasOwnProperty,
    ye =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pe = {},
    b = {};
  function Z(e) {
    return K.call(b, e)
      ? !0
      : K.call(pe, e)
        ? !1
        : ye.test(e)
          ? (b[e] = !0)
          : ((pe[e] = !0), !1);
  }
  function Re(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
            ? !t.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Oe(e, n, t, r) {
    if (n === null || typeof n > "u" || Re(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function z(e, n, t, r, l, u, i) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = i);
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new z(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      D[n] = new z(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        D[e] = new z(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      D[e] = new z(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new z(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new z(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new z(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new z(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new z(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var U = /[\-:]([a-z])/g;
  function ce(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(U, ce);
      D[n] = new z(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(U, ce);
        D[n] = new z(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(U, ce);
      D[n] = new z(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new z(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Ye(e, n, t, r) {
    var l = D.hasOwnProperty(n) ? D[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (Oe(n, t, l, r) && (t = null),
      r || l === null
        ? Z(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
          ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
          : ((n = l.attributeName),
            (r = l.attributeNamespace),
            t === null
              ? e.removeAttribute(n)
              : ((l = l.type),
                (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Ce = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nn = Symbol.for("react.element"),
    ze = Symbol.for("react.portal"),
    je = Symbol.for("react.fragment"),
    Xe = Symbol.for("react.strict_mode"),
    Pn = Symbol.for("react.profiler"),
    gn = Symbol.for("react.provider"),
    Yn = Symbol.for("react.context"),
    cn = Symbol.for("react.forward_ref"),
    Be = Symbol.for("react.suspense"),
    tn = Symbol.for("react.suspense_list"),
    dn = Symbol.for("react.memo"),
    Me = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = Object.assign,
    f;
  function v(e) {
    if (f === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        f = (n && n[1]) || "";
      }
    return (
      `
` +
      f +
      e
    );
  }
  var j = !1;
  function I(e, n) {
    if (!e || j) return "";
    j = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            i = l.length - 1,
            o = u.length - 1;
          1 <= i && 0 <= o && l[i] !== u[o];

        )
          o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (l[i] !== u[o]) {
            if (i !== 1 || o !== 1)
              do
                if ((i--, o--, 0 > o || l[i] !== u[o])) {
                  var s =
                    `
` + l[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      (j = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = I(e.type, !1)), e;
      case 11:
        return (e = I(e.type.render, !1)), e;
      case 1:
        return (e = I(e.type, !0)), e;
      default:
        return "";
    }
  }
  function H(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case je:
        return "Fragment";
      case ze:
        return "Portal";
      case Pn:
        return "Profiler";
      case Xe:
        return "StrictMode";
      case Be:
        return "Suspense";
      case tn:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yn:
          return (e.displayName || "Context") + ".Consumer";
        case gn:
          return (e._context.displayName || "Context") + ".Provider";
        case cn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case dn:
          return (
            (n = e.displayName || null), n !== null ? n : H(e.type) || "Memo"
          );
        case Me:
          (n = e._payload), (e = e._init);
          try {
            return H(e(n));
          } catch {}
      }
    return null;
  }
  function J(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return H(n);
      case 8:
        return n === Xe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function Y(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function te(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function He(e) {
    var n = te(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        u = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (i) {
            (r = "" + i), u.call(this, i);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = "" + i;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function Li(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function wr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return C({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Ti(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = Y(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Ri(e, n) {
    (n = n.checked), n != null && Ye(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Ri(e, n);
    var t = Y(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ol(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && Ol(e, n.type, Y(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Oi(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function Ol(e, n, t) {
    (n !== "number" || wr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function ot(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + Y(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return C({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function ji(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: Y(t) };
  }
  function Mi(e, n) {
    var t = Y(n.value),
      r = Y(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function Di(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function Fi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Fi(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var kr,
    Ii = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          kr = kr || document.createElement("div"),
            kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = kr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function jt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Mt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ma = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function (e) {
    Ma.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Mt[n] = Mt[e]);
    });
  });
  function Ui(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (Mt.hasOwnProperty(e) && Mt[e])
        ? ("" + n).trim()
        : n + "px";
  }
  function Ai(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = Ui(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var Da = C(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Dl(e, n) {
    if (n) {
      if (Da[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Il = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    st = null,
    at = null;
  function Vi(e) {
    if ((e = tr(e))) {
      if (typeof Al != "function") throw Error(m(280));
      var n = e.stateNode;
      n && ((n = $r(n)), Al(e.stateNode, e.type, n));
    }
  }
  function Bi(e) {
    st ? (at ? at.push(e) : (at = [e])) : (st = e);
  }
  function Hi() {
    if (st) {
      var e = st,
        n = at;
      if (((at = st = null), Vi(e), n)) for (e = 0; e < n.length; e++) Vi(n[e]);
    }
  }
  function $i(e, n) {
    return e(n);
  }
  function Wi() {}
  var Vl = !1;
  function Qi(e, n, t) {
    if (Vl) return e(n, t);
    Vl = !0;
    try {
      return $i(e, n, t);
    } finally {
      (Vl = !1), (st !== null || at !== null) && (Wi(), Hi());
    }
  }
  function Dt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = $r(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Bl = !1;
  if (le)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", Ft, Ft),
        window.removeEventListener("test", Ft, Ft);
    } catch {
      Bl = !1;
    }
  function Fa(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var It = !1,
    Sr = null,
    Er = !1,
    Hl = null,
    Ia = {
      onError: function (e) {
        (It = !0), (Sr = e);
      },
    };
  function Ua(e, n, t, r, l, u, i, o, s) {
    (It = !1), (Sr = null), Fa.apply(Ia, arguments);
  }
  function Aa(e, n, t, r, l, u, i, o, s) {
    if ((Ua.apply(this, arguments), It)) {
      if (It) {
        var p = Sr;
        (It = !1), (Sr = null);
      } else throw Error(m(198));
      Er || ((Er = !0), (Hl = p));
    }
  }
  function Xn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Ki(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Yi(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Va(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Xn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Yi(l), e;
          if (u === r) return Yi(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = u);
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            (i = !0), (t = l), (r = u);
            break;
          }
          if (o === r) {
            (i = !0), (r = l), (t = u);
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              (i = !0), (t = u), (r = l);
              break;
            }
            if (o === r) {
              (i = !0), (r = u), (t = l);
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Xi(e) {
    return (e = Va(e)), e !== null ? Gi(e) : null;
  }
  function Gi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Gi(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Zi = M.unstable_scheduleCallback,
    Ji = M.unstable_cancelCallback,
    Ba = M.unstable_shouldYield,
    Ha = M.unstable_requestPaint,
    ae = M.unstable_now,
    $a = M.unstable_getCurrentPriorityLevel,
    $l = M.unstable_ImmediatePriority,
    qi = M.unstable_UserBlockingPriority,
    Cr = M.unstable_NormalPriority,
    Wa = M.unstable_LowPriority,
    bi = M.unstable_IdlePriority,
    xr = null,
    pn = null;
  function Qa(e) {
    if (pn && typeof pn.onCommitFiberRoot == "function")
      try {
        pn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var rn = Math.clz32 ? Math.clz32 : Xa,
    Ka = Math.log,
    Ya = Math.LN2;
  function Xa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ka(e) / Ya) | 0)) | 0;
  }
  var _r = 64,
    Nr = 4194304;
  function Ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Pr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? (r = Ut(o)) : ((u &= i), u !== 0 && (r = Ut(u)));
    } else (i = t & ~l), i !== 0 ? (r = Ut(i)) : u !== 0 && (r = Ut(u));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - rn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Ga(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Za(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var i = 31 - rn(u),
        o = 1 << i,
        s = l[i];
      s === -1
        ? (!(o & t) || o & r) && (l[i] = Ga(o, n))
        : s <= n && (e.expiredLanes |= o),
        (u &= ~o);
    }
  }
  function Wl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function eo() {
    var e = _r;
    return (_r <<= 1), !(_r & 4194240) && (_r = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - rn(n)),
      (e[n] = t);
  }
  function Ja(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - rn(t),
        u = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
    }
  }
  function Kl(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - rn(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var X = 0;
  function no(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var to,
    Yl,
    ro,
    lo,
    uo,
    Xl = !1,
    zr = [],
    zn = null,
    Ln = null,
    Tn = null,
    Vt = new Map(),
    Bt = new Map(),
    Rn = [],
    qa =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function io(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = tr(n)), n !== null && Yl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function ba(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (zn = Ht(zn, e, n, t, r, l)), !0;
      case "dragenter":
        return (Ln = Ht(Ln, e, n, t, r, l)), !0;
      case "mouseover":
        return (Tn = Ht(Tn, e, n, t, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Vt.set(u, Ht(Vt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Bt.set(u, Ht(Bt.get(u) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function oo(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Ki(t)), n !== null)) {
            (e.blockedOn = n),
              uo(e.priority, function () {
                ro(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (Il = r), t.target.dispatchEvent(r), (Il = null);
      } else return (n = tr(t)), n !== null && Yl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function so(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function ef() {
    (Xl = !1),
      zn !== null && Lr(zn) && (zn = null),
      Ln !== null && Lr(Ln) && (Ln = null),
      Tn !== null && Lr(Tn) && (Tn = null),
      Vt.forEach(so),
      Bt.forEach(so);
  }
  function $t(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        M.unstable_scheduleCallback(M.unstable_NormalPriority, ef)));
  }
  function Wt(e) {
    function n(l) {
      return $t(l, e);
    }
    if (0 < zr.length) {
      $t(zr[0], e);
      for (var t = 1; t < zr.length; t++) {
        var r = zr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zn !== null && $t(zn, e),
        Ln !== null && $t(Ln, e),
        Tn !== null && $t(Tn, e),
        Vt.forEach(n),
        Bt.forEach(n),
        t = 0;
      t < Rn.length;
      t++
    )
      (r = Rn[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && ((t = Rn[0]), t.blockedOn === null); )
      oo(t), t.blockedOn === null && Rn.shift();
  }
  var ft = Ce.ReactCurrentBatchConfig,
    Tr = !0;
  function nf(e, n, t, r) {
    var l = X,
      u = ft.transition;
    ft.transition = null;
    try {
      (X = 1), Gl(e, n, t, r);
    } finally {
      (X = l), (ft.transition = u);
    }
  }
  function tf(e, n, t, r) {
    var l = X,
      u = ft.transition;
    ft.transition = null;
    try {
      (X = 4), Gl(e, n, t, r);
    } finally {
      (X = l), (ft.transition = u);
    }
  }
  function Gl(e, n, t, r) {
    if (Tr) {
      var l = Zl(e, n, t, r);
      if (l === null) pu(e, n, r, Rr, t), io(e, r);
      else if (ba(l, e, n, t, r)) r.stopPropagation();
      else if ((io(e, r), n & 4 && -1 < qa.indexOf(e))) {
        for (; l !== null; ) {
          var u = tr(l);
          if (
            (u !== null && to(u),
            (u = Zl(e, n, t, r)),
            u === null && pu(e, n, r, Rr, t),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else pu(e, n, r, null, t);
    }
  }
  var Rr = null;
  function Zl(e, n, t, r) {
    if (((Rr = null), (e = Ul(r)), (e = Gn(e)), e !== null))
      if (((n = Xn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Ki(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Rr = e), null;
  }
  function ao(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch ($a()) {
          case $l:
            return 1;
          case qi:
            return 4;
          case Cr:
          case Wa:
            return 16;
          case bi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null,
    Jl = null,
    Or = null;
  function fo() {
    if (Or) return Or;
    var e,
      n = Jl,
      t = n.length,
      r,
      l = "value" in On ? On.value : On.textContent,
      u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++);
    return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function jr(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Mr() {
    return !0;
  }
  function co() {
    return !1;
  }
  function $e(e) {
    function n(t, r, l, u, i) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null);
      for (var o in e)
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Mr
          : co),
        (this.isPropagationStopped = co),
        this
      );
    }
    return (
      C(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Mr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Mr));
        },
        persist: function () {},
        isPersistent: Mr,
      }),
      n
    );
  }
  var ct = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = $e(ct),
    Qt = C({}, ct, { view: 0, detail: 0 }),
    rf = $e(Qt),
    bl,
    eu,
    Kt,
    Dr = C({}, Qt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Kt &&
              (Kt && e.type === "mousemove"
                ? ((bl = e.screenX - Kt.screenX), (eu = e.screenY - Kt.screenY))
                : (eu = bl = 0),
              (Kt = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eu;
      },
    }),
    po = $e(Dr),
    lf = C({}, Dr, { dataTransfer: 0 }),
    uf = $e(lf),
    of = C({}, Qt, { relatedTarget: 0 }),
    nu = $e(of),
    sf = C({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    af = $e(sf),
    ff = C({}, ct, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    cf = $e(ff),
    df = C({}, ct, { data: 0 }),
    mo = $e(df),
    pf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    mf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    hf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function vf(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = hf[e])
        ? !!n[e]
        : !1;
  }
  function tu() {
    return vf;
  }
  var yf = C({}, Qt, {
      key: function (e) {
        if (e.key) {
          var n = pf[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? mf[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tu,
      charCode: function (e) {
        return e.type === "keypress" ? jr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? jr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    gf = $e(yf),
    wf = C({}, Dr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ho = $e(wf),
    kf = C({}, Qt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    Sf = $e(kf),
    Ef = C({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cf = $e(Ef),
    xf = C({}, Dr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    _f = $e(xf),
    Nf = [9, 13, 27, 32],
    ru = le && "CompositionEvent" in window,
    Yt = null;
  le && "documentMode" in document && (Yt = document.documentMode);
  var Pf = le && "TextEvent" in window && !Yt,
    vo = le && (!ru || (Yt && 8 < Yt && 11 >= Yt)),
    yo = " ",
    go = !1;
  function wo(e, n) {
    switch (e) {
      case "keyup":
        return Nf.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ko(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function zf(e, n) {
    switch (e) {
      case "compositionend":
        return ko(n);
      case "keypress":
        return n.which !== 32 ? null : ((go = !0), yo);
      case "textInput":
        return (e = n.data), e === yo && go ? null : e;
      default:
        return null;
    }
  }
  function Lf(e, n) {
    if (dt)
      return e === "compositionend" || (!ru && wo(e, n))
        ? ((e = fo()), (Or = Jl = On = null), (dt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return vo && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Tf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function So(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Tf[e.type] : n === "textarea";
  }
  function Eo(e, n, t, r) {
    Bi(r),
      (n = Vr(n, "onChange")),
      0 < n.length &&
        ((t = new ql("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Xt = null,
    Gt = null;
  function Rf(e) {
    Vo(e, 0);
  }
  function Fr(e) {
    var n = yt(e);
    if (Li(n)) return e;
  }
  function Of(e, n) {
    if (e === "change") return n;
  }
  var Co = !1;
  if (le) {
    var lu;
    if (le) {
      var uu = "oninput" in document;
      if (!uu) {
        var xo = document.createElement("div");
        xo.setAttribute("oninput", "return;"),
          (uu = typeof xo.oninput == "function");
      }
      lu = uu;
    } else lu = !1;
    Co = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function _o() {
    Xt && (Xt.detachEvent("onpropertychange", No), (Gt = Xt = null));
  }
  function No(e) {
    if (e.propertyName === "value" && Fr(Gt)) {
      var n = [];
      Eo(n, Gt, e, Ul(e)), Qi(Rf, n);
    }
  }
  function jf(e, n, t) {
    e === "focusin"
      ? (_o(), (Xt = n), (Gt = t), Xt.attachEvent("onpropertychange", No))
      : e === "focusout" && _o();
  }
  function Mf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fr(Gt);
  }
  function Df(e, n) {
    if (e === "click") return Fr(n);
  }
  function Ff(e, n) {
    if (e === "input" || e === "change") return Fr(n);
  }
  function If(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var ln = typeof Object.is == "function" ? Object.is : If;
  function Zt(e, n) {
    if (ln(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!K.call(n, l) || !ln(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Po(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zo(e, n) {
    var t = Po(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Po(t);
    }
  }
  function Lo(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Lo(e, n.parentNode)
            : "contains" in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function To() {
    for (var e = window, n = wr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = wr(e.document);
    }
    return n;
  }
  function iu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Uf(e) {
    var n = To(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Lo(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && iu(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = zo(t, u));
          var i = zo(t, r);
          l &&
            i &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(i.node, i.offset))
              : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Af = le && "documentMode" in document && 11 >= document.documentMode,
    pt = null,
    ou = null,
    Jt = null,
    su = !1;
  function Ro(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    su ||
      pt == null ||
      pt !== wr(r) ||
      ((r = pt),
      "selectionStart" in r && iu(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Jt && Zt(Jt, r)) ||
        ((Jt = r),
        (r = Vr(ou, "onSelect")),
        0 < r.length &&
          ((n = new ql("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = pt))));
  }
  function Ir(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var mt = {
      animationend: Ir("Animation", "AnimationEnd"),
      animationiteration: Ir("Animation", "AnimationIteration"),
      animationstart: Ir("Animation", "AnimationStart"),
      transitionend: Ir("Transition", "TransitionEnd"),
    },
    au = {},
    Oo = {};
  le &&
    ((Oo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mt.animationend.animation,
      delete mt.animationiteration.animation,
      delete mt.animationstart.animation),
    "TransitionEvent" in window || delete mt.transitionend.transition);
  function Ur(e) {
    if (au[e]) return au[e];
    if (!mt[e]) return e;
    var n = mt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Oo) return (au[e] = n[t]);
    return e;
  }
  var jo = Ur("animationend"),
    Mo = Ur("animationiteration"),
    Do = Ur("animationstart"),
    Fo = Ur("transitionend"),
    Io = new Map(),
    Uo =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function jn(e, n) {
    Io.set(e, n), W(n, [e]);
  }
  for (var fu = 0; fu < Uo.length; fu++) {
    var cu = Uo[fu],
      Vf = cu.toLowerCase(),
      Bf = cu[0].toUpperCase() + cu.slice(1);
    jn(Vf, "on" + Bf);
  }
  jn(jo, "onAnimationEnd"),
    jn(Mo, "onAnimationIteration"),
    jn(Do, "onAnimationStart"),
    jn("dblclick", "onDoubleClick"),
    jn("focusin", "onFocus"),
    jn("focusout", "onBlur"),
    jn(Fo, "onTransitionEnd"),
    Q("onMouseEnter", ["mouseout", "mouseover"]),
    Q("onMouseLeave", ["mouseout", "mouseover"]),
    Q("onPointerEnter", ["pointerout", "pointerover"]),
    Q("onPointerLeave", ["pointerout", "pointerover"]),
    W(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    W(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    W("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    W(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    W(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    W(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var qt =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Hf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(qt),
    );
  function Ao(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Aa(r, n, void 0, e), (e.currentTarget = null);
  }
  function Vo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var i = r.length - 1; 0 <= i; i--) {
            var o = r[i],
              s = o.instance,
              p = o.currentTarget;
            if (((o = o.listener), s !== u && l.isPropagationStopped()))
              break e;
            Ao(l, o, p), (u = s);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((o = r[i]),
              (s = o.instance),
              (p = o.currentTarget),
              (o = o.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            Ao(l, o, p), (u = s);
          }
      }
    }
    if (Er) throw ((e = Hl), (Er = !1), (Hl = null), e);
  }
  function ee(e, n) {
    var t = n[wu];
    t === void 0 && (t = n[wu] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Bo(n, e, 2, !1), t.add(r));
  }
  function du(e, n, t) {
    var r = 0;
    n && (r |= 4), Bo(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      (e[Ar] = !0),
        ve.forEach(function (t) {
          t !== "selectionchange" && (Hf.has(t) || du(t, !1, e), du(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || ((n[Ar] = !0), du("selectionchange", !1, n));
    }
  }
  function Bo(e, n, t, r) {
    switch (ao(n)) {
      case 1:
        var l = nf;
        break;
      case 4:
        l = tf;
        break;
      default:
        l = Gl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Bl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
          ? e.addEventListener(n, t, { passive: l })
          : e.addEventListener(n, t, !1);
  }
  function pu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
          var o = r.stateNode.containerInfo;
          if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
          if (i === 4)
            for (i = r.return; i !== null; ) {
              var s = i.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = i.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = Gn(o)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6)) {
              r = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        r = r.return;
      }
    Qi(function () {
      var p = u,
        y = Ul(t),
        g = [];
      e: {
        var h = Io.get(e);
        if (h !== void 0) {
          var S = ql,
            x = e;
          switch (e) {
            case "keypress":
              if (jr(t) === 0) break e;
            case "keydown":
            case "keyup":
              S = gf;
              break;
            case "focusin":
              (x = "focus"), (S = nu);
              break;
            case "focusout":
              (x = "blur"), (S = nu);
              break;
            case "beforeblur":
            case "afterblur":
              S = nu;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = po;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = uf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Sf;
              break;
            case jo:
            case Mo:
            case Do:
              S = af;
              break;
            case Fo:
              S = Cf;
              break;
            case "scroll":
              S = rf;
              break;
            case "wheel":
              S = _f;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = cf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = ho;
          }
          var _ = (n & 4) !== 0,
            fe = !_ && e === "scroll",
            c = _ ? (h !== null ? h + "Capture" : null) : h;
          _ = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                c !== null &&
                  ((w = Dt(a, c)), w != null && _.push(er(a, w, d)))),
              fe)
            )
              break;
            a = a.return;
          }
          0 < _.length &&
            ((h = new S(h, x, null, t, y)), g.push({ event: h, listeners: _ }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            h &&
              t !== Il &&
              (x = t.relatedTarget || t.fromElement) &&
              (Gn(x) || x[wn]))
          )
            break e;
          if (
            (S || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            S
              ? ((x = t.relatedTarget || t.toElement),
                (S = p),
                (x = x ? Gn(x) : null),
                x !== null &&
                  ((fe = Xn(x)), x !== fe || (x.tag !== 5 && x.tag !== 6)) &&
                  (x = null))
              : ((S = null), (x = p)),
            S !== x)
          ) {
            if (
              ((_ = po),
              (w = "onMouseLeave"),
              (c = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_ = ho),
                (w = "onPointerLeave"),
                (c = "onPointerEnter"),
                (a = "pointer")),
              (fe = S == null ? h : yt(S)),
              (d = x == null ? h : yt(x)),
              (h = new _(w, a + "leave", S, t, y)),
              (h.target = fe),
              (h.relatedTarget = d),
              (w = null),
              Gn(y) === p &&
                ((_ = new _(c, a + "enter", x, t, y)),
                (_.target = d),
                (_.relatedTarget = fe),
                (w = _)),
              (fe = w),
              S && x)
            )
              n: {
                for (_ = S, c = x, a = 0, d = _; d; d = ht(d)) a++;
                for (d = 0, w = c; w; w = ht(w)) d++;
                for (; 0 < a - d; ) (_ = ht(_)), a--;
                for (; 0 < d - a; ) (c = ht(c)), d--;
                for (; a--; ) {
                  if (_ === c || (c !== null && _ === c.alternate)) break n;
                  (_ = ht(_)), (c = ht(c));
                }
                _ = null;
              }
            else _ = null;
            S !== null && Ho(g, h, S, _, !1),
              x !== null && fe !== null && Ho(g, fe, x, _, !0);
          }
        }
        e: {
          if (
            ((h = p ? yt(p) : window),
            (S = h.nodeName && h.nodeName.toLowerCase()),
            S === "select" || (S === "input" && h.type === "file"))
          )
            var N = Of;
          else if (So(h))
            if (Co) N = Ff;
            else {
              N = Mf;
              var L = jf;
            }
          else
            (S = h.nodeName) &&
              S.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (N = Df);
          if (N && (N = N(e, p))) {
            Eo(g, N, t, y);
            break e;
          }
          L && L(e, h, p),
            e === "focusout" &&
              (L = h._wrapperState) &&
              L.controlled &&
              h.type === "number" &&
              Ol(h, "number", h.value);
        }
        switch (((L = p ? yt(p) : window), e)) {
          case "focusin":
            (So(L) || L.contentEditable === "true") &&
              ((pt = L), (ou = p), (Jt = null));
            break;
          case "focusout":
            Jt = ou = pt = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (su = !1), Ro(g, t, y);
            break;
          case "selectionchange":
            if (Af) break;
          case "keydown":
          case "keyup":
            Ro(g, t, y);
        }
        var T;
        if (ru)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          dt
            ? wo(e, t) && (O = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (O = "onCompositionStart");
        O &&
          (vo &&
            t.locale !== "ko" &&
            (dt || O !== "onCompositionStart"
              ? O === "onCompositionEnd" && dt && (T = fo())
              : ((On = y),
                (Jl = "value" in On ? On.value : On.textContent),
                (dt = !0))),
          (L = Vr(p, O)),
          0 < L.length &&
            ((O = new mo(O, e, null, t, y)),
            g.push({ event: O, listeners: L }),
            T ? (O.data = T) : ((T = ko(t)), T !== null && (O.data = T)))),
          (T = Pf ? zf(e, t) : Lf(e, t)) &&
            ((p = Vr(p, "onBeforeInput")),
            0 < p.length &&
              ((y = new mo("onBeforeInput", "beforeinput", null, t, y)),
              g.push({ event: y, listeners: p }),
              (y.data = T)));
      }
      Vo(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Dt(e, t)),
        u != null && r.unshift(er(e, u, l)),
        (u = Dt(e, n)),
        u != null && r.push(er(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ho(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t,
        s = o.alternate,
        p = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 &&
        p !== null &&
        ((o = p),
        l
          ? ((s = Dt(t, u)), s != null && i.unshift(er(t, s, o)))
          : l || ((s = Dt(t, u)), s != null && i.push(er(t, s, o)))),
        (t = t.return);
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var $f = /\r\n?/g,
    Wf = /\u0000|\uFFFD/g;
  function $o(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        $f,
        `
`,
      )
      .replace(Wf, "");
  }
  function Br(e, n, t) {
    if (((n = $o(n)), $o(e) !== n && t)) throw Error(m(425));
  }
  function Hr() {}
  var mu = null,
    hu = null;
  function vu(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yu = typeof setTimeout == "function" ? setTimeout : void 0,
    Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Wo = typeof Promise == "function" ? Promise : void 0,
    Kf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Wo < "u"
          ? function (e) {
              return Wo.resolve(null).then(e).catch(Yf);
            }
          : yu;
  function Yf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gu(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Wt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Qo(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2),
    mn = "__reactFiber$" + vt,
    nr = "__reactProps$" + vt,
    wn = "__reactContainer$" + vt,
    wu = "__reactEvents$" + vt,
    Xf = "__reactListeners$" + vt,
    Gf = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[mn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[wn] || t[mn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Qo(e); e !== null; ) {
            if ((t = e[mn])) return t;
            e = Qo(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function tr(e) {
    return (
      (e = e[mn] || e[wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var ku = [],
    gt = -1;
  function Dn(e) {
    return { current: e };
  }
  function ne(e) {
    0 > gt || ((e.current = ku[gt]), (ku[gt] = null), gt--);
  }
  function q(e, n) {
    gt++, (ku[gt] = e.current), (e.current = n);
  }
  var Fn = {},
    xe = Dn(Fn),
    De = Dn(!1),
    Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in t) l[u] = n[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Fe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Wr() {
    ne(De), ne(xe);
  }
  function Ko(e, n, t) {
    if (xe.current !== Fn) throw Error(m(168));
    q(xe, n), q(De, t);
  }
  function Yo(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, J(e) || "Unknown", l));
    return C({}, t, r);
  }
  function Qr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (Zn = xe.current),
      q(xe, e),
      q(De, De.current),
      !0
    );
  }
  function Xo(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Yo(e, n, Zn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ne(De),
        ne(xe),
        q(xe, e))
      : ne(De),
      q(De, t);
  }
  var kn = null,
    Kr = !1,
    Su = !1;
  function Go(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Zf(e) {
    (Kr = !0), Go(e);
  }
  function In() {
    if (!Su && kn !== null) {
      Su = !0;
      var e = 0,
        n = X;
      try {
        var t = kn;
        for (X = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (kn = null), (Kr = !1);
      } catch (l) {
        throw (kn !== null && (kn = kn.slice(e + 1)), Zi($l, In), l);
      } finally {
        (X = n), (Su = !1);
      }
    }
    return null;
  }
  var kt = [],
    St = 0,
    Yr = null,
    Xr = 0,
    Ge = [],
    Ze = 0,
    Jn = null,
    Sn = 1,
    En = "";
  function qn(e, n) {
    (kt[St++] = Xr), (kt[St++] = Yr), (Yr = e), (Xr = n);
  }
  function Zo(e, n, t) {
    (Ge[Ze++] = Sn), (Ge[Ze++] = En), (Ge[Ze++] = Jn), (Jn = e);
    var r = Sn;
    e = En;
    var l = 32 - rn(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var u = 32 - rn(n) + l;
    if (30 < u) {
      var i = l - (l % 5);
      (u = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (l -= i),
        (Sn = (1 << (32 - rn(n) + l)) | (t << l) | r),
        (En = u + e);
    } else (Sn = (1 << u) | (t << l) | r), (En = e);
  }
  function Eu(e) {
    e.return !== null && (qn(e, 1), Zo(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Yr; )
      (Yr = kt[--St]), (kt[St] = null), (Xr = kt[--St]), (kt[St] = null);
    for (; e === Jn; )
      (Jn = Ge[--Ze]),
        (Ge[Ze] = null),
        (En = Ge[--Ze]),
        (Ge[Ze] = null),
        (Sn = Ge[--Ze]),
        (Ge[Ze] = null);
  }
  var We = null,
    Qe = null,
    re = !1,
    un = null;
  function Jo(e, n) {
    var t = en(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function qo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (We = e), (Qe = Mn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (We = e), (Qe = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = Jn !== null ? { id: Sn, overflow: En } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = en(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (We = e),
              (Qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function xu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _u(e) {
    if (re) {
      var n = Qe;
      if (n) {
        var t = n;
        if (!qo(e, n)) {
          if (xu(e)) throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = We;
          n && qo(e, n)
            ? Jo(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (re = !1), (We = e));
        }
      } else {
        if (xu(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (re = !1), (We = e);
      }
    }
  }
  function bo(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    We = e;
  }
  function Gr(e) {
    if (e !== We) return !1;
    if (!re) return bo(e), (re = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !vu(e.type, e.memoizedProps))),
      n && (n = Qe))
    ) {
      if (xu(e)) throw (es(), Error(m(418)));
      for (; n; ) Jo(e, n), (n = Mn(n.nextSibling));
    }
    if ((bo(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Qe = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else Qe = We ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = Qe; e; ) e = Mn(e.nextSibling);
  }
  function Et() {
    (Qe = We = null), (re = !1);
  }
  function Nu(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  var Jf = Ce.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (i) {
              var o = l.refs;
              i === null ? delete o[u] : (o[u] = i);
            }),
            (n._stringRef = u),
            n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function ns(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ts(e) {
    function n(c, a) {
      if (e) {
        var d = c.deletions;
        d === null ? ((c.deletions = [a]), (c.flags |= 16)) : d.push(a);
      }
    }
    function t(c, a) {
      if (!e) return null;
      for (; a !== null; ) n(c, a), (a = a.sibling);
      return null;
    }
    function r(c, a) {
      for (c = new Map(); a !== null; )
        a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
      return c;
    }
    function l(c, a) {
      return (c = Qn(c, a)), (c.index = 0), (c.sibling = null), c;
    }
    function u(c, a, d) {
      return (
        (c.index = d),
        e
          ? ((d = c.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((c.flags |= 2), a) : d)
              : ((c.flags |= 2), a))
          : ((c.flags |= 1048576), a)
      );
    }
    function i(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function o(c, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = yi(d, c.mode, w)), (a.return = c), a)
        : ((a = l(a, d)), (a.return = c), a);
    }
    function s(c, a, d, w) {
      var N = d.type;
      return N === je
        ? y(c, a, d.props.children, w, d.key)
        : a !== null &&
            (a.elementType === N ||
              (typeof N == "object" &&
                N !== null &&
                N.$$typeof === Me &&
                ns(N) === a.type))
          ? ((w = l(a, d.props)), (w.ref = rr(c, a, d)), (w.return = c), w)
          : ((w = kl(d.type, d.key, d.props, null, c.mode, w)),
            (w.ref = rr(c, a, d)),
            (w.return = c),
            w);
    }
    function p(c, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = gi(d, c.mode, w)), (a.return = c), a)
        : ((a = l(a, d.children || [])), (a.return = c), a);
    }
    function y(c, a, d, w, N) {
      return a === null || a.tag !== 7
        ? ((a = it(d, c.mode, w, N)), (a.return = c), a)
        : ((a = l(a, d)), (a.return = c), a);
    }
    function g(c, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = yi("" + a, c.mode, d)), (a.return = c), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case nn:
            return (
              (d = kl(a.type, a.key, a.props, null, c.mode, d)),
              (d.ref = rr(c, null, a)),
              (d.return = c),
              d
            );
          case ze:
            return (a = gi(a, c.mode, d)), (a.return = c), a;
          case Me:
            var w = a._init;
            return g(c, w(a._payload), d);
        }
        if (Ot(a) || R(a))
          return (a = it(a, c.mode, d, null)), (a.return = c), a;
        Zr(c, a);
      }
      return null;
    }
    function h(c, a, d, w) {
      var N = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return N !== null ? null : o(c, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case nn:
            return d.key === N ? s(c, a, d, w) : null;
          case ze:
            return d.key === N ? p(c, a, d, w) : null;
          case Me:
            return (N = d._init), h(c, a, N(d._payload), w);
        }
        if (Ot(d) || R(d)) return N !== null ? null : y(c, a, d, w, null);
        Zr(c, d);
      }
      return null;
    }
    function S(c, a, d, w, N) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (c = c.get(d) || null), o(a, c, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case nn:
            return (
              (c = c.get(w.key === null ? d : w.key) || null), s(a, c, w, N)
            );
          case ze:
            return (
              (c = c.get(w.key === null ? d : w.key) || null), p(a, c, w, N)
            );
          case Me:
            var L = w._init;
            return S(c, a, d, L(w._payload), N);
        }
        if (Ot(w) || R(w)) return (c = c.get(d) || null), y(a, c, w, N, null);
        Zr(a, w);
      }
      return null;
    }
    function x(c, a, d, w) {
      for (
        var N = null, L = null, T = a, O = (a = 0), ke = null;
        T !== null && O < d.length;
        O++
      ) {
        T.index > O ? ((ke = T), (T = null)) : (ke = T.sibling);
        var $ = h(c, T, d[O], w);
        if ($ === null) {
          T === null && (T = ke);
          break;
        }
        e && T && $.alternate === null && n(c, T),
          (a = u($, a, O)),
          L === null ? (N = $) : (L.sibling = $),
          (L = $),
          (T = ke);
      }
      if (O === d.length) return t(c, T), re && qn(c, O), N;
      if (T === null) {
        for (; O < d.length; O++)
          (T = g(c, d[O], w)),
            T !== null &&
              ((a = u(T, a, O)),
              L === null ? (N = T) : (L.sibling = T),
              (L = T));
        return re && qn(c, O), N;
      }
      for (T = r(c, T); O < d.length; O++)
        (ke = S(T, c, O, d[O], w)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              T.delete(ke.key === null ? O : ke.key),
            (a = u(ke, a, O)),
            L === null ? (N = ke) : (L.sibling = ke),
            (L = ke));
      return (
        e &&
          T.forEach(function (Kn) {
            return n(c, Kn);
          }),
        re && qn(c, O),
        N
      );
    }
    function _(c, a, d, w) {
      var N = R(d);
      if (typeof N != "function") throw Error(m(150));
      if (((d = N.call(d)), d == null)) throw Error(m(151));
      for (
        var L = (N = null), T = a, O = (a = 0), ke = null, $ = d.next();
        T !== null && !$.done;
        O++, $ = d.next()
      ) {
        T.index > O ? ((ke = T), (T = null)) : (ke = T.sibling);
        var Kn = h(c, T, $.value, w);
        if (Kn === null) {
          T === null && (T = ke);
          break;
        }
        e && T && Kn.alternate === null && n(c, T),
          (a = u(Kn, a, O)),
          L === null ? (N = Kn) : (L.sibling = Kn),
          (L = Kn),
          (T = ke);
      }
      if ($.done) return t(c, T), re && qn(c, O), N;
      if (T === null) {
        for (; !$.done; O++, $ = d.next())
          ($ = g(c, $.value, w)),
            $ !== null &&
              ((a = u($, a, O)),
              L === null ? (N = $) : (L.sibling = $),
              (L = $));
        return re && qn(c, O), N;
      }
      for (T = r(c, T); !$.done; O++, $ = d.next())
        ($ = S(T, c, O, $.value, w)),
          $ !== null &&
            (e && $.alternate !== null && T.delete($.key === null ? O : $.key),
            (a = u($, a, O)),
            L === null ? (N = $) : (L.sibling = $),
            (L = $));
      return (
        e &&
          T.forEach(function (Tc) {
            return n(c, Tc);
          }),
        re && qn(c, O),
        N
      );
    }
    function fe(c, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === je &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case nn:
            e: {
              for (var N = d.key, L = a; L !== null; ) {
                if (L.key === N) {
                  if (((N = d.type), N === je)) {
                    if (L.tag === 7) {
                      t(c, L.sibling),
                        (a = l(L, d.props.children)),
                        (a.return = c),
                        (c = a);
                      break e;
                    }
                  } else if (
                    L.elementType === N ||
                    (typeof N == "object" &&
                      N !== null &&
                      N.$$typeof === Me &&
                      ns(N) === L.type)
                  ) {
                    t(c, L.sibling),
                      (a = l(L, d.props)),
                      (a.ref = rr(c, L, d)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                  t(c, L);
                  break;
                } else n(c, L);
                L = L.sibling;
              }
              d.type === je
                ? ((a = it(d.props.children, c.mode, w, d.key)),
                  (a.return = c),
                  (c = a))
                : ((w = kl(d.type, d.key, d.props, null, c.mode, w)),
                  (w.ref = rr(c, a, d)),
                  (w.return = c),
                  (c = w));
            }
            return i(c);
          case ze:
            e: {
              for (L = d.key; a !== null; ) {
                if (a.key === L)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(c, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = c),
                      (c = a);
                    break e;
                  } else {
                    t(c, a);
                    break;
                  }
                else n(c, a);
                a = a.sibling;
              }
              (a = gi(d, c.mode, w)), (a.return = c), (c = a);
            }
            return i(c);
          case Me:
            return (L = d._init), fe(c, a, L(d._payload), w);
        }
        if (Ot(d)) return x(c, a, d, w);
        if (R(d)) return _(c, a, d, w);
        Zr(c, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (t(c, a.sibling), (a = l(a, d)), (a.return = c), (c = a))
            : (t(c, a), (a = yi(d, c.mode, w)), (a.return = c), (c = a)),
          i(c))
        : t(c, a);
    }
    return fe;
  }
  var Ct = ts(!0),
    rs = ts(!1),
    Jr = Dn(null),
    qr = null,
    xt = null,
    Pu = null;
  function zu() {
    Pu = xt = qr = null;
  }
  function Lu(e) {
    var n = Jr.current;
    ne(Jr), (e._currentValue = n);
  }
  function Tu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function _t(e, n) {
    (qr = e),
      (Pu = xt = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (Ie = !0), (e.firstContext = null));
  }
  function Je(e) {
    var n = e._currentValue;
    if (Pu !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), xt === null)) {
        if (qr === null) throw Error(m(308));
        (xt = e), (qr.dependencies = { lanes: 0, firstContext: e });
      } else xt = xt.next = e;
    return n;
  }
  var bn = null;
  function Ru(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function ls(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Ru(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      Cn(e, r)
    );
  }
  function Cn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Ou(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function xn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), A & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        Cn(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Ru(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      Cn(e, t)
    );
  }
  function br(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  function is(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          u === null ? (l = u = i) : (u = u.next = i), (t = t.next);
        } while (t !== null);
        u === null ? (l = u = n) : (u = u.next = n);
      } else l = u = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function el(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate,
      i = l.lastBaseUpdate,
      o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o,
        p = s.next;
      (s.next = null), i === null ? (u = p) : (i.next = p), (i = s);
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (o = y.lastBaseUpdate),
        o !== i &&
          (o === null ? (y.firstBaseUpdate = p) : (o.next = p),
          (y.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      (i = 0), (y = p = s = null), (o = u);
      do {
        var h = o.lane,
          S = o.eventTime;
        if ((r & h) === h) {
          y !== null &&
            (y = y.next =
              {
                eventTime: S,
                lane: 0,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              });
          e: {
            var x = e,
              _ = o;
            switch (((h = n), (S = t), _.tag)) {
              case 1:
                if (((x = _.payload), typeof x == "function")) {
                  g = x.call(S, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = (x.flags & -65537) | 128;
              case 0:
                if (
                  ((x = _.payload),
                  (h = typeof x == "function" ? x.call(S, g, h) : x),
                  h == null)
                )
                  break e;
                g = C({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          o.callback !== null &&
            o.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [o]) : h.push(o));
        } else
          (S = {
            eventTime: S,
            lane: h,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            y === null ? ((p = y = S), (s = g)) : (y = y.next = S),
            (i |= h);
        if (((o = o.next), o === null)) {
          if (((o = l.shared.pending), o === null)) break;
          (h = o),
            (o = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (y === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = y),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (i |= l.lane), (l = l.next);
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      (tt |= i), (e.lanes = i), (e.memoizedState = g);
    }
  }
  function os(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var lr = {},
    hn = Dn(lr),
    ur = Dn(lr),
    ir = Dn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function ju(e, n) {
    switch ((q(ir, n), q(ur, e), q(hn, lr), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Ml(n, e));
    }
    ne(hn), q(hn, n);
  }
  function Nt() {
    ne(hn), ne(ur), ne(ir);
  }
  function ss(e) {
    et(ir.current);
    var n = et(hn.current),
      t = Ml(n, e.type);
    n !== t && (q(ur, e), q(hn, t));
  }
  function Mu(e) {
    ur.current === e && (ne(hn), ne(ur));
  }
  var ue = Dn(0);
  function nl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Du = [];
  function Fu() {
    for (var e = 0; e < Du.length; e++)
      Du[e]._workInProgressVersionPrimary = null;
    Du.length = 0;
  }
  var tl = Ce.ReactCurrentDispatcher,
    Iu = Ce.ReactCurrentBatchConfig,
    nt = 0,
    ie = null,
    me = null,
    ge = null,
    rl = !1,
    or = !1,
    sr = 0,
    qf = 0;
  function _e() {
    throw Error(m(321));
  }
  function Uu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!ln(e[t], n[t])) return !1;
    return !0;
  }
  function Au(e, n, t, r, l, u) {
    if (
      ((nt = u),
      (ie = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (tl.current = e === null || e.memoizedState === null ? tc : rc),
      (e = t(r, l)),
      or)
    ) {
      u = 0;
      do {
        if (((or = !1), (sr = 0), 25 <= u)) throw Error(m(301));
        (u += 1),
          (ge = me = null),
          (n.updateQueue = null),
          (tl.current = lc),
          (e = t(r, l));
      } while (or);
    }
    if (
      ((tl.current = il),
      (n = me !== null && me.next !== null),
      (nt = 0),
      (ge = me = ie = null),
      (rl = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Vu() {
    var e = sr !== 0;
    return (sr = 0), e;
  }
  function vn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ge === null ? (ie.memoizedState = ge = e) : (ge = ge.next = e), ge;
  }
  function qe() {
    if (me === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = me.next;
    var n = ge === null ? ie.memoizedState : ge.next;
    if (n !== null) (ge = n), (me = e);
    else {
      if (e === null) throw Error(m(310));
      (me = e),
        (e = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        ge === null ? (ie.memoizedState = ge = e) : (ge = ge.next = e);
    }
    return ge;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Bu(e) {
    var n = qe(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = me,
      l = r.baseQueue,
      u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        (l.next = u.next), (u.next = i);
      }
      (r.baseQueue = l = u), (t.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var o = (i = null),
        s = null,
        p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((o = s = g), (i = r)) : (s = s.next = g),
            (ie.lanes |= y),
            (tt |= y);
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? (i = r) : (s.next = o),
        ln(r, n.memoizedState) || (Ie = !0),
        (n.memoizedState = r),
        (n.baseState = i),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (ie.lanes |= u), (tt |= u), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Hu(e) {
    var n = qe(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = (l = l.next);
      do (u = e(u, i.action)), (i = i.next);
      while (i !== l);
      ln(u, n.memoizedState) || (Ie = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u);
    }
    return [u, r];
  }
  function as() {}
  function fs(e, n) {
    var t = ie,
      r = qe(),
      l = n(),
      u = !ln(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      $u(ps.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (ge !== null && ge.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        fr(9, ds.bind(null, t, r, l, n), void 0, null),
        we === null)
      )
        throw Error(m(349));
      nt & 30 || cs(t, n, l);
    }
    return l;
  }
  function cs(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = ie.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ie.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ds(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ms(n) && hs(e);
  }
  function ps(e, n, t) {
    return t(function () {
      ms(n) && hs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !ln(e, t);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var n = Cn(e, 1);
    n !== null && fn(n, e, 1, -1);
  }
  function vs(e) {
    var n = vn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ar,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = nc.bind(null, ie, e)),
      [n.memoizedState, e]
    );
  }
  function fr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = ie.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ie.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function ys() {
    return qe().memoizedState;
  }
  function ll(e, n, t, r) {
    var l = vn();
    (ie.flags |= e),
      (l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function ul(e, n, t, r) {
    var l = qe();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (me !== null) {
      var i = me.memoizedState;
      if (((u = i.destroy), r !== null && Uu(r, i.deps))) {
        l.memoizedState = fr(n, t, u, r);
        return;
      }
    }
    (ie.flags |= e), (l.memoizedState = fr(1 | n, t, u, r));
  }
  function gs(e, n) {
    return ll(8390656, 8, e, n);
  }
  function $u(e, n) {
    return ul(2048, 8, e, n);
  }
  function ws(e, n) {
    return ul(4, 2, e, n);
  }
  function ks(e, n) {
    return ul(4, 4, e, n);
  }
  function Ss(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Es(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), ul(4, 4, Ss.bind(null, n, e), t)
    );
  }
  function Wu() {}
  function Cs(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function xs(e, n) {
    var t = qe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function _s(e, n, t) {
    return nt & 21
      ? (ln(t, n) ||
          ((t = eo()), (ie.lanes |= t), (tt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = t));
  }
  function bf(e, n) {
    var t = X;
    (X = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = Iu.transition;
    Iu.transition = {};
    try {
      e(!1), n();
    } finally {
      (X = t), (Iu.transition = r);
    }
  }
  function Ns() {
    return qe().memoizedState;
  }
  function ec(e, n, t) {
    var r = $n(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(e))
    )
      zs(n, t);
    else if (((t = ls(e, n, t, r)), t !== null)) {
      var l = Te();
      fn(t, e, r, l), Ls(t, n, r);
    }
  }
  function nc(e, n, t) {
    var r = $n(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ps(e)) zs(n, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var i = n.lastRenderedState,
            o = u(i, t);
          if (((l.hasEagerState = !0), (l.eagerState = o), ln(o, i))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), Ru(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = ls(e, n, l, r)),
        t !== null && ((l = Te()), fn(t, e, r, l), Ls(t, n, r));
    }
  }
  function Ps(e) {
    var n = e.alternate;
    return e === ie || (n !== null && n === ie);
  }
  function zs(e, n) {
    or = rl = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ls(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Kl(e, t);
    }
  }
  var il = {
      readContext: Je,
      useCallback: _e,
      useContext: _e,
      useEffect: _e,
      useImperativeHandle: _e,
      useInsertionEffect: _e,
      useLayoutEffect: _e,
      useMemo: _e,
      useReducer: _e,
      useRef: _e,
      useState: _e,
      useDebugValue: _e,
      useDeferredValue: _e,
      useTransition: _e,
      useMutableSource: _e,
      useSyncExternalStore: _e,
      useId: _e,
      unstable_isNewReconciler: !1,
    },
    tc = {
      readContext: Je,
      useCallback: function (e, n) {
        return (vn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Je,
      useEffect: gs,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ll(4194308, 4, Ss.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ll(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ll(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = vn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = vn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = ec.bind(null, ie, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = vn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: vs,
      useDebugValue: Wu,
      useDeferredValue: function (e) {
        return (vn().memoizedState = e);
      },
      useTransition: function () {
        var e = vs(!1),
          n = e[0];
        return (e = bf.bind(null, e[1])), (vn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = ie,
          l = vn();
        if (re) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), we === null)) throw Error(m(349));
          nt & 30 || cs(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          fr(9, ds.bind(null, r, u, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = vn(),
          n = we.identifierPrefix;
        if (re) {
          var t = En,
            r = Sn;
          (t = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = sr++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = qf++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    rc = {
      readContext: Je,
      useCallback: Cs,
      useContext: Je,
      useEffect: $u,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: xs,
      useReducer: Bu,
      useRef: ys,
      useState: function () {
        return Bu(ar);
      },
      useDebugValue: Wu,
      useDeferredValue: function (e) {
        var n = qe();
        return _s(n, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Bu(ar)[0],
          n = qe().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: fs,
      useId: Ns,
      unstable_isNewReconciler: !1,
    },
    lc = {
      readContext: Je,
      useCallback: Cs,
      useContext: Je,
      useEffect: $u,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: xs,
      useReducer: Hu,
      useRef: ys,
      useState: function () {
        return Hu(ar);
      },
      useDebugValue: Wu,
      useDeferredValue: function (e) {
        var n = qe();
        return me === null ? (n.memoizedState = e) : _s(n, me.memoizedState, e);
      },
      useTransition: function () {
        var e = Hu(ar)[0],
          n = qe().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: fs,
      useId: Ns,
      unstable_isNewReconciler: !1,
    };
  function on(e, n) {
    if (e && e.defaultProps) {
      (n = C({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Qu(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : C({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var ol = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = Te(),
        l = $n(e),
        u = xn(r, l);
      (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (fn(n, e, l, r), br(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = Te(),
        l = $n(e),
        u = xn(r, l);
      (u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = An(e, u, l)),
        n !== null && (fn(n, e, l, r), br(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = Te(),
        r = $n(e),
        l = xn(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = An(e, l, r)),
        n !== null && (fn(n, e, r, t), br(n, e, r));
    },
  };
  function Ts(e, n, t, r, l, u, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, i)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Zt(t, r) || !Zt(l, u)
          : !0
    );
  }
  function Rs(e, n, t) {
    var r = !1,
      l = Fn,
      u = n.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Je(u))
        : ((l = Fe(n) ? Zn : xe.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? wt(e, l) : Fn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = ol),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    );
  }
  function Os(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && ol.enqueueReplaceState(n, n.state, null);
  }
  function Ku(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Ou(e);
    var u = n.contextType;
    typeof u == "object" && u !== null
      ? (l.context = Je(u))
      : ((u = Fe(n) ? Zn : xe.current), (l.context = wt(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == "function" && (Qu(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && ol.enqueueReplaceState(l, l.state, null),
        el(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += B(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Yu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Xu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var uc = typeof WeakMap == "function" ? WeakMap : Map;
  function js(e, n, t) {
    (t = xn(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        ml || ((ml = !0), (ai = r)), Xu(e, n);
      }),
      t
    );
  }
  function Ms(e, n, t) {
    (t = xn(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Xu(e, n);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (t.callback = function () {
          Xu(e, n),
            typeof r != "function" &&
              (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
          var i = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: i !== null ? i : "",
          });
        }),
      t
    );
  }
  function Ds(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new uc();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = wc.bind(null, e, n, t)), n.then(e, e));
  }
  function Fs(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Is(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = xn(-1, 1)), (n.tag = 2), An(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var ic = Ce.ReactCurrentOwner,
    Ie = !1;
  function Le(e, n, t, r) {
    n.child = e === null ? rs(n, null, t, r) : Ct(n, e.child, t, r);
  }
  function Us(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return (
      _t(n, l),
      (r = Au(e, n, t, r, u, l)),
      (t = Vu()),
      e !== null && !Ie
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          _n(e, n, l))
        : (re && t && Eu(n), (n.flags |= 1), Le(e, n, r, l), n.child)
    );
  }
  function As(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" &&
        !vi(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), Vs(e, n, u, r, l))
        : ((e = kl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var i = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Zt), t(i, r) && e.ref === n.ref)
      )
        return _n(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Qn(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Vs(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zt(u, r) && e.ref === n.ref)
        if (((Ie = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ie = !0);
        else return (n.lanes = e.lanes), _n(e, n, l);
    }
    return Gu(e, n, t, r, l);
  }
  function Bs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          q(Lt, Ke),
          (Ke |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            q(Lt, Ke),
            (Ke |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          q(Lt, Ke),
          (Ke |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        q(Lt, Ke),
        (Ke |= r);
    return Le(e, n, l, t), n.child;
  }
  function Hs(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Gu(e, n, t, r, l) {
    var u = Fe(t) ? Zn : xe.current;
    return (
      (u = wt(n, u)),
      _t(n, l),
      (t = Au(e, n, t, r, u, l)),
      (r = Vu()),
      e !== null && !Ie
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          _n(e, n, l))
        : (re && r && Eu(n), (n.flags |= 1), Le(e, n, t, l), n.child)
    );
  }
  function $s(e, n, t, r, l) {
    if (Fe(t)) {
      var u = !0;
      Qr(n);
    } else u = !1;
    if ((_t(n, l), n.stateNode === null))
      al(e, n), Rs(n, t, r), Ku(n, t, r, l), (r = !0);
    else if (e === null) {
      var i = n.stateNode,
        o = n.memoizedProps;
      i.props = o;
      var s = i.context,
        p = t.contextType;
      typeof p == "object" && p !== null
        ? (p = Je(p))
        : ((p = Fe(t) ? Zn : xe.current), (p = wt(n, p)));
      var y = t.getDerivedStateFromProps,
        g =
          typeof y == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function";
      g ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== r || s !== p) && Os(n, i, r, p)),
        (Un = !1);
      var h = n.memoizedState;
      (i.state = h),
        el(n, r, i, l),
        (s = n.memoizedState),
        o !== r || h !== s || De.current || Un
          ? (typeof y == "function" && (Qu(n, t, y, r), (s = n.memoizedState)),
            (o = Un || Ts(n, t, o, r, h, s, p))
              ? (g ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (i.props = r),
            (i.state = s),
            (i.context = p),
            (r = o))
          : (typeof i.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (i = n.stateNode),
        us(e, n),
        (o = n.memoizedProps),
        (p = n.type === n.elementType ? o : on(n.type, o)),
        (i.props = p),
        (g = n.pendingProps),
        (h = i.context),
        (s = t.contextType),
        typeof s == "object" && s !== null
          ? (s = Je(s))
          : ((s = Fe(t) ? Zn : xe.current), (s = wt(n, s)));
      var S = t.getDerivedStateFromProps;
      (y =
        typeof S == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function") ||
        (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
          typeof i.componentWillReceiveProps != "function") ||
        ((o !== g || h !== s) && Os(n, i, r, s)),
        (Un = !1),
        (h = n.memoizedState),
        (i.state = h),
        el(n, r, i, l);
      var x = n.memoizedState;
      o !== g || h !== x || De.current || Un
        ? (typeof S == "function" && (Qu(n, t, S, r), (x = n.memoizedState)),
          (p = Un || Ts(n, t, p, r, h, x, s) || !1)
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(r, x, s),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(r, x, s)),
              typeof i.componentDidUpdate == "function" && (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = x)),
          (i.props = r),
          (i.state = x),
          (i.context = s),
          (r = p))
        : (typeof i.componentDidUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return Zu(e, n, t, r, u, l);
  }
  function Zu(e, n, t, r, l, u) {
    Hs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Xo(n, t, !1), _n(e, n, u);
    (r = n.stateNode), (ic.current = n);
    var o =
      i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && i
        ? ((n.child = Ct(n, e.child, null, u)), (n.child = Ct(n, null, o, u)))
        : Le(e, n, o, u),
      (n.memoizedState = r.state),
      l && Xo(n, t, !0),
      n.child
    );
  }
  function Ws(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Ko(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Ko(e, n.context, !1),
      ju(e, n.containerInfo);
  }
  function Qs(e, n, t, r, l) {
    return Et(), Nu(l), (n.flags |= 256), Le(e, n, t, r), n.child;
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ks(e, n, t) {
    var r = n.pendingProps,
      l = ue.current,
      u = !1,
      i = (n.flags & 128) !== 0,
      o;
    if (
      ((o = i) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      q(ue, l & 1),
      e === null)
    )
      return (
        _u(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((i = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (i = { mode: "hidden", children: i }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = i))
                  : (u = Sl(i, r, 0, null)),
                (e = it(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = qu(t)),
                (n.memoizedState = Ju),
                e)
              : bu(n, i))
      );
    if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
      return oc(e, n, i, r, o, l, t);
    if (u) {
      (u = r.fallback), (i = n.mode), (l = e.child), (o = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(i & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = Qn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        o !== null ? (u = Qn(o, u)) : ((u = it(u, i, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (i = e.child.memoizedState),
        (i =
          i === null
            ? qu(t)
            : {
                baseLanes: i.baseLanes | t,
                cachePool: null,
                transitions: i.transitions,
              }),
        (u.memoizedState = i),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = Ju),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = Qn(u, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function bu(e, n) {
    return (
      (n = Sl({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function sl(e, n, t, r) {
    return (
      r !== null && Nu(r),
      Ct(n, e.child, null, t),
      (e = bu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function oc(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Yu(Error(m(422)))), sl(e, n, i, r))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((u = r.fallback),
            (l = n.mode),
            (r = Sl({ mode: "visible", children: r.children }, l, 0, null)),
            (u = it(u, l, i, null)),
            (u.flags |= 2),
            (r.return = n),
            (u.return = n),
            (r.sibling = u),
            (n.child = r),
            n.mode & 1 && Ct(n, e.child, null, i),
            (n.child.memoizedState = qu(i)),
            (n.memoizedState = Ju),
            u);
    if (!(n.mode & 1)) return sl(e, n, i, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
      return (
        (r = o), (u = Error(m(419))), (r = Yu(u, r, void 0)), sl(e, n, i, r)
      );
    }
    if (((o = (i & e.childLanes) !== 0), Ie || o)) {
      if (((r = we), r !== null)) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | i) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), Cn(e, l), fn(r, e, l, -1));
      }
      return hi(), (r = Yu(Error(m(421)))), sl(e, n, i, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = kc.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Qe = Mn(l.nextSibling)),
        (We = n),
        (re = !0),
        (un = null),
        e !== null &&
          ((Ge[Ze++] = Sn),
          (Ge[Ze++] = En),
          (Ge[Ze++] = Jn),
          (Sn = e.id),
          (En = e.overflow),
          (Jn = n)),
        (n = bu(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Ys(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Tu(e.return, n, t);
  }
  function ei(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l));
  }
  function Xs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Le(e, n, r.children, t), (r = ue.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ys(e, t, n);
          else if (e.tag === 19) Ys(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((q(ue, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && nl(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            ei(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && nl(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          ei(n, !0, t, null, u);
          break;
        case "together":
          ei(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function al(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function _n(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (tt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = Qn(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function sc(e, n, t) {
    switch (n.tag) {
      case 3:
        Ws(n), Et();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        Fe(n.type) && Qr(n);
        break;
      case 4:
        ju(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        q(Jr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (q(ue, ue.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
              ? Ks(e, n, t)
              : (q(ue, ue.current & 1),
                (e = _n(e, n, t)),
                e !== null ? e.sibling : null);
        q(ue, ue.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          q(ue, ue.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Bs(e, n, t);
    }
    return _n(e, n, t);
  }
  var Gs, ni, Zs, Js;
  (Gs = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (ni = function () {}),
    (Zs = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), et(hn.current);
        var u = null;
        switch (t) {
          case "input":
            (l = Tl(e, l)), (r = Tl(e, r)), (u = []);
            break;
          case "select":
            (l = C({}, l, { value: void 0 })),
              (r = C({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = jl(e, l)), (r = jl(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Hr);
        }
        Dl(t, r);
        var i;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var o = l[p];
              for (i in o) o.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (V.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((o = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== o && (s != null || o != null))
          )
            if (p === "style")
              if (o) {
                for (i in o)
                  !o.hasOwnProperty(i) ||
                    (s && s.hasOwnProperty(i)) ||
                    (t || (t = {}), (t[i] = ""));
                for (i in s)
                  s.hasOwnProperty(i) &&
                    o[i] !== s[i] &&
                    (t || (t = {}), (t[i] = s[i]));
              } else t || (u || (u = []), u.push(p, t)), (t = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (o = o ? o.__html : void 0),
                  s != null && o !== s && (u = u || []).push(p, s))
                : p === "children"
                  ? (typeof s != "string" && typeof s != "number") ||
                    (u = u || []).push(p, "" + s)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (V.hasOwnProperty(p)
                      ? (s != null && p === "onScroll" && ee("scroll", e),
                        u || o === s || (u = []))
                      : (u = u || []).push(p, s));
        }
        t && (u = u || []).push("style", t);
        var p = u;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (Js = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function cr(e, n) {
    if (!re)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ne(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function ac(e, n, t) {
    var r = n.pendingProps;
    switch ((Cu(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ne(n), null;
      case 1:
        return Fe(n.type) && Wr(), Ne(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Nt(),
          ne(De),
          ne(xe),
          Fu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Gr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), un !== null && (di(un), (un = null)))),
          ni(e, n),
          Ne(n),
          null
        );
      case 5:
        Mu(n);
        var l = et(ir.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          Zs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Ne(n), null;
          }
          if (((e = et(hn.current)), Gr(n))) {
            (r = n.stateNode), (t = n.type);
            var u = n.memoizedProps;
            switch (((r[mn] = n), (r[nr] = u), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                ee("cancel", r), ee("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) ee(qt[l], r);
                break;
              case "source":
                ee("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", r), ee("load", r);
                break;
              case "details":
                ee("toggle", r);
                break;
              case "input":
                Ti(r, u), ee("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  ee("invalid", r);
                break;
              case "textarea":
                ji(r, u), ee("invalid", r);
            }
            Dl(t, u), (l = null);
            for (var i in u)
              if (u.hasOwnProperty(i)) {
                var o = u[i];
                i === "children"
                  ? typeof o == "string"
                    ? r.textContent !== o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Br(r.textContent, o, e),
                      (l = ["children", o]))
                    : typeof o == "number" &&
                      r.textContent !== "" + o &&
                      (u.suppressHydrationWarning !== !0 &&
                        Br(r.textContent, o, e),
                      (l = ["children", "" + o]))
                  : V.hasOwnProperty(i) &&
                    o != null &&
                    i === "onScroll" &&
                    ee("scroll", r);
              }
            switch (t) {
              case "input":
                gr(r), Oi(r, u, !0);
                break;
              case "textarea":
                gr(r), Di(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (i = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Fi(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = i.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = i.createElement(t, { is: r.is }))
                    : ((e = i.createElement(t)),
                      t === "select" &&
                        ((i = e),
                        r.multiple
                          ? (i.multiple = !0)
                          : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, t)),
              (e[mn] = n),
              (e[nr] = r),
              Gs(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((i = Fl(t, r)), t)) {
                case "dialog":
                  ee("cancel", e), ee("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ee("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) ee(qt[l], e);
                  l = r;
                  break;
                case "source":
                  ee("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ee("error", e), ee("load", e), (l = r);
                  break;
                case "details":
                  ee("toggle", e), (l = r);
                  break;
                case "input":
                  Ti(e, r), (l = Tl(e, r)), ee("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = C({}, r, { value: void 0 })),
                    ee("invalid", e);
                  break;
                case "textarea":
                  ji(e, r), (l = jl(e, r)), ee("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), (o = l);
              for (u in o)
                if (o.hasOwnProperty(u)) {
                  var s = o[u];
                  u === "style"
                    ? Ai(e, s)
                    : u === "dangerouslySetInnerHTML"
                      ? ((s = s ? s.__html : void 0), s != null && Ii(e, s))
                      : u === "children"
                        ? typeof s == "string"
                          ? (t !== "textarea" || s !== "") && jt(e, s)
                          : typeof s == "number" && jt(e, "" + s)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          u !== "autoFocus" &&
                          (V.hasOwnProperty(u)
                            ? s != null && u === "onScroll" && ee("scroll", e)
                            : s != null && Ye(e, u, s, i));
                }
              switch (t) {
                case "input":
                  gr(e), Oi(e, r, !1);
                  break;
                case "textarea":
                  gr(e), Di(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Y(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? ot(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        ot(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Ne(n), null;
      case 6:
        if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (((t = et(ir.current)), et(hn.current), Gr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[mn] = n),
              (u = r.nodeValue !== t) && ((e = We), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Br(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Br(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[mn] = n),
              (n.stateNode = r);
        }
        return Ne(n), null;
      case 13:
        if (
          (ne(ue),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (re && Qe !== null && n.mode & 1 && !(n.flags & 128))
            es(), Et(), (n.flags |= 98560), (u = !1);
          else if (((u = Gr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[mn] = n;
            } else
              Et(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Ne(n), (u = !1);
          } else un !== null && (di(un), (un = null)), (u = !0);
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || ue.current & 1 ? he === 0 && (he = 3) : hi())),
            n.updateQueue !== null && (n.flags |= 4),
            Ne(n),
            null);
      case 4:
        return (
          Nt(),
          ni(e, n),
          e === null && bt(n.stateNode.containerInfo),
          Ne(n),
          null
        );
      case 10:
        return Lu(n.type._context), Ne(n), null;
      case 17:
        return Fe(n.type) && Wr(), Ne(n), null;
      case 19:
        if ((ne(ue), (u = n.memoizedState), u === null)) return Ne(n), null;
        if (((r = (n.flags & 128) !== 0), (i = u.rendering), i === null))
          if (r) cr(u, !1);
          else {
            if (he !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((i = nl(e)), i !== null)) {
                  for (
                    n.flags |= 128,
                      cr(u, !1),
                      r = i.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (i = u.alternate),
                      i === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = i.childLanes),
                          (u.lanes = i.lanes),
                          (u.child = i.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = i.memoizedProps),
                          (u.memoizedState = i.memoizedState),
                          (u.updateQueue = i.updateQueue),
                          (u.type = i.type),
                          (e = i.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return q(ue, (ue.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ae() > Tt &&
              ((n.flags |= 128), (r = !0), cr(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = nl(i)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                cr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !i.alternate &&
                  !re)
              )
                return Ne(n), null;
            } else
              2 * ae() - u.renderingStartTime > Tt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), cr(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((i.sibling = n.child), (n.child = i))
            : ((t = u.last),
              t !== null ? (t.sibling = i) : (n.child = i),
              (u.last = i));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = ae()),
            (n.sibling = null),
            (t = ue.current),
            q(ue, r ? (t & 1) | 2 : t & 1),
            n)
          : (Ne(n), null);
      case 22:
      case 23:
        return (
          mi(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? Ke & 1073741824 &&
              (Ne(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ne(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function fc(e, n) {
    switch ((Cu(n), n.tag)) {
      case 1:
        return (
          Fe(n.type) && Wr(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Nt(),
          ne(De),
          ne(xe),
          Fu(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Mu(n), null;
      case 13:
        if (
          (ne(ue), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return ne(ue), null;
      case 4:
        return Nt(), null;
      case 10:
        return Lu(n.type._context), null;
      case 22:
      case 23:
        return mi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    Pe = !1,
    cc = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          se(e, n, r);
        }
      else t.current = null;
  }
  function ti(e, n, t) {
    try {
      t();
    } catch (r) {
      se(e, n, r);
    }
  }
  var qs = !1;
  function dc(e, n) {
    if (((mu = Tr), (e = To()), iu(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var i = 0,
              o = -1,
              s = -1,
              p = 0,
              y = 0,
              g = e,
              h = null;
            n: for (;;) {
              for (
                var S;
                g !== t || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = i + r),
                  g.nodeType === 3 && (i += g.nodeValue.length),
                  (S = g.firstChild) !== null;

              )
                (h = g), (g = S);
              for (;;) {
                if (g === e) break n;
                if (
                  (h === t && ++p === l && (o = i),
                  h === u && ++y === r && (s = i),
                  (S = g.nextSibling) !== null)
                )
                  break;
                (g = h), (h = g.parentNode);
              }
              g = S;
            }
            t = o === -1 || s === -1 ? null : { start: o, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      hu = { focusedElem: e, selectionRange: t }, Tr = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e);
      else
        for (; E !== null; ) {
          n = E;
          try {
            var x = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (x !== null) {
                    var _ = x.memoizedProps,
                      fe = x.memoizedState,
                      c = n.stateNode,
                      a = c.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? _ : on(n.type, _),
                        fe,
                      );
                    c.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            se(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (E = e);
            break;
          }
          E = n.return;
        }
    return (x = qs), (qs = !1), x;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && ti(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function cl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ri(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function bs(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), bs(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[mn],
          delete n[nr],
          delete n[wu],
          delete n[Xf],
          delete n[Gf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function li(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (li(e, n, t), e = e.sibling; e !== null; )
        li(e, n, t), (e = e.sibling);
  }
  function ui(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ui(e, n, t), e = e.sibling; e !== null; )
        ui(e, n, t), (e = e.sibling);
  }
  var Se = null,
    sn = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) ta(e, n, t), (t = t.sibling);
  }
  function ta(e, n, t) {
    if (pn && typeof pn.onCommitFiberUnmount == "function")
      try {
        pn.onCommitFiberUnmount(xr, t);
      } catch {}
    switch (t.tag) {
      case 5:
        Pe || zt(t, n);
      case 6:
        var r = Se,
          l = sn;
        (Se = null),
          Vn(e, n, t),
          (Se = r),
          (sn = l),
          Se !== null &&
            (sn
              ? ((e = Se),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : Se.removeChild(t.stateNode));
        break;
      case 18:
        Se !== null &&
          (sn
            ? ((e = Se),
              (t = t.stateNode),
              e.nodeType === 8
                ? gu(e.parentNode, t)
                : e.nodeType === 1 && gu(e, t),
              Wt(e))
            : gu(Se, t.stateNode));
        break;
      case 4:
        (r = Se),
          (l = sn),
          (Se = t.stateNode.containerInfo),
          (sn = !0),
          Vn(e, n, t),
          (Se = r),
          (sn = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Pe &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              i = u.destroy;
            (u = u.tag),
              i !== void 0 && (u & 2 || u & 4) && ti(t, n, i),
              (l = l.next);
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (
          !Pe &&
          (zt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (o) {
            se(t, n, o);
          }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((Pe = (r = Pe) || t.memoizedState !== null), Vn(e, n, t), (Pe = r))
          : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function ra(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new cc()),
        n.forEach(function (r) {
          var l = Sc.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function an(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e,
            i = n,
            o = i;
          e: for (; o !== null; ) {
            switch (o.tag) {
              case 5:
                (Se = o.stateNode), (sn = !1);
                break e;
              case 3:
                (Se = o.stateNode.containerInfo), (sn = !0);
                break e;
              case 4:
                (Se = o.stateNode.containerInfo), (sn = !0);
                break e;
            }
            o = o.return;
          }
          if (Se === null) throw Error(m(160));
          ta(u, i, l), (Se = null), (sn = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          se(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) la(n, e), (n = n.sibling);
  }
  function la(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((an(n, e), yn(e), r & 4)) {
          try {
            dr(3, e, e.return), cl(3, e);
          } catch (_) {
            se(e, e.return, _);
          }
          try {
            dr(5, e, e.return);
          } catch (_) {
            se(e, e.return, _);
          }
        }
        break;
      case 1:
        an(n, e), yn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (
          (an(n, e),
          yn(e),
          r & 512 && t !== null && zt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            jt(l, "");
          } catch (_) {
            se(e, e.return, _);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            i = t !== null ? t.memoizedProps : u,
            o = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              o === "input" && u.type === "radio" && u.name != null && Ri(l, u),
                Fl(o, i);
              var p = Fl(o, u);
              for (i = 0; i < s.length; i += 2) {
                var y = s[i],
                  g = s[i + 1];
                y === "style"
                  ? Ai(l, g)
                  : y === "dangerouslySetInnerHTML"
                    ? Ii(l, g)
                    : y === "children"
                      ? jt(l, g)
                      : Ye(l, y, g, p);
              }
              switch (o) {
                case "input":
                  Rl(l, u);
                  break;
                case "textarea":
                  Mi(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null
                    ? ot(l, !!u.multiple, S, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? ot(l, !!u.multiple, u.defaultValue, !0)
                        : ot(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (_) {
              se(e, e.return, _);
            }
        }
        break;
      case 6:
        if ((an(n, e), yn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (_) {
            se(e, e.return, _);
          }
        }
        break;
      case 3:
        if (
          (an(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Wt(n.containerInfo);
          } catch (_) {
            se(e, e.return, _);
          }
        break;
      case 4:
        an(n, e), yn(e);
        break;
      case 13:
        an(n, e),
          yn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (si = ae())),
          r & 4 && ra(e);
        break;
      case 22:
        if (
          ((y = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((Pe = (p = Pe) || y), an(n, e), (Pe = p)) : an(n, e),
          yn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !y && e.mode & 1)
          )
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (((h = E), (S = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    dr(4, h, h.return);
                    break;
                  case 1:
                    zt(h, h.return);
                    var x = h.stateNode;
                    if (typeof x.componentWillUnmount == "function") {
                      (r = h), (t = h.return);
                      try {
                        (n = r),
                          (x.props = n.memoizedProps),
                          (x.state = n.memoizedState),
                          x.componentWillUnmount();
                      } catch (_) {
                        se(r, t, _);
                      }
                    }
                    break;
                  case 5:
                    zt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      oa(g);
                      continue;
                    }
                }
                S !== null ? ((S.return = h), (E = S)) : oa(g);
              }
              y = y.sibling;
            }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((o = g.stateNode),
                        (s = g.memoizedProps.style),
                        (i =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (o.style.display = Ui("display", i)));
                } catch (_) {
                  se(e, e.return, _);
                }
              }
            } else if (g.tag === 6) {
              if (y === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (_) {
                  se(e, e.return, _);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), (g = g.return);
            }
            y === g && (y = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        an(n, e), yn(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        an(n, e), yn(e);
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (jt(l, ""), (r.flags &= -33));
            var u = na(e);
            ui(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo,
              o = na(e);
            li(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function pc(e, n, t) {
    (E = e), ua(e);
  }
  function ua(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate,
            s = (o !== null && o.memoizedState !== null) || Pe;
          o = fl;
          var p = Pe;
          if (((fl = i), (Pe = s) && !p))
            for (E = l; E !== null; )
              (i = E),
                (s = i.child),
                i.tag === 22 && i.memoizedState !== null
                  ? sa(l)
                  : s !== null
                    ? ((s.return = i), (E = s))
                    : sa(l);
          for (; u !== null; ) (E = u), ua(u), (u = u.sibling);
          (E = l), (fl = o), (Pe = p);
        }
        ia(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (E = u)) : ia(e);
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Pe || cl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Pe)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : on(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var u = n.updateQueue;
                u !== null && os(n, u, r);
                break;
              case 3:
                var i = n.updateQueue;
                if (i !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  os(n, i, t);
                }
                break;
              case 5:
                var o = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = o;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Wt(g);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          Pe || (n.flags & 512 && ri(n));
        } catch (h) {
          se(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              cl(4, n);
            } catch (s) {
              se(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(n, l, s);
              }
            }
            var u = n.return;
            try {
              ri(n);
            } catch (s) {
              se(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ri(n);
            } catch (s) {
              se(n, i, s);
            }
        }
      } catch (s) {
        se(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        (o.return = n.return), (E = o);
        break;
      }
      E = n.return;
    }
  }
  var mc = Math.ceil,
    dl = Ce.ReactCurrentDispatcher,
    ii = Ce.ReactCurrentOwner,
    be = Ce.ReactCurrentBatchConfig,
    A = 0,
    we = null,
    de = null,
    Ee = 0,
    Ke = 0,
    Lt = Dn(0),
    he = 0,
    pr = null,
    tt = 0,
    pl = 0,
    oi = 0,
    mr = null,
    Ue = null,
    si = 0,
    Tt = 1 / 0,
    Nn = null,
    ml = !1,
    ai = null,
    Bn = null,
    hl = !1,
    Hn = null,
    vl = 0,
    hr = 0,
    fi = null,
    yl = -1,
    gl = 0;
  function Te() {
    return A & 6 ? ae() : yl !== -1 ? yl : (yl = ae());
  }
  function $n(e) {
    return e.mode & 1
      ? A & 2 && Ee !== 0
        ? Ee & -Ee
        : Jf.transition !== null
          ? (gl === 0 && (gl = eo()), gl)
          : ((e = X),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ao(e.type))),
            e)
      : 1;
  }
  function fn(e, n, t, r) {
    if (50 < hr) throw ((hr = 0), (fi = null), Error(m(185)));
    At(e, t, r),
      (!(A & 2) || e !== we) &&
        (e === we && (!(A & 2) && (pl |= t), he === 4 && Wn(e, Ee)),
        Ae(e, r),
        t === 1 && A === 0 && !(n.mode & 1) && ((Tt = ae() + 500), Kr && In()));
  }
  function Ae(e, n) {
    var t = e.callbackNode;
    Za(e, n);
    var r = Pr(e, e === we ? Ee : 0);
    if (r === 0)
      t !== null && Ji(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && Ji(t), n === 1))
        e.tag === 0 ? Zf(fa.bind(null, e)) : Go(fa.bind(null, e)),
          Kf(function () {
            !(A & 6) && In();
          }),
          (t = null);
      else {
        switch (no(r)) {
          case 1:
            t = $l;
            break;
          case 4:
            t = qi;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = bi;
            break;
          default:
            t = Cr;
        }
        t = ga(t, aa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function aa(e, n) {
    if (((yl = -1), (gl = 0), A & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = Pr(e, e === we ? Ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = wl(e, r);
    else {
      n = r;
      var l = A;
      A |= 2;
      var u = da();
      (we !== e || Ee !== n) && ((Nn = null), (Tt = ae() + 500), lt(e, n));
      do
        try {
          yc();
          break;
        } catch (o) {
          ca(e, o);
        }
      while (!0);
      zu(),
        (dl.current = u),
        (A = l),
        de !== null ? (n = 0) : ((we = null), (Ee = 0), (n = he));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Wl(e)), l !== 0 && ((r = l), (n = ci(e, l)))),
        n === 1)
      )
        throw ((t = pr), lt(e, 0), Wn(e, r), Ae(e, ae()), t);
      if (n === 6) Wn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !hc(l) &&
            ((n = wl(e, r)),
            n === 2 && ((u = Wl(e)), u !== 0 && ((r = u), (n = ci(e, u)))),
            n === 1))
        )
          throw ((t = pr), lt(e, 0), Wn(e, r), Ae(e, ae()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Ue, Nn);
            break;
          case 3:
            if (
              (Wn(e, r),
              (r & 130023424) === r && ((n = si + 500 - ae()), 10 < n))
            ) {
              if (Pr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Te(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = yu(ut.bind(null, e, Ue, Nn), n);
              break;
            }
            ut(e, Ue, Nn);
            break;
          case 4:
            if ((Wn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - rn(r);
              (u = 1 << i), (i = n[i]), i > l && (l = i), (r &= ~u);
            }
            if (
              ((r = l),
              (r = ae() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * mc(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = yu(ut.bind(null, e, Ue, Nn), r);
              break;
            }
            ut(e, Ue, Nn);
            break;
          case 5:
            ut(e, Ue, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Ae(e, ae()), e.callbackNode === t ? aa.bind(null, e) : null;
  }
  function ci(e, n) {
    var t = mr;
    return (
      e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256),
      (e = wl(e, n)),
      e !== 2 && ((n = Ue), (Ue = t), n !== null && di(n)),
      e
    );
  }
  function di(e) {
    Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
  }
  function hc(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!ln(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (
      n &= ~oi,
        n &= ~pl,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - rn(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function fa(e) {
    if (A & 6) throw Error(m(327));
    Rt();
    var n = Pr(e, 0);
    if (!(n & 1)) return Ae(e, ae()), null;
    var t = wl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Wl(e);
      r !== 0 && ((n = r), (t = ci(e, r)));
    }
    if (t === 1) throw ((t = pr), lt(e, 0), Wn(e, n), Ae(e, ae()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      ut(e, Ue, Nn),
      Ae(e, ae()),
      null
    );
  }
  function pi(e, n) {
    var t = A;
    A |= 1;
    try {
      return e(n);
    } finally {
      (A = t), A === 0 && ((Tt = ae() + 500), Kr && In());
    }
  }
  function rt(e) {
    Hn !== null && Hn.tag === 0 && !(A & 6) && Rt();
    var n = A;
    A |= 1;
    var t = be.transition,
      r = X;
    try {
      if (((be.transition = null), (X = 1), e)) return e();
    } finally {
      (X = r), (be.transition = t), (A = n), !(A & 6) && In();
    }
  }
  function mi() {
    (Ke = Lt.current), ne(Lt);
  }
  function lt(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Qf(t)), de !== null))
      for (t = de.return; t !== null; ) {
        var r = t;
        switch ((Cu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Wr();
            break;
          case 3:
            Nt(), ne(De), ne(xe), Fu();
            break;
          case 5:
            Mu(r);
            break;
          case 4:
            Nt();
            break;
          case 13:
            ne(ue);
            break;
          case 19:
            ne(ue);
            break;
          case 10:
            Lu(r.type._context);
            break;
          case 22:
          case 23:
            mi();
        }
        t = t.return;
      }
    if (
      ((we = e),
      (de = e = Qn(e.current, null)),
      (Ee = Ke = n),
      (he = 0),
      (pr = null),
      (oi = pl = tt = 0),
      (Ue = mr = null),
      bn !== null)
    ) {
      for (n = 0; n < bn.length; n++)
        if (((t = bn[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            u = t.pending;
          if (u !== null) {
            var i = u.next;
            (u.next = l), (r.next = i);
          }
          t.pending = r;
        }
      bn = null;
    }
    return e;
  }
  function ca(e, n) {
    do {
      var t = de;
      try {
        if ((zu(), (tl.current = il), rl)) {
          for (var r = ie.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          rl = !1;
        }
        if (
          ((nt = 0),
          (ge = me = ie = null),
          (or = !1),
          (sr = 0),
          (ii.current = null),
          t === null || t.return === null)
        ) {
          (he = 1), (pr = n), (de = null);
          break;
        }
        e: {
          var u = e,
            i = t.return,
            o = t,
            s = n;
          if (
            ((n = Ee),
            (o.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              y = o,
              g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h
                ? ((y.updateQueue = h.updateQueue),
                  (y.memoizedState = h.memoizedState),
                  (y.lanes = h.lanes))
                : ((y.updateQueue = null), (y.memoizedState = null));
            }
            var S = Fs(i);
            if (S !== null) {
              (S.flags &= -257),
                Is(S, i, o, u, n),
                S.mode & 1 && Ds(u, p, n),
                (n = S),
                (s = p);
              var x = n.updateQueue;
              if (x === null) {
                var _ = new Set();
                _.add(s), (n.updateQueue = _);
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ds(u, p, n), hi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (re && o.mode & 1) {
            var fe = Fs(i);
            if (fe !== null) {
              !(fe.flags & 65536) && (fe.flags |= 256),
                Is(fe, i, o, u, n),
                Nu(Pt(s, o));
              break e;
            }
          }
          (u = s = Pt(s, o)),
            he !== 4 && (he = 2),
            mr === null ? (mr = [u]) : mr.push(u),
            (u = i);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var c = js(u, s, n);
                is(u, c);
                break e;
              case 1:
                o = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Bn === null || !Bn.has(d))))
                ) {
                  (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                  var w = Ms(u, o, n);
                  is(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ma(t);
      } catch (N) {
        (n = N), de === t && t !== null && (de = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = dl.current;
    return (dl.current = il), e === null ? il : e;
  }
  function hi() {
    (he === 0 || he === 3 || he === 2) && (he = 4),
      we === null || (!(tt & 268435455) && !(pl & 268435455)) || Wn(we, Ee);
  }
  function wl(e, n) {
    var t = A;
    A |= 2;
    var r = da();
    (we !== e || Ee !== n) && ((Nn = null), lt(e, n));
    do
      try {
        vc();
        break;
      } catch (l) {
        ca(e, l);
      }
    while (!0);
    if ((zu(), (A = t), (dl.current = r), de !== null)) throw Error(m(261));
    return (we = null), (Ee = 0), he;
  }
  function vc() {
    for (; de !== null; ) pa(de);
  }
  function yc() {
    for (; de !== null && !Ba(); ) pa(de);
  }
  function pa(e) {
    var n = ya(e.alternate, e, Ke);
    (e.memoizedProps = e.pendingProps),
      n === null ? ma(e) : (de = n),
      (ii.current = null);
  }
  function ma(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = fc(t, n)), t !== null)) {
          (t.flags &= 32767), (de = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (he = 6), (de = null);
          return;
        }
      } else if (((t = ac(t, n, Ke)), t !== null)) {
        de = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        de = n;
        return;
      }
      de = n = e;
    } while (n !== null);
    he === 0 && (he = 5);
  }
  function ut(e, n, t) {
    var r = X,
      l = be.transition;
    try {
      (be.transition = null), (X = 1), gc(e, n, t, r);
    } finally {
      (be.transition = l), (X = r);
    }
    return null;
  }
  function gc(e, n, t, r) {
    do Rt();
    while (Hn !== null);
    if (A & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = t.lanes | t.childLanes;
    if (
      (Ja(e, u),
      e === we && ((de = we = null), (Ee = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        hl ||
        ((hl = !0),
        ga(Cr, function () {
          return Rt(), null;
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      (u = be.transition), (be.transition = null);
      var i = X;
      X = 1;
      var o = A;
      (A |= 4),
        (ii.current = null),
        dc(e, t),
        la(t, e),
        Uf(hu),
        (Tr = !!mu),
        (hu = mu = null),
        (e.current = t),
        pc(t),
        Ha(),
        (A = o),
        (X = i),
        (be.transition = u);
    } else e.current = t;
    if (
      (hl && ((hl = !1), (Hn = e), (vl = l)),
      (u = e.pendingLanes),
      u === 0 && (Bn = null),
      Qa(t.stateNode),
      Ae(e, ae()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ((ml = !1), (e = ai), (ai = null), e);
    return (
      vl & 1 && e.tag !== 0 && Rt(),
      (u = e.pendingLanes),
      u & 1 ? (e === fi ? hr++ : ((hr = 0), (fi = e))) : (hr = 0),
      In(),
      null
    );
  }
  function Rt() {
    if (Hn !== null) {
      var e = no(vl),
        n = be.transition,
        t = X;
      try {
        if (((be.transition = null), (X = 16 > e ? 16 : e), Hn === null))
          var r = !1;
        else {
          if (((e = Hn), (Hn = null), (vl = 0), A & 6)) throw Error(m(331));
          var l = A;
          for (A |= 4, E = e.current; E !== null; ) {
            var u = E,
              i = u.child;
            if (E.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) (g.return = y), (E = g);
                    else
                      for (; E !== null; ) {
                        y = E;
                        var h = y.sibling,
                          S = y.return;
                        if ((bs(y), y === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = S), (E = h);
                          break;
                        }
                        E = S;
                      }
                  }
                }
                var x = u.alternate;
                if (x !== null) {
                  var _ = x.child;
                  if (_ !== null) {
                    x.child = null;
                    do {
                      var fe = _.sibling;
                      (_.sibling = null), (_ = fe);
                    } while (_ !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) (i.return = u), (E = i);
            else
              e: for (; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(9, u, u.return);
                  }
                var c = u.sibling;
                if (c !== null) {
                  (c.return = u.return), (E = c);
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (E = d);
            else
              e: for (i = a; E !== null; ) {
                if (((o = E), o.flags & 2048))
                  try {
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        cl(9, o);
                    }
                  } catch (N) {
                    se(o, o.return, N);
                  }
                if (o === i) {
                  E = null;
                  break e;
                }
                var w = o.sibling;
                if (w !== null) {
                  (w.return = o.return), (E = w);
                  break e;
                }
                E = o.return;
              }
          }
          if (
            ((A = l), In(), pn && typeof pn.onPostCommitFiberRoot == "function")
          )
            try {
              pn.onPostCommitFiberRoot(xr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (X = t), (be.transition = n);
      }
    }
    return !1;
  }
  function ha(e, n, t) {
    (n = Pt(t, n)),
      (n = js(e, n, 1)),
      (e = An(e, n, 1)),
      (n = Te()),
      e !== null && (At(e, 1, n), Ae(e, n));
  }
  function se(e, n, t) {
    if (e.tag === 3) ha(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ha(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Bn === null || !Bn.has(r)))
          ) {
            (e = Pt(t, e)),
              (e = Ms(n, e, 1)),
              (n = An(n, e, 1)),
              (e = Te()),
              n !== null && (At(n, 1, e), Ae(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function wc(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = Te()),
      (e.pingedLanes |= e.suspendedLanes & t),
      we === e &&
        (Ee & t) === t &&
        (he === 4 || (he === 3 && (Ee & 130023424) === Ee && 500 > ae() - si)
          ? lt(e, 0)
          : (oi |= t)),
      Ae(e, n);
  }
  function va(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
        : (n = 1));
    var t = Te();
    (e = Cn(e, n)), e !== null && (At(e, n, t), Ae(e, t));
  }
  function kc(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), va(e, t);
  }
  function Sc(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), va(e, t);
  }
  var ya;
  ya = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || De.current) Ie = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (Ie = !1), sc(e, n, t);
        Ie = !!(e.flags & 131072);
      }
    else (Ie = !1), re && n.flags & 1048576 && Zo(n, Xr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        al(e, n), (e = n.pendingProps);
        var l = wt(n, xe.current);
        _t(n, t), (l = Au(null, n, r, e, l, t));
        var u = Vu();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Fe(r) ? ((u = !0), Qr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ou(n),
              (l.updater = ol),
              (n.stateNode = l),
              (l._reactInternals = n),
              Ku(n, r, e, t),
              (n = Zu(null, n, r, !0, u, t)))
            : ((n.tag = 0), re && u && Eu(n), Le(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (al(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Cc(r)),
            (e = on(r, e)),
            l)
          ) {
            case 0:
              n = Gu(null, n, r, e, t);
              break e;
            case 1:
              n = $s(null, n, r, e, t);
              break e;
            case 11:
              n = Us(null, n, r, e, t);
              break e;
            case 14:
              n = As(null, n, r, on(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : on(r, l)),
          Gu(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : on(r, l)),
          $s(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Ws(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            us(e, n),
            el(n, r, null, t);
          var i = n.memoizedState;
          if (((r = i.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              (l = Pt(Error(m(423)), n)), (n = Qs(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = Pt(Error(m(424)), n)), (n = Qs(e, n, r, t, l));
              break e;
            } else
              for (
                Qe = Mn(n.stateNode.containerInfo.firstChild),
                  We = n,
                  re = !0,
                  un = null,
                  t = rs(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((Et(), r === l)) {
              n = _n(e, n, t);
              break e;
            }
            Le(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          ss(n),
          e === null && _u(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (i = l.children),
          vu(r, l) ? (i = null) : u !== null && vu(r, u) && (n.flags |= 32),
          Hs(e, n),
          Le(e, n, i, t),
          n.child
        );
      case 6:
        return e === null && _u(n), null;
      case 13:
        return Ks(e, n, t);
      case 4:
        return (
          ju(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = Ct(n, null, r, t)) : Le(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : on(r, l)),
          Us(e, n, r, l, t)
        );
      case 7:
        return Le(e, n, n.pendingProps, t), n.child;
      case 8:
        return Le(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Le(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (i = l.value),
            q(Jr, r._currentValue),
            (r._currentValue = i),
            u !== null)
          )
            if (ln(u.value, i)) {
              if (u.children === l.children && !De.current) {
                n = _n(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var o = u.dependencies;
                if (o !== null) {
                  i = u.child;
                  for (var s = o.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        (s = xn(-1, t & -t)), (s.tag = 2);
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null
                            ? (s.next = s)
                            : ((s.next = y.next), (y.next = s)),
                            (p.pending = s);
                        }
                      }
                      (u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        Tu(u.return, t, n),
                        (o.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((i = u.return), i === null)) throw Error(m(341));
                  (i.lanes |= t),
                    (o = i.alternate),
                    o !== null && (o.lanes |= t),
                    Tu(i, t, n),
                    (i = u.sibling);
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                  for (i = u; i !== null; ) {
                    if (i === n) {
                      i = null;
                      break;
                    }
                    if (((u = i.sibling), u !== null)) {
                      (u.return = i.return), (i = u);
                      break;
                    }
                    i = i.return;
                  }
                u = i;
              }
          Le(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          _t(n, t),
          (l = Je(l)),
          (r = r(l)),
          (n.flags |= 1),
          Le(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = on(r, n.pendingProps)),
          (l = on(r.type, l)),
          As(e, n, r, l, t)
        );
      case 15:
        return Vs(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : on(r, l)),
          al(e, n),
          (n.tag = 1),
          Fe(r) ? ((e = !0), Qr(n)) : (e = !1),
          _t(n, t),
          Rs(n, r, l),
          Ku(n, r, l, t),
          Zu(null, n, r, !0, e, t)
        );
      case 19:
        return Xs(e, n, t);
      case 22:
        return Bs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ga(e, n) {
    return Zi(e, n);
  }
  function Ec(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function en(e, n, t, r) {
    return new Ec(e, n, t, r);
  }
  function vi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Cc(e) {
    if (typeof e == "function") return vi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === cn)) return 11;
      if (e === dn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = en(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function kl(e, n, t, r, l, u) {
    var i = 2;
    if (((r = e), typeof e == "function")) vi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else
      e: switch (e) {
        case je:
          return it(t.children, l, u, n);
        case Xe:
          (i = 8), (l |= 8);
          break;
        case Pn:
          return (
            (e = en(12, t, n, l | 2)), (e.elementType = Pn), (e.lanes = u), e
          );
        case Be:
          return (e = en(13, t, n, l)), (e.elementType = Be), (e.lanes = u), e;
        case tn:
          return (e = en(19, t, n, l)), (e.elementType = tn), (e.lanes = u), e;
        case oe:
          return Sl(t, l, u, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gn:
                i = 10;
                break e;
              case Yn:
                i = 9;
                break e;
              case cn:
                i = 11;
                break e;
              case dn:
                i = 14;
                break e;
              case Me:
                (i = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = en(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    );
  }
  function it(e, n, t, r) {
    return (e = en(7, e, r, n)), (e.lanes = t), e;
  }
  function Sl(e, n, t, r) {
    return (
      (e = en(22, e, r, n)),
      (e.elementType = oe),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function yi(e, n, t) {
    return (e = en(6, e, null, n)), (e.lanes = t), e;
  }
  function gi(e, n, t) {
    return (
      (n = en(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function xc(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ql(0)),
      (this.expirationTimes = Ql(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ql(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function wi(e, n, t, r, l, u, i, o, s) {
    return (
      (e = new xc(e, n, t, o, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = en(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ou(u),
      e
    );
  }
  function _c(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ze,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function wa(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Fe(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Fe(t)) return Yo(e, t, n);
    }
    return n;
  }
  function ka(e, n, t, r, l, u, i, o, s) {
    return (
      (e = wi(t, r, !0, e, l, u, i, o, s)),
      (e.context = wa(null)),
      (t = e.current),
      (r = Te()),
      (l = $n(t)),
      (u = xn(r, l)),
      (u.callback = n ?? null),
      An(t, u, l),
      (e.current.lanes = l),
      At(e, l, r),
      Ae(e, r),
      e
    );
  }
  function El(e, n, t, r) {
    var l = n.current,
      u = Te(),
      i = $n(l);
    return (
      (t = wa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = xn(u, i)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = An(l, n, i)),
      e !== null && (fn(e, l, i, u), br(e, l, i)),
      i
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Sa(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function ki(e, n) {
    Sa(e, n), (e = e.alternate) && Sa(e, n);
  }
  function Nc() {
    return null;
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Si(e) {
    this._internalRoot = e;
  }
  (xl.prototype.render = Si.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      El(e, n, null, null);
    }),
    (xl.prototype.unmount = Si.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          rt(function () {
            El(null, e, null, null);
          }),
            (n[wn] = null);
        }
      });
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = lo();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++);
      Rn.splice(t, 0, e), t === 0 && oo(e);
    }
  };
  function Ei(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function _l(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ca() {}
  function Pc(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = Cl(i);
          u.call(p);
        };
      }
      var i = ka(n, r, e, 0, null, !1, !1, "", Ca);
      return (
        (e._reactRootContainer = i),
        (e[wn] = i.current),
        bt(e.nodeType === 8 ? e.parentNode : e),
        rt(),
        i
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var p = Cl(s);
        o.call(p);
      };
    }
    var s = wi(e, 0, !1, null, null, !1, !1, "", Ca);
    return (
      (e._reactRootContainer = s),
      (e[wn] = s.current),
      bt(e.nodeType === 8 ? e.parentNode : e),
      rt(function () {
        El(n, s, t, r);
      }),
      s
    );
  }
  function Nl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function () {
          var s = Cl(i);
          o.call(s);
        };
      }
      El(n, i, e, l);
    } else i = Pc(t, n, e, l, r);
    return Cl(i);
  }
  (to = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 &&
            (Kl(n, t | 1), Ae(n, ae()), !(A & 6) && ((Tt = ae() + 500), In()));
        }
        break;
      case 13:
        rt(function () {
          var r = Cn(e, 1);
          if (r !== null) {
            var l = Te();
            fn(r, e, 1, l);
          }
        }),
          ki(e, 1);
    }
  }),
    (Yl = function (e) {
      if (e.tag === 13) {
        var n = Cn(e, 134217728);
        if (n !== null) {
          var t = Te();
          fn(n, e, 134217728, t);
        }
        ki(e, 134217728);
      }
    }),
    (ro = function (e) {
      if (e.tag === 13) {
        var n = $n(e),
          t = Cn(e, n);
        if (t !== null) {
          var r = Te();
          fn(t, e, n, r);
        }
        ki(e, n);
      }
    }),
    (lo = function () {
      return X;
    }),
    (uo = function (e, n) {
      var t = X;
      try {
        return (X = e), n();
      } finally {
        X = t;
      }
    }),
    (Al = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Rl(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]',
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = $r(r);
                if (!l) throw Error(m(90));
                Li(r), Rl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Mi(e, t);
          break;
        case "select":
          (n = t.value), n != null && ot(e, !!t.multiple, n, !1);
      }
    }),
    ($i = pi),
    (Wi = rt);
  var zc = { usingClientEntryPoint: !1, Events: [tr, yt, $r, Bi, Hi, pi] },
    vr = {
      findFiberByHostInstance: Gn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Lc = {
      bundleType: vr.bundleType,
      version: vr.version,
      rendererPackageName: vr.rendererPackageName,
      rendererConfig: vr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Ce.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xi(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: vr.findFiberByHostInstance || Nc,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber)
      try {
        (xr = Pl.inject(Lc)), (pn = Pl);
      } catch {}
  }
  return (
    (Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc),
    (Ve.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ei(n)) throw Error(m(200));
      return _c(e, n, null, t);
    }),
    (Ve.createRoot = function (e, n) {
      if (!Ei(e)) throw Error(m(299));
      var t = !1,
        r = "",
        l = Ea;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = wi(e, 1, !1, null, null, t, !1, r, l)),
        (e[wn] = n.current),
        bt(e.nodeType === 8 ? e.parentNode : e),
        new Si(n)
      );
    }),
    (Ve.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Xi(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ve.flushSync = function (e) {
      return rt(e);
    }),
    (Ve.hydrate = function (e, n, t) {
      if (!_l(n)) throw Error(m(200));
      return Nl(null, e, n, !0, t);
    }),
    (Ve.hydrateRoot = function (e, n, t) {
      if (!Ei(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = "",
        i = Ea;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (n = ka(n, null, e, 1, t ?? null, l, !1, u, i)),
        (e[wn] = n.current),
        bt(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new xl(n);
    }),
    (Ve.render = function (e, n, t) {
      if (!_l(n)) throw Error(m(200));
      return Nl(null, e, n, !1, t);
    }),
    (Ve.unmountComponentAtNode = function (e) {
      if (!_l(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rt(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ve.unstable_batchedUpdates = pi),
    (Ve.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!_l(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Nl(e, n, t, !1, r);
    }),
    (Ve.version = "18.3.1-next-f1338f8080-20240426"),
    Ve
  );
}
var Ra;
function Ic() {
  if (Ra) return _i.exports;
  Ra = 1;
  function P() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P);
      } catch (M) {
        console.error(M);
      }
  }
  return P(), (_i.exports = Fc()), _i.exports;
}
var Oa;
function Uc() {
  if (Oa) return zl;
  Oa = 1;
  var P = Ic();
  return (zl.createRoot = P.createRoot), (zl.hydrateRoot = P.hydrateRoot), zl;
}
var Ac = Uc();
const ja = ["+", "-", "×", "÷"],
  Vc = 6;
function Bc() {
  const [P, M] = Ll.useState("0"),
    [m, ve] = Ll.useState([]),
    [V, W] = Ll.useState(!0),
    Q = (z) => {
      if (!(P.length >= Vc))
        if (V) M(z === "." ? "0." : z), W(!1);
        else if (z === ".") {
          if (P.includes(".")) return;
          M(P + z);
        } else M(P === "0" ? z : P + z);
    },
    le = (z) => {
      const D = P,
        U = [...m];
      (U.length === 0 || ja.includes(U[U.length - 1])) && U.push(D),
        U.length > 0 && ja.includes(U[U.length - 1])
          ? (U[U.length - 1] = z)
          : U.push(z),
        ve(U),
        W(!0);
    },
    K = (z) => {
      const D = [],
        U = [];
      for (
        z.forEach((ce) => {
          if (!isNaN(parseFloat(ce))) D.push(parseFloat(ce));
          else {
            for (; U.length > 0 && ye(U[U.length - 1]) >= ye(ce); ) pe(D, U);
            U.push(ce);
          }
        });
        U.length > 0;

      )
        pe(D, U);
      return D[0];
    },
    ye = (z) => (z === "×" || z === "÷" ? 2 : 1),
    pe = (z, D) => {
      const U = z.pop(),
        ce = z.pop();
      switch (D.pop()) {
        case "+":
          z.push(ce + U);
          break;
        case "-":
          z.push(ce - U);
          break;
        case "×":
          z.push(ce * U);
          break;
        case "÷":
          z.push(ce / U);
          break;
      }
    },
    b = () => {
      const z = [...m, P];
      try {
        const D = K(z);
        M(D.toString());
      } catch {
        M("Error");
      }
      ve([]), W(!0);
    },
    Z = () => {
      M("0"), ve([]), W(!0);
    },
    Re = () => {
      const z = parseFloat(P);
      M((z / 100).toString());
    },
    Oe = () => {
      const z = parseFloat(P);
      M((z * -1).toString());
    };
  return G.jsxs(G.Fragment, {
    children: [
      G.jsx("h1", {
        className: "2xl font-medium",
        children: "React Calculator",
      }),
      G.jsxs("div", {
        "data-testid": "calculator",
        className: "calculator",
        children: [
          G.jsx("div", {
            className: "display",
            "data-testid": "display",
            children: P,
          }),
          G.jsxs("div", {
            className: "buttons",
            children: [
              G.jsx("button", {
                role: "button",
                className: "function",
                onClick: Z,
                children: "AC",
              }),
              G.jsx("button", {
                role: "button",
                className: "function",
                onClick: Oe,
                children: "±",
              }),
              G.jsx("button", {
                role: "button",
                className: "function",
                onClick: Re,
                children: "%",
              }),
              G.jsx("button", {
                role: "button",
                className: "operator",
                onClick: () => le("÷"),
                children: "÷",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("7"),
                children: "7",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("8"),
                children: "8",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("9"),
                children: "9",
              }),
              G.jsx("button", {
                role: "button",
                className: "operator",
                onClick: () => le("×"),
                children: "×",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("4"),
                children: "4",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("5"),
                children: "5",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("6"),
                children: "6",
              }),
              G.jsx("button", {
                role: "button",
                className: "operator",
                onClick: () => le("-"),
                children: "-",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("1"),
                children: "1",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("2"),
                children: "2",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("3"),
                children: "3",
              }),
              G.jsx("button", {
                role: "button",
                className: "operator",
                onClick: () => le("+"),
                children: "+",
              }),
              G.jsx("button", {
                role: "button",
                className: "number zero",
                onClick: () => Q("0"),
                children: "0",
              }),
              G.jsx("button", {
                role: "button",
                className: "number",
                onClick: () => Q("."),
                children: ".",
              }),
              G.jsx("button", {
                role: "button",
                className: "operator",
                onClick: b,
                children: "=",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Hc() {
  return G.jsx("div", { children: G.jsx(Bc, {}) });
}
Ac.createRoot(document.getElementById("root")).render(
  G.jsx(Ll.StrictMode, { children: G.jsx(Hc, {}) }),
);
