"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _view = require("../../utils/view");

var _options = require("../options");

var _number = require("../../../../utils/number");

var _alias = _interopRequireDefault(require("../../../../utils/alias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 绘制圆饼图表
 * @param chartOptions
 * @param options
 * @param chartData
 */
function pieChartOptions(chartOptions, options, chartData) {
  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    tooltip: {
      trigger: "item",
      formatter: function formatter(params) {
        // 饼图数值格式设置options
        return pieMultipleDataLabel(params, chartData, options, 0);
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
  var seriesCenter = ["50%", "50%"];

  if (options.legend && options.legend.position === "left") {
    seriesCenter = ["60%", "50%"];
  } else if (options.legend && options.legend.position === "right") {
    seriesCenter = ["40%", "50%"];
  }

  return {
    name: options.dimension.alias || options.dimension.name,
    type: "pie",
    center: seriesCenter,
    radius: [0, "50%"],
    itemStyle: {
      borderColor: "#FFF"
    },
    // selectedMode: 'single',
    label: {
      color: (0, _view.fontSetting)(options),
      // 数值显示控制
      show: options.multipleDataLabel ? !!(options.multipleDataLabel.dimensionLabel || options.multipleDataLabel.metricLabel || options.multipleDataLabel.percentLabel) : true,
      formatter: function formatter(params) {
        // 饼图数值格式设置options
        return pieMultipleDataLabel(params, chartData, options, 1);
      }
    },
    labelLine: {
      lineStyle: {
        color: _options.lineColor
      }
    },
    data: chartData.data.map(function (item) {
      return {
        name: item[options.dimension.uid],
        value: Math.abs(item[options.metric[0].uid]),
        actualValue: item[options.metric[0].uid]
      };
    })
  };
}
/**
 * 饼图数值格式设置options
 * @param params
 * @param chartData
 * @param options
 * @param type
 */


function pieMultipleDataLabel(params, chartData, options, type) {
  // 注：百分数计算方式（绝对值/绝对值总和）,value还是显示原始值
  var percent = Number(Math.abs(params.value) / chartData.total * 100);
  percent = isNaN(percent) ? 0 : percent.toFixed(2);
  var aliaName = options.dimension ? (0, _alias.default)(options.dimension.uid, params.name, options.dataAlias) : "";
  var name = aliaName || params.name;
  var res = "";
  var count = 0;
  var changeValue; // 没有勾选显示指标的时候，tooltip也要显示指标值

  var hideValue = (0, _number.convertNumber)(params.data.actualValue, options.metric[0].options.numberFormat || {}); // 0-tooltip-format、1-series-label-format

  type === 0 ? res = params.marker : ""; // 存在则为仪表盘、

  if (options.multipleDataLabel) {
    // 显示维度值
    if (options.multipleDataLabel.dimensionLabel) {
      res += name;
      count += 1;
    } // 显示指标值


    if (options.multipleDataLabel.metricLabel) {
      changeValue = (0, _number.convertNumber)(params.data.actualValue, options.metric[0].options.numberFormat || {
        comma: false,
        percent: false,
        fraction: 0 // 小数位数 默认0

      });
      count === 1 ? res += "：" + changeValue : res += changeValue;
      count += 1;
    } // 显示百分比


    if (options.multipleDataLabel.percentLabel) {
      count === 0 ? res += "".concat(percent, "%") : res += " (".concat(percent, "%)");
      count += 1;
    } // tooltip显示全部内容


    if (type === 0) {
      return res = params.marker + name + "<br/>" + (changeValue ? changeValue : hideValue) + "<br/>" + "".concat(percent, "%");
    }

    return res;
  } else {
    return res += name + "：" + params.data.actualValue + " (".concat(percent, "%)");
  }
}

var _default = pieChartOptions;
exports.default = _default;