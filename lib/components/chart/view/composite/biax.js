"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _single = _interopRequireDefault(require("../single"));

var _alias = _interopRequireDefault(require("../../../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制双轴图
 * @param chartOptions
 * @param options
 * @param chartDatas
 */
function biaxOptions(chartOptions, options, chartDatas) {
  var metricTypes = options.multiMetricType;
  var metricGroup = options.metricGroup;
  var chartsoptions = [];
  var series = [];
  var yAxis = [];
  var xAxis = [];
  var tooltip = {};
  var groupNameArray = {}; // 是否都是柱形图 （堆叠柱状和柱状）

  var bothbar = metricTypes && metricTypes.every(function (i) {
    return i === "bar" || i === "pileBar";
  });

  if (metricTypes && metricTypes.length > 0) {
    metricTypes.forEach(function (metricType, index) {
      groupNameArray = _extends({}, groupNameArray, chartDatas[index].groupNameArray);
      var chartOption = {};

      var singleOptions = _extends({}, options, {
        metric: metricGroup && [index] ? _toConsumableArray(metricGroup[index]) : [],
        type: metricType
      });

      chartOption = _single.default[singleOptions.type](chartOptions, singleOptions, chartDatas[index]);
      chartsoptions.push(chartOption); // 设置x轴边距

      chartOption.xAxis.boundaryGap = true; // 设置y轴的刻度尺 每个y轴都保持5个刻度

      chartOption.yAxis.splitNumber = 5; // 根据设置的最大值最小值 设置最终的最大值最小值和每个刻度的单位

      chartOption.yAxis.max = chartOption.yAxis.max ? chartOption.yAxis.max : chartDatas[index].maxMetric || null; // 根据设置的最大值最小值 设置最终的最大值最小值和每个刻度的单位

      var maxMetric = chartOption.yAxis.max ? chartOption.yAxis.max : chartDatas[index].maxMetric;
      var minMetric = chartOption.yAxis.min ? chartOption.yAxis.min : chartDatas[index].minMetric;

      if (maxMetric || minMetric) {
        chartOption.yAxis.interval = (Math.abs(maxMetric) + Math.abs(minMetric)) / 5;
      } // 当第二个y轴需要设置层级


      chartOption.series.forEach(function (i) {
        // 设置数据得y轴是第几个
        i.yAxisIndex = index; // 设置图表的层级

        i.zlevel = metricType === "area" ? 0 : 1; // 如果都是柱形图设置柱子得宽度
        // if (bothbar) {
        //   let wid = Number(i.barWidth.replace("%", "")) / 2;
        //   wid = wid < 3 ? 3 : wid;
        //   i.barWidth = wid + "%";
        // }
      });
      series.push.apply(series, _toConsumableArray(chartOption.series));
      yAxis.push(chartOption.yAxis);
      xAxis = [chartOption.xAxis];
      tooltip = chartOption.tooltip;
    });
  } // 重写tooltip


  tooltip.formatter = function (params) {
    var realName = options.dimension ? (0, _alias.default)(options.dimension.uid, params[0].name, options.dataAlias) : "";
    var name = realName || params[0].name;
    var seriesName;
    var value;
    var res = name + "<br/>";
    params.forEach(function (item, index) {
      var seriesIndex;

      if (options.groupDimension) {
        seriesIndex = series.find(function (i, num) {
          return item.seriesIndex === num;
        }).yAxisIndex;
      } else {
        seriesIndex = series.find(function (i) {
          return i.name === item.seriesName;
        }).yAxisIndex;
      }

      var firstSeriesNum = series.filter(function (f) {
        return f.yAxisIndex === 0;
      });
      var beforeIndex = seriesIndex === 0 ? 0 : firstSeriesNum ? firstSeriesNum.length : 0;
      var realSeriesName;

      if (options.groupDimension) {
        realSeriesName = options.groupDimension ? (0, _alias.default)(options.groupDimension.uid, item.seriesName, options.dataAlias) : "";
        seriesName = realSeriesName || item.seriesName;
      } else {
        seriesName = groupNameArray ? groupNameArray[item.seriesName] : options.dataAlias[item.seriesName] || item.seriesName;
      }

      value = (0, _view.numericalFormatting)(item, chartDatas[seriesIndex], options, beforeIndex);
      res += item.marker + seriesName + "：" + value + "<br/>";
    });
    return res;
  };

  var latestOption = _extends({}, chartOptions, {
    series: series,
    yAxis: yAxis,
    xAxis: xAxis,
    tooltip: tooltip
  });

  return latestOption;
}

var _default = biaxOptions;
exports.default = _default;