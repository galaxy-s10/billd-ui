"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _options = require("../../view/options");

var _number = require("../../../../utils/number");

var _alias = _interopRequireDefault(require("../../../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制散点图（气泡图）
 * @param chartOptions
 * @param options
 * @param chartData
 */
function scatterOptions(chartOptions, options, chartData) {
  var extendLegend = {};

  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    xAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          type: "dashed"
        }
      },
      axisLine: {
        lineStyle: {
          color: _options.lineColor
        }
      },
      axisLabel: {
        color: (0, _view.fontSetting)(options)
      }
    },
    yAxis: {
      axisTick: {
        show: false
      },
      axisLabel: {
        color: (0, _view.fontSetting)(options),
        formatter: function formatter(value) {
          // 数值显示功能以第一个指标的设置为主
          var numberFormat = options.metric[0].options.numberFormat;

          if (numberFormat) {
            value = (0, _number.convertNumber)(value, numberFormat);
          }

          if (!numberFormat || !numberFormat.fraction && !numberFormat.percent) {
            value = (0, _number.stringNumber)(value);
          }

          return value;
        }
      }
    },
    tooltip: {
      trigger: "item",
      formatter: function formatter(params) {
        var realName = options.dimension ? (0, _alias.default)(options.dimension.uid, params.data.slice(-2, -1)[0], options.dataAlias) : "";
        var seriesName = realName || params.data.slice(-2, -1);
        var res = params.marker + seriesName;
        options.metric.forEach(function (metric, index) {
          // 数值格式设置
          if (metric.options.numberFormat) {
            var numberFormatValue = (0, _number.convertNumber)(params.data[index], metric.options.numberFormat);
            res += "<br/>" + (metric.alias || metric.name) + ": " + numberFormatValue;
          } else {
            res += "<br/>" + (metric.alias || metric.name) + ": " + params.data[index];
          }
        });
        return res;
      }
    },
    series: getSeries(options, chartData)
  }),
      xAxis = _viewOptions.xAxis,
      yAxis = _viewOptions.yAxis,
      tooltip = _viewOptions.tooltip,
      series = _viewOptions.series,
      legend = _viewOptions.legend;

  _extends(chartOptions, {
    xAxis: xAxis,
    yAxis: yAxis,
    tooltip: tooltip,
    series: series
  });

  return chartOptions;
}
/**
 * 获取系列列表，每个系列通过 type 决定自己的图表类型
 * @param options
 * @param chartData
 */


function getSeries(options, chartData) {
  var maxSize = 50;
  var maxValue;
  var sizeMode = options.metric.length > 2;
  var tmpArr = [];

  if (sizeMode) {
    chartData.data.forEach(function (item) {
      item.forEach(function (son) {
        if (son[2]) {
          // @ts-ignore
          tmpArr.push(son[2]);
        }
      });
    });
    maxValue = Math.max.apply(Math, tmpArr);
  }

  return chartData.data.map(function (item, index) {
    return {
      type: "scatter",
      name: chartData.groupArray[index],
      data: item,
      symbolSize: function symbolSize(data) {
        if (sizeMode) {
          if (maxValue) {
            var curSize = maxSize * (data[2] / maxValue);
            return curSize < 1 ? 1 : curSize;
          } else {
            return 0;
          }
        } else {
          return 15;
        }
      },
      itemStyle: {
        normal: {
          shadowBlur: 8,
          shadowColor: "rgba(25, 100, 150, 0.5)",
          shadowOffsetY: 2
        }
      }
    };
  });
}

var _default = scatterOptions;
exports.default = _default;