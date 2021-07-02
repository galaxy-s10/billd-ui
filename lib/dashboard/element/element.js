"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _types = require("../../store/dashboard/types");

var _tools = _interopRequireDefault(require("./tools"));

var _elementWrap = _interopRequireDefault(require("../../components/element-wrap"));

var _chartType = require("../../enum/chart-type");

var _reportState = require("../../enum/report-state");

var _chartMixins = _interopRequireDefault(require("../../mixins/chart-mixins"));

var _toolsMixins = _interopRequireDefault(require("./tools-mixins"));

var _elementTools = require("../../enum/element-tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var ReportPro = (0, _vuexClass.namespace)("report");

var ElementWrap = /*#__PURE__*/function (_Mixins) {
  _inherits(ElementWrap, _Mixins);

  var _super = _createSuper(ElementWrap);

  function ElementWrap() {
    var _this;

    _classCallCheck(this, ElementWrap);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-elementWrap";
    _this.timer = null; // 定时器，延时触发change事件

    return _this;
  }

  _createClass(ElementWrap, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls,
        style: this.getStyles
      }, [h("tools", {
        "class": "".concat(this.prefixCls, "__header"),
        attrs: {
          element: this.element,
          fixed: this.fixed,
          status: this.status,
          global: this.global,
          toolbars: this.toolbars,
          "tools-click": this.toolsClick
        },
        scopedSlots: {
          title: function title() {
            return _this2.$scopedSlots.title({});
          },
          extra: function extra() {
            return _this2.$scopedSlots.extra({});
          }
        }
      }), h("chart-wrap", {
        "class": "".concat(this.prefixCls, "__chart-wrap"),
        attrs: {
          chart: this.element,
          status: this.status,
          global: this.global,
          refresh: this.refresh
        },
        on: {
          "change": this.changeChart,
          "click-chart": this.clickChart,
          "register-refresh": this.registerRefresh,
          "update-charts-data": this.updateChartsData,
          "drill-down": this.chartDrillDown
        }
      })]);
    }
  }, {
    key: "watchGlobal",
    value: function watchGlobal(val, oVal) {
      // 监听全局字体设置刷新图表
      var chart = this.element;

      if (chart.styles && chart.styles.fontSetting && !chart.styles.fontSetting.fontColor && val !== oVal) {
        this.resizeChartView({
          chart: this.element,
          type: "view"
        });
      }
    }
    /**
     * chartHeader修改
     */

  }, {
    key: "fixed",
    get: function get() {
      if (this.element && this.element.type === "longText") {
        return true;
      }

      return false;
    }
    /**
     * 图表是否有数据
     */

  }, {
    key: "hasTableData",
    get: function get() {
      if (this.element.type !== "table" && this.element.type !== "list") return false;
      var tableData = this.chartsData[this.element.uid];
      tableData = this.element.type === "table" ? tableData && (tableData.data || tableData.summary) : tableData;
      return tableData && tableData.length;
    }
    /**
     * 显示元素头部toolbar
     */

  }, {
    key: "toolbars",
    get: function get() {
      var element = this.element;
      var tools = [];
      if (!element || !element.type) return tools;
      var data;

      switch (element.type) {
        case "".concat(_chartType.ElementType.LONGTEXT):
        case "".concat(_chartType.ElementType.FILTERPICKER):
          if (this.status === _reportState.ReportState.DESIGN) {
            tools.push(_elementTools.ToolsBarType.EDIT);
          }

          break;

        case "".concat(_chartType.ElementType.FUNNEL):
          tools.push(_elementTools.ToolsBarType.REFRESH);
          break;

        case "".concat(_chartType.ElementType.TABLE):
          tools.push(_elementTools.ToolsBarType.REFRESH, _elementTools.ToolsBarType.SORT);
          break;

        case "".concat(_chartType.ElementType.CARD):
          if (element.data.dimension.length) {
            tools.push(_elementTools.ToolsBarType.SORT);
          }

          tools.push(_elementTools.ToolsBarType.REFRESH);
          break;

        case "".concat(_chartType.ElementType.SCATTER):
          tools.push(_elementTools.ToolsBarType.REFRESH);
          break;

        default:
          data = element.data;

          if ([].concat(_toConsumableArray(data.dimension), _toConsumableArray(data.metric), _toConsumableArray(data.groupDimension ? data.groupDimension : [])).length) {
            tools.push(_elementTools.ToolsBarType.SORT);
          }

          tools.push(_elementTools.ToolsBarType.REFRESH);
          break;
      }

      if (this.status === _reportState.ReportState.DESIGN) {
        tools.push(_elementTools.ToolsBarType.REMOVE);
      } else {
        // 雷达图暂时关闭图表联动功能
        if (element.type !== _chartType.ElementType.CARD && element.type !== _chartType.ElementType.RADAR) {
          if (element.styles && element.styles.linkage && element.styles.linkage.length) {
            tools.push(_elementTools.ToolsBarType.LINKAGE);
          }
        }

        if (element.type !== _chartType.ElementType.FILTERPICKER) {
          tools.push(this.fullScreen ? _elementTools.ToolsBarType.NARROW : _elementTools.ToolsBarType.FULLSCREEN);
        }

        if (element.type === _chartType.ElementType.TABLE) {
          if (element.styles.download) {
            this.hasTableData && this.ifShowTable(element) && tools.push(_elementTools.ToolsBarType.EXPORT);
          }
        }

        if (element.type === _chartType.ElementType.LIST) {
          // icons.sort = false;
          if (element.styles.download) {
            this.hasTableData && tools.push(_elementTools.ToolsBarType.EXPORT);
          }
        }
      }

      return tools;
    }
    /**
     * 组件背景颜色设置
     */

  }, {
    key: "getStyles",
    get: function get() {
      var chart = this.element;
      var globalCoat = this.global && this.global.styles.elementCoat ? this.global.styles.elementCoat : null;
      var chartCoat;

      if (chart && chart.styles && chart.styles.elementCoat) {
        chartCoat = chart.styles.elementCoat ? chart.styles.elementCoat : null;
      }

      return {
        backgroundColor: chartCoat && chartCoat.value ? chartCoat.value : globalCoat && globalCoat.value
      };
    }
    /**
     * 更新图表数据
     */

  }, {
    key: "updateChartsData",
    value: function updateChartsData(data) {
      this.setChartsData({
        key: this.element.uid,
        data: data
      });
    }
    /**
     * 下钻
     */

  }, {
    key: "chartDrillDown",
    value: function chartDrillDown(data) {
      if (this.drillDown) {
        this.drillDown(data);
      }
    }
    /**
     * 图表注册刷新事件
     */

  }, {
    key: "registerRefresh",
    value: function registerRefresh(_ref) {
      var data = _ref.data,
          view = _ref.view,
          load = _ref.load,
          refreshViewStyles = _ref.refreshViewStyles;
      this.chartViewStatus[this.element.uid] = {
        data: data || function () {},
        view: view || function () {},
        load: load || function () {},
        refreshViewStyles: refreshViewStyles || function () {}
      };
    }
    /**
     * 点击图表
     */

  }, {
    key: "clickChart",
    value: function clickChart(option) {
      // 雷达图暂时关闭图表联动功能
      if (this.element.type !== _chartType.ElementType.RADAR && option.filters) {
        this.setChartLinkage({
          chart: this.element,
          filters: option.filters,
          mode: "linkage"
        });
      }
    }
    /**
     * 处理图表改变
     */

  }, {
    key: "changeChart",
    value: function changeChart(element) {
      switch (element && element.type) {
        case "".concat(_chartType.ElementType.LONGTEXT):
          break;

        case "".concat(_chartType.ElementType.LIST):
        case "".concat(_chartType.ElementType.TABLE):
          this.setActiveChart(element);
          break;

        case "".concat(_chartType.ElementType.FILTERPICKER):
          this.setFilter(element);

        default:
      }
    }
    /**
     * 变更筛选器时做筛选
     */

  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      var _this3 = this;

      clearTimeout(this.timer); // 公式 为空不为空去筛选，范围时都有值去筛选，其他的公式都是有值去筛选

      if (["None", "NotNone"].includes(filter.formula) || filter.formula === "Range" && filter.text[0] && filter.text[1] || filter.formula !== "Range" && filter.text[0]) {
        this.timer = setTimeout(function () {
          _this3.setFilterPicker({
            filterPicker: filter
          });
        }, 500);
      } else {
        this.removeFilterPicker(filter);
      }
    }
    /**
     * 处理头部工具栏事件
     * @param type
     * @param element
     */

  }, {
    key: "toolsClick",
    value: function toolsClick(_ref2) {
      var type = _ref2.type,
          element = _ref2.element;

      if (this[type] instanceof Function) {
        this[type]();
      }
    }
    /**
     * 缩略轴变化时事件
     */

  }, {
    key: "onDatazoomChange",
    value: function onDatazoomChange(event) {
      var start = 0;
      var end = 100;
      var e = event.detail;

      if (e.end) {
        start = e.start.toFixed(2);
        end = e.end.toFixed(2);
      } else if (e.batch) {
        start = e.batch[0].start.toFixed(2);
        end = e.batch[0].end.toFixed(2);
      }

      var chart = this.element;

      if (chart && chart.styles && chart.styles.dataZoom) {
        chart.styles.dataZoom.start = start;
        chart.styles.dataZoom.end = end;
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      window.addEventListener("DatazoomChange-".concat(this.element.uid), this.onDatazoomChange);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      window.removeEventListener("DatazoomChange-".concat(this.element.uid), this.onDatazoomChange);
    }
  }]);

  return ElementWrap;
}((0, _vuePropertyDecorator.Mixins)(_chartMixins.default, _toolsMixins.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ElementWrap.prototype, "element", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ElementWrap.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ElementWrap.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], ElementWrap.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: _reportState.ReportState.DESIGN
})], ElementWrap.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ElementWrap.prototype, "fullScreen", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ElementWrap.prototype, "elementIndex", void 0);

__decorate([ReportPro.State("charts")], ElementWrap.prototype, "charts", void 0);

__decorate([ReportPro.State("chartsData")], ElementWrap.prototype, "chartsData", void 0);

__decorate([ReportPro.State("chartViewStatus")], ElementWrap.prototype, "chartViewStatus", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.CLEARACTIVECHART)], ElementWrap.prototype, "clearActiveChart", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETACTIVECHART)], ElementWrap.prototype, "setActiveChart", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.RESIZECHARTVIEW)], ElementWrap.prototype, "resizeChartView", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETCHARTSDATA)], ElementWrap.prototype, "setChartsData", void 0);

__decorate([ReportPro.Action(_types.ReportAction.SETFILTERPICKER)], ElementWrap.prototype, "setFilterPicker", void 0);

__decorate([ReportPro.Action(_types.ReportAction.REMOVEFILTERPICKER)], ElementWrap.prototype, "removeFilterPicker", void 0);

__decorate([ReportPro.Action(_types.ReportAction.SETCHARTLINKAGE)], ElementWrap.prototype, "setChartLinkage", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ElementWrap.prototype, "drillDown", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("global.styles.fontSetting.fontColor", {
  deep: true
})], ElementWrap.prototype, "watchGlobal", null);

ElementWrap = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-elementWrap",
  components: {
    Tools: _tools.default,
    ChartWrap: _elementWrap.default
  }
})], ElementWrap);
var _default2 = ElementWrap;
exports.default = _default2;