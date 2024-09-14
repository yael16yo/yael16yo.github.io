function Yd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const l of s.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var jt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Mr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xd = { exports: {} },
  ml = {},
  Gd = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ri = Symbol.for("react.element"),
  wm = Symbol.for("react.portal"),
  Sm = Symbol.for("react.fragment"),
  xm = Symbol.for("react.strict_mode"),
  Em = Symbol.for("react.profiler"),
  _m = Symbol.for("react.provider"),
  Cm = Symbol.for("react.context"),
  Tm = Symbol.for("react.forward_ref"),
  km = Symbol.for("react.suspense"),
  Pm = Symbol.for("react.memo"),
  bm = Symbol.for("react.lazy"),
  Vu = Symbol.iterator;
function jm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Kd = Object.assign,
  qd = {};
function Lr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qd),
    (this.updater = n || Qd);
}
Lr.prototype.isReactComponent = {};
Lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zd() {}
Zd.prototype = Lr.prototype;
function Co(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qd),
    (this.updater = n || Qd);
}
var To = (Co.prototype = new Zd());
To.constructor = Co;
Kd(To, Lr.prototype);
To.isPureReactComponent = !0;
var Hu = Array.isArray,
  Jd = Object.prototype.hasOwnProperty,
  ko = { current: null },
  ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function tf(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Jd.call(t, r) && !ef.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var a = Array(o), u = 0; u < o; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Ri,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: ko.current,
  };
}
function Nm(e, t) {
  return {
    $$typeof: Ri,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Po(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ri;
}
function Mm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wu = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mm("" + e.key)
    : t.toString(36);
}
function ws(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (s) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ri:
          case wm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Fl(l, 0) : r),
      Hu(i)
        ? ((n = ""),
          e != null && (n = e.replace(Wu, "$&/") + "/"),
          ws(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Po(i) &&
            (i = Nm(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Wu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Hu(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var a = r + Fl(s, o);
      l += ws(s, t, n, a, i);
    }
  else if (((a = jm(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Fl(s, o++)), (l += ws(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Ki(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ws(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Lm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var We = { current: null },
  Ss = { transition: null },
  Om = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: Ss,
    ReactCurrentOwner: ko,
  };
function nf() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Ki,
  forEach: function (e, t, n) {
    Ki(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ki(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ki(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Po(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Lr;
q.Fragment = Sm;
q.Profiler = Em;
q.PureComponent = Co;
q.StrictMode = xm;
q.Suspense = km;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Om;
q.act = nf;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Kd({}, e.props),
    i = e.key,
    s = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (l = ko.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      Jd.call(t, a) &&
        !ef.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var u = 0; u < a; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Ri, type: e.type, key: i, ref: s, props: r, _owner: l };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Cm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _m, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = tf;
q.createFactory = function (e) {
  var t = tf.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Tm, render: e };
};
q.isValidElement = Po;
q.lazy = function (e) {
  return { $$typeof: bm, _payload: { _status: -1, _result: e }, _init: Lm };
};
q.memo = function (e, t) {
  return { $$typeof: Pm, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Ss.transition;
  Ss.transition = {};
  try {
    e();
  } finally {
    Ss.transition = t;
  }
};
q.unstable_act = nf;
q.useCallback = function (e, t) {
  return We.current.useCallback(e, t);
};
q.useContext = function (e) {
  return We.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return We.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return We.current.useEffect(e, t);
};
q.useId = function () {
  return We.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return We.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return We.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return We.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return We.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return We.current.useRef(e);
};
q.useState = function (e) {
  return We.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return We.current.useTransition();
};
q.version = "18.3.1";
Gd.exports = q;
var P = Gd.exports;
const Se = Mr(P),
  Rm = Yd({ __proto__: null, default: Se }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Im = P,
  zm = Symbol.for("react.element"),
  Dm = Symbol.for("react.fragment"),
  Am = Object.prototype.hasOwnProperty,
  Fm = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bm = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r,
    i = {},
    s = null,
    l = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Am.call(t, r) && !Bm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: zm,
    type: e,
    key: s,
    ref: l,
    props: i,
    _owner: Fm.current,
  };
}
ml.Fragment = Dm;
ml.jsx = rf;
ml.jsxs = rf;
Xd.exports = ml;
var g = Xd.exports,
  sf = { exports: {} },
  st = {},
  lf = { exports: {} },
  af = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, U) {
    var V = z.length;
    z.push(U);
    e: for (; 0 < V; ) {
      var Z = (V - 1) >>> 1,
        le = z[Z];
      if (0 < i(le, U)) (z[Z] = U), (z[V] = le), (V = Z);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var U = z[0],
      V = z.pop();
    if (V !== U) {
      z[0] = V;
      e: for (var Z = 0, le = z.length, Ct = le >>> 1; Z < Ct; ) {
        var Me = 2 * (Z + 1) - 1,
          ht = z[Me],
          Be = Me + 1,
          Gn = z[Be];
        if (0 > i(ht, V))
          Be < le && 0 > i(Gn, ht)
            ? ((z[Z] = Gn), (z[Be] = V), (Z = Be))
            : ((z[Z] = ht), (z[Me] = V), (Z = Me));
        else if (Be < le && 0 > i(Gn, V)) (z[Z] = Gn), (z[Be] = V), (Z = Be);
        else break e;
      }
    }
    return U;
  }
  function i(z, U) {
    var V = z.sortIndex - U.sortIndex;
    return V !== 0 ? V : z.id - U.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var l = Date,
      o = l.now();
    e.unstable_now = function () {
      return l.now() - o;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    w = !1,
    v = !1,
    m = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(z) {
    for (var U = n(u); U !== null; ) {
      if (U.callback === null) r(u);
      else if (U.startTime <= z)
        r(u), (U.sortIndex = U.expirationTime), t(a, U);
      else break;
      U = n(u);
    }
  }
  function E(z) {
    if (((m = !1), y(z), !v))
      if (n(a) !== null) (v = !0), ke(C);
      else {
        var U = n(u);
        U !== null && ie(E, U.startTime - z);
      }
  }
  function C(z, U) {
    (v = !1), m && ((m = !1), p(k), (k = -1)), (w = !0);
    var V = f;
    try {
      for (
        y(U), d = n(a);
        d !== null && (!(d.expirationTime > U) || (z && !R()));

      ) {
        var Z = d.callback;
        if (typeof Z == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var le = Z(d.expirationTime <= U);
          (U = e.unstable_now()),
            typeof le == "function" ? (d.callback = le) : d === n(a) && r(a),
            y(U);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Ct = !0;
      else {
        var Me = n(u);
        Me !== null && ie(E, Me.startTime - U), (Ct = !1);
      }
      return Ct;
    } finally {
      (d = null), (f = V), (w = !1);
    }
  }
  var S = !1,
    N = null,
    k = -1,
    M = 5,
    j = -1;
  function R() {
    return !(e.unstable_now() - j < M);
  }
  function D() {
    if (N !== null) {
      var z = e.unstable_now();
      j = z;
      var U = !0;
      try {
        U = N(!0, z);
      } finally {
        U ? A() : ((S = !1), (N = null));
      }
    } else S = !1;
  }
  var A;
  if (typeof h == "function")
    A = function () {
      h(D);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      re = B.port2;
    (B.port1.onmessage = D),
      (A = function () {
        re.postMessage(null);
      });
  } else
    A = function () {
      x(D, 0);
    };
  function ke(z) {
    (N = z), S || ((S = !0), A());
  }
  function ie(z, U) {
    k = x(function () {
      z(e.unstable_now());
    }, U);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || w || ((v = !0), ke(C));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (z) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = f;
      }
      var V = f;
      f = U;
      try {
        return z();
      } finally {
        f = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, U) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var V = f;
      f = z;
      try {
        return U();
      } finally {
        f = V;
      }
    }),
    (e.unstable_scheduleCallback = function (z, U, V) {
      var Z = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? Z + V : Z))
          : (V = Z),
        z)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = V + le),
        (z = {
          id: c++,
          callback: U,
          priorityLevel: z,
          startTime: V,
          expirationTime: le,
          sortIndex: -1,
        }),
        V > Z
          ? ((z.sortIndex = V),
            t(u, z),
            n(a) === null &&
              z === n(u) &&
              (m ? (p(k), (k = -1)) : (m = !0), ie(E, V - Z)))
          : ((z.sortIndex = le), t(a, z), v || w || ((v = !0), ke(C))),
        z
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (z) {
      var U = f;
      return function () {
        var V = f;
        f = U;
        try {
          return z.apply(this, arguments);
        } finally {
          f = V;
        }
      };
    });
})(af);
lf.exports = af;
var $m = lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um = P,
  it = $m;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var of = new Set(),
  mi = {};
function Wn(e, t) {
  Er(e, t), Er(e + "Capture", t);
}
function Er(e, t) {
  for (mi[e] = t, e = 0; e < t.length; e++) of.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _a = Object.prototype.hasOwnProperty,
  Vm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yu = {},
  Xu = {};
function Hm(e) {
  return _a.call(Xu, e)
    ? !0
    : _a.call(Yu, e)
    ? !1
    : Vm.test(e)
    ? (Xu[e] = !0)
    : ((Yu[e] = !0), !1);
}
function Wm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ym(e, t, n, r) {
  if (t === null || typeof t > "u" || Wm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ye(e, t, n, r, i, s, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = l);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new Ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new Ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new Ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new Ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new Ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bo = /[\-:]([a-z])/g;
function jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bo, jo);
    Ie[t] = new Ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(bo, jo);
    Ie[t] = new Ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(bo, jo);
  Ie[t] = new Ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new Ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function No(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ym(t, n, i, r) && (n = null),
    r || i === null
      ? Hm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qi = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
  Mo = Symbol.for("react.strict_mode"),
  Ca = Symbol.for("react.profiler"),
  uf = Symbol.for("react.provider"),
  cf = Symbol.for("react.context"),
  Lo = Symbol.for("react.forward_ref"),
  Ta = Symbol.for("react.suspense"),
  ka = Symbol.for("react.suspense_list"),
  Oo = Symbol.for("react.memo"),
  en = Symbol.for("react.lazy"),
  df = Symbol.for("react.offscreen"),
  Gu = Symbol.iterator;
function Fr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gu && e[Gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  Bl;
function Zr(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var $l = !1;
function Ul(e, t) {
  if (!e || $l) return "";
  $l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          l = i.length - 1,
          o = s.length - 1;
        1 <= l && 0 <= o && i[l] !== s[o];

      )
        o--;
      for (; 1 <= l && 0 <= o; l--, o--)
        if (i[l] !== s[o]) {
          if (l !== 1 || o !== 1)
            do
              if ((l--, o--, 0 > o || i[l] !== s[o])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= o);
          break;
        }
    }
  } finally {
    ($l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Zr(e) : "";
}
function Xm(e) {
  switch (e.tag) {
    case 5:
      return Zr(e.type);
    case 16:
      return Zr("Lazy");
    case 13:
      return Zr("Suspense");
    case 19:
      return Zr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ul(e.type, !1)), e;
    case 11:
      return (e = Ul(e.type.render, !1)), e;
    case 1:
      return (e = Ul(e.type, !0)), e;
    default:
      return "";
  }
}
function Pa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case Ca:
      return "Profiler";
    case Mo:
      return "StrictMode";
    case Ta:
      return "Suspense";
    case ka:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cf:
        return (e.displayName || "Context") + ".Consumer";
      case uf:
        return (e._context.displayName || "Context") + ".Provider";
      case Lo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Oo:
        return (
          (t = e.displayName || null), t !== null ? t : Pa(e.type) || "Memo"
        );
      case en:
        (t = e._payload), (e = e._init);
        try {
          return Pa(e(t));
        } catch {}
    }
  return null;
}
function Gm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(t);
    case 8:
      return t === Mo ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function yn(e) {
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
function ff(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qm(e) {
  var t = ff(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), s.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Zi(e) {
  e._valueTracker || (e._valueTracker = Qm(e));
}
function pf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ff(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Is(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ba(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hf(e, t) {
  (t = t.checked), t != null && No(e, "checked", t, !1);
}
function ja(e, t) {
  hf(e, t);
  var n = yn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Na(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Na(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ku(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Na(e, t, n) {
  (t !== "number" || Is(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jr = Array.isArray;
function mr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ma(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Jr(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: yn(n) };
}
function mf(e, t) {
  var n = yn(t.value),
    r = yn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function La(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ji,
  gf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ji = Ji || document.createElement("div"),
          Ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ji.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ii = {
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
  Km = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function (e) {
  Km.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ii[t] = ii[e]);
  });
});
function yf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ii.hasOwnProperty(e) && ii[e])
    ? ("" + t).trim()
    : t + "px";
}
function wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = yf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var qm = ge(
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
  }
);
function Oa(e, t) {
  if (t) {
    if (qm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Ia = null;
function Ro(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var za = null,
  vr = null,
  gr = null;
function Ju(e) {
  if ((e = Di(e))) {
    if (typeof za != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), za(e.stateNode, e.type, t));
  }
}
function Sf(e) {
  vr ? (gr ? gr.push(e) : (gr = [e])) : (vr = e);
}
function xf() {
  if (vr) {
    var e = vr,
      t = gr;
    if (((gr = vr = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
  }
}
function Ef(e, t) {
  return e(t);
}
function _f() {}
var Vl = !1;
function Cf(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return Ef(e, t, n);
  } finally {
    (Vl = !1), (vr !== null || gr !== null) && (_f(), xf());
  }
}
function gi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Da = !1;
if (Vt)
  try {
    var Br = {};
    Object.defineProperty(Br, "passive", {
      get: function () {
        Da = !0;
      },
    }),
      window.addEventListener("test", Br, Br),
      window.removeEventListener("test", Br, Br);
  } catch {
    Da = !1;
  }
function Zm(e, t, n, r, i, s, l, o, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var si = !1,
  zs = null,
  Ds = !1,
  Aa = null,
  Jm = {
    onError: function (e) {
      (si = !0), (zs = e);
    },
  };
function ev(e, t, n, r, i, s, l, o, a) {
  (si = !1), (zs = null), Zm.apply(Jm, arguments);
}
function tv(e, t, n, r, i, s, l, o, a) {
  if ((ev.apply(this, arguments), si)) {
    if (si) {
      var u = zs;
      (si = !1), (zs = null);
    } else throw Error(O(198));
    Ds || ((Ds = !0), (Aa = u));
  }
}
function Yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Tf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ec(e) {
  if (Yn(e) !== e) throw Error(O(188));
}
function nv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return ec(i), e;
        if (s === r) return ec(i), t;
        s = s.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var l = !1, o = i.child; o; ) {
        if (o === n) {
          (l = !0), (n = i), (r = s);
          break;
        }
        if (o === r) {
          (l = !0), (r = i), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!l) {
        for (o = s.child; o; ) {
          if (o === n) {
            (l = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (l = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function kf(e) {
  return (e = nv(e)), e !== null ? Pf(e) : null;
}
function Pf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bf = it.unstable_scheduleCallback,
  tc = it.unstable_cancelCallback,
  rv = it.unstable_shouldYield,
  iv = it.unstable_requestPaint,
  Ee = it.unstable_now,
  sv = it.unstable_getCurrentPriorityLevel,
  Io = it.unstable_ImmediatePriority,
  jf = it.unstable_UserBlockingPriority,
  As = it.unstable_NormalPriority,
  lv = it.unstable_LowPriority,
  Nf = it.unstable_IdlePriority,
  vl = null,
  Nt = null;
function av(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var St = Math.clz32 ? Math.clz32 : cv,
  ov = Math.log,
  uv = Math.LN2;
function cv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ov(e) / uv) | 0)) | 0;
}
var es = 64,
  ts = 4194304;
function ei(e) {
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
function Fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var o = l & ~i;
    o !== 0 ? (r = ei(o)) : ((s &= l), s !== 0 && (r = ei(s)));
  } else (l = n & ~i), l !== 0 ? (r = ei(l)) : s !== 0 && (r = ei(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - St(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function dv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function fv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var l = 31 - St(s),
      o = 1 << l,
      a = i[l];
    a === -1
      ? (!(o & n) || o & r) && (i[l] = dv(o, t))
      : a <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function Fa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Mf() {
  var e = es;
  return (es <<= 1), !(es & 4194240) && (es = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - St(t)),
    (e[t] = n);
}
function pv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - St(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function zo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - St(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ne = 0;
function Lf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Of,
  Do,
  Rf,
  If,
  zf,
  Ba = !1,
  ns = [],
  on = null,
  un = null,
  cn = null,
  yi = new Map(),
  wi = new Map(),
  nn = [],
  hv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function nc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      un = null;
      break;
    case "mouseover":
    case "mouseout":
      cn = null;
      break;
    case "pointerover":
    case "pointerout":
      yi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wi.delete(t.pointerId);
  }
}
function $r(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Di(t)), t !== null && Do(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function mv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (on = $r(on, e, t, n, r, i)), !0;
    case "dragenter":
      return (un = $r(un, e, t, n, r, i)), !0;
    case "mouseover":
      return (cn = $r(cn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return yi.set(s, $r(yi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), wi.set(s, $r(wi.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Df(e) {
  var t = Nn(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Tf(n)), t !== null)) {
          (e.blockedOn = t),
            zf(e.priority, function () {
              Rf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ia = r), n.target.dispatchEvent(r), (Ia = null);
    } else return (t = Di(n)), t !== null && Do(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function rc(e, t, n) {
  xs(e) && n.delete(t);
}
function vv() {
  (Ba = !1),
    on !== null && xs(on) && (on = null),
    un !== null && xs(un) && (un = null),
    cn !== null && xs(cn) && (cn = null),
    yi.forEach(rc),
    wi.forEach(rc);
}
function Ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ba ||
      ((Ba = !0),
      it.unstable_scheduleCallback(it.unstable_NormalPriority, vv)));
}
function Si(e) {
  function t(i) {
    return Ur(i, e);
  }
  if (0 < ns.length) {
    Ur(ns[0], e);
    for (var n = 1; n < ns.length; n++) {
      var r = ns[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Ur(on, e),
      un !== null && Ur(un, e),
      cn !== null && Ur(cn, e),
      yi.forEach(t),
      wi.forEach(t),
      n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); )
    Df(n), n.blockedOn === null && nn.shift();
}
var yr = Gt.ReactCurrentBatchConfig,
  Bs = !0;
function gv(e, t, n, r) {
  var i = ne,
    s = yr.transition;
  yr.transition = null;
  try {
    (ne = 1), Ao(e, t, n, r);
  } finally {
    (ne = i), (yr.transition = s);
  }
}
function yv(e, t, n, r) {
  var i = ne,
    s = yr.transition;
  yr.transition = null;
  try {
    (ne = 4), Ao(e, t, n, r);
  } finally {
    (ne = i), (yr.transition = s);
  }
}
function Ao(e, t, n, r) {
  if (Bs) {
    var i = $a(e, t, n, r);
    if (i === null) ea(e, t, r, $s, n), nc(e, r);
    else if (mv(i, e, t, n, r)) r.stopPropagation();
    else if ((nc(e, r), t & 4 && -1 < hv.indexOf(e))) {
      for (; i !== null; ) {
        var s = Di(i);
        if (
          (s !== null && Of(s),
          (s = $a(e, t, n, r)),
          s === null && ea(e, t, r, $s, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else ea(e, t, r, null, n);
  }
}
var $s = null;
function $a(e, t, n, r) {
  if ((($s = null), (e = Ro(r)), (e = Nn(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Tf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($s = e), null;
}
function Af(e) {
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
      switch (sv()) {
        case Io:
          return 1;
        case jf:
          return 4;
        case As:
        case lv:
          return 16;
        case Nf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null,
  Fo = null,
  Es = null;
function Ff() {
  if (Es) return Es;
  var e,
    t = Fo,
    n = t.length,
    r,
    i = "value" in sn ? sn.value : sn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[s - r]; r++);
  return (Es = i.slice(e, 1 < r ? 1 - r : void 0));
}
function _s(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rs() {
  return !0;
}
function ic() {
  return !1;
}
function lt(e) {
  function t(n, r, i, s, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = l),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? rs
        : ic),
      (this.isPropagationStopped = ic),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = rs));
      },
      persist: function () {},
      isPersistent: rs,
    }),
    t
  );
}
var Or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bo = lt(Or),
  zi = ge({}, Or, { view: 0, detail: 0 }),
  wv = lt(zi),
  Wl,
  Yl,
  Vr,
  gl = ge({}, zi, {
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
    getModifierState: $o,
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
        : (e !== Vr &&
            (Vr && e.type === "mousemove"
              ? ((Wl = e.screenX - Vr.screenX), (Yl = e.screenY - Vr.screenY))
              : (Yl = Wl = 0),
            (Vr = e)),
          Wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yl;
    },
  }),
  sc = lt(gl),
  Sv = ge({}, gl, { dataTransfer: 0 }),
  xv = lt(Sv),
  Ev = ge({}, zi, { relatedTarget: 0 }),
  Xl = lt(Ev),
  _v = ge({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cv = lt(_v),
  Tv = ge({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kv = lt(Tv),
  Pv = ge({}, Or, { data: 0 }),
  lc = lt(Pv),
  bv = {
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
  jv = {
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
  Nv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Nv[e]) ? !!t[e] : !1;
}
function $o() {
  return Mv;
}
var Lv = ge({}, zi, {
    key: function (e) {
      if (e.key) {
        var t = bv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _s(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? jv[e.keyCode] || "Unidentified"
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
    getModifierState: $o,
    charCode: function (e) {
      return e.type === "keypress" ? _s(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _s(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ov = lt(Lv),
  Rv = ge({}, gl, {
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
  ac = lt(Rv),
  Iv = ge({}, zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $o,
  }),
  zv = lt(Iv),
  Dv = ge({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Av = lt(Dv),
  Fv = ge({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Bv = lt(Fv),
  $v = [9, 13, 27, 32],
  Uo = Vt && "CompositionEvent" in window,
  li = null;
Vt && "documentMode" in document && (li = document.documentMode);
var Uv = Vt && "TextEvent" in window && !li,
  Bf = Vt && (!Uo || (li && 8 < li && 11 >= li)),
  oc = " ",
  uc = !1;
function $f(e, t) {
  switch (e) {
    case "keyup":
      return $v.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Uf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ir = !1;
function Vv(e, t) {
  switch (e) {
    case "compositionend":
      return Uf(t);
    case "keypress":
      return t.which !== 32 ? null : ((uc = !0), oc);
    case "textInput":
      return (e = t.data), e === oc && uc ? null : e;
    default:
      return null;
  }
}
function Hv(e, t) {
  if (ir)
    return e === "compositionend" || (!Uo && $f(e, t))
      ? ((e = Ff()), (Es = Fo = sn = null), (ir = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wv = {
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
function cc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wv[e.type] : t === "textarea";
}
function Vf(e, t, n, r) {
  Sf(r),
    (t = Us(t, "onChange")),
    0 < t.length &&
      ((n = new Bo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ai = null,
  xi = null;
function Yv(e) {
  ep(e, 0);
}
function yl(e) {
  var t = ar(e);
  if (pf(t)) return e;
}
function Xv(e, t) {
  if (e === "change") return t;
}
var Hf = !1;
if (Vt) {
  var Gl;
  if (Vt) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var dc = document.createElement("div");
      dc.setAttribute("oninput", "return;"),
        (Ql = typeof dc.oninput == "function");
    }
    Gl = Ql;
  } else Gl = !1;
  Hf = Gl && (!document.documentMode || 9 < document.documentMode);
}
function fc() {
  ai && (ai.detachEvent("onpropertychange", Wf), (xi = ai = null));
}
function Wf(e) {
  if (e.propertyName === "value" && yl(xi)) {
    var t = [];
    Vf(t, xi, e, Ro(e)), Cf(Yv, t);
  }
}
function Gv(e, t, n) {
  e === "focusin"
    ? (fc(), (ai = t), (xi = n), ai.attachEvent("onpropertychange", Wf))
    : e === "focusout" && fc();
}
function Qv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yl(xi);
}
function Kv(e, t) {
  if (e === "click") return yl(t);
}
function qv(e, t) {
  if (e === "input" || e === "change") return yl(t);
}
function Zv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : Zv;
function Ei(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!_a.call(t, i) || !Et(e[i], t[i])) return !1;
  }
  return !0;
}
function pc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hc(e, t) {
  var n = pc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = pc(n);
  }
}
function Yf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Yf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xf() {
  for (var e = window, t = Is(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Is(e.document);
  }
  return t;
}
function Vo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Jv(e) {
  var t = Xf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Yf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = hc(n, s));
        var l = hc(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var eg = Vt && "documentMode" in document && 11 >= document.documentMode,
  sr = null,
  Ua = null,
  oi = null,
  Va = !1;
function mc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Va ||
    sr == null ||
    sr !== Is(r) ||
    ((r = sr),
    "selectionStart" in r && Vo(r)
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
    (oi && Ei(oi, r)) ||
      ((oi = r),
      (r = Us(Ua, "onSelect")),
      0 < r.length &&
        ((t = new Bo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = sr))));
}
function is(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: is("Animation", "AnimationEnd"),
    animationiteration: is("Animation", "AnimationIteration"),
    animationstart: is("Animation", "AnimationStart"),
    transitionend: is("Transition", "TransitionEnd"),
  },
  Kl = {},
  Gf = {};
Vt &&
  ((Gf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function wl(e) {
  if (Kl[e]) return Kl[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gf) return (Kl[e] = t[n]);
  return e;
}
var Qf = wl("animationend"),
  Kf = wl("animationiteration"),
  qf = wl("animationstart"),
  Zf = wl("transitionend"),
  Jf = new Map(),
  vc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sn(e, t) {
  Jf.set(e, t), Wn(t, [e]);
}
for (var ql = 0; ql < vc.length; ql++) {
  var Zl = vc[ql],
    tg = Zl.toLowerCase(),
    ng = Zl[0].toUpperCase() + Zl.slice(1);
  Sn(tg, "on" + ng);
}
Sn(Qf, "onAnimationEnd");
Sn(Kf, "onAnimationIteration");
Sn(qf, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(Zf, "onTransitionEnd");
Er("onMouseEnter", ["mouseout", "mouseover"]);
Er("onMouseLeave", ["mouseout", "mouseover"]);
Er("onPointerEnter", ["pointerout", "pointerover"]);
Er("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ti =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
function gc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), tv(r, t, void 0, e), (e.currentTarget = null);
}
function ep(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var o = r[l],
            a = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), a !== s && i.isPropagationStopped())) break e;
          gc(i, o, u), (s = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((o = r[l]),
            (a = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          gc(i, o, u), (s = a);
        }
    }
  }
  if (Ds) throw ((e = Aa), (Ds = !1), (Aa = null), e);
}
function ce(e, t) {
  var n = t[Ga];
  n === void 0 && (n = t[Ga] = new Set());
  var r = e + "__bubble";
  n.has(r) || (tp(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  t && (r |= 4), tp(n, e, r, t);
}
var ss = "_reactListening" + Math.random().toString(36).slice(2);
function _i(e) {
  if (!e[ss]) {
    (e[ss] = !0),
      of.forEach(function (n) {
        n !== "selectionchange" && (rg.has(n) || Jl(n, !1, e), Jl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ss] || ((t[ss] = !0), Jl("selectionchange", !1, t));
  }
}
function tp(e, t, n, r) {
  switch (Af(t)) {
    case 1:
      var i = gv;
      break;
    case 4:
      i = yv;
      break;
    default:
      i = Ao;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Da ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ea(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; o !== null; ) {
          if (((l = Nn(o)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = s = l;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Cf(function () {
    var u = s,
      c = Ro(n),
      d = [];
    e: {
      var f = Jf.get(e);
      if (f !== void 0) {
        var w = Bo,
          v = e;
        switch (e) {
          case "keypress":
            if (_s(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ov;
            break;
          case "focusin":
            (v = "focus"), (w = Xl);
            break;
          case "focusout":
            (v = "blur"), (w = Xl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Xl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = sc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = zv;
            break;
          case Qf:
          case Kf:
          case qf:
            w = Cv;
            break;
          case Zf:
            w = Av;
            break;
          case "scroll":
            w = wv;
            break;
          case "wheel":
            w = Bv;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = kv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ac;
        }
        var m = (t & 4) !== 0,
          x = !m && e === "scroll",
          p = m ? (f !== null ? f + "Capture" : null) : f;
        m = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              p !== null && ((E = gi(h, p)), E != null && m.push(Ci(h, E, y)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < m.length &&
          ((f = new w(f, v, null, n, c)), d.push({ event: f, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ia &&
            (v = n.relatedTarget || n.fromElement) &&
            (Nn(v) || v[Ht]))
        )
          break e;
        if (
          (w || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          w
            ? ((v = n.relatedTarget || n.toElement),
              (w = u),
              (v = v ? Nn(v) : null),
              v !== null &&
                ((x = Yn(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((w = null), (v = u)),
          w !== v)
        ) {
          if (
            ((m = sc),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = ac),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (x = w == null ? f : ar(w)),
            (y = v == null ? f : ar(v)),
            (f = new m(E, h + "leave", w, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (E = null),
            Nn(c) === u &&
              ((m = new m(p, h + "enter", v, n, c)),
              (m.target = y),
              (m.relatedTarget = x),
              (E = m)),
            (x = E),
            w && v)
          )
            t: {
              for (m = w, p = v, h = 0, y = m; y; y = Jn(y)) h++;
              for (y = 0, E = p; E; E = Jn(E)) y++;
              for (; 0 < h - y; ) (m = Jn(m)), h--;
              for (; 0 < y - h; ) (p = Jn(p)), y--;
              for (; h--; ) {
                if (m === p || (p !== null && m === p.alternate)) break t;
                (m = Jn(m)), (p = Jn(p));
              }
              m = null;
            }
          else m = null;
          w !== null && yc(d, f, w, m, !1),
            v !== null && x !== null && yc(d, x, v, m, !0);
        }
      }
      e: {
        if (
          ((f = u ? ar(u) : window),
          (w = f.nodeName && f.nodeName.toLowerCase()),
          w === "select" || (w === "input" && f.type === "file"))
        )
          var C = Xv;
        else if (cc(f))
          if (Hf) C = qv;
          else {
            C = Qv;
            var S = Gv;
          }
        else
          (w = f.nodeName) &&
            w.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = Kv);
        if (C && (C = C(e, u))) {
          Vf(d, C, n, c);
          break e;
        }
        S && S(e, f, u),
          e === "focusout" &&
            (S = f._wrapperState) &&
            S.controlled &&
            f.type === "number" &&
            Na(f, "number", f.value);
      }
      switch (((S = u ? ar(u) : window), e)) {
        case "focusin":
          (cc(S) || S.contentEditable === "true") &&
            ((sr = S), (Ua = u), (oi = null));
          break;
        case "focusout":
          oi = Ua = sr = null;
          break;
        case "mousedown":
          Va = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Va = !1), mc(d, n, c);
          break;
        case "selectionchange":
          if (eg) break;
        case "keydown":
        case "keyup":
          mc(d, n, c);
      }
      var N;
      if (Uo)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        ir
          ? $f(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Bf &&
          n.locale !== "ko" &&
          (ir || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && ir && (N = Ff())
            : ((sn = c),
              (Fo = "value" in sn ? sn.value : sn.textContent),
              (ir = !0))),
        (S = Us(u, k)),
        0 < S.length &&
          ((k = new lc(k, e, null, n, c)),
          d.push({ event: k, listeners: S }),
          N ? (k.data = N) : ((N = Uf(n)), N !== null && (k.data = N)))),
        (N = Uv ? Vv(e, n) : Hv(e, n)) &&
          ((u = Us(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lc("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    ep(d, t);
  });
}
function Ci(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = gi(e, n)),
      s != null && r.unshift(Ci(e, s, i)),
      (s = gi(e, t)),
      s != null && r.push(Ci(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yc(e, t, n, r, i) {
  for (var s = t._reactName, l = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      u = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((a = gi(n, s)), a != null && l.unshift(Ci(n, a, o)))
        : i || ((a = gi(n, s)), a != null && l.push(Ci(n, a, o)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var ig = /\r\n?/g,
  sg = /\u0000|\uFFFD/g;
function wc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ig,
      `
`
    )
    .replace(sg, "");
}
function ls(e, t, n) {
  if (((t = wc(t)), wc(e) !== t && n)) throw Error(O(425));
}
function Vs() {}
var Ha = null,
  Wa = null;
function Ya(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xa = typeof setTimeout == "function" ? setTimeout : void 0,
  lg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sc = typeof Promise == "function" ? Promise : void 0,
  ag =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sc < "u"
      ? function (e) {
          return Sc.resolve(null).then(e).catch(og);
        }
      : Xa;
function og(e) {
  setTimeout(function () {
    throw e;
  });
}
function ta(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Si(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Si(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function xc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Rr = Math.random().toString(36).slice(2),
  bt = "__reactFiber$" + Rr,
  Ti = "__reactProps$" + Rr,
  Ht = "__reactContainer$" + Rr,
  Ga = "__reactEvents$" + Rr,
  ug = "__reactListeners$" + Rr,
  cg = "__reactHandles$" + Rr;
function Nn(e) {
  var t = e[bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xc(e); e !== null; ) {
          if ((n = e[bt])) return n;
          e = xc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Di(e) {
  return (
    (e = e[bt] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Sl(e) {
  return e[Ti] || null;
}
var Qa = [],
  or = -1;
function xn(e) {
  return { current: e };
}
function de(e) {
  0 > or || ((e.current = Qa[or]), (Qa[or] = null), or--);
}
function ue(e, t) {
  or++, (Qa[or] = e.current), (e.current = t);
}
var wn = {},
  Fe = xn(wn),
  Qe = xn(!1),
  An = wn;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Hs() {
  de(Qe), de(Fe);
}
function Ec(e, t, n) {
  if (Fe.current !== wn) throw Error(O(168));
  ue(Fe, t), ue(Qe, n);
}
function np(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, Gm(e) || "Unknown", i));
  return ge({}, n, r);
}
function Ws(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
    (An = Fe.current),
    ue(Fe, e),
    ue(Qe, Qe.current),
    !0
  );
}
function _c(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = np(e, t, An)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(Qe),
      de(Fe),
      ue(Fe, e))
    : de(Qe),
    ue(Qe, n);
}
var zt = null,
  xl = !1,
  na = !1;
function rp(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function dg(e) {
  (xl = !0), rp(e);
}
function En() {
  if (!na && zt !== null) {
    na = !0;
    var e = 0,
      t = ne;
    try {
      var n = zt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (xl = !1);
    } catch (i) {
      throw (zt !== null && (zt = zt.slice(e + 1)), bf(Io, En), i);
    } finally {
      (ne = t), (na = !1);
    }
  }
  return null;
}
var ur = [],
  cr = 0,
  Ys = null,
  Xs = 0,
  ot = [],
  ut = 0,
  Fn = null,
  At = 1,
  Ft = "";
function kn(e, t) {
  (ur[cr++] = Xs), (ur[cr++] = Ys), (Ys = e), (Xs = t);
}
function ip(e, t, n) {
  (ot[ut++] = At), (ot[ut++] = Ft), (ot[ut++] = Fn), (Fn = e);
  var r = At;
  e = Ft;
  var i = 32 - St(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - St(t) + i;
  if (30 < s) {
    var l = i - (i % 5);
    (s = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (At = (1 << (32 - St(t) + i)) | (n << i) | r),
      (Ft = s + e);
  } else (At = (1 << s) | (n << i) | r), (Ft = e);
}
function Ho(e) {
  e.return !== null && (kn(e, 1), ip(e, 1, 0));
}
function Wo(e) {
  for (; e === Ys; )
    (Ys = ur[--cr]), (ur[cr] = null), (Xs = ur[--cr]), (ur[cr] = null);
  for (; e === Fn; )
    (Fn = ot[--ut]),
      (ot[ut] = null),
      (Ft = ot[--ut]),
      (ot[ut] = null),
      (At = ot[--ut]),
      (ot[ut] = null);
}
var rt = null,
  nt = null,
  pe = !1,
  wt = null;
function sp(e, t) {
  var n = ct(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: At, overflow: Ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ka(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qa(e) {
  if (pe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Cc(e, t)) {
        if (Ka(e)) throw Error(O(418));
        t = dn(n.nextSibling);
        var r = rt;
        t && Cc(e, t)
          ? sp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e));
      }
    } else {
      if (Ka(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e);
    }
  }
}
function Tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function as(e) {
  if (e !== rt) return !1;
  if (!pe) return Tc(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ya(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (Ka(e)) throw (lp(), Error(O(418)));
    for (; t; ) sp(e, t), (t = dn(t.nextSibling));
  }
  if ((Tc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function lp() {
  for (var e = nt; e; ) e = dn(e.nextSibling);
}
function Cr() {
  (nt = rt = null), (pe = !1);
}
function Yo(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var fg = Gt.ReactCurrentBatchConfig;
function Hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (l) {
            var o = i.refs;
            l === null ? delete o[s] : (o[s] = l);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function kc(e) {
  var t = e._init;
  return t(e._payload);
}
function ap(e) {
  function t(p, h) {
    if (e) {
      var y = p.deletions;
      y === null ? ((p.deletions = [h]), (p.flags |= 16)) : y.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = mn(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, h, y) {
    return (
      (p.index = y),
      e
        ? ((y = p.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((p.flags |= 2), h) : y)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function o(p, h, y, E) {
    return h === null || h.tag !== 6
      ? ((h = ua(y, p.mode, E)), (h.return = p), h)
      : ((h = i(h, y)), (h.return = p), h);
  }
  function a(p, h, y, E) {
    var C = y.type;
    return C === rr
      ? c(p, h, y.props.children, E, y.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === en &&
            kc(C) === h.type))
      ? ((E = i(h, y.props)), (E.ref = Hr(p, h, y)), (E.return = p), E)
      : ((E = Ns(y.type, y.key, y.props, null, p.mode, E)),
        (E.ref = Hr(p, h, y)),
        (E.return = p),
        E);
  }
  function u(p, h, y, E) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = ca(y, p.mode, E)), (h.return = p), h)
      : ((h = i(h, y.children || [])), (h.return = p), h);
  }
  function c(p, h, y, E, C) {
    return h === null || h.tag !== 7
      ? ((h = Dn(y, p.mode, E, C)), (h.return = p), h)
      : ((h = i(h, y)), (h.return = p), h);
  }
  function d(p, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ua("" + h, p.mode, y)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qi:
          return (
            (y = Ns(h.type, h.key, h.props, null, p.mode, y)),
            (y.ref = Hr(p, null, h)),
            (y.return = p),
            y
          );
        case nr:
          return (h = ca(h, p.mode, y)), (h.return = p), h;
        case en:
          var E = h._init;
          return d(p, E(h._payload), y);
      }
      if (Jr(h) || Fr(h))
        return (h = Dn(h, p.mode, y, null)), (h.return = p), h;
      os(p, h);
    }
    return null;
  }
  function f(p, h, y, E) {
    var C = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : o(p, h, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case qi:
          return y.key === C ? a(p, h, y, E) : null;
        case nr:
          return y.key === C ? u(p, h, y, E) : null;
        case en:
          return (C = y._init), f(p, h, C(y._payload), E);
      }
      if (Jr(y) || Fr(y)) return C !== null ? null : c(p, h, y, E, null);
      os(p, y);
    }
    return null;
  }
  function w(p, h, y, E, C) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(y) || null), o(h, p, "" + E, C);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case qi:
          return (p = p.get(E.key === null ? y : E.key) || null), a(h, p, E, C);
        case nr:
          return (p = p.get(E.key === null ? y : E.key) || null), u(h, p, E, C);
        case en:
          var S = E._init;
          return w(p, h, y, S(E._payload), C);
      }
      if (Jr(E) || Fr(E)) return (p = p.get(y) || null), c(h, p, E, C, null);
      os(h, E);
    }
    return null;
  }
  function v(p, h, y, E) {
    for (
      var C = null, S = null, N = h, k = (h = 0), M = null;
      N !== null && k < y.length;
      k++
    ) {
      N.index > k ? ((M = N), (N = null)) : (M = N.sibling);
      var j = f(p, N, y[k], E);
      if (j === null) {
        N === null && (N = M);
        break;
      }
      e && N && j.alternate === null && t(p, N),
        (h = s(j, h, k)),
        S === null ? (C = j) : (S.sibling = j),
        (S = j),
        (N = M);
    }
    if (k === y.length) return n(p, N), pe && kn(p, k), C;
    if (N === null) {
      for (; k < y.length; k++)
        (N = d(p, y[k], E)),
          N !== null &&
            ((h = s(N, h, k)), S === null ? (C = N) : (S.sibling = N), (S = N));
      return pe && kn(p, k), C;
    }
    for (N = r(p, N); k < y.length; k++)
      (M = w(N, p, k, y[k], E)),
        M !== null &&
          (e && M.alternate !== null && N.delete(M.key === null ? k : M.key),
          (h = s(M, h, k)),
          S === null ? (C = M) : (S.sibling = M),
          (S = M));
    return (
      e &&
        N.forEach(function (R) {
          return t(p, R);
        }),
      pe && kn(p, k),
      C
    );
  }
  function m(p, h, y, E) {
    var C = Fr(y);
    if (typeof C != "function") throw Error(O(150));
    if (((y = C.call(y)), y == null)) throw Error(O(151));
    for (
      var S = (C = null), N = h, k = (h = 0), M = null, j = y.next();
      N !== null && !j.done;
      k++, j = y.next()
    ) {
      N.index > k ? ((M = N), (N = null)) : (M = N.sibling);
      var R = f(p, N, j.value, E);
      if (R === null) {
        N === null && (N = M);
        break;
      }
      e && N && R.alternate === null && t(p, N),
        (h = s(R, h, k)),
        S === null ? (C = R) : (S.sibling = R),
        (S = R),
        (N = M);
    }
    if (j.done) return n(p, N), pe && kn(p, k), C;
    if (N === null) {
      for (; !j.done; k++, j = y.next())
        (j = d(p, j.value, E)),
          j !== null &&
            ((h = s(j, h, k)), S === null ? (C = j) : (S.sibling = j), (S = j));
      return pe && kn(p, k), C;
    }
    for (N = r(p, N); !j.done; k++, j = y.next())
      (j = w(N, p, k, j.value, E)),
        j !== null &&
          (e && j.alternate !== null && N.delete(j.key === null ? k : j.key),
          (h = s(j, h, k)),
          S === null ? (C = j) : (S.sibling = j),
          (S = j));
    return (
      e &&
        N.forEach(function (D) {
          return t(p, D);
        }),
      pe && kn(p, k),
      C
    );
  }
  function x(p, h, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === rr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case qi:
          e: {
            for (var C = y.key, S = h; S !== null; ) {
              if (S.key === C) {
                if (((C = y.type), C === rr)) {
                  if (S.tag === 7) {
                    n(p, S.sibling),
                      (h = i(S, y.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === en &&
                    kc(C) === S.type)
                ) {
                  n(p, S.sibling),
                    (h = i(S, y.props)),
                    (h.ref = Hr(p, S, y)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, S);
                break;
              } else t(p, S);
              S = S.sibling;
            }
            y.type === rr
              ? ((h = Dn(y.props.children, p.mode, E, y.key)),
                (h.return = p),
                (p = h))
              : ((E = Ns(y.type, y.key, y.props, null, p.mode, E)),
                (E.ref = Hr(p, h, y)),
                (E.return = p),
                (p = E));
          }
          return l(p);
        case nr:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, y.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = ca(y, p.mode, E)), (h.return = p), (p = h);
          }
          return l(p);
        case en:
          return (S = y._init), x(p, h, S(y._payload), E);
      }
      if (Jr(y)) return v(p, h, y, E);
      if (Fr(y)) return m(p, h, y, E);
      os(p, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, y)), (h.return = p), (p = h))
          : (n(p, h), (h = ua(y, p.mode, E)), (h.return = p), (p = h)),
        l(p))
      : n(p, h);
  }
  return x;
}
var Tr = ap(!0),
  op = ap(!1),
  Gs = xn(null),
  Qs = null,
  dr = null,
  Xo = null;
function Go() {
  Xo = dr = Qs = null;
}
function Qo(e) {
  var t = Gs.current;
  de(Gs), (e._currentValue = t);
}
function Za(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function wr(e, t) {
  (Qs = e),
    (Xo = dr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function ft(e) {
  var t = e._currentValue;
  if (Xo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
      if (Qs === null) throw Error(O(308));
      (dr = e), (Qs.dependencies = { lanes: 0, firstContext: e });
    } else dr = dr.next = e;
  return t;
}
var Mn = null;
function Ko(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function up(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ko(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Wt(e, r)
  );
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tn = !1;
function qo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Wt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ko(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Wt(e, n)
  );
}
function Cs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zo(e, n);
  }
}
function Pc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = l) : (s = s.next = l), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ks(e, t, n, r) {
  var i = e.updateQueue;
  tn = !1;
  var s = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var a = o,
      u = a.next;
    (a.next = null), l === null ? (s = u) : (l.next = u), (l = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== l &&
        (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (l = 0), (c = u = a = null), (o = s);
    do {
      var f = o.lane,
        w = o.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            m = o;
          switch (((f = t), (w = n), m.tag)) {
            case 1:
              if (((v = m.payload), typeof v == "function")) {
                d = v.call(w, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = m.payload),
                (f = typeof v == "function" ? v.call(w, d, f) : v),
                f == null)
              )
                break e;
              d = ge({}, d, f);
              break e;
            case 2:
              tn = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [o]) : f.push(o));
      } else
        (w = {
          eventTime: w,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (a = d)) : (c = c.next = w),
          (l |= f);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (f = o),
          (o = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ($n |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function bc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var Ai = {},
  Mt = xn(Ai),
  ki = xn(Ai),
  Pi = xn(Ai);
function Ln(e) {
  if (e === Ai) throw Error(O(174));
  return e;
}
function Zo(e, t) {
  switch ((ue(Pi, t), ue(ki, e), ue(Mt, Ai), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : La(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = La(t, e));
  }
  de(Mt), ue(Mt, t);
}
function kr() {
  de(Mt), de(ki), de(Pi);
}
function dp(e) {
  Ln(Pi.current);
  var t = Ln(Mt.current),
    n = La(t, e.type);
  t !== n && (ue(ki, e), ue(Mt, n));
}
function Jo(e) {
  ki.current === e && (de(Mt), de(ki));
}
var me = xn(0);
function qs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ra = [];
function eu() {
  for (var e = 0; e < ra.length; e++)
    ra[e]._workInProgressVersionPrimary = null;
  ra.length = 0;
}
var Ts = Gt.ReactCurrentDispatcher,
  ia = Gt.ReactCurrentBatchConfig,
  Bn = 0,
  ve = null,
  Pe = null,
  je = null,
  Zs = !1,
  ui = !1,
  bi = 0,
  pg = 0;
function ze() {
  throw Error(O(321));
}
function tu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function nu(e, t, n, r, i, s) {
  if (
    ((Bn = s),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ts.current = e === null || e.memoizedState === null ? gg : yg),
    (e = n(r, i)),
    ui)
  ) {
    s = 0;
    do {
      if (((ui = !1), (bi = 0), 25 <= s)) throw Error(O(301));
      (s += 1),
        (je = Pe = null),
        (t.updateQueue = null),
        (Ts.current = wg),
        (e = n(r, i));
    } while (ui);
  }
  if (
    ((Ts.current = Js),
    (t = Pe !== null && Pe.next !== null),
    (Bn = 0),
    (je = Pe = ve = null),
    (Zs = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function ru() {
  var e = bi !== 0;
  return (bi = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return je === null ? (ve.memoizedState = je = e) : (je = je.next = e), je;
}
function pt() {
  if (Pe === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = je === null ? ve.memoizedState : je.next;
  if (t !== null) (je = t), (Pe = e);
  else {
    if (e === null) throw Error(O(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      je === null ? (ve.memoizedState = je = e) : (je = je.next = e);
  }
  return je;
}
function ji(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sa(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = s.next), (s.next = l);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var o = (l = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Bn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((o = a = d), (l = r)) : (a = a.next = d),
          (ve.lanes |= c),
          ($n |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (l = r) : (a.next = o),
      Et(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ve.lanes |= s), ($n |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function la(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (s = e(s, l.action)), (l = l.next);
    while (l !== i);
    Et(s, t.memoizedState) || (Ge = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function fp() {}
function pp(e, t) {
  var n = ve,
    r = pt(),
    i = t(),
    s = !Et(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ge = !0)),
    (r = r.queue),
    iu(vp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (je !== null && je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ni(9, mp.bind(null, n, r, i, t), void 0, null),
      Ne === null)
    )
      throw Error(O(349));
    Bn & 30 || hp(n, t, i);
  }
  return i;
}
function hp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gp(t) && yp(e);
}
function vp(e, t, n) {
  return n(function () {
    gp(t) && yp(e);
  });
}
function gp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function yp(e) {
  var t = Wt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function jc(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ji,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vg.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wp() {
  return pt().memoizedState;
}
function ks(e, t, n, r) {
  var i = Pt();
  (ve.flags |= e),
    (i.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function El(e, t, n, r) {
  var i = pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Pe !== null) {
    var l = Pe.memoizedState;
    if (((s = l.destroy), r !== null && tu(r, l.deps))) {
      i.memoizedState = Ni(t, n, s, r);
      return;
    }
  }
  (ve.flags |= e), (i.memoizedState = Ni(1 | t, n, s, r));
}
function Nc(e, t) {
  return ks(8390656, 8, e, t);
}
function iu(e, t) {
  return El(2048, 8, e, t);
}
function Sp(e, t) {
  return El(4, 2, e, t);
}
function xp(e, t) {
  return El(4, 4, e, t);
}
function Ep(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function _p(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), El(4, 4, Ep.bind(null, t, e), n)
  );
}
function su() {}
function Cp(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Tp(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kp(e, t, n) {
  return Bn & 21
    ? (Et(n, t) || ((n = Mf()), (ve.lanes |= n), ($n |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function hg(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ia.transition;
  ia.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (ia.transition = r);
  }
}
function Pp() {
  return pt().memoizedState;
}
function mg(e, t, n) {
  var r = hn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bp(e))
  )
    jp(t, n);
  else if (((n = up(e, t, n, r)), n !== null)) {
    var i = He();
    xt(n, e, r, i), Np(n, t, r);
  }
}
function vg(e, t, n) {
  var r = hn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bp(e)) jp(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var l = t.lastRenderedState,
          o = s(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), Et(o, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ko(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = up(e, t, i, r)),
      n !== null && ((i = He()), xt(n, e, r, i), Np(n, t, r));
  }
}
function bp(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function jp(e, t) {
  ui = Zs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Np(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), zo(e, n);
  }
}
var Js = {
    readContext: ft,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useInsertionEffect: ze,
    useLayoutEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useMutableSource: ze,
    useSyncExternalStore: ze,
    useId: ze,
    unstable_isNewReconciler: !1,
  },
  gg = {
    readContext: ft,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ft,
    useEffect: Nc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ks(4194308, 4, Ep.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = mg.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: jc,
    useDebugValue: su,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = jc(!1),
        t = e[0];
      return (e = hg.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        i = Pt();
      if (pe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(O(349));
        Bn & 30 || hp(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Nc(vp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ni(9, mp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Ne.identifierPrefix;
      if (pe) {
        var n = Ft,
          r = At;
        (n = (r & ~(1 << (32 - St(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = bi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yg = {
    readContext: ft,
    useCallback: Cp,
    useContext: ft,
    useEffect: iu,
    useImperativeHandle: _p,
    useInsertionEffect: Sp,
    useLayoutEffect: xp,
    useMemo: Tp,
    useReducer: sa,
    useRef: wp,
    useState: function () {
      return sa(ji);
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = pt();
      return kp(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = sa(ji)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: fp,
    useSyncExternalStore: pp,
    useId: Pp,
    unstable_isNewReconciler: !1,
  },
  wg = {
    readContext: ft,
    useCallback: Cp,
    useContext: ft,
    useEffect: iu,
    useImperativeHandle: _p,
    useInsertionEffect: Sp,
    useLayoutEffect: xp,
    useMemo: Tp,
    useReducer: la,
    useRef: wp,
    useState: function () {
      return la(ji);
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = pt();
      return Pe === null ? (t.memoizedState = e) : kp(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = la(ji)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: fp,
    useSyncExternalStore: pp,
    useId: Pp,
    unstable_isNewReconciler: !1,
  };
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ja(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = hn(e),
      s = $t(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = fn(e, s, i)),
      t !== null && (xt(t, e, i, r), Cs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = hn(e),
      s = $t(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = fn(e, s, i)),
      t !== null && (xt(t, e, i, r), Cs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = hn(e),
      i = $t(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = fn(e, i, r)),
      t !== null && (xt(t, e, r, n), Cs(t, e, r));
  },
};
function Mc(e, t, n, r, i, s, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ei(n, r) || !Ei(i, s)
      : !0
  );
}
function Mp(e, t, n) {
  var r = !1,
    i = wn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ft(s))
      : ((i = Ke(t) ? An : Fe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? _r(e, i) : wn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Lc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function eo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), qo(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ft(s))
    : ((s = Ke(t) ? An : Fe.current), (i.context = _r(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ja(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _l.enqueueReplaceState(i, i.state, null),
      Ks(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Pr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Xm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function aa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function to(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sg = typeof WeakMap == "function" ? WeakMap : Map;
function Lp(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      tl || ((tl = !0), (fo = r)), to(e, t);
    }),
    n
  );
}
function Op(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        to(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        to(e, t),
          typeof r != "function" &&
            (pn === null ? (pn = new Set([this])) : pn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Oc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sg();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Rg.bind(null, e, t, n)), t.then(e, e));
}
function Rc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ic(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xg = Gt.ReactCurrentOwner,
  Ge = !1;
function Ve(e, t, n, r) {
  t.child = e === null ? op(t, null, n, r) : Tr(t, e.child, n, r);
}
function zc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    wr(t, i),
    (r = nu(e, t, n, r, s, i)),
    (n = ru()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (pe && n && Ho(t), (t.flags |= 1), Ve(e, t, r, i), t.child)
  );
}
function Dc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !pu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Rp(e, t, s, r, i))
      : ((e = Ns(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var l = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ei), n(l, r) && e.ref === t.ref)
    )
      return Yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = mn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Rp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ei(s, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Yt(e, t, i);
  }
  return no(e, t, n, r, i);
}
function Ip(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(pr, Je),
        (Je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(pr, Je),
          (Je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ue(pr, Je),
        (Je |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(pr, Je),
      (Je |= r);
  return Ve(e, t, i, n), t.child;
}
function zp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function no(e, t, n, r, i) {
  var s = Ke(n) ? An : Fe.current;
  return (
    (s = _r(t, s)),
    wr(t, i),
    (n = nu(e, t, n, r, s, i)),
    (r = ru()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yt(e, t, i))
      : (pe && r && Ho(t), (t.flags |= 1), Ve(e, t, n, i), t.child)
  );
}
function Ac(e, t, n, r, i) {
  if (Ke(n)) {
    var s = !0;
    Ws(t);
  } else s = !1;
  if ((wr(t, i), t.stateNode === null))
    Ps(e, t), Mp(t, n, r), eo(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      o = t.memoizedProps;
    l.props = o;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ft(u))
      : ((u = Ke(n) ? An : Fe.current), (u = _r(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== r || a !== u) && Lc(t, l, r, u)),
      (tn = !1);
    var f = t.memoizedState;
    (l.state = f),
      Ks(t, r, l, i),
      (a = t.memoizedState),
      o !== r || f !== a || Qe.current || tn
        ? (typeof c == "function" && (Ja(t, n, c, r), (a = t.memoizedState)),
          (o = tn || Mc(t, n, o, r, f, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = o))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      cp(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : vt(t.type, o)),
      (l.props = u),
      (d = t.pendingProps),
      (f = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ft(a))
        : ((a = Ke(n) ? An : Fe.current), (a = _r(t, a)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((o !== d || f !== a) && Lc(t, l, r, a)),
      (tn = !1),
      (f = t.memoizedState),
      (l.state = f),
      Ks(t, r, l, i);
    var v = t.memoizedState;
    o !== d || f !== v || Qe.current || tn
      ? (typeof w == "function" && (Ja(t, n, w, r), (v = t.memoizedState)),
        (u = tn || Mc(t, n, u, r, f, v, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ro(e, t, n, r, s, i);
}
function ro(e, t, n, r, i, s) {
  zp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && _c(t, n, !1), Yt(e, t, s);
  (r = t.stateNode), (xg.current = t);
  var o =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Tr(t, e.child, null, s)), (t.child = Tr(t, null, o, s)))
      : Ve(e, t, o, s),
    (t.memoizedState = r.state),
    i && _c(t, n, !0),
    t.child
  );
}
function Dp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ec(e, t.context, !1),
    Zo(e, t.containerInfo);
}
function Fc(e, t, n, r, i) {
  return Cr(), Yo(i), (t.flags |= 256), Ve(e, t, n, r), t.child;
}
var io = { dehydrated: null, treeContext: null, retryLane: 0 };
function so(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ap(e, t, n) {
  var r = t.pendingProps,
    i = me.current,
    s = !1,
    l = (t.flags & 128) !== 0,
    o;
  if (
    ((o = l) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ue(me, i & 1),
    e === null)
  )
    return (
      qa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = l))
                : (s = kl(l, r, 0, null)),
              (e = Dn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = so(n)),
              (t.memoizedState = io),
              e)
            : lu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Eg(e, t, l, r, o, i, n);
  if (s) {
    (s = r.fallback), (l = t.mode), (i = e.child), (o = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = mn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = mn(o, s)) : ((s = Dn(s, l, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? so(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (s.memoizedState = l),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = io),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = mn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function lu(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function us(e, t, n, r) {
  return (
    r !== null && Yo(r),
    Tr(t, e.child, null, n),
    (e = lu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Eg(e, t, n, r, i, s, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = aa(Error(O(422)))), us(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = kl({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Dn(s, i, l, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Tr(t, e.child, null, l),
        (t.child.memoizedState = so(l)),
        (t.memoizedState = io),
        s);
  if (!(t.mode & 1)) return us(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(O(419))), (r = aa(s, r, void 0)), us(e, t, l, r);
  }
  if (((o = (l & e.childLanes) !== 0), Ge || o)) {
    if (((r = Ne), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Wt(e, i), xt(r, e, i, -1));
    }
    return fu(), (r = aa(Error(O(421)))), us(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ig.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (nt = dn(i.nextSibling)),
      (rt = t),
      (pe = !0),
      (wt = null),
      e !== null &&
        ((ot[ut++] = At),
        (ot[ut++] = Ft),
        (ot[ut++] = Fn),
        (At = e.id),
        (Ft = e.overflow),
        (Fn = t)),
      (t = lu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Za(e.return, t, n);
}
function oa(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Fp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ve(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bc(e, n, t);
        else if (e.tag === 19) Bc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ue(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && qs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          oa(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && qs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        oa(t, !0, n, null, s);
        break;
      case "together":
        oa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($n |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function _g(e, t, n) {
  switch (t.tag) {
    case 3:
      Dp(t), Cr();
      break;
    case 5:
      dp(t);
      break;
    case 1:
      Ke(t.type) && Ws(t);
      break;
    case 4:
      Zo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ue(Gs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ap(e, t, n)
          : (ue(me, me.current & 1),
            (e = Yt(e, t, n)),
            e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ue(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ip(e, t, n);
  }
  return Yt(e, t, n);
}
var Bp, lo, $p, Up;
Bp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
lo = function () {};
$p = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ln(Mt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ba(e, i)), (r = ba(e, r)), (s = []);
        break;
      case "select":
        (i = ge({}, i, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ma(e, i)), (r = Ma(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Vs);
    }
    Oa(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (l in o) o.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (mi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== o && (a != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (l in o)
              !o.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                o[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (mi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ce("scroll", e),
                  s || o === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Up = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wr(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function De(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Cg(e, t, n) {
  var r = t.pendingProps;
  switch ((Wo(t), t.tag)) {
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
      return De(t), null;
    case 1:
      return Ke(t.type) && Hs(), De(t), null;
    case 3:
      return (
        (r = t.stateNode),
        kr(),
        de(Qe),
        de(Fe),
        eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (as(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (mo(wt), (wt = null)))),
        lo(e, t),
        De(t),
        null
      );
    case 5:
      Jo(t);
      var i = Ln(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $p(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return De(t), null;
        }
        if (((e = Ln(Mt.current)), as(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[bt] = t), (r[Ti] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ti.length; i++) ce(ti[i], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Qu(r, s), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              qu(r, s), ce("invalid", r);
          }
          Oa(n, s), (i = null);
          for (var l in s)
            if (s.hasOwnProperty(l)) {
              var o = s[l];
              l === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      ls(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      ls(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : mi.hasOwnProperty(l) &&
                  o != null &&
                  l === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              Zi(r), Ku(r, s, !0);
              break;
            case "textarea":
              Zi(r), Zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Vs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[bt] = t),
            (e[Ti] = r),
            Bp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Ra(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ti.length; i++) ce(ti[i], e);
                i = r;
                break;
              case "source":
                ce("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (i = r);
                break;
              case "details":
                ce("toggle", e), (i = r);
                break;
              case "input":
                Qu(e, r), (i = ba(e, r)), ce("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ge({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                qu(e, r), (i = Ma(e, r)), ce("invalid", e);
                break;
              default:
                i = r;
            }
            Oa(n, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "style"
                  ? wf(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && gf(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && vi(e, a)
                    : typeof a == "number" && vi(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (mi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && ce("scroll", e)
                      : a != null && No(e, s, a, l));
              }
            switch (n) {
              case "input":
                Zi(e), Ku(e, r, !1);
                break;
              case "textarea":
                Zi(e), Zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? mr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      mr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Vs);
            }
            switch (n) {
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return De(t), null;
    case 6:
      if (e && t.stateNode != null) Up(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Ln(Pi.current)), Ln(Mt.current), as(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bt] = t),
            (s = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ls(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ls(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bt] = t),
            (t.stateNode = r);
      }
      return De(t), null;
    case 13:
      if (
        (de(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && nt !== null && t.mode & 1 && !(t.flags & 128))
          lp(), Cr(), (t.flags |= 98560), (s = !1);
        else if (((s = as(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(O(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(O(317));
            s[bt] = t;
          } else
            Cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          De(t), (s = !1);
        } else wt !== null && (mo(wt), (wt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? be === 0 && (be = 3) : fu())),
          t.updateQueue !== null && (t.flags |= 4),
          De(t),
          null);
    case 4:
      return (
        kr(), lo(e, t), e === null && _i(t.stateNode.containerInfo), De(t), null
      );
    case 10:
      return Qo(t.type._context), De(t), null;
    case 17:
      return Ke(t.type) && Hs(), De(t), null;
    case 19:
      if ((de(me), (s = t.memoizedState), s === null)) return De(t), null;
      if (((r = (t.flags & 128) !== 0), (l = s.rendering), l === null))
        if (r) Wr(s, !1);
        else {
          if (be !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = qs(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Wr(s, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (l = s.alternate),
                    l === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = l.childLanes),
                        (s.lanes = l.lanes),
                        (s.child = l.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = l.memoizedProps),
                        (s.memoizedState = l.memoizedState),
                        (s.updateQueue = l.updateQueue),
                        (s.type = l.type),
                        (e = l.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ee() > br &&
            ((t.flags |= 128), (r = !0), Wr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qs(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !l.alternate && !pe)
            )
              return De(t), null;
          } else
            2 * Ee() - s.renderingStartTime > br &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = s.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (s.last = l));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = me.current),
          ue(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (De(t), null);
    case 22:
    case 23:
      return (
        du(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Je & 1073741824 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : De(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Tg(e, t) {
  switch ((Wo(t), t.tag)) {
    case 1:
      return (
        Ke(t.type) && Hs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kr(),
        de(Qe),
        de(Fe),
        eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Jo(t), null;
    case 13:
      if (
        (de(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(me), null;
    case 4:
      return kr(), null;
    case 10:
      return Qo(t.type._context), null;
    case 22:
    case 23:
      return du(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var cs = !1,
  Ae = !1,
  kg = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        xe(e, t, r);
      }
    else n.current = null;
}
function ao(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var $c = !1;
function Pg(e, t) {
  if (((Ha = Bs), (e = Xf()), Vo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            o = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (i !== 0 && d.nodeType !== 3) || (o = l + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (f = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (o = l),
                f === s && ++c === r && (a = l),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = w;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wa = { focusedElem: e, selectionRange: n }, Bs = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var m = v.memoizedProps,
                    x = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : vt(t.type, m),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (E) {
          xe(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (v = $c), ($c = !1), v;
}
function ci(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && ao(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Vp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Vp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bt], delete t[Ti], delete t[Ga], delete t[ug], delete t[cg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hp(e.return)) return null;
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
function uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Vs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), (e = e.sibling);
}
function co(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (co(e, t, n), e = e.sibling; e !== null; ) co(e, t, n), (e = e.sibling);
}
var Oe = null,
  gt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) Wp(e, t, n), (n = n.sibling);
}
function Wp(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(vl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || fr(n, t);
    case 6:
      var r = Oe,
        i = gt;
      (Oe = null),
        Zt(e, t, n),
        (Oe = r),
        (gt = i),
        Oe !== null &&
          (gt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null &&
        (gt
          ? ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ta(e.parentNode, n)
              : e.nodeType === 1 && ta(e, n),
            Si(e))
          : ta(Oe, n.stateNode));
      break;
    case 4:
      (r = Oe),
        (i = gt),
        (Oe = n.stateNode.containerInfo),
        (gt = !0),
        Zt(e, t, n),
        (Oe = r),
        (gt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            l = s.destroy;
          (s = s.tag),
            l !== void 0 && (s & 2 || s & 4) && ao(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          xe(n, t, o);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), Zt(e, t, n), (Ae = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kg()),
      t.forEach(function (r) {
        var i = zg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          l = t,
          o = l;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Oe = o.stateNode), (gt = !1);
              break e;
            case 3:
              (Oe = o.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Oe = o.stateNode.containerInfo), (gt = !0);
              break e;
          }
          o = o.return;
        }
        if (Oe === null) throw Error(O(160));
        Wp(s, l, i), (Oe = null), (gt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        xe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Yp(t, e), (t = t.sibling);
}
function Yp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), kt(e), r & 4)) {
        try {
          ci(3, e, e.return), Cl(3, e);
        } catch (m) {
          xe(e, e.return, m);
        }
        try {
          ci(5, e, e.return);
        } catch (m) {
          xe(e, e.return, m);
        }
      }
      break;
    case 1:
      mt(t, e), kt(e), r & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (mt(t, e),
        kt(e),
        r & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          vi(i, "");
        } catch (m) {
          xe(e, e.return, m);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          l = n !== null ? n.memoizedProps : s,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && hf(i, s),
              Ra(o, l);
            var u = Ra(o, s);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                d = a[l + 1];
              c === "style"
                ? wf(i, d)
                : c === "dangerouslySetInnerHTML"
                ? gf(i, d)
                : c === "children"
                ? vi(i, d)
                : No(i, c, d, u);
            }
            switch (o) {
              case "input":
                ja(i, s);
                break;
              case "textarea":
                mf(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var w = s.value;
                w != null
                  ? mr(i, !!s.multiple, w, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? mr(i, !!s.multiple, s.defaultValue, !0)
                      : mr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Ti] = s;
          } catch (m) {
            xe(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((mt(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (m) {
          xe(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Si(t.containerInfo);
        } catch (m) {
          xe(e, e.return, m);
        }
      break;
    case 4:
      mt(t, e), kt(e);
      break;
    case 13:
      mt(t, e),
        kt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (uu = Ee())),
        r & 4 && Vc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (u = Ae) || c), mt(t, e), (Ae = u)) : mt(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for ($ = e, c = e.child; c !== null; ) {
            for (d = $ = c; $ !== null; ) {
              switch (((f = $), (w = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ci(4, f, f.return);
                  break;
                case 1:
                  fr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (m) {
                      xe(r, n, m);
                    }
                  }
                  break;
                case 5:
                  fr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Wc(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = f), ($ = w)) : Wc(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = yf("display", l)));
              } catch (m) {
                xe(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                xe(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      mt(t, e), kt(e), r & 4 && Vc(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), kt(e);
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (vi(i, ""), (r.flags &= -33));
          var s = Uc(e);
          co(e, s, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            o = Uc(e);
          uo(e, o, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (a) {
      xe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bg(e, t, n) {
  ($ = e), Xp(e);
}
function Xp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || cs;
      if (!l) {
        var o = i.alternate,
          a = (o !== null && o.memoizedState !== null) || Ae;
        o = cs;
        var u = Ae;
        if (((cs = l), (Ae = a) && !u))
          for ($ = i; $ !== null; )
            (l = $),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Yc(i)
                : a !== null
                ? ((a.return = l), ($ = a))
                : Yc(i);
        for (; s !== null; ) ($ = s), Xp(s), (s = s.sibling);
        ($ = i), (cs = o), (Ae = u);
      }
      Hc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : Hc(e);
  }
}
function Hc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && bc(t, s, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bc(t, l, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Si(d);
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
              throw Error(O(163));
          }
        Ae || (t.flags & 512 && oo(t));
      } catch (f) {
        xe(t, t.return, f);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Wc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Yc(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (a) {
            xe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              xe(t, i, a);
            }
          }
          var s = t.return;
          try {
            oo(t);
          } catch (a) {
            xe(t, s, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            oo(t);
          } catch (a) {
            xe(t, l, a);
          }
      }
    } catch (a) {
      xe(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), ($ = o);
      break;
    }
    $ = t.return;
  }
}
var jg = Math.ceil,
  el = Gt.ReactCurrentDispatcher,
  au = Gt.ReactCurrentOwner,
  dt = Gt.ReactCurrentBatchConfig,
  J = 0,
  Ne = null,
  Te = null,
  Re = 0,
  Je = 0,
  pr = xn(0),
  be = 0,
  Mi = null,
  $n = 0,
  Tl = 0,
  ou = 0,
  di = null,
  Xe = null,
  uu = 0,
  br = 1 / 0,
  It = null,
  tl = !1,
  fo = null,
  pn = null,
  ds = !1,
  ln = null,
  nl = 0,
  fi = 0,
  po = null,
  bs = -1,
  js = 0;
function He() {
  return J & 6 ? Ee() : bs !== -1 ? bs : (bs = Ee());
}
function hn(e) {
  return e.mode & 1
    ? J & 2 && Re !== 0
      ? Re & -Re
      : fg.transition !== null
      ? (js === 0 && (js = Mf()), js)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Af(e.type))),
        e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < fi) throw ((fi = 0), (po = null), Error(O(185)));
  Ii(e, n, r),
    (!(J & 2) || e !== Ne) &&
      (e === Ne && (!(J & 2) && (Tl |= n), be === 4 && rn(e, Re)),
      qe(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((br = Ee() + 500), xl && En()));
}
function qe(e, t) {
  var n = e.callbackNode;
  fv(e, t);
  var r = Fs(e, e === Ne ? Re : 0);
  if (r === 0)
    n !== null && tc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tc(n), t === 1))
      e.tag === 0 ? dg(Xc.bind(null, e)) : rp(Xc.bind(null, e)),
        ag(function () {
          !(J & 6) && En();
        }),
        (n = null);
    else {
      switch (Lf(r)) {
        case 1:
          n = Io;
          break;
        case 4:
          n = jf;
          break;
        case 16:
          n = As;
          break;
        case 536870912:
          n = Nf;
          break;
        default:
          n = As;
      }
      n = th(n, Gp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gp(e, t) {
  if (((bs = -1), (js = 0), J & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var r = Fs(e, e === Ne ? Re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var s = Kp();
    (Ne !== e || Re !== t) && ((It = null), (br = Ee() + 500), zn(e, t));
    do
      try {
        Lg();
        break;
      } catch (o) {
        Qp(e, o);
      }
    while (!0);
    Go(),
      (el.current = s),
      (J = i),
      Te !== null ? (t = 0) : ((Ne = null), (Re = 0), (t = be));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Fa(e)), i !== 0 && ((r = i), (t = ho(e, i)))), t === 1)
    )
      throw ((n = Mi), zn(e, 0), rn(e, r), qe(e, Ee()), n);
    if (t === 6) rn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ng(i) &&
          ((t = rl(e, r)),
          t === 2 && ((s = Fa(e)), s !== 0 && ((r = s), (t = ho(e, s)))),
          t === 1))
      )
        throw ((n = Mi), zn(e, 0), rn(e, r), qe(e, Ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Pn(e, Xe, It);
          break;
        case 3:
          if (
            (rn(e, r), (r & 130023424) === r && ((t = uu + 500 - Ee()), 10 < t))
          ) {
            if (Fs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Xa(Pn.bind(null, e, Xe, It), t);
            break;
          }
          Pn(e, Xe, It);
          break;
        case 4:
          if ((rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - St(r);
            (s = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~s);
          }
          if (
            ((r = i),
            (r = Ee() - r),
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
                : 1960 * jg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xa(Pn.bind(null, e, Xe, It), r);
            break;
          }
          Pn(e, Xe, It);
          break;
        case 5:
          Pn(e, Xe, It);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return qe(e, Ee()), e.callbackNode === n ? Gp.bind(null, e) : null;
}
function ho(e, t) {
  var n = di;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = rl(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && mo(t)),
    e
  );
}
function mo(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function Ng(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Et(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rn(e, t) {
  for (
    t &= ~ou,
      t &= ~Tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - St(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Xc(e) {
  if (J & 6) throw Error(O(327));
  Sr();
  var t = Fs(e, 0);
  if (!(t & 1)) return qe(e, Ee()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fa(e);
    r !== 0 && ((t = r), (n = ho(e, r)));
  }
  if (n === 1) throw ((n = Mi), zn(e, 0), rn(e, t), qe(e, Ee()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pn(e, Xe, It),
    qe(e, Ee()),
    null
  );
}
function cu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((br = Ee() + 500), xl && En());
  }
}
function Un(e) {
  ln !== null && ln.tag === 0 && !(J & 6) && Sr();
  var t = J;
  J |= 1;
  var n = dt.transition,
    r = ne;
  try {
    if (((dt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (dt.transition = n), (J = t), !(J & 6) && En();
  }
}
function du() {
  (Je = pr.current), de(pr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), lg(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((Wo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hs();
          break;
        case 3:
          kr(), de(Qe), de(Fe), eu();
          break;
        case 5:
          Jo(r);
          break;
        case 4:
          kr();
          break;
        case 13:
          de(me);
          break;
        case 19:
          de(me);
          break;
        case 10:
          Qo(r.type._context);
          break;
        case 22:
        case 23:
          du();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (Te = e = mn(e.current, null)),
    (Re = Je = t),
    (be = 0),
    (Mi = null),
    (ou = Tl = $n = 0),
    (Xe = di = null),
    Mn !== null)
  ) {
    for (t = 0; t < Mn.length; t++)
      if (((n = Mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var l = s.next;
          (s.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Mn = null;
  }
  return e;
}
function Qp(e, t) {
  do {
    var n = Te;
    try {
      if ((Go(), (Ts.current = Js), Zs)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Zs = !1;
      }
      if (
        ((Bn = 0),
        (je = Pe = ve = null),
        (ui = !1),
        (bi = 0),
        (au.current = null),
        n === null || n.return === null)
      ) {
        (be = 1), (Mi = t), (Te = null);
        break;
      }
      e: {
        var s = e,
          l = n.return,
          o = n,
          a = t;
        if (
          ((t = Re),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = o,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = Rc(l);
          if (w !== null) {
            (w.flags &= -257),
              Ic(w, l, o, s, t),
              w.mode & 1 && Oc(s, u, t),
              (t = w),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var m = new Set();
              m.add(a), (t.updateQueue = m);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Oc(s, u, t), fu();
              break e;
            }
            a = Error(O(426));
          }
        } else if (pe && o.mode & 1) {
          var x = Rc(l);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Ic(x, l, o, s, t),
              Yo(Pr(a, o));
            break e;
          }
        }
        (s = a = Pr(a, o)),
          be !== 4 && (be = 2),
          di === null ? (di = [s]) : di.push(s),
          (s = l);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = Lp(s, a, t);
              Pc(s, p);
              break e;
            case 1:
              o = a;
              var h = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (pn === null || !pn.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = Op(s, o, t);
                Pc(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Zp(n);
    } catch (C) {
      (t = C), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Kp() {
  var e = el.current;
  return (el.current = Js), e === null ? Js : e;
}
function fu() {
  (be === 0 || be === 3 || be === 2) && (be = 4),
    Ne === null || (!($n & 268435455) && !(Tl & 268435455)) || rn(Ne, Re);
}
function rl(e, t) {
  var n = J;
  J |= 2;
  var r = Kp();
  (Ne !== e || Re !== t) && ((It = null), zn(e, t));
  do
    try {
      Mg();
      break;
    } catch (i) {
      Qp(e, i);
    }
  while (!0);
  if ((Go(), (J = n), (el.current = r), Te !== null)) throw Error(O(261));
  return (Ne = null), (Re = 0), be;
}
function Mg() {
  for (; Te !== null; ) qp(Te);
}
function Lg() {
  for (; Te !== null && !rv(); ) qp(Te);
}
function qp(e) {
  var t = eh(e.alternate, e, Je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zp(e) : (Te = t),
    (au.current = null);
}
function Zp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Tg(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (be = 6), (Te = null);
        return;
      }
    } else if (((n = Cg(n, t, Je)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  be === 0 && (be = 5);
}
function Pn(e, t, n) {
  var r = ne,
    i = dt.transition;
  try {
    (dt.transition = null), (ne = 1), Og(e, t, n, r);
  } finally {
    (dt.transition = i), (ne = r);
  }
  return null;
}
function Og(e, t, n, r) {
  do Sr();
  while (ln !== null);
  if (J & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (pv(e, s),
    e === Ne && ((Te = Ne = null), (Re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ds ||
      ((ds = !0),
      th(As, function () {
        return Sr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = dt.transition), (dt.transition = null);
    var l = ne;
    ne = 1;
    var o = J;
    (J |= 4),
      (au.current = null),
      Pg(e, n),
      Yp(n, e),
      Jv(Wa),
      (Bs = !!Ha),
      (Wa = Ha = null),
      (e.current = n),
      bg(n),
      iv(),
      (J = o),
      (ne = l),
      (dt.transition = s);
  } else e.current = n;
  if (
    (ds && ((ds = !1), (ln = e), (nl = i)),
    (s = e.pendingLanes),
    s === 0 && (pn = null),
    av(n.stateNode),
    qe(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (tl) throw ((tl = !1), (e = fo), (fo = null), e);
  return (
    nl & 1 && e.tag !== 0 && Sr(),
    (s = e.pendingLanes),
    s & 1 ? (e === po ? fi++ : ((fi = 0), (po = e))) : (fi = 0),
    En(),
    null
  );
}
function Sr() {
  if (ln !== null) {
    var e = Lf(nl),
      t = dt.transition,
      n = ne;
    try {
      if (((dt.transition = null), (ne = 16 > e ? 16 : e), ln === null))
        var r = !1;
      else {
        if (((e = ln), (ln = null), (nl = 0), J & 6)) throw Error(O(331));
        var i = J;
        for (J |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            l = s.child;
          if ($.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var u = o[a];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), ($ = d);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var f = c.sibling,
                        w = c.return;
                      if ((Vp(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = w), ($ = f);
                        break;
                      }
                      $ = w;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var m = v.child;
                if (m !== null) {
                  v.child = null;
                  do {
                    var x = m.sibling;
                    (m.sibling = null), (m = x);
                  } while (m !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && l !== null) (l.return = s), ($ = l);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ci(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), ($ = p);
                break e;
              }
              $ = s.return;
            }
        }
        var h = e.current;
        for ($ = h; $ !== null; ) {
          l = $;
          var y = l.child;
          if (l.subtreeFlags & 2064 && y !== null) (y.return = l), ($ = y);
          else
            e: for (l = h; $ !== null; ) {
              if (((o = $), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, o);
                  }
                } catch (C) {
                  xe(o, o.return, C);
                }
              if (o === l) {
                $ = null;
                break e;
              }
              var E = o.sibling;
              if (E !== null) {
                (E.return = o.return), ($ = E);
                break e;
              }
              $ = o.return;
            }
        }
        if (
          ((J = i), En(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(vl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (dt.transition = t);
    }
  }
  return !1;
}
function Gc(e, t, n) {
  (t = Pr(n, t)),
    (t = Lp(e, t, 1)),
    (e = fn(e, t, 1)),
    (t = He()),
    e !== null && (Ii(e, 1, t), qe(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) Gc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pn === null || !pn.has(r)))
        ) {
          (e = Pr(n, e)),
            (e = Op(t, e, 1)),
            (t = fn(t, e, 1)),
            (e = He()),
            t !== null && (Ii(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Rg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (Re & n) === n &&
      (be === 4 || (be === 3 && (Re & 130023424) === Re && 500 > Ee() - uu)
        ? zn(e, 0)
        : (ou |= n)),
    qe(e, t);
}
function Jp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ts), (ts <<= 1), !(ts & 130023424) && (ts = 4194304))
      : (t = 1));
  var n = He();
  (e = Wt(e, t)), e !== null && (Ii(e, t, n), qe(e, n));
}
function Ig(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jp(e, n);
}
function zg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), Jp(e, n);
}
var eh;
eh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), _g(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), pe && t.flags & 1048576 && ip(t, Xs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ps(e, t), (e = t.pendingProps);
      var i = _r(t, Fe.current);
      wr(t, n), (i = nu(null, t, r, e, i, n));
      var s = ru();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ke(r) ? ((s = !0), Ws(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            qo(t),
            (i.updater = _l),
            (t.stateNode = i),
            (i._reactInternals = t),
            eo(t, r, e, n),
            (t = ro(null, t, r, !0, s, n)))
          : ((t.tag = 0), pe && s && Ho(t), Ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ps(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Ag(r)),
          (e = vt(r, e)),
          i)
        ) {
          case 0:
            t = no(null, t, r, e, n);
            break e;
          case 1:
            t = Ac(null, t, r, e, n);
            break e;
          case 11:
            t = zc(null, t, r, e, n);
            break e;
          case 14:
            t = Dc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        no(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Ac(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Dp(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          cp(e, t),
          Ks(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Pr(Error(O(423)), t)), (t = Fc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Pr(Error(O(424)), t)), (t = Fc(e, t, r, n, i));
            break e;
          } else
            for (
              nt = dn(t.stateNode.containerInfo.firstChild),
                rt = t,
                pe = !0,
                wt = null,
                n = op(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Cr(), r === i)) {
            t = Yt(e, t, n);
            break e;
          }
          Ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dp(t),
        e === null && qa(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Ya(r, i) ? (l = null) : s !== null && Ya(r, s) && (t.flags |= 32),
        zp(e, t),
        Ve(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && qa(t), null;
    case 13:
      return Ap(e, t, n);
    case 4:
      return (
        Zo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Tr(t, null, r, n)) : Ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        zc(e, t, r, i, n)
      );
    case 7:
      return Ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (l = i.value),
          ue(Gs, r._currentValue),
          (r._currentValue = l),
          s !== null)
        )
          if (Et(s.value, l)) {
            if (s.children === i.children && !Qe.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                l = s.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = $t(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Za(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) l = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((l = s.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (o = l.alternate),
                  o !== null && (o.lanes |= n),
                  Za(l, n, t),
                  (l = s.sibling);
              } else l = s.child;
              if (l !== null) l.return = s;
              else
                for (l = s; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((s = l.sibling), s !== null)) {
                    (s.return = l.return), (l = s);
                    break;
                  }
                  l = l.return;
                }
              s = l;
            }
        Ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        wr(t, n),
        (i = ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = vt(r, t.pendingProps)),
        (i = vt(r.type, i)),
        Dc(e, t, r, i, n)
      );
    case 15:
      return Rp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : vt(r, i)),
        Ps(e, t),
        (t.tag = 1),
        Ke(r) ? ((e = !0), Ws(t)) : (e = !1),
        wr(t, n),
        Mp(t, r, i),
        eo(t, r, i, n),
        ro(null, t, r, !0, e, n)
      );
    case 19:
      return Fp(e, t, n);
    case 22:
      return Ip(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function th(e, t) {
  return bf(e, t);
}
function Dg(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
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
function ct(e, t, n, r) {
  return new Dg(e, t, n, r);
}
function pu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ag(e) {
  if (typeof e == "function") return pu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Lo)) return 11;
    if (e === Oo) return 14;
  }
  return 2;
}
function mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ct(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ns(e, t, n, r, i, s) {
  var l = 2;
  if (((r = e), typeof e == "function")) pu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case rr:
        return Dn(n.children, i, s, t);
      case Mo:
        (l = 8), (i |= 8);
        break;
      case Ca:
        return (
          (e = ct(12, n, t, i | 2)), (e.elementType = Ca), (e.lanes = s), e
        );
      case Ta:
        return (e = ct(13, n, t, i)), (e.elementType = Ta), (e.lanes = s), e;
      case ka:
        return (e = ct(19, n, t, i)), (e.elementType = ka), (e.lanes = s), e;
      case df:
        return kl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case uf:
              l = 10;
              break e;
            case cf:
              l = 9;
              break e;
            case Lo:
              l = 11;
              break e;
            case Oo:
              l = 14;
              break e;
            case en:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ct(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Dn(e, t, n, r) {
  return (e = ct(7, e, r, t)), (e.lanes = n), e;
}
function kl(e, t, n, r) {
  return (
    (e = ct(22, e, r, t)),
    (e.elementType = df),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ua(e, t, n) {
  return (e = ct(6, e, null, t)), (e.lanes = n), e;
}
function ca(e, t, n) {
  return (
    (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fg(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function hu(e, t, n, r, i, s, l, o, a) {
  return (
    (e = new Fg(e, t, n, o, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qo(s),
    e
  );
}
function Bg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nh(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ke(n)) return np(e, n, t);
  }
  return t;
}
function rh(e, t, n, r, i, s, l, o, a) {
  return (
    (e = hu(n, r, !0, e, i, s, l, o, a)),
    (e.context = nh(null)),
    (n = e.current),
    (r = He()),
    (i = hn(n)),
    (s = $t(r, i)),
    (s.callback = t ?? null),
    fn(n, s, i),
    (e.current.lanes = i),
    Ii(e, i, r),
    qe(e, r),
    e
  );
}
function Pl(e, t, n, r) {
  var i = t.current,
    s = He(),
    l = hn(i);
  return (
    (n = nh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(s, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fn(i, t, l)),
    e !== null && (xt(e, i, l, s), Cs(e, i, l)),
    l
  );
}
function il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mu(e, t) {
  Qc(e, t), (e = e.alternate) && Qc(e, t);
}
function $g() {
  return null;
}
var ih =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vu(e) {
  this._internalRoot = e;
}
bl.prototype.render = vu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Pl(e, t, null, null);
};
bl.prototype.unmount = vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      Pl(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function bl(e) {
  this._internalRoot = e;
}
bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = If();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
    nn.splice(n, 0, e), n === 0 && Df(e);
  }
};
function gu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Kc() {}
function Ug(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = il(l);
        s.call(u);
      };
    }
    var l = rh(t, r, e, 0, null, !1, !1, "", Kc);
    return (
      (e._reactRootContainer = l),
      (e[Ht] = l.current),
      _i(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = il(a);
      o.call(u);
    };
  }
  var a = hu(e, 0, !1, null, null, !1, !1, "", Kc);
  return (
    (e._reactRootContainer = a),
    (e[Ht] = a.current),
    _i(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      Pl(t, a, n, r);
    }),
    a
  );
}
function Nl(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var l = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var a = il(l);
        o.call(a);
      };
    }
    Pl(t, l, e, i);
  } else l = Ug(n, t, e, i, r);
  return il(l);
}
Of = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ei(t.pendingLanes);
        n !== 0 &&
          (zo(t, n | 1), qe(t, Ee()), !(J & 6) && ((br = Ee() + 500), En()));
      }
      break;
    case 13:
      Un(function () {
        var r = Wt(e, 1);
        if (r !== null) {
          var i = He();
          xt(r, e, 1, i);
        }
      }),
        mu(e, 1);
  }
};
Do = function (e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = He();
      xt(t, e, 134217728, n);
    }
    mu(e, 134217728);
  }
};
Rf = function (e) {
  if (e.tag === 13) {
    var t = hn(e),
      n = Wt(e, t);
    if (n !== null) {
      var r = He();
      xt(n, e, t, r);
    }
    mu(e, t);
  }
};
If = function () {
  return ne;
};
zf = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ja(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Sl(r);
            if (!i) throw Error(O(90));
            pf(r), ja(r, i);
          }
        }
      }
      break;
    case "textarea":
      mf(e, n);
      break;
    case "select":
      (t = n.value), t != null && mr(e, !!n.multiple, t, !1);
  }
};
Ef = cu;
_f = Un;
var Vg = { usingClientEntryPoint: !1, Events: [Di, ar, Sl, Sf, xf, cu] },
  Yr = {
    findFiberByHostInstance: Nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hg = {
    bundleType: Yr.bundleType,
    version: Yr.version,
    rendererPackageName: Yr.rendererPackageName,
    rendererConfig: Yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yr.findFiberByHostInstance || $g,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fs.isDisabled && fs.supportsFiber)
    try {
      (vl = fs.inject(Hg)), (Nt = fs);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vg;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gu(t)) throw Error(O(200));
  return Bg(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!gu(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = ih;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = hu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ht] = t.current),
    _i(e.nodeType === 8 ? e.parentNode : e),
    new vu(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = kf(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return Un(e);
};
st.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(O(200));
  return Nl(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!gu(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    l = ih;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = rh(t, null, e, 1, n ?? null, i, !1, s, l)),
    (e[Ht] = t.current),
    _i(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new bl(t);
};
st.render = function (e, t, n) {
  if (!jl(t)) throw Error(O(200));
  return Nl(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Un(function () {
        Nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = cu;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Nl(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function sh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sh);
    } catch (e) {
      console.error(e);
    }
}
sh(), (sf.exports = st);
var yu = sf.exports;
const Wg = Mr(yu),
  Yg = Yd({ __proto__: null, default: Wg }, [yu]);
var lh,
  qc = yu;
(lh = qc.createRoot), qc.hydrateRoot;
/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function he() {
  return (
    (he = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    he.apply(this, arguments)
  );
}
var Ce;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ce || (Ce = {}));
const Zc = "popstate";
function Xg(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: l, hash: o } = r.location;
    return Li(
      "",
      { pathname: s, search: l, hash: o },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Vn(i);
  }
  return Qg(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function jr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Gg() {
  return Math.random().toString(36).substr(2, 8);
}
function Jc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Li(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    he(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? _n(t) : t,
      { state: n, key: (t && t.key) || r || Gg() }
    )
  );
}
function Vn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function _n(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Qg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    l = i.history,
    o = Ce.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), l.replaceState(he({}, l.state, { idx: u }), ""));
  function c() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    o = Ce.Pop;
    let x = c(),
      p = x == null ? null : x - u;
    (u = x), a && a({ action: o, location: m.location, delta: p });
  }
  function f(x, p) {
    o = Ce.Push;
    let h = Li(m.location, x, p);
    u = c() + 1;
    let y = Jc(h, u),
      E = m.createHref(h);
    try {
      l.pushState(y, "", E);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(E);
    }
    s && a && a({ action: o, location: m.location, delta: 1 });
  }
  function w(x, p) {
    o = Ce.Replace;
    let h = Li(m.location, x, p);
    u = c();
    let y = Jc(h, u),
      E = m.createHref(h);
    l.replaceState(y, "", E),
      s && a && a({ action: o, location: m.location, delta: 0 });
  }
  function v(x) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof x == "string" ? x : Vn(x);
    return (
      (h = h.replace(/ $/, "%20")),
      K(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, p)
    );
  }
  let m = {
    get action() {
      return o;
    },
    get location() {
      return e(i, l);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Zc, d),
        (a = x),
        () => {
          i.removeEventListener(Zc, d), (a = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let p = v(x);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: w,
    go(x) {
      return l.go(x);
    },
  };
  return m;
}
var oe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(oe || (oe = {}));
const Kg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function qg(e) {
  return e.index === !0;
}
function Oi(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let l = [...n, String(s)],
        o = typeof i.id == "string" ? i.id : l.join("-");
      if (
        (K(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        K(
          !r[o],
          'Found a route id collision on id "' +
            o +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        qg(i))
      ) {
        let a = he({}, i, t(i), { id: o });
        return (r[o] = a), a;
      } else {
        let a = he({}, i, t(i), { id: o, children: void 0 });
        return (
          (r[o] = a), i.children && (a.children = Oi(i.children, t, l, r)), a
        );
      }
    })
  );
}
function bn(e, t, n) {
  return n === void 0 && (n = "/"), Ms(e, t, n, !1);
}
function Ms(e, t, n, r) {
  let i = typeof t == "string" ? _n(t) : t,
    s = Xt(i.pathname || "/", n);
  if (s == null) return null;
  let l = ah(e);
  Jg(l);
  let o = null;
  for (let a = 0; o == null && a < l.length; ++a) {
    let u = c0(s);
    o = o0(l[a], u, r);
  }
  return o;
}
function Zg(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function ah(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, l, o) => {
    let a = {
      relativePath: o === void 0 ? s.path || "" : o,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: l,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (K(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Ut([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (K(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      ah(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: l0(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, l) => {
      var o;
      if (s.path === "" || !((o = s.path) != null && o.includes("?"))) i(s, l);
      else for (let a of oh(s.path)) i(s, l, a);
    }),
    t
  );
}
function oh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let l = oh(r.join("/")),
    o = [];
  return (
    o.push(...l.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && o.push(...l),
    o.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Jg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : a0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const e0 = /^:[\w-]+$/,
  t0 = 3,
  n0 = 2,
  r0 = 1,
  i0 = 10,
  s0 = -2,
  ed = (e) => e === "*";
function l0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ed) && (r += s0),
    t && (r += n0),
    n
      .filter((i) => !ed(i))
      .reduce((i, s) => i + (e0.test(s) ? t0 : s === "" ? r0 : i0), r)
  );
}
function a0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function o0(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    l = [];
  for (let o = 0; o < r.length; ++o) {
    let a = r[o],
      u = o === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      d = sl(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      f = a.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = sl(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      l.push({
        params: i,
        pathname: Ut([s, d.pathname]),
        pathnameBase: p0(Ut([s, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (s = Ut([s, d.pathnameBase]));
  }
  return l;
}
function sl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = u0(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    l = s.replace(/(.)\/+$/, "$1"),
    o = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: w } = c;
      if (f === "*") {
        let m = o[d] || "";
        l = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const v = o[d];
      return (
        w && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: e,
  };
}
function u0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    jr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, o, a) => (
            r.push({ paramName: o, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function c0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      jr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Xt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function d0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? _n(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : f0(n, t)) : t,
    search: h0(r),
    hash: m0(i),
  };
}
function f0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function da(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function uh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function wu(e, t) {
  let n = uh(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Su(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = _n(e))
    : ((i = he({}, e)),
      K(
        !i.pathname || !i.pathname.includes("?"),
        da("?", "pathname", "search", i)
      ),
      K(
        !i.pathname || !i.pathname.includes("#"),
        da("#", "pathname", "hash", i)
      ),
      K(!i.search || !i.search.includes("#"), da("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    l = s ? "/" : i.pathname,
    o;
  if (l == null) o = n;
  else {
    let d = t.length - 1;
    if (!r && l.startsWith("..")) {
      let f = l.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    o = d >= 0 ? t[d] : "/";
  }
  let a = d0(i, o),
    u = l && l !== "/" && l.endsWith("/"),
    c = (s || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const Ut = (e) => e.join("/").replace(/\/\/+/g, "/"),
  p0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  h0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  m0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Ml(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ch = ["post", "put", "patch", "delete"],
  v0 = new Set(ch),
  g0 = ["get", ...ch],
  y0 = new Set(g0),
  w0 = new Set([301, 302, 303, 307, 308]),
  S0 = new Set([307, 308]),
  fa = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  x0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Xr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Eu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  E0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  dh = "remix-router-transitions";
function _0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let _ = e.detectErrorBoundary;
    i = (T) => ({ hasErrorBoundary: _(T) });
  } else i = E0;
  let s = {},
    l = Oi(e.routes, i, void 0, s),
    o,
    a = e.basename || "/",
    u = e.unstable_dataStrategy || b0,
    c = e.unstable_patchRoutesOnMiss,
    d = he(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    f = null,
    w = new Set(),
    v = null,
    m = null,
    x = null,
    p = e.hydrationData != null,
    h = bn(l, e.history.location, a),
    y = null;
  if (h == null && !c) {
    let _ = Ue(404, { pathname: e.history.location.pathname }),
      { matches: T, route: b } = cd(l);
    (h = T), (y = { [b.id]: _ });
  }
  h &&
    c &&
    !e.hydrationData &&
    Al(h, l, e.history.location.pathname).active &&
    (h = null);
  let E;
  if (!h) (E = !1), (h = []);
  else if (h.some((_) => _.route.lazy)) E = !1;
  else if (!h.some((_) => _.route.loader)) E = !0;
  else if (d.v7_partialHydration) {
    let _ = e.hydrationData ? e.hydrationData.loaderData : null,
      T = e.hydrationData ? e.hydrationData.errors : null,
      b = (L) =>
        L.route.loader
          ? typeof L.route.loader == "function" && L.route.loader.hydrate === !0
            ? !1
            : (_ && _[L.route.id] !== void 0) || (T && T[L.route.id] !== void 0)
          : !0;
    if (T) {
      let L = h.findIndex((F) => T[F.route.id] !== void 0);
      E = h.slice(0, L + 1).every(b);
    } else E = h.every(b);
  } else E = e.hydrationData != null;
  let C,
    S = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: E,
      navigation: fa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    N = Ce.Pop,
    k = !1,
    M,
    j = !1,
    R = new Map(),
    D = null,
    A = !1,
    B = !1,
    re = [],
    ke = [],
    ie = new Map(),
    z = 0,
    U = -1,
    V = new Map(),
    Z = new Set(),
    le = new Map(),
    Ct = new Map(),
    Me = new Set(),
    ht = new Map(),
    Be = new Map(),
    Gn = new Map(),
    Rl = !1;
  function nm() {
    if (
      ((f = e.history.listen((_) => {
        let { action: T, location: b, delta: L } = _;
        if (Rl) {
          Rl = !1;
          return;
        }
        jr(
          Be.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let F = Fu({
          currentLocation: S.location,
          nextLocation: b,
          historyAction: T,
        });
        if (F && L != null) {
          (Rl = !0),
            e.history.go(L * -1),
            Hi(F, {
              state: "blocked",
              location: b,
              proceed() {
                Hi(F, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: b,
                }),
                  e.history.go(L);
              },
              reset() {
                let H = new Map(S.blockers);
                H.set(F, Xr), $e({ blockers: H });
              },
            });
          return;
        }
        return Tn(T, b);
      })),
      n)
    ) {
      $0(t, R);
      let _ = () => U0(t, R);
      t.addEventListener("pagehide", _),
        (D = () => t.removeEventListener("pagehide", _));
    }
    return S.initialized || Tn(Ce.Pop, S.location, { initialHydration: !0 }), C;
  }
  function rm() {
    f && f(),
      D && D(),
      w.clear(),
      M && M.abort(),
      S.fetchers.forEach((_, T) => Vi(T)),
      S.blockers.forEach((_, T) => Au(T));
  }
  function im(_) {
    return w.add(_), () => w.delete(_);
  }
  function $e(_, T) {
    T === void 0 && (T = {}), (S = he({}, S, _));
    let b = [],
      L = [];
    d.v7_fetcherPersist &&
      S.fetchers.forEach((F, H) => {
        F.state === "idle" && (Me.has(H) ? L.push(H) : b.push(H));
      }),
      [...w].forEach((F) =>
        F(S, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: T.viewTransitionOpts,
          unstable_flushSync: T.flushSync === !0,
        })
      ),
      d.v7_fetcherPersist &&
        (b.forEach((F) => S.fetchers.delete(F)), L.forEach((F) => Vi(F)));
  }
  function Qn(_, T, b) {
    var L, F;
    let { flushSync: H } = b === void 0 ? {} : b,
      X =
        S.actionData != null &&
        S.navigation.formMethod != null &&
        yt(S.navigation.formMethod) &&
        S.navigation.state === "loading" &&
        ((L = _.state) == null ? void 0 : L._isRedirect) !== !0,
      I;
    T.actionData
      ? Object.keys(T.actionData).length > 0
        ? (I = T.actionData)
        : (I = null)
      : X
      ? (I = S.actionData)
      : (I = null);
    let G = T.loaderData
        ? od(S.loaderData, T.loaderData, T.matches || [], T.errors)
        : S.loaderData,
      W = S.blockers;
    W.size > 0 && ((W = new Map(W)), W.forEach((te, ae) => W.set(ae, Xr)));
    let Y =
      k === !0 ||
      (S.navigation.formMethod != null &&
        yt(S.navigation.formMethod) &&
        ((F = _.state) == null ? void 0 : F._isRedirect) !== !0);
    o && ((l = o), (o = void 0)),
      A ||
        N === Ce.Pop ||
        (N === Ce.Push
          ? e.history.push(_, _.state)
          : N === Ce.Replace && e.history.replace(_, _.state));
    let se;
    if (N === Ce.Pop) {
      let te = R.get(S.location.pathname);
      te && te.has(_.pathname)
        ? (se = { currentLocation: S.location, nextLocation: _ })
        : R.has(_.pathname) &&
          (se = { currentLocation: _, nextLocation: S.location });
    } else if (j) {
      let te = R.get(S.location.pathname);
      te
        ? te.add(_.pathname)
        : ((te = new Set([_.pathname])), R.set(S.location.pathname, te)),
        (se = { currentLocation: S.location, nextLocation: _ });
    }
    $e(
      he({}, T, {
        actionData: I,
        loaderData: G,
        historyAction: N,
        location: _,
        initialized: !0,
        navigation: fa,
        revalidation: "idle",
        restoreScrollPosition: $u(_, T.matches || S.matches),
        preventScrollReset: Y,
        blockers: W,
      }),
      { viewTransitionOpts: se, flushSync: H === !0 }
    ),
      (N = Ce.Pop),
      (k = !1),
      (j = !1),
      (A = !1),
      (B = !1),
      (re = []),
      (ke = []);
  }
  async function Mu(_, T) {
    if (typeof _ == "number") {
      e.history.go(_);
      return;
    }
    let b = vo(
        S.location,
        S.matches,
        a,
        d.v7_prependBasename,
        _,
        d.v7_relativeSplatPath,
        T == null ? void 0 : T.fromRouteId,
        T == null ? void 0 : T.relative
      ),
      {
        path: L,
        submission: F,
        error: H,
      } = td(d.v7_normalizeFormMethod, !1, b, T),
      X = S.location,
      I = Li(S.location, L, T && T.state);
    I = he({}, I, e.history.encodeLocation(I));
    let G = T && T.replace != null ? T.replace : void 0,
      W = Ce.Push;
    G === !0
      ? (W = Ce.Replace)
      : G === !1 ||
        (F != null &&
          yt(F.formMethod) &&
          F.formAction === S.location.pathname + S.location.search &&
          (W = Ce.Replace));
    let Y =
        T && "preventScrollReset" in T ? T.preventScrollReset === !0 : void 0,
      se = (T && T.unstable_flushSync) === !0,
      te = Fu({ currentLocation: X, nextLocation: I, historyAction: W });
    if (te) {
      Hi(te, {
        state: "blocked",
        location: I,
        proceed() {
          Hi(te, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            Mu(_, T);
        },
        reset() {
          let ae = new Map(S.blockers);
          ae.set(te, Xr), $e({ blockers: ae });
        },
      });
      return;
    }
    return await Tn(W, I, {
      submission: F,
      pendingError: H,
      preventScrollReset: Y,
      replace: T && T.replace,
      enableViewTransition: T && T.unstable_viewTransition,
      flushSync: se,
    });
  }
  function sm() {
    if (
      (Il(),
      $e({ revalidation: "loading" }),
      S.navigation.state !== "submitting")
    ) {
      if (S.navigation.state === "idle") {
        Tn(S.historyAction, S.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Tn(N || S.historyAction, S.navigation.location, {
        overrideNavigation: S.navigation,
      });
    }
  }
  async function Tn(_, T, b) {
    M && M.abort(),
      (M = null),
      (N = _),
      (A = (b && b.startUninterruptedRevalidation) === !0),
      mm(S.location, S.matches),
      (k = (b && b.preventScrollReset) === !0),
      (j = (b && b.enableViewTransition) === !0);
    let L = o || l,
      F = b && b.overrideNavigation,
      H = bn(L, T, a),
      X = (b && b.flushSync) === !0,
      I = Al(H, L, T.pathname);
    if ((I.active && I.matches && (H = I.matches), !H)) {
      let { error: ee, notFoundMatches: Le, route: _e } = zl(T.pathname);
      Qn(
        T,
        { matches: Le, loaderData: {}, errors: { [_e.id]: ee } },
        { flushSync: X }
      );
      return;
    }
    if (
      S.initialized &&
      !B &&
      R0(S.location, T) &&
      !(b && b.submission && yt(b.submission.formMethod))
    ) {
      Qn(T, { matches: H }, { flushSync: X });
      return;
    }
    M = new AbortController();
    let G = er(e.history, T, M.signal, b && b.submission),
      W;
    if (b && b.pendingError)
      W = [hr(H).route.id, { type: oe.error, error: b.pendingError }];
    else if (b && b.submission && yt(b.submission.formMethod)) {
      let ee = await lm(G, T, b.submission, H, I.active, {
        replace: b.replace,
        flushSync: X,
      });
      if (ee.shortCircuited) return;
      if (ee.pendingActionResult) {
        let [Le, _e] = ee.pendingActionResult;
        if (et(_e) && Ml(_e.error) && _e.error.status === 404) {
          (M = null),
            Qn(T, {
              matches: ee.matches,
              loaderData: {},
              errors: { [Le]: _e.error },
            });
          return;
        }
      }
      (H = ee.matches || H),
        (W = ee.pendingActionResult),
        (F = pa(T, b.submission)),
        (X = !1),
        (I.active = !1),
        (G = er(e.history, G.url, G.signal));
    }
    let {
      shortCircuited: Y,
      matches: se,
      loaderData: te,
      errors: ae,
    } = await am(
      G,
      T,
      H,
      I.active,
      F,
      b && b.submission,
      b && b.fetcherSubmission,
      b && b.replace,
      b && b.initialHydration === !0,
      X,
      W
    );
    Y ||
      ((M = null),
      Qn(T, he({ matches: se || H }, ud(W), { loaderData: te, errors: ae })));
  }
  async function lm(_, T, b, L, F, H) {
    H === void 0 && (H = {}), Il();
    let X = F0(T, b);
    if (($e({ navigation: X }, { flushSync: H.flushSync === !0 }), F)) {
      let W = await Yi(L, T.pathname, _.signal);
      if (W.type === "aborted") return { shortCircuited: !0 };
      if (W.type === "error") {
        let { boundaryId: Y, error: se } = Wi(T.pathname, W);
        return {
          matches: W.partialMatches,
          pendingActionResult: [Y, { type: oe.error, error: se }],
        };
      } else if (W.matches) L = W.matches;
      else {
        let { notFoundMatches: Y, error: se, route: te } = zl(T.pathname);
        return {
          matches: Y,
          pendingActionResult: [te.id, { type: oe.error, error: se }],
        };
      }
    }
    let I,
      G = ni(L, T);
    if (!G.route.action && !G.route.lazy)
      I = {
        type: oe.error,
        error: Ue(405, {
          method: _.method,
          pathname: T.pathname,
          routeId: G.route.id,
        }),
      };
    else if (((I = (await Dr("action", _, [G], L))[0]), _.signal.aborted))
      return { shortCircuited: !0 };
    if (Rn(I)) {
      let W;
      return (
        H && H.replace != null
          ? (W = H.replace)
          : (W =
              sd(I.response.headers.get("Location"), new URL(_.url), a) ===
              S.location.pathname + S.location.search),
        await zr(_, I, { submission: b, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (On(I)) throw Ue(400, { type: "defer-action" });
    if (et(I)) {
      let W = hr(L, G.route.id);
      return (
        (H && H.replace) !== !0 && (N = Ce.Push),
        { matches: L, pendingActionResult: [W.route.id, I] }
      );
    }
    return { matches: L, pendingActionResult: [G.route.id, I] };
  }
  async function am(_, T, b, L, F, H, X, I, G, W, Y) {
    let se = F || pa(T, H),
      te = H || X || pd(se),
      ae = !A && (!d.v7_partialHydration || !G);
    if (L) {
      if (ae) {
        let ye = Lu(Y);
        $e(he({ navigation: se }, ye !== void 0 ? { actionData: ye } : {}), {
          flushSync: W,
        });
      }
      let Q = await Yi(b, T.pathname, _.signal);
      if (Q.type === "aborted") return { shortCircuited: !0 };
      if (Q.type === "error") {
        let { boundaryId: ye, error: Ze } = Wi(T.pathname, Q);
        return {
          matches: Q.partialMatches,
          loaderData: {},
          errors: { [ye]: Ze },
        };
      } else if (Q.matches) b = Q.matches;
      else {
        let { error: ye, notFoundMatches: Ze, route: fe } = zl(T.pathname);
        return { matches: Ze, loaderData: {}, errors: { [fe.id]: ye } };
      }
    }
    let ee = o || l,
      [Le, _e] = nd(
        e.history,
        S,
        b,
        te,
        T,
        d.v7_partialHydration && G === !0,
        d.v7_skipActionErrorRevalidation,
        B,
        re,
        ke,
        Me,
        le,
        Z,
        ee,
        a,
        Y
      );
    if (
      (Dl(
        (Q) =>
          !(b && b.some((ye) => ye.route.id === Q)) ||
          (Le && Le.some((ye) => ye.route.id === Q))
      ),
      (U = ++z),
      Le.length === 0 && _e.length === 0)
    ) {
      let Q = zu();
      return (
        Qn(
          T,
          he(
            {
              matches: b,
              loaderData: {},
              errors: Y && et(Y[1]) ? { [Y[0]]: Y[1].error } : null,
            },
            ud(Y),
            Q ? { fetchers: new Map(S.fetchers) } : {}
          ),
          { flushSync: W }
        ),
        { shortCircuited: !0 }
      );
    }
    if (ae) {
      let Q = {};
      if (!L) {
        Q.navigation = se;
        let ye = Lu(Y);
        ye !== void 0 && (Q.actionData = ye);
      }
      _e.length > 0 && (Q.fetchers = om(_e)), $e(Q, { flushSync: W });
    }
    _e.forEach((Q) => {
      ie.has(Q.key) && Kt(Q.key), Q.controller && ie.set(Q.key, Q.controller);
    });
    let Ar = () => _e.forEach((Q) => Kt(Q.key));
    M && M.signal.addEventListener("abort", Ar);
    let { loaderResults: qt, fetcherResults: Kn } = await Ou(
      S.matches,
      b,
      Le,
      _e,
      _
    );
    if (_.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", Ar),
      _e.forEach((Q) => ie.delete(Q.key));
    let qn = dd([...qt, ...Kn]);
    if (qn) {
      if (qn.idx >= Le.length) {
        let Q = _e[qn.idx - Le.length].key;
        Z.add(Q);
      }
      return await zr(_, qn.result, { replace: I }), { shortCircuited: !0 };
    }
    let { loaderData: Zn, errors: Tt } = ad(S, b, Le, qt, Y, _e, Kn, ht);
    ht.forEach((Q, ye) => {
      Q.subscribe((Ze) => {
        (Ze || Q.done) && ht.delete(ye);
      });
    }),
      d.v7_partialHydration &&
        G &&
        S.errors &&
        Object.entries(S.errors)
          .filter((Q) => {
            let [ye] = Q;
            return !Le.some((Ze) => Ze.route.id === ye);
          })
          .forEach((Q) => {
            let [ye, Ze] = Q;
            Tt = Object.assign(Tt || {}, { [ye]: Ze });
          });
    let Xi = zu(),
      Gi = Du(U),
      Qi = Xi || Gi || _e.length > 0;
    return he(
      { matches: b, loaderData: Zn, errors: Tt },
      Qi ? { fetchers: new Map(S.fetchers) } : {}
    );
  }
  function Lu(_) {
    if (_ && !et(_[1])) return { [_[0]]: _[1].data };
    if (S.actionData)
      return Object.keys(S.actionData).length === 0 ? null : S.actionData;
  }
  function om(_) {
    return (
      _.forEach((T) => {
        let b = S.fetchers.get(T.key),
          L = Gr(void 0, b ? b.data : void 0);
        S.fetchers.set(T.key, L);
      }),
      new Map(S.fetchers)
    );
  }
  function um(_, T, b, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    ie.has(_) && Kt(_);
    let F = (L && L.unstable_flushSync) === !0,
      H = o || l,
      X = vo(
        S.location,
        S.matches,
        a,
        d.v7_prependBasename,
        b,
        d.v7_relativeSplatPath,
        T,
        L == null ? void 0 : L.relative
      ),
      I = bn(H, X, a),
      G = Al(I, H, X);
    if ((G.active && G.matches && (I = G.matches), !I)) {
      Lt(_, T, Ue(404, { pathname: X }), { flushSync: F });
      return;
    }
    let {
      path: W,
      submission: Y,
      error: se,
    } = td(d.v7_normalizeFormMethod, !0, X, L);
    if (se) {
      Lt(_, T, se, { flushSync: F });
      return;
    }
    let te = ni(I, W);
    if (((k = (L && L.preventScrollReset) === !0), Y && yt(Y.formMethod))) {
      cm(_, T, W, te, I, G.active, F, Y);
      return;
    }
    le.set(_, { routeId: T, path: W }), dm(_, T, W, te, I, G.active, F, Y);
  }
  async function cm(_, T, b, L, F, H, X, I) {
    Il(), le.delete(_);
    function G(fe) {
      if (!fe.route.action && !fe.route.lazy) {
        let Ot = Ue(405, { method: I.formMethod, pathname: b, routeId: T });
        return Lt(_, T, Ot, { flushSync: X }), !0;
      }
      return !1;
    }
    if (!H && G(L)) return;
    let W = S.fetchers.get(_);
    Qt(_, B0(I, W), { flushSync: X });
    let Y = new AbortController(),
      se = er(e.history, b, Y.signal, I);
    if (H) {
      let fe = await Yi(F, b, se.signal);
      if (fe.type === "aborted") return;
      if (fe.type === "error") {
        let { error: Ot } = Wi(b, fe);
        Lt(_, T, Ot, { flushSync: X });
        return;
      } else if (fe.matches) {
        if (((F = fe.matches), (L = ni(F, b)), G(L))) return;
      } else {
        Lt(_, T, Ue(404, { pathname: b }), { flushSync: X });
        return;
      }
    }
    ie.set(_, Y);
    let te = z,
      ee = (await Dr("action", se, [L], F))[0];
    if (se.signal.aborted) {
      ie.get(_) === Y && ie.delete(_);
      return;
    }
    if (d.v7_fetcherPersist && Me.has(_)) {
      if (Rn(ee) || et(ee)) {
        Qt(_, Jt(void 0));
        return;
      }
    } else {
      if (Rn(ee))
        if ((ie.delete(_), U > te)) {
          Qt(_, Jt(void 0));
          return;
        } else
          return Z.add(_), Qt(_, Gr(I)), zr(se, ee, { fetcherSubmission: I });
      if (et(ee)) {
        Lt(_, T, ee.error);
        return;
      }
    }
    if (On(ee)) throw Ue(400, { type: "defer-action" });
    let Le = S.navigation.location || S.location,
      _e = er(e.history, Le, Y.signal),
      Ar = o || l,
      qt =
        S.navigation.state !== "idle"
          ? bn(Ar, S.navigation.location, a)
          : S.matches;
    K(qt, "Didn't find any matches after fetcher action");
    let Kn = ++z;
    V.set(_, Kn);
    let qn = Gr(I, ee.data);
    S.fetchers.set(_, qn);
    let [Zn, Tt] = nd(
      e.history,
      S,
      qt,
      I,
      Le,
      !1,
      d.v7_skipActionErrorRevalidation,
      B,
      re,
      ke,
      Me,
      le,
      Z,
      Ar,
      a,
      [L.route.id, ee]
    );
    Tt.filter((fe) => fe.key !== _).forEach((fe) => {
      let Ot = fe.key,
        Uu = S.fetchers.get(Ot),
        ym = Gr(void 0, Uu ? Uu.data : void 0);
      S.fetchers.set(Ot, ym),
        ie.has(Ot) && Kt(Ot),
        fe.controller && ie.set(Ot, fe.controller);
    }),
      $e({ fetchers: new Map(S.fetchers) });
    let Xi = () => Tt.forEach((fe) => Kt(fe.key));
    Y.signal.addEventListener("abort", Xi);
    let { loaderResults: Gi, fetcherResults: Qi } = await Ou(
      S.matches,
      qt,
      Zn,
      Tt,
      _e
    );
    if (Y.signal.aborted) return;
    Y.signal.removeEventListener("abort", Xi),
      V.delete(_),
      ie.delete(_),
      Tt.forEach((fe) => ie.delete(fe.key));
    let Q = dd([...Gi, ...Qi]);
    if (Q) {
      if (Q.idx >= Zn.length) {
        let fe = Tt[Q.idx - Zn.length].key;
        Z.add(fe);
      }
      return zr(_e, Q.result);
    }
    let { loaderData: ye, errors: Ze } = ad(
      S,
      S.matches,
      Zn,
      Gi,
      void 0,
      Tt,
      Qi,
      ht
    );
    if (S.fetchers.has(_)) {
      let fe = Jt(ee.data);
      S.fetchers.set(_, fe);
    }
    Du(Kn),
      S.navigation.state === "loading" && Kn > U
        ? (K(N, "Expected pending action"),
          M && M.abort(),
          Qn(S.navigation.location, {
            matches: qt,
            loaderData: ye,
            errors: Ze,
            fetchers: new Map(S.fetchers),
          }))
        : ($e({
            errors: Ze,
            loaderData: od(S.loaderData, ye, qt, Ze),
            fetchers: new Map(S.fetchers),
          }),
          (B = !1));
  }
  async function dm(_, T, b, L, F, H, X, I) {
    let G = S.fetchers.get(_);
    Qt(_, Gr(I, G ? G.data : void 0), { flushSync: X });
    let W = new AbortController(),
      Y = er(e.history, b, W.signal);
    if (H) {
      let ee = await Yi(F, b, Y.signal);
      if (ee.type === "aborted") return;
      if (ee.type === "error") {
        let { error: Le } = Wi(b, ee);
        Lt(_, T, Le, { flushSync: X });
        return;
      } else if (ee.matches) (F = ee.matches), (L = ni(F, b));
      else {
        Lt(_, T, Ue(404, { pathname: b }), { flushSync: X });
        return;
      }
    }
    ie.set(_, W);
    let se = z,
      ae = (await Dr("loader", Y, [L], F))[0];
    if (
      (On(ae) && (ae = (await vh(ae, Y.signal, !0)) || ae),
      ie.get(_) === W && ie.delete(_),
      !Y.signal.aborted)
    ) {
      if (Me.has(_)) {
        Qt(_, Jt(void 0));
        return;
      }
      if (Rn(ae))
        if (U > se) {
          Qt(_, Jt(void 0));
          return;
        } else {
          Z.add(_), await zr(Y, ae);
          return;
        }
      if (et(ae)) {
        Lt(_, T, ae.error);
        return;
      }
      K(!On(ae), "Unhandled fetcher deferred data"), Qt(_, Jt(ae.data));
    }
  }
  async function zr(_, T, b) {
    let {
      submission: L,
      fetcherSubmission: F,
      replace: H,
    } = b === void 0 ? {} : b;
    T.response.headers.has("X-Remix-Revalidate") && (B = !0);
    let X = T.response.headers.get("Location");
    K(X, "Expected a Location header on the redirect Response"),
      (X = sd(X, new URL(_.url), a));
    let I = Li(S.location, X, { _isRedirect: !0 });
    if (n) {
      let ae = !1;
      if (T.response.headers.has("X-Remix-Reload-Document")) ae = !0;
      else if (Eu.test(X)) {
        const ee = e.history.createURL(X);
        ae = ee.origin !== t.location.origin || Xt(ee.pathname, a) == null;
      }
      if (ae) {
        H ? t.location.replace(X) : t.location.assign(X);
        return;
      }
    }
    M = null;
    let G = H === !0 ? Ce.Replace : Ce.Push,
      { formMethod: W, formAction: Y, formEncType: se } = S.navigation;
    !L && !F && W && Y && se && (L = pd(S.navigation));
    let te = L || F;
    if (S0.has(T.response.status) && te && yt(te.formMethod))
      await Tn(G, I, {
        submission: he({}, te, { formAction: X }),
        preventScrollReset: k,
      });
    else {
      let ae = pa(I, L);
      await Tn(G, I, {
        overrideNavigation: ae,
        fetcherSubmission: F,
        preventScrollReset: k,
      });
    }
  }
  async function Dr(_, T, b, L) {
    try {
      let F = await j0(u, _, T, b, L, s, i);
      return await Promise.all(
        F.map((H, X) => {
          if (z0(H)) {
            let I = H.result;
            return {
              type: oe.redirect,
              response: L0(I, T, b[X].route.id, L, a, d.v7_relativeSplatPath),
            };
          }
          return M0(H);
        })
      );
    } catch (F) {
      return b.map(() => ({ type: oe.error, error: F }));
    }
  }
  async function Ou(_, T, b, L, F) {
    let [H, ...X] = await Promise.all([
      b.length ? Dr("loader", F, b, T) : [],
      ...L.map((I) => {
        if (I.matches && I.match && I.controller) {
          let G = er(e.history, I.path, I.controller.signal);
          return Dr("loader", G, [I.match], I.matches).then((W) => W[0]);
        } else
          return Promise.resolve({
            type: oe.error,
            error: Ue(404, { pathname: I.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        fd(
          _,
          b,
          H,
          H.map(() => F.signal),
          !1,
          S.loaderData
        ),
        fd(
          _,
          L.map((I) => I.match),
          X,
          L.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: H, fetcherResults: X }
    );
  }
  function Il() {
    (B = !0),
      re.push(...Dl()),
      le.forEach((_, T) => {
        ie.has(T) && (ke.push(T), Kt(T));
      });
  }
  function Qt(_, T, b) {
    b === void 0 && (b = {}),
      S.fetchers.set(_, T),
      $e(
        { fetchers: new Map(S.fetchers) },
        { flushSync: (b && b.flushSync) === !0 }
      );
  }
  function Lt(_, T, b, L) {
    L === void 0 && (L = {});
    let F = hr(S.matches, T);
    Vi(_),
      $e(
        { errors: { [F.route.id]: b }, fetchers: new Map(S.fetchers) },
        { flushSync: (L && L.flushSync) === !0 }
      );
  }
  function Ru(_) {
    return (
      d.v7_fetcherPersist &&
        (Ct.set(_, (Ct.get(_) || 0) + 1), Me.has(_) && Me.delete(_)),
      S.fetchers.get(_) || x0
    );
  }
  function Vi(_) {
    let T = S.fetchers.get(_);
    ie.has(_) && !(T && T.state === "loading" && V.has(_)) && Kt(_),
      le.delete(_),
      V.delete(_),
      Z.delete(_),
      Me.delete(_),
      S.fetchers.delete(_);
  }
  function fm(_) {
    if (d.v7_fetcherPersist) {
      let T = (Ct.get(_) || 0) - 1;
      T <= 0 ? (Ct.delete(_), Me.add(_)) : Ct.set(_, T);
    } else Vi(_);
    $e({ fetchers: new Map(S.fetchers) });
  }
  function Kt(_) {
    let T = ie.get(_);
    K(T, "Expected fetch controller: " + _), T.abort(), ie.delete(_);
  }
  function Iu(_) {
    for (let T of _) {
      let b = Ru(T),
        L = Jt(b.data);
      S.fetchers.set(T, L);
    }
  }
  function zu() {
    let _ = [],
      T = !1;
    for (let b of Z) {
      let L = S.fetchers.get(b);
      K(L, "Expected fetcher: " + b),
        L.state === "loading" && (Z.delete(b), _.push(b), (T = !0));
    }
    return Iu(_), T;
  }
  function Du(_) {
    let T = [];
    for (let [b, L] of V)
      if (L < _) {
        let F = S.fetchers.get(b);
        K(F, "Expected fetcher: " + b),
          F.state === "loading" && (Kt(b), V.delete(b), T.push(b));
      }
    return Iu(T), T.length > 0;
  }
  function pm(_, T) {
    let b = S.blockers.get(_) || Xr;
    return Be.get(_) !== T && Be.set(_, T), b;
  }
  function Au(_) {
    S.blockers.delete(_), Be.delete(_);
  }
  function Hi(_, T) {
    let b = S.blockers.get(_) || Xr;
    K(
      (b.state === "unblocked" && T.state === "blocked") ||
        (b.state === "blocked" && T.state === "blocked") ||
        (b.state === "blocked" && T.state === "proceeding") ||
        (b.state === "blocked" && T.state === "unblocked") ||
        (b.state === "proceeding" && T.state === "unblocked"),
      "Invalid blocker state transition: " + b.state + " -> " + T.state
    );
    let L = new Map(S.blockers);
    L.set(_, T), $e({ blockers: L });
  }
  function Fu(_) {
    let { currentLocation: T, nextLocation: b, historyAction: L } = _;
    if (Be.size === 0) return;
    Be.size > 1 && jr(!1, "A router only supports one blocker at a time");
    let F = Array.from(Be.entries()),
      [H, X] = F[F.length - 1],
      I = S.blockers.get(H);
    if (
      !(I && I.state === "proceeding") &&
      X({ currentLocation: T, nextLocation: b, historyAction: L })
    )
      return H;
  }
  function zl(_) {
    let T = Ue(404, { pathname: _ }),
      b = o || l,
      { matches: L, route: F } = cd(b);
    return Dl(), { notFoundMatches: L, route: F, error: T };
  }
  function Wi(_, T) {
    return {
      boundaryId: hr(T.partialMatches).route.id,
      error: Ue(400, {
        type: "route-discovery",
        pathname: _,
        message:
          T.error != null && "message" in T.error ? T.error : String(T.error),
      }),
    };
  }
  function Dl(_) {
    let T = [];
    return (
      ht.forEach((b, L) => {
        (!_ || _(L)) && (b.cancel(), T.push(L), ht.delete(L));
      }),
      T
    );
  }
  function hm(_, T, b) {
    if (((v = _), (x = T), (m = b || null), !p && S.navigation === fa)) {
      p = !0;
      let L = $u(S.location, S.matches);
      L != null && $e({ restoreScrollPosition: L });
    }
    return () => {
      (v = null), (x = null), (m = null);
    };
  }
  function Bu(_, T) {
    return (
      (m &&
        m(
          _,
          T.map((L) => Zg(L, S.loaderData))
        )) ||
      _.key
    );
  }
  function mm(_, T) {
    if (v && x) {
      let b = Bu(_, T);
      v[b] = x();
    }
  }
  function $u(_, T) {
    if (v) {
      let b = Bu(_, T),
        L = v[b];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function Al(_, T, b) {
    if (c)
      if (_) {
        let L = _[_.length - 1].route;
        if (L.path && (L.path === "*" || L.path.endsWith("/*")))
          return { active: !0, matches: Ms(T, b, a, !0) };
      } else return { active: !0, matches: Ms(T, b, a, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Yi(_, T, b) {
    let L = _,
      F = L.length > 0 ? L[L.length - 1].route : null;
    for (;;) {
      let H = o == null,
        X = o || l;
      try {
        await P0(c, T, L, X, s, i, Gn, b);
      } catch (Y) {
        return { type: "error", error: Y, partialMatches: L };
      } finally {
        H && (l = [...l]);
      }
      if (b.aborted) return { type: "aborted" };
      let I = bn(X, T, a),
        G = !1;
      if (I) {
        let Y = I[I.length - 1].route;
        if (Y.index) return { type: "success", matches: I };
        if (Y.path && Y.path.length > 0)
          if (Y.path === "*") G = !0;
          else return { type: "success", matches: I };
      }
      let W = Ms(X, T, a, !0);
      if (
        !W ||
        L.map((Y) => Y.route.id).join("-") ===
          W.map((Y) => Y.route.id).join("-")
      )
        return { type: "success", matches: G ? I : null };
      if (((L = W), (F = L[L.length - 1].route), F.path === "*"))
        return { type: "success", matches: L };
    }
  }
  function vm(_) {
    (s = {}), (o = Oi(_, i, void 0, s));
  }
  function gm(_, T) {
    let b = o == null;
    ph(_, T, o || l, s, i), b && ((l = [...l]), $e({}));
  }
  return (
    (C = {
      get basename() {
        return a;
      },
      get future() {
        return d;
      },
      get state() {
        return S;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: nm,
      subscribe: im,
      enableScrollRestoration: hm,
      navigate: Mu,
      fetch: um,
      revalidate: sm,
      createHref: (_) => e.history.createHref(_),
      encodeLocation: (_) => e.history.encodeLocation(_),
      getFetcher: Ru,
      deleteFetcher: fm,
      dispose: rm,
      getBlocker: pm,
      deleteBlocker: Au,
      patchRoutes: gm,
      _internalFetchControllers: ie,
      _internalActiveDeferreds: ht,
      _internalSetRoutes: vm,
    }),
    C
  );
}
function C0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function vo(e, t, n, r, i, s, l, o) {
  let a, u;
  if (l) {
    a = [];
    for (let d of t)
      if ((a.push(d), d.route.id === l)) {
        u = d;
        break;
      }
  } else (a = t), (u = t[t.length - 1]);
  let c = Su(i || ".", wu(a, s), Xt(e.pathname, n) || e.pathname, o === "path");
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      u &&
      u.route.index &&
      !_u(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Ut([n, c.pathname])),
    Vn(c)
  );
}
function td(e, t, n, r) {
  if (!r || !C0(r)) return { path: n };
  if (r.formMethod && !A0(r.formMethod))
    return { path: n, error: Ue(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: Ue(400, { type: "invalid-body" }) }),
    s = r.formMethod || "get",
    l = e ? s.toUpperCase() : s.toLowerCase(),
    o = hh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!yt(l)) return i();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((w, v) => {
              let [m, x] = v;
              return (
                "" +
                w +
                m +
                "=" +
                x +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: o,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!yt(l)) return i();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: o,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, u;
  if (r.formData) (a = go(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (a = go(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (u = ld(a));
  else if (r.body == null) (a = new URLSearchParams()), (u = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (u = ld(a));
    } catch {
      return i();
    }
  let c = {
    formMethod: l,
    formAction: o,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (yt(c.formMethod)) return { path: n, submission: c };
  let d = _n(n);
  return (
    t && d.search && _u(d.search) && a.append("index", ""),
    (d.search = "?" + a),
    { path: Vn(d), submission: c }
  );
}
function T0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function nd(e, t, n, r, i, s, l, o, a, u, c, d, f, w, v, m) {
  let x = m ? (et(m[1]) ? m[1].error : m[1].data) : void 0,
    p = e.createURL(t.location),
    h = e.createURL(i),
    y = m && et(m[1]) ? m[0] : void 0,
    E = y ? T0(n, y) : n,
    C = m ? m[1].statusCode : void 0,
    S = l && C && C >= 400,
    N = E.filter((M, j) => {
      let { route: R } = M;
      if (R.lazy) return !0;
      if (R.loader == null) return !1;
      if (s)
        return typeof R.loader != "function" || R.loader.hydrate
          ? !0
          : t.loaderData[R.id] === void 0 &&
              (!t.errors || t.errors[R.id] === void 0);
      if (k0(t.loaderData, t.matches[j], M) || a.some((B) => B === M.route.id))
        return !0;
      let D = t.matches[j],
        A = M;
      return rd(
        M,
        he(
          {
            currentUrl: p,
            currentParams: D.params,
            nextUrl: h,
            nextParams: A.params,
          },
          r,
          {
            actionResult: x,
            actionStatus: C,
            defaultShouldRevalidate: S
              ? !1
              : o ||
                p.pathname + p.search === h.pathname + h.search ||
                p.search !== h.search ||
                fh(D, A),
          }
        )
      );
    }),
    k = [];
  return (
    d.forEach((M, j) => {
      if (s || !n.some((re) => re.route.id === M.routeId) || c.has(j)) return;
      let R = bn(w, M.path, v);
      if (!R) {
        k.push({
          key: j,
          routeId: M.routeId,
          path: M.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let D = t.fetchers.get(j),
        A = ni(R, M.path),
        B = !1;
      f.has(j)
        ? (B = !1)
        : u.includes(j)
        ? (B = !0)
        : D && D.state !== "idle" && D.data === void 0
        ? (B = o)
        : (B = rd(
            A,
            he(
              {
                currentUrl: p,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: x,
                actionStatus: C,
                defaultShouldRevalidate: S ? !1 : o,
              }
            )
          )),
        B &&
          k.push({
            key: j,
            routeId: M.routeId,
            path: M.path,
            matches: R,
            match: A,
            controller: new AbortController(),
          });
    }),
    [N, k]
  );
}
function k0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function fh(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function rd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function P0(e, t, n, r, i, s, l, o) {
  let a = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = l.get(a);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (c, d) => {
          o.aborted || ph(c, d, r, i, s);
        },
      })),
      l.set(a, u)),
      u && I0(u) && (await u);
  } finally {
    l.delete(a);
  }
}
function ph(e, t, n, r, i) {
  if (e) {
    var s;
    let l = r[e];
    K(l, "No route found to patch children into: routeId = " + e);
    let o = Oi(
      t,
      i,
      [
        e,
        "patch",
        String(((s = l.children) == null ? void 0 : s.length) || "0"),
      ],
      r
    );
    l.children ? l.children.push(...o) : (l.children = o);
  } else {
    let l = Oi(t, i, ["patch", String(n.length || "0")], r);
    n.push(...l);
  }
}
async function id(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  K(i, "No route found in manifest");
  let s = {};
  for (let l in r) {
    let a = i[l] !== void 0 && l !== "hasErrorBoundary";
    jr(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !a && !Kg.has(l) && (s[l] = r[l]);
  }
  Object.assign(i, s), Object.assign(i, he({}, t(i), { lazy: void 0 }));
}
function b0(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function j0(e, t, n, r, i, s, l, o) {
  let a = r.reduce((d, f) => d.add(f.route.id), new Set()),
    u = new Set(),
    c = await e({
      matches: i.map((d) => {
        let f = a.has(d.route.id);
        return he({}, d, {
          shouldLoad: f,
          resolve: (v) => (
            u.add(d.route.id),
            f
              ? N0(t, n, d, s, l, v, o)
              : Promise.resolve({ type: oe.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: i[0].params,
      context: o,
    });
  return (
    i.forEach((d) =>
      K(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    c.filter((d, f) => a.has(i[f].route.id))
  );
}
async function N0(e, t, n, r, i, s, l) {
  let o,
    a,
    u = (c) => {
      let d,
        f = new Promise((m, x) => (d = x));
      (a = () => d()), t.signal.addEventListener("abort", a);
      let w = (m) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : c(
                { request: t, params: n.params, context: l },
                ...(m !== void 0 ? [m] : [])
              ),
        v;
      return (
        s
          ? (v = s((m) => w(m)))
          : (v = (async () => {
              try {
                return { type: "data", result: await w() };
              } catch (m) {
                return { type: "error", result: m };
              }
            })()),
        Promise.race([v, f])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let d,
          [f] = await Promise.all([
            u(c).catch((w) => {
              d = w;
            }),
            id(n.route, i, r),
          ]);
        if (d !== void 0) throw d;
        o = f;
      } else if ((await id(n.route, i, r), (c = n.route[e]), c)) o = await u(c);
      else if (e === "action") {
        let d = new URL(t.url),
          f = d.pathname + d.search;
        throw Ue(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: oe.data, result: void 0 };
    else if (c) o = await u(c);
    else {
      let d = new URL(t.url),
        f = d.pathname + d.search;
      throw Ue(404, { pathname: f });
    }
    K(
      o.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (c) {
    return { type: oe.error, result: c };
  } finally {
    a && t.signal.removeEventListener("abort", a);
  }
  return o;
}
async function M0(e) {
  let { result: t, type: n, status: r } = e;
  if (mh(t)) {
    let l;
    try {
      let o = t.headers.get("Content-Type");
      o && /\bapplication\/json\b/.test(o)
        ? t.body == null
          ? (l = null)
          : (l = await t.json())
        : (l = await t.text());
    } catch (o) {
      return { type: oe.error, error: o };
    }
    return n === oe.error
      ? {
          type: oe.error,
          error: new xu(t.status, t.statusText, l),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: oe.data, data: l, statusCode: t.status, headers: t.headers };
  }
  if (n === oe.error)
    return { type: oe.error, error: t, statusCode: Ml(t) ? t.status : r };
  if (D0(t)) {
    var i, s;
    return {
      type: oe.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((s = t.init) == null ? void 0 : s.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: oe.data, data: t, statusCode: r };
}
function L0(e, t, n, r, i, s) {
  let l = e.headers.get("Location");
  if (
    (K(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Eu.test(l))
  ) {
    let o = r.slice(0, r.findIndex((a) => a.route.id === n) + 1);
    (l = vo(new URL(t.url), o, i, !0, l, s)), e.headers.set("Location", l);
  }
  return e;
}
function sd(e, t, n) {
  if (Eu.test(e)) {
    let r = e,
      i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      s = Xt(i.pathname, n) != null;
    if (i.origin === t.origin && s) return i.pathname + i.search + i.hash;
  }
  return e;
}
function er(e, t, n, r) {
  let i = e.createURL(hh(t)).toString(),
    s = { signal: n };
  if (r && yt(r.formMethod)) {
    let { formMethod: l, formEncType: o } = r;
    (s.method = l.toUpperCase()),
      o === "application/json"
        ? ((s.headers = new Headers({ "Content-Type": o })),
          (s.body = JSON.stringify(r.json)))
        : o === "text/plain"
        ? (s.body = r.text)
        : o === "application/x-www-form-urlencoded" && r.formData
        ? (s.body = go(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function go(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function ld(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function O0(e, t, n, r, i, s) {
  let l = {},
    o = null,
    a,
    u = !1,
    c = {},
    d = r && et(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((f, w) => {
      let v = t[w].route.id;
      if (
        (K(!Rn(f), "Cannot handle redirect results in processLoaderData"),
        et(f))
      ) {
        let m = f.error;
        d !== void 0 && ((m = d), (d = void 0)), (o = o || {});
        {
          let x = hr(e, v);
          o[x.route.id] == null && (o[x.route.id] = m);
        }
        (l[v] = void 0),
          u || ((u = !0), (a = Ml(f.error) ? f.error.status : 500)),
          f.headers && (c[v] = f.headers);
      } else
        On(f)
          ? (i.set(v, f.deferredData),
            (l[v] = f.deferredData.data),
            f.statusCode != null &&
              f.statusCode !== 200 &&
              !u &&
              (a = f.statusCode),
            f.headers && (c[v] = f.headers))
          : ((l[v] = f.data),
            f.statusCode && f.statusCode !== 200 && !u && (a = f.statusCode),
            f.headers && (c[v] = f.headers));
    }),
    d !== void 0 && r && ((o = { [r[0]]: d }), (l[r[0]] = void 0)),
    { loaderData: l, errors: o, statusCode: a || 200, loaderHeaders: c }
  );
}
function ad(e, t, n, r, i, s, l, o) {
  let { loaderData: a, errors: u } = O0(t, n, r, i, o);
  for (let c = 0; c < s.length; c++) {
    let { key: d, match: f, controller: w } = s[c];
    K(
      l !== void 0 && l[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let v = l[c];
    if (!(w && w.signal.aborted))
      if (et(v)) {
        let m = hr(e.matches, f == null ? void 0 : f.route.id);
        (u && u[m.route.id]) || (u = he({}, u, { [m.route.id]: v.error })),
          e.fetchers.delete(d);
      } else if (Rn(v)) K(!1, "Unhandled fetcher revalidation redirect");
      else if (On(v)) K(!1, "Unhandled fetcher deferred data");
      else {
        let m = Jt(v.data);
        e.fetchers.set(d, m);
      }
  }
  return { loaderData: a, errors: u };
}
function od(e, t, n, r) {
  let i = he({}, t);
  for (let s of n) {
    let l = s.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (i[l] = t[l])
        : e[l] !== void 0 && s.route.loader && (i[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return i;
}
function ud(e) {
  return e
    ? et(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function hr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function cd(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ue(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
      message: l,
    } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        s === "route-discovery"
          ? (a =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                l))
          : i && n && r
          ? (a =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (a = "defer() is not supported in actions")
          : s === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && n && r
          ? (a =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (a = 'Invalid request method "' + i.toUpperCase() + '"')),
    new xu(e || 500, o, new Error(a), !0)
  );
}
function dd(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Rn(n)) return { result: n, idx: t };
  }
}
function hh(e) {
  let t = typeof e == "string" ? _n(e) : e;
  return Vn(he({}, t, { hash: "" }));
}
function R0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function I0(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function z0(e) {
  return mh(e.result) && w0.has(e.result.status);
}
function On(e) {
  return e.type === oe.deferred;
}
function et(e) {
  return e.type === oe.error;
}
function Rn(e) {
  return (e && e.type) === oe.redirect;
}
function D0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function mh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function A0(e) {
  return y0.has(e.toLowerCase());
}
function yt(e) {
  return v0.has(e.toLowerCase());
}
async function fd(e, t, n, r, i, s) {
  for (let l = 0; l < n.length; l++) {
    let o = n[l],
      a = t[l];
    if (!a) continue;
    let u = e.find((d) => d.route.id === a.route.id),
      c = u != null && !fh(u, a) && (s && s[a.route.id]) !== void 0;
    if (On(o) && (i || c)) {
      let d = r[l];
      K(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await vh(o, d, i).then((f) => {
          f && (n[l] = f || n[l]);
        });
    }
  }
}
async function vh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: oe.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: oe.error, error: i };
      }
    return { type: oe.data, data: e.deferredData.data };
  }
}
function _u(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ni(e, t) {
  let n = typeof t == "string" ? _n(t).search : t.search;
  if (e[e.length - 1].route.index && _u(n || "")) return e[e.length - 1];
  let r = uh(e);
  return r[r.length - 1];
}
function pd(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function pa(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function F0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Gr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function B0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Jt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function $0(e, t) {
  try {
    let n = e.sessionStorage.getItem(dh);
    if (n) {
      let r = JSON.parse(n);
      for (let [i, s] of Object.entries(r || {}))
        s && Array.isArray(s) && t.set(i, new Set(s || []));
    }
  } catch {}
}
function U0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t) n[r] = [...i];
    try {
      e.sessionStorage.setItem(dh, JSON.stringify(n));
    } catch (r) {
      jr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
const Fi = P.createContext(null),
  Cu = P.createContext(null),
  Cn = P.createContext(null),
  Tu = P.createContext(null),
  Xn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gh = P.createContext(null);
function V0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Bi() || K(!1);
  let { basename: r, navigator: i } = P.useContext(Cn),
    { hash: s, pathname: l, search: o } = Ll(e, { relative: n }),
    a = l;
  return (
    r !== "/" && (a = l === "/" ? r : Ut([r, l])),
    i.createHref({ pathname: a, search: o, hash: s })
  );
}
function Bi() {
  return P.useContext(Tu) != null;
}
function $i() {
  return Bi() || K(!1), P.useContext(Tu).location;
}
function yh(e) {
  P.useContext(Cn).static || P.useLayoutEffect(e);
}
function H0() {
  let { isDataRoute: e } = P.useContext(Xn);
  return e ? ny() : W0();
}
function W0() {
  Bi() || K(!1);
  let e = P.useContext(Fi),
    { basename: t, future: n, navigator: r } = P.useContext(Cn),
    { matches: i } = P.useContext(Xn),
    { pathname: s } = $i(),
    l = JSON.stringify(wu(i, n.v7_relativeSplatPath)),
    o = P.useRef(!1);
  return (
    yh(() => {
      o.current = !0;
    }),
    P.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !o.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Su(u, JSON.parse(l), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ut([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, l, s, e]
    )
  );
}
function Ll(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(Cn),
    { matches: i } = P.useContext(Xn),
    { pathname: s } = $i(),
    l = JSON.stringify(wu(i, r.v7_relativeSplatPath));
  return P.useMemo(() => Su(e, JSON.parse(l), s, n === "path"), [e, l, s, n]);
}
function Y0(e, t, n, r) {
  Bi() || K(!1);
  let { navigator: i } = P.useContext(Cn),
    { matches: s } = P.useContext(Xn),
    l = s[s.length - 1],
    o = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = $i(),
    c;
  c = u;
  let d = c.pathname || "/",
    f = d;
  if (a !== "/") {
    let m = a.replace(/^\//, "").split("/");
    f = "/" + d.replace(/^\//, "").split("/").slice(m.length).join("/");
  }
  let w = bn(e, { pathname: f });
  return q0(
    w &&
      w.map((m) =>
        Object.assign({}, m, {
          params: Object.assign({}, o, m.params),
          pathname: Ut([
            a,
            i.encodeLocation
              ? i.encodeLocation(m.pathname).pathname
              : m.pathname,
          ]),
          pathnameBase:
            m.pathnameBase === "/"
              ? a
              : Ut([
                  a,
                  i.encodeLocation
                    ? i.encodeLocation(m.pathnameBase).pathname
                    : m.pathnameBase,
                ]),
        })
      ),
    s,
    n,
    r
  );
}
function X0() {
  let e = ty(),
    t = Ml(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: i }, n) : null,
    null
  );
}
const G0 = P.createElement(X0, null);
class Q0 extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Xn.Provider,
          { value: this.props.routeContext },
          P.createElement(gh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function K0(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = P.useContext(Fi);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Xn.Provider, { value: t }, r)
  );
}
function q0(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let l = e,
    o = (i = n) == null ? void 0 : i.errors;
  if (o != null) {
    let c = l.findIndex(
      (d) => d.route.id && (o == null ? void 0 : o[d.route.id]) !== void 0
    );
    c >= 0 || K(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < l.length; c++) {
      let d = l[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: w } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!w || w[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((c, d, f) => {
    let w,
      v = !1,
      m = null,
      x = null;
    n &&
      ((w = o && d.route.id ? o[d.route.id] : void 0),
      (m = d.route.errorElement || G0),
      a &&
        (u < 0 && f === 0
          ? (ry("route-fallback"), (v = !0), (x = null))
          : u === f &&
            ((v = !0), (x = d.route.hydrateFallbackElement || null))));
    let p = t.concat(l.slice(0, f + 1)),
      h = () => {
        let y;
        return (
          w
            ? (y = m)
            : v
            ? (y = x)
            : d.route.Component
            ? (y = P.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          P.createElement(K0, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? P.createElement(Q0, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: w,
          children: h(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var wh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(wh || {}),
  al = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(al || {});
function Z0(e) {
  let t = P.useContext(Fi);
  return t || K(!1), t;
}
function J0(e) {
  let t = P.useContext(Cu);
  return t || K(!1), t;
}
function ey(e) {
  let t = P.useContext(Xn);
  return t || K(!1), t;
}
function Sh(e) {
  let t = ey(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function ty() {
  var e;
  let t = P.useContext(gh),
    n = J0(al.UseRouteError),
    r = Sh(al.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ny() {
  let { router: e } = Z0(wh.UseNavigateStable),
    t = Sh(al.UseNavigateStable),
    n = P.useRef(!1);
  return (
    yh(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ll({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const hd = {};
function ry(e, t, n) {
  hd[e] || (hd[e] = !0);
}
function iy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ce.Pop,
    navigator: s,
    static: l = !1,
    future: o,
  } = e;
  Bi() && K(!1);
  let a = t.replace(/^\/*/, "/"),
    u = P.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: l,
        future: ll({ v7_relativeSplatPath: !1 }, o),
      }),
      [a, o, s, l]
    );
  typeof r == "string" && (r = _n(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: w = null,
      key: v = "default",
    } = r,
    m = P.useMemo(() => {
      let x = Xt(c, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: w, key: v },
            navigationType: i,
          };
    }, [a, c, d, f, w, v, i]);
  return m == null
    ? null
    : P.createElement(
        Cn.Provider,
        { value: u },
        P.createElement(Tu.Provider, { children: n, value: m })
      );
}
new Promise(() => {});
function sy(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nr.apply(this, arguments)
  );
}
function xh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ly(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ay(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ly(e);
}
const oy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  uy = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  cy = "6";
try {
  window.__reactRouterVersion = cy;
} catch {}
function dy(e, t) {
  return _0({
    basename: void 0,
    future: Nr({}, void 0, { v7_prependBasename: !0 }),
    history: Xg({ window: void 0 }),
    hydrationData: fy(),
    routes: e,
    mapRouteProperties: sy,
    unstable_dataStrategy: void 0,
    unstable_patchRoutesOnMiss: void 0,
    window: void 0,
  }).initialize();
}
function fy() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Nr({}, t, { errors: py(t.errors) })), t;
}
function py(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new xu(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let s = window[i.__subType];
        if (typeof s == "function")
          try {
            let l = new s(i.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let s = new Error(i.message);
        (s.stack = ""), (n[r] = s);
      }
    } else n[r] = i;
  return n;
}
const Eh = P.createContext({ isTransitioning: !1 }),
  hy = P.createContext(new Map()),
  my = "startTransition",
  md = Rm[my],
  vy = "flushSync",
  vd = Yg[vy];
function gy(e) {
  md ? md(e) : e();
}
function Qr(e) {
  vd ? vd(e) : e();
}
class yy {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function wy(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, s] = P.useState(n.state),
    [l, o] = P.useState(),
    [a, u] = P.useState({ isTransitioning: !1 }),
    [c, d] = P.useState(),
    [f, w] = P.useState(),
    [v, m] = P.useState(),
    x = P.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    h = P.useCallback(
      (k) => {
        p ? gy(k) : k();
      },
      [p]
    ),
    y = P.useCallback(
      (k, M) => {
        let {
          deletedFetchers: j,
          unstable_flushSync: R,
          unstable_viewTransitionOpts: D,
        } = M;
        j.forEach((B) => x.current.delete(B)),
          k.fetchers.forEach((B, re) => {
            B.data !== void 0 && x.current.set(re, B.data);
          });
        let A =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!D || A) {
          R ? Qr(() => s(k)) : h(() => s(k));
          return;
        }
        if (R) {
          Qr(() => {
            f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: D.currentLocation,
                nextLocation: D.nextLocation,
              });
          });
          let B = n.window.document.startViewTransition(() => {
            Qr(() => s(k));
          });
          B.finished.finally(() => {
            Qr(() => {
              d(void 0), w(void 0), o(void 0), u({ isTransitioning: !1 });
            });
          }),
            Qr(() => w(B));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            m({
              state: k,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }))
          : (o(k),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: D.currentLocation,
              nextLocation: D.nextLocation,
            }));
      },
      [n.window, f, c, x, h]
    );
  P.useLayoutEffect(() => n.subscribe(y), [n, y]),
    P.useEffect(() => {
      a.isTransitioning && !a.flushSync && d(new yy());
    }, [a]),
    P.useEffect(() => {
      if (c && l && n.window) {
        let k = l,
          M = c.promise,
          j = n.window.document.startViewTransition(async () => {
            h(() => s(k)), await M;
          });
        j.finished.finally(() => {
          d(void 0), w(void 0), o(void 0), u({ isTransitioning: !1 });
        }),
          w(j);
      }
    }, [h, l, c, n.window]),
    P.useEffect(() => {
      c && l && i.location.key === l.location.key && c.resolve();
    }, [c, f, i.location, l]),
    P.useEffect(() => {
      !a.isTransitioning &&
        v &&
        (o(v.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: v.currentLocation,
          nextLocation: v.nextLocation,
        }),
        m(void 0));
    }, [a.isTransitioning, v]),
    P.useEffect(() => {}, []);
  let E = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (k) => n.navigate(k),
        push: (k, M, j) =>
          n.navigate(k, {
            state: M,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
        replace: (k, M, j) =>
          n.navigate(k, {
            replace: !0,
            state: M,
            preventScrollReset: j == null ? void 0 : j.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || "/",
    S = P.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: C }),
      [n, E, C]
    ),
    N = P.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      Fi.Provider,
      { value: S },
      P.createElement(
        Cu.Provider,
        { value: i },
        P.createElement(
          hy.Provider,
          { value: x.current },
          P.createElement(
            Eh.Provider,
            { value: a },
            P.createElement(
              iy,
              {
                basename: C,
                location: i.location,
                navigationType: i.historyAction,
                navigator: E,
                future: N,
              },
              i.initialized || n.future.v7_partialHydration
                ? P.createElement(Sy, {
                    routes: n.routes,
                    future: n.future,
                    state: i,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const Sy = P.memo(xy);
function xy(e) {
  let { routes: t, future: n, state: r } = e;
  return Y0(t, void 0, r, n);
}
const Ey =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  _y = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ku = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: l,
        state: o,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = xh(t, oy),
      { basename: w } = P.useContext(Cn),
      v,
      m = !1;
    if (typeof u == "string" && _y.test(u) && ((v = u), Ey))
      try {
        let y = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = Xt(E.pathname, w);
        E.origin === y.origin && C != null
          ? (u = C + E.search + E.hash)
          : (m = !0);
      } catch {}
    let x = V0(u, { relative: i }),
      p = Ty(u, {
        replace: l,
        state: o,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function h(y) {
      r && r(y), y.defaultPrevented || p(y);
    }
    return P.createElement(
      "a",
      Nr({}, f, { href: v || x, onClick: m || s ? r : h, ref: n, target: a })
    );
  }),
  Kr = P.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: l = !1,
        style: o,
        to: a,
        unstable_viewTransition: u,
        children: c,
      } = t,
      d = xh(t, uy),
      f = Ll(a, { relative: d.relative }),
      w = $i(),
      v = P.useContext(Cu),
      { navigator: m, basename: x } = P.useContext(Cn),
      p = v != null && ky(f) && u === !0,
      h = m.encodeLocation ? m.encodeLocation(f).pathname : f.pathname,
      y = w.pathname,
      E =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    i ||
      ((y = y.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (h = h.toLowerCase())),
      E && x && (E = Xt(E, x) || E);
    const C = h !== "/" && h.endsWith("/") ? h.length - 1 : h.length;
    let S = y === h || (!l && y.startsWith(h) && y.charAt(C) === "/"),
      N =
        E != null &&
        (E === h || (!l && E.startsWith(h) && E.charAt(h.length) === "/")),
      k = { isActive: S, isPending: N, isTransitioning: p },
      M = S ? r : void 0,
      j;
    typeof s == "function"
      ? (j = s(k))
      : (j = [
          s,
          S ? "active" : null,
          N ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let R = typeof o == "function" ? o(k) : o;
    return P.createElement(
      ku,
      Nr({}, d, {
        "aria-current": M,
        className: j,
        ref: n,
        style: R,
        to: a,
        unstable_viewTransition: u,
      }),
      typeof c == "function" ? c(k) : c
    );
  });
var yo;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(yo || (yo = {}));
var gd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(gd || (gd = {}));
function Cy(e) {
  let t = P.useContext(Fi);
  return t || K(!1), t;
}
function Ty(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: l,
      unstable_viewTransition: o,
    } = t === void 0 ? {} : t,
    a = H0(),
    u = $i(),
    c = Ll(e, { relative: l });
  return P.useCallback(
    (d) => {
      if (ay(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Vn(u) === Vn(c);
        a(e, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: l,
          unstable_viewTransition: o,
        });
      }
    },
    [u, a, c, r, i, n, e, s, l, o]
  );
}
function ky(e, t) {
  t === void 0 && (t = {});
  let n = P.useContext(Eh);
  n == null && K(!1);
  let { basename: r } = Cy(yo.useViewTransitionState),
    i = Ll(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = Xt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    l = Xt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return sl(i.pathname, l) != null || sl(i.pathname, s) != null;
}
var _h = "Expected a function",
  yd = NaN,
  Py = "[object Symbol]",
  by = /^\s+|\s+$/g,
  jy = /^[-+]0x[0-9a-f]+$/i,
  Ny = /^0b[01]+$/i,
  My = /^0o[0-7]+$/i,
  Ly = parseInt,
  Oy = typeof jt == "object" && jt && jt.Object === Object && jt,
  Ry = typeof self == "object" && self && self.Object === Object && self,
  Iy = Oy || Ry || Function("return this")(),
  zy = Object.prototype,
  Dy = zy.toString,
  Ay = Math.max,
  Fy = Math.min,
  ha = function () {
    return Iy.Date.now();
  };
function By(e, t, n) {
  var r,
    i,
    s,
    l,
    o,
    a,
    u = 0,
    c = !1,
    d = !1,
    f = !0;
  if (typeof e != "function") throw new TypeError(_h);
  (t = wd(t) || 0),
    ol(n) &&
      ((c = !!n.leading),
      (d = "maxWait" in n),
      (s = d ? Ay(wd(n.maxWait) || 0, t) : s),
      (f = "trailing" in n ? !!n.trailing : f));
  function w(S) {
    var N = r,
      k = i;
    return (r = i = void 0), (u = S), (l = e.apply(k, N)), l;
  }
  function v(S) {
    return (u = S), (o = setTimeout(p, t)), c ? w(S) : l;
  }
  function m(S) {
    var N = S - a,
      k = S - u,
      M = t - N;
    return d ? Fy(M, s - k) : M;
  }
  function x(S) {
    var N = S - a,
      k = S - u;
    return a === void 0 || N >= t || N < 0 || (d && k >= s);
  }
  function p() {
    var S = ha();
    if (x(S)) return h(S);
    o = setTimeout(p, m(S));
  }
  function h(S) {
    return (o = void 0), f && r ? w(S) : ((r = i = void 0), l);
  }
  function y() {
    o !== void 0 && clearTimeout(o), (u = 0), (r = a = i = o = void 0);
  }
  function E() {
    return o === void 0 ? l : h(ha());
  }
  function C() {
    var S = ha(),
      N = x(S);
    if (((r = arguments), (i = this), (a = S), N)) {
      if (o === void 0) return v(a);
      if (d) return (o = setTimeout(p, t)), w(a);
    }
    return o === void 0 && (o = setTimeout(p, t)), l;
  }
  return (C.cancel = y), (C.flush = E), C;
}
function $y(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(_h);
  return (
    ol(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    By(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function ol(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Uy(e) {
  return !!e && typeof e == "object";
}
function Vy(e) {
  return typeof e == "symbol" || (Uy(e) && Dy.call(e) == Py);
}
function wd(e) {
  if (typeof e == "number") return e;
  if (Vy(e)) return yd;
  if (ol(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ol(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(by, "");
  var n = Ny.test(e);
  return n || My.test(e) ? Ly(e.slice(2), n ? 2 : 8) : jy.test(e) ? yd : +e;
}
var Hy = $y;
const Wy = Mr(Hy);
var Yy = "Expected a function",
  Sd = NaN,
  Xy = "[object Symbol]",
  Gy = /^\s+|\s+$/g,
  Qy = /^[-+]0x[0-9a-f]+$/i,
  Ky = /^0b[01]+$/i,
  qy = /^0o[0-7]+$/i,
  Zy = parseInt,
  Jy = typeof jt == "object" && jt && jt.Object === Object && jt,
  ew = typeof self == "object" && self && self.Object === Object && self,
  tw = Jy || ew || Function("return this")(),
  nw = Object.prototype,
  rw = nw.toString,
  iw = Math.max,
  sw = Math.min,
  ma = function () {
    return tw.Date.now();
  };
function lw(e, t, n) {
  var r,
    i,
    s,
    l,
    o,
    a,
    u = 0,
    c = !1,
    d = !1,
    f = !0;
  if (typeof e != "function") throw new TypeError(Yy);
  (t = xd(t) || 0),
    wo(n) &&
      ((c = !!n.leading),
      (d = "maxWait" in n),
      (s = d ? iw(xd(n.maxWait) || 0, t) : s),
      (f = "trailing" in n ? !!n.trailing : f));
  function w(S) {
    var N = r,
      k = i;
    return (r = i = void 0), (u = S), (l = e.apply(k, N)), l;
  }
  function v(S) {
    return (u = S), (o = setTimeout(p, t)), c ? w(S) : l;
  }
  function m(S) {
    var N = S - a,
      k = S - u,
      M = t - N;
    return d ? sw(M, s - k) : M;
  }
  function x(S) {
    var N = S - a,
      k = S - u;
    return a === void 0 || N >= t || N < 0 || (d && k >= s);
  }
  function p() {
    var S = ma();
    if (x(S)) return h(S);
    o = setTimeout(p, m(S));
  }
  function h(S) {
    return (o = void 0), f && r ? w(S) : ((r = i = void 0), l);
  }
  function y() {
    o !== void 0 && clearTimeout(o), (u = 0), (r = a = i = o = void 0);
  }
  function E() {
    return o === void 0 ? l : h(ma());
  }
  function C() {
    var S = ma(),
      N = x(S);
    if (((r = arguments), (i = this), (a = S), N)) {
      if (o === void 0) return v(a);
      if (d) return (o = setTimeout(p, t)), w(a);
    }
    return o === void 0 && (o = setTimeout(p, t)), l;
  }
  return (C.cancel = y), (C.flush = E), C;
}
function wo(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function aw(e) {
  return !!e && typeof e == "object";
}
function ow(e) {
  return typeof e == "symbol" || (aw(e) && rw.call(e) == Xy);
}
function xd(e) {
  if (typeof e == "number") return e;
  if (ow(e)) return Sd;
  if (wo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wo(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(Gy, "");
  var n = Ky.test(e);
  return n || qy.test(e) ? Zy(e.slice(2), n ? 2 : 8) : Qy.test(e) ? Sd : +e;
}
var uw = lw;
const Ed = Mr(uw);
var Ch = function () {};
function Th(e) {
  var t = void 0,
    n = void 0,
    r = void 0;
  for (t = 0; t < e.length; t += 1)
    if (
      ((n = e[t]),
      (n.dataset && n.dataset.aos) || ((r = n.children && Th(n.children)), r))
    )
      return !0;
  return !1;
}
function cw(e) {
  e &&
    e.forEach(function (t) {
      var n = Array.prototype.slice.call(t.addedNodes),
        r = Array.prototype.slice.call(t.removedNodes),
        i = n.concat(r);
      if (Th(i)) return Ch();
    });
}
function kh() {
  return (
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver
  );
}
function dw() {
  return !!kh();
}
function fw(e, t) {
  var n = window.document,
    r = kh(),
    i = new r(cw);
  (Ch = t),
    i.observe(n.documentElement, {
      childList: !0,
      subtree: !0,
      removedNodes: !0,
    });
}
var _d = { isSupported: dw, ready: fw },
  pw = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  hw = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  mw =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  vw =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
  gw =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
  yw =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
  ww =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function Cd() {
  return navigator.userAgent || navigator.vendor || window.opera || "";
}
var Sw = (function () {
    function e() {
      pw(this, e);
    }
    return (
      hw(e, [
        {
          key: "phone",
          value: function () {
            var n = Cd();
            return !!(vw.test(n) || gw.test(n.substr(0, 4)));
          },
        },
        {
          key: "mobile",
          value: function () {
            var n = Cd();
            return !!(yw.test(n) || ww.test(n.substr(0, 4)));
          },
        },
        {
          key: "tablet",
          value: function () {
            return this.mobile() && !this.phone();
          },
        },
        {
          key: "ie11",
          value: function () {
            return (
              "-ms-scroll-limit" in document.documentElement.style &&
              "-ms-ime-align" in document.documentElement.style
            );
          },
        },
      ]),
      e
    );
  })(),
  Ls = new Sw(),
  xw = function (t, n) {
    return (
      n &&
      n.forEach(function (r) {
        return t.classList.add(r);
      })
    );
  },
  Ew = function (t, n) {
    return (
      n &&
      n.forEach(function (r) {
        return t.classList.remove(r);
      })
    );
  },
  ps = function (t, n) {
    var r = void 0;
    return (
      Ls.ie11()
        ? ((r = document.createEvent("CustomEvent")),
          r.initCustomEvent(t, !0, !0, { detail: n }))
        : (r = new CustomEvent(t, { detail: n })),
      document.dispatchEvent(r)
    );
  },
  _w = function (t, n) {
    var r = t.options,
      i = t.position,
      s = t.node;
    t.data;
    var l = function () {
        t.animated &&
          (Ew(s, r.animatedClassNames),
          ps("aos:out", s),
          t.options.id && ps("aos:in:" + t.options.id, s),
          (t.animated = !1));
      },
      o = function () {
        t.animated ||
          (xw(s, r.animatedClassNames),
          ps("aos:in", s),
          t.options.id && ps("aos:in:" + t.options.id, s),
          (t.animated = !0));
      };
    r.mirror && n >= i.out && !r.once
      ? l()
      : n >= i.in
      ? o()
      : t.animated && !r.once && l();
  },
  Td = function (t) {
    return t.forEach(function (n, r) {
      return _w(n, window.pageYOffset);
    });
  },
  Ph = function (t) {
    for (var n = 0, r = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); )
      (n += t.offsetLeft - (t.tagName != "BODY" ? t.scrollLeft : 0)),
        (r += t.offsetTop - (t.tagName != "BODY" ? t.scrollTop : 0)),
        (t = t.offsetParent);
    return { top: r, left: n };
  },
  vn = function (e, t, n) {
    var r = e.getAttribute("data-aos-" + t);
    if (typeof r < "u") {
      if (r === "true") return !0;
      if (r === "false") return !1;
    }
    return r || n;
  },
  Cw = function (t, n, r) {
    var i = window.innerHeight,
      s = vn(t, "anchor"),
      l = vn(t, "anchor-placement"),
      o = Number(vn(t, "offset", l ? 0 : n)),
      a = l || r,
      u = t;
    s && document.querySelectorAll(s) && (u = document.querySelectorAll(s)[0]);
    var c = Ph(u).top - i;
    switch (a) {
      case "top-bottom":
        break;
      case "center-bottom":
        c += u.offsetHeight / 2;
        break;
      case "bottom-bottom":
        c += u.offsetHeight;
        break;
      case "top-center":
        c += i / 2;
        break;
      case "center-center":
        c += i / 2 + u.offsetHeight / 2;
        break;
      case "bottom-center":
        c += i / 2 + u.offsetHeight;
        break;
      case "top-top":
        c += i;
        break;
      case "bottom-top":
        c += i + u.offsetHeight;
        break;
      case "center-top":
        c += i + u.offsetHeight / 2;
        break;
    }
    return c + o;
  },
  Tw = function (t, n) {
    var r = vn(t, "anchor"),
      i = vn(t, "offset", n),
      s = t;
    r && document.querySelectorAll(r) && (s = document.querySelectorAll(r)[0]);
    var l = Ph(s).top;
    return l + s.offsetHeight - i;
  },
  kw = function (t, n) {
    return (
      t.forEach(function (r, i) {
        var s = vn(r.node, "mirror", n.mirror),
          l = vn(r.node, "once", n.once),
          o = vn(r.node, "id"),
          a = n.useClassNames && r.node.getAttribute("data-aos"),
          u = [n.animatedClassName]
            .concat(a ? a.split(" ") : [])
            .filter(function (c) {
              return typeof c == "string";
            });
        n.initClassName && r.node.classList.add(n.initClassName),
          (r.position = {
            in: Cw(r.node, n.offset, n.anchorPlacement),
            out: s && Tw(r.node, n.offset),
          }),
          (r.options = { once: l, mirror: s, animatedClassNames: u, id: o });
      }),
      t
    );
  },
  bh = function () {
    var e = document.querySelectorAll("[data-aos]");
    return Array.prototype.map.call(e, function (t) {
      return { node: t };
    });
  },
  Dt = [],
  kd = !1,
  we = {
    offset: 120,
    delay: 0,
    easing: "ease",
    duration: 400,
    disable: !1,
    once: !1,
    mirror: !1,
    anchorPlacement: "top-bottom",
    startEvent: "DOMContentLoaded",
    animatedClassName: "aos-animate",
    initClassName: "aos-init",
    useClassNames: !1,
    disableMutationObserver: !1,
    throttleDelay: 99,
    debounceDelay: 50,
  },
  jh = function () {
    return document.all && !window.atob;
  },
  Pw = function () {
    return (
      (Dt = kw(Dt, we)),
      Td(Dt),
      window.addEventListener(
        "scroll",
        Wy(function () {
          Td(Dt, we.once);
        }, we.throttleDelay)
      ),
      Dt
    );
  },
  jn = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    t && (kd = !0), kd && Pw();
  },
  Nh = function () {
    if (((Dt = bh()), Lh(we.disable) || jh())) return Mh();
    jn();
  },
  Mh = function () {
    Dt.forEach(function (t, n) {
      t.node.removeAttribute("data-aos"),
        t.node.removeAttribute("data-aos-easing"),
        t.node.removeAttribute("data-aos-duration"),
        t.node.removeAttribute("data-aos-delay"),
        we.initClassName && t.node.classList.remove(we.initClassName),
        we.animatedClassName && t.node.classList.remove(we.animatedClassName);
    });
  },
  Lh = function (t) {
    return (
      t === !0 ||
      (t === "mobile" && Ls.mobile()) ||
      (t === "phone" && Ls.phone()) ||
      (t === "tablet" && Ls.tablet()) ||
      (typeof t == "function" && t() === !0)
    );
  },
  bw = function (t) {
    return (
      (we = mw(we, t)),
      (Dt = bh()),
      !we.disableMutationObserver &&
        !_d.isSupported() &&
        (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
        (we.disableMutationObserver = !0)),
      we.disableMutationObserver || _d.ready("[data-aos]", Nh),
      Lh(we.disable) || jh()
        ? Mh()
        : (document
            .querySelector("body")
            .setAttribute("data-aos-easing", we.easing),
          document
            .querySelector("body")
            .setAttribute("data-aos-duration", we.duration),
          document
            .querySelector("body")
            .setAttribute("data-aos-delay", we.delay),
          ["DOMContentLoaded", "load"].indexOf(we.startEvent) === -1
            ? document.addEventListener(we.startEvent, function () {
                jn(!0);
              })
            : window.addEventListener("load", function () {
                jn(!0);
              }),
          we.startEvent === "DOMContentLoaded" &&
            ["complete", "interactive"].indexOf(document.readyState) > -1 &&
            jn(!0),
          window.addEventListener("resize", Ed(jn, we.debounceDelay, !0)),
          window.addEventListener(
            "orientationchange",
            Ed(jn, we.debounceDelay, !0)
          ),
          Dt)
    );
  },
  jw = { init: bw, refresh: jn, refreshHard: Nh };
function Oh() {
  P.useEffect(() => {
    jw.init();
  }, []);
}
const Nw =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:svgjs='http://svgjs.dev/svgjs'%20width='1920'%20height='1080'%20preserveAspectRatio='none'%20viewBox='0%200%201920%201080'%3e%3cg%20mask='url(&quot;%23SvgjsMask1003&quot;)'%20fill='none'%3e%3crect%20width='1920'%20height='1080'%20x='0'%20y='0'%20fill='rgba(255,%20255,%20255,%201)'%3e%3c/rect%3e%3cpath%20d='M%200,674%20C%20192,626.4%20576,427%20960,436%20C%201344,445%201728,662.4%201920,719L1920%201080L0%201080z'%20fill='rgba(246,%20241,%20235,%201)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask%20id='SvgjsMask1003'%3e%3crect%20width='1920'%20height='1080'%20fill='%23ffffff'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e",
  Mw =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xmlns:svgjs='http://svgjs.dev/svgjs'%20width='1920'%20height='1080'%20preserveAspectRatio='none'%20viewBox='0%200%201920%201080'%3e%3cg%20mask='url(&quot;%23SvgjsMask1029&quot;)'%20fill='none'%3e%3crect%20width='1920'%20height='1080'%20x='0'%20y='0'%20fill='rgba(0,%200,%200,%201)'%3e%3c/rect%3e%3cpath%20d='M%200,674%20C%20192,626.4%20576,427%20960,436%20C%201344,445%201728,662.4%201920,719L1920%201080L0%201080z'%20fill='rgba(24,%2023,%2023,%201)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask%20id='SvgjsMask1029'%3e%3crect%20width='1920'%20height='1080'%20fill='%23ffffff'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e";
function Lw({ checkedTheme: e }) {
  const t = `:root {
        --first-color: #DA4C50;
        --alt-color: #f6f1eb;
        --black-color: #181717;
        --white-color: #fff;
        --special-color: #F1F7FE;
        --toggle-white-black-color: #fff;
        --toggle-w-b-2-color: #000;
        --title-color: #DA4C50;
        --best-offer: #181717; 
    }
    
    .__v {
        color: #DA4C50;
    }

    .section {
        background-image: url('${Nw}');
    }
    `,
    n = `:root {
        --first-color: #181717;
        --alt-color: #181717;
        --black-color: #181717;
        --white-color: #fff;
        --special-color: #181717;
        --toggle-white-black-color: #000;
        --toggle-w-b-2-color: #fff;
        --title-color: #f6f1eb;
        --best-offer: #DA4C50; 
    }
    
    .__v {
        color: #DA4C50;
    }

    .section {
        background-image: url('${Mw}');
    }
    `;
  return g.jsx("style", { children: e ? t : n });
}
const Ol = P.createContext(),
  Ow = ({ children: e }) => {
    const [t, n] = P.useState(() => {
      const i = localStorage.getItem("checkedTheme");
      return i ? JSON.parse(i) : !1;
    });
    P.useEffect(() => {
      localStorage.setItem("checkedTheme", JSON.stringify(t));
    }, [t]);
    const r = () => {
      n((i) => !i);
    };
    return g.jsx(Ol.Provider, {
      value: { checkedTheme: t, toggleTheme: r },
      children: e,
    });
  };
function Rw() {
  const { checkedTheme: e, toggleTheme: t } = P.useContext(Ol),
    n = () => {
      t();
    };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx(Lw, { checkedTheme: e }),
      g.jsxs("div", {
        className: "toggleButtonDarkMode",
        children: [
          g.jsx("input", {
            className: "toggleInputTheme",
            id: "theme-switch",
            type: "checkbox",
            checked: e,
            onChange: n,
          }),
          g.jsx("label", {
            className: "labelCheckedTheme",
            htmlFor: "theme-switch",
            children: e
              ? g.jsx("i", { className: "fa-solid fa-sun soleil" })
              : g.jsx("i", { className: "fa-solid fa-moon" }),
          }),
        ],
      }),
    ],
  });
}
const Pd = "/assets/cookies-DkM9U-gj.webp";
function Ui() {
  const e = P.useRef(null),
    t = P.useRef(null),
    n = P.useRef(null),
    r = P.useRef(null),
    i = P.useRef(null),
    s = P.useRef(null),
    l = P.useRef(null);
  return (
    P.useEffect(() => {
      r.current &&
        r.current.addEventListener("click", () => {
          i.current.classList.add("show__modal");
        }),
        s.current &&
          s.current.addEventListener("click", () => {
            i.current.classList.remove("show__modal");
          }),
        l.current &&
          l.current.addEventListener("click", () => {
            i.current.classList.remove("show__modal");
          });
      const o = () => {
        t.current &&
          (t.current.classList.toggle("active_phone"),
          n.current.classList.toggle("active_label"));
      };
      return (
        e.current && e.current.addEventListener("click", o),
        () => {
          e.current && e.current.removeEventListener("click", o);
        }
      );
    }, []),
    Oh(),
    g.jsxs(g.Fragment, {
      children: [
        g.jsxs("div", {
          className: "navbar",
          "data-aos": "fade-down",
          "data-aos-duration": "700",
          ref: e,
          children: [
            g.jsx("i", { className: "fa fa-plus phonePlus", ref: n }),
            g.jsxs("nav", {
              className: "navbar__wrapper",
              ref: t,
              children: [
                g.jsx(Kr, {
                  to: "/",
                  className: ({ isActive: o, isPending: a }) =>
                    a
                      ? "navbar__wrapper__item"
                      : o
                      ? "navbar__wrapper__item active"
                      : "navbar__wrapper__item",
                  children: "Accueil",
                }),
                g.jsx(Kr, {
                  to: "/About",
                  className: ({ isActive: o, isPending: a }) =>
                    a
                      ? "navbar__wrapper__item"
                      : o
                      ? "navbar__wrapper__item active"
                      : "navbar__wrapper__item",
                  children: "A propos",
                }),
                g.jsx(Kr, {
                  to: "/Portfolio",
                  className: ({ isActive: o, isPending: a }) =>
                    a
                      ? "navbar__wrapper__item"
                      : o
                      ? "navbar__wrapper__item active"
                      : "navbar__wrapper__item",
                  children: "Portfolio",
                }),
                g.jsx(Kr, {
                  to: "/Pricing",
                  className: ({ isActive: o, isPending: a }) =>
                    a
                      ? "navbar__wrapper__item"
                      : o
                      ? "navbar__wrapper__item active"
                      : "navbar__wrapper__item",
                  children: "Tarifs",
                }),
                g.jsx(Kr, {
                  to: "/Contact",
                  className: ({ isActive: o, isPending: a }) =>
                    a
                      ? "navbar__wrapper__item"
                      : o
                      ? "navbar__wrapper__item active"
                      : "navbar__wrapper__item",
                  children: "Contact",
                }),
                g.jsx(Rw, {}),
                g.jsx("img", {
                  src: Pd,
                  width: "25",
                  height: "25",
                  ref: r,
                  className: "cookie",
                }),
              ],
            }),
          ],
        }),
        g.jsx("div", {
          ref: i,
          className: "modal__cookie__wrapper",
          children: g.jsxs("div", {
            className: "cookie__inside",
            children: [
              g.jsx("span", {
                ref: s,
                className: "closeModalCookie",
                children: g.jsx("i", { className: "fa fa-xmark" }),
              }),
              g.jsxs("p", {
                className: "cookie__modal__title",
                children: [
                  "Cookie Friendly ",
                  g.jsx("img", { src: Pd, height: "20", width: "20" }),
                ],
              }),
              g.jsxs("p", {
                className: "cookie__modal__paragraph",
                children: [
                  "Soyez sans crainte car ici, nous ne collectons pas vos données personnelles! Ce site n'utilise en effet aucun ",
                  g.jsx("b", {
                    className: "cookie__special__text",
                    children: "Cookie",
                  }),
                  ", alors n'ayez plus peur :)",
                ],
              }),
              g.jsx("span", {
                className: "button__modal__thank",
                ref: l,
                children: "Merci de sécuriser notre navigation ❤️",
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function hs(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Rh = { exports: {} };
(function (e, t) {
  (function (n) {
    e.exports = n();
  })(function () {
    return (function n(r, i, s) {
      function l(u, c) {
        if (!i[u]) {
          if (!r[u]) {
            var d = typeof hs == "function" && hs;
            if (!c && d) return d(u, !0);
            if (o) return o(u, !0);
            var f = new Error("Cannot find module '" + u + "'");
            throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          var w = (i[u] = { exports: {} });
          r[u][0].call(
            w.exports,
            function (v) {
              var m = r[u][1][v];
              return l(m || v);
            },
            w,
            w.exports,
            n,
            r,
            i,
            s
          );
        }
        return i[u].exports;
      }
      for (var o = typeof hs == "function" && hs, a = 0; a < s.length; a++)
        l(s[a]);
      return l;
    })(
      {
        1: [
          function (n, r, i) {
            var s = Object.getOwnPropertySymbols,
              l = Object.prototype.hasOwnProperty,
              o = Object.prototype.propertyIsEnumerable;
            function a(c) {
              if (c == null)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(c);
            }
            function u() {
              try {
                if (!Object.assign) return !1;
                var c = new String("abc");
                if (((c[5] = "de"), Object.getOwnPropertyNames(c)[0] === "5"))
                  return !1;
                for (var d = {}, f = 0; f < 10; f++)
                  d["_" + String.fromCharCode(f)] = f;
                var w = Object.getOwnPropertyNames(d).map(function (m) {
                  return d[m];
                });
                if (w.join("") !== "0123456789") return !1;
                var v = {};
                return (
                  "abcdefghijklmnopqrst".split("").forEach(function (m) {
                    v[m] = m;
                  }),
                  Object.keys(Object.assign({}, v)).join("") ===
                    "abcdefghijklmnopqrst"
                );
              } catch {
                return !1;
              }
            }
            r.exports = u()
              ? Object.assign
              : function (c, d) {
                  for (var f, w = a(c), v, m = 1; m < arguments.length; m++) {
                    f = Object(arguments[m]);
                    for (var x in f) l.call(f, x) && (w[x] = f[x]);
                    if (s) {
                      v = s(f);
                      for (var p = 0; p < v.length; p++)
                        o.call(f, v[p]) && (w[v[p]] = f[v[p]]);
                    }
                  }
                  return w;
                };
          },
          {},
        ],
        2: [
          function (n, r, i) {
            (function (s) {
              (function () {
                var l, o, a, u, c, d;
                typeof performance < "u" &&
                performance !== null &&
                performance.now
                  ? (r.exports = function () {
                      return performance.now();
                    })
                  : typeof s < "u" && s !== null && s.hrtime
                  ? ((r.exports = function () {
                      return (l() - c) / 1e6;
                    }),
                    (o = s.hrtime),
                    (l = function () {
                      var f;
                      return (f = o()), f[0] * 1e9 + f[1];
                    }),
                    (u = l()),
                    (d = s.uptime() * 1e9),
                    (c = u - d))
                  : Date.now
                  ? ((r.exports = function () {
                      return Date.now() - a;
                    }),
                    (a = Date.now()))
                  : ((r.exports = function () {
                      return new Date().getTime() - a;
                    }),
                    (a = new Date().getTime()));
              }).call(this);
            }).call(this, n("_process"));
          },
          { _process: 3 },
        ],
        3: [
          function (n, r, i) {
            var s = (r.exports = {}),
              l,
              o;
            function a() {
              throw new Error("setTimeout has not been defined");
            }
            function u() {
              throw new Error("clearTimeout has not been defined");
            }
            (function () {
              try {
                typeof setTimeout == "function" ? (l = setTimeout) : (l = a);
              } catch {
                l = a;
              }
              try {
                typeof clearTimeout == "function"
                  ? (o = clearTimeout)
                  : (o = u);
              } catch {
                o = u;
              }
            })();
            function c(E) {
              if (l === setTimeout) return setTimeout(E, 0);
              if ((l === a || !l) && setTimeout)
                return (l = setTimeout), setTimeout(E, 0);
              try {
                return l(E, 0);
              } catch {
                try {
                  return l.call(null, E, 0);
                } catch {
                  return l.call(this, E, 0);
                }
              }
            }
            function d(E) {
              if (o === clearTimeout) return clearTimeout(E);
              if ((o === u || !o) && clearTimeout)
                return (o = clearTimeout), clearTimeout(E);
              try {
                return o(E);
              } catch {
                try {
                  return o.call(null, E);
                } catch {
                  return o.call(this, E);
                }
              }
            }
            var f = [],
              w = !1,
              v,
              m = -1;
            function x() {
              !w ||
                !v ||
                ((w = !1),
                v.length ? (f = v.concat(f)) : (m = -1),
                f.length && p());
            }
            function p() {
              if (!w) {
                var E = c(x);
                w = !0;
                for (var C = f.length; C; ) {
                  for (v = f, f = []; ++m < C; ) v && v[m].run();
                  (m = -1), (C = f.length);
                }
                (v = null), (w = !1), d(E);
              }
            }
            s.nextTick = function (E) {
              var C = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var S = 1; S < arguments.length; S++)
                  C[S - 1] = arguments[S];
              f.push(new h(E, C)), f.length === 1 && !w && c(p);
            };
            function h(E, C) {
              (this.fun = E), (this.array = C);
            }
            (h.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
              (s.title = "browser"),
              (s.browser = !0),
              (s.env = {}),
              (s.argv = []),
              (s.version = ""),
              (s.versions = {});
            function y() {}
            (s.on = y),
              (s.addListener = y),
              (s.once = y),
              (s.off = y),
              (s.removeListener = y),
              (s.removeAllListeners = y),
              (s.emit = y),
              (s.prependListener = y),
              (s.prependOnceListener = y),
              (s.listeners = function (E) {
                return [];
              }),
              (s.binding = function (E) {
                throw new Error("process.binding is not supported");
              }),
              (s.cwd = function () {
                return "/";
              }),
              (s.chdir = function (E) {
                throw new Error("process.chdir is not supported");
              }),
              (s.umask = function () {
                return 0;
              });
          },
          {},
        ],
        4: [
          function (n, r, i) {
            (function (s) {
              for (
                var l = n("performance-now"),
                  o = typeof window > "u" ? s : window,
                  a = ["moz", "webkit"],
                  u = "AnimationFrame",
                  c = o["request" + u],
                  d = o["cancel" + u] || o["cancelRequest" + u],
                  f = 0;
                !c && f < a.length;
                f++
              )
                (c = o[a[f] + "Request" + u]),
                  (d = o[a[f] + "Cancel" + u] || o[a[f] + "CancelRequest" + u]);
              if (!c || !d) {
                var w = 0,
                  v = 0,
                  m = [],
                  x = 1e3 / 60;
                (c = function (p) {
                  if (m.length === 0) {
                    var h = l(),
                      y = Math.max(0, x - (h - w));
                    (w = y + h),
                      setTimeout(function () {
                        var E = m.slice(0);
                        m.length = 0;
                        for (var C = 0; C < E.length; C++)
                          if (!E[C].cancelled)
                            try {
                              E[C].callback(w);
                            } catch (S) {
                              setTimeout(function () {
                                throw S;
                              }, 0);
                            }
                      }, Math.round(y));
                  }
                  return m.push({ handle: ++v, callback: p, cancelled: !1 }), v;
                }),
                  (d = function (p) {
                    for (var h = 0; h < m.length; h++)
                      m[h].handle === p && (m[h].cancelled = !0);
                  });
              }
              (r.exports = function (p) {
                return c.call(o, p);
              }),
                (r.exports.cancel = function () {
                  d.apply(o, arguments);
                }),
                (r.exports.polyfill = function () {
                  (o.requestAnimationFrame = c), (o.cancelAnimationFrame = d);
                });
            }).call(
              this,
              typeof jt < "u"
                ? jt
                : typeof self < "u"
                ? self
                : typeof window < "u"
                ? window
                : {}
            );
          },
          { "performance-now": 2 },
        ],
        5: [
          function (n, r, i) {
            var s = (function () {
              function w(v, m) {
                for (var x = 0; x < m.length; x++) {
                  var p = m[x];
                  (p.enumerable = p.enumerable || !1),
                    (p.configurable = !0),
                    "value" in p && (p.writable = !0),
                    Object.defineProperty(v, p.key, p);
                }
              }
              return function (v, m, x) {
                return m && w(v.prototype, m), x && w(v, x), v;
              };
            })();
            function l(w, v) {
              if (!(w instanceof v))
                throw new TypeError("Cannot call a class as a function");
            }
            var o = n("raf"),
              a = n("object-assign"),
              u = {
                propertyCache: {},
                vendors: [
                  null,
                  ["-webkit-", "webkit"],
                  ["-moz-", "Moz"],
                  ["-o-", "O"],
                  ["-ms-", "ms"],
                ],
                clamp: function (v, m, x) {
                  return m < x
                    ? v < m
                      ? m
                      : v > x
                      ? x
                      : v
                    : v < x
                    ? x
                    : v > m
                    ? m
                    : v;
                },
                data: function (v, m) {
                  return u.deserialize(v.getAttribute("data-" + m));
                },
                deserialize: function (v) {
                  return v === "true"
                    ? !0
                    : v === "false"
                    ? !1
                    : v === "null"
                    ? null
                    : !isNaN(parseFloat(v)) && isFinite(v)
                    ? parseFloat(v)
                    : v;
                },
                camelCase: function (v) {
                  return v.replace(/-+(.)?/g, function (m, x) {
                    return x ? x.toUpperCase() : "";
                  });
                },
                accelerate: function (v) {
                  u.css(v, "transform", "translate3d(0,0,0) rotate(0.0001deg)"),
                    u.css(v, "transform-style", "preserve-3d"),
                    u.css(v, "backface-visibility", "hidden");
                },
                transformSupport: function (v) {
                  for (
                    var m = document.createElement("div"),
                      x = !1,
                      p = null,
                      h = !1,
                      y = null,
                      E = null,
                      C = 0,
                      S = u.vendors.length;
                    C < S;
                    C++
                  )
                    if (
                      (u.vendors[C] !== null
                        ? ((y = u.vendors[C][0] + "transform"),
                          (E = u.vendors[C][1] + "Transform"))
                        : ((y = "transform"), (E = "transform")),
                      m.style[E] !== void 0)
                    ) {
                      x = !0;
                      break;
                    }
                  switch (v) {
                    case "2D":
                      h = x;
                      break;
                    case "3D":
                      if (x) {
                        var N = document.body || document.createElement("body"),
                          k = document.documentElement,
                          M = k.style.overflow,
                          j = !1;
                        document.body ||
                          ((j = !0),
                          (k.style.overflow = "hidden"),
                          k.appendChild(N),
                          (N.style.overflow = "hidden"),
                          (N.style.background = "")),
                          N.appendChild(m),
                          (m.style[E] = "translate3d(1px,1px,1px)"),
                          (p = window.getComputedStyle(m).getPropertyValue(y)),
                          (h = p !== void 0 && p.length > 0 && p !== "none"),
                          (k.style.overflow = M),
                          N.removeChild(m),
                          j &&
                            (N.removeAttribute("style"),
                            N.parentNode.removeChild(N));
                      }
                      break;
                  }
                  return h;
                },
                css: function (v, m, x) {
                  var p = u.propertyCache[m];
                  if (!p) {
                    for (var h = 0, y = u.vendors.length; h < y; h++)
                      if (
                        (u.vendors[h] !== null
                          ? (p = u.camelCase(u.vendors[h][1] + "-" + m))
                          : (p = m),
                        v.style[p] !== void 0)
                      ) {
                        u.propertyCache[m] = p;
                        break;
                      }
                  }
                  v.style[p] = x;
                },
              },
              c = 30,
              d = {
                relativeInput: !1,
                clipRelativeInput: !1,
                inputElement: null,
                hoverOnly: !1,
                calibrationThreshold: 100,
                calibrationDelay: 500,
                supportDelay: 500,
                calibrateX: !1,
                calibrateY: !0,
                invertX: !0,
                invertY: !0,
                limitX: !1,
                limitY: !1,
                scalarX: 10,
                scalarY: 10,
                frictionX: 0.1,
                frictionY: 0.1,
                originX: 0.5,
                originY: 0.5,
                pointerEvents: !1,
                precision: 1,
                onReady: null,
                selector: null,
              },
              f = (function () {
                function w(v, m) {
                  l(this, w), (this.element = v);
                  var x = {
                    calibrateX: u.data(this.element, "calibrate-x"),
                    calibrateY: u.data(this.element, "calibrate-y"),
                    invertX: u.data(this.element, "invert-x"),
                    invertY: u.data(this.element, "invert-y"),
                    limitX: u.data(this.element, "limit-x"),
                    limitY: u.data(this.element, "limit-y"),
                    scalarX: u.data(this.element, "scalar-x"),
                    scalarY: u.data(this.element, "scalar-y"),
                    frictionX: u.data(this.element, "friction-x"),
                    frictionY: u.data(this.element, "friction-y"),
                    originX: u.data(this.element, "origin-x"),
                    originY: u.data(this.element, "origin-y"),
                    pointerEvents: u.data(this.element, "pointer-events"),
                    precision: u.data(this.element, "precision"),
                    relativeInput: u.data(this.element, "relative-input"),
                    clipRelativeInput: u.data(
                      this.element,
                      "clip-relative-input"
                    ),
                    hoverOnly: u.data(this.element, "hover-only"),
                    inputElement: document.querySelector(
                      u.data(this.element, "input-element")
                    ),
                    selector: u.data(this.element, "selector"),
                  };
                  for (var p in x) x[p] === null && delete x[p];
                  a(this, d, x, m),
                    this.inputElement || (this.inputElement = this.element),
                    (this.calibrationTimer = null),
                    (this.calibrationFlag = !0),
                    (this.enabled = !1),
                    (this.depthsX = []),
                    (this.depthsY = []),
                    (this.raf = null),
                    (this.bounds = null),
                    (this.elementPositionX = 0),
                    (this.elementPositionY = 0),
                    (this.elementWidth = 0),
                    (this.elementHeight = 0),
                    (this.elementCenterX = 0),
                    (this.elementCenterY = 0),
                    (this.elementRangeX = 0),
                    (this.elementRangeY = 0),
                    (this.calibrationX = 0),
                    (this.calibrationY = 0),
                    (this.inputX = 0),
                    (this.inputY = 0),
                    (this.motionX = 0),
                    (this.motionY = 0),
                    (this.velocityX = 0),
                    (this.velocityY = 0),
                    (this.onMouseMove = this.onMouseMove.bind(this)),
                    (this.onDeviceOrientation =
                      this.onDeviceOrientation.bind(this)),
                    (this.onDeviceMotion = this.onDeviceMotion.bind(this)),
                    (this.onOrientationTimer =
                      this.onOrientationTimer.bind(this)),
                    (this.onMotionTimer = this.onMotionTimer.bind(this)),
                    (this.onCalibrationTimer =
                      this.onCalibrationTimer.bind(this)),
                    (this.onAnimationFrame = this.onAnimationFrame.bind(this)),
                    (this.onWindowResize = this.onWindowResize.bind(this)),
                    (this.windowWidth = null),
                    (this.windowHeight = null),
                    (this.windowCenterX = null),
                    (this.windowCenterY = null),
                    (this.windowRadiusX = null),
                    (this.windowRadiusY = null),
                    (this.portrait = !1),
                    (this.desktop = !navigator.userAgent.match(
                      /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
                    )),
                    (this.motionSupport =
                      !!window.DeviceMotionEvent && !this.desktop),
                    (this.orientationSupport =
                      !!window.DeviceOrientationEvent && !this.desktop),
                    (this.orientationStatus = 0),
                    (this.motionStatus = 0),
                    this.initialise();
                }
                return (
                  s(w, [
                    {
                      key: "initialise",
                      value: function () {
                        this.transform2DSupport === void 0 &&
                          ((this.transform2DSupport = u.transformSupport("2D")),
                          (this.transform3DSupport = u.transformSupport("3D"))),
                          this.transform3DSupport && u.accelerate(this.element);
                        var m = window.getComputedStyle(this.element);
                        m.getPropertyValue("position") === "static" &&
                          (this.element.style.position = "relative"),
                          this.pointerEvents ||
                            (this.element.style.pointerEvents = "none"),
                          this.updateLayers(),
                          this.updateDimensions(),
                          this.enable(),
                          this.queueCalibration(this.calibrationDelay);
                      },
                    },
                    {
                      key: "doReadyCallback",
                      value: function () {
                        this.onReady && this.onReady();
                      },
                    },
                    {
                      key: "updateLayers",
                      value: function () {
                        this.selector
                          ? (this.layers = this.element.querySelectorAll(
                              this.selector
                            ))
                          : (this.layers = this.element.children),
                          this.layers.length ||
                            console.warn(
                              "ParallaxJS: Your scene does not have any layers."
                            ),
                          (this.depthsX = []),
                          (this.depthsY = []);
                        for (var m = 0; m < this.layers.length; m++) {
                          var x = this.layers[m];
                          this.transform3DSupport && u.accelerate(x),
                            (x.style.position = m ? "absolute" : "relative"),
                            (x.style.display = "block"),
                            (x.style.left = 0),
                            (x.style.top = 0);
                          var p = u.data(x, "depth") || 0;
                          this.depthsX.push(u.data(x, "depth-x") || p),
                            this.depthsY.push(u.data(x, "depth-y") || p);
                        }
                      },
                    },
                    {
                      key: "updateDimensions",
                      value: function () {
                        (this.windowWidth = window.innerWidth),
                          (this.windowHeight = window.innerHeight),
                          (this.windowCenterX =
                            this.windowWidth * this.originX),
                          (this.windowCenterY =
                            this.windowHeight * this.originY),
                          (this.windowRadiusX = Math.max(
                            this.windowCenterX,
                            this.windowWidth - this.windowCenterX
                          )),
                          (this.windowRadiusY = Math.max(
                            this.windowCenterY,
                            this.windowHeight - this.windowCenterY
                          ));
                      },
                    },
                    {
                      key: "updateBounds",
                      value: function () {
                        (this.bounds =
                          this.inputElement.getBoundingClientRect()),
                          (this.elementPositionX = this.bounds.left),
                          (this.elementPositionY = this.bounds.top),
                          (this.elementWidth = this.bounds.width),
                          (this.elementHeight = this.bounds.height),
                          (this.elementCenterX =
                            this.elementWidth * this.originX),
                          (this.elementCenterY =
                            this.elementHeight * this.originY),
                          (this.elementRangeX = Math.max(
                            this.elementCenterX,
                            this.elementWidth - this.elementCenterX
                          )),
                          (this.elementRangeY = Math.max(
                            this.elementCenterY,
                            this.elementHeight - this.elementCenterY
                          ));
                      },
                    },
                    {
                      key: "queueCalibration",
                      value: function (m) {
                        clearTimeout(this.calibrationTimer),
                          (this.calibrationTimer = setTimeout(
                            this.onCalibrationTimer,
                            m
                          ));
                      },
                    },
                    {
                      key: "enable",
                      value: function () {
                        this.enabled ||
                          ((this.enabled = !0),
                          this.orientationSupport
                            ? ((this.portrait = !1),
                              window.addEventListener(
                                "deviceorientation",
                                this.onDeviceOrientation
                              ),
                              (this.detectionTimer = setTimeout(
                                this.onOrientationTimer,
                                this.supportDelay
                              )))
                            : this.motionSupport
                            ? ((this.portrait = !1),
                              window.addEventListener(
                                "devicemotion",
                                this.onDeviceMotion
                              ),
                              (this.detectionTimer = setTimeout(
                                this.onMotionTimer,
                                this.supportDelay
                              )))
                            : ((this.calibrationX = 0),
                              (this.calibrationY = 0),
                              (this.portrait = !1),
                              window.addEventListener(
                                "mousemove",
                                this.onMouseMove
                              ),
                              this.doReadyCallback()),
                          window.addEventListener(
                            "resize",
                            this.onWindowResize
                          ),
                          (this.raf = o(this.onAnimationFrame)));
                      },
                    },
                    {
                      key: "disable",
                      value: function () {
                        this.enabled &&
                          ((this.enabled = !1),
                          this.orientationSupport
                            ? window.removeEventListener(
                                "deviceorientation",
                                this.onDeviceOrientation
                              )
                            : this.motionSupport
                            ? window.removeEventListener(
                                "devicemotion",
                                this.onDeviceMotion
                              )
                            : window.removeEventListener(
                                "mousemove",
                                this.onMouseMove
                              ),
                          window.removeEventListener(
                            "resize",
                            this.onWindowResize
                          ),
                          o.cancel(this.raf));
                      },
                    },
                    {
                      key: "calibrate",
                      value: function (m, x) {
                        (this.calibrateX = m === void 0 ? this.calibrateX : m),
                          (this.calibrateY =
                            x === void 0 ? this.calibrateY : x);
                      },
                    },
                    {
                      key: "invert",
                      value: function (m, x) {
                        (this.invertX = m === void 0 ? this.invertX : m),
                          (this.invertY = x === void 0 ? this.invertY : x);
                      },
                    },
                    {
                      key: "friction",
                      value: function (m, x) {
                        (this.frictionX = m === void 0 ? this.frictionX : m),
                          (this.frictionY = x === void 0 ? this.frictionY : x);
                      },
                    },
                    {
                      key: "scalar",
                      value: function (m, x) {
                        (this.scalarX = m === void 0 ? this.scalarX : m),
                          (this.scalarY = x === void 0 ? this.scalarY : x);
                      },
                    },
                    {
                      key: "limit",
                      value: function (m, x) {
                        (this.limitX = m === void 0 ? this.limitX : m),
                          (this.limitY = x === void 0 ? this.limitY : x);
                      },
                    },
                    {
                      key: "origin",
                      value: function (m, x) {
                        (this.originX = m === void 0 ? this.originX : m),
                          (this.originY = x === void 0 ? this.originY : x);
                      },
                    },
                    {
                      key: "setInputElement",
                      value: function (m) {
                        (this.inputElement = m), this.updateDimensions();
                      },
                    },
                    {
                      key: "setPosition",
                      value: function (m, x, p) {
                        (x = x.toFixed(this.precision) + "px"),
                          (p = p.toFixed(this.precision) + "px"),
                          this.transform3DSupport
                            ? u.css(
                                m,
                                "transform",
                                "translate3d(" + x + "," + p + ",0)"
                              )
                            : this.transform2DSupport
                            ? u.css(
                                m,
                                "transform",
                                "translate(" + x + "," + p + ")"
                              )
                            : ((m.style.left = x), (m.style.top = p));
                      },
                    },
                    {
                      key: "onOrientationTimer",
                      value: function () {
                        this.orientationSupport && this.orientationStatus === 0
                          ? (this.disable(),
                            (this.orientationSupport = !1),
                            this.enable())
                          : this.doReadyCallback();
                      },
                    },
                    {
                      key: "onMotionTimer",
                      value: function () {
                        this.motionSupport && this.motionStatus === 0
                          ? (this.disable(),
                            (this.motionSupport = !1),
                            this.enable())
                          : this.doReadyCallback();
                      },
                    },
                    {
                      key: "onCalibrationTimer",
                      value: function () {
                        this.calibrationFlag = !0;
                      },
                    },
                    {
                      key: "onWindowResize",
                      value: function () {
                        this.updateDimensions();
                      },
                    },
                    {
                      key: "onAnimationFrame",
                      value: function () {
                        this.updateBounds();
                        var m = this.inputX - this.calibrationX,
                          x = this.inputY - this.calibrationY;
                        (Math.abs(m) > this.calibrationThreshold ||
                          Math.abs(x) > this.calibrationThreshold) &&
                          this.queueCalibration(0),
                          this.portrait
                            ? ((this.motionX = this.calibrateX
                                ? x
                                : this.inputY),
                              (this.motionY = this.calibrateY
                                ? m
                                : this.inputX))
                            : ((this.motionX = this.calibrateX
                                ? m
                                : this.inputX),
                              (this.motionY = this.calibrateY
                                ? x
                                : this.inputY)),
                          (this.motionX *=
                            this.elementWidth * (this.scalarX / 100)),
                          (this.motionY *=
                            this.elementHeight * (this.scalarY / 100)),
                          isNaN(parseFloat(this.limitX)) ||
                            (this.motionX = u.clamp(
                              this.motionX,
                              -this.limitX,
                              this.limitX
                            )),
                          isNaN(parseFloat(this.limitY)) ||
                            (this.motionY = u.clamp(
                              this.motionY,
                              -this.limitY,
                              this.limitY
                            )),
                          (this.velocityX +=
                            (this.motionX - this.velocityX) * this.frictionX),
                          (this.velocityY +=
                            (this.motionY - this.velocityY) * this.frictionY);
                        for (var p = 0; p < this.layers.length; p++) {
                          var h = this.layers[p],
                            y = this.depthsX[p],
                            E = this.depthsY[p],
                            C = this.velocityX * (y * (this.invertX ? -1 : 1)),
                            S = this.velocityY * (E * (this.invertY ? -1 : 1));
                          this.setPosition(h, C, S);
                        }
                        this.raf = o(this.onAnimationFrame);
                      },
                    },
                    {
                      key: "rotate",
                      value: function (m, x) {
                        var p = (m || 0) / c,
                          h = (x || 0) / c,
                          y = this.windowHeight > this.windowWidth;
                        this.portrait !== y &&
                          ((this.portrait = y), (this.calibrationFlag = !0)),
                          this.calibrationFlag &&
                            ((this.calibrationFlag = !1),
                            (this.calibrationX = p),
                            (this.calibrationY = h)),
                          (this.inputX = p),
                          (this.inputY = h);
                      },
                    },
                    {
                      key: "onDeviceOrientation",
                      value: function (m) {
                        var x = m.beta,
                          p = m.gamma;
                        x !== null &&
                          p !== null &&
                          ((this.orientationStatus = 1), this.rotate(x, p));
                      },
                    },
                    {
                      key: "onDeviceMotion",
                      value: function (m) {
                        var x = m.rotationRate.beta,
                          p = m.rotationRate.gamma;
                        x !== null &&
                          p !== null &&
                          ((this.motionStatus = 1), this.rotate(x, p));
                      },
                    },
                    {
                      key: "onMouseMove",
                      value: function (m) {
                        var x = m.clientX,
                          p = m.clientY;
                        if (
                          this.hoverOnly &&
                          (x < this.elementPositionX ||
                            x > this.elementPositionX + this.elementWidth ||
                            p < this.elementPositionY ||
                            p > this.elementPositionY + this.elementHeight)
                        ) {
                          (this.inputX = 0), (this.inputY = 0);
                          return;
                        }
                        this.relativeInput
                          ? (this.clipRelativeInput &&
                              ((x = Math.max(x, this.elementPositionX)),
                              (x = Math.min(
                                x,
                                this.elementPositionX + this.elementWidth
                              )),
                              (p = Math.max(p, this.elementPositionY)),
                              (p = Math.min(
                                p,
                                this.elementPositionY + this.elementHeight
                              ))),
                            this.elementRangeX &&
                              this.elementRangeY &&
                              ((this.inputX =
                                (x -
                                  this.elementPositionX -
                                  this.elementCenterX) /
                                this.elementRangeX),
                              (this.inputY =
                                (p -
                                  this.elementPositionY -
                                  this.elementCenterY) /
                                this.elementRangeY)))
                          : this.windowRadiusX &&
                            this.windowRadiusY &&
                            ((this.inputX =
                              (x - this.windowCenterX) / this.windowRadiusX),
                            (this.inputY =
                              (p - this.windowCenterY) / this.windowRadiusY));
                      },
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.disable(),
                          clearTimeout(this.calibrationTimer),
                          clearTimeout(this.detectionTimer),
                          this.element.removeAttribute("style");
                        for (var m = 0; m < this.layers.length; m++)
                          this.layers[m].removeAttribute("style");
                        delete this.element, delete this.layers;
                      },
                    },
                    {
                      key: "version",
                      value: function () {
                        return "3.1.0";
                      },
                    },
                  ]),
                  w
                );
              })();
            r.exports = f;
          },
          { "object-assign": 1, raf: 4 },
        ],
      },
      {},
      [5]
    )(5);
  });
})(Rh);
var Iw = Rh.exports;
const zw = Mr(Iw),
  Dw = "/assets/beach-0efKHXd8.svg",
  Aw = "/assets/front-wave-CTlhEfRL.svg",
  Fw = "/assets/middle-wave-CqQVa_m8.svg",
  Bw = "/assets/back-wave-lOcl7N8g.svg",
  $w = "/assets/boat-v2-CAMllB26.svg",
  Uw = "/assets/palmiers-1-dGqdix04.svg",
  Vw = "/assets/palmiers-2-BZdPX6xa.svg",
  Hw = "/assets/sun-v3-BL9xn7oL.svg",
  Ww = "/assets/moon-DdSgvf7w.svg",
  Yw = "/assets/plain-B0nclfio.svg";
function Xw(e) {
  if (!e) return;
  const t = e.getContext("2d");
  let n = [];
  const r = 0.002;
  let i, s;
  function l() {
    const c = window.getComputedStyle(e);
    (i = parseInt(c.width, 10)),
      (s = parseInt(c.height, 10)),
      (e.width = i),
      (e.height = s),
      o();
  }
  function o() {
    n = [];
    const c = i * s * r;
    for (let d = 0; d < c; d++)
      n.push({
        x: Math.random() * i,
        y: Math.random() * s,
        radius: Math.random() * 1.5,
        speedX: Math.random() * 0.16 + 0.16,
        speedY: Math.random() * 0.16 + 0.16,
        alpha: Math.random(),
      });
  }
  function a() {
    t.clearRect(0, 0, i, s), (t.fillStyle = "rgba(255, 255, 255, 1)");
    for (const c of n)
      (t.globalAlpha = c.alpha),
        t.beginPath(),
        t.arc(c.x, c.y, c.radius, 0, 2 * Math.PI),
        t.fill();
  }
  function u() {
    for (const c of n)
      (c.x += c.speedX),
        (c.y -= c.speedY),
        c.y < 0 && (c.y = s),
        c.x > i && (c.x = 0),
        (c.alpha += (Math.random() - 0.5) * 0.02),
        (c.alpha = Math.max(0, Math.min(1, c.alpha)));
    a(), requestAnimationFrame(u);
  }
  l(), window.addEventListener("resize", l), u();
}
const Gw = "/assets/cloud-1-v2-DAW5Bu49.svg",
  Qw = "/assets/cloud-2-v2-YR3dNCLU.svg";
function Kw() {
  const e = P.useRef(null),
    { checkedTheme: t } = P.useContext(Ol);
  return (
    P.useEffect(() => {
      e.current && new zw(e.current);
    }, []),
    P.useEffect(() => {
      if (!t) {
        const n = document.getElementById("stars");
        n && Xw(n);
      }
    }, [t]),
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(Ui, {}),
        g.jsx("div", {
          id: "home",
          className: "home_wrapper",
          children: g.jsxs("ul", {
            className: "scene",
            id: "home_animated",
            ref: e,
            "data-friction-x": "0.1",
            "data-friction-y": "0.1",
            "data-scalar-x": "5",
            "data-scalar-y": "2",
            children: [
              t
                ? g.jsxs(g.Fragment, {
                    children: [
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.6",
                          children: g.jsx("div", {
                            className: "cloud cloud_animation1 shadow__bg",
                            children: g.jsx("img", { src: Gw, alt: "" }),
                          }),
                        },
                        "cloud1"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.6",
                          children: g.jsx("div", {
                            className: "cloud cloud_animation2 shadow__bg",
                            children: g.jsx("img", { src: Qw, alt: "" }),
                          }),
                        },
                        "cloud2"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.4",
                          children: g.jsx("div", {
                            className: "sun sun_animation shadow__bg",
                            children: g.jsx("img", { src: Hw, alt: "" }),
                          }),
                        },
                        "sun"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.7",
                          children: g.jsx("div", {
                            className: "wave wave_animation1 shadow__bg",
                            children: g.jsx("img", { src: Bw, alt: "" }),
                          }),
                        },
                        "wave1"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.5",
                          children: g.jsx("div", {
                            className: "boat boat_animation shadow__bg",
                            children: g.jsx("img", { src: $w, alt: "" }),
                          }),
                        },
                        "boat"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.4",
                          children: g.jsx("div", {
                            className: "wave wave_animation2 shadow__bg",
                            children: g.jsx("img", { src: Fw, alt: "" }),
                          }),
                        },
                        "wave2"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.6",
                          children: g.jsx("div", {
                            className: "wave wave_animation3 shadow__bg",
                            children: g.jsx("img", { src: Aw, alt: "" }),
                          }),
                        },
                        "wave3"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.7",
                          children: g.jsx("div", {
                            className: "beach beach_animation shadow__bg",
                            children: g.jsx("img", { src: Dw, alt: "" }),
                          }),
                        },
                        "beach"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.3",
                          children: g.jsx("div", {
                            className: "palmier palmier_animation1 shadow__bg",
                            children: g.jsx("img", { src: Uw, alt: "" }),
                          }),
                        },
                        "palmier1"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.3",
                          children: g.jsx("div", {
                            className: "palmier palmier_animation2 shadow__bg",
                            children: g.jsx("img", { src: Vw, alt: "" }),
                          }),
                        },
                        "palmier2"
                      ),
                    ],
                  })
                : g.jsxs(g.Fragment, {
                    children: [
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.3",
                          children: g.jsx("div", {
                            className: "background_plain shadow__bg",
                            id: "bg_plain",
                            children: g.jsx("canvas", { id: "stars" }),
                          }),
                        },
                        "bg_plain"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.4",
                          children: g.jsx("div", {
                            className: "sun sun_animation shadow__bg",
                            children: g.jsx("img", { src: Ww, alt: "" }),
                          }),
                        },
                        "moon"
                      ),
                      g.jsx(
                        "li",
                        {
                          className: "layer",
                          "data-depth": "0.7",
                          children: g.jsx("div", {
                            className: "beach beach_animation shadow__bg",
                            children: g.jsx("img", { src: Yw, alt: "" }),
                          }),
                        },
                        "plain"
                      ),
                    ],
                  }),
              g.jsxs("div", {
                className: "home__wrapper",
                "data-depth": "0.1",
                children: [
                  g.jsx("div", {
                    className: "home__wrapper__title",
                    children: g.jsx("h1", {
                      className: "home__wrapper__title-h1",
                      "data-aos": "fade-up",
                      "data-aos-duration": "400",
                      children: g.jsx("div", { children: "yael brinkert" }),
                    }),
                  }),
                  g.jsxs("div", {
                    className: "home__wrapper__subtitle",
                    children: [
                      g.jsx("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "700",
                        className: "bold",
                        children: "Développeur",
                      }),
                      g.jsx("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "900",
                        className: "bold",
                        children: "Web",
                      }),
                      g.jsx("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1000",
                        children: "&",
                      }),
                      g.jsx("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1200",
                        className: "bold",
                        children: "Création de",
                      }),
                      g.jsx("div", {
                        "data-aos": "fade-up",
                        "data-aos-duration": "1400",
                        className: "bold",
                        children: "sites Internet",
                      }),
                    ],
                  }),
                  g.jsx("div", {
                    "data-aos": "fade-up",
                    "data-aos-duration": "1500",
                    children: g.jsxs(ku, {
                      to: "/About",
                      className: "home__wrapper__discover-button",
                      children: [
                        g.jsx("i", { className: "fa fa-chevron-right" }),
                        g.jsx("span", { children: "Présentation" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const qw = "/assets/portrait_test-B-8MV9z2.webp";
function Zw() {
  return (
    P.useContext(Ol),
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(Ui, {}),
        g.jsx("section", {
          id: "about",
          className: "section",
          children: g.jsx("div", {
            className: "about",
            children: g.jsxs("div", {
              className: "about__wrapper",
              children: [
                g.jsxs("div", {
                  className: "about__wrapper__column picture_languages",
                  "data-aos": "fade-right",
                  "data-aos-duration": "600",
                  children: [
                    g.jsx("img", {
                      className: "picture_languages_img",
                      src: qw,
                      alt: "",
                      "data-aos": "fade-right",
                      "data-aos-duration": "800",
                    }),
                    g.jsxs("div", {
                      className: "container_languages_and_exp",
                      children: [
                        g.jsxs("div", {
                          className: "languages",
                          children: [
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "400",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "500",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "600",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "700",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "800",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "900",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "1000",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "1100",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "1200",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
                              }),
                            }),
                            g.jsx("div", {
                              className: "languages_svg_icon",
                              "data-aos": "fade-up",
                              "data-aos-duration": "1300",
                              children: g.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                              }),
                            }),
                          ],
                        }),
                        g.jsxs("div", {
                          className: "exp_container",
                          children: [
                            g.jsx("span", {
                              className: "exp_container_spans",
                              "data-aos": "fade-up",
                              "data-aos-duration": "600",
                              children: "Titre RNCP OpenclassNameroom",
                            }),
                            g.jsx("span", {
                              className: "exp_container_spans",
                              "data-aos": "fade-up",
                              "data-aos-duration": "800",
                              children: "DEUST Webmaster Limoges",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "about__wrapper__column description",
                  children: [
                    g.jsxs("div", {
                      className: "about_description",
                      children: [
                        g.jsx("h2", {
                          "data-aos": "fade-down",
                          "data-aos-duration": "600",
                          children: "A propos de moi",
                        }),
                        g.jsxs("p", {
                          "data-aos": "fade-left",
                          "data-aos-duration": "600",
                          children: [
                            "Moi c'est ",
                            g.jsx("b", {
                              className: "__v",
                              children: "Yael BRINKERT",
                            }),
                            ", je travaille actuellement sur un double cursus me permettant d'étudier le ",
                            g.jsx("b", { children: "développement web" }),
                            ", et de jouer à haut niveau en Volley au ",
                            g.jsx("b", {
                              children: "centre de formation de Nancy",
                            }),
                            ". ",
                            g.jsx("br", {}),
                            g.jsx("br", {}),
                            g.jsxs("i", {
                              className: "__i",
                              children: [
                                "Bien que passionné d'informatique, je suis avant tout un ",
                                g.jsx("b", { children: "joueur" }),
                                " de ",
                                g.jsx("b", {
                                  children: "Volley-ball professionnel",
                                }),
                                " en devenir.",
                              ],
                            }),
                          ],
                        }),
                        g.jsxs("p", {
                          "data-aos": "fade-left",
                          "data-aos-duration": "900",
                          children: [
                            "J'ai baigné très tôt dans ",
                            g.jsx("b", { children: "l'informatique" }),
                            ", dans toutes sortes de projets, allant de l'univers des jeux vidéos, jusqu'aux ",
                            g.jsx("b", { children: "sites internet" }),
                            " et au web. J'ai suivi une ",
                            g.jsx("b", { children: "licence à Limoges" }),
                            " en ",
                            g.jsx("b", {
                              className: "__v",
                              children: "Webmaster et métier de l'internet",
                            }),
                            ", et je valide actuellement un ",
                            g.jsx("b", {
                              className: "__v",
                              children: "titre RNCP",
                            }),
                            " en développement web chez ",
                            g.jsx("b", { children: "OpenclassNameroom" }),
                          ],
                        }),
                      ],
                    }),
                    g.jsx("div", {
                      className: "about_button_portfolio",
                      "data-aos": "zoom-in-up",
                      "data-aos-duration": "800",
                      children: g.jsxs(ku, {
                        to: "/Portfolio",
                        className: "about_button_portfolio_a",
                        children: [
                          "Découvrir mon portfolio ",
                          g.jsx("i", { className: "fa fa-chevron-right" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function bd(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Pu(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : bd(t[n]) &&
          bd(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Pu(e[n], t[n]);
    });
}
const Ih = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Ir() {
  const e = typeof document < "u" ? document : {};
  return Pu(e, Ih), e;
}
const Jw = {
  document: Ih,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function at() {
  const e = typeof window < "u" ? window : {};
  return Pu(e, Jw), e;
}
function e1(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function t1(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function So(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function ul() {
  return Date.now();
}
function n1(e) {
  const t = at();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function r1(e, t) {
  t === void 0 && (t = "x");
  const n = at();
  let r, i, s;
  const l = n1(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = l.transform || l.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          l.MozTransform ||
          l.OTransform ||
          l.MsTransform ||
          l.msTransform ||
          l.transform ||
          l
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function ms(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function i1(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function tt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !i1(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, l = i.length; s < l; s += 1) {
        const o = i[s],
          a = Object.getOwnPropertyDescriptor(r, o);
        a !== void 0 &&
          a.enumerable &&
          (ms(e[o]) && ms(r[o])
            ? r[o].__swiper__
              ? (e[o] = r[o])
              : tt(e[o], r[o])
            : !ms(e[o]) && ms(r[o])
            ? ((e[o] = {}), r[o].__swiper__ ? (e[o] = r[o]) : tt(e[o], r[o]))
            : (e[o] = r[o]));
      }
    }
  }
  return e;
}
function vs(e, t, n) {
  e.style.setProperty(t, n);
}
function zh(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = at(),
    s = -t.translate;
  let l = null,
    o;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (f, w) => (u === "next" && f >= w) || (u === "prev" && f <= w),
    d = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const f = Math.max(Math.min((o - l) / a, 1), 0),
        w = 0.5 - Math.cos(f * Math.PI) / 2;
      let v = s + w * (n - s);
      if ((c(v, n) && (v = n), t.wrapperEl.scrollTo({ [r]: v }), c(v, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: v });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function bu(e) {
  return (
    e.querySelector(".swiper-slide-transform") ||
    (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
    e
  );
}
function Bt(e, t) {
  t === void 0 && (t = "");
  const n = [...e.children];
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  );
}
function s1(e, t) {
  const n = t.contains(e);
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n;
}
function cl(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function dl(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : e1(t))), n;
}
function l1(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function a1(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function an(e, t) {
  return at().getComputedStyle(e, null).getPropertyValue(t);
}
function jd(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function o1(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function u1(e, t) {
  function n(r) {
    r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n));
  }
  t && e.addEventListener("transitionend", n);
}
function Nd(e, t, n) {
  const r = at();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let va;
function c1() {
  const e = at(),
    t = Ir();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Dh() {
  return va || (va = c1()), va;
}
let ga;
function d1(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Dh(),
    r = at(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    w = i === "Win32";
  let v = i === "MacIntel";
  const m = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      v &&
      n.touch &&
      m.indexOf(`${o}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (v = !1)),
    u && !w && ((l.os = "android"), (l.android = !0)),
    (c || f || d) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Ah(e) {
  return e === void 0 && (e = {}), ga || (ga = d1(e)), ga;
}
let ya;
function f1() {
  const e = at(),
    t = Ah();
  let n = !1;
  function r() {
    const o = e.navigator.userAgent.toLowerCase();
    return (
      o.indexOf("safari") >= 0 &&
      o.indexOf("chrome") < 0 &&
      o.indexOf("android") < 0
    );
  }
  if (r()) {
    const o = String(e.navigator.userAgent);
    if (o.includes("Version/")) {
      const [a, u] = o
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    l = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: l,
    isWebView: i,
  };
}
function p1() {
  return ya || (ya = f1()), ya;
}
function h1(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = at();
  let s = null,
    l = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          l = i.requestAnimationFrame(() => {
            const { width: f, height: w } = t;
            let v = f,
              m = w;
            d.forEach((x) => {
              let { contentBoxSize: p, contentRect: h, target: y } = x;
              (y && y !== t.el) ||
                ((v = h ? h.width : (p[0] || p).inlineSize),
                (m = h ? h.height : (p[0] || p).blockSize));
            }),
              (v !== f || m !== w) && o();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      l && i.cancelAnimationFrame(l),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", o),
        i.removeEventListener("orientationchange", c);
    });
}
function m1(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    l = at(),
    o = function (c, d) {
      d === void 0 && (d = {});
      const f = l.MutationObserver || l.WebkitMutationObserver,
        w = new f((v) => {
          if (t.__preventObserver__) return;
          if (v.length === 1) {
            i("observerUpdate", v[0]);
            return;
          }
          const m = function () {
            i("observerUpdate", v[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(m)
            : l.setTimeout(m, 0);
        });
      w.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(w);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = o1(t.hostEl);
          for (let d = 0; d < c.length; d += 1) o(c[d]);
        }
        o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var v1 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, l = new Array(s), o = 0; o < s; o++)
        l[o] = arguments[o];
      t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++)
      s[l] = arguments[l];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function g1() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(an(r, "padding-left") || 0, 10) -
        parseInt(an(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(an(r, "padding-top") || 0, 10) -
        parseInt(an(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function y1() {
  const e = this;
  function t(j, R) {
    return parseFloat(j.getPropertyValue(e.getDirectionLabel(R)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: l, wrongRTL: o } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = Bt(i, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : c.length;
  let f = [];
  const w = [],
    v = [];
  let m = n.slidesOffsetBefore;
  typeof m == "function" && (m = n.slidesOffsetBefore.call(e));
  let x = n.slidesOffsetAfter;
  typeof x == "function" && (x = n.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    h = e.slidesGrid.length;
  let y = n.spaceBetween,
    E = -m,
    C = 0,
    S = 0;
  if (typeof s > "u") return;
  typeof y == "string" && y.indexOf("%") >= 0
    ? (y = (parseFloat(y.replace("%", "")) / 100) * s)
    : typeof y == "string" && (y = parseFloat(y)),
    (e.virtualSize = -y),
    c.forEach((j) => {
      l ? (j.style.marginLeft = "") : (j.style.marginRight = ""),
        (j.style.marginBottom = ""),
        (j.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (vs(r, "--swiper-centered-offset-before", ""),
      vs(r, "--swiper-centered-offset-after", ""));
  const N = n.grid && n.grid.rows > 1 && e.grid;
  N ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let k;
  const M =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (j) => typeof n.breakpoints[j].slidesPerView < "u"
    ).length > 0;
  for (let j = 0; j < d; j += 1) {
    k = 0;
    let R;
    if (
      (c[j] && (R = c[j]),
      N && e.grid.updateSlide(j, R, c),
      !(c[j] && an(R, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        M && (c[j].style[e.getDirectionLabel("width")] = "");
        const D = getComputedStyle(R),
          A = R.style.transform,
          B = R.style.webkitTransform;
        if (
          (A && (R.style.transform = "none"),
          B && (R.style.webkitTransform = "none"),
          n.roundLengths)
        )
          k = e.isHorizontal() ? Nd(R, "width") : Nd(R, "height");
        else {
          const re = t(D, "width"),
            ke = t(D, "padding-left"),
            ie = t(D, "padding-right"),
            z = t(D, "margin-left"),
            U = t(D, "margin-right"),
            V = D.getPropertyValue("box-sizing");
          if (V && V === "border-box") k = re + z + U;
          else {
            const { clientWidth: Z, offsetWidth: le } = R;
            k = re + ke + ie + z + U + (le - Z);
          }
        }
        A && (R.style.transform = A),
          B && (R.style.webkitTransform = B),
          n.roundLengths && (k = Math.floor(k));
      } else
        (k = (s - (n.slidesPerView - 1) * y) / n.slidesPerView),
          n.roundLengths && (k = Math.floor(k)),
          c[j] && (c[j].style[e.getDirectionLabel("width")] = `${k}px`);
      c[j] && (c[j].swiperSlideSize = k),
        v.push(k),
        n.centeredSlides
          ? ((E = E + k / 2 + C / 2 + y),
            C === 0 && j !== 0 && (E = E - s / 2 - y),
            j === 0 && (E = E - s / 2 - y),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            n.roundLengths && (E = Math.floor(E)),
            S % n.slidesPerGroup === 0 && f.push(E),
            w.push(E))
          : (n.roundLengths && (E = Math.floor(E)),
            (S - Math.min(e.params.slidesPerGroupSkip, S)) %
              e.params.slidesPerGroup ===
              0 && f.push(E),
            w.push(E),
            (E = E + k + y)),
        (e.virtualSize += k + y),
        (C = k),
        (S += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + x),
    l &&
      o &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + y}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + y}px`),
    N && e.grid.updateWrapperSize(k, f),
    !n.centeredSlides)
  ) {
    const j = [];
    for (let R = 0; R < f.length; R += 1) {
      let D = f[R];
      n.roundLengths && (D = Math.floor(D)),
        f[R] <= e.virtualSize - s && j.push(D);
    }
    (f = j),
      Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - s);
  }
  if (a && n.loop) {
    const j = v[0] + y;
    if (n.slidesPerGroup > 1) {
      const R = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        D = j * n.slidesPerGroup;
      for (let A = 0; A < R; A += 1) f.push(f[f.length - 1] + D);
    }
    for (let R = 0; R < e.virtual.slidesBefore + e.virtual.slidesAfter; R += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + j),
        w.push(w[w.length - 1] + j),
        (e.virtualSize += j);
  }
  if ((f.length === 0 && (f = [0]), y !== 0)) {
    const j =
      e.isHorizontal() && l ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((R, D) =>
      !n.cssMode || n.loop ? !0 : D !== c.length - 1
    ).forEach((R) => {
      R.style[j] = `${y}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let j = 0;
    v.forEach((D) => {
      j += D + (y || 0);
    }),
      (j -= y);
    const R = j - s;
    f = f.map((D) => (D <= 0 ? -m : D > R ? R + x : D));
  }
  if (n.centerInsufficientSlides) {
    let j = 0;
    v.forEach((D) => {
      j += D + (y || 0);
    }),
      (j -= y);
    const R = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (j + R < s) {
      const D = (s - j - R) / 2;
      f.forEach((A, B) => {
        f[B] = A - D;
      }),
        w.forEach((A, B) => {
          w[B] = A + D;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: w,
      slidesSizesGrid: v,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    vs(r, "--swiper-centered-offset-before", `${-f[0]}px`),
      vs(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - v[v.length - 1] / 2}px`
      );
    const j = -e.snapGrid[0],
      R = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((D) => D + j)),
      (e.slidesGrid = e.slidesGrid.map((D) => D + R));
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    f.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    w.length !== h && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const j = `${n.containerModifierClass}backface-hidden`,
      R = e.el.classList.contains(j);
    d <= n.maxBackfaceHiddenSlides
      ? R || e.el.classList.add(j)
      : R && e.el.classList.remove(j);
  }
}
function w1(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const l = (o) => (r ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        n.push(o);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const o = t.activeIndex + s;
        if (o > t.slides.length && !r) break;
        n.push(l(o));
      }
  else n.push(l(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const o = n[s].offsetHeight;
      i = o > i ? o : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function S1() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const Md = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function x1(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  i && (l = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let o = n.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (l + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      f =
        (l - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + o),
      w = -(l - c),
      v = w + t.slidesSizesGrid[a],
      m = w >= 0 && w <= t.size - t.slidesSizesGrid[a],
      x =
        (w >= 0 && w < t.size - 1) ||
        (v > 1 && v <= t.size) ||
        (w <= 0 && v >= t.size);
    x && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      Md(u, x, n.slideVisibleClass),
      Md(u, m, n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -f : f);
  }
}
function E1(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: l, progressLoop: o } = t;
  const a = s,
    u = l;
  if (r === 0) (i = 0), (s = !0), (l = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (l = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      w = t.slidesGrid[d],
      v = t.slidesGrid[t.slidesGrid.length - 1],
      m = Math.abs(e);
    m >= f ? (o = (m - f) / v) : (o = (m + v - w) / v), o > 1 && (o -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: o, isBeginning: s, isEnd: l }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    l && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !l)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const wa = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function _1() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    l = e.grid && n.grid && n.grid.rows > 1,
    o = (d) => Bt(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let a, u, c;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = o(`[data-swiper-slide-index="${d}"]`));
    } else a = o(`[data-swiper-slide-index="${i}"]`);
  else
    l
      ? ((a = t.filter((d) => d.column === i)[0]),
        (c = t.filter((d) => d.column === i + 1)[0]),
        (u = t.filter((d) => d.column === i - 1)[0]))
      : (a = t[i]);
  a &&
    (l ||
      ((c = a1(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = l1(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      wa(d, d === a, n.slideActiveClass),
        wa(d, d === c, n.slideNextClass),
        wa(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Os = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Sa = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  xo = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const l = i,
        o = [l - t];
      o.push(...Array.from({ length: t }).map((a, u) => l + r + u)),
        e.slides.forEach((a, u) => {
          o.includes(a.column) && Sa(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let l = i - t; l <= s + t; l += 1) {
        const o = ((l % n) + n) % n;
        (o < i || o > s) && Sa(e, o);
      }
    else
      for (let l = Math.max(i - t, 0); l <= Math.min(s + t, n - 1); l += 1)
        l !== i && (l > s || l < i) && Sa(e, l);
  };
function C1(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function T1(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: l, snapIndex: o } = t;
  let a = e,
    u;
  const c = (w) => {
    let v = w - t.virtual.slidesBefore;
    return (
      v < 0 && (v = t.virtual.slides.length + v),
      v >= t.virtual.slides.length && (v -= t.virtual.slides.length),
      v
    );
  };
  if ((typeof a > "u" && (a = C1(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const w = Math.min(i.slidesPerGroupSkip, a);
    u = w + Math.floor((a - w) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s && !t.params.loop)) {
    u !== o && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let f;
  if (t.virtual && i.virtual.enabled && i.loop) f = c(a);
  else if (d) {
    const w = t.slides.filter((m) => m.column === a)[0];
    let v = parseInt(w.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(v) && (v = Math.max(t.slides.indexOf(w), 0)),
      (f = Math.floor(v / i.grid.rows));
  } else if (t.slides[a]) {
    const w = t.slides[a].getAttribute("data-swiper-slide-index");
    w ? (f = parseInt(w, 10)) : (f = a);
  } else f = a;
  Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: u,
    previousRealIndex: l,
    realIndex: f,
    previousIndex: s,
    activeIndex: a,
  }),
    t.initialized && xo(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (l !== f && t.emit("realIndexChange"), t.emit("slideChange"));
}
function k1(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !i && o.matches && o.matches(`.${r.slideClass}, swiper-slide`) && (i = o);
    });
  let s = !1,
    l;
  if (i) {
    for (let o = 0; o < n.slides.length; o += 1)
      if (n.slides[o] === i) {
        (s = !0), (l = o);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = l);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var P1 = {
  updateSize: g1,
  updateSlides: y1,
  updateAutoHeight: w1,
  updateSlidesOffset: S1,
  updateSlidesProgress: x1,
  updateProgress: E1,
  updateSlidesClasses: _1,
  updateActiveIndex: T1,
  updateClickedSlide: k1,
};
function b1(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let l = r1(s, e);
  return (l += t.cssOverflowAdjustment()), r && (l = -l), l || 0;
}
function j1(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: l } = n;
  let o = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (o = r ? -e : e) : (a = e),
    i.roundLengths && ((o = Math.floor(o)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (o -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${o}px, ${a}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function N1() {
  return -this.snapGrid[0];
}
function M1() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function L1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: l, wrapperEl: o } = s;
  if (s.animating && l.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
    s.updateProgress(c),
    l.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) o[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          zh({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      o.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var O1 = {
  getTranslate: b1,
  setTranslate: j1,
  minTranslate: N1,
  maxTranslate: M1,
  translateTo: L1,
};
function R1(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Fh(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: l } = t;
  let o = r;
  if (
    (o || (s > l ? (o = "next") : s < l ? (o = "prev") : (o = "reset")),
    t.emit(`transition${i}`),
    n && s !== l)
  ) {
    if (o === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      o === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function I1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Fh({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function z1(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Fh({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var D1 = { setTransition: R1, transitionStart: I1, transitionEnd: z1 };
function A1(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: o,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: w,
    enabled: v,
  } = s;
  if (
    (!v && !r && !i) ||
    s.destroyed ||
    (s.animating && o.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const m = Math.min(s.params.slidesPerGroupSkip, l);
  let x = m + Math.floor((l - m) / s.params.slidesPerGroup);
  x >= a.length && (x = a.length - 1);
  const p = -a[x];
  if (o.normalizeSlideIndex)
    for (let y = 0; y < u.length; y += 1) {
      const E = -Math.floor(p * 100),
        C = Math.floor(u[y] * 100),
        S = Math.floor(u[y + 1] * 100);
      typeof u[y + 1] < "u"
        ? E >= C && E < S - (S - C) / 2
          ? (l = y)
          : E >= C && E < S && (l = y + 1)
        : E >= C && (l = y);
    }
  if (
    s.initialized &&
    l !== d &&
    ((!s.allowSlideNext &&
      (f
        ? p > s.translate && p > s.minTranslate()
        : p < s.translate && p < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        p > s.translate &&
        p > s.maxTranslate() &&
        (d || 0) !== l))
  )
    return !1;
  l !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(p);
  let h;
  if (
    (l > d ? (h = "next") : l < d ? (h = "prev") : (h = "reset"),
    (f && -p === s.translate) || (!f && p === s.translate))
  )
    return (
      s.updateActiveIndex(l),
      o.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      o.effect !== "slide" && s.setTranslate(p),
      h !== "reset" && (s.transitionStart(n, h), s.transitionEnd(n, h)),
      !1
    );
  if (o.cssMode) {
    const y = s.isHorizontal(),
      E = f ? p : -p;
    if (t === 0) {
      const C = s.virtual && s.params.virtual.enabled;
      C &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        C && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              w[y ? "scrollLeft" : "scrollTop"] = E;
            }))
          : (w[y ? "scrollLeft" : "scrollTop"] = E),
        C &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          zh({ swiper: s, targetPosition: E, side: y ? "left" : "top" }), !0
        );
      w.scrollTo({ [y ? "left" : "top"]: E, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(p),
    s.updateActiveIndex(l),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, h),
    t === 0
      ? s.transitionEnd(n, h)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (E) {
            !s ||
              s.destroyed ||
              (E.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, h)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function F1(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let l = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) l = l + i.virtual.slidesBefore;
    else {
      let o;
      if (s) {
        const f = l * i.params.grid.rows;
        o = i.slides.filter(
          (w) => w.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else o = i.getSlideIndexByData(l);
      const a = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = a - o < c;
      if (
        (u && (d = d || o < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const f = u
          ? o < i.activeIndex
            ? "prev"
            : "next"
          : o - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? o + 1 : o - a + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const f = l * i.params.grid.rows;
        l = i.slides.filter(
          (w) => w.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else l = i.getSlideIndexByData(l);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(l, t, n, r);
    }),
    i
  );
}
function B1(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: l } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let o = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : o,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (l && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function $1(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: l,
      rtlTranslate: o,
      enabled: a,
      animating: u,
    } = r;
  if (!a || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = o ? r.translate : -r.translate;
  function f(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const w = f(d),
    v = s.map((p) => f(p));
  let m = s[v.indexOf(w) - 1];
  if (typeof m > "u" && i.cssMode) {
    let p;
    s.forEach((h, y) => {
      w >= h && (p = y);
    }),
      typeof p < "u" && (m = s[p > 0 ? p - 1 : p]);
  }
  let x = 0;
  if (
    (typeof m < "u" &&
      ((x = l.indexOf(m)),
      x < 0 && (x = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((x = x - r.slidesPerViewDynamic("previous", !0) + 1),
        (x = Math.max(x, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const p =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(p, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(x, e, t, n);
      }),
      !0
    );
  return r.slideTo(x, e, t, n);
}
function U1(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function V1(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const l = Math.min(i.params.slidesPerGroupSkip, s),
    o = l + Math.floor((s - l) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[o]) {
    const u = i.snapGrid[o],
      c = i.snapGrid[o + 1];
    a - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[o - 1],
      c = i.snapGrid[o];
    a - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function H1() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Bt(n, `${l}[data-swiper-slide-index="${s}"]`)[0]
            )),
            So(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Bt(n, `${l}[data-swiper-slide-index="${s}"]`)[0]
          )),
          So(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var W1 = {
  slideTo: A1,
  slideToLoop: F1,
  slideNext: B1,
  slidePrev: $1,
  slideReset: U1,
  slideToClosest: V1,
  slideToClickedSlide: H1,
};
function Y1(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      Bt(r, `.${n.slideClass}, swiper-slide`).forEach((d, f) => {
        d.setAttribute("data-swiper-slide-index", f);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    l = n.slidesPerGroup * (s ? n.grid.rows : 1),
    o = t.slides.length % l !== 0,
    a = s && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const f = t.isElement
          ? dl("swiper-slide", [n.slideBlankClass])
          : dl("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (o) {
    if (n.loopAddBlankSlides) {
      const c = l - (t.slides.length % l);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      cl(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      cl(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function X1(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: l,
    byMousewheel: o,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: f,
      params: w,
    } = a,
    { centeredSlides: v } = w;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && w.virtual.enabled)
  ) {
    n &&
      (!w.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : w.centeredSlides && a.snapIndex < w.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  let m = w.slidesPerView;
  m === "auto"
    ? (m = a.slidesPerViewDynamic())
    : ((m = Math.ceil(parseFloat(w.slidesPerView, 10))),
      v && m % 2 === 0 && (m = m + 1));
  const x = w.slidesPerGroupAuto ? m : w.slidesPerGroup;
  let p = x;
  p % x !== 0 && (p += x - (p % x)),
    (p += w.loopAdditionalSlides),
    (a.loopedSlides = p);
  const h = a.grid && w.grid && w.grid.rows > 1;
  u.length < m + p
    ? cl(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : h &&
      w.grid.fill === "row" &&
      cl(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const y = [],
    E = [];
  let C = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        u.filter((A) => A.classList.contains(w.slideActiveClass))[0]
      ))
    : (C = s);
  const S = r === "next" || !r,
    N = r === "prev" || !r;
  let k = 0,
    M = 0;
  const j = h ? Math.ceil(u.length / w.grid.rows) : u.length,
    D = (h ? u[s].column : s) + (v && typeof i > "u" ? -m / 2 + 0.5 : 0);
  if (D < p) {
    k = Math.max(p - D, x);
    for (let A = 0; A < p - D; A += 1) {
      const B = A - Math.floor(A / j) * j;
      if (h) {
        const re = j - B - 1;
        for (let ke = u.length - 1; ke >= 0; ke -= 1)
          u[ke].column === re && y.push(ke);
      } else y.push(j - B - 1);
    }
  } else if (D + m > j - p) {
    M = Math.max(D - (j - p * 2), x);
    for (let A = 0; A < M; A += 1) {
      const B = A - Math.floor(A / j) * j;
      h
        ? u.forEach((re, ke) => {
            re.column === B && E.push(ke);
          })
        : E.push(B);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    N &&
      y.forEach((A) => {
        (u[A].swiperLoopMoveDOM = !0),
          f.prepend(u[A]),
          (u[A].swiperLoopMoveDOM = !1);
      }),
    S &&
      E.forEach((A) => {
        (u[A].swiperLoopMoveDOM = !0),
          f.append(u[A]),
          (u[A].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    w.slidesPerView === "auto"
      ? a.updateSlides()
      : h &&
        ((y.length > 0 && N) || (E.length > 0 && S)) &&
        a.slides.forEach((A, B) => {
          a.grid.updateSlide(B, A, a.slides);
        }),
    w.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (y.length > 0 && N) {
      if (typeof t > "u") {
        const A = a.slidesGrid[C],
          re = a.slidesGrid[C + k] - A;
        o
          ? a.setTranslate(a.translate - re)
          : (a.slideTo(C + Math.ceil(k), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - re),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - re)));
      } else if (i) {
        const A = h ? y.length / w.grid.rows : y.length;
        a.slideTo(a.activeIndex + A, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (E.length > 0 && S)
      if (typeof t > "u") {
        const A = a.slidesGrid[C],
          re = a.slidesGrid[C - M] - A;
        o
          ? a.setTranslate(a.translate - re)
          : (a.slideTo(C - M, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - re),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - re)));
      } else {
        const A = h ? E.length / w.grid.rows : E.length;
        a.slideTo(a.activeIndex - A, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !l)
  ) {
    const A = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((B) => {
          !B.destroyed &&
            B.params.loop &&
            B.loopFix({
              ...A,
              slideTo: B.params.slidesPerView === w.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...A,
          slideTo:
            a.controller.control.params.slidesPerView === w.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function G1() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var Q1 = { loopCreate: Y1, loopFix: X1, loopDestroy: G1 };
function K1(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function q1() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var Z1 = { setGrabCursor: K1, unsetGrabCursor: q1 };
function J1(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Ir() || r === at()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Ld(e, t, n) {
  const r = at(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    l = i.edgeSwipeThreshold;
  return s && (n <= l || n >= r.innerWidth - l)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function eS(e) {
  const t = this,
    n = Ir();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Ld(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: l, enabled: o } = t;
  if (
    !o ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !s1(a, t.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (a = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (f ? J1(d, a) : a.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
  (l.currentX = r.pageX), (l.currentY = r.pageY);
  const w = l.currentX,
    v = l.currentY;
  if (!Ld(t, r, w)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (l.startX = w),
    (l.startY = v),
    (i.touchStartTime = ul()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let m = !0;
  a.matches(i.focusableElements) &&
    ((m = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      n.activeElement.blur();
  const x = m && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || x) &&
    !a.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function tS(e) {
  const t = Ir(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: l, enabled: o } = n;
  if (!o || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (r.touchId !== null || a.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((S) => S.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = a;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = ul()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && n.translate <= n.maxTranslate()) ||
      (c > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", a),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = c),
    (s.currentY = d);
  const f = s.currentX - s.startX,
    w = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + w ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let S;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : f * f + w * w >= 25 &&
        ((S = (Math.atan2(Math.abs(w), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? S > i.touchAngle
          : 90 - S > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (a.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let v = n.isHorizontal() ? f : w,
    m = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((v = Math.abs(v) * (l ? 1 : -1)), (m = Math.abs(m) * (l ? 1 : -1))),
    (s.diff = v),
    (v *= i.touchRatio),
    l && ((v = -v), (m = -m));
  const x = n.touchesDirection;
  (n.swipeDirection = v > 0 ? "prev" : "next"),
    (n.touchesDirection = m > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode,
    h =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && h && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const S = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(S);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let y;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      x !== n.touchesDirection &&
      p &&
      h &&
      Math.abs(v) >= 1)
  ) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = v + r.startTranslate);
  let E = !0,
    C = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (C = 0),
    v > 0
      ? (p &&
          h &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + v) ** C)))
      : v < 0 &&
        (p &&
          h &&
          !y &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - v) ** C))),
    E && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function nS(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((C) => C.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: l,
    touches: o,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!l.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && l.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  l.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = ul(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const C = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((C && C[0]) || r.target, C),
      t.emit("tap click", r),
      f < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = ul()),
    So(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (o.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let w;
  if (
    (l.followFinger
      ? (w = a ? t.translate : -t.translate)
      : (w = -n.currentTranslate),
    l.cssMode)
  )
    return;
  if (l.freeMode && l.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: w });
    return;
  }
  const v = w >= -t.maxTranslate() && !t.params.loop;
  let m = 0,
    x = t.slidesSizesGrid[0];
  for (
    let C = 0;
    C < u.length;
    C += C < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
  ) {
    const S = C < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof u[C + S] < "u"
      ? (v || (w >= u[C] && w < u[C + S])) && ((m = C), (x = u[C + S] - u[C]))
      : (v || w >= u[C]) && ((m = C), (x = u[u.length - 1] - u[u.length - 2]));
  }
  let p = null,
    h = null;
  l.rewind &&
    (t.isBeginning
      ? (h =
          l.virtual && l.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (p = 0));
  const y = (w - u[m]) / x,
    E = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (f > l.longSwipesMs) {
    if (!l.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (y >= l.longSwipesRatio
        ? t.slideTo(l.rewind && t.isEnd ? p : m + E)
        : t.slideTo(m)),
      t.swipeDirection === "prev" &&
        (y > 1 - l.longSwipesRatio
          ? t.slideTo(m + E)
          : h !== null && y < 0 && Math.abs(y) > l.longSwipesRatio
          ? t.slideTo(h)
          : t.slideTo(m));
  } else {
    if (!l.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(m + E)
        : t.slideTo(m)
      : (t.swipeDirection === "next" && t.slideTo(p !== null ? p : m + E),
        t.swipeDirection === "prev" && t.slideTo(h !== null ? h : m));
  }
}
function Od() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    l = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const o = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !l
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function rS(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function iS() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function sS(e) {
  const t = this;
  Os(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function lS() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Bh = (e, t) => {
  const n = Ir(),
    { params: r, el: i, wrapperEl: s, device: l } = e,
    o = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Od,
          !0
        )
      : e[u]("observerUpdate", Od, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function aS() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = eS.bind(e)),
    (e.onTouchMove = tS.bind(e)),
    (e.onTouchEnd = nS.bind(e)),
    (e.onDocumentTouchStart = lS.bind(e)),
    t.cssMode && (e.onScroll = iS.bind(e)),
    (e.onClick = rS.bind(e)),
    (e.onLoad = sS.bind(e)),
    Bh(e, "on");
}
function oS() {
  Bh(this, "off");
}
var uS = { attachEvents: aS, detachEvents: oS };
const Rd = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function cS() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const l = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const a = (l in s ? s[l] : void 0) || e.originalParams,
    u = Rd(e, r),
    c = Rd(e, a),
    d = e.params.grabCursor,
    f = a.grabCursor,
    w = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !f ? e.unsetGrabCursor() : !d && f && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((y) => {
      if (typeof a[y] > "u") return;
      const E = r[y] && r[y].enabled,
        C = a[y] && a[y].enabled;
      E && !C && e[y].disable(), !E && C && e[y].enable();
    });
  const v = a.direction && a.direction !== r.direction,
    m = r.loop && (a.slidesPerView !== r.slidesPerView || v),
    x = r.loop;
  v && n && e.changeDirection(), tt(e.params, a);
  const p = e.params.enabled,
    h = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    w && !p ? e.disable() : !w && p && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", a),
    n &&
      (m
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !x && h
        ? (e.loopCreate(t), e.updateSlides())
        : x && !h && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function dS(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = at(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    l = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const a = parseFloat(o.substr(1));
        return { value: s * a, point: o };
      }
      return { value: o, point: o };
    });
  l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
  for (let o = 0; o < l.length; o += 1) {
    const { point: a, value: u } = l[o];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var fS = { setBreakpoint: cS, getBreakpoint: dS };
function pS(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function hS() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    l = pS(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.classList.add(...t), e.emitContainerClasses();
}
function mS() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var vS = { addClasses: hS, removeClasses: mS };
function gS() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var yS = { checkOverflow: gS },
  Eo = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function wS(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      tt(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      tt(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      tt(t, r);
  };
}
const xa = {
    eventsEmitter: v1,
    update: P1,
    translate: O1,
    transition: D1,
    slide: W1,
    loop: Q1,
    grabCursor: Z1,
    events: uS,
    breakpoints: fS,
    checkOverflow: yS,
    classes: vS,
  },
  Ea = {};
let ju = class Rt {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = tt({}, n)),
      t && !n.el && (n.el = t);
    const l = Ir();
    if (
      n.el &&
      typeof n.el == "string" &&
      l.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        l.querySelectorAll(n.el).forEach((d) => {
          const f = tt({}, n, { el: d });
          c.push(new Rt(f));
        }),
        c
      );
    }
    const o = this;
    (o.__swiper__ = !0),
      (o.support = Dh()),
      (o.device = Ah({ userAgent: n.userAgent })),
      (o.browser = p1()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      n.modules && Array.isArray(n.modules) && o.modules.push(...n.modules);
    const a = {};
    o.modules.forEach((c) => {
      c({
        params: n,
        swiper: o,
        extendParams: wS(n, a),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const u = tt({}, Eo, a);
    return (
      (o.params = tt({}, u, Ea, n)),
      (o.originalParams = tt({}, o.params)),
      (o.passedParams = tt({}, n)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((c) => {
          o.on(c, o.params.on[c]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Bt(n, `.${r.slideClass}, swiper-slide`),
      s = jd(i[0]);
    return jd(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Bt(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      l = (r.maxTranslate() - i) * t + i;
    r.translateTo(l, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: l,
        slidesSizesGrid: o,
        size: a,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        f;
      for (let w = u + 1; w < s.length; w += 1)
        s[w] &&
          !f &&
          ((d += Math.ceil(s[w].swiperSlideSize)), (c += 1), d > a && (f = !0));
      for (let w = u - 1; w >= 0; w -= 1)
        s[w] &&
          !f &&
          ((d += s[w].swiperSlideSize), (c += 1), d > a && (f = !0));
    } else if (t === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? l[d] + o[d] - l[u] < a : l[d] - l[u] < a) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) l[u] - l[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
        l.complete && Os(t, l);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const l = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(l.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Bt(r, i())[0];
    return (
      !l &&
        n.params.createElements &&
        ((l = dl("div", n.params.wrapperClass)),
        r.append(l),
        Bt(r, `.${n.params.slideClass}`).forEach((o) => {
          l.append(o);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: l,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : l,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || an(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || an(r, "direction") === "rtl"),
        wrongRTL: an(l, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Os(n, s)
          : s.addEventListener("load", (l) => {
              Os(n, l.target);
            });
      }),
      xo(n),
      (n.initialized = !0),
      xo(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: l, slides: o } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          l && l.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), t1(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    tt(Ea, t);
  }
  static get extendedDefaults() {
    return Ea;
  }
  static get defaults() {
    return Eo;
  }
  static installModule(t) {
    Rt.prototype.__modules__ || (Rt.prototype.__modules__ = []);
    const n = Rt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Rt.installModule(n)), Rt)
      : (Rt.installModule(t), Rt);
  }
};
Object.keys(xa).forEach((e) => {
  Object.keys(xa[e]).forEach((t) => {
    ju.prototype[t] = xa[e][t];
  });
});
ju.use([h1, m1]);
const $h = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Hn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function xr(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Hn(t[r]) && Hn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : xr(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Uh(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Vh(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Hh(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Wh(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function SS(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function xS(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: l,
    scrollbarEl: o,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (M) => M !== "children" && M !== "direction" && M !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: f,
      scrollbar: w,
      virtual: v,
      thumbs: m,
    } = t;
  let x, p, h, y, E, C, S, N;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (x = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (p = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (h = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      w &&
      !w.el &&
      (y = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || l) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (E = !0);
  const k = (M) => {
    t[M] &&
      (t[M].destroy(),
      M === "navigation"
        ? (t.isElement && (t[M].prevEl.remove(), t[M].nextEl.remove()),
          (c[M].prevEl = void 0),
          (c[M].nextEl = void 0),
          (t[M].prevEl = void 0),
          (t[M].nextEl = void 0))
        : (t.isElement && t[M].el.remove(),
          (c[M].el = void 0),
          (t[M].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (C = !0) : !c.loop && r.loop ? (S = !0) : (N = !0)),
    u.forEach((M) => {
      if (Hn(c[M]) && Hn(r[M]))
        Object.assign(c[M], r[M]),
          (M === "navigation" || M === "pagination" || M === "scrollbar") &&
            "enabled" in r[M] &&
            !r[M].enabled &&
            k(M);
      else {
        const j = r[M];
        (j === !0 || j === !1) &&
        (M === "navigation" || M === "pagination" || M === "scrollbar")
          ? j === !1 && k(M)
          : (c[M] = r[M]);
      }
    }),
    u.includes("controller") &&
      !p &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && v && c.virtual.enabled
      ? ((v.slides = n), v.update(!0))
      : i.includes("virtual") &&
        v &&
        c.virtual.enabled &&
        (n && (v.slides = n), v.update(!0)),
    i.includes("children") && n && c.loop && (N = !0),
    x && m.init() && m.update(!0),
    p && (t.controller.control = c.controller.control),
    h &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    y &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (c.scrollbar.el = o),
      w.init(),
      w.updateSize(),
      w.setTranslate()),
    E &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!l || typeof l == "string") &&
          ((l = document.createElement("div")),
          l.classList.add("swiper-button-prev"),
          (l.innerHTML = t.hostEl.constructor.prevButtonSvg),
          l.part.add("button-prev"),
          t.el.appendChild(l))),
      s && (c.navigation.nextEl = s),
      l && (c.navigation.prevEl = l),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (C || N) && t.loopDestroy(),
    (S || N) && t.loopCreate(),
    t.update();
}
function ES(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  xr(n, Eo), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    l = $h.map((a) => a.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((a) => {
      typeof e[a] > "u" ||
        (l.indexOf(a) >= 0
          ? Hn(e[a])
            ? ((n[a] = {}), (i[a] = {}), xr(n[a], e[a]), xr(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function _S(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: l,
    swiper: o,
  } = e;
  Uh(t) &&
    r &&
    i &&
    ((o.params.navigation.nextEl = r),
    (o.originalParams.navigation.nextEl = r),
    (o.params.navigation.prevEl = i),
    (o.originalParams.navigation.prevEl = i)),
    Vh(t) &&
      s &&
      ((o.params.pagination.el = s), (o.originalParams.pagination.el = s)),
    Hh(t) &&
      l &&
      ((o.params.scrollbar.el = l), (o.originalParams.scrollbar.el = l)),
    o.init(n);
}
function CS(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const l = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && l("children"),
      r.length !== n.length && l("children");
  }
  return (
    $h
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Hn(e[a]) && Hn(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? l(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && l(a);
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && l(a);
                }));
          } else e[a] !== t[a] && l(a);
      }),
    s
  );
}
const TS = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
function Yh(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Xh(e) {
  const t = [];
  return (
    Se.Children.toArray(e).forEach((n) => {
      Yh(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Xh(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function kS(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Se.Children.toArray(e).forEach((r) => {
      if (Yh(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Xh(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function PS(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: l } = n,
    o = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = o; c < a; c += 1) c >= s && c <= l && u.push(t[r(c)]);
  return u.map((c, d) =>
    Se.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${d}`,
    })
  );
}
function pi(e, t) {
  return typeof window > "u" ? P.useEffect(e, t) : P.useLayoutEffect(e, t);
}
const Id = P.createContext(null),
  bS = P.createContext(null),
  Gh = P.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: l,
        ...o
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, c] = P.useState("swiper"),
      [d, f] = P.useState(null),
      [w, v] = P.useState(!1),
      m = P.useRef(!1),
      x = P.useRef(null),
      p = P.useRef(null),
      h = P.useRef(null),
      y = P.useRef(null),
      E = P.useRef(null),
      C = P.useRef(null),
      S = P.useRef(null),
      N = P.useRef(null),
      { params: k, passedParams: M, rest: j, events: R } = ES(o),
      { slides: D, slots: A } = kS(s),
      B = () => {
        v(!w);
      };
    Object.assign(k.on, {
      _containerClasses(U, V) {
        c(V);
      },
    });
    const re = () => {
      Object.assign(k.on, R), (a = !0);
      const U = { ...k };
      if (
        (delete U.wrapperClass,
        (p.current = new ju(U)),
        p.current.virtual && p.current.params.virtual.enabled)
      ) {
        p.current.virtual.slides = D;
        const V = {
          cache: !1,
          slides: D,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        xr(p.current.params.virtual, V),
          xr(p.current.originalParams.virtual, V);
      }
    };
    x.current || re(), p.current && p.current.on("_beforeBreakpoint", B);
    const ke = () => {
        a ||
          !R ||
          !p.current ||
          Object.keys(R).forEach((U) => {
            p.current.on(U, R[U]);
          });
      },
      ie = () => {
        !R ||
          !p.current ||
          Object.keys(R).forEach((U) => {
            p.current.off(U, R[U]);
          });
      };
    P.useEffect(() => () => {
      p.current && p.current.off("_beforeBreakpoint", B);
    }),
      P.useEffect(() => {
        !m.current &&
          p.current &&
          (p.current.emitSlidesClasses(), (m.current = !0));
      }),
      pi(() => {
        if ((t && (t.current = x.current), !!x.current))
          return (
            p.current.destroyed && re(),
            _S(
              {
                el: x.current,
                nextEl: E.current,
                prevEl: C.current,
                paginationEl: S.current,
                scrollbarEl: N.current,
                swiper: p.current,
              },
              k
            ),
            l && !p.current.destroyed && l(p.current),
            () => {
              p.current && !p.current.destroyed && p.current.destroy(!0, !1);
            }
          );
      }, []),
      pi(() => {
        ke();
        const U = CS(M, h.current, D, y.current, (V) => V.key);
        return (
          (h.current = M),
          (y.current = D),
          U.length &&
            p.current &&
            !p.current.destroyed &&
            xS({
              swiper: p.current,
              slides: D,
              passedParams: M,
              changedParams: U,
              nextEl: E.current,
              prevEl: C.current,
              scrollbarEl: N.current,
              paginationEl: S.current,
            }),
          () => {
            ie();
          }
        );
      }),
      pi(() => {
        TS(p.current);
      }, [d]);
    function z() {
      return k.virtual
        ? PS(p.current, D, d)
        : D.map((U, V) =>
            Se.cloneElement(U, { swiper: p.current, swiperSlideIndex: V })
          );
    }
    return Se.createElement(
      r,
      fl({ ref: x, className: Wh(`${u}${n ? ` ${n}` : ""}`) }, j),
      Se.createElement(
        bS.Provider,
        { value: p.current },
        A["container-start"],
        Se.createElement(
          i,
          { className: SS(k.wrapperClass) },
          A["wrapper-start"],
          z(),
          A["wrapper-end"]
        ),
        Uh(k) &&
          Se.createElement(
            Se.Fragment,
            null,
            Se.createElement("div", {
              ref: C,
              className: "swiper-button-prev",
            }),
            Se.createElement("div", { ref: E, className: "swiper-button-next" })
          ),
        Hh(k) &&
          Se.createElement("div", { ref: N, className: "swiper-scrollbar" }),
        Vh(k) &&
          Se.createElement("div", { ref: S, className: "swiper-pagination" }),
        A["container-end"]
      )
    );
  });
Gh.displayName = "Swiper";
const Qh = P.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: l,
    lazy: o,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = P.useRef(null),
    [f, w] = P.useState("swiper-slide"),
    [v, m] = P.useState(!1);
  function x(E, C, S) {
    C === d.current && w(S);
  }
  pi(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        f !== "swiper-slide" && w("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", x),
        () => {
          s && s.off("_slideClass", x);
        }
      );
    }
  }),
    pi(() => {
      s && d.current && !s.destroyed && w(s.getSlideClasses(d.current));
    }, [s]);
  const p = {
      isActive: f.indexOf("swiper-slide-active") >= 0,
      isVisible: f.indexOf("swiper-slide-visible") >= 0,
      isPrev: f.indexOf("swiper-slide-prev") >= 0,
      isNext: f.indexOf("swiper-slide-next") >= 0,
    },
    h = () => (typeof r == "function" ? r(p) : r),
    y = () => {
      m(!0);
    };
  return Se.createElement(
    n,
    fl(
      {
        ref: d,
        className: Wh(`${f}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: y,
      },
      c
    ),
    l &&
      Se.createElement(
        Id.Provider,
        { value: p },
        Se.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof l == "number" ? l : void 0,
          },
          h(),
          o &&
            !v &&
            Se.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !l &&
      Se.createElement(
        Id.Provider,
        { value: p },
        h(),
        o &&
          !v &&
          Se.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Qh.displayName = "SwiperSlide";
const jS = [
  {
    id: "2",
    name: "Skolin",
    imgUrl: "/src/assets/img/websites/capture3.webp",
    description:
      "Site internet vitrine pour une entreprise spécialisée dans la méthode LEAN",
    typesite: "Site Vitrine",
    languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg          ",
    ],
    url: "https://skolin.fr",
    likes: "0",
    date: "01/01/1999",
  },
  {
    id: "6",
    name: "District United",
    imgUrl: "/src/assets/img/websites/capture2.webp",
    description:
      "Site internet vitrine d'une association Alsacienne, basée sur l'eSport",
    typesite: "Site Vitrine",
    languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    ],
    url: "/src/local_websites/districtunited/",
    likes: "0",
    date: "06/07/2021",
  },
  {
    id: "4",
    name: "Claude Wolfersperger",
    imgUrl: "/src/assets/img/websites/capture5.webp",
    description:
      "Site internet de type blog/création de contenu pour une psychologue en Alsace",
    typesite: "Blog et site de contenu",
    languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg          ",
    ],
    url: "https://claudewolfersperger.fr/",
    likes: "0",
    date: "01/01/1999",
  },
  {
    id: "5",
    name: "Express Renovation",
    imgUrl: "/src/assets/img/websites/capture7.webp",
    description: "Site vitrine pour une entreprise de Rénovation sur Mulhouse",
    typesite: "Site Vitrine",
    languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg          ",
    ],
    url: "/src/local_websites/express-renovation/",
    likes: "0",
    date: "01/01/1999",
  },
  {
    id: "3",
    name: "Coeur de Vaurien",
    imgUrl: "/src/assets/img/websites/capture8.webp",
    description: "Chaque tattoo artiste possède son portfolio personnalisé",
    typesite: "Site Portfolio",
    languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg          ",
    ],
    url: "https://coeurdevaurien.com/",
    likes: "0",
    date: "01/01/1999",
  },
  {
    id: "1",
    name: "Portfolio 2023 édition",
    imgUrl: "/src/assets/img/websites/capture10.webp",
    description: "Portfolio de Yael BRINKERT pour l'année 2023",
    typesite: "Site Portfolio",
    languages: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg          ",
    ],
    url: "/src/local_websites/last-portfolio/",
    likes: "0",
    date: "01/01/1999",
  },
];
function NS(e) {
  const {
    effect: t,
    swiper: n,
    on: r,
    setTranslate: i,
    setTransition: s,
    overwriteParams: l,
    perspective: o,
    recreateShadows: a,
    getEffectParams: u,
  } = e;
  r("beforeInit", () => {
    if (n.params.effect !== t) return;
    n.classNames.push(`${n.params.containerModifierClass}${t}`),
      o && o() && n.classNames.push(`${n.params.containerModifierClass}3d`);
    const d = l ? l() : {};
    Object.assign(n.params, d), Object.assign(n.originalParams, d);
  }),
    r("setTranslate", () => {
      n.params.effect === t && i();
    }),
    r("setTransition", (d, f) => {
      n.params.effect === t && s(f);
    }),
    r("transitionEnd", () => {
      if (n.params.effect === t && a) {
        if (!u || !u().slideShadows) return;
        n.slides.forEach((d) => {
          d.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((f) => f.remove());
        }),
          a();
      }
    });
  let c;
  r("virtualUpdate", () => {
    n.params.effect === t &&
      (n.slides.length || (c = !0),
      requestAnimationFrame(() => {
        c && n.slides && n.slides.length && (i(), (c = !1));
      }));
  });
}
function MS(e, t) {
  const n = bu(t);
  return (
    n !== t &&
      ((n.style.backfaceVisibility = "hidden"),
      (n.style["-webkit-backface-visibility"] = "hidden")),
    n
  );
}
function LS(e) {
  let { swiper: t, duration: n, transformElements: r, allSlides: i } = e;
  const { activeIndex: s } = t,
    l = (o) =>
      o.parentElement
        ? o.parentElement
        : t.slides.filter(
            (u) => u.shadowRoot && u.shadowRoot === o.parentNode
          )[0];
  if (t.params.virtualTranslate && n !== 0) {
    let o = !1,
      a;
    i
      ? (a = r)
      : (a = r.filter((u) => {
          const c = u.classList.contains("swiper-slide-transform") ? l(u) : u;
          return t.getSlideIndex(c) === s;
        })),
      a.forEach((u) => {
        u1(u, () => {
          if (o || !t || t.destroyed) return;
          (o = !0), (t.animating = !1);
          const c = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          t.wrapperEl.dispatchEvent(c);
        });
      });
  }
}
function OS(e, t, n) {
  const r = `swiper-slide-shadow${` swiper-slide-shadow-${e}`}`,
    i = bu(t);
  let s = i.querySelector(`.${r.split(" ").join(".")}`);
  return s || ((s = dl("div", r.split(" "))), i.append(s)), s;
}
function RS(e) {
  let { swiper: t, extendParams: n, on: r } = e;
  n({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    NS({
      effect: "cards",
      swiper: t,
      on: r,
      setTranslate: () => {
        const { slides: l, activeIndex: o, rtlTranslate: a } = t,
          u = t.params.cardsEffect,
          { startTranslate: c, isTouched: d } = t.touchEventsData,
          f = a ? -t.translate : t.translate;
        for (let w = 0; w < l.length; w += 1) {
          const v = l[w],
            m = v.progress,
            x = Math.min(Math.max(m, -4), 4);
          let p = v.swiperSlideOffset;
          t.params.centeredSlides &&
            !t.params.cssMode &&
            (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
            t.params.centeredSlides &&
              t.params.cssMode &&
              (p -= l[0].swiperSlideOffset);
          let h = t.params.cssMode ? -p - t.translate : -p,
            y = 0;
          const E = -100 * Math.abs(x);
          let C = 1,
            S = -u.perSlideRotate * x,
            N = u.perSlideOffset - Math.abs(x) * 0.75;
          const k =
              t.virtual && t.params.virtual.enabled ? t.virtual.from + w : w,
            M =
              (k === o || k === o - 1) &&
              x > 0 &&
              x < 1 &&
              (d || t.params.cssMode) &&
              f < c,
            j =
              (k === o || k === o + 1) &&
              x < 0 &&
              x > -1 &&
              (d || t.params.cssMode) &&
              f > c;
          if (M || j) {
            const B = (1 - Math.abs((Math.abs(x) - 0.5) / 0.5)) ** 0.5;
            (S += -28 * x * B),
              (C += -0.5 * B),
              (N += 96 * B),
              (y = `${-25 * B * Math.abs(x)}%`);
          }
          if (
            (x < 0
              ? (h = `calc(${h}px ${a ? "-" : "+"} (${N * Math.abs(x)}%))`)
              : x > 0
              ? (h = `calc(${h}px ${a ? "-" : "+"} (-${N * Math.abs(x)}%))`)
              : (h = `${h}px`),
            !t.isHorizontal())
          ) {
            const B = y;
            (y = h), (h = B);
          }
          const R = x < 0 ? `${1 + (1 - C) * x}` : `${1 - (1 - C) * x}`,
            D = `
        translate3d(${h}, ${y}, ${E}px)
        rotateZ(${u.rotate ? (a ? -S : S) : 0}deg)
        scale(${R})
      `;
          if (u.slideShadows) {
            let B = v.querySelector(".swiper-slide-shadow");
            B || (B = OS("cards", v)),
              B &&
                (B.style.opacity = Math.min(
                  Math.max((Math.abs(x) - 0.5) / 0.5, 0),
                  1
                ));
          }
          v.style.zIndex = -Math.abs(Math.round(m)) + l.length;
          const A = MS(u, v);
          A.style.transform = D;
        }
      },
      setTransition: (l) => {
        const o = t.slides.map((a) => bu(a));
        o.forEach((a) => {
          (a.style.transitionDuration = `${l}ms`),
            a.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
              u.style.transitionDuration = `${l}ms`;
            });
        }),
          LS({ swiper: t, duration: l, transformElements: o });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !t.params.cssMode,
      }),
    });
}
function IS() {
  const [e, t] = P.useState([]);
  return (
    P.useEffect(() => {
      t(jS.sort((n, r) => n.id - r.id));
    }, []),
    Oh(),
    g.jsx(g.Fragment, {
      children: g.jsx(Gh, {
        effect: "cards",
        grabCursor: !0,
        modules: [RS],
        className: "mySwiper",
        children: e.map((n) =>
          g.jsx(
            Qh,
            {
              children: g.jsxs("div", {
                className: "card_portfolio",
                children: [
                  g.jsx("div", { className: "black_filter" }),
                  g.jsx("img", { src: n.imgUrl, alt: n.name }),
                  g.jsxs("div", {
                    className: "card_portfolio_container",
                    children: [
                      g.jsx("h4", {
                        className: "card_portfolio_title",
                        "data-aos": "fade-left",
                        "data-aos-duration": "600",
                        children: n.name,
                      }),
                      g.jsx("p", {
                        className: "card_portfolio_typesite",
                        "data-aos": "fade-left",
                        "data-aos-duration": "800",
                        children: n.typesite,
                      }),
                      g.jsx("p", {
                        className: "card_portfolio_description",
                        "data-aos": "fade-left",
                        "data-aos-duration": "900",
                        children: n.description.substr(0, 80),
                      }),
                      g.jsx("a", {
                        href: n.url,
                        target: "_blank",
                        class: "card_portfolio_button",
                        "data-aos": "fade-left",
                        "data-aos-duration": "1000",
                        children: "Découvrir ce site",
                      }),
                    ],
                  }),
                ],
              }),
            },
            n.id
          )
        ),
      }),
    })
  );
}
function zS() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx(Ui, {}),
      g.jsx("section", {
        className: "section portfolio__wrapper",
        children: g.jsx(IS, {}),
      }),
    ],
  });
}
function DS() {
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx(Ui, {}),
      g.jsxs("section", {
        id: "pricing",
        className: "section",
        children: [
          g.jsx("h2", {
            "data-aos": "zoom-in-down",
            "data-aos-duration": "700",
            children: "Découvrez mes offres",
          }),
          g.jsxs("div", {
            className: "prices__wrapper",
            children: [
              g.jsx("div", {
                className: "translate__animation",
                children: g.jsxs("div", {
                  className: "prices__wrapper__box",
                  "data-aos-duration": "500",
                  "data-aos": "fade-down",
                  children: [
                    g.jsx("h3", {
                      className: "title_title",
                      children: "Blogs",
                    }),
                    g.jsx("h4", {
                      className: "desc_title",
                      children: "Blogs ou Sites de Contenu",
                    }),
                    g.jsxs("span", {
                      className: "price_tag",
                      children: [g.jsx("span", { children: "€" }), "500-1500"],
                    }),
                    g.jsx("hr", { className: "separation" }),
                    g.jsxs("div", {
                      className: "container_benefits",
                      children: [
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Référencement Local (SEO)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Technologies récentes",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Espace d'administration",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item isnot",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-xmark",
                              }),
                            }),
                            " Hébergement (1 an)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item isnot",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-xmark",
                              }),
                            }),
                            " Nom de domaine",
                          ],
                        }),
                        g.jsx("hr", { className: "separation" }),
                        g.jsxs("div", {
                          className: "benefits_item is_special",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Correction des bugs (5 ans)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              g.jsx("div", {
                className: "translate__animation",
                children: g.jsxs("div", {
                  className: "prices__wrapper__box best_offer",
                  "data-aos-duration": "800",
                  "data-aos": "fade-down",
                  children: [
                    g.jsxs("span", {
                      className: "top_tag_best_offer",
                      children: [
                        "Meilleure vente ",
                        g.jsx("i", { className: "fa fa-star" }),
                      ],
                    }),
                    g.jsx("h3", {
                      className: "title_title",
                      children: "Vitrine",
                    }),
                    g.jsx("h4", {
                      className: "desc_title",
                      children: "Sites Vitrine",
                    }),
                    g.jsxs("span", {
                      className: "price_tag",
                      children: [g.jsx("span", { children: "€" }), "700-1800"],
                    }),
                    g.jsx("hr", { className: "separation" }),
                    g.jsxs("div", {
                      className: "container_benefits",
                      children: [
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Référencement Local (SEO)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Technologies récentes",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item isnot",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-xmark",
                              }),
                            }),
                            " Espace d'administration",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Hébergement (1 an)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Nom de domaine",
                          ],
                        }),
                        g.jsx("hr", { className: "separation" }),
                        g.jsxs("div", {
                          className: "benefits_item is_special",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Correction des bugs (5 ans)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              g.jsx("div", {
                className: "translate__animation",
                children: g.jsxs("div", {
                  className: "prices__wrapper__box",
                  "data-aos-duration": "1100",
                  "data-aos": "fade-down",
                  children: [
                    g.jsx("h3", {
                      className: "title_title",
                      children: "Portfolio",
                    }),
                    g.jsx("h4", {
                      className: "desc_title",
                      children: "Sites de Portfolio",
                    }),
                    g.jsxs("span", {
                      className: "price_tag",
                      children: [g.jsx("span", { children: "€" }), "700-2500"],
                    }),
                    g.jsx("hr", { className: "separation" }),
                    g.jsxs("div", {
                      className: "container_benefits",
                      children: [
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Référencement Local (SEO)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Technologies récentes",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Espace d'administration",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Hébergement (1 an)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Nom de domaine",
                          ],
                        }),
                        g.jsx("hr", { className: "separation" }),
                        g.jsxs("div", {
                          className: "benefits_item is_special",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Correction des bugs (5 ans)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              g.jsx("div", {
                className: "translate__animation",
                children: g.jsxs("div", {
                  className: "prices__wrapper__box",
                  "data-aos-duration": "1400",
                  "data-aos": "fade-down",
                  children: [
                    g.jsx("h3", {
                      className: "title_title",
                      children: "E-Commerce",
                    }),
                    g.jsx("h4", {
                      className: "desc_title",
                      children: "Sites E-Commerce",
                    }),
                    g.jsxs("span", {
                      className: "price_tag",
                      children: [g.jsx("span", { children: "€" }), "1000-4000"],
                    }),
                    g.jsx("hr", { className: "separation" }),
                    g.jsxs("div", {
                      className: "container_benefits",
                      children: [
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Référencement Local (SEO)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Technologies récentes",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Espace d'administration",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Hébergement (1 an)",
                          ],
                        }),
                        g.jsxs("div", {
                          className: "benefits_item is",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Nom de domaine",
                          ],
                        }),
                        g.jsx("hr", { className: "separation" }),
                        g.jsxs("div", {
                          className: "benefits_item is_special",
                          children: [
                            g.jsx("span", {
                              children: g.jsx("i", {
                                className: "fa fa-check",
                              }),
                            }),
                            " Correction des bugs (5 ans)",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function qr() {}
function AS() {
  const [e, t] = P.useState(""),
    [n, r] = P.useState(""),
    [i, s] = P.useState(""),
    [l, o] = P.useState(""),
    [a, u] = P.useState(""),
    c = async (d) => {
      d.preventDefault(),
        document.getElementById("emailForm").submit(),
        u(
          g.jsx(g.Fragment, {
            children: g.jsxs("p", {
              children: [
                g.jsx("i", { className: "fa fa-check-circle alert-green" }),
                " Hey ",
                l,
                ", votre email a bien été envoyé! Je vais tâcher de répondre dans les plus brefs délais.",
              ],
            }),
          })
        ),
        o(""),
        t(""),
        r(""),
        s("");
    };
  return g.jsxs(g.Fragment, {
    children: [
      g.jsx(Ui, {}),
      g.jsx("section", {
        className: "section",
        children: g.jsx("div", {
          className: "wrapper__contact",
          children: g.jsxs("form", {
            id: "emailForm",
            action: "https://formsubmit.co/yael.brinkert@gmail.com",
            method: "POST",
            onSubmit: c,
            "data-aos": "zoom-in-up",
            "data-aos-duration": "400",
            children: [
              g.jsx("h2", { children: "Me contacter" }),
              g.jsx("div", {
                className: "emailForm__item",
                "data-aos": "fade-left",
                "data-aos-duration": "600",
                children: g.jsx("input", {
                  placeholder: "Prénom",
                  type: "text",
                  name: "name",
                  value: l,
                  onChange: (d) => o(d.target.value),
                  required: !0,
                }),
              }),
              g.jsx("div", {
                className: "emailForm__item",
                "data-aos": "fade-left",
                "data-aos-duration": "700",
                children: g.jsx("input", {
                  placeholder: "E-mail",
                  type: "email",
                  name: "email",
                  value: e,
                  onChange: (d) => t(d.target.value),
                  required: !0,
                }),
              }),
              g.jsx("div", {
                className: "emailForm__item",
                "data-aos": "fade-left",
                "data-aos-duration": "800",
                children: g.jsx("input", {
                  type: "text",
                  placeholder: "Sujet",
                  name: "subject",
                  value: n,
                  onChange: (d) => r(d.target.value),
                  required: !0,
                }),
              }),
              g.jsx("div", {
                className: "emailForm__item",
                "data-aos": "fade-left",
                "data-aos-duration": "900",
                children: g.jsx("textarea", {
                  placeholder: "Il était une fois un petit poussin...",
                  name: "message",
                  value: i,
                  onChange: (d) => s(d.target.value),
                  rows: "4",
                  cols: "50",
                  required: !0,
                }),
              }),
              g.jsx("div", {
                className: "emailForm__item",
                "data-aos": "fade-left",
                "data-aos-duration": "1000",
                children: g.jsx("button", {
                  type: "submit",
                  children: "Envoyer",
                }),
              }),
              a,
            ],
          }),
        }),
      }),
    ],
  });
}
var FS = 4,
  BS = 0.001,
  $S = 1e-7,
  US = 10,
  ri = 11,
  gs = 1 / (ri - 1),
  VS = typeof Float32Array == "function";
function Kh(e, t) {
  return 1 - 3 * t + 3 * e;
}
function qh(e, t) {
  return 3 * t - 6 * e;
}
function Zh(e) {
  return 3 * e;
}
function pl(e, t, n) {
  return ((Kh(t, n) * e + qh(t, n)) * e + Zh(t)) * e;
}
function Jh(e, t, n) {
  return 3 * Kh(t, n) * e * e + 2 * qh(t, n) * e + Zh(t);
}
function HS(e, t, n, r, i) {
  var s,
    l,
    o = 0;
  do (l = t + (n - t) / 2), (s = pl(l, r, i) - e), s > 0 ? (n = l) : (t = l);
  while (Math.abs(s) > $S && ++o < US);
  return l;
}
function WS(e, t, n, r) {
  for (var i = 0; i < FS; ++i) {
    var s = Jh(t, n, r);
    if (s === 0) return t;
    var l = pl(t, n, r) - e;
    t -= l / s;
  }
  return t;
}
function YS(e) {
  return e;
}
var XS = function (t, n, r, i) {
  if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (t === n && r === i) return YS;
  for (var s = VS ? new Float32Array(ri) : new Array(ri), l = 0; l < ri; ++l)
    s[l] = pl(l * gs, t, r);
  function o(a) {
    for (var u = 0, c = 1, d = ri - 1; c !== d && s[c] <= a; ++c) u += gs;
    --c;
    var f = (a - s[c]) / (s[c + 1] - s[c]),
      w = u + f * gs,
      v = Jh(w, t, r);
    return v >= BS ? WS(a, w, t, r) : v === 0 ? w : HS(a, u, u + gs, t, r);
  }
  return function (u) {
    return u === 0 ? 0 : u === 1 ? 1 : pl(o(u), n, i);
  };
};
const zd = Mr(XS);
var Nu = function (t) {
  (this.startX = t.startX),
    (this.startY = t.startY),
    (this.endX = t.endX),
    (this.endY = t.endY),
    (this.totalX = this.endX - this.startX),
    (this.totalY = this.endY - this.startY),
    (this.startMultiplierX = t.startMultiplierX || 1),
    (this.endMultiplierX = t.endMultiplierX || 1),
    (this.startMultiplierY = t.startMultiplierY || 1),
    (this.endMultiplierY = t.endMultiplierY || 1);
};
function gn() {
  return (
    (gn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    gn.apply(this, arguments)
  );
}
var hl;
(function (e) {
  (e.speed = "speed"),
    (e.translateX = "translateX"),
    (e.translateY = "translateY"),
    (e.rotate = "rotate"),
    (e.rotateX = "rotateX"),
    (e.rotateY = "rotateY"),
    (e.rotateZ = "rotateZ"),
    (e.scale = "scale"),
    (e.scaleX = "scaleX"),
    (e.scaleY = "scaleY"),
    (e.scaleZ = "scaleZ"),
    (e.opacity = "opacity");
})(hl || (hl = {}));
var In;
(function (e) {
  (e.px = "px"), (e["%"] = "%"), (e.vh = "vh"), (e.vw = "vw");
})(In || (In = {}));
var hi;
(function (e) {
  (e.deg = "deg"), (e.turn = "turn"), (e.rad = "rad");
})(hi || (hi = {}));
var _o;
(function (e) {
  e[""] = "";
})(_o || (_o = {}));
var _t;
(function (e) {
  (e.vertical = "vertical"), (e.horizontal = "horizontal");
})(_t || (_t = {}));
var Dd;
(function (e) {
  (e.ease = "ease"),
    (e.easeIn = "easeIn"),
    (e.easeOut = "easeOut"),
    (e.easeInOut = "easeInOut"),
    (e.easeInQuad = "easeInQuad"),
    (e.easeInCubic = "easeInCubic"),
    (e.easeInQuart = "easeInQuart"),
    (e.easeInQuint = "easeInQuint"),
    (e.easeInSine = "easeInSine"),
    (e.easeInExpo = "easeInExpo"),
    (e.easeInCirc = "easeInCirc"),
    (e.easeOutQuad = "easeOutQuad"),
    (e.easeOutCubic = "easeOutCubic"),
    (e.easeOutQuart = "easeOutQuart"),
    (e.easeOutQuint = "easeOutQuint"),
    (e.easeOutSine = "easeOutSine"),
    (e.easeOutExpo = "easeOutExpo"),
    (e.easeOutCirc = "easeOutCirc"),
    (e.easeInOutQuad = "easeInOutQuad"),
    (e.easeInOutCubic = "easeInOutCubic"),
    (e.easeInOutQuart = "easeInOutQuart"),
    (e.easeInOutQuint = "easeInOutQuint"),
    (e.easeInOutSine = "easeInOutSine"),
    (e.easeInOutExpo = "easeInOutExpo"),
    (e.easeInOutCirc = "easeInOutCirc"),
    (e.easeInBack = "easeInBack"),
    (e.easeOutBack = "easeOutBack"),
    (e.easeInOutBack = "easeInOutBack");
})(Dd || (Dd = {}));
var Ad = 0;
function GS() {
  return ++Ad, Ad;
}
var QS = (function () {
    function e(n) {
      var r = n.el.getBoundingClientRect();
      if (n.view.scrollContainer) {
        var i = n.view.scrollContainer.getBoundingClientRect();
        r = gn({}, r, {
          top: r.top - i.top,
          right: r.right - i.left,
          bottom: r.bottom - i.top,
          left: r.left - i.left,
        });
      }
      (this.height = n.el.offsetHeight),
        (this.width = n.el.offsetWidth),
        (this.left = r.left),
        (this.right = r.right),
        (this.top = r.top),
        (this.bottom = r.bottom),
        n.rootMargin && this._setRectWithRootMargin(n.rootMargin);
    }
    var t = e.prototype;
    return (
      (t._setRectWithRootMargin = function (r) {
        var i = r.top + r.bottom,
          s = r.left + r.right;
        (this.top -= r.top),
          (this.right += r.right),
          (this.bottom += r.bottom),
          (this.left -= r.left),
          (this.height += i),
          (this.width += s);
      }),
      e
    );
  })(),
  KS = [_o[""], In.px, In["%"], In.vh, In.vw, hi.deg, hi.turn, hi.rad];
function ys(e, t) {
  t === void 0 && (t = In["%"]);
  var n = { value: 0, unit: t };
  if (typeof e > "u") return n;
  var r = typeof e == "number" || typeof e == "string";
  if (!r)
    throw new Error(
      "Invalid value provided. Must provide a value as a string or number"
    );
  (e = String(e)),
    (n.value = parseFloat(e)),
    (n.unit = e.match(/[\d.\-+]*\s*(.*)/)[1] || t);
  var i = KS.includes(n.unit);
  if (!i) throw new Error("Invalid unit provided.");
  return n;
}
var Fd = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.42, 0, 1, 1],
  easeOut: [0, 0, 0.58, 1],
  easeInOut: [0.42, 0, 0.58, 1],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInOutExpo: [1, 0, 0, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55],
};
function em(e) {
  if (Array.isArray(e)) return zd(e[0], e[1], e[2], e[3]);
  if (typeof e == "string" && typeof Fd[e] < "u") {
    var t = Fd[e];
    return zd(t[0], t[1], t[2], t[3]);
  }
}
var qS = Object.values(hl),
  ZS = {
    speed: "px",
    translateX: "%",
    translateY: "%",
    rotate: "deg",
    rotateX: "deg",
    rotateY: "deg",
    rotateZ: "deg",
    scale: "",
    scaleX: "",
    scaleY: "",
    scaleZ: "",
    opacity: "",
  };
function Bd(e, t) {
  var n = {};
  return (
    qS.forEach(function (r) {
      var i = ZS[r];
      if (typeof (e == null ? void 0 : e[r]) == "number") {
        var s = e == null ? void 0 : e[r],
          l = (s || 0) * 10 + "px",
          o = (s || 0) * -10 + "px",
          a = ys(l),
          u = ys(o),
          c = { start: a.value, end: u.value, unit: a.unit };
        t === _t.vertical && (n.translateY = c),
          t === _t.horizontal && (n.translateX = c);
      }
      if (Array.isArray(e == null ? void 0 : e[r])) {
        var d = e == null ? void 0 : e[r];
        if (typeof d[0] < "u" && typeof d[1] < "u") {
          var f = ys(d == null ? void 0 : d[0], i),
            w = ys(d == null ? void 0 : d[1], i),
            v = em(d == null ? void 0 : d[2]);
          if (
            ((n[r] = { start: f.value, end: w.value, unit: f.unit, easing: v }),
            f.unit !== w.unit)
          )
            throw new Error(
              "Must provide matching units for the min and max offset values of each axis."
            );
        }
      }
    }),
    n
  );
}
function $d(e, t, n, r) {
  var i = n - e,
    s = i / t;
  return r && (s = r(s)), s;
}
function JS(e, t, n) {
  var r = n >= e && n <= t;
  return r;
}
function ex(e, t, n, r, i) {
  return ((n - t) * (e - r)) / (i - r) + t;
}
function tm(e, t) {
  var n = ex(
    typeof e.easing == "function" ? e.easing(t) : t,
    (e == null ? void 0 : e.start) || 0,
    (e == null ? void 0 : e.end) || 0,
    0,
    1
  );
  return { value: n, unit: e == null ? void 0 : e.unit };
}
var tx = Object.values(hl).filter(function (e) {
  return e !== "opacity";
});
function nx(e, t) {
  var n = Object.keys(t),
    r = n.includes("opacity"),
    i = "transform" + (r ? ",opacity" : "");
  e.style.willChange = i;
}
function rx(e, t, n) {
  if (n) {
    var r = sx(e, t),
      i = ix(e, t);
    (n.style.transform = r), (n.style.opacity = i);
  }
}
function ix(e, t) {
  var n = e.opacity && tm(e.opacity, t);
  if (typeof n > "u" || typeof n.value > "u" || typeof n.unit > "u") return "";
  var r = "" + n.value;
  return r;
}
function sx(e, t) {
  var n = tx.reduce(function (r, i) {
    var s = e[i] && tm(e[i], t);
    if (typeof s > "u" || typeof s.value > "u" || typeof s.unit > "u") return r;
    var l = i + "(" + s.value + s.unit + ")";
    return r + l;
  }, "");
  return n;
}
function Rs(e) {
  var t = e.el;
  t && ((t.style.transform = ""), (t.style.opacity = ""));
}
function lx(e, t, n, r) {
  var i = e.top - t.height,
    s = e.left - t.width,
    l = e.bottom,
    o = e.right;
  (s += n.x),
    (o += n.x),
    (i += n.y),
    (l += n.y),
    r &&
      (n.y + e.top < t.height && (i = 0),
      n.x + e.left < t.width && (s = 0),
      l > t.scrollHeight - t.height && (l = t.scrollHeight - t.height),
      o > t.scrollWidth - t.width && (o = t.scrollWidth - t.width));
  var a = new Nu({ startX: s, startY: i, endX: o, endY: l });
  return a;
}
function tr(e, t, n) {
  var r = t > e,
    i = (Math.abs(e) + Math.abs(t)) * (r ? -1 : 1),
    s = n + i,
    l = Math.max(n / s, 1);
  return l;
}
function Ud(e, t) {
  var n = e.start,
    r = e.end,
    i = e.unit;
  if (i === "%") {
    var s = t / 100;
    (n = n * s), (r = r * s);
  }
  if (i === "vw") {
    var l = n / 100,
      o = r / 100;
    (n = window.innerWidth * l), (r = window.innerWidth * o);
  }
  if (i === "vh") {
    var a = n / 100,
      u = r / 100;
    (n = window.innerHeight * a), (r = window.innerHeight * u);
  }
  return { start: n, end: r };
}
var Vd = { start: 0, end: 0, unit: "" };
function ax(e, t, n, r, i, s) {
  var l = n.translateX || Vd,
    o = n.translateY || Vd,
    a = Ud(l, e.width),
    u = a.start,
    c = a.end,
    d = Ud(o, e.height),
    f = d.start,
    w = d.end,
    v = e.top - t.height,
    m = e.left - t.width,
    x = e.bottom,
    p = e.right,
    h = 1,
    y = 1;
  i === _t.vertical && ((h = tr(f, w, t.height + e.height)), (y = h));
  var E = 1,
    C = 1;
  if (
    (i === _t.horizontal && ((E = tr(u, c, t.width + e.width)), (C = E)),
    f < 0 && (v = v + f * h),
    w > 0 && (x = x + w * y),
    u < 0 && (m = m + u * E),
    c > 0 && (p = p + c * C),
    (m += r.x),
    (p += r.x),
    (v += r.y),
    (x += r.y),
    s)
  ) {
    var S = r.y + e.top < t.height,
      N = r.x + e.left < t.width,
      k = r.y + e.bottom > t.scrollHeight - t.height,
      M = r.x + e.right > t.scrollWidth - t.height;
    if (
      (S && k && ((h = 1), (y = 1), (v = 0), (x = t.scrollHeight - t.height)),
      N && M && ((E = 1), (C = 1), (m = 0), (p = t.scrollWidth - t.width)),
      !S && k)
    ) {
      (v = e.top - t.height + r.y), (x = t.scrollHeight - t.height);
      var j = x - v;
      (h = tr(f, w, j)), (y = 1), f < 0 && (v = v + f * h);
    }
    if (!N && M) {
      (m = e.left - t.width + r.x), (p = t.scrollWidth - t.width);
      var R = p - m;
      (E = tr(u, c, R)), (C = 1), u < 0 && (m = m + u * E);
    }
    if (S && !k) {
      (v = 0), (x = e.bottom + r.y);
      var D = x - v;
      (h = 1), (y = tr(f, w, D)), w > 0 && (x = x + w * y);
    }
    if (N && !M) {
      (m = 0), (p = e.right + r.x);
      var A = p - m;
      (E = 1), (C = tr(u, c, A)), c > 0 && (p = p + c * C);
    }
  }
  var B = new Nu({
    startX: m,
    startY: v,
    endX: p,
    endY: x,
    startMultiplierX: E,
    endMultiplierX: C,
    startMultiplierY: h,
    endMultiplierY: y,
  });
  return B;
}
function ox(e, t) {
  var n = gn({}, e);
  return (
    n.translateX &&
      (n.translateX = gn({}, e.translateX, {
        start: n.translateX.start * t.startMultiplierX,
        end: n.translateX.end * t.endMultiplierX,
      })),
    n.translateY &&
      (n.translateY = gn({}, e.translateY, {
        start: n.translateY.start * t.startMultiplierY,
        end: n.translateY.end * t.endMultiplierY,
      })),
    n
  );
}
function ux(e, t, n) {
  return e.rootMargin || e.targetElement || e.shouldDisableScalingTranslations
    ? !1
    : !!(
        (t.translateX && n === _t.horizontal) ||
        (t.translateY && n === _t.vertical)
      );
}
var Hd = function (t, n, r) {
    return Math.min(Math.max(t, n), r);
  },
  cx = (function () {
    function e(n) {
      (this.el = n.el),
        (this.props = n.props),
        (this.scrollAxis = n.scrollAxis),
        (this.disabledParallaxController = n.disabledParallaxController || !1),
        (this.id = GS()),
        (this.effects = Bd(this.props, this.scrollAxis)),
        (this.isInView = null),
        (this.progress = 0),
        this._setElementEasing(n.props.easing),
        nx(n.el, this.effects);
    }
    var t = e.prototype;
    return (
      (t.updateProps = function (r) {
        return (
          (this.props = gn({}, this.props, r)),
          (this.effects = Bd(r, this.scrollAxis)),
          this._setElementEasing(r.easing),
          this
        );
      }),
      (t.setCachedAttributes = function (r, i) {
        Rs(this),
          (this.rect = new QS({
            el: this.props.targetElement || this.el,
            rootMargin: this.props.rootMargin,
            view: r,
          }));
        var s = ux(this.props, this.effects, this.scrollAxis);
        return typeof this.props.startScroll == "number" &&
          typeof this.props.endScroll == "number"
          ? ((this.limits = new Nu({
              startX: this.props.startScroll,
              startY: this.props.startScroll,
              endX: this.props.endScroll,
              endY: this.props.endScroll,
            })),
            this._setElementStyles(),
            this)
          : (s
              ? ((this.limits = ax(
                  this.rect,
                  r,
                  this.effects,
                  i,
                  this.scrollAxis,
                  this.props.shouldAlwaysCompleteAnimation
                )),
                (this.scaledEffects = ox(this.effects, this.limits)))
              : (this.limits = lx(
                  this.rect,
                  r,
                  i,
                  this.props.shouldAlwaysCompleteAnimation
                )),
            this._setElementStyles(),
            this);
      }),
      (t._updateElementIsInView = function (r) {
        var i = this.isInView === null;
        r !== this.isInView &&
          (r
            ? this.props.onEnter && this.props.onEnter(this)
            : i ||
              (this._setFinalProgress(),
              this._setElementStyles(),
              this.props.onExit && this.props.onExit(this))),
          (this.isInView = r);
      }),
      (t._setFinalProgress = function () {
        var r = Hd(Math.round(this.progress), 0, 1);
        this._updateElementProgress(r);
      }),
      (t._setElementStyles = function () {
        if (!(this.props.disabled || this.disabledParallaxController)) {
          var r = this.scaledEffects || this.effects;
          rx(r, this.progress, this.el);
        }
      }),
      (t._updateElementProgress = function (r) {
        (this.progress = r),
          this.props.onProgressChange &&
            this.props.onProgressChange(this.progress),
          this.props.onChange && this.props.onChange(this);
      }),
      (t._setElementEasing = function (r) {
        this.easing = em(r);
      }),
      (t.updateElementOptions = function (r) {
        (this.scrollAxis = r.scrollAxis),
          (this.disabledParallaxController =
            r.disabledParallaxController || !1);
      }),
      (t.updatePosition = function (r) {
        if (!this.limits) return this;
        var i = this.scrollAxis === _t.vertical,
          s = this.isInView === null,
          l = i ? this.limits.startY : this.limits.startX,
          o = i ? this.limits.endY : this.limits.endX,
          a = i ? this.limits.totalY : this.limits.totalX,
          u = i ? r.y : r.x,
          c = JS(l, o, u);
        if ((this._updateElementIsInView(c), c)) {
          var d = $d(l, a, u, this.easing);
          this._updateElementProgress(d), this._setElementStyles();
        } else
          s &&
            ((this.progress = Hd(Math.round($d(l, a, u, this.easing)), 0, 1)),
            this._setElementStyles());
        return this;
      }),
      e
    );
  })(),
  Wd = (function () {
    function e(n) {
      (this.scrollContainer = n.scrollContainer),
        (this.width = n.width),
        (this.height = n.height),
        (this.scrollHeight = n.scrollHeight),
        (this.scrollWidth = n.scrollWidth);
    }
    var t = e.prototype;
    return (
      (t.hasChanged = function (r) {
        return (
          r.width !== this.width ||
          r.height !== this.height ||
          r.scrollWidth !== this.scrollWidth ||
          r.scrollHeight !== this.scrollHeight
        );
      }),
      (t.setSize = function (r) {
        return (
          (this.width = r.width),
          (this.height = r.height),
          (this.scrollHeight = r.scrollHeight),
          (this.scrollWidth = r.scrollWidth),
          this
        );
      }),
      e
    );
  })(),
  dx = (function () {
    function e(n, r) {
      (this.x = n), (this.y = r), (this.dx = 0), (this.dy = 0);
    }
    var t = e.prototype;
    return (
      (t.setScroll = function (r, i) {
        return (
          (this.dx = r - this.x),
          (this.dy = i - this.y),
          (this.x = r),
          (this.y = i),
          this
        );
      }),
      e
    );
  })();
function fx() {
  var e = !1;
  try {
    var t = Object.defineProperty({}, "passive", {
      get: function () {
        return (e = !0), !0;
      },
    });
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
}
var px = (function () {
    function e(n) {
      var r = n.scrollAxis,
        i = r === void 0 ? _t.vertical : r,
        s = n.scrollContainer,
        l = n.disabled,
        o = l === void 0 ? !1 : l;
      (this.disabled = o),
        (this.scrollAxis = i),
        (this.elements = []),
        (this._hasScrollContainer = !!s),
        (this.viewEl = s ?? window);
      var a = this._getScrollPosition(),
        u = a[0],
        c = a[1];
      (this.scroll = new dx(u, c)),
        (this.view = new Wd({
          width: 0,
          height: 0,
          scrollWidth: 0,
          scrollHeight: 0,
          scrollContainer: this._hasScrollContainer ? s : void 0,
        })),
        (this._ticking = !1),
        (this._supportsPassive = fx()),
        this._bindAllMethods(),
        !this.disabled &&
          (this._addListeners(this.viewEl),
          this._addResizeObserver(),
          this._setViewSize());
    }
    e.init = function (r) {
      var i = typeof window < "u";
      if (!i)
        throw new Error(
          "Looks like ParallaxController.init() was called on the server. This method must be called on the client."
        );
      return new e(r);
    };
    var t = e.prototype;
    return (
      (t._bindAllMethods = function () {
        var r = this;
        [
          "_addListeners",
          "_removeListeners",
          "_getScrollPosition",
          "_handleScroll",
          "_handleUpdateCache",
          "_updateAllElements",
          "_updateElementPosition",
          "_setViewSize",
          "_addResizeObserver",
          "_checkIfViewHasChanged",
          "_getViewParams",
          "getElements",
          "createElement",
          "removeElementById",
          "resetElementStyles",
          "updateElementPropsById",
          "update",
          "updateScrollContainer",
          "destroy",
        ].forEach(function (i) {
          r[i] = r[i].bind(r);
        });
      }),
      (t._addListeners = function (r) {
        r.addEventListener(
          "scroll",
          this._handleScroll,
          this._supportsPassive ? { passive: !0 } : !1
        ),
          window.addEventListener("resize", this._handleUpdateCache, !1),
          window.addEventListener("blur", this._handleUpdateCache, !1),
          window.addEventListener("focus", this._handleUpdateCache, !1),
          window.addEventListener("load", this._handleUpdateCache, !1);
      }),
      (t._removeListeners = function (r) {
        var i;
        r.removeEventListener("scroll", this._handleScroll, !1),
          window.removeEventListener("resize", this._handleUpdateCache, !1),
          window.removeEventListener("blur", this._handleUpdateCache, !1),
          window.removeEventListener("focus", this._handleUpdateCache, !1),
          window.removeEventListener("load", this._handleUpdateCache, !1),
          (i = this._resizeObserver) == null || i.disconnect();
      }),
      (t._addResizeObserver = function () {
        var r = this;
        try {
          var i = this._hasScrollContainer
            ? this.viewEl
            : document.documentElement;
          (this._resizeObserver = new ResizeObserver(function () {
            return r.update();
          })),
            this._resizeObserver.observe(i);
        } catch {
          console.warn(
            "Failed to create the resize observer in the ParallaxContoller"
          );
        }
      }),
      (t._getScrollPosition = function () {
        var r = this._hasScrollContainer
            ? this.viewEl.scrollLeft
            : window.pageXOffset,
          i = this._hasScrollContainer
            ? this.viewEl.scrollTop
            : window.pageYOffset;
        return [r, i];
      }),
      (t._handleScroll = function () {
        var r,
          i = this._getScrollPosition(),
          s = i[0],
          l = i[1];
        this.scroll.setScroll(s, l),
          !this._ticking &&
            ((r = this.elements) == null ? void 0 : r.length) > 0 &&
            ((this._ticking = !0),
            window.requestAnimationFrame(this._updateAllElements));
      }),
      (t._handleUpdateCache = function () {
        this._setViewSize(), this._updateAllElements({ updateCache: !0 });
      }),
      (t._updateAllElements = function (r) {
        var i = this,
          s = r === void 0 ? {} : r,
          l = s.updateCache;
        this.elements &&
          this.elements.forEach(function (o) {
            l && o.setCachedAttributes(i.view, i.scroll),
              i._updateElementPosition(o);
          }),
          (this._ticking = !1);
      }),
      (t._updateElementPosition = function (r) {
        r.props.disabled || this.disabled || r.updatePosition(this.scroll);
      }),
      (t._getViewParams = function () {
        if (this._hasScrollContainer) {
          var r = this.viewEl.offsetWidth,
            i = this.viewEl.offsetHeight,
            s = this.viewEl.scrollHeight,
            l = this.viewEl.scrollWidth;
          return this.view.setSize({
            width: r,
            height: i,
            scrollHeight: s,
            scrollWidth: l,
          });
        }
        var o = document.documentElement,
          a = window.innerWidth || o.clientWidth,
          u = window.innerHeight || o.clientHeight,
          c = o.scrollHeight,
          d = o.scrollWidth;
        return { width: a, height: u, scrollHeight: c, scrollWidth: d };
      }),
      (t._setViewSize = function () {
        return this.view.setSize(this._getViewParams());
      }),
      (t._checkIfViewHasChanged = function () {
        return this.view.hasChanged(this._getViewParams());
      }),
      (t.getElements = function () {
        return this.elements;
      }),
      (t.createElement = function (r) {
        var i = new cx(
          gn({}, r, {
            scrollAxis: this.scrollAxis,
            disabledParallaxController: this.disabled,
          })
        );
        return (
          i.setCachedAttributes(this.view, this.scroll),
          (this.elements = this.elements ? [].concat(this.elements, [i]) : [i]),
          this._updateElementPosition(i),
          this._checkIfViewHasChanged() && this.update(),
          i
        );
      }),
      (t.removeElementById = function (r) {
        this.elements &&
          (this.elements = this.elements.filter(function (i) {
            return i.id !== r;
          }));
      }),
      (t.updateElementPropsById = function (r, i) {
        this.elements &&
          (this.elements = this.elements.map(function (s) {
            return s.id === r ? s.updateProps(i) : s;
          })),
          this.update();
      }),
      (t.resetElementStyles = function (r) {
        Rs(r);
      }),
      (t.update = function () {
        var r = this._getScrollPosition(),
          i = r[0],
          s = r[1];
        this.scroll.setScroll(i, s),
          this._setViewSize(),
          this._updateAllElements({ updateCache: !0 });
      }),
      (t.updateScrollContainer = function (r) {
        this._removeListeners(this.viewEl),
          (this.viewEl = r),
          (this._hasScrollContainer = !!r),
          (this.view = new Wd({
            width: 0,
            height: 0,
            scrollWidth: 0,
            scrollHeight: 0,
            scrollContainer: r,
          })),
          this._setViewSize(),
          this._addListeners(this.viewEl),
          this._updateAllElements({ updateCache: !0 });
      }),
      (t.disableParallaxController = function () {
        (this.disabled = !0),
          this._removeListeners(this.viewEl),
          this.elements &&
            this.elements.forEach(function (r) {
              return Rs(r);
            });
      }),
      (t.enableParallaxController = function () {
        var r = this;
        (this.disabled = !1),
          this.elements &&
            this.elements.forEach(function (i) {
              return i.updateElementOptions({
                disabledParallaxController: !1,
                scrollAxis: r.scrollAxis,
              });
            }),
          this._addListeners(this.viewEl),
          this._addResizeObserver(),
          this._setViewSize();
      }),
      (t.disableAllElements = function () {
        console.warn("deprecated: use disableParallaxController() instead"),
          this.elements &&
            (this.elements = this.elements.map(function (r) {
              return r.updateProps({ disabled: !0 });
            })),
          this.update();
      }),
      (t.enableAllElements = function () {
        console.warn("deprecated: use enableParallaxController() instead"),
          this.elements &&
            (this.elements = this.elements.map(function (r) {
              return r.updateProps({ disabled: !1 });
            })),
          this.update();
      }),
      (t.destroy = function () {
        this._removeListeners(this.viewEl),
          this.elements &&
            this.elements.forEach(function (r) {
              return Rs(r);
            }),
          (this.elements = void 0);
      }),
      e
    );
  })(),
  hx = Se.createContext(null),
  mx = function (t) {
    var n = typeof window > "u";
    return n ? null : px.init(t);
  };
function vx(e) {
  var t = P.useRef(null);
  return (
    t.current ||
      (t.current = mx({
        scrollAxis: e.scrollAxis || _t.vertical,
        scrollContainer: e.scrollContainer,
        disabled: e.isDisabled,
      })),
    P.useEffect(
      function () {
        e.scrollContainer &&
          t.current &&
          t.current.updateScrollContainer(e.scrollContainer);
      },
      [e.scrollContainer, t.current]
    ),
    P.useEffect(
      function () {
        e.isDisabled && t.current && t.current.disableParallaxController(),
          !e.isDisabled && t.current && t.current.enableParallaxController();
      },
      [e.isDisabled, t.current]
    ),
    P.useEffect(function () {
      return function () {
        t != null && t.current && (t == null || t.current.destroy());
      };
    }, []),
    Se.createElement(hx.Provider, { value: t.current }, e.children)
  );
}
const gx = dy([
  { path: "/", element: g.jsx(Kw, {}), errorElement: g.jsx(qr, {}) },
  { path: "/About", element: g.jsx(Zw, {}), errorElement: g.jsx(qr, {}) },
  { path: "/Portfolio", element: g.jsx(zS, {}), errorElement: g.jsx(qr, {}) },
  { path: "/Pricing", element: g.jsx(DS, {}), errorElement: g.jsx(qr, {}) },
  { path: "/Contact", element: g.jsx(AS, {}), errorElement: g.jsx(qr, {}) },
]);
lh(document.getElementById("root")).render(
  g.jsx(vx, {
    children: g.jsx(Ow, {
      children: g.jsx(P.StrictMode, { children: g.jsx(wy, { router: gx }) }),
    }),
  })
);
