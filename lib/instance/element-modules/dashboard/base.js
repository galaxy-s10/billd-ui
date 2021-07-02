"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modules = _interopRequireDefault(require("../../modules"));

var _chartType = require("../../../enum/chart-type");

var _options = _interopRequireDefault(require("../../../dist/options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    this.showDataList = {}; // 数据显示的展示模型

    this.showStylesList = {}; // 样式显示的展示模型
    // 初始化渲染data模块

    var dataModules = ['chartTitle', 'chartSwitch', 'dimension', 'metric', 'sort', 'limit', 'filter'];
    var stylesModules = ['theme', 'elementCoat', 'fontSetting'];
    this.initModules(chart, 'data', dataModules);
    this.initModules(chart, 'styles', stylesModules);
  }
  /**
   * 注册模块
   * @param chart
   * @param type
   * @param moduleKeys
   */


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
     * @param oModules 旧模块
     */

  }, {
    key: "handleModules",
    value: function handleModules(chart, oModules) {
      var dataKeys = Object.keys(this.data);
      var styleKeys = Object.keys(this.styles);
      Object.keys(chart.data).forEach(function (key) {
        if (!dataKeys.includes(key) && key !== 'title') {
          delete chart.data[key];
        }
      });
      Object.keys(chart.styles).forEach(function (key) {
        if (!styleKeys.includes(key)) {
          delete chart.styles[key];
        }
      });

      var modules = _extends({}, this.data, this.styles);

      Object.keys(modules).forEach(function (key) {
        // 只针对明细表和透视表行列做控制
        if ([_chartType.ElementType.LIST, _chartType.ElementType.TABLE].includes(chart.type) && _options.default.charts[chart.type] && _options.default.charts[chart.type][key] && modules[key].max) {
          modules[key].max = _options.default.charts[chart.type][key];
        }

        modules[key].handleChartData(chart);
      });

      if (oModules) {
        Object.keys(oModules).forEach(function (moduleType) {
          Object.keys(oModules[moduleType]).forEach(function (module) {
            chart[moduleType][module] = oModules[moduleType][module];
          });
        });
      }
    }
  }]);

  return BaseChartModules;
}();

exports.default = BaseChartModules;