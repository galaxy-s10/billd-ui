"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = _interopRequireDefault(require("../../modules"));

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

var BaseChartModules = /*#__PURE__*/function () {
  /**
   * 构建函数
   * @param chart
   * @param modules
   */
  function BaseChartModules(chart, modules) {
    _classCallCheck(this, BaseChartModules);

    this.data = {};
    this.styles = {};
    this.inventedChartData = {};
    var dataModules = ['chartTitle', 'dimension', 'metric', 'sort', 'limit'];
    var stylesModules = ['theme'];
    this.initModules(chart, 'data', dataModules);
    this.initModules(chart, 'styles', stylesModules);
  }

  _createClass(BaseChartModules, [{
    key: "initModules",
    value: function initModules(chart, type, moduleKeys) {
      var _this = this;

      moduleKeys.forEach(function (moduleKey) {
        // @ts-ignore
        _this[type][moduleKey] = new _modules.default[moduleKey.replace(moduleKey[0], moduleKey[0].toLocaleUpperCase())]();
      });
    }
    /**
     * 处理模块初始化之后数据
     * @param chart
     * @param modules
     */

  }, {
    key: "handleModules",
    value: function handleModules(chart, modules) {
      var dataKeys = Object.keys(this.data);
      var styleKeys = Object.keys(this.styles);
      Object.keys(chart.data).forEach(function (key) {
        if (!dataKeys.includes(key)) {
          delete chart.data[key];
        }
      });
      Object.keys(chart.styles).forEach(function (key) {
        if (!styleKeys.includes(key)) {
          delete chart.styles[key];
        }
      });
      [].concat(_toConsumableArray(Object.values(this.data)), _toConsumableArray(Object.values(this.styles))).forEach(function (module) {
        module.handleChartData(chart);
      });

      if (modules) {
        Object.keys(modules).forEach(function (moduleType) {
          Object.keys(modules[moduleType]).forEach(function (module) {
            chart[moduleType][module] = modules[moduleType][module];
          });
        });
      }

      this.inventedChartData = JSON.parse(JSON.stringify(chart.data));
    }
  }]);

  return BaseChartModules;
}();

exports.default = BaseChartModules;