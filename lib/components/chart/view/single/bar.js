"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _options = require("../options");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制柱状图表
 * @param chartOptions
 * @param options
 * @param chartData
 */
function barChartOptions(chartOptions, options, chartData) {
  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    xAxis: "default",
    yAxis: "default",
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
      series = _viewOptions.series;

  var dataZoom = (0, _view.getDataZoom)(options, chartData);

  _extends(chartOptions, {
    xAxis: xAxis,
    yAxis: yAxis,
    tooltip: tooltip,
    series: series,
    dataZoom: dataZoom
  }); // 警戒线功能


  (0, _view.warningLine)(chartOptions, chartData, options);
  return chartOptions;
}
/**
 * 获取系列列表，每个系列通过 type 决定自己的图表类型
 * @param options
 * @param chartData
 */


function getSeries(options, chartData) {
  return chartData.groupArray.map(function (group) {
    // 9.27 间距改为20%
    // const max = Math.max(
    //   (100 - chartData.groupArray.length * 5) / chartData.groupArray.length,
    //   3.5
    // );
    var optionData = {
      name: group,
      type: "bar",
      barGap: "20%",
      // barWidth: max + "%",
      barMinHeight: 1,
      barCategoryGap: "20%",
      label: {
        // 数值显示开关
        show: options.dataLabel === null ? true : options.dataLabel,
        position: "top",
        color: (0, _view.fontSetting)(options),
        formatter: function formatter(params) {
          // 数值格式设置
          return (0, _view.numericalFormatting)(params, chartData, options);
        }
      }
    };
    return optionData;
  });
}

var _default = barChartOptions;
exports.default = _default;