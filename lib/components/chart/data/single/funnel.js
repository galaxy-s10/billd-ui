"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _options = require("../options");

/**
 * 处理漏斗图表
 * @param options
 */
function handleFunnelData(options) {
  var dimensionLength = options.data.length;
  var dimensionArray = {};
  var groupLength = dimensionLength;
  var groupArray = [];
  var data = options.data;
  var total = 0;
  var maxMetric = 0;
  var minMetric = 0;
  var groupNum = _options.maxFunnelGroup; // 数据超过10条后额外处理

  if (groupLength > groupNum) {
    var mergeData = [];
    options.data.forEach(function (item, index) {
      maxMetric = Math.max(maxMetric, item[options.metric[0].uid]);
      minMetric = Math.min(minMetric, item[options.metric[0].uid]); // 计算数值总和

      total += item[options.metric[0].uid];

      if (index < groupNum - 1) {
        groupArray.push(item[options.dimension.uid]);
        mergeData.push(item);
      } else {
        if (!mergeData[groupNum - 1]) {
          mergeData[groupNum - 1] = {};
          mergeData[groupNum - 1][options.metric[0].uid] = 0;
          mergeData[groupNum - 1][options.dimension.uid] = '其他';
        }

        mergeData[groupNum - 1][options.metric[0].uid] += item[options.metric[0].uid];
      }
    });
    groupArray.push('其他');
    data = mergeData;
  } else {
    groupArray = options.data.map(function (field) {
      maxMetric = Math.max(maxMetric, field[options.metric[0].uid]);
      minMetric = Math.min(minMetric, field[options.metric[0].uid]); // 计算数值总和

      total += field[options.metric[0].uid];
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

var _default = handleFunnelData;
exports.default = _default;