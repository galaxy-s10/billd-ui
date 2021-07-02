"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/modal/style/css");

var _modal = _interopRequireDefault(require("ant-design-vue/lib/modal"));

require("ant-design-vue/lib/popconfirm/style/css");

var _popconfirm = _interopRequireDefault(require("ant-design-vue/lib/popconfirm"));

require("ant-design-vue/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("ant-design-vue/lib/tooltip"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _awesomeUi = _interopRequireDefault(require("awesome-ui"));

var _scroll = _interopRequireDefault(require("../../components/scroll"));

var _types = require("../../store/dashboard/types");

var _chartType = require("../../enum/chart-type");

var _dom = require("../../utils/dom");

var _filterPicker = _interopRequireDefault(require("../modules/filter-picker"));

var _dataSourceModal = _interopRequireDefault(require("../models/data-source-modal"));

var _confirm = _interopRequireDefault(require("../../components/confirm"));

var _element = _interopRequireDefault(require("../element"));

var _lazyLoad = _interopRequireDefault(require("../../utils/lazy-load"));

var _reportState = require("../../enum/report-state");

var _cssElementQueries = require("css-element-queries");

var _fullScreen = _interopRequireDefault(require("../full-screen"));

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

//error
var H3GridLayout = _awesomeUi.default.H3GridLayout;
//done
var ReportPro = (0, _vuexClass.namespace)("report");

var ReportContainer = /*#__PURE__*/function (_Vue) {
  _inherits(ReportContainer, _Vue);

  var _super = _createSuper(ReportContainer);

  function ReportContainer() {
    var _this;

    _classCallCheck(this, ReportContainer);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-container";
    _this.resizeSensor = null;
    _this.showFilterPicker = false;
    _this.addFilterPicker = false;
    _this.lazyLoadCharts = {}; //搜集已加载的图表
    // 数据源列表弹窗实例

    _this.dataListConfirm = null;
    _this.containerHeight = 0;
    _this.timer = 0;
    return _this;
  }

  _createClass(ReportContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, "h3-report-paint", this.global.styles.paintCoatTheme]
      }, [h("div", {
        ref: "globolMark",
        "class": "".concat(this.prefixCls, "__mark"),
        style: this.getStyles
      }), h("div", {
        ref: "canvas",
        "class": [this.prefixCls + "__canvas"]
      }, [h("h3-grid-layout", {
        ref: "gridLayout",
        attrs: {
          "vertical-compact": true,
          "use-css-transforms": true,
          layout: this.charts,
          "reserve-height": this.getReserveHeight,
          "col-num": this.getLayoutOptions.colNum,
          "row-height": this.getLayoutOptions.rowHeight,
          margin: this.getLayoutOptions.margin,
          showGridLine: this.getLayoutOptions.showGridLine,
          "is-draggable": this.getLayoutOptions.draggable,
          "is-resizable": this.getLayoutOptions.resizable,
          responsive: this.getLayoutOptions.responsive
        }
      }, [this.charts.map(function (item, i) {
        return h("h3-grid-item", {
          attrs: {
            dragAllowFrom: ".h3-report-elementWrap__header,.h3-report-long-text-wrap",
            dragIgnoreFrom: ".h3-report-long-text-edit",
            id: item.dataSourceId,
            "data-id": item.uid,
            handleActive: item.handleActive,
            tabindex: i,
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
            i: item.i,
            minH: item.minH,
            minW: item.minW,
            maxH: item.maxH,
            maxW: item.maxW
          },
          style: _this2.getItemStyles,
          "class": [_this2.prefixCls + "__item", item.class],
          key: item.uid,
          on: {
            "move": _this2.changeScroll,
            "resize": _this2.changeScroll,
            "focus": _this2.focus(item),
            "resized": _this2.chartResized(item)
          }
        }, [h("element-wrap", {
          ref: "elementWrap",
          attrs: {
            refresh: false,
            element: item,
            "element-index": i,
            global: _this2.global,
            status: _this2.status
          },
          on: {
            "change-picker": _this2.changeFilterPicker,
            "full-screen": _this2.fullScreen
          }
        })]);
      }), !this.charts.length && h("div", {
        "class": ["".concat(this.prefixCls, "__empty")]
      }, [this.status === this.getReportStateDesign ? h("div", [h("img", {
        attrs: {
          src: require("../../assets/pro/design-bg.png")
        }
      }), h("label", ["\u62D6\u5165\u9876\u90E8\u56FE\u8868\u7C7B\u578B\u65B0\u5EFA\u4EEA\u8868\u76D8"])]) : h("div", [h("img", {
        attrs: {
          src: require("../../assets/pro/report-bg.png")
        }
      }), h("label", ["\u6682\u65E0\u56FE\u8868\u6570\u636E"])])])])]), this.showFilterPicker && h("filter-picker", {
        attrs: {
          filterPicker: this.activeChart,
          model: {
            value: _this2.showFilterPicker,
            callback: function callback($$v) {
              _this2.showFilterPicker = $$v;
            }
          }
        },
        on: {
          "filter-cancel": this.cancelFilterPicker,
          "filter-sure": this.sureFilterPicker
        }
      })]);
    }
  }, {
    key: "getReportStateDesign",
    get: function get() {
      return _reportState.ReportState.DESIGN;
    }
  }, {
    key: "getReserveHeight",
    get: function get() {
      return this.status !== _reportState.ReportState.DESIGN ? 0 : 200;
    }
  }, {
    key: "getItemStyles",
    get: function get() {
      if (this.global.styles.paintCoatTheme === "default") {
        return {
          backgroundColor: this.global.styles.elementCoat.value
        };
      } else {
        return {
          backgroundColor: "transparent"
        };
      }
    }
    /**
     * 获取仪表盘背景色
     */

  }, {
    key: "getStyles",
    get: function get() {
      if (!this.global.styles.paintCoatTheme) return true;
      var paintCoat = this.global.styles.paintCoat;
      var picOpt;

      if (this.global.styles.paintCoatTheme === "default") {
        if (paintCoat.type === "bgColor") {
          picOpt = {
            backgroundColor: paintCoat.value
          };
        } else if (this.global.styles.paintCoat.type === "bgPicture") {
          picOpt = {
            backgroundImage: "url(" + paintCoat.value + ")"
          };
        }
      } else {
        var bgUrl = require("@h3/report/basics/assets/color-setting/theme/" + this.global.styles.paintCoatTheme + "-bg.png");

        picOpt = {
          backgroundImage: "url(" + bgUrl + ")"
        };
      }

      return picOpt;
    }
  }, {
    key: "getLayoutOptions",
    get: function get() {
      return _extends({
        draggable: true,
        margin: [8, 8],
        showGridLine: false,
        mask: true,
        editState: true,
        resizable: true,
        responsive: false,
        colNum: 32,
        rowHeight: 32
      }, this.layoutOptions);
    }
  }, {
    key: "chartMask",
    value: function chartMask(chart) {
      if (chart.type === "longText" && chart.edit) {
        return false;
      }

      return true;
    }
  }, {
    key: "mousemoveLayout",
    value: function mousemoveLayout(e) {
      if (this.dragChart) {
        e.stopPropagation();
        e.preventDefault();
        var gridLayout = this.$refs.gridLayout;
        var rect = gridLayout.$el.getBoundingClientRect();
        var colWidth = (rect.width - gridLayout.margin[0]) / gridLayout.colNum;
        var colHeight = gridLayout.rowHeight + gridLayout.margin[1];
        var x = Math.round((e.pageX - rect.left - this.dragChart.w * colWidth / 2) / colWidth);
        var y = Math.round((e.pageY - rect.top - this.dragChart.h * colHeight / 2) / colHeight);
        if (x < -6 || x > 22 || y < -3) return;

        if (!this.dragChart.addStatus) {
          if (this.activeChart) this.activeChart.handleActive = false;
          this.dragChart.addStatus = true;
          this.dragChart.handleActive = true;
          this.charts.push(this.dragChart);
          this.innerChart = this.dragChart;
          this.setActiveChart();
          document.body.addEventListener("mouseup", this.addElementEnd, false);
        }

        if (x < 0) {
          x = 0;
        } else if (x > Math.round(gridLayout.colNum - this.dragChart.w)) {
          x = Math.round(gridLayout.colNum - this.dragChart.w);
        }

        if (y < 0) {
          y = 0;
        }

        this.dragChart.x = x;
        this.dragChart.y = y;
        gridLayout.compact();
      }
    }
    /**
     * 图表获取焦点
     * @param chart
     */

  }, {
    key: "focus",
    value: function focus(chart) {
      if (this.activeChart && this.activeChart.uid === chart.uid || this.status !== _reportState.ReportState.DESIGN) return;

      if (this.activeChart) {
        this.charts.forEach(function (charts) {
          charts.handleActive = false;
          if (charts.edit) charts.edit = false;
        });
      }

      chart.handleActive = true;
      this.setActiveChart(chart);
    }
    /**
     * 显示数据源弹窗
     */

  }, {
    key: "showDataSourceModal",
    value: function showDataSourceModal() {
      var _this3 = this;

      this.dataListConfirm = (0, _confirm.default)({
        title: "数据源选择",
        store: this.$store,
        width: 386,
        wrapClassName: "h3-report-datasource-modal",
        content: function content(h) {
          return h(_dataSourceModal.default, {
            props: {
              activeChart: _this3.innerChart,
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
          return __awaiter(_this3, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return e.contentVNode.check();

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        },
        cancel: function cancel(e) {
          _this3.cancelDataSourceModal();
        }
      });
    }
    /**
     * 取消选择数据源列表弹窗
     */

  }, {
    key: "cancelDataSourceModal",
    value: function cancelDataSourceModal() {
      var _this4 = this;

      var dataSourceModalIndex = this.charts.findIndex(function (item) {
        return item.uid === _this4.innerChart.uid;
      });
      this.charts.splice(dataSourceModalIndex, 1);
    }
    /**
     * 关闭数据源弹窗
     * @param value
     */

  }, {
    key: "changeFilterPicker",
    value: function changeFilterPicker(value) {
      this.showFilterPicker = value;
    }
    /**
     * 添加元件结束事件
     */

  }, {
    key: "addElementEnd",
    value: function addElementEnd() {
      if (!(this.innerChart.type === _chartType.ElementType.FILTERPICKER || this.innerChart.type === _chartType.ElementType.LONGTEXT)) {
        this.showDataSourceModal();
      } else if (this.innerChart.type === _chartType.ElementType.FILTERPICKER) {
        this.addFilterPicker = true;
        this.setActiveChart(this.innerChart);
        this.showFilterPicker = true;
      }

      document.body.removeEventListener("mouseup", this.addElementEnd, false);
    }
    /**
     * 筛选确认
     */

  }, {
    key: "sureFilterPicker",
    value: function sureFilterPicker(chart) {
      _extends(this.activeChart, chart);

      this.addFilterPicker = false;
    } // 筛选取消

  }, {
    key: "cancelFilterPicker",
    value: function cancelFilterPicker() {
      if (this.addFilterPicker) {
        this.charts.splice(this.charts.indexOf(this.activeChart), 1);
        this.addFilterPicker = false;
      }
    }
    /**
     * 图表失去焦点
     * @param e
     */

  }, {
    key: "blur",
    value: function blur(e) {
      if (this.dragField || this.dragChart) return;

      if (this.activeChart && !(0, _dom.closest)(e.target, ".vue-grid-item, " + ".h3-report-attributes," + ".h3-report-tools, " + ".h3-report-models, " + ".ant-modal-centered, " + ".ant-modal," + ".sortModal, " + ".ant-select-dropdown," + ".h3-report-filter-modal," + ".ant-calendar-picker-container," + ".ant-tooltip,.h3-report-designer-header__save," + ".h3-report-models," + ".introjs-overlay," + ".introjs-helperLayer," + ".introjs-tooltipReferenceLayer")) {
        this.charts.forEach(function (chart) {
          chart.handleActive = false;
          if (chart.edit) chart.edit = false;
        });
        this.setActiveChart(null);
      }
    }
    /**
     * 图表移动中
     */

  }, {
    key: "changeScroll",
    value: function changeScroll() {// (this.$refs.scroll as any).setScrollBar();
    }
    /**
     * 图表改变形状之后
     * @param chart
     */

  }, {
    key: "chartResized",
    value: function chartResized(chart) {
      this.resizeChartView({
        chart: chart,
        type: "view"
      });
    }
    /**
     * 图表懒加载
     * @param entries
     */

  }, {
    key: "lazyLoadChart",
    value: function lazyLoadChart(entries) {
      var _this5 = this;

      entries.forEach(function (entry) {
        var chart = entry.target.getAttribute("data-id");

        if (_this5.lazyLoadCharts[chart]) {
          _this5.lazyLoadCharts[chart].isIntersecting = entry.isIntersecting;
        }
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        Object.keys(_this5.lazyLoadCharts).forEach(function (chartId) {
          var lazyLoadChart = _this5.lazyLoadCharts[chartId];

          if (lazyLoadChart.isIntersecting && !lazyLoadChart.loaded) {
            lazyLoadChart.loaded = true;

            _this5.resizeChartView(lazyLoadChart.resize);
          }
        });
      }, 300);
    }
    /**
     * 注册懒加载事件
     * @param e
     */

  }, {
    key: "registerLazyLoad",
    value: function registerLazyLoad(e) {
      var _this6 = this;

      if (e.target.classList.contains("".concat(this.prefixCls, "__item"))) {
        var chart = e.target.getAttribute("data-id");
        this.lazyLoadCharts[chart] = {
          resize: {
            chart: chart,
            type: "load"
          },
          isIntersecting: false,
          loaded: false
        };
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          new _lazyLoad.default(_this6.$el, {
            selector: ".".concat(_this6.prefixCls, "__item"),
            callback: _this6.lazyLoadChart
          });
        }, 100);
      }
    }
    /**
     * 全屏事件
     * @param element
     * @param elementIndex
     */

  }, {
    key: "fullScreen",
    value: function fullScreen(_ref) {
      var element = _ref.element,
          elementIndex = _ref.elementIndex,
          status = _ref.status;

      if (status) {
        (0, _fullScreen.default)({
          store: this.$store,
          el: this.$el,
          element: element,
          elementIndex: elementIndex,
          global: this.global,
          refresh: false,
          status: this.status,
          narrow: this.fullScreen
        });
      } else {
        var uid = element.uid.replace("full-", "");
        var fullChart = element;
        var chartIndex = this.charts.findIndex(function (chart, index) {
          return chart.uid === uid;
        });
        fullChart.uid = uid;
        this.charts.splice(chartIndex, 1, fullChart);
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this7 = this;

      document.body.addEventListener("mousedown", this.blur, false);
      document.body.addEventListener("mousemove", this.mousemoveLayout, false); //        v-h3-lazy-load="{selector: `.${prefixCls}__item`, callback: lazyLoadChart, delay: 500}"

      this.$el.addEventListener("transitionend", this.registerLazyLoad, false);
      this.containerHeight = this.$el.clientHeight;
      this.resizeSensor = new _cssElementQueries.ResizeSensor(this.$refs.gridLayout.$el, function (e) {
        if (e.height !== _this7.containerHeight) {
          _this7.changeScroll();
        }
      });
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      document.body.removeEventListener("mousedown", this.blur, false);
      document.body.removeEventListener("mousemove", this.mousemoveLayout, false);
      this.$el.removeEventListener("transitionend", this.registerLazyLoad, false);

      if (this.resizeSensor) {
        this.resizeSensor.detach();
      }
    }
  }]);

  return ReportContainer;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportContainer.prototype, "layoutOptions", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: _reportState.ReportState.DESIGN
})], ReportContainer.prototype, "status", void 0);

__decorate([ReportPro.State("charts")], ReportContainer.prototype, "charts", void 0);

__decorate([ReportPro.State("global")], ReportContainer.prototype, "global", void 0);

__decorate([ReportPro.State("activeChart")], ReportContainer.prototype, "activeChart", void 0);

__decorate([ReportPro.State("dragChart")], ReportContainer.prototype, "dragChart", void 0);

__decorate([ReportPro.State("dragField")], ReportContainer.prototype, "dragField", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETACTIVECHART)], ReportContainer.prototype, "setActiveChart", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.CLEARACTIVECHART)], ReportContainer.prototype, "clearActiveChart", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.RESIZECHARTVIEW)], ReportContainer.prototype, "resizeChartView", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETDATASOURCELIST)], ReportContainer.prototype, "getDataSourceList", void 0);

__decorate([(0, _vuePropertyDecorator.Provide)(), ReportPro.Mutation(_types.ReportMutation.SETTABLEEXPORTDATA)], ReportContainer.prototype, "setTableExportData", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ReportContainer.prototype, "addDataSource", void 0);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportContainer.prototype, "focus", null);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportContainer.prototype, "blur", null);

ReportContainer = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-container",
  components: {
    ATooltip: _tooltip.default,
    APopconfirm: _popconfirm.default,
    AModal: _modal.default,
    H3GridLayout: H3GridLayout,
    H3GridItem: H3GridLayout.Item,
    H3Scroll: _scroll.default,
    FilterPicker: _filterPicker.default,
    ElementWrap: _element.default
  }
})], ReportContainer);
var _default2 = ReportContainer;
exports.default = _default2;