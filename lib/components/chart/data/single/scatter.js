"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = require("../options");

/**
 * 处理散点图图表
 * @param options
 */
function handleScatterData(options) {
  var dimensionLength = 0;
  var dimensionArray = {};
  var groupArray = [];
  var groupNameArray = null;
  var groupLength = 0;
  var maxMetric = 0;
  var minMetric = 0;
  var total = 0;
  var data = [];
  var arr = [];
  var groupArr = [];
  var avgMetric = 0; // 散点图本没有占比及数值格式设置功能，兼容之前开启设置的脏数据

  if (options.metric.length) {
    options.metric.forEach(function (metric, index) {
      if (metric.options.numberFormat) {
        metric.options.numberFormat.comma = false;
        metric.options.numberFormat.percent = false;
      }
    });
  }

  if (options.groupDimension) {
    var tmp = {};
    options.data.forEach(function (row) {
      var groupName = row[options.groupDimension.uid];

      if (!groupArray.includes(groupName)) {
        if (groupArray.length < _options.maxGroup - 1) {
          groupArray.push(groupName);
        } else {
          groupName = "未知";
        }
      }

      tmp[groupName] = tmp[groupName] || [];
      arr = tmp[groupName];
      groupArr = [];
      options.metric.forEach(function (metric, index) {
        if (index === 1) {
          maxMetric = Math.max(maxMetric, row[metric.uid]);
          minMetric = Math.min(minMetric, row[metric.uid]);
        }

        groupArr.push(row[metric.uid]);

        if (index === 2) {
          total += row[metric.uid];
        }
      });
      groupArr.push(row[options.dimension.uid], row[options.groupDimension.uid]);
      arr.push(groupArr);
    });
    groupArray = Object.keys(tmp);
    data = Object.values(tmp);
  } else {
    options.data.forEach(function (row) {
      arr = [];
      options.metric.forEach(function (metric, index) {
        if (index === 1) {
          maxMetric = Math.max(maxMetric, row[metric.uid]);
          minMetric = Math.min(minMetric, row[metric.uid]);
        }

        arr.push(row[metric.uid]);

        if (index === 2) {
          total += row[metric.uid];
        }
      });
      arr.push(row[options.dimension.uid], options.dimension.name);
      data.push(arr);
    });
    data = [data];
    groupArray.push(options.dimension.name);
  }

  avgMetric = total / options.data.length;
  return {
    data: data,
    dimensionLength: dimensionLength,
    dimensionArray: dimensionArray,
    groupArray: groupArray,
    groupLength: groupLength,
    groupNameArray: groupNameArray,
    maxDimension: _options.maxDimension,
    avgMetric: avgMetric,
    maxMetric: maxMetric,
    minMetric: minMetric
  };
}

var _default = handleScatterData;
exports.default = _default;