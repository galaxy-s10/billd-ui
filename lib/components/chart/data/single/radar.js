"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = require("../options");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 处理雷达图图表
 * @param options
 */
function handleRadarData(options) {
  var metricRangeData = [];
  var data = [];
  var dimensionLength = 0;
  var dimensionArray = {};
  var groupArray = [];
  var maxMetric = 0;
  var minMetric = 0;
  var groupNameArray = null;
  var groupLength = 0;
  var maxDimension = 20;
  var total = 0;

  if (options.groupDimension && options.groupDimension.field && options.metric.length) {
    var group = {};
    var mergeGroup = {};
    var dimension;
    var groupDimension;
    var metric;
    options.data.forEach(function (item, index) {
      // 计算数值总和
      total += item[options.metric[0].uid];
      dimension = item[options.dimension.uid];
      groupDimension = item[options.groupDimension.uid];
      metric = item[options.metric[0].uid];

      if (Object.keys(dimensionArray).length > maxDimension - 2 && !Object.keys(dimensionArray).includes(dimension)) {
        dimension = "其他";
      }

      dimensionArray[dimension] = 0;

      if (!group[groupDimension]) {
        if (Object.keys(group).length < _options.maxGroup - 1) {
          group[groupDimension] = {};
        } else {
          mergeGroup[groupDimension] = 0;
        }
      }

      if (Object.keys(mergeGroup).includes(groupDimension)) {
        group["其他"] = group["其他"] || {};
        group["其他"][dimension] = group["其他"][dimension] || 0;
        group["其他"][dimension] += metric;
      } else {
        group[groupDimension][dimension] = metric;
      }
    });
    data = Object.keys(group).map(function (keys) {
      return Object.values(_extends({}, dimensionArray, group[keys]));
    });
    groupArray = Object.keys(group);
    groupLength = groupArray.length;
    dimensionArray = Object.keys(dimensionArray);
    dimensionLength = dimensionArray.length;
  } else {
    groupNameArray = {};
    groupArray = options.metric.map(function (field) {
      groupNameArray[field.uid] = field.alias || field.name;
      return field.uid;
    });
    dimensionLength = options.data.length;

    var _dimension;

    options.data.forEach(function (item, rowIndex) {
      if (rowIndex < maxDimension - 1) {
        // 为了解决数字维度带来的Object对象自动排序
        _dimension = item[options.dimension.uid] ? "tmp" + item[options.dimension.uid] : "未知";
        dimensionArray[_dimension] = 0;
        options.metric.forEach(function (metric, index) {
          if (!data[index]) data[index] = [];
          data[index].push(item[metric.uid]); // 计算数值总和

          total += Number(metric.uid);
        });
      } else {
        dimensionArray["其他"] = 0;
        options.metric.forEach(function (metric, index) {
          // 计算数值总和
          total += Number(metric.uid);
          data[index][maxDimension - 1] = data[index][maxDimension - 1] || 0;
          data[index][maxDimension - 1] += item[metric.uid];
        });
      }
    });
    dimensionArray = Object.keys(dimensionArray).map(function (item) {
      var value = item.replace("tmp", "");
      return value;
    });
  }

  metricRangeData = JSON.parse(JSON.stringify(data));
  data.forEach(function (item, rowIndex) {
    var metricIndex = rowIndex;

    if (!options.groupDimension) {
      total = item.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    } else {
      metricIndex = 0;
    }

    item.forEach(function (metric, index) {
      if (options.metricRange && options.metricRange.max !== null && metric > options.metricRange.max) {
        item[index] = options.metricRange.max;
      } else if (options.metricRange && options.metricRange.min !== null && metric < options.metricRange.min) {
        item[index] = options.metricRange.min;
      }

      maxMetric = Math.max(maxMetric, item[index] || 0);
      minMetric = Math.min(minMetric, item[index] || 0);
    });
  });
  return {
    dimensionLength: dimensionLength,
    dimensionArray: dimensionArray,
    groupLength: groupLength,
    groupArray: groupArray,
    groupNameArray: groupNameArray,
    maxMetric: maxMetric,
    minMetric: minMetric,
    data: data,
    maxDimension: maxDimension,
    metricRangeData: metricRangeData,
    total: total
  };
}

var _default = handleRadarData;
exports.default = _default;