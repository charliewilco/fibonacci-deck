webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_css__ = __webpack_require__("./global.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fib__ = __webpack_require__("./node_modules/fib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_coffee__ = __webpack_require__("./components/coffee.js");
var _jsxFileName = "/Users/c/Code/Open/fibonacci/pages/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: inline-block;\n  color: white;\n  margin-left: 8px;\n  margin-right: 8px;\n  border-radius: 4px;\n  padding: 40px 8px;\n  background: ", ";\n  text-align: center;\n  font-size: 32px;\n  cursor: pointer;\n  font-weight: 300;\n  line-height: 1;\n  width: 84px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.035), 0 4px 8px rgba(0, 0, 0, 0.07);\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: block;\n  position: fixed;\n  white-space: nowrap;\n  overflow-x: auto;\n  background: #063651;\n  padding: 16px;\n  left: 0;\n  right: 0;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: block;\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 8px;\n  text-align: right;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  font-family: \"Hind\", sans-serif;\n  height: 100%;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: ", ";\n  margin: auto;\n  font-weight: 600;\n  font-size: ", ";\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: flex;\n  background: #092e41;\n  position: relative;\n  align-items: center;\n  height: ", ";\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: auto;\n  opacity: 0.5;\n  color: white;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





 // import { Helmet } from "react-helmet";
// TODO: Clean up array of cards
// TODO: Use map to create cards

var Fib = function Fib(_ref) {
  var number = _ref.number,
      color = _ref.color,
      _onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Card, {
    color: color,
    onClick: function onClick() {
      return _onClick(__WEBPACK_IMPORTED_MODULE_3_fib___default()(number));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_3_fib___default()(number));
}; // const fib = Array().fill(12);


var N = 12;
var fib = Array.apply(null, {
  length: N
}).map(Number.call, Number).map(function (n) {
  return __WEBPACK_IMPORTED_MODULE_3_fib___default()(n);
}).map(function (fn) {
  return {
    value: fn,
    display: fn
  };
});
console.log(fib);
var data = [{
  value: 0,
  display: 0
}].concat(_toConsumableArray(fib), [{
  value: "?",
  display: "?"
}, {
  value: "∞",
  display: "∞"
}, {
  value: "➳",
  display: "Defer"
}, {
  value: "Coffee",
  display: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_coffee__["a" /* default */], {
    style: {
      margin: "-5px 0 -5px",
      display: "inline-block"
    },
    alt: "coffee pot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })
}]); // const Head = ({ color }) => (
//   <Helmet>
//     {(color === "#FFBA00" || color === null) && (
//       <meta name="theme-color" content="#FFBA00" />
//     )}
//     {color === "#00B6F0" && <meta name="theme-color" content="#00B6F0" />}
//     {color === "#E05557" && <meta name="theme-color" content="#E05557" />}
//   </Helmet>
// );

var Card = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject, function (props) {
  return props.color;
});
var Tray = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject2);
var ChevronContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject3);

var OpenClose = function OpenClose(_ref2) {
  var open = _ref2.open,
      onClick = _ref2.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ChevronContainer, {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: open ? "https://icon.now.sh/chevronDown/CCC" : "https://icon.now.sh/chevronUp/CCC",
    alt: "down icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }));
};

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject4);
var colors = ["#E05557", "#FFBA00", "#00B6F0"];
var Stage = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject5, function (props) {
  return props.color;
}, function (props) {
  return props.display === "Coffee" || props.display === "Defer" ? "5rem" : "12rem";
});
var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].div(_templateObject6, function (props) {
  return !props.open ? "100%" : "calc(100% - 144px)";
});
var Intro = __WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */].p(_templateObject7);

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref3;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref3 = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref3, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        display: null,
        open: true,
        color: null
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "update", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(n) {
        return _this.setState({
          display: n
        });
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          display = _state.display,
          color = _state.color,
          open = _state.open;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        open: open,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, display === null ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Intro, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, "Tap a Card Below") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Stage, {
        color: color,
        display: display,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, display), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OpenClose, {
        open: open,
        onClick: function onClick() {
          return _this2.setState({
            open: !open
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      })), open && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tray, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, data.map(function (d, idx) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Card, {
          key: idx,
          color: "teal",
          onClick: function onClick() {
            return _this2.update(d.display);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, d.value);
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.dbada18e4038be97199a.hot-update.js.map