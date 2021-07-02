"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _reportState = require("../enum/report-state");

var _dashboard = require("../store/dashboard");

var _types = require("../store/dashboard/types");

var _vuexClass = require("vuex-class");

var _object = require("../utils/object");

var _options = _interopRequireDefault(require("../dist/options"));

var _browser = require("../utils/browser");

var _global = _interopRequireDefault(require("../instance/modules/global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ReportPro = (0, _vuexClass.namespace)("report");

var SingleChartMixins = /*#__PURE__*/function (_Vue) {
  _inherits(SingleChartMixins, _Vue);

  var _super = _createSuper(SingleChartMixins);

  function SingleChartMixins() {
    var _this;

    _classCallCheck(this, SingleChartMixins);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-single-chart";
    _this.element = null;
    _this.global = null;
    _this.loading = true;
    return _this;
  }
  /**
   * 获取class
   */


  _createClass(SingleChartMixins, [{
    key: "getClass",
    get: function get() {
      var _cls;

      var cls = (_cls = {}, _defineProperty(_cls, this.prefixCls, true), _defineProperty(_cls, (0, _browser.judgeMobile)(), true), _cls);

      if (this.global) {
        cls["h3-report-paint"] = this.global.styles.paintCoatTheme !== "default";
        cls[this.global.styles.paintCoatTheme] = true;
      }

      return cls;
    }
    /**
     * 获取仪表盘背景色
     */

  }, {
    key: "getStyles",
    get: function get() {
      if (!this.global || !this.global.styles.paintCoatTheme) return true;
      var paintCoat = this.global.styles.paintCoat;
      var picOpt;

      if (this.global.styles.paintCoatTheme === "default") {
        if (paintCoat.type === "bgColor") {
          picOpt = {
            backgroundColor: paintCoat.value
          };
        } else if (this.global.styles.paintCoat.type === "bgPicture") {
          picOpt = {
            backgroundImage: "url(" + paintCoat.value + ")",
            backgroundSize: "100% 100%"
          };
        }
      } else {
        var bgUrl = require("../../assets/color-setting/theme/" + this.global.styles.paintCoatTheme + "-bg.png");

        picOpt = {
          backgroundImage: "url(" + bgUrl + ")",
          backgroundSize: "100% 100%"
        };
      }

      return picOpt;
    }
    /**
     * 设置仪表盘配置项
     */

  }, {
    key: "setSingleChartOptions",
    value: function setSingleChartOptions() {
      var dashboardOptions = {};

      if (this.config) {
        dashboardOptions.config = this.config;
      }

      if (this.corpId) {
        dashboardOptions.corpId = this.corpId;
      }

      if (this.integrateComponents) {
        dashboardOptions.integrateComponents = this.integrateComponents;
      }

      if (this.classification) {
        dashboardOptions.classification = this.classification;
      }

      if (this.limit) {
        (0, _object.compare)(_options.default.charts, this.limit);
      }

      this.setReportOptions(_extends({}, _options.default, dashboardOptions));
    }
    /**
     * 刷新图表
     */

  }, {
    key: "refresh",
    value: function refresh() {
      var chart = this.element; // PC端的实例，在全屏的情况调用，后续迭代需要优化

      if (this.fullScreenElement && this.fullScreenElement.Instance) {
        chart = this.fullScreenElement.Instance.$children[0].fullScreenElement;
      }

      this.resizeChartView({
        chart: chart,
        type: "data"
      });
    }
    /**
     * 图表懒加载
     * @param entries
     */

  }, {
    key: "lazyLoadChart",
    value: function lazyLoadChart(entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        var chartId = entry.target.getAttribute("data-id");

        if (chartId) {
          _this2.resizeChartView({
            chart: chartId,
            type: "load"
          });
        }
      });
    }
    /**
     * 单图表加载
     */

  }, {
    key: "loadSingleChart",
    value: function loadSingleChart() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading = true;
                this.setSingleChartOptions();
                this.getReportDetail({
                  corpId: this.corpId,
                  reportId: this.reportId,
                  type: _reportState.ReportState.SINGLE
                }).then(function (res) {
                  if (res) {
                    _this3.element = res.elements.find(function (element) {
                      return element.uid === _this3.chartId;
                    });
                    _this3.global = (0, _global.default)().global;
                    var styles = _this3.element && _this3.element.styles;

                    if (styles) {
                      styles.elementCoat = {
                        type: null,
                        value: ""
                      };
                      styles.fontSetting = {
                        titleColor: null,
                        fontColor: null
                      };
                    }
                  }

                  _this3.$emit("chart-loaded");

                  _this3.loading = false;
                }).catch(function () {
                  _this3.$emit("chart-loaded");

                  _this3.loading = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "created",
    value: function created() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.$store.state.report) {
                  this.$store.registerModule("report", _dashboard.reportState);
                }

                _context2.next = 3;
                return this.loadSingleChart();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }]);

  return SingleChartMixins;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], SingleChartMixins.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], SingleChartMixins.prototype, "reportId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], SingleChartMixins.prototype, "chartId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], SingleChartMixins.prototype, "config", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], SingleChartMixins.prototype, "integrateComponents", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], SingleChartMixins.prototype, "classification", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], SingleChartMixins.prototype, "limit", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETREPORTDETAIL)], SingleChartMixins.prototype, "getReportDetail", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTOPTIONS)], SingleChartMixins.prototype, "setReportOptions", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.RESIZECHARTVIEW)], SingleChartMixins.prototype, "resizeChartView", void 0);

SingleChartMixins = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-single-chart-mixins"
})], SingleChartMixins);
var _default2 = SingleChartMixins;
exports.default = _default2;