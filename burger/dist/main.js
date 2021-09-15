/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/types.js\");\n\n\n_types__WEBPACK_IMPORTED_MODULE_0__.default.getTypes()\n\n/*-------------------------------------------------------------------------*/\n//Menu\n\n// console.log(document.getElementById('nav-menu'))\n// console.log(document.getElementsByTagName('li'))\n// console.log(document.getElementsByName('test'))\n\n// console.log(document.getElementsByClassName('burger')[0].getElementsByClassName('line'))\n\n// console.log(document.querySelector('.burger'))\n// console.log(document.querySelectorAll('.burger .line'))\n\nlet burger = document.querySelector('.burger'),\n  menu = document.querySelector('.menu'),\n  menu_toggle = false\n\nburger.onclick = function () {\n  menu_toggle = !menu_toggle\n\n  if (menu_toggle === true) {\n    menu.style.display = 'flex'\n  } else {\n    menu.style.display = ''\n  }\n}\n\nwindow.onload = function () {\n  let answer = confirm('Are you adult ?')\n\n  if (answer === true) {\n    console.log('Yes !')\n  } else {\n    console.log('No !')\n  }\n}\n\n//# sourceURL=webpack://l-1/./src/index.js?");

/***/ }),

/***/ "./src/types.js":
/*!**********************!*\
  !*** ./src/types.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getTypes = function () {\n  /*type number\n  Integer 1,2,3\n  Float or Double 1.6, 0.5\n  */\n  let num = 1\n  let floatNum = 1.0\n\n  /*type string\n  * '' or \"\"\n  * */\n  let str = 'some string'\n\n  /*type array\n  * []\n  * */\n  let myArr = [1, 2, 3, '1', [1,2,3], { user: 'some name' }, true]\n\n  /*type boolean\n * true or false\n * */\n  let bool = true;\n\n  /*type object\n  *\n  * */\n  let customer = {\n      firstName: 'Roma',\n      email: 'roma@ukr.net'\n    }\n\n  // console.log(customer.email)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getTypes });\n\n//# sourceURL=webpack://l-1/./src/types.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;