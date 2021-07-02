"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChartRequestParams = handleChartRequestParams;
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 处理图表请求后台参数
 * @param chart
 * @param params
 */
function handleChartRequestParams(chart, params, globalFilters) {
  var oChart = JSON.parse(JSON.stringify(chart));

  if (oChart.type === "list") {
    oChart.pageSize = oChart.pageSize ? oChart.pageSize : 10;
    oChart.pageIndex = oChart.pageIndex ? oChart.pageIndex : 0;
  }

  var sendChart = {
    title: oChart.title,
    authorization: oChart.authorization,
    dataSourceId: oChart.dataSourceId,
    useType: oChart.useType,
    type: oChart.type,
    dimension: oChart.data.dimension,
    groupDimension: oChart.data.groupDimension,
    metric: oChart.data.metric,
    filter: oChart.data.filter,
    sort: oChart.data.sort,
    limit: oChart.data.limit,
    pageSize: oChart.pageSize,
    pageIndex: oChart.pageIndex
  };

  if (oChart.type === "map") {
    if (oChart.data && oChart.data.mapArea) {
      sendChart.mapArea = oChart.data.mapArea;
    }
  }

  if (params) {
    _extends(sendChart, params);
  }

  if (oChart.data.metricGroup && oChart.data.metricGroup.length) {
    // todo: 可能不兼容 IE11 和 edge
    var realMetric = [];
    oChart.data.metricGroup.forEach(function (m) {
      realMetric = [].concat(_toConsumableArray(realMetric), _toConsumableArray(m));
    });
    sendChart.metric = realMetric;
  }

  if (globalFilters) {
    console.log("globalFilters", globalFilters);
    sendChart.filter = [].concat(_toConsumableArray(sendChart.filter || []), _toConsumableArray(globalFilters));
  }

  if (sendChart.filter) {
    var _sendChart$filter;

    sendChart.filter = (_sendChart$filter = sendChart.filter).concat.apply(_sendChart$filter, [chart.linkageFilter || []].concat(_toConsumableArray(Object.values(chart.filterPicker || {}))));
    sendChart.filter.forEach(function (filter) {
      filter.text = filter.text.map(function (item) {
        return item instanceof Object ? item.value : item;
      });
    });
  }

  return sendChart;
}

var _default = {
  handleChartRequestParams: handleChartRequestParams
};
exports.default = _default;