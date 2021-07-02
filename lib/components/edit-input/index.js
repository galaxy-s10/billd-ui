"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("ant-design-vue/lib/tooltip"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _global = require("../../utils/global");

var _vueFragment = require("vue-fragment");

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

var EditInput = /*#__PURE__*/function (_Vue) {
  _inherits(EditInput, _Vue);

  var _super = _createSuper(EditInput);

  function EditInput() {
    var _this;

    _classCallCheck(this, EditInput);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-edit-input";
    _this.innerValue = _this.inputValue;
    return _this;
  }

  _createClass(EditInput, [{
    key: "handleValue",
    value: function handleValue(newVal, oldVal) {
      // 处理输入框宽度
      this.handleInputWidth(newVal);
    }
    /**
     * tooltip挂载
     */

  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.$el.parentElement;
    }
    /**
     * 输入框input事件
     * @param e
     */

  }, {
    key: "inputFun",
    value: function inputFun(e) {
      var val = e.target.value;

      if (val && val.length > this.maxLength) {
        return;
      }

      this.innerValue = val;
      this.handleInputWidth(this.innerValue);
      this.$emit("inputFun", this.innerValue);
    }
    /**
     * 输入框焦点事件
     * @param e
     */

  }, {
    key: "inputFocus",
    value: function inputFocus(e) {
      var _this2 = this;

      this.$nextTick(function () {
        var element = _this2.$el.querySelector(".h3-edit-input__main");

        (0, _global.setCaretPosition)(element, element.value.length);
      });
      this.$emit("inputFocus", e.target.value);
    }
    /**
     * 输入框失去焦点事件
     * @param e
     */

  }, {
    key: "inputBlur",
    value: function inputBlur(e) {
      this.$emit("inputBlur", this.innerValue);
    }
    /**
     * 处理输入框宽度
     */

  }, {
    key: "handleInputWidth",
    value: function handleInputWidth(val) {
      var span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.fontSize = "14px";
      span.style.display = "inline-block";
      document.body.appendChild(span);
      span.innerText = this.innerValue || this.inputValue;
      var inputEl = document.getElementById(this.inputID);

      if (inputEl) {
        // 修改input宽度
        inputEl.style.width = span.clientWidth + 5 + "px"; // 超过最大宽度，添加省略号css

        if (span.clientWidth > this.maxWidthValue) {
          inputEl.style.textOverflow = "ellipsis";
        } else {
          inputEl.style.textOverflow = "inherit";
        }
      }

      document.body.removeChild(span);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var h = arguments[0];
      return h("div", {
        "class": "".concat(this.prefixCls)
      }, [h("a-tooltip", {
        attrs: {
          getPopupContainer: this.getContainer,
          placement: "top"
        }
      }, [this.inputValue.length > 11 ? h("a-vue-fragment", {
        slot: "title"
      }, [h("span", [this.inputValue])]) : "", this.edit ? h("input", {
        ref: "reportEditInput",
        "class": "".concat(this.prefixCls, "__main"),
        attrs: {
          type: "text",
          id: "".concat(this.inputID),
          maxlength: "".concat(this.maxLength)
        },
        style: "'maxWidth': ".concat(this.maxWidthValue, "px;'minWidth': ").concat(this.minWidthValue, "px"),
        domProps: {
          "value": "".concat(this.innerValue)
        },
        on: {
          "input": function input(e) {
            return _this3.inputFun(e);
          },
          "blur": function blur(e) {
            return _this3.inputBlur(e);
          },
          "focus": function focus(e) {
            return _this3.inputFocus(e);
          }
        }
      }) : h("div", {
        style: "'maxWidth': ".concat(this.maxWidthValue, "px;'minWidth': ").concat(this.minWidthValue, "px"),
        "class": "".concat(this.prefixCls, "__static")
      }, [this.inputValue])])]);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      // 处理输入框宽度
      if (this.edit) {
        this.handleInputWidth();
      }
    }
  }]);

  return EditInput;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 250;
  }
})], EditInput.prototype, "maxWidthValue", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return 50;
  }
})], EditInput.prototype, "minWidthValue", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], EditInput.prototype, "inputValue", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], EditInput.prototype, "inputID", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 9999
})], EditInput.prototype, "maxLength", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], EditInput.prototype, "edit", void 0);

__decorate([(0, _vuePropertyDecorator.Watch)("inputValue")], EditInput.prototype, "handleValue", null);

EditInput = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-edit-input",
  components: {
    ATooltip: _tooltip.default,
    AVueFragment: _vueFragment.Fragment
  }
})], EditInput);
var _default2 = EditInput;
exports.default = _default2;