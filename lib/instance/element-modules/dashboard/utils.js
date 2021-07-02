"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleAnalysisDimensionsAndMetric = handleAnalysisDimensionsAndMetric;
exports.handleDimensionsAndMetric = handleDimensionsAndMetric;
exports.handleLimit = handleLimit;
exports.handleDimensionsAndMetricGroup = handleDimensionsAndMetricGroup;
exports.handleSort = handleSort;

var _modules = _interopRequireDefault(require("../../modules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 统计分析初始化基本两维一指标 or 一维多指标
 * @param modules
 * @param chart
 */
function handleAnalysisDimensionsAndMetric(modules, chart) {
  modules.data.dimension.max = 2;
  modules.data.metric.max = 20;
  initDimensionsAndMetric(modules, chart, {
    dimension: chart.data.dimension || [],
    metric: chart.data.metric || []
  }, false);
}
/**
 * 初始化基本两维一指标 or 一维多指标
 * @param modules
 * @param chart
 */


function handleDimensionsAndMetric(modules, chart) {
  modules.styles.dataLabel = new _modules.default.DataLabel();
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
 * limit开关控制
 * @param modules
 * @param chart
 */


function limitControl(modules, chart, type) {
  if (modules.data.limit) {
    // 0-隐藏、1-显示
    if (type === 0) {
      modules.data.limit.display = false;
      chart.data.limit = null;
    } else {
      modules.data.limit.display = true;
    }
  }
}
/**
 * 处理基本两维一指标 or 一维多指标
 * @param modules
 * @param chart
 * @param data
 * @param changeLimit
 */


function initDimensionsAndMetric(modules, chart, data) {
  var changeLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  // 操作维度触发项
  if (data.dimension) {
    if (data.dimension.length > 1) {
      modules.data.metric.max = 1; // 多指标时

      if (modules.data.metricGroup && modules.data.metricGroup.data) {
        modules.data.metricGroup.data.forEach(function (d, index) {
          modules.data.metricGroup.data[index].max = 1;
        });
      }
    } else {
      modules.data.metric.max = 20; // 多指标时

      if (modules.data.metricGroup && modules.data.metricGroup.data) {
        modules.data.metricGroup.data.forEach(function (d, index) {
          modules.data.metricGroup.data[index].max = 20;
        });
      }
    }
  } // 操作指标触发项


  if (data.metric) {
    if (data.metric.length > 1) {
      modules.data.dimension.max = 1;
    } else {
      modules.data.dimension.max = 2;
    }
  } // 操作指标集合的


  if (data.metricGroup) {
    var hasMoreMetric = chart.data.metricGroup.find(function (m) {
      return m && m.length > 1;
    });

    if (hasMoreMetric) {
      // 如果发现一个维度有超过一个的 那么只能是一维多指标
      modules.data.dimension.max = 1;
    } else {
      modules.data.dimension.max = 2;
    }
  }

  if (changeLimit) {
    handleLimit(modules, chart, {
      dimension: chart.data.dimension || [],
      metric: chart.data.metric || []
    });
  }

  return modules;
}

function handleLimit(modules, chart, data) {
  // 操作维度触发项
  if (data.dimension) {
    if (data.dimension.length > 1) {
      // 2维1标，隐藏limit
      limitControl(modules, chart, 0);
    } else {
      if (chart.data.metric && chart.data.metric.length > 1) {
        // 1维多标，隐藏limit功能
        limitControl(modules, chart, 0);
      } else {
        // 1维1标，显示limit功能
        limitControl(modules, chart, 1);
      }
    }
  } // 操作指标集合的


  if (data.metricGroup) {
    var hasMoreMetric = chart.data.metricGroup.find(function (m) {
      return m && m.length > 1;
    });

    if (hasMoreMetric) {
      limitControl(modules, chart, 0);
    }
  }
}
/**
 * 初始化基本两维一指标 or 一维多指标 多轴图
 * @param modules
 * @param chart
 */


function handleDimensionsAndMetricGroup(modules, chart) {
  modules.data.dimension.max = 2;
  initDimensionsAndMetric(modules, chart, {
    dimension: chart.data.dimension || [],
    metric: chart.data.metric || []
  });

  modules.data.dimension.change = function (data) {
    return initDimensionsAndMetric(modules, chart, data);
  };

  modules.data.metricGroup.change = function (data) {
    return initDimensionsAndMetric(modules, chart, data);
  }; // 隐藏dimensionLimit - 维度数据设置


  if (modules.styles.dimensionLimit) {
    modules.styles.dimensionLimit.display = false;
    chart.styles.dimensionLimit = null;
  }
}
/**
 * 处理维度指标改变，更新sort
 * @param modules
 * @param chart
 */


function handleSort(modules, chart) {}