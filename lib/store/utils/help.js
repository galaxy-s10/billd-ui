"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChartFieldDefaultValues = handleChartFieldDefaultValues;
exports.registerElement = registerElement;
exports.handleReportResponse = handleReportResponse;
exports.default = void 0;

var _chartType = require("../../enum/chart-type");

var _instance = require("../../instance/element/instance");

var _dashboard = _interopRequireDefault(require("../../instance/element-modules/dashboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 注册仪表盘元件
 *  主要是支持元件的数据升级
 * @param elementType
 * @param oldElement
 */
function registerElement(elementType, oldElement) {
  var newChart;
  newChart = (0, _instance.createElementInstance)(elementType, oldElement);
  (0, _dashboard.default)(newChart, oldElement);
  return newChart;
}
/**
 * 处理报表请求
 * @param report
 */


function handleReportResponse(report) {
  var schemaCodes = {};
  var filterPickers = [];
  var elements = [];
  report.charts.forEach(function (rChart) {
    var element = JSON.parse(rChart.content);
    element = registerElement(element.type, element);
    elements.push(element);
    var chart = element;

    if (chart.dataSourceId) {
      schemaCodes[chart.dataSourceId] = {
        dataSourceId: chart.dataSourceId,
        useType: chart.useType
      };
    } else if (element.type === _chartType.ElementType.FILTERPICKER) {
      filterPickers.push(element);
    }
  });
  return {
    title: report.title,
    objectId: report.objectId,
    elements: elements,
    reqGlobal: report.global,
    schemaCodes: schemaCodes,
    filterPickers: filterPickers
  };
}
/**
 * 处理图表字段同步数据源的字段默认值
 * @param elements
 * @param dataSources
 */


function handleChartFieldDefaultValues(elements, dataSources) {
  elements.forEach(function (element) {
    if (![_chartType.ElementType.LONGTEXT, _chartType.ElementType.FILTERPICKER].includes(element.type)) {
      var chart = element;
      var chartData = chart.data;
      var chartFields = [];

      if (chart.dataSourceId && dataSources[chart.dataSourceId]) {
        var dataSourceFields = dataSources[chart.dataSourceId].properties;

        if (chartData.dimension && chartData.dimension.length) {
          chartFields.push.apply(chartFields, _toConsumableArray(chartData.dimension));
        }

        if (chartData.groupDimension && chartData.groupDimension.length) {
          chartFields.push.apply(chartFields, _toConsumableArray(chartData.groupDimension));
        }

        if (chartData.metric && chartData.metric.length) {
          chartFields.push.apply(chartFields, _toConsumableArray(chartData.metric));
        }

        if (chartData.sort && chartData.sort.length) {
          chartFields.push.apply(chartFields, _toConsumableArray(chartData.sort));
        }

        if (chartData.metricGroup && chartData.metricGroup.length) {
          chartData.metricGroup.forEach(function (metric) {
            chartFields.push.apply(chartFields, _toConsumableArray(metric));
          });
        }

        if (chartData.filter && chartData.filter.length) {
          chartData.filter.forEach(function (filter) {
            chartFields.push(filter.field);
          });
        }

        dataSourceFields.forEach(function (dataSourceField) {
          chartFields.forEach(function (chartField, index) {
            if (chartField.field === dataSourceField.field && chartField.schemaCode === dataSourceField.schemaCode) {
              _extends(chartField, dataSourceField, {
                uid: chartField.uid,
                alias: chartField.alias,
                options: chartField.options
              });
            }
          });
        });
      }
    } else if (element.type === _chartType.ElementType.FILTERPICKER) {
      var filter = element;

      if (filter.dataSources.length) {
        filter.dataSources.forEach(function (dataSource) {
          if (dataSource.dataSourceId && dataSources[dataSource.dataSourceId]) {
            var _dataSourceFields = dataSources[dataSource.dataSourceId].properties;

            _dataSourceFields.forEach(function (dataSourceField) {
              if (dataSource.field && dataSource.field.field === dataSourceField.field && dataSource.field.schemaCode === dataSourceField.schemaCode) {
                _extends(dataSource.field, dataSourceField, {
                  uid: dataSource.field.uid,
                  alias: dataSource.field.alias,
                  options: dataSource.field.options
                });
              }

              if (filter.field.field === dataSourceField.field && filter.field.schemaCode === dataSourceField.schemaCode) {
                _extends(filter.field, dataSourceField, {
                  uid: filter.field.uid,
                  alias: filter.field.alias,
                  options: filter.field.options
                });
              }
            });
          }
        });
      }
    }
  });
}

var _default = {
  handleChartFieldDefaultValues: handleChartFieldDefaultValues,
  registerElement: registerElement,
  handleReportResponse: handleReportResponse
};
exports.default = _default;