"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChartModules = exports.createNewChart = void 0;

var _instance = _interopRequireDefault(require("../../element/instance"));

var _analysis = _interopRequireDefault(require("../analysis"));

var _getModules = require("../../../instance/help/getModules");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建图表实例
 * @param chartType
 * @param oldChart  旧的图表数据
 */
var createNewChart = function createNewChart(chartType, oldChart) {
  var newChart; // 初始化新的图表

  newChart = new _instance.default(chartType, oldChart); // 获取以及配置好的默认配置

  var defaultOpt = (0, _getModules.getBaseModules)(chartType); // 初始化图表模块实例

  (0, _analysis.default)(newChart, oldChart, defaultOpt);
  return newChart;
};
/**
 * 创建图表模块实例
 * @param chart 获取图表配置模型的图表
 * @param oldChart  旧的图表数据
 */


exports.createNewChart = createNewChart;

var createChartModules = function createChartModules(chart, oldChart) {
  var defaultOpt = (0, _getModules.getBaseModules)(chart.type); // 初始化图表模块实例

  var m = (0, _analysis.default)(chart, oldChart, defaultOpt);
  return m;
};

exports.createChartModules = createChartModules;