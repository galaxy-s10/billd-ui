"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _chartWrap = _interopRequireDefault(require("../chart-wrap"));

var _index = _interopRequireDefault(require("../filter-picker/index"));

var _index2 = _interopRequireDefault(require("../long-text/index"));

var _reportState = require("../../enum/report-state");

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

var ReportElementWrap = /*#__PURE__*/function (_Vue) {
  _inherits(ReportElementWrap, _Vue);

  var _super = _createSuper(ReportElementWrap);

  function ReportElementWrap() {
    _classCallCheck(this, ReportElementWrap);

    return _super.apply(this, arguments);
  }

  _createClass(ReportElementWrap, [{
    key: "getElementType",
    get:
    /**
     * 获取元件类型
     */
    function get() {
      switch (this.chart && this.chart.type) {
        case "longText":
          return "long-text";

        case "filterPicker":
          return "filter-picker";

        default:
          return "chart-wrap";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", [this.getElementType == "long-text" ? h("long-text", {
        attrs: {
          chart: this.chart,
          status: this.status,
          refresh: this.refresh,
          global: this.global,
          corpId: this.corpId,
          api: this.api,
          delay: this.delay,
          filters: this.filters
        },
        on: {
          "change": this.change,
          "click-chart": this.clickChart,
          "register-refresh": this.registerRefresh,
          "update-charts-data": this.updateChartsData,
          "refresh-end": this.refreshEnd,
          "drill-down": this.drillDown
        }
      }) : this.getElementType == "filter-picker" ? h("filter-picker", {
        attrs: {
          chart: this.chart,
          status: this.status,
          refresh: this.refresh,
          global: this.global,
          corpId: this.corpId,
          api: this.api,
          delay: this.delay,
          filters: this.filters
        },
        on: {
          "change": this.change,
          "click-chart": this.clickChart,
          "register-refresh": this.registerRefresh,
          "update-charts-data": this.updateChartsData,
          "refresh-end": this.refreshEnd,
          "drill-down": this.drillDown
        }
      }) : h("chart-wrap", {
        attrs: {
          chart: this.chart,
          status: this.status,
          refresh: this.refresh,
          global: this.global,
          corpId: this.corpId,
          api: this.api,
          delay: this.delay,
          filters: this.filters
        },
        on: {
          "change": this.change,
          "click-chart": this.clickChart,
          "register-refresh": this.registerRefresh,
          "update-charts-data": this.updateChartsData,
          "refresh-end": this.refreshEnd,
          "drill-down": this.drillDown
        }
      })]);
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
     * 修改chart
     * @param chart
     */

  }, {
    key: "change",
    value: function change(chart) {
      this.$emit("change", chart);
    }
    /**
     * 图表点击
     *    * @param option  { filter, params }
     */

  }, {
    key: "clickChart",
    value: function clickChart(option) {
      this.$emit("click-chart", option);
    }
    /**
     * 图表注册刷新事件
     */

  }, {
    key: "updateChartsData",
    value: function updateChartsData(data) {
      this.$emit("update-charts-data", data);
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
     * 图表注册刷新事件
     */

  }, {
    key: "registerRefresh",
    value: function registerRefresh(events) {
      this.$emit("register-refresh", events);
    }
  }]);

  return ReportElementWrap;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportElementWrap.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportElementWrap.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 200
})], ReportElementWrap.prototype, "delay", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], ReportElementWrap.prototype, "api", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)()], ReportElementWrap.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: _reportState.ReportState.DESIGN
})], ReportElementWrap.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], ReportElementWrap.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportElementWrap.prototype, "filters", void 0);

ReportElementWrap = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-element-wrap",
  components: {
    ChartWrap: _chartWrap.default,
    FilterPicker: _index.default,
    LongText: _index2.default
  }
})], ReportElementWrap);
var _default2 = ReportElementWrap;
exports.default = _default2;