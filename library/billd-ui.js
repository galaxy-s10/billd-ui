(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("billd-ui.js", [], factory);
	else if(typeof exports === 'object')
		exports["billd-ui.js"] = factory();
	else
		root["billd-ui.js"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/VueRenderCpt/wechat.jpg":
/*!********************************************!*\
  !*** ./components/VueRenderCpt/wechat.jpg ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/wechat-2953ba.jpg";

/***/ }),

/***/ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js ***!
  \***************************************************************************/
/***/ (function(module) {

function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "./components/VueRenderCpt/index.jsx":
/*!*******************************************!*\
  !*** ./components/VueRenderCpt/index.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {};
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", [h("div", ["\u6211\u662FvueRenerCpt"]), h("div", {
      "on": {
        "click": this.clickme
      }
    }, ["click me"]), h("input", {
      "on": {
        "keyup": function keyup($event) {
          if (!("button" in $event) && _this._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _this.enterClick($event);
        }
      }
    }), h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{}, {
      "attrs": {
        key: 2323
      }
    }, {
      "attrs": {
        "abc": "23"
      }
    }]), ["attrskey"]), h("div", {
      "attrs": _objectSpread({}, {
        key: 234333333333333,
        xga: 34111112
      })
    }, ["key22"]), h("img", {
      "attrs": {
        "src": __webpack_require__(/*! ./wechat.jpg */ "./components/VueRenderCpt/wechat.jpg")
      },
      "style": "width:100px;"
    }), h("img", {
      "attrs": {
        "src": "./wechat.jpg"
      },
      "style": "width:100px;"
    })]);
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    clickme: function clickme() {
      console.log("clickmeclickmeclickme");
    },
    enterClick: function enterClick(v) {
      console.log("enter!!!");
    }
  }
});

/***/ }),

/***/ "./components/loading/index.jsx":
/*!**************************************!*\
  !*** ./components/loading/index.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../switch */ "./components/switch/index.jsx");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HSwitch: _switch__WEBPACK_IMPORTED_MODULE_0__.default
  },
  render: function render() {
    var h = arguments[0];
    h("div", [h("h-switch", {
      "attrs": {
        "a": "23",
        "b": "sdgh"
      }
    }), h("img", {
      "attrs": {
        "src": "./loading.png",
        "alt": ""
      }
    }), "\u52A0\u8F7D\u4E2D"]);
  }
});

/***/ }),

/***/ "./components/sum/index.js":
/*!*********************************!*\
  !*** ./components/sum/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var sum = function sum(a, b) {
  return a + b;
};

/* harmony default export */ __webpack_exports__["default"] = (sum);

/***/ }),

/***/ "./components/switch/index.jsx":
/*!*************************************!*\
  !*** ./components/switch/index.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  inheritAttrs: false,
  //将自定义组件的attrs不显示在渲染的html元素上，防止冲突（比如title）
  components: {},
  props: {
    switchVal: {
      default: undefined
    }
  },
  model: {
    prop: "switchVal",
    event: "input"
  },
  watch: {
    switchVal: function switchVal(newVal) {
      // console.log("switchVal变了");
      this.isChecked = newVal;
      this.$emit("changeSwitch", this.isChecked);
    }
  },
  data: function data() {
    return {
      isChecked: this.switchVal
    };
  },
  mounted: function mounted() {
    /**
     * 如果defaultChecked和v-model绑定的值冲突，则v-model的优先级高，defaultChecked不生效。
     * 即switchVal是false，那么就是isChecked就是false。
     * 其次，如果defaultChecked是true且swtichVal也是开或者没设置，最终结果就是开启
     */
    // console.log(this.$attrs, this.switchVal);
    if (this.switchVal != undefined) {
      this.isChecked = this.switchVal;
      return;
    }

    if (this.$attrs["defaultChecked"] && (this.switchVal == undefined || this.switchVal == true)) {
      this.isChecked = true;
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    // 如果有插槽，就使用插槽，如果没有插槽，就使用openText，如果openText没有，就代表没有文字
    return h("div", {
      "class": {
        bar: true,
        "hss-switch": true,
        "hss-switch-checked": this.isChecked
      },
      "on": {
        "click": function click(e) {
          return _this.clickSwitch(e);
        }
      }
    }, [h("span", {
      "class": "hss-switch-inner"
    }, [this.isChecked ? this.$scopedSlots.openSlot ? this.$scopedSlots.openSlot({}) : this.$attrs.openText ? this.$attrs.openText : " " : this.$scopedSlots.closeSlot ? this.$scopedSlots.closeSlot({}) : this.$attrs.closeText ? this.$attrs.closeText : ""])]);
  },
  computed: {},
  created: function created() {},
  methods: {
    clickSwitch: function clickSwitch(event) {
      if (this.switchVal == undefined) {
        // 如果没有使用v-model或者switchVal，则手动回调事件
        this.$emit("clickSwitch", this.isChecked, event); //最终拿到两个形参,即:fasle/true,event

        this.isChecked = !this.isChecked;
        this.$emit("changeSwitch", this.isChecked);
      } else {
        this.$emit("clickSwitch", this.isChecked, event); //最终拿到两个形参,即:fasle/true,event

        this.$emit("input", !this.isChecked);
      } // this.$emit("clickSwitch", { checked: !this.isChecked, event });  //最终拿到一个形参，即:{}

    }
  }
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/library/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": function() { return /* reexport safe */ _sum_index__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Loading": function() { return /* reexport safe */ _loading_index__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Switch": function() { return /* reexport safe */ _switch_index__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "imgcpt": function() { return /* reexport safe */ _VueRenderCpt__WEBPACK_IMPORTED_MODULE_3__.default; }
/* harmony export */ });
/* harmony import */ var _switch_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch/index */ "./components/switch/index.jsx");
/* harmony import */ var _loading_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading/index */ "./components/loading/index.jsx");
/* harmony import */ var _sum_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sum/index */ "./components/sum/index.js");
/* harmony import */ var _VueRenderCpt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VueRenderCpt */ "./components/VueRenderCpt/index.jsx");
 // import Message from "./message";
// import Modal from "./modal";
// import Table from "./table";

 // import '../test.js'


 // import './a.less'

console.log((0,_sum_index__WEBPACK_IMPORTED_MODULE_2__.default)(12, 3)); // export const components = {
//   Switch,
//   Loading
// };
// const install = function(app) {
//   Object.keys(components).forEach(key => {
//     const component = components[key];
//     // console.log(component);
//     if (component.install) {
//       app.use(component);
//     }
//   });
// };
// export default install;


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=billd-ui.js.map