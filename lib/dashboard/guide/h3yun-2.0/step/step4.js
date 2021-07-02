"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _antdVue = require("@h3/antd-vue");

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

var ReportStep = /*#__PURE__*/function (_Vue) {
  _inherits(ReportStep, _Vue);

  var _super = _createSuper(ReportStep);

  function ReportStep() {
    var _this;

    _classCallCheck(this, ReportStep);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-yun-guide-step-4";
    _this.filterPrefixCls = "h3-report-filter-modal";
    _this.value = true;
    _this.parent = null;
    return _this;
  }

  _createClass(ReportStep, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return this.step === 6 && h("a-modal", {
        attrs: {
          okText: "确定",
          cancelText: "取消",
          title: "设置过滤条件",
          width: "520px",
          destroyOnClose: "true",
          centered: "true",
          mask: "false",
          visible: this.value,
          wrapClassName: this.prefixCls
        },
        "class": "".concat(this.prefixCls, "-body"),
        on: {
          "ok": this.handleOk,
          "cancel": this.handleCancel
        }
      }, [h("div", {
        "class": ["".concat(this.filterPrefixCls)]
      }, [h("div", {
        "class": ["".concat(this.filterPrefixCls, "__mask")]
      }), h("div", {
        "class": ["".concat(this.filterPrefixCls, "__title")]
      }, ["\u5B63\u5EA6"]), h("a-select", {
        attrs: {
          "default-value": "jack"
        },
        style: "margin:8px 0; width: 100%"
      }, [h("a-select-option", {
        attrs: {
          value: "jack"
        }
      }, ["\u7B49\u4E8E"])]), h("a-input", {
        attrs: {
          value: "第三季度"
        }
      })])]);
    }
  }, {
    key: "onVisibleChange",
    value: function onVisibleChange(val) {
      if (val === 6) {
        var res = document.getElementsByClassName("h3-report-guide");

        if (res && res[0]) {
          this.parent = res[0];
          this.parent.className += "  h3-report-introjs-parentIndex  ";
        }
      }
    }
  }, {
    key: "handleOk",
    value: function handleOk() {
      if (this.parent) {
        this.parent.classList.remove("h3-report-introjs-parentIndex");
      }

      this.value = false; // 关闭第二步新手引导 弹出第一部弹窗 聚焦第三步

      this.setStep(7);
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {}
  }, {
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "destroyed",
    value: function destroyed() {}
  }]);

  return ReportStep;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportStep.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: false
})], ReportStep.prototype, "visible", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], ReportStep.prototype, "step", void 0);

__decorate([(0, _vuePropertyDecorator.Inject)({
  default: function _default() {}
})], ReportStep.prototype, "setStep", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("step")], ReportStep.prototype, "onVisibleChange", null);

ReportStep = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-yun-guide-step-4",
  components: {
    AModal: _antdVue.Modal,
    AInput: _antdVue.Input,
    AIcon: _antdVue.Icon,
    ASelect: _antdVue.Select,
    ASelectOption: _antdVue.Select.Option
  }
})], ReportStep);
var _default2 = ReportStep;
exports.default = _default2;