"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _antdVue = require("@h3/antd-vue");

var _index = _interopRequireDefault(require("./index"));

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

var ReportGuideEntry = /*#__PURE__*/function (_Vue) {
  _inherits(ReportGuideEntry, _Vue);

  var _super = _createSuper(ReportGuideEntry);

  function ReportGuideEntry() {
    var _this;

    _classCallCheck(this, ReportGuideEntry);

    _this = _super.apply(this, arguments);
    _this.innerStep = 0;
    _this.guide = null;
    return _this;
  }

  _createClass(ReportGuideEntry, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", [h("a-tooltip", {
        attrs: {
          placement: "top",
          title: "新手引导"
        }
      }, [h("div", {
        "class": "h3-report-guide-entry",
        on: {
          "click": this.startUserGuide(1)
        }
      }, [h("span", {
        "class": "h3yun_All bulb-o"
      })])]), this.innerStep && h("div", {
        "class": "h3-report-guide-exit",
        on: {
          "click": this.startUserGuide(0)
        }
      }, [h("i", {
        "class": "h3yun_All poweroff-o"
      }), "\u9000\u51FA\u65B0\u624B\u6307\u5F15"])]);
    }
  }, {
    key: "watchConfig",
    value: function watchConfig(val, oldval) {
      var _this2 = this;

      if (val && !oldval && this.config.primaryGuide && !this.guide) {
        this.$nextTick(function () {
          _this2.startUserGuide(1);
        });
      }
    }
    /**
     * 开始新手引导
     */

  }, {
    key: "startUserGuide",
    value: function startUserGuide() {
      var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (step === 1) {
        this.setZindex();
        this.$emit("update-guide", "primaryGuide");
      }

      this.innerStep = step;

      if (step === 0 && this.guide) {
        // 关闭新手引导
        this.resetZindex(); // console.log(this.guide);
        // console.log(window.introHelper);
        // window.introHelper.exit();
        // window.introHelper = null;

        this.guide.close();
        return;
      }

      if (this.container) {
        this.guide = (0, _index.default)({
          container: this.container,
          step: step,
          store: this.$store,
          change: this.changeStep
        });
      }
    }
    /**
     * 步数更改回掉
     */

  }, {
    key: "changeStep",
    value: function changeStep(step) {
      this.innerStep = step;

      if (!step) {
        this.startUserGuide(0);
      }
    }
    /**
     * 递归去掉层级
     */

  }, {
    key: "setZindex",
    value: function setZindex() {
      // 强制格式化 报表的层级
      var dom = document.getElementsByClassName("h3-report-designer");
      var design = dom[0];

      if (design) {
        var parent = design.parentElement;

        while (parent.tagName !== "BODY") {
          var zindex = window.getComputedStyle(parent).zIndex;

          if (zindex !== "" && zindex !== "auto") {
            console.log(parent.style.zIndex);
            parent.className += "  h3-report-introjs-parentIndex  ";
          }

          parent = parent.parentElement;
        }
      }
    }
    /**
     * 重置样式层级
     */

  }, {
    key: "resetZindex",
    value: function resetZindex() {
      // 第二步之后移除格式化样式
      var domList = document.getElementsByClassName("h3-report-introjs-parentIndex");

      if (domList && domList.length > 0) {
        for (var i = 0; i < domList.length; i++) {
          domList[i].classList.remove("h3-report-introjs-parentIndex");
        }
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {}
  }]);

  return ReportGuideEntry;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ReportGuideEntry.prototype, "container", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {}
})], ReportGuideEntry.prototype, "config", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("container")], ReportGuideEntry.prototype, "watchConfig", null);

ReportGuideEntry = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-guide-entry",
  components: {
    ATooltip: _antdVue.Tooltip
  }
})], ReportGuideEntry);
var _default2 = ReportGuideEntry;
exports.default = _default2;