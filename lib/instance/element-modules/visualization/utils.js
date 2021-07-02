"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDimensionsAndMetric = handleDimensionsAndMetric;

var _modules = _interopRequireDefault(require("../../modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 初始化基本两维一指标 or 一维多指标
 * @param modules
 * @param chart
 */
function handleDimensionsAndMetric(modules, chart) {
  modules.styles.dataLabel = new _modules.default.DataLabel();

  if (chart.data.dimension && chart.data.groupDimension) {
    // 兼容代码， 兼容版本1.1.52之前的代码 后期会删除掉
    chart.data.dimension = chart.data.dimension.concat(chart.data.groupDimension);
    delete chart.data.groupDimension;
  }

  modules.data.dimension.max = 2;
  modules.data.metric.max = 20;
  initDimensionsAndMetric(modules, chart, {
    dimension: chart.data.dimension || [],
    metric: chart.data.metric || []
  });

  modules.data.dimension.change = function (data) {
    return initDimensionsAndMetric(modules, chart, data);
  };

  modules.data.metric.change = function (data) {
    return initDimensionsAndMetric(modules, chart, data);
  }; // 隐藏dimensionLimit - 维度数据设置


  if (modules.styles.dimensionLimit) {
    modules.styles.dimensionLimit.display = false;
    chart.styles.dimensionLimit = null;
  }
}
/**
 * 处理基本两维一指标 or 一维多指标
 * @param modules
 * @param chart
 * @param data
 */


function initDimensionsAndMetric(modules, chart, data) {
  modules.inventedChartData = _extends({}, modules.inventedChartData, data);

  if (data.metric) {
    if (data.metric.length > 1) {
      modules.data.dimension.max = 1;
    } else {
      modules.data.dimension.max = 2;
    }
  }

  if (data.dimension) {
    if (data.dimension.length > 1) {
      modules.data.metric.max = 1;

      if (modules.data.limit) {
        modules.data.limit.display = false;
        chart.data.limit = null;
      }
    } else {
      if (modules.data.limit) {
        modules.data.limit.display = true;
      }

      modules.data.metric.max = 20;
    }
  }

  return {
    modules: modules,
    dataGroup: modules.inventedChartData
  };
}