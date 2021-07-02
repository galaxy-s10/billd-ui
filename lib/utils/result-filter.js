"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResultFilter = handleResultFilter;
exports.resultFilterData = resultFilterData;
exports.default = void 0;

var _chartType = require("../enum/chart-type");

var _filterType = require("../enum/filter-type");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 结果筛选器 过滤结果
 */
function resultFilterData(data, chart) {
  if (!data) return data;
  var type = chart.type;
  var metricGroup = chart.data.metricGroup;
  var metric = chart.data.metric; // 是否是一维多标

  var isMultiMetrics = !chart.data.groupDimension && metric && metric.length > 0; // 明细表或者透视表或地图

  if (type === _chartType.ElementType.LIST || type === _chartType.ElementType.TABLE || type === _chartType.ElementType.MAP) {
    return data;
  } else if (type === _chartType.ElementType.BIAX) {
    // 双轴图
    if (metricGroup && metricGroup.length > 0) {
      var metrics = [];
      metricGroup.forEach(function (oMetric) {
        return metrics.push.apply(metrics, _toConsumableArray(oMetric));
      });
      var filtersMapBiax = handleResultOption(metrics);
      return filtersMapBiax.length > 0 ? handleResultFilter(data, filtersMapBiax) : data;
    }

    return data;
  } else if (metric && metric.length > 0) {
    var filtersMap = handleResultOption(metric);
    return filtersMap.length > 0 ? handleResultFilter(data, filtersMap, isMultiMetrics) : data;
  }

  return data;
}
/**
 * 通过metric 格式化结果筛选器的配置
 * @param metric
 */


var handleResultOption = function handleResultOption(metric) {
  var filters = metric.filter(function (i) {
    return i.options.resultFilter && i.options.resultFilter.display;
  });
  var filtersMap = [];

  if (filters && filters.length > 0) {
    filtersMap = filters.map(function (m) {
      return {
        uid: m.uid,
        options: m.options.resultFilter
      };
    });
  }

  return filtersMap;
};
/**
 * 处理筛选结果
 * @param data 原始数据
 * @param options 结果筛选条件
 */


function handleResultFilter(data, options) {
  var isUnion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var res = data.filter(function (f) {
    var success = true;
    var successOr = false;
    options.forEach(function (o) {
      var initData = f[o.uid];
      var optionRes = handleOption(o, initData);
      success = optionRes.success;
      successOr = optionRes.successOr;
    });
    return isUnion ? success : successOr;
  });
  return res;
}
/**
 * 处理
 * @param o 结果筛选器配置参数
 * @param initData 真实数据
 */


function handleOption(o, initData) {
  var success = true;
  var successOr = false;

  switch (o.options.logic) {
    case _filterType.NumberType.Equal:
      success = success && (initData === o.options.condition || o.options.condition === 0 && !initData);
      successOr = successOr || initData === o.options.condition || o.options.condition === 0 && !initData;
      break;

    case _filterType.NumberType.NotEqual:
      var realRes = o.options.condition === 0 ? !!initData : initData !== o.options.condition;
      success = success && realRes;
      successOr = successOr || realRes;
      break;

    case _filterType.NumberType.Above:
      success = success && initData > o.options.condition;
      successOr = successOr || initData > o.options.condition;
      break;

    case _filterType.NumberType.NotBelow:
      success = success && (initData > o.options.condition || initData === o.options.condition);
      successOr = successOr || initData > o.options.condition || initData === o.options.condition;
      break;

    case _filterType.NumberType.Below:
      success = success && initData < o.options.condition;
      successOr = successOr || initData > o.options.condition;
      break;

    case _filterType.NumberType.NotAbove:
      success = success && (initData < o.options.condition || initData === o.options.condition);
      successOr = successOr || initData < o.options.condition || initData === o.options.condition;
      break;

    case _filterType.NumberType.Range:
      var rule = JSON.parse(o.options.condition);
      var leftRule = rule.leftLogic === _filterType.NumberType.Below ? rule.leftData < initData : rule.leftData < initData || rule.leftData === initData;
      var rightRule = rule.rightLogic === _filterType.NumberType.Below ? initData < rule.rightData : initData < rule.rightData || initData === rule.rightData;
      success = success && leftRule && rightRule;
      successOr = successOr || leftRule && rightRule;
      break;

    case _filterType.NumberType.None:
      // 第一版是0的话 不算是为空
      // success = success && (!initData && initData !== 0);
      success = success && !initData;
      successOr = successOr || !initData;
      break;

    case _filterType.NumberType.NotNone:
      // success = success && (initData !== null || initData !== undefined || initData);
      success = success && initData;
      successOr = successOr || initData;
      break;

    default:
      break;
  }

  return {
    success: success,
    successOr: successOr
  };
}

var _default = {
  handleResultFilter: handleResultFilter,
  resultFilterData: resultFilterData
};
exports.default = _default;