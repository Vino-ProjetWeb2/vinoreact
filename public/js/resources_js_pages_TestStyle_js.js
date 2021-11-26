"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_TestStyle_js"],{

/***/ "./resources/js/components/Accordeon.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Accordeon.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_Accordeon_styled_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Accordeon.styled.js */ "./resources/js/components/styles/Accordeon.styled.js");
/* harmony import */ var _assets_svg_chevronBlack_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/chevronBlack.svg */ "./resources/js/assets/svg/chevronBlack.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Accordeon = function Accordeon(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      setActive = _useState2[0],
      setActiveState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0px"),
      _useState4 = _slicedToArray(_useState3, 2),
      setHeight = _useState4[0],
      setHeightState = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0"),
      _useState6 = _slicedToArray(_useState5, 2),
      setRotate = _useState6[0],
      setRotateState = _useState6[1];

  var content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var ouvrirAccordeon = function ouvrirAccordeon() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : "".concat(content.current.scrollHeight, "px"));
    console.log(content.current.scrollHeight);
    setRotateState(setActive === "active" ? "0" : "-90deg");
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_styles_Accordeon_styled_js__WEBPACK_IMPORTED_MODULE_1__.AccordeonSection, {
    rotate: setRotate,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
      onClick: ouvrirAccordeon,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: props.titre
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: _assets_svg_chevronBlack_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "chevronBlack"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ref: content,
      style: {
        height: "".concat(setHeight)
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        children: props.content
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordeon);

/***/ }),

/***/ "./resources/js/components/styles/Accordeon.styled.js":
/*!************************************************************!*\
  !*** ./resources/js/components/styles/Accordeon.styled.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordeonSection": () => (/* binding */ AccordeonSection)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //console.log(height)

var AccordeonSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n\n    // pour bien voir \n    margin-top:-1px;\n    margin-left: 40px;\n    margin-right: 40px;\n\n    div {\n        overflow: hidden;\n        transition: height 0.6s ease-out;\n\n            p  {\n            padding: 20px;\n            font-family: 'Gotham';\n\n        }\n    }\n\n    button{\n        background: #fff;\n        border: 1px solid #D8D8D8;\n        border-left: none;\n        border-right: none;\n        padding: 10px;\n        padding-top:18px;\n        padding-bottom:8px;\n        display:flex;\n\n        img {\n            height : 12px;\n            margin-left: auto;\n            transition: transform 0.6s ease;\n\n            margin-bottom: auto;\n            transform: rotate(", ");\n        }\n\n        p {\n            font-family: 'Gotham';\n            font-weight: 900;\n            font-style: normal;\n            font-size:1.2rem;\n        }\n    }\n\n"])), function (_ref) {
  var rotate = _ref.rotate;
  return rotate || '0';
});

/***/ }),

/***/ "./resources/js/components/styles/Button.styled.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/styles/Button.styled.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "ButtonBackUp": () => (/* binding */ ButtonBackUp)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  border: none;\n  cursor: pointer;\n  font-weight: 700;\n  height: 40px;\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n  font-family: 'Gotham Black';\n  max-width: 350px;\n  font-size: 1.2rem;\n  font-weight: 300;\n  border: 1px solid ", ";\n  display:block;\n  margin-top:20px;\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n    transform: scale(0.99);\n  }\n"])), function (_ref) {
  var bg = _ref.bg;
  return bg || '#fff';
}, function (_ref2) {
  var color = _ref2.color;
  return color || '#333';
}, function (_ref3) {
  var borderColor = _ref3.borderColor;
  return borderColor || '#303031';
}, function (_ref4) {
  var bgHover = _ref4.bgHover;
  return bgHover || '#58111A';
}, function (_ref5) {
  var colorHover = _ref5.colorHover;
  return colorHover || '#FFF';
});
var ButtonBackUp = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 2px;\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  background: #58111A;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;\n  color: #fff;\n  display:block;\n  margin-top:20px;\n  position:fixed;\n  bottom: 20px;\n  right:20px;\n\n\n  img {\n    position: absolute;\n    top: 20%;\n    left: 10%;\n  }\n  \n"])));

/***/ }),

/***/ "./resources/js/components/styles/Input.styled.js":
/*!********************************************************!*\
  !*** ./resources/js/components/styles/Input.styled.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 1rem;\n    font-family: \"Gotham Thin\";\n    font-weight: 500;\n    font-style: italic;\n    position: absolute;\n    pointer-events: none;\n    left: 15px;\n    top: 12px;\n    color: black;\n    transition: 200ms ease all;\n    ", "\n"])), function (_ref) {
  var shrink = _ref.shrink;
  return shrink && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            left: -4px;\n            top: -18px;\n            color: white;\n            font-size: 0.8rem;\n        "])));
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #d8d8d8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    font-family: \"Gotham Thin\";\n    font-weight: 500;\n    font-style: italic;\n    padding-left: 10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n    outline: none;\n    display:block;\n\n    &:focus ~ ", " {\n        left: -4px;\n        top: -18px;\n        color: #fff;\n        font-size: 0.8rem;\n    }\n"])), Label);
var Select = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].select(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 100%;\n    max-width: 350px;\n    height: 40px;\n    background-color: #d8d8d8;\n    border-radius: 3px;\n    border: 1px solid #303031;\n    margin-top: 20px;\n    font-family: \"Gotham Thin\";\n    font-weight: 500;\n    font-style: italic;\n    padding-left: 10px;\n    box-sizing: border-box;\n    font-size: 0.833rem;\n"])));

/***/ }),

/***/ "./resources/js/pages/TestStyle.js":
/*!*****************************************!*\
  !*** ./resources/js/pages/TestStyle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/styles/Button.styled */ "./resources/js/components/styles/Button.styled.js");
/* harmony import */ var _components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles/Input.styled */ "./resources/js/components/styles/Input.styled.js");
/* harmony import */ var _assets_svg_chevron_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/svg/chevron.svg */ "./resources/js/assets/svg/chevron.svg");
/* harmony import */ var _components_Accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Accordeon */ "./resources/js/components/Accordeon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

 //import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";






var TestStyle = function TestStyle() {
  var test = function test() {
    console.log("test");
  };

  var backTop = function backTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Accordeon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titre: "Description",
      content: "Vin mousseu bon"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Accordeon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titre: "Modification",
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_styles_Input_styled__WEBPACK_IMPORTED_MODULE_1__.Select, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", {
          children: "Cellier"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Accordeon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titre: "Notes",
      content: "Je suis un amateur alors je connais \xE7a"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Accordeon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titre: "Yesss",
      content: "I'm baby xOXO franzen iPhone, hell of paleo selvage slow-carb keytar cardigan green juice. Polaroid fixie distillery alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Accordeon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      titre: "Vino",
      content: "Je suis un amateur alors je connais \xE7a Je suis un amateur alors je connais \xE7a Je suis un amateur "
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__.ButtonBackUp, {
      onClick: function onClick() {
        return backTop();
      },
      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: _assets_svg_chevron_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
        alt: "chevron"
      }), " "]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStyle);

/***/ }),

/***/ "./resources/js/assets/svg/chevron.svg":
/*!*********************************************!*\
  !*** ./resources/js/assets/svg/chevron.svg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chevron.svg?f58bef09731ab36a5d16019a73b45c42");

/***/ }),

/***/ "./resources/js/assets/svg/chevronBlack.svg":
/*!**************************************************!*\
  !*** ./resources/js/assets/svg/chevronBlack.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/chevronBlack.svg?122cca7512d3a55e8676620514202557");

/***/ })

}]);