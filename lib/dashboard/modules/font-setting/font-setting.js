"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _vcolorpicker = _interopRequireDefault(require("vcolorpicker"));

var _vueVClickoutside = _interopRequireDefault(require("vue-v-clickoutside"));

var _color = _interopRequireDefault(require("../mixins/color"));

var _types = require("../../../store/dashboard/types");

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

var ReportFontSettingModule = /*#__PURE__*/function (_Mixins) {
  _inherits(ReportFontSettingModule, _Mixins);

  var _super = _createSuper(ReportFontSettingModule);

  function ReportFontSettingModule() {
    var _this;

    _classCallCheck(this, ReportFontSettingModule);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-font-color";
    return _this;
  }

  _createClass(ReportFontSettingModule, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": [this.prefixCls, this.comPrefixCls]
      }, [h("div", {
        "class": ["".concat(this.prefixCls, "__header")]
      }, [h("label", [this.module.title])]), h("div", {
        "class": "".concat(this.prefixCls, "__body")
      }, [h("label", ["\u6807\u9898\u989C\u8272"]), h("div", {
        "class": "".concat(this.prefixCls, "__color-wrap"),
        attrs: {
          id: "title-color-id"
        }
      }, [h("colorPicker", {
        ref: "titleColorRef",
        directives: [{
          name: "clickoutside",
          value: this.titleColorHandle
        }],
        attrs: {
          value: this.data.titleColor || "",
          defaultColor: this.module.defaultTitleColor || this.global.styles.fontSetting.titleColor
        },
        on: {
          "change": this.titleColorChange
        }
      })])]), h("div", {
        "class": "".concat(this.prefixCls, "__body")
      }, [h("label", ["\u5B57\u4F53\u989C\u8272"]), h("div", {
        "class": "".concat(this.prefixCls, "__color-wrap"),
        attrs: {
          id: "font-color-id"
        }
      }, [h("colorPicker", {
        ref: "fontColorRef" // v-clickoutside="fontColorHandle"
        ,
        attrs: {
          value: this.data.fontColor || "",
          defaultColor: this.module.defaultFontColor || this.global.styles.fontSetting.fontColor
        },
        on: {
          "change": this.fontColorChange
        }
      })])])]);
    }
  }, {
    key: "fontColorHandle",
    value: function fontColorHandle() {
      this.$refs.fontColorRef.openStatus = false;
    }
  }, {
    key: "titleColorHandle",
    value: function titleColorHandle() {
      this.$refs.titleColorRef.openStatus = false;
    }
    /**
     * fontColorChange - change
     * @param value
     */

  }, {
    key: "fontColorChange",
    value: function fontColorChange(value) {
      if (value === this.global.styles.fontSetting.fontColor) {
        this.$set(this.data, "fontColor", null);
      } else {
        this.$set(this.data, "fontColor", value);
      }

      this.resizeChartView({
        chart: this.chart,
        type: "view"
      });
    }
    /**
     * titleColor - change
     * @param value
     */

  }, {
    key: "titleColorChange",
    value: function titleColorChange(value) {
      if (value === this.global.styles.fontSetting.titleColor) {
        this.$set(this.data, "titleColor", null);
      } else {
        this.$set(this.data, "titleColor", value);
      }
    }
  }]);

  return ReportFontSettingModule;
}((0, _vuePropertyDecorator.Mixins)(_color.default));

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportFontSettingModule.prototype, "data", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportFontSettingModule.prototype, "chart", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return {};
  }
})], ReportFontSettingModule.prototype, "module", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: function _default() {
    return "";
  }
})], ReportFontSettingModule.prototype, "comPrefixCls", void 0);

__decorate([ReportPro.State("global")], ReportFontSettingModule.prototype, "global", void 0);

__decorate([ReportPro.Mutation(_types.ReportMutation.RESIZECHARTVIEW)], ReportFontSettingModule.prototype, "render", null);

ReportFontSettingModule = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-font-color",
  components: {
    colorPicker: _vcolorpicker.default.colorPicker
  },
  directives: {
    clickoutside: _vueVClickoutside.default
  }
})], ReportFontSettingModule);
var _default2 = ReportFontSettingModule;
exports.default = _default2;