(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./libs/queryClient.ts":
/*!*****************************!*\
  !*** ./libs/queryClient.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);

const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({
  defaultOptions: {}
});
/* harmony default export */ __webpack_exports__["default"] = (queryClient);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_queryClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/queryClient */ "./libs/queryClient.ts");
/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles */ "./styles/styles.tsx");


var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\a\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [_styles_styles__WEBPACK_IMPORTED_MODULE_3__.default, (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {
      client: _libs_queryClient__WEBPACK_IMPORTED_MODULE_2__.default,
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/cssNormalize.ts":
/*!********************************!*\
  !*** ./styles/cssNormalize.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

const cssNormalize =  false ? 0 : {
  name: "1ssnijg-cssNormalize",
  styles: "html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0;}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto;}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px;}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;};label:cssNormalize;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanVuZ3lcXERvY3VtZW50c1xcR2l0SHViXFxteS10dXRvcmlhbFxccGFja2FnZXNcXGFcXHN0eWxlc1xcY3NzTm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd3QiIsImZpbGUiOiJDOlxcVXNlcnNcXGp1bmd5XFxEb2N1bWVudHNcXEdpdEh1YlxcbXktdHV0b3JpYWxcXHBhY2thZ2VzXFxhXFxzdHlsZXNcXGNzc05vcm1hbGl6ZS50cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuY29uc3QgY3NzTm9ybWFsaXplID0gY3NzYFxyXG4gIGh0bWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogU2VjdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbmRlciB0aGUgbWFpbiBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gaDEgZWxlbWVudHMgd2l0aGluIHNlY3Rpb24gYW5kXHJcbiAqIGFydGljbGUgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xyXG4gIH1cclxuXHJcbiAgLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAqL1xyXG5cclxuICBociB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cclxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGFiYnJbdGl0bGVdIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYixcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgY29kZSxcclxuICBrYmQsXHJcbiAgc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBQcmV2ZW50IHN1YiBhbmQgc3VwIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxyXG4gKiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzdWIsXHJcbiAgc3VwIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICBzdWIge1xyXG4gICAgYm90dG9tOiAtMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgc3VwIHtcclxuICAgIHRvcDogLTAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBGb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBpbnB1dCxcclxuICBvcHRncm91cCxcclxuICBzZWxlY3QsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgW3R5cGU9XCJidXR0b25cIl0sXHJcbiAgW3R5cGU9XCJyZXNldFwiXSxcclxuICBbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXHJcbiAqL1xyXG5cclxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XHJcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gZmllbGRzZXQgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgZmllbGRzZXQgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgbGVnZW5kIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG4gIHByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICovXHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICovXHJcblxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy4gKi9cclxuXHJcbiAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gaW5oZXJpdCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXHJcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBJbnRlcmFjdGl2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIH1cclxuXHJcbiAgLyogTWlzY1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbiAgdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIFtoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzTm9ybWFsaXplO1xyXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
/* harmony default export */ __webpack_exports__["default"] = (cssNormalize);

/***/ }),

/***/ "./styles/styles.tsx":
/*!***************************!*\
  !*** ./styles/styles.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cssNormalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssNormalize */ "./styles/cssNormalize.ts");

var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\a\\styles\\styles.tsx";



const globalStyles = (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
  styles: _cssNormalize__WEBPACK_IMPORTED_MODULE_2__.default
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 22
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (globalStyles);

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uL2xpYnMvcXVlcnlDbGllbnQudHMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS8uL3N0eWxlcy9jc3NOb3JtYWxpemUudHMiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvLi9zdHlsZXMvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vbXktc2FtcGxlLWNvZGUvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9teS1zYW1wbGUtY29kZS9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiXSwibmFtZXMiOlsicXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnbG9iYWxTdHlsZXMiLCJjc3NOb3JtYWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxJQUFJQyxvREFBSixDQUFnQjtBQUNsQ0MsZ0JBQWMsRUFBRTtBQURrQixDQUFoQixDQUFwQjtBQUlBLCtEQUFlRixXQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQW1EO0FBQ2pELFNBQ0U7QUFBQSxlQUNHQyxtREFESCxFQUVFLHVFQUFDLDREQUFEO0FBQXFCLFlBQU0sRUFBRU4sc0RBQTdCO0FBQUEsZ0JBQ0UsdUVBQUMsU0FBRCxvQkFBZUssU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFRRDs7QUFDRCwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1JLFlBQVksR0FBRyxVQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsQjtBQXNWQSwrREFBZUEsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaldBO0FBQ0E7O0FBRUEsTUFBTUQsWUFBWSxHQUFHLHVFQUFDLGtEQUFEO0FBQVEsUUFBTSxFQUFFQyxrREFBWUE7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFyQjs7QUFFQSwrREFBZUQsWUFBZixFOzs7Ozs7Ozs7OztBQ0xBLDRDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gIGRlZmF1bHRPcHRpb25zOiB7fSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUNsaWVudDtcbiIsImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQgcXVlcnlDbGllbnQgZnJvbSBcIi4uL2xpYnMvcXVlcnlDbGllbnRcIjtcclxuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Z2xvYmFsU3R5bGVzfVxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xyXG5cclxuLyogRG9jdW1lbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxyXG4gKi9cclxuY29uc3QgY3NzTm9ybWFsaXplID0gY3NzYFxyXG4gIGh0bWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogU2VjdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIGJvZHkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbmRlciB0aGUgbWFpbiBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cclxuICovXHJcblxyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gaDEgZWxlbWVudHMgd2l0aGluIHNlY3Rpb24gYW5kXHJcbiAqIGFydGljbGUgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xyXG4gIH1cclxuXHJcbiAgLyogR3JvdXBpbmcgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cclxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXHJcbiAqL1xyXG5cclxuICBociB7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xyXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXHJcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cclxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGFiYnJbdGl0bGVdIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxyXG4gKi9cclxuXHJcbiAgYixcclxuICBzdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgY29kZSxcclxuICBrYmQsXHJcbiAgc2FtcCB7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBQcmV2ZW50IHN1YiBhbmQgc3VwIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxyXG4gKiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuICBzdWIsXHJcbiAgc3VwIHtcclxuICAgIGZvbnQtc2l6ZTogNzUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICBzdWIge1xyXG4gICAgYm90dG9tOiAtMC4yNWVtO1xyXG4gIH1cclxuXHJcbiAgc3VwIHtcclxuICAgIHRvcDogLTAuNWVtO1xyXG4gIH1cclxuXHJcbiAgLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBGb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG4gIGJ1dHRvbixcclxuICBpbnB1dCxcclxuICBvcHRncm91cCxcclxuICBzZWxlY3QsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cclxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cclxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxyXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uLFxyXG4gIGlucHV0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxyXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgc2VsZWN0IHtcclxuICAgIC8qIDEgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBidXR0b24sXHJcbiAgW3R5cGU9XCJidXR0b25cIl0sXHJcbiAgW3R5cGU9XCJyZXNldFwiXSxcclxuICBbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxyXG4gIFt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXHJcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXHJcbiAqL1xyXG5cclxuICBidXR0b246LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXHJcbiAgW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcclxuICBbdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XHJcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXHJcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gZmllbGRzZXQgZWxlbWVudHMgaW4gSUUuXHJcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcclxuICogICAgZmllbGRzZXQgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbiAgbGVnZW5kIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICAgIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXHJcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXHJcbiAgICBwYWRkaW5nOiAwOyAvKiAzICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXHJcblxyXG4gIHByb2dyZXNzIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cclxuICovXHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxyXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cImNoZWNrYm94XCJdLFxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xyXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cclxuICovXHJcblxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gIFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICBbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cclxuICB9XHJcblxyXG4gIC8qIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy4gKi9cclxuXHJcbiAgW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gaW5oZXJpdCBpbiBTYWZhcmkuXHJcbiAqL1xyXG5cclxuICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXHJcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbiAgfVxyXG5cclxuICAvKiBJbnRlcmFjdGl2ZVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxyXG4gKi9cclxuXHJcbiAgZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC8qXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG4gIHN1bW1hcnkge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gIH1cclxuXHJcbiAgLyogTWlzY1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuICAvKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxyXG4gKi9cclxuXHJcbiAgdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cclxuICovXHJcblxyXG4gIFtoaWRkZW5dIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzTm9ybWFsaXplO1xyXG4iLCJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuaW1wb3J0IGNzc05vcm1hbGl6ZSBmcm9tIFwiLi9jc3NOb3JtYWxpemVcIjtcclxuXHJcbmNvbnN0IGdsb2JhbFN0eWxlcyA9IDxHbG9iYWwgc3R5bGVzPXtjc3NOb3JtYWxpemV9IC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU3R5bGVzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==