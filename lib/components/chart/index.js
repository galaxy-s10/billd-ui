"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _view = _interopRequireDefault(require("./view"));

var _scroll = _interopRequireDefault(require("../../components/scroll"));

var _dashboard = require("../../service/dashboard/");

var _vueFragment = require("vue-fragment");

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

var ReportChart = /*#__PURE__*/function (_Vue) {
  _inherits(ReportChart, _Vue);

  var _super = _createSuper(ReportChart);

  function ReportChart() {
    var _this;

    _classCallCheck(this, ReportChart);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-chart-view";
    _this.lastInitChartTime = 0;
    _this.isScrollY = false;
    _this.isScrollX = false;
    _this.animate = true;
    _this.scrollYDirection = "right";
    _this.scrollXDirection = "bottom";
    _this.timer = 0;
    _this.timer2 = 0;
    return _this;
  }

  _createClass(ReportChart, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("a-vue-fragment", [this.isScrollY || this.isScrollX ? h("h3-scroll", {
        ref: "scroll",
        attrs: {
          scrollYBtn: this.isScrollY,
          scrollXBtn: this.isScrollX,
          animate: this.animate,
          scrollYBtnDirection: this.scrollYDirection,
          scrollXBtnDirection: this.scrollXDirection,
          resize: this.refresh,
          buttonColor: 'rgba(0,0,0,0.45)'
        }
      }, [h("div", {
        "class": this.chartStyle,
        ref: "chartBody"
      })]) : h("div", {
        ref: "chartBody",
        "class": this.chartStyle
      })]);
    }
  }, {
    key: "isInitChart",
    get: function get() {
      return !(!this.options.dimension || !this.options.data || !this.options.data.length);
    }
  }, {
    key: "chartStyle",
    get: function get() {
      return {
        "h3-report-chart-view": true,
        "h3-report-chart-view--no-linkage": this.options.linkage && !this.options.linkage.length
      };
    }
    /**
     * 图表刷新事件
     */

  }, {
    key: "refreshChartStyles",
    value: function refreshChartStyles() {
      var _this2 = this;

      if (!this.timer2) {
        clearTimeout(this.timer2);
        this.timer2 = setTimeout(function () {
          if (_this2.chart && _this2.refresh) {
            _this2.chart.resize();

            _this2.timer2 = 0;
          }
        }, this.delay);
      }
    }
    /**
     * 图表点击事件
     */

  }, {
    key: "clickChart",
    value: function clickChart(filters) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.$emit("click", {
        filters: filters,
        params: params
      });
    }
  }, {
    key: "initChart",
    value: function initChart() {
      var _this3 = this;

      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }

      if (!this.isInitChart) return;
      (0, _view.default)(this.$refs.chartBody, this.options, this, this.showDataZoom).then(function (chart) {
        _this3.chart = chart;

        _this3.$emit("refresh-end");
      });
    }
  }, {
    key: "delayInitChart",
    value: function delayInitChart() {
      var _this4 = this;

      if (!this.isInitChart || !this.refresh) return;
      this.scrollYDirection = "right";
      this.scrollXDirection = "bottom";
      this.isScrollY = false;
      this.isScrollX = false;

      if (!this.options.direction || ["bottom", "top"].includes(this.options.direction)) {
        this.isScrollX = true;
        this.animate = true;
        this.scrollXDirection = "bottom";
      } else {
        this.isScrollY = true;
        this.animate = false;
        this.scrollYDirection = "right";
      }

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this4.initChart();

        var scroll = _this4.$refs.scroll;

        if (scroll) {
          scroll.setScrollBar(null, true);
        }
      }, this.delay);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.delayInitChart();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.chart = null;
    }
  }]);

  return ReportChart;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportChart.prototype, "options", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportChart.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportChart.prototype, "showDataZoom", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 200
})], ReportChart.prototype, "delay", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return _dashboard.dashboardApi;
  }
})], ReportChart.prototype, "api", void 0);

ReportChart = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-chart-view",
  components: {
    H3Scroll: _scroll.default,
    AVueFragment: _vueFragment.Fragment
  }
})], ReportChart);
var _default2 = ReportChart;
exports.default = _default2;