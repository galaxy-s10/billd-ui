"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.reportState = exports.ReportState = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _actions = _interopRequireDefault(require("./actions"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _getters = _interopRequireDefault(require("./getters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_vue.default.use(_vuex.default);

var ReportState = function ReportState() {
  _classCallCheck(this, ReportState);

  this.schemaCode = '';
  this.schemas = [];
  this.globalModules = {
    styles: {}
  };
  this.activeChart = null;
  this.chartsData = {};
  this.chartsAlias = {};
  this.objectId = '';
  this.chartViewStatus = {};
  this.charts = [];
  this.global = {
    styles: {}
  };
  this.globalFilters = [];
};

exports.ReportState = ReportState;
var state = new ReportState();
var reportState = {
  namespaced: true,
  state: state,
  mutations: _mutations.default,
  actions: _actions.default,
  getters: _getters.default
};
exports.reportState = reportState;

var _default = new _vuex.default.Store({
  modules: {
    visualization: reportState
  }
});

exports.default = _default;