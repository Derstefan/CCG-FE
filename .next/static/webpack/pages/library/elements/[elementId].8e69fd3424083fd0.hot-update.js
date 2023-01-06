"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/library/elements/[elementId]",{

/***/ "./src/components/Library/Element-portfolio.tsx":
/*!******************************************************!*\
  !*** ./src/components/Library/Element-portfolio.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _service_rule_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/rule-library.service */ \"./src/service/rule-library.service.ts\");\n/* harmony import */ var _Card_ElementView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card/ElementView */ \"./src/components/Card/ElementView.tsx\");\n\n\n\n\n\nclass ElementPortFolio extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            elementPortFolio: undefined\n        };\n    }\n    componentDidMount() {\n        const { elementId  } = this.props;\n        _service_rule_library_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getElementPortfolio(elementId).then((res)=>{\n            this.setState({\n                elementPortFolio: res.data\n            });\n        });\n    }\n    render() {\n        const { elementPortFolio  } = this.state;\n        if (elementPortFolio) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Element \",\n                            elementPortFolio?.element.type.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/library/elements/\" + elementPortFolio?.element.type.name,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_ElementView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            element: elementPortFolio?.element\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Can place over these Elements \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    elementPortFolio?.canPutOverElements.map((element)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/library/elements/\" + element.type.name,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_ElementView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        element: element\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, this),\n                                \" \"\n                            ]\n                        }, void 0, true);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Rules\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    elementPortFolio?.rules.map((rule)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: \"over \"\n                                }, void 0, false),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    replace: true,\n                                    href: \"/library/elements/\" + rule.beforeElement.type.name,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_ElementView__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        element: rule.beforeElement\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: \" when \"\n                                }, void 0, false),\n                                rule.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 28\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Entwicklung\\\\Cardganes\\\\CCG\\\\repos\\\\CCG-FE\\\\src\\\\components\\\\Library\\\\Element-portfolio.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, this);\n        }\n        return \"no Element found\";\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ElementPortFolio);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaWJyYXJ5L0VsZW1lbnQtcG9ydGZvbGlvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNEO0FBSTRCO0FBQ3RCO0FBYzlDLE1BQU1LLHlCQUF5QkgsNENBQVNBO0lBRXBDSSxZQUFZQyxLQUEyQixDQUFDO1FBQ3BDLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNDLEtBQUssR0FBQztZQUNQQyxrQkFBaUJDO1FBQ3JCO0lBR0o7SUFFQUMsb0JBQW9CO1FBQ2hCLE1BQU0sRUFBQ0MsVUFBUyxFQUFDLEdBQUcsSUFBSSxDQUFDTCxLQUFLO1FBQzlCSix5RkFBc0MsQ0FBQ1MsV0FBV0UsSUFBSSxDQUFDLENBQUNDLE1BQVE7WUFDNUQsSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0JBQUNQLGtCQUFpQk0sSUFBSUUsSUFBSTtZQUFBO1FBQzVDO0lBQ0o7SUFJQUMsU0FBUztRQUNMLE1BQU0sRUFBQ1QsaUJBQWdCLEVBQUMsR0FBRyxJQUFJLENBQUNELEtBQUs7UUFDckMsSUFBR0Msa0JBQWlCO1lBQ2hCLHFCQUNJLDhEQUFDVTtnQkFBSUMsT0FBTztvQkFBQ0MsV0FBVTtnQkFBUTs7a0NBQzNCLDhEQUFDQzs7NEJBQUc7NEJBQVNiLGtCQUFrQmMsUUFBUUMsSUFBSSxDQUFDQyxXQUFXOzs7Ozs7O2tDQUN2RCw4REFBQ3pCLDhEQUFJQTt3QkFBQzBCLE1BQU0sdUJBQXFCakIsa0JBQWtCYyxRQUFRQyxJQUFJLENBQUNHLElBQUk7a0NBQ3hFLDRFQUFDdkIseURBQVdBOzRCQUFDbUIsU0FBU2Qsa0JBQWtCYzs7Ozs7Ozs7Ozs7a0NBRXhDLDhEQUFDSztrQ0FBRTs7Ozs7O29CQUVGbkIsa0JBQWtCb0IsbUJBQW1CQyxHQUFHLENBQUMsQ0FBQ1AsVUFBa0I7d0JBQ3pELHFCQUFPOzs4Q0FDUCw4REFBQ3ZCLDhEQUFJQTtvQ0FBQzBCLE1BQU0sdUJBQXFCSCxRQUFRQyxJQUFJLENBQUNHLElBQUk7OENBQzlDLDRFQUFDdkIseURBQVdBO3dDQUFDbUIsU0FBU0E7Ozs7Ozs7Ozs7O2dDQUV6Qjs7O29CQUVMO2tDQUVBLDhEQUFDSztrQ0FBRTs7Ozs7O29CQUNGbkIsa0JBQWtCc0IsTUFBTUQsR0FBRyxDQUFDLENBQUNFLE9BQVk7d0JBQ3RDLHFCQUFPLDhEQUFDYjs7OENBQ0o7OENBQUU7OzhDQUNGLDhEQUFDbkIsOERBQUlBO29DQUFDaUMsU0FBUyxJQUFJO29DQUFFUCxNQUFNLHVCQUFxQk0sS0FBS0UsYUFBYSxDQUFDVixJQUFJLENBQUNHLElBQUk7OENBQ3hFLDRFQUFDdkIseURBQVdBO3dDQUFDbUIsU0FBU1MsS0FBS0UsYUFBYTs7Ozs7Ozs7Ozs7OENBRTVDOzhDQUFFOztnQ0FBVUYsS0FBS1AsV0FBVzs7Ozs7OztvQkFJcEM7Ozs7Ozs7UUFFUixDQUFDO1FBQ0QsT0FBTztJQUNYO0FBQ0o7QUFFQSwrREFBZXBCLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MaWJyYXJ5L0VsZW1lbnQtcG9ydGZvbGlvLnRzeD8yNTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvZGlzdC9jbGllbnQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVsZW1lbnRQb3J0Rm9saW9EVE8gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9EVE8vRWxlbWVudFBvcnRGb2xpb0RUTyc7XHJcbmltcG9ydCBFbGVtZW50IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvRWxlbWVudCc7XHJcbmltcG9ydCBSdWxlIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvUnVsZSc7XHJcbmltcG9ydCBydWxlTGlicmFyeVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9ydWxlLWxpYnJhcnkuc2VydmljZSc7XHJcbmltcG9ydCBFbGVtZW50VmlldyBmcm9tICcuLi9DYXJkL0VsZW1lbnRWaWV3JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBFbGVtZW50UG9ydEZvbGlvUHJvcHMge1xyXG4gICAgZWxlbWVudElkOnN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRWxlbWVudFBvcnRGb2xpb1N0YXRlIHtcclxuICAgIGVsZW1lbnRQb3J0Rm9saW8/OkVsZW1lbnRQb3J0Rm9saW9EVE87XHJcbn1cclxuXHJcbmNsYXNzIEVsZW1lbnRQb3J0Rm9saW8gZXh0ZW5kcyBDb21wb25lbnQ8RWxlbWVudFBvcnRGb2xpb1Byb3BzLCBFbGVtZW50UG9ydEZvbGlvU3RhdGU+ICB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6RWxlbWVudFBvcnRGb2xpb1Byb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIGVsZW1lbnRQb3J0Rm9saW86dW5kZWZpbmVkLFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qge2VsZW1lbnRJZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJ1bGVMaWJyYXJ5U2VydmljZS5nZXRFbGVtZW50UG9ydGZvbGlvKGVsZW1lbnRJZCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VsZW1lbnRQb3J0Rm9saW86cmVzLmRhdGF9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZWxlbWVudFBvcnRGb2xpb30gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGlmKGVsZW1lbnRQb3J0Rm9saW8pe1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPkVsZW1lbnQge2VsZW1lbnRQb3J0Rm9saW8/LmVsZW1lbnQudHlwZS5kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbGlicmFyeS9lbGVtZW50cy8nK2VsZW1lbnRQb3J0Rm9saW8/LmVsZW1lbnQudHlwZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxFbGVtZW50VmlldyBlbGVtZW50PXtlbGVtZW50UG9ydEZvbGlvPy5lbGVtZW50fT48L0VsZW1lbnRWaWV3PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2FuIHBsYWNlIG92ZXIgdGhlc2UgRWxlbWVudHMgPC9wPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ZWxlbWVudFBvcnRGb2xpbz8uY2FuUHV0T3ZlckVsZW1lbnRzLm1hcCgoZWxlbWVudDpFbGVtZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbGlicmFyeS9lbGVtZW50cy8nK2VsZW1lbnQudHlwZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVsZW1lbnRWaWV3IGVsZW1lbnQ9e2VsZW1lbnR9PjwvRWxlbWVudFZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8cD5SdWxlczwvcD5cclxuICAgICAgICAgICAgICAgIHtlbGVtZW50UG9ydEZvbGlvPy5ydWxlcy5tYXAoKHJ1bGU6UnVsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5vdmVyIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayByZXBsYWNlPXt0cnVlfSBocmVmPXsnL2xpYnJhcnkvZWxlbWVudHMvJytydWxlLmJlZm9yZUVsZW1lbnQudHlwZS5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGVtZW50VmlldyBlbGVtZW50PXtydWxlLmJlZm9yZUVsZW1lbnR9PjwvRWxlbWVudFZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPD4gd2hlbiA8Lz57cnVsZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2Pik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIm5vIEVsZW1lbnQgZm91bmRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudFBvcnRGb2xpbztcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJ1bGVMaWJyYXJ5U2VydmljZSIsIkVsZW1lbnRWaWV3IiwiRWxlbWVudFBvcnRGb2xpbyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImVsZW1lbnRQb3J0Rm9saW8iLCJ1bmRlZmluZWQiLCJjb21wb25lbnREaWRNb3VudCIsImVsZW1lbnRJZCIsImdldEVsZW1lbnRQb3J0Zm9saW8iLCJ0aGVuIiwicmVzIiwic2V0U3RhdGUiLCJkYXRhIiwicmVuZGVyIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJoMiIsImVsZW1lbnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJocmVmIiwibmFtZSIsInAiLCJjYW5QdXRPdmVyRWxlbWVudHMiLCJtYXAiLCJydWxlcyIsInJ1bGUiLCJyZXBsYWNlIiwiYmVmb3JlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Library/Element-portfolio.tsx\n"));

/***/ })

});