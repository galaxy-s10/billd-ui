"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/button/style/css");

var _button = _interopRequireDefault(require("ant-design-vue/lib/button"));

require("ant-design-vue/lib/radio/style/css");

var _radio = _interopRequireDefault(require("ant-design-vue/lib/radio"));

require("ant-design-vue/lib/modal/style/css");

var _modal = _interopRequireDefault(require("ant-design-vue/lib/modal"));

var _vuePropertyDecorator = require("vue-property-decorator");

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

// import './style/index.less';
var ReportEasyDetail = /*#__PURE__*/function (_Vue) {
  _inherits(ReportEasyDetail, _Vue);

  var _super = _createSuper(ReportEasyDetail);

  function ReportEasyDetail() {
    var _this;

    _classCallCheck(this, ReportEasyDetail);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-help-modal";
    _this.activeIndex = 0;
    return _this;
  }

  _createClass(ReportEasyDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("a-modal", {
        attrs: {
          okText: "关闭",
          cancelText: "取消",
          visible: this.value,
          destroyOnClose: true,
          centered: true,
          maskClosable: false,
          title: this.title,
          wrapClassName: this.prefixCls,
          width: "800px"
        },
        on: {
          "cancel": function cancel() {
            return _this2.handleCancel;
          }
        }
      }, [this.options.length > 1 ? h("div", {
        "class": "".concat(this.prefixCls, "__head")
      }, [h("a-radio-group", {
        attrs: {
          buttonStyle: "solid",
          model: {
            value: _this2.activeIndex,
            callback: function callback($$v) {
              _this2.activeIndex = $$v;
            }
          }
        }
      }, [this.options.map(function (item, index) {
        h("a-radio-button", {
          attrs: {
            value: index
          },
          on: {
            "click": function click() {
              return _this2.onChangeRadio(index);
            }
          }
        }, [" ", item.label, " "]);
      })])]) : "", this.options.length > 0 ? h("div", [h("div", {
        "class": ["".concat(this.prefixCls, "__content"), this.options.length > 1 ? "".concat(this.prefixCls, "__content--multi") : ""],
        domProps: {
          "innerHTML": this.options[this.activeIndex].contentHtml
        }
      })]) : "", this.options.length > 1 && this.activeIndex !== 0 ? h("div", {
        "class": "".concat(this.prefixCls, "__turn-left"),
        on: {
          "click": function click() {
            return _this2.changeStep(0);
          }
        }
      }, [h("i", {
        "class": "h3yun_All left-o"
      })]) : "", this.options.length > 1 && this.activeIndex !== this.options.length - 1 ? h("div", {
        "class": "".concat(this.prefixCls, "__turn-right"),
        on: {
          "click": function click() {
            return _this2.changeStep(1);
          }
        }
      }, [h("i", {
        "class": "h3yun_All right-o"
      })]) : "", this.$scopedSlots.footer ? this.$scopedSlots.footer({}) : h("a-button", {
        key: "submit",
        attrs: {
          type: "primary"
        },
        on: {
          "click": function click() {
            return _this2.handleOk;
          }
        }
      }, ["\u5173\u95ED"])]);
    }
    /**
     * 点击不同的选项
     */

  }, {
    key: "onChangeRadio",
    value: function onChangeRadio(index) {
      this.activeIndex = index;
    }
    /**
     * 点击确认回调
     */

  }, {
    key: "handleOk",
    value: function handleOk() {
      this.activeIndex = 0;
      this.$emit("ok");
      this.$emit("input", false);
    }
    /**
     * 取消回调
     */

  }, {
    key: "handleCancel",
    value: function handleCancel() {
      this.activeIndex = 0;
      this.$emit("cancel");
      this.$emit("input", false);
    }
    /**
     * 更改
     * @param state 更改步骤状态 0 为上一步 1为下一步
     */

  }, {
    key: "changeStep",
    value: function changeStep(state) {
      if (!state) {
        this.activeIndex -= 1;
      } else {
        this.activeIndex += 1;
      }
    }
  }]);

  return ReportEasyDetail;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return false;
  }
})], ReportEasyDetail.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "功能说明";
  }
})], ReportEasyDetail.prototype, "title", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return [{
      label: "第一个",
      value: "key1",
      contentHtml: "hhh"
    }, {
      label: "第2个",
      value: "key2",
      contentHtml: "hhh"
    }];
  }
})], ReportEasyDetail.prototype, "options", void 0);

ReportEasyDetail = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-help-modal",
  components: {
    AModal: _modal.default,
    ARadioButton: _radio.default.Button,
    ARadioGroup: _radio.default.Group,
    AButton: _button.default
  }
})], ReportEasyDetail);
var _default2 = ReportEasyDetail;
exports.default = _default2;