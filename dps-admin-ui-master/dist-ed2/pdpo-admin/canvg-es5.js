(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvg"], {
    /***/
    "/qmn":
    /*!**********************************************************************!*\
      !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
      \**********************************************************************/

    /*! no static exports found */

    /***/
    function qmn(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = global.Promise;
      /***/
    },

    /***/
    "0B/8":
    /*!*************************************************************!*\
      !*** ./node_modules/svg-pathdata/lib/SVGPathData.module.js ***!
      \*************************************************************/

    /*! exports provided: COMMAND_ARG_COUNTS, SVGPathData, SVGPathDataParser, SVGPathDataTransformer, encodeSVGPath */

    /***/
    function B8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COMMAND_ARG_COUNTS", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SVGPathData", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SVGPathDataParser", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SVGPathDataTransformer", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeSVGPath", function () {
        return e;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */


      var _t = function t(r, e) {
        return (_t = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, r) {
          t.__proto__ = r;
        } || function (t, r) {
          for (var e in r) {
            Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
          }
        })(r, e);
      };

      function r(r, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function i() {
          this.constructor = r;
        }

        _t(r, e), r.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
      }

      function e(t) {
        var r = "";
        Array.isArray(t) || (t = [t]);

        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.type === _.CLOSE_PATH) r += "z";else if (i.type === _.HORIZ_LINE_TO) r += (i.relative ? "h" : "H") + i.x;else if (i.type === _.VERT_LINE_TO) r += (i.relative ? "v" : "V") + i.y;else if (i.type === _.MOVE_TO) r += (i.relative ? "m" : "M") + i.x + " " + i.y;else if (i.type === _.LINE_TO) r += (i.relative ? "l" : "L") + i.x + " " + i.y;else if (i.type === _.CURVE_TO) r += (i.relative ? "c" : "C") + i.x1 + " " + i.y1 + " " + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;else if (i.type === _.SMOOTH_CURVE_TO) r += (i.relative ? "s" : "S") + i.x2 + " " + i.y2 + " " + i.x + " " + i.y;else if (i.type === _.QUAD_TO) r += (i.relative ? "q" : "Q") + i.x1 + " " + i.y1 + " " + i.x + " " + i.y;else if (i.type === _.SMOOTH_QUAD_TO) r += (i.relative ? "t" : "T") + i.x + " " + i.y;else {
            if (i.type !== _.ARC) throw new Error('Unexpected command type "' + i.type + '" at index ' + e + ".");
            r += (i.relative ? "a" : "A") + i.rX + " " + i.rY + " " + i.xRot + " " + +i.lArcFlag + " " + +i.sweepFlag + " " + i.x + " " + i.y;
          }
        }

        return r;
      }

      function i(t, r) {
        var e = t[0],
            i = t[1];
        return [e * Math.cos(r) - i * Math.sin(r), e * Math.sin(r) + i * Math.cos(r)];
      }

      function a() {
        for (var t = [], r = 0; r < arguments.length; r++) {
          t[r] = arguments[r];
        }

        for (var e = 0; e < t.length; e++) {
          if ("number" != typeof t[e]) throw new Error("assertNumbers arguments[" + e + "] is not a number. " + typeof t[e] + " == typeof " + t[e]);
        }

        return !0;
      }

      var n = Math.PI;

      function o(t, r, e) {
        t.lArcFlag = 0 === t.lArcFlag ? 0 : 1, t.sweepFlag = 0 === t.sweepFlag ? 0 : 1;
        var a = t.rX,
            o = t.rY,
            s = t.x,
            u = t.y;
        a = Math.abs(t.rX), o = Math.abs(t.rY);
        var h = i([(r - s) / 2, (e - u) / 2], -t.xRot / 180 * n),
            c = h[0],
            y = h[1],
            p = Math.pow(c, 2) / Math.pow(a, 2) + Math.pow(y, 2) / Math.pow(o, 2);
        1 < p && (a *= Math.sqrt(p), o *= Math.sqrt(p)), t.rX = a, t.rY = o;
        var m = Math.pow(a, 2) * Math.pow(y, 2) + Math.pow(o, 2) * Math.pow(c, 2),
            O = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(a, 2) * Math.pow(o, 2) - m) / m)),
            l = a * y / o * O,
            T = -o * c / a * O,
            v = i([l, T], t.xRot / 180 * n);
        t.cX = v[0] + (r + s) / 2, t.cY = v[1] + (e + u) / 2, t.phi1 = Math.atan2((y - T) / o, (c - l) / a), t.phi2 = Math.atan2((-y - T) / o, (-c - l) / a), 0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * n), 1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * n), t.phi1 *= 180 / n, t.phi2 *= 180 / n;
      }

      function s(t, r, e) {
        a(t, r, e);
        var i = t * t + r * r - e * e;
        if (0 > i) return [];
        if (0 === i) return [[t * e / (t * t + r * r), r * e / (t * t + r * r)]];
        var n = Math.sqrt(i);
        return [[(t * e + r * n) / (t * t + r * r), (r * e - t * n) / (t * t + r * r)], [(t * e - r * n) / (t * t + r * r), (r * e + t * n) / (t * t + r * r)]];
      }

      var u,
          h = Math.PI / 180;

      function c(t, r, e) {
        return (1 - e) * t + e * r;
      }

      function y(t, r, e, i) {
        return t + Math.cos(i / 180 * n) * r + Math.sin(i / 180 * n) * e;
      }

      function p(t, r, e, i) {
        var a = 1e-6,
            n = r - t,
            o = e - r,
            s = 3 * n + 3 * (i - e) - 6 * o,
            u = 6 * (o - n),
            h = 3 * n;
        return Math.abs(s) < a ? [-h / u] : function (t, r, e) {
          void 0 === e && (e = 1e-6);
          var i = t * t / 4 - r;
          if (i < -e) return [];
          if (i <= e) return [-t / 2];
          var a = Math.sqrt(i);
          return [-t / 2 - a, -t / 2 + a];
        }(u / s, h / s, a);
      }

      function m(t, r, e, i, a) {
        var n = 1 - a;
        return t * (n * n * n) + r * (3 * n * n * a) + e * (3 * n * a * a) + i * (a * a * a);
      }

      !function (t) {
        function r() {
          return u(function (t, r, e) {
            return t.relative && (void 0 !== t.x1 && (t.x1 += r), void 0 !== t.y1 && (t.y1 += e), void 0 !== t.x2 && (t.x2 += r), void 0 !== t.y2 && (t.y2 += e), void 0 !== t.x && (t.x += r), void 0 !== t.y && (t.y += e), t.relative = !1), t;
          });
        }

        function e() {
          var t = NaN,
              r = NaN,
              e = NaN,
              i = NaN;
          return u(function (a, n, o) {
            return a.type & _.SMOOTH_CURVE_TO && (a.type = _.CURVE_TO, t = isNaN(t) ? n : t, r = isNaN(r) ? o : r, a.x1 = a.relative ? n - t : 2 * n - t, a.y1 = a.relative ? o - r : 2 * o - r), a.type & _.CURVE_TO ? (t = a.relative ? n + a.x2 : a.x2, r = a.relative ? o + a.y2 : a.y2) : (t = NaN, r = NaN), a.type & _.SMOOTH_QUAD_TO && (a.type = _.QUAD_TO, e = isNaN(e) ? n : e, i = isNaN(i) ? o : i, a.x1 = a.relative ? n - e : 2 * n - e, a.y1 = a.relative ? o - i : 2 * o - i), a.type & _.QUAD_TO ? (e = a.relative ? n + a.x1 : a.x1, i = a.relative ? o + a.y1 : a.y1) : (e = NaN, i = NaN), a;
          });
        }

        function n() {
          var t = NaN,
              r = NaN;
          return u(function (e, i, a) {
            if (e.type & _.SMOOTH_QUAD_TO && (e.type = _.QUAD_TO, t = isNaN(t) ? i : t, r = isNaN(r) ? a : r, e.x1 = e.relative ? i - t : 2 * i - t, e.y1 = e.relative ? a - r : 2 * a - r), e.type & _.QUAD_TO) {
              t = e.relative ? i + e.x1 : e.x1, r = e.relative ? a + e.y1 : e.y1;
              var n = e.x1,
                  o = e.y1;
              e.type = _.CURVE_TO, e.x1 = ((e.relative ? 0 : i) + 2 * n) / 3, e.y1 = ((e.relative ? 0 : a) + 2 * o) / 3, e.x2 = (e.x + 2 * n) / 3, e.y2 = (e.y + 2 * o) / 3;
            } else t = NaN, r = NaN;

            return e;
          });
        }

        function u(t) {
          var r = 0,
              e = 0,
              i = NaN,
              a = NaN;
          return function (n) {
            if (isNaN(i) && !(n.type & _.MOVE_TO)) throw new Error("path must start with moveto");
            var o = t(n, r, e, i, a);
            return n.type & _.CLOSE_PATH && (r = i, e = a), void 0 !== n.x && (r = n.relative ? r + n.x : n.x), void 0 !== n.y && (e = n.relative ? e + n.y : n.y), n.type & _.MOVE_TO && (i = r, a = e), o;
          };
        }

        function O(t, r, e, i, n, o) {
          return a(t, r, e, i, n, o), u(function (a, s, u, h) {
            var c = a.x1,
                y = a.x2,
                p = a.relative && !isNaN(h),
                m = void 0 !== a.x ? a.x : p ? 0 : s,
                O = void 0 !== a.y ? a.y : p ? 0 : u;

            function l(t) {
              return t * t;
            }

            a.type & _.HORIZ_LINE_TO && 0 !== r && (a.type = _.LINE_TO, a.y = a.relative ? 0 : u), a.type & _.VERT_LINE_TO && 0 !== e && (a.type = _.LINE_TO, a.x = a.relative ? 0 : s), void 0 !== a.x && (a.x = a.x * t + O * e + (p ? 0 : n)), void 0 !== a.y && (a.y = m * r + a.y * i + (p ? 0 : o)), void 0 !== a.x1 && (a.x1 = a.x1 * t + a.y1 * e + (p ? 0 : n)), void 0 !== a.y1 && (a.y1 = c * r + a.y1 * i + (p ? 0 : o)), void 0 !== a.x2 && (a.x2 = a.x2 * t + a.y2 * e + (p ? 0 : n)), void 0 !== a.y2 && (a.y2 = y * r + a.y2 * i + (p ? 0 : o));
            var T = t * i - r * e;
            if (void 0 !== a.xRot && (1 !== t || 0 !== r || 0 !== e || 1 !== i)) if (0 === T) delete a.rX, delete a.rY, delete a.xRot, delete a.lArcFlag, delete a.sweepFlag, a.type = _.LINE_TO;else {
              var v = a.xRot * Math.PI / 180,
                  f = Math.sin(v),
                  N = Math.cos(v),
                  x = 1 / l(a.rX),
                  d = 1 / l(a.rY),
                  E = l(N) * x + l(f) * d,
                  A = 2 * f * N * (x - d),
                  C = l(f) * x + l(N) * d,
                  M = E * i * i - A * r * i + C * r * r,
                  R = A * (t * i + r * e) - 2 * (E * e * i + C * t * r),
                  g = E * e * e - A * t * e + C * t * t,
                  I = (Math.atan2(R, M - g) + Math.PI) % Math.PI / 2,
                  S = Math.sin(I),
                  L = Math.cos(I);
              a.rX = Math.abs(T) / Math.sqrt(M * l(L) + R * S * L + g * l(S)), a.rY = Math.abs(T) / Math.sqrt(M * l(S) - R * S * L + g * l(L)), a.xRot = 180 * I / Math.PI;
            }
            return void 0 !== a.sweepFlag && 0 > T && (a.sweepFlag = +!a.sweepFlag), a;
          });
        }

        function l() {
          return function (t) {
            var r = {};

            for (var e in t) {
              r[e] = t[e];
            }

            return r;
          };
        }

        t.ROUND = function (t) {
          function r(r) {
            return Math.round(r * t) / t;
          }

          return void 0 === t && (t = 1e13), a(t), function (t) {
            return void 0 !== t.x1 && (t.x1 = r(t.x1)), void 0 !== t.y1 && (t.y1 = r(t.y1)), void 0 !== t.x2 && (t.x2 = r(t.x2)), void 0 !== t.y2 && (t.y2 = r(t.y2)), void 0 !== t.x && (t.x = r(t.x)), void 0 !== t.y && (t.y = r(t.y)), void 0 !== t.rX && (t.rX = r(t.rX)), void 0 !== t.rY && (t.rY = r(t.rY)), t;
          };
        }, t.TO_ABS = r, t.TO_REL = function () {
          return u(function (t, r, e) {
            return t.relative || (void 0 !== t.x1 && (t.x1 -= r), void 0 !== t.y1 && (t.y1 -= e), void 0 !== t.x2 && (t.x2 -= r), void 0 !== t.y2 && (t.y2 -= e), void 0 !== t.x && (t.x -= r), void 0 !== t.y && (t.y -= e), t.relative = !0), t;
          });
        }, t.NORMALIZE_HVZ = function (t, r, e) {
          return void 0 === t && (t = !0), void 0 === r && (r = !0), void 0 === e && (e = !0), u(function (i, a, n, o, s) {
            if (isNaN(o) && !(i.type & _.MOVE_TO)) throw new Error("path must start with moveto");
            return r && i.type & _.HORIZ_LINE_TO && (i.type = _.LINE_TO, i.y = i.relative ? 0 : n), e && i.type & _.VERT_LINE_TO && (i.type = _.LINE_TO, i.x = i.relative ? 0 : a), t && i.type & _.CLOSE_PATH && (i.type = _.LINE_TO, i.x = i.relative ? o - a : o, i.y = i.relative ? s - n : s), i.type & _.ARC && (0 === i.rX || 0 === i.rY) && (i.type = _.LINE_TO, delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag), i;
          });
        }, t.NORMALIZE_ST = e, t.QT_TO_C = n, t.INFO = u, t.SANITIZE = function (t) {
          void 0 === t && (t = 0), a(t);
          var r = NaN,
              e = NaN,
              i = NaN,
              n = NaN;
          return u(function (a, o, s, u, h) {
            var c = Math.abs,
                y = !1,
                p = 0,
                m = 0;

            if (a.type & _.SMOOTH_CURVE_TO && (p = isNaN(r) ? 0 : o - r, m = isNaN(e) ? 0 : s - e), a.type & (_.CURVE_TO | _.SMOOTH_CURVE_TO) ? (r = a.relative ? o + a.x2 : a.x2, e = a.relative ? s + a.y2 : a.y2) : (r = NaN, e = NaN), a.type & _.SMOOTH_QUAD_TO ? (i = isNaN(i) ? o : 2 * o - i, n = isNaN(n) ? s : 2 * s - n) : a.type & _.QUAD_TO ? (i = a.relative ? o + a.x1 : a.x1, n = a.relative ? s + a.y1 : a.y2) : (i = NaN, n = NaN), a.type & _.LINE_COMMANDS || a.type & _.ARC && (0 === a.rX || 0 === a.rY || !a.lArcFlag) || a.type & _.CURVE_TO || a.type & _.SMOOTH_CURVE_TO || a.type & _.QUAD_TO || a.type & _.SMOOTH_QUAD_TO) {
              var O = void 0 === a.x ? 0 : a.relative ? a.x : a.x - o,
                  l = void 0 === a.y ? 0 : a.relative ? a.y : a.y - s;
              p = isNaN(i) ? void 0 === a.x1 ? p : a.relative ? a.x : a.x1 - o : i - o, m = isNaN(n) ? void 0 === a.y1 ? m : a.relative ? a.y : a.y1 - s : n - s;
              var T = void 0 === a.x2 ? 0 : a.relative ? a.x : a.x2 - o,
                  v = void 0 === a.y2 ? 0 : a.relative ? a.y : a.y2 - s;
              c(O) <= t && c(l) <= t && c(p) <= t && c(m) <= t && c(T) <= t && c(v) <= t && (y = !0);
            }

            return a.type & _.CLOSE_PATH && c(o - u) <= t && c(s - h) <= t && (y = !0), y ? [] : a;
          });
        }, t.MATRIX = O, t.ROTATE = function (t, r, e) {
          void 0 === r && (r = 0), void 0 === e && (e = 0), a(t, r, e);
          var i = Math.sin(t),
              n = Math.cos(t);
          return O(n, i, -i, n, r - r * n + e * i, e - r * i - e * n);
        }, t.TRANSLATE = function (t, r) {
          return void 0 === r && (r = 0), a(t, r), O(1, 0, 0, 1, t, r);
        }, t.SCALE = function (t, r) {
          return void 0 === r && (r = t), a(t, r), O(t, 0, 0, r, 0, 0);
        }, t.SKEW_X = function (t) {
          return a(t), O(1, 0, Math.atan(t), 1, 0, 0);
        }, t.SKEW_Y = function (t) {
          return a(t), O(1, Math.atan(t), 0, 1, 0, 0);
        }, t.X_AXIS_SYMMETRY = function (t) {
          return void 0 === t && (t = 0), a(t), O(-1, 0, 0, 1, t, 0);
        }, t.Y_AXIS_SYMMETRY = function (t) {
          return void 0 === t && (t = 0), a(t), O(1, 0, 0, -1, 0, t);
        }, t.A_TO_C = function () {
          return u(function (t, r, e) {
            return _.ARC === t.type ? function (t, r, e) {
              var a, n, s, u;
              t.cX || o(t, r, e);

              for (var y = Math.min(t.phi1, t.phi2), p = Math.max(t.phi1, t.phi2) - y, m = Math.ceil(p / 90), O = new Array(m), l = r, T = e, v = 0; v < m; v++) {
                var f = c(t.phi1, t.phi2, v / m),
                    N = c(t.phi1, t.phi2, (v + 1) / m),
                    x = N - f,
                    d = 4 / 3 * Math.tan(x * h / 4),
                    E = [Math.cos(f * h) - d * Math.sin(f * h), Math.sin(f * h) + d * Math.cos(f * h)],
                    A = E[0],
                    C = E[1],
                    M = [Math.cos(N * h), Math.sin(N * h)],
                    R = M[0],
                    g = M[1],
                    I = [R + d * Math.sin(N * h), g - d * Math.cos(N * h)],
                    S = I[0],
                    L = I[1];
                O[v] = {
                  relative: t.relative,
                  type: _.CURVE_TO
                };

                var H = function H(r, e) {
                  var a = i([r * t.rX, e * t.rY], t.xRot),
                      n = a[0],
                      o = a[1];
                  return [t.cX + n, t.cY + o];
                };

                a = H(A, C), O[v].x1 = a[0], O[v].y1 = a[1], n = H(S, L), O[v].x2 = n[0], O[v].y2 = n[1], s = H(R, g), O[v].x = s[0], O[v].y = s[1], t.relative && (O[v].x1 -= l, O[v].y1 -= T, O[v].x2 -= l, O[v].y2 -= T, O[v].x -= l, O[v].y -= T), l = (u = [O[v].x, O[v].y])[0], T = u[1];
              }

              return O;
            }(t, t.relative ? 0 : r, t.relative ? 0 : e) : t;
          });
        }, t.ANNOTATE_ARCS = function () {
          return u(function (t, r, e) {
            return t.relative && (r = 0, e = 0), _.ARC === t.type && o(t, r, e), t;
          });
        }, t.CLONE = l, t.CALCULATE_BOUNDS = function () {
          var t = function t(_t2) {
            var r = {};

            for (var e in _t2) {
              r[e] = _t2[e];
            }

            return r;
          },
              i = r(),
              a = n(),
              h = e(),
              c = u(function (r, e, n) {
            var u = h(a(i(t(r))));

            function O(t) {
              t > c.maxX && (c.maxX = t), t < c.minX && (c.minX = t);
            }

            function l(t) {
              t > c.maxY && (c.maxY = t), t < c.minY && (c.minY = t);
            }

            if (u.type & _.DRAWING_COMMANDS && (O(e), l(n)), u.type & _.HORIZ_LINE_TO && O(u.x), u.type & _.VERT_LINE_TO && l(u.y), u.type & _.LINE_TO && (O(u.x), l(u.y)), u.type & _.CURVE_TO) {
              O(u.x), l(u.y);

              for (var T = 0, v = p(e, u.x1, u.x2, u.x); T < v.length; T++) {
                0 < (w = v[T]) && 1 > w && O(m(e, u.x1, u.x2, u.x, w));
              }

              for (var f = 0, N = p(n, u.y1, u.y2, u.y); f < N.length; f++) {
                0 < (w = N[f]) && 1 > w && l(m(n, u.y1, u.y2, u.y, w));
              }
            }

            if (u.type & _.ARC) {
              O(u.x), l(u.y), o(u, e, n);

              for (var x = u.xRot / 180 * Math.PI, d = Math.cos(x) * u.rX, E = Math.sin(x) * u.rX, A = -Math.sin(x) * u.rY, C = Math.cos(x) * u.rY, M = u.phi1 < u.phi2 ? [u.phi1, u.phi2] : -180 > u.phi2 ? [u.phi2 + 360, u.phi1 + 360] : [u.phi2, u.phi1], R = M[0], g = M[1], I = function I(t) {
                var r = t[0],
                    e = t[1],
                    i = 180 * Math.atan2(e, r) / Math.PI;
                return i < R ? i + 360 : i;
              }, S = 0, L = s(A, -d, 0).map(I); S < L.length; S++) {
                (w = L[S]) > R && w < g && O(y(u.cX, d, A, w));
              }

              for (var H = 0, U = s(C, -E, 0).map(I); H < U.length; H++) {
                var w;
                (w = U[H]) > R && w < g && l(y(u.cY, E, C, w));
              }
            }

            return r;
          });

          return c.minX = 1 / 0, c.maxX = -1 / 0, c.minY = 1 / 0, c.maxY = -1 / 0, c;
        };
      }(u || (u = {}));

      var O,
          l = function () {
        function t() {}

        return t.prototype.round = function (t) {
          return this.transform(u.ROUND(t));
        }, t.prototype.toAbs = function () {
          return this.transform(u.TO_ABS());
        }, t.prototype.toRel = function () {
          return this.transform(u.TO_REL());
        }, t.prototype.normalizeHVZ = function (t, r, e) {
          return this.transform(u.NORMALIZE_HVZ(t, r, e));
        }, t.prototype.normalizeST = function () {
          return this.transform(u.NORMALIZE_ST());
        }, t.prototype.qtToC = function () {
          return this.transform(u.QT_TO_C());
        }, t.prototype.aToC = function () {
          return this.transform(u.A_TO_C());
        }, t.prototype.sanitize = function (t) {
          return this.transform(u.SANITIZE(t));
        }, t.prototype.translate = function (t, r) {
          return this.transform(u.TRANSLATE(t, r));
        }, t.prototype.scale = function (t, r) {
          return this.transform(u.SCALE(t, r));
        }, t.prototype.rotate = function (t, r, e) {
          return this.transform(u.ROTATE(t, r, e));
        }, t.prototype.matrix = function (t, r, e, i, a, n) {
          return this.transform(u.MATRIX(t, r, e, i, a, n));
        }, t.prototype.skewX = function (t) {
          return this.transform(u.SKEW_X(t));
        }, t.prototype.skewY = function (t) {
          return this.transform(u.SKEW_Y(t));
        }, t.prototype.xSymmetry = function (t) {
          return this.transform(u.X_AXIS_SYMMETRY(t));
        }, t.prototype.ySymmetry = function (t) {
          return this.transform(u.Y_AXIS_SYMMETRY(t));
        }, t.prototype.annotateArcs = function () {
          return this.transform(u.ANNOTATE_ARCS());
        }, t;
      }(),
          T = function T(t) {
        return " " === t || "\t" === t || "\r" === t || "\n" === t;
      },
          v = function v(t) {
        return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
      },
          f = function (t) {
        function e() {
          var r = t.call(this) || this;
          return r.curNumber = "", r.curCommandType = -1, r.curCommandRelative = !1, r.canParseCommandOrComma = !0, r.curNumberHasExp = !1, r.curNumberHasExpDigits = !1, r.curNumberHasDecimal = !1, r.curArgs = [], r;
        }

        return r(e, t), e.prototype.finish = function (t) {
          if (void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma) throw new SyntaxError("Unterminated command at the path end.");
          return t;
        }, e.prototype.parse = function (t, r) {
          var e = this;
          void 0 === r && (r = []);

          for (var i = function i(t) {
            r.push(t), e.curArgs.length = 0, e.canParseCommandOrComma = !0;
          }, a = 0; a < t.length; a++) {
            var n = t[a],
                o = !(this.curCommandType !== _.ARC || 3 !== this.curArgs.length && 4 !== this.curArgs.length || 1 !== this.curNumber.length || "0" !== this.curNumber && "1" !== this.curNumber),
                s = v(n) && ("0" === this.curNumber && "0" === n || o);
            if (!v(n) || s) {
              if ("e" !== n && "E" !== n) {
                if ("-" !== n && "+" !== n || !this.curNumberHasExp || this.curNumberHasExpDigits) {
                  if ("." !== n || this.curNumberHasExp || this.curNumberHasDecimal || o) {
                    if (this.curNumber && -1 !== this.curCommandType) {
                      var u = Number(this.curNumber);
                      if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + a);
                      if (this.curCommandType === _.ARC) if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                        if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + a + '"');
                      } else if ((3 === this.curArgs.length || 4 === this.curArgs.length) && "0" !== this.curNumber && "1" !== this.curNumber) throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + a + '"');
                      this.curArgs.push(u), this.curArgs.length === N[this.curCommandType] && (_.HORIZ_LINE_TO === this.curCommandType ? i({
                        type: _.HORIZ_LINE_TO,
                        relative: this.curCommandRelative,
                        x: u
                      }) : _.VERT_LINE_TO === this.curCommandType ? i({
                        type: _.VERT_LINE_TO,
                        relative: this.curCommandRelative,
                        y: u
                      }) : this.curCommandType === _.MOVE_TO || this.curCommandType === _.LINE_TO || this.curCommandType === _.SMOOTH_QUAD_TO ? (i({
                        type: this.curCommandType,
                        relative: this.curCommandRelative,
                        x: this.curArgs[0],
                        y: this.curArgs[1]
                      }), _.MOVE_TO === this.curCommandType && (this.curCommandType = _.LINE_TO)) : this.curCommandType === _.CURVE_TO ? i({
                        type: _.CURVE_TO,
                        relative: this.curCommandRelative,
                        x1: this.curArgs[0],
                        y1: this.curArgs[1],
                        x2: this.curArgs[2],
                        y2: this.curArgs[3],
                        x: this.curArgs[4],
                        y: this.curArgs[5]
                      }) : this.curCommandType === _.SMOOTH_CURVE_TO ? i({
                        type: _.SMOOTH_CURVE_TO,
                        relative: this.curCommandRelative,
                        x2: this.curArgs[0],
                        y2: this.curArgs[1],
                        x: this.curArgs[2],
                        y: this.curArgs[3]
                      }) : this.curCommandType === _.QUAD_TO ? i({
                        type: _.QUAD_TO,
                        relative: this.curCommandRelative,
                        x1: this.curArgs[0],
                        y1: this.curArgs[1],
                        x: this.curArgs[2],
                        y: this.curArgs[3]
                      }) : this.curCommandType === _.ARC && i({
                        type: _.ARC,
                        relative: this.curCommandRelative,
                        rX: this.curArgs[0],
                        rY: this.curArgs[1],
                        xRot: this.curArgs[2],
                        lArcFlag: this.curArgs[3],
                        sweepFlag: this.curArgs[4],
                        x: this.curArgs[5],
                        y: this.curArgs[6]
                      })), this.curNumber = "", this.curNumberHasExpDigits = !1, this.curNumberHasExp = !1, this.curNumberHasDecimal = !1, this.canParseCommandOrComma = !0;
                    }

                    if (!T(n)) if ("," === n && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;else if ("+" !== n && "-" !== n && "." !== n) {
                      if (s) this.curNumber = n, this.curNumberHasDecimal = !1;else {
                        if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + a + ".");
                        if (!this.canParseCommandOrComma) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ". Command cannot follow comma");
                        if (this.canParseCommandOrComma = !1, "z" !== n && "Z" !== n) {
                          if ("h" === n || "H" === n) this.curCommandType = _.HORIZ_LINE_TO, this.curCommandRelative = "h" === n;else if ("v" === n || "V" === n) this.curCommandType = _.VERT_LINE_TO, this.curCommandRelative = "v" === n;else if ("m" === n || "M" === n) this.curCommandType = _.MOVE_TO, this.curCommandRelative = "m" === n;else if ("l" === n || "L" === n) this.curCommandType = _.LINE_TO, this.curCommandRelative = "l" === n;else if ("c" === n || "C" === n) this.curCommandType = _.CURVE_TO, this.curCommandRelative = "c" === n;else if ("s" === n || "S" === n) this.curCommandType = _.SMOOTH_CURVE_TO, this.curCommandRelative = "s" === n;else if ("q" === n || "Q" === n) this.curCommandType = _.QUAD_TO, this.curCommandRelative = "q" === n;else if ("t" === n || "T" === n) this.curCommandType = _.SMOOTH_QUAD_TO, this.curCommandRelative = "t" === n;else {
                            if ("a" !== n && "A" !== n) throw new SyntaxError('Unexpected character "' + n + '" at index ' + a + ".");
                            this.curCommandType = _.ARC, this.curCommandRelative = "a" === n;
                          }
                        } else r.push({
                          type: _.CLOSE_PATH
                        }), this.canParseCommandOrComma = !0, this.curCommandType = -1;
                      }
                    } else this.curNumber = n, this.curNumberHasDecimal = "." === n;
                  } else this.curNumber += n, this.curNumberHasDecimal = !0;
                } else this.curNumber += n;
              } else this.curNumber += n, this.curNumberHasExp = !0;
            } else this.curNumber += n, this.curNumberHasExpDigits = this.curNumberHasExp;
          }

          return r;
        }, e.prototype.transform = function (t) {
          return Object.create(this, {
            parse: {
              value: function value(r, e) {
                void 0 === e && (e = []);

                for (var i = 0, a = Object.getPrototypeOf(this).parse.call(this, r); i < a.length; i++) {
                  var n = a[i],
                      o = t(n);
                  Array.isArray(o) ? e.push.apply(e, o) : e.push(o);
                }

                return e;
              }
            }
          });
        }, e;
      }(l),
          _ = function (t) {
        function i(r) {
          var e = t.call(this) || this;
          return e.commands = "string" == typeof r ? i.parse(r) : r, e;
        }

        return r(i, t), i.prototype.encode = function () {
          return i.encode(this.commands);
        }, i.prototype.getBounds = function () {
          var t = u.CALCULATE_BOUNDS();
          return this.transform(t), t;
        }, i.prototype.transform = function (t) {
          for (var r = [], e = 0, i = this.commands; e < i.length; e++) {
            var a = t(i[e]);
            Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
          }

          return this.commands = r, this;
        }, i.encode = function (t) {
          return e(t);
        }, i.parse = function (t) {
          var r = new f(),
              e = [];
          return r.parse(t, e), r.finish(e), e;
        }, i.CLOSE_PATH = 1, i.MOVE_TO = 2, i.HORIZ_LINE_TO = 4, i.VERT_LINE_TO = 8, i.LINE_TO = 16, i.CURVE_TO = 32, i.SMOOTH_CURVE_TO = 64, i.QUAD_TO = 128, i.SMOOTH_QUAD_TO = 256, i.ARC = 512, i.LINE_COMMANDS = i.LINE_TO | i.HORIZ_LINE_TO | i.VERT_LINE_TO, i.DRAWING_COMMANDS = i.HORIZ_LINE_TO | i.VERT_LINE_TO | i.LINE_TO | i.CURVE_TO | i.SMOOTH_CURVE_TO | i.QUAD_TO | i.SMOOTH_QUAD_TO | i.ARC, i;
      }(l),
          N = ((O = {})[_.MOVE_TO] = 2, O[_.LINE_TO] = 2, O[_.HORIZ_LINE_TO] = 1, O[_.VERT_LINE_TO] = 1, O[_.CLOSE_PATH] = 0, O[_.QUAD_TO] = 4, O[_.SMOOTH_QUAD_TO] = 2, O[_.CURVE_TO] = 6, O[_.SMOOTH_CURVE_TO] = 4, O[_.ARC] = 7, O); //# sourceMappingURL=SVGPathData.module.js.map

      /***/

    },

    /***/
    "1MNl":
    /*!****************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-ios-pebble.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function MNl(module, exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      "NC/Y");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;
      /***/
    },

    /***/
    "5mdu":
    /*!***************************************************!*\
      !*** ./node_modules/core-js/internals/perform.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function mdu(module, exports) {
      module.exports = function (exec) {
        try {
          return {
            error: false,
            value: exec()
          };
        } catch (error) {
          return {
            error: true,
            value: error
          };
        }
      };
      /***/

    },

    /***/
    "5s+n":
    /*!****************************************************!*\
      !*** ./node_modules/core-js/modules/es.promise.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function sN(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR");

      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      var call = __webpack_require__(
      /*! ../internals/function-call */
      "xluM");

      var NativePromise = __webpack_require__(
      /*! ../internals/native-promise-constructor */
      "/qmn");

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      "4syw");

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      "0rvr");

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      "1E5z");

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      "JiZb");

      var aCallable = __webpack_require__(
      /*! ../internals/a-callable */
      "We1y");

      var isCallable = __webpack_require__(
      /*! ../internals/is-callable */
      "Fib7");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      "GarU");

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      "iSVu");

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      "ImZN");

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      "HH4o");

      var speciesConstructor = __webpack_require__(
      /*! ../internals/species-constructor */
      "SEBh");

      var task = __webpack_require__(
      /*! ../internals/task */
      "LPSS").set;

      var microtask = __webpack_require__(
      /*! ../internals/microtask */
      "tXUg");

      var promiseResolve = __webpack_require__(
      /*! ../internals/promise-resolve */
      "zfnd");

      var hostReportErrors = __webpack_require__(
      /*! ../internals/host-report-errors */
      "RN6c");

      var newPromiseCapabilityModule = __webpack_require__(
      /*! ../internals/new-promise-capability */
      "8GlL");

      var perform = __webpack_require__(
      /*! ../internals/perform */
      "5mdu");

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      "afO8");

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      "lMq5");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var IS_BROWSER = __webpack_require__(
      /*! ../internals/engine-is-browser */
      "YGnB");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      "LQDL");

      var SPECIES = wellKnownSymbol('species');
      var PROMISE = 'Promise';
      var getInternalState = InternalStateModule.getterFor(PROMISE);
      var setInternalState = InternalStateModule.set;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var NativePromisePrototype = NativePromise && NativePromise.prototype;
      var PromiseConstructor = NativePromise;
      var PromisePrototype = NativePromisePrototype;
      var TypeError = global.TypeError;
      var document = global.document;
      var process = global.process;
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
      var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
      var UNHANDLED_REJECTION = 'unhandledrejection';
      var REJECTION_HANDLED = 'rejectionhandled';
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var SUBCLASSING = false;
      var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
      var FORCED = isForced(PROMISE, function () {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // We can't detect it synchronously, so just check versions

        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution

        if (IS_PURE && !PromisePrototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes
        // deoptimization and performance degradation
        // https://github.com/zloirock/core-js/issues/679

        if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

        var promise = new PromiseConstructor(function (resolve) {
          resolve(1);
        });

        var FakePromise = function FakePromise(exec) {
          exec(function () {
            /* empty */
          }, function () {
            /* empty */
          });
        };

        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function () {
          /* empty */
        }) instanceof FakePromise;
        if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

        return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
      });
      var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
        PromiseConstructor.all(iterable)['catch'](function () {
          /* empty */
        });
      }); // helpers

      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && isCallable(then = it.then) ? then : false;
      };

      var notify = function notify(state, isReject) {
        if (state.notified) return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function () {
          var value = state.value;
          var ok = state.state == FULFILLED;
          var index = 0; // variable length - can't use forEach

          while (chain.length > index) {
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;

            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                  state.rejection = HANDLED;
                }

                if (handler === true) result = value;else {
                  if (domain) domain.enter();
                  result = handler(value); // can throw

                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }

                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  call(then, result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (error) {
              if (domain && !exited) domain.exit();
              reject(error);
            }
          }

          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(state);
        });
      };

      var dispatchEvent = function dispatchEvent(name, promise, reason) {
        var event, handler;

        if (DISPATCH_EVENT) {
          event = document.createEvent('Event');
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global.dispatchEvent(event);
        } else event = {
          promise: promise,
          reason: reason
        };

        if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
      };

      var onUnhandled = function onUnhandled(state) {
        call(task, global, function () {
          var promise = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;

          if (IS_UNHANDLED) {
            result = perform(function () {
              if (IS_NODE) {
                process.emit('unhandledRejection', value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };

      var isUnhandled = function isUnhandled(state) {
        return state.rejection !== HANDLED && !state.parent;
      };

      var onHandleUnhandled = function onHandleUnhandled(state) {
        call(task, global, function () {
          var promise = state.facade;

          if (IS_NODE) {
            process.emit('rejectionHandled', promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };

      var bind = function bind(fn, state, unwrap) {
        return function (value) {
          fn(state, value, unwrap);
        };
      };

      var internalReject = function internalReject(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };

      var internalResolve = function internalResolve(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;

        try {
          if (state.facade === value) throw TypeError("Promise can't be resolved itself");
          var then = isThenable(value);

          if (then) {
            microtask(function () {
              var wrapper = {
                done: false
              };

              try {
                call(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({
            done: false
          }, error, state);
        }
      }; // constructor polyfill


      if (FORCED) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
          anInstance(this, PromisePrototype);
          aCallable(executor);
          call(Internal, this);
          var state = getInternalState(this);

          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };

        PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

        Internal = function Promise(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
          });
        };

        Internal.prototype = redefineAll(PromisePrototype, {
          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reactions = state.reactions;
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
            reaction.fail = isCallable(onRejected) && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            reactions[reactions.length] = reaction;
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.es/ecma262/#sec-promise.prototype.catch
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });

        OwnPromiseCapability = function OwnPromiseCapability() {
          var promise = new Internal();
          var state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };

        newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };

        if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
          nativeThen = NativePromisePrototype.then;

          if (!SUBCLASSING) {
            // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
            redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function (resolve, reject) {
                call(nativeThen, that, resolve, reject);
              }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
            }, {
              unsafe: true
            }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

            redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], {
              unsafe: true
            });
          } // make `.constructor === Promise` work for native promise-based APIs


          try {
            delete NativePromisePrototype.constructor;
          } catch (error) {
            /* empty */
          } // make `instanceof Promise` work for native promise-based APIs


          if (setPrototypeOf) {
            setPrototypeOf(NativePromisePrototype, PromisePrototype);
          }
        }
      }

      $({
        global: true,
        wrap: true,
        forced: FORCED
      }, {
        Promise: PromiseConstructor
      });
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
      PromiseWrapper = getBuiltIn(PROMISE); // statics

      $({
        target: PROMISE,
        stat: true,
        forced: FORCED
      }, {
        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          call(capability.reject, undefined, r);
          return capability.promise;
        }
      });
      $({
        target: PROMISE,
        stat: true,
        forced: IS_PURE || FORCED
      }, {
        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });
      $({
        target: PROMISE,
        stat: true,
        forced: INCORRECT_ITERATION
      }, {
        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aCallable(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function (promise) {
              var index = counter++;
              var alreadyCalled = false;
              remaining++;
              call($promiseResolve, C, promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aCallable(C.resolve);
            iterate(iterable, function (promise) {
              call($promiseResolve, C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
      /***/
    },

    /***/
    "82ph":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/array-slice.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function ph(module, exports, __webpack_require__) {
      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      module.exports = uncurryThis([].slice);
      /***/
    },

    /***/
    "8GlL":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function GlL(module, exports, __webpack_require__) {
      "use strict";

      var aCallable = __webpack_require__(
      /*! ../internals/a-callable */
      "We1y");

      var PromiseCapability = function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aCallable(resolve);
        this.reject = aCallable(reject);
      }; // `NewPromiseCapability` abstract operation
      // https://tc39.es/ecma262/#sec-newpromisecapability


      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };
      /***/

    },

    /***/
    "DXPr":
    /*!********************************************!*\
      !*** ./node_modules/canvg/lib/index.es.js ***!
      \********************************************/

    /*! exports provided: default, AElement, AnimateColorElement, AnimateElement, AnimateTransformElement, BoundingBox, CB1, CB2, CB3, CB4, Canvg, CircleElement, ClipPathElement, DefsElement, DescElement, Document, Element, EllipseElement, FeColorMatrixElement, FeCompositeElement, FeDropShadowElement, FeGaussianBlurElement, FeMorphologyElement, FilterElement, Font, FontElement, FontFaceElement, GElement, GlyphElement, GradientElement, ImageElement, LineElement, LinearGradientElement, MarkerElement, MaskElement, Matrix, MissingGlyphElement, Mouse, PSEUDO_ZERO, Parser, PathElement, PathParser, PatternElement, Point, PolygonElement, PolylineElement, Property, QB1, QB2, QB3, RadialGradientElement, RectElement, RenderedElement, Rotate, SVGElement, SVGFontLoader, Scale, Screen, Skew, SkewX, SkewY, StopElement, StyleElement, SymbolElement, TRefElement, TSpanElement, TextElement, TextPathElement, TitleElement, Transform, Translate, UnknownElement, UseElement, ViewPort, compressSpaces, getSelectorSpecificity, normalizeAttributeName, normalizeColor, parseExternalUrl, presets, toNumbers, trimLeft, trimRight, vectorMagnitude, vectorsAngle, vectorsRatio */

    /***/
    function DXPr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AElement", function () {
        return AElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimateColorElement", function () {
        return AnimateColorElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimateElement", function () {
        return AnimateElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimateTransformElement", function () {
        return AnimateTransformElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoundingBox", function () {
        return BoundingBox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CB1", function () {
        return CB1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CB2", function () {
        return CB2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CB3", function () {
        return CB3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CB4", function () {
        return CB4;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Canvg", function () {
        return Canvg;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleElement", function () {
        return CircleElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipPathElement", function () {
        return ClipPathElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefsElement", function () {
        return DefsElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DescElement", function () {
        return DescElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Document", function () {
        return Document;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Element", function () {
        return Element;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EllipseElement", function () {
        return EllipseElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeColorMatrixElement", function () {
        return FeColorMatrixElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeCompositeElement", function () {
        return FeCompositeElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeDropShadowElement", function () {
        return FeDropShadowElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeGaussianBlurElement", function () {
        return FeGaussianBlurElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeMorphologyElement", function () {
        return FeMorphologyElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterElement", function () {
        return FilterElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Font", function () {
        return Font;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FontElement", function () {
        return FontElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FontFaceElement", function () {
        return FontFaceElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GElement", function () {
        return GElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlyphElement", function () {
        return GlyphElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GradientElement", function () {
        return GradientElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageElement", function () {
        return ImageElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineElement", function () {
        return LineElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinearGradientElement", function () {
        return LinearGradientElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkerElement", function () {
        return MarkerElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaskElement", function () {
        return MaskElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Matrix", function () {
        return Matrix;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MissingGlyphElement", function () {
        return MissingGlyphElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Mouse", function () {
        return Mouse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PSEUDO_ZERO", function () {
        return PSEUDO_ZERO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Parser", function () {
        return Parser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PathElement", function () {
        return PathElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PathParser", function () {
        return PathParser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PatternElement", function () {
        return PatternElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Point", function () {
        return Point;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolygonElement", function () {
        return PolygonElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolylineElement", function () {
        return PolylineElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Property", function () {
        return Property;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QB1", function () {
        return QB1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QB2", function () {
        return QB2;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QB3", function () {
        return QB3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadialGradientElement", function () {
        return RadialGradientElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RectElement", function () {
        return RectElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderedElement", function () {
        return RenderedElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Rotate", function () {
        return Rotate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SVGElement", function () {
        return SVGElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SVGFontLoader", function () {
        return SVGFontLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Scale", function () {
        return Scale;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Screen", function () {
        return Screen;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Skew", function () {
        return Skew;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkewX", function () {
        return SkewX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkewY", function () {
        return SkewY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StopElement", function () {
        return StopElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StyleElement", function () {
        return StyleElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SymbolElement", function () {
        return SymbolElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TRefElement", function () {
        return TRefElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TSpanElement", function () {
        return TSpanElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextElement", function () {
        return TextElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextPathElement", function () {
        return TextPathElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleElement", function () {
        return TitleElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Transform", function () {
        return Transform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Translate", function () {
        return Translate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UnknownElement", function () {
        return UnknownElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UseElement", function () {
        return UseElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewPort", function () {
        return ViewPort;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "compressSpaces", function () {
        return compressSpaces;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getSelectorSpecificity", function () {
        return getSelectorSpecificity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeAttributeName", function () {
        return normalizeAttributeName;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeColor", function () {
        return normalizeColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseExternalUrl", function () {
        return parseExternalUrl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "presets", function () {
        return index;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toNumbers", function () {
        return toNumbers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trimLeft", function () {
        return trimLeft;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trimRight", function () {
        return trimRight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vectorMagnitude", function () {
        return vectorMagnitude;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vectorsAngle", function () {
        return vectorsAngle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vectorsRatio", function () {
        return vectorsRatio;
      });
      /* harmony import */


      var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/modules/es.promise.js */
      "5s+n");
      /* harmony import */


      var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @babel/runtime/helpers/asyncToGenerator */
      "NA3B");
      /* harmony import */


      var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! core-js/modules/es.string.match.js */
      "Rm1S");
      /* harmony import */


      var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! core-js/modules/es.string.replace.js */
      "UxlC");
      /* harmony import */


      var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! core-js/modules/es.string.starts-with.js */
      "LKBx");
      /* harmony import */


      var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! core-js/modules/es.array.iterator.js */
      "4mDm");
      /* harmony import */


      var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! core-js/modules/web.dom-collections.iterator.js */
      "3bBZ");
      /* harmony import */


      var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @babel/runtime/helpers/defineProperty */
      "mvZO");
      /* harmony import */


      var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! core-js/modules/es.array.reduce.js */
      "E9XD");
      /* harmony import */


      var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! core-js/modules/es.string.ends-with.js */
      "inlA");
      /* harmony import */


      var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! core-js/modules/es.string.split.js */
      "EnZy");
      /* harmony import */


      var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var raf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! raf */
      "xEkU");
      /* harmony import */


      var raf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! core-js/modules/es.string.trim.js */
      "SYor");
      /* harmony import */


      var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var rgbcolor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rgbcolor */
      "WOGj");
      /* harmony import */


      var rgbcolor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rgbcolor__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! core-js/modules/es.string.includes.js */
      "JTJg");
      /* harmony import */


      var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! core-js/modules/es.array.index-of.js */
      "yXV3");
      /* harmony import */


      var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! core-js/modules/es.array.reverse.js */
      "Junv");
      /* harmony import */


      var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var svg_pathdata__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! svg-pathdata */
      "0B/8");
      /* harmony import */


      var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! core-js/modules/es.regexp.to-string.js */
      "JfAA");
      /* harmony import */


      var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var stackblur_canvas__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! stackblur-canvas */
      "Xp4B");
      /**
       * Options preset for `OffscreenCanvas`.
       * @param config - Preset requirements.
       * @param config.DOMParser - XML/HTML parser from string into DOM Document.
       * @returns Preset object.
       */


      function offscreen() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            DOMParserFallback = _ref4.DOMParser;

        var preset = {
          window: null,
          ignoreAnimation: true,
          ignoreMouse: true,
          DOMParser: DOMParserFallback,
          createCanvas: function createCanvas(width, height) {
            return new OffscreenCanvas(width, height);
          },
          createImage: function createImage(url) {
            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var response, blob, img;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return fetch(url);

                    case 2:
                      response = _context.sent;
                      _context.next = 5;
                      return response.blob();

                    case 5:
                      blob = _context.sent;
                      _context.next = 8;
                      return createImageBitmap(blob);

                    case 8:
                      img = _context.sent;
                      return _context.abrupt("return", img);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();
          }
        };

        if (typeof DOMParser !== 'undefined' || typeof DOMParserFallback === 'undefined') {
          Reflect.deleteProperty(preset, 'DOMParser');
        }

        return preset;
      }
      /**
       * Options preset for `node-canvas`.
       * @param config - Preset requirements.
       * @param config.DOMParser - XML/HTML parser from string into DOM Document.
       * @param config.canvas - `node-canvas` exports.
       * @param config.fetch - WHATWG-compatible `fetch` function.
       * @returns Preset object.
       */


      function node(_ref) {
        var DOMParser = _ref.DOMParser,
            canvas = _ref.canvas,
            fetch = _ref.fetch;
        return {
          window: null,
          ignoreAnimation: true,
          ignoreMouse: true,
          DOMParser: DOMParser,
          fetch: fetch,
          createCanvas: canvas.createCanvas,
          createImage: canvas.loadImage
        };
      }

      var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        offscreen: offscreen,
        node: node
      });
      /**
       * HTML-safe compress white-spaces.
       * @param str - String to compress.
       * @returns String.
       */

      function compressSpaces(str) {
        return str.replace(/(?!\u3000)\s+/gm, ' ');
      }
      /**
       * HTML-safe left trim.
       * @param str - String to trim.
       * @returns String.
       */


      function trimLeft(str) {
        return str.replace(/^[\n \t]+/, '');
      }
      /**
       * HTML-safe right trim.
       * @param str - String to trim.
       * @returns String.
       */


      function trimRight(str) {
        return str.replace(/[\n \t]+$/, '');
      }
      /**
       * String to numbers array.
       * @param str - Numbers string.
       * @returns Numbers array.
       */


      function toNumbers(str) {
        var matches = (str || '').match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
        return matches.map(parseFloat);
      } // Microsoft Edge fix


      var allUppercase = /^[A-Z-]+$/;
      /**
       * Normalize attribute name.
       * @param name - Attribute name.
       * @returns Normalized attribute name.
       */

      function normalizeAttributeName(name) {
        if (allUppercase.test(name)) {
          return name.toLowerCase();
        }

        return name;
      }
      /**
       * Parse external URL.
       * @param url - CSS url string.
       * @returns Parsed URL.
       */


      function parseExternalUrl(url) {
        //                      single quotes [2]
        //                      v         double quotes [3]
        //                      v         v         no quotes [4]
        //                      v         v         v
        var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
        return urlMatch[2] || urlMatch[3] || urlMatch[4];
      }
      /**
       * Transform floats to integers in rgb colors.
       * @param color - Color to normalize.
       * @returns Normalized color.
       */


      function normalizeColor(color) {
        if (!color.startsWith('rgb')) {
          return color;
        }

        var rgbParts = 3;
        var normalizedColor = color.replace(/\d+(\.\d+)?/g, function (num, isFloat) {
          return rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num;
        });
        return normalizedColor;
      } // slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js


      var attributeRegex = /(\[[^\]]+\])/g;
      var idRegex = /(#[^\s+>~.[:]+)/g;
      var classRegex = /(\.[^\s+>~.[:]+)/g;
      var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
      var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
      var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
      var elementRegex = /([^\s+>~.[:]+)/g;

      function findSelectorMatch(selector, regex) {
        var matches = regex.exec(selector);

        if (!matches) {
          return [selector, 0];
        }

        return [selector.replace(regex, ' '), matches.length];
      }
      /**
       * Measure selector specificity.
       * @param selector - Selector to measure.
       * @returns Specificity.
       */


      function getSelectorSpecificity(selector) {
        var specificity = [0, 0, 0];
        var currentSelector = selector.replace(/:not\(([^)]*)\)/g, '     $1 ').replace(/{[\s\S]*/gm, ' ');
        var delta = 0;

        var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);

        var _findSelectorMatch2 = _slicedToArray(_findSelectorMatch, 2);

        currentSelector = _findSelectorMatch2[0];
        delta = _findSelectorMatch2[1];
        specificity[1] += delta;

        var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);

        var _findSelectorMatch4 = _slicedToArray(_findSelectorMatch3, 2);

        currentSelector = _findSelectorMatch4[0];
        delta = _findSelectorMatch4[1];
        specificity[0] += delta;

        var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);

        var _findSelectorMatch6 = _slicedToArray(_findSelectorMatch5, 2);

        currentSelector = _findSelectorMatch6[0];
        delta = _findSelectorMatch6[1];
        specificity[1] += delta;

        var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);

        var _findSelectorMatch8 = _slicedToArray(_findSelectorMatch7, 2);

        currentSelector = _findSelectorMatch8[0];
        delta = _findSelectorMatch8[1];
        specificity[2] += delta;

        var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);

        var _findSelectorMatch10 = _slicedToArray(_findSelectorMatch9, 2);

        currentSelector = _findSelectorMatch10[0];
        delta = _findSelectorMatch10[1];
        specificity[1] += delta;

        var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);

        var _findSelectorMatch12 = _slicedToArray(_findSelectorMatch11, 2);

        currentSelector = _findSelectorMatch12[0];
        delta = _findSelectorMatch12[1];
        specificity[1] += delta;
        currentSelector = currentSelector.replace(/[*\s+>~]/g, ' ').replace(/[#.]/g, ' ');

        var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);

        var _findSelectorMatch14 = _slicedToArray(_findSelectorMatch13, 2);

        currentSelector = _findSelectorMatch14[0];
        delta = _findSelectorMatch14[1];
        // lgtm [js/useless-assignment-to-local]
        specificity[2] += delta;
        return specificity.join('');
      }

      var PSEUDO_ZERO = .00000001;
      /**
       * Vector magnitude.
       * @param v
       * @returns Number result.
       */

      function vectorMagnitude(v) {
        return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
      }
      /**
       * Ratio between two vectors.
       * @param u
       * @param v
       * @returns Number result.
       */


      function vectorsRatio(u, v) {
        return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
      }
      /**
       * Angle between two vectors.
       * @param u
       * @param v
       * @returns Number result.
       */


      function vectorsAngle(u, v) {
        return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
      }

      function CB1(t) {
        return t * t * t;
      }

      function CB2(t) {
        return 3 * t * t * (1 - t);
      }

      function CB3(t) {
        return 3 * t * (1 - t) * (1 - t);
      }

      function CB4(t) {
        return (1 - t) * (1 - t) * (1 - t);
      }

      function QB1(t) {
        return t * t;
      }

      function QB2(t) {
        return 2 * t * (1 - t);
      }

      function QB3(t) {
        return (1 - t) * (1 - t);
      }

      var Property = /*#__PURE__*/function () {
        function Property(document, name, value) {
          _classCallCheck2(this, Property);

          this.document = document;
          this.name = name;
          this.value = value;
          this.isNormalizedColor = false;
        }

        _createClass(Property, [{
          key: "split",
          value: function split() {
            var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
            var document = this.document,
                name = this.name;
            return compressSpaces(this.getString()).trim().split(separator).map(function (value) {
              return new Property(document, name, value);
            });
          }
        }, {
          key: "hasValue",
          value: function hasValue(zeroIsValue) {
            var value = this.value;
            return value !== null && value !== '' && (zeroIsValue || value !== 0) && typeof value !== 'undefined';
          }
        }, {
          key: "isString",
          value: function isString(regexp) {
            var value = this.value;
            var result = typeof value === 'string';

            if (!result || !regexp) {
              return result;
            }

            return regexp.test(value);
          }
        }, {
          key: "isUrlDefinition",
          value: function isUrlDefinition() {
            return this.isString(/^url\(/);
          }
        }, {
          key: "isPixels",
          value: function isPixels() {
            if (!this.hasValue()) {
              return false;
            }

            var asString = this.getString();

            switch (true) {
              case asString.endsWith('px'):
              case /^[0-9]+$/.test(asString):
                return true;

              default:
                return false;
            }
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            this.value = value;
            return this;
          }
        }, {
          key: "getValue",
          value: function getValue(def) {
            if (typeof def === 'undefined' || this.hasValue()) {
              return this.value;
            }

            return def;
          }
        }, {
          key: "getNumber",
          value: function getNumber(def) {
            if (!this.hasValue()) {
              if (typeof def === 'undefined') {
                return 0;
              }

              return parseFloat(def);
            }

            var value = this.value;
            var n = parseFloat(value);

            if (this.isString(/%$/)) {
              n /= 100.0;
            }

            return n;
          }
        }, {
          key: "getString",
          value: function getString(def) {
            if (typeof def === 'undefined' || this.hasValue()) {
              return typeof this.value === 'undefined' ? '' : String(this.value);
            }

            return String(def);
          }
        }, {
          key: "getColor",
          value: function getColor(def) {
            var color = this.getString(def);

            if (this.isNormalizedColor) {
              return color;
            }

            this.isNormalizedColor = true;
            color = normalizeColor(color);
            this.value = color;
            return color;
          }
        }, {
          key: "getDpi",
          value: function getDpi() {
            return 96.0; // TODO: compute?
          }
        }, {
          key: "getRem",
          value: function getRem() {
            return this.document.rootEmSize;
          }
        }, {
          key: "getEm",
          value: function getEm() {
            return this.document.emSize;
          }
        }, {
          key: "getUnits",
          value: function getUnits() {
            return this.getString().replace(/[0-9.-]/g, '');
          }
        }, {
          key: "getPixels",
          value: function getPixels(axisOrIsFontSize) {
            var processPercent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!this.hasValue()) {
              return 0;
            }

            var _ref5 = typeof axisOrIsFontSize === 'boolean' ? [undefined, axisOrIsFontSize] : [axisOrIsFontSize],
                _ref6 = _slicedToArray(_ref5, 2),
                axis = _ref6[0],
                isFontSize = _ref6[1];

            var viewPort = this.document.screen.viewPort;

            switch (true) {
              case this.isString(/vmin$/):
                return this.getNumber() / 100.0 * Math.min(viewPort.computeSize('x'), viewPort.computeSize('y'));

              case this.isString(/vmax$/):
                return this.getNumber() / 100.0 * Math.max(viewPort.computeSize('x'), viewPort.computeSize('y'));

              case this.isString(/vw$/):
                return this.getNumber() / 100.0 * viewPort.computeSize('x');

              case this.isString(/vh$/):
                return this.getNumber() / 100.0 * viewPort.computeSize('y');

              case this.isString(/rem$/):
                return this.getNumber() * this.getRem();

              case this.isString(/em$/):
                return this.getNumber() * this.getEm();

              case this.isString(/ex$/):
                return this.getNumber() * this.getEm() / 2.0;

              case this.isString(/px$/):
                return this.getNumber();

              case this.isString(/pt$/):
                return this.getNumber() * this.getDpi() * (1.0 / 72.0);

              case this.isString(/pc$/):
                return this.getNumber() * 15;

              case this.isString(/cm$/):
                return this.getNumber() * this.getDpi() / 2.54;

              case this.isString(/mm$/):
                return this.getNumber() * this.getDpi() / 25.4;

              case this.isString(/in$/):
                return this.getNumber() * this.getDpi();

              case this.isString(/%$/) && isFontSize:
                return this.getNumber() * this.getEm();

              case this.isString(/%$/):
                return this.getNumber() * viewPort.computeSize(axis);

              default:
                {
                  var n = this.getNumber();

                  if (processPercent && n < 1.0) {
                    return n * viewPort.computeSize(axis);
                  }

                  return n;
                }
            }
          }
        }, {
          key: "getMilliseconds",
          value: function getMilliseconds() {
            if (!this.hasValue()) {
              return 0;
            }

            if (this.isString(/ms$/)) {
              return this.getNumber();
            }

            return this.getNumber() * 1000;
          }
        }, {
          key: "getRadians",
          value: function getRadians() {
            if (!this.hasValue()) {
              return 0;
            }

            switch (true) {
              case this.isString(/deg$/):
                return this.getNumber() * (Math.PI / 180.0);

              case this.isString(/grad$/):
                return this.getNumber() * (Math.PI / 200.0);

              case this.isString(/rad$/):
                return this.getNumber();

              default:
                return this.getNumber() * (Math.PI / 180.0);
            }
          }
        }, {
          key: "getDefinition",
          value: function getDefinition() {
            var asString = this.getString();
            var name = /#([^)'"]+)/.exec(asString);

            if (name) {
              name = name[1];
            }

            if (!name) {
              name = asString;
            }

            return this.document.definitions[name];
          }
        }, {
          key: "getFillStyleDefinition",
          value: function getFillStyleDefinition(element, opacity) {
            var def = this.getDefinition();

            if (!def) {
              return null;
            } // gradient


            if (typeof def.createGradient === 'function') {
              return def.createGradient(this.document.ctx, element, opacity);
            } // pattern


            if (typeof def.createPattern === 'function') {
              if (def.getHrefAttribute().hasValue()) {
                var patternTransform = def.getAttribute('patternTransform');
                def = def.getHrefAttribute().getDefinition();

                if (patternTransform.hasValue()) {
                  def.getAttribute('patternTransform', true).setValue(patternTransform.value);
                }
              }

              return def.createPattern(this.document.ctx, element, opacity);
            }

            return null;
          }
        }, {
          key: "getTextBaseline",
          value: function getTextBaseline() {
            if (!this.hasValue()) {
              return null;
            }

            return Property.textBaselineMapping[this.getString()];
          }
        }, {
          key: "addOpacity",
          value: function addOpacity(opacity) {
            var value = this.getColor();
            var len = value.length;
            var commas = 0; // Simulate old RGBColor version, which can't parse rgba.

            for (var i = 0; i < len; i++) {
              if (value[i] === ',') {
                commas++;
              }

              if (commas === 3) {
                break;
              }
            }

            if (opacity.hasValue() && this.isString() && commas !== 3) {
              var color = new rgbcolor__WEBPACK_IMPORTED_MODULE_13___default.a(value);

              if (color.ok) {
                color.alpha = opacity.getNumber();
                value = color.toRGBA();
              }
            }

            return new Property(this.document, this.name, value);
          }
        }], [{
          key: "empty",
          value: function empty(document) {
            return new Property(document, 'EMPTY', '');
          }
        }]);

        return Property;
      }();

      Property.textBaselineMapping = {
        'baseline': 'alphabetic',
        'before-edge': 'top',
        'text-before-edge': 'top',
        'middle': 'middle',
        'central': 'middle',
        'after-edge': 'bottom',
        'text-after-edge': 'bottom',
        'ideographic': 'ideographic',
        'alphabetic': 'alphabetic',
        'hanging': 'hanging',
        'mathematical': 'alphabetic'
      };

      var ViewPort = /*#__PURE__*/function () {
        function ViewPort() {
          _classCallCheck2(this, ViewPort);

          this.viewPorts = [];
        }

        _createClass(ViewPort, [{
          key: "clear",
          value: function clear() {
            this.viewPorts = [];
          }
        }, {
          key: "setCurrent",
          value: function setCurrent(width, height) {
            this.viewPorts.push({
              width: width,
              height: height
            });
          }
        }, {
          key: "removeCurrent",
          value: function removeCurrent() {
            this.viewPorts.pop();
          }
        }, {
          key: "getCurrent",
          value: function getCurrent() {
            var viewPorts = this.viewPorts;
            return viewPorts[viewPorts.length - 1];
          }
        }, {
          key: "computeSize",
          value: function computeSize(d) {
            if (typeof d === 'number') {
              return d;
            }

            if (d === 'x') {
              return this.width;
            }

            if (d === 'y') {
              return this.height;
            }

            return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
          }
        }, {
          key: "width",
          get: function get() {
            return this.getCurrent().width;
          }
        }, {
          key: "height",
          get: function get() {
            return this.getCurrent().height;
          }
        }]);

        return ViewPort;
      }();

      var Point = /*#__PURE__*/function () {
        function Point(x, y) {
          _classCallCheck2(this, Point);

          this.x = x;
          this.y = y;
        }

        _createClass(Point, [{
          key: "angleTo",
          value: function angleTo(point) {
            return Math.atan2(point.y - this.y, point.x - this.x);
          }
        }, {
          key: "applyTransform",
          value: function applyTransform(transform) {
            var x = this.x,
                y = this.y;
            var xp = x * transform[0] + y * transform[2] + transform[4];
            var yp = x * transform[1] + y * transform[3] + transform[5];
            this.x = xp;
            this.y = yp;
          }
        }], [{
          key: "parse",
          value: function parse(point) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var _toNumbers = toNumbers(point),
                _toNumbers2 = _slicedToArray(_toNumbers, 2),
                _toNumbers2$ = _toNumbers2[0],
                x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$,
                _toNumbers2$2 = _toNumbers2[1],
                y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;

            return new Point(x, y);
          }
        }, {
          key: "parseScale",
          value: function parseScale(scale) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var _toNumbers3 = toNumbers(scale),
                _toNumbers4 = _slicedToArray(_toNumbers3, 2),
                _toNumbers4$ = _toNumbers4[0],
                x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$,
                _toNumbers4$2 = _toNumbers4[1],
                y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;

            return new Point(x, y);
          }
        }, {
          key: "parsePath",
          value: function parsePath(path) {
            var points = toNumbers(path);
            var len = points.length;
            var pathPoints = [];

            for (var i = 0; i < len; i += 2) {
              pathPoints.push(new Point(points[i], points[i + 1]));
            }

            return pathPoints;
          }
        }]);

        return Point;
      }();

      var Mouse = /*#__PURE__*/function () {
        function Mouse(screen) {
          _classCallCheck2(this, Mouse);

          this.screen = screen;
          this.working = false;
          this.events = [];
          this.eventElements = []; // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

          this.onClick = this.onClick.bind(this); // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

          this.onMouseMove = this.onMouseMove.bind(this);
        }

        _createClass(Mouse, [{
          key: "isWorking",
          value: function isWorking() {
            return this.working;
          }
        }, {
          key: "start",
          value: function start() {
            if (this.working) {
              return;
            }

            var screen = this.screen,
                onClick = this.onClick,
                onMouseMove = this.onMouseMove;
            var canvas = screen.ctx.canvas;
            canvas.onclick = onClick;
            canvas.onmousemove = onMouseMove;
            this.working = true;
          }
        }, {
          key: "stop",
          value: function stop() {
            if (!this.working) {
              return;
            }

            var canvas = this.screen.ctx.canvas;
            this.working = false;
            canvas.onclick = null;
            canvas.onmousemove = null;
          }
        }, {
          key: "hasEvents",
          value: function hasEvents() {
            return this.working && this.events.length > 0;
          }
        }, {
          key: "runEvents",
          value: function runEvents() {
            if (!this.working) {
              return;
            }

            var document = this.screen,
                events = this.events,
                eventElements = this.eventElements;
            var style = document.ctx.canvas.style;

            if (style) {
              style.cursor = '';
            }

            events.forEach(function (_ref, i) {
              var run = _ref.run;
              var element = eventElements[i];

              while (element) {
                run(element);
                element = element.parent;
              }
            }); // done running, clear

            this.events = [];
            this.eventElements = [];
          }
        }, {
          key: "checkPath",
          value: function checkPath(element, ctx) {
            if (!this.working || !ctx) {
              return;
            }

            var events = this.events,
                eventElements = this.eventElements;
            events.forEach(function (_ref2, i) {
              var x = _ref2.x,
                  y = _ref2.y;

              if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) {
                eventElements[i] = element;
              }
            });
          }
        }, {
          key: "checkBoundingBox",
          value: function checkBoundingBox(element, boundingBox) {
            if (!this.working || !boundingBox) {
              return;
            }

            var events = this.events,
                eventElements = this.eventElements;
            events.forEach(function (_ref3, i) {
              var x = _ref3.x,
                  y = _ref3.y;

              if (!eventElements[i] && boundingBox.isPointInBox(x, y)) {
                eventElements[i] = element;
              }
            });
          }
        }, {
          key: "mapXY",
          value: function mapXY(x, y) {
            var _this$screen = this.screen,
                window = _this$screen.window,
                ctx = _this$screen.ctx;
            var point = new Point(x, y);
            var element = ctx.canvas;

            while (element) {
              point.x -= element.offsetLeft;
              point.y -= element.offsetTop;
              element = element.offsetParent;
            }

            if (window.scrollX) {
              point.x += window.scrollX;
            }

            if (window.scrollY) {
              point.y += window.scrollY;
            }

            return point;
          }
        }, {
          key: "onClick",
          value: function onClick(event) {
            var _this$mapXY = this.mapXY(event.clientX, event.clientY),
                x = _this$mapXY.x,
                y = _this$mapXY.y;

            this.events.push({
              type: 'onclick',
              x: x,
              y: y,
              run: function run(eventTarget) {
                if (eventTarget.onClick) {
                  eventTarget.onClick();
                }
              }
            });
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(event) {
            var _this$mapXY2 = this.mapXY(event.clientX, event.clientY),
                x = _this$mapXY2.x,
                y = _this$mapXY2.y;

            this.events.push({
              type: 'onmousemove',
              x: x,
              y: y,
              run: function run(eventTarget) {
                if (eventTarget.onMouseMove) {
                  eventTarget.onMouseMove();
                }
              }
            });
          }
        }]);

        return Mouse;
      }();

      var defaultWindow = typeof window !== 'undefined' ? window : null;
      var defaultFetch$1 = typeof fetch !== 'undefined' ? fetch.bind(undefined) // `fetch` depends on context: `someObject.fetch(...)` will throw error.
      : null;

      var Screen = /*#__PURE__*/function () {
        function Screen(ctx) {
          _classCallCheck2(this, Screen);

          var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref7$fetch = _ref7.fetch,
              fetch = _ref7$fetch === void 0 ? defaultFetch$1 : _ref7$fetch,
              _ref7$window = _ref7.window,
              window = _ref7$window === void 0 ? defaultWindow : _ref7$window;

          this.ctx = ctx;
          this.FRAMERATE = 30;
          this.MAX_VIRTUAL_PIXELS = 30000;
          this.CLIENT_WIDTH = 800;
          this.CLIENT_HEIGHT = 600;
          this.viewPort = new ViewPort();
          this.mouse = new Mouse(this);
          this.animations = [];
          this.waits = [];
          this.frameDuration = 0;
          this.isReadyLock = false;
          this.isFirstRender = true;
          this.intervalId = null;
          this.window = window;
          this.fetch = fetch;
        }

        _createClass(Screen, [{
          key: "wait",
          value: function wait(checker) {
            this.waits.push(checker);
          }
        }, {
          key: "ready",
          value: function ready() {
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            if (!this.readyPromise) {
              return Promise.resolve();
            }

            return this.readyPromise;
          }
        }, {
          key: "isReady",
          value: function isReady() {
            if (this.isReadyLock) {
              return true;
            }

            var isReadyLock = this.waits.every(function (_) {
              return _();
            });

            if (isReadyLock) {
              this.waits = [];

              if (this.resolveReady) {
                this.resolveReady();
              }
            }

            this.isReadyLock = isReadyLock;
            return isReadyLock;
          }
        }, {
          key: "setDefaults",
          value: function setDefaults(ctx) {
            // initial values and defaults
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            ctx.miterLimit = 4;
          }
        }, {
          key: "setViewBox",
          value: function setViewBox(_ref) {
            var document = _ref.document,
                ctx = _ref.ctx,
                aspectRatio = _ref.aspectRatio,
                width = _ref.width,
                desiredWidth = _ref.desiredWidth,
                height = _ref.height,
                desiredHeight = _ref.desiredHeight,
                _ref$minX = _ref.minX,
                minX = _ref$minX === void 0 ? 0 : _ref$minX,
                _ref$minY = _ref.minY,
                minY = _ref$minY === void 0 ? 0 : _ref$minY,
                refX = _ref.refX,
                refY = _ref.refY,
                _ref$clip = _ref.clip,
                clip = _ref$clip === void 0 ? false : _ref$clip,
                _ref$clipX = _ref.clipX,
                clipX = _ref$clipX === void 0 ? 0 : _ref$clipX,
                _ref$clipY = _ref.clipY,
                clipY = _ref$clipY === void 0 ? 0 : _ref$clipY; // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute

            var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, ''); // ignore defer

            var _cleanAspectRatio$spl = cleanAspectRatio.split(' '),
                _cleanAspectRatio$spl2 = _slicedToArray(_cleanAspectRatio$spl, 2),
                aspectRatioAlign = _cleanAspectRatio$spl2[0],
                aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];

            var align = aspectRatioAlign || 'xMidYMid';
            var meetOrSlice = aspectRatioMeetOrSlice || 'meet'; // calculate scale

            var scaleX = width / desiredWidth;
            var scaleY = height / desiredHeight;
            var scaleMin = Math.min(scaleX, scaleY);
            var scaleMax = Math.max(scaleX, scaleY);
            var finalDesiredWidth = desiredWidth;
            var finalDesiredHeight = desiredHeight;

            if (meetOrSlice === 'meet') {
              finalDesiredWidth *= scaleMin;
              finalDesiredHeight *= scaleMin;
            }

            if (meetOrSlice === 'slice') {
              finalDesiredWidth *= scaleMax;
              finalDesiredHeight *= scaleMax;
            }

            var refXProp = new Property(document, 'refX', refX);
            var refYProp = new Property(document, 'refY', refY);
            var hasRefs = refXProp.hasValue() && refYProp.hasValue();

            if (hasRefs) {
              ctx.translate(-scaleMin * refXProp.getPixels('x'), -scaleMin * refYProp.getPixels('y'));
            }

            if (clip) {
              var scaledClipX = scaleMin * clipX;
              var scaledClipY = scaleMin * clipY;
              ctx.beginPath();
              ctx.moveTo(scaledClipX, scaledClipY);
              ctx.lineTo(width, scaledClipY);
              ctx.lineTo(width, height);
              ctx.lineTo(scaledClipX, height);
              ctx.closePath();
              ctx.clip();
            }

            if (!hasRefs) {
              var isMeetMinY = meetOrSlice === 'meet' && scaleMin === scaleY;
              var isSliceMaxY = meetOrSlice === 'slice' && scaleMax === scaleY;
              var isMeetMinX = meetOrSlice === 'meet' && scaleMin === scaleX;
              var isSliceMaxX = meetOrSlice === 'slice' && scaleMax === scaleX;

              if (align.startsWith('xMid') && (isMeetMinY || isSliceMaxY)) {
                ctx.translate(width / 2.0 - finalDesiredWidth / 2.0, 0);
              }

              if (align.endsWith('YMid') && (isMeetMinX || isSliceMaxX)) {
                ctx.translate(0, height / 2.0 - finalDesiredHeight / 2.0);
              }

              if (align.startsWith('xMax') && (isMeetMinY || isSliceMaxY)) {
                ctx.translate(width - finalDesiredWidth, 0);
              }

              if (align.endsWith('YMax') && (isMeetMinX || isSliceMaxX)) {
                ctx.translate(0, height - finalDesiredHeight);
              }
            } // scale


            switch (true) {
              case align === 'none':
                ctx.scale(scaleX, scaleY);
                break;

              case meetOrSlice === 'meet':
                ctx.scale(scaleMin, scaleMin);
                break;

              case meetOrSlice === 'slice':
                ctx.scale(scaleMax, scaleMax);
                break;
            } // translate


            ctx.translate(-minX, -minY);
          }
        }, {
          key: "start",
          value: function start(element) {
            var _this3 = this;

            var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref8$enableRedraw = _ref8.enableRedraw,
                enableRedraw = _ref8$enableRedraw === void 0 ? false : _ref8$enableRedraw,
                _ref8$ignoreMouse = _ref8.ignoreMouse,
                ignoreMouse = _ref8$ignoreMouse === void 0 ? false : _ref8$ignoreMouse,
                _ref8$ignoreAnimation = _ref8.ignoreAnimation,
                ignoreAnimation = _ref8$ignoreAnimation === void 0 ? false : _ref8$ignoreAnimation,
                _ref8$ignoreDimension = _ref8.ignoreDimensions,
                ignoreDimensions = _ref8$ignoreDimension === void 0 ? false : _ref8$ignoreDimension,
                _ref8$ignoreClear = _ref8.ignoreClear,
                ignoreClear = _ref8$ignoreClear === void 0 ? false : _ref8$ignoreClear,
                forceRedraw = _ref8.forceRedraw,
                scaleWidth = _ref8.scaleWidth,
                scaleHeight = _ref8.scaleHeight,
                offsetX = _ref8.offsetX,
                offsetY = _ref8.offsetY;

            var FRAMERATE = this.FRAMERATE,
                mouse = this.mouse;
            var frameDuration = 1000 / FRAMERATE;
            this.frameDuration = frameDuration;
            this.readyPromise = new Promise(function (resolve) {
              _this3.resolveReady = resolve;
            });

            if (this.isReady()) {
              this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
            }

            if (!enableRedraw) {
              return;
            }

            var now = Date.now();
            var then = now;
            var delta = 0;

            var tick = function tick() {
              now = Date.now();
              delta = now - then;

              if (delta >= frameDuration) {
                then = now - delta % frameDuration;

                if (_this3.shouldUpdate(ignoreAnimation, forceRedraw)) {
                  _this3.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);

                  mouse.runEvents();
                }
              }

              _this3.intervalId = raf__WEBPACK_IMPORTED_MODULE_11___default()(tick);
            };

            if (!ignoreMouse) {
              mouse.start();
            }

            this.intervalId = raf__WEBPACK_IMPORTED_MODULE_11___default()(tick);
          }
        }, {
          key: "stop",
          value: function stop() {
            if (this.intervalId) {
              raf__WEBPACK_IMPORTED_MODULE_11___default.a.cancel(this.intervalId);
              this.intervalId = null;
            }

            this.mouse.stop();
          }
        }, {
          key: "shouldUpdate",
          value: function shouldUpdate(ignoreAnimation, forceRedraw) {
            // need update from animations?
            if (!ignoreAnimation) {
              var frameDuration = this.frameDuration;
              var shouldUpdate = this.animations.reduce(function (shouldUpdate, animation) {
                return animation.update(frameDuration) || shouldUpdate;
              }, false);

              if (shouldUpdate) {
                return true;
              }
            } // need update from redraw?


            if (typeof forceRedraw === 'function' && forceRedraw()) {
              return true;
            }

            if (!this.isReadyLock && this.isReady()) {
              return true;
            } // need update from mouse events?


            if (this.mouse.hasEvents()) {
              return true;
            }

            return false;
          }
        }, {
          key: "render",
          value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
            var CLIENT_WIDTH = this.CLIENT_WIDTH,
                CLIENT_HEIGHT = this.CLIENT_HEIGHT,
                viewPort = this.viewPort,
                ctx = this.ctx,
                isFirstRender = this.isFirstRender;
            var canvas = ctx.canvas;
            viewPort.clear();

            if (canvas.width && canvas.height) {
              viewPort.setCurrent(canvas.width, canvas.height);
            } else {
              viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
            }

            var widthStyle = element.getStyle('width');
            var heightStyle = element.getStyle('height');

            if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== 'number' && typeof scaleHeight !== 'number')) {
              // set canvas size
              if (widthStyle.hasValue()) {
                canvas.width = widthStyle.getPixels('x');

                if (canvas.style) {
                  canvas.style.width = "".concat(canvas.width, "px");
                }
              }

              if (heightStyle.hasValue()) {
                canvas.height = heightStyle.getPixels('y');

                if (canvas.style) {
                  canvas.style.height = "".concat(canvas.height, "px");
                }
              }
            }

            var cWidth = canvas.clientWidth || canvas.width;
            var cHeight = canvas.clientHeight || canvas.height;

            if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
              cWidth = widthStyle.getPixels('x');
              cHeight = heightStyle.getPixels('y');
            }

            viewPort.setCurrent(cWidth, cHeight);

            if (typeof offsetX === 'number') {
              element.getAttribute('x', true).setValue(offsetX);
            }

            if (typeof offsetY === 'number') {
              element.getAttribute('y', true).setValue(offsetY);
            }

            if (typeof scaleWidth === 'number' || typeof scaleHeight === 'number') {
              var viewBox = toNumbers(element.getAttribute('viewBox').getString());
              var xRatio = 0;
              var yRatio = 0;

              if (typeof scaleWidth === 'number') {
                var _widthStyle = element.getStyle('width');

                if (_widthStyle.hasValue()) {
                  xRatio = _widthStyle.getPixels('x') / scaleWidth;
                } else if (!isNaN(viewBox[2])) {
                  xRatio = viewBox[2] / scaleWidth;
                }
              }

              if (typeof scaleHeight === 'number') {
                var _heightStyle = element.getStyle('height');

                if (_heightStyle.hasValue()) {
                  yRatio = _heightStyle.getPixels('y') / scaleHeight;
                } else if (!isNaN(viewBox[3])) {
                  yRatio = viewBox[3] / scaleHeight;
                }
              }

              if (!xRatio) {
                xRatio = yRatio;
              }

              if (!yRatio) {
                yRatio = xRatio;
              }

              element.getAttribute('width', true).setValue(scaleWidth);
              element.getAttribute('height', true).setValue(scaleHeight);
              var transformStyle = element.getStyle('transform', true, true);
              transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1.0 / xRatio, ", ").concat(1.0 / yRatio, ")"));
            } // clear and render


            if (!ignoreClear) {
              ctx.clearRect(0, 0, cWidth, cHeight);
            }

            element.render(ctx);

            if (isFirstRender) {
              this.isFirstRender = false;
            }
          }
        }]);

        return Screen;
      }();

      Screen.defaultWindow = defaultWindow;
      Screen.defaultFetch = defaultFetch$1;
      var defaultFetch = Screen.defaultFetch;
      var DefaultDOMParser = typeof DOMParser !== 'undefined' ? DOMParser : null;

      var Parser = /*#__PURE__*/function () {
        function Parser() {
          _classCallCheck2(this, Parser);

          var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref9$fetch = _ref9.fetch,
              fetch = _ref9$fetch === void 0 ? defaultFetch : _ref9$fetch,
              _ref9$DOMParser = _ref9.DOMParser,
              DOMParser = _ref9$DOMParser === void 0 ? DefaultDOMParser : _ref9$DOMParser;

          this.fetch = fetch;
          this.DOMParser = DOMParser;
        }

        _createClass(Parser, [{
          key: "parse",
          value: function parse(resource) {
            var _this = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!resource.startsWith('<')) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", _this.parseFromString(resource));

                    case 2:
                      return _context2.abrupt("return", _this.load(resource));

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }))();
          }
        }, {
          key: "parseFromString",
          value: function parseFromString(xml) {
            var parser = new this.DOMParser();

            try {
              return this.checkDocument(parser.parseFromString(xml, 'image/svg+xml'));
            } catch (err) {
              return this.checkDocument(parser.parseFromString(xml, 'text/xml'));
            }
          }
        }, {
          key: "checkDocument",
          value: function checkDocument(document) {
            var parserError = document.getElementsByTagName('parsererror')[0];

            if (parserError) {
              throw new Error(parserError.textContent);
            }

            return document;
          }
        }, {
          key: "load",
          value: function load(url) {
            var _this2 = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var response, xml;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return _this2.fetch(url);

                    case 2:
                      response = _context3.sent;
                      _context3.next = 5;
                      return response.text();

                    case 5:
                      xml = _context3.sent;
                      return _context3.abrupt("return", _this2.parseFromString(xml));

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }))();
          }
        }]);

        return Parser;
      }();

      var Translate = /*#__PURE__*/function () {
        function Translate(_, point) {
          _classCallCheck2(this, Translate);

          this.type = 'translate';
          this.point = null;
          this.point = Point.parse(point);
        }

        _createClass(Translate, [{
          key: "apply",
          value: function apply(ctx) {
            var _this$point = this.point,
                x = _this$point.x,
                y = _this$point.y;
            ctx.translate(x || 0.0, y || 0.0);
          }
        }, {
          key: "unapply",
          value: function unapply(ctx) {
            var _this$point2 = this.point,
                x = _this$point2.x,
                y = _this$point2.y;
            ctx.translate(-1.0 * x || 0.0, -1.0 * y || 0.0);
          }
        }, {
          key: "applyToPoint",
          value: function applyToPoint(point) {
            var _this$point3 = this.point,
                x = _this$point3.x,
                y = _this$point3.y;
            point.applyTransform([1, 0, 0, 1, x || 0.0, y || 0.0]);
          }
        }]);

        return Translate;
      }();

      var Rotate = /*#__PURE__*/function () {
        function Rotate(document, rotate, transformOrigin) {
          _classCallCheck2(this, Rotate);

          this.type = 'rotate';
          this.angle = null;
          this.originX = null;
          this.originY = null;
          this.cx = 0;
          this.cy = 0;
          var numbers = toNumbers(rotate);
          this.angle = new Property(document, 'angle', numbers[0]);
          this.originX = transformOrigin[0];
          this.originY = transformOrigin[1];
          this.cx = numbers[1] || 0;
          this.cy = numbers[2] || 0;
        }

        _createClass(Rotate, [{
          key: "apply",
          value: function apply(ctx) {
            var cx = this.cx,
                cy = this.cy,
                originX = this.originX,
                originY = this.originY,
                angle = this.angle;
            var tx = cx + originX.getPixels('x');
            var ty = cy + originY.getPixels('y');
            ctx.translate(tx, ty);
            ctx.rotate(angle.getRadians());
            ctx.translate(-tx, -ty);
          }
        }, {
          key: "unapply",
          value: function unapply(ctx) {
            var cx = this.cx,
                cy = this.cy,
                originX = this.originX,
                originY = this.originY,
                angle = this.angle;
            var tx = cx + originX.getPixels('x');
            var ty = cy + originY.getPixels('y');
            ctx.translate(tx, ty);
            ctx.rotate(-1.0 * angle.getRadians());
            ctx.translate(-tx, -ty);
          }
        }, {
          key: "applyToPoint",
          value: function applyToPoint(point) {
            var cx = this.cx,
                cy = this.cy,
                angle = this.angle;
            var rad = angle.getRadians();
            point.applyTransform([1, 0, 0, 1, cx || 0.0, cy || 0.0 // this.p.y
            ]);
            point.applyTransform([Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0]);
            point.applyTransform([1, 0, 0, 1, -cx || 0.0, -cy || 0.0 // -this.p.y
            ]);
          }
        }]);

        return Rotate;
      }();

      var Scale = /*#__PURE__*/function () {
        function Scale(_, scale, transformOrigin) {
          _classCallCheck2(this, Scale);

          this.type = 'scale';
          this.scale = null;
          this.originX = null;
          this.originY = null;
          var scaleSize = Point.parseScale(scale); // Workaround for node-canvas

          if (scaleSize.x === 0 || scaleSize.y === 0) {
            scaleSize.x = PSEUDO_ZERO;
            scaleSize.y = PSEUDO_ZERO;
          }

          this.scale = scaleSize;
          this.originX = transformOrigin[0];
          this.originY = transformOrigin[1];
        }

        _createClass(Scale, [{
          key: "apply",
          value: function apply(ctx) {
            var _this$scale = this.scale,
                x = _this$scale.x,
                y = _this$scale.y,
                originX = this.originX,
                originY = this.originY;
            var tx = originX.getPixels('x');
            var ty = originY.getPixels('y');
            ctx.translate(tx, ty);
            ctx.scale(x, y || x);
            ctx.translate(-tx, -ty);
          }
        }, {
          key: "unapply",
          value: function unapply(ctx) {
            var _this$scale2 = this.scale,
                x = _this$scale2.x,
                y = _this$scale2.y,
                originX = this.originX,
                originY = this.originY;
            var tx = originX.getPixels('x');
            var ty = originY.getPixels('y');
            ctx.translate(tx, ty);
            ctx.scale(1.0 / x, 1.0 / y || x);
            ctx.translate(-tx, -ty);
          }
        }, {
          key: "applyToPoint",
          value: function applyToPoint(point) {
            var _this$scale3 = this.scale,
                x = _this$scale3.x,
                y = _this$scale3.y;
            point.applyTransform([x || 0.0, 0, 0, y || 0.0, 0, 0]);
          }
        }]);

        return Scale;
      }();

      var Matrix = /*#__PURE__*/function () {
        function Matrix(_, matrix, transformOrigin) {
          _classCallCheck2(this, Matrix);

          this.type = 'matrix';
          this.matrix = [];
          this.originX = null;
          this.originY = null;
          this.matrix = toNumbers(matrix);
          this.originX = transformOrigin[0];
          this.originY = transformOrigin[1];
        }

        _createClass(Matrix, [{
          key: "apply",
          value: function apply(ctx) {
            var originX = this.originX,
                originY = this.originY,
                matrix = this.matrix;
            var tx = originX.getPixels('x');
            var ty = originY.getPixels('y');
            ctx.translate(tx, ty);
            ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
            ctx.translate(-tx, -ty);
          }
        }, {
          key: "unapply",
          value: function unapply(ctx) {
            var originX = this.originX,
                originY = this.originY,
                matrix = this.matrix;
            var a = matrix[0];
            var b = matrix[2];
            var c = matrix[4];
            var d = matrix[1];
            var e = matrix[3];
            var f = matrix[5];
            var g = 0.0;
            var h = 0.0;
            var i = 1.0;
            var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
            var tx = originX.getPixels('x');
            var ty = originY.getPixels('y');
            ctx.translate(tx, ty);
            ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
            ctx.translate(-tx, -ty);
          }
        }, {
          key: "applyToPoint",
          value: function applyToPoint(point) {
            point.applyTransform(this.matrix);
          }
        }]);

        return Matrix;
      }();

      var Skew = /*#__PURE__*/function (_Matrix) {
        _inherits(Skew, _Matrix);

        var _super = _createSuper(Skew);

        function Skew(document, skew, transformOrigin) {
          var _this4;

          _classCallCheck2(this, Skew);

          _this4 = _super.call(this, document, skew, transformOrigin);
          _this4.type = 'skew';
          _this4.angle = null;
          _this4.angle = new Property(document, 'angle', skew);
          return _this4;
        }

        return Skew;
      }(Matrix);

      var SkewX = /*#__PURE__*/function (_Skew) {
        _inherits(SkewX, _Skew);

        var _super2 = _createSuper(SkewX);

        function SkewX(document, skew, transformOrigin) {
          var _this5;

          _classCallCheck2(this, SkewX);

          _this5 = _super2.call(this, document, skew, transformOrigin);
          _this5.type = 'skewX';
          _this5.matrix = [1, 0, Math.tan(_this5.angle.getRadians()), 1, 0, 0];
          return _this5;
        }

        return SkewX;
      }(Skew);

      var SkewY = /*#__PURE__*/function (_Skew2) {
        _inherits(SkewY, _Skew2);

        var _super3 = _createSuper(SkewY);

        function SkewY(document, skew, transformOrigin) {
          var _this6;

          _classCallCheck2(this, SkewY);

          _this6 = _super3.call(this, document, skew, transformOrigin);
          _this6.type = 'skewY';
          _this6.matrix = [1, Math.tan(_this6.angle.getRadians()), 0, 1, 0, 0];
          return _this6;
        }

        return SkewY;
      }(Skew);

      function parseTransforms(transform) {
        return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ') $1').replace(/\)(\s?,\s?)/g, ') ').split(/\s(?=[a-z])/);
      }

      function parseTransform(transform) {
        var _transform$split = transform.split('('),
            _transform$split2 = _slicedToArray(_transform$split, 2),
            type = _transform$split2[0],
            value = _transform$split2[1];

        return [type.trim(), value.trim().replace(')', '')];
      }

      var Transform = /*#__PURE__*/function () {
        function Transform(document, transform, transformOrigin) {
          var _this7 = this;

          _classCallCheck2(this, Transform);

          this.document = document;
          this.transforms = [];
          var data = parseTransforms(transform);
          data.forEach(function (transform) {
            if (transform === 'none') {
              return;
            }

            var _parseTransform = parseTransform(transform),
                _parseTransform2 = _slicedToArray(_parseTransform, 2),
                type = _parseTransform2[0],
                value = _parseTransform2[1];

            var TransformType = Transform.transformTypes[type];

            if (typeof TransformType !== 'undefined') {
              _this7.transforms.push(new TransformType(_this7.document, value, transformOrigin));
            }
          });
        }

        _createClass(Transform, [{
          key: "apply",
          value: function apply(ctx) {
            var transforms = this.transforms;
            var len = transforms.length;

            for (var i = 0; i < len; i++) {
              transforms[i].apply(ctx);
            }
          }
        }, {
          key: "unapply",
          value: function unapply(ctx) {
            var transforms = this.transforms;
            var len = transforms.length;

            for (var i = len - 1; i >= 0; i--) {
              transforms[i].unapply(ctx);
            }
          } // TODO: applyToPoint unused ... remove?

        }, {
          key: "applyToPoint",
          value: function applyToPoint(point) {
            var transforms = this.transforms;
            var len = transforms.length;

            for (var i = 0; i < len; i++) {
              transforms[i].applyToPoint(point);
            }
          }
        }], [{
          key: "fromElement",
          value: function fromElement(document, element) {
            var transformStyle = element.getStyle('transform', false, true);

            var _element$getStyle$spl = element.getStyle('transform-origin', false, true).split(),
                _element$getStyle$spl2 = _slicedToArray(_element$getStyle$spl, 2),
                transformOriginXProperty = _element$getStyle$spl2[0],
                _element$getStyle$spl3 = _element$getStyle$spl2[1],
                transformOriginYProperty = _element$getStyle$spl3 === void 0 ? transformOriginXProperty : _element$getStyle$spl3;

            var transformOrigin = [transformOriginXProperty, transformOriginYProperty];

            if (transformStyle.hasValue()) {
              return new Transform(document, transformStyle.getString(), transformOrigin);
            }

            return null;
          }
        }]);

        return Transform;
      }();

      Transform.transformTypes = {
        translate: Translate,
        rotate: Rotate,
        scale: Scale,
        matrix: Matrix,
        skewX: SkewX,
        skewY: SkewY
      };

      var Element = /*#__PURE__*/function () {
        function Element(document, node) {
          var _this8 = this;

          _classCallCheck2(this, Element);

          var captureTextNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          this.document = document;
          this.node = node;
          this.captureTextNodes = captureTextNodes;
          this.attributes = {};
          this.styles = {};
          this.stylesSpecificity = {};
          this.animationFrozen = false;
          this.animationFrozenValue = '';
          this.parent = null;
          this.children = [];

          if (!node || node.nodeType !== 1) {
            // ELEMENT_NODE
            return;
          } // add attributes


          Array.from(node.attributes).forEach(function (attribute) {
            var nodeName = normalizeAttributeName(attribute.nodeName);
            _this8.attributes[nodeName] = new Property(document, nodeName, attribute.value);
          });
          this.addStylesFromStyleDefinition(); // add inline styles

          if (this.getAttribute('style').hasValue()) {
            var styles = this.getAttribute('style').getString().split(';').map(function (_) {
              return _.trim();
            });
            styles.forEach(function (style) {
              if (!style) {
                return;
              }

              var _style$split$map = style.split(':').map(function (_) {
                return _.trim();
              }),
                  _style$split$map2 = _slicedToArray(_style$split$map, 2),
                  name = _style$split$map2[0],
                  value = _style$split$map2[1];

              _this8.styles[name] = new Property(document, name, value);
            });
          }

          var definitions = document.definitions;
          var id = this.getAttribute('id'); // add id

          if (id.hasValue()) {
            if (!definitions[id.getString()]) {
              definitions[id.getString()] = this;
            }
          }

          Array.from(node.childNodes).forEach(function (childNode) {
            if (childNode.nodeType === 1) {
              _this8.addChild(childNode); // ELEMENT_NODE

            } else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
              var textNode = document.createTextNode(childNode);

              if (textNode.getText().length > 0) {
                _this8.addChild(textNode); // TEXT_NODE

              }
            }
          });
        }

        _createClass(Element, [{
          key: "getAttribute",
          value: function getAttribute(name) {
            var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var attr = this.attributes[name];

            if (!attr && createIfNotExists) {
              var _attr = new Property(this.document, name, '');

              this.attributes[name] = _attr;
              return _attr;
            }

            return attr || Property.empty(this.document);
          }
        }, {
          key: "getHrefAttribute",
          value: function getHrefAttribute() {
            for (var key in this.attributes) {
              if (key === 'href' || key.endsWith(':href')) {
                return this.attributes[key];
              }
            }

            return Property.empty(this.document);
          }
        }, {
          key: "getStyle",
          value: function getStyle(name) {
            var createIfNotExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var skipAncestors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var style = this.styles[name];

            if (style) {
              return style;
            }

            var attr = this.getAttribute(name);

            if (attr !== null && attr !== void 0 && attr.hasValue()) {
              this.styles[name] = attr; // move up to me to cache

              return attr;
            }

            if (!skipAncestors) {
              var parent = this.parent;

              if (parent) {
                var parentStyle = parent.getStyle(name);

                if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) {
                  return parentStyle;
                }
              }
            }

            if (createIfNotExists) {
              var _style = new Property(this.document, name, '');

              this.styles[name] = _style;
              return _style;
            }

            return style || Property.empty(this.document);
          }
        }, {
          key: "render",
          value: function render(ctx) {
            // don't render display=none
            // don't render visibility=hidden
            if (this.getStyle('display').getString() === 'none' || this.getStyle('visibility').getString() === 'hidden') {
              return;
            }

            ctx.save();

            if (this.getStyle('mask').hasValue()) {
              // mask
              var mask = this.getStyle('mask').getDefinition();

              if (mask) {
                this.applyEffects(ctx);
                mask.apply(ctx, this);
              }
            } else if (this.getStyle('filter').getValue('none') !== 'none') {
              // filter
              var filter = this.getStyle('filter').getDefinition();

              if (filter) {
                this.applyEffects(ctx);
                filter.apply(ctx, this);
              }
            } else {
              this.setContext(ctx);
              this.renderChildren(ctx);
              this.clearContext(ctx);
            }

            ctx.restore();
          }
        }, {
          key: "setContext",
          value: function setContext(_) {// NO RENDER
          }
        }, {
          key: "applyEffects",
          value: function applyEffects(ctx) {
            // transform
            var transform = Transform.fromElement(this.document, this);

            if (transform) {
              transform.apply(ctx);
            } // clip


            var clipPathStyleProp = this.getStyle('clip-path', false, true);

            if (clipPathStyleProp.hasValue()) {
              var clip = clipPathStyleProp.getDefinition();

              if (clip) {
                clip.apply(ctx);
              }
            }
          }
        }, {
          key: "clearContext",
          value: function clearContext(_) {// NO RENDER
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            this.children.forEach(function (child) {
              child.render(ctx);
            });
          }
        }, {
          key: "addChild",
          value: function addChild(childNode) {
            var child = childNode instanceof Element ? childNode : this.document.createElement(childNode);
            child.parent = this;

            if (!Element.ignoreChildTypes.includes(child.type)) {
              this.children.push(child);
            }
          }
        }, {
          key: "matchesSelector",
          value: function matchesSelector(selector) {
            var node = this.node;

            if (typeof node.matches === 'function') {
              return node.matches(selector);
            }

            var styleClasses = node.getAttribute('class');

            if (!styleClasses || styleClasses === '') {
              return false;
            }

            return styleClasses.split(' ').some(function (styleClass) {
              return ".".concat(styleClass) === selector;
            });
          }
        }, {
          key: "addStylesFromStyleDefinition",
          value: function addStylesFromStyleDefinition() {
            var _this$document = this.document,
                styles = _this$document.styles,
                stylesSpecificity = _this$document.stylesSpecificity;

            for (var selector in styles) {
              if (!selector.startsWith('@') && this.matchesSelector(selector)) {
                var style = styles[selector];
                var specificity = stylesSpecificity[selector];

                if (style) {
                  for (var name in style) {
                    var existingSpecificity = this.stylesSpecificity[name];

                    if (typeof existingSpecificity === 'undefined') {
                      existingSpecificity = '000';
                    }

                    if (specificity >= existingSpecificity) {
                      this.styles[name] = style[name];
                      this.stylesSpecificity[name] = specificity;
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "removeStyles",
          value: function removeStyles(element, ignoreStyles) {
            var toRestore = ignoreStyles.reduce(function (toRestore, name) {
              var styleProp = element.getStyle(name);

              if (!styleProp.hasValue()) {
                return toRestore;
              }

              var value = styleProp.getString();
              styleProp.setValue('');
              return [].concat(_toConsumableArray(toRestore), [[name, value]]);
            }, []);
            return toRestore;
          }
        }, {
          key: "restoreStyles",
          value: function restoreStyles(element, styles) {
            styles.forEach(function (_ref) {
              var _ref10 = _slicedToArray(_ref, 2),
                  name = _ref10[0],
                  value = _ref10[1];

              element.getStyle(name, true).setValue(value);
            });
          }
        }]);

        return Element;
      }();

      Element.ignoreChildTypes = ['title'];

      var UnknownElement = /*#__PURE__*/function (_Element) {
        _inherits(UnknownElement, _Element);

        var _super4 = _createSuper(UnknownElement);

        function UnknownElement(document, node, captureTextNodes) {
          _classCallCheck2(this, UnknownElement);

          return _super4.call(this, document, node, captureTextNodes);
        }

        return UnknownElement;
      }(Element);

      function wrapFontFamily(fontFamily) {
        var trimmed = fontFamily.trim();
        return /^('|")/.test(trimmed) ? trimmed : "\"".concat(trimmed, "\"");
      }

      function prepareFontFamily(fontFamily) {
        return typeof process === 'undefined' ? fontFamily : fontFamily.trim().split(',').map(wrapFontFamily).join(',');
      }
      /**
       * https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
       * @param fontStyle
       * @returns CSS font style.
       */


      function prepareFontStyle(fontStyle) {
        if (!fontStyle) {
          return '';
        }

        var targetFontStyle = fontStyle.trim().toLowerCase();

        switch (targetFontStyle) {
          case 'normal':
          case 'italic':
          case 'oblique':
          case 'inherit':
          case 'initial':
          case 'unset':
            return targetFontStyle;

          default:
            if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) {
              return targetFontStyle;
            }

            return '';
        }
      }
      /**
       * https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight
       * @param fontWeight
       * @returns CSS font weight.
       */


      function prepareFontWeight(fontWeight) {
        if (!fontWeight) {
          return '';
        }

        var targetFontWeight = fontWeight.trim().toLowerCase();

        switch (targetFontWeight) {
          case 'normal':
          case 'bold':
          case 'lighter':
          case 'bolder':
          case 'inherit':
          case 'initial':
          case 'unset':
            return targetFontWeight;

          default:
            if (/^[\d.]+$/.test(targetFontWeight)) {
              return targetFontWeight;
            }

            return '';
        }
      }

      var Font = /*#__PURE__*/function () {
        function Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
          _classCallCheck2(this, Font);

          var inheritFont = inherit ? typeof inherit === 'string' ? Font.parse(inherit) : inherit : {};
          this.fontFamily = fontFamily || inheritFont.fontFamily;
          this.fontSize = fontSize || inheritFont.fontSize;
          this.fontStyle = fontStyle || inheritFont.fontStyle;
          this.fontWeight = fontWeight || inheritFont.fontWeight;
          this.fontVariant = fontVariant || inheritFont.fontVariant;
        }

        _createClass(Font, [{
          key: "toString",
          value: function toString() {
            return [prepareFontStyle(this.fontStyle), this.fontVariant, prepareFontWeight(this.fontWeight), this.fontSize, // Wrap fontFamily only on nodejs and only for canvas.ctx
            prepareFontFamily(this.fontFamily)].join(' ').trim();
          }
        }], [{
          key: "parse",
          value: function parse() {
            var font = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var inherit = arguments.length > 1 ? arguments[1] : undefined;
            var fontStyle = '';
            var fontVariant = '';
            var fontWeight = '';
            var fontSize = '';
            var fontFamily = '';
            var parts = compressSpaces(font).trim().split(' ');
            var set = {
              fontSize: false,
              fontStyle: false,
              fontWeight: false,
              fontVariant: false
            };
            parts.forEach(function (part) {
              switch (true) {
                case !set.fontStyle && Font.styles.includes(part):
                  if (part !== 'inherit') {
                    fontStyle = part;
                  }

                  set.fontStyle = true;
                  break;

                case !set.fontVariant && Font.variants.includes(part):
                  if (part !== 'inherit') {
                    fontVariant = part;
                  }

                  set.fontStyle = true;
                  set.fontVariant = true;
                  break;

                case !set.fontWeight && Font.weights.includes(part):
                  if (part !== 'inherit') {
                    fontWeight = part;
                  }

                  set.fontStyle = true;
                  set.fontVariant = true;
                  set.fontWeight = true;
                  break;

                case !set.fontSize:
                  if (part !== 'inherit') {
                    var _part$split = part.split('/');

                    var _part$split2 = _slicedToArray(_part$split, 1);

                    fontSize = _part$split2[0];
                  }

                  set.fontStyle = true;
                  set.fontVariant = true;
                  set.fontWeight = true;
                  set.fontSize = true;
                  break;

                default:
                  if (part !== 'inherit') {
                    fontFamily += part;
                  }

              }
            });
            return new Font(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
          }
        }]);

        return Font;
      }();

      Font.styles = 'normal|italic|oblique|inherit';
      Font.variants = 'normal|small-caps|inherit';
      Font.weights = 'normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit';

      var BoundingBox = /*#__PURE__*/function () {
        function BoundingBox() {
          _classCallCheck2(this, BoundingBox);

          var x1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.NaN;
          var y1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.NaN;
          var x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.NaN;
          var y2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Number.NaN;
          this.x1 = x1;
          this.y1 = y1;
          this.x2 = x2;
          this.y2 = y2;
          this.addPoint(x1, y1);
          this.addPoint(x2, y2);
        }

        _createClass(BoundingBox, [{
          key: "addPoint",
          value: function addPoint(x, y) {
            if (typeof x !== 'undefined') {
              if (isNaN(this.x1) || isNaN(this.x2)) {
                this.x1 = x;
                this.x2 = x;
              }

              if (x < this.x1) {
                this.x1 = x;
              }

              if (x > this.x2) {
                this.x2 = x;
              }
            }

            if (typeof y !== 'undefined') {
              if (isNaN(this.y1) || isNaN(this.y2)) {
                this.y1 = y;
                this.y2 = y;
              }

              if (y < this.y1) {
                this.y1 = y;
              }

              if (y > this.y2) {
                this.y2 = y;
              }
            }
          }
        }, {
          key: "addX",
          value: function addX(x) {
            this.addPoint(x, null);
          }
        }, {
          key: "addY",
          value: function addY(y) {
            this.addPoint(null, y);
          }
        }, {
          key: "addBoundingBox",
          value: function addBoundingBox(boundingBox) {
            if (!boundingBox) {
              return;
            }

            var x1 = boundingBox.x1,
                y1 = boundingBox.y1,
                x2 = boundingBox.x2,
                y2 = boundingBox.y2;
            this.addPoint(x1, y1);
            this.addPoint(x2, y2);
          }
        }, {
          key: "sumCubic",
          value: function sumCubic(t, p0, p1, p2, p3) {
            return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
          }
        }, {
          key: "bezierCurveAdd",
          value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
            var b = 6 * p0 - 12 * p1 + 6 * p2;
            var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
            var c = 3 * p1 - 3 * p0;

            if (a === 0) {
              if (b === 0) {
                return;
              }

              var t = -c / b;

              if (0 < t && t < 1) {
                if (forX) {
                  this.addX(this.sumCubic(t, p0, p1, p2, p3));
                } else {
                  this.addY(this.sumCubic(t, p0, p1, p2, p3));
                }
              }

              return;
            }

            var b2ac = Math.pow(b, 2) - 4 * c * a;

            if (b2ac < 0) {
              return;
            }

            var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);

            if (0 < t1 && t1 < 1) {
              if (forX) {
                this.addX(this.sumCubic(t1, p0, p1, p2, p3));
              } else {
                this.addY(this.sumCubic(t1, p0, p1, p2, p3));
              }
            }

            var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);

            if (0 < t2 && t2 < 1) {
              if (forX) {
                this.addX(this.sumCubic(t2, p0, p1, p2, p3));
              } else {
                this.addY(this.sumCubic(t2, p0, p1, p2, p3));
              }
            }
          } // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html

        }, {
          key: "addBezierCurve",
          value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
            this.addPoint(p0x, p0y);
            this.addPoint(p3x, p3y);
            this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
            this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
          }
        }, {
          key: "addQuadraticCurve",
          value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
            var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)

            var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)

            var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)

            var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)

            this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
          }
        }, {
          key: "isPointInBox",
          value: function isPointInBox(x, y) {
            var x1 = this.x1,
                y1 = this.y1,
                x2 = this.x2,
                y2 = this.y2;
            return x1 <= x && x <= x2 && y1 <= y && y <= y2;
          }
        }, {
          key: "x",
          get: function get() {
            return this.x1;
          }
        }, {
          key: "y",
          get: function get() {
            return this.y1;
          }
        }, {
          key: "width",
          get: function get() {
            return this.x2 - this.x1;
          }
        }, {
          key: "height",
          get: function get() {
            return this.y2 - this.y1;
          }
        }]);

        return BoundingBox;
      }();

      var PathParser = /*#__PURE__*/function (_svg_pathdata__WEBPAC) {
        _inherits(PathParser, _svg_pathdata__WEBPAC);

        var _super5 = _createSuper(PathParser);

        function PathParser(path) {
          var _this9;

          _classCallCheck2(this, PathParser);

          _this9 = _super5.call(this, path // Fix spaces after signs.
          .replace(/([+\-.])\s+/gm, '$1') // Remove invalid part.
          .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ''));
          _this9.control = null;
          _this9.start = null;
          _this9.current = null;
          _this9.command = null;
          _this9.commands = _this9.commands;
          _this9.i = -1;
          _this9.previousCommand = null;
          _this9.points = [];
          _this9.angles = [];
          return _this9;
        }

        _createClass(PathParser, [{
          key: "reset",
          value: function reset() {
            this.i = -1;
            this.command = null;
            this.previousCommand = null;
            this.start = new Point(0, 0);
            this.control = new Point(0, 0);
            this.current = new Point(0, 0);
            this.points = [];
            this.angles = [];
          }
        }, {
          key: "isEnd",
          value: function isEnd() {
            var i = this.i,
                commands = this.commands;
            return i >= commands.length - 1;
          }
        }, {
          key: "next",
          value: function next() {
            var command = this.commands[++this.i];
            this.previousCommand = this.command;
            this.command = command;
            return command;
          }
        }, {
          key: "getPoint",
          value: function getPoint() {
            var xProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'x';
            var yProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
            var point = new Point(this.command[xProp], this.command[yProp]);
            return this.makeAbsolute(point);
          }
        }, {
          key: "getAsControlPoint",
          value: function getAsControlPoint(xProp, yProp) {
            var point = this.getPoint(xProp, yProp);
            this.control = point;
            return point;
          }
        }, {
          key: "getAsCurrentPoint",
          value: function getAsCurrentPoint(xProp, yProp) {
            var point = this.getPoint(xProp, yProp);
            this.current = point;
            return point;
          }
        }, {
          key: "getReflectedControlPoint",
          value: function getReflectedControlPoint() {
            var previousCommand = this.previousCommand.type;

            if (previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__["SVGPathData"].CURVE_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__["SVGPathData"].SMOOTH_CURVE_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__["SVGPathData"].QUAD_TO && previousCommand !== svg_pathdata__WEBPACK_IMPORTED_MODULE_17__["SVGPathData"].SMOOTH_QUAD_TO) {
              return this.current;
            } // reflect point


            var _this$current = this.current,
                cx = _this$current.x,
                cy = _this$current.y,
                _this$control = this.control,
                ox = _this$control.x,
                oy = _this$control.y;
            var point = new Point(2 * cx - ox, 2 * cy - oy);
            return point;
          }
        }, {
          key: "makeAbsolute",
          value: function makeAbsolute(point) {
            if (this.command.relative) {
              var _this$current2 = this.current,
                  x = _this$current2.x,
                  y = _this$current2.y;
              point.x += x;
              point.y += y;
            }

            return point;
          }
        }, {
          key: "addMarker",
          value: function addMarker(point, from, priorTo) {
            var points = this.points,
                angles = this.angles; // if the last angle isn't filled in because we didn't have this point yet ...

            if (priorTo && angles.length > 0 && !angles[angles.length - 1]) {
              angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
            }

            this.addMarkerAngle(point, from ? from.angleTo(point) : null);
          }
        }, {
          key: "addMarkerAngle",
          value: function addMarkerAngle(point, angle) {
            this.points.push(point);
            this.angles.push(angle);
          }
        }, {
          key: "getMarkerPoints",
          value: function getMarkerPoints() {
            return this.points;
          }
        }, {
          key: "getMarkerAngles",
          value: function getMarkerAngles() {
            var angles = this.angles;
            var len = angles.length;

            for (var i = 0; i < len; i++) {
              if (!angles[i]) {
                for (var j = i + 1; j < len; j++) {
                  if (angles[j]) {
                    angles[i] = angles[j];
                    break;
                  }
                }
              }
            }

            return angles;
          }
        }]);

        return PathParser;
      }(svg_pathdata__WEBPACK_IMPORTED_MODULE_17__["SVGPathData"]);

      var RenderedElement = /*#__PURE__*/function (_Element2) {
        _inherits(RenderedElement, _Element2);

        var _super6 = _createSuper(RenderedElement);

        function RenderedElement() {
          var _this10;

          _classCallCheck2(this, RenderedElement);

          _this10 = _super6.apply(this, arguments);
          _this10.modifiedEmSizeStack = false;
          return _this10;
        }

        _createClass(RenderedElement, [{
          key: "calculateOpacity",
          value: function calculateOpacity() {
            var opacity = 1.0; // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this

            var element = this;

            while (element) {
              var opacityStyle = element.getStyle('opacity', false, true); // no ancestors on style call

              if (opacityStyle.hasValue(true)) {
                opacity *= opacityStyle.getNumber();
              }

              element = element.parent;
            }

            return opacity;
          }
        }, {
          key: "setContext",
          value: function setContext(ctx) {
            var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (!fromMeasure) {
              // causes stack overflow when measuring text with gradients
              // fill
              var fillStyleProp = this.getStyle('fill');
              var fillOpacityStyleProp = this.getStyle('fill-opacity');
              var strokeStyleProp = this.getStyle('stroke');
              var strokeOpacityProp = this.getStyle('stroke-opacity');

              if (fillStyleProp.isUrlDefinition()) {
                var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);

                if (fillStyle) {
                  ctx.fillStyle = fillStyle;
                }
              } else if (fillStyleProp.hasValue()) {
                if (fillStyleProp.getString() === 'currentColor') {
                  fillStyleProp.setValue(this.getStyle('color').getColor());
                }

                var _fillStyle = fillStyleProp.getColor();

                if (_fillStyle !== 'inherit') {
                  ctx.fillStyle = _fillStyle === 'none' ? 'rgba(0,0,0,0)' : _fillStyle;
                }
              }

              if (fillOpacityStyleProp.hasValue()) {
                var _fillStyle2 = new Property(this.document, 'fill', ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();

                ctx.fillStyle = _fillStyle2;
              } // stroke


              if (strokeStyleProp.isUrlDefinition()) {
                var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);

                if (strokeStyle) {
                  ctx.strokeStyle = strokeStyle;
                }
              } else if (strokeStyleProp.hasValue()) {
                if (strokeStyleProp.getString() === 'currentColor') {
                  strokeStyleProp.setValue(this.getStyle('color').getColor());
                }

                var _strokeStyle = strokeStyleProp.getString();

                if (_strokeStyle !== 'inherit') {
                  ctx.strokeStyle = _strokeStyle === 'none' ? 'rgba(0,0,0,0)' : _strokeStyle;
                }
              }

              if (strokeOpacityProp.hasValue()) {
                var _strokeStyle2 = new Property(this.document, 'stroke', ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();

                ctx.strokeStyle = _strokeStyle2;
              }

              var strokeWidthStyleProp = this.getStyle('stroke-width');

              if (strokeWidthStyleProp.hasValue()) {
                var newLineWidth = strokeWidthStyleProp.getPixels();
                ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO // browsers don't respect 0 (or node-canvas? :-)
                : newLineWidth;
              }

              var strokeLinecapStyleProp = this.getStyle('stroke-linecap');
              var strokeLinejoinStyleProp = this.getStyle('stroke-linejoin');
              var strokeMiterlimitProp = this.getStyle('stroke-miterlimit'); // NEED TEST
              // const pointOrderStyleProp = this.getStyle('paint-order');

              var strokeDasharrayStyleProp = this.getStyle('stroke-dasharray');
              var strokeDashoffsetProp = this.getStyle('stroke-dashoffset');

              if (strokeLinecapStyleProp.hasValue()) {
                ctx.lineCap = strokeLinecapStyleProp.getString();
              }

              if (strokeLinejoinStyleProp.hasValue()) {
                ctx.lineJoin = strokeLinejoinStyleProp.getString();
              }

              if (strokeMiterlimitProp.hasValue()) {
                ctx.miterLimit = strokeMiterlimitProp.getNumber();
              } // NEED TEST
              // if (pointOrderStyleProp.hasValue()) {
              // 	// ?
              // 	ctx.paintOrder = pointOrderStyleProp.getValue();
              // }


              if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== 'none') {
                var gaps = toNumbers(strokeDasharrayStyleProp.getString());

                if (typeof ctx.setLineDash !== 'undefined') {
                  ctx.setLineDash(gaps);
                } else // @ts-expect-error Handle browser prefix.
                  if (typeof ctx.webkitLineDash !== 'undefined') {
                    // @ts-expect-error Handle browser prefix.
                    ctx.webkitLineDash = gaps;
                  } else // @ts-expect-error Handle browser prefix.
                    if (typeof ctx.mozDash !== 'undefined' && !(gaps.length === 1 && gaps[0] === 0)) {
                      // @ts-expect-error Handle browser prefix.
                      ctx.mozDash = gaps;
                    }

                var offset = strokeDashoffsetProp.getPixels();

                if (typeof ctx.lineDashOffset !== 'undefined') {
                  ctx.lineDashOffset = offset;
                } else // @ts-expect-error Handle browser prefix.
                  if (typeof ctx.webkitLineDashOffset !== 'undefined') {
                    // @ts-expect-error Handle browser prefix.
                    ctx.webkitLineDashOffset = offset;
                  } else // @ts-expect-error Handle browser prefix.
                    if (typeof ctx.mozDashOffset !== 'undefined') {
                      // @ts-expect-error Handle browser prefix.
                      ctx.mozDashOffset = offset;
                    }
              }
            } // font


            this.modifiedEmSizeStack = false;

            if (typeof ctx.font !== 'undefined') {
              var fontStyleProp = this.getStyle('font');
              var fontStyleStyleProp = this.getStyle('font-style');
              var fontVariantStyleProp = this.getStyle('font-variant');
              var fontWeightStyleProp = this.getStyle('font-weight');
              var fontSizeStyleProp = this.getStyle('font-size');
              var fontFamilyStyleProp = this.getStyle('font-family');
              var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : '', fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
              fontStyleStyleProp.setValue(font.fontStyle);
              fontVariantStyleProp.setValue(font.fontVariant);
              fontWeightStyleProp.setValue(font.fontWeight);
              fontSizeStyleProp.setValue(font.fontSize);
              fontFamilyStyleProp.setValue(font.fontFamily);
              ctx.font = font.toString();

              if (fontSizeStyleProp.isPixels()) {
                this.document.emSize = fontSizeStyleProp.getPixels();
                this.modifiedEmSizeStack = true;
              }
            }

            if (!fromMeasure) {
              // effects
              this.applyEffects(ctx); // opacity

              ctx.globalAlpha = this.calculateOpacity();
            }
          }
        }, {
          key: "clearContext",
          value: function clearContext(ctx) {
            _get(_getPrototypeOf(RenderedElement.prototype), "clearContext", this).call(this, ctx);

            if (this.modifiedEmSizeStack) {
              this.document.popEmSize();
            }
          }
        }]);

        return RenderedElement;
      }(Element);

      var PathElement = /*#__PURE__*/function (_RenderedElement) {
        _inherits(PathElement, _RenderedElement);

        var _super7 = _createSuper(PathElement);

        function PathElement(document, node, captureTextNodes) {
          var _this11;

          _classCallCheck2(this, PathElement);

          _this11 = _super7.call(this, document, node, captureTextNodes);
          _this11.type = 'path';
          _this11.pathParser = null;
          _this11.pathParser = new PathParser(_this11.getAttribute('d').getString());
          return _this11;
        }

        _createClass(PathElement, [{
          key: "path",
          value: function path(ctx) {
            var pathParser = this.pathParser;
            var boundingBox = new BoundingBox();
            pathParser.reset();

            if (ctx) {
              ctx.beginPath();
            }

            while (!pathParser.isEnd()) {
              switch (pathParser.next().type) {
                case PathParser.MOVE_TO:
                  this.pathM(ctx, boundingBox);
                  break;

                case PathParser.LINE_TO:
                  this.pathL(ctx, boundingBox);
                  break;

                case PathParser.HORIZ_LINE_TO:
                  this.pathH(ctx, boundingBox);
                  break;

                case PathParser.VERT_LINE_TO:
                  this.pathV(ctx, boundingBox);
                  break;

                case PathParser.CURVE_TO:
                  this.pathC(ctx, boundingBox);
                  break;

                case PathParser.SMOOTH_CURVE_TO:
                  this.pathS(ctx, boundingBox);
                  break;

                case PathParser.QUAD_TO:
                  this.pathQ(ctx, boundingBox);
                  break;

                case PathParser.SMOOTH_QUAD_TO:
                  this.pathT(ctx, boundingBox);
                  break;

                case PathParser.ARC:
                  this.pathA(ctx, boundingBox);
                  break;

                case PathParser.CLOSE_PATH:
                  this.pathZ(ctx, boundingBox);
                  break;
              }
            }

            return boundingBox;
          }
        }, {
          key: "getBoundingBox",
          value: function getBoundingBox(_) {
            return this.path();
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            var pathParser = this.pathParser;
            var points = pathParser.getMarkerPoints();
            var angles = pathParser.getMarkerAngles();
            var markers = points.map(function (point, i) {
              return [point, angles[i]];
            });
            return markers;
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            this.path(ctx);
            this.document.screen.mouse.checkPath(this, ctx);
            var fillRuleStyleProp = this.getStyle('fill-rule');

            if (ctx.fillStyle !== '') {
              if (fillRuleStyleProp.getString('inherit') !== 'inherit') {
                ctx.fill(fillRuleStyleProp.getString());
              } else {
                ctx.fill();
              }
            }

            if (ctx.strokeStyle !== '') {
              if (this.getAttribute('vector-effect').getString() === 'non-scaling-stroke') {
                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.stroke();
                ctx.restore();
              } else {
                ctx.stroke();
              }
            }

            var markers = this.getMarkers();

            if (markers) {
              var markersLastIndex = markers.length - 1;
              var markerStartStyleProp = this.getStyle('marker-start');
              var markerMidStyleProp = this.getStyle('marker-mid');
              var markerEndStyleProp = this.getStyle('marker-end');

              if (markerStartStyleProp.isUrlDefinition()) {
                var marker = markerStartStyleProp.getDefinition();

                var _markers$ = _slicedToArray(markers[0], 2),
                    point = _markers$[0],
                    angle = _markers$[1];

                marker.render(ctx, point, angle);
              }

              if (markerMidStyleProp.isUrlDefinition()) {
                var _marker = markerMidStyleProp.getDefinition();

                for (var i = 1; i < markersLastIndex; i++) {
                  var _markers$i = _slicedToArray(markers[i], 2),
                      _point = _markers$i[0],
                      _angle = _markers$i[1];

                  _marker.render(ctx, _point, _angle);
                }
              }

              if (markerEndStyleProp.isUrlDefinition()) {
                var _marker2 = markerEndStyleProp.getDefinition();

                var _markers$markersLastI = _slicedToArray(markers[markersLastIndex], 2),
                    _point2 = _markers$markersLastI[0],
                    _angle2 = _markers$markersLastI[1];

                _marker2.render(ctx, _point2, _angle2);
              }
            }
          }
        }, {
          key: "pathM",
          value: function pathM(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathM = PathElement.pathM(pathParser),
                point = _PathElement$pathM.point;

            var x = point.x,
                y = point.y;
            pathParser.addMarker(point);
            boundingBox.addPoint(x, y);

            if (ctx) {
              ctx.moveTo(x, y);
            }
          }
        }, {
          key: "pathL",
          value: function pathL(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathL = PathElement.pathL(pathParser),
                current = _PathElement$pathL.current,
                point = _PathElement$pathL.point;

            var x = point.x,
                y = point.y;
            pathParser.addMarker(point, current);
            boundingBox.addPoint(x, y);

            if (ctx) {
              ctx.lineTo(x, y);
            }
          }
        }, {
          key: "pathH",
          value: function pathH(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathH = PathElement.pathH(pathParser),
                current = _PathElement$pathH.current,
                point = _PathElement$pathH.point;

            var x = point.x,
                y = point.y;
            pathParser.addMarker(point, current);
            boundingBox.addPoint(x, y);

            if (ctx) {
              ctx.lineTo(x, y);
            }
          }
        }, {
          key: "pathV",
          value: function pathV(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathV = PathElement.pathV(pathParser),
                current = _PathElement$pathV.current,
                point = _PathElement$pathV.point;

            var x = point.x,
                y = point.y;
            pathParser.addMarker(point, current);
            boundingBox.addPoint(x, y);

            if (ctx) {
              ctx.lineTo(x, y);
            }
          }
        }, {
          key: "pathC",
          value: function pathC(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathC = PathElement.pathC(pathParser),
                current = _PathElement$pathC.current,
                point = _PathElement$pathC.point,
                controlPoint = _PathElement$pathC.controlPoint,
                currentPoint = _PathElement$pathC.currentPoint;

            pathParser.addMarker(currentPoint, controlPoint, point);
            boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

            if (ctx) {
              ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
          }
        }, {
          key: "pathS",
          value: function pathS(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathS = PathElement.pathS(pathParser),
                current = _PathElement$pathS.current,
                point = _PathElement$pathS.point,
                controlPoint = _PathElement$pathS.controlPoint,
                currentPoint = _PathElement$pathS.currentPoint;

            pathParser.addMarker(currentPoint, controlPoint, point);
            boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

            if (ctx) {
              ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
          }
        }, {
          key: "pathQ",
          value: function pathQ(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathQ = PathElement.pathQ(pathParser),
                current = _PathElement$pathQ.current,
                controlPoint = _PathElement$pathQ.controlPoint,
                currentPoint = _PathElement$pathQ.currentPoint;

            pathParser.addMarker(currentPoint, controlPoint, controlPoint);
            boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

            if (ctx) {
              ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
          }
        }, {
          key: "pathT",
          value: function pathT(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathT = PathElement.pathT(pathParser),
                current = _PathElement$pathT.current,
                controlPoint = _PathElement$pathT.controlPoint,
                currentPoint = _PathElement$pathT.currentPoint;

            pathParser.addMarker(currentPoint, controlPoint, controlPoint);
            boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);

            if (ctx) {
              ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            }
          }
        }, {
          key: "pathA",
          value: function pathA(ctx, boundingBox) {
            var pathParser = this.pathParser;

            var _PathElement$pathA = PathElement.pathA(pathParser),
                currentPoint = _PathElement$pathA.currentPoint,
                rX = _PathElement$pathA.rX,
                rY = _PathElement$pathA.rY,
                sweepFlag = _PathElement$pathA.sweepFlag,
                xAxisRotation = _PathElement$pathA.xAxisRotation,
                centp = _PathElement$pathA.centp,
                a1 = _PathElement$pathA.a1,
                ad = _PathElement$pathA.ad; // for markers


            var dir = 1 - sweepFlag ? 1.0 : -1.0;
            var ah = a1 + dir * (ad / 2.0);
            var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
            pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
            pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
            boundingBox.addPoint(currentPoint.x, currentPoint.y); // TODO: this is too naive, make it better

            if (ctx && !isNaN(a1) && !isNaN(ad)) {
              var r = rX > rY ? rX : rY;
              var sx = rX > rY ? 1 : rX / rY;
              var sy = rX > rY ? rY / rX : 1;
              ctx.translate(centp.x, centp.y);
              ctx.rotate(xAxisRotation);
              ctx.scale(sx, sy);
              ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
              ctx.scale(1 / sx, 1 / sy);
              ctx.rotate(-xAxisRotation);
              ctx.translate(-centp.x, -centp.y);
            }
          }
        }, {
          key: "pathZ",
          value: function pathZ(ctx, boundingBox) {
            PathElement.pathZ(this.pathParser);

            if (ctx) {
              // only close path if it is not a straight line
              if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) {
                ctx.closePath();
              }
            }
          }
        }], [{
          key: "pathM",
          value: function pathM(pathParser) {
            var point = pathParser.getAsCurrentPoint();
            pathParser.start = pathParser.current;
            return {
              point: point
            };
          }
        }, {
          key: "pathL",
          value: function pathL(pathParser) {
            var current = pathParser.current;
            var point = pathParser.getAsCurrentPoint();
            return {
              current: current,
              point: point
            };
          }
        }, {
          key: "pathH",
          value: function pathH(pathParser) {
            var current = pathParser.current,
                command = pathParser.command;
            var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
            pathParser.current = point;
            return {
              current: current,
              point: point
            };
          }
        }, {
          key: "pathV",
          value: function pathV(pathParser) {
            var current = pathParser.current,
                command = pathParser.command;
            var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
            pathParser.current = point;
            return {
              current: current,
              point: point
            };
          }
        }, {
          key: "pathC",
          value: function pathC(pathParser) {
            var current = pathParser.current;
            var point = pathParser.getPoint('x1', 'y1');
            var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
            var currentPoint = pathParser.getAsCurrentPoint();
            return {
              current: current,
              point: point,
              controlPoint: controlPoint,
              currentPoint: currentPoint
            };
          }
        }, {
          key: "pathS",
          value: function pathS(pathParser) {
            var current = pathParser.current;
            var point = pathParser.getReflectedControlPoint();
            var controlPoint = pathParser.getAsControlPoint('x2', 'y2');
            var currentPoint = pathParser.getAsCurrentPoint();
            return {
              current: current,
              point: point,
              controlPoint: controlPoint,
              currentPoint: currentPoint
            };
          }
        }, {
          key: "pathQ",
          value: function pathQ(pathParser) {
            var current = pathParser.current;
            var controlPoint = pathParser.getAsControlPoint('x1', 'y1');
            var currentPoint = pathParser.getAsCurrentPoint();
            return {
              current: current,
              controlPoint: controlPoint,
              currentPoint: currentPoint
            };
          }
        }, {
          key: "pathT",
          value: function pathT(pathParser) {
            var current = pathParser.current;
            var controlPoint = pathParser.getReflectedControlPoint();
            pathParser.control = controlPoint;
            var currentPoint = pathParser.getAsCurrentPoint();
            return {
              current: current,
              controlPoint: controlPoint,
              currentPoint: currentPoint
            };
          }
        }, {
          key: "pathA",
          value: function pathA(pathParser) {
            var current = pathParser.current,
                command = pathParser.command;
            var rX = command.rX,
                rY = command.rY,
                xRot = command.xRot,
                lArcFlag = command.lArcFlag,
                sweepFlag = command.sweepFlag;
            var xAxisRotation = xRot * (Math.PI / 180.0);
            var currentPoint = pathParser.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
            // x1', y1'

            var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2.0, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2.0); // adjust radii

            var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);

            if (l > 1) {
              rX *= Math.sqrt(l);
              rY *= Math.sqrt(l);
            } // cx', cy'


            var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));

            if (isNaN(s)) {
              s = 0;
            }

            var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX); // cx, cy

            var centp = new Point((current.x + currentPoint.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // initial angle

            var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]); // θ1
            // angle delta

            var u = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY];
            var v = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY];
            var ad = vectorsAngle(u, v); // Δθ

            if (vectorsRatio(u, v) <= -1) {
              ad = Math.PI;
            }

            if (vectorsRatio(u, v) >= 1) {
              ad = 0;
            }

            return {
              currentPoint: currentPoint,
              rX: rX,
              rY: rY,
              sweepFlag: sweepFlag,
              xAxisRotation: xAxisRotation,
              centp: centp,
              a1: a1,
              ad: ad
            };
          }
        }, {
          key: "pathZ",
          value: function pathZ(pathParser) {
            pathParser.current = pathParser.start;
          }
        }]);

        return PathElement;
      }(RenderedElement);

      var GlyphElement = /*#__PURE__*/function (_PathElement) {
        _inherits(GlyphElement, _PathElement);

        var _super8 = _createSuper(GlyphElement);

        function GlyphElement(document, node, captureTextNodes) {
          var _this12;

          _classCallCheck2(this, GlyphElement);

          _this12 = _super8.call(this, document, node, captureTextNodes);
          _this12.type = 'glyph';
          _this12.horizAdvX = _this12.getAttribute('horiz-adv-x').getNumber();
          _this12.unicode = _this12.getAttribute('unicode').getString();
          _this12.arabicForm = _this12.getAttribute('arabic-form').getString();
          return _this12;
        }

        return GlyphElement;
      }(PathElement);

      var TextElement = /*#__PURE__*/function (_RenderedElement2) {
        _inherits(TextElement, _RenderedElement2);

        var _super9 = _createSuper(TextElement);

        function TextElement(document, node, captureTextNodes) {
          var _this13;

          _classCallCheck2(this, TextElement);

          _this13 = _super9.call(this, document, node, (this instanceof TextElement ? this.constructor : void 0) === TextElement ? true : captureTextNodes);
          _this13.type = 'text';
          _this13.x = 0;
          _this13.y = 0;
          _this13.measureCache = -1;
          return _this13;
        }

        _createClass(TextElement, [{
          key: "setContext",
          value: function setContext(ctx) {
            var fromMeasure = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            _get(_getPrototypeOf(TextElement.prototype), "setContext", this).call(this, ctx, fromMeasure);

            var textBaseline = this.getStyle('dominant-baseline').getTextBaseline() || this.getStyle('alignment-baseline').getTextBaseline();

            if (textBaseline) {
              ctx.textBaseline = textBaseline;
            }
          }
        }, {
          key: "initializeCoordinates",
          value: function initializeCoordinates(ctx) {
            this.x = this.getAttribute('x').getPixels('x');
            this.y = this.getAttribute('y').getPixels('y');
            var dxAttr = this.getAttribute('dx');
            var dyAttr = this.getAttribute('dy');

            if (dxAttr.hasValue()) {
              this.x += dxAttr.getPixels('x');
            }

            if (dyAttr.hasValue()) {
              this.y += dyAttr.getPixels('y');
            }

            this.x += this.getAnchorDelta(ctx, this, 0);
          }
        }, {
          key: "getBoundingBox",
          value: function getBoundingBox(ctx) {
            var _this14 = this;

            if (this.type !== 'text') {
              return this.getTElementBoundingBox(ctx);
            }

            this.initializeCoordinates(ctx);
            var boundingBox = null;
            this.children.forEach(function (_, i) {
              var childBoundingBox = _this14.getChildBoundingBox(ctx, _this14, _this14, i);

              if (!boundingBox) {
                boundingBox = childBoundingBox;
              } else {
                boundingBox.addBoundingBox(childBoundingBox);
              }
            });
            return boundingBox;
          }
        }, {
          key: "getFontSize",
          value: function getFontSize() {
            var document = this.document,
                parent = this.parent;
            var inheritFontSize = Font.parse(document.ctx.font).fontSize;
            var fontSize = parent.getStyle('font-size').getNumber(inheritFontSize);
            return fontSize;
          }
        }, {
          key: "getTElementBoundingBox",
          value: function getTElementBoundingBox(ctx) {
            var fontSize = this.getFontSize();
            return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
          }
        }, {
          key: "getGlyph",
          value: function getGlyph(font, text, i) {
            var _char = text[i];
            var glyph = null;

            if (font.isArabic) {
              var len = text.length;
              var prevChar = text[i - 1];
              var nextChar = text[i + 1];
              var arabicForm = 'isolated';

              if ((i === 0 || prevChar === ' ') && i < len - 2 && nextChar !== ' ') {
                arabicForm = 'terminal';
              }

              if (i > 0 && prevChar !== ' ' && i < len - 2 && nextChar !== ' ') {
                arabicForm = 'medial';
              }

              if (i > 0 && prevChar !== ' ' && (i === len - 1 || nextChar === ' ')) {
                arabicForm = 'initial';
              }

              if (typeof font.glyphs[_char] !== 'undefined') {
                // NEED TEST
                var maybeGlyph = font.glyphs[_char];
                glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
              }
            } else {
              glyph = font.glyphs[_char];
            }

            if (!glyph) {
              glyph = font.missingGlyph;
            }

            return glyph;
          }
        }, {
          key: "getText",
          value: function getText() {
            return '';
          }
        }, {
          key: "getTextFromNode",
          value: function getTextFromNode(node) {
            var textNode = node || this.node;
            var childNodes = Array.from(textNode.parentNode.childNodes);
            var index = childNodes.indexOf(textNode);
            var lastIndex = childNodes.length - 1;
            var text = compressSpaces( // textNode.value
            // || textNode.text
            textNode.textContent || '');

            if (index === 0) {
              text = trimLeft(text);
            }

            if (index === lastIndex) {
              text = trimRight(text);
            }

            return text;
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            var _this15 = this;

            if (this.type !== 'text') {
              this.renderTElementChildren(ctx);
              return;
            }

            this.initializeCoordinates(ctx);
            this.children.forEach(function (_, i) {
              _this15.renderChild(ctx, _this15, _this15, i);
            });
            var mouse = this.document.screen.mouse; // Do not calc bounding box if mouse is not working.

            if (mouse.isWorking()) {
              mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
            }
          }
        }, {
          key: "renderTElementChildren",
          value: function renderTElementChildren(ctx) {
            var document = this.document,
                parent = this.parent;
            var renderText = this.getText();
            var customFont = parent.getStyle('font-family').getDefinition();

            if (customFont) {
              var unitsPerEm = customFont.fontFace.unitsPerEm;
              var ctxFont = Font.parse(document.ctx.font);
              var fontSize = parent.getStyle('font-size').getNumber(ctxFont.fontSize);
              var fontStyle = parent.getStyle('font-style').getString(ctxFont.fontStyle);
              var scale = fontSize / unitsPerEm;
              var text = customFont.isRTL ? renderText.split('').reverse().join('') : renderText;
              var dx = toNumbers(parent.getAttribute('dx').getString());
              var len = text.length;

              for (var i = 0; i < len; i++) {
                var glyph = this.getGlyph(customFont, text, i);
                ctx.translate(this.x, this.y);
                ctx.scale(scale, -scale);
                var lw = ctx.lineWidth;
                ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;

                if (fontStyle === 'italic') {
                  ctx.transform(1, 0, .4, 1, 0, 0);
                }

                glyph.render(ctx);

                if (fontStyle === 'italic') {
                  ctx.transform(1, 0, -.4, 1, 0, 0);
                }

                ctx.lineWidth = lw;
                ctx.scale(1 / scale, -1 / scale);
                ctx.translate(-this.x, -this.y);
                this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;

                if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
                  this.x += dx[i];
                }
              }

              return;
            }

            var x = this.x,
                y = this.y; // NEED TEST
            // if (ctx.paintOrder === 'stroke') {
            // 	if (ctx.strokeStyle) {
            // 		ctx.strokeText(renderText, x, y);
            // 	}
            // 	if (ctx.fillStyle) {
            // 		ctx.fillText(renderText, x, y);
            // 	}
            // } else {

            if (ctx.fillStyle) {
              ctx.fillText(renderText, x, y);
            }

            if (ctx.strokeStyle) {
              ctx.strokeText(renderText, x, y);
            } // }

          }
        }, {
          key: "getAnchorDelta",
          value: function getAnchorDelta(ctx, parent, startI) {
            var textAnchor = this.getStyle('text-anchor').getString('start');

            if (textAnchor !== 'start') {
              var children = parent.children;
              var len = children.length;
              var child = null;
              var width = 0;

              for (var i = startI; i < len; i++) {
                child = children[i];

                if (i > startI && child.getAttribute('x').hasValue() || child.getAttribute('text-anchor').hasValue()) {
                  break; // new group
                }

                width += child.measureTextRecursive(ctx);
              }

              return -1 * (textAnchor === 'end' ? width : width / 2.0);
            }

            return 0;
          }
        }, {
          key: "adjustChildCoordinates",
          value: function adjustChildCoordinates(ctx, textParent, parent, i) {
            var child = parent.children[i];

            if (typeof child.measureText !== 'function') {
              return child;
            }

            ctx.save();
            child.setContext(ctx, true);
            var xAttr = child.getAttribute('x');
            var yAttr = child.getAttribute('y');
            var dxAttr = child.getAttribute('dx');
            var dyAttr = child.getAttribute('dy');
            var textAnchor = child.getAttribute('text-anchor').getString('start');

            if (i === 0 && child.type !== 'textNode') {
              if (!xAttr.hasValue()) {
                xAttr.setValue(textParent.getAttribute('x').getValue('0'));
              }

              if (!yAttr.hasValue()) {
                yAttr.setValue(textParent.getAttribute('y').getValue('0'));
              }

              if (!dxAttr.hasValue()) {
                dxAttr.setValue(textParent.getAttribute('dx').getValue('0'));
              }

              if (!dyAttr.hasValue()) {
                dyAttr.setValue(textParent.getAttribute('dy').getValue('0'));
              }
            }

            if (xAttr.hasValue()) {
              child.x = xAttr.getPixels('x') + textParent.getAnchorDelta(ctx, parent, i);

              if (textAnchor !== 'start') {
                var width = child.measureTextRecursive(ctx);
                child.x += -1 * (textAnchor === 'end' ? width : width / 2.0);
              }

              if (dxAttr.hasValue()) {
                child.x += dxAttr.getPixels('x');
              }
            } else {
              if (textAnchor !== 'start') {
                var _width = child.measureTextRecursive(ctx);

                textParent.x += -1 * (textAnchor === 'end' ? _width : _width / 2.0);
              }

              if (dxAttr.hasValue()) {
                textParent.x += dxAttr.getPixels('x');
              }

              child.x = textParent.x;
            }

            textParent.x = child.x + child.measureText(ctx);

            if (yAttr.hasValue()) {
              child.y = yAttr.getPixels('y');

              if (dyAttr.hasValue()) {
                child.y += dyAttr.getPixels('y');
              }
            } else {
              if (dyAttr.hasValue()) {
                textParent.y += dyAttr.getPixels('y');
              }

              child.y = textParent.y;
            }

            textParent.y = child.y;
            child.clearContext(ctx);
            ctx.restore();
            return child;
          }
        }, {
          key: "getChildBoundingBox",
          value: function getChildBoundingBox(ctx, textParent, parent, i) {
            var child = this.adjustChildCoordinates(ctx, textParent, parent, i); // not a text node?

            if (typeof child.getBoundingBox !== 'function') {
              return null;
            }

            var boundingBox = child.getBoundingBox(ctx);

            if (!boundingBox) {
              return null;
            }

            child.children.forEach(function (_, i) {
              var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i);
              boundingBox.addBoundingBox(childBoundingBox);
            });
            return boundingBox;
          }
        }, {
          key: "renderChild",
          value: function renderChild(ctx, textParent, parent, i) {
            var child = this.adjustChildCoordinates(ctx, textParent, parent, i);
            child.render(ctx);
            child.children.forEach(function (_, i) {
              textParent.renderChild(ctx, textParent, child, i);
            });
          }
        }, {
          key: "measureTextRecursive",
          value: function measureTextRecursive(ctx) {
            var width = this.children.reduce(function (width, child) {
              return width + child.measureTextRecursive(ctx);
            }, this.measureText(ctx));
            return width;
          }
        }, {
          key: "measureText",
          value: function measureText(ctx) {
            var measureCache = this.measureCache;

            if (~measureCache) {
              return measureCache;
            }

            var renderText = this.getText();
            var measure = this.measureTargetText(ctx, renderText);
            this.measureCache = measure;
            return measure;
          }
        }, {
          key: "measureTargetText",
          value: function measureTargetText(ctx, targetText) {
            if (!targetText.length) {
              return 0;
            }

            var parent = this.parent;
            var customFont = parent.getStyle('font-family').getDefinition();

            if (customFont) {
              var fontSize = this.getFontSize();
              var text = customFont.isRTL ? targetText.split('').reverse().join('') : targetText;
              var dx = toNumbers(parent.getAttribute('dx').getString());
              var len = text.length;
              var _measure = 0;

              for (var i = 0; i < len; i++) {
                var glyph = this.getGlyph(customFont, text, i);
                _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;

                if (typeof dx[i] !== 'undefined' && !isNaN(dx[i])) {
                  _measure += dx[i];
                }
              }

              return _measure;
            }

            if (!ctx.measureText) {
              return targetText.length * 10;
            }

            ctx.save();
            this.setContext(ctx, true);

            var _ctx$measureText = ctx.measureText(targetText),
                measure = _ctx$measureText.width;

            this.clearContext(ctx);
            ctx.restore();
            return measure;
          }
        }]);

        return TextElement;
      }(RenderedElement);

      var TSpanElement = /*#__PURE__*/function (_TextElement) {
        _inherits(TSpanElement, _TextElement);

        var _super10 = _createSuper(TSpanElement);

        function TSpanElement(document, node, captureTextNodes) {
          var _this16;

          _classCallCheck2(this, TSpanElement);

          _this16 = _super10.call(this, document, node, (this instanceof TSpanElement ? this.constructor : void 0) === TSpanElement ? true : captureTextNodes);
          _this16.type = 'tspan'; // if this node has children, then they own the text

          _this16.text = _this16.children.length > 0 ? '' : _this16.getTextFromNode();
          return _this16;
        }

        _createClass(TSpanElement, [{
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }]);

        return TSpanElement;
      }(TextElement);

      var TextNode = /*#__PURE__*/function (_TSpanElement) {
        _inherits(TextNode, _TSpanElement);

        var _super11 = _createSuper(TextNode);

        function TextNode() {
          var _this17;

          _classCallCheck2(this, TextNode);

          _this17 = _super11.apply(this, arguments);
          _this17.type = 'textNode';
          return _this17;
        }

        return TextNode;
      }(TSpanElement);

      var SVGElement = /*#__PURE__*/function (_RenderedElement3) {
        _inherits(SVGElement, _RenderedElement3);

        var _super12 = _createSuper(SVGElement);

        function SVGElement() {
          var _this18;

          _classCallCheck2(this, SVGElement);

          _this18 = _super12.apply(this, arguments);
          _this18.type = 'svg';
          _this18.root = false;
          return _this18;
        }

        _createClass(SVGElement, [{
          key: "setContext",
          value: function setContext(ctx) {
            var _this$node$parentNode;

            var document = this.document;
            var screen = document.screen,
                window = document.window;
            var canvas = ctx.canvas;
            screen.setDefaults(ctx);

            if (canvas.style && typeof ctx.font !== 'undefined' && window && typeof window.getComputedStyle !== 'undefined') {
              ctx.font = window.getComputedStyle(canvas).getPropertyValue('font');
              var fontSizeProp = new Property(document, 'fontSize', Font.parse(ctx.font).fontSize);

              if (fontSizeProp.hasValue()) {
                document.rootEmSize = fontSizeProp.getPixels('y');
                document.emSize = document.rootEmSize;
              }
            } // create new view port


            if (!this.getAttribute('x').hasValue()) {
              this.getAttribute('x', true).setValue(0);
            }

            if (!this.getAttribute('y').hasValue()) {
              this.getAttribute('y', true).setValue(0);
            }

            var _screen$viewPort = screen.viewPort,
                width = _screen$viewPort.width,
                height = _screen$viewPort.height;

            if (!this.getStyle('width').hasValue()) {
              this.getStyle('width', true).setValue('100%');
            }

            if (!this.getStyle('height').hasValue()) {
              this.getStyle('height', true).setValue('100%');
            }

            if (!this.getStyle('color').hasValue()) {
              this.getStyle('color', true).setValue('black');
            }

            var refXAttr = this.getAttribute('refX');
            var refYAttr = this.getAttribute('refY');
            var viewBoxAttr = this.getAttribute('viewBox');
            var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
            var clip = !this.root && this.getStyle('overflow').getValue('hidden') !== 'visible';
            var minX = 0;
            var minY = 0;
            var clipX = 0;
            var clipY = 0;

            if (viewBox) {
              minX = viewBox[0];
              minY = viewBox[1];
            }

            if (!this.root) {
              width = this.getStyle('width').getPixels('x');
              height = this.getStyle('height').getPixels('y');

              if (this.type === 'marker') {
                clipX = minX;
                clipY = minY;
                minX = 0;
                minY = 0;
              }
            }

            screen.viewPort.setCurrent(width, height); // Default value of transform-origin is center only for root SVG elements
            // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform-origin

            if (this.node // is not temporary SVGElement
            && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === 'foreignObject') && this.getStyle('transform', false, true).hasValue() && !this.getStyle('transform-origin', false, true).hasValue()) {
              this.getStyle('transform-origin', true, true).setValue('50% 50%');
            }

            _get(_getPrototypeOf(SVGElement.prototype), "setContext", this).call(this, ctx);

            ctx.translate(this.getAttribute('x').getPixels('x'), this.getAttribute('y').getPixels('y'));

            if (viewBox) {
              width = viewBox[2];
              height = viewBox[3];
            }

            document.setViewBox({
              ctx: ctx,
              aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
              width: screen.viewPort.width,
              desiredWidth: width,
              height: screen.viewPort.height,
              desiredHeight: height,
              minX: minX,
              minY: minY,
              refX: refXAttr.getValue(),
              refY: refYAttr.getValue(),
              clip: clip,
              clipX: clipX,
              clipY: clipY
            });

            if (viewBox) {
              screen.viewPort.removeCurrent();
              screen.viewPort.setCurrent(width, height);
            }
          }
        }, {
          key: "clearContext",
          value: function clearContext(ctx) {
            _get(_getPrototypeOf(SVGElement.prototype), "clearContext", this).call(this, ctx);

            this.document.screen.viewPort.removeCurrent();
          }
          /**
           * Resize SVG to fit in given size.
           * @param width
           * @param height
           * @param preserveAspectRatio
           */

        }, {
          key: "resize",
          value: function resize(width) {
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
            var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var widthAttr = this.getAttribute('width', true);
            var heightAttr = this.getAttribute('height', true);
            var viewBoxAttr = this.getAttribute('viewBox');
            var styleAttr = this.getAttribute('style');
            var originWidth = widthAttr.getNumber(0);
            var originHeight = heightAttr.getNumber(0);

            if (preserveAspectRatio) {
              if (typeof preserveAspectRatio === 'string') {
                this.getAttribute('preserveAspectRatio', true).setValue(preserveAspectRatio);
              } else {
                var preserveAspectRatioAttr = this.getAttribute('preserveAspectRatio');

                if (preserveAspectRatioAttr.hasValue()) {
                  preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, '$1'));
                }
              }
            }

            widthAttr.setValue(width);
            heightAttr.setValue(height);

            if (!viewBoxAttr.hasValue()) {
              viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
            }

            if (styleAttr.hasValue()) {
              var widthStyle = this.getStyle('width');
              var heightStyle = this.getStyle('height');

              if (widthStyle.hasValue()) {
                widthStyle.setValue("".concat(width, "px"));
              }

              if (heightStyle.hasValue()) {
                heightStyle.setValue("".concat(height, "px"));
              }
            }
          }
        }]);

        return SVGElement;
      }(RenderedElement);

      var RectElement = /*#__PURE__*/function (_PathElement2) {
        _inherits(RectElement, _PathElement2);

        var _super13 = _createSuper(RectElement);

        function RectElement() {
          var _this19;

          _classCallCheck2(this, RectElement);

          _this19 = _super13.apply(this, arguments);
          _this19.type = 'rect';
          return _this19;
        }

        _createClass(RectElement, [{
          key: "path",
          value: function path(ctx) {
            var x = this.getAttribute('x').getPixels('x');
            var y = this.getAttribute('y').getPixels('y');
            var width = this.getStyle('width', false, true).getPixels('x');
            var height = this.getStyle('height', false, true).getPixels('y');
            var rxAttr = this.getAttribute('rx');
            var ryAttr = this.getAttribute('ry');
            var rx = rxAttr.getPixels('x');
            var ry = ryAttr.getPixels('y');

            if (rxAttr.hasValue() && !ryAttr.hasValue()) {
              ry = rx;
            }

            if (ryAttr.hasValue() && !rxAttr.hasValue()) {
              rx = ry;
            }

            rx = Math.min(rx, width / 2.0);
            ry = Math.min(ry, height / 2.0);

            if (ctx) {
              var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
              ctx.beginPath(); // always start the path so we don't fill prior paths

              if (height > 0 && width > 0) {
                ctx.moveTo(x + rx, y);
                ctx.lineTo(x + width - rx, y);
                ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
                ctx.lineTo(x + width, y + height - ry);
                ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
                ctx.lineTo(x + rx, y + height);
                ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
                ctx.lineTo(x, y + ry);
                ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
                ctx.closePath();
              }
            }

            return new BoundingBox(x, y, x + width, y + height);
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            return null;
          }
        }]);

        return RectElement;
      }(PathElement);

      var CircleElement = /*#__PURE__*/function (_PathElement3) {
        _inherits(CircleElement, _PathElement3);

        var _super14 = _createSuper(CircleElement);

        function CircleElement() {
          var _this20;

          _classCallCheck2(this, CircleElement);

          _this20 = _super14.apply(this, arguments);
          _this20.type = 'circle';
          return _this20;
        }

        _createClass(CircleElement, [{
          key: "path",
          value: function path(ctx) {
            var cx = this.getAttribute('cx').getPixels('x');
            var cy = this.getAttribute('cy').getPixels('y');
            var r = this.getAttribute('r').getPixels();

            if (ctx && r > 0) {
              ctx.beginPath();
              ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
              ctx.closePath();
            }

            return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            return null;
          }
        }]);

        return CircleElement;
      }(PathElement);

      var EllipseElement = /*#__PURE__*/function (_PathElement4) {
        _inherits(EllipseElement, _PathElement4);

        var _super15 = _createSuper(EllipseElement);

        function EllipseElement() {
          var _this21;

          _classCallCheck2(this, EllipseElement);

          _this21 = _super15.apply(this, arguments);
          _this21.type = 'ellipse';
          return _this21;
        }

        _createClass(EllipseElement, [{
          key: "path",
          value: function path(ctx) {
            var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
            var rx = this.getAttribute('rx').getPixels('x');
            var ry = this.getAttribute('ry').getPixels('y');
            var cx = this.getAttribute('cx').getPixels('x');
            var cy = this.getAttribute('cy').getPixels('y');

            if (ctx && rx > 0 && ry > 0) {
              ctx.beginPath();
              ctx.moveTo(cx + rx, cy);
              ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
              ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
              ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
              ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
              ctx.closePath();
            }

            return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            return null;
          }
        }]);

        return EllipseElement;
      }(PathElement);

      var LineElement = /*#__PURE__*/function (_PathElement5) {
        _inherits(LineElement, _PathElement5);

        var _super16 = _createSuper(LineElement);

        function LineElement() {
          var _this22;

          _classCallCheck2(this, LineElement);

          _this22 = _super16.apply(this, arguments);
          _this22.type = 'line';
          return _this22;
        }

        _createClass(LineElement, [{
          key: "getPoints",
          value: function getPoints() {
            return [new Point(this.getAttribute('x1').getPixels('x'), this.getAttribute('y1').getPixels('y')), new Point(this.getAttribute('x2').getPixels('x'), this.getAttribute('y2').getPixels('y'))];
          }
        }, {
          key: "path",
          value: function path(ctx) {
            var _this$getPoints = this.getPoints(),
                _this$getPoints2 = _slicedToArray(_this$getPoints, 2),
                _this$getPoints2$ = _this$getPoints2[0],
                x0 = _this$getPoints2$.x,
                y0 = _this$getPoints2$.y,
                _this$getPoints2$2 = _this$getPoints2[1],
                x1 = _this$getPoints2$2.x,
                y1 = _this$getPoints2$2.y;

            if (ctx) {
              ctx.beginPath();
              ctx.moveTo(x0, y0);
              ctx.lineTo(x1, y1);
            }

            return new BoundingBox(x0, y0, x1, y1);
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            var _this$getPoints3 = this.getPoints(),
                _this$getPoints4 = _slicedToArray(_this$getPoints3, 2),
                p0 = _this$getPoints4[0],
                p1 = _this$getPoints4[1];

            var a = p0.angleTo(p1);
            return [[p0, a], [p1, a]];
          }
        }]);

        return LineElement;
      }(PathElement);

      var PolylineElement = /*#__PURE__*/function (_PathElement6) {
        _inherits(PolylineElement, _PathElement6);

        var _super17 = _createSuper(PolylineElement);

        function PolylineElement(document, node, captureTextNodes) {
          var _this23;

          _classCallCheck2(this, PolylineElement);

          _this23 = _super17.call(this, document, node, captureTextNodes);
          _this23.type = 'polyline';
          _this23.points = [];
          _this23.points = Point.parsePath(_this23.getAttribute('points').getString());
          return _this23;
        }

        _createClass(PolylineElement, [{
          key: "path",
          value: function path(ctx) {
            var points = this.points;

            var _points = _slicedToArray(points, 1),
                _points$ = _points[0],
                x0 = _points$.x,
                y0 = _points$.y;

            var boundingBox = new BoundingBox(x0, y0);

            if (ctx) {
              ctx.beginPath();
              ctx.moveTo(x0, y0);
            }

            points.forEach(function (_ref) {
              var x = _ref.x,
                  y = _ref.y;
              boundingBox.addPoint(x, y);

              if (ctx) {
                ctx.lineTo(x, y);
              }
            });
            return boundingBox;
          }
        }, {
          key: "getMarkers",
          value: function getMarkers() {
            var points = this.points;
            var lastIndex = points.length - 1;
            var markers = [];
            points.forEach(function (point, i) {
              if (i === lastIndex) {
                return;
              }

              markers.push([point, point.angleTo(points[i + 1])]);
            });

            if (markers.length > 0) {
              markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
            }

            return markers;
          }
        }]);

        return PolylineElement;
      }(PathElement);

      var PolygonElement = /*#__PURE__*/function (_PolylineElement) {
        _inherits(PolygonElement, _PolylineElement);

        var _super18 = _createSuper(PolygonElement);

        function PolygonElement() {
          var _this24;

          _classCallCheck2(this, PolygonElement);

          _this24 = _super18.apply(this, arguments);
          _this24.type = 'polygon';
          return _this24;
        }

        _createClass(PolygonElement, [{
          key: "path",
          value: function path(ctx) {
            var boundingBox = _get(_getPrototypeOf(PolygonElement.prototype), "path", this).call(this, ctx);

            var _this$points = _slicedToArray(this.points, 1),
                _this$points$ = _this$points[0],
                x = _this$points$.x,
                y = _this$points$.y;

            if (ctx) {
              ctx.lineTo(x, y);
              ctx.closePath();
            }

            return boundingBox;
          }
        }]);

        return PolygonElement;
      }(PolylineElement);

      var PatternElement = /*#__PURE__*/function (_Element3) {
        _inherits(PatternElement, _Element3);

        var _super19 = _createSuper(PatternElement);

        function PatternElement() {
          var _this25;

          _classCallCheck2(this, PatternElement);

          _this25 = _super19.apply(this, arguments);
          _this25.type = 'pattern';
          return _this25;
        }

        _createClass(PatternElement, [{
          key: "createPattern",
          value: function createPattern(ctx, _, parentOpacityProp) {
            var width = this.getStyle('width').getPixels('x', true);
            var height = this.getStyle('height').getPixels('y', true); // render me using a temporary svg element

            var patternSvg = new SVGElement(this.document, null);
            patternSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
            patternSvg.attributes.width = new Property(this.document, 'width', "".concat(width, "px"));
            patternSvg.attributes.height = new Property(this.document, 'height', "".concat(height, "px"));
            patternSvg.attributes.transform = new Property(this.document, 'transform', this.getAttribute('patternTransform').getValue());
            patternSvg.children = this.children;
            var patternCanvas = this.document.createCanvas(width, height);
            var patternCtx = patternCanvas.getContext('2d');
            var xAttr = this.getAttribute('x');
            var yAttr = this.getAttribute('y');

            if (xAttr.hasValue() && yAttr.hasValue()) {
              patternCtx.translate(xAttr.getPixels('x', true), yAttr.getPixels('y', true));
            }

            if (parentOpacityProp.hasValue()) {
              this.styles['fill-opacity'] = parentOpacityProp;
            } else {
              Reflect.deleteProperty(this.styles, 'fill-opacity');
            } // render 3x3 grid so when we transform there's no white space on edges


            for (var x = -1; x <= 1; x++) {
              for (var y = -1; y <= 1; y++) {
                patternCtx.save();
                patternSvg.attributes.x = new Property(this.document, 'x', x * patternCanvas.width);
                patternSvg.attributes.y = new Property(this.document, 'y', y * patternCanvas.height);
                patternSvg.render(patternCtx);
                patternCtx.restore();
              }
            }

            var pattern = ctx.createPattern(patternCanvas, 'repeat');
            return pattern;
          }
        }]);

        return PatternElement;
      }(Element);

      var MarkerElement = /*#__PURE__*/function (_Element4) {
        _inherits(MarkerElement, _Element4);

        var _super20 = _createSuper(MarkerElement);

        function MarkerElement() {
          var _this26;

          _classCallCheck2(this, MarkerElement);

          _this26 = _super20.apply(this, arguments);
          _this26.type = 'marker';
          return _this26;
        }

        _createClass(MarkerElement, [{
          key: "render",
          value: function render(ctx, point, angle) {
            if (!point) {
              return;
            }

            var x = point.x,
                y = point.y;
            var orient = this.getAttribute('orient').getString('auto');
            var markerUnits = this.getAttribute('markerUnits').getString('strokeWidth');
            ctx.translate(x, y);

            if (orient === 'auto') {
              ctx.rotate(angle);
            }

            if (markerUnits === 'strokeWidth') {
              ctx.scale(ctx.lineWidth, ctx.lineWidth);
            }

            ctx.save(); // render me using a temporary svg element

            var markerSvg = new SVGElement(this.document, null);
            markerSvg.type = this.type;
            markerSvg.attributes.viewBox = new Property(this.document, 'viewBox', this.getAttribute('viewBox').getValue());
            markerSvg.attributes.refX = new Property(this.document, 'refX', this.getAttribute('refX').getValue());
            markerSvg.attributes.refY = new Property(this.document, 'refY', this.getAttribute('refY').getValue());
            markerSvg.attributes.width = new Property(this.document, 'width', this.getAttribute('markerWidth').getValue());
            markerSvg.attributes.height = new Property(this.document, 'height', this.getAttribute('markerHeight').getValue());
            markerSvg.attributes.overflow = new Property(this.document, 'overflow', this.getAttribute('overflow').getValue());
            markerSvg.attributes.fill = new Property(this.document, 'fill', this.getAttribute('fill').getColor('black'));
            markerSvg.attributes.stroke = new Property(this.document, 'stroke', this.getAttribute('stroke').getValue('none'));
            markerSvg.children = this.children;
            markerSvg.render(ctx);
            ctx.restore();

            if (markerUnits === 'strokeWidth') {
              ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
            }

            if (orient === 'auto') {
              ctx.rotate(-angle);
            }

            ctx.translate(-x, -y);
          }
        }]);

        return MarkerElement;
      }(Element);

      var DefsElement = /*#__PURE__*/function (_Element5) {
        _inherits(DefsElement, _Element5);

        var _super21 = _createSuper(DefsElement);

        function DefsElement() {
          var _this27;

          _classCallCheck2(this, DefsElement);

          _this27 = _super21.apply(this, arguments);
          _this27.type = 'defs';
          return _this27;
        }

        _createClass(DefsElement, [{
          key: "render",
          value: function render() {// NOOP
          }
        }]);

        return DefsElement;
      }(Element);

      var GElement = /*#__PURE__*/function (_RenderedElement4) {
        _inherits(GElement, _RenderedElement4);

        var _super22 = _createSuper(GElement);

        function GElement() {
          var _this28;

          _classCallCheck2(this, GElement);

          _this28 = _super22.apply(this, arguments);
          _this28.type = 'g';
          return _this28;
        }

        _createClass(GElement, [{
          key: "getBoundingBox",
          value: function getBoundingBox(ctx) {
            var boundingBox = new BoundingBox();
            this.children.forEach(function (child) {
              boundingBox.addBoundingBox(child.getBoundingBox(ctx));
            });
            return boundingBox;
          }
        }]);

        return GElement;
      }(RenderedElement);

      var GradientElement = /*#__PURE__*/function (_Element6) {
        _inherits(GradientElement, _Element6);

        var _super23 = _createSuper(GradientElement);

        function GradientElement(document, node, captureTextNodes) {
          var _this29;

          _classCallCheck2(this, GradientElement);

          _this29 = _super23.call(this, document, node, captureTextNodes);
          _this29.attributesToInherit = ['gradientUnits'];
          _this29.stops = [];

          var _assertThisInitialize = _assertThisInitialized(_this29),
              stops = _assertThisInitialize.stops,
              children = _assertThisInitialize.children;

          children.forEach(function (child) {
            if (child.type === 'stop') {
              stops.push(child);
            }
          });
          return _this29;
        }

        _createClass(GradientElement, [{
          key: "getGradientUnits",
          value: function getGradientUnits() {
            return this.getAttribute('gradientUnits').getString('objectBoundingBox');
          }
        }, {
          key: "createGradient",
          value: function createGradient(ctx, element, parentOpacityProp) {
            var _this30 = this;

            // eslint-disable-next-line @typescript-eslint/no-this-alias, consistent-this
            var stopsContainer = this;

            if (this.getHrefAttribute().hasValue()) {
              stopsContainer = this.getHrefAttribute().getDefinition();
              this.inheritStopContainer(stopsContainer);
            }

            var _stopsContainer = stopsContainer,
                stops = _stopsContainer.stops;
            var gradient = this.getGradient(ctx, element);

            if (!gradient) {
              return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
            }

            stops.forEach(function (stop) {
              gradient.addColorStop(stop.offset, _this30.addParentOpacity(parentOpacityProp, stop.color));
            });

            if (this.getAttribute('gradientTransform').hasValue()) {
              // render as transformed pattern on temporary canvas
              var document = this.document;
              var _document$screen = document.screen,
                  MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS,
                  viewPort = _document$screen.viewPort;

              var _viewPort$viewPorts = _slicedToArray(viewPort.viewPorts, 1),
                  rootView = _viewPort$viewPorts[0];

              var rect = new RectElement(document, null);
              rect.attributes.x = new Property(document, 'x', -MAX_VIRTUAL_PIXELS / 3.0);
              rect.attributes.y = new Property(document, 'y', -MAX_VIRTUAL_PIXELS / 3.0);
              rect.attributes.width = new Property(document, 'width', MAX_VIRTUAL_PIXELS);
              rect.attributes.height = new Property(document, 'height', MAX_VIRTUAL_PIXELS);
              var group = new GElement(document, null);
              group.attributes.transform = new Property(document, 'transform', this.getAttribute('gradientTransform').getValue());
              group.children = [rect];
              var patternSvg = new SVGElement(document, null);
              patternSvg.attributes.x = new Property(document, 'x', 0);
              patternSvg.attributes.y = new Property(document, 'y', 0);
              patternSvg.attributes.width = new Property(document, 'width', rootView.width);
              patternSvg.attributes.height = new Property(document, 'height', rootView.height);
              patternSvg.children = [group];
              var patternCanvas = document.createCanvas(rootView.width, rootView.height);
              var patternCtx = patternCanvas.getContext('2d');
              patternCtx.fillStyle = gradient;
              patternSvg.render(patternCtx);
              return patternCtx.createPattern(patternCanvas, 'no-repeat');
            }

            return gradient;
          }
        }, {
          key: "inheritStopContainer",
          value: function inheritStopContainer(stopsContainer) {
            var _this31 = this;

            this.attributesToInherit.forEach(function (attributeToInherit) {
              if (!_this31.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) {
                _this31.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
              }
            });
          }
        }, {
          key: "addParentOpacity",
          value: function addParentOpacity(parentOpacityProp, color) {
            if (parentOpacityProp.hasValue()) {
              var colorProp = new Property(this.document, 'color', color);
              return colorProp.addOpacity(parentOpacityProp).getColor();
            }

            return color;
          }
        }]);

        return GradientElement;
      }(Element);

      var LinearGradientElement = /*#__PURE__*/function (_GradientElement) {
        _inherits(LinearGradientElement, _GradientElement);

        var _super24 = _createSuper(LinearGradientElement);

        function LinearGradientElement(document, node, captureTextNodes) {
          var _this32;

          _classCallCheck2(this, LinearGradientElement);

          _this32 = _super24.call(this, document, node, captureTextNodes);
          _this32.type = 'linearGradient';

          _this32.attributesToInherit.push('x1', 'y1', 'x2', 'y2');

          return _this32;
        }

        _createClass(LinearGradientElement, [{
          key: "getGradient",
          value: function getGradient(ctx, element) {
            var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
            var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;

            if (isBoundingBoxUnits && !boundingBox) {
              return null;
            }

            if (!this.getAttribute('x1').hasValue() && !this.getAttribute('y1').hasValue() && !this.getAttribute('x2').hasValue() && !this.getAttribute('y2').hasValue()) {
              this.getAttribute('x1', true).setValue(0);
              this.getAttribute('y1', true).setValue(0);
              this.getAttribute('x2', true).setValue(1);
              this.getAttribute('y2', true).setValue(0);
            }

            var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x1').getNumber() : this.getAttribute('x1').getPixels('x');
            var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y1').getNumber() : this.getAttribute('y1').getPixels('y');
            var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('x2').getNumber() : this.getAttribute('x2').getPixels('x');
            var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('y2').getNumber() : this.getAttribute('y2').getPixels('y');

            if (x1 === x2 && y1 === y2) {
              return null;
            }

            return ctx.createLinearGradient(x1, y1, x2, y2);
          }
        }]);

        return LinearGradientElement;
      }(GradientElement);

      var RadialGradientElement = /*#__PURE__*/function (_GradientElement2) {
        _inherits(RadialGradientElement, _GradientElement2);

        var _super25 = _createSuper(RadialGradientElement);

        function RadialGradientElement(document, node, captureTextNodes) {
          var _this33;

          _classCallCheck2(this, RadialGradientElement);

          _this33 = _super25.call(this, document, node, captureTextNodes);
          _this33.type = 'radialGradient';

          _this33.attributesToInherit.push('cx', 'cy', 'r', 'fx', 'fy', 'fr');

          return _this33;
        }

        _createClass(RadialGradientElement, [{
          key: "getGradient",
          value: function getGradient(ctx, element) {
            var isBoundingBoxUnits = this.getGradientUnits() === 'objectBoundingBox';
            var boundingBox = element.getBoundingBox(ctx);

            if (isBoundingBoxUnits && !boundingBox) {
              return null;
            }

            if (!this.getAttribute('cx').hasValue()) {
              this.getAttribute('cx', true).setValue('50%');
            }

            if (!this.getAttribute('cy').hasValue()) {
              this.getAttribute('cy', true).setValue('50%');
            }

            if (!this.getAttribute('r').hasValue()) {
              this.getAttribute('r', true).setValue('50%');
            }

            var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('cx').getNumber() : this.getAttribute('cx').getPixels('x');
            var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('cy').getNumber() : this.getAttribute('cy').getPixels('y');
            var fx = cx;
            var fy = cy;

            if (this.getAttribute('fx').hasValue()) {
              fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute('fx').getNumber() : this.getAttribute('fx').getPixels('x');
            }

            if (this.getAttribute('fy').hasValue()) {
              fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute('fy').getNumber() : this.getAttribute('fy').getPixels('y');
            }

            var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2.0 * this.getAttribute('r').getNumber() : this.getAttribute('r').getPixels();
            var fr = this.getAttribute('fr').getPixels();
            return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
          }
        }]);

        return RadialGradientElement;
      }(GradientElement);

      var StopElement = /*#__PURE__*/function (_Element7) {
        _inherits(StopElement, _Element7);

        var _super26 = _createSuper(StopElement);

        function StopElement(document, node, captureTextNodes) {
          var _this34;

          _classCallCheck2(this, StopElement);

          _this34 = _super26.call(this, document, node, captureTextNodes);
          _this34.type = 'stop';
          var offset = Math.max(0, Math.min(1, _this34.getAttribute('offset').getNumber()));

          var stopOpacity = _this34.getStyle('stop-opacity');

          var stopColor = _this34.getStyle('stop-color', true);

          if (stopColor.getString() === '') {
            stopColor.setValue('#000');
          }

          if (stopOpacity.hasValue()) {
            stopColor = stopColor.addOpacity(stopOpacity);
          }

          _this34.offset = offset;
          _this34.color = stopColor.getColor();
          return _this34;
        }

        return StopElement;
      }(Element);

      var AnimateElement = /*#__PURE__*/function (_Element8) {
        _inherits(AnimateElement, _Element8);

        var _super27 = _createSuper(AnimateElement);

        function AnimateElement(document, node, captureTextNodes) {
          var _this35;

          _classCallCheck2(this, AnimateElement);

          _this35 = _super27.call(this, document, node, captureTextNodes);
          _this35.type = 'animate';
          _this35.duration = 0;
          _this35.initialValue = null;
          _this35.initialUnits = '';
          _this35.removed = false;
          _this35.frozen = false;
          document.screen.animations.push(_assertThisInitialized(_this35));
          _this35.begin = _this35.getAttribute('begin').getMilliseconds();
          _this35.maxDuration = _this35.begin + _this35.getAttribute('dur').getMilliseconds();
          _this35.from = _this35.getAttribute('from');
          _this35.to = _this35.getAttribute('to');
          _this35.values = new Property(document, 'values', null);

          var valuesAttr = _this35.getAttribute('values');

          if (valuesAttr.hasValue()) {
            _this35.values.setValue(valuesAttr.getString().split(';'));
          }

          return _this35;
        }

        _createClass(AnimateElement, [{
          key: "getProperty",
          value: function getProperty() {
            var attributeType = this.getAttribute('attributeType').getString();
            var attributeName = this.getAttribute('attributeName').getString();

            if (attributeType === 'CSS') {
              return this.parent.getStyle(attributeName, true);
            }

            return this.parent.getAttribute(attributeName, true);
          }
        }, {
          key: "calcValue",
          value: function calcValue() {
            var initialUnits = this.initialUnits;

            var _this$getProgress = this.getProgress(),
                progress = _this$getProgress.progress,
                from = _this$getProgress.from,
                to = _this$getProgress.to; // tween value linearly


            var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;

            if (initialUnits === '%') {
              newValue *= 100.0; // numValue() returns 0-1 whereas properties are 0-100
            }

            return "".concat(newValue).concat(initialUnits);
          }
        }, {
          key: "update",
          value: function update(delta) {
            var parent = this.parent;
            var prop = this.getProperty(); // set initial value

            if (!this.initialValue) {
              this.initialValue = prop.getString();
              this.initialUnits = prop.getUnits();
            } // if we're past the end time


            if (this.duration > this.maxDuration) {
              var fill = this.getAttribute('fill').getString('remove'); // loop for indefinitely repeating animations

              if (this.getAttribute('repeatCount').getString() === 'indefinite' || this.getAttribute('repeatDur').getString() === 'indefinite') {
                this.duration = 0;
              } else if (fill === 'freeze' && !this.frozen) {
                this.frozen = true;
                parent.animationFrozen = true;
                parent.animationFrozenValue = prop.getString();
              } else if (fill === 'remove' && !this.removed) {
                this.removed = true;
                prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
                return true;
              }

              return false;
            }

            this.duration += delta; // if we're past the begin time

            var updated = false;

            if (this.begin < this.duration) {
              var newValue = this.calcValue(); // tween

              var typeAttr = this.getAttribute('type');

              if (typeAttr.hasValue()) {
                // for transform, etc.
                var type = typeAttr.getString();
                newValue = "".concat(type, "(").concat(newValue, ")");
              }

              prop.setValue(newValue);
              updated = true;
            }

            return updated;
          }
        }, {
          key: "getProgress",
          value: function getProgress() {
            var document = this.document,
                values = this.values;
            var result = {
              progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
            };

            if (values.hasValue()) {
              var p = result.progress * (values.getValue().length - 1);
              var lb = Math.floor(p);
              var ub = Math.ceil(p);
              result.from = new Property(document, 'from', parseFloat(values.getValue()[lb]));
              result.to = new Property(document, 'to', parseFloat(values.getValue()[ub]));
              result.progress = (p - lb) / (ub - lb);
            } else {
              result.from = this.from;
              result.to = this.to;
            }

            return result;
          }
        }]);

        return AnimateElement;
      }(Element);

      var AnimateColorElement = /*#__PURE__*/function (_AnimateElement) {
        _inherits(AnimateColorElement, _AnimateElement);

        var _super28 = _createSuper(AnimateColorElement);

        function AnimateColorElement() {
          var _this36;

          _classCallCheck2(this, AnimateColorElement);

          _this36 = _super28.apply(this, arguments);
          _this36.type = 'animateColor';
          return _this36;
        }

        _createClass(AnimateColorElement, [{
          key: "calcValue",
          value: function calcValue() {
            var _this$getProgress2 = this.getProgress(),
                progress = _this$getProgress2.progress,
                from = _this$getProgress2.from,
                to = _this$getProgress2.to;

            var colorFrom = new rgbcolor__WEBPACK_IMPORTED_MODULE_13___default.a(from.getColor());
            var colorTo = new rgbcolor__WEBPACK_IMPORTED_MODULE_13___default.a(to.getColor());

            if (colorFrom.ok && colorTo.ok) {
              // tween color linearly
              var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
              var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
              var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress; // ? alpha

              return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
            }

            return this.getAttribute('from').getColor();
          }
        }]);

        return AnimateColorElement;
      }(AnimateElement);

      var AnimateTransformElement = /*#__PURE__*/function (_AnimateElement2) {
        _inherits(AnimateTransformElement, _AnimateElement2);

        var _super29 = _createSuper(AnimateTransformElement);

        function AnimateTransformElement() {
          var _this37;

          _classCallCheck2(this, AnimateTransformElement);

          _this37 = _super29.apply(this, arguments);
          _this37.type = 'animateTransform';
          return _this37;
        }

        _createClass(AnimateTransformElement, [{
          key: "calcValue",
          value: function calcValue() {
            var _this$getProgress3 = this.getProgress(),
                progress = _this$getProgress3.progress,
                from = _this$getProgress3.from,
                to = _this$getProgress3.to; // tween value linearly


            var transformFrom = toNumbers(from.getString());
            var transformTo = toNumbers(to.getString());
            var newValue = transformFrom.map(function (from, i) {
              var to = transformTo[i];
              return from + (to - from) * progress;
            }).join(' ');
            return newValue;
          }
        }]);

        return AnimateTransformElement;
      }(AnimateElement);

      var FontElement = /*#__PURE__*/function (_Element9) {
        _inherits(FontElement, _Element9);

        var _super30 = _createSuper(FontElement);

        function FontElement(document, node, captureTextNodes) {
          var _this38;

          _classCallCheck2(this, FontElement);

          _this38 = _super30.call(this, document, node, captureTextNodes);
          _this38.type = 'font';
          _this38.glyphs = {};
          _this38.horizAdvX = _this38.getAttribute('horiz-adv-x').getNumber();
          var definitions = document.definitions;

          var _assertThisInitialize2 = _assertThisInitialized(_this38),
              children = _assertThisInitialize2.children;

          var _iterator = _createForOfIteratorHelper(children),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var child = _step.value;

              switch (child.type) {
                case 'font-face':
                  {
                    _this38.fontFace = child;
                    var fontFamilyStyle = child.getStyle('font-family');

                    if (fontFamilyStyle.hasValue()) {
                      definitions[fontFamilyStyle.getString()] = _assertThisInitialized(_this38);
                    }

                    break;
                  }

                case 'missing-glyph':
                  _this38.missingGlyph = child;
                  break;

                case 'glyph':
                  {
                    var glyph = child;

                    if (glyph.arabicForm) {
                      _this38.isRTL = true;
                      _this38.isArabic = true;

                      if (typeof _this38.glyphs[glyph.unicode] === 'undefined') {
                        _this38.glyphs[glyph.unicode] = {};
                      }

                      _this38.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                    } else {
                      _this38.glyphs[glyph.unicode] = glyph;
                    }

                    break;
                  }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return _this38;
        }

        _createClass(FontElement, [{
          key: "render",
          value: function render() {// NO RENDER
          }
        }]);

        return FontElement;
      }(Element);

      var FontFaceElement = /*#__PURE__*/function (_Element10) {
        _inherits(FontFaceElement, _Element10);

        var _super31 = _createSuper(FontFaceElement);

        function FontFaceElement(document, node, captureTextNodes) {
          var _this39;

          _classCallCheck2(this, FontFaceElement);

          _this39 = _super31.call(this, document, node, captureTextNodes);
          _this39.type = 'font-face';
          _this39.ascent = _this39.getAttribute('ascent').getNumber();
          _this39.descent = _this39.getAttribute('descent').getNumber();
          _this39.unitsPerEm = _this39.getAttribute('units-per-em').getNumber();
          return _this39;
        }

        return FontFaceElement;
      }(Element);

      var MissingGlyphElement = /*#__PURE__*/function (_PathElement7) {
        _inherits(MissingGlyphElement, _PathElement7);

        var _super32 = _createSuper(MissingGlyphElement);

        function MissingGlyphElement() {
          var _this40;

          _classCallCheck2(this, MissingGlyphElement);

          _this40 = _super32.apply(this, arguments);
          _this40.type = 'missing-glyph';
          _this40.horizAdvX = 0;
          return _this40;
        }

        return MissingGlyphElement;
      }(PathElement);

      var TRefElement = /*#__PURE__*/function (_TextElement2) {
        _inherits(TRefElement, _TextElement2);

        var _super33 = _createSuper(TRefElement);

        function TRefElement() {
          var _this41;

          _classCallCheck2(this, TRefElement);

          _this41 = _super33.apply(this, arguments);
          _this41.type = 'tref';
          return _this41;
        }

        _createClass(TRefElement, [{
          key: "getText",
          value: function getText() {
            var element = this.getHrefAttribute().getDefinition();

            if (element) {
              var firstChild = element.children[0];

              if (firstChild) {
                return firstChild.getText();
              }
            }

            return '';
          }
        }]);

        return TRefElement;
      }(TextElement);

      var AElement = /*#__PURE__*/function (_TextElement3) {
        _inherits(AElement, _TextElement3);

        var _super34 = _createSuper(AElement);

        function AElement(document, node, captureTextNodes) {
          var _this42;

          _classCallCheck2(this, AElement);

          _this42 = _super34.call(this, document, node, captureTextNodes);
          _this42.type = 'a';
          var childNodes = node.childNodes;
          var firstChild = childNodes[0];
          var hasText = childNodes.length > 0 && Array.from(childNodes).every(function (node) {
            return node.nodeType === 3;
          });
          _this42.hasText = hasText;
          _this42.text = hasText ? _this42.getTextFromNode(firstChild) : '';
          return _this42;
        }

        _createClass(AElement, [{
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            if (this.hasText) {
              // render as text element
              _get(_getPrototypeOf(AElement.prototype), "renderChildren", this).call(this, ctx);

              var document = this.document,
                  x = this.x,
                  y = this.y;
              var mouse = document.screen.mouse;
              var fontSize = new Property(document, 'fontSize', Font.parse(document.ctx.font).fontSize); // Do not calc bounding box if mouse is not working.

              if (mouse.isWorking()) {
                mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels('y'), x + this.measureText(ctx), y));
              }
            } else if (this.children.length > 0) {
              // render as temporary group
              var g = new GElement(this.document, null);
              g.children = this.children;
              g.parent = this;
              g.render(ctx);
            }
          }
        }, {
          key: "onClick",
          value: function onClick() {
            var window = this.document.window;

            if (window) {
              window.open(this.getHrefAttribute().getString());
            }
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove() {
            var ctx = this.document.ctx;
            ctx.canvas.style.cursor = 'pointer';
          }
        }]);

        return AElement;
      }(TextElement);

      function ownKeys$2(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread$2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys$2(Object(source), true).forEach(function (key) {
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$2(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      var TextPathElement = /*#__PURE__*/function (_TextElement4) {
        _inherits(TextPathElement, _TextElement4);

        var _super35 = _createSuper(TextPathElement);

        function TextPathElement(document, node, captureTextNodes) {
          var _this43;

          _classCallCheck2(this, TextPathElement);

          _this43 = _super35.call(this, document, node, captureTextNodes);
          _this43.type = 'textPath';
          _this43.textWidth = 0;
          _this43.textHeight = 0;
          _this43.pathLength = -1;
          _this43.glyphInfo = null;
          _this43.letterSpacingCache = [];
          _this43.measuresCache = new Map([['', 0]]);

          var pathElement = _this43.getHrefAttribute().getDefinition();

          _this43.text = _this43.getTextFromNode();
          _this43.dataArray = _this43.parsePathData(pathElement);
          return _this43;
        }

        _createClass(TextPathElement, [{
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }, {
          key: "path",
          value: function path(ctx) {
            var dataArray = this.dataArray;

            if (ctx) {
              ctx.beginPath();
            }

            dataArray.forEach(function (_ref) {
              var type = _ref.type,
                  points = _ref.points;

              switch (type) {
                case PathParser.LINE_TO:
                  if (ctx) {
                    ctx.lineTo(points[0], points[1]);
                  }

                  break;

                case PathParser.MOVE_TO:
                  if (ctx) {
                    ctx.moveTo(points[0], points[1]);
                  }

                  break;

                case PathParser.CURVE_TO:
                  if (ctx) {
                    ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                  }

                  break;

                case PathParser.QUAD_TO:
                  if (ctx) {
                    ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                  }

                  break;

                case PathParser.ARC:
                  {
                    var _points2 = _slicedToArray(points, 8),
                        cx = _points2[0],
                        cy = _points2[1],
                        rx = _points2[2],
                        ry = _points2[3],
                        theta = _points2[4],
                        dTheta = _points2[5],
                        psi = _points2[6],
                        fs = _points2[7];

                    var r = rx > ry ? rx : ry;
                    var scaleX = rx > ry ? 1 : rx / ry;
                    var scaleY = rx > ry ? ry / rx : 1;

                    if (ctx) {
                      ctx.translate(cx, cy);
                      ctx.rotate(psi);
                      ctx.scale(scaleX, scaleY);
                      ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                      ctx.scale(1 / scaleX, 1 / scaleY);
                      ctx.rotate(-psi);
                      ctx.translate(-cx, -cy);
                    }

                    break;
                  }

                case PathParser.CLOSE_PATH:
                  if (ctx) {
                    ctx.closePath();
                  }

                  break;
              }
            });
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            this.setTextData(ctx);
            ctx.save();
            var textDecoration = this.parent.getStyle('text-decoration').getString();
            var fontSize = this.getFontSize();
            var glyphInfo = this.glyphInfo;
            var fill = ctx.fillStyle;

            if (textDecoration === 'underline') {
              ctx.beginPath();
            }

            glyphInfo.forEach(function (glyph, i) {
              var p0 = glyph.p0,
                  p1 = glyph.p1,
                  rotation = glyph.rotation,
                  partialText = glyph.text;
              ctx.save();
              ctx.translate(p0.x, p0.y);
              ctx.rotate(rotation);

              if (ctx.fillStyle) {
                ctx.fillText(partialText, 0, 0);
              }

              if (ctx.strokeStyle) {
                ctx.strokeText(partialText, 0, 0);
              }

              ctx.restore();

              if (textDecoration === 'underline') {
                if (i === 0) {
                  ctx.moveTo(p0.x, p0.y + fontSize / 8);
                }

                ctx.lineTo(p1.x, p1.y + fontSize / 5);
              } // // To assist with debugging visually, uncomment following
              //
              // ctx.beginPath();
              // if (i % 2)
              // 	ctx.strokeStyle = 'red';
              // else
              // 	ctx.strokeStyle = 'green';
              // ctx.moveTo(p0.x, p0.y);
              // ctx.lineTo(p1.x, p1.y);
              // ctx.stroke();
              // ctx.closePath();

            });

            if (textDecoration === 'underline') {
              ctx.lineWidth = fontSize / 20;
              ctx.strokeStyle = fill;
              ctx.stroke();
              ctx.closePath();
            }

            ctx.restore();
          }
        }, {
          key: "getLetterSpacingAt",
          value: function getLetterSpacingAt() {
            var idx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            return this.letterSpacingCache[idx] || 0;
          }
        }, {
          key: "findSegmentToFitChar",
          value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c, charI) {
            var offset = inputOffset;
            var glyphWidth = this.measureText(ctx, c);

            if (c === ' ' && anchor === 'justify' && textFullWidth < fullPathWidth) {
              glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
            }

            if (charI > -1) {
              offset += this.getLetterSpacingAt(charI);
            }

            var splineStep = this.textHeight / 20;
            var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
            var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
            var segment = {
              p0: p0,
              p1: p1
            };
            var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;

            if (dy) {
              var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
              var dyY = Math.cos(-rotation) * dy;
              segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
                x: p0.x + dyX,
                y: p0.y + dyY
              });
              segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
                x: p1.x + dyX,
                y: p1.y + dyY
              });
            }

            offset += glyphWidth;
            return {
              offset: offset,
              segment: segment,
              rotation: rotation
            };
          }
        }, {
          key: "measureText",
          value: function measureText(ctx, text) {
            var measuresCache = this.measuresCache;
            var targetText = text || this.getText();

            if (measuresCache.has(targetText)) {
              return measuresCache.get(targetText);
            }

            var measure = this.measureTargetText(ctx, targetText);
            measuresCache.set(targetText, measure);
            return measure;
          } // This method supposes what all custom fonts already loaded.
          // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
          // You need to call this method manually to update glyphs cache.

        }, {
          key: "setTextData",
          value: function setTextData(ctx) {
            var _this44 = this;

            if (this.glyphInfo) {
              return;
            }

            var renderText = this.getText();
            var chars = renderText.split('');
            var spacesNumber = renderText.split(' ').length - 1;
            var dx = this.parent.getAttribute('dx').split().map(function (_) {
              return _.getPixels('x');
            });
            var dy = this.parent.getAttribute('dy').getPixels('y');
            var anchor = this.parent.getStyle('text-anchor').getString('start');
            var thisSpacing = this.getStyle('letter-spacing');
            var parentSpacing = this.parent.getStyle('letter-spacing');
            var letterSpacing = 0;

            if (!thisSpacing.hasValue() || thisSpacing.getValue() === 'inherit') {
              letterSpacing = parentSpacing.getPixels();
            } else if (thisSpacing.hasValue()) {
              if (thisSpacing.getValue() !== 'initial' && thisSpacing.getValue() !== 'unset') {
                letterSpacing = thisSpacing.getPixels();
              }
            } // fill letter-spacing cache


            var letterSpacingCache = [];
            var textLen = renderText.length;
            this.letterSpacingCache = letterSpacingCache;

            for (var i = 0; i < textLen; i++) {
              letterSpacingCache.push(typeof dx[i] !== 'undefined' ? dx[i] : letterSpacing);
            }

            var dxSum = letterSpacingCache.reduce(function (acc, cur, i) {
              return i === 0 ? 0 : acc + cur || 0;
            }, 0);
            var textWidth = this.measureText(ctx);
            var textFullWidth = Math.max(textWidth + dxSum, 0);
            this.textWidth = textWidth;
            this.textHeight = this.getFontSize();
            this.glyphInfo = [];
            var fullPathWidth = this.getPathLength();
            var startOffset = this.getStyle('startOffset').getNumber(0) * fullPathWidth;
            var offset = 0;

            if (anchor === 'middle' || anchor === 'center') {
              offset = -textFullWidth / 2;
            }

            if (anchor === 'end' || anchor === 'right') {
              offset = -textFullWidth;
            }

            offset += startOffset;
            chars.forEach(function (_char2, i) {
              // Find such segment what distance between p0 and p1 is approx. width of glyph
              var _this44$findSegmentTo = _this44.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, _char2, i),
                  nextOffset = _this44$findSegmentTo.offset,
                  segment = _this44$findSegmentTo.segment,
                  rotation = _this44$findSegmentTo.rotation;

              offset = nextOffset;

              if (!segment.p0 || !segment.p1) {
                return;
              } // const width = this.getLineLength(
              // 	segment.p0.x,
              // 	segment.p0.y,
              // 	segment.p1.x,
              // 	segment.p1.y
              // );
              // Note: Since glyphs are rendered one at a time, any kerning pair data built into the font will not be used.
              // Can foresee having a rough pair table built in that the developer can override as needed.
              // Or use "dx" attribute of the <text> node as a naive replacement
              // const kern = 0;
              // placeholder for future implementation
              // const midpoint = this.getPointOnLine(
              // 	kern + width / 2.0,
              // 	segment.p0.x, segment.p0.y, segment.p1.x, segment.p1.y
              // );


              _this44.glyphInfo.push({
                // transposeX: midpoint.x,
                // transposeY: midpoint.y,
                text: chars[i],
                p0: segment.p0,
                p1: segment.p1,
                rotation: rotation
              });
            });
          }
        }, {
          key: "parsePathData",
          value: function parsePathData(path) {
            this.pathLength = -1; // reset path length

            if (!path) {
              return [];
            }

            var pathCommands = [];
            var pathParser = path.pathParser;
            pathParser.reset(); // convert l, H, h, V, and v to L

            while (!pathParser.isEnd()) {
              var current = pathParser.current;
              var startX = current ? current.x : 0;
              var startY = current ? current.y : 0;
              var command = pathParser.next();
              var nextCommandType = command.type;
              var points = [];

              switch (command.type) {
                case PathParser.MOVE_TO:
                  this.pathM(pathParser, points);
                  break;

                case PathParser.LINE_TO:
                  nextCommandType = this.pathL(pathParser, points);
                  break;

                case PathParser.HORIZ_LINE_TO:
                  nextCommandType = this.pathH(pathParser, points);
                  break;

                case PathParser.VERT_LINE_TO:
                  nextCommandType = this.pathV(pathParser, points);
                  break;

                case PathParser.CURVE_TO:
                  this.pathC(pathParser, points);
                  break;

                case PathParser.SMOOTH_CURVE_TO:
                  nextCommandType = this.pathS(pathParser, points);
                  break;

                case PathParser.QUAD_TO:
                  this.pathQ(pathParser, points);
                  break;

                case PathParser.SMOOTH_QUAD_TO:
                  nextCommandType = this.pathT(pathParser, points);
                  break;

                case PathParser.ARC:
                  points = this.pathA(pathParser);
                  break;

                case PathParser.CLOSE_PATH:
                  PathElement.pathZ(pathParser);
                  break;
              }

              if (command.type !== PathParser.CLOSE_PATH) {
                pathCommands.push({
                  type: nextCommandType,
                  points: points,
                  start: {
                    x: startX,
                    y: startY
                  },
                  pathLength: this.calcLength(startX, startY, nextCommandType, points)
                });
              } else {
                pathCommands.push({
                  type: PathParser.CLOSE_PATH,
                  points: [],
                  pathLength: 0
                });
              }
            }

            return pathCommands;
          }
        }, {
          key: "pathM",
          value: function pathM(pathParser, points) {
            var _PathElement$pathM$po = PathElement.pathM(pathParser).point,
                x = _PathElement$pathM$po.x,
                y = _PathElement$pathM$po.y;
            points.push(x, y);
          }
        }, {
          key: "pathL",
          value: function pathL(pathParser, points) {
            var _PathElement$pathL$po = PathElement.pathL(pathParser).point,
                x = _PathElement$pathL$po.x,
                y = _PathElement$pathL$po.y;
            points.push(x, y);
            return PathParser.LINE_TO;
          }
        }, {
          key: "pathH",
          value: function pathH(pathParser, points) {
            var _PathElement$pathH$po = PathElement.pathH(pathParser).point,
                x = _PathElement$pathH$po.x,
                y = _PathElement$pathH$po.y;
            points.push(x, y);
            return PathParser.LINE_TO;
          }
        }, {
          key: "pathV",
          value: function pathV(pathParser, points) {
            var _PathElement$pathV$po = PathElement.pathV(pathParser).point,
                x = _PathElement$pathV$po.x,
                y = _PathElement$pathV$po.y;
            points.push(x, y);
            return PathParser.LINE_TO;
          }
        }, {
          key: "pathC",
          value: function pathC(pathParser, points) {
            var _PathElement$pathC2 = PathElement.pathC(pathParser),
                point = _PathElement$pathC2.point,
                controlPoint = _PathElement$pathC2.controlPoint,
                currentPoint = _PathElement$pathC2.currentPoint;

            points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          }
        }, {
          key: "pathS",
          value: function pathS(pathParser, points) {
            var _PathElement$pathS2 = PathElement.pathS(pathParser),
                point = _PathElement$pathS2.point,
                controlPoint = _PathElement$pathS2.controlPoint,
                currentPoint = _PathElement$pathS2.currentPoint;

            points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            return PathParser.CURVE_TO;
          }
        }, {
          key: "pathQ",
          value: function pathQ(pathParser, points) {
            var _PathElement$pathQ2 = PathElement.pathQ(pathParser),
                controlPoint = _PathElement$pathQ2.controlPoint,
                currentPoint = _PathElement$pathQ2.currentPoint;

            points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          }
        }, {
          key: "pathT",
          value: function pathT(pathParser, points) {
            var _PathElement$pathT2 = PathElement.pathT(pathParser),
                controlPoint = _PathElement$pathT2.controlPoint,
                currentPoint = _PathElement$pathT2.currentPoint;

            points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
            return PathParser.QUAD_TO;
          }
        }, {
          key: "pathA",
          value: function pathA(pathParser) {
            var _PathElement$pathA2 = PathElement.pathA(pathParser),
                rX = _PathElement$pathA2.rX,
                rY = _PathElement$pathA2.rY,
                sweepFlag = _PathElement$pathA2.sweepFlag,
                xAxisRotation = _PathElement$pathA2.xAxisRotation,
                centp = _PathElement$pathA2.centp,
                a1 = _PathElement$pathA2.a1,
                ad = _PathElement$pathA2.ad;

            if (sweepFlag === 0 && ad > 0) {
              ad -= 2 * Math.PI;
            }

            if (sweepFlag === 1 && ad < 0) {
              ad += 2 * Math.PI;
            }

            return [centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag];
          }
        }, {
          key: "calcLength",
          value: function calcLength(x, y, commandType, points) {
            var len = 0;
            var p1 = null;
            var p2 = null;
            var t = 0;

            switch (commandType) {
              case PathParser.LINE_TO:
                return this.getLineLength(x, y, points[0], points[1]);

              case PathParser.CURVE_TO:
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);

                for (t = 0.01; t <= 1; t += 0.01) {
                  p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                  len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  p1 = p2;
                }

                return len;

              case PathParser.QUAD_TO:
                // Approximates by breaking curve into 100 line segments
                len = 0.0;
                p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);

                for (t = 0.01; t <= 1; t += 0.01) {
                  p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                  len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  p1 = p2;
                }

                return len;

              case PathParser.ARC:
                {
                  // Approximates by breaking curve into line segments
                  len = 0.0;
                  var start = points[4]; // 4 = theta

                  var dTheta = points[5]; // 5 = dTheta

                  var end = points[4] + dTheta;
                  var inc = Math.PI / 180.0; // 1 degree resolution

                  if (Math.abs(start - end) < inc) {
                    inc = Math.abs(start - end);
                  } // Note: for purpose of calculating arc length, not going to worry about rotating X-axis by angle psi


                  p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);

                  if (dTheta < 0) {
                    // clockwise
                    for (t = start - inc; t > end; t -= inc) {
                      p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                      len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                      p1 = p2;
                    }
                  } else {
                    // counter-clockwise
                    for (t = start + inc; t < end; t += inc) {
                      p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                      len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                      p1 = p2;
                    }
                  }

                  p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                  len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  return len;
                }
            }

            return 0;
          }
        }, {
          key: "getPointOnLine",
          value: function getPointOnLine(dist, p1x, p1y, p2x, p2y) {
            var fromX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : p1x;
            var fromY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : p1y;
            var m = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
            var run = Math.sqrt(dist * dist / (1 + m * m));

            if (p2x < p1x) {
              run *= -1;
            }

            var rise = m * run;
            var pt = null;

            if (p2x === p1x) {
              // vertical line
              pt = {
                x: fromX,
                y: fromY + rise
              };
            } else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m) {
              pt = {
                x: fromX + run,
                y: fromY + rise
              };
            } else {
              var ix = 0;
              var iy = 0;
              var len = this.getLineLength(p1x, p1y, p2x, p2y);

              if (len < PSEUDO_ZERO) {
                return null;
              }

              var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
              u /= len * len;
              ix = p1x + u * (p2x - p1x);
              iy = p1y + u * (p2y - p1y);
              var pRise = this.getLineLength(fromX, fromY, ix, iy);
              var pRun = Math.sqrt(dist * dist - pRise * pRise);
              run = Math.sqrt(pRun * pRun / (1 + m * m));

              if (p2x < p1x) {
                run *= -1;
              }

              rise = m * run;
              pt = {
                x: ix + run,
                y: iy + rise
              };
            }

            return pt;
          }
        }, {
          key: "getPointOnPath",
          value: function getPointOnPath(distance) {
            var fullLen = this.getPathLength();
            var cumulativePathLength = 0;
            var p = null;

            if (distance < -0.00005 || distance - 0.00005 > fullLen) {
              return null;
            }

            var dataArray = this.dataArray;

            var _iterator2 = _createForOfIteratorHelper(dataArray),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var command = _step2.value;

                if (command && (command.pathLength < 0.00005 || cumulativePathLength + command.pathLength + 0.00005 < distance)) {
                  cumulativePathLength += command.pathLength;
                  continue;
                }

                var delta = distance - cumulativePathLength;
                var currentT = 0;

                switch (command.type) {
                  case PathParser.LINE_TO:
                    p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                    break;

                  case PathParser.ARC:
                    {
                      var start = command.points[4]; // 4 = theta

                      var dTheta = command.points[5]; // 5 = dTheta

                      var end = command.points[4] + dTheta;
                      currentT = start + delta / command.pathLength * dTheta;

                      if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                        break;
                      }

                      p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                      break;
                    }

                  case PathParser.CURVE_TO:
                    currentT = delta / command.pathLength;

                    if (currentT > 1) {
                      currentT = 1;
                    }

                    p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                    break;

                  case PathParser.QUAD_TO:
                    currentT = delta / command.pathLength;

                    if (currentT > 1) {
                      currentT = 1;
                    }

                    p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                    break;
                }

                if (p) {
                  return p;
                }

                break;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return null;
          }
        }, {
          key: "getLineLength",
          value: function getLineLength(x1, y1, x2, y2) {
            return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
          }
        }, {
          key: "getPathLength",
          value: function getPathLength() {
            if (this.pathLength === -1) {
              this.pathLength = this.dataArray.reduce(function (length, command) {
                return command.pathLength > 0 ? length + command.pathLength : length;
              }, 0);
            }

            return this.pathLength;
          }
        }, {
          key: "getPointOnCubicBezier",
          value: function getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
            var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
            var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
            return {
              x: x,
              y: y
            };
          }
        }, {
          key: "getPointOnQuadraticBezier",
          value: function getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
            var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
            var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
            return {
              x: x,
              y: y
            };
          }
        }, {
          key: "getPointOnEllipticalArc",
          value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
            var cosPsi = Math.cos(psi);
            var sinPsi = Math.sin(psi);
            var pt = {
              x: rx * Math.cos(theta),
              y: ry * Math.sin(theta)
            };
            return {
              x: cx + (pt.x * cosPsi - pt.y * sinPsi),
              y: cy + (pt.x * sinPsi + pt.y * cosPsi)
            };
          } // TODO need some optimisations. possibly build cache only for curved segments?

        }, {
          key: "buildEquidistantCache",
          value: function buildEquidistantCache(inputStep, inputPrecision) {
            var fullLen = this.getPathLength();
            var precision = inputPrecision || 0.25; // accuracy vs performance

            var step = inputStep || fullLen / 100;

            if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
              // Prepare cache
              this.equidistantCache = {
                step: step,
                precision: precision,
                points: []
              }; // Calculate points

              var s = 0;

              for (var l = 0; l <= fullLen; l += precision) {
                var p0 = this.getPointOnPath(l);
                var p1 = this.getPointOnPath(l + precision);

                if (!p0 || !p1) {
                  continue;
                }

                s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);

                if (s >= step) {
                  this.equidistantCache.points.push({
                    x: p0.x,
                    y: p0.y,
                    distance: l
                  });
                  s -= step;
                }
              }
            }
          }
        }, {
          key: "getEquidistantPointOnPath",
          value: function getEquidistantPointOnPath(targetDistance, step, precision) {
            this.buildEquidistantCache(step, precision);

            if (targetDistance < 0 || targetDistance - this.getPathLength() > 0.00005) {
              return null;
            }

            var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
            return this.equidistantCache.points[idx] || null;
          }
        }]);

        return TextPathElement;
      }(TextElement);

      var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;

      var ImageElement = /*#__PURE__*/function (_RenderedElement5) {
        _inherits(ImageElement, _RenderedElement5);

        var _super36 = _createSuper(ImageElement);

        function ImageElement(document, node, captureTextNodes) {
          var _this45;

          _classCallCheck2(this, ImageElement);

          _this45 = _super36.call(this, document, node, captureTextNodes);
          _this45.type = 'image';
          _this45.loaded = false;

          var href = _this45.getHrefAttribute().getString();

          if (!href) {
            return _possibleConstructorReturn(_this45);
          }

          var isSvg = href.endsWith('.svg') || /^\s*data:image\/svg\+xml/i.test(href);
          document.images.push(_assertThisInitialized(_this45));

          if (!isSvg) {
            void _this45.loadImage(href);
          } else {
            void _this45.loadSvg(href);
          }

          _this45.isSvg = isSvg;
          return _this45;
        }

        _createClass(ImageElement, [{
          key: "loadImage",
          value: function loadImage(href) {
            var _this = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var image;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return _this.document.createImage(href);

                    case 3:
                      image = _context4.sent;
                      _this.image = image;
                      _context4.next = 10;
                      break;

                    case 7:
                      _context4.prev = 7;
                      _context4.t0 = _context4["catch"](0);
                      console.error("Error while loading image \"".concat(href, "\":"), _context4.t0);

                    case 10:
                      _this.loaded = true;

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, null, [[0, 7]]);
            }))();
          }
        }, {
          key: "loadSvg",
          value: function loadSvg(href) {
            var _this2 = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var match, data, response, svg;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      match = dataUriRegex.exec(href);

                      if (!match) {
                        _context5.next = 6;
                        break;
                      }

                      data = match[5];

                      if (match[4] === 'base64') {
                        _this2.image = atob(data);
                      } else {
                        _this2.image = decodeURIComponent(data);
                      }

                      _context5.next = 19;
                      break;

                    case 6:
                      _context5.prev = 6;
                      _context5.next = 9;
                      return _this2.document.fetch(href);

                    case 9:
                      response = _context5.sent;
                      _context5.next = 12;
                      return response.text();

                    case 12:
                      svg = _context5.sent;
                      _this2.image = svg;
                      _context5.next = 19;
                      break;

                    case 16:
                      _context5.prev = 16;
                      _context5.t0 = _context5["catch"](6);
                      console.error("Error while loading image \"".concat(href, "\":"), _context5.t0);

                    case 19:
                      _this2.loaded = true;

                    case 20:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, null, [[6, 16]]);
            }))();
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            var document = this.document,
                image = this.image,
                loaded = this.loaded;
            var x = this.getAttribute('x').getPixels('x');
            var y = this.getAttribute('y').getPixels('y');
            var width = this.getStyle('width').getPixels('x');
            var height = this.getStyle('height').getPixels('y');

            if (!loaded || !image || !width || !height) {
              return;
            }

            ctx.save();
            ctx.translate(x, y);

            if (this.isSvg) {
              var subDocument = document.canvg.forkString(ctx, this.image, {
                ignoreMouse: true,
                ignoreAnimation: true,
                ignoreDimensions: true,
                ignoreClear: true,
                offsetX: 0,
                offsetY: 0,
                scaleWidth: width,
                scaleHeight: height
              });
              subDocument.document.documentElement.parent = this;
              void subDocument.render();
            } else {
              var _image = this.image;
              document.setViewBox({
                ctx: ctx,
                aspectRatio: this.getAttribute('preserveAspectRatio').getString(),
                width: width,
                desiredWidth: _image.width,
                height: height,
                desiredHeight: _image.height
              });

              if (this.loaded) {
                if (typeof _image.complete === 'undefined' || _image.complete) {
                  ctx.drawImage(_image, 0, 0);
                }
              }
            }

            ctx.restore();
          }
        }, {
          key: "getBoundingBox",
          value: function getBoundingBox() {
            var x = this.getAttribute('x').getPixels('x');
            var y = this.getAttribute('y').getPixels('y');
            var width = this.getStyle('width').getPixels('x');
            var height = this.getStyle('height').getPixels('y');
            return new BoundingBox(x, y, x + width, y + height);
          }
        }]);

        return ImageElement;
      }(RenderedElement);

      var SymbolElement = /*#__PURE__*/function (_RenderedElement6) {
        _inherits(SymbolElement, _RenderedElement6);

        var _super37 = _createSuper(SymbolElement);

        function SymbolElement() {
          var _this46;

          _classCallCheck2(this, SymbolElement);

          _this46 = _super37.apply(this, arguments);
          _this46.type = 'symbol';
          return _this46;
        }

        _createClass(SymbolElement, [{
          key: "render",
          value: function render(_) {// NO RENDER
          }
        }]);

        return SymbolElement;
      }(RenderedElement);

      var SVGFontLoader = /*#__PURE__*/function () {
        function SVGFontLoader(document) {
          _classCallCheck2(this, SVGFontLoader);

          this.document = document;
          this.loaded = false;
          document.fonts.push(this);
        }

        _createClass(SVGFontLoader, [{
          key: "load",
          value: function load(fontFamily, url) {
            var _this = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var document, svgDocument, fonts;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      document = _this.document;
                      _context6.next = 4;
                      return document.canvg.parser.load(url);

                    case 4:
                      svgDocument = _context6.sent;
                      fonts = svgDocument.getElementsByTagName('font');
                      Array.from(fonts).forEach(function (fontNode) {
                        var font = document.createElement(fontNode);
                        document.definitions[fontFamily] = font;
                      });
                      _context6.next = 12;
                      break;

                    case 9:
                      _context6.prev = 9;
                      _context6.t0 = _context6["catch"](0);
                      console.error("Error while loading font \"".concat(url, "\":"), _context6.t0);

                    case 12:
                      _this.loaded = true;

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, null, [[0, 9]]);
            }))();
          }
        }]);

        return SVGFontLoader;
      }();

      var StyleElement = /*#__PURE__*/function (_Element11) {
        _inherits(StyleElement, _Element11);

        var _super38 = _createSuper(StyleElement);

        function StyleElement(document, node, captureTextNodes) {
          var _this47;

          _classCallCheck2(this, StyleElement);

          _this47 = _super38.call(this, document, node, captureTextNodes);
          _this47.type = 'style';
          var css = compressSpaces(Array.from(node.childNodes) // NEED TEST
          .map(function (_) {
            return _.textContent;
          }).join('').replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, '') // remove comments
          .replace(/@import.*;/g, '') // remove imports
          );
          var cssDefs = css.split('}');
          cssDefs.forEach(function (_) {
            var def = _.trim();

            if (!def) {
              return;
            }

            var cssParts = def.split('{');
            var cssClasses = cssParts[0].split(',');
            var cssProps = cssParts[1].split(';');
            cssClasses.forEach(function (_) {
              var cssClass = _.trim();

              if (!cssClass) {
                return;
              }

              var props = document.styles[cssClass] || {};
              cssProps.forEach(function (cssProp) {
                var prop = cssProp.indexOf(':');
                var name = cssProp.substr(0, prop).trim();
                var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();

                if (name && value) {
                  props[name] = new Property(document, name, value);
                }
              });
              document.styles[cssClass] = props;
              document.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);

              if (cssClass === '@font-face') {
                //  && !nodeEnv
                var fontFamily = props['font-family'].getString().replace(/"|'/g, '');
                var srcs = props.src.getString().split(',');
                srcs.forEach(function (src) {
                  if (src.indexOf('format("svg")') > 0) {
                    var url = parseExternalUrl(src);

                    if (url) {
                      void new SVGFontLoader(document).load(fontFamily, url);
                    }
                  }
                });
              }
            });
          });
          return _this47;
        }

        return StyleElement;
      }(Element);

      StyleElement.parseExternalUrl = parseExternalUrl;

      var UseElement = /*#__PURE__*/function (_RenderedElement7) {
        _inherits(UseElement, _RenderedElement7);

        var _super39 = _createSuper(UseElement);

        function UseElement() {
          var _this48;

          _classCallCheck2(this, UseElement);

          _this48 = _super39.apply(this, arguments);
          _this48.type = 'use';
          return _this48;
        }

        _createClass(UseElement, [{
          key: "setContext",
          value: function setContext(ctx) {
            _get(_getPrototypeOf(UseElement.prototype), "setContext", this).call(this, ctx);

            var xAttr = this.getAttribute('x');
            var yAttr = this.getAttribute('y');

            if (xAttr.hasValue()) {
              ctx.translate(xAttr.getPixels('x'), 0);
            }

            if (yAttr.hasValue()) {
              ctx.translate(0, yAttr.getPixels('y'));
            }
          }
        }, {
          key: "path",
          value: function path(ctx) {
            var element = this.element;

            if (element) {
              element.path(ctx);
            }
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(ctx) {
            var document = this.document,
                element = this.element;

            if (element) {
              var tempSvg = element;

              if (element.type === 'symbol') {
                // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
                tempSvg = new SVGElement(document, null);
                tempSvg.attributes.viewBox = new Property(document, 'viewBox', element.getAttribute('viewBox').getString());
                tempSvg.attributes.preserveAspectRatio = new Property(document, 'preserveAspectRatio', element.getAttribute('preserveAspectRatio').getString());
                tempSvg.attributes.overflow = new Property(document, 'overflow', element.getAttribute('overflow').getString());
                tempSvg.children = element.children; // element is still the parent of the children

                element.styles.opacity = new Property(document, 'opacity', this.calculateOpacity());
              }

              if (tempSvg.type === 'svg') {
                var widthStyle = this.getStyle('width', false, true);
                var heightStyle = this.getStyle('height', false, true); // if symbol or svg, inherit width/height from me

                if (widthStyle.hasValue()) {
                  tempSvg.attributes.width = new Property(document, 'width', widthStyle.getString());
                }

                if (heightStyle.hasValue()) {
                  tempSvg.attributes.height = new Property(document, 'height', heightStyle.getString());
                }
              }

              var oldParent = tempSvg.parent;
              tempSvg.parent = this;
              tempSvg.render(ctx);
              tempSvg.parent = oldParent;
            }
          }
        }, {
          key: "getBoundingBox",
          value: function getBoundingBox(ctx) {
            var element = this.element;

            if (element) {
              return element.getBoundingBox(ctx);
            }

            return null;
          }
        }, {
          key: "elementTransform",
          value: function elementTransform() {
            var document = this.document,
                element = this.element;
            return Transform.fromElement(document, element);
          }
        }, {
          key: "element",
          get: function get() {
            if (!this.cachedElement) {
              this.cachedElement = this.getHrefAttribute().getDefinition();
            }

            return this.cachedElement;
          }
        }]);

        return UseElement;
      }(RenderedElement);

      function imGet(img, x, y, width, _height, rgba) {
        return img[y * width * 4 + x * 4 + rgba];
      }

      function imSet(img, x, y, width, _height, rgba, val) {
        img[y * width * 4 + x * 4 + rgba] = val;
      }

      function m(matrix, i, v) {
        var mi = matrix[i];
        return mi * v;
      }

      function c(a, m1, m2, m3) {
        return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
      }

      var FeColorMatrixElement = /*#__PURE__*/function (_Element12) {
        _inherits(FeColorMatrixElement, _Element12);

        var _super40 = _createSuper(FeColorMatrixElement);

        function FeColorMatrixElement(document, node, captureTextNodes) {
          var _this49;

          _classCallCheck2(this, FeColorMatrixElement);

          _this49 = _super40.call(this, document, node, captureTextNodes);
          _this49.type = 'feColorMatrix';
          var matrix = toNumbers(_this49.getAttribute('values').getString());

          switch (_this49.getAttribute('type').getString('matrix')) {
            // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
            case 'saturate':
              {
                var s = matrix[0];
                /* eslint-disable array-element-newline */

                matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                /* eslint-enable array-element-newline */

                break;
              }

            case 'hueRotate':
              {
                var a = matrix[0] * Math.PI / 180.0;
                /* eslint-disable array-element-newline */

                matrix = [c(a, 0.213, 0.787, -0.213), c(a, 0.715, -0.715, -0.715), c(a, 0.072, -0.072, 0.928), 0, 0, c(a, 0.213, -0.213, 0.143), c(a, 0.715, 0.285, 0.140), c(a, 0.072, -0.072, -0.283), 0, 0, c(a, 0.213, -0.213, -0.787), c(a, 0.715, -0.715, 0.715), c(a, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
                /* eslint-enable array-element-newline */

                break;
              }

            case 'luminanceToAlpha':
              /* eslint-disable array-element-newline */
              matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
              /* eslint-enable array-element-newline */

              break;
          }

          _this49.matrix = matrix;
          _this49.includeOpacity = _this49.getAttribute('includeOpacity').hasValue();
          return _this49;
        }

        _createClass(FeColorMatrixElement, [{
          key: "apply",
          value: function apply(ctx, _x, _y, width, height) {
            // assuming x==0 && y==0 for now
            var includeOpacity = this.includeOpacity,
                matrix = this.matrix;
            var srcData = ctx.getImageData(0, 0, width, height);

            for (var y = 0; y < height; y++) {
              for (var x = 0; x < width; x++) {
                var r = imGet(srcData.data, x, y, width, height, 0);
                var g = imGet(srcData.data, x, y, width, height, 1);
                var b = imGet(srcData.data, x, y, width, height, 2);
                var a = imGet(srcData.data, x, y, width, height, 3);
                var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
                var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
                var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
                var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);

                if (includeOpacity) {
                  nr = 0;
                  ng = 0;
                  nb = 0;
                  na *= a / 255;
                }

                imSet(srcData.data, x, y, width, height, 0, nr);
                imSet(srcData.data, x, y, width, height, 1, ng);
                imSet(srcData.data, x, y, width, height, 2, nb);
                imSet(srcData.data, x, y, width, height, 3, na);
              }
            }

            ctx.clearRect(0, 0, width, height);
            ctx.putImageData(srcData, 0, 0);
          }
        }]);

        return FeColorMatrixElement;
      }(Element);

      var MaskElement = /*#__PURE__*/function (_Element13) {
        _inherits(MaskElement, _Element13);

        var _super41 = _createSuper(MaskElement);

        function MaskElement() {
          var _this50;

          _classCallCheck2(this, MaskElement);

          _this50 = _super41.apply(this, arguments);
          _this50.type = 'mask';
          return _this50;
        }

        _createClass(MaskElement, [{
          key: "apply",
          value: function apply(ctx, element) {
            var document = this.document; // render as temp svg

            var x = this.getAttribute('x').getPixels('x');
            var y = this.getAttribute('y').getPixels('y');
            var width = this.getStyle('width').getPixels('x');
            var height = this.getStyle('height').getPixels('y');

            if (!width && !height) {
              var boundingBox = new BoundingBox();
              this.children.forEach(function (child) {
                boundingBox.addBoundingBox(child.getBoundingBox(ctx));
              });
              x = Math.floor(boundingBox.x1);
              y = Math.floor(boundingBox.y1);
              width = Math.floor(boundingBox.width);
              height = Math.floor(boundingBox.height);
            }

            var ignoredStyles = this.removeStyles(element, MaskElement.ignoreStyles);
            var maskCanvas = document.createCanvas(x + width, y + height);
            var maskCtx = maskCanvas.getContext('2d');
            document.screen.setDefaults(maskCtx);
            this.renderChildren(maskCtx); // convert mask to alpha with a fake node
            // TODO: refactor out apply from feColorMatrix

            new FeColorMatrixElement(document, {
              nodeType: 1,
              childNodes: [],
              attributes: [{
                nodeName: 'type',
                value: 'luminanceToAlpha'
              }, {
                nodeName: 'includeOpacity',
                value: 'true'
              }]
            }).apply(maskCtx, 0, 0, x + width, y + height);
            var tmpCanvas = document.createCanvas(x + width, y + height);
            var tmpCtx = tmpCanvas.getContext('2d');
            document.screen.setDefaults(tmpCtx);
            element.render(tmpCtx);
            tmpCtx.globalCompositeOperation = 'destination-in';
            tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, 'no-repeat');
            tmpCtx.fillRect(0, 0, x + width, y + height);
            ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, 'no-repeat');
            ctx.fillRect(0, 0, x + width, y + height); // reassign mask

            this.restoreStyles(element, ignoredStyles);
          }
        }, {
          key: "render",
          value: function render(_) {// NO RENDER
          }
        }]);

        return MaskElement;
      }(Element);

      MaskElement.ignoreStyles = ['mask', 'transform', 'clip-path'];

      var noop = function noop() {// NOOP
      };

      var ClipPathElement = /*#__PURE__*/function (_Element14) {
        _inherits(ClipPathElement, _Element14);

        var _super42 = _createSuper(ClipPathElement);

        function ClipPathElement() {
          var _this51;

          _classCallCheck2(this, ClipPathElement);

          _this51 = _super42.apply(this, arguments);
          _this51.type = 'clipPath';
          return _this51;
        }

        _createClass(ClipPathElement, [{
          key: "apply",
          value: function apply(ctx) {
            var document = this.document;
            var contextProto = Reflect.getPrototypeOf(ctx);
            var beginPath = ctx.beginPath,
                closePath = ctx.closePath;

            if (contextProto) {
              contextProto.beginPath = noop;
              contextProto.closePath = noop;
            }

            Reflect.apply(beginPath, ctx, []);
            this.children.forEach(function (child) {
              if (typeof child.path === 'undefined') {
                return;
              }

              var transform = typeof child.elementTransform !== 'undefined' ? child.elementTransform() : null; // handle <use />

              if (!transform) {
                transform = Transform.fromElement(document, child);
              }

              if (transform) {
                transform.apply(ctx);
              }

              child.path(ctx);

              if (contextProto) {
                contextProto.closePath = closePath;
              }

              if (transform) {
                transform.unapply(ctx);
              }
            });
            Reflect.apply(closePath, ctx, []);
            ctx.clip();

            if (contextProto) {
              contextProto.beginPath = beginPath;
              contextProto.closePath = closePath;
            }
          }
        }, {
          key: "render",
          value: function render(_) {// NO RENDER
          }
        }]);

        return ClipPathElement;
      }(Element);

      var FilterElement = /*#__PURE__*/function (_Element15) {
        _inherits(FilterElement, _Element15);

        var _super43 = _createSuper(FilterElement);

        function FilterElement() {
          var _this52;

          _classCallCheck2(this, FilterElement);

          _this52 = _super43.apply(this, arguments);
          _this52.type = 'filter';
          return _this52;
        }

        _createClass(FilterElement, [{
          key: "apply",
          value: function apply(ctx, element) {
            // render as temp svg
            var document = this.document,
                children = this.children;
            var boundingBox = element.getBoundingBox(ctx);

            if (!boundingBox) {
              return;
            }

            var px = 0;
            var py = 0;
            children.forEach(function (child) {
              var efd = child.extraFilterDistance || 0;
              px = Math.max(px, efd);
              py = Math.max(py, efd);
            });
            var width = Math.floor(boundingBox.width);
            var height = Math.floor(boundingBox.height);
            var tmpCanvasWidth = width + 2 * px;
            var tmpCanvasHeight = height + 2 * py;

            if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) {
              return;
            }

            var x = Math.floor(boundingBox.x);
            var y = Math.floor(boundingBox.y);
            var ignoredStyles = this.removeStyles(element, FilterElement.ignoreStyles);
            var tmpCanvas = document.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
            var tmpCtx = tmpCanvas.getContext('2d');
            document.screen.setDefaults(tmpCtx);
            tmpCtx.translate(-x + px, -y + py);
            element.render(tmpCtx); // apply filters

            children.forEach(function (child) {
              if (typeof child.apply === 'function') {
                child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
              }
            }); // render on me

            ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
            this.restoreStyles(element, ignoredStyles);
          }
        }, {
          key: "render",
          value: function render(_) {// NO RENDER
          }
        }]);

        return FilterElement;
      }(Element);

      FilterElement.ignoreStyles = ['filter', 'transform', 'clip-path'];

      var FeDropShadowElement = /*#__PURE__*/function (_Element16) {
        _inherits(FeDropShadowElement, _Element16);

        var _super44 = _createSuper(FeDropShadowElement);

        function FeDropShadowElement(document, node, captureTextNodes) {
          var _this53;

          _classCallCheck2(this, FeDropShadowElement);

          _this53 = _super44.call(this, document, node, captureTextNodes);
          _this53.type = 'feDropShadow';

          _this53.addStylesFromStyleDefinition();

          return _this53;
        }

        _createClass(FeDropShadowElement, [{
          key: "apply",
          value: function apply(_, _x, _y, _width, _height) {// TODO: implement
          }
        }]);

        return FeDropShadowElement;
      }(Element);

      var FeMorphologyElement = /*#__PURE__*/function (_Element17) {
        _inherits(FeMorphologyElement, _Element17);

        var _super45 = _createSuper(FeMorphologyElement);

        function FeMorphologyElement() {
          var _this54;

          _classCallCheck2(this, FeMorphologyElement);

          _this54 = _super45.apply(this, arguments);
          _this54.type = 'feMorphology';
          return _this54;
        }

        _createClass(FeMorphologyElement, [{
          key: "apply",
          value: function apply(_, _x, _y, _width, _height) {// TODO: implement
          }
        }]);

        return FeMorphologyElement;
      }(Element);

      var FeCompositeElement = /*#__PURE__*/function (_Element18) {
        _inherits(FeCompositeElement, _Element18);

        var _super46 = _createSuper(FeCompositeElement);

        function FeCompositeElement() {
          var _this55;

          _classCallCheck2(this, FeCompositeElement);

          _this55 = _super46.apply(this, arguments);
          _this55.type = 'feComposite';
          return _this55;
        }

        _createClass(FeCompositeElement, [{
          key: "apply",
          value: function apply(_, _x, _y, _width, _height) {// TODO: implement
          }
        }]);

        return FeCompositeElement;
      }(Element);

      var FeGaussianBlurElement = /*#__PURE__*/function (_Element19) {
        _inherits(FeGaussianBlurElement, _Element19);

        var _super47 = _createSuper(FeGaussianBlurElement);

        function FeGaussianBlurElement(document, node, captureTextNodes) {
          var _this56;

          _classCallCheck2(this, FeGaussianBlurElement);

          _this56 = _super47.call(this, document, node, captureTextNodes);
          _this56.type = 'feGaussianBlur';
          _this56.blurRadius = Math.floor(_this56.getAttribute('stdDeviation').getNumber());
          _this56.extraFilterDistance = _this56.blurRadius;
          return _this56;
        }

        _createClass(FeGaussianBlurElement, [{
          key: "apply",
          value: function apply(ctx, x, y, width, height) {
            var document = this.document,
                blurRadius = this.blurRadius;
            var body = document.window ? document.window.document.body : null;
            var canvas = ctx.canvas; // StackBlur requires canvas be on document

            canvas.id = document.getUniqueId();

            if (body) {
              canvas.style.display = 'none';
              body.appendChild(canvas);
            }

            Object(stackblur_canvas__WEBPACK_IMPORTED_MODULE_19__["canvasRGBA"])(canvas, x, y, width, height, blurRadius);

            if (body) {
              body.removeChild(canvas);
            }
          }
        }]);

        return FeGaussianBlurElement;
      }(Element);

      var TitleElement = /*#__PURE__*/function (_Element20) {
        _inherits(TitleElement, _Element20);

        var _super48 = _createSuper(TitleElement);

        function TitleElement() {
          var _this57;

          _classCallCheck2(this, TitleElement);

          _this57 = _super48.apply(this, arguments);
          _this57.type = 'title';
          return _this57;
        }

        return TitleElement;
      }(Element);

      var DescElement = /*#__PURE__*/function (_Element21) {
        _inherits(DescElement, _Element21);

        var _super49 = _createSuper(DescElement);

        function DescElement() {
          var _this58;

          _classCallCheck2(this, DescElement);

          _this58 = _super49.apply(this, arguments);
          _this58.type = 'desc';
          return _this58;
        }

        return DescElement;
      }(Element);

      var elements = {
        'svg': SVGElement,
        'rect': RectElement,
        'circle': CircleElement,
        'ellipse': EllipseElement,
        'line': LineElement,
        'polyline': PolylineElement,
        'polygon': PolygonElement,
        'path': PathElement,
        'pattern': PatternElement,
        'marker': MarkerElement,
        'defs': DefsElement,
        'linearGradient': LinearGradientElement,
        'radialGradient': RadialGradientElement,
        'stop': StopElement,
        'animate': AnimateElement,
        'animateColor': AnimateColorElement,
        'animateTransform': AnimateTransformElement,
        'font': FontElement,
        'font-face': FontFaceElement,
        'missing-glyph': MissingGlyphElement,
        'glyph': GlyphElement,
        'text': TextElement,
        'tspan': TSpanElement,
        'tref': TRefElement,
        'a': AElement,
        'textPath': TextPathElement,
        'image': ImageElement,
        'g': GElement,
        'symbol': SymbolElement,
        'style': StyleElement,
        'use': UseElement,
        'mask': MaskElement,
        'clipPath': ClipPathElement,
        'filter': FilterElement,
        'feDropShadow': FeDropShadowElement,
        'feMorphology': FeMorphologyElement,
        'feComposite': FeCompositeElement,
        'feColorMatrix': FeColorMatrixElement,
        'feGaussianBlur': FeGaussianBlurElement,
        'title': TitleElement,
        'desc': DescElement
      };

      function ownKeys$1(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread$1(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys$1(Object(source), true).forEach(function (key) {
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys$1(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function createCanvas(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
      }

      function createImage(_x) {
        return _createImage.apply(this, arguments);
      }

      function _createImage() {
        _createImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(src) {
          var anonymousCrossOrigin,
              image,
              _args7 = arguments;
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  anonymousCrossOrigin = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;
                  image = document.createElement('img');

                  if (anonymousCrossOrigin) {
                    image.crossOrigin = 'Anonymous';
                  }

                  return _context7.abrupt("return", new Promise(function (resolve, reject) {
                    image.onload = function () {
                      resolve(image);
                    };

                    image.onerror = function (_event, _source, _lineno, _colno, error) {
                      reject(error);
                    };

                    image.src = src;
                  }));

                case 4:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));
        return _createImage.apply(this, arguments);
      }

      var Document = /*#__PURE__*/function () {
        function Document(canvg) {
          _classCallCheck2(this, Document);

          var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
              _ref11$rootEmSize = _ref11.rootEmSize,
              rootEmSize = _ref11$rootEmSize === void 0 ? 12 : _ref11$rootEmSize,
              _ref11$emSize = _ref11.emSize,
              emSize = _ref11$emSize === void 0 ? 12 : _ref11$emSize,
              _ref11$createCanvas = _ref11.createCanvas,
              createCanvas = _ref11$createCanvas === void 0 ? Document.createCanvas : _ref11$createCanvas,
              _ref11$createImage = _ref11.createImage,
              createImage = _ref11$createImage === void 0 ? Document.createImage : _ref11$createImage,
              anonymousCrossOrigin = _ref11.anonymousCrossOrigin;

          this.canvg = canvg;
          this.definitions = {};
          this.styles = {};
          this.stylesSpecificity = {};
          this.images = [];
          this.fonts = [];
          this.emSizeStack = [];
          this.uniqueId = 0;
          this.screen = canvg.screen;
          this.rootEmSize = rootEmSize;
          this.emSize = emSize;
          this.createCanvas = createCanvas;
          this.createImage = this.bindCreateImage(createImage, anonymousCrossOrigin);
          this.screen.wait(this.isImagesLoaded.bind(this));
          this.screen.wait(this.isFontsLoaded.bind(this));
        }

        _createClass(Document, [{
          key: "bindCreateImage",
          value: function bindCreateImage(createImage, anonymousCrossOrigin) {
            if (typeof anonymousCrossOrigin === 'boolean') {
              return function (source, forceAnonymousCrossOrigin) {
                return createImage(source, typeof forceAnonymousCrossOrigin === 'boolean' ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
              };
            }

            return createImage;
          }
        }, {
          key: "popEmSize",
          value: function popEmSize() {
            var emSizeStack = this.emSizeStack;
            emSizeStack.pop();
          }
        }, {
          key: "getUniqueId",
          value: function getUniqueId() {
            return "canvg".concat(++this.uniqueId);
          }
        }, {
          key: "isImagesLoaded",
          value: function isImagesLoaded() {
            return this.images.every(function (_) {
              return _.loaded;
            });
          }
        }, {
          key: "isFontsLoaded",
          value: function isFontsLoaded() {
            return this.fonts.every(function (_) {
              return _.loaded;
            });
          }
        }, {
          key: "createDocumentElement",
          value: function createDocumentElement(document) {
            var documentElement = this.createElement(document.documentElement);
            documentElement.root = true;
            documentElement.addStylesFromStyleDefinition();
            this.documentElement = documentElement;
            return documentElement;
          }
        }, {
          key: "createElement",
          value: function createElement(node) {
            var elementType = node.nodeName.replace(/^[^:]+:/, '');
            var ElementType = Document.elementTypes[elementType];

            if (typeof ElementType !== 'undefined') {
              return new ElementType(this, node);
            }

            return new UnknownElement(this, node);
          }
        }, {
          key: "createTextNode",
          value: function createTextNode(node) {
            return new TextNode(this, node);
          }
        }, {
          key: "setViewBox",
          value: function setViewBox(config) {
            this.screen.setViewBox(_objectSpread$1({
              document: this
            }, config));
          }
        }, {
          key: "window",
          get: function get() {
            return this.screen.window;
          }
        }, {
          key: "fetch",
          get: function get() {
            return this.screen.fetch;
          }
        }, {
          key: "ctx",
          get: function get() {
            return this.screen.ctx;
          }
        }, {
          key: "emSize",
          get: function get() {
            var emSizeStack = this.emSizeStack;
            return emSizeStack[emSizeStack.length - 1];
          },
          set: function set(value) {
            var emSizeStack = this.emSizeStack;
            emSizeStack.push(value);
          }
        }]);

        return Document;
      }();

      Document.createCanvas = createCanvas;
      Document.createImage = createImage;
      Document.elementTypes = elements;

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }
      /**
       * SVG renderer on canvas.
       */


      var Canvg = /*#__PURE__*/function () {
        /**
         * Main constructor.
         * @param ctx - Rendering context.
         * @param svg - SVG Document.
         * @param options - Rendering options.
         */
        function Canvg(ctx, svg) {
          _classCallCheck2(this, Canvg);

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          this.parser = new Parser(options);
          this.screen = new Screen(ctx, options);
          this.options = options;
          var document = new Document(this, options);
          var documentElement = document.createDocumentElement(svg);
          this.document = document;
          this.documentElement = documentElement;
        }
        /**
         * Create Canvg instance from SVG source string or URL.
         * @param ctx - Rendering context.
         * @param svg - SVG source string or URL.
         * @param options - Rendering options.
         * @returns Canvg instance.
         */


        _createClass(Canvg, [{
          key: "fork",

          /**
           * Create new Canvg instance with inherited options.
           * @param ctx - Rendering context.
           * @param svg - SVG source string or URL.
           * @param options - Rendering options.
           * @returns Canvg instance.
           */
          value: function fork(ctx, svg) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return Canvg.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
          }
          /**
           * Create new Canvg instance with inherited options.
           * @param ctx - Rendering context.
           * @param svg - SVG source string.
           * @param options - Rendering options.
           * @returns Canvg instance.
           */

        }, {
          key: "forkString",
          value: function forkString(ctx, svg) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return Canvg.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
          }
          /**
           * Document is ready promise.
           * @returns Ready promise.
           */

        }, {
          key: "ready",
          value: function ready() {
            return this.screen.ready();
          }
          /**
           * Document is ready value.
           * @returns Is ready or not.
           */

        }, {
          key: "isReady",
          value: function isReady() {
            return this.screen.isReady();
          }
          /**
           * Render only first frame, ignoring animations and mouse.
           * @param options - Rendering options.
           */

        }, {
          key: "render",
          value: function render() {
            var _arguments2 = arguments,
                _this = this;

            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var options;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      options = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {};

                      _this.start(_objectSpread({
                        enableRedraw: true,
                        ignoreAnimation: true,
                        ignoreMouse: true
                      }, options));

                      _context8.next = 4;
                      return _this.ready();

                    case 4:
                      _this.stop();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))();
          }
          /**
           * Start rendering.
           * @param options - Render options.
           */

        }, {
          key: "start",
          value: function start() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var documentElement = this.documentElement,
                screen = this.screen,
                baseOptions = this.options;
            screen.start(documentElement, _objectSpread(_objectSpread({
              enableRedraw: true
            }, baseOptions), options));
          }
          /**
           * Stop rendering.
           */

        }, {
          key: "stop",
          value: function stop() {
            this.screen.stop();
          }
          /**
           * Resize SVG to fit in given size.
           * @param width
           * @param height
           * @param preserveAspectRatio
           */

        }, {
          key: "resize",
          value: function resize(width) {
            var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
            var preserveAspectRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            this.documentElement.resize(width, height, preserveAspectRatio);
          }
        }], [{
          key: "from",
          value: function from(ctx, svg) {
            var _arguments = arguments;
            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var options, parser, svgDocument;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      options = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : {};
                      parser = new Parser(options);
                      _context9.next = 4;
                      return parser.parse(svg);

                    case 4:
                      svgDocument = _context9.sent;
                      return _context9.abrupt("return", new Canvg(ctx, svgDocument, options));

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }))();
          }
          /**
           * Create Canvg instance from SVG source string.
           * @param ctx - Rendering context.
           * @param svg - SVG source string.
           * @param options - Rendering options.
           * @returns Canvg instance.
           */

        }, {
          key: "fromString",
          value: function fromString(ctx, svg) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var parser = new Parser(options);
            var svgDocument = parser.parseFromString(svg);
            return new Canvg(ctx, svgDocument, options);
          }
        }]);

        return Canvg;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = Canvg; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

      /***/
    },

    /***/
    "EnZy":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.split.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function EnZy(module, exports, __webpack_require__) {
      "use strict";

      var apply = __webpack_require__(
      /*! ../internals/function-apply */
      "K6Rb");

      var call = __webpack_require__(
      /*! ../internals/function-call */
      "xluM");

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      "14Sl");

      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      "ROdP");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var speciesConstructor = __webpack_require__(
      /*! ../internals/species-constructor */
      "SEBh");

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      "iqWW");

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      "V37c");

      var getMethod = __webpack_require__(
      /*! ../internals/get-method */
      "3Eq5");

      var arraySlice = __webpack_require__(
      /*! ../internals/array-slice-simple */
      "Ta7t");

      var callRegExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      "FMNM");

      var regexpExec = __webpack_require__(
      /*! ../internals/regexp-exec */
      "kmMV");

      var stickyHelpers = __webpack_require__(
      /*! ../internals/regexp-sticky-helpers */
      "n3/R");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
      var MAX_UINT32 = 0xFFFFFFFF;
      var min = Math.min;
      var $push = [].push;
      var exec = uncurryThis(/./.exec);
      var push = uncurryThis($push);
      var stringSlice = uncurryThis(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper

      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
        // eslint-disable-next-line regexp/no-empty-group -- required for testing
        var re = /(?:)/;
        var originalExec = re.exec;

        re.exec = function () {
          return originalExec.apply(this, arguments);
        };

        var result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      }); // @@split logic

      fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;

        if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
        'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
        '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function internalSplit(separator, limit) {
            var string = toString(requireObjectCoercible(this));
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

            if (!isRegExp(separator)) {
              return call(nativeSplit, string, separator, lim);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;

            while (match = call(regexpExec, separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;

              if (lastIndex > lastLastIndex) {
                push(output, stringSlice(string, lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }

              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }

            if (lastLastIndex === string.length) {
              if (lastLength || !exec(separatorCopy, '')) push(output, '');
            } else push(output, stringSlice(string, lastLastIndex));

            return output.length > lim ? arraySlice(output, 0, lim) : output;
          }; // Chakra, V8

        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function internalSplit(separator, limit) {
            return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
          };
        } else internalSplit = nativeSplit;

        return [// `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = requireObjectCoercible(this);
          var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
          return splitter ? call(splitter, separator, O, limit) : call(internalSplit, toString(O), separator, limit);
        }, // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (string, limit) {
          var rx = anObject(this);
          var S = toString(string);
          var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
          if (res.done) return res.value;
          var C = speciesConstructor(rx, RegExp);
          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.

          var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];

          while (q < S.length) {
            splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
            var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
            var e;

            if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              push(A, stringSlice(S, p, q));
              if (A.length === lim) return A;

              for (var i = 1; i <= z.length - 1; i++) {
                push(A, z[i]);
                if (A.length === lim) return A;
              }

              q = p = e;
            }
          }

          push(A, stringSlice(S, p));
          return A;
        }];
      }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
      /***/
    },

    /***/
    "HNyW":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function HNyW(module, exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      "NC/Y");

      module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
      /***/
    },

    /***/
    "JTJg":
    /*!************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.includes.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function JTJg(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      "WjRb");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      "V37c");

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      "qxPZ");

      var stringIndexOf = uncurryThis(''.indexOf); // `String.prototype.includes` method
      // https://tc39.es/ecma262/#sec-string.prototype.includes

      $({
        target: 'String',
        proto: true,
        forced: !correctIsRegExpLogic('includes')
      }, {
        includes: function includes(searchString
        /* , position = 0 */
        ) {
          return !!~stringIndexOf(toString(requireObjectCoercible(this)), toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    "JfAA":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.regexp.to-string.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function JfAA(module, exports, __webpack_require__) {
      "use strict";

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var PROPER_FUNCTION_NAME = __webpack_require__(
      /*! ../internals/function-name */
      "Xnc8").PROPER;

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      "busE");

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var isPrototypeOf = __webpack_require__(
      /*! ../internals/object-is-prototype-of */
      "OpvP");

      var $toString = __webpack_require__(
      /*! ../internals/to-string */
      "V37c");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var regExpFlags = __webpack_require__(
      /*! ../internals/regexp-flags */
      "rW0t");

      var TO_STRING = 'toString';
      var RegExpPrototype = RegExp.prototype;
      var n$ToString = RegExpPrototype[TO_STRING];
      var getFlags = uncurryThis(regExpFlags);
      var NOT_GENERIC = fails(function () {
        return n$ToString.call({
          source: 'a',
          flags: 'b'
        }) != '/a/b';
      }); // FF44- RegExp#toString has a wrong name

      var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          var R = anObject(this);
          var p = $toString(R.source);
          var rf = R.flags;
          var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
          return '/' + p + '/' + f;
        }, {
          unsafe: true
        });
      }
      /***/

    },

    /***/
    "JiZb":
    /*!*******************************************************!*\
      !*** ./node_modules/core-js/internals/set-species.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function JiZb(module, exports, __webpack_require__) {
      "use strict";

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      "0GbY");

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      "m/L8");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      "g6v/");

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;

        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function get() {
              return this;
            }
          });
        }
      };
      /***/

    },

    /***/
    "Junv":
    /*!**********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.reverse.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function Junv(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      "6LWA");

      var un$Reverse = uncurryThis([].reverse);
      var test = [1, 2]; // `Array.prototype.reverse` method
      // https://tc39.es/ecma262/#sec-array.prototype.reverse
      // fix for Safari 12.0 bug
      // https://bugs.webkit.org/show_bug.cgi?id=188794

      $({
        target: 'Array',
        proto: true,
        forced: String(test) === String(test.reverse())
      }, {
        reverse: function reverse() {
          // eslint-disable-next-line no-self-assign -- dirty hack
          if (isArray(this)) this.length = this.length;
          return un$Reverse(this);
        }
      });
      /***/
    },

    /***/
    "LKBx":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function LKBx(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      "V37c");

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      "WjRb");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      "qxPZ");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR"); // eslint-disable-next-line es/no-string-prototype-startswith -- safe


      var un$StartsWith = uncurryThis(''.startsWith);
      var stringSlice = uncurryThis(''.slice);
      var min = Math.min;
      var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

      var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
        var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
        return descriptor && !descriptor.writable;
      }(); // `String.prototype.startsWith` method
      // https://tc39.es/ecma262/#sec-string.prototype.startswith

      $({
        target: 'String',
        proto: true,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
      }, {
        startsWith: function startsWith(searchString
        /* , position = 0 */
        ) {
          var that = toString(requireObjectCoercible(this));
          notARegExp(searchString);
          var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
          var search = toString(searchString);
          return un$StartsWith ? un$StartsWith(that, search, index) : stringSlice(that, index, index + search.length) === search;
        }
      });
      /***/
    },

    /***/
    "LPSS":
    /*!************************************************!*\
      !*** ./node_modules/core-js/internals/task.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function LPSS(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var apply = __webpack_require__(
      /*! ../internals/function-apply */
      "K6Rb");

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var isCallable = __webpack_require__(
      /*! ../internals/is-callable */
      "Fib7");

      var hasOwn = __webpack_require__(
      /*! ../internals/has-own-property */
      "Gi26");

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var html = __webpack_require__(
      /*! ../internals/html */
      "G+Rx");

      var arraySlice = __webpack_require__(
      /*! ../internals/array-slice */
      "82ph");

      var createElement = __webpack_require__(
      /*! ../internals/document-create-element */
      "zBJ4");

      var IS_IOS = __webpack_require__(
      /*! ../internals/engine-is-ios */
      "HNyW");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var set = global.setImmediate;
      var clear = global.clearImmediate;
      var process = global.process;
      var Dispatch = global.Dispatch;
      var Function = global.Function;
      var MessageChannel = global.MessageChannel;
      var String = global.String;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var location, defer, channel, port;

      try {
        // Deno throws a ReferenceError on `location` access without `--location` flag
        location = global.location;
      } catch (error) {
        /* empty */
      }

      var run = function run(id) {
        if (hasOwn(queue, id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var runner = function runner(id) {
        return function () {
          run(id);
        };
      };

      var listener = function listener(event) {
        run(event.data);
      };

      var post = function post(id) {
        // old engines have not location.origin
        global.postMessage(String(id), location.protocol + '//' + location.host);
      }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


      if (!set || !clear) {
        set = function setImmediate(fn) {
          var args = arraySlice(arguments, 1);

          queue[++counter] = function () {
            apply(isCallable(fn) ? fn : Function(fn), undefined, args);
          };

          defer(counter);
          return counter;
        };

        clear = function clearImmediate(id) {
          delete queue[id];
        }; // Node.js 0.8-


        if (IS_NODE) {
          defer = function defer(id) {
            process.nextTick(runner(id));
          }; // Sphere (JS game engine) Dispatch API

        } else if (Dispatch && Dispatch.now) {
          defer = function defer(id) {
            Dispatch.now(runner(id));
          }; // Browsers with MessageChannel, includes WebWorkers
          // except iOS - https://github.com/zloirock/core-js/issues/624

        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
          defer = post;
          global.addEventListener('message', listener, false); // IE8-
        } else if (ONREADYSTATECHANGE in createElement('script')) {
          defer = function defer(id) {
            html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run(id);
            };
          }; // Rest old browsers

        } else {
          defer = function defer(id) {
            setTimeout(runner(id), 0);
          };
        }
      }

      module.exports = {
        set: set,
        clear: clear
      };
      /***/
    },

    /***/
    "NA3B":
    /*!************************************************************************************!*\
      !*** ./node_modules/canvg/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
      \************************************************************************************/

    /*! no static exports found */

    /***/
    function NA3B(module, exports) {
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
      /***/
    },

    /***/
    "RN6c":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/host-report-errors.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function RN6c(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      module.exports = function (a, b) {
        var console = global.console;

        if (console && console.error) {
          arguments.length == 1 ? console.error(a) : console.error(a, b);
        }
      };
      /***/

    },

    /***/
    "ROdP":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/is-regexp.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ROdP(module, exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      "xrYK");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
      // https://tc39.es/ecma262/#sec-isregexp

      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
      };
      /***/

    },

    /***/
    "SEBh":
    /*!***************************************************************!*\
      !*** ./node_modules/core-js/internals/species-constructor.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function SEBh(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var aConstructor = __webpack_require__(
      /*! ../internals/a-constructor */
      "UIe5");

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
      // https://tc39.es/ecma262/#sec-speciesconstructor

      module.exports = function (O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
      };
      /***/

    },

    /***/
    "SYor":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.trim.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function SYor(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var $trim = __webpack_require__(
      /*! ../internals/string-trim */
      "WKiH").trim;

      var forcedStringTrimMethod = __webpack_require__(
      /*! ../internals/string-trim-forced */
      "yNLB"); // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim


      $({
        target: 'String',
        proto: true,
        forced: forcedStringTrimMethod('trim')
      }, {
        trim: function trim() {
          return $trim(this);
        }
      });
      /***/
    },

    /***/
    "UIe5":
    /*!*********************************************************!*\
      !*** ./node_modules/core-js/internals/a-constructor.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function UIe5(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isConstructor = __webpack_require__(
      /*! ../internals/is-constructor */
      "aO6C");

      var tryToString = __webpack_require__(
      /*! ../internals/try-to-string */
      "DVFp");

      var TypeError = global.TypeError; // `Assert: IsConstructor(argument) is true`

      module.exports = function (argument) {
        if (isConstructor(argument)) return argument;
        throw TypeError(tryToString(argument) + ' is not a constructor');
      };
      /***/

    },

    /***/
    "WOGj":
    /*!****************************************!*\
      !*** ./node_modules/rgbcolor/index.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function WOGj(module, exports) {
      /*
      	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
      	http://www.phpied.com/rgb-color-parser-in-javascript/
      */
      module.exports = function (color_string) {
        this.ok = false;
        this.alpha = 1.0; // strip any leading #

        if (color_string.charAt(0) == '#') {
          // remove # if any
          color_string = color_string.substr(1, 6);
        }

        color_string = color_string.replace(/ /g, '');
        color_string = color_string.toLowerCase(); // before getting into regexps, try simple matches
        // and overwrite the input

        var simple_colors = {
          aliceblue: 'f0f8ff',
          antiquewhite: 'faebd7',
          aqua: '00ffff',
          aquamarine: '7fffd4',
          azure: 'f0ffff',
          beige: 'f5f5dc',
          bisque: 'ffe4c4',
          black: '000000',
          blanchedalmond: 'ffebcd',
          blue: '0000ff',
          blueviolet: '8a2be2',
          brown: 'a52a2a',
          burlywood: 'deb887',
          cadetblue: '5f9ea0',
          chartreuse: '7fff00',
          chocolate: 'd2691e',
          coral: 'ff7f50',
          cornflowerblue: '6495ed',
          cornsilk: 'fff8dc',
          crimson: 'dc143c',
          cyan: '00ffff',
          darkblue: '00008b',
          darkcyan: '008b8b',
          darkgoldenrod: 'b8860b',
          darkgray: 'a9a9a9',
          darkgreen: '006400',
          darkkhaki: 'bdb76b',
          darkmagenta: '8b008b',
          darkolivegreen: '556b2f',
          darkorange: 'ff8c00',
          darkorchid: '9932cc',
          darkred: '8b0000',
          darksalmon: 'e9967a',
          darkseagreen: '8fbc8f',
          darkslateblue: '483d8b',
          darkslategray: '2f4f4f',
          darkturquoise: '00ced1',
          darkviolet: '9400d3',
          deeppink: 'ff1493',
          deepskyblue: '00bfff',
          dimgray: '696969',
          dodgerblue: '1e90ff',
          feldspar: 'd19275',
          firebrick: 'b22222',
          floralwhite: 'fffaf0',
          forestgreen: '228b22',
          fuchsia: 'ff00ff',
          gainsboro: 'dcdcdc',
          ghostwhite: 'f8f8ff',
          gold: 'ffd700',
          goldenrod: 'daa520',
          gray: '808080',
          green: '008000',
          greenyellow: 'adff2f',
          honeydew: 'f0fff0',
          hotpink: 'ff69b4',
          indianred: 'cd5c5c',
          indigo: '4b0082',
          ivory: 'fffff0',
          khaki: 'f0e68c',
          lavender: 'e6e6fa',
          lavenderblush: 'fff0f5',
          lawngreen: '7cfc00',
          lemonchiffon: 'fffacd',
          lightblue: 'add8e6',
          lightcoral: 'f08080',
          lightcyan: 'e0ffff',
          lightgoldenrodyellow: 'fafad2',
          lightgrey: 'd3d3d3',
          lightgreen: '90ee90',
          lightpink: 'ffb6c1',
          lightsalmon: 'ffa07a',
          lightseagreen: '20b2aa',
          lightskyblue: '87cefa',
          lightslateblue: '8470ff',
          lightslategray: '778899',
          lightsteelblue: 'b0c4de',
          lightyellow: 'ffffe0',
          lime: '00ff00',
          limegreen: '32cd32',
          linen: 'faf0e6',
          magenta: 'ff00ff',
          maroon: '800000',
          mediumaquamarine: '66cdaa',
          mediumblue: '0000cd',
          mediumorchid: 'ba55d3',
          mediumpurple: '9370d8',
          mediumseagreen: '3cb371',
          mediumslateblue: '7b68ee',
          mediumspringgreen: '00fa9a',
          mediumturquoise: '48d1cc',
          mediumvioletred: 'c71585',
          midnightblue: '191970',
          mintcream: 'f5fffa',
          mistyrose: 'ffe4e1',
          moccasin: 'ffe4b5',
          navajowhite: 'ffdead',
          navy: '000080',
          oldlace: 'fdf5e6',
          olive: '808000',
          olivedrab: '6b8e23',
          orange: 'ffa500',
          orangered: 'ff4500',
          orchid: 'da70d6',
          palegoldenrod: 'eee8aa',
          palegreen: '98fb98',
          paleturquoise: 'afeeee',
          palevioletred: 'd87093',
          papayawhip: 'ffefd5',
          peachpuff: 'ffdab9',
          peru: 'cd853f',
          pink: 'ffc0cb',
          plum: 'dda0dd',
          powderblue: 'b0e0e6',
          purple: '800080',
          rebeccapurple: '663399',
          red: 'ff0000',
          rosybrown: 'bc8f8f',
          royalblue: '4169e1',
          saddlebrown: '8b4513',
          salmon: 'fa8072',
          sandybrown: 'f4a460',
          seagreen: '2e8b57',
          seashell: 'fff5ee',
          sienna: 'a0522d',
          silver: 'c0c0c0',
          skyblue: '87ceeb',
          slateblue: '6a5acd',
          slategray: '708090',
          snow: 'fffafa',
          springgreen: '00ff7f',
          steelblue: '4682b4',
          tan: 'd2b48c',
          teal: '008080',
          thistle: 'd8bfd8',
          tomato: 'ff6347',
          turquoise: '40e0d0',
          violet: 'ee82ee',
          violetred: 'd02090',
          wheat: 'f5deb3',
          white: 'ffffff',
          whitesmoke: 'f5f5f5',
          yellow: 'ffff00',
          yellowgreen: '9acd32'
        };
        color_string = simple_colors[color_string] || color_string; // emd of simple type-in colors
        // array of color definition objects

        var color_defs = [{
          re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
          example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
          process: function process(bits) {
            return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]), parseFloat(bits[4])];
          }
        }, {
          re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
          example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
          process: function process(bits) {
            return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
          }
        }, {
          re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          example: ['#00ff00', '336699'],
          process: function process(bits) {
            return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
          }
        }, {
          re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          example: ['#fb0', 'f0f'],
          process: function process(bits) {
            return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
          }
        }]; // search through the definitions to find a match

        for (var i = 0; i < color_defs.length; i++) {
          var re = color_defs[i].re;
          var processor = color_defs[i].process;
          var bits = re.exec(color_string);

          if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];

            if (channels.length > 3) {
              this.alpha = channels[3];
            }

            this.ok = true;
          }
        } // validate/cleanup values


        this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
        this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
        this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
        this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha; // some getters

        this.toRGB = function () {
          return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
        };

        this.toRGBA = function () {
          return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
        };

        this.toHex = function () {
          var r = this.r.toString(16);
          var g = this.g.toString(16);
          var b = this.b.toString(16);
          if (r.length == 1) r = '0' + r;
          if (g.length == 1) g = '0' + g;
          if (b.length == 1) b = '0' + b;
          return '#' + r + g + b;
        }; // help


        this.getHelpXML = function () {
          var examples = new Array(); // add regexps

          for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;

            for (var j = 0; j < example.length; j++) {
              examples[examples.length] = example[j];
            }
          } // add type-in colors


          for (var sc in simple_colors) {
            examples[examples.length] = sc;
          }

          var xml = document.createElement('ul');
          xml.setAttribute('id', 'rgbcolor-examples');

          for (var i = 0; i < examples.length; i++) {
            try {
              var list_item = document.createElement('li');
              var list_color = new RGBColor(examples[i]);
              var example_div = document.createElement('div');
              example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
              example_div.appendChild(document.createTextNode('test'));
              var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
              list_item.appendChild(example_div);
              list_item.appendChild(list_item_value);
              xml.appendChild(list_item);
            } catch (e) {}
          }

          return xml;
        };
      };
      /***/

    },

    /***/
    "WjRb":
    /*!********************************************************!*\
      !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function WjRb(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      "ROdP");

      var TypeError = global.TypeError;

      module.exports = function (it) {
        if (isRegExp(it)) {
          throw TypeError("The method doesn't accept regular expressions");
        }

        return it;
      };
      /***/

    },

    /***/
    "Xp4B":
    /*!************************************************************!*\
      !*** ./node_modules/stackblur-canvas/dist/stackblur-es.js ***!
      \************************************************************/

    /*! exports provided: BlurStack, canvasRGB, canvasRGBA, image, imageDataRGB, imageDataRGBA */

    /***/
    function Xp4B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlurStack", function () {
        return BlurStack;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canvasRGB", function () {
        return processCanvasRGB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canvasRGBA", function () {
        return processCanvasRGBA;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "image", function () {
        return processImage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "imageDataRGB", function () {
        return processImageDataRGB;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "imageDataRGBA", function () {
        return processImageDataRGBA;
      });

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /* eslint-disable no-bitwise -- used for calculations */

      /* eslint-disable unicorn/prefer-query-selector -- aiming at
        backward-compatibility */

      /**
      * StackBlur - a fast almost Gaussian Blur For Canvas
      *
      * In case you find this class useful - especially in commercial projects -
      * I am not totally unhappy for a small donation to my PayPal account
      * mario@quasimondo.de
      *
      * Or support me on flattr:
      * {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
      *
      * @module StackBlur
      * @author Mario Klingemann
      * Contact: mario@quasimondo.com
      * Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
      * Twitter: @quasimondo
      *
      * @copyright (c) 2010 Mario Klingemann
      *
      * Permission is hereby granted, free of charge, to any person
      * obtaining a copy of this software and associated documentation
      * files (the "Software"), to deal in the Software without
      * restriction, including without limitation the rights to use,
      * copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the
      * Software is furnished to do so, subject to the following
      * conditions:
      *
      * The above copyright notice and this permission notice shall be
      * included in all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
      * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
      * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
      * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
      * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
      * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      * OTHER DEALINGS IN THE SOFTWARE.
      */


      var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
      var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
      /**
       * @param {string|HTMLImageElement} img
       * @param {string|HTMLCanvasElement} canvas
       * @param {Float} radius
       * @param {boolean} blurAlphaChannel
       * @param {boolean} useOffset
       * @param {boolean} skipStyles
       * @returns {undefined}
       */

      function processImage(img, canvas, radius, blurAlphaChannel, useOffset, skipStyles) {
        if (typeof img === 'string') {
          img = document.getElementById(img);
        }

        if (!img || !('naturalWidth' in img)) {
          return;
        }

        var dimensionType = useOffset ? 'offset' : 'natural';
        var w = img[dimensionType + 'Width'];
        var h = img[dimensionType + 'Height'];

        if (typeof canvas === 'string') {
          canvas = document.getElementById(canvas);
        }

        if (!canvas || !('getContext' in canvas)) {
          return;
        }

        if (!skipStyles) {
          canvas.style.width = w + 'px';
          canvas.style.height = h + 'px';
        }

        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, w, h);
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);

        if (isNaN(radius) || radius < 1) {
          return;
        }

        if (blurAlphaChannel) {
          processCanvasRGBA(canvas, 0, 0, w, h, radius);
        } else {
          processCanvasRGB(canvas, 0, 0, w, h, radius);
        }
      }
      /**
       * @param {string|HTMLCanvasElement} canvas
       * @param {Integer} topX
       * @param {Integer} topY
       * @param {Integer} width
       * @param {Integer} height
       * @throws {Error|TypeError}
       * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
       */


      function getImageDataFromCanvas(canvas, topX, topY, width, height) {
        if (typeof canvas === 'string') {
          canvas = document.getElementById(canvas);
        }

        if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) {
          throw new TypeError('Expecting canvas with `getContext` method ' + 'in processCanvasRGB(A) calls!');
        }

        var context = canvas.getContext('2d');

        try {
          return context.getImageData(topX, topY, width, height);
        } catch (e) {
          throw new Error('unable to access image data: ' + e);
        }
      }
      /**
       * @param {HTMLCanvasElement} canvas
       * @param {Integer} topX
       * @param {Integer} topY
       * @param {Integer} width
       * @param {Integer} height
       * @param {Float} radius
       * @returns {undefined}
       */


      function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
        if (isNaN(radius) || radius < 1) {
          return;
        }

        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
        imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, topX, topY);
      }
      /**
       * @param {ImageData} imageData
       * @param {Integer} topX
       * @param {Integer} topY
       * @param {Integer} width
       * @param {Integer} height
       * @param {Float} radius
       * @returns {ImageData}
       */


      function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
        var pixels = imageData.data;
        var div = 2 * radius + 1; // const w4 = width << 2;

        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;
        var stackEnd;

        for (var i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();

          if (i === radiusPlus1) {
            stackEnd = stack;
          }
        }

        stack.next = stackStart;
        var stackIn = null,
            stackOut = null,
            yw = 0,
            yi = 0;
        var mulSum = mulTable[radius];
        var shgSum = shgTable[radius];

        for (var y = 0; y < height; y++) {
          stack = stackStart;
          var pr = pixels[yi],
              pg = pixels[yi + 1],
              pb = pixels[yi + 2],
              pa = pixels[yi + 3];

          for (var _i = 0; _i < radiusPlus1; _i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }

          var rInSum = 0,
              gInSum = 0,
              bInSum = 0,
              aInSum = 0,
              rOutSum = radiusPlus1 * pr,
              gOutSum = radiusPlus1 * pg,
              bOutSum = radiusPlus1 * pb,
              aOutSum = radiusPlus1 * pa,
              rSum = sumFactor * pr,
              gSum = sumFactor * pg,
              bSum = sumFactor * pb,
              aSum = sumFactor * pa;

          for (var _i2 = 1; _i2 < radiusPlus1; _i2++) {
            var p = yi + ((widthMinus1 < _i2 ? widthMinus1 : _i2) << 2);
            var r = pixels[p],
                g = pixels[p + 1],
                b = pixels[p + 2],
                a = pixels[p + 3];
            var rbs = radiusPlus1 - _i2;
            rSum += (stack.r = r) * rbs;
            gSum += (stack.g = g) * rbs;
            bSum += (stack.b = b) * rbs;
            aSum += (stack.a = a) * rbs;
            rInSum += r;
            gInSum += g;
            bInSum += b;
            aInSum += a;
            stack = stack.next;
          }

          stackIn = stackStart;
          stackOut = stackEnd;

          for (var x = 0; x < width; x++) {
            var paInitial = aSum * mulSum >> shgSum;
            pixels[yi + 3] = paInitial;

            if (paInitial !== 0) {
              var _a2 = 255 / paInitial;

              pixels[yi] = (rSum * mulSum >> shgSum) * _a2;
              pixels[yi + 1] = (gSum * mulSum >> shgSum) * _a2;
              pixels[yi + 2] = (bSum * mulSum >> shgSum) * _a2;
            } else {
              pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }

            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            aSum -= aOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            aOutSum -= stackIn.a;

            var _p = x + radius + 1;

            _p = yw + (_p < widthMinus1 ? _p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[_p];
            gInSum += stackIn.g = pixels[_p + 1];
            bInSum += stackIn.b = pixels[_p + 2];
            aInSum += stackIn.a = pixels[_p + 3];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            aSum += aInSum;
            stackIn = stackIn.next;
            var _stackOut = stackOut,
                _r = _stackOut.r,
                _g = _stackOut.g,
                _b = _stackOut.b,
                _a = _stackOut.a;
            rOutSum += _r;
            gOutSum += _g;
            bOutSum += _b;
            aOutSum += _a;
            rInSum -= _r;
            gInSum -= _g;
            bInSum -= _b;
            aInSum -= _a;
            stackOut = stackOut.next;
            yi += 4;
          }

          yw += width;
        }

        for (var _x = 0; _x < width; _x++) {
          yi = _x << 2;

          var _pr = pixels[yi],
              _pg = pixels[yi + 1],
              _pb = pixels[yi + 2],
              _pa = pixels[yi + 3],
              _rOutSum = radiusPlus1 * _pr,
              _gOutSum = radiusPlus1 * _pg,
              _bOutSum = radiusPlus1 * _pb,
              _aOutSum = radiusPlus1 * _pa,
              _rSum = sumFactor * _pr,
              _gSum = sumFactor * _pg,
              _bSum = sumFactor * _pb,
              _aSum = sumFactor * _pa;

          stack = stackStart;

          for (var _i3 = 0; _i3 < radiusPlus1; _i3++) {
            stack.r = _pr;
            stack.g = _pg;
            stack.b = _pb;
            stack.a = _pa;
            stack = stack.next;
          }

          var yp = width;
          var _gInSum = 0,
              _bInSum = 0,
              _aInSum = 0,
              _rInSum = 0;

          for (var _i4 = 1; _i4 <= radius; _i4++) {
            yi = yp + _x << 2;

            var _rbs = radiusPlus1 - _i4;

            _rSum += (stack.r = _pr = pixels[yi]) * _rbs;
            _gSum += (stack.g = _pg = pixels[yi + 1]) * _rbs;
            _bSum += (stack.b = _pb = pixels[yi + 2]) * _rbs;
            _aSum += (stack.a = _pa = pixels[yi + 3]) * _rbs;
            _rInSum += _pr;
            _gInSum += _pg;
            _bInSum += _pb;
            _aInSum += _pa;
            stack = stack.next;

            if (_i4 < heightMinus1) {
              yp += width;
            }
          }

          yi = _x;
          stackIn = stackStart;
          stackOut = stackEnd;

          for (var _y = 0; _y < height; _y++) {
            var _p2 = yi << 2;

            pixels[_p2 + 3] = _pa = _aSum * mulSum >> shgSum;

            if (_pa > 0) {
              _pa = 255 / _pa;
              pixels[_p2] = (_rSum * mulSum >> shgSum) * _pa;
              pixels[_p2 + 1] = (_gSum * mulSum >> shgSum) * _pa;
              pixels[_p2 + 2] = (_bSum * mulSum >> shgSum) * _pa;
            } else {
              pixels[_p2] = pixels[_p2 + 1] = pixels[_p2 + 2] = 0;
            }

            _rSum -= _rOutSum;
            _gSum -= _gOutSum;
            _bSum -= _bOutSum;
            _aSum -= _aOutSum;
            _rOutSum -= stackIn.r;
            _gOutSum -= stackIn.g;
            _bOutSum -= stackIn.b;
            _aOutSum -= stackIn.a;
            _p2 = _x + ((_p2 = _y + radiusPlus1) < heightMinus1 ? _p2 : heightMinus1) * width << 2;
            _rSum += _rInSum += stackIn.r = pixels[_p2];
            _gSum += _gInSum += stackIn.g = pixels[_p2 + 1];
            _bSum += _bInSum += stackIn.b = pixels[_p2 + 2];
            _aSum += _aInSum += stackIn.a = pixels[_p2 + 3];
            stackIn = stackIn.next;
            _rOutSum += _pr = stackOut.r;
            _gOutSum += _pg = stackOut.g;
            _bOutSum += _pb = stackOut.b;
            _aOutSum += _pa = stackOut.a;
            _rInSum -= _pr;
            _gInSum -= _pg;
            _bInSum -= _pb;
            _aInSum -= _pa;
            stackOut = stackOut.next;
            yi += width;
          }
        }

        return imageData;
      }
      /**
       * @param {HTMLCanvasElement} canvas
       * @param {Integer} topX
       * @param {Integer} topY
       * @param {Integer} width
       * @param {Integer} height
       * @param {Float} radius
       * @returns {undefined}
       */


      function processCanvasRGB(canvas, topX, topY, width, height, radius) {
        if (isNaN(radius) || radius < 1) {
          return;
        }

        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
        imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, topX, topY);
      }
      /**
       * @param {ImageData} imageData
       * @param {Integer} topX
       * @param {Integer} topY
       * @param {Integer} width
       * @param {Integer} height
       * @param {Float} radius
       * @returns {ImageData}
       */


      function processImageDataRGB(imageData, topX, topY, width, height, radius) {
        var pixels = imageData.data;
        var div = 2 * radius + 1; // const w4 = width << 2;

        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;
        var stackEnd;

        for (var i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();

          if (i === radiusPlus1) {
            stackEnd = stack;
          }
        }

        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;
        var mulSum = mulTable[radius];
        var shgSum = shgTable[radius];
        var p, rbs;
        var yw = 0,
            yi = 0;

        for (var y = 0; y < height; y++) {
          var pr = pixels[yi],
              pg = pixels[yi + 1],
              pb = pixels[yi + 2],
              rOutSum = radiusPlus1 * pr,
              gOutSum = radiusPlus1 * pg,
              bOutSum = radiusPlus1 * pb,
              rSum = sumFactor * pr,
              gSum = sumFactor * pg,
              bSum = sumFactor * pb;
          stack = stackStart;

          for (var _i5 = 0; _i5 < radiusPlus1; _i5++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
          }

          var rInSum = 0,
              gInSum = 0,
              bInSum = 0;

          for (var _i6 = 1; _i6 < radiusPlus1; _i6++) {
            p = yi + ((widthMinus1 < _i6 ? widthMinus1 : _i6) << 2);
            rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - _i6);
            gSum += (stack.g = pg = pixels[p + 1]) * rbs;
            bSum += (stack.b = pb = pixels[p + 2]) * rbs;
            rInSum += pr;
            gInSum += pg;
            bInSum += pb;
            stack = stack.next;
          }

          stackIn = stackStart;
          stackOut = stackEnd;

          for (var x = 0; x < width; x++) {
            pixels[yi] = rSum * mulSum >> shgSum;
            pixels[yi + 1] = gSum * mulSum >> shgSum;
            pixels[yi + 2] = bSum * mulSum >> shgSum;
            rSum -= rOutSum;
            gSum -= gOutSum;
            bSum -= bOutSum;
            rOutSum -= stackIn.r;
            gOutSum -= stackIn.g;
            bOutSum -= stackIn.b;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            rInSum += stackIn.r = pixels[p];
            gInSum += stackIn.g = pixels[p + 1];
            bInSum += stackIn.b = pixels[p + 2];
            rSum += rInSum;
            gSum += gInSum;
            bSum += bInSum;
            stackIn = stackIn.next;
            rOutSum += pr = stackOut.r;
            gOutSum += pg = stackOut.g;
            bOutSum += pb = stackOut.b;
            rInSum -= pr;
            gInSum -= pg;
            bInSum -= pb;
            stackOut = stackOut.next;
            yi += 4;
          }

          yw += width;
        }

        for (var _x2 = 0; _x2 < width; _x2++) {
          yi = _x2 << 2;

          var _pr2 = pixels[yi],
              _pg2 = pixels[yi + 1],
              _pb2 = pixels[yi + 2],
              _rOutSum2 = radiusPlus1 * _pr2,
              _gOutSum2 = radiusPlus1 * _pg2,
              _bOutSum2 = radiusPlus1 * _pb2,
              _rSum2 = sumFactor * _pr2,
              _gSum2 = sumFactor * _pg2,
              _bSum2 = sumFactor * _pb2;

          stack = stackStart;

          for (var _i7 = 0; _i7 < radiusPlus1; _i7++) {
            stack.r = _pr2;
            stack.g = _pg2;
            stack.b = _pb2;
            stack = stack.next;
          }

          var _rInSum2 = 0,
              _gInSum2 = 0,
              _bInSum2 = 0;

          for (var _i8 = 1, yp = width; _i8 <= radius; _i8++) {
            yi = yp + _x2 << 2;
            _rSum2 += (stack.r = _pr2 = pixels[yi]) * (rbs = radiusPlus1 - _i8);
            _gSum2 += (stack.g = _pg2 = pixels[yi + 1]) * rbs;
            _bSum2 += (stack.b = _pb2 = pixels[yi + 2]) * rbs;
            _rInSum2 += _pr2;
            _gInSum2 += _pg2;
            _bInSum2 += _pb2;
            stack = stack.next;

            if (_i8 < heightMinus1) {
              yp += width;
            }
          }

          yi = _x2;
          stackIn = stackStart;
          stackOut = stackEnd;

          for (var _y2 = 0; _y2 < height; _y2++) {
            p = yi << 2;
            pixels[p] = _rSum2 * mulSum >> shgSum;
            pixels[p + 1] = _gSum2 * mulSum >> shgSum;
            pixels[p + 2] = _bSum2 * mulSum >> shgSum;
            _rSum2 -= _rOutSum2;
            _gSum2 -= _gOutSum2;
            _bSum2 -= _bOutSum2;
            _rOutSum2 -= stackIn.r;
            _gOutSum2 -= stackIn.g;
            _bOutSum2 -= stackIn.b;
            p = _x2 + ((p = _y2 + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            _rSum2 += _rInSum2 += stackIn.r = pixels[p];
            _gSum2 += _gInSum2 += stackIn.g = pixels[p + 1];
            _bSum2 += _bInSum2 += stackIn.b = pixels[p + 2];
            stackIn = stackIn.next;
            _rOutSum2 += _pr2 = stackOut.r;
            _gOutSum2 += _pg2 = stackOut.g;
            _bOutSum2 += _pb2 = stackOut.b;
            _rInSum2 -= _pr2;
            _gInSum2 -= _pg2;
            _bInSum2 -= _pb2;
            stackOut = stackOut.next;
            yi += width;
          }
        }

        return imageData;
      }
      /**
       *
       */


      var BlurStack =
      /**
       * Set properties.
       */
      function BlurStack() {
        _classCallCheck(this, BlurStack);

        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
      };
      /***/

    },

    /***/
    "YGnB":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function YGnB(module, exports) {
      module.exports = typeof window == 'object';
      /***/
    },

    /***/
    "bQgK":
    /*!*************************************************************!*\
      !*** ./node_modules/performance-now/lib/performance-now.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function bQgK(module, exports) {
      // Generated by CoffeeScript 1.12.2
      (function () {
        var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

        if (typeof performance !== "undefined" && performance !== null && performance.now) {
          module.exports = function () {
            return performance.now();
          };
        } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
          module.exports = function () {
            return (getNanoSeconds() - nodeLoadTime) / 1e6;
          };

          hrtime = process.hrtime;

          getNanoSeconds = function getNanoSeconds() {
            var hr;
            hr = hrtime();
            return hr[0] * 1e9 + hr[1];
          };

          moduleLoadTime = getNanoSeconds();
          upTime = process.uptime() * 1e9;
          nodeLoadTime = moduleLoadTime - upTime;
        } else if (Date.now) {
          module.exports = function () {
            return Date.now() - loadTime;
          };

          loadTime = Date.now();
        } else {
          module.exports = function () {
            return new Date().getTime() - loadTime;
          };

          loadTime = new Date().getTime();
        }
      }).call(this); //# sourceMappingURL=performance-now.js.map

      /***/
    },

    /***/
    "inlA":
    /*!*************************************************************!*\
      !*** ./node_modules/core-js/modules/es.string.ends-with.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function inlA(module, exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      "UMSQ");

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      "V37c");

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      "WjRb");

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      "HYAF");

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      "qxPZ");

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      "xDBR"); // eslint-disable-next-line es/no-string-prototype-endswith -- safe


      var un$EndsWith = uncurryThis(''.endsWith);
      var slice = uncurryThis(''.slice);
      var min = Math.min;
      var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

      var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
        var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
        return descriptor && !descriptor.writable;
      }(); // `String.prototype.endsWith` method
      // https://tc39.es/ecma262/#sec-string.prototype.endswith

      $({
        target: 'String',
        proto: true,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
      }, {
        endsWith: function endsWith(searchString
        /* , endPosition = @length */
        ) {
          var that = toString(requireObjectCoercible(this));
          notARegExp(searchString);
          var endPosition = arguments.length > 1 ? arguments[1] : undefined;
          var len = that.length;
          var end = endPosition === undefined ? len : min(toLength(endPosition), len);
          var search = toString(searchString);
          return un$EndsWith ? un$EndsWith(that, search, end) : slice(that, end - search.length, end) === search;
        }
      });
      /***/
    },

    /***/
    "mvZO":
    /*!**********************************************************************************!*\
      !*** ./node_modules/canvg/node_modules/@babel/runtime/helpers/defineProperty.js ***!
      \**********************************************************************************/

    /*! no static exports found */

    /***/
    function mvZO(module, exports) {
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
      /***/
    },

    /***/
    "pLQz":
    /*!******************************************************************!*\
      !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function pLQz(module, exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      "NC/Y");

      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
      /***/
    },

    /***/
    "qxPZ":
    /*!*******************************************************************!*\
      !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function qxPZ(module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      "tiKp");

      var MATCH = wellKnownSymbol('match');

      module.exports = function (METHOD_NAME) {
        var regexp = /./;

        try {
          '/./'[METHOD_NAME](regexp);
        } catch (error1) {
          try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
          } catch (error2) {
            /* empty */
          }
        }

        return false;
      };
      /***/

    },

    /***/
    "tXUg":
    /*!*****************************************************!*\
      !*** ./node_modules/core-js/internals/microtask.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function tXUg(module, exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      "2oRo");

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      "A2ZE");

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      "Bs8V").f;

      var macrotask = __webpack_require__(
      /*! ../internals/task */
      "LPSS").set;

      var IS_IOS = __webpack_require__(
      /*! ../internals/engine-is-ios */
      "HNyW");

      var IS_IOS_PEBBLE = __webpack_require__(
      /*! ../internals/engine-is-ios-pebble */
      "1MNl");

      var IS_WEBOS_WEBKIT = __webpack_require__(
      /*! ../internals/engine-is-webos-webkit */
      "pLQz");

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      "YF1G");

      var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
      var document = global.document;
      var process = global.process;
      var Promise = global.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

      var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
      var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
      var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

      if (!queueMicrotask) {
        flush = function flush() {
          var parent, fn;
          if (IS_NODE && (parent = process.domain)) parent.exit();

          while (head) {
            fn = head.fn;
            head = head.next;

            try {
              fn();
            } catch (error) {
              if (head) notify();else last = undefined;
              throw error;
            }
          }

          last = undefined;
          if (parent) parent.enter();
        }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
        // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
          toggle = true;
          node = document.createTextNode('');
          new MutationObserver(flush).observe(node, {
            characterData: true
          });

          notify = function notify() {
            node.data = toggle = !toggle;
          }; // environments with maybe non-completely correct, but existent Promise

        } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          promise = Promise.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

          promise.constructor = Promise;
          then = bind(promise.then, promise);

          notify = function notify() {
            then(flush);
          }; // Node.js without promises

        } else if (IS_NODE) {
          notify = function notify() {
            process.nextTick(flush);
          }; // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout

        } else {
          // strange IE + webpack dev server bug - use .bind(global)
          macrotask = bind(macrotask, global);

          notify = function notify() {
            macrotask(flush);
          };
        }
      }

      module.exports = queueMicrotask || function (fn) {
        var task = {
          fn: fn,
          next: undefined
        };
        if (last) last.next = task;

        if (!head) {
          head = task;
          notify();
        }

        last = task;
      };
      /***/

    },

    /***/
    "xEkU":
    /*!***********************************!*\
      !*** ./node_modules/raf/index.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function xEkU(module, exports, __webpack_require__) {
      var now = __webpack_require__(
      /*! performance-now */
      "bQgK"),
          root = typeof window === 'undefined' ? global : window,
          vendors = ['moz', 'webkit'],
          suffix = 'AnimationFrame',
          raf = root['request' + suffix],
          caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

      for (var i = 0; !raf && i < vendors.length; i++) {
        raf = root[vendors[i] + 'Request' + suffix];
        caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
      } // Some versions of FF have rAF but not cAF


      if (!raf || !caf) {
        var last = 0,
            id = 0,
            queue = [],
            frameDuration = 1000 / 60;

        raf = function raf(callback) {
          if (queue.length === 0) {
            var _now = now(),
                next = Math.max(0, frameDuration - (_now - last));

            last = next + _now;
            setTimeout(function () {
              var cp = queue.slice(0); // Clear queue here to prevent
              // callbacks from appending listeners
              // to the current frame's queue

              queue.length = 0;

              for (var i = 0; i < cp.length; i++) {
                if (!cp[i].cancelled) {
                  try {
                    cp[i].callback(last);
                  } catch (e) {
                    setTimeout(function () {
                      throw e;
                    }, 0);
                  }
                }
              }
            }, Math.round(next));
          }

          queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
          });
          return id;
        };

        caf = function caf(handle) {
          for (var i = 0; i < queue.length; i++) {
            if (queue[i].handle === handle) {
              queue[i].cancelled = true;
            }
          }
        };
      }

      module.exports = function (fn) {
        // Wrap in a new function to prevent
        // `cancel` potentially being assigned
        // to the native rAF function
        return raf.call(root, fn);
      };

      module.exports.cancel = function () {
        caf.apply(root, arguments);
      };

      module.exports.polyfill = function (object) {
        if (!object) {
          object = root;
        }

        object.requestAnimationFrame = raf;
        object.cancelAnimationFrame = caf;
      };
      /***/

    },

    /***/
    "yNLB":
    /*!**************************************************************!*\
      !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function yNLB(module, exports, __webpack_require__) {
      var PROPER_FUNCTION_NAME = __webpack_require__(
      /*! ../internals/function-name */
      "Xnc8").PROPER;

      var fails = __webpack_require__(
      /*! ../internals/fails */
      "0Dky");

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      "WJkJ");

      var non = "\u200B\x85\u180E"; // check that a method works with the correct list
      // of whitespaces and has a correct name

      module.exports = function (METHOD_NAME) {
        return fails(function () {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
        });
      };
      /***/

    },

    /***/
    "yXV3":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function yXV3(module, exports, __webpack_require__) {
      "use strict";
      /* eslint-disable es/no-array-prototype-indexof -- required for testing */

      var $ = __webpack_require__(
      /*! ../internals/export */
      "I+eb");

      var uncurryThis = __webpack_require__(
      /*! ../internals/function-uncurry-this */
      "4zBA");

      var $IndexOf = __webpack_require__(
      /*! ../internals/array-includes */
      "TWQb").indexOf;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      "pkCn");

      var un$IndexOf = uncurryThis([].indexOf);
      var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof

      $({
        target: 'Array',
        proto: true,
        forced: NEGATIVE_ZERO || !STRICT_METHOD
      }, {
        indexOf: function indexOf(searchElement
        /* , fromIndex = 0 */
        ) {
          var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
          return NEGATIVE_ZERO // convert -0 to +0
          ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
        }
      });
      /***/
    },

    /***/
    "zfnd":
    /*!***********************************************************!*\
      !*** ./node_modules/core-js/internals/promise-resolve.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function zfnd(module, exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      "glrk");

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      "hh1v");

      var newPromiseCapability = __webpack_require__(
      /*! ../internals/new-promise-capability */
      "8GlL");

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=canvg-es5.js.map