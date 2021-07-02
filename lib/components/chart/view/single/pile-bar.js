"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _options = require("../../../../components/chart/view/options");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制堆叠柱状图表
 * @param chartOptions
 * @param options
 * @param chartData
 */
function pileBarChartOptions(chartOptions, options, chartData) {
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


  (0, _view.warningLine)(chartOptions, chartData, options); // 堆叠图处理负数值 - 临时方案（等Echart更新修复BUG后，需要去除该方法）

  handlePileBarValue(chartData, chartOptions);
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
      barCategoryGap: "20%",
      stack: "堆叠柱状图stack"
    };
    optionData.label = {
      color: (0, _view.fontSetting)(options),
      // 数值显示开关
      show: options.dataLabel === null ? true : options.dataLabel,
      position: "inside",
      formatter: function formatter(params) {
        // 数值格式设置
        return (0, _view.numericalFormatting)(params, chartData, options);
      }
    }; // 柱条最小高度

    optionData.barMinHeight = 1; // 柱子间距

    optionData.barCategoryGap = "22px";
    return optionData;
  });
}
/**
 * 堆叠图处理负数值
 * @param chartData
 * @param publicOptions
 */


function handlePileBarValue(chartData, publicOptions) {
  if (chartData.data.length === 1) {
    var count = null;
    chartData.data.forEach(function (item, index) {
      if (index !== 0 && item < 0) {
        count !== null ? count > item ? count = item : count : count = item;
      }
    });
    publicOptions.yAxis.min = count;
  } else {
    var _count = null;
    var arr = [];
    var min;
    chartData.data.forEach(function (data) {
      if (data.length > 2) {
        data.forEach(function (item, index) {
          if (index !== 0 && item < 0) {
            _count += item;

            if (index === data.length - 1) {
              arr.push(_count);
            }
          }
        });
      }
    });

    if (arr.length !== 0) {
      min = Math.min.apply(null, arr);
      publicOptions.yAxis.min = min;
    } else {
      publicOptions.yAxis.max = publicOptions.yAxis.max || null;
      publicOptions.yAxis.min = publicOptions.yAxis.min || null;
    }
  }
}

var _default = pileBarChartOptions;
exports.default = _default;