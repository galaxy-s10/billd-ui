"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewReportState = getNewReportState;
exports.reportState = exports.ReportProState = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _actions = _interopRequireDefault(require("./actions"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _getters = _interopRequireDefault(require("./getters"));

var _global = _interopRequireDefault(require("../../instance/modules/global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_vue.default.use(_vuex.default);

var ReportProState = function ReportProState() {
  _classCallCheck(this, ReportProState);

  this.corpId = "";
  this.title = "";
  this.reportTop = 0;
  this.activeChart = null;
  this.activeModules = null; // 当前激活的图表模块

  this.chartsAlias = {};
  this.chartsData = {};
  this.objectId = "";
  this.reports = {};
  this.charts = [];
  this.global = (0, _global.default)({
    styles: {}
  }).global;
  this.globalModules = {
    styles: {}
  };
  this.globalFilters = [];
  this.dragChart = null;
  this.dragField = null;
  this.dataSources = {};
  this.dataSourceList = null;
  this.config = {};
  this.integrateComponent = null;
  this.linkage = {};
  this.chartViewStatus = {}; // 图表视图更新状态

  this.lastDataSourceNode = null; // 记录上一次选择数据源的Node

  this.tableExportData = {}; // 透视表导出预处理数据

  this.showAdvancedDataSource = false; // 是否显示高级数据源
};

exports.ReportProState = ReportProState;
var state = new ReportProState();
var reportState = {
  namespaced: true,
  state: state,
  mutations: _mutations.default,
  actions: _actions.default,
  getters: _getters.default
};
/**
 * 获取新的状态
 * @param clone 是否需要克隆到reportState
 */

exports.reportState = reportState;

function getNewReportState() {
  var clone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var state = {
    namespaced: true,
    state: new ReportProState(),
    mutations: _mutations.default,
    actions: _actions.default,
    getters: _getters.default
  };
  if (clone) exports.reportState = reportState = state;
  return state;
}