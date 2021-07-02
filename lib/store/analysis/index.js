"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.analysisState = exports.AnalysisState = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _actions = _interopRequireDefault(require("./actions"));

var _mutations = _interopRequireDefault(require("./mutations"));

var _getters = _interopRequireDefault(require("./getters"));

var _moduleState = require("../../enum/module-state");

var _global = _interopRequireDefault(require("../../instance/modules/global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_vue.default.use(_vuex.default);

var AnalysisState = function AnalysisState() {
  _classCallCheck(this, AnalysisState);

  // 企业id
  this.corpId = ""; // 平台传入的参数

  this.config = {}; // 拥有者id

  this.ownerId = ""; // 数据源id

  this.dataSourceId = ""; // 当前激活的报表的id 例如：个人模块的objectId

  this.objectId = ""; // 当前激活的区域

  this.activeTab = _moduleState.TabState.PUBLIC; // 图表的相关信息

  this.chartsInfo = {}; // 当前激活报表的所有图表集合

  this.charts = []; // 全局的配置信息 类似于样式

  this.global = (0, _global.default)({
    styles: {}
  }).global; // 当前激活的图表 类似于当前编辑的图表 当前放大的图表 没有在设计池中时为空

  this.activeChart = null; // 备份的当前激活图表，如果返回时将清除之前的操作

  this.backupActiveChart = null; // 当前激活的展示状态 展示 预览 设计

  this.activeViewStatus = _moduleState.ModuleState.VIEW; // 刷新图表方法

  this.chartViewStatus = {}; // 全局筛选器，需要监听外部筛选条件

  this.globalFilters = []; // 没有格式化过的筛选条件

  this.originalFilters = []; // 获取的数据 （没必要）

  this.chartsData = {}; // 数据源详情 事实上统计分析在一个生命周期内只有一个数据源

  this.dataSources = {}; // 全局模块 （没有）

  this.globalModules = {
    styles: {}
  }; // 图表别名？

  this.chartsAlias = {};
};

exports.AnalysisState = AnalysisState;
var state = new AnalysisState();
var analysisState = {
  namespaced: true,
  state: state,
  mutations: _mutations.default,
  actions: _actions.default,
  getters: _getters.default
};
exports.analysisState = analysisState;

var _default = new _vuex.default.Store({
  modules: {
    analysisState: analysisState
  }
});

exports.default = _default;