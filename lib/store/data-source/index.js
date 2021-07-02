"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataSourceState = exports.ReportDataSourceState = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _actions = _interopRequireDefault(require("./actions"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _getters = _interopRequireDefault(require("./getters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_vue.default.use(_vuex.default);

var ReportDataSourceState = function ReportDataSourceState() {
  _classCallCheck(this, ReportDataSourceState);

  this.corpId = "";
  this.config = {};
  this.dataSourceId = "";
  this.groupId = "";
  this.title = ""; // 高级数据源标题

  this.activeNode = null; // 当前激活节点

  this.options = {}; // 自定义配置

  this.nodes = []; // 流程节点集合

  this.edges = []; // 流程关系

  this.models = []; // 模型

  this.merges = []; // 追加合并

  this.relations = []; // 关联

  this.computes = []; // 设置字段

  this.groups = []; // 分组汇总

  this.originalNodes = []; // 原始节点信息

  this.originalEdges = []; // 原始连接线信息

  this.isEdit = false;
};

exports.ReportDataSourceState = ReportDataSourceState;
var state = new ReportDataSourceState();
var dataSourceState = {
  namespaced: true,
  state: state,
  mutations: _mutations.default,
  actions: _actions.default,
  getters: _getters.default
};
exports.dataSourceState = dataSourceState;