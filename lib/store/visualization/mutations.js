"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _help = require("./help");

var _types = require("./types");

var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mutations = (_mutations = {}, _defineProperty(_mutations, _types.ReportMutation.RESETREPORT, function (state) {
  state.schemaCode = '';
  state.schemas = [];
  state.globalModules = {
    styles: {}
  };
  state.activeChart = null;
  state.chartsData = {};
  state.objectId = '';
  state.charts = [];
  state.global = {
    styles: {}
  };
  state.globalFilters = [];
}), _defineProperty(_mutations, _types.ReportMutation.SETACTIVECHART, function (state, activeChart) {
  state.activeChart = activeChart;
  return state.activeChart;
}), _defineProperty(_mutations, _types.ReportMutation.SETGLOBALFILTER, function (state, filter) {
  state.globalFilters = (0, _help.handleFilters)(state.schemas, filter);
}), _defineProperty(_mutations, _types.ReportMutation.UPDATECHARTS, function (state, charts) {
  state.charts = charts;
}), _defineProperty(_mutations, _types.ReportMutation.RESIZECHARTVIEW, function (state, _ref) {
  var chart = _ref.chart,
      type = _ref.type;
  var viewStatus = state.chartViewStatus[chart.uid];

  if (viewStatus) {
    if (type === 'view' && viewStatus.view instanceof Function) {
      viewStatus.view();
    } else if (type === 'data' && viewStatus.data instanceof Function) {
      viewStatus.data();
    }
  }
}), _defineProperty(_mutations, _types.ReportMutation.HANDLESORT, function (state) {
  if (state.activeChart && state.activeChart.data.sort && state.activeChart.data.sort.length) {
    var sortArr = state.activeChart.data.sort;
    var objArr = [];

    if (state.activeChart.data.dimension) {
      objArr = objArr.concat(state.activeChart.data.dimension);
    }

    if (state.activeChart.data.groupDimension) {
      objArr = objArr.concat(state.activeChart.data.groupDimension);
    }

    if (state.activeChart.data.metric) {
      objArr = objArr.concat(state.activeChart.data.metric);
    }

    sortArr.forEach(function (sort, index) {
      var objIndex = objArr.findIndex(function (obj) {
        return obj.schemaCode === sort.schemaCode && obj.uid === sort.uid;
      });

      if (objIndex < 0) {
        sortArr.splice(index, 1);
      } else {
        objArr[objIndex].options.order = sortArr[index].options.order;
        sortArr.splice(index, 1, objArr[objIndex]);
      }
    });
  }
}), _mutations);
var _default = mutations;
exports.default = _default;