"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _number = require("../../../../utils/number");

var _alias = _interopRequireDefault(require("../../../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制漏斗图
 * @param chartOptions
 * @param options
 * @param chartData
 */
function funnelChartOptions(chartOptions, options, chartData) {
  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    tooltip: {
      trigger: "item",
      formatter: function formatter(params) {
        // 数值格式设置
        return params.marker + funnelNumberFormat(options, params);
      }
    },
    series: getSeries(options, chartData)
  }),
      tooltip = _viewOptions.tooltip,
      series = _viewOptions.series;

  _extends(chartOptions, {
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
  return {
    name: options.dimension.alias || options.dimension.name,
    type: "funnel",
    min: 0,
    minSize: "0%",
    maxSize: "100%",
    left: options.legend && options.legend.position === "left" ? 125 : 80,
    right: options.legend && options.legend.position === "right" ? 125 : 80,
    label: {
      show: options.dataLabel === null || options.dataLabel === undefined ? true : options.dataLabel,
      position: "inside",
      formatter: function formatter(params) {
        // 数值格式设置
        return funnelNumberFormat(options, params);
      }
    },
    labelLine: {
      length: 10,
      lineStyle: {
        width: 1,
        type: "solid"
      }
    },
    itemStyle: {
      borderColor: "#fff",
      borderWidth: 1
    },
    emphasis: {
      label: {
        fontSize: 20
      }
    },
    data: chartData.data.map(function (item) {
      return {
        name: item[options.dimension.uid],
        value: item[options.metric[0].uid]
      };
    })
  };
}
/**
 * 格式化显示
 * @param options
 * @param params
 */


function funnelNumberFormat(options, params) {
  // 数值格式设置
  var aliaName = options.dimension ? (0, _alias.default)(options.dimension.uid, params.name, options.dataAlias) : "";
  var name = aliaName || params.name;
  var value = params.value ? params.value : 0;
  var res;
  options.metric.forEach(function (metric, index) {
    if (params.componentIndex === index) {
      // 数值格式设置
      if (metric.options.numberFormat) {
        res = name + "：" + (0, _number.convertNumber)(value, metric.options.numberFormat);
      } else {
        res = name + "：" + value;
      }
    }
  });
  return res;
}

var _default = funnelChartOptions;
exports.default = _default;