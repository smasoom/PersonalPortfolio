"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-callback-ref@2.0.4_react@18.2.0";
exports.ids = ["vendor-chunks/@nextui-org+use-callback-ref@2.0.4_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@nextui-org+use-callback-ref@2.0.4_react@18.2.0/node_modules/@nextui-org/use-callback-ref/dist/index.mjs":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@nextui-org+use-callback-ref@2.0.4_react@18.2.0/node_modules/@nextui-org/use-callback-ref/dist/index.mjs ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _nextui_org_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/use-safe-layout-effect */ \"(ssr)/./node_modules/.pnpm/@nextui-org+use-safe-layout-effect@2.0.4_react@18.2.0/node_modules/@nextui-org/use-safe-layout-effect/dist/index.mjs\");\n// src/index.ts\n\n\nfunction useCallbackRef(fn, deps = []) {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);\n    (0,_nextui_org_use_safe_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useSafeLayoutEffect)(()=>{\n        ref.current = fn;\n    });\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{\n        var _a;\n        return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);\n    }, deps);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWNhbGxiYWNrLXJlZkAyLjAuNF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZUFBZTtBQUM2QjtBQUM2QjtBQUN6RSxTQUFTRyxlQUFlQyxFQUFFLEVBQUVDLE9BQU8sRUFBRTtJQUNuQyxNQUFNQyxNQUFNTCw2Q0FBTUEsQ0FBQ0c7SUFDbkJGLHVGQUFtQkEsQ0FBQztRQUNsQkksSUFBSUMsT0FBTyxHQUFHSDtJQUNoQjtJQUNBLE9BQU9KLGtEQUFXQSxDQUFDLENBQUMsR0FBR1E7UUFDckIsSUFBSUM7UUFDSixPQUFPLENBQUNBLEtBQUtILElBQUlDLE9BQU8sS0FBSyxPQUFPLEtBQUssSUFBSUUsR0FBR0MsSUFBSSxDQUFDSixRQUFRRTtJQUMvRCxHQUFHSDtBQUNMO0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vQG5leHR1aS1vcmcrdXNlLWNhbGxiYWNrLXJlZkAyLjAuNF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL0BuZXh0dWktb3JnL3VzZS1jYWxsYmFjay1yZWYvZGlzdC9pbmRleC5tanM/N2MwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXgudHNcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNhZmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiQG5leHR1aS1vcmcvdXNlLXNhZmUtbGF5b3V0LWVmZmVjdFwiO1xuZnVuY3Rpb24gdXNlQ2FsbGJhY2tSZWYoZm4sIGRlcHMgPSBbXSkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoZm4pO1xuICB1c2VTYWZlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICByZWYuY3VycmVudCA9IGZuO1xuICB9KTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSByZWYuY3VycmVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwocmVmLCAuLi5hcmdzKTtcbiAgfSwgZGVwcyk7XG59XG5leHBvcnQge1xuICB1c2VDYWxsYmFja1JlZlxufTtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVNhZmVMYXlvdXRFZmZlY3QiLCJ1c2VDYWxsYmFja1JlZiIsImZuIiwiZGVwcyIsInJlZiIsImN1cnJlbnQiLCJhcmdzIiwiX2EiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@nextui-org+use-callback-ref@2.0.4_react@18.2.0/node_modules/@nextui-org/use-callback-ref/dist/index.mjs\n");

/***/ })

};
;