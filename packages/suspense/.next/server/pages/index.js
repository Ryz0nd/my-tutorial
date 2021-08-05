(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/shared/Error.tsx":
/*!*************************************!*\
  !*** ./components/shared/Error.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Error; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\suspense\\components\\shared\\Error.tsx";
function Error() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Error!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/shared/Loader.tsx":
/*!**************************************!*\
  !*** ./components/shared/Loader.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loader; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\suspense\\components\\shared\\Loader.tsx";
function Loader() {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-error-boundary */ "react-error-boundary");
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_shared_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/Loader */ "./components/shared/Loader.tsx");
/* harmony import */ var _components_shared_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Error */ "./components/shared/Error.tsx");


var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\suspense\\pages\\index.tsx";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






const People = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ "components_People_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/People */ "./components/People.tsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/People */ "./components/People.tsx")],
    modules: ["index.tsx -> " + "../components/People"]
  }
});

const Container = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  false ? 0 : {
  target: "e1hp24rj0",
  label: "Container"
})( false ? 0 : {
  name: "1jazeew",
  styles: "display:flex;width:100%;height:100vh;background-color:#b8b8b8",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanVuZ3lcXERvY3VtZW50c1xcR2l0SHViXFxteS10dXRvcmlhbFxccGFja2FnZXNcXHN1c3BlbnNlXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVU0QiIsImZpbGUiOiJDOlxcVXNlcnNcXGp1bmd5XFxEb2N1bWVudHNcXEdpdEh1YlxcbXktdHV0b3JpYWxcXHBhY2thZ2VzXFxzdXNwZW5zZVxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSBcInJlYWN0LWVycm9yLWJvdW5kYXJ5XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL0Vycm9yXCI7XHJcblxyXG5jb25zdCBQZW9wbGUgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvUGVvcGxlXCIpLCB7IHNzcjogZmFsc2UgfSk7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOGI4O1xyXG5gO1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxFcnJvckJvdW5kYXJ5IGZhbGxiYWNrUmVuZGVyPXsoKSA9PiA8RXJyb3IgLz59PlxyXG4gICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRlciAvPn0+XHJcbiAgICAgICAgICA8UGVvcGxlIC8+XHJcbiAgICAgICAgPC9TdXNwZW5zZT5cclxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Home = () => {
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_error_boundary__WEBPACK_IMPORTED_MODULE_4__.ErrorBoundary, {
      fallbackRender: () => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Error__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 44
      }, undefined),
      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {
        fallback: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 29
        }, undefined),
        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(People, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "@emotion/styled/base":
/*!***************************************!*\
  !*** external "@emotion/styled/base" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/styled/base");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-error-boundary":
/*!***************************************!*\
  !*** external "react-error-boundary" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-error-boundary");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXNwZW5zZS8uL2NvbXBvbmVudHMvc2hhcmVkL0Vycm9yLnRzeCIsIndlYnBhY2s6Ly9zdXNwZW5zZS8uL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vc3VzcGVuc2UvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3VzcGVuc2UvZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zdXNwZW5zZS9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZC9iYXNlXCIiLCJ3ZWJwYWNrOi8vc3VzcGVuc2UvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3N1c3BlbnNlL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vc3VzcGVuc2UvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3N1c3BlbnNlL2V4dGVybmFsIFwicmVhY3QtZXJyb3ItYm91bmRhcnlcIiIsIndlYnBhY2s6Ly9zdXNwZW5zZS9leHRlcm5hbCBcInJlYWN0LXF1ZXJ5XCIiXSwibmFtZXMiOlsiRXJyb3IiLCJMb2FkZXIiLCJQZW9wbGUiLCJkeW5hbWljIiwic3NyIiwiQ29udGFpbmVyIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmMsU0FBU0MsTUFBVCxHQUFrQjtBQUMvQixTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyxtREFBTyxDQUFDLE1BQU0seUtBQVAsRUFBdUM7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBLHdDQUF6QixxREFBeUI7QUFBQSxnQ0FBekIsc0JBQXlCO0FBQUE7QUFBQSxDQUF2QyxDQUF0Qjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsNkVBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQWY7O0FBT0EsTUFBTUMsSUFBYyxHQUFHLE1BQU07QUFDM0IsU0FDRSx1RUFBQyxTQUFEO0FBQUEsY0FDRSx1RUFBQywrREFBRDtBQUFlLG9CQUFjLEVBQUUsTUFBTSx1RUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFyQztBQUFBLGdCQUNFLHVFQUFDLDJDQUFEO0FBQVUsZ0JBQVEsRUFBRSx1RUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFwQjtBQUFBLGtCQUNFLHVFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FWRDs7QUFZQSwrREFBZUEsSUFBZixFOzs7Ozs7Ozs7OztBQzdCQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKCkge1xyXG4gIHJldHVybiA8cD5FcnJvciE8L3A+O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRlcigpIHtcclxuICByZXR1cm4gPHA+TG9hZGluZzwvcD47XHJcbn1cclxuIiwiaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tIFwicmVhY3QtZXJyb3ItYm91bmRhcnlcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvTG9hZGVyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvRXJyb3JcIjtcclxuXHJcbmNvbnN0IFBlb3BsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9QZW9wbGVcIiksIHsgc3NyOiBmYWxzZSB9KTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGI4Yjg7XHJcbmA7XHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEVycm9yQm91bmRhcnkgZmFsbGJhY2tSZW5kZXI9eygpID0+IDxFcnJvciAvPn0+XHJcbiAgICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TG9hZGVyIC8+fT5cclxuICAgICAgICAgIDxQZW9wbGUgLz5cclxuICAgICAgICA8L1N1c3BlbnNlPlxyXG4gICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vcmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWQvYmFzZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWVycm9yLWJvdW5kYXJ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1xdWVyeVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==