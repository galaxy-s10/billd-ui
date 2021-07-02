"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = require("../options");

/**
 * 处理圆饼图表
 * @param options
 */
function handlePieData(options) {
  var dimensionLength = options.data.length;
  var dimensionArray = {};
  var groupLength = dimensionLength;
  var groupArray = [];
  var data = options.data;
  var total = 0;
  var maxMetric = 0;
  var minMetric = 0;
  var groupNum = options.dimensionLimit || _options.maxGroup;

  if (groupLength > groupNum) {
    var mergeData = [];
    options.data.forEach(function (item, index) {
      maxMetric = Math.max(maxMetric, item[options.metric[0].uid]);
      minMetric = Math.min(minMetric, item[options.metric[0].uid]); // 计算数值绝对值总和

      total += Math.abs(item[options.metric[0].uid] ? item[options.metric[0].uid] : 0);
      item[options.dimension.uid] = item[options.dimension.uid] || "未知";

      if (index < groupNum - 1) {
        groupArray.push(item[options.dimension.uid]);
        mergeData.push(item);
      } else {
        if (!mergeData[groupNum - 1]) {
          mergeData[groupNum - 1] = {};
          mergeData[groupNum - 1][options.dimension.uid] = "其他";
          mergeData[groupNum - 1][options.metric[0].uid] = 0;
        }

        mergeData[groupNum - 1][options.metric[0].uid] += item[options.metric[0].uid];
      }
    });
    groupArray.push("其他");
    data = mergeData;
  } else {
    groupArray = options.data.map(function (field) {
      maxMetric = Math.max(maxMetric, field[options.metric[0].uid]);
      minMetric = Math.min(minMetric, field[options.metric[0].uid]); // 计算数值绝对值总和

      total += Math.abs(field[options.metric[0].uid] ? field[options.metric[0].uid] : 0);
      return field[options.dimension.uid];
    });
  }

  return {
    dimensionLength: dimensionLength,
    dimensionArray: dimensionArray,
    groupLength: groupLength,
    groupArray: groupArray,
    data: data,
    maxDimension: _options.maxDimension,
    total: total,
    maxMetric: maxMetric,
    minMetric: minMetric
  };
}

var _default = handlePieData;
exports.default = _default;