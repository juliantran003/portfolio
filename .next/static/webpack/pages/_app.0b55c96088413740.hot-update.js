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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Fonts */\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap\\\");\\n\\n:root {\\n  --clr--primary: #001f3f;\\n\\n  --clr--secondary: #39cccc;\\n  --ff--primary: \\\"Sora\\\", sans-serif;\\n  --clr--txt--primary: white;\\n  --clr--txt--secondary: #39cccc;\\n  --clr--txt-tertiary: rgba(211, 211, 211, 0.726);\\n}\\n\\nbody {\\n  background: linear-gradient(110deg, var(--clr--primary) 58%, #001a33 58%);\\n  background-color: var(--clr--primary);\\n  font-family: var(--ff--primary);\\n  color: var(--clr--txt--primary);\\n  padding: 2% 3%;\\n}\\n\\n/* General */\\n\\n.btn-classic {\\n  background: none;\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--secondary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  transition: ease, 0.2s;\\n}\\n\\n.btn-classic:hover {\\n  background: var(--clr--secondary);\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--primary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n}\\n\\n/* Header */\\n\\n.header {\\n  width: 100%;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-weight: 200;\\n  height: 5vh;\\n  font-size: 18px;\\n}\\n\\n.header a {\\n  color: var(--clr--txt--secondary);\\n  text-decoration: none;\\n}\\n\\n.header__menu a {\\n  margin-left: 30px;\\n  color: var(--clr--txt--primary);\\n  transition: ease-in-out, 0.1s;\\n}\\n\\n.header__menu a:hover {\\n  color: var(--clr--txt--secondary);\\n}\\n\\n/* Socials */\\n\\n.socials {\\n  color: var(--clr--secondary);\\n  position: fixed;\\n  bottom: 10%;\\n  left: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.socials::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 100%;\\n}\\n\\n.socials i {\\n  position: relative;\\n  top: 0;\\n  font-size: 28px;\\n  margin-bottom: 20px;\\n  cursor: pointer;\\n  transition: ease-in-out, 0.15s;\\n}\\n\\n.socials i:hover {\\n  top: -5px;\\n}\\n\\n/* Email */\\n\\n.email {\\n  -ms-writing-mode: tb-rl;\\n      writing-mode: vertical-rl;\\n  text-orientation: mixed;\\n  position: fixed;\\n  bottom: 10%;\\n  right: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.email a {\\n  position: relative;\\n  top: 0;\\n  color: var(--clr--secondary);\\n  text-decoration: none;\\n  font-size: 14px;\\n  transition: ease-in-out, 0.15s;\\n  font-weight: 200;\\n}\\n\\n.email a:hover {\\n  top: -5px;\\n}\\n\\n.email::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 110%;\\n}\\n\\n/* Burger Menu */\\n\\n.burgerMenu {\\n  display: none;\\n  position: fixed;\\n  top: 3%;\\n  right: 7%;\\n}\\n\\n.burgerMenu i {\\n  font-size: 24px;\\n}\\n\\n/* Home */\\n\\n.home {\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0%7%;\\n}\\n\\n.home__hello {\\n  width: 70%;\\n}\\n\\n.home__hello h1 {\\n  font-size: 18px;\\n  font-weight: 200;\\n  color: var(--clr--txt-tertiary);\\n}\\n\\n.home__hello h2 {\\n  font-size: 64px;\\n  font-weight: 400;\\n}\\n\\n.home__hello h3 {\\n  color: var(--clr--txt--secondary);\\n  font-size: 28px;\\n  font-weight: 400;\\n}\\n\\n.home__hello p {\\n  margin-top: 10px;\\n  margin-bottom: 20px;\\n  color: var(--clr--txt-tertiary);\\n  font-size: 18px;\\n  font-weight: 200;\\n}\\n\\n.home__hello span {\\n  color: var(--clr--txt--primary);\\n}\\n\\n.home__profile {\\n  padding: 2%;\\n  width: 30%;\\n}\\n.home__profile__img {\\n  border-radius: 50%;\\n}\\n\\n/* Responsive */\\n\\n@media (max-width: 1024px) {\\n  .header {\\n    display: none;\\n  }\\n  .home {\\n    height: 100vh;\\n    padding: 5%0%;\\n  }\\n  .home__hello h1 {\\n    font-size: 14px;\\n    font-weight: 200;\\n    color: var(--clr--txt-tertiary);\\n  }\\n\\n  .home__hello h2 {\\n    font-size: 38px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello h3 {\\n    color: var(--clr--txt--secondary);\\n    font-size: 20px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello p {\\n    margin-top: 10px;\\n    margin-bottom: 20px;\\n    color: var(--clr--txt-tertiary);\\n    font-size: 14px;\\n    font-weight: 200;\\n  }\\n  .socials {\\n    display: none;\\n  }\\n  .email {\\n    display: none;\\n  }\\n  .burgerMenu {\\n    display: block;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,UAAU;AACV,8GAA8G;;AAE9G;EACE,uBAAuB;;EAEvB,yBAAyB;EACzB,iCAAiC;EACjC,0BAA0B;EAC1B,8BAA8B;EAC9B,+CAA+C;AACjD;;AAEA;EACE,yEAAyE;EACzE,qCAAqC;EACrC,+BAA+B;EAC/B,+BAA+B;EAC/B,cAAc;AAChB;;AAEA,YAAY;;AAEZ;EACE,gBAAgB;EAChB,uCAAuC;EACvC,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,uCAAuC;EACvC,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,WAAW;;AAEX;EACE,WAAW;EACX,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,+BAA+B;EAC/B,6BAA6B;AAC/B;;AAEA;EACE,iCAAiC;AACnC;;AAEA,YAAY;;AAEZ;EACE,4BAA4B;EAC5B,eAAe;EACf,WAAW;EACX,QAAQ;EACR,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,aAAa;EACb,SAAS;EACT,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,SAAS;AACX;;AAEA,UAAU;;AAEV;EACE,uBAAyB;MAAzB,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;EACf,WAAW;EACX,SAAS;EACT,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,4BAA4B;EAC5B,qBAAqB;EACrB,eAAe;EACf,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,aAAa;EACb,SAAS;EACT,SAAS;AACX;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;EACb,eAAe;EACf,OAAO;EACP,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,+BAA+B;EAC/B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;;AAEA,eAAe;;AAEf;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,aAAa;EACf;EACA;IACE,eAAe;IACf,gBAAgB;IAChB,+BAA+B;EACjC;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,iCAAiC;IACjC,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,mBAAmB;IACnB,+BAA+B;IAC/B,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;AACF\",\"sourcesContent\":[\"/* Fonts */\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap\\\");\\n\\n:root {\\n  --clr--primary: #001f3f;\\n\\n  --clr--secondary: #39cccc;\\n  --ff--primary: \\\"Sora\\\", sans-serif;\\n  --clr--txt--primary: white;\\n  --clr--txt--secondary: #39cccc;\\n  --clr--txt-tertiary: rgba(211, 211, 211, 0.726);\\n}\\n\\nbody {\\n  background: linear-gradient(110deg, var(--clr--primary) 58%, #001a33 58%);\\n  background-color: var(--clr--primary);\\n  font-family: var(--ff--primary);\\n  color: var(--clr--txt--primary);\\n  padding: 2% 3%;\\n}\\n\\n/* General */\\n\\n.btn-classic {\\n  background: none;\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--secondary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n  cursor: pointer;\\n  transition: ease, 0.2s;\\n}\\n\\n.btn-classic:hover {\\n  background: var(--clr--secondary);\\n  border: solid 1px var(--clr--secondary);\\n  color: var(--clr--primary);\\n  padding: 10px 20px;\\n  font-weight: 200;\\n  border-radius: 5px;\\n}\\n\\n/* Header */\\n\\n.header {\\n  width: 100%;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: space-between;\\n  font-weight: 200;\\n  height: 5vh;\\n  font-size: 18px;\\n}\\n\\n.header a {\\n  color: var(--clr--txt--secondary);\\n  text-decoration: none;\\n}\\n\\n.header__menu a {\\n  margin-left: 30px;\\n  color: var(--clr--txt--primary);\\n  transition: ease-in-out, 0.1s;\\n}\\n\\n.header__menu a:hover {\\n  color: var(--clr--txt--secondary);\\n}\\n\\n/* Socials */\\n\\n.socials {\\n  color: var(--clr--secondary);\\n  position: fixed;\\n  bottom: 10%;\\n  left: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.socials::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 100%;\\n}\\n\\n.socials i {\\n  position: relative;\\n  top: 0;\\n  font-size: 28px;\\n  margin-bottom: 20px;\\n  cursor: pointer;\\n  transition: ease-in-out, 0.15s;\\n}\\n\\n.socials i:hover {\\n  top: -5px;\\n}\\n\\n/* Email */\\n\\n.email {\\n  writing-mode: vertical-rl;\\n  text-orientation: mixed;\\n  position: fixed;\\n  bottom: 10%;\\n  right: 4%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.email a {\\n  position: relative;\\n  top: 0;\\n  color: var(--clr--secondary);\\n  text-decoration: none;\\n  font-size: 14px;\\n  transition: ease-in-out, 0.15s;\\n  font-weight: 200;\\n}\\n\\n.email a:hover {\\n  top: -5px;\\n}\\n\\n.email::before {\\n  background-color: var(--clr--secondary);\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 1px;\\n  height: 100vh;\\n  left: 49%;\\n  top: 110%;\\n}\\n\\n/* Burger Menu */\\n\\n.burgerMenu {\\n  display: none;\\n  position: fixed;\\n  top: 3%;\\n  right: 7%;\\n}\\n\\n.burgerMenu i {\\n  font-size: 24px;\\n}\\n\\n/* Home */\\n\\n.home {\\n  width: 100%;\\n  height: 80vh;\\n  margin: 0 auto;\\n  max-width: 1440px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 0%7%;\\n}\\n\\n.home__hello {\\n  width: 70%;\\n}\\n\\n.home__hello h1 {\\n  font-size: 18px;\\n  font-weight: 200;\\n  color: var(--clr--txt-tertiary);\\n}\\n\\n.home__hello h2 {\\n  font-size: 64px;\\n  font-weight: 400;\\n}\\n\\n.home__hello h3 {\\n  color: var(--clr--txt--secondary);\\n  font-size: 28px;\\n  font-weight: 400;\\n}\\n\\n.home__hello p {\\n  margin-top: 10px;\\n  margin-bottom: 20px;\\n  color: var(--clr--txt-tertiary);\\n  font-size: 18px;\\n  font-weight: 200;\\n}\\n\\n.home__hello span {\\n  color: var(--clr--txt--primary);\\n}\\n\\n.home__profile {\\n  padding: 2%;\\n  width: 30%;\\n}\\n.home__profile__img {\\n  border-radius: 50%;\\n}\\n\\n/* Responsive */\\n\\n@media (max-width: 1024px) {\\n  .header {\\n    display: none;\\n  }\\n  .home {\\n    height: 100vh;\\n    padding: 5%0%;\\n  }\\n  .home__hello h1 {\\n    font-size: 14px;\\n    font-weight: 200;\\n    color: var(--clr--txt-tertiary);\\n  }\\n\\n  .home__hello h2 {\\n    font-size: 38px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello h3 {\\n    color: var(--clr--txt--secondary);\\n    font-size: 20px;\\n    font-weight: 400;\\n  }\\n\\n  .home__hello p {\\n    margin-top: 10px;\\n    margin-bottom: 20px;\\n    color: var(--clr--txt-tertiary);\\n    font-size: 14px;\\n    font-weight: 200;\\n  }\\n  .socials {\\n    display: none;\\n  }\\n  .email {\\n    display: none;\\n  }\\n  .burgerMenu {\\n    display: block;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDRIQUE0SCxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxvQkFBb0IsV0FBVyw0QkFBNEIsZ0NBQWdDLHdDQUF3QywrQkFBK0IsbUNBQW1DLG9EQUFvRCxHQUFHLFVBQVUsOEVBQThFLDBDQUEwQyxvQ0FBb0Msb0NBQW9DLG1CQUFtQixHQUFHLG1DQUFtQyxxQkFBcUIsNENBQTRDLGlDQUFpQyx1QkFBdUIscUJBQXFCLHVCQUF1QixvQkFBb0IsMkJBQTJCLEdBQUcsd0JBQXdCLHNDQUFzQyw0Q0FBNEMsK0JBQStCLHVCQUF1QixxQkFBcUIsdUJBQXVCLEdBQUcsNkJBQTZCLGdCQUFnQixtQkFBbUIsc0JBQXNCLGtCQUFrQixtQ0FBbUMscUJBQXFCLGdCQUFnQixvQkFBb0IsR0FBRyxlQUFlLHNDQUFzQywwQkFBMEIsR0FBRyxxQkFBcUIsc0JBQXNCLG9DQUFvQyxrQ0FBa0MsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsK0JBQStCLGlDQUFpQyxvQkFBb0IsZ0JBQWdCLGFBQWEsa0JBQWtCLDJCQUEyQixHQUFHLHNCQUFzQiw0Q0FBNEMsdUJBQXVCLGtCQUFrQixlQUFlLGtCQUFrQixjQUFjLGNBQWMsR0FBRyxnQkFBZ0IsdUJBQXVCLFdBQVcsb0JBQW9CLHdCQUF3QixvQkFBb0IsbUNBQW1DLEdBQUcsc0JBQXNCLGNBQWMsR0FBRywyQkFBMkIsNEJBQTRCLGtDQUFrQyw0QkFBNEIsb0JBQW9CLGdCQUFnQixjQUFjLGtCQUFrQiwyQkFBMkIsR0FBRyxjQUFjLHVCQUF1QixXQUFXLGlDQUFpQywwQkFBMEIsb0JBQW9CLG1DQUFtQyxxQkFBcUIsR0FBRyxvQkFBb0IsY0FBYyxHQUFHLG9CQUFvQiw0Q0FBNEMsdUJBQXVCLGtCQUFrQixlQUFlLGtCQUFrQixjQUFjLGNBQWMsR0FBRyxzQ0FBc0Msa0JBQWtCLG9CQUFvQixZQUFZLGNBQWMsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcseUJBQXlCLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQixrQkFBa0IsNEJBQTRCLHdCQUF3QixrQkFBa0IsR0FBRyxrQkFBa0IsZUFBZSxHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLG9DQUFvQyxHQUFHLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcscUJBQXFCLHNDQUFzQyxvQkFBb0IscUJBQXFCLEdBQUcsb0JBQW9CLHFCQUFxQix3QkFBd0Isb0NBQW9DLG9CQUFvQixxQkFBcUIsR0FBRyx1QkFBdUIsb0NBQW9DLEdBQUcsb0JBQW9CLGdCQUFnQixlQUFlLEdBQUcsdUJBQXVCLHVCQUF1QixHQUFHLG9EQUFvRCxhQUFhLG9CQUFvQixLQUFLLFdBQVcsb0JBQW9CLG9CQUFvQixLQUFLLHFCQUFxQixzQkFBc0IsdUJBQXVCLHNDQUFzQyxLQUFLLHVCQUF1QixzQkFBc0IsdUJBQXVCLEtBQUssdUJBQXVCLHdDQUF3QyxzQkFBc0IsdUJBQXVCLEtBQUssc0JBQXNCLHVCQUF1QiwwQkFBMEIsc0NBQXNDLHNCQUFzQix1QkFBdUIsS0FBSyxjQUFjLG9CQUFvQixLQUFLLFlBQVksb0JBQW9CLEtBQUssaUJBQWlCLHFCQUFxQixLQUFLLEdBQUcsU0FBUyx1RkFBdUYsYUFBYSxNQUFNLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sMkdBQTJHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLG9CQUFvQixXQUFXLDRCQUE0QixnQ0FBZ0Msd0NBQXdDLCtCQUErQixtQ0FBbUMsb0RBQW9ELEdBQUcsVUFBVSw4RUFBOEUsMENBQTBDLG9DQUFvQyxvQ0FBb0MsbUJBQW1CLEdBQUcsbUNBQW1DLHFCQUFxQiw0Q0FBNEMsaUNBQWlDLHVCQUF1QixxQkFBcUIsdUJBQXVCLG9CQUFvQiwyQkFBMkIsR0FBRyx3QkFBd0Isc0NBQXNDLDRDQUE0QywrQkFBK0IsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyw2QkFBNkIsZ0JBQWdCLG1CQUFtQixzQkFBc0Isa0JBQWtCLG1DQUFtQyxxQkFBcUIsZ0JBQWdCLG9CQUFvQixHQUFHLGVBQWUsc0NBQXNDLDBCQUEwQixHQUFHLHFCQUFxQixzQkFBc0Isb0NBQW9DLGtDQUFrQyxHQUFHLDJCQUEyQixzQ0FBc0MsR0FBRywrQkFBK0IsaUNBQWlDLG9CQUFvQixnQkFBZ0IsYUFBYSxrQkFBa0IsMkJBQTJCLEdBQUcsc0JBQXNCLDRDQUE0Qyx1QkFBdUIsa0JBQWtCLGVBQWUsa0JBQWtCLGNBQWMsY0FBYyxHQUFHLGdCQUFnQix1QkFBdUIsV0FBVyxvQkFBb0Isd0JBQXdCLG9CQUFvQixtQ0FBbUMsR0FBRyxzQkFBc0IsY0FBYyxHQUFHLDJCQUEyQiw4QkFBOEIsNEJBQTRCLG9CQUFvQixnQkFBZ0IsY0FBYyxrQkFBa0IsMkJBQTJCLEdBQUcsY0FBYyx1QkFBdUIsV0FBVyxpQ0FBaUMsMEJBQTBCLG9CQUFvQixtQ0FBbUMscUJBQXFCLEdBQUcsb0JBQW9CLGNBQWMsR0FBRyxvQkFBb0IsNENBQTRDLHVCQUF1QixrQkFBa0IsZUFBZSxrQkFBa0IsY0FBYyxjQUFjLEdBQUcsc0NBQXNDLGtCQUFrQixvQkFBb0IsWUFBWSxjQUFjLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLHlCQUF5QixnQkFBZ0IsaUJBQWlCLG1CQUFtQixzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcsa0JBQWtCLGVBQWUsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQixvQ0FBb0MsR0FBRyxxQkFBcUIsb0JBQW9CLHFCQUFxQixHQUFHLHFCQUFxQixzQ0FBc0Msb0JBQW9CLHFCQUFxQixHQUFHLG9CQUFvQixxQkFBcUIsd0JBQXdCLG9DQUFvQyxvQkFBb0IscUJBQXFCLEdBQUcsdUJBQXVCLG9DQUFvQyxHQUFHLG9CQUFvQixnQkFBZ0IsZUFBZSxHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxvREFBb0QsYUFBYSxvQkFBb0IsS0FBSyxXQUFXLG9CQUFvQixvQkFBb0IsS0FBSyxxQkFBcUIsc0JBQXNCLHVCQUF1QixzQ0FBc0MsS0FBSyx1QkFBdUIsc0JBQXNCLHVCQUF1QixLQUFLLHVCQUF1Qix3Q0FBd0Msc0JBQXNCLHVCQUF1QixLQUFLLHNCQUFzQix1QkFBdUIsMEJBQTBCLHNDQUFzQyxzQkFBc0IsdUJBQXVCLEtBQUssY0FBYyxvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQixLQUFLLGlCQUFpQixxQkFBcUIsS0FBSyxHQUFHLHFCQUFxQjtBQUNoalY7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9kZmZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb250cyAqL1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvcmE6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG4gIC0tY2xyLS1wcmltYXJ5OiAjMDAxZjNmO1xcblxcbiAgLS1jbHItLXNlY29uZGFyeTogIzM5Y2NjYztcXG4gIC0tZmYtLXByaW1hcnk6IFxcXCJTb3JhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tY2xyLS10eHQtLXByaW1hcnk6IHdoaXRlO1xcbiAgLS1jbHItLXR4dC0tc2Vjb25kYXJ5OiAjMzljY2NjO1xcbiAgLS1jbHItLXR4dC10ZXJ0aWFyeTogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjcyNik7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExMGRlZywgdmFyKC0tY2xyLS1wcmltYXJ5KSA1OCUsICMwMDFhMzMgNTglKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci0tcHJpbWFyeSk7XFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDIlIDMlO1xcbn1cXG5cXG4vKiBHZW5lcmFsICovXFxuXFxuLmJ0bi1jbGFzc2ljIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGVhc2UsIDAuMnM7XFxufVxcblxcbi5idG4tY2xhc3NpYzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0tY2xyLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmhlYWRlciBhIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tc2Vjb25kYXJ5KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhlYWRlcl9fbWVudSBhIHtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1wcmltYXJ5KTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0LCAwLjFzO1xcbn1cXG5cXG4uaGVhZGVyX19tZW51IGE6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4vKiBTb2NpYWxzICovXFxuXFxuLnNvY2lhbHMge1xcbiAgY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTAlO1xcbiAgbGVmdDogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNvY2lhbHM6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbGVmdDogNDklO1xcbiAgdG9wOiAxMDAlO1xcbn1cXG5cXG4uc29jaWFscyBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCwgMC4xNXM7XFxufVxcblxcbi5zb2NpYWxzIGk6aG92ZXIge1xcbiAgdG9wOiAtNXB4O1xcbn1cXG5cXG4vKiBFbWFpbCAqL1xcblxcbi5lbWFpbCB7XFxuICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1ybDtcXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xcbiAgdGV4dC1vcmllbnRhdGlvbjogbWl4ZWQ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwJTtcXG4gIHJpZ2h0OiA0JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZW1haWwgYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQsIDAuMTVzO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmVtYWlsIGE6aG92ZXIge1xcbiAgdG9wOiAtNXB4O1xcbn1cXG5cXG4uZW1haWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbGVmdDogNDklO1xcbiAgdG9wOiAxMTAlO1xcbn1cXG5cXG4vKiBCdXJnZXIgTWVudSAqL1xcblxcbi5idXJnZXJNZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDMlO1xcbiAgcmlnaHQ6IDclO1xcbn1cXG5cXG4uYnVyZ2VyTWVudSBpIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLyogSG9tZSAqL1xcblxcbi5ob21lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwJTclO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8ge1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIGgxIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtdGVydGlhcnkpO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gaDIge1xcbiAgZm9udC1zaXplOiA2NHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIGgzIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tc2Vjb25kYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ob21lX19oZWxsbyBwIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LXRlcnRpYXJ5KTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5ob21lX19oZWxsbyBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tcHJpbWFyeSk7XFxufVxcblxcbi5ob21lX19wcm9maWxlIHtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDMwJTtcXG59XFxuLmhvbWVfX3Byb2ZpbGVfX2ltZyB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi8qIFJlc3BvbnNpdmUgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5ob21lIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgcGFkZGluZzogNSUwJTtcXG4gIH1cXG4gIC5ob21lX19oZWxsbyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IHZhcigtLWNsci0tdHh0LXRlcnRpYXJ5KTtcXG4gIH1cXG5cXG4gIC5ob21lX19oZWxsbyBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIC5ob21lX19oZWxsbyBoMyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tc2Vjb25kYXJ5KTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgfVxcblxcbiAgLmhvbWVfX2hlbGxvIHAge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLS10eHQtdGVydGlhcnkpO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICB9XFxuICAuc29jaWFscyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuZW1haWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmJ1cmdlck1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7QUFDViw4R0FBOEc7O0FBRTlHO0VBQ0UsdUJBQXVCOztFQUV2Qix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UseUVBQXlFO0VBQ3pFLHFDQUFxQztFQUNyQywrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsV0FBVztFQUNYLFFBQVE7RUFDUixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixTQUFTO0VBQ1QsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUEsVUFBVTs7QUFFVjtFQUNFLHVCQUF5QjtNQUF6Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7RUFDVCxTQUFTO0FBQ1g7O0FBRUEsZ0JBQWdCOztBQUVoQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsT0FBTztFQUNQLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFFZjtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsYUFBYTtFQUNmO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udHMgKi9cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3JhOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWNsci0tcHJpbWFyeTogIzAwMWYzZjtcXG5cXG4gIC0tY2xyLS1zZWNvbmRhcnk6ICMzOWNjY2M7XFxuICAtLWZmLS1wcmltYXJ5OiBcXFwiU29yYVxcXCIsIHNhbnMtc2VyaWY7XFxuICAtLWNsci0tdHh0LS1wcmltYXJ5OiB3aGl0ZTtcXG4gIC0tY2xyLS10eHQtLXNlY29uZGFyeTogIzM5Y2NjYztcXG4gIC0tY2xyLS10eHQtdGVydGlhcnk6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC43MjYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTBkZWcsIHZhcigtLWNsci0tcHJpbWFyeSkgNTglLCAjMDAxYTMzIDU4JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItLXByaW1hcnkpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLS1wcmltYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAyJSAzJTtcXG59XFxuXFxuLyogR2VuZXJhbCAqL1xcblxcbi5idG4tY2xhc3NpYyB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBlYXNlLCAwLjJzO1xcbn1cXG5cXG4uYnRuLWNsYXNzaWM6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLWNsci0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5oZWFkZXIgYSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oZWFkZXJfX21lbnUgYSB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCwgMC4xcztcXG59XFxuXFxuLmhlYWRlcl9fbWVudSBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogU29jaWFscyAqL1xcblxcbi5zb2NpYWxzIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXNlY29uZGFyeSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEwJTtcXG4gIGxlZnQ6IDQlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zb2NpYWxzOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDQ5JTtcXG4gIHRvcDogMTAwJTtcXG59XFxuXFxuLnNvY2lhbHMgaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDA7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQsIDAuMTVzO1xcbn1cXG5cXG4uc29jaWFscyBpOmhvdmVyIHtcXG4gIHRvcDogLTVweDtcXG59XFxuXFxuLyogRW1haWwgKi9cXG5cXG4uZW1haWwge1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcXG4gIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMCU7XFxuICByaWdodDogNCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmVtYWlsIGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgY29sb3I6IHZhcigtLWNsci0tc2Vjb25kYXJ5KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0LCAwLjE1cztcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5lbWFpbCBhOmhvdmVyIHtcXG4gIHRvcDogLTVweDtcXG59XFxuXFxuLmVtYWlsOjpiZWZvcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLS1zZWNvbmRhcnkpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGxlZnQ6IDQ5JTtcXG4gIHRvcDogMTEwJTtcXG59XFxuXFxuLyogQnVyZ2VyIE1lbnUgKi9cXG5cXG4uYnVyZ2VyTWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzJTtcXG4gIHJpZ2h0OiA3JTtcXG59XFxuXFxuLmJ1cmdlck1lbnUgaSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uaG9tZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODB2aDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCU3JTtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIHtcXG4gIHdpZHRoOiA3MCU7XFxufVxcblxcbi5ob21lX19oZWxsbyBoMSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgY29sb3I6IHZhcigtLWNsci0tdHh0LXRlcnRpYXJ5KTtcXG59XFxuXFxuLmhvbWVfX2hlbGxvIGgyIHtcXG4gIGZvbnQtc2l6ZTogNjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5ob21lX19oZWxsbyBoMyB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gcCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jbHItLXR4dC10ZXJ0aWFyeSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uaG9tZV9faGVsbG8gc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXByaW1hcnkpO1xcbn1cXG5cXG4uaG9tZV9fcHJvZmlsZSB7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHdpZHRoOiAzMCU7XFxufVxcbi5ob21lX19wcm9maWxlX19pbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaG9tZSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDUlMCU7XFxuICB9XFxuICAuaG9tZV9faGVsbG8gaDEge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItLXR4dC10ZXJ0aWFyeSk7XFxuICB9XFxuXFxuICAuaG9tZV9faGVsbG8gaDIge1xcbiAgICBmb250LXNpemU6IDM4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICAuaG9tZV9faGVsbG8gaDMge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLS10eHQtLXNlY29uZGFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIC5ob21lX19oZWxsbyBwIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsci0tdHh0LXRlcnRpYXJ5KTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgfVxcbiAgLnNvY2lhbHMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmVtYWlsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5idXJnZXJNZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/global.css\n");

/***/ })

});