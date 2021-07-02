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

var _designerHeader = _interopRequireDefault(require("./header/designer-header"));

var _container = _interopRequireDefault(require("./container"));

var _tools = _interopRequireDefault(require("./tools"));

var _models = _interopRequireDefault(require("./models"));

var _global = _interopRequireDefault(require("./global"));

var _preview = _interopRequireDefault(require("./preview"));

var _entry = _interopRequireDefault(require("./guide/entry"));

var _loading = _interopRequireDefault(require("../components/loading"));

var _events = require("../utils/events");

var _types = require("../store/dashboard/types");

var _dashboard = require("../store/dashboard");

var _options = _interopRequireDefault(require("../dist/options"));

var _object = require("../utils/object");

var _reportState = require("../enum/report-state");

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

var ReportPro = (0, _vuexClass.namespace)("report");
_options.default.message = _message2.default;

var ReportDesign = /*#__PURE__*/function (_Vue) {
  _inherits(ReportDesign, _Vue);

  var _super = _createSuper(ReportDesign);

  function ReportDesign() {
    var _this;

    _classCallCheck(this, ReportDesign);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-designer";
    _this.previewStatus = false; // 预览状态

    _this.loading = true;
    return _this;
  }

  _createClass(ReportDesign, [{
    key: "watchTitle",
    value: function watchTitle(val) {
      this.setReportTitle(val);
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
    value: function watchReportId(val) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(val !== this.objectId)) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.loadReport();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "watchConfig",
    value: function watchConfig() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.loadReport();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "watchShowAdvancedDataSource",
    value: function watchShowAdvancedDataSource() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.loadReport();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
    /**
     * 触发添加高级数据源
     */

  }, {
    key: "addDataSource",
    value: function addDataSource() {
      console.log("addDataSource");
      this.$emit("addDataSource");
    }
    /**
     * 报表保存
     */

  }, {
    key: "reportSave",
    value: function reportSave() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.setActiveChart();
                _context5.next = 3;
                return this.saveReport().then(function () {
                  if (_this2.saveMessageShow) _message2.default.success("仪表盘保存成功");

                  _this2.$emit("report-save", {
                    title: _this2.title,
                    reportId: _this2.objectId
                  });
                }).catch(function (res) {
                  _message2.default.error("仪表盘保存失败");
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
    /**
     * 关闭方法
     */

  }, {
    key: "closePreview",
    value: function closePreview() {
      _preview.default.close();
    }
    /**
     * 修改预览状态
     */

  }, {
    key: "updatePreviewStatus",
    value: function updatePreviewStatus(previewStatus) {
      if (!previewStatus) {
        _preview.default.destroy();
      } else {
        _preview.default.show(this.$store, {
          el: this.$el,
          charts: JSON.parse(JSON.stringify(this.charts)),
          global: this.global,
          top: this.reportTop,
          objectId: this.objectId,
          title: this.title
        });
      }

      this.$emit("dashboard-preview", previewStatus);
    }
    /**
     * 修改标题
     */

  }, {
    key: "updateTitle",
    value: function updateTitle(title) {
      this.setReportTitle(title);
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

      if (this.classification) {
        dashboardOptions.classification = this.classification;
      }

      if (this.limit) {
        (0, _object.compare)(_options.default.charts, this.limit);
      }

      if (this.showAdvancedDataSource) {
        console.log("展示高级数据源");
        this.setAdvancedDataSource(this.showAdvancedDataSource);
      }

      this.setReportOptions(_extends({}, _options.default, dashboardOptions));
    }
  }, {
    key: "refreshTop",
    value: function refreshTop() {
      this.setReportTop(this.$el.getBoundingClientRect().top);
      this.$nextTick(function () {
        (0, _events.dispatch)(window, "resize");
      });
    }
    /**
     * 设置报表Id
     * @param reportId
     */

  }, {
    key: "setReportId",
    value: function setReportId(reportId) {
      this.setObjectId(reportId);
    }
  }, {
    key: "updated",
    value: function updated() {
      this.refreshTop();
    }
  }, {
    key: "loadReport",
    value: function loadReport() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.initReport();
                this.loading = true;
                this.setDashboardOptions();
                _context6.next = 5;
                return this.getReport({
                  corpId: this.corpId,
                  reportId: this.reportId,
                  type: _reportState.ReportState.DESIGN
                }).catch(function () {});

              case 5:
                _context6.next = 7;
                return this.getDataSourceList().catch(function () {});

              case 7:
                if (this.value) {
                  this.setReportTitle(this.value);
                }

                this.loading = false;
                this.$emit("report-loaded");
                this.$emit("input", this.value || this.title);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "created",
    value: function created() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!this.$store.state.report) {
                  this.$store.registerModule("report", (0, _dashboard.getNewReportState)());
                }

                _context7.next = 3;
                return this.loadReport();

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // Guide({
      //   container: this.$el
      // });
      console.log("this.props");
      console.log(this);
      this.refreshTop();
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      _preview.default.destroy(); // this.$store.unregisterModule('report');

    }
  }, {
    key: "render",
    value: function render(h) {
      var _this3 = this;

      var mainChildren = [h(_container.default, {
        props: {
          charts: this.charts
        }
      })];

      if (!this.previewStatus) {
        if (this.activeChart && this.activeChart.data) {
          mainChildren.push(h(_models.default), h(_tools.default));
        } else {
          mainChildren.push(h(_global.default, {
            on: {
              input: function input(val) {
                _this3.$emit("input", val);
              }
            }
          }));
        }
      }

      var children = null;

      if (this.loading && !this.guideConfig.primaryGuide) {
        children = [h(_loading.default)];
      } else {
        children = [h(this.header || _designerHeader.default, {
          props: {
            previewStatus: this.previewStatus,
            title: this.title
          },
          on: {
            "update-preview-status": this.updatePreviewStatus,
            "update-title": this.updateTitle,
            "save-report": this.reportSave
          }
        }), h("div", {
          class: {
            "h3-report-main": true
          }
        }, mainChildren)];
      }

      if (!this.previewStatus && this.showGuide) {
        children.push(h(_entry.default, {
          props: {
            container: this.$el,
            config: this.guideConfig
          },
          on: {
            "update-guide": function updateGuide(val) {
              console.log("update-guide", val);

              _this3.$emit("update-guide", val);
            }
          }
        }));
      }

      return h("div", {
        class: {
          "h3-report-designer": true,
          "h3-report-layout": true
        }
      }, children);
    }
  }]);

  return ReportDesign;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportDesign.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportDesign.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportDesign.prototype, "reportId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportDesign.prototype, "config", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {
      primaryGuide: false,
      displaySetting: false,
      chartAuthority: false
    };
  }
})], ReportDesign.prototype, "guideConfig", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], ReportDesign.prototype, "showGuide", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDesign.prototype, "integrateComponents", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDesign.prototype, "classification", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDesign.prototype, "limit", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return null;
  }
})], ReportDesign.prototype, "header", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return true;
  }
})], ReportDesign.prototype, "saveMessageShow", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportDesign.prototype, "showAdvancedDataSource", void 0);

__decorate([ReportPro.State("title")], ReportDesign.prototype, "title", void 0);

__decorate([ReportPro.State("objectId")], ReportDesign.prototype, "objectId", void 0);

__decorate([ReportPro.State("charts")], ReportDesign.prototype, "charts", void 0);

__decorate([ReportPro.State("global")], ReportDesign.prototype, "global", void 0);

__decorate([ReportPro.State("reportTop")], ReportDesign.prototype, "reportTop", void 0);

__decorate([ReportPro.State("chartsData")], ReportDesign.prototype, "chartsData", void 0);

__decorate([ReportPro.State("activeChart")], ReportDesign.prototype, "activeChart", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETREPORT)], ReportDesign.prototype, "getReport", void 0);

__decorate([ReportPro.Action(_types.ReportAction.SAVEREPORT)], ReportDesign.prototype, "saveReport", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETDATASOURCELIST)], ReportDesign.prototype, "getDataSourceList", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.INITREPORT)], ReportDesign.prototype, "initReport", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTTOP)], ReportDesign.prototype, "setReportTop", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTTITLE)], ReportDesign.prototype, "setReportTitle", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETREPORTOPTIONS)], ReportDesign.prototype, "setReportOptions", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETACTIVECHART)], ReportDesign.prototype, "setActiveChart", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETOBJECTID)], ReportDesign.prototype, "setObjectId", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETADVANCEDATASOURCE)], ReportDesign.prototype, "setAdvancedDataSource", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("value")], ReportDesign.prototype, "watchTitle", null);

__decorate([(0, _vuePropertyDecorator.Watch)("corpId", {
  deep: true
})], ReportDesign.prototype, "watchCorpId", null);

__decorate([(0, _vuePropertyDecorator.Watch)("reportId", {
  deep: true
})], ReportDesign.prototype, "watchReportId", null);

__decorate([(0, _vuePropertyDecorator.Watch)("config", {
  deep: true
})], ReportDesign.prototype, "watchConfig", null);

__decorate([(0, _vuePropertyDecorator.Watch)("showAdvancedDataSource", {
  deep: true
})], ReportDesign.prototype, "watchShowAdvancedDataSource", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportDesign.prototype, "addDataSource", null);

ReportDesign = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-designer",
  components: {
    ReportDesignerHeader: _designerHeader.default,
    ReportContainer: _container.default,
    ReportTools: _tools.default,
    ReportModels: _models.default
  }
})], ReportDesign);
var _default2 = ReportDesign;
exports.default = _default2;