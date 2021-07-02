"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _loading = _interopRequireDefault(require("../loading"));

var _chart = _interopRequireDefault(require("../chart"));

var _list = _interopRequireDefault(require("../list"));

var _card = _interopRequireDefault(require("../card"));

var _pivotTable = _interopRequireDefault(require("../pivot-table"));

require("../loading/style/css");

require("../chart/style/css");

require("../list/style/css");

require("../card/style/css");

require("../pivot-table/style/css");

var _chartMixins = _interopRequireDefault(require("../../mixins/chart-mixins"));

var _dashboard = require("../../service/dashboard/");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportChartWrap = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportChartWrap, _Mixins);

  var _super = _createSuper(ReportChartWrap);

  function ReportChartWrap() {
    var _this;

    _classCallCheck(this, ReportChartWrap);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-chart";
    _this.defaultListPageOption = {
      // defaultListPageOption: H3.List.pageOptions = {
      pageSize: 10,
      pageIndex: 1 // 第几页

    }; // 明细表局部loading

    _this.refreshListLoading = false;
    return _this;
  }

  _createClass(ReportChartWrap, [{
    key: "render",
    value: function render() {
      var h = arguments[0];

      if (this.chart.type === "card") {
        return h("h3-card", {
          ref: "card",
          attrs: {
            delay: this.delay,
            refresh: this.refresh,
            options: this.cardInstance
          },
          "class": ["".concat(this.prefixCls, "__body")]
        });
      } else if (this.chart.type === "list") {
        return h("h3-list", {
          ref: "list",
          attrs: {
            total: this.dataTotal,
            delay: this.delay,
            alias: this.listInstance.alias,
            datasource: this.listInstance.data,
            columns: this.listInstance.columns,
            fontColor: this.listInstance.fontColor,
            columnsSetting: this.listInstance.columnsSetting,
            "static-column": this.listInstance.freezeHead.columnNumber,
            "order-number": this.listInstance.orderNumber,
            "freeze-head": this.listInstance.freezeHead,
            refresh: this.refreshListLoading
          },
          "class": ["".concat(this.prefixCls, "__body")],
          on: {
            "changePage": this.refreshListData,
            "change-columns": this.changeColumns,
            "drill-down": this.drillDown
          }
        });
      } else if (this.chart.type !== "table") {
        return h("h3-chart", {
          ref: "chart",
          attrs: {
            delay: this.delay,
            refresh: true,
            options: this.chartInstance,
            api: this.api
          },
          "class": ["".concat(this.prefixCls, "__body")],
          on: {
            "click": this.clickChart,
            "refresh-end": this.refreshEnd
          }
        });
      } else {
        return h("h3-pivot-table", {
          ref: "table",
          attrs: {
            delay: this.delay,
            data: this.tableInstance.data,
            alias: this.tableInstance.alias,
            columns: this.tableInstance.columns,
            rows: this.tableInstance.rows,
            fontColor: this.tableInstance.fontColor,
            metric: this.tableInstance.metric,
            isNo: this.tableInstance.orderNumber["checked"],
            columnsSetting: this.tableInstance.columnsSetting,
            fixedColHead: this.tableInstance.freezeHead.column,
            fixedRowHead: this.tableInstance.freezeHead.row,
            uid: this.tableInstance.uid,
            title: this.tableInstance.title
          },
          "class": ["".concat(this.prefixCls, "__body")],
          on: {
            "click": this.clickChart,
            "change-columns": this.changeColumns
          }
        });
      }
    }
    /**
     * 字体颜色对比
     */

  }, {
    key: "fontColorSetting",
    get: function get() {
      var globalFont = this.global.styles.fontSetting;
      var chartFont = this.chart.styles.fontSetting ? this.chart.styles.fontSetting : {
        titleColor: null,
        fontColor: null
      };
      return {
        titleColor: chartFont.titleColor || globalFont.titleColor,
        fontColor: chartFont.fontColor || globalFont.fontColor
      };
    }
    /**
     * 获取明细表实例
     */

  }, {
    key: "listInstance",
    get: function get() {
      var dimension = [];

      if (this.chart.data.dimension) {
        dimension = this.chart.data.dimension.filter(function (item) {
          return item.type;
        });
      }

      return {
        data: this.data,
        alias: this.dataAlias,
        columns: dimension,
        orderNumber: this.chart.styles.orderNumber || {},
        freezeHead: this.chart.styles.freezeHead || {},
        columnsSetting: this.chart.columnsSetting || [],
        uid: this.chart.uid,
        fontColor: this.fontColorSetting.fontColor
      };
    }
    /**
     * 获取图表实例
     * 后续使用时，改用chartOptions
     */

  }, {
    key: "chartInstance",
    get: function get() {
      var colors = this.global.styles.theme ? this.global.styles.theme.colors : [];
      var dimension = [];

      if (this.chart.data.dimension) {
        dimension = this.chart.data.dimension.filter(function (item) {
          return item.type;
        });
      }

      var metric = [];

      if (this.chart.data.metric) {
        metric = this.chart.data.metric.filter(function (item) {
          return item.type;
        });
      }

      return {
        type: this.chart.type,
        uid: this.chart.uid,
        data: this.data,
        mapSource: this.source,
        dataAlias: this.dataAlias,
        dimension: dimension ? dimension[0] : null,
        groupDimension: dimension ? dimension[1] : null,
        dimensionLimit: this.chart.styles.dimensionLimit,
        metric: metric,
        metricGroup: this.chart.data.metricGroup,
        multiMetricType: this.chart.styles.multiMetricType,
        limit: this.chart.data.limit,
        linkage: this.chart.styles.linkage,
        colors: this.chart.styles.theme && this.chart.styles.theme.colors && this.chart.styles.theme.colors.length ? this.chart.styles.theme.colors : colors,
        direction: this.chart.styles.direction ? this.chart.styles.direction : null,
        metricRange: this.chart.styles.metricRange,
        multiRange: this.chart.styles.multiRange,
        dataLabel: this.chart.styles.dataLabel,
        multipleDataLabel: this.chart.styles.multipleDataLabel,
        legend: this.chart.styles.legend,
        axisX: this.chart.styles.axisX,
        axisYSet: this.chart.styles.axisYSet,
        splitLine: this.chart.styles.splitLine,
        chartSwitch: this.chart.data.chartSwitch,
        warningLine: this.chart.styles.warningLine,
        elementCoat: this.chart.styles.elementCoat,
        fontColor: this.fontColorSetting.fontColor,
        DataZoom: this.chart.styles.dataZoom,
        mapDrill: this.chart.styles.mapDrill,
        mapArea: this.chart.data.mapArea,
        mapTheme: this.chart.styles.mapTheme,
        mapDigitalSet: this.chart.styles.mapDigitalSet
      };
    }
    /**
     * 图表加载完
     */

  }, {
    key: "refreshEnd",
    value: function refreshEnd() {
      this.$emit("refresh-end");
    }
    /**
     * 获取图表实例
     */

  }, {
    key: "cardInstance",
    get: function get() {
      return {
        data: this.data,
        dataAlias: this.dataAlias,
        dimension: this.chart.data.dimension ? this.chart.data.dimension[0] : null,
        metric: this.chart.data.metric ? this.chart.data.metric[0] : null,
        limit: this.chart.data.limit,
        fontColor: this.fontColorSetting.fontColor
      };
    }
    /**
     * 下钻
     */

  }, {
    key: "drillDown",
    value: function drillDown(data) {
      this.$emit("drill-down", data);
    }
    /**
     * 获取表格实例
     */

  }, {
    key: "tableInstance",
    get: function get() {
      var dimension = [];

      if (this.chart.data.dimension) {
        dimension = this.chart.data.dimension.filter(function (item) {
          return item.type;
        });
      }

      var groupDimension = [];

      if (this.chart.data.groupDimension) {
        groupDimension = this.chart.data.groupDimension.filter(function (item) {
          return item.type;
        });
      }

      var metric = [];

      if (this.chart.data.metric) {
        metric = this.chart.data.metric.filter(function (item) {
          return item.type;
        });
      }

      return {
        data: this.data,
        alias: this.dataAlias,
        columns: dimension,
        rows: groupDimension,
        metric: metric,
        orderNumber: this.chart.styles.orderNumber || {},
        freezeHead: this.chart.styles.freezeHead || {},
        columnsSetting: this.chart.columnsSetting || [],
        uid: this.chart.uid,
        title: this.chart.title,
        fontColor: this.fontColorSetting.fontColor
      };
    }
    /**
     * 图表点击
     * @param option  { filters, params }
     */

  }, {
    key: "clickChart",
    value: function clickChart(option) {
      if (this.chart.type === "map" && option.params && option.params.data) {
        var data = option.params.data;
        var obj = {
          mapDrill: data
        };
        this.refreshMapData(obj);
      }

      this.$emit("click-chart", option);
    }
    /**
     * 刷新地图数据
     */

  }, {
    key: "refreshMapData",
    value: function refreshMapData(params) {
      this.$emit("load-chart-data", {
        isLoading: true,
        params: params,
        callback: function callback() {}
      });
    }
    /**
     * 刷新明细表分页数据
     */

  }, {
    key: "refreshListData",
    value: function refreshListData(params) {
      var _this2 = this;

      this.defaultListPageOption = params;
      this.refreshListLoading = true;
      this.$emit("load-chart-data", {
        isLoading: false,
        params: params,
        callback: function callback() {
          _this2.refreshListLoading = false;
        }
      });
    }
    /**
     * 明细表/透视表 列宽更改
     */

  }, {
    key: "changeColumns",
    value: function changeColumns(options) {
      this.chart.columnsSetting = options;
      this.$emit("change", this.chart);
    }
    /**
     * 刷新图表视图样式
     */

  }, {
    key: "refreshViewStyles",
    value: function refreshViewStyles() {
      if (this.$refs.chart) {
        this.$refs.chart.refreshChartStyles();
      }

      if (this.$refs.table) {
        this.$refs.table.refreshTable();
      }
    }
    /**
     * 刷新图表视图
     */

  }, {
    key: "refreshChartView",
    value: function refreshChartView() {
      var chart = this.$refs.chart;
      var table = this.$refs.table;
      var card = this.$refs.card;
      var list = this.$refs.list;

      if (chart) {
        chart.delayInitChart();
      } else if (table) {
        this.$refs.table.initTableData();
      } else if (card) {
        this.$refs.card.initCard();
      } else if (list) {
        this.$refs.list.initList();
      }
    }
  }]);

  return ReportChartWrap;
}((0, _vuePropertyDecorator.Mixins)(_chartMixins.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "dataAlias", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "source", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 200
})], ReportChartWrap.prototype, "delay", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportChartWrap.prototype, "dataTotal", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportChartWrap.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return _dashboard.dashboardApi;
  }
})], ReportChartWrap.prototype, "api", void 0);

ReportChartWrap = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-chart-wrap",
  components: {
    H3Chart: _chart.default,
    H3Card: _card.default,
    Loading: _loading.default,
    H3PivotTable: _pivotTable.default,
    H3List: _list.default
  }
})], ReportChartWrap);
var _default2 = ReportChartWrap;
exports.default = _default2;