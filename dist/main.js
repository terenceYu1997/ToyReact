/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("/**\n * Created by Terence on 2021/9/4 - 4:17 下午\n * Description :\n */\nfor (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {\n  var i = _arr[_i];\n  console.log(i);\n}\n\nfunction createElement(tagName, attributes) {\n  var e = document.createElement(tagName);\n\n  for (var key in attributes) {\n    e.setAttribute(key, attributes[key]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  console.log(children);\n\n  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {\n    var child = _children[_i2];\n\n    if (typeof child === 'string') {\n      child = document.createTextNode(child);\n    }\n\n    e.appendChild(child);\n  }\n\n  return e;\n}\n\ndocument.body.appendChild(createElement(\"div\", {\n  id: \"a\",\n  className: \"aa\"\n}, createElement(\"div\", null, \"abc\"), createElement(\"div\", null), createElement(\"div\", null)));\n\n//# sourceURL=webpack://toy-react/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;