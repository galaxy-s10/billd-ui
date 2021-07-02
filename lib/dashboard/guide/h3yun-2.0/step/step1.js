"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _awesomeUi = _interopRequireDefault(require("awesome-ui"));

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

var H3GridLayout = _awesomeUi.default.H3GridLayout;
var ReportPro = (0, _vuexClass.namespace)("report");

var ReportStep = /*#__PURE__*/function (_Vue) {
  _inherits(ReportStep, _Vue);

  var _super = _createSuper(ReportStep);

  function ReportStep() {
    var _this;

    _classCallCheck(this, ReportStep);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-yun-guide-step-1"; // 虚拟图表数据

    _this.charts = []; // 是否有拖拽图表

    _this.dragChart = false; // 是否现实拖拽时的图表外壳

    _this.showDragingChart = false; // 是否现实初始化图表

    _this.showInitChart = false;
    return _this;
  }

  _createClass(ReportStep, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, this.global.styles.paintCoatTheme]
      }, [h("h3-grid-layout", {
        ref: "gridLayout",
        attrs: {
          layout: this.charts,
          "reserve-height": 200,
          "col-num": this.getLayoutOptions.colNum,
          "row-height": this.getLayoutOptions.rowHeight,
          margin: this.getLayoutOptions.margin,
          showGridLine: this.getLayoutOptions.showGridLine,
          "is-draggable": this.getLayoutOptions.draggable,
          "is-resizable": this.getLayoutOptions.resizable,
          "vertical-compact": true,
          "use-css-transforms": true,
          responsive: this.getLayoutOptions.responsive
        }
      }, [h("h3-grid-item", {
        style: this.getItemStyles,
        attrs: {
          "data-id": this.item.uid,
          handleActive: this.item.handleActive,
          x: this.item.x,
          y: this.item.y,
          w: this.item.w,
          h: this.item.h,
          i: this.item.i,
          minH: this.item.minH,
          minW: this.item.minW
        }
      }, [(this.showInitChart || this.step > 1) && h("div", {
        "class": "".concat(this.prefixCls, "-chart")
      }, [h("div", {
        "class": "h3-dashboard-element-tools h3-report-elementWrap__header",
        style: "color: ".concat(this.titleColor)
      }, [h("div", {
        "class": "h3-dashboard-element-tools__title-wrap"
      }, [h("i", {
        "class": "h3-dashboard-element-tools__title-line"
      }), h("div", {
        "class": "h3-dashboard-element-tools__title",
        style: "color: ".concat(this.titleColor)
      }, ["\u672A\u547D\u540D\u7684\u56FE\u8868"])]), h("div", {
        "class": "h3-dashboard-element-tools__icon-wrap"
      }, [h("a", {
        "class": "h3-report-i-btn"
      }, [h("i", {
        "class": "h3yun_All reload-o",
        style: "color: ".concat(this.titleColor)
      })]), h("a", {
        "class": "h3-report-i-btn"
      }, [h("i", {
        "class": "h3yun_All rank-o",
        style: "color: ".concat(this.titleColor)
      })]), h("a", {
        "class": "h3-report-i-btn"
      }, [h("i", {
        "class": "h3yun_All delete-o",
        style: "color: ".concat(this.titleColor)
      })])])]), h("div", {
        "class": "".concat(this.prefixCls, "-chart-content")
      }, [this.step < 5 && h("img", {
        attrs: {
          src: require("../../../../assets/bar-blue.png")
        }
      }), this.step > 4 && h("div", {
        "class": "".concat(this.prefixCls, "-data")
      }, [h("img", {
        attrs: {
          src: require("../../../../assets/intro-bar.png")
        }
      })])])])])]), !(this.dragChart && this.showDragingChart) && this.step === 1 && h("div", {
        "class": "h3-report-container__empty"
      }, [h("img", {
        attrs: {
          src: require("../../../../assets/pro/design-bg.png")
        }
      }), h("label", ["\u62D6\u5165\u9876\u90E8\u56FE\u8868\u7C7B\u578B\u65B0\u5EFA\u4EEA\u8868\u76D8"])])]);
    }
    /**
     * 拖拽布局信息
     */

  }, {
    key: "getLayoutOptions",
    get: function get() {
      return {
        draggable: false,
        margin: [8, 8],
        showGridLine: false,
        mask: true,
        editState: true,
        resizable: false,
        responsive: false,
        colNum: 32,
        rowHeight: 32
      };
    }
    /**
     * 拖拽元素的
     */

  }, {
    key: "item",
    get: function get() {
      return {
        x: 0,
        y: 0,
        w: 16,
        h: 8,
        i: 95,
        minH: 6,
        minW: 8,
        uid: null,
        handleActive: null
      };
    }
    /**
     * 模块样式
     */

  }, {
    key: "getItemStyles",
    get: function get() {
      var defaultBg = "transparent";
      defaultBg = this.global.styles.elementCoat.value || "transparent";
      var bgc = this.dragChart && this.showDragingChart ? "#EBF4FF" : this.showInitChart ? defaultBg : "transparent";
      var borderStyle = this.dragChart && this.showDragingChart ? "solid" : "none";
      return {
        backgroundColor: bgc,
        border: "1px ".concat(borderStyle, " #1070ff")
      };
    }
    /**
     * 全局标题样式
     */

  }, {
    key: "titleColor",
    get: function get() {
      var globalFont = this.global && this.global.styles.fontSetting ? this.global.styles.fontSetting : null;
      return globalFont ? globalFont.titleColor : "#304265";
    }
    /**
     * 鼠标移动事件
     */

  }, {
    key: "mousemove",
    value: function mousemove(e) {
      var isPane = e.target.className && typeof e.target.className === "string" ? e.target.className.indexOf("vue-grid-item") > -1 : false;

      if (this.dragChart && isPane) {
        // 如果正在拖动图表 切移动到了画布中激活画布颜色
        // 在画布中添加空白图表
        this.showDragingChart = true;
        e.stopPropagation();
        e.preventDefault(); // gridLayout.compact();
      }
    }
    /**
     * 鼠标按下事件
     */

  }, {
    key: "mousedown",
    value: function mousedown(e) {
      // 判断按下时间聚焦的是否是icon
      var isChartIcon = e.path ? e.path.find(function (i) {
        return i.tagName === "A" && i.className.indexOf("h3-report-intro-bar") > -1;
      }) : e.target.tagName === "svg" || e.target.className.indexOf("h3-report-intro-bar") > -1;

      if (isChartIcon) {
        this.dragChart = true;
      }
    }
    /**
     * 鼠标抬起事件
     */

  }, {
    key: "mouseup",
    value: function mouseup(e) {
      if (this.dragChart && this.showDragingChart) {
        // 展示默认图表 并弹出选择数据源弹窗
        this.showInitChart = true;
        this.dragChart = false;
        this.showDragingChart = false; // 关闭第一步新手引导 弹出第一部弹窗 聚焦第二步

        this.setStep(2); // 事件注销

        document.body.removeEventListener("mousedown", this.mousedown, false); // document.body.removeEventListener('mouseup', this.mouseup, false);

        document.body.removeEventListener("mousemove", this.mousemove, false);
      }

      this.dragChart = false;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // 挂载时监听事件
      document.body.addEventListener("mousedown", this.mousedown, false);
      document.body.addEventListener("mouseup", this.mouseup, false);
      document.body.addEventListener("mousemove", this.mousemove, false);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      // 事件注销
      document.body.removeEventListener("mousedown", this.mousedown, false);
      document.body.removeEventListener("mouseup", this.mouseup, false);
      document.body.removeEventListener("mousemove", this.mousemove, false);
    }
  }]);

  return ReportStep;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportStep.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportStep.prototype, "step", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ReportStep.prototype, "setStep", void 0);

ReportStep = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-yun-guide-step-1",
  components: {
    H3GridLayout: H3GridLayout,
    H3GridItem: H3GridLayout.Item
  }
})], ReportStep);
var _default2 = ReportStep;
exports.default = _default2;