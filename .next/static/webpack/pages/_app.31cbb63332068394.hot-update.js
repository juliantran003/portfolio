"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/global.css":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/global.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Fonts */\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap\\\");\\n\\n:root {\\n  --clr--primary: #001f3f;\\n\\n  --clr--secondary: #39cccc;\\n  --ff--primary: \\\"Sora\\\", sans-serif;\\n  --clr--txt--primary: white;\\n  --clr--txt--secondary: #39cccc;\\n  --clr--txt-tertiary: rgba(211, 211, 211, 0.726);\\n}\\n\\nbody {\\n  background: linear-gradient(110deg, var(--clr--primary) 58%, #001a33 58%);\\n  background-color: var(--clr--primary);\\n  font-family: var(--ff--primary);\\n  color: var(--clr--txt--primary);\\n  padding: 2% 3%;\\n}\\n\\n/* General */\\n\\n.btn-classic {\\n  background: none;\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--secondary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  transition: ease, 0.2s;\\n}\\n\\n.btn-classic:hover {\\n  background: var(--clr--secondary);\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--primary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n}\\n\\n/* Header */\\n\\n.header {\\n  width: 100%;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-weight: 200;\\n  height: 5vh;\\n  font-size: 18px;\\n}\\n\\n.header a {\\n  color: var(--clr--txt--secondary);\\n  text-decoration: none;\\n}\\n\\n.header__menu a {\\n  margin-left: 30px;\\n  color: var(--clr--txt--primary);\\n  transition: ease-in-out, 0.1s;\\n}\\n\\n.header__menu a:hover {\\n  color: var(--clr--txt--secondary);\\n}\\n\\n/* Socials */\\n\\n.socials {\\n  color: var(--clr--secondary);\\n  position: fixed;\\n  bottom: 10%;\\n  left: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.socials::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 100%;\\n}\\n\\n.socials i {\\n  position: relative;\\n  top: 0;\\n  font-size: 28px;\\n  margin-bottom: 20px;\\n  cursor: pointer;\\n  transition: ease-in-out, 0.15s;\\n}\\n\\n.socials i:hover {\\n  top: -5px;\\n}\\n\\n/* Email */\\n\\n.email {\\n  -ms-writing-mode: tb-rl;\\n      writing-mode: vertical-rl;\\n  text-orientation: mixed;\\n  position: fixed;\\n  bottom: 10%;\\n  right: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.email a {\\n  position: relative;\\n  top: 0;\\n  color: var(--clr--secondary);\\n  text-decoration: none;\\n  font-size: 14px;\\n  transition: ease-in-out, 0.15s;\\n  font-weight: 200;\\n}\\n\\n.email a:hover {\\n  top: -5px;\\n}\\n\\n.email::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 110%;\\n}\\n\\n/* Burger Menu */\\n\\n.burgerMenu {\\n  display: none;\\n  position: fixed;\\n  top: 3%;\\n  right: 5%;\\n}\\n\\n.burgerMenu i {\\n  font-size: 28px;\\n}\\n\\n.burgerMenu__menu__hidden {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  position: fixed;\\n}\\n\\n/* Home */\\n\\n.home {\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0%7%;\\n}\\n\\n.home__hello {\\n  width: 70%;\\n}\\n\\n.home__hello h1 {\\n  font-size: 18px;\\n  font-weight: 200;\\n  color: var(--clr--txt-tertiary);\\n}\\n\\n.home__hello h2 {\\n  font-size: 64px;\\n  font-weight: 400;\\n}\\n\\n.home__hello h3 {\\n  color: var(--clr--txt--secondary);\\n  font-size: 28px;\\n  font-weight: 400;\\n}\\n\\n.home__hello p {\\n  margin-top: 10px;\\n  margin-bottom: 20px;\\n  color: var(--clr--txt-tertiary);\\n  font-size: 18px;\\n  font-weight: 200;\\n}\\n\\n.home__hello span {\\n  color: var(--clr--txt--primary);\\n}\\n\\n.home__profile {\\n  padding: 2%;\\n  width: 30%;\\n}\\n.home__profile__img {\\n  border-radius: 50%;\\n}\\n\\n/* Responsive */\\n\\n@media (max-width: 1024px) {\\n  .header {\\n    display: none;\\n  }\\n  .home {\\n    height: 100vh;\\n    padding: 5%0%;\\n  }\\n  .home__hello h1 {\\n    font-size: 14px;\\n    font-weight: 200;\\n    color: var(--clr--txt-tertiary);\\n  }\\n\\n  .home__hello h2 {\\n    font-size: 38px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello h3 {\\n    color: var(--clr--txt--secondary);\\n    font-size: 20px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello p {\\n    margin-top: 10px;\\n    margin-bottom: 20px;\\n    color: var(--clr--txt-tertiary);\\n    font-size: 14px;\\n    font-weight: 200;\\n  }\\n  .socials {\\n    display: none;\\n  }\\n  .email {\\n    display: none;\\n  }\\n  .burgerMenu {\\n    display: block;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"/* Fonts */\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap\\\");\\n\\n:root {\\n  --clr--primary: #001f3f;\\n\\n  --clr--secondary: #39cccc;\\n  --ff--primary: \\\"Sora\\\", sans-serif;\\n  --clr--txt--primary: white;\\n  --clr--txt--secondary: #39cccc;\\n  --clr--txt-tertiary: rgba(211, 211, 211, 0.726);\\n}\\n\\nbody {\\n  background: linear-gradient(110deg, var(--clr--primary) 58%, #001a33 58%);\\n  background-color: var(--clr--primary);\\n  font-family: var(--ff--primary);\\n  color: var(--clr--txt--primary);\\n  padding: 2% 3%;\\n}\\n\\n/* General */\\n\\n.btn-classic {\\n  background: none;\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--secondary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  transition: ease, 0.2s;\\n}\\n\\n.btn-classic:hover {\\n  background: var(--clr--secondary);\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--primary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n}\\n\\n/* Header */\\n\\n.header {\\n  width: 100%;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-weight: 200;\\n  height: 5vh;\\n  font-size: 18px;\\n}\\n\\n.header a {\\n  color: var(--clr--txt--secondary);\\n  text-decoration: none;\\n}\\n\\n.header__menu a {\\n  margin-left: 30px;\\n  color: var(--clr--txt--primary);\\n  transition: ease-in-out, 0.1s;\\n}\\n\\n.header__menu a:hover {\\n  color: var(--clr--txt--secondary);\\n}\\n\\n/* Socials */\\n\\n.socials {\\n  color: var(--clr--secondary);\\n  position: fixed;\\n  bottom: 10%;\\n  left: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.socials::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 100%;\\n}\\n\\n.socials i {\\n  position: relative;\\n  top: 0;\\n  font-size: 28px;\\n  margin-bottom: 20px;\\n  cursor: pointer;\\n  transition: ease-in-out, 0.15s;\\n}\\n\\n.socials i:hover {\\n  top: -5px;\\n}\\n\\n/* Email */\\n\\n.email {\\n  writing-mode: vertical-rl;\\n  text-orientation: mixed;\\n  position: fixed;\\n  bottom: 10%;\\n  right: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.email a {\\n  position: relative;\\n  top: 0;\\n  color: var(--clr--secondary);\\n  text-decoration: none;\\n  font-size: 14px;\\n  transition: ease-in-out, 0.15s;\\n  font-weight: 200;\\n}\\n\\n.email a:hover {\\n  top: -5px;\\n}\\n\\n.email::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 110%;\\n}\\n\\n/* Burger Menu */\\n\\n.burgerMenu {\\n  display: none;\\n  position: fixed;\\n  top: 3%;\\n  right: 5%;\\n}\\n\\n.burgerMenu i {\\n  font-size: 28px;\\n}\\n\\n.burgerMenu__menu__hidden {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  position: fixed;\\n}\\n\\n/* Home */\\n\\n.home {\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0%7%;\\n}\\n\\n.home__hello {\\n  width: 70%;\\n}\\n\\n.home__hello h1 {\\n  font-size: 18px;\\n  font-weight: 200;\\n  color: var(--clr--txt-tertiary);\\n}\\n\\n.home__hello h2 {\\n  font-size: 64px;\\n  font-weight: 400;\\n}\\n\\n.home__hello h3 {\\n  color: var(--clr--txt--secondary);\\n  font-size: 28px;\\n  font-weight: 400;\\n}\\n\\n.home__hello p {\\n  margin-top: 10px;\\n  margin-bottom: 20px;\\n  color: var(--clr--txt-tertiary);\\n  font-size: 18px;\\n  font-weight: 200;\\n}\\n\\n.home__hello span {\\n  color: var(--clr--txt--primary);\\n}\\n\\n.home__profile {\\n  padding: 2%;\\n  width: 30%;\\n}\\n.home__profile__img {\\n  border-radius: 50%;\\n}\\n\\n/* Responsive */\\n\\n@media (max-width: 1024px) {\\n  .header {\\n    display: none;\\n  }\\n  .home {\\n    height: 100vh;\\n    padding: 5%0%;\\n  }\\n  .home__hello h1 {\\n    font-size: 14px;\\n    font-weight: 200;\\n    color: var(--clr--txt-tertiary);\\n  }\\n\\n  .home__hello h2 {\\n    font-size: 38px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello h3 {\\n    color: var(--clr--txt--secondary);\\n    font-size: 20px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello p {\\n    margin-top: 10px;\\n    margin-bottom: 20px;\\n    color: var(--clr--txt-tertiary);\\n    font-size: 14px;\\n    font-weight: 200;\\n  }\\n  .socials {\\n    display: none;\\n  }\\n  .email {\\n    display: none;\\n  }\\n  .burgerMenu {\\n    display: block;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDRIQUE0SCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxvQkFBb0IsV0FBVyw0QkFBNEIsZ0NBQWdDLHdDQUF3QywrQkFBK0IsbUNBQW1DLG9EQUFvRCxHQUFHLFVBQVUsOEVBQThFLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLG1CQUFtQixHQUFHLG1DQUFtQyxxQkFBcUIsNENBQTRDLGlDQUFpQyx1QkFBdUIscUJBQXFCLHVCQUF1QixvQkFBb0IsMkJBQTJCLEdBQUcsd0JBQXdCLHNDQUFzQyw0Q0FBNEMsK0JBQStCLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsNkJBQTZCLGdCQUFnQixtQkFBbUIsc0JBQXNCLGtCQUFrQixtQ0FBbUMscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLHNDQUFzQywwQkFBMEIsR0FBRyxxQkFBcUIsc0JBQXNCLG9DQUFvQyxrQ0FBa0MsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsK0JBQStCLGlDQUFpQyxvQkFBb0IsZ0JBQWdCLGFBQWEsa0JBQWtCLDJCQUEyQixHQUFHLHNCQUFzQiw0Q0FBNEMsdUJBQXVCLGtCQUFrQixlQUFlLGtCQUFrQixjQUFjLGNBQWMsR0FBRyxnQkFBZ0IsdUJBQXVCLFdBQVcsb0JBQW9CLHdCQUF3QixvQkFBb0IsbUNBQW1DLEdBQUcsc0JBQXNCLGNBQWMsR0FBRywyQkFBMkIsNEJBQTRCLGtDQUFrQyw0QkFBNEIsb0JBQW9CLGdCQUFnQixjQUFjLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLHVCQUF1QixXQUFXLGlDQUFpQywwQkFBMEIsb0JBQW9CLG1DQUFtQyxxQkFBcUIsR0FBRyxvQkFBb0IsY0FBYyxHQUFHLG9CQUFvQiw0Q0FBNEMsdUJBQXVCLGtCQUFrQixlQUFlLGtCQUFrQixjQUFjLGNBQWMsR0FBRyxzQ0FBc0Msa0JBQWtCLG9CQUFvQixZQUFZLGNBQWMsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsMEJBQTBCLG9CQUFvQixHQUFHLHlCQUF5QixnQkFBZ0IsaUJBQWlCLG1CQUFtQixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsa0JBQWtCLGVBQWUsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQixvQ0FBb0MsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQixHQUFHLHFCQUFxQixzQ0FBc0Msb0JBQW9CLHFCQUFxQixHQUFHLG9CQUFvQixxQkFBcUIsd0JBQXdCLG9DQUFvQyxvQkFBb0IscUJBQXFCLEdBQUcsdUJBQXVCLG9DQUFvQyxHQUFHLG9CQUFvQixnQkFBZ0IsZUFBZSxHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxvREFBb0QsYUFBYSxvQkFBb0IsS0FBSyxXQUFXLG9CQUFvQixvQkFBb0IsS0FBSyxxQkFBcUIsc0JBQXNCLHVCQUF1QixzQ0FBc0MsS0FBSyx1QkFBdUIsc0JBQXNCLHVCQUF1QixLQUFLLHVCQUF1Qix3Q0FBd0Msc0JBQXNCLHVCQUF1QixLQUFLLHNCQUFzQix1QkFBdUIsMEJBQTBCLHNDQUFzQyxzQkFBc0IsdUJBQXVCLEtBQUssY0FBYyxvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQixLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxHQUFHLFNBQVMsdUZBQXVGLGFBQWEsTUFBTSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLDJHQUEyRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxvQkFBb0IsV0FBVyw0QkFBNEIsZ0NBQWdDLHdDQUF3QywrQkFBK0IsbUNBQW1DLG9EQUFvRCxHQUFHLFVBQVUsOEVBQThFLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLG1CQUFtQixHQUFHLG1DQUFtQyxxQkFBcUIsNENBQTRDLGlDQUFpQyx1QkFBdUIscUJBQXFCLHVCQUF1QixvQkFBb0IsMkJBQTJCLEdBQUcsd0JBQXdCLHNDQUFzQyw0Q0FBNEMsK0JBQStCLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsNkJBQTZCLGdCQUFnQixtQkFBbUIsc0JBQXNCLGtCQUFrQixtQ0FBbUMscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLHNDQUFzQywwQkFBMEIsR0FBRyxxQkFBcUIsc0JBQXNCLG9DQUFvQyxrQ0FBa0MsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsK0JBQStCLGlDQUFpQyxvQkFBb0IsZ0JBQWdCLGFBQWEsa0JBQWtCLDJCQUEyQixHQUFHLHNCQUFzQiw0Q0FBNEMsdUJBQXVCLGtCQUFrQixlQUFlLGtCQUFrQixjQUFjLGNBQWMsR0FBRyxnQkFBZ0IsdUJBQXVCLFdBQVcsb0JBQW9CLHdCQUF3QixvQkFBb0IsbUNBQW1DLEdBQUcsc0JBQXNCLGNBQWMsR0FBRywyQkFBMkIsOEJBQThCLDRCQUE0QixvQkFBb0IsZ0JBQWdCLGNBQWMsa0JBQWtCLDJCQUEyQixHQUFHLGNBQWMsdUJBQXVCLFdBQVcsaUNBQWlDLDBCQUEwQixvQkFBb0IsbUNBQW1DLHFCQUFxQixHQUFHLG9CQUFvQixjQUFjLEdBQUcsb0JBQW9CLDRDQUE0Qyx1QkFBdUIsa0JBQWtCLGVBQWUsa0JBQWtCLGNBQWMsY0FBYyxHQUFHLHNDQUFzQyxrQkFBa0Isb0JBQW9CLFlBQVksY0FBYyxHQUFHLG1CQUFtQixvQkFBb0IsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQiwwQkFBMEIsb0JBQW9CLEdBQUcseUJBQXlCLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsR0FBRyxrQkFBa0IsZUFBZSxHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLG9DQUFvQyxHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcscUJBQXFCLHNDQUFzQyxvQkFBb0IscUJBQXFCLEdBQUcsb0JBQW9CLHFCQUFxQix3QkFBd0Isb0NBQW9DLG9CQUFvQixxQkFBcUIsR0FBRyx1QkFBdUIsb0NBQW9DLEdBQUcsb0JBQW9CLGdCQUFnQixlQUFlLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLG9EQUFvRCxhQUFhLG9CQUFvQixLQUFLLFdBQVcsb0JBQW9CLG9CQUFvQixLQUFLLHFCQUFxQixzQkFBc0IsdUJBQXVCLHNDQUFzQyxLQUFLLHVCQUF1QixzQkFBc0IsdUJBQXVCLEtBQUssdUJBQXVCLHdDQUF3QyxzQkFBc0IsdUJBQXVCLEtBQUssc0JBQXNCLHVCQUF1QiwwQkFBMEIsc0NBQXNDLHNCQUFzQix1QkFBdUIsS0FBSyxjQUFjLG9CQUFvQixLQUFLLFlBQVksb0JBQW9CLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLEdBQUcscUJBQXFCO0FBQ3AyVjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzP2RmZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZvbnRzICovXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U29yYTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1jbHItLXByaW1hcnk6ICMwMDFmM2Y7XFxuXFxuICAtLWNsci0tc2Vjb25kYXJ5OiAjMzljY2NjO1xcbiAgLS1mZi0tcHJpbWFyeTogXFxcIlNvcmFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1jbHItLXR4dC0tcHJpbWFyeTogd2hpdGU7XFxuICAtLWNsci0tdHh0LS1zZWNvbmRhcnk6ICMzOWNjY2M7XFxuICAtLWNsci0tdHh0LXRlcnRpYXJ5OiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNzI2KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCB2YXIoLS1jbHItLXByaW1hcnkpIDU4JSwgIzAwMWEzMyA1OCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLS1wcmltYXJ5KTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXByaW1hcnkpO1xcbiAgcGFkZGluZzogMiUgMyU7XFxufVxcblxcbi8qIEdlbmVyYWwgKi9cXG5cXG4uYnRuLWNsYXNzaWMge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogZWFzZSwgMC4ycztcXG59XFxuXFxuLmJ0bi1jbGFzc2ljOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXByaW1hcnkpO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGhlaWdodDogNXZoO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaGVhZGVyIGEge1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1zZWNvbmRhcnkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyX19tZW51IGEge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQsIDAuMXM7XFxufVxcblxcbi5oZWFkZXJfX21lbnUgYTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIFNvY2lhbHMgKi9cXG5cXG4uc29jaWFscyB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMCU7XFxuICBsZWZ0OiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc29jaWFsczo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBsZWZ0OiA0OSU7XFxuICB0b3A6IDEwMCU7XFxufVxcblxcbi5zb2NpYWxzIGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0LCAwLjE1cztcXG59XFxuXFxuLnNvY2lhbHMgaTpob3ZlciB7XFxuICB0b3A6IC01cHg7XFxufVxcblxcbi8qIEVtYWlsICovXFxuXFxuLmVtYWlsIHtcXG4gIC1tcy13cml0aW5nLW1vZGU6IHRiLXJsO1xcbiAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiBtaXhlZDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTAlO1xcbiAgcmlnaHQ6IDQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lbWFpbCBhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCwgMC4xNXM7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uZW1haWwgYTpob3ZlciB7XFxuICB0b3A6IC01cHg7XFxufVxcblxcbi5lbWFpbDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBsZWZ0OiA0OSU7XFxuICB0b3A6IDExMCU7XFxufVxcblxcbi8qIEJ1cmdlciBNZW51ICovXFxuXFxuLmJ1cmdlck1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMyU7XFxuICByaWdodDogNSU7XFxufVxcblxcbi5idXJnZXJNZW51IGkge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4uYnVyZ2VyTWVudV9fbWVudV9faGlkZGVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4vKiBIb21lICovXFxuXFxuLmhvbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAlNyU7XFxufVxcblxcbi5ob21lX19oZWxsbyB7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gaDEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC10ZXJ0aWFyeSk7XFxufVxcblxcbi5ob21lX19oZWxsbyBoMiB7XFxuICBmb250LXNpemU6IDY0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gaDMge1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1zZWNvbmRhcnkpO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIHAge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtdGVydGlhcnkpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1wcmltYXJ5KTtcXG59XFxuXFxuLmhvbWVfX3Byb2ZpbGUge1xcbiAgcGFkZGluZzogMiU7XFxuICB3aWR0aDogMzAlO1xcbn1cXG4uaG9tZV9fcHJvZmlsZV9faW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLyogUmVzcG9uc2l2ZSAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhvbWUge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiA1JTAlO1xcbiAgfVxcbiAgLmhvbWVfX2hlbGxvIGgxIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLS10eHQtdGVydGlhcnkpO1xcbiAgfVxcblxcbiAgLmhvbWVfX2hlbGxvIGgyIHtcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcblxcbiAgLmhvbWVfX2hlbGxvIGgzIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1zZWNvbmRhcnkpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICAuaG9tZV9faGVsbG8gcCB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItLXR4dC10ZXJ0aWFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIH1cXG4gIC5zb2NpYWxzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5lbWFpbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuYnVyZ2VyTWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTtBQUNWLDhHQUE4Rzs7QUFFOUc7RUFDRSx1QkFBdUI7O0VBRXZCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSx5RUFBeUU7RUFDekUscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsY0FBYztBQUNoQjs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2Qyw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQSxZQUFZOztBQUVaO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxVQUFVOztBQUVWO0VBQ0UsdUJBQXlCO01BQXpCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IsU0FBUztFQUNULFNBQVM7QUFDWDs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udHMgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3JhOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWNsci0tcHJpbWFyeTogIzAwMWYzZjtcXG5cXG4gIC0tY2xyLS1zZWNvbmRhcnk6ICMzOWNjY2M7XFxuICAtLWZmLS1wcmltYXJ5OiBcXFwiU29yYVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWNsci0tdHh0LS1wcmltYXJ5OiB3aGl0ZTtcXG4gIC0tY2xyLS10eHQtLXNlY29uZGFyeTogIzM5Y2NjYztcXG4gIC0tY2xyLS10eHQtdGVydGlhcnk6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC43MjYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHZhcigtLWNsci0tcHJpbWFyeSkgNTglLCAjMDAxYTMzIDU4JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItLXByaW1hcnkpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLS1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAyJSAzJTtcXG59XFxuXFxuLyogR2VuZXJhbCAqL1xcblxcbi5idG4tY2xhc3NpYyB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBlYXNlLCAwLjJzO1xcbn1cXG5cXG4uYnRuLWNsYXNzaWM6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5oZWFkZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oZWFkZXJfX21lbnUgYSB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCwgMC4xcztcXG59XFxuXFxuLmhlYWRlcl9fbWVudSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogU29jaWFscyAqL1xcblxcbi5zb2NpYWxzIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwJTtcXG4gIGxlZnQ6IDQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zb2NpYWxzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDQ5JTtcXG4gIHRvcDogMTAwJTtcXG59XFxuXFxuLnNvY2lhbHMgaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQsIDAuMTVzO1xcbn1cXG5cXG4uc29jaWFscyBpOmhvdmVyIHtcXG4gIHRvcDogLTVweDtcXG59XFxuXFxuLyogRW1haWwgKi9cXG5cXG4uZW1haWwge1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXG4gIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMCU7XFxuICByaWdodDogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVtYWlsIGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0LCAwLjE1cztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5lbWFpbCBhOmhvdmVyIHtcXG4gIHRvcDogLTVweDtcXG59XFxuXFxuLmVtYWlsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDQ5JTtcXG4gIHRvcDogMTEwJTtcXG59XFxuXFxuLyogQnVyZ2VyIE1lbnUgKi9cXG5cXG4uYnVyZ2VyTWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzJTtcXG4gIHJpZ2h0OiA1JTtcXG59XFxuXFxuLmJ1cmdlck1lbnUgaSB7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbi5idXJnZXJNZW51X19tZW51X19oaWRkZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uaG9tZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCU3JTtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5ob21lX19oZWxsbyBoMSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LXRlcnRpYXJ5KTtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIGgyIHtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ob21lX19oZWxsbyBoMyB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gcCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC10ZXJ0aWFyeSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXByaW1hcnkpO1xcbn1cXG5cXG4uaG9tZV9fcHJvZmlsZSB7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbi5ob21lX19wcm9maWxlX19pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDUlMCU7XFxuICB9XFxuICAuaG9tZV9faGVsbG8gaDEge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItLXR4dC10ZXJ0aWFyeSk7XFxuICB9XFxuXFxuICAuaG9tZV9faGVsbG8gaDIge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICAuaG9tZV9faGVsbG8gaDMge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIC5ob21lX19oZWxsbyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsci0tdHh0LXRlcnRpYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgfVxcbiAgLnNvY2lhbHMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmVtYWlsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5idXJnZXJNZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/global.css\n");

/***/ })

});