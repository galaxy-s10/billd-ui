"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = require("../options");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 处理柱状图表数据
 * @param options
 */
function handleStripeData(options) {
  var data;
  var dimensionLength = 0;
  var dimensionArray = {};
  var groupArray = [];
  var maxMetric = 0;
  var minMetric = 0;
  var groupNameArray = null;
  var groupLength = 0;
  var metricRangeData;
  var total;

  if (options.groupDimension && options.groupDimension.field && options.metric.length) {
    var group = {};
    var mergeGroup = [];
    var fields = {};
    var field = {};
    var dimension;
    var groupName;
    total = {};
    options.data.forEach(function (item) {
      maxMetric = Math.max(maxMetric, item[options.metric[0].uid]);
      minMetric = Math.min(minMetric, item[options.metric[0].uid]); // 计算数值总和

      item[options.dimension.uid] = item[options.dimension.uid] || "未知";
      dimension = "tmp_" + item[options.dimension.uid];
      if (!fields[dimension]) fields[dimension] = {};
      item[options.groupDimension.uid] = item[options.groupDimension.uid] || "未知";
      groupName = item[options.groupDimension.uid];

      if (!Object.keys(group).includes(groupName)) {
        if (Object.keys(group).length < _options.maxGroup - 1) {
          group[groupName] = 0;
        } else if (!mergeGroup.includes(groupName)) {
          mergeGroup.push(groupName);
        }
      }

      field = fields[dimension];

      if (mergeGroup.includes(groupName)) {
        groupName = "其他";
      }

      field[groupName] = field[groupName] || 0;
      field[groupName] += item[options.metric[0].uid];
      total[dimension] = total[dimension] || 0;
      total[dimension] += item[options.metric[0].uid];
    });

    if (mergeGroup.length) {
      group["其他"] = 0;
    }

    groupArray = Object.keys(group).map(function (key) {
      return key.replace("tmp_", "");
    });
    groupLength = groupArray.length;
    dimensionArray = Object.keys(fields).map(function (key) {
      return key.replace("tmp_", "");
    });
    dimensionLength = dimensionArray.length;
    metricRangeData = Array.from({
      length: Object.keys(fields).length
    }, function () {
      return [];
    });
    data = dimensionArray.map(function (key, rowIndex) {
      // 堆叠图暂时关闭自定义范围功能 - 如果开启后，需要把if,else注释打开
      if (options.metricRange) {
        return [key].concat(_toConsumableArray(Object.values(_extends({}, group, fields["tmp_" + key])).map(function (metric, index) {
          metricRangeData[rowIndex][index] = metric;

          if (options.metricRange && options.metricRange.max !== null && metric > options.metricRange.max) {
            return options.metricRange.max;
          } else if (options.metricRange && options.metricRange.min !== null && metric < options.metricRange.min) {
            return options.metricRange.min;
          }

          return metric;
        })));
      } else {
        return [key].concat(_toConsumableArray(Object.values(_extends({}, group, fields["tmp_" + key]))));
      }
    });
  } else {
    groupNameArray = {};
    total = [];
    groupArray = options.metric.map(function (field) {
      groupNameArray[field.uid] = field.alias || field.name;
      return field.uid;
    });
    metricRangeData = {};
    var _fields = {};

    var _dimension;

    options.data.forEach(function (item, rowIndex) {
      item[options.dimension.uid] = item[options.dimension.uid] || "未知"; // 为了解决数字维度带来的Object对象自动排序

      _dimension = "tmp_" + item[options.dimension.uid];
      if (!_fields[_dimension]) _fields[_dimension] = [_dimension];
      dimensionArray[_dimension] = null;
      options.metric.forEach(function (metric, index) {
        var num = item[metric.uid]; // 计算数值绝对值总和

        total[index] = total[index] || 0;
        total[index] += num;
        metricRangeData[_dimension] = metricRangeData[_dimension] || [];
        metricRangeData[_dimension][index] = metricRangeData[_dimension][index] || 0;
        metricRangeData[_dimension][index] += num;
        _fields[_dimension][index + 1] = _fields[_dimension][index + 1] || 0;
        _fields[_dimension][index + 1] += num;
      });
    });
    data = Object.values(_fields).map(function (item) {
      item[0] = item[0].replace("tmp_", "");
      return item;
    });
    dimensionLength = data.length;
    metricRangeData = Object.values(metricRangeData);
    data.forEach(function (item, rowIndex) {
      item.forEach(function (cell, index) {
        if (typeof cell === "number" && options.metricRange) {
          if (options.metricRange && options.metricRange.max !== null && cell > options.metricRange.max) {
            item[index] = options.metricRange.max;
          } else if (options.metricRange && options.metricRange.min !== null && cell < options.metricRange.min) {
            item[index] = options.metricRange.min;
          }

          maxMetric = Math.max(maxMetric, item[index] || 0);
          minMetric = Math.min(minMetric, item[index] || 0);
        }
      });
    });
    dimensionArray = Object.keys(dimensionArray);
  }

  var chartData = {
    dimensionLength: dimensionLength,
    dimensionArray: dimensionArray,
    groupLength: groupLength,
    groupArray: groupArray,
    groupNameArray: groupNameArray,
    maxMetric: maxMetric,
    minMetric: minMetric,
    data: data,
    index: 0,
    metricRangeData: metricRangeData,
    maxDimension: _options.maxDimension,
    total: total
  };
  chartData.maxDimension = parseInt((_options.maxDimensionColumns / chartData.groupLength).toString(), 10);
  chartData.maxDimension = chartData.maxDimension > _options.maxDimension || isNaN(chartData.maxDimension) ? _options.maxDimension : chartData.maxDimension;
  return chartData;
}

var _default = handleStripeData;
exports.default = _default;