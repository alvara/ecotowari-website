"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stickers";
exports.ids = ["pages/api/stickers"];
exports.modules = {

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("airtable");

/***/ }),

/***/ "(api)/./pages/api/stickers/index.ts":
/*!*************************************!*\
  !*** ./pages/api/stickers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_repository_getStickers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/repository/getStickers */ \"(api)/./services/repository/getStickers.ts\");\n\nasync function handler(_req, res) {\n    // Get data from your database\n    const data = await (0,_services_repository_getStickers__WEBPACK_IMPORTED_MODULE_0__.getStickers)();\n    res.status(200).json(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RpY2tlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDc0U7QUFFdkQsZUFBZUMsT0FBTyxDQUNuQ0MsSUFBb0IsRUFDcEJDLEdBQW9CLEVBQ3BCLENBQUM7SUFDRCxFQUE4QjtJQUM5QixLQUFLLENBQUNDLElBQUksR0FBRyxLQUFLLENBQUNKLDZFQUFXO0lBQzlCRyxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0YsSUFBSTtBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvdG93YXJpLy4vcGFnZXMvYXBpL3N0aWNrZXJzL2luZGV4LnRzP2ExYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRTdGlja2VycyB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3JlcG9zaXRvcnkvZ2V0U3RpY2tlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICBfcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAvLyBHZXQgZGF0YSBmcm9tIHlvdXIgZGF0YWJhc2VcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFN0aWNrZXJzKCk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbImdldFN0aWNrZXJzIiwiaGFuZGxlciIsIl9yZXEiLCJyZXMiLCJkYXRhIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/stickers/index.ts\n");

/***/ }),

/***/ "(api)/./services/repository/getStickers.ts":
/*!********************************************!*\
  !*** ./services/repository/getStickers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStickers\": () => (/* binding */ getStickers)\n/* harmony export */ });\n/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable */ \"airtable\");\n/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStickers = async ()=>{\n    const base = new (airtable__WEBPACK_IMPORTED_MODULE_0___default())({\n        apiKey: process.env.AIRTABLE_API_KEY\n    }).base(process.env.AIRTABLE_BASE_ID);\n    const data = [];\n    const table = base('Stickers');\n    const records = await table.select().all();\n    records.forEach(({ fields  })=>{\n        data.push({\n            id: fields.Id,\n            qty: fields.Quantity || 0,\n            created: fields.Created,\n            started: fields.Started ? fields.Started : null,\n            notes: fields.Notes || ''\n        });\n    });\n    console.log(data);\n    return data;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9yZXBvc2l0b3J5L2dldFN0aWNrZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUd4QixLQUFLLENBQUNDLFdBQVcsYUFBZSxDQUFDO0lBQ3RDLEtBQUssQ0FBQ0MsSUFBSSxHQUFHLEdBQUcsQ0FBQ0YsaURBQVEsQ0FBQyxDQUFDO1FBQ3pCRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDdEMsQ0FBQyxFQUFFSixJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxnQkFBZ0I7SUFFcEMsS0FBSyxDQUFDQyxJQUFJLEdBQWUsQ0FBQyxDQUFDO0lBQzNCLEtBQUssQ0FBQ0MsS0FBSyxHQUFHUCxJQUFJLENBQUMsQ0FBVTtJQUM3QixLQUFLLENBQUNRLE9BQU8sR0FBRyxLQUFLLENBQUNELEtBQUssQ0FBQ0UsTUFBTSxHQUFHQyxHQUFHO0lBRXhDRixPQUFPLENBQUNHLE9BQU8sRUFBRSxDQUFDLENBQUNDLE1BQU0sRUFBQyxDQUFDLEdBQUssQ0FBQztRQUMvQk4sSUFBSSxDQUFDTyxJQUFJLENBQUMsQ0FBQztZQUNUQyxFQUFFLEVBQUVGLE1BQU0sQ0FBQ0csRUFBRTtZQUNiQyxHQUFHLEVBQUdKLE1BQU0sQ0FBQ0ssUUFBUSxJQUFlLENBQUM7WUFDckNDLE9BQU8sRUFBRU4sTUFBTSxDQUFDTyxPQUFPO1lBQ3ZCQyxPQUFPLEVBQUVSLE1BQU0sQ0FBQ1MsT0FBTyxHQUFJVCxNQUFNLENBQUNTLE9BQU8sR0FBYyxJQUFJO1lBQzNEQyxLQUFLLEVBQUdWLE1BQU0sQ0FBQ1csS0FBSyxJQUFlLENBQUU7UUFDdkMsQ0FBQztJQUNILENBQUM7SUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNuQixJQUFJO0lBQ2hCLE1BQU0sQ0FBQ0EsSUFBSTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY290b3dhcmkvLi9zZXJ2aWNlcy9yZXBvc2l0b3J5L2dldFN0aWNrZXJzLnRzPzliMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFpcnRhYmxlIGZyb20gJ2FpcnRhYmxlJztcbmltcG9ydCB7IElTdGlja2VyIH0gZnJvbSAnLi4vdHlwZSc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGlja2VycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5BSVJUQUJMRV9BUElfS0VZLFxuICB9KS5iYXNlKHByb2Nlc3MuZW52LkFJUlRBQkxFX0JBU0VfSUQpO1xuXG4gIGNvbnN0IGRhdGE6IElTdGlja2VyW10gPSBbXTtcbiAgY29uc3QgdGFibGUgPSBiYXNlKCdTdGlja2VycycpO1xuICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGFibGUuc2VsZWN0KCkuYWxsKCk7XG5cbiAgcmVjb3Jkcy5mb3JFYWNoKCh7IGZpZWxkcyB9KSA9PiB7XG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIGlkOiBmaWVsZHMuSWQgYXMgbnVtYmVyLFxuICAgICAgcXR5OiAoZmllbGRzLlF1YW50aXR5IGFzIG51bWJlcikgfHwgMCxcbiAgICAgIGNyZWF0ZWQ6IGZpZWxkcy5DcmVhdGVkIGFzIHN0cmluZyxcbiAgICAgIHN0YXJ0ZWQ6IGZpZWxkcy5TdGFydGVkID8gKGZpZWxkcy5TdGFydGVkIGFzIHN0cmluZykgOiBudWxsLFxuICAgICAgbm90ZXM6IChmaWVsZHMuTm90ZXMgYXMgc3RyaW5nKSB8fCAnJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBkYXRhO1xufTtcbiJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsImdldFN0aWNrZXJzIiwiYmFzZSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBSVJUQUJMRV9BUElfS0VZIiwiQUlSVEFCTEVfQkFTRV9JRCIsImRhdGEiLCJ0YWJsZSIsInJlY29yZHMiLCJzZWxlY3QiLCJhbGwiLCJmb3JFYWNoIiwiZmllbGRzIiwicHVzaCIsImlkIiwiSWQiLCJxdHkiLCJRdWFudGl0eSIsImNyZWF0ZWQiLCJDcmVhdGVkIiwic3RhcnRlZCIsIlN0YXJ0ZWQiLCJub3RlcyIsIk5vdGVzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/repository/getStickers.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stickers/index.ts"));
module.exports = __webpack_exports__;

})();