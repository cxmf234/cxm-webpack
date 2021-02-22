/******/ (function(modules) { // webpackBootstrap是一个自执行函数，modules 即为存放所有模块的对象，这个对象以文件路径为 key，以文件内容为 value
/******/ 	// 安装过的模块都存放在这里面，作用是把已经加载过的模块缓存在内存中，提升性能
/******/ 	var installedModules = {};
/******/
/******/ 	// 加载参数对象中每一个模块，moduleId 为要加载模块对象的 key
/******/ 	// 函数作用和 Node.js 中 require 语句相似
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// 如果需要加载的模块已经被加载过，就直接从内存缓存中返回
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// 如果缓存中不存在需要加载的模块，就新建一个模块，并把它存在缓存中
/******/ 		var module = installedModules[moduleId] = {
/******/ 		    // 加载模块对象的 key
/******/ 			i: moduleId,
/******/            // 该模块是否已经加载完毕
/******/ 			l: false,
/******/            // 该模块的导出值
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// 从 modules 中获取 key 为 moduleId 的模块对应的函数
/******/        // 再调用这个函数，同时把函数需要的参数传入
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// 把这个模块标记为已加载
/******/ 		module.l = true;
/******/
/******/ 		// 返回这个模块的导出值
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// 在源文件中，直接使用__webpack_modules__，生成文件用__webpack_require__.m替换
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// 暴露module缓存
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// 为harmory exports 定义 getter function, configurable=false表明，此属性不能修改
/******/    // 例如export const，由于是常量，需要用__webpack_require__.d进行定义
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({
/******/ // 所有的模块都存放在了一个对象里，根据每个模块在对象的 key 来区分和定位模块
/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const test = "111";

/* harmony default export */ __webpack_exports__["default"] = (test);


/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const test = "bbbb";

/* harmony default export */ __webpack_exports__["default"] = (test);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./src/a.js");
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ "./src/b.js");



const c = () => {
  console.log(_a_js__WEBPACK_IMPORTED_MODULE_0__["default"], _b_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
};

c();


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map