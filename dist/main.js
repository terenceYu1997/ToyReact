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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ \"./toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/**\n * Created by Terence on 2021/9/4 - 4:17 下午\n * Description :\n */\n\n\nvar Square = /*#__PURE__*/function (_Component) {\n  _inherits(Square, _Component);\n\n  var _super = _createSuper(Square);\n\n  function Square() {\n    _classCallCheck(this, Square);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n        className: \"square\",\n        onClick: this.props.onClick\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar Board = /*#__PURE__*/function (_Component2) {\n  _inherits(Board, _Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      var _this = this;\n\n      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Square, {\n        value: this.props.squares[i],\n        onClick: function onClick() {\n          return _this.props.onClick(i);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar Game = /*#__PURE__*/function (_Component3) {\n  _inherits(Game, _Component3);\n\n  var _super3 = _createSuper(Game);\n\n  function Game(props) {\n    var _this2;\n\n    _classCallCheck(this, Game);\n\n    _this2 = _super3.call(this, props);\n    _this2.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      stepNumber: 0,\n      xIsNext: true\n    };\n    return _this2;\n  }\n\n  _createClass(Game, [{\n    key: \"handleClick\",\n    value: function handleClick(i) {\n      var history = this.state.history.slice(0, this.state.stepNumber + 1);\n      var current = history[history.length - 1];\n      var squares = current.squares.slice();\n\n      if (calculateWinner(squares) || squares[i]) {\n        return;\n      }\n\n      squares[i] = this.state.xIsNext ? \"X\" : \"O\";\n      this.setState({\n        history: history.concat([{\n          squares: squares\n        }]),\n        stepNumber: history.length,\n        xIsNext: !this.state.xIsNext\n      });\n    }\n  }, {\n    key: \"jumpTo\",\n    value: function jumpTo(step) {\n      this.setState({\n        stepNumber: step,\n        xIsNext: step % 2 === 0\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var history = this.state.history;\n      var current = history[this.state.stepNumber];\n      var winner = calculateWinner(current.squares);\n      var moves = history.map(function (step, move) {\n        var desc = move ? 'Go to move #' + move : 'Go to game start';\n        return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"li\", {\n          key: move\n        }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n          onClick: function onClick() {\n            return _this3.jumpTo(move);\n          }\n        }, desc));\n      });\n      var status;\n\n      if (winner) {\n        status = \"Winner: \" + winner;\n      } else {\n        status = \"Next player: \" + (this.state.xIsNext ? \"X\" : \"O\");\n      }\n\n      return (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        className: \"game\"\n      }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        className: \"game-board\"\n      }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Board, {\n        squares: current.squares,\n        onClick: function onClick(i) {\n          return _this3.handleClick(i);\n        }\n      })), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\n        className: \"game-info\"\n      }, (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, status), (0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"ol\", null, moves)));\n    }\n  }]);\n\n  return Game;\n}(_toy_react__WEBPACK_IMPORTED_MODULE_0__.Component); // ========================================\n\n\n(0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.render)((0,_toy_react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Game, null), document.getElementById(\"root\")); // let game = <Game />\n// console.log(game.vdom)\n\nfunction calculateWinner(squares) {\n  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (var i = 0; i < lines.length; i++) {\n    var _lines$i = _slicedToArray(lines[i], 3),\n        a = _lines$i[0],\n        b = _lines$i[1],\n        c = _lines$i[2];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n}\n\n//# sourceURL=webpack://toy-react/./main.js?");

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Created by Terence on 2021/9/5 - 9:04 下午\n * Description :\n */\nvar RENDER_TO_DOM = Symbol('render to dom'); // 1. elementwrapper -> get vdom\n// 2. elementwrapper -> get vdom\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.props = Object.create(null);\n    this.children = [];\n    this._root = null;\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    }\n  }, {\n    key: \"vdom\",\n    get: function get() {\n      return this.render().vdom;\n    } // get vchildren () {\n    //   return this.children.map(child => child.vdom); // ???\n    // }\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      this._range = range;\n      this.render()[RENDER_TO_DOM](range); // this.render()得到ElementWrapper -> 再让ElementWrapper去渲染出节点.\n    }\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      var oldRange = this._range; // 保存oldRage\n\n      var range = document.createRange(); // 新range放在老range子内容第一个. 渲染新range\n\n      range.setStart(oldRange.startContainer, oldRange.startOffset);\n      range.setEnd(oldRange.startContainer, oldRange.startOffset);\n      this[RENDER_TO_DOM](range);\n      oldRange.setStart(range.endContainer, range.endOffset); // 将老range内容放在新range内容之后.\n\n      oldRange.deleteContents(); // 删除所有内容\n    }\n  }, {\n    key: \"setState\",\n    value: function setState(newState) {\n      if (newState === null || _typeof(this.state) !== 'object') {\n        this.state = newState;\n        this.rerender();\n        return;\n      }\n\n      var merge = function merge(oldState, newState) {\n        for (var p in newState) {\n          if (oldState[p] === null || _typeof(oldState[p]) !== 'object') {\n            oldState[p] = newState[p];\n          } else {\n            merge(oldState[p], newState[p]);\n          }\n        }\n      };\n\n      merge(this.state, newState);\n      this.rerender();\n    }\n  }]);\n\n  return Component;\n}();\n\nvar ElementWrapper = /*#__PURE__*/function (_Component) {\n  _inherits(ElementWrapper, _Component);\n\n  var _super = _createSuper(ElementWrapper);\n\n  function ElementWrapper(type) {\n    var _this;\n\n    _classCallCheck(this, ElementWrapper);\n\n    _this = _super.call(this, type);\n    _this.type = type;\n    return _this;\n  }\n\n  _createClass(ElementWrapper, [{\n    key: \"vdom\",\n    get: function get() {\n      return this;\n      /*{\n        type: this.type,\n        props: this.props,\n        children: this.children.map(child => child.vdom)\n      }*/\n    }\n    /*  setAttribute (name, value) {\n        if (name.match(/^on([\\s\\S]+)/)) {\n          this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, c => c.toLowerCase()), value)\n        } else {\n          if (name === 'className') {\n            this.root.setAttribute('class', value);\n          } else {\n            this.root.setAttribute(name, value);\n          }\n        }\n      }*/\n\n    /*  appendChild (component) {\n        let range = document.createRange();\n        range.setStart(this.root, this.root.childNodes.length);\n        range.setEnd(this.root, this.root.childNodes.length);\n        component[RENDER_TO_DOM](range);\n      }*/\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      var root = document.createElement(this.type); // 仍然是实dom, 不过目前已经有了dom树, 为dom diff做铺垫.\n      // setAttribute 逻辑\n\n      for (var name in this.props) {\n        var value = this.props[name];\n\n        if (name.match(/^on([\\s\\S]+)/)) {\n          root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n            return c.toLowerCase();\n          }), value);\n        } else {\n          if (name === 'className') {\n            root.setAttribute('class', value);\n          } else {\n            root.setAttribute(name, value);\n          }\n        }\n      } // appendChild逻辑\n\n\n      var _iterator = _createForOfIteratorHelper(this.children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n          var chilRrange = document.createRange();\n          chilRrange.setStart(root, root.childNodes.length);\n          chilRrange.setEnd(root, root.childNodes.length);\n          child[RENDER_TO_DOM](chilRrange); // 递归渲染child, 直至渲染为TextWrapper.\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      range.insertNode(root);\n    }\n  }]);\n\n  return ElementWrapper;\n}(Component);\n\nvar TextWrapper = /*#__PURE__*/function (_Component2) {\n  _inherits(TextWrapper, _Component2);\n\n  var _super2 = _createSuper(TextWrapper);\n\n  function TextWrapper(content) {\n    var _this2;\n\n    _classCallCheck(this, TextWrapper);\n\n    _this2 = _super2.call(this, content);\n    _this2.type = '#text';\n    _this2.content = content;\n    _this2.root = document.createTextNode(content);\n    return _this2;\n  }\n\n  _createClass(TextWrapper, [{\n    key: \"vdom\",\n    get: function get() {\n      return this;\n      /*{\n        type: '#text',\n        content: this.content,\n      }*/\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWrapper;\n}(Component);\n\nfunction createElement(type, attributes) {\n  var e;\n\n  if (typeof type === 'string') {\n    e = new ElementWrapper(type);\n  } else {\n    e = new type();\n  }\n\n  for (var key in attributes) {\n    e.setAttribute(key, attributes[key]);\n  }\n\n  var insertChildren = function insertChildren(children) {\n    var _iterator2 = _createForOfIteratorHelper(children),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var child = _step2.value;\n\n        if (typeof child === 'string') {\n          child = new TextWrapper(child);\n        }\n\n        if (child === null) {\n          continue;\n        }\n\n        if (_typeof(child) === 'object' && child instanceof Array) {\n          insertChildren(child);\n        } else {\n          e.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children);\n  return e;\n}\nvar render = function render(component, parentElement) {\n  var range = document.createRange();\n  range.setStart(parentElement, 0);\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  range.deleteContents();\n  component[RENDER_TO_DOM](range); // --> 初始点!!!渲染节点 ->\n};\n\n//# sourceURL=webpack://toy-react/./toy-react.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;