"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("ant-design-vue/lib/message/style/css");

var _message2 = _interopRequireDefault(require("ant-design-vue/lib/message"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _showHeader = _interopRequireDefault(require("./header/show-header"));

var _container = _interopRequireDefault(require("./container"));

var _dashboard = require("../store/dashboard");

var _types = require("../store/dashboard/types");

var _loading = _interopRequireDefault(require("../components/loading"));

var _options = _interopRequireDefault(require("../dist/options"));

var _object = require("../utils/object");

var _reportState = require("../enum/report-state");

var _events = require("../utils/events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

_options.default.message = _message2.default;
var ReportPro = (0, _vuexClass.namespace)("report");

var ReportShow = /*#__PURE__*/function (_Vue) {
  _inherits(ReportShow, _Vue);

  var _super = _createSuper(ReportShow);

  function ReportShow() {
    var _this;

    _classCallCheck(this, ReportShow);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-show";
    _this.loading = true;
    _this.layoutOptions = {
      draggable: false,
      showGridLine: false,
      editState: false,
      mask: false,
      resizable: false
    };
    return _this;
  }

  _createClass(ReportShow, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, "h3-report-layout"]
      }, [this.loading ? h("report-container", {
        attrs: {
          status: this.getReportStateDashboard,
          layoutOptions: this.layoutOptions
        }
      }) : h("h3-loading")]);
    }
  }, {
    key: "watchCorpId",
    value: function watchCorpId() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadReport();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "watchReportId",
    value: function watchReportId() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadReport();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getReportStateDashboard",
    get: function get() {
      return _reportState.ReportState.DASHBOARD;
    }
    /**
     * 触发添加高级数据源
     */

  }, {
    key: "addDataSource",
    value: function addDataSource() {
      this.$emit("addDataSource");
    }
    /**
     * 触发下钻功能（目前只支持明细表）
     */

  }, {
    key: "drillDown",
    value: function drillDown(data) {
      console.log("触发drillDowns", data);
      this.$emit("drillDown", data);
    }
    /**
     * 设置仪表盘配置项
     */

  }, {
    key: "setDashboardOptions",
    value: function setDashboardOptions() {
      var dashboardOptions = {};

      if (this.corpId) {
        dashboardOptions.corpId = this.corpId;
      }

      if (this.reportId) {
        dashboardOptions.reportId = this.reportId;
      }

      if (this.config) {
        dashboardOptions.config = this.config;
      }

      if (this.integrateComponents) {
        dashboardOptions.integrateComponents = this.integrateComponents;
      }

      if (this.classification) {
        dashboardOptions.classification = this.classification;
      }

      if (this.limit) {
        (0, _object.compare)(_options.default.charts, this.limit);
        console.log(_options.default.charts);
      }

      this.setReportOptions(_extends({}, _options.default, dashboardOptions));
    }
  }, {
    key: "loadReport",
    value: function loadReport() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.initReport();
                this.loading = true;
                this.setDashboardOptions();
                _context3.next = 5;
                return this.getReport({
                  corpId: this.corpId,
                  reportId: this.reportId,
                  type: _reportState.ReportState.DASHBOARD
                }).catch(function () {});

              case 5:
                this.$emit("report-loaded");
                this.loading = false;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "refreshTop",
    value: function refreshTop() {
      this.setReportTop(this.$el.getBoundingClientRect().top);
      this.$nextTick(function () {
        (0, _events.dispatch)(window, "resize");
      });
    }
  }, {
    key: "created",
    value: function created() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.$store.state.report) {
                  this.$store.registerModule("report", (0, _dashboard.getNewReportState)());
                }

                _context4.next = 3;
                return this.loadReport();

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "updated",
    value: function updated() {
      this.refreshTop();
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.refreshTop();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {// this.$store.unregisterModule('report');
    }
  }]);

  return ReportShow;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportShow.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportShow.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportShow.prototype, "reportId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportShow.prototype, "limit", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportShow.prototype, "config", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportShow.prototype, "integrateComponents", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportShow.prototype, "classification", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportShow.prototype, "header", void 0);

__decorate([ReportPro.State("title")], ReportShow.prototype, "title", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTTOP)], ReportShow.prototype, "setReportTop", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.INITREPORT)], ReportShow.prototype, "initReport", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETREPORT)], ReportShow.prototype, "getReport", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTOPTIONS)], ReportShow.prototype, "render", null);

__decorate([(0, _vuePropertyDecorator.Watch)("corpId", {
  deep: true
})], ReportShow.prototype, "watchCorpId", null);

__decorate([(0, _vuePropertyDecorator.Watch)("reportId")], ReportShow.prototype, "watchReportId", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportShow.prototype, "addDataSource", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportShow.prototype, "drillDown", null);

ReportShow = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-show",
  components: {
    ReportShowHeader: _showHeader.default,
    ReportContainer: _container.default,
    H3Loading: _loading.default
  }
})], ReportShow);
var _default2 = ReportShow;
exports.default = _default2;