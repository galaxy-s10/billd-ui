"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _loading = _interopRequireDefault(require("../loading"));

var _dashboard = require("../../service/dashboard/");

var _chartMixins = _interopRequireDefault(require("../../mixins/chart-mixins"));

var _reportState = require("../../enum/report-state");

var _cssElementQueries = require("css-element-queries");

var _placeholder = _interopRequireDefault(require("./placeholder"));

var _chart = _interopRequireDefault(require("./chart"));

var _reportElement = require("../../utils/report-element");

var _resultFilter = require("../../utils/result-filter");

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

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var ReportChartWrap = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportChartWrap, _Mixins);

  var _super = _createSuper(ReportChartWrap);

  function ReportChartWrap() {
    var _this;

    _classCallCheck(this, ReportChartWrap);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-chart";
    _this.dataAlias = {};
    _this.source = null; // 数据来源，暂时只有地图类型有

    _this.innerData = null;
    _this.updateTimer = 0;
    _this.loading = false;
    _this.errMsg = false; // 明细表的总条数 其他图表暂时没有

    _this.dataTotal = 0;
    _this.isLoadData = false;
    _this.wrapWidth = 0;
    _this.resizeSensor = null;
    return _this;
  }

  _createClass(ReportChartWrap, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls,
        style: this.getStyle
      }, [this.loading ? h("loading") : this.showPlaceholder ? h("div", [h("chart-wrap-placeholder", {
        attrs: {
          chart: this.chart,
          "com-prefix-cls": this.prefixCls,
          data: this.isData,
          "error-msg": this.errMsg,
          "is-load-data": this.isLoadData
        }
      })]) : h("chart", {
        ref: "chart",
        attrs: {
          chart: this.chart,
          global: this.global,
          dataAlias: this.dataAlias,
          data: this.innerData,
          source: this.source,
          api: this.api,
          delay: this.delay,
          "data-total": this.dataTotal,
          refresh: this.refresh
        },
        on: {
          "click-chart": this.clickChart,
          "refresh-end": this.refreshEnd,
          "load-chart-data": this.loadChartData,
          "change": this.loadChartData,
          "drill-down": this.drillDown
        }
      })]);
    }
  }, {
    key: "watchData",
    value: function watchData() {
      if (this.data) {
        this.isLoadData = true;
        this.innerData = this.data;
      }
    }
    /**
     * 是否展示占位图
     */

  }, {
    key: "showPlaceholder",
    get: function get() {
      var show = true;

      if (this.chart && this.checkChart && this.isLoadData && !this.errMsg && this.isData && this.isData.length) {
        show = false;
      }

      console.log(this.chart, this.checkChart, this.isLoadData, this.errMsg, this.isData);
      return show;
    }
    /**
     * 获取图表wrap样式
     */

  }, {
    key: "getStyle",
    get: function get() {
      var paintCoatTheme = this.global && this.global.styles.paintCoatTheme;
      var style = {};

      if (this.computedStyle) {
        if (this.computedStyle.height) {
          style.height = "".concat(this.computedStyle.height, "px");
        }

        if (this.computedStyle.width) {
          style.width = "".concat(this.computedStyle.width, "px");
        }
      }

      style.backgroundColor = paintCoatTheme === "default" ? "inherit" : "transparent";
      return style;
    }
    /**
     * 判断图表是否有数据
     */

  }, {
    key: "isData",
    get: function get() {
      var data = null;

      if (this.innerData) {
        if (this.chart.type === "table") {
          if (this.innerData.data || this.innerData.summary) {
            data = this.innerData.data || this.innerData.summary;
          }
        } else {
          data = this.innerData;
        }
      }

      return data;
    }
    /**
     * 表格列宽改变
     */

  }, {
    key: "changeChart",
    value: function changeChart(chart) {
      this.$emit("change", chart);
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
     * 图表加载完
     */

  }, {
    key: "refreshEnd",
    value: function refreshEnd() {
      this.$emit("refresh-end");
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
     * 刷新图表视图
     */

  }, {
    key: "refreshChartView",
    value: function refreshChartView() {
      if (this.$refs.chart) {
        this.$refs.chart.refreshChartView();
      }
    }
    /**
     * 加载图表数据
     */

  }, {
    key: "loadChartData",
    value: function loadChartData() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isLoading: true
      },
          isLoading = _ref.isLoading,
          params = _ref.params,
          callback = _ref.callback;

      if (!this.checkChart) return;
      clearTimeout(this.updateTimer);
      this.loading = isLoading;
      this.updateTimer = setTimeout(function () {
        return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this.handleChartData(params, callback);

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      }, this.delay);
    }
    /**
     * 只刷新图表视图渲染
     */

  }, {
    key: "refreshViewStyles",
    value: function refreshViewStyles() {
      if (this.$refs.chart) {
        this.$refs.chart.refreshViewStyles();
      }
    }
    /**
     * 加载图表数据
     */

  }, {
    key: "handleChartData",
    value: function handleChartData(params, callback) {
      var _this3 = this;

      var sendChart = (0, _reportElement.handleChartRequestParams)(this.chart, params, this.filters);
      console.log(this.api.getChartData);
      console.log(sendChart, this.corpId);
      console.log('sendChart, this.corpId');
      this.api.getChartData(sendChart, this.corpId).then(function (res) {
        _this3.errMsg = false;
        _this3.innerData = (0, _resultFilter.resultFilterData)(res.series, _this3.chart) || [];
        console.log('0000000000');
        console.log(_this3.innerData);
        _this3.dataAlias = res.alias || {};
        _this3.dataTotal = res.total || 0;
        _this3.loading = false;
        _this3.source = res.source || null;
        callback && callback();
        res && _this3.$emit("update-charts-data", _this3.innerData);
      }).catch(function (res) {
        console.log('----------catch', res);
        _this3.errMsg = res.code;
        _this3.innerData = [];
        _this3.dataAlias = {};
        _this3.dataTotal = 0;
        _this3.loading = false;
        callback && callback();
      }).finally(function () {
        _this3.isLoadData = true;
      });
    }
    /**
     * 刷新图表
     */

  }, {
    key: "refreshChart",
    value: function refreshChart() {
      if (!this.checkChart) return;

      if (this.isLoadData) {
        this.refreshChart();
      } else {
        this.loadChartData();
      }
    }
    /**
     * 只加载一次图表
     */

  }, {
    key: "onlyLoadChart",
    value: function onlyLoadChart() {
      if (!this.isLoadData) {
        this.loadChartData();
      }
    }
    /**
     * 注册函数
     */

  }, {
    key: "registerFun",
    value: function registerFun() {
      if (this.chart) {
        this.$emit("register-refresh", {
          data: this.loadChartData,
          view: this.refreshChartView,
          load: this.onlyLoadChart,
          refreshViewStyles: this.refreshViewStyles
        });
      }
    }
  }, {
    key: "created",
    value: function created() {
      this.registerFun();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this4 = this;

      this.$emit("show");

      if (this.refresh) {
        this.refreshChart();
      }

      this.wrapWidth = this.$el.clientWidth;
      this.resizeSensor = new _cssElementQueries.ResizeSensor(this.$el, function (e) {
        if (e.width !== _this4.wrapWidth) {
          _this4.wrapWidth = e.width;

          _this4.refreshViewStyles();
        }
      });
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      if (this.resizeSensor) {
        this.resizeSensor.detach();
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
  default: function _default() {
    return _dashboard.dashboardApi;
  }
})], ReportChartWrap.prototype, "api", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: _reportState.ReportState.DESIGN
})], ReportChartWrap.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportChartWrap.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "computedStyle", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 200
})], ReportChartWrap.prototype, "delay", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportChartWrap.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("data", {
  immediate: true
})], ReportChartWrap.prototype, "watchData", null);

ReportChartWrap = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-chart-wrap",
  components: {
    Chart: _chart.default,
    Loading: _loading.default,
    ChartWrapPlaceholder: _placeholder.default
  }
})], ReportChartWrap);
var _default2 = ReportChartWrap;
exports.default = _default2;