module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/coffee.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/c/Code/Open/fibonacci/components/coffee.js";

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var style = _ref.style;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    style: style,
    width: "31px",
    height: "32px",
    viewBox: "0 0 77 78",
    version: "1.1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M42.7,26.1 C44.6,25.6 45.8,25 46.5,24.6 C46.8,24.4 47.1,24.1 47.5,23.8 C50.4,25.2 53.3,27.1 56,29.4 C63.2,35.5 67.3,43.3 67.3,50.8 C67.3,67.8 54.8,78 33.9,78 C13,78 0.5,67.9 0.5,50.8 C0.5,43.4 4.6,35.6 11.8,29.4 C14.5,27.2 17.3,25.3 20.3,23.8 L20.4,28.3 C11.4,33.4 4.7,42.9 4.7,50.8 C4.7,65.6 15.1,73.8 33.9,73.8 C52.7,73.8 63.1,65.6 63.1,50.8 C63.1,41.6 54,30.3 42.7,26.1 Z M24.2,43 C28.6,42.9 29.7,47.8 35.2,47.7 C39.5,47.7 40.3,42.7 45.5,42.8 C50.6,42.9 50.2,47.8 59.8,48.4 C60,49.3 60.1,50.2 60.1,51 C60.1,67.1 45.9,70.5 33.9,70.5 C22,70.5 7.7,67.1 7.7,51 C7.7,49.5 8,48 8.5,46.4 C10,47 12.4,47.5 14.3,47.6 C17.4,47.7 18.7,43.1 24.2,43 Z M76.7,35.1 C76.7,35.1 77.1,38.3 75.4,37.9 C72.6,37.2 69.1,28 69.1,28 L64.5,12 L51.9,18.3 C49.7,17.5 44.3,15.8 39.3,15.3 C33.6,14.7 24.7,15.4 22.4,15.6 L22.3,14.4 L12.9,0.5 C12.9,0.5 28.1,2.1 35.3,4.3 C42.5,6.5 45.6,10.4 45.6,10.4 L65.4,1.9 C65.4,1.9 68.5,1.2 69.6,2.1 C70.8,2.9 76.7,35.1 76.7,35.1 Z M39.1,17.7 C43,18.1 46.6,19.1 49.1,19.8 C49.1,19.8 46.5,21.1 45.5,21.8 C45.1,22 43.9,22.7 43.6,22.9 C42.8,23.4 41.2,24.3 37.5,24.6 C36.6,24.7 35.6,24.7 34.4,24.7 C28.4,24.6 23,27.2 23,27.2 L22.5,18 C23.5,17.9 25.9,17.7 28.7,17.6 C30.1,17.6 31.6,17.5 33,17.5 C35.2,17.5 37.3,17.5 39.1,17.7 Z",
    id: "Combined-Shape",
    fill: "white",
    fillRule: "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })));
});

/***/ }),

/***/ "./global.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_css__ = __webpack_require__("./global.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__global_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_fib__ = __webpack_require__("fib");
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
  value: "Defer",
  display: "➳"
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

var Card = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, function (props) {
  return props.color;
});
var Tray = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject2);
var ChevronContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject3);

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

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject4);
var colors = ["#E05557", "#FFBA00", "#00B6F0"];
var Stage = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject5, function (props) {
  return props.color;
}, function (props) {
  return props.display === "Coffee" || props.display === "Defer" ? "5rem" : "12rem";
});
var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject6, function (props) {
  return !props.open ? "100%" : "calc(100% - 144px)";
});
var Intro = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p(_templateObject7);

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
        color: "white"
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
            return _this2.update(d.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, d.display);
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "fib":
/***/ (function(module, exports) {

module.exports = require("fib");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map