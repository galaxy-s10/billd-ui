"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("ant-design-vue/lib/tooltip"));

require("ant-design-vue/lib/button/style/css");

var _button = _interopRequireDefault(require("ant-design-vue/lib/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _types = require("../../../store/dashboard/types");

var _chartType = require("../../../enum/chart-type");

var _header = _interopRequireDefault(require("../header"));

var _index = _interopRequireDefault(require("../../../components/icon-svg/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ReportDesignerHeader = /*#__PURE__*/function (_Vue) {
  _inherits(ReportDesignerHeader, _Vue);

  var _super = _createSuper(ReportDesignerHeader);

  function ReportDesignerHeader() {
    var _this;

    _classCallCheck(this, ReportDesignerHeader);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-designer-header";
    _this.placement = "bottomLeft"; // 图表列表

    _this.chartList = [{
      type: "bar",
      iconFont: "Histogram",
      chartName: "柱状图",
      chartNotice: _chartType.ChartNotice.BAR
    }, {
      type: "stripe",
      iconFont: "Barchart",
      chartName: "条形图",
      chartNotice: _chartType.ChartNotice.STRIPE
    }, {
      type: "pie",
      iconFont: "Piechart",
      chartName: "饼图",
      chartNotice: _chartType.ChartNotice.PIE
    }, {
      type: "area",
      iconFont: "Areachart",
      chartName: "面积图",
      chartNotice: _chartType.ChartNotice.AREA
    }, {
      type: "radar",
      iconFont: "Radarchart",
      chartName: "雷达图",
      chartNotice: _chartType.ChartNotice.RADAR
    }, {
      type: "table",
      iconFont: "fluoroscopy",
      chartName: "透视图",
      chartNotice: _chartType.ChartNotice.TABLE
    }, {
      type: "list",
      iconFont: "list",
      chartName: "明细表",
      chartNotice: _chartType.ChartNotice.LIST
    }, {
      type: "card",
      iconFont: "Indicatorchart",
      chartName: "指标图",
      chartNotice: _chartType.ChartNotice.CARD
    }, {
      type: "line",
      iconFont: "linechart",
      chartName: "折线图",
      chartNotice: _chartType.ChartNotice.LINE
    }, {
      type: "funnel",
      iconFont: "Funnelchart",
      chartName: "漏斗图",
      chartNotice: _chartType.ChartNotice.FUNNEL
    }, {
      type: "pileBar",
      iconFont: "Stackedchart",
      chartName: "堆叠柱状图",
      chartNotice: _chartType.ChartNotice.PILEBAR
    }, {
      type: "scatter",
      iconFont: "Bubblechart",
      chartName: "散点图",
      chartNotice: _chartType.ChartNotice.SCATTER
    }, {
      type: "biax",
      iconFont: "Biaxialplot",
      chartName: "双轴图",
      chartNotice: _chartType.ChartNotice.BIAX
    }]; // 组件工具列表

    _this.moduleToolList = [{
      label: "筛选器",
      type: "filterPicker",
      icon: "filter-o",
      click: Function
    }, {
      label: "文本",
      type: "longText",
      icon: "text-file-o",
      click: Function
    }];
    return _this;
  }

  _createClass(ReportDesignerHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("report-header", {
        "class": this.prefixCls
      }, [h("div", {
        "class": [this.prefixCls + "__toolbar"]
      }, [this.chartList.map(function (item, index) {
        return h("a-tooltip", {
          key: index,
          attrs: {
            placement: _this2.placement,
            getPopupContainer: _this2.getPopupContainer
          }
        }, [h("template", {
          slot: "title"
        }, [h("span", [item.chartName]), h("br"), h("span", {
          domProps: {
            "innerHTML": item.chartNotice
          }
        })]), h("a", {
          attrs: {
            id: "h3-report-intro-".concat(item.type)
          },
          "class": "h3-report-intro-".concat(item.type),
          on: {
            "mousedown": _this2.addLayoutChart(item.type, item.chartName, item.iconFont)
          }
        }, [h("h3-svg", {
          attrs: {
            name: item.iconFont
          }
        })])]);
      })]), h("div", {
        "class": [this.prefixCls + "__borderLeft"]
      }), h("div", {
        "class": [this.prefixCls + "__middleToolbar"]
      }, [this.moduleToolList.map(function (item, index) {
        return h("a-tooltip", {
          "class": "h3-report-i-btn",
          key: index,
          attrs: {
            placement: _this2.placement,
            getPopupContainer: _this2.getPopupContainer
          }
        }, [h("template", {
          slot: "title"
        }, [h("span", [item.label])]), h("a", {
          "class": item.type,
          on: {
            "mousedown": _this2.addLayoutChart(item.type, item.label, item.iconFont)
          }
        }, [h("i", {
          "class": _defineProperty({
            h3yun_All: true
          }, item.icon, true)
        }), item.label])]);
      })]), h("div", {
        "class": ["".concat(this.prefixCls, "__btns")]
      }, [h("a", {
        "class": [this.prefixCls + "__preview", "".concat(this.prefixCls, "__btn")],
        on: {
          "click": this.reportPreview
        }
      }, ["\u9884\u89C8\u4EEA\u8868\u76D8"]), h("a-button", {
        attrs: {
          type: "primary"
        },
        "class": [this.prefixCls + "__save", "".concat(this.prefixCls, "__btn")],
        on: {
          "click": this.save
        }
      }, [h("i", {
        "class": "h3yun_All save-o"
      }), "\u4FDD\u5B58"])])]);
    }
  }, {
    key: "addLayoutChart",
    value: function addLayoutChart(elementType, chartName, iconType) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.addElement({
                  elementType: elementType
                });

              case 2:
                this.dragChart = _context.sent;
                this.dragChart.class = "h3-report-container__dragging";
                this.dragItem = document.createElement("div");
                this.dragItem.className = "h3-report__drag";
                this.dragItem.innerHTML = "<i class=\"h3-report-designer-header__icon h3yun_All ".concat(iconType, "\"></i><span class=\"text\">").concat(chartName, "</span>");
                document.body.appendChild(this.dragItem);
                document.body.addEventListener("mouseup", this.mouseupBody, false);
                document.body.addEventListener("mousemove", this.mousemoveBody, false);
                this.$emit("dragStart", this.dragChart);
                this.setDragChart(this.dragChart);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "mousemoveBody",
    value: function mousemoveBody(e) {
      this.dragItem.style.top = "".concat(e.pageY - 40 / 2, "px");
      this.dragItem.style.left = "".concat(e.pageX - 124 / 2, "px");
    }
  }, {
    key: "mouseupBody",
    value: function mouseupBody(e) {
      document.body.removeChild(this.dragItem);
      this.$delete(this.dragChart, "class");
      this.$delete(this.dragChart, "addStatus");
      document.body.removeEventListener("mouseup", this.mouseupBody, false);
      document.body.removeEventListener("mousemove", this.mousemoveBody, false);
      this.$emit("dragEnd");
      this.setDragChart(null);
    }
  }, {
    key: "reportOutPreview",
    value: function reportOutPreview() {
      this.$emit("update-preview-status", false);
    }
  }, {
    key: "reportPreview",
    value: function reportPreview() {
      this.$emit("update-preview-status", true);
    }
  }, {
    key: "save",
    value: function save() {
      this.$emit("save-report");
    }
  }, {
    key: "getPopupContainer",
    value: function getPopupContainer() {
      return this.$el;
    }
  }]);

  return ReportDesignerHeader;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportDesignerHeader.prototype, "previewStatus", void 0);

__decorate([ReportPro.State("corpId")], ReportDesignerHeader.prototype, "corpId", void 0);

__decorate([ReportPro.State("modules")], ReportDesignerHeader.prototype, "modules", void 0);

__decorate([ReportPro.Action(_types.ReportAction.GETDATASOURCELIST)], ReportDesignerHeader.prototype, "getDataSourceList", void 0);

__decorate([ReportPro.Action(_types.ReportAction.ADDELEMENT)], ReportDesignerHeader.prototype, "addElement", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.SETDRAGCHART)], ReportDesignerHeader.prototype, "setDragChart", void 0);

ReportDesignerHeader = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-designer-header",
  components: {
    ReportHeader: _header.default,
    AButton: _button.default,
    ATooltip: _tooltip.default,
    H3Svg: _index.default
  }
})], ReportDesignerHeader);
var _default = ReportDesignerHeader;
exports.default = _default;