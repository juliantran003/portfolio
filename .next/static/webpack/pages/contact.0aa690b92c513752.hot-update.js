"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contact; }\n/* harmony export */ });\n/* harmony import */ var _Users_juliantran_Desktop_Developer_Personal_Developer_portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_juliantran_Desktop_Developer_Personal_Developer_portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_juliantran_Desktop_Developer_Personal_Developer_portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n// Packages\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Contact() {\n    _s();\n    // Function to send email\n    var submitHandle = function() {\n        var _ref = _asyncToGenerator(_Users_juliantran_Desktop_Developer_Personal_Developer_portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_juliantran_Desktop_Developer_Personal_Developer_portfolio_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setIsLoading(true);\n                        try {\n                            fetch(\"https://julian-portfolio-backend.herokuapp.com/mail/contact\", {\n                                email: email,\n                                subject: subject,\n                                name: name,\n                                text: message\n                            });\n                            setIsLoading(false);\n                        } catch (error) {}\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitHandle() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // States\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), subject = ref1[0], setSubject = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), message = ref2[0], setMessage = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), email = ref3[0], setEmail = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref4[0], setIsLoading = ref4[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        className: \"contact\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"section-header\",\n                \"data-aos\": \"fade-down\",\n                children: [\n                    \"Contact Form\",\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                action: \"\",\n                className: \"contact__form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"contact__user\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                \"data-aos\": \"fade-right\",\n                                \"data-aos-delay\": 0,\n                                children: [\n                                    \"Email\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        value: email,\n                                        onChange: function(e) {\n                                            return setEmail(e.target.value);\n                                        },\n                                        tabIndex: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                \"data-aos\": \"fade-right\",\n                                \"data-aos-delay\": 50,\n                                children: [\n                                    \"Name\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: name,\n                                        onChange: function(e) {\n                                            return setName(e.target.value);\n                                        },\n                                        tabIndex: \"2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"subject\",\n                                \"data-aos\": \"fade-right\",\n                                \"data-aos-delay\": 100,\n                                children: [\n                                    \"Subject\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: subject,\n                                        onChange: function(e) {\n                                            return setSubject(e.target.value);\n                                        },\n                                        tabIndex: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"contact__message\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                \"data-aos\": \"fade-left\",\n                                \"data-aos-delay\": 50,\n                                children: [\n                                    \"Your Message\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                        type: \"text\",\n                                        value: message,\n                                        onChange: function(e) {\n                                            return setMessage(e.target.value);\n                                        },\n                                        tabIndex: \"4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                className: \"contact__btn\",\n                tabIndex: \"5\",\n                \"data-aos\": \"fade-up\",\n                \"data-aos-delay\": 100,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juliantran/Desktop/Developer/Personal/Developer/portfolio/pages/contact.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this));\n};\n_s(Contact, \"UNcdZcL+2sdTPmc4MBrtSdloPR8=\");\n_c = Contact;\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSzt3Q0FDSkMsSUFBSSxFQUFDLENBQU07d0NBQ1hDLEtBQUssRUFBRXRCLE9BQU87d0NBQ2R1QixRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRDQUFLbEIsTUFBTSxDQUFOQSxVQUFVLENBQUNrQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7d0NBQzFDSSxRQUFRLEVBQUMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUlqQlYsQ0FBRzt3QkFBQ0wsU0FBUyxFQUFDLENBQWtCOzs0QkFDOUIsQ0FBRzt3R0FDSE0sQ0FBSztnQ0FBQ0MsT0FBTyxFQUFDLENBQVM7Z0NBQUNMLENBQVEsV0FBQyxDQUFXO2dDQUFDTSxDQUFjLGlCQUFFLEVBQUU7O29DQUFFLENBRWhFO2dIQUFDUSxDQUFRO3dDQUNQTixJQUFJLEVBQUMsQ0FBTTt3Q0FDWEMsS0FBSyxFQUFFbkIsT0FBTzt3Q0FDZG9CLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7NENBQUtqQixNQUFNLENBQU5BLFVBQVUsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzt3Q0FDMUNJLFFBQVEsRUFBQyxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBS25CRSxDQUFNO2dCQUNMakIsU0FBUyxFQUFDLENBQWM7Z0JBQ3hCZSxRQUFRLEVBQUMsQ0FBRztnQkFDWmIsQ0FBUSxXQUFDLENBQVM7Z0JBQ2xCTSxDQUFjLGlCQUFFLEdBQUc7MEJBQ3BCLENBRUQ7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0F6RnVCeEIsT0FBTztLQUFQQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbnRhY3QuanM/NGU3MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYWNrYWdlc1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgLy8gRnVuY3Rpb24gdG8gc2VuZCBlbWFpbFxuICBjb25zdCBzdWJtaXRIYW5kbGUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBmZXRjaChcImh0dHBzOi8vanVsaWFuLXBvcnRmb2xpby1iYWNrZW5kLmhlcm9rdWFwcC5jb20vbWFpbC9jb250YWN0XCIsIHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB0ZXh0OiBtZXNzYWdlLFxuICAgICAgfSk7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9O1xuXG4gIC8vIFN0YXRlc1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3ViamVjdCwgc2V0U3ViamVjdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdFwiPlxuICAgICAgey8qIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiPkNvbnRhY3QgPC9oMT5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RfX2RldGFpbHNcIj5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIEVtYWlsIDp7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpqdWxpYW50cmFuMDAzQGdtYWlsLmNvbVwiPmp1bGlhbnRyYW4wMDNAZ21haWwuY29tPC9hPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgUGhvbmUgOiA8YSBocmVmPVwidGVsOis0NDc4MjExOTcyMzFcIj4rNDQ3ODIxMTk3MjMxPC9hPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9zZWN0aW9uPiAqL31cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlclwiIGRhdGEtYW9zPVwiZmFkZS1kb3duXCI+XG4gICAgICAgIENvbnRhY3QgRm9ybXtcIiBcIn1cbiAgICAgIDwvaDE+XG4gICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJjb250YWN0X19mb3JtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fdXNlclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIiBkYXRhLWFvcy1kZWxheT17MH0+XG4gICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHRhYkluZGV4PVwiMVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgZGF0YS1hb3MtZGVsYXk9ezUwfT5cbiAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB0YWJJbmRleD1cIjJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3ViamVjdFwiIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWRlbGF5PXsxMDB9PlxuICAgICAgICAgICAgU3ViamVjdFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3N1YmplY3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHRhYkluZGV4PVwiM1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX21lc3NhZ2VcIj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCIgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIiBkYXRhLWFvcy1kZWxheT17NTB9PlxuICAgICAgICAgICAgWW91ciBNZXNzYWdlXG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9XCI0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3RfX2J0blwiXG4gICAgICAgIHRhYkluZGV4PVwiNVwiXG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgIGRhdGEtYW9zLWRlbGF5PXsxMDB9XG4gICAgICA+XG4gICAgICAgIFNlbmRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbnRhY3QiLCJzdWJtaXRIYW5kbGUiLCJzZXRJc0xvYWRpbmciLCJmZXRjaCIsImVtYWlsIiwic3ViamVjdCIsIm5hbWUiLCJ0ZXh0IiwibWVzc2FnZSIsImVycm9yIiwic2V0TmFtZSIsInNldFN1YmplY3QiLCJzZXRNZXNzYWdlIiwic2V0RW1haWwiLCJpc0xvYWRpbmciLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJkYXRhLWFvcyIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJkYXRhLWFvcy1kZWxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGFiSW5kZXgiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

});