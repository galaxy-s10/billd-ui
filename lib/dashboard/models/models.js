"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _awesomeUi = require("awesome-ui");

var _vuedraggable = _interopRequireDefault(require("vuedraggable"));

var _dataSource = _interopRequireDefault(require("./data-source"));

var _dataSourceModal = _interopRequireDefault(require("./data-source-modal"));

var _confirm = _interopRequireDefault(require("../../components/confirm"));

var _types = require("../../store/dashboard/types");

var _loading = _interopRequireDefault(require("../../components/loading"));

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

var ReportPro = (0, _vuexClass.namespace)("report");

var ReportModels = /*#__PURE__*/function (_Vue) {
  _inherits(ReportModels, _Vue);

  var _super = _createSuper(ReportModels);

  function ReportModels() {
    var _this;

    _classCallCheck(this, ReportModels);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-models";
    _this.editDataSourceStatus = false; // 是否编辑源状态

    _this.loading = false;
    _this.getShowDataSource = null; // 数据源列表弹窗实例

    _this.dataListConfirm = null;
    return _this;
  }

  _createClass(ReportModels, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [this.loading ? h("h3-loading") : h("h3-data-source", {
        attrs: {
          chart: this.activeChart,
          "data-source": this.getShowDataSource
        }
      }), h("div", {
        "class": ["".concat(this.prefixCls, "__header")]
      }, [h("label", ["\u6570\u636E\u6765\u6E90"]), !this.editDataSourceStatus && this.getShowDataSource, h("a", {
        on: {
          "click": this.changeDataSourceStatus
        }
      }, ["\u66F4\u6539"])])]);
    }
  }, {
    key: "watchActiveChart",
    value: function watchActiveChart() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.editDataSourceStatus = false;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "watchActiveChartDataSourceId",
    value: function watchActiveChartDataSourceId() {
      var _this2 = this;

      if (this.activeChart.dataSourceId) {
        this.showLoading(true);
        this.getDataSource(this.activeChart).then(function (res) {
          if (_this2.activeChart.dataSourceId) {
            _this2.getShowDataSource = _this2.dataSources[_this2.activeChart.dataSourceId];

            _this2.showLoading(false);
          }
        });
      } else {
        this.getShowDataSource = null;
      }
    }
    /**
     * 改变源编辑状态
     * @param status
     */

  }, {
    key: "changeDataSourceStatus",
    value: function changeDataSourceStatus(status) {
      var _this3 = this;

      this.dataListConfirm = (0, _confirm.default)({
        title: "数据源选择",
        store: this.$store,
        width: 386,
        wrapClassName: "h3-report-datasource-modal",
        content: function content(h) {
          return h(_dataSourceModal.default, {
            props: {
              dataSource: {
                objectId: _this3.activeChart.dataSourceId,
                useType: _this3.activeChart.useType
              },
              activeChart: _this3.activeChart,
              addDataSource: _this3.addDataSource
            },
            on: {
              addDataSource: function addDataSource() {
                _this3.dataListConfirm.close();
              }
            }
          });
        },
        ok: function ok(e) {
          return __awaiter(_this3, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return e.contentVNode.check();

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      });
    }
    /**
     * 是否显示loading
     */

  }, {
    key: "showLoading",
    value: function showLoading(val) {
      this.loading = val;
    }
    /**
     * 图表改变数据源列表
     * @param dataSourceId
     */

  }, {
    key: "getDataSourceList",
    value: function getDataSourceList() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoading(true);
                _context3.next = 3;
                return this.getDataSources();

              case 3:
                res = _context3.sent;

                if (!(res instanceof Array)) {
                  this.editDataSourceStatus = false;
                }

                this.showLoading(false);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return ReportModels;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("activeChart")], ReportModels.prototype, "activeChart", void 0);

__decorate([ReportPro.State("dataSources")], ReportModels.prototype, "dataSources", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETDATASOURCE)], ReportModels.prototype, "getDataSource", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETDATASOURCELIST)], ReportModels.prototype, "getDataSources", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)()], ReportModels.prototype, "addDataSource", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("activeChart")], ReportModels.prototype, "watchActiveChart", null);

__decorate([(0, _vuePropertyDecorator.Watch)("activeChart.dataSourceId", {
  immediate: true
})], ReportModels.prototype, "watchActiveChartDataSourceId", null);

ReportModels = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-models",
  components: {
    ASelect: _select.default,
    H3Draggable: _vuedraggable.default,
    H3Button: _awesomeUi.H3Button,
    H3DataSource: _dataSource.default,
    H3Loading: _loading.default
  }
})], ReportModels);
var _default = ReportModels;
exports.default = _default;