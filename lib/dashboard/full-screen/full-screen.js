"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vuePropertyDecorator = require("vue-property-decorator");

var _vuexClass = require("vuex-class");

var _element = _interopRequireDefault(require("../element"));

var _reportState = require("../../enum/report-state");

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

var DashboardFullScreen = /*#__PURE__*/function (_Vue) {
  _inherits(DashboardFullScreen, _Vue);

  var _super = _createSuper(DashboardFullScreen);

  function DashboardFullScreen() {
    var _this;

    _classCallCheck(this, DashboardFullScreen);

    _this = _super.apply(this, arguments);
    _this.prefixCls = "h3-dashboard-full-screen";
    return _this;
  }

  _createClass(DashboardFullScreen, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("element-wrap", {
        ref: "elementWrap",
        "class": "prefixCls",
        style: "getFullScreenElementStyle",
        attrs: {
          element: "fullScreenElement",
          global: "global",
          status: "status",
          "full-screen": "true",
          "element-index": "elementIndex",
          narrow: "narrow"
        },
        scopedSlots: {
          title: function title() {
            return _this2.$scopedSlots.title({});
          },
          extra: function extra() {
            return _this2.$scopedSlots.extra({});
          }
        }
      });
    }
  }, {
    key: "fullScreenElement",
    get: function get() {
      var element = JSON.parse(JSON.stringify(this.element));
      element.uid = "full-".concat(element.uid);
      return element;
    }
    /**
     * 缩小
     */

  }, {
    key: "narrow",
    value: function narrow(obj) {
      this.$emit("narrow", obj);
      this.$emit("destroy");
    }
    /**
     * 获取全屏图表样式
     */

  }, {
    key: "getFullScreenElementStyle",
    get: function get() {
      return this.getItemStyle.indexOf(_paint.Color.THEMEELEMENTCOATVALUE) > -1 ? this.getStyles : this.getItemStyle;
    }
    /**
     * 获取图表样式
     */

  }, {
    key: "getItemStyle",
    get: function get() {
      var chart = this.element;
      var value = chart.styles && chart.styles.elementCoat && chart.styles.elementCoat.value || this.global.styles.elementCoat.value;
      return "background-color:".concat(value);
    }
    /**
     * 获取仪表盘背景色
     */

  }, {
    key: "getStyles",
    get: function get() {
      if (!this.global || !this.global.styles.paintCoatTheme) return true;
      var paintCoat = this.global.styles.paintCoat;
      var picOpt;

      if (this.global.styles.paintCoatTheme === "default") {
        if (paintCoat.type === "bgColor") {
          picOpt = {
            backgroundColor: paintCoat.value
          };
        } else if (this.global.styles.paintCoat.type === "bgPicture") {
          picOpt = {
            backgroundImage: "url(" + paintCoat.value + ")",
            backgroundSize: "100% 100%"
          };
        }
      } else {
        var bgUrl = require("@h3/report/basics/assets/color-setting/theme/" + this.global.styles.paintCoatTheme + "-bg.png");

        picOpt = {
          backgroundImage: "url(" + bgUrl + ")",
          backgroundSize: "100% 100%"
        };
      }

      return picOpt;
    }
  }]);

  return DashboardFullScreen;
}(_vuePropertyDecorator.Vue);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], DashboardFullScreen.prototype, "element", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], DashboardFullScreen.prototype, "global", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: null
})], DashboardFullScreen.prototype, "corpId", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: true
})], DashboardFullScreen.prototype, "refresh", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: _reportState.ReportState.DESIGN
})], DashboardFullScreen.prototype, "status", void 0);

__decorate([(0, _vuePropertyDecorator.Prop)({
  default: 0
})], DashboardFullScreen.prototype, "elementIndex", void 0);

DashboardFullScreen = __decorate([(0, _vuePropertyDecorator.Component)({
  name: "h3-dashboard-full-screen",
  components: {
    ElementWrap: _element.default
  }
})], DashboardFullScreen);
var _default = DashboardFullScreen;
exports.default = _default;