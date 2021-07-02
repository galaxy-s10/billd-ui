"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _introjsHelper = _interopRequireDefault(require("../utils/introjs-helper"));

var _container = _interopRequireDefault(require("./container"));

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

var ReportGuide = /*#__PURE__*/function (_Vue) {
  _inherits(ReportGuide, _Vue);

  var _super = _createSuper(ReportGuide);

  function ReportGuide() {
    var _this;

    _classCallCheck(this, ReportGuide);

    _this = _super.apply(this, arguments);
    _this.prefixCls = 'h3-yun-report-guide';
    _this.steps = [{
      el: '.h3-report-guide #h3-report-intro-bar',
      describe: '拖动柱状图图表控件到画布区域',
      position: 'right',
      rippleOffsetX: 0,
      rippleOffsetY: -50,
      step: "1/7",
      tools: _this.setExtraHightLight
    }, {
      el: '.h3-yun-guide-step-2 .h3-menu-tree',
      describe: '选择需要分析展示的数据源',
      position: 'left',
      rippleOffsetX: 256,
      rippleOffsetY: 702,
      step: "2/7"
    }, {
      el: '.h3-yun-guide-step-3 #h3-report-data-source__field-1',
      describe: '拖动字段到【维度】区域',
      position: 'left',
      rippleOffsetX: 0,
      rippleOffsetY: 300,
      showHighLightContent: true,
      highTitle: '维度',
      highContent: '是对数据做分类的依据',
      step: "3/7"
    }, {
      el: '.h3-yun-guide-step-3 #h3-report-data-source__field-3',
      describe: '拖动字段到【指标】区域',
      position: 'left',
      rippleOffsetX: 0,
      rippleOffsetY: 300,
      showHighLightContent: true,
      highTitle: '指标',
      highContent: '是要统计的数据，会根据【维度】中设置的分组方式进行汇总计算',
      step: "4/7"
    }, {
      el: '.h3-yun-guide-step-3 #h3-report-data-source__field-7',
      describe: '拖动字段到【过滤条件】区域',
      position: 'left',
      rippleOffsetX: 0,
      rippleOffsetY: 330,
      showHighLightContent: true,
      highTitle: '过滤条件',
      highContent: '是一种利用对某一字段的限制，过滤出该图表所需要展示数据的机制',
      step: "5/7"
    }, {
      el: '.h3-yun-guide-step-4 .ant-modal .ant-modal-content',
      describe: '设置过滤条件',
      position: 'right',
      rippleOffsetX: 215,
      rippleOffsetY: -83,
      step: "6/7"
    }, {
      el: ".h3-report-guide .h3-yun-guide-step-1-chart",
      describe: '您已成功创建了一个仪表盘图表！',
      position: 'right',
      rippleOffsetX: 165,
      rippleOffsetY: 250,
      step: "<img src=\"".concat(require('@h3/report/basics/assets/complete.png'), "\"  style='margin-right: -4px; margin-top: -4px'>"),
      showButtons: true,
      mainContent: '该柱状图为我们展示了：深圳奥力给各分区店第三季度的营业额情况。其中第三季度营业额最高的是南山店￥700,000，次之是福田店￥550,000；最低的是光明店￥150,000。'
    }];
    _this.innerStep = 0;
    return _this;
  }

  _createClass(ReportGuide, [{
    key: "setStep",
    value: function setStep(step) {
      if (this.introHelper) this.introHelper.exit();
      this.innerStep = step;
      this.$emit('change', this.innerStep);
      if (step > 0) this.openIntro(this.innerStep);
    }
  }, {
    key: "setExtraHightLight",
    value:
    /**
     * 设置其他高光部分
     */
    function setExtraHightLight() {
      var content = document.getElementsByClassName('h3-report-container'); // 给面板加上高亮

      for (var i = 0; i < content.length; i++) {
        if (content[i].offsetParent.className.indexOf('h3-report-guide') > -1) {
          content[i].className += ' introjs-showElement introjs-relativePosition ';
        }
      }
    }
    /**
     *
     */

  }, {
    key: "openIntro",
    value: function openIntro(step) {
      var _this2 = this;

      if (!step) return;
      this.introHelper.goToStep(step, this.steps[step - 1]);
      this.$nextTick(function () {
        if (_this2.steps[step - 1] && _this2.steps[step - 1].tools) {
          _this2.steps[step - 1].tools();
        }
      });
    }
    /**
     * 退出回掉
     */

  }, {
    key: "exitCallBack",
    value: function exitCallBack(step) {
      if (step === 7) {
        this.innerStep = 0;
        this.$emit('change', this.innerStep);
      }
    }
  }, {
    key: "created",
    value: function created() {
      this.introHelper = new _introjsHelper.default(); // (window as any).introHelper = this.introHelper;

      this.introHelper.exitCallBack = this.exitCallBack;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.setStep(this.step);
    }
  }, {
    key: "destroyed",
    value: function destroyed() {
      this.introHelper.exit();
    }
  }, {
    key: "render",
    value: function render(h) {
      return h('div', {
        class: _defineProperty({}, this.prefixCls, true)
      }, [h(_container.default, {
        props: {
          container: this.container,
          step: this.innerStep
        }
      })]);
    }
  }]);

  return ReportGuide;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportGuide.prototype, "step", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportGuide.prototype, "container", void 0);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportGuide.prototype, "initStep", void 0);

__decorate([(0, _vuePropertyDecorator.Provide)()], ReportGuide.prototype, "setStep", null);

ReportGuide = __decorate([(0, _vuePropertyDecorator.Component)({
  name: 'h3-yun-report-guide',
  components: {}
})], ReportGuide);
var _default = ReportGuide;
exports.default = _default;