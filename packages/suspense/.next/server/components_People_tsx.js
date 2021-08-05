exports.id = "components_People_tsx";
exports.ids = ["components_People_tsx"];
exports.modules = {

/***/ "./components/People.tsx":
/*!*******************************!*\
  !*** ./components/People.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ People; }
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ "@emotion/react/jsx-dev-runtime");
/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled/base */ "@emotion/styled/base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\jungy\\Documents\\GitHub\\my-tutorial\\packages\\suspense\\components\\People.tsx";



const PeopleContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div",  false ? 0 : {
  target: "e18lscz90",
  label: "PeopleContainer"
})( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcanVuZ3lcXERvY3VtZW50c1xcR2l0SHViXFxteS10dXRvcmlhbFxccGFja2FnZXNcXHN1c3BlbnNlXFxjb21wb25lbnRzXFxQZW9wbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQyIsImZpbGUiOiJDOlxcVXNlcnNcXGp1bmd5XFxEb2N1bWVudHNcXEdpdEh1YlxcbXktdHV0b3JpYWxcXHBhY2thZ2VzXFxzdXNwZW5zZVxcY29tcG9uZW50c1xcUGVvcGxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcblxyXG5jb25zdCBQZW9wbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG50eXBlIFBlb3BsZSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgbWFzczogc3RyaW5nO1xyXG4gIGhhaXJfY29sb3I6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGdldEx1a2UgPSBhc3luYyAoKTogUHJvbWlzZTxQZW9wbGU+ID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL3N3YXBpLmRldi9hcGkvcGVvcGxlLzEvXCIpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVvcGxlKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UGVvcGxlPihcImZldGNoTHVrZVwiLCBnZXRMdWtlLCB7IHN1c3BlbnNlOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBlb3BsZUNvbnRhaW5lcj5cclxuICAgICAgPGgxPntkYXRhPy5uYW1lfTwvaDE+XHJcbiAgICA8L1Blb3BsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdfQ== */");

const getLuke = async () => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_2___default()("http://swapi.dev/api/people/1/");
  return data;
};

function People() {
  const {
    data
  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)("fetchLuke", getLuke, {
    suspense: true
  });
  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PeopleContainer, {
    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: data === null || data === void 0 ? void 0 : data.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXNwZW5zZS8uL2NvbXBvbmVudHMvUGVvcGxlLnRzeCJdLCJuYW1lcyI6WyJQZW9wbGVDb250YWluZXIiLCJnZXRMdWtlIiwiZGF0YSIsImF4aW9zIiwiUGVvcGxlIiwidXNlUXVlcnkiLCJzdXNwZW5zZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsNkVBQUg7QUFBQTtBQUFBO0FBQUEsOHpDQUFyQjs7QUFTQSxNQUFNQyxPQUFPLEdBQUcsWUFBNkI7QUFDM0MsUUFBTTtBQUFFQztBQUFGLE1BQVcsTUFBTUMsNENBQUssQ0FBQyxnQ0FBRCxDQUE1QjtBQUNBLFNBQU9ELElBQVA7QUFDRCxDQUhEOztBQUtlLFNBQVNFLE1BQVQsR0FBa0I7QUFDL0IsUUFBTTtBQUFFRjtBQUFGLE1BQVdHLHFEQUFRLENBQVMsV0FBVCxFQUFzQkosT0FBdEIsRUFBK0I7QUFBRUssWUFBUSxFQUFFO0FBQVosR0FBL0IsQ0FBekI7QUFFQSxTQUNFLHVFQUFDLGVBQUQ7QUFBQSxjQUNFO0FBQUEsZ0JBQUtKLElBQUwsYUFBS0EsSUFBTCx1QkFBS0EsSUFBSSxDQUFFSztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCxDIiwiZmlsZSI6ImNvbXBvbmVudHNfUGVvcGxlX3RzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcblxyXG5jb25zdCBQZW9wbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG50eXBlIFBlb3BsZSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgbWFzczogc3RyaW5nO1xyXG4gIGhhaXJfY29sb3I6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGdldEx1a2UgPSBhc3luYyAoKTogUHJvbWlzZTxQZW9wbGU+ID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zKFwiaHR0cDovL3N3YXBpLmRldi9hcGkvcGVvcGxlLzEvXCIpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGVvcGxlKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UGVvcGxlPihcImZldGNoTHVrZVwiLCBnZXRMdWtlLCB7IHN1c3BlbnNlOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBlb3BsZUNvbnRhaW5lcj5cclxuICAgICAgPGgxPntkYXRhPy5uYW1lfTwvaDE+XHJcbiAgICA8L1Blb3BsZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=