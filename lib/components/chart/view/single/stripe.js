"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _options = require("../options");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制条形图表
 * @param chartOptions
 * @param options
 * @param chartData
 */
function stripeChartOptions(chartOptions, options, chartData) {
  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    xAxis: {
      inverse: true
    },
    yAxis: {
      position: "top"
    },
    grid: {
      right: "10%"
    },
    tooltip: {
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: _options.tooltipShadowColor
        }
      }
    },
    series: getSeries(options, chartData)
  }),
      xAxis = _viewOptions.xAxis,
      yAxis = _viewOptions.yAxis,
      tooltip = _viewOptions.tooltip,
      series = _viewOptions.series,
      grid = _viewOptions.grid;

  var dataZoom = (0, _view.getDataZoom)(options, chartData);
  (0, _view.warningLine)({
    xAxis: xAxis,
    yAxis: yAxis,
    series: series
  }, chartData, options, "y"); // x轴和y轴互换

  _extends(chartOptions, {
    xAxis: yAxis,
    yAxis: xAxis,
    tooltip: tooltip,
    series: series,
    grid: grid,
    dataZoom: dataZoom
  });

  return chartOptions;
}
/**
 * 获取系列列表，每个系列通过 type 决定自己的图表类型
 * @param options
 * @param chartData
 */


function getSeries(options, chartData) {
  return chartData.groupArray.map(function (group) {
    var max = Math.max((100 - chartData.groupArray.length * 5) / chartData.groupArray.length, 3.5);
    var optionData = {
      name: group,
      type: "bar",
      barGap: "20%",
      // barWidth: max + "%",
      barMinWidth: 1,
      barCategoryGap: "20%",
      label: {
        // 数值显示开关
        show: options.dataLabel === null ? true : options.dataLabel,
        position: "insideRight",
        offset: [30, 0],
        color: (0, _view.fontSetting)(options),
        formatter: function formatter(params) {
          // 数值格式设置
          return (0, _view.numericalFormatting)(params, chartData, options);
        }
      },
      barMinHeight: 1 // barCategoryGap: "22px"

    };
    return optionData;
  });
}

var _default = stripeChartOptions;
exports.default = _default;