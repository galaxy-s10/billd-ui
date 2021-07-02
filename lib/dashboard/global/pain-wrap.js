"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _index = _interopRequireDefault(require("../modules/paint-coat-theme/index"));

var _index2 = _interopRequireDefault(require("../modules/paint-coat/index"));

var _elementCoat = _interopRequireDefault(require("../modules/element-coat"));

var _fontSetting = _interopRequireDefault(require("../modules/font-setting"));

var _paint = require("../../enum/paint");

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

var ReportPaintWrapModule = /*#__PURE__*/function (_Vue) {
  _inherits(ReportPaintWrapModule, _Vue);

  var _super = _createSuper(ReportPaintWrapModule);

  function ReportPaintWrapModule() {
    var _this;

    _classCallCheck(this, ReportPaintWrapModule);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-report-paint-wrap";
    _this.fontSettingModule = {
      title: "字体设置",
      display: true
    };
    return _this;
  }

  _createClass(ReportPaintWrapModule, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": this.prefixCls
      }, [h("paint-coat-theme"), h("paint-coat", {
        attrs: {
          chart: this.global,
          data: this.global.styles.paintCoat,
          module: this.globalModules.styles.paintCoat
        }
      }), h("div", {
        "class": "".concat(this.prefixCls, "__element-coat")
      }, [h("element-coat", {
        attrs: {
          chart: this.global,
          data: this.global.styles.elementCoat,
          module: this.globalModules.styles.elementCoat
        },
        on: {
          "element-coat-color-change": this.elementCoatColorChange
        }
      }), h("div", {
        "class": "".concat(this.prefixCls, "__font-setting")
      }, [h("font-setting", {
        attrs: {
          chart: this.global,
          module: this.globalModules.styles.fontSetting,
          data: this.global.styles.fontSetting
        }
      })])])]);
    }
    /**
     * 获取背景色改变事件
     * @param elementCoat
     */

  }, {
    key: "elementCoatColorChange",
    value: function elementCoatColorChange(elementCoat) {
      if (this.global.styles.paintCoatTheme !== _paint.ThemeType.DEFAULT) {
        this.global.styles.elementCoat = elementCoat;
        this.global.styles.paintCoatTheme = _paint.ThemeType.DEFAULT;
        this.global.styles.paintCoat.type = _paint.CoatType.BGCOLOR;
        this.global.styles.paintCoat.value = _paint.Color.PAINTCOATVALUE;
        this.global.styles.fontSetting.fontColor = _paint.Color.FONTCOLOR;
        this.global.styles.fontSetting.titleColor = _paint.Color.TITLECOLOR;
      }
    }
  }]);

  return ReportPaintWrapModule;
}(_vuePropertyDecorator.Vue);

__decorate([ReportPro.State("global")], ReportPaintWrapModule.prototype, "global", void 0);

__decorate([ReportPro.State("globalModules")], ReportPaintWrapModule.prototype, "globalModules", void 0);

ReportPaintWrapModule = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-report-paint-wrap",
  components: {
    paintCoatTheme: _index.default,
    paintCoat: _index2.default,
    ElementCoat: _elementCoat.default,
    FontSetting: _fontSetting.default
  }
})], ReportPaintWrapModule);
var _default = ReportPaintWrapModule;
exports.default = _default;