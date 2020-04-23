/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
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
/******/ 	__webpack_require__.p = "public/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/data.json":
/*!************************!*\
  !*** ./data/data.json ***!
  \************************/
/*! exports provided: title, version, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"title\\\":\\\"MY WEBSITE\\\",\\\"version\\\":\\\"2020-04-02\\\"}\");\n\n//# sourceURL=webpack:///./data/data.json?");

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/page.scss */ \"./src/scss/page.scss\");\n/* harmony import */ var _scss_page_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_page_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/data.json */ \"./data/data.json\");\nvar _data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/data.json */ \"./data/data.json\", 1);\n/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library */ \"./src/js/library.js\");\n\n\n\n\n$(document).ready(function () {\n  console.log(\"Initializing\");\n  $('#splash').height(window.innerHeight);\n  Object(_library__WEBPACK_IMPORTED_MODULE_2__[\"fadeInEffect\"])();\n  var controller = new ScrollMagic.Controller();\n  var scene = new ScrollMagic.Scene({\n    triggerElement: '#splash',\n    triggerHook: \"onEnter\"\n  }).setTween(function () {\n    TweenMax.from('.outer', 2, {\n      opacity: 0,\n      delay: 0.5,\n      ease: Quad.easeOut\n    });\n    TweenMax.from('#splash .title', 3, {\n      opacity: 0,\n      y: 75,\n      delay: 1.5,\n      ease: Expo.easeOut\n    });\n  }).addTo(controller);\n  $(\"#more\").click(function (e) {\n    e.preventDefault();\n    Object(_library__WEBPACK_IMPORTED_MODULE_2__[\"scrollToAnchor\"])('#about');\n  });\n  $(\".carousel\").slick({\n    dots: false,\n    speed: 1000,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    inifinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    arrows: false\n  });\n});\n\n//# sourceURL=webpack:///./src/js/entry.js?");

/***/ }),

/***/ "./src/js/library.js":
/*!***************************!*\
  !*** ./src/js/library.js ***!
  \***************************/
/*! exports provided: scrollToAnchor, fadeInEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToAnchor\", function() { return scrollToAnchor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeInEffect\", function() { return fadeInEffect; });\nvar scrollToAnchor = function scrollToAnchor(srch) {\n  var TweenScrollTop = {\n    scrollTop: 0\n  };\n  var target = $(srch);\n\n  if (target.length) {\n    var targetTop = target.offset().top - parseInt($('body').css('margin-top'), 10);\n    TweenScrollTop.scrollTop = $(window).scrollTop();\n    TweenMax.to(TweenScrollTop, 2, {\n      scrollTop: targetTop,\n      ease: Expo.easeOut,\n      onUpdate: function onUpdate() {\n        $('html,body').scrollTop(TweenScrollTop.scrollTop);\n      }\n    });\n  }\n\n  $(document).on('click', 'a[href^=\"#\"]', function (evt) {\n    scrollToAnchor(this.hash);\n  });\n};\nvar fadeInEffect = function fadeInEffect() {\n  var controller = new ScrollMagic.Controller();\n\n  function fadeUp(el) {\n    var secondaryDuration = 1;\n    var $secondaryEl = $(el).find('.fade-block');\n    var secondaryElStagger = 0.25;\n    return new TimelineMax().staggerFromTo($secondaryEl, secondaryDuration, {\n      opacity: 0,\n      y: 75\n    }, {\n      opacity: 1,\n      y: 0\n    }, secondaryElStagger);\n  }\n\n  function buildSceneFor(el) {\n    new ScrollMagic.Scene({\n      triggerElement: el,\n      offset: -100\n    }).setTween(fadeUp(el)).addTo(controller);\n  }\n\n  $('.trigger-fade-block').each(function () {\n    buildSceneFor(this);\n  });\n};\n\n//# sourceURL=webpack:///./src/js/library.js?");

/***/ }),

/***/ "./src/scss/page.scss":
/*!****************************!*\
  !*** ./src/scss/page.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/page.scss?");

/***/ })

/******/ });