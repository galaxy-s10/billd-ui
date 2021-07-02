"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _help = require("./help");

var _types = require("./types");

var _createChart = require("../../instance/element-modules/analysis/create-chart");

var _analysis = require("../../service/analysis");

var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mutations = (_mutations = {}, _defineProperty(_mutations, _types.ReportMutation.SETANALYSISINFO, function (state, _ref) {
  var corpId = _ref.corpId,
      ownerId = _ref.ownerId,
      config = _ref.config,
      dataSourceId = _ref.dataSourceId;

  if (corpId) {
    state.corpId = corpId;
  }

  if (ownerId) {
    state.ownerId = ownerId;
  }

  if (dataSourceId) {
    state.dataSourceId = dataSourceId;
  }

  state.config = config;

  _analysis.analysisApi.setConfig({
    corpId: corpId,
    config: config
  });
}), _defineProperty(_mutations, _types.ReportMutation.SETACTIVETAB, function (state, activeTab) {
  state.activeTab = activeTab;
}), _defineProperty(_mutations, _types.ReportMutation.RESETREPORT, function (state) {
  var resetGlobalFilters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  state.activeChart = null;
  state.charts = [];
  state.chartsInfo = {}; // 刷新统计分析时如果有全局筛选器不刷新

  if (resetGlobalFilters) {
    state.globalFilters = []; // state.dataSourceId = '';
  }

  state.chartViewStatus = {};
  state.objectId = ""; // state.originalFilters = [];
}), _defineProperty(_mutations, _types.ReportMutation.SETACTIVECHART, function (state, activeChart) {
  if (!state.backupActiveChart) {
    state.backupActiveChart = JSON.parse(JSON.stringify(activeChart));
  }

  state.activeChart = activeChart;

  if (activeChart) {
    (0, _createChart.createChartModules)(activeChart);
  }

  return state.activeChart;
}), _defineProperty(_mutations, _types.ReportMutation.RESIZECHARTVIEW, function (state, _ref2) {
  var chartId = _ref2.chartId,
      type = _ref2.type;
  var viewStatus = state.chartViewStatus[chartId];
  if (!viewStatus) return;
  var fun = viewStatus[type];

  if (fun instanceof Function) {
    viewStatus[type]();
  }
}), _defineProperty(_mutations, _types.ReportMutation.SETGLOBALFILTER, function (state, filter) {
  if (state.dataSources && state.dataSourceId && state.dataSources[state.dataSourceId]) {
    state.globalFilters = (0, _help.handleFilters)(state.dataSources[state.dataSourceId].properties, filter);
    state.globalFilters = (0, _help.handleGlobalFilter)(state.globalFilters, state.dataSources[state.dataSourceId]);
  } else {
    state.originalFilters = filter;
  }
}), _defineProperty(_mutations, _types.ReportMutation.DRAGCHARTS, function (state, _ref3) {
  var newIndex = _ref3.newIndex,
      oldIndex = _ref3.oldIndex;
  var charts = state.charts;
  charts.splice(newIndex, 0, charts.splice(oldIndex, 1)[0]);
}), _defineProperty(_mutations, _types.ReportMutation.SETCHARTS, function (state, charts) {
  state.charts = charts;
}), _defineProperty(_mutations, _types.ReportMutation.RESETACTIVECHART, function (state) {
  state.activeChart = JSON.parse(JSON.stringify(state.backupActiveChart)); // 重新刷新图表
}), _defineProperty(_mutations, _types.ReportMutation.RESETGLOBALFILTER, function (state) {
  state.globalFilters = [];
}), _mutations);
var _default = mutations;
exports.default = _default;