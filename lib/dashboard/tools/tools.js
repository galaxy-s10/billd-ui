"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/tabs/style/css");

var _tabs = _interopRequireDefault(require("ant-design-vue/lib/tabs"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _scroll = _interopRequireDefault(require("../../components/scroll"));

var _helpModal = _interopRequireDefault(require("../../components/help-modal"));

var _vueFragment = require("vue-fragment");

var _modules = _interopRequireDefault(require("../modules"));

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

var ReportPro = (0, _vuexClass.namespace)("report");

var ReportAttributes = /*#__PURE__*/function (_Vue) {
  _inherits(ReportAttributes, _Vue);

  var _super = _createSuper(ReportAttributes);

  function ReportAttributes() {
    var _this;

    _classCallCheck(this, ReportAttributes);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-tools"; // tab初始状态

    _this.activeKey = "data"; // tab数据集

    _this.tabList = [{
      key: "data",
      value: "数据设置"
    }, {
      key: "styles",
      value: "显示设置"
    }]; // 是否展示新手引导卡片

    _this.showGuideCard = false; // 是否显示帮助弹窗

    _this.showHelpModal = false; // 帮助文档参数

    _this.helpOptions = []; // 帮助文档标题

    _this.helpTitle = "帮助文档";
    return _this;
  }

  _createClass(ReportAttributes, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [this.activeChart && this.activeChart.data && h("a-tabs", {
        "class": "tab-nav",
        attrs: {
          activeKey: this.activeKey
        },
        on: {
          "change": this.tabChange
        }
      }, [this.tabList.map(function (item, index) {
        return h("a-tab-pane", {
          key: item.key,
          attrs: {
            tab: item.value
          }
        }, [h("div", {
          "class": ["".concat(_this2.prefixCls, "__wrap")]
        }, [Object.values(_this2.dataSelect(index)).map(function (module, k) {
          {
            module && h("a-fragment", [h("component", {
              on: {
                "refreshScroll": _this2.refreshScroll
              },
              attrs: {
                is: "h3-".concat(k),
                comPrefixCls: "'report-modules'",
                module: module,
                chart: _this2.activeChart,
                data: _this2.getModuleData[k]
              },
              key: k
            })]);
          }
        }), _this2.activeKey === "data" && h("div", {
          "class": ["".concat(_this2.prefixCls, "__wrap--help")],
          on: {
            "click": _this2.onClickHelp
          }
        }, ["\u8BE6\u7EC6\u4E86\u89E3\u7EF4\u5EA6\u3001\u6307\u6807\u548C\u8FC7\u6EE4\u6761\u4EF6"])])]);
      })]), !this.activeChart && h("div", {
        "class": ["".concat(this.prefixCls, "__empty")]
      }, [h("img", {
        attrs: {
          src: require("../../assets/pro/empty-tool.svg"),
          alt: ""
        }
      }), h("label", ["\u8BF7\u5148\u62D6\u5165\u6216\u9009\u4E2D\u56FE\u8868"])]), h("help-modal", {
        attrs: {
          options: this.helpOptions,
          title: this.helpTitle,
          model: {
            value: _this2.showHelpModal,
            callback: function callback($$v) {
              _this2.showHelpModal = $$v;
            }
          }
        }
      })]);
    }
    /**
     * 获取模块数据
     */

  }, {
    key: "getModuleData",
    get: function get() {
      return this.activeChart ? _extends({}, this.activeChart.data, this.activeChart.styles, {
        chartTitle: this.activeChart.title
      }) : {};
    }
    /**
     * 隐藏卡片
     */

  }, {
    key: "hideGuideCard",
    value: function hideGuideCard() {
      this.showGuideCard = false;
    }
    /**
     * 点击帮助
     */

  }, {
    key: "onClickHelp",
    value: function onClickHelp() {
      this.helpTitle = "功能说明";
      this.helpOptions = [{
        label: "维度",
        value: "dimension",
        contentHtml: "<img src=\"".concat(require("../../assets/dimension.png"), "\">")
      }, {
        label: "指标",
        value: "metric",
        contentHtml: "<img src=\"".concat(require("../../assets/metric.png"), "\">")
      }, {
        label: "过滤条件",
        value: "filter",
        contentHtml: "<img src=\"".concat(require("../../assets/filter.png"), "\">")
      }];
      this.showHelpModal = true;
    }
    /**
     * 获取数据模块
     */

  }, {
    key: "getDataModules",
    value: function getDataModules() {
      var chartDataModules = this.activeModules.data;
      var chartStylesModules = this.activeModules.styles;
      if (!chartDataModules) return null;
      return {
        chartSwitch: chartDataModules.chartSwitch,
        multiMetricType: chartStylesModules.multiMetricType,
        dimension: chartDataModules.dimension,
        groupDimension: chartDataModules.groupDimension,
        metric: chartDataModules.metric,
        metricGroup: chartDataModules.metricGroup,
        filter: chartDataModules.filter
      };
    }
    /**
     * 获取样式模块
     */

  }, {
    key: "getStylesModules",
    value: function getStylesModules() {
      var chartDataModules = this.activeModules.data;
      var chartStylesModules = this.activeModules.styles;
      if (!chartDataModules) return null;
      return {
        chartTitle: chartDataModules.chartTitle,
        theme: chartStylesModules.theme,
        elementCoat: chartStylesModules.elementCoat,
        fontSetting: chartStylesModules.fontSetting,
        limit: chartDataModules.limit,
        dimensionLimit: chartStylesModules.dimensionLimit,
        metricRange: chartStylesModules.metricRange,
        multiRange: chartStylesModules.multiRange,
        dataLabel: chartStylesModules.dataLabel,
        multipleDataLabel: chartStylesModules.multipleDataLabel,
        download: chartStylesModules.download,
        orderNumber: chartStylesModules.orderNumber,
        freezeHead: chartStylesModules.freezeHead,
        legend: chartStylesModules.legend,
        axisX: chartStylesModules.axisX,
        dataZoom: chartStylesModules.dataZoom,
        linkage: chartStylesModules.linkage,
        warningLine: chartStylesModules.warningLine
      };
    }
    /**
     * tab数据选择
     * @param index
     */

  }, {
    key: "dataSelect",
    value: function dataSelect(index) {
      return index === 0 ? this.getDataModules() : this.getStylesModules();
    }
    /**
     * 更新滚动条
     */

  }, {
    key: "refreshScroll",
    value: function refreshScroll() {
      var _this3 = this;

      this.$nextTick(function () {
        if (_this3.$refs.scroll) {
          var flagNumber = _this3.activeKey === "data" ? 0 : 1;

          _this3.$refs.scroll[flagNumber].setScrollBar();
        }
      });
    }
    /**
     * tab切换
     * @param tabKey
     */

  }, {
    key: "tabChange",
    value: function tabChange(tabKey) {
      this.activeKey = tabKey;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // 更新滚动条
      if (this.activeChart) this.refreshScroll();
    }
  }, {
    key: "updated",
    value: function updated() {
      // 更新滚动条
      if (this.activeChart) this.refreshScroll();
    }
  }]);

  return ReportAttributes;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportAttributes.prototype, "global", void 0);

__decorate([ReportPro.State("schemas")], ReportAttributes.prototype, "schemas", void 0);

__decorate([ReportPro.State("activeChart")], ReportAttributes.prototype, "activeChart", void 0);

__decorate([ReportPro.State("activeModules")], ReportAttributes.prototype, "render", null);

ReportAttributes = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-tools",
  components: _extends(_extends({
    ATabs: _tabs.default,
    ATabPane: _tabs.default.TabPane
  }, _modules.default), {
    H3Scroll: _scroll.default,
    HelpModal: _helpModal.default,
    AFragment: _vueFragment.Fragment
  })
})], ReportAttributes);
var _default = ReportAttributes;
exports.default = _default;