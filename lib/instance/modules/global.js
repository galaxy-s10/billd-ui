"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("."));

var _colors = _interopRequireDefault(require("../../enum/colors"));

var _objectKeyCompare = require("../../utils/object-key-compare");

var _paint = require("../../enum/paint");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaultOptions = {
  data: {},
  styles: {
    theme: _colors.default[0],
    paintCoatTheme: 'default',
    paintCoat: {
      type: 'bgColor',
      value: '#F3F5F8'
    },
    elementCoat: {
      type: 'bgColor',
      value: '#ffffff'
    },
    fontSetting: {
      titleColor: '#304265',
      fontColor: '#304265'
    }
  }
};

var GlobalModules = /*#__PURE__*/function () {
  function GlobalModules(global) {
    _classCallCheck(this, GlobalModules);

    this.data = {};
    this.styles = {};
    var stylesModules = ['theme', 'paintCoatTheme', 'paintCoat', 'elementCoat', 'fontSetting'];
    this.initModules(global, 'styles', stylesModules);
    this.initElementModules();
    this.handleModules(global);
  }

  _createClass(GlobalModules, [{
    key: "initModules",
    value: function initModules(global, type, moduleKeys) {
      var _this = this;

      moduleKeys.forEach(function (moduleKey) {
        // @ts-ignore
        _this[type][moduleKey] = new _.default[moduleKey.replace(moduleKey[0], moduleKey[0].toLocaleUpperCase())](global ? global[type] : null);
      });
    }
  }, {
    key: "initElementModules",
    value: function initElementModules() {
      if (this.styles.paintCoat) {
        this.styles.paintCoat.defaultColor = _paint.Color.PAINTCOATVALUE;
      }

      if (this.styles.elementCoat) {
        this.styles.elementCoat.defaultColor = _paint.Color.ELEMENTCOATVALUE;
      }

      if (this.styles.fontSetting) {
        this.styles.fontSetting.defaultFontColor = _paint.Color.FONTCOLOR;
        this.styles.fontSetting.defaultTitleColor = _paint.Color.TITLECOLOR;
      }
    }
    /**
     * 处理模块初始化之后数据
     * @param global
     */

  }, {
    key: "handleModules",
    value: function handleModules(global) {
      var dataKeys = Object.keys(this.data);
      var styleKeys = Object.keys(this.styles);

      if (global.data) {
        Object.keys(global.data).forEach(function (key) {
          if (!dataKeys.includes(key) && global.data) {
            delete global.data[key];
          }
        });
      }

      Object.keys(global.styles).forEach(function (key) {
        if (!styleKeys.includes(key)) {
          delete global.styles[key];
        }
      });
      [].concat(_toConsumableArray(Object.values(this.data)), _toConsumableArray(Object.values(this.styles))).forEach(function (module) {
        module.handleChartData(global);
      });
    }
  }]);

  return GlobalModules;
}();
/**
 * 初始化全局配置
 */


var _default = function _default() {
  var global = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    styles: {}
  };
  // 对比 - 对象中的key并赋值初始值
  (0, _objectKeyCompare.recursion)(defaultOptions.styles, _objectKeyCompare.compare, [], defaultOptions.styles, global.styles);
  var modules = new GlobalModules(global);
  return {
    global: global,
    modules: modules
  };
};

exports.default = _default;