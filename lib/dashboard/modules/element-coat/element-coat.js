"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("ant-design-vue/lib/radio/style/css");

var _radio = _interopRequireDefault(require("ant-design-vue/lib/radio"));

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _vcolorpicker = _interopRequireDefault(require("vcolorpicker"));

var _vueVClickoutside = _interopRequireDefault(require("vue-v-clickoutside"));

var _color = _interopRequireDefault(require("../mixins/color"));

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

var ReportPro = (0, _vuexClass.namespace)("report");

var ReportElementCoatModule = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportElementCoatModule, _Mixins);

  var _super = _createSuper(ReportElementCoatModule);

  function ReportElementCoatModule() {
    var _this;

    _classCallCheck(this, ReportElementCoatModule);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-element-coat"; // 组件背景Options

    _this.moduleRadioOptions = [{
      name: "背景颜色",
      value: "bgColor"
    } // { name: '背景图片', value: 'bgPicture' },
    ];
    return _this;
  }

  _createClass(ReportElementCoatModule, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, this.comPrefixCls]
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__header")]
      }, [h("label", ["\u7EC4\u4EF6\u80CC\u666F"]), h("div", {
        "class": "".concat(this.prefixCls, "__body")
      }, [h("div", {
        "class": "left-wrap"
      }, [h("label", ["\u80CC\u666F\u989C\u8272"])]), h("div", {
        "class": "right-wrap"
      }, [h("div", {
        "class": "".concat(this.prefixCls, "__color-wrap")
      }, [h("colorPicker", {
        ref: "elementRef",
        directives: [{
          name: "clickoutside",
          value: this.handleFunction
        }],
        attrs: {
          value: this.data.value || "",
          defaultColor: this.getDefaultColor
        },
        "class": "".concat(this.prefixCls, "__color-picker"),
        on: {
          "change": this.colorChange
        }
      })])])])])]);
    }
  }, {
    key: "getDefaultColor",
    get: function get() {
      return this.module.defaultColor || this.global.styles.elementCoat.value;
    }
  }, {
    key: "handleFunction",
    value: function handleFunction() {
      this.$refs.elementRef.openStatus = false;
    }
    /**
     * 组件背景 - change
     * @param e
     */

  }, {
    key: "moduleRadioChange",
    value: function moduleRadioChange(e) {// this.radioValue = e.target.value;
    }
    /**
     * 组件背景 - color-picker - change
     * @param value
     */

  }, {
    key: "colorChange",
    value: function colorChange(value) {
      if (value === this.global.styles.elementCoat.value) {
        this.data.value = null;
      } else {
        this.$set(this.data, "type", "bgColor");
        this.$set(this.data, "value", value);
      }

      this.$emit("element-coat-color-change", {
        type: "bgColor",
        value: value
      });
    }
  }]);

  return ReportElementCoatModule;
}((0, _vuePropertyDecorator.Mixins)(_color.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {
      type: null,
      value: null
    };
  }
}) // data!: H3.Report.ElementCoat;
, (0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportElementCoatModule.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportElementCoatModule.prototype, "module", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportElementCoatModule.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportElementCoatModule.prototype, "comPrefixCls", void 0);

__decorate([ReportPro.State("global")], ReportElementCoatModule.prototype, "global", void 0);

ReportElementCoatModule = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-element-coat",
  components: {
    colorPicker: _vcolorpicker.default.colorPicker,
    ARadio: _radio.default,
    ARadioGroup: _radio.default.Group
  },
  directives: {
    clickoutside: _vueVClickoutside.default
  }
})], ReportElementCoatModule);
var _default2 = ReportElementCoatModule;
exports.default = _default2;