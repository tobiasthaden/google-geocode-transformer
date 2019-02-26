(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GoogleAddress"] = factory();
	else
		root["GoogleAddress"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GoogleAddress.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/GoogleAddress.js":
/*!******************************!*\
  !*** ./src/GoogleAddress.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GoogleAddress; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GoogleAddress =\n/*#__PURE__*/\nfunction () {\n  /**\n   * Create a new GoogleAddress instance.\n   * \n   * @param  {Object} address The result from the Google Geocode API\n   * @param  {Object} types   A map of types that should be transformed.\n   * @return {void}\n   */\n  function GoogleAddress(address, types) {\n    _classCallCheck(this, GoogleAddress);\n\n    this.google = address;\n    this.components = {};\n    this.transform(types);\n  }\n  /**\n   * Transform the Google address components.\n   * \n   * @param  {Object} types A map of types that should be transformed.\n   * @return {void}\n   */\n\n\n  _createClass(GoogleAddress, [{\n    key: \"transform\",\n    value: function transform(types) {\n      var _this = this;\n\n      this.setTypes(types);\n      this.google.address_components.reduce(function (components, component) {\n        components[_this.findType(component)] = component.long_name;\n        return components;\n      }, this.components);\n    }\n    /**\n     * Set the types that should be transformed.\n     * \n     * @param {Object} types\n     */\n\n  }, {\n    key: \"setTypes\",\n    value: function setTypes(types) {\n      this.types = Object.assign({\n        street_number: 'number',\n        route: 'street',\n        locality: 'city',\n        sublocality: 'district',\n        country: 'country',\n        postal_code: 'postcode',\n        administrative_area_level_1: 'state'\n      }, types);\n    }\n    /**\n     * Find the matching type for the given address component.\n     * \n     * @param  {Object} component A Google address component.\n     * @return {String}           The matching type.\n     */\n\n  }, {\n    key: \"findType\",\n    value: function findType(component) {\n      var match = Object.keys(this.types).filter(function (element) {\n        return component.types.includes(element);\n      });\n\n      if (!match.length) {\n        throw \"The given type is not defined.\";\n      }\n\n      return this.types[match[0]];\n    }\n    /**\n     * Get the address components.\n     * \n     * @return {Object}\n     */\n\n  }, {\n    key: \"address\",\n    value: function address() {\n      return this.components;\n    }\n    /**\n     * Get the address codes.\n     * \n     * @return {Object}\n     */\n\n  }, {\n    key: \"codes\",\n    value: function codes() {\n      return this.google.plus_code;\n    }\n    /**\n     * Get the formatted address.\n     * \n     * @return {String}\n     */\n\n  }, {\n    key: \"formatted\",\n    value: function formatted() {\n      return this.google.formatted_address;\n    }\n    /**\n     * Get the google place id.\n     * \n     * @return {String}\n     */\n\n  }, {\n    key: \"id\",\n    value: function id() {\n      return this.google.place_id;\n    }\n  }]);\n\n  return GoogleAddress;\n}();\n\n\n\n//# sourceURL=webpack://GoogleAddress/./src/GoogleAddress.js?");

/***/ })

/******/ });
});