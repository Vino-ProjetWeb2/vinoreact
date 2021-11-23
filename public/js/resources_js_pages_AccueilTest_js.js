"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_AccueilTest_js"],{

/***/ "./resources/js/components/styles/Button.styled.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/styles/Button.styled.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 4px;\n  border: none;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n  height: 40px;\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n  font-family: 'Gotham Black';\n  max-width: 350px;\n  font-size: 1.2rem;\n  font-weight: 300;\n\n  &:hover {\n    background-color: #58111A;\n    // transform: scale(0.98);\n  }\n"])), function (_ref) {
  var bg = _ref.bg;
  return bg || '#fff';
}, function (_ref2) {
  var color = _ref2.color;
  return color || '#333';
});

/***/ }),

/***/ "./resources/js/pages/AccueilTest.js":
/*!*******************************************!*\
  !*** ./resources/js/pages/AccueilTest.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/styles/Button.styled */ "./resources/js/components/styles/Button.styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var TestStyle = function TestStyle() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_styles_Button_styled__WEBPACK_IMPORTED_MODULE_0__.Button, {
      bg: "#303031",
      color: "#fff",
      children: "BOIRE"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStyle);

/***/ })

}]);