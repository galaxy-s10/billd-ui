"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("ant-design-vue/lib/tooltip"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _designHeaderFormula = _interopRequireDefault(require("../modules/filter-picker/design-header-formula"));

var _elementTools = require("../../enum/element-tools");

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

var ReportContainerHeader = /*#__PURE__*/function (_Vue) {
  _inherits(ReportContainerHeader, _Vue);

  var _super = _createSuper(ReportContainerHeader);

  function ReportContainerHeader() {
    var _this;

    _classCallCheck(this, ReportContainerHeader);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-dashboard-element-tools"; // todo 后期要提取成配置

    _this.buttons = [{
      label: "导出Excel",
      key: _elementTools.ToolsBarType.EXPORT,
      icon: "download-o"
    }, {
      label: "取消联动",
      key: _elementTools.ToolsBarType.LINKAGE,
      icon: "disconnect-o"
    }, {
      label: "刷新",
      key: _elementTools.ToolsBarType.REFRESH,
      icon: "reload-o"
    }, {
      label: "缩小",
      key: _elementTools.ToolsBarType.NARROW,
      icon: "fullscreen-restore-o"
    }, {
      label: "全屏",
      key: _elementTools.ToolsBarType.FULLSCREEN,
      icon: "fullscreen-o"
    }, {
      label: "排序",
      key: _elementTools.ToolsBarType.SORT,
      icon: "rank-o"
    }, {
      label: "编辑",
      key: _elementTools.ToolsBarType.EDIT,
      icon: "edit-o"
    }, {
      label: "删除",
      key: _elementTools.ToolsBarType.REMOVE,
      icon: "delete-o"
    }];
    return _this;
  }

  _createClass(ReportContainerHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return !( // (this.fixed && this.element && !this.element.handleActive)
      this.element && !this.element.handleActive || this.element.edit) && h("div", {
        style: {
          color: this.titleColor
        },
        "class": ["".concat(this.prefixCls), this.fixed ? "header-fixed" : ""]
      }, [this.$scopedSlots.title({}) || h("div", {
        "class": ["".concat(this.prefixCls, "__title-wrap")]
      }, [h("i", {
        "class": ["".concat(this.prefixCls, "__title-line")]
      }), h("a-tooltip", {
        attrs: {
          placement: "bottom",
          getPopupContainer: this.getPopupContainer,
          slotScopeds: {
            title: function title() {
              return h("div", [h("span", [_this2.element && _this2.element.title]), ";"]);
            }
          }
        },
        "class": ["".concat(this.prefixCls, "__title")]
      }, [h("div", {
        style: {
          color: this.titleColor
        }
      }, [this.element && this.element.title]), this.element && h("formula", {
        attrs: {
          chart: this.element,
          status: this.status
        }
      })])]), this.$scopedSlots.extra({}) || h("div", {
        "class": ["".concat(this.prefixCls, "__icon-wrap")]
      }, [this.toolsButtons.map(function (item, index) {
        return h("a-tooltip", {
          attrs: {
            placement: "bottom",
            getPopupContainer: _this2.getPopupContainer
          },
          "class": "h3-report-i-btn",
          key: index,
          scopedSlots: {
            title: function title() {
              return h("span", [item.label]);
            }
          }
        }, [h("a", {
          on: {
            "click": _this2.clickToolsButton(item)
          }
        }, [h("i", {
          "class": "h3yun_All ".concat(item.icon),
          style: {
            color: _this2.titleColor
          }
        })])]);
      })])]);
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

      return this.fixed && {
        backgroundColor: chartCoat && chartCoat.value ? chartCoat.value : globalCoat && globalCoat.value
      };
    }
    /**
     * 获取工具栏显示按钮
     */

  }, {
    key: "toolsButtons",
    get: function get() {
      var _this3 = this;

      return this.buttons.filter(function (btn) {
        return _this3.toolbars.includes(btn.key);
      });
    }
    /**
     * 获取图表颜色
     */

  }, {
    key: "titleColor",
    get: function get() {
      var globalFont = this.global && this.global.styles && this.global.styles.fontSetting ? this.global.styles.fontSetting : null;
      var chart = this.element;
      var chartFont;

      if (chart && chart.styles) {
        chartFont = chart.styles.fontSetting ? chart.styles.fontSetting : null;
      }

      return chartFont && chartFont.titleColor ? chartFont.titleColor : globalFont && globalFont.titleColor ? globalFont.titleColor : null;
    }
    /**
     * 元件工具栏事件总控
     * @param btn
     */

  }, {
    key: "clickToolsButton",
    value: function clickToolsButton(btn) {
      if (!this.disabled) {
        this.$emit("tools-click", {
          type: btn.key,
          element: this.element
        });
      }
    }
  }, {
    key: "getPopupContainer",
    value: function getPopupContainer() {
      return this.$el;
    }
  }]);

  return ReportContainerHeader;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportContainerHeader.prototype, "element", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportContainerHeader.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportContainerHeader.prototype, "fixed", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportContainerHeader.prototype, "disabled", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: _reportState.ReportState.DESIGN
})], ReportContainerHeader.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [];
  }
})], ReportContainerHeader.prototype, "render", null);

ReportContainerHeader = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-dashboard-element-tools",
  components: {
    ATooltip: _tooltip.default,
    Formula: _designHeaderFormula.default
  }
})], ReportContainerHeader);
var _default2 = ReportContainerHeader;
exports.default = _default2;