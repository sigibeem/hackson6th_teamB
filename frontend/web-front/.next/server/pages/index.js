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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { 0: kurabeteminaikas , 1: setKurabeteminaika  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getAPIData = async ()=>{\n        let instance;\n        instance = axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            baseURL: \"http://localhost:8080\"\n        });\n        try {\n            const response = await instance.get(\"/api/\");\n            console.log(response?.data);\n            const kurabeteminaikadata = response?.data;\n            setKurabeteminaika(kurabeteminaikadata);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"hello world!\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getAPIData,\n                children: \"click\"\n            }, void 0, false, {\n                fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            kurabeteminaikas.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: item.body\n                        }, void 0, false, {\n                            fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/home/app/frontend/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/app/frontend/src/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ0M7QUFRNUMsaUVBQWdCLElBQU07SUFDbEIsTUFBTSxLQUFDRyxnQkFBZ0IsTUFBRUMsa0JBQWtCLE1BQUlILCtDQUFRLENBQW9CLEVBQUUsQ0FBQztJQUU5RSxNQUFNSSxVQUFVLEdBQUcsVUFBWTtRQUMzQixJQUFJQyxRQUFRO1FBRVpBLFFBQVEsR0FBR0osb0RBQVksQ0FBQztZQUNwQk0sT0FBTyxFQUFFLHVCQUF1QjtTQUNuQyxDQUFDO1FBRUYsSUFBSTtZQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNSCxRQUFRLENBQUNJLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLEVBQUVJLElBQUksQ0FBQztZQUMzQixNQUFNQyxtQkFBbUIsR0FBR0wsUUFBUSxFQUFFSSxJQUFJO1lBQzFDVCxrQkFBa0IsQ0FBQ1UsbUJBQW1CLENBQUM7UUFDM0MsRUFBRSxPQUFPQyxLQUFLLEVBQUU7WUFDWkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssQ0FBQztRQUN0QixDQUFDO0lBQ0wsQ0FBQztJQUNELHFCQUNJLDhEQUFDQyxLQUFHOztZQUFDLGNBRUQ7MEJBQUEsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRWIsVUFBVTswQkFBRSxPQUFLOzs7Ozt5QkFBUztZQUMxQ0YsZ0JBQWdCLENBQUNnQixHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDdkIsOERBQUNKLEtBQUc7O3NDQUNBLDhEQUFDSyxJQUFFO3NDQUFFRCxJQUFJLENBQUNFLEtBQUs7Ozs7O3FDQUFNO3NDQUNyQiw4REFBQ0MsR0FBQztzQ0FBRUgsSUFBSSxDQUFDSSxJQUFJOzs7OztxQ0FBSzs7bUJBRlpKLElBQUksQ0FBQ0ssRUFBRTs7Ozs2QkFHWCxDQUNSOzs7Ozs7aUJBQ0EsQ0FDVDtBQUNMLENBQUMsRUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnXG5cbnR5cGUgS3VyYWJldGVtaW5haWthID0ge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogU3RyaW5nXG4gICAgYm9keTogU3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgY29uc3QgW2t1cmFiZXRlbWluYWlrYXMsIHNldEt1cmFiZXRlbWluYWlrYV0gPSB1c2VTdGF0ZTxLdXJhYmV0ZW1pbmFpa2FbXT4oW10pXG5cbiAgICBjb25zdCBnZXRBUElEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgaW5zdGFuY2U6IEF4aW9zSW5zdGFuY2VcblxuICAgICAgICBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICAgICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgfSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy9hcGkvJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlPy5kYXRhKVxuICAgICAgICAgICAgY29uc3Qga3VyYWJldGVtaW5haWthZGF0YSA9IHJlc3BvbnNlPy5kYXRhIGFzIEt1cmFiZXRlbWluYWlrYVtdXG4gICAgICAgICAgICBzZXRLdXJhYmV0ZW1pbmFpa2Eoa3VyYWJldGVtaW5haWthZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBoZWxsbyB3b3JsZCFcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0QVBJRGF0YX0+Y2xpY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIHtrdXJhYmV0ZW1pbmFpa2FzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0pIGFzIEZDXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwia3VyYWJldGVtaW5haWthcyIsInNldEt1cmFiZXRlbWluYWlrYSIsImdldEFQSURhdGEiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwia3VyYWJldGVtaW5haWthZGF0YSIsImVycm9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJoMSIsInRpdGxlIiwicCIsImJvZHkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();