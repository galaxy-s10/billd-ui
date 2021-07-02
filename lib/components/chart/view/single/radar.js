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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 绘制雷达图
 * @param chartOptions
 * @param options
 * @param chartData
 */
function radarChartOptions(chartOptions, options, chartData) {
  var rangeData = (0, _view.metricRangeMatrixing)(options, chartData, true); // 保留第一个，颠倒数组。目前没有属性直接修改顺时针展示，只能改变展示数据

  var reverseDimensionArray = [];

  if (chartData.dimensionArray.length) {
    var _chartData$dimensionA;

    reverseDimensionArray = (_chartData$dimensionA = chartData.dimensionArray.slice(0, 1)).concat.apply(_chartData$dimensionA, _toConsumableArray(chartData.dimensionArray.slice(1, chartData.dimensionArray.length).reverse()));
  }

  var radarCenter = ["50%", "50%"];

  if (options.legend && options.legend.position === "left") {
    radarCenter = ["60%", "50%"];
  } else if (options.legend && options.legend.position === "right") {
    radarCenter = ["40%", "50%"];
  }

  var _viewOptions = (0, _view.viewOptions)(options, chartData, {
    tooltip: {
      formatter: function formatter(params) {
        return radarNumberFormat(params, chartData, options);
      }
    },
    radar: {
      name: {
        textStyle: {
          color: (0, _view.fontSetting)(options)
        }
      },
      radius: "55%",
      indicator: reverseDimensionArray.map(function (dimension) {
        var aliaName = options.dimension ? (0, _alias.default)(options.dimension.uid, dimension, options.dataAlias) : "";
        return {
          name: aliaName ? aliaName : dimension,
          max: rangeData.max,
          min: rangeData.min
        };
      }),
      center: radarCenter
    },
    series: getSeries(options, chartData)
  }),
      tooltip = _viewOptions.tooltip,
      series = _viewOptions.series,
      radar = _viewOptions.radar;

  _extends(chartOptions, {
    tooltip: tooltip,
    series: series,
    radar: radar
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
    type: "radar",
    tooltip: {
      trigger: "item"
    },
    label: {
      // 数值显示开关
      show: options.dataLabel === null ? true : options.dataLabel,
      formatter: function formatter(params) {
        // 保留第一个，颠倒数组。目前没有属性直接修改顺时针展示，只能改变展示数据
        var reverseMetricRangeData = [];

        if (chartData.metricRangeData[params.dataIndex].length) {
          var _chartData$metricRang;

          reverseMetricRangeData = (_chartData$metricRang = chartData.metricRangeData[params.dataIndex].slice(0, 1)).concat.apply(_chartData$metricRang, _toConsumableArray(chartData.metricRangeData[params.dataIndex].slice(1, chartData.metricRangeData[params.dataIndex].length).reverse()));
        }

        var value = reverseMetricRangeData[params.dimensionIndex];
        options.metric.forEach(function (metric, indexs) {
          if (params.dataIndex === indexs) {
            // 数值格式设置
            if (metric.options.numberFormat) {
              value = (0, _number.convertNumber)(value, metric.options.numberFormat);
            }
          }
        });
        return value;
      }
    },
    itemStyle: {
      normal: {
        areaStyle: {
          type: "default"
        }
      }
    },
    data: chartData.groupArray.map(function (group, index) {
      var reverseData = [];

      if (chartData.data[index].length) {
        var _chartData$data$index;

        reverseData = (_chartData$data$index = chartData.data[index].slice(0, 1)).concat.apply(_chartData$data$index, _toConsumableArray(chartData.data[index].slice(1, chartData.data[index].length).reverse()));
      }

      return {
        value: reverseData,
        name: group
      };
    })
  };
}
/**
 * 雷达图格式化显示
 * @param params
 * @param chartData
 * @param options
 */


function radarNumberFormat(params, chartData, options) {
  var realName = options.groupDimension ? (0, _alias.default)(options.groupDimension.uid, params.name, options.dataAlias) : "";
  var name = chartData.groupNameArray ? chartData.groupNameArray[params.name] : realName || params.name;
  var dimensionName;
  var res = name + "<br/>";
  chartData.metricRangeData[params.dataIndex].forEach(function (item, index) {
    dimensionName = chartData.dimensionArray[index];
    var tmpItem = item ? item : 0;
    var aliaDimensionName = options.dimension ? (0, _alias.default)(options.dimension.uid, dimensionName, options.dataAlias) : "";
    dimensionName = aliaDimensionName ? aliaDimensionName : dimensionName;
    options.metric.forEach(function (metric, number) {
      if (options.metric.length === 1) {
        // 数值格式设置
        if (metric.options.numberFormat) {
          tmpItem = (0, _number.convertNumber)(tmpItem, metric.options.numberFormat);
        }

        res += params.marker + dimensionName + "：" + tmpItem + "<br/>";
      } else {
        if (params.dataIndex === number) {
          // 数值格式设置
          if (metric.options.numberFormat) {
            tmpItem = (0, _number.convertNumber)(tmpItem, metric.options.numberFormat);
          }

          res += params.marker + dimensionName + "：" + tmpItem + "<br/>";
        }
      }
    });
  });
  return res;
}

var _default = radarChartOptions;
exports.default = _default;