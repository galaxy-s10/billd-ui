"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/select/style/css");

var _select = _interopRequireDefault(require("ant-design-vue/lib/select"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _colors = _interopRequireDefault(require("../../enum/colors"));

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

// import { divide } from "lodash";
var ColorSelect = /*#__PURE__*/function (_Vue) {
  _inherits(ColorSelect, _Vue);

  var _super = _createSuper(ColorSelect);

  function ColorSelect() {
    var _this;

    _classCallCheck(this, ColorSelect);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-color-select";
    return _this;
  }

  _createClass(ColorSelect, [{
    key: "themes",
    get: function get() {
      return this.colorArray ? this.colorArray : _colors.default;
    }
  }, {
    key: "innerValue",
    get: function get() {
      console.log("get", this.value);
      return this.value;
    },
    set: function set(val) {
      console.log("set", val);
      this.$emit("input", val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("a-select", {
        attrs: {
          placeholder: "请选择图表配色",
          notFoundContent: "无匹配结果",
          value: this.innerValue,
          getPopupContainer: this.getPopupContainer // onChange={this.onChange}

        },
        "class": "".concat(this.prefixCls, "__select"),
        on: {
          "change": this.onChange
        }
      }, [this.themes.map(function (item) {
        return h("a-select-option", {
          key: item.type
        }, [item.colors.map(function (c, index) {
          return index < 6 ? h("div", [h("div", {
            "class": "".concat(_this2.colorSize, "-color"),
            style: "backgroundColor: ".concat(c)
          })]) : "";
        })]);
      })])]);
    }
  }, {
    key: "getPopupContainer",
    value: function getPopupContainer() {
      return this.$el;
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      // value 是type
      var val = {
        type: value,
        colors: this.themes.find(function (i) {
          return i.type === value;
        }).colors || []
      }; // this.innerValue = value;

      this.$emit("input", value);
      this.$emit("change", value);
      this.$emit("onChange", val);
    }
  }]);

  return ColorSelect;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: ""
})], ColorSelect.prototype, "value", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: "small"
})], ColorSelect.prototype, "colorSize", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], ColorSelect.prototype, "colorArray", void 0);

ColorSelect = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-color-select",
  components: {
    ASelect: _select.default,
    ASelectOption: _select.default.Option
  }
})], ColorSelect);
var _default = ColorSelect;
exports.default = _default;